const ts = require("typescript");

const { pushReplacement, applyReplacements } = require("./replacements");
const { migrateTemplateContent } = require("./migrate-template");

/** @param {string} filePath @param {string} content */
function createSourceFile(filePath, content) {
	return ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
}

/**
 * Collect all local names and namespace bindings that refer to Angular's `Component`
 * class from `@angular/core`.
 *
 * @param {import('typescript').SourceFile} sourceFile
 * @returns {{ localNames: Set<string>, namespaces: Set<string> }}
 */
function collectAngularComponentBindings(sourceFile) {
	const localNames = new Set();
	const namespaces = new Set();

	for (const stmt of sourceFile.statements) {
		if (!ts.isImportDeclaration(stmt)) continue;

		const { moduleSpecifier, importClause } = stmt;
		if (!ts.isStringLiteral(moduleSpecifier)) continue;
		if (moduleSpecifier.text !== "@angular/core") continue;
		if (!importClause?.namedBindings) continue;

		const { namedBindings } = importClause;

		if (ts.isNamedImports(namedBindings)) {
			for (const specifier of namedBindings.elements) {
				// propertyName is the original export name when aliased; name is the local binding
				const exportName = specifier.propertyName?.text ?? specifier.name.text;
				if (exportName === "Component") {
					localNames.add(specifier.name.text);
				}
			}
		} else if (ts.isNamespaceImport(namedBindings)) {
			namespaces.add(namedBindings.name.text);
		}
	}

	return { localNames, namespaces };
}

/**
 * Return true when `expr` refers to Angular's Component class via a known import.
 *
 * @param {import('typescript').Expression} expr
 * @param {Set<string>} localNames
 * @param {Set<string>} namespaces
 */
function isAngularComponentExpression(expr, localNames, namespaces) {
	if (ts.isIdentifier(expr)) {
		return localNames.has(expr.text);
	}
	if (ts.isPropertyAccessExpression(expr)) {
		return (
			ts.isIdentifier(expr.expression) &&
			namespaces.has(expr.expression.text) &&
			expr.name.text === "Component"
		);
	}
	return false;
}

/**
 * Return true when `decorator` is a proven Angular `@Component` decorator.
 *
 * @param {import('typescript').Decorator} decorator
 * @param {Set<string>} localNames
 * @param {Set<string>} namespaces
 */
function isAngularComponentDecorator(decorator, localNames, namespaces) {
	const { expression } = decorator;
	if (ts.isCallExpression(expression)) {
		return isAngularComponentExpression(expression.expression, localNames, namespaces);
	}
	return isAngularComponentExpression(expression, localNames, namespaces);
}

/**
 * Migrate only Angular templates embedded in a component decorator.
 * TypeScript class-body property and DOM API rewrites are intentionally out of scope.
 *
 * @param {string} content
 * @param {string} filePath
 * @param {import('../update-v40/index').Operation[]} operations
 * @returns {string | null}
 */
function migrateTypeScriptContent(content, filePath, operations) {
	const sourceFile = createSourceFile(filePath, content);
	const { localNames, namespaces } = collectAngularComponentBindings(sourceFile);

	if (localNames.size === 0 && namespaces.size === 0) {
		return null;
	}

	const replacements = [];

	const visitNode = (node) => {
		if (
			(ts.isClassDeclaration(node) || ts.isClassExpression(node)) &&
			ts.canHaveDecorators(node)
		) {
			const decorators = ts.getDecorators(node) ?? [];
			const componentDecorator = decorators.find((dec) =>
				isAngularComponentDecorator(dec, localNames, namespaces),
			);

			if (componentDecorator) {
				const { expression } = componentDecorator;
				if (
					ts.isCallExpression(expression) &&
					expression.arguments.length > 0 &&
					ts.isObjectLiteralExpression(expression.arguments[0])
				) {
					const metadata = expression.arguments[0];
					for (const prop of metadata.properties) {
						if (!ts.isPropertyAssignment(prop)) continue;

						const nameText =
							(ts.isIdentifier(prop.name) || ts.isStringLiteral(prop.name))
								? prop.name.text
								: undefined;

						if (nameText !== "template") continue;

						const initializer = prop.initializer;
						if (
							ts.isStringLiteral(initializer) ||
							ts.isNoSubstitutionTemplateLiteral(initializer)
						) {
							const rawTemplate = content.slice(
								initializer.getStart(sourceFile) + 1,
								initializer.getEnd() - 1,
							);
							const migratedTemplate = migrateTemplateContent(
								rawTemplate,
								`${filePath}#inline-template`,
								operations,
							);
							if (migratedTemplate && migratedTemplate !== rawTemplate) {
								pushReplacement(
									replacements,
									initializer.getStart(sourceFile) + 1,
									initializer.getEnd() - 1,
									migratedTemplate,
									"inline template migration",
								);
							}
						}
					}
				}
			}
		}

		ts.forEachChild(node, visitNode);
	};

	visitNode(sourceFile);

	if (replacements.length === 0) {
		return null;
	}

	const updatedContent = applyReplacements(content, replacements);
	return updatedContent === content ? null : updatedContent;
}

module.exports = { migrateTypeScriptContent };

