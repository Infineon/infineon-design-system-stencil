import figma, { html } from "@figma/code-connect/html"

figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=19446%3A13846",
  {
    props: {
      alertText: figma.string('Alert Text'),
      closable: figma.boolean('Closable'),
      variant: figma.enum('Variant', {
        "Primary": "primary",
        "Success": "success",
        "Warning": "warning",
        "Danger": "danger",
      })
    },
    example: (props) => html`
      <ifx-alert
        variant=${props.variant}
        closable=${props.closable}
      >
        ${props.alertText}
      </ifx-alert>
    `,
  },
)

figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=19446%3A13846",
  {
    variant: { "Variant": "Info" },
    props: {
      // headline: figma.string('Headline'),
      // description: figma.string('Description'),
      closable: figma.boolean('Closable')
    },
    example: (props) => html`
      <ifx-alert
        variant="info"
        closable=${props.closable}
      >
        <span slot="headline">Enter headline here</span>
        <span slot="desc">Enter description here</span>
      </ifx-alert>
    `,
  },
)