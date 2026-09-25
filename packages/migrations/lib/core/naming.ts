const IFX_PREFIX = /^ifx-/;

export const kebabToCamelCase = (value: string): string =>
	value.replace(/-([a-z])/g, (_, letter: string) => letter.toUpperCase());

export const kebabToPascalCase = (value: string): string => {
	const trimmed = value.replace(IFX_PREFIX, "");
	return trimmed
		.split("-")
		.filter(Boolean)
		.map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
		.join("");
};

export const tagNameToReactComponentName = (tagName: string): string =>
	`Ifx${kebabToPascalCase(tagName)}`;

export const vueComponentNameToKebab = (componentName: string): string =>
	componentName
		.replace(/([a-z0-9])([A-Z])/g, "$1-$2")
		.toLowerCase();
