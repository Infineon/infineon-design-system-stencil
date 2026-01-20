import figma, { html } from "@figma/code-connect/html"

figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=17859%3A11254",
  {
    props: {
      "label": figma.textContent('Label'),
      "complete": figma.enum('State', {
        "Completed": true,
        "Completed Disabled": true,
        "Completed Hover": true,
      }),
      "error": figma.enum('State', {
        "Error": true,
      }),
      "disabled": figma.enum('State', {
        "Completed Disabled": true,
      }),
    },
    example: (props) => html`<ifx-step complete=${props.complete} error=${props.error} disabled=${props.disabled}>${props.label}</ifx-step>`,
  },
)
