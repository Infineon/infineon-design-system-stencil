export function getDisplayVersion(env = process.env) {
	const version = env.PACKAGE_VERSION;
	if (version !== undefined && version.trim() !== "") {
		return version;
	}
	if (env.CI === "true" || env.CI === "1") {
		throw new Error("PACKAGE_VERSION is required for CI deployment builds");
	}
	return undefined;
}
