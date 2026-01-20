import figma, { html } from "@figma/code-connect/html"


// _Navigation Item[Type=Profile]
figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=19241%3A12392",
  {
    variant: {
      "Type": "Profile"
    },
    props: {
    },
    example: (_props) => html`<ifx-navbar-profile user-name="" show-label="true" image-url="" href="" target="_self" alt="profile image" slot="right-item"></ifx-navbar-profile>`,
  },
)

// _Navigation Profile Avatar 
// figma.connect(
//   "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=19241%3A17068",
//   {
//     props: {
//       // No matching props could be found for these Figma properties:
//       // "initials": figma.string('Initials'),
//       // "type": figma.enum('Type', {
//       //   "Initials": "initials",
//       //   "Image": "image"
//       // }),
//       // "state": figma.enum('State', {
//       //   "Default": "default",
//       //   "Hover": "hover"
//       // })
//     },
//     example: (props) => <NavbarProfile />,
//   },
// )


