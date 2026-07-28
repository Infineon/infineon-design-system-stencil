import { createRequire } from "node:module";
import type { JSXAttribute, JSXIdentifier, JSXNamespacedName } from "jscodeshift";

import { DiagnosticCode } from "../../core/diagnostic.js";
import type {
	FileAnalysis,
	MigrationDiagnostic,
	RenamePropStepDefinition,
	TextEdit,
} from "../../core/types.js";
import { kebabToCamelCase, tagNameToReactComponentName } from "../../core/naming.js";
import type { ReactImportResolution } from "./imports.js";

const require = createRequire(import.meta.url);
const jscodeshift: typeof import("jscodeshift") = require("jscodeshift");
const j = jscodeshift.withParser("tsx");

interface SourcePosition {
	line: number;
	column: number;
}

interface SourceLocation {
	start?: SourcePosition;
	end?: SourcePosition;
}

interface LocatedNode {
	loc?: SourceLocation | null;
}

const isJsxIdentifier = (
	name: JSXIdentifier | JSXNamespacedName,
): name is JSXIdentifier => name.type === "JSXIdentifier";

const buildLineOffsetMap = (content: string): number[] => {
	const offsets = [0];
	for (let index = 0; index < content.length; index++) {
		if (content[index] === "\n") {
			offsets.push(index + 1);
		}
	}
	return offsets;
};

const toAbsoluteOffset = (
	position: SourcePosition,
	lineOffsets: number[],
): number => {
	const lineStart = lineOffsets[position.line - 1] ?? 0;
	return lineStart + position.column;
};

const getNodeStart = (
	node: LocatedNode,
	lineOffsets: number[],
): number | undefined => {
	const loc = node.loc;
	if (!loc || !loc.start) {
		return undefined;
	}

	return toAbsoluteOffset(loc.start, lineOffsets);
};

const getAttributeNameRange = (
	attribute: JSXAttribute,
	lineOffsets: number[],
): { start: number; end: number } | null => {
	if (!isJsxIdentifier(attribute.name)) {
		return null;
	}

	const start = getNodeStart(attribute.name as unknown as LocatedNode, lineOffsets);
	if (start === undefined) {
		return null;
	}

	return {
		start,
		end: start + attribute.name.name.length,
	};
};

export const analyseJsxFile = (
	filePath: string,
	content: string,
	baseRevision: number,
	step: RenamePropStepDefinition,
	imports: ReactImportResolution,
): FileAnalysis | null => {
	const { operation } = step;
	// In React/JSX, a component must be imported from an official IFX wrapper
	// to be considered a migration target. The canonical component name alone
	// is not enough because unrelated packages may export components with the
	// same local name.
	const targetComponentNames = new Set<string>(imports.localNames);

	const currentPropName = kebabToCamelCase(operation.from);
	const nextPropName = kebabToCamelCase(operation.to);

	const root = j(content);
	const lineOffsets = buildLineOffsetMap(content);
	const edits: TextEdit[] = [];
	const diagnostics: MigrationDiagnostic[] = [];

	root.find(j.JSXOpeningElement).forEach((path) => {
		const element = path.node as unknown as {
			name?: { type?: string; name?: string };
			attributes?: Array<JSXAttribute & LocatedNode>;
		};

		if (
			element.name?.type !== "JSXIdentifier" ||
			typeof element.name.name !== "string" ||
			!targetComponentNames.has(element.name.name)
		) {
			return;
		}

		const attributes = element.attributes ?? [];
		let sourceAttribute: (JSXAttribute & LocatedNode) | null = null;
		let hasTargetConflict = false;

		for (const attribute of attributes) {
			if (attribute.type !== "JSXAttribute" || !isJsxIdentifier(attribute.name)) {
				continue;
			}

			const attributeName = attribute.name.name;
			if (attributeName === currentPropName) {
				sourceAttribute = attribute;
			}

			if (attributeName === nextPropName) {
				hasTargetConflict = true;
			}
		}

		if (!sourceAttribute) {
			return;
		}

		if (hasTargetConflict) {
			const range = getAttributeNameRange(sourceAttribute, lineOffsets);
			diagnostics.push({
				code: DiagnosticCode.TARGET_PROP_ALREADY_EXISTS,
				severity: "error",
				message: `Cannot rename "${currentPropName}" to "${nextPropName}" because "${nextPropName}" already exists on ${element.name.name}.`,
				operationId: operation.id,
				filePath,
				start: range?.start,
				end: range?.end,
				suggestion: "Remove or rename the conflicting property before running the migration.",
			});
			return;
		}

		const range = getAttributeNameRange(sourceAttribute, lineOffsets);
		if (!range) {
			return;
		}

		edits.push({
			start: range.start,
			end: range.end,
			replacement: nextPropName,
			operationId: operation.id,
		});
	});

	if (edits.length === 0 && diagnostics.length === 0) {
		return null;
	}

	return {
		kind: "modify",
		filePath,
		baseRevision,
		content,
		edits,
		changes: [`prop ${currentPropName} -> ${nextPropName}`],
		diagnostics,
	};
};
