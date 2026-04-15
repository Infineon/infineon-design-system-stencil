#!/usr/bin/env node

import { runMigration } from "@infineon/design-system-migrations";

runMigration().catch((error) => {
	console.error(error instanceof Error ? error.message : String(error));
	process.exitCode = 1;
});