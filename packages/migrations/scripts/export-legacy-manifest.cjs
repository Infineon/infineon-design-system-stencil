/**
 * Exports the canonical release-based manifest.json to the legacy flat
 * migrations/v1.json format expected by @infineon/design-system-vue and
 * @infineon/design-system-angular-wrapper schematics.
 */
const fs = require("fs");
const path = require("path");

const packageRoot = path.resolve(__dirname, "..");
const manifestPath = path.join(packageRoot, "migrations", "manifest.json");
const outputPath =
	process.argv[2] ?? path.join(packageRoot, "migrations", "v1.json");

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

if (manifest.schemaVersion !== 1) {
	throw new Error(
		`Unsupported manifest schemaVersion: ${manifest.schemaVersion}`,
	);
}

const migrations = [];
for (const release of manifest.releases ?? []) {
	for (const operation of release.operations ?? []) {
		if (operation.type !== "rename-prop") {
			continue;
		}

		migrations.push({
			type: "prop-rename",
			component: operation.component,
			from: operation.from,
			to: operation.to,
			targetVersion: release.version,
			notes: operation.notes,
		});
	}
}

const output = { migrations };
fs.writeFileSync(outputPath, JSON.stringify(output, null, "\t") + "\n");
console.log(`Exported ${migrations.length} legacy migrations to ${outputPath}`);
