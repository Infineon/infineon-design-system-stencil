/**
 * Shared tooling for the Infineon Design System
 * Provides story parsing and code generation utilities
 */

// DOM and HTML utilities
export { setupDOM } from "./dom-utils.js";
export type {
  FormatOptions,
  ICodeFormatter,
} from "./formatter-interface.js";
export { AngularCodeFormatter } from "./formatters/angular-formatter.js";
// Code formatters
export { HTMLCodeFormatter } from "./formatters/html-formatter.js";
export { ReactCodeFormatter } from "./formatters/react-formatter.js";
export { VueCodeFormatter } from "./formatters/vue-formatter.js";
export { cleanLitHTML, unwrapComponent } from "./html-utils.js";
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
  ComponentStructure,
  ComponentEvent,
  ComponentInfo,
  StoryMetadata,
  StoryExport,
  ParsedStory,
} from "./types.js";
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
