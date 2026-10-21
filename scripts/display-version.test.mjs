import assert from "node:assert/strict";
import { test } from "node:test";
import { getDisplayVersion } from "./display-version.mjs";

test("uses the exact publisher version for releases and canaries", () => {
	for (const version of ["41.12.0", "41.12.1-canary.123.0"]) {
		assert.equal(
			getDisplayVersion({ CI: "true", PACKAGE_VERSION: version }),
			version,
		);
	}
});

test("preserves local fallbacks without injected metadata", () => {
	assert.equal(getDisplayVersion({}), undefined);
	assert.equal(getDisplayVersion({ CI: "false" }), undefined);
	assert.equal(getDisplayVersion({ PACKAGE_VERSION: "" }), undefined);
});

test("also accepts an injected version outside CI", () => {
	assert.equal(getDisplayVersion({ PACKAGE_VERSION: "41.12.0" }), "41.12.0");
});

test("rejects missing, empty, or whitespace-only versions in CI", () => {
	for (const CI of ["true", "1"]) {
		for (const PACKAGE_VERSION of [undefined, "", "  "]) {
			assert.throws(
				() => getDisplayVersion({ CI, PACKAGE_VERSION }),
				/PACKAGE_VERSION is required for CI deployment builds/,
			);
		}
	}
});
