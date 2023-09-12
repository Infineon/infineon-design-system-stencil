
export default {
  title: "Components/Button",
  tags: ['autodocs'],

  args: {
    label: "Button",
    variant: "primary",
    theme: "default",
    type: "button",
    size: "m",
    disabled: false,
    icon: "",
    iconPosition: 'left',
    href: false,
    url: "",
    target: '_blank'
  },

  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
    },
    theme: {
      options: ['default', 'danger', 'inverse'],
      control: { type: 'radio' },
    },
    type: {
      options: ['submit', 'button'],
      control: { type: 'radio' },
    },
    size: {
      options: ['xs', 's', 'm', 'l'],
      control: { type: 'radio' },
    },
    iconPosition: {
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
  `<ifx-button disabled="${args.disabled}" variant="${args.variant}" size="${args.size}" target="${args.target}" theme="${args.theme}" ${args.href ? `href="${args.url}"` : ""}>
  ${args.icon && args.iconPosition.toUpperCase() === "LEFT" ? `<ifx-icon icon="${args.icon}"></ifx-icon>` : ""}${args.label}${args.icon && args.iconPosition.toUpperCase() === "RIGHT" ? `<ifx-icon icon="${args.icon}"></ifx-icon>` : ""} 
</ifx-button>`;


export const Default = DefaultTemplate.bind({});



