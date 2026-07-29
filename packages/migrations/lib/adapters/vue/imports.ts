import { createRequire } from "node:module";
import type { ImportSpecifier } from "jscodeshift";

const require = createRequire(import.meta.url);
const jscodeshift: typeof import("jscodeshift") = require("jscodeshift");
const j = jscodeshift.withParser("tsx");

const getImportedSpecifierName = (
	specifier: ImportSpecifier,
): string | null => {
	const imported = specifier.imported as {
		type?: string;
		name?: string;
		value?: unknown;
	};
	if (imported.type === "Identifier" && typeof imported.name === "string") {
		return imported.name;
	}

	if (typeof imported.value === "string") {
		return imported.value;
	}

	return null;
};

export interface VueRenderHelperImport {
	importedName: "h" | "createVNode";
	localName: string;
}

export interface VueImportResolution {
	localNames: Set<string>;
	renderHelpers: VueRenderHelperImport[];
}

const VUE_SOURCE = "vue";
const RENDER_HELPER_NAMES = new Set<"h" | "createVNode">(["h", "createVNode"]);

const collectRenderHelpers = (
	root: ReturnType<typeof j>,
): VueRenderHelperImport[] => {
	const helpers: VueRenderHelperImport[] = [];

	root.find(j.ImportDeclaration).forEach((path) => {
		const source = path.node.source as { value?: unknown } | null | undefined;
		if (source?.value !== VUE_SOURCE) {
			return;
		}

		for (const specifier of path.node.specifiers ?? []) {
			if (specifier.type !== "ImportSpecifier") {
				continue;
			}

			const importedName = getImportedSpecifierName(specifier);
			if (
				importedName !== "h" &&
				importedName !== "createVNode"
			) {
				continue;
			}

			const localName =
				(specifier.local as { name?: string } | null)?.name ?? importedName;
			helpers.push({ importedName, localName });
		}
	});

	return helpers;
};

export const resolveVueWrapperImports = (
	content: string,
	importSource: string,
	targetComponentNames: Set<string>,
): VueImportResolution => {
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
				const localName =
					(specifier.local as { name?: string } | null)?.name ?? importedName;
				localNames.add(localName);
			}
		}
	});

	return { localNames, renderHelpers: collectRenderHelpers(root) };
};
