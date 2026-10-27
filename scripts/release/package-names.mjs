export const packageNames = Object.freeze(
	["stencil", "angular", "react", "vue"].map((framework) =>
		Object.freeze({
			legacy: `@infineon/infineon-design-system-${framework}`,
			canonical:
				framework === "stencil"
					? "@infineon/design-system"
					: `@infineon/design-system-${framework}`,
			source:
				framework === "stencil"
					? "packages/components"
					: `packages/wrapper-${framework}`,
		}),
	),
);
