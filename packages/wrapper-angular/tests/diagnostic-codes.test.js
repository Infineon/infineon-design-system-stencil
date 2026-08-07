const assert = require("node:assert/strict");
const test = require("node:test");

const { DiagnosticCode: AngularDiagnosticCode } = require("../migrations/lib/diagnostic-codes.js");
const { DiagnosticCode: CanonicalDiagnosticCode } = require("../../migrations/dist/core/diagnostic.js");

test("Angular diagnostic codes match canonical DDS codes", () => {
	assert.equal(AngularDiagnosticCode.TARGET_PROP_ALREADY_EXISTS, CanonicalDiagnosticCode.TARGET_PROP_ALREADY_EXISTS);
	assert.equal(AngularDiagnosticCode.INVALID_MANIFEST, CanonicalDiagnosticCode.INVALID_MANIFEST);
	assert.equal(AngularDiagnosticCode.PARSE_FAILED, CanonicalDiagnosticCode.PARSE_FAILED);
	assert.equal(AngularDiagnosticCode.OVERLAPPING_EDITS, CanonicalDiagnosticCode.OVERLAPPING_EDITS);
	assert.equal(AngularDiagnosticCode.UNSUPPORTED_ANGULAR_BINDING, CanonicalDiagnosticCode.UNSUPPORTED_ANGULAR_BINDING);
	assert.equal(AngularDiagnosticCode.DYNAMIC_INLINE_TEMPLATE_UNSUPPORTED, CanonicalDiagnosticCode.DYNAMIC_INLINE_TEMPLATE_UNSUPPORTED);
});
