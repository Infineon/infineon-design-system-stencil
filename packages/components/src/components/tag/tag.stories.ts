import { icons } from '@infineon/infineon-icons';

export default {
  title: 'Components/Tag',
  tags: ['autodocs'],

  args: {
    label: 'Tag label',
    icon: 'chevron-up-16',
  },
  argTypes: {
    label: {
      name: 'Label',
      control: { type: 'text' },
      description: 'Set the label of the tag.',
      table: {
        category: 'story controls',
        type: {
          summary: 'string'
        }
      }
    },
    icon: {
      options: Object.values(icons).map(i => i['name']),
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

const DefaultTemplate = args => `<ifx-tag icon="${args.icon}">${args.label}</ifx-tag>`;

export const Default = DefaultTemplate.bind({});
