import type { ComponentInfo } from "../types.js";

function toKebabCase(value: string): string {
	return value
		.replace(/([a-z0-9])([A-Z])/g, "$1-$2")
		.replace(/\s+/g, "-")
		.toLowerCase();
}

function parseAttributeValue(value: string): unknown {
	if (value.startsWith("__JSON__")) {
		const json = value.replace(/^__JSON__/, "");
		try {
			return JSON.parse(json);
		} catch {
			return json;
		}
	}

	if (value === "true") return true;
	if (value === "false") return false;
	if (value === "null") return null;
	if (value === "") return "";
	if (!Number.isNaN(Number(value))) return Number(value);
	return value;
}

function dedupeValues(values: unknown[]): unknown[] {
	const result: unknown[] = [];
	const seen = new Set<string>();

	for (const value of values) {
		if (value === undefined) continue;
		let key: string;
		if (typeof value === "object" && value !== null) {
			try {
				key = `object:${JSON.stringify(value)}`;
			} catch {
				key = `object:${String(value)}`;
			}
		} else {
			key = `${typeof value}:${String(value)}`;
		}

		if (!seen.has(key)) {
			seen.add(key);
			result.push(value);
		}
	}

	return result;
}

export function getControlType(argType: Record<string, unknown>): string {
	const controlValue = argType.control;
	const controlType =
		typeof controlValue === "string"
			? controlValue
			: (controlValue as { type?: unknown } | undefined)?.type;
	return typeof controlType === "string" ? controlType.toLowerCase() : "";
}

export function isStoryOnlyControl(argType: Record<string, unknown>): boolean {
	const category = (argType.table as { category?: unknown } | undefined)?.category;
	return typeof category === "string" && category.toLowerCase().includes("story controls");
}

/**
 * Extracts the child element tag name from an argType's table category.
 * Matches the convention "ifx-{tag} props" (e.g. "ifx-checkbox props" → "ifx-checkbox").
 * Returns null if the category does not follow this convention or does not reference a child element.
 */
export function getChildTagFromArgType(argType: Record<string, unknown>): string | null {
	const category = (argType.table as { category?: unknown } | undefined)?.category;
	if (typeof category !== "string") return null;
	const match = category.match(/^(ifx-[a-z0-9-]+)\s+props$/i);
	return match ? match[1].toLowerCase() : null;
}

export function resolveControlDefaultValue(
	component: ComponentInfo,
	argKey: string,
	propKey: string,
): unknown {
	const args = component.defaultArgs || {};
	if (argKey in args) return args[argKey];
	if (propKey in args) return args[propKey];

	const attrs = component.structure.attributes || {};
	const candidates = [
		argKey,
		propKey,
		toKebabCase(argKey),
		toKebabCase(propKey),
		argKey.toLowerCase(),
		propKey.toLowerCase(),
	];

	for (const key of candidates) {
		if (key in attrs) return parseAttributeValue(attrs[key]);
	}

	return undefined;
}

export function inferControlOptions(
	argKey: string,
	controlType: string,
	defaultValue: unknown,
): unknown[] {
	const type = controlType.toLowerCase();
	const values: unknown[] = [];

	if (type === "boolean" || typeof defaultValue === "boolean") {
		const base = Boolean(defaultValue);
		return [base, !base];
	}

	if (typeof defaultValue === "string") values.push(defaultValue);
	if (typeof defaultValue === "number") values.push(defaultValue);
	if (defaultValue !== undefined && defaultValue !== null && typeof defaultValue === "object") {
		values.push(defaultValue);
	}

	if (["text", "string", "textarea", "email", "password", "search", "url"].includes(type)) {
		const seed = typeof defaultValue === "string" ? defaultValue : "";
		values.push(seed, `${argKey}-example`);
	}

	if (["number", "range"].includes(type)) {
		const seed = typeof defaultValue === "number" ? defaultValue : 0;
		values.push(seed, seed + 1);
	}

	if (type === "color") {
		const seed = typeof defaultValue === "string" && defaultValue ? defaultValue : "#006699";
		values.push(seed, "#f26d21");
	}

	if (type === "date") {
		const seed = typeof defaultValue === "string" && defaultValue ? defaultValue : "2026-01-01";
		values.push(seed, "2026-12-31");
	}

	if (type === "object") {
		if (defaultValue && typeof defaultValue === "object") {
			values.push(defaultValue);
		}
		values.push({ sample: argKey });
	}

	if (values.length === 0) {
		if (defaultValue !== undefined) {
			values.push(defaultValue);
		} else {
			values.push("", `${argKey}-example`);
		}
	}

	return dedupeValues(values);
}

export function isNumericControlType(controlType: string): boolean {
	return ["number", "range"].includes(controlType.toLowerCase());
}

export function inferControlValue(
	argKey: string,
	controlType: string,
	defaultValue: unknown,
): string | number {
	const type = controlType.toLowerCase();

	if (isNumericControlType(type)) {
		if (typeof defaultValue === "number") return defaultValue;
		if (typeof defaultValue === "string" && defaultValue !== "") {
			const parsed = Number(defaultValue);
			if (!Number.isNaN(parsed)) return parsed;
		}
		return 0;
	}

	if (type === "color") {
		return typeof defaultValue === "string" && defaultValue ? defaultValue : "#006699";
	}

	if (type === "date") {
		return typeof defaultValue === "string" && defaultValue ? defaultValue : "2026-01-01";
	}

	if (typeof defaultValue === "string") return defaultValue;
	if (typeof defaultValue === "number") return String(defaultValue);
	if (defaultValue && typeof defaultValue === "object") {
		try {
			return JSON.stringify(defaultValue);
		} catch {
			return `{"sample":"${argKey}"}`;
		}
	}

	return "";
}