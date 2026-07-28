import { createRequire } from "node:module";
import type { ImportSpecifier } from "jscodeshift";

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

export interface ReactImportResolution {
	localNames: Set<string>;
}

export const resolveReactWrapperImports = (
	content: string,
	importSource: string,
	targetComponentNames: Set<string>,
): ReactImportResolution => {
	const root = j(content);
	const localNames = new Set<string>();

	root.find(j.ImportDeclaration).forEach((path) => {
		const source = path.node.source as { value?: unknown } | null | undefined;
		if (source?.value !== importSource) {
			return;
		}

		for (const specifier of path.node.specifiers ?? []) {
			if (specifier.type !== "ImportSpecifier") {
				continue;
			}

			const importedName = getImportedSpecifierName(specifier);
			if (importedName === null) {
				continue;
			}

			if (targetComponentNames.has(importedName)) {
				const localName = (specifier.local as { name?: string } | null)?.name ?? importedName;
				localNames.add(localName);
			}
		}
	});

	return { localNames };
};
