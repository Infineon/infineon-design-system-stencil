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

	// Collect const variable declarations whose initializer is a plain object literal,
	// for use when resolving Object.assign identifier arguments.
	const constObjectDeclarations = new Map<string, ts.ObjectLiteralExpression>();
	const collectConstObjects = (node: ts.Node): void => {
		if (
			ts.isVariableStatement(node) &&
			(node.declarationList.flags & ts.NodeFlags.Const) !== 0
		) {
			for (const decl of node.declarationList.declarations) {
				if (!ts.isIdentifier(decl.name) || !decl.initializer) {
					continue;
				}
				let initializer: ts.Expression = decl.initializer;
				while (ts.isAsExpression(initializer) || ts.isSatisfiesExpression(initializer)) {
					initializer = initializer.expression;
				}
				if (ts.isObjectLiteralExpression(initializer)) {
					constObjectDeclarations.set(decl.name.text, initializer);
				}
			}
		}
		ts.forEachChild(node, collectConstObjects);
	};
	collectConstObjects(sourceFile);

	const renameObjectLiteralKeys = (obj: ts.ObjectLiteralExpression): void => {
		for (const property of obj.properties) {
			if (!ts.isPropertyAssignment(property)) {
				continue;
			}
			for (const rule of rules) {
				for (const operation of rule.operations) {
					if (operation.type !== "prop-rename") {
						continue;
					}
					const currentPropName = kebabToCamelCase(operation.from);
					const nextPropName = kebabToCamelCase(operation.to);

					if (ts.isIdentifier(property.name) && property.name.text === currentPropName) {
						pushReplacement(
							replacements,
							property.name.getStart(sourceFile),
							property.name.getEnd(),
							nextPropName,
							`${fileLabel}: property ${operation.from} -> ${operation.to}`,
						);
					}

					if (
						ts.isStringLiteral(property.name) &&
						(property.name.text === currentPropName || property.name.text === operation.from)
					) {
						const nextName = property.name.text === operation.from ? operation.to : nextPropName;
						pushReplacement(
							replacements,
							property.name.getStart(sourceFile) + 1,
							property.name.getEnd() - 1,
							nextName,
							`${fileLabel}: property ${operation.from} -> ${operation.to}`,
						);
					}
				}
			}
		}
	};

	// Collect object literals that may be returned by a function/arrow in this file,
	// for use when resolving Object.assign call-expression arguments.
	const functionReturnObjects = new Map<string, ts.ObjectLiteralExpression[]>();

	const extractObjectLiteralsFromExpr = (expr: ts.Expression): ts.ObjectLiteralExpression[] => {
		if (ts.isObjectLiteralExpression(expr)) {
			return [expr];
		}
		if (ts.isParenthesizedExpression(expr)) {
			return extractObjectLiteralsFromExpr(expr.expression);
		}
		if (ts.isConditionalExpression(expr)) {
			return [
				...extractObjectLiteralsFromExpr(expr.whenTrue),
				...extractObjectLiteralsFromExpr(expr.whenFalse),
			];
		}
		return [];
	};

	const collectReturnObjects = (body: ts.ConciseBody): ts.ObjectLiteralExpression[] => {
		// Concise arrow body (not a Block): () => expr or () => ({ ... })
		if (!ts.isBlock(body)) {
			return extractObjectLiteralsFromExpr(body as ts.Expression);
		}
		// Block body: collect all return statements
		const results: ts.ObjectLiteralExpression[] = [];
		const walkBlock = (node: ts.Node): void => {
			if (ts.isReturnStatement(node) && node.expression) {
				results.push(...extractObjectLiteralsFromExpr(node.expression));
			}
			ts.forEachChild(node, walkBlock);
		};
		walkBlock(body);
		return results;
	};

	const collectFunctionDeclarations = (node: ts.Node): void => {
		// function f() { ... }
		if (ts.isFunctionDeclaration(node) && node.name && node.body) {
			const objs = collectReturnObjects(node.body);
			if (objs.length > 0) {
				functionReturnObjects.set(node.name.text, objs);
			}
		}
		// const f = () => ... or const f = function() { ... }
		if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.initializer) {
			const init = node.initializer;
			if (ts.isArrowFunction(init) || ts.isFunctionExpression(init)) {
				const objs = collectReturnObjects(init.body);
				if (objs.length > 0) {
					functionReturnObjects.set(node.name.text, objs);
				}
			}
		}
		ts.forEachChild(node, collectFunctionDeclarations);
	};
	collectFunctionDeclarations(sourceFile);

	// Second pass: rename object literal keys in Object.assign spread arguments.
	const visitObjectAssign = (node: ts.Node): void => {
		if (
			ts.isCallExpression(node) &&
			ts.isPropertyAccessExpression(node.expression) &&
			ts.isIdentifier(node.expression.expression) &&
			node.expression.expression.text === "Object" &&
			node.expression.name.text === "assign" &&
			node.arguments.length >= 2
		) {
			for (let i = 1; i < node.arguments.length; i++) {
				const arg = node.arguments[i];
				if (ts.isObjectLiteralExpression(arg)) {
					renameObjectLiteralKeys(arg);
				} else if (ts.isIdentifier(arg)) {
					const obj = constObjectDeclarations.get(arg.text);
					if (obj) {
						renameObjectLiteralKeys(obj);
					}
				} else if (ts.isCallExpression(arg) && ts.isIdentifier(arg.expression)) {
					const objs = functionReturnObjects.get(arg.expression.text);
					if (objs) {
						for (const obj of objs) {
							renameObjectLiteralKeys(obj);
						}
					}
				}
			}
		}
		ts.forEachChild(node, visitObjectAssign);
	};
	visitObjectAssign(sourceFile);

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
