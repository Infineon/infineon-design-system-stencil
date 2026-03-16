import figma, { html } from "@figma/code-connect/html"

figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=53969%3A18135",
  {
    props: {
      "caption": figma.boolean('Show Caption', {
        true: figma.nestedProps('Caption', {
          "text": figma.string('Caption text'),
        }),
        false: { "text": undefined }
      }),
      "label": figma.boolean('Show Label', {
        true: figma.nestedProps('Labels', {
          "text": figma.string('Label text'),
        }),
        false: { "text": undefined }
      }),
      "required": figma.nestedProps('Labels', {
        "required": figma.enum('Variant', {
          'Required': true,
        }),
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
      "readOnly": figma.enum('State', {
        "Read only": true,
      }),
    },
    example: (props) => html`<ifx-date-picker type=${props.type} label=${props.label.text} caption=${props.caption.text} size=${props.size} autocomplete="on" min="" max="" error=${props.error} success=${props.success} disabled=${props.disabled} required=${props.required.required} read-only=${props.readOnly}></ifx-date-picker>`,
  },
)
