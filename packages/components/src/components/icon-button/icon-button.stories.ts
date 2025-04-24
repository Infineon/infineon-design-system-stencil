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
    ariaLabel: 'Icon Button',
  },

  argTypes: {
    icon: {
      description: 'The icon to be displayed.',
      options: Object.values(icons).map(i => i['name']),
      control: { type: 'select' },
      table: {
        category: 'ifx-icon-button props',
        defaultValue: {
          summary: 'c-info-24'
        }
      }
    },
    variant: {
      description: 'Sets the style variant of the icon button.',
      control: 'radio',
      options: ['primary', 'secondary', 'tertiary'],
      table: {
        category: 'ifx-icon-button props',
        defaultValue: {
          summary: 'primary'
        }
      }
    },
    disabled: {
      description: 'Disables the icon button when set to true.',
      control: 'boolean',
      table: {
        category: 'ifx-icon-button props',
        defaultValue: {
          summary: 'false'
        }
      }
    },
    href: {
      description: 'Specifies the URL to which the icon button will link.',
      table: {
        category: 'ifx-icon-button props',
        type: {
          summary: 'string'
        }
      }
    },
    size: {
      description: 'Sets the size of the icon button. Options: s (24px), m (40px) and l (48px).',
      control: 'radio',
      options: ['s', 'm', 'l'],
      table: {
        category: 'ifx-icon-button props',
        defaultValue: {
          summary: 'm'
        },
        type: {
          summary: 's | m | l'
        }
      }
    },
    target: {
      description: 'Determines where to open the linked URL when the button is clicked.',
      control: 'radio',
      options: ['_blank', '_self', '_parent'],
      table: {
        category: 'ifx-icon-button props',
        defaultValue: {
          summary: '_blank'
        }
      }
    },
    shape: {
      description: 'Defines the shape of the icon button.',
      control: 'radio',
      options: ['round', 'square'],
      table: {
        category: 'ifx-icon-button props',
        defaultValue: {
          summary: 'round'
        }
      }
    },
    ariaLabel: {
      control: { type: 'text' },
      description: 'Set the aria label of the icon button. Enhances accessibility.',
      table: {
        category: 'ifx-icon-button props'
      }
    },
  },
};

const DefaultTemplate = args =>
  `<ifx-icon-button shape="${args.shape}" variant="${args.variant}" icon="${args.icon}" href="${args.href}" target="${args.target}"  size="${args.size}" disabled="${args.disabled}" aria-label="${args.ariaLabel}">
  </ifx-icon-button>`;

export const Default = DefaultTemplate.bind({});
