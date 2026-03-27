import figma, { html } from "@figma/code-connect/html"

// Pagination
figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=33166%3A20815",
  {
    props: {
      pageSelection: figma.boolean("Page Selection"),

    },
    example: (props) => html`<ifx-pagination
      current-page="1"
      show-items-per-page=${props.pageSelection}
      items-per-page='[{"value":"10","label":"10","selected":true},{"value":"25","label":"25"},{"value":"50","label":"50"}]'
    ></ifx-pagination>`,
  },
)
