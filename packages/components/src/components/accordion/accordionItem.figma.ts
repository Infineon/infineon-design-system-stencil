import figma, { html } from "@figma/code-connect/html"

figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=19400%3A13702",
  {
    props: {
      labelText: figma.string('Label Text'),
      contentText: figma.string('Content Text'),
      state: figma.enum('State', {
        "Collapsed": false,
        "Hover": false,
        "Focus": false,
        "Expanded": true,
        "Focus-Expanded": true
      })
    },
    example: (props) => html`
      <ifx-accordion-item
        caption=${props.labelText}
        open=${props.state}
      >
        ${props.contentText}
      </ifx-accordion-item>
    `,
  },
)
