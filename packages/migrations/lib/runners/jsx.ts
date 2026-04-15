import ts from "typescript";

import { kebabToCamelCase, tagNameToReactComponentName } from "../naming.js";
import type { FileChange, MigrationRule } from "../types.js";

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
	return rules.map((rule) => {
		const targetComponentNames = new Set([tagNameToReactComponentName(rule.component)]);
		for (const importedName of collectImportedTargetLocalNames(sourceFile, importSource, targetComponentNames)) {
			targetComponentNames.add(importedName);
		}

		const propRenames = new Map<string, PropRenameMatch>();
		for (const operation of rule.operations) {
			const currentPropName = kebabToCamelCase(operation.from);
			const nextPropName = kebabToCamelCase(operation.to);
			propRenames.set(currentPropName, {
				nextName: nextPropName,
				label: `prop ${currentPropName} -> ${nextPropName}`,
			});
		}

		return {
			componentTagName: rule.component,
			targetComponentNames,
			propRenames,
		};
	});
};

const updateJsxAttributes = (
	factory: ts.NodeFactory,
	attributes: ts.JsxAttributes,
	propRenames: Map<string, PropRenameMatch>,
	changes: Set<string>,
): ts.JsxAttributes => {
	let didChange = false;
	const nextProperties = attributes.properties.map((attribute) => {
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
	const [updatedSourceFile] = result.transformed;
	result.dispose();

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
): FileChange | null => {
	const sourceFile = createSourceFile(filePath, content);
	const { updatedSourceFile, changes } = transformJsxSourceFile(sourceFile, rules, importSource);

	if (changes.length === 0) {
		return null;
	}

	const updatedContent = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed }).printFile(updatedSourceFile);
	if (updatedContent === content) {
		return null;
	}

	return {
		filePath,
		changes,
		updatedContent,
	};
};
