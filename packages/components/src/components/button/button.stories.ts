
import { icons } from '@infineon/infineon-icons'

export default {
  title: "Components/Button",
  tags: ['autodocs'],

  args: {
    label: "Button",
    variant: "primary",
    theme: "default",
    type: "button",
    size: "m",
    fullWidth: false,
    disabled: false,
    iconPosition: 'left',
    href: false,
    url: "",
    target: '_blank'
  },

  argTypes: {
    icon: {
      options: Object.values(icons).map(i => i['name']),
      control: { type: 'select' },
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
    },
    theme: {
      options: ['default', 'danger', 'inverse'],
      control: { type: 'radio' },
    },
    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'radio' },
    },
    size: {
      description: "Size options: xs (32px) s (36px),  m (40px), l (48px) - default: m",
      options: ['xs', 's', 'm', 'l'],
      control: { type: 'radio' },
    },
    fullWidth: {
      control: {type: 'boolean'}
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
  `<ifx-button type="${args.type}" disabled="${args.disabled}" variant="${args.variant}" size="${args.size}" target="${args.target}" theme="${args.theme}" ${args.href ? `href="${args.url}"` : ""} full-width="${args.fullWidth}">
  ${args.icon && args.iconPosition.toUpperCase() === "LEFT" ? `<ifx-icon icon="${args.icon}"></ifx-icon>` : ""}${args.label}${args.icon && args.iconPosition.toUpperCase() === "RIGHT" ? `<ifx-icon icon="${args.icon}"></ifx-icon>` : ""} 
</ifx-button>`;


export const Default = DefaultTemplate.bind({});
