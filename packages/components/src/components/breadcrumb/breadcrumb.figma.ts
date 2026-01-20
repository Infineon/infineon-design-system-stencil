import figma, { html } from "@figma/code-connect/html"

figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=75686%3A1372",
  {
    props: {
      items: figma.children('*')
    },
    example: (props) => html`
      <ifx-breadcrumb>
        ${props.items}
      </ifx-breadcrumb>
    `,
  },
)