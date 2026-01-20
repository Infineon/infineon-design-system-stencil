import figma, { html } from "@figma/code-connect/html"

// Stepper - Horizontal
figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=17866%3A11652",
  {
    props: {
      "variant": figma.enum('Alignment', {
        "Horizontal": "default",
        "Vertical": "compact"
      }),
      "activeStep": figma.enum('Completed', {
        "None": "1",
        "1": "2",
        "2": "3",
        "3": "4",
        "4": "5",
        "5": "6",
        "6": "7"
      }),

      "steps": figma.children('_Step'),
      // "clickablePreviousSteps": figma.boolean('Clickable Previous Steps')
    },
    example: (props) => html`<ifx-stepper variant=${props.variant} show-step-number="false" active-step=${props.activeStep}>
  ${props.steps}
</ifx-stepper>`,
  },
)

// Stepper Compact
figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=30852%3A18085",
  {
    props: {
      "currentStep": figma.string('Current Step'),
      "nextStep": figma.string('Next Step'),
      // "showSteps": figma.enum('Show Steps', {
      //   "1of2": "1of2",
      //   "2of2": "2of2",
      //   "1of3": "1of3",
      //   "2of3": "2of3",
      //   "3of3": "3of3",
      //   "1of4": "1of4",
      //   "2of4": "2of4",
      //   "3of4": "3of4",
      //   "4of4": "4of4",
      //   "1of5": "1of5",
      //   "2of5": "2of5",
      //   "3of5": "3of5",
      //   "4of5": "4of5",
      //   "5of5": "5of5",
      //   "1of6": "1of6",
      //   "2of6": "2of6",
      //   "3of6": "3of6",
      //   "4of6": "4of6",
      //   "5of6": "5of6",
      //   "6of6": "6of6"
      // }),
      // "state": figma.enum('State', {
      //   "Active": "active",
      //   "Error": "error"
      // })
      "error": figma.enum("State", {
        "Error": true,
      })
    },
    example: (props) => html`<ifx-stepper variant="compact" active-step="2" indicator-position="left"  aria-label="" aria-current=""  >
      <ifx-step error=${props.error} completed="true" disabled="false">Step Label 1</ifx-step>
      <ifx-step error=${props.error} completed="false" disabled="false">Step Label 2</ifx-step>
    </ifx-stepper>`,
  },
)