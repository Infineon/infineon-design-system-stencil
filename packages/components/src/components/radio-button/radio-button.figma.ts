import figma, { html } from "@figma/code-connect/html"

// Radio Button with Label
figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=2583%3A7344",
  {
    props: {
      "labelText": figma.string('Label Text'),
      "checked": figma.enum('State', {
        "Checked": true,
        "Checked-Hover": true,
        "Checked-Focus": true,
        "Checked-Disabled": true,
        "Checked-Error": true,
        "Checked-Read-Only": true,
      }),
      "disabled": figma.enum('State', {
        "Unchecked-Disabled": true,
        "Checked-Disabled": true,
      }),
      "error": figma.enum('State', {
        "Unchecked-Error": true,
        "Checked-Error": true,
      }),
      "size": figma.enum('Size', {
        "20px": "s",
        "24px": "m"
      })
    },
    example: (props) => html`<ifx-radio-button name="radio-group" value="option1" size=${props.size} checked=${props.checked} disabled=${props.disabled} error=${props.error}>${props.labelText}</ifx-radio-button>`,
  },
)

// Radio Button without Label
figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=22431%3A15803",
  {
    props: {
      "checked": figma.enum('State', {
        "Checked": true,
        "Checked-Hover": true,
        "Checked-Focus": true,
        "Checked-Disabled": true,
        "Checked-Read-Only": true,
        "Error-Active": true,
      }),
      "disabled": figma.enum('State', {
        "Unchecked-Disabled": true,
        "Checked-Disabled": true,
      }),
      "error": figma.enum('State', {
        "Error": true,
        "Error-Active": true,
      }),
    },
    example: (props) => html`<ifx-radio-button name="radio-group" value="option1" checked=${props.checked} disabled=${props.disabled} error=${props.error}></ifx-radio-button>`,
  },
)
