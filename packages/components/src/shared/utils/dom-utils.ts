export const isNestedInIfxComponent = (el: HTMLElement): boolean => {
	let parent: Node | ShadowRoot | null = el.parentNode;

	while (parent) {
		if (parent instanceof ShadowRoot) {
			parent = parent.host;
			continue;
		}

		if (
			parent instanceof HTMLElement &&
			parent.tagName.toLowerCase().startsWith("ifx")
		) {
			return true;
		}

		parent = parent.parentNode;
	}

	return false;
};
