const preset = require("jest-stencil-runner/preset");

module.exports = {
	...preset,
	rootDir: __dirname,
	collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts"],
	coverageDirectory: "coverage",
};
