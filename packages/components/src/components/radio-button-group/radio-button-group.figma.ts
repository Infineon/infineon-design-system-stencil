import figma, { html } from "@figma/code-connect/html"

figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=60730%3A32124",
  {
    props: {
      "radioButtons": figma.children('*'),
      "showGroupLabel": figma.boolean('Show Group Label'),
      "groupLabel": figma.boolean('Show Group Label', {
        true: figma.string('Group Label Text'),
        false: undefined
      }),
      "required": figma.boolean('Show Required Indicator'),
      "showCaption": figma.boolean('Show Caption'),
      "caption": figma.boolean('Show Caption', {
        true: figma.string('Caption Text'),
        false: undefined
      }),
      "showCaptionIcon": figma.boolean('Show Caption Icon'),
      "alignment": figma.enum('Aligntment', {
        "vertical": "vertical",
        "horizontal": "horizontal"
      }),
    },
    example: (props) => html`<ifx-radio-button-group alignment=${props.alignment} show-group-label=${props.showGroupLabel} group-label-text=${props.groupLabel} required=${props.required} caption-text=${props.caption} show-caption=${props.showCaption} show-caption-icon=${props.showCaptionIcon}>
  ${props.radioButtons}
</ifx-radio-button-group>`,
  },
)
