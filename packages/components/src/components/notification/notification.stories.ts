import { icons } from '@infineon/infineon-icons';

export default {
  title: 'Components/Notification',
  tags: ['autodocs'],

  args: {
    content: "Sample Notification",
    variant: 'success',
    icon: 'c-check-16',
    linkText: 'Link',
    linkHref: 'https://www.example.com',
    linkTarget: '_blank',
  },
  argTypes: {
    content: {
      description: 'Text inside the notification is passed as slot.',
      table: {
        category: 'story controls',
        type: {
          summary: null
        }
      }
    },
    variant: {
      description: 'Variant of the notification.',
      options: ['success', 'warning', 'error'],
      control: { type: 'radio' },
      table: {
        category: 'ifx-notification props',
        defaultValue: {
          summary: 'success'
        },
        type: {
          summary: 'success | warning | error'
        }
      }
    },
    icon: {
      description: 'The icon to be displayed in the notification.',
      options: Object.values(icons).map(i => i['name']),
      control: { type: 'select' },
      table: {
        category: 'ifx-notification props',
        type: {
          summary: 'string'
        }
      }
    },
    linkText: {
      description: 'Text for the link.',
      table: {
        category: 'ifx-notification props',
        type: {
          summary: 'string'
        }
      }
    },
    linkHref: {
      description: 'URL for the link.',
      table: {
        category: 'ifx-notification props',
        type: {
          summary: 'string'
        }
      }
    },
    linkTarget: {
      options: ['_blank', '_self', '_parent'],
      control: { type: 'radio' },
      description: 'Specifies where to open the linked document.',
      table: {
        category: 'ifx-notification props',
        defaultValue: {
          summary: '_blank'
        },
        type: {
          summary: '_blank | _self | _parent'
        }
      }
    },
  },
};

const DefaultTemplate = args => `<ifx-notification 
  icon="${args.icon}" 
  variant="${args.variant}" 
  link-text="${args.linkText}" 
  link-href="${args.linkHref}"
  link-target="${args.linkTarget}">
  ${args.content}
</ifx-notification>`;

export const Default = DefaultTemplate.bind({});
Default.argTypes = {};
