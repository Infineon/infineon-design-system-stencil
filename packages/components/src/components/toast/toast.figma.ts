import figma, { html } from "@figma/code-connect/html"

figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=91766-123",
  {
    props: {
      status: figma.enum("Variant", {
        "Loading": "loading",
        "Success": "success",
        "Warning": "warning",
        "Danger": "danger",
      }),
      message: figma.string("Text"),
      actionText: figma.string("Action label"),
    },
    example: (props) => html`
      <ifx-toast
        status=${props.status}
        message=${props.message}
        action-text=${props.actionText}
      >
      </ifx-toast>
    `,
  },
)
