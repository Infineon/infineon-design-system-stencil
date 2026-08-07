const assert = require("node:assert/strict");
const test = require("node:test");

const { pushReplacement } = require("../migrations/lib/replacements.js");

test("pushReplacement returns index for new replacements", () => {
	const replacements = [];

	const index = pushReplacement(replacements, 4, 8, "clearable", "prop show-delete-icon -> clearable");

	assert.equal(index, 0);
	assert.equal(replacements.length, 1);
	assert.deepEqual(replacements[0], {
		start: 4,
		end: 8,
		text: "clearable",
		label: "prop show-delete-icon -> clearable",
	});
});

test("pushReplacement reuses existing index for duplicate replacements", () => {
	const replacements = [];

	const firstIndex = pushReplacement(replacements, 10, 20, "clearable", "first");
	const secondIndex = pushReplacement(replacements, 10, 20, "clearable", "second");

	assert.equal(firstIndex, 0);
	assert.equal(secondIndex, 0);
	assert.equal(replacements.length, 1);
	assert.equal(replacements[0].label, "first");
});