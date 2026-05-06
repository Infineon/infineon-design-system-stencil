/**
 * Shared tooling for the Infineon Design System
 * Provides story parsing and code generation utilities
 */

export type {
	FormatOptions,
	ICodeFormatter,
} from "./formatter-interface.js";
export { AngularCodeFormatter } from "./formatters/angular-formatter.js";
// Code formatters
export { HTMLCodeFormatter } from "./formatters/html-formatter.js";
export { ReactCodeFormatter } from "./formatters/react-formatter.js";
export { VueCodeFormatter } from "./formatters/vue-formatter.js";
export {
	extractComponentInfo,
	parseElement,
	renderStoriesToHTML,
} from "./story-parser.js";
// Story rendering and parsing
export {
	htmlToElement,
	renderStoryToHTML,
} from "./story-renderer.js";
// Types and interfaces
export type {
	ComponentEvent,
	ComponentInfo,
	ComponentStructure,
	ParsedStory,
	StoryExport,
	StoryMetadata,
} from "./types.js";
// DOM and HTML utilities
export { setupDOM } from "./utils/dom-utils.js";
export { cleanLitHTML, unwrapComponent } from "./utils/html-utils.js";
export {
	getControlType,
	inferControlOptions,
	inferControlValue,
	isNumericControlType,
	resolveControlDefaultValue,
} from "./utils/control-utils.js";
export {
	ALL_COMPONENTS_ID,
	buildAlphabeticalNavbarGroups,
	buildExampleId,
} from "./utils/navbar-utils.js";
// String utilities
export {
	escapeForSingleQuotedAttr,
	escapeForTemplateLiteral,
	escapeHTML,
	escapeRegex,
	formatTitle,
	indent,
	toAngularEventName,
	toCamelCase,
	toHandlerFunctionName,
	toPascalCase,
	toReactEventName,
} from "./utils/string-utils.js";
