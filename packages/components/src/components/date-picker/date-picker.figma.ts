import figma, { html } from "@figma/code-connect/html"

figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=53969%3A18135",
  {
    props: {
      "label": figma.boolean('Show Label', {
        true: figma.string('Label Text'),
        false: undefined
      }),
      "required": figma.boolean('Required Indicator'),
      "caption": figma.boolean('Show Caption', {
        true: figma.string('Caption Text'),
        false: undefined
      }),
      "type": figma.boolean('Show Time', {
        true: 'datetime-local',
        false: 'date'
      }),
      "size": figma.enum('Size', {
        "40px": "l",
        "36px": "s"
      }),
      "error": figma.enum('State', {
        "Error": true,
        "Active-Error": true,
      }),
      "success": figma.enum('State', {
        "Success": true,
      }),
      "disabled": figma.enum('State', {
        "Disabled": true,
      }),
    },
    example: (props) => html`<ifx-date-picker type=${props.type} label=${props.label} caption=${props.caption} size=${props.size} required=${props.required} error=${props.error} success=${props.success} disabled=${props.disabled} autocomplete="on" min="" max="" value=""></ifx-date-picker>`,
  },
)
