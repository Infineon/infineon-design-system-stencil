import {
	type DefaultTreeAdapterTypes,
	type Token,
	defaultTreeAdapter,
	parseFragment,
} from "parse5";

import { DiagnosticCode } from "../../core/diagnostic.js";
import type {
	MigrationDiagnostic,
	RenamePropStepDefinition,
	TextEdit,
} from "../../core/types.js";

type HtmlNode = DefaultTreeAdapterTypes.Node;
type HtmlElement = DefaultTreeAdapterTypes.Element;
type HtmlParentNode = DefaultTreeAdapterTypes.ParentNode;
type HtmlTemplate = DefaultTreeAdapterTypes.Template;
type HtmlElementLocation = Token.ElementLocation;
type HtmlAttributeLocation = Token.Location;

export interface HtmlTemplateAnalysis {
	edits: TextEdit[];
	diagnostics: MigrationDiagnostic[];
}

const getAttributeNameRange = (
	content: string,
	location: HtmlAttributeLocation,
	expectedNormalizedName: string,
): { start: number; end: number } | null => {
	const attributeSource = content.slice(
		location.startOffset,
		location.endOffset,
	);

	const match = /^[^\s=/>]+/.exec(attributeSource);
	if (!match) {
		return null;
	}

	const rawName = match[0];

	if (rawName.toLowerCase() !== expectedNormalizedName.toLowerCase()) {
		return null;
	}

	return {
		start: location.startOffset,
		end: location.startOffset + rawName.length,
	};
};

export const analyseHtmlTemplate = (
	content: string,
	filePath: string,
	step: RenamePropStepDefinition,
): HtmlTemplateAnalysis => {
	const { operation } = step;
	const edits: TextEdit[] = [];
	const diagnostics: MigrationDiagnostic[] = [];

	let fragment: HtmlNode;
	try {
		fragment = parseFragment(content, {
			sourceCodeLocationInfo: true,
		});
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		return {
			edits: [],
			diagnostics: [
				{
					code: DiagnosticCode.PARSE_FAILED,
					severity: "error",
					message: `Cannot parse HTML file: ${message}`,
					operationId: operation.id,
					filePath,
					suggestion:
						"Fix the malformed HTML before running the migration.",
				},
			],
		};
	}

	const createUnsafeAttributeDiagnostic = (
		location: HtmlAttributeLocation,
	): MigrationDiagnostic => ({
		code: DiagnosticCode.PARSE_FAILED,
		severity: "error",
		message: `Cannot safely locate attribute "${operation.from}" on <${operation.component}>.`,
		operationId: operation.id,
		filePath,
		start: location.startOffset,
		end: location.endOffset,
		suggestion: "Fix the malformed HTML start tag before running the migration.",
	});

	const analyseElement = (element: HtmlElement): void => {
		const tagName = defaultTreeAdapter.getTagName(element);

		if (tagName !== operation.component) {
			return;
		}

		const location = defaultTreeAdapter.getNodeSourceCodeLocation(
			element,
		) as HtmlElementLocation | null;

		if (!location) {
			return;
		}

		const sourceAttributeLocation = location.attrs?.[operation.from];
		const targetAttributeLocation = location.attrs?.[operation.to];

		if (!sourceAttributeLocation) {
			return;
		}

		const sourceNameRange = getAttributeNameRange(
			content,
			sourceAttributeLocation,
			operation.from,
		);

		if (!sourceNameRange) {
			diagnostics.push(createUnsafeAttributeDiagnostic(sourceAttributeLocation));
			return;
		}

		if (targetAttributeLocation) {
			diagnostics.push({
				code: DiagnosticCode.TARGET_PROP_ALREADY_EXISTS,
				severity: "error",
				message: `Cannot rename "${operation.from}" to "${operation.to}" because "${operation.to}" already exists on <${operation.component}>.`,
				operationId: operation.id,
				filePath,
				start: sourceNameRange.start,
				end: sourceNameRange.end,
				suggestion:
					"Remove or rename the conflicting attribute before running the migration.",
			});
			return;
		}

		edits.push({
			start: sourceNameRange.start,
			end: sourceNameRange.end,
			replacement: operation.to,
			operationId: operation.id,
		});
	};

	const visitChildren = (node: HtmlNode): void => {
		if ("childNodes" in node) {
			for (const childNode of defaultTreeAdapter.getChildNodes(
				node as HtmlParentNode,
			)) {
				visitNode(childNode);
			}
		}

		if (
			defaultTreeAdapter.isElementNode(node) &&
			defaultTreeAdapter.getTagName(node) === "template"
		) {
			const contentFragment = defaultTreeAdapter.getTemplateContent(
				node as HtmlTemplate,
			);

			for (const childNode of defaultTreeAdapter.getChildNodes(contentFragment)) {
				visitNode(childNode);
			}
		}
	};

	const visitNode = (node: HtmlNode): void => {
		if (defaultTreeAdapter.isElementNode(node)) {
			analyseElement(node);
		}

		visitChildren(node);
	};

	visitNode(fragment);

	return { edits, diagnostics };
};
