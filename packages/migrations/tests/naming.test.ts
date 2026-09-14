import assert from "node:assert/strict";
import test from "node:test";

import {
	kebabToCamelCase,
	kebabToPascalCase,
	tagNameToReactComponentName,
	vueComponentNameToKebab,
} from "../lib/core/naming.js";

test("naming helpers convert canonical component names for framework adapters", () => {
	assert.equal(kebabToCamelCase("auto-collapse"), "autoCollapse");
	assert.equal(kebabToPascalCase("ifx-expansion-panel"), "ExpansionPanel");
	assert.equal(
		tagNameToReactComponentName("ifx-expansion-panel"),
		"IfxExpansionPanel",
	);
	assert.equal(vueComponentNameToKebab("IfxTextField"), "ifx-text-field");
	assert.equal(vueComponentNameToKebab("DdsTextField"), "dds-text-field");
});
