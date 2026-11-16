export function getDisplayVersion(env?: {
	PACKAGE_VERSION?: string;
	CI?: string;
}): string | undefined;
