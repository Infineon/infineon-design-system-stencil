import figma, { html } from "@figma/code-connect/html"

figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=19400%3A13883",
  {
    props: {
      items: figma.children('*')
    },
    example: (props) => html`
      <ifx-accordion>
        ${props.items}
      </ifx-accordion>
    `,
  },
)
