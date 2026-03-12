import figma, { html } from "@figma/code-connect/html"

figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=60730%3A32124",
  {
    props: {
      "radioButtons": figma.children('*'),
      "showGroupLabel": figma.boolean('Show Group Label', ),
      "groupLabel": figma.nestedProps('Labels', {
          "text": figma.string('Label text')
        }),
      "showCaption": figma.boolean('Show Caption'),
      "caption": figma.boolean('Show Caption', {
        true: figma.nestedProps('Caption', {
          "text": figma.string('Caption text'),
        }),
        false: { "text": undefined }
      }),
      "alignment": figma.enum('Aligntment', {
        "vertical": "vertical",
        "horizontal": "horizontal"
      }),
      "showCaptionIcon": figma.boolean('Show Caption', {
        true: figma.nestedProps('Caption', {
          "showCaptionIcon": figma.boolean('Show icon'),
        }),
        false: { "showCaptionIcon": undefined }
      }),
    },
    example: (props) => html`<ifx-radio-button-group alignment=${props.alignment} show-group-label=${props.showGroupLabel} group-label-text=${props.groupLabel.text} caption-text=${props.caption.text} show-caption=${props.showCaption} show-caption-icon=${props.showCaptionIcon.showCaptionIcon}>
  ${props.radioButtons}
</ifx-radio-button-group>`,
  },
)
