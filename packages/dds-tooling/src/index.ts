/**
 * Shared tooling for the Infineon Design System
 * Provides story parsing and code generation utilities
 */

// DOM and HTML utilities
export { setupDOM } from "./dom-utils.js";
export { cleanLitHTML, unwrapComponent } from "./html-utils.js";

// Story rendering and parsing
export {
  renderStoryToHTML,
  htmlToElement,
} from "./story-renderer.js";
export {
  parseElement,
  extractEvents,
  renderStoriesToHTML,
  extractComponentInfo,
} from "./story-parser.js";

// Code formatters
export { HTMLCodeFormatter } from "./formatters/html-formatter.js";
export { ReactCodeFormatter } from "./formatters/react-formatter.js";
export { VueCodeFormatter } from "./formatters/vue-formatter.js";
export { AngularCodeFormatter } from "./formatters/angular-formatter.js";

// String utilities
export {
  toPascalCase,
  toCamelCase,
  toReactEventName,
  toHandlerFunctionName,
  toAngularEventName,
  escapeHTML,
  indent,
  escapeRegex,
  formatTitle,
  escapeForTemplateLiteral,
  escapeForSingleQuotedAttr,
} from "./utils/string-utils.js";

// Types and interfaces
export type {
  ComponentStructure,
  ComponentEvent,
  ComponentInfo,
  StoryMetadata,
  StoryExport,
  ParsedStory,
} from "./types.js";

export type {
  ICodeFormatter,
  FormatOptions,
} from "./formatter-interface.js";
