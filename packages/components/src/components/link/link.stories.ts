export default {
  title: "Components/Link",
  tags: ['autodocs'],

  args: {
    label: 'Link',
    icon: true,
    position: 'right',
    underline: false,
    href: "",
    target: '_blank',
  },

  argTypes: {
    target: {
      options: ['_blank', '_self', '_parent'],
      control: { type: 'radio' }
    },
    position: {
      options: ['right', 'left'],
      control: { type: 'radio' }
    }
  },
};


const DefaultTemplate = (args) =>
  `<ifx-link href="${args.href}" target="${args.target}" position="${args.position}" underline="${args.underline}" icon="${args.icon}">
  ${args.label}
  </ifx-link>`;


export const Default = DefaultTemplate.bind({});


