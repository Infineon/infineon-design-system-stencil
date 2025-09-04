import { icons } from '@infineon/infineon-icons';

export default {
  title: 'Components/Tag',
  tags: ['autodocs'],

  args: {
    label: 'Tag label',
    icon: 'chevron-up-16',
    role: "",
    ariaLabel: ""
  },
  argTypes: {
    label: {
      name: 'Label of Tag',
      control: { type: 'text' },
      description: 'Set the label of *<ifx-tag>*.',
      table: {
        category: 'story controls',
        type: {
          summary: 'string'
        }
      }
    },
   role: {
      description: 'Role for the Tag.',
      control: 'text',
      table: {
        category: 'ARIA Labels',
        defaultValue: {
          summary: '',
        },
        type: {
          summary: 'string',
        },
      },
    },
   ariaLabel: {
      description: 'Aria label of the Tag.',
      control: 'text',
      table: {
        category: 'ARIA Labels',
        defaultValue: {
          summary: '',
        },
        type: {
          summary: 'string',
        },
      },
    },
    icon: {
      options: Object.keys(icons),
      control: { type: 'select' },
      description: 'Set the icon of the tag.',
      table: {
        category: 'ifx-tag props',
        type: {
          summary: 'string'
        }
      }
    },
  },
};

const DefaultTemplate = args => `<ifx-tag icon="${args.icon}" aria-label="${args.ariaLabel}" role="${args.role}">${args.label}</ifx-tag>`;

export const Default = DefaultTemplate.bind({});
