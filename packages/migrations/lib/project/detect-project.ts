import type { CodemodFramework, DetectedProject } from "../core/types.js";
import { readNearestPackageJson } from "./file-system.js";
import { readPackageJsonDependencies } from "./package-json.js";

const DESIGN_SYSTEM_PACKAGE_BY_FRAMEWORK: Record<CodemodFramework, string> = {
	html: "@infineon/infineon-design-system-stencil",
	react: "@infineon/infineon-design-system-react",
	angular: "@infineon/infineon-design-system-angular",
	vue: "@infineon/infineon-design-system-vue",
};

const AUTO_DETECTION_ORDER: CodemodFramework[] = ["react", "angular", "vue", "html"];

const resolveFramework = (
	hasDependency: (name: string) => boolean,
	preferredFramework?: CodemodFramework,
): CodemodFramework => {
	if (preferredFramework) {
		return preferredFramework;
	}

	const installedIfxFrameworks = AUTO_DETECTION_ORDER.filter((candidateFramework) =>
		hasDependency(DESIGN_SYSTEM_PACKAGE_BY_FRAMEWORK[candidateFramework]),
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

	if (hasDependency("react")) {
		return "react";
	}

	if (hasDependency("@angular/core")) {
		return "angular";
	}

	if (hasDependency("vue")) {
		return "vue";
	}

	return "html";
};

export const detectProject = async (
	cwd: string,
	framework?: CodemodFramework,
): Promise<DetectedProject> => {
	const resolvedPackageJson = await readNearestPackageJson(cwd);
	const fallbackFramework = framework ?? "html";

	if (!resolvedPackageJson) {
		return {
			rootDirectory: cwd,
			framework: fallbackFramework,
			designSystemPackage: DESIGN_SYSTEM_PACKAGE_BY_FRAMEWORK[fallbackFramework],
		};
	}

	const packageDependencies = readPackageJsonDependencies(resolvedPackageJson);
	const detectedFramework = resolveFramework(packageDependencies.hasDependency, framework);
	const designSystemPackage = DESIGN_SYSTEM_PACKAGE_BY_FRAMEWORK[detectedFramework];

	return {
		rootDirectory: resolvedPackageJson.directory,
		framework: detectedFramework,
		designSystemPackage,
		declaredVersion: packageDependencies.getDeclaredVersion(designSystemPackage),
	};
};