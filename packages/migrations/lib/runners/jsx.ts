import ts from "typescript";

import { kebabToCamelCase, tagNameToReactComponentName } from "../naming.js";
import type { FileChange, MigrationRule, PropRenameMigration } from "../types.js";

interface PropRenameMatch {
	nextName: string;
	label: string;
}

interface RuleTransformContext {
	componentTagName: string;
	targetComponentNames: Set<string>;
	propRenames: Map<string, PropRenameMatch>;
}

const VUE_RENDER_FUNCTION_NAMES = new Set(["h", "createVNode"]);

const renamePackageSpecifier = (
	specifier: string,
	packageRenames: Extract<MigrationRule, { type: "package-rename" }>[],
): { renamedSpecifier: string; change: string } | null => {
	for (const op of packageRenames) {
		if (specifier === op.from || specifier.startsWith(op.from + "/")) {
			const renamedSpecifier = op.to + specifier.slice(op.from.length);
			return {
				renamedSpecifier,
				change: `import source ${specifier} -> ${renamedSpecifier}`,
			};
		}
	}

	return null;
};

export const isJsxSourceFile = (filePath: string): boolean =>
	filePath.endsWith(".tsx") || filePath.endsWith(".jsx");

const createSourceFile = (filePath: string, content: string): ts.SourceFile =>
	ts.createSourceFile(
		filePath,
		content,
		ts.ScriptTarget.Latest,
		true,
		filePath.endsWith("x") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
	);

const collectImportedTargetLocalNames = (
	sourceFile: ts.SourceFile,
	importSource: string,
	targetComponentNames: Set<string>,
): Set<string> => {
	const localNames = new Set<string>();

	const visit = (node: ts.Node): void => {
		if (
			ts.isImportDeclaration(node) &&
			ts.isStringLiteral(node.moduleSpecifier) &&
			node.moduleSpecifier.text === importSource &&
			node.importClause?.namedBindings &&
			ts.isNamedImports(node.importClause.namedBindings)
		) {
			for (const element of node.importClause.namedBindings.elements) {
				const importedName = element.propertyName?.text ?? element.name.text;
				if (targetComponentNames.has(importedName)) {
					localNames.add(element.name.text);
				}
			}
		}

		ts.forEachChild(node, visit);
	};

	visit(sourceFile);
	return localNames;
};

const createRuleTransformContexts = (
	sourceFile: ts.SourceFile,
	rules: MigrationRule[],
	importSource: string,
): RuleTransformContext[] => {
	const propRules = rules.filter((r): r is PropRenameMigration => r.type === "prop-rename");

	const byComponent = new Map<string, PropRenameMigration[]>();
	for (const rule of propRules) {
		const existing = byComponent.get(rule.component) ?? [];
		existing.push(rule);
		byComponent.set(rule.component, existing);
	}

	return [...byComponent.entries()].map(([component, entries]) => {
		const targetComponentNames = new Set([tagNameToReactComponentName(component)]);
		for (const importedName of collectImportedTargetLocalNames(sourceFile, importSource, targetComponentNames)) {
			targetComponentNames.add(importedName);
		}

		const propRenames = new Map<string, PropRenameMatch>();
		for (const entry of entries) {
			const currentPropName = kebabToCamelCase(entry.from);
			const nextPropName = kebabToCamelCase(entry.to);
			propRenames.set(currentPropName, {
				nextName: nextPropName,
				label: `prop ${currentPropName} -> ${nextPropName}`,
			});
		}

		return {
			componentTagName: component,
			targetComponentNames,
			propRenames,
		};
	});
};

/**
 * Collects all const variable declarations whose initializer is a plain
 * ObjectLiteralExpression. Used to resolve local spread identifiers.
 */
const collectConstObjectDeclarations = (
	sourceFile: ts.SourceFile,
): Map<string, ts.VariableDeclaration> => {
	const result = new Map<string, ts.VariableDeclaration>();

	const visit = (node: ts.Node): void => {
		if (
			ts.isVariableStatement(node) &&
			(node.declarationList.flags & ts.NodeFlags.Const) !== 0
		) {
			for (const declaration of node.declarationList.declarations) {
				if (
					ts.isIdentifier(declaration.name) &&
					declaration.initializer &&
					ts.isObjectLiteralExpression(declaration.initializer)
				) {
					result.set(declaration.name.text, declaration);
				}
			}
		}
		ts.forEachChild(node, visit);
	};

	visit(sourceFile);
	return result;
};

const updateJsxAttributes = (
	factory: ts.NodeFactory,
	attributes: ts.JsxAttributes,
	propRenames: Map<string, PropRenameMatch>,
	changes: Set<string>,
	constObjectDeclarations: Map<string, ts.VariableDeclaration>,
	spreadObjectRewrites: Map<string, ts.ObjectLiteralExpression>,
): ts.JsxAttributes => {
	let didChange = false;
	const nextProperties = attributes.properties.map((attribute) => {
		if (ts.isJsxSpreadAttribute(attribute) && ts.isIdentifier(attribute.expression)) {
			const declaration = constObjectDeclarations.get(attribute.expression.text);
			if (declaration?.initializer && ts.isObjectLiteralExpression(declaration.initializer)) {
				const nextObject = updateRenderPropsObject(
					factory,
					declaration.initializer,
					propRenames,
					changes,
				);
				if (nextObject !== declaration.initializer) {
					spreadObjectRewrites.set(attribute.expression.text, nextObject);
					didChange = true;
				}
			}
			return attribute;
		}

		if (!ts.isJsxAttribute(attribute) || !ts.isIdentifier(attribute.name)) {
			return attribute;
		}

		const rename = propRenames.get(attribute.name.text);
		if (!rename) {
			return attribute;
		}

		didChange = true;
		changes.add(rename.label);
		return factory.updateJsxAttribute(
			attribute,
			factory.createIdentifier(rename.nextName),
			attribute.initializer,
		);
	});

	if (!didChange) {
		return attributes;
	}

	return factory.updateJsxAttributes(attributes, nextProperties);
};

const updateRenderPropsObject = (
	factory: ts.NodeFactory,
	propsObject: ts.ObjectLiteralExpression,
	propRenames: Map<string, PropRenameMatch>,
	changes: Set<string>,
): ts.ObjectLiteralExpression => {
	let didChange = false;
	const nextProperties = propsObject.properties.map((property) => {
		if (ts.isPropertyAssignment(property)) {
			if (ts.isIdentifier(property.name)) {
				const rename = propRenames.get(property.name.text);
				if (!rename) {
					return property;
				}

				didChange = true;
				changes.add(rename.label);
				return factory.updatePropertyAssignment(
					property,
					factory.createIdentifier(rename.nextName),
					property.initializer,
				);
			}

			if (ts.isStringLiteral(property.name)) {
				const rename = propRenames.get(property.name.text);
				if (!rename) {
					return property;
				}

				didChange = true;
				changes.add(rename.label);
				return factory.updatePropertyAssignment(
					property,
					factory.createStringLiteral(rename.nextName),
					property.initializer,
				);
			}
		}

		if (ts.isShorthandPropertyAssignment(property)) {
			const rename = propRenames.get(property.name.text);
			if (!rename) {
				return property;
			}

			didChange = true;
			changes.add(rename.label);
			return factory.createPropertyAssignment(
				factory.createIdentifier(rename.nextName),
				factory.createIdentifier(property.name.text),
			);
		}

		return property;
	});

	if (!didChange) {
		return propsObject;
	}

	return factory.updateObjectLiteralExpression(propsObject, nextProperties);
};

const transformJsxSourceFile = (
	sourceFile: ts.SourceFile,
	rules: MigrationRule[],
	importSource: string,
): { updatedSourceFile: ts.SourceFile; changes: string[] } => {
	const ruleContexts = createRuleTransformContexts(sourceFile, rules, importSource);
	const changes = new Set<string>();
	const constObjectDeclarations = collectConstObjectDeclarations(sourceFile);
	// Accumulates rewritten object literals keyed by variable name.
	const spreadObjectRewrites = new Map<string, ts.ObjectLiteralExpression>();

	const transformer: ts.TransformerFactory<ts.SourceFile> = (context) => {
		const { factory } = context;

		const visit = (node: ts.Node): ts.Node => {
			for (const ruleContext of ruleContexts) {
				if (
					(ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) &&
					ts.isIdentifier(node.tagName) &&
					ruleContext.targetComponentNames.has(node.tagName.text)
				) {
					const nextAttributes = updateJsxAttributes(
						factory,
						node.attributes,
						ruleContext.propRenames,
						changes,
						constObjectDeclarations,
						spreadObjectRewrites,
					);

					if (nextAttributes !== node.attributes) {
						return ts.isJsxOpeningElement(node)
							? factory.updateJsxOpeningElement(node, node.tagName, node.typeArguments, nextAttributes)
							: factory.updateJsxSelfClosingElement(node, node.tagName, node.typeArguments, nextAttributes);
					}
				}

				if (
					ts.isCallExpression(node) &&
					ts.isIdentifier(node.expression) &&
					VUE_RENDER_FUNCTION_NAMES.has(node.expression.text)
				) {
					const [componentArgument, propsArgument] = node.arguments;
					const matchesTargetComponent =
						(componentArgument &&
							ts.isIdentifier(componentArgument) &&
							ruleContext.targetComponentNames.has(componentArgument.text)) ||
						(componentArgument &&
							ts.isStringLiteral(componentArgument) &&
							componentArgument.text === ruleContext.componentTagName);

					if (matchesTargetComponent && propsArgument && ts.isObjectLiteralExpression(propsArgument)) {
						const nextPropsArgument = updateRenderPropsObject(
							factory,
							propsArgument,
							ruleContext.propRenames,
							changes,
						);

						if (nextPropsArgument !== propsArgument) {
							return factory.updateCallExpression(
								node,
								node.expression,
								node.typeArguments,
								node.arguments.map((argument, index) =>
									index === 1 ? nextPropsArgument : argument,
								),
							);
						}
					}
				}
			}

			return ts.visitEachChild(node, visit, context);
		};

		return (node) => ts.visitNode(node, visit) as ts.SourceFile;
	};

	const result = ts.transform(sourceFile, [transformer]);
	const [afterJsx] = result.transformed;
	result.dispose();

	// Second pass: rewrite the object literal initializers for spread targets.
	let updatedSourceFile = afterJsx;
	if (spreadObjectRewrites.size > 0) {
		const spreadTransformer: ts.TransformerFactory<ts.SourceFile> = (context) => {
			const { factory } = context;
			const visit = (node: ts.Node): ts.Node => {
				if (
					ts.isVariableDeclaration(node) &&
					ts.isIdentifier(node.name) &&
					spreadObjectRewrites.has(node.name.text)
				) {
					const nextObject = spreadObjectRewrites.get(node.name.text);
					if (!nextObject) {
						return node;
					}
					return factory.updateVariableDeclaration(
						node,
						node.name,
						node.exclamationToken,
						node.type,
						nextObject,
					);
				}
				return ts.visitEachChild(node, visit, context);
			};
			return (node) => ts.visitNode(node, visit) as ts.SourceFile;
		};
		const spreadResult = ts.transform(afterJsx, [spreadTransformer]);
		updatedSourceFile = spreadResult.transformed[0];
		spreadResult.dispose();
	}

	// Third pass: rename package import sources.
	const packageRenames = rules.filter((r) => r.type === "package-rename");
	if (packageRenames.length > 0) {
			const importSourceTransformer: ts.TransformerFactory<ts.SourceFile> = (context) => {
				const { factory } = context;
				const visit = (node: ts.Node): ts.Node => {
					if (
						ts.isImportDeclaration(node) &&
						ts.isStringLiteral(node.moduleSpecifier)
					) {
						const renamed = renamePackageSpecifier(node.moduleSpecifier.text, packageRenames);
						if (renamed) {
							changes.add(renamed.change);
							return factory.updateImportDeclaration(
								node,
								node.modifiers,
								node.importClause,
								factory.createStringLiteral(renamed.renamedSpecifier),
								node.attributes,
							);
						}
					}

					if (
						ts.isExportDeclaration(node) &&
						node.moduleSpecifier &&
						ts.isStringLiteral(node.moduleSpecifier)
					) {
						const renamed = renamePackageSpecifier(node.moduleSpecifier.text, packageRenames);
						if (renamed) {
							changes.add(renamed.change);
							return factory.updateExportDeclaration(
								node,
								node.modifiers,
								node.isTypeOnly,
								node.exportClause,
								factory.createStringLiteral(renamed.renamedSpecifier),
								node.attributes,
							);
						}
					}

					if (
						ts.isCallExpression(node) &&
						node.arguments.length > 0 &&
						ts.isStringLiteral(node.arguments[0]) &&
						(
							node.expression.kind === ts.SyntaxKind.ImportKeyword ||
							(ts.isIdentifier(node.expression) && node.expression.text === "require")
						)
					) {
						const renamed = renamePackageSpecifier(node.arguments[0].text, packageRenames);
						if (renamed) {
							changes.add(renamed.change);
							return factory.updateCallExpression(
								node,
								node.expression,
								node.typeArguments,
								node.arguments.map((argument, index) =>
									index === 0 ? factory.createStringLiteral(renamed.renamedSpecifier) : argument,
								),
							);
						}
					}
					return ts.visitEachChild(node, visit, context);
				};
				return (node) => ts.visitNode(node, visit) as ts.SourceFile;
			};
			const importResult = ts.transform(updatedSourceFile, [importSourceTransformer]);
			updatedSourceFile = importResult.transformed[0];
			importResult.dispose();
	}

	return {
		updatedSourceFile,
		changes: [...changes],
	};
};

export const transformJsxFile = (
	filePath: string,
	content: string,
	importSource: string,
	rules: MigrationRule[],
	{ requireJsxExtension = true }: { requireJsxExtension?: boolean } = {},
): FileChange | null => {
	if (requireJsxExtension && !isJsxSourceFile(filePath)) {
		return null;
	}

	const sourceFile = createSourceFile(filePath, content);
	const { updatedSourceFile, changes } = transformJsxSourceFile(sourceFile, rules, importSource);

	const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
	const updatedContent = printer.printFile(updatedSourceFile);

	if (updatedContent === content || changes.length === 0) {
		return null;
	}

	return {
		filePath,
		changes,
		updatedContent,
	};
};
