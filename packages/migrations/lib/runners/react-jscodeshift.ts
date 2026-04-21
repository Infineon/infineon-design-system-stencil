import { createRequire } from "node:module";

import type {
	ASTPath,
	ImportSpecifier,
	JSXAttribute,
	JSXIdentifier,
	JSXNamespacedName,
	JSXSpreadAttribute,
} from "jscodeshift";

import { kebabToCamelCase, tagNameToReactComponentName } from "../naming.js";
import type { FileChange, MigrationRule } from "../types.js";

const require = createRequire(import.meta.url);
const jscodeshift: typeof import("jscodeshift") = require("jscodeshift");
const j = jscodeshift.withParser("tsx");

const getImportedSpecifierName = (specifier: ImportSpecifier): string | null => {
	const imported = specifier.imported as { type?: string; name?: string; value?: unknown };
	if (imported.type === "Identifier" && typeof imported.name === "string") {
		return imported.name;
	}

	if (typeof imported.value === "string") {
		return imported.value;
	}

	return null;
};

const isJsxIdentifier = (
	name: JSXIdentifier | JSXNamespacedName,
): name is JSXIdentifier => name.type === "JSXIdentifier";

const collectImportedTargetLocalNames = (
	root: ReturnType<typeof j>,
	importSource: string,
	targetComponentName: string,
): Set<string> => {
	const localNames = new Set<string>();

	root.find(j.ImportDeclaration, { source: { value: importSource } }).forEach((path) => {
		for (const specifier of path.node.specifiers ?? []) {
			if (specifier.type !== "ImportSpecifier") {
				continue;
			}

			const importedName = getImportedSpecifierName(specifier);
			if (importedName === null) {
				continue;
			}

			if (importedName === targetComponentName) {
				const localName = (specifier.local as { name?: string } | null)?.name ?? importedName;
				localNames.add(localName);
			}
		}
	});

	return localNames;
};

const isTargetJsxElement = (
	path: ASTPath,
	targetLocalNames: Set<string>,
): boolean => {
	const jsxNode = path.node as { name?: { type?: string; name?: string } };
	return (
		jsxNode.name?.type === "JSXIdentifier" &&
		typeof jsxNode.name.name === "string" &&
		targetLocalNames.has(jsxNode.name.name)
	);
};

const renameJsxAttribute = (
	attribute: JSXAttribute | JSXSpreadAttribute,
	fromName: string,
	toName: string,
): boolean => {
	if (attribute.type !== "JSXAttribute") {
		return false;
	}

	if (!isJsxIdentifier(attribute.name)) {
		return false;
	}

	if (attribute.name.name !== fromName) {
		return false;
	}

	attribute.name.name = toName;
	return true;
};

const renameObjectPropertyKey = (
	prop: unknown,
	fromName: string,
	toName: string,
): boolean => {
	const p = prop as {
		type?: string;
		key?: { type?: string; name?: string; value?: string };
		shorthand?: boolean;
	};

	if (p.type !== "Property" && p.type !== "ObjectProperty") {
		return false;
	}

	if (!p.key) {
		return false;
	}

	if (p.key.type === "Identifier" && p.key.name === fromName) {
		p.key.name = toName;
		if (p.shorthand) {
			p.shorthand = false;
		}
		return true;
	}

	if (p.key.type === "StringLiteral" && p.key.value === fromName) {
		p.key.value = toName;
		return true;
	}

	return false;
};

export const isJsxSourceFile = (filePath: string): boolean =>
	filePath.endsWith(".tsx") || filePath.endsWith(".jsx");

export const transformReactFile = (
	filePath: string,
	content: string,
	importSource: string,
	rules: MigrationRule[],
): FileChange | null => {
	if (!isJsxSourceFile(filePath)) {
		return null;
	}

	const root = j(content);
	const changes = new Set<string>();
	let didChange = false;

	for (const rule of rules) {
		const targetComponentName = tagNameToReactComponentName(rule.component);
		const targetLocalNames = collectImportedTargetLocalNames(root, importSource, targetComponentName);
		if (targetLocalNames.size === 0) {
			continue;
		}

		root
			.find(j.JSXOpeningElement)
			.filter((path) => isTargetJsxElement(path, targetLocalNames))
			.forEach((path) => {
				for (const operation of rule.operations) {
					const currentPropName = kebabToCamelCase(operation.from);
					const nextPropName = kebabToCamelCase(operation.to);

					for (const attribute of path.node.attributes ?? []) {
						if (renameJsxAttribute(attribute, currentPropName, nextPropName)) {
							didChange = true;
							changes.add(`prop ${currentPropName} -> ${nextPropName}`);
						}

						// Spread of a const local object: rename the key inside the object literal.
						if (attribute.type === "JSXSpreadAttribute") {
							const expr = attribute.argument as { type?: string; name?: string };
							if (expr.type === "Identifier" && expr.name) {
								root
									.find(j.VariableDeclarator, { id: { type: "Identifier", name: expr.name } })
									.filter((declPath) => {
										const parent = declPath.parent?.node as { type?: string; kind?: string } | undefined;
										const init = declPath.node.init as { type?: string } | null | undefined;
										return (
											parent?.type === "VariableDeclaration" &&
											parent.kind === "const" &&
											init?.type === "ObjectExpression"
										);
									})
									.forEach((declPath) => {
										const init = declPath.node.init as { properties?: unknown[] } | null | undefined;
										for (const prop of init?.properties ?? []) {
											if (renameObjectPropertyKey(prop, currentPropName, nextPropName)) {
												didChange = true;
												changes.add(`prop ${currentPropName} -> ${nextPropName}`);
											}
										}
									});
							}
						}
					}
				}
			});
	}

	if (!didChange) {
		return null;
	}

	const updatedContent = root.toSource({ quote: "double", trailingComma: true });
	if (updatedContent === content) {
		return null;
	}

	return {
		filePath,
		changes: [...changes],
		updatedContent,
	};
};
