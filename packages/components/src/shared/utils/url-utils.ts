const DUMMY_BASE_URL = "https://example.com/";
const BLOCKED_PROTOCOLS = new Set(["javascript:", "vbscript:"]);

export function sanitizeHref(href: string | undefined): string | undefined {
	if (href === undefined) {
		return undefined;
	}

	try {
		const protocol = new URL(href, DUMMY_BASE_URL).protocol;
		return BLOCKED_PROTOCOLS.has(protocol) ? undefined : href;
	} catch {
		return href;
	}
}
