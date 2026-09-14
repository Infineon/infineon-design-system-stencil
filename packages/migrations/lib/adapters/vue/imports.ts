import ts from "typescript";

export interface VueImportResolution {
	localNames: Set<string>;
	officialTemplateComponentNames: Set<string>;
	nonOfficialTemplateComponentNames: Set<string>;
	isOfficialWrapperComponent(tagName: ts.JsxTagNameExpression): boolean;
}

const getImportedSpecifierName = (specifier: ts.ImportSpecifier): string =>
	specifier.propertyName?.text ?? specifier.name.text;

export const resolveVueWrapperImports = (
	sourceFile: ts.SourceFile,
	checker: ts.TypeChecker,
	importSource: string,
	targetComponentNames: Set<string>,
): VueImportResolution => {
	const localNames = new Set<string>();
	const officialTemplateComponentNames = new Set<string>();
	const nonOfficialTemplateComponentNames = new Set<string>();
	const importedLocalNames = new Map<string, Set<string>>();

	const visit = (node: ts.Node): void => {
		if (!ts.isImportDeclaration(node)) {
			ts.forEachChild(node, visit);
			return;
		}

		const moduleSpecifier = node.moduleSpecifier;
		if (!ts.isStringLiteral(moduleSpecifier)) {
			return;
		}

		const namedBindings = node.importClause?.namedBindings;
		if (!namedBindings || !ts.isNamedImports(namedBindings)) {
			return;
		}

		for (const specifier of namedBindings.elements) {
			const localName = specifier.name.text;
			const sources = importedLocalNames.get(localName) ?? new Set<string>();
			sources.add(moduleSpecifier.text);
			importedLocalNames.set(localName, sources);

			if (moduleSpecifier.text !== importSource) {
				nonOfficialTemplateComponentNames.add(localName);
				continue;
			}

			const importedName = getImportedSpecifierName(specifier);
			if (!targetComponentNames.has(importedName)) {
				continue;
			}

			localNames.add(localName);
			officialTemplateComponentNames.add(localName);
		}
	};

	visit(sourceFile);

	const isOfficialWrapperComponent = (
		tagName: ts.JsxTagNameExpression,
	): boolean => {
		if (!ts.isIdentifier(tagName)) {
			return false;
		}

		const symbol = checker.getSymbolAtLocation(tagName);
		if (!symbol) {
			return false;
		}

		const declarations = symbol.getDeclarations();
		if (!declarations || declarations.length === 0) {
			return false;
		}

		const declaration = declarations[0];
		if (!declaration || !ts.isImportSpecifier(declaration)) {
			return false;
		}

		const importedName = getImportedSpecifierName(declaration);
		if (!targetComponentNames.has(importedName)) {
			return false;
		}

		const importDeclaration = declaration.parent.parent.parent;
		if (!ts.isImportDeclaration(importDeclaration)) {
			return false;
		}

		const specifier = importDeclaration.moduleSpecifier;
		if (!ts.isStringLiteral(specifier) || specifier.text !== importSource) {
			return false;
		}

		return true;
	};

	for (const localName of officialTemplateComponentNames) {
		if ((importedLocalNames.get(localName)?.size ?? 0) <= 1) {
			continue;
		}
		officialTemplateComponentNames.delete(localName);
		nonOfficialTemplateComponentNames.add(localName);
	}

	return {
		localNames,
		officialTemplateComponentNames,
		nonOfficialTemplateComponentNames,
		isOfficialWrapperComponent,
	};
};
