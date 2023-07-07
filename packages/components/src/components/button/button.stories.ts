
export default {
  title: "Components/Button",
  tags: ['autodocs'],

  args: {
    label: "Button",
    variant: "solid",
    color: "primary",
    type: "button",
    size: "m",
    disabled: false,
    icon: "",
    position: 'left',
    href: "",
    target: '_blank'
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
    type: {
      options: ['submit', 'button'],
      control: { type: 'radio' },
    },
    size: {
      options: ['s', 'm'],
      control: { type: 'radio' },
    },
    position: {
      options: ['left', 'right'],
      control: { type: 'radio' }
    },
    target: {
      options: ['_blank', '_self', '_parent'],
      control: { type: 'radio' }
    }

  },

};


const DefaultTemplate = (args) =>
  `<ifx-button type="${args.type}" variant="${args.variant}" icon="${args.icon}" position="${args.position}" href="${args.href}" target="${args.target}" color="${args.color}" size="${args.size}" disabled="${args.disabled}">
  ${args.label}
  </ifx-button>`;


export const Default = DefaultTemplate.bind({});



