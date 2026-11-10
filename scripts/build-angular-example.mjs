import { spawnSync } from "node:child_process";
import { getDisplayVersion } from "./display-version.mjs";

const version = getDisplayVersion();
const result = spawnSync(
	"pnpm",
	[
		"exec",
		"ng",
		"build",
		...process.argv.slice(2),
		"--define",
		`PACKAGE_VERSION=${JSON.stringify(version) ?? "undefined"}`,
	],
	{ stdio: "inherit" },
);
if (result.error) {
	throw result.error;
}
if (result.status === null) {
	throw new Error(`Angular build terminated by signal ${result.signal}`);
}
process.exitCode = result.status;
