#!/usr/bin/env node

const { execSync } = require("node:child_process");

function runCommand(command, errorMessage) {
	try {
		execSync(command, { stdio: "inherit" });
		return true;
	} catch {
		console.error(`\n❌ ${errorMessage}`);
		return false;
	}
}

console.log("🔍 Running pre-commit checks...\n");

// Run lint-staged (Biome + ESLint on staged files)
console.log("📝 Linting staged files (Biome + ESLint)...");
const lintSuccess = runCommand(
	"pnpm check:staged",
	"Linting failed. Please fix the issues and try again.",
);

if (!lintSuccess) {
	console.error("\n❌ Linting failed. Please fix the issues and try again.");
	process.exit(1);
}

console.log("✅ Linting passed!\n");

// Run tests
// console.log("🧪 Running tests...");
// const testsSuccess = runCommand(
// 	"pnpm test",
// 	"Tests failed. Please fix the failing tests and try again.",
// );

// if (!testsSuccess) {
// 	process.exit(1);
// }

// console.log("✅ All tests passed!\n");
console.log("✨ Pre-commit checks completed successfully!");
