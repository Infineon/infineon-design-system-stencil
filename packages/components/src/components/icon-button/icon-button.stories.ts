import { icons } from '@infineon/infineon-icons';

export default {
  title: 'Components/Icon Button',
  tags: ['autodocs'],

  args: {
    variant: 'primary',
    size: 'm',
    disabled: false,
    icon: 'c-info-24',
    href: '',
    target: '_blank',
    shape: 'round',
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

    size: {
      description: 'Size options: s (24px), m (40px) and l (48px) - default: m',
      options: ['s', 'm', 'l'],
      control: { type: 'radio' },
    },
    target: {
      options: ['_blank', '_self', '_parent'],
      control: { type: 'radio' },
    },
    shape: {
      options: ['round', 'square'],
      control: { type: 'radio' },
    },
  },
};

const DefaultTemplate = args =>
  `<ifx-icon-button shape="${args.shape}" variant="${args.variant}" icon="${args.icon}" href="${args.href}" target="${args.target}"  size="${args.size}" disabled="${args.disabled}">
  </ifx-icon-button>`;

export const Default = DefaultTemplate.bind({});
