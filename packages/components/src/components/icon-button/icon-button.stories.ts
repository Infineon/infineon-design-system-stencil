export default {
  title: "Components/Icon-Button",
  tags: ['autodocs'],

  args: {
    variant: "solid",
    size: 'm',
    color: "primary",
    disabled: false,
    icon: "c-info-24",
    href: "",
    target: '_blank',
    shape: 'round'
  },

  argTypes: {
    variant: {
      options: ['solid', 'outline', 'outline-text'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning'],
      control: { type: 'radio' },
    },
    size: {
      options: ['s', 'm'],
      control: { type: 'radio' },
    },
    target: {
      options: ['_blank', '_self', '_parent'],
      control: { type: 'radio' }
    },
    shape: {
      options: ['round', 'square'],
      control: { type: 'radio' }
    }

  },
};


const DefaultTemplate = (args) =>
  `<ifx-icon-button shape="${args.shape}" variant="${args.variant}" icon="${args.icon}" href="${args.href}" target="${args.target}" color="${args.color}" size="${args.size}" disabled="${args.disabled}">
  </ifx-icon-button>`;


export const Default = DefaultTemplate.bind({});


