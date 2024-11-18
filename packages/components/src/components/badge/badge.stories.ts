import { icons } from '@infineon/infineon-icons';

export default {
  title: 'Components/Badge',
  tags: ['autodocs'],

  args: {
    label: 'Badge label',
    showIcon: false,
  },

  argTypes: {
    label: {
      name: 'Label',
      control: { type: 'text' },
      table: {
        category: 'story controls',
        type: {
          summary: 'string'
        }
      }
    },
    showIcon: {
      name: 'Show Icon',
      control: { type: 'boolean' },
      table: {
        category: 'story controls',
        type: {
          summary: 'boolean'
        }
      }
    },
    iconName: {
      name: 'Icon Name',
      options: Object.values(icons).map(i => i['name']),
      control: { type: 'select' },
      table: {
        category: 'story controls',
        type: {
          summary: 'string'
        }
      }
    },
  },
};

const DefaultTemplate = args =>
  `<ifx-badge>
    ${args.showIcon ? `<ifx-icon icon="${args.iconName}"></ifx-icon>` : ''}
    ${args.label}
  </ifx-badge>`;

export const Default = DefaultTemplate.bind({});
Default.argTypes = {};
