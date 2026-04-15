import assert from "node:assert/strict";
import test from "node:test";

import {
	kebabToCamelCase,
	kebabToPascalCase,
	tagNameToReactComponentName,
} from "../lib/naming.js";

test("naming helpers convert canonical component names for framework adapters", () => {
	assert.equal(kebabToCamelCase("auto-collapse"), "autoCollapse");
	assert.equal(kebabToPascalCase("ifx-expansion-panel"), "ExpansionPanel");
	assert.equal(tagNameToReactComponentName("ifx-expansion-panel"), "IfxExpansionPanel");
});