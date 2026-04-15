import { readNearestPackageJson } from "./file-system.js";
import type { CodemodFramework, ProjectDetectionResult } from "./types.js";
import { extractSemverFromRange } from "./version.js";

const INSTALLED_PACKAGE_BY_FRAMEWORK: Record<CodemodFramework, string> = {
	html: "@infineon/infineon-design-system-stencil",
	react: "@infineon/infineon-design-system-react",
	angular: "@infineon/infineon-design-system-angular",
	vue: "@infineon/infineon-design-system-vue",
};

const AUTO_DETECTION_ORDER: CodemodFramework[] = ["react", "angular", "vue", "html"];

const resolveFramework = (
	dependencies: Record<string, string>,
	preferredFramework?: CodemodFramework,
): CodemodFramework => {
	if (preferredFramework) {
		return preferredFramework;
	}

	const installedIfxFrameworks = AUTO_DETECTION_ORDER.filter(
		(candidateFramework) => Boolean(dependencies[INSTALLED_PACKAGE_BY_FRAMEWORK[candidateFramework]]),
	);

	if (installedIfxFrameworks.length > 0) {
		if (installedIfxFrameworks.length > 1) {
			throw new Error(
				`Multiple IFX packages were detected (${installedIfxFrameworks.join(", ")}). Pass --framework to choose the correct runner.`,
			);
		}

		const [framework] = installedIfxFrameworks;
		return framework;
	}

	if (dependencies.react) {
		return "react";
	}

	if (dependencies["@angular/core"]) {
		return "angular";
	}

	if (dependencies.vue) {
		return "vue";
	}

	return "html";
};

export const detectProject = async (
	cwd: string,
	framework?: CodemodFramework,
): Promise<ProjectDetectionResult> => {
	const resolvedPackageJson = await readNearestPackageJson(cwd);
	const fallbackFramework = framework ?? "html";
	if (!resolvedPackageJson) {
		return {
			framework: fallbackFramework,
			installedPackage: INSTALLED_PACKAGE_BY_FRAMEWORK[fallbackFramework],
		};
	}

	const { packageJson } = resolvedPackageJson;

	const dependencies = {
		...(typeof packageJson.dependencies === "object" ? packageJson.dependencies : {}),
		...(typeof packageJson.devDependencies === "object" ? packageJson.devDependencies : {}),
		...(typeof packageJson.peerDependencies === "object" ? packageJson.peerDependencies : {}),
	} as Record<string, string>;

	const detectedFramework = resolveFramework(dependencies, framework);
	const installedPackage = INSTALLED_PACKAGE_BY_FRAMEWORK[detectedFramework];
	const installedVersion = extractSemverFromRange(dependencies[installedPackage]);

	return {
		framework: detectedFramework,
		installedPackage,
		installedVersion,
	};
};