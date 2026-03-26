import figma, { html } from "@figma/code-connect/html";

// _Sidebar Single
// Explicit proxy for the concrete sidebar instance wrapper used in Figma screens.
// This connect only proxies mapped child items to the parent sidebar mapping.
figma.connect(
	"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=46977%3A2715",
	{
		props: {
			items: figma.children("*"),
		},
		example: (props) => html`${props.items}`,
	},
);

// Sidebar is modeled in Figma as a composition of header/title, navigation items, and footer regions.
// We map the root to ifx-sidebar and use figma.children to project mapped item/title examples.
figma.connect(
	"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=46975%3A9604",
	{
		props: {
			sidebarMode: figma.enum("Variant", {
				Sidebar: html`collapsible="false" collapsed="false"`,
				"Sidebar + Navbar": html`collapsible="false" collapsed="false"`,
				"Sidebar Collapsed": html`collapsible="false" collapsed="true"`,
				"Sidebar Collapsed + Options": html`collapsible="true" collapsed="true"`,
				"Sidebar Collapsible": html`collapsible="true" collapsed="false"`,
			}),
			// Sidebar content is wrapped in intermediate containers in Figma.
			// Use wildcard matching so nested wrapped children are projected reliably.
			items: figma.children("*"),
		},
		example: (props) => html`
      <ifx-sidebar
        application-name="Application Name"
        ${props.sidebarMode}
        show-header="true"
        show-footer="true"
        initial-collapse="true"
        terms-of-use="https://yourwebsite.com/terms"
        imprint="https://yourwebsite.com/imprint"
        privacy-policy="https://yourwebsite.com/privacy-policy"
        copyright-text="© 1999 - 2026 Infineon Technologies AG"
        position="left"
      >
        ${props.items}
      </ifx-sidebar>
    `,
	},
);

// _Sidebar Navigation Item[Variant=Title]
figma.connect(
	"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=26733%3A17888",
	{
		variant: {
			Variant: "Title",
		},
		props: {
			labelText: figma.string("Label Text"),
		},
		example: (props) =>
			html`<ifx-sidebar-title>${props.labelText}</ifx-sidebar-title>`,
	},
);

// _Sidebar Navigation Item[Variant=Menu Item]
figma.connect(
	"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=26733%3A17888",
	{
		variant: {
			Variant: "Menu Item",
		},
		props: {
			labelText: figma.string("Label Text"),
			active: figma.enum("State", {
				Default: "false",
				Hover: "false",
				Pressed: "false",
				Active: "true",
			}),
			hasIcon: figma.boolean("Show left Icon", {
				true: html`icon="image-16"`,
				false: html``,
			}),
			indicator: figma.boolean("Indicator", {
				true: html`number-indicator="1"`,
				false: html``,
			}),
		},
		example: (props) => html`
      <ifx-sidebar-item
        href="https://google.com"
        target="_self"
        active=${props.active}
        ${props.hasIcon}
        ${props.indicator}
      >
        ${props.labelText}
      </ifx-sidebar-item>
    `,
	},
);

// _Sidebar Navigation Item[Variant=Sub Menu Item]
figma.connect(
	"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=26733%3A17888",
	{
		variant: {
			Variant: "Sub Menu Item",
		},
		props: {
			labelText: figma.string("Label Text"),
			active: figma.enum("State", {
				Default: "false",
				Hover: "false",
				Pressed: "false",
				Active: "true",
			}),
		},
		example: (props) => html`
      <ifx-sidebar-item href="https://google.com" target="_self" active=${props.active}>
        ${props.labelText}
      </ifx-sidebar-item>
    `,
	},
);

// _Sidebar Navigation Item[Variant=Section]
figma.connect(
	"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=26733%3A17888",
	{
		variant: {
			Variant: "Section",
		},
		props: {
			labelText: figma.string("Label Text"),
			hasIcon: figma.boolean("Show left Icon", {
				true: html`icon="image-16"`,
				false: html``,
			}),
			children: figma.enum("Expandability", {
				None: html``,
				Expandable: html`
          <ifx-sidebar-item href="https://google.com" target="_blank" icon="image-16">Menu Item</ifx-sidebar-item>
          <ifx-sidebar-item href="https://google.com" target="_blank">Menu Item</ifx-sidebar-item>
        `,
				Expanded: html`
          <ifx-sidebar-item href="https://google.com" target="_blank" icon="image-16">Menu Item</ifx-sidebar-item>
          <ifx-sidebar-item icon="image-16">
            Menu Item
            <ifx-sidebar-item>Sub menu item</ifx-sidebar-item>
            <ifx-sidebar-item active="true">Sub menu item</ifx-sidebar-item>
            <ifx-sidebar-item>Sub menu item</ifx-sidebar-item>
          </ifx-sidebar-item>
          <ifx-sidebar-item href="https://google.com" target="_blank">Menu Item</ifx-sidebar-item>
          <ifx-sidebar-item href="https://google.com" target="_blank">Menu Item</ifx-sidebar-item>
        `,
			}),
		},
		example: (props) => html`
        <!-- This does not represent the actual items in Figma, but serves as an example of how to the ifx-sidebar-item -->
        <ifx-sidebar-item ${props.hasIcon}>
            ${props.labelText}
            ${props.children}
        </ifx-sidebar-item>
        `,
	},
);
