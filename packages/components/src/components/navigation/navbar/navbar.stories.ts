import { icons } from "@infineon/infineon-icons";
import { html } from "lit";
export default {
	title: "Components/Navigation/Navbar",
	args: {
		profileLabel: "",
		applicationName: "Application name",
		showLabelOfNavbarItem: true,
		targetOfnavbarItem: "_self",
		hrefOfNavbarItem: "",
		searchBarIsOpen: false,
		navbarPositionFixed: false,
		showLogoAndAppname: true,
		logoHref: "http://google.com",
		logoHrefTarget: "_self",
		searchBarPosition: "left",
		hideOnMobile: true,
		profileImageUrl: "",
		userName: "",
		showNavbarProfileLabel: true,
		href: "http://google.com",
		target: "_self",
		alt: "profile image",
		numberIndicator: "",
		dotIndicator: false,
	},
	argTypes: {
		profileLabel: {
			name: "Label of Profile",
			control: { type: "text" },
			description: "Set the label of *<ifx-navbar-profile>*.",
			table: {
				category: "story controls",
			},
		},
		applicationName: {
			control: { type: "text" },
			description: "The name of the application.",
			table: {
				category: "ifx-navbar props",
			},
		},
		navbarPositionFixed: {
			name: "fixed",
			control: { type: "boolean" },
			description: "Fix the navbar to the top of the page.",
			table: {
				defaultValue: { summary: "true" },
				category: "ifx-navbar props",
			},
		},
		showLogoAndAppname: {
			control: { type: "boolean" },
			description: "Show the logo and application name.",
			table: {
				defaultValue: { summary: "true" },
				category: "ifx-navbar props",
			},
		},
		logoHref: {
			control: { type: "text" },
			description: "The URL of the logo link.",
			table: {
				category: "ifx-navbar props",
			},
		},
		logoHrefTarget: {
			description: "The target of the logo link.",
			options: ["_self", "_blank", "_parent"],
			control: { type: "radio" },
			table: {
				defaultValue: { summary: "_self" },
				category: "ifx-navbar props",
				type: {
					summary: "_self | _blank | _parent",
				},
			},
		},
		showLabelOfNavbarItem: {
			name: "showLabel",
			control: { type: "boolean" },
			description: "Show the label of the navbar item.",
			table: {
				defaultValue: { summary: "true" },
				category: "ifx-navbar-item props",
			},
		},
		iconOfNavbarItem: {
			name: "icon",
			options: Object.keys(icons),
			control: { type: "select" },
			description: "The icon to display in the navbar item.",
			table: {
				category: "ifx-navbar-item props",
				type: {
					summary: "string",
				},
			},
		},
		numberIndicator: {
			name: "numberIndicator",
			control: { type: "number" },
			description: "A notifiying number indicator",
			table: {
				category: "ifx-navbar-item props",
				type: {
					summary: "string",
				},
			},
		},
		dotIndicator: {
			name: "dotIndicator",
			control: { type: "boolean" },
			description: "A notifiying dot indicator",
			table: {
				category: "ifx-navbar-item props",
				type: {
					defaultValue: { summary: "false" },
					summary: "boolean",
				},
			},
		},
		hrefOfNavbarItem: {
			name: "href",
			control: { type: "text" },
			description: "The URL of the navbar item link.",
			table: {
				category: "ifx-navbar-item props",
			},
		},

		targetOfnavbarItem: {
			name: "target",
			control: { type: "radio" },
			options: ["_self"],
			description: "The target of the navbar item link.",
			table: {
				defaultValue: { summary: "_self" },
				category: "ifx-navbar-item props",
				type: {
					summary: "_self",
				},
			},
		},
		hideOnMobile: {
			control: { type: "boolean" },
			description: "Hide the navbar item on mobile.",
			table: {
				defaultValue: { summary: "true" },
				category: "ifx-navbar-item props",
			},
		},
		showNavbarProfileLabel: {
			name: "showLabel",
			control: { type: "boolean" },
			description: "Show label for the profile.",
			table: {
				defaultValue: { summary: "true" },
				category: "ifx-navbar-profile props",
			},
		},
		href: {
			control: { type: "text" },
			description: "The URL of the profile link.",
			table: {
				category: "ifx-navbar-profile props",
			},
		},
		profileImageUrl: {
			name: "imageUrl",
			control: { type: "text" },
			description: "The URL of the image.",
			table: {
				category: "ifx-navbar-profile props",
			},
		},
		target: {
			control: { type: "radio" },
			options: ["_self"],
			description: "The target of the link.",
			table: {
				defaultValue: { summary: "_self" },
				category: "ifx-navbar-profile props",
				type: {
					summary: "_self",
				},
			},
		},
		alt: {
			control: { type: "text" },
			description: "The alternative text of the image.",
			table: {
				category: "ifx-navbar-profile props",
			},
		},
		userName: {
			control: { type: "text" },
			description: "The name of the user.",
			table: {
				category: "ifx-navbar-profile props",
			},
		},
		searchBarIsOpen: {
			name: "isOpen",
			control: { type: "boolean" },
			description: "Show the search bar.",
			table: {
				defaultValue: { summary: "true" },
				category: "ifx-search-bar props",
			},
		},
		searchBarPosition: {
			name: "search-bar-",
			description:
				"The position of the search-bar within the Navbar as specified in the slot name.",
			options: ["left", "right"],
			control: { type: "radio" },
			table: {
				defaultValue: { summary: "left" },
				category: "ifx-search-bar-slot",
				type: {
					summary: "left | right",
				},
			},
		},
	},
};

const DefaultTemplate = (args) =>
	html`<ifx-navbar  show-logo-and-appname="${args.showLogoAndAppname}" application-name="${args.applicationName}" fixed="${args.navbarPositionFixed}" logo-href="${args.logoHref}" logo-href-target="${args.logoHrefTarget}">
  <ifx-navbar-item icon="${args.iconOfNavbarItem}" slot="left-item" target="${args.targetOfnavbarItem}" href="${args.hrefOfNavbarItem}" hide-on-mobile="${args.hideOnMobile}">
    Menu Item
    <ifx-navbar-item icon="">
      Layer 1 Nested Item 1
      <ifx-navbar-item>
        Layer 2 Nested Item 2
        <ifx-navbar-item href="http://google.com" target="_blank">Link Layer 3 Nested Item 1</ifx-navbar-item>
        <ifx-navbar-item>Layer 3 Nested Item 2</ifx-navbar-item>
        <ifx-navbar-item>Layer 3 Nested Item 3</ifx-navbar-item>
        <ifx-navbar-item>Layer 3 Nested Item 4</ifx-navbar-item>
      </ifx-navbar-item>
      <ifx-navbar-item >Layer 2 Nested Item 3</ifx-navbar-item>
      <ifx-navbar-item>Layer 2 Nested Item 4</ifx-navbar-item>
      <ifx-navbar-item>Layer 2 Nested Item 5</ifx-navbar-item>
    </ifx-navbar-item>

    <ifx-navbar-item>
      Layer 1 Nested Item 2
      <ifx-navbar-item>Layer 2 Item 1</ifx-navbar-item>
      <ifx-navbar-item>Layer 2 Item 2</ifx-navbar-item>
      <ifx-navbar-item>Layer 2 Item 3</ifx-navbar-item>
    </ifx-navbar-item>

    <ifx-navbar-item>Nested Item 3</ifx-navbar-item>

    <ifx-navbar-item>
      Layer 1 Nested Item 4
      <ifx-navbar-item>Nested Item 4</ifx-navbar-item>
    </ifx-navbar-item>

  </ifx-navbar-item>

  <ifx-navbar-item href="${args.hrefOfNavbarItem}" target="_self" slot="left-item" icon="" show-label="${args.showLabelOfNavbarItem}">
    Menu Item
  </ifx-navbar-item>

  <ifx-navbar-item slot="left-item">
    More
    <ifx-navbar-item>Item1</ifx-navbar-item>
    <ifx-navbar-item>Item2</ifx-navbar-item>
  </ifx-navbar-item>

  <ifx-search-bar slot="search-bar-${args.searchBarPosition}" ?is-open="${args.searchBarIsOpen}"></ifx-search-bar>

  <ifx-navbar-item number-indicator="${args.numberIndicator}" slot="right-item" target="_blank" href="http://google.com" ?hide-on-mobile="${args.hideOnMobile}" show-label="false" icon="image-16">
  </ifx-navbar-item>
  <ifx-navbar-item dot-indicator="${args.dotIndicator}" slot="right-item" ?hide-on-mobile="true" show-label='false' icon="image-16">
  </ifx-navbar-item>

  <ifx-navbar-profile user-name="${args.userName}" slot="right-item" image-url="${args.profileImageUrl}" show-label="${args.showNavbarProfileLabel}" href="" target="${args.target}" alt="${args.alt}">${args.profileLabel}</ifx-navbar-profile>
</ifx-navbar>`;

export const Default = DefaultTemplate.bind({});
