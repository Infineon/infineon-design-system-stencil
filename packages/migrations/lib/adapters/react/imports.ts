import ts from "typescript";

export interface ReactImportBinding {
	localName: string;
	importedName: string;
	importDeclaration: ts.ImportDeclaration;
	importSpecifier: ts.ImportSpecifier;
}

export interface ReactImportResolution {
	localNames: Set<string>;
	bindings: ReactImportBinding[];
	isOfficialWrapperComponent(tagName: ts.JsxTagNameExpression): boolean;
}

const getImportedSpecifierName = (specifier: ts.ImportSpecifier): string =>
	specifier.propertyName?.text ?? specifier.name.text;

export const resolveReactWrapperImports = (
	sourceFile: ts.SourceFile,
	checker: ts.TypeChecker,
	importSource: string,
	targetComponentNames: Set<string>,
): ReactImportResolution => {
	const bindings: ReactImportBinding[] = [];
	const localNames = new Set<string>();

	const visit = (node: ts.Node): void => {
		if (!ts.isImportDeclaration(node)) {
			ts.forEachChild(node, visit);
			return;
		}

		const moduleSpecifier = node.moduleSpecifier;
		if (!ts.isStringLiteral(moduleSpecifier) || moduleSpecifier.text !== importSource) {
			return;
		}

		const namedBindings = node.importClause?.namedBindings;
		if (!namedBindings || !ts.isNamedImports(namedBindings)) {
			return;
		}

		for (const specifier of namedBindings.elements) {
			const importedName = getImportedSpecifierName(specifier);
			if (!targetComponentNames.has(importedName)) {
				continue;
			}

			const localName = specifier.name.text;
			localNames.add(localName);
			bindings.push({
				localName,
				importedName,
				importDeclaration: node,
				importSpecifier: specifier,
			});
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

	return { localNames, bindings, isOfficialWrapperComponent };
};
