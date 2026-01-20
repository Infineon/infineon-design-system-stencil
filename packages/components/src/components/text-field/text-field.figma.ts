import figma, { html } from "@figma/code-connect/html";


// Text Field
figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=14251%3A8194",
  {
    props: {
      // No matching props could be found for these Figma properties:
      "caption": figma.boolean('Show Caption', {
        true: figma.string('Caption Text'),
        false: undefined
      }),
      "label": figma.boolean('Show Label', {
        true: figma.string('Label Text'),
        false: undefined
      }),
      "placeholderText": figma.string('Placeholder Text'),
      "required": figma.boolean('Required Indicator'),
      "icon": figma.boolean('Show Icon', {
        true: figma.instance('Icon'),
        false: undefined
      }),
      "showDelete": figma.boolean('Show Delete', {
        true: 'show-delete="true"',
        false: ''
      }),
      "size": figma.enum('Size', {
        "40px": "m",
        "36px": "s"
      }),
      "success": figma.enum('State', {
        "Success": true,
      }),
      "error": figma.enum('State', {
        "Error": true,
        "Active-Error": true
      }),
      "disabled": figma.enum('State', {
        "Disabled": true,
      }),
      "readonly": figma.enum('State', {
        "Read only": true,
      }),
      // "optionalIndicator": figma.boolean('Optional Indicator'),
    },
    example: (props) => html`<ifx-text-field type="text" label=${props.label} caption=${props.caption} icon=${props.icon} placeholder=${props.placeholderText} size=${props.size} ${props.showDelete} required=${props.required} disabled=${props.disabled} error=${props.error} success=${props.success} read-only=${props.readonly} autocomplete="on">
    </ifx-text-field>`,
  },
)


// Password Field
figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=16012%3A9974",
  {
    props: {
      "showLockIcon": figma.boolean('Show Lock Icon', {
        true: 'icon="lock-16"',
        false: ''
      }),
      "placeholderText": figma.string('Placeholder Text'),
      "captionText": figma.string('Caption Text'),
      // "showCaptionText": figma.boolean('Show Caption Text'),
      "size": figma.enum('Size', {
        "40px": "m",
      }),
      "error": figma.enum('State', {
        "Error": true,
        "Filled-Error": true
      })
    },
    example: (props) => html`<ifx-text-field ${props.showLockIcon} placeholder=${props.placeholderText} caption=${props.captionText} label="Password" size=${props.size} type="password" error=${props.error} autocomplete="off">
    </ifx-text-field>`,
  },
)
