import type { Meta, StoryFn } from "@storybook/web-components-vite";
import { action } from "storybook/actions";

const meta: Meta = {
	title: "Components/Action List",
	//tags: ['autodocs'],
	parameters: {
		controls: { expanded: true },
		docs: {
			description: {
				component: `The action list component provides a flexible container for action items. It displays items in a vertical list layout with support for leading and trailing content slots. Use it for navigation menus, settings lists, or any collection of actionable items.`,
			},
		},
	},
	argTypes: {
		// --- FUNCTION ---
		disabled: {
			control: "boolean",
			description: "Controls whether the item is disabled",
			table: { category: "Function", defaultValue: { summary: "false" } },
		},
		href: {
			control: "text",
			description: "URL to navigate to when item is clicked",
			table: { category: "Function", defaultValue: { summary: "undefined" } },
		},
		target: {
			control: "select",
			options: ["_self", "_blank", "_parent", "_top"],
			description: "Target for the link navigation",
			table: { category: "Function", defaultValue: { summary: "_self" } },
		},
		value: {
			control: "text",
			description: "Value associated with this item",
			table: { category: "Function", defaultValue: { summary: "undefined" } },
		},

		// --- CONTENT ---
		itemTitle: {
			control: "text",
			description: "The title text displayed in the item",
			table: { category: "Content", defaultValue: { summary: "undefined" } },
		},
		description: {
			control: "text",
			description: "The description text displayed below the title",
			table: { category: "Content", defaultValue: { summary: "undefined" } },
		},

		// --- ARIA LABELS ---
		listAriaLabel: {
			control: "text",
			description: "Provides an accessible label for the list element",
			table: {
				category: "Aria Labels",
				defaultValue: { summary: "undefined" },
			},
		},
		itemAriaLabel: {
			control: "text",
			description: "Aria label for accessibility support",
			table: {
				category: "Aria Labels",
				defaultValue: { summary: "undefined" },
			},
		},

		// --- CUSTOM EVENTS ---
		ifxActionListItemClick: {
			action: "ifxActionListItemClick",
			table: { category: "Custom Events" },
			description: "Event emitted when the main item area is clicked",
		},
	},
};

export default meta;

const BaseTemplate: StoryFn = (args) => {
	const listEl = document.createElement("ifx-action-list");
	if (args.listAriaLabel)
		listEl.setAttribute("list-aria-label", args.listAriaLabel);

	// Create items based on the story requirements
	listEl.innerHTML = `
    <ifx-action-list-item
      item-title="${args.itemTitle || "Dashboard"}"
      description="${args.description || "View your main dashboard"}"
      value="dashboard"
      ${args.itemAriaLabel ? `item-aria-label="${args.itemAriaLabel}"` : ""}
      ${args.href ? `href="${args.href}"` : ""}
      ${args.target && args.target !== "_self" ? `target="${args.target}"` : ""}
      ${args.disabled ? 'disabled="true"' : ""}>
      <ifx-icon slot="trailing" icon="chevron-right-16"></ifx-icon>
    </ifx-action-list-item>

    <ifx-action-list-item
      item-title="Settings"
      value="settings"
      ${args.itemAriaLabel ? `item-aria-label="${args.itemAriaLabel}"` : ""}>
      <ifx-icon slot="trailing" icon="chevron-right-16"></ifx-icon>
    </ifx-action-list-item>

    <ifx-action-list-item
      item-title="Profile"
      description="Manage your profile information"
      value="profile"
      disabled="true"
      ${args.itemAriaLabel ? `item-aria-label="${args.itemAriaLabel}"` : ""}>
      <ifx-icon slot="trailing" icon="chevron-right-16"></ifx-icon>
    </ifx-action-list-item>

    <ifx-action-list-item
      item-title="Advanced Analytics and Reporting Dashboard with Extended Functionality"
      description="This comprehensive analytics dashboard provides detailed insights into user behavior and system performance metrics."
      value="analytics"
      ${args.itemAriaLabel ? `item-aria-label="${args.itemAriaLabel}"` : ""}>
      <ifx-icon slot="trailing" icon="chevron-right-16"></ifx-icon>
    </ifx-action-list-item>
  `;

	listEl.addEventListener("ifxActionListItemClick", (event) => {
		const customEvent = event as CustomEvent;
		action("ifxActionListItemClick")({
			value: customEvent.detail.value,
			href: customEvent.detail.href,
			target: customEvent.detail.target,
			disabled: customEvent.detail.disabled,
		});
	});

	return listEl;
};

export const Default = BaseTemplate.bind({});
Default.args = {
	listAriaLabel: "Navigation menu",
	itemTitle: "Dashboard",
	description: "View your main dashboard",
	disabled: false,
	itemAriaLabel: "Navigation item",
};

export const InteractiveCheckbox: StoryFn = (args) => {
	const listEl = document.createElement("ifx-action-list");
	if (args.listAriaLabel)
		listEl.setAttribute("list-aria-label", args.listAriaLabel);

	// Create items based on the story requirements
	listEl.innerHTML = `
    <ifx-action-list-item
      item-title="${args.itemTitle || "Enable notifications"}"
      description="${args.description || "Receive notifications for important updates"}"
      value="notifications"
      ${args.itemAriaLabel ? `item-aria-label="${args.itemAriaLabel}"` : ""}
      ${args.href ? `href="${args.href}"` : ""}
      ${args.target && args.target !== "_self" ? `target="${args.target}"` : ""}
      ${args.disabled ? 'disabled="true"' : ""}>
      <ifx-checkbox slot="leading" checked="true"></ifx-checkbox>
    </ifx-action-list-item>

    <ifx-action-list-item
      item-title="Auto-save documents"
      description="Automatically save your work"
      value="autosave"
      ${args.itemAriaLabel ? `item-aria-label="${args.itemAriaLabel}"` : ""}>
      <ifx-checkbox slot="leading" checked="false"></ifx-checkbox>
    </ifx-action-list-item>

    <ifx-action-list-item
      item-title="Enable backups"
      description="Create automatic backups"
      value="backups"
      disabled="true"
      ${args.itemAriaLabel ? `item-aria-label="${args.itemAriaLabel}"` : ""}>
      <ifx-checkbox slot="leading" checked="false"></ifx-checkbox>
    </ifx-action-list-item>

    <ifx-action-list-item
      item-title="Show advanced options"
      value="advanced"
      ${args.itemAriaLabel ? `item-aria-label="${args.itemAriaLabel}"` : ""}>
      <ifx-checkbox slot="leading" checked="true"></ifx-checkbox>
    </ifx-action-list-item>
  `;

	listEl.addEventListener("ifxActionListItemClick", (event) => {
		const customEvent = event as CustomEvent;
		action("ifxActionListItemClick")({
			value: customEvent.detail.value,
			href: customEvent.detail.href,
			target: customEvent.detail.target,
			disabled: customEvent.detail.disabled,
		});
	});

	return listEl;
};

InteractiveCheckbox.args = {
	listAriaLabel: "Interactive list with checkboxes",
	itemTitle: "Enable notifications",
	description: "Receive notifications for important updates",
	disabled: false,
	itemAriaLabel: "Interactive item",
};

InteractiveCheckbox.storyName = "Interactive (with checkbox)";

export const InteractiveSwitch: StoryFn = (args) => {
	const listEl = document.createElement("ifx-action-list");
	if (args.listAriaLabel)
		listEl.setAttribute("list-aria-label", args.listAriaLabel);

	// Create items based on the story requirements
	listEl.innerHTML = `
    <ifx-action-list-item
      item-title="${args.itemTitle || "Enable dark mode"}"
      description="${args.description || "Toggle dark mode for the interface"}"
      value="darkmode"
      ${args.itemAriaLabel ? `item-aria-label="${args.itemAriaLabel}"` : ""}
      ${args.href ? `href="${args.href}"` : ""}
      ${args.target && args.target !== "_self" ? `target="${args.target}"` : ""}
      ${args.disabled ? 'disabled="true"' : ""}>
      <ifx-switch slot="leading" checked="false"></ifx-switch>
    </ifx-action-list-item>

    <ifx-action-list-item
      item-title="Auto-sync data"
      description="Automatically synchronize your data"
      value="autosync"
      ${args.itemAriaLabel ? `item-aria-label="${args.itemAriaLabel}"` : ""}>
      <ifx-switch slot="leading" checked="true"></ifx-switch>
    </ifx-action-list-item>

    <ifx-action-list-item
      item-title="Enable analytics"
      description="Collect usage analytics"
      value="analytics"
      disabled="true"
      ${args.itemAriaLabel ? `item-aria-label="${args.itemAriaLabel}"` : ""}>
      <ifx-switch slot="leading" checked="false"></ifx-switch>
    </ifx-action-list-item>

    <ifx-action-list-item
      item-title="Performance mode"
      value="performance"
      ${args.itemAriaLabel ? `item-aria-label="${args.itemAriaLabel}"` : ""}>
      <ifx-switch slot="leading" checked="true"></ifx-switch>
    </ifx-action-list-item>
  `;

	listEl.addEventListener("ifxActionListItemClick", (event) => {
		const customEvent = event as CustomEvent;
		action("ifxActionListItemClick")({
			value: customEvent.detail.value,
			href: customEvent.detail.href,
			target: customEvent.detail.target,
			disabled: customEvent.detail.disabled,
		});
	});

	return listEl;
};

InteractiveSwitch.args = {
	listAriaLabel: "Interactive list with switches",
	itemTitle: "Enable dark mode",
	description: "Toggle dark mode for the interface",
	disabled: false,
	itemAriaLabel: "Interactive item",
};

InteractiveSwitch.storyName = "Interactive (with switch)";

export const WithIcons: StoryFn = (args) => {
	const listEl = document.createElement("ifx-action-list");
	if (args.listAriaLabel)
		listEl.setAttribute("list-aria-label", args.listAriaLabel);

	listEl.innerHTML = `
    <ifx-action-list-item
      item-title="${args.itemTitle || "Dashboard"}"
      description="${args.description || "View your main dashboard"}"
      value="dashboard"
      ${args.itemAriaLabel ? `item-aria-label="${args.itemAriaLabel}"` : ""}
      ${args.href ? `href="${args.href}"` : ""}
      ${args.target && args.target !== "_self" ? `target="${args.target}"` : ""}
      ${args.disabled ? 'disabled="true"' : ""}>
      <ifx-icon slot="leading" icon="home-16"></ifx-icon>
      <ifx-icon slot="trailing" icon="chevron-right-16"></ifx-icon>
    </ifx-action-list-item>

    <ifx-action-list-item
      item-title="Settings"
      value="settings"
      ${args.itemAriaLabel ? `item-aria-label="${args.itemAriaLabel}"` : ""}>
      <ifx-icon slot="leading" icon="server-16"></ifx-icon>
      <ifx-icon slot="trailing" icon="chevron-right-16"></ifx-icon>
    </ifx-action-list-item>

    <ifx-action-list-item
      item-title="Profile"
      description="Manage your profile information"
      value="profile"
      disabled="true"
      ${args.itemAriaLabel ? `item-aria-label="${args.itemAriaLabel}"` : ""}>
      <ifx-icon slot="leading" icon="user-16"></ifx-icon>
      <ifx-icon slot="trailing" icon="chevron-right-16"></ifx-icon>
    </ifx-action-list-item>

    <ifx-action-list-item
      item-title="Enterprise Resource Planning and Business Intelligence System"
      description="Comprehensive enterprise solution that integrates all aspects of business operations including financial management and human resources."
      value="erp"
      ${args.itemAriaLabel ? `item-aria-label="${args.itemAriaLabel}"` : ""}>
      <ifx-icon slot="leading" icon="chart-16"></ifx-icon>
      <ifx-icon slot="trailing" icon="chevron-right-16"></ifx-icon>
    </ifx-action-list-item>
  `;

	listEl.addEventListener("ifxActionListItemClick", (event) => {
		const customEvent = event as CustomEvent;
		action("ifxActionListItemClick")({
			value: customEvent.detail.value,
			href: customEvent.detail.href,
			target: customEvent.detail.target,
			disabled: customEvent.detail.disabled,
		});
	});

	return listEl;
};

WithIcons.args = {
	listAriaLabel: "Navigation with icons",
	itemTitle: "Dashboard",
	description: "View your main dashboard",
	itemAriaLabel: "Navigation item",
	disabled: false,
};

WithIcons.storyName = "With Icons";

export const WithImages: StoryFn = (args) => {
	const listEl = document.createElement("ifx-action-list");
	if (args.listAriaLabel)
		listEl.setAttribute("list-aria-label", args.listAriaLabel);

	listEl.innerHTML = `
    <ifx-action-list-item
      item-title="${args.itemTitle || "John Doe"}"
      description="${args.description || "Senior Developer"}"
      value="john"
      ${args.itemAriaLabel ? `item-aria-label="${args.itemAriaLabel}"` : ""}
      ${args.href ? `href="${args.href}"` : ""}
      ${args.target && args.target !== "_self" ? `target="${args.target}"` : ""}
      ${args.disabled ? 'disabled="true"' : ""}>
      <img slot="leading" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALFSURBVHgB7dy/SxthHMfxr6W9LJel6VAdagoaQXMQSaE4COnYQTr4p7bQVSi0FAxKUwTFwS5Jh8YlWXKLfb5PfDS9pP76nM9zgc97OSLxwBfPr1zAhfN+/0LYg3siDIqAYAQEIyAYAcEICEZAMAKCERCMgGAEBCMgGAHBCAhGQDACghEQjIBgBAQjIBgBwQgIRkAwAoIREIyAYAQEeyoBOmi35ehnR9LRSPIoKpVkpbYmb7e2xHfeAb9/+ypHnY75g2sSl8uSR8PBwNzzh0RRJJvNpvjMO+Dp8YnF2269k7xTRN+A3tfANB3lNvIm03umaSq+C7IGzqrX7crvXleeVyqyXH0t81IhAL/s7cnpyfHVa90QtlstmYeCA/46O7N4m8030jDr12F73+7Sq2adfLm0JEUv+DnwvP/HXhuXi3/DQGo9M53noeCAi4vjUaajbnzdt9dK5cXUe/M6N+ZZ8Cms01TXPJ26h5d4q+b1q2r1n/fpWe/zp4/2vb6PKjdViE1EN4xlA9Y301lHZHbtc3jpKL1CLgpiYY4xOuKyo05zeHIh8mF31244BwVCLAzgrCbx3u/s2MOy22SKghgcUJH0KLORJFM/z+K5ioQYFNAh6VU/hjmIm/BcWcRQBQOcRNLRd70D127Fc00iPsbn67sUBHA4GE4h6aMohdDnhNGz6FY81zViW0IU5CBtP/dmRphC6BS+D55Lf1cfkYUoyAiM4/JMJIVYryf2CfO97xloCgcZgStr/38a/RC8kPFLJTDvgFFUsptI3uk9dSPynfc1cD2pmyPLeMeMy7HkkeLpxrRRT8R33gH1wakemvXLJf1+JI90VOsO7o40Plvg/0zA4iYCRkAwAoIREIyAYAQEIyAYAcEICEZAMAKCERCMgGAEBCMgGAHBCAhGQDACghEQjIBgBAQjIBgBwQgIRkAwAoL9BS7b7t2PtL1XAAAAAElFTkSuQmCC" alt="User avatar" style="width: 100%; max-width: 40px; height: auto;">
      <ifx-icon slot="trailing" icon="chevron-right-16"></ifx-icon>
    </ifx-action-list-item>

    <ifx-action-list-item
      item-title="Jane Smith"
      description="UI/UX Designer"
      value="jane"
      ${args.itemAriaLabel ? `item-aria-label="${args.itemAriaLabel}"` : ""}>
      <img slot="leading" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALFSURBVHgB7dy/SxthHMfxr6W9LJel6VAdagoaQXMQSaE4COnYQTr4p7bQVSi0FAxKUwTFwS5Jh8YlWXKLfb5PfDS9pP76nM9zgc97OSLxwBfPr1zAhfN+/0LYg3siDIqAYAQEIyAYAcEICEZAMAKCERCMgGAEBCMgGAHBCAhGQDACghEQjIBgBAQjIBgBwQgIRkAwAoIREIyAYAQEeyoBOmi35ehnR9LRSPIoKpVkpbYmb7e2xHfeAb9/+ypHnY75g2sSl8uSR8PBwNzzh0RRJJvNpvjMO+Dp8YnF2269k7xTRN+A3tfANB3lNvIm03umaSq+C7IGzqrX7crvXleeVyqyXH0t81IhAL/s7cnpyfHVa90QtlstmYeCA/46O7N4m8030jDr12F73+7Sq2adfLm0JEUv+DnwvP/HXhuXi3/DQGo9M53noeCAi4vjUaajbnzdt9dK5cXUe/M6N+ZZ8Cms01TXPJ26h5d4q+b1q2r1n/fpWe/zp4/2vb6PKjdViE1EN4xlA9Y301lHZHbtc3jpKL1CLgpiYY4xOuKyo05zeHIh8mF31244BwVCLAzgrCbx3u/s2MOy22SKghgcUJH0KLORJFM/z+K5ioQYFNAh6VU/hjmIm/BcWcRQBQOcRNLRd70D127Fc00iPsbn67sUBHA4GE4h6aMohdDnhNGz6FY81zViW0IU5CBtP/dmRphC6BS+D55Lf1cfkYUoyAiM4/JMJIVYryf2CfO97xloCgcZgStr/38a/RC8kPFLJTDvgFFUsptI3uk9dSPynfc1cD2pmyPLeMeMy7HkkeLpxrRRT8R33gH1wakemvXLJf1+JI90VOsO7o40Plvg/0zA4iYCRkAwAoIREIyAYAQEIyAYAcEICEZAMAKCERCMgGAEBCMgGAHBCAhGQDACghEQjIBgBAQjIBgBwQgIRkAwAoL9BS7b7t2PtL1XAAAAAElFTkSuQmCC" alt="User avatar" style="width: 100%; max-width: 40px; height: auto;">
      <ifx-icon slot="trailing" icon="chevron-right-16"></ifx-icon>
    </ifx-action-list-item>

    <ifx-action-list-item
      item-title="Mike Johnson"
      description="Product Manager"
      value="mike"
      disabled="true"
      ${args.itemAriaLabel ? `item-aria-label="${args.itemAriaLabel}"` : ""}>
      <img slot="leading" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALFSURBVHgB7dy/SxthHMfxr6W9LJel6VAdagoaQXMQSaE4COnYQTr4p7bQVSi0FAxKUwTFwS5Jh8YlWXKLfb5PfDS9pP76nM9zgc97OSLxwBfPr1zAhfN+/0LYg3siDIqAYAQEIyAYAcEICEZAMAKCERCMgGAEBCMgGAHBCAhGQDACghEQjIBgBAQjIBgBwQgIRkAwAoIREIyAYAQEeyoBOmi35ehnR9LRSPIoKpVkpbYmb7e2xHfeAb9/+ypHnY75g2sSl8uSR8PBwNzzh0RRJJvNpvjMO+Dp8YnF2269k7xTRN+A3tfANB3lNvIm03umaSq+C7IGzqrX7crvXleeVyqyXH0t81IhAL/s7cnpyfHVa90QtlstmYeCA/46O7N4m8030jDr12F73+7Sq2adfLm0JEUv+DnwvP/HXhuXi3/DQGo9M53noeCAi4vjUaajbnzdt9dK5cXUe/M6N+ZZ8Cms01TXPJ26h5d4q+b1q2r1n/fpWe/zp4/2vb6PKjdViE1EN4xlA9Y301lHZHbtc3jpKL1CLgpiYY4xOuKyo05zeHIh8mF31244BwVCLAzgrCbx3u/s2MOy22SKghgcUJH0KLORJFM/z+K5ioQYFNAh6VU/hjmIm/BcWcRQBQOcRNLRd70D127Fc00iPsbn67sUBHA4GE4h6aMohdDnhNGz6FY81zViW0IU5CBtP/dmRphC6BS+D55Lf1cfkYUoyAiM4/JMJIVYryf2CfO97xloCgcZgStr/38a/RC8kPFLJTDvgFFUsptI3uk9dSPynfc1cD2pmyPLeMeMy7HkkeLpxrRRT8R33gH1wakemvXLJf1+JI90VOsO7o40Plvg/0zA4iYCRkAwAoIREIyAYAQEIyAYAcEICEZAMAKCERCMgGAEBCMgGAHBCAhGQDACghEQjIBgBAQjIBgBwQgIRkAwAoL9BS7b7t2PtL1XAAAAAElFTkSuQmCC" alt="User avatar" style="width: 100%; max-width: 40px; height: auto;">
      <ifx-icon slot="trailing" icon="chevron-right-16"></ifx-icon>
    </ifx-action-list-item>
  `;

	listEl.addEventListener("ifxActionListItemClick", (event) => {
		const customEvent = event as CustomEvent;
		action("ifxActionListItemClick")({
			value: customEvent.detail.value,
			href: customEvent.detail.href,
			target: customEvent.detail.target,
			disabled: customEvent.detail.disabled,
		});
	});

	return listEl;
};

WithImages.args = {
	listAriaLabel: "Team members",
	itemTitle: "John Doe",
	description: "Senior Developer",
	itemAriaLabel: "Team member",
	disabled: false,
};

WithImages.storyName = "With Images";
