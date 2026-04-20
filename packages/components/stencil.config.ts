import { angularOutputTarget, type ValueAccessorConfig } from "@stencil/angular-output-target";
import type { Config } from "@stencil/core";
import type { OutputTarget } from "@stencil/core/internal";
import { reactOutputTarget } from "@stencil/react-output-target";
import { sass } from "@stencil/sass";
import { type ComponentModelConfig, vueOutputTarget } from "@stencil/vue-output-target";

const componentCorePackage = "@infineon/infineon-design-system-stencil";

const isDevMode = process.argv.includes('--dev') || process.argv.includes('--watch');
const buildTarget = process.env.BUILD_TARGET;

/**
 * Component Models for Vue v-model Support
 * -----------------------------------------
 * Configures two-way data binding (v-model) for Vue components.
 * Maps component events to properties for reactive form integration.
 * 
 * Example: <ifx-switch v-model="isEnabled" />
 * 
 * @see https://stenciljs.com/docs/vue
 */
const componentModels: ComponentModelConfig[] = [
	{
		elements: ["ifx-switch", "ifx-checkbox"],
		event: "ifxChange",
		targetAttr: "checked",
	},
	{
		elements: ["ifx-search-field", "ifx-search-bar", "ifx-text-field", "ifx-textarea"],
		event: "ifxInput",
		targetAttr: "value",
	},
	{
		elements: ["ifx-modal"],
		event: "ifxOpenedChange",
		targetAttr: "opened",
	},
];

/**
 * Value Accessor Configs for Angular Forms Support
 * -------------------------------------------------
 * Enables Angular's ControlValueAccessor interface for reactive and template-driven forms.
 * Allows components to work with [(ngModel)], formControl, and formControlName.
 * 
 * Example: <ifx-switch [(ngModel)]="isEnabled"></ifx-switch>
 * 
 * @see https://stenciljs.com/docs/angular
 */
const valueAccessorConfigs: ValueAccessorConfig[] = [
	{
		elementSelectors: ["ifx-switch", "ifx-checkbox"],
		event: "ifxChange",
		targetAttr: "checked",
		type: "boolean",
	},
	{
		elementSelectors: ["ifx-search-field", "ifx-search-bar", "ifx-text-field", "ifx-textarea"],
		event: "ifxInput",
		targetAttr: "value",
		type: "text",
	},
	// Note: ifx-modal uses a custom IfxModalValueAccessor (standalone/src/lib/ifx-modal-value-accessor.ts)
	// because of Stencil limitation: https://github.com/stenciljs/output-targets/issues/87
	// Different targetAttr values in the same type group are not supported by code generation.
];

//////////////////////////////
/////// OUTPUT TARGETS ///////
//////////////////////////////

/**
 * Output target needed for index.html and storybook
 */
const wwwOutput: OutputTarget = {
	type: "www" as const,
	serviceWorker: null,
	empty: false,
	copy: isDevMode ? [] : undefined,
}

/**
 * Builds readme files, custom element manifest and hydrate script.
 * Needed for example generation and before publishing to npm.
 */

const docsOutputs = [
    {
        type: "docs-readme" as const,
    },
    {
        type: 'docs-custom-elements-manifest' as const,
        file: 'dist/cem.json'
    },
    {
        type: "dist-hydrate-script" as const,
        dir: "./dist/hydrate",
    },
    {
        type: 'docs-json' as const,
        file: 'dist/docs.json',
    },
];

/**
 * This output target creates a small entry point that registers all components and lazy loads them on demand.
 * It enables users to use the components from CDN or importing them in a bootstrap script.
 * Usage:
 * ```javascript
 * import { defineCustomElements } from '@infineon/infineon-design-system-stencil/loader';
 * defineCustomElements(window);
 * ```
 * or
 * ```html
 * <script type="module" src="https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil"></script>
 * ```
 * See https://stenciljs.com/docs/distribution and https://stenciljs.com/docs/publishing#lazy-loading
 *
 * This is also required by the Angular-module output target.
 */
const distOutput: OutputTarget = {
	type: "dist",
};

/**
* This output target creates standalone custom elements that directly extend HTMLElement without any lazy loading.
* This may be prefered for projects that already handle bundling, lazy-loading and defining the custom elements themselves.
* However, usage requires further configuration in the consuming project.
* See https://stenciljs.com/docs/custom-elements and https://stenciljs.com/docs/publishing#standalone
*
* This is also required by the Angular-standalone, React and Vue output targets.
*/
const distCustomElementsOutput: OutputTarget = {
	type: "dist-custom-elements",
	customElementsExportBehavior: "single-export-module",
	externalRuntime: false,
};

// The wrapper outputs will be built to build-wrapper and the prebuild script will copy them to the respective wrapper packages. 
// This is needed to implement caching between the wrapper and component builds and avoid unnecessary rebuilds of the wrappers.

const angularOutputs: OutputTarget[] = [
	angularOutputTarget({
		componentCorePackage: componentCorePackage,
		outputType: "component",
		directivesProxyFile:
			"build-wrapper/angular/lib/stencil-generated/components.ts",
		directivesArrayFile:
			"build-wrapper/angular/lib/stencil-generated/index.ts",
		valueAccessorConfigs: valueAccessorConfigs,
	}),
	angularOutputTarget({
		componentCorePackage: componentCorePackage,
		outputType: "standalone",
		directivesProxyFile:
			"build-wrapper/angular-standalone/src/lib/stencil-generated/components.ts",
		directivesArrayFile:
			"build-wrapper/angular-standalone/src/lib/stencil-generated/index.ts",
		valueAccessorConfigs: valueAccessorConfigs,
	}),
];

const reactOutput: OutputTarget = reactOutputTarget({
	// Relative path to where the React components will be generated
	outDir: "build-wrapper/react/lib/components/stencil-generated/",

});

const vueOutput: OutputTarget = vueOutputTarget({
	componentCorePackage: componentCorePackage,
	proxiesFile: "build-wrapper/vue/lib/stencil-generated/components.ts",
	includeImportCustomElements: true,
	componentModels: componentModels,
});


const getOutputTargets = (): OutputTarget[] => {
	switch (buildTarget) {
		case "angular":
			return [
				distOutput,
				distCustomElementsOutput,
				...angularOutputs,
			];
		case "react":
			return [
				distOutput,
				distCustomElementsOutput,
				reactOutput,
			];
		case "vue":
			return [
				distOutput,
				distCustomElementsOutput,
				vueOutput,
			];
		case "html": 
			return [
				distOutput,
			];
		case "www":
			return [
				wwwOutput,
			];
		default:
			return [
				...docsOutputs,
				distOutput,
				distCustomElementsOutput,
				...angularOutputs,
				reactOutput,
				vueOutput,
				wwwOutput,
			];
	}
};

export const config: Config = {
	namespace: "infineon-design-system-stencil",
	globalStyle: "src/global/styles/index.scss",
	globalScript: "src/global/setup.ts",
	outputTargets: getOutputTargets(),
	testing: {
		browserHeadless: "shell",
	},
	plugins: [
		sass({
			includePaths: ["src/global/styles", "src/shared/styles", "node_modules/"],
			injectGlobalPaths: ["src/shared/styles/index.scss"],
		}),
	],
	extras: {
		cloneNodeFix: true,
		enableImportInjection: true,
	},
};
