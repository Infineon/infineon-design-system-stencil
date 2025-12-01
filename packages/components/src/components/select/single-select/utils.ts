export type FilterObjectFn = (
	value: any,
	key: string | number,
	obj: object,
) => boolean;

/**
 * Filter out entries from an object.
 *
 * @param obj - object to filter.
 * @param fn - filter function.
 * @returns a new object without the entries satisfying the filter function.
 */
export function filterObject(obj: object, fn: FilterObjectFn): object {
	return Object.keys(obj).reduce((accum, property) => {
		const value = obj[property];

		if (fn(value, property, obj)) {
			accum[property] = value;
		}

		return accum;
	}, {});
}

/**
 * Check if given parameter is not undefined.
 *
 * @param value - value to check.
 * @returns whether the value is defined.
 */
export function isDefined(value: any): boolean {
	return typeof value !== "undefined";
}

/**
 * Returns the list of values.
 *
 * @param value - Value or list of values.
 * @returns List of values.
 */
export function getValues(value: string | Array<string>): Array<string> {
	return typeof value !== "undefined"
		? [].concat(typeof value === "string" ? value.split(",") : value)
		: [];
}

/**
 * Determines whether a string is valid JSON and can be parsed.
 *
 * @param str - The input string.
 * @returns - Whether the string can be parsed.
 */
export function isJSONParseable(str: string): boolean {
	try {
		JSON.parse(str);
		return true;
	} catch (e) {
		return false;
	}
}
