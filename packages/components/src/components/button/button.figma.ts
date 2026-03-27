import figma, { html } from "@figma/code-connect/html"


figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=2610%3A6235",
  {
    variant: {
      "Show L - Icon": false,
      "Show R - Icon": false,
    },
    props: {
      lIcon: figma.instance<string>('L - Icon'),
      labelText: figma.string('Label Text'),
      theme: figma.enum('Theme', {
        "Default": "default",
        "Inverse": "inverse",
        "Danger": "danger"
      }),
      variant: figma.enum('Variant', {
        "Primary": "primary",
        "Secondary": "secondary",
        "Tertiary": "tertiary"
      }),
      size: figma.enum('Size', {
        "XS": "xs",
        "S": "s",
        "M": "m",
        "L": "l"
      }),
      disabled: figma.enum('State', {
        "Disabled": true,
      })
    },
    example: (props) => html`
      <ifx-button
        theme=${props.theme}
        variant=${props.variant}
        size=${props.size}
        ?disabled=${props.disabled}
        aria-label="Button with label ${props.labelText}"
      >
        ${props.labelText}
      </ifx-button>
    `,
  },
)

figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=2610%3A6235",
  {
    variant: {
      "Show L - Icon": true,
    },
    props: {
      lIcon: figma.instance<string>('L - Icon'),
      labelText: figma.string('Label Text'),
      theme: figma.enum('Theme', {
        "Default": "default",
        "Inverse": "inverse",
        "Danger": "danger"
      }),
      variant: figma.enum('Variant', {
        "Primary": "primary",
        "Secondary": "secondary",
        "Tertiary": "tertiary"
      }),
      size: figma.enum('Size', {
        "XS": "xs",
        "S": "s",
        "M": "m",
        "L": "l"
      }),
      disabled: figma.enum('State', {
        "Disabled": true,
      })
    },
    example: (props) => html`
      <ifx-button
        theme=${props.theme}
        variant=${props.variant}
        size=${props.size}
        ?disabled=${props.disabled}
        aria-label="Button with label ${props.labelText}"
      >
        <ifx-icon icon=${props.lIcon}></ifx-icon>
        ${props.labelText}
      </ifx-button>
    `,
  },
)


figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=2610%3A6235",
  {
    variant: {
      "Show R - Icon": true,
    },
    props: {
      rIcon: figma.instance<string>('R - Icon'),
      labelText: figma.string('Label Text'),
      theme: figma.enum('Theme', {
        "Default": "default",
        "Inverse": "inverse",
        "Danger": "danger"
      }),
      variant: figma.enum('Variant', {
        "Primary": "primary",
        "Secondary": "secondary",
        "Tertiary": "tertiary"
      }),
      size: figma.enum('Size', {
        "XS": "xs",
        "S": "s",
        "M": "m",
        "L": "l"
      }),
      disabled: figma.enum('State', {
        "Disabled": true,
      })
    },
    example: (props) => html`
      <ifx-button
        theme=${props.theme}
        variant=${props.variant}
        size=${props.size}
        ?disabled=${props.disabled}
        aria-label="Button with label ${props.labelText}"
      >
        ${props.labelText}
        <ifx-icon icon=${props.rIcon}></ifx-icon>
      </ifx-button>
    `,
  },
)
