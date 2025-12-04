import { icons } from "@infineon/infineon-icons";
import { action } from "storybook/actions";

export default {
	title: "Components/Navigation/Sidebar",
	// tags: ['autodocs'],

	args: {
		icon: "image-16",
		applicationName: "Application Name",
		showFooter: true,
		showHeader: true,
		initialCollapse: true,
		hideMenuLabel: "Hide Menu",
		collapsible: false,
		collapsed: false,
		termsOfUse: "https://yourwebsite.com/terms",
		imprint: "https://yourwebsite.com/imprint",
		privacyPolicy: "https://yourwebsite.com/privacy-policy",
		copyrightText: `© 1999 - ${new Date().getFullYear()} Infineon Technologies AG`,
		numberIndicatorOfSidebarItem: "",
		hrefOfSidebarItem: "https://google.com",
		targetOfSidebarItem: "_self",
		activeSidebarItem: false,
		isActionItem: false,
	},

	argTypes: {
		applicationName: {
			description:
				"The name of the application to display at the top of the sidebar.",
			table: {
				category: "ifx-sidebar props",
			},
		},
		showHeader: {
			description: "Determines whether the header is displayed in the sidebar.",
			table: {
				category: "ifx-sidebar props",
				defaultValue: {
					summary: true,
				},
			},
		},
		showFooter: {
			description: "Determines whether the footer is displayed in the sidebar.",
			table: {
				category: "ifx-sidebar props",
				defaultValue: {
					summary: true,
				},
			},
		},
		initialCollapse: {
			description:
				"Determines if the sidebar should be collapsed by default when it first loads.",
			table: {
				category: "ifx-sidebar props",
				defaultValue: {
					summary: true,
				},
			},
		},
		collapsed: {
			description:
				"Determines the initial collapsed state of the sidebar when collapsible is enabled.",
			control: "boolean",
			table: {
				category: "ifx-sidebar props",
				type: {
					summary: "boolean",
				},
				defaultValue: {
					summary: false,
				},
			},
		},
		collapsible: {
			name: "Show Hide Menu",
			description:
				"Enables collapsible functionality for the sidebar with a hide menu button.",
			control: "boolean",
			table: {
				category: "ifx-sidebar-item props",
				type: {
					summary: "boolean",
				},
				defaultValue: {
					summary: false,
				},
			},
		},
		imprint: {
			description:
				'The URL link for the "Imprint" section in the sidebar footer.',
			if: { arg: "showFooter", eq: true },
			table: {
				category: "ifx-sidebar props",
			},
		},
		termsOfUse: {
			description:
				'The URL link for the "Terms of Use" section in the sidebar footer.',
			if: { arg: "showFooter", eq: true },
			table: {
				category: "ifx-sidebar props",
			},
		},
		privacyPolicy: {
			description:
				'The URL link for the "Privacy Policy" section in the sidebar footer.',
			if: { arg: "showFooter", eq: true },
			table: {
				category: "ifx-sidebar props",
			},
		},
		copyrightText: {
			description:
				"The copyright text to display at the bottom of the sidebar.",
			table: {
				category: "ifx-sidebar props",
			},
		},
		icon: {
			description:
				"The icon to display for the sidebar items. Choose ***none*** to display no icon.",
			options: Object.keys(icons),
			control: "select",
			table: {
				category: "ifx-sidebar-item props",
				defaultValue: {
					summary: "image-16",
				},
			},
		},
		hrefOfSidebarItem: {
			name: "href",
			description: "The URL of the sidebar item link.",
			control: "text",
			table: {
				category: "ifx-sidebar-item props",
				type: {
					summary: "string",
				},
			},
		},
		targetOfSidebarItem: {
			name: "target",
			description: "The target attribute of the sidebar item link.",
			control: { type: "radio" },
			options: ["_self"],
			table: {
				category: "ifx-sidebar-item props",
				type: {
					summary: "string",
				},
				defaultValue: {
					summary: "_self",
				},
			},
		},
		numberIndicatorOfSidebarItem: {
			name: "numberIndicator",
			description: "The number indicator to display on the sidebar item.",
			control: "text",
			table: {
				category: "ifx-sidebar-item props",
				type: {
					summary: "string",
				},
			},
		},
		activeSidebarItem: {
			name: "active",
			description: "Set to true manually or by clicking on a navigation item.",
			control: "boolean",
			table: {
				category: "ifx-sidebar-item props",
				type: {
					summary: "boolean",
				},
				defaultValue: {
					summary: false,
				},
			},
		},
		isActionItem: {
			description: "If an item is an action item, it can not become active.",
			control: "boolean",
			table: {
				category: "ifx-sidebar-item props",
				type: {
					summary: "boolean",
				},
				defaultValue: {
					summary: false,
				},
			},
		},
		hideMenuLabel: {
			description: "The text label for the hide menu button.",
			control: "text",
			table: {
				category: "ifx-sidebar-item props",
				defaultValue: {
					summary: "Hide Menu",
				},
			},
		},
		ifxSidebarNavigationItem: {
			action: "ifxSidebarNavigationItem",
			description:
				"Custom event emitted by ifx-sidebar-item when a navigation item becomes active on selection.",
			table: {
				category: "custom events",
				type: {
					summary: "Framework integration",
					detail: `
React: onIfxSidebarNavigationItem={handleChange}
Vue: @ifxSidebarNavigationItem="handleChange"
Angular: (ifxSidebarNavigationItem)="handleChange()"
VanillaJs: .addEventListener("ifxSidebarNavigationItem", (event) => {/*handle change*/});`,
				},
			},
		},
		ifxSidebarActionItem: {
			action: "ifxSidebarActionItem",
			description:
				"Custom event emitted by ifx-sidebar-item when an action item is selected.",
			table: {
				category: "custom events",
				type: {
					summary: "Framework integration",
					detail: `
React: onIfxSidebarActionItem={handleAction}
Vue: @ifxSidebarActionItem="handleAction"
Angular: (ifxSidebarActionItem)="handleAction()"
VanillaJs: .addEventListener("ifxSidebarActionItem", (event) => {/*handle action*/});`,
				},
			},
		},
		ifxSidebarMenu: {
			action: "ifxSidebarMenu",
			description:
				"Custom event emitted by ifx-sidebar-item when a menu is expanded or closed.",
			table: {
				category: "custom events",
				type: {
					summary: "Framework integration",
					detail: `
React: onIfxSidebarMenu={handleMenu}
Vue: @ifxSidebarMenu="handleMenu"
Angular: (ifxSidebarMenu)="handleMenu()"
VanillaJs: .addEventListener("ifxSidebarMenu", (event) => {/*handle menu*/});`,
				},
			},
		},
		ifxSidebarCollapseChange: {
			action: "ifxSidebarCollapseChange",
			description:
				"Custom event emitted when the sidebar collapse state changes.",
			table: {
				category: "custom events",
				type: {
					summary: "Framework integration",
					detail: `
React: onIfxSidebarCollapseChange={handleCollapseChange}
Vue: @ifxSidebarCollapseChange="handleCollapseChange"
Angular: (ifxSidebarCollapseChange)="handleCollapseChange()"
VanillaJs: .addEventListener("ifxSidebarCollapseChange", (event) => {
  console.log('Collapsed:', event.detail.collapsed);
});

Event Detail: { collapsed: boolean }`,
				},
			},
		},
	},
};

const DefaultTemplate = (args) => {
	const sidebarElement = document.createElement(
		"ifx-sidebar",
	) as HTMLIfxSidebarElement;
	sidebarElement.setAttribute("application-name", args.applicationName);
	sidebarElement.addEventListener(
		"ifxSidebarNavigationItem",
		action(`ifxSidebarNavigationItem`),
	);
	sidebarElement.addEventListener(
		"ifxSidebarActionItem",
		action(`ifxSidebarActionItem`),
	);
	sidebarElement.addEventListener("ifxSidebarMenu", action(`ifxSidebarMenu`));

	// Set collapsible attribute based on args
	sidebarElement.setAttribute(
		"collapsible",
		args.collapsible ? "true" : "false",
	);

	// Set collapsed state independent of collapsible
	sidebarElement.setAttribute("collapsed", args.collapsed ? "true" : "false");

	// Set hide menu label only when collapsible
	if (args.collapsible) {
		sidebarElement.addEventListener(
			"ifxSidebarCollapseChange",
			action(`ifxSidebarCollapseChange`),
		);
		sidebarElement.setAttribute("hide-menu-label", args.hideMenuLabel);
	}

	sidebarElement.setAttribute("show-header", args.showHeader);
	sidebarElement.setAttribute("show-footer", args.showFooter);
	sidebarElement.setAttribute("initial-collapse", args.initialCollapse);
	sidebarElement.setAttribute("terms-of-use", args.termsOfUse);
	sidebarElement.setAttribute("imprint", args.imprint);
	sidebarElement.setAttribute("privacy-policy", args.privacyPolicy);
	sidebarElement.setAttribute("copyright-text", args.copyrightText);

	sidebarElement.innerHTML = `
    <ifx-sidebar-title>Menu Items</ifx-sidebar-title>
    <ifx-sidebar-item href='https://google.com' target='_blank' icon="${args.icon === "none" ? "" : args.icon}">Menu Item</ifx-sidebar-item>
    <ifx-sidebar-item href='https://google.com' target='_blank' icon="${args.icon === "none" ? "" : args.icon}">Menu Item</ifx-sidebar-item>
    <ifx-sidebar-item href='https://google.com' target='_blank' icon="${args.icon === "none" ? "" : args.icon}">Menu Item</ifx-sidebar-item>
    <ifx-sidebar-item href='https://google.com' target='_blank' icon="${args.icon === "none" ? "" : args.icon}">Menu Item</ifx-sidebar-item>
    <ifx-sidebar-item>
    Section
    <ifx-sidebar-item href='https://google.com' target='_blank' icon="${args.icon === "none" ? "" : args.icon}">Menu Item</ifx-sidebar-item>
    <ifx-sidebar-item icon='image-16'>
    Menu Item
    <ifx-sidebar-item>Sub menu item</ifx-sidebar-item>
    <ifx-sidebar-item active=true>Sub menu item</ifx-sidebar-item>
    <ifx-sidebar-item>Sub menu item</ifx-sidebar-item>
    </ifx-sidebar-item>
    <ifx-sidebar-item href='https://google.com' target='_blank'>Menu Item</ifx-sidebar-item>
    <ifx-sidebar-item href='https://google.com' target='_blank'>Menu Item</ifx-sidebar-item>
    </ifx-sidebar-item>
    <ifx-sidebar-title>Items group</ifx-sidebar-title>
    <ifx-sidebar-item href="${args.hrefOfSidebarItem}" target="${args.targetOfSidebarItem}" icon="${args.icon === "none" ? "" : args.icon}" number-indicator="${args.numberIndicatorOfSidebarItem === "" ? "" : args.numberIndicatorOfSidebarItem}" isActionItem="${args.isActionItem}" active="${args.activeSidebarItem}">Item 1</ifx-sidebar-item>
    <ifx-sidebar-item href='https://google.com' target='_blank' icon="${args.icon === "none" ? "" : args.icon}">Item 2</ifx-sidebar-item>
  `;
	return sidebarElement;
};

export const Default = DefaultTemplate.bind({});

const SubmenuTemplate = (args) => {
	const sidebarElement = document.createElement(
		"ifx-sidebar",
	) as HTMLIfxSidebarElement;
	sidebarElement.setAttribute("application-name", args.applicationName);
	sidebarElement.addEventListener(
		"ifxSidebarNavigationItem",
		action("ifxSidebarNavigationItem"),
	);
	sidebarElement.addEventListener(
		"ifxSidebarActionItem",
		action("ifxSidebarActionItem"),
	);
	sidebarElement.addEventListener("ifxSidebarMenu", action("ifxSidebarMenu"));
	sidebarElement.setAttribute("initial-collapse", args.initialCollapse);

	// Set collapsible attribute based on args
	sidebarElement.setAttribute(
		"collapsible",
		args.collapsible ? "true" : "false",
	);

	// Set collapsed state independent of collapsible
	sidebarElement.setAttribute("collapsed", args.collapsed ? "true" : "false");

	if (args.collapsible) {
		sidebarElement.addEventListener(
			"ifxSidebarCollapseChange",
			action("ifxSidebarCollapseChange"),
		);
		sidebarElement.setAttribute("hide-menu-label", args.hideMenuLabel);
	}

	// Create 3 sections
	for (let i = 0; i < 3; i++) {
		const sectionElement = document.createElement("ifx-sidebar-item");
		sectionElement.textContent = `Header Section ${i + 1}`;

		// In each section, create 3 menu items
		for (let j = 0; j < 3; j++) {
			const menuItemElement = document.createElement("ifx-sidebar-item");
			menuItemElement.setAttribute("icon", args.icon ? "image-16" : "");
			menuItemElement.textContent = `Menu Item ${j + 1}`;

			// In the first menu item of each section, create 3 submenu items
			if (j === 0) {
				for (let k = 0; k < 3; k++) {
					const subMenuItemElement = document.createElement("ifx-sidebar-item");
					subMenuItemElement.textContent = `Sub Menu Item ${k + 1}`;
					menuItemElement.appendChild(subMenuItemElement);
				}
			}

			sectionElement.appendChild(menuItemElement);
		}
		sidebarElement.appendChild(sectionElement);
	}
	const firstSection = sidebarElement.querySelectorAll("ifx-sidebar-item")[0];
	const firstMenuItem = firstSection.querySelectorAll("ifx-sidebar-item")[0];

	firstMenuItem
		.querySelectorAll("ifx-sidebar-item")[0]
		.setAttribute("active", "true"); //first submenu item
	firstMenuItem
		.querySelectorAll("ifx-sidebar-item")[0]
		.setAttribute("is-action-item", "false");

	firstMenuItem
		.querySelectorAll("ifx-sidebar-item")[1]
		.setAttribute("is-action-item", "true"); //2nd submenu item
	firstMenuItem
		.querySelectorAll("ifx-sidebar-item")[2]
		.setAttribute("is-action-item", "true"); //3rd sub menu item

	return sidebarElement;
};

export const WithSubmenu = SubmenuTemplate.bind({});

const NumberIndicatorTemplate = (args) => {
	const sidebarElement = document.createElement(
		"ifx-sidebar",
	) as HTMLIfxSidebarElement;
	sidebarElement.setAttribute(
		"application-name",
		args.applicationName || "Application name",
	);
	sidebarElement.addEventListener(
		"ifxSidebarNavigationItem",
		action("ifxSidebarNavigationItem"),
	);
	sidebarElement.addEventListener(
		"ifxSidebarActionItem",
		action("ifxSidebarActionItem"),
	);
	sidebarElement.addEventListener("ifxSidebarMenu", action("ifxSidebarMenu"));

	// Set collapsible attribute based on args
	sidebarElement.setAttribute(
		"collapsible",
		args.collapsible ? "true" : "false",
	);

	// Set collapsed state independent of collapsible
	sidebarElement.setAttribute("collapsed", args.collapsed ? "true" : "false");

	if (args.collapsible) {
		sidebarElement.addEventListener(
			"ifxSidebarCollapseChange",
			action("ifxSidebarCollapseChange"),
		);
		sidebarElement.setAttribute("hide-menu-label", args.hideMenuLabel);
	}

	sidebarElement.setAttribute("show-header", args.showHeader);
	sidebarElement.setAttribute("show-footer", args.showFooter);
	sidebarElement.setAttribute("initial-collapse", args.initialCollapse);
	sidebarElement.setAttribute("terms-of-use", args.termsOfUse);
	sidebarElement.setAttribute("imprint", args.imprint);
	sidebarElement.setAttribute("privacy-policy", args.privacyPolicy);
	sidebarElement.setAttribute("copyright-text", args.copyrightText);

	sidebarElement.innerHTML = `
    <ifx-sidebar-item icon="image-16" number-indicator="5">Menu Item</ifx-sidebar-item>
    <ifx-sidebar-item icon="image-16" number-indicator="1">Menu Item</ifx-sidebar-item>
    <ifx-sidebar-item icon="image-16" number-indicator="23">Menu Item</ifx-sidebar-item>
    <ifx-sidebar-item active="false">
      Header Section
      <ifx-sidebar-item icon="image-16" active="false">
        Second layer
        <ifx-sidebar-item target="_blank" active="false" icon="image-16">3rd layer Menu Item</ifx-sidebar-item>
        <ifx-sidebar-item target="_blank" active="false" icon="image-16">This Page</ifx-sidebar-item>
        <ifx-sidebar-item target="_blank" active="false" icon="image-16">3rd layer Menu Item</ifx-sidebar-item>
      </ifx-sidebar-item>
      <ifx-sidebar-item icon="image-16" active="false">
        Second layer
        <ifx-sidebar-item target="_blank" icon="image-16" active="false">Menu Item</ifx-sidebar-item>
      </ifx-sidebar-item>
      <ifx-sidebar-item icon="image-16" active="false">
        Second layer
        <ifx-sidebar-item target="_blank" icon="image-16" active="false">Menu Item</ifx-sidebar-item>
      </ifx-sidebar-item>
    </ifx-sidebar-item>

    <ifx-sidebar-item>
      Header Section
      <ifx-sidebar-item icon="image-16">
        Menu Item
        <ifx-sidebar-item active="false" is-action-item="false" target="_blank" icon="image-16">Sub Menu Item</ifx-sidebar-item>
        <ifx-sidebar-item is-action-item="true" icon="image-16">This one too</ifx-sidebar-item>
        <ifx-sidebar-item is-action-item="false" target="_blank" icon="image-16">Menu Item</ifx-sidebar-item>
      </ifx-sidebar-item>
      <ifx-sidebar-item icon="image-16">
        Menu Item
        <ifx-sidebar-item target="_blank" icon="image-16">Menu Item</ifx-sidebar-item>
      </ifx-sidebar-item>
      <ifx-sidebar-item icon="image-16">
        Menu Item
        <ifx-sidebar-item target="_blank" icon="image-16">Menu Item</ifx-sidebar-item>
      </ifx-sidebar-item>
    </ifx-sidebar-item>

    <ifx-sidebar-item>
      Header Section
      <ifx-sidebar-item icon="image-16">
        Menu Item
        <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">Menu Item</ifx-sidebar-item>
        <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">Menu Item</ifx-sidebar-item>
        <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">Menu Item</ifx-sidebar-item>
      </ifx-sidebar-item>
      <ifx-sidebar-item icon="image-16">
        Menu Item
        <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">Menu Item</ifx-sidebar-item>
      </ifx-sidebar-item>
      <ifx-sidebar-item icon="image-16">
        Menu Item
        <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">Menu Item</ifx-sidebar-item>
      </ifx-sidebar-item>
    </ifx-sidebar-item>
  `;

	return sidebarElement;
};

export const WithNumberIndicator = NumberIndicatorTemplate.bind({});

// New story: Collapsible with Hide Menu Button
const CollapsibleTemplate = (args) => {
	const sidebarElement = document.createElement(
		"ifx-sidebar",
	) as HTMLIfxSidebarElement;
	sidebarElement.setAttribute("application-name", args.applicationName);
	sidebarElement.addEventListener(
		"ifxSidebarNavigationItem",
		action(`ifxSidebarNavigationItem`),
	);
	sidebarElement.addEventListener(
		"ifxSidebarActionItem",
		action(`ifxSidebarActionItem`),
	);
	sidebarElement.addEventListener("ifxSidebarMenu", action(`ifxSidebarMenu`));
	sidebarElement.addEventListener(
		"ifxSidebarCollapseChange",
		action(`ifxSidebarCollapseChange`),
	);

	sidebarElement.setAttribute("show-header", args.showHeader);
	sidebarElement.setAttribute("show-footer", args.showFooter);
	sidebarElement.setAttribute("initial-collapse", args.initialCollapse);
	sidebarElement.setAttribute("terms-of-use", args.termsOfUse);
	sidebarElement.setAttribute("imprint", args.imprint);
	sidebarElement.setAttribute("privacy-policy", args.privacyPolicy);
	sidebarElement.setAttribute("copyright-text", args.copyrightText);

	// Set collapsible attribute based on args
	sidebarElement.setAttribute(
		"collapsible",
		args.collapsible ? "true" : "false",
	);

	// Set collapsed state independent of collapsible
	sidebarElement.setAttribute("collapsed", args.collapsed ? "true" : "false");

	// Set hide menu label only when collapsible
	if (args.collapsible) {
		sidebarElement.setAttribute(
			"hide-menu-label",
			args.hideMenuLabel || "Hide Menu",
		);
	}

	sidebarElement.innerHTML = `
    <ifx-sidebar-title>Navigation</ifx-sidebar-title>
    <ifx-sidebar-item icon="home-16" href="#dashboard" active="true">Dashboard</ifx-sidebar-item>
    <ifx-sidebar-item icon="user-16" href="#profile">User Profile</ifx-sidebar-item>
    <ifx-sidebar-item icon="bell-16" href="#notifications" number-indicator="5">Notifications</ifx-sidebar-item>
    <ifx-sidebar-item href="#messages" number-indicator="23">Messages</ifx-sidebar-item>

    <ifx-sidebar-item>
      UI Components
      <ifx-sidebar-item icon="button-16" href="#buttons">Buttons</ifx-sidebar-item>
      <ifx-sidebar-item icon="text-field-16" href="#inputs">Input Fields</ifx-sidebar-item>
      <ifx-sidebar-item icon="form-16" href="#forms" number-indicator="3">Forms</ifx-sidebar-item>
    </ifx-sidebar-item>

    <ifx-sidebar-title show-in-collapsed="true">Tools</ifx-sidebar-title>
    <ifx-sidebar-item icon="configure-16" href="#config">Configuration</ifx-sidebar-item>
    <ifx-sidebar-item icon="headset-16" href="#help">Help & Support</ifx-sidebar-item>
    <ifx-sidebar-item href="#analytics" number-indicator="12">Analytics</ifx-sidebar-item>
    <ifx-sidebar-item href="#logs" number-indicator="99">System Logs</ifx-sidebar-item>
  `;
	return sidebarElement;
};

export const Collapsible = CollapsibleTemplate.bind({});
Collapsible.storyName = "With Hide Menu";
Collapsible.args = {
	collapsible: true,
	collapsed: false,
	hideMenuLabel: "Hide Menu",
};

export const CollapsibleStartsCollapsed = CollapsibleTemplate.bind({});
CollapsibleStartsCollapsed.storyName = "With Hide Menu (starts collapsed)";
CollapsibleStartsCollapsed.args = {
	collapsible: true,
	collapsed: true, // This property determines the initial state of the sidebar
	hideMenuLabel: "Hide Menu",
};
