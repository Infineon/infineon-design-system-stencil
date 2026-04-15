import path from "node:path";

import { parseFragment } from "parse5";
import ts from "typescript";

import { collectFilesByExtension } from "../file-system.js";
import { kebabToCamelCase } from "../naming.js";
import type { CodemodRunner, FileChange, RunnerContext } from "../types.js";
import { readFileAndSkipBinary } from "./helpers.js";

const HTML_EXTENSIONS = [".html", ".htm", ".js", ".mjs", ".cjs", ".ts", ".mts", ".cts"];
const HTML_MARKUP_EXTENSIONS = new Set([".html", ".htm"]);
const ATTRIBUTE_API_CALLS = new Set([
	"getAttribute",
	"hasAttribute",
	"removeAttribute",
	"setAttribute",
	"toggleAttribute",
]);

interface Replacement {
	start: number;
	end: number;
	text: string;
	label: string;
}

interface OffsetRange {
	startOffset: number;
	endOffset: number;
}

interface HtmlElementLocation extends OffsetRange {
	startTag?: OffsetRange;
	endTag?: OffsetRange;
	attrs?: Record<string, OffsetRange>;
}

interface HtmlAttributeNode {
	name: string;
	value: string;
}

interface HtmlNode {
	nodeName: string;
	tagName?: string;
	attrs?: HtmlAttributeNode[];
	childNodes?: HtmlNode[];
	sourceCodeLocation?: OffsetRange | HtmlElementLocation;
}

const pushReplacement = (
	replacements: Replacement[],
	start: number,
	end: number,
	text: string,
	label: string,
): void => {
	if (
		replacements.some(
			(replacement) =>
				replacement.start === start && replacement.end === end && replacement.text === text,
		)
	) {
		return;
	}

	replacements.push({ start, end, text, label });
};

const applyReplacements = (content: string, replacements: Replacement[]): string => {
	return [...replacements]
		.sort((left, right) => right.start - left.start)
		.reduce(
			(currentContent, replacement) =>
				`${currentContent.slice(0, replacement.start)}${replacement.text}${currentContent.slice(replacement.end)}`,
			content,
		);
};

const createSourceFile = (filePath: string, content: string, scriptKind: ts.ScriptKind): ts.SourceFile =>
	ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true, scriptKind);

const replaceStringLiteral = (
	node: ts.StringLiteral,
	sourceFile: ts.SourceFile,
	value: string,
): string => {
	const rawText = node.getText(sourceFile);
	const quote = rawText.startsWith("'") ? "'" : '"';
	return `${quote}${value}${quote}`;
};

const getCallTargetName = (expression: ts.LeftHandSideExpression): string | null => {
	if (ts.isPropertyAccessExpression(expression) || ts.isPropertyAccessChain(expression)) {
		return expression.name.text;
	}

	if (ts.isIdentifier(expression)) {
		return expression.text;
	}

	return null;
};

const getScriptKind = (filePath: string): ts.ScriptKind => {
	if (filePath.endsWith(".ts") || filePath.endsWith(".mts") || filePath.endsWith(".cts")) {
		return ts.ScriptKind.TS;
	}

	return ts.ScriptKind.JS;
};

const collectScriptReplacements = (
	filePath: string,
	content: string,
	rules: RunnerContext["manifest"]["migrations"],
	fileLabel: string,
): Replacement[] => {
	const sourceFile = createSourceFile(filePath, content, getScriptKind(filePath));
	const replacements: Replacement[] = [];

	const visit = (node: ts.Node): void => {
		if (ts.isCallExpression(node) && node.arguments.length > 0) {
			const callTargetName = getCallTargetName(node.expression);
			const [firstArgument] = node.arguments;

			if (callTargetName && ts.isStringLiteral(firstArgument)) {
				for (const rule of rules) {
					for (const operation of rule.operations) {
						if (ATTRIBUTE_API_CALLS.has(callTargetName) && firstArgument.text === operation.from) {
							pushReplacement(
								replacements,
								firstArgument.getStart(sourceFile),
								firstArgument.getEnd(),
								replaceStringLiteral(firstArgument, sourceFile, operation.to),
								`${fileLabel}: attribute API ${operation.from} -> ${operation.to}`,
							);
						}
					}
				}
			}
		}

		if (ts.isPropertyAccessExpression(node) || ts.isPropertyAccessChain(node)) {
			for (const rule of rules) {
				for (const operation of rule.operations) {
					if (operation.type !== "prop-rename") {
						continue;
					}

					const currentPropName = kebabToCamelCase(operation.from);
					const nextPropName = kebabToCamelCase(operation.to);
					if (node.name.text === currentPropName) {
						pushReplacement(
							replacements,
							node.name.getStart(sourceFile),
							node.name.getEnd(),
							nextPropName,
							`${fileLabel}: property ${operation.from} -> ${operation.to}`,
						);
					}
				}
			}
		}

		if (
			(ts.isElementAccessExpression(node) || ts.isElementAccessChain(node)) &&
			node.argumentExpression &&
			ts.isStringLiteral(node.argumentExpression)
		) {
			for (const rule of rules) {
				for (const operation of rule.operations) {
					if (operation.type !== "prop-rename") {
						continue;
					}

					const currentPropName = kebabToCamelCase(operation.from);
					const nextPropName = kebabToCamelCase(operation.to);
					if (node.argumentExpression.text === currentPropName) {
						pushReplacement(
							replacements,
							node.argumentExpression.getStart(sourceFile),
							node.argumentExpression.getEnd(),
							replaceStringLiteral(node.argumentExpression, sourceFile, nextPropName),
							`${fileLabel}: property ${operation.from} -> ${operation.to}`,
						);
					}
				}
			}
		}

		ts.forEachChild(node, visit);
	};

	visit(sourceFile);
	return replacements;
};

const collectHtmlReplacements = (
	filePath: string,
	content: string,
	rules: RunnerContext["manifest"]["migrations"],
): Replacement[] => {
	const fileLabel = path.basename(filePath);
	const fragment = parseFragment(content, { sourceCodeLocationInfo: true }) as HtmlNode;
	const replacements: Replacement[] = [];

	const visit = (node: HtmlNode): void => {
		if (node.tagName) {
			const elementLocation = node.sourceCodeLocation as HtmlElementLocation | undefined;

			for (const rule of rules) {
				if (node.attrs && node.tagName === rule.component && elementLocation?.attrs) {
					for (const attribute of node.attrs) {
						const attributeLocation = elementLocation.attrs[attribute.name];
						if (!attributeLocation) {
							continue;
						}

						for (const operation of rule.operations) {
							if (attribute.name === operation.from) {
								pushReplacement(
									replacements,
									attributeLocation.startOffset,
									attributeLocation.startOffset + operation.from.length,
									operation.to,
									`${fileLabel}: ${rule.component} prop ${operation.from} -> ${operation.to}`,
								);
							}
						}
					}
				}
			}

			if (
				node.tagName === "script" &&
				node.attrs?.every((attribute) => attribute.name !== "src")
			) {
				for (const childNode of node.childNodes ?? []) {
					const childLocation = childNode.sourceCodeLocation;
					if (childNode.nodeName !== "#text" || !childLocation) {
						continue;
					}

					const scriptContent = content.slice(childLocation.startOffset, childLocation.endOffset);
					const scriptReplacements = collectScriptReplacements(`${filePath}.inline.js`, scriptContent, rules, fileLabel);

					for (const replacement of scriptReplacements) {
						pushReplacement(
							replacements,
							childLocation.startOffset + replacement.start,
							childLocation.startOffset + replacement.end,
							replacement.text,
							replacement.label,
						);
					}
				}
			}
		}

		for (const childNode of node.childNodes ?? []) {
			visit(childNode);
		}
	};

	visit(fragment);
	return replacements;
};

export class HtmlCodemodRunner implements CodemodRunner {
	framework = "html" as const;

	async collectFiles(cwd: string): Promise<string[]> {
		return collectFilesByExtension(cwd, HTML_EXTENSIONS);
	}

	async transformFile(filePath: string, context: RunnerContext): Promise<FileChange | null> {
		const originalContent = await readFileAndSkipBinary(filePath);
		if (originalContent === null) {
			return null;
		}

		const replacements = HTML_MARKUP_EXTENSIONS.has(path.extname(filePath))
			? collectHtmlReplacements(filePath, originalContent, context.manifest.migrations)
			: collectScriptReplacements(
					filePath,
					originalContent,
					context.manifest.migrations,
					path.basename(filePath),
				);

		if (replacements.length === 0) {
			return null;
		}

		const updatedContent = applyReplacements(originalContent, replacements);

		if (updatedContent === originalContent) {
			return null;
		}

		return {
			filePath,
			changes: Array.from(new Set(replacements.map((replacement) => replacement.label))),
			updatedContent,
		};
	}
}
