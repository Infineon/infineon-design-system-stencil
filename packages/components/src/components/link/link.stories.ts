export default {
  title: "Components/Link",
  tags: ['autodocs'],

  args: {
    label: 'Link',
    underline: false,
    color: "primary",
    href: "",
    target: '_blank',
  },

  argTypes: {
    target: {
      options: ['_blank', '_self', '_parent'],
      control: { type: 'radio' }
    },
    color: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning'],
      control: { type: 'radio' },
    },
  },
};


const DefaultTemplate = (args) =>
  `<ifx-link color="${args.color}" href="${args.href}" target="${args.target}" underline="${args.underline}">
  ${args.label}
  </ifx-link>`;


export const Default = DefaultTemplate.bind({});


