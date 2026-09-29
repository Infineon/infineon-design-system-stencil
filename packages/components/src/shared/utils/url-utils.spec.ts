import { sanitizeHref } from "./url-utils";

describe("sanitizeHref", () => {
	it.each([
		"javascript:alert(1)",
		" JAVASCRIPT:alert(1)",
		"vbscript:msgbox(1)",
	])("blocks executable protocol %s", (href) => {
		expect(sanitizeHref(href)).toBeUndefined();
	});

	it.each([
		undefined,
		"",
		"/relative/path",
		"data:text/plain,hello",
		"blob:https://example.com/id",
		"file:///tmp/example.txt",
		"custom:value",
		"https://example.com/path",
		"not a valid URL %",
	])("preserves allowed or unvalidated value %s", (href) => {
		expect(sanitizeHref(href)).toBe(href);
	});
});
