import figma, { html } from "@figma/code-connect/html"

figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=16847%3A13055",
  {
    props: {
      variant: figma.enum("Variant", {
        Default: "default",
        Advanced: "advanced",
      }),
      orientation: figma.enum("Alignment", {
        Horizontal: "horizontal",
        Vertical: "vertical",
      }),
      tabs: figma.children("_Tabs Items")
    },
    example: (props) => html`<ifx-tabs variant=${props.variant} orientation=${props.orientation} active-tab-index="0">${props.tabs}</ifx-tabs>`,
  },
)

// _Tabs Items
figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=16847%3A13099",
  {
    props: {
      header: figma.string("Label"),
      icon: figma.boolean("Show Icon", {
        true: figma.instance<string>("Icon"),
        false: undefined,
      }),
      showIndicator: figma.boolean("Show Indicator"), // not supported
      indicator: figma.nestedProps("Indicator", {
        html: figma.enum("Variant", {
          Number: html`number="1"`,
          Dot: html``,
        }),
      }),
      disabled: figma.enum("State", {
        Disabled: true,
      }),
      alignment: figma.enum("Alignment", {
        Horizontal: "horizontal",
        Vertical: "vertical",
      }),
      subline: figma.enum("Variant", {
        Default: undefined,
        Advanced: figma.string("Subline"),
      }),
    },
    example: (props) => html`<ifx-tab
      header=${props.header}
      icon=${props.icon}
      disabled=${props.disabled}
      subline=${props.subline}
    ></ifx-tab>`,
  },
)


// Sticky header tabs
figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=98273%3A14380",
  {
    props: {
      tabsConfig: figma.nestedProps("Tabs", {
        orientation: figma.enum("Alignment", {
          Horizontal: "horizontal",
          Vertical: "vertical",
        }),
      }),
      tabs: figma.children("_Tabs Items"),
    },
    example: (props) => html`<ifx-tabs orientation=${props.tabsConfig.orientation} active-tab-index="0" position-sticky="true">${props.tabs}</ifx-tabs>`,
  },
)
