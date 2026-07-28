#!/usr/bin/env node

import { runMigration } from "../dist/index.js";

runMigration().catch((error) => {
	console.error(error instanceof Error ? error.message : String(error));
	process.exitCode = 1;
});
