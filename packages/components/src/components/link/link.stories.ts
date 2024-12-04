export default {
  title: 'Components/Link',
  tags: ['autodocs'],

  args: {
    label: 'Link',
    href: '',
    target: '_blank',
    size: 'm',
    disabled: false,
    variant: 'bold',
  },

  argTypes: {
    label: {
      description: 'Sets the label of *<ifx-link>*.',
      table: {
        category: 'story controls',
        type: {
          summary: '<ifx-link> `label` </ifx-link>'
        }
      }
    },
    href: {
      description: 'Specifies the URL of the link.',
      table: {
        category: 'ifx-link props',
        type: {
          summary: 'string'
        }
      }
    },
    target: {
      description: 'Determines where to open the linked URL when the link is clicked.',
      control: 'radio',
      options: ['_blank', '_self', '_parent'],
      table: {
        category: 'ifx-link props',
        defaultValue: {
          summary: '_blank'
        }
      }
    },
    disabled: {
      description: 'Disables the link.',
      control: 'boolean',
      table: {
        category: 'ifx-link props',
        defaultValue: {
          summary: 'false'
        }
      }
    },
    size: {
      description: 'Sets the Font Size of the link. Options: s (14px), m (16px), l (18px), xl (20px)',
      control: 'radio',
      options: ['s', 'm', 'l', 'xl'],
      table: {
        category: 'ifx-link props',
        defaultValue: {
          summary: 'm'
        },
        type: {
          summary: 's | m | l | xl'
        }
      }
    },
    variant: {
      description: 'Sets the style variant of the link.',
      control: 'radio',
      options: ['bold', 'underlined', 'title', 'menu'],
      table: {
        category: 'ifx-link props',
        defaultValue: {
          summary: 'bold'
        }
      }
    },
  },
};

const DefaultTemplate = args =>
  `<ifx-link href="${args.href}" target="${args.target}" size="${args.size}" variant="${args.variant}" disabled="${args.disabled}" >
  ${args.label}
  </ifx-link>`;

export const Default = DefaultTemplate.bind({});

const TemplateWithIcon = args =>
  `<ifx-link href="${args.href}" target="${args.target}" size="${args.size}" variant="${args.variant}" >
  ${args.label}
  <ifx-icon icon="arrow-right-16"></ifx-icon>
  </ifx-link>`;

export const WithIcon = TemplateWithIcon.bind({});
