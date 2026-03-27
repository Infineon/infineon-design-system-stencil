import figma, { html } from "@figma/code-connect/html"

const sharedProps = {
  label: figma.string("Label Text"),
  size: figma.enum("Size", {
    "14px": "s",
    "16px": "m",
    "18px": "l",
    "20px": "xl",
  }),
  variant: figma.enum("Variant", {
    Bold: "bold",
    Title: "title",
    Menu: "menu",
    Underlined: "underlined",
  }),
  disabled: figma.enum("State", {
    "Disabled": true,
  }),
}

figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=22582%3A16366",
  {
    variant: {
      "Show L - Icon": false,
      "Show R - Icon": false,
    },
    props: {
      ...sharedProps,
    },
    example: (props) => html`
      <ifx-link href="https://www.example.com" size=${props.size} variant=${props.variant} target="_blank" ?disabled=${props.disabled}>
        ${props.label}
      </ifx-link>
    `,
  },
)

figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=22582%3A16366",
  {
    variant: {
      "Show L - Icon": true,
      "Show R - Icon": false,
    },
    props: {
      ...sharedProps,
      lIcon: figma.instance<string>("L - Icon"),
    },
    example: (props) => html`
      <ifx-link href="https://www.example.com" size=${props.size} variant=${props.variant} target="_blank" ?disabled=${props.disabled}>
        <ifx-icon icon=${props.lIcon}></ifx-icon>
        ${props.label}
      </ifx-link>
    `,
  },
)

figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=22582%3A16366",
  {
    variant: {
      "Show R - Icon": true,
      "Show L - Icon": false,
    },
    props: {
      ...sharedProps,
      rIcon: figma.instance<string>("R - Icon"),
    },
    example: (props) => html`
      <ifx-link href="https://www.example.com" size=${props.size} variant=${props.variant} target="_blank" ?disabled=${props.disabled}>
        ${props.label}
        <ifx-icon icon=${props.rIcon}></ifx-icon>
      </ifx-link>
    `,
  },
)

figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=22582%3A16366",
  {
    variant: {
      "Show L - Icon": true,
      "Show R - Icon": true,
    },
    props: {
      ...sharedProps,
      lIcon: figma.instance<string>("L - Icon"),
      rIcon: figma.instance<string>("R - Icon"),
    },
    example: (props) => html`
      <ifx-link href="https://www.example.com" size=${props.size} variant=${props.variant} target="_blank" ?disabled=${props.disabled}>
        <ifx-icon icon=${props.lIcon}></ifx-icon>
        ${props.label}
        <ifx-icon icon=${props.rIcon}></ifx-icon>
      </ifx-link>
    `,
  },
)
