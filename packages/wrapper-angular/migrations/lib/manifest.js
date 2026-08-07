const fs = require("fs");
const path = require("path");

const SUPPORTED_OPERATION_TYPES = new Set(["rename-prop"]);

function assertCondition(condition, message) {
	if (!condition) {
		throw new Error(message);
	}
}

function assertNonEmptyString(value, message) {
	if (typeof value !== "string" || value.trim() === "") {
		throw new Error(message);
	}

	return value;
}

function getDefaultManifestPath() {
	return path.resolve(__dirname, "..", "shared", "manifest.json");
}

function validateManifest(manifest, manifestPath) {
	assertCondition(manifest && typeof manifest === "object" && !Array.isArray(manifest), `Invalid manifest at ${manifestPath}: expected an object.`);
	assertCondition(manifest.schemaVersion === 1, `Invalid manifest at ${manifestPath}: schemaVersion must be 1.`);
	assertCondition(Array.isArray(manifest.releases), `Invalid manifest at ${manifestPath}: releases must be an array.`);

	const seenReleaseVersions = new Set();
	const seenOperationIds = new Set();
	const seenComponentFromPairs = new Map();

	for (const [index, release] of manifest.releases.entries()) {
		assertCondition(release && typeof release === "object" && !Array.isArray(release), `Invalid manifest at ${manifestPath}: releases[${index}] must be an object.`);

		const version = assertNonEmptyString(
			release.version,
			`Invalid manifest at ${manifestPath}: releases[${index}].version must be a non-empty string.`,
		);
		assertCondition(!seenReleaseVersions.has(version), `Invalid manifest at ${manifestPath}: duplicate release version "${version}".`);
		seenReleaseVersions.add(version);

		assertCondition(Array.isArray(release.operations), `Invalid manifest at ${manifestPath}: releases[${index}].operations must be an array.`);

		for (const [operationIndex, operation] of release.operations.entries()) {
			const operationPath = `releases[${index}].operations[${operationIndex}]`;
			assertCondition(operation && typeof operation === "object" && !Array.isArray(operation), `Invalid manifest at ${manifestPath}: ${operationPath} must be an object.`);

			const operationId = assertNonEmptyString(
				operation.id,
				`Invalid manifest at ${manifestPath}: ${operationPath}.id must be a non-empty string.`,
			);
			assertCondition(!seenOperationIds.has(operationId), `Invalid manifest at ${manifestPath}: duplicate operation id "${operationId}".`);
			seenOperationIds.add(operationId);

			const operationType = assertNonEmptyString(
				operation.type,
				`Invalid manifest at ${manifestPath}: ${operationPath}.type must be a non-empty string.`,
			);
			assertCondition(
				SUPPORTED_OPERATION_TYPES.has(operationType),
				`Invalid manifest at ${manifestPath}: ${operationPath}.type "${operationType}" is not supported.`,
			);

			const component = assertNonEmptyString(
				operation.component,
				`Invalid manifest at ${manifestPath}: ${operationPath}.component must be a non-empty string.`,
			);
			const from = assertNonEmptyString(
				operation.from,
				`Invalid manifest at ${manifestPath}: ${operationPath}.from must be a non-empty string.`,
			);
			const to = assertNonEmptyString(
				operation.to,
				`Invalid manifest at ${manifestPath}: ${operationPath}.to must be a non-empty string.`,
			);

			assertCondition(from !== to, `Invalid manifest at ${manifestPath}: ${operationPath}.from and .to must differ.`);

			const componentFromKey = `${component}:${from}`;
			const existingTarget = seenComponentFromPairs.get(componentFromKey);
			assertCondition(
				existingTarget === undefined || existingTarget === to,
				`Invalid manifest at ${manifestPath}: conflicting component/from mapping "${componentFromKey}" targets "${existingTarget}" and "${to}".`,
			);
			seenComponentFromPairs.set(componentFromKey, to);
		}
	}

	return manifest;
}

function loadManifestFromPath(manifestPath) {
	if (!manifestPath) {
		throw new Error("A migration manifest path is required.");
	}

	const resolvedPath = path.resolve(manifestPath);
	if (!fs.existsSync(resolvedPath)) {
		throw new Error(`Unable to locate migration manifest at ${resolvedPath}.`);
	}

	const stats = fs.statSync(resolvedPath);
	if (!stats.isFile()) {
		throw new Error(`Unable to read migration manifest at ${resolvedPath}: expected a file.`);
	}

	let manifest;
	try {
		manifest = JSON.parse(fs.readFileSync(resolvedPath, "utf8"));
	} catch (error) {
		throw new Error(`Unable to parse migration manifest at ${resolvedPath}: ${error.message}`);
	}

	return validateManifest(manifest, resolvedPath);
}

function loadReleaseOperations(version, optionalPath) {
	const resolvedPath = optionalPath ? path.resolve(optionalPath) : getDefaultManifestPath();
	const manifest = loadManifestFromPath(resolvedPath);

	const matchingRelease = (manifest.releases || []).find((release) => release.version === version);
	if (!matchingRelease) {
		throw new Error(`Migration manifest does not contain release "${version}".`);
	}

	return Array.isArray(matchingRelease.operations) ? matchingRelease.operations : [];
}

module.exports = {
	loadManifestFromPath,
	loadReleaseOperations,
};
