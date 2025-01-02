import { icons } from '@infineon/infineon-icons';

export default {
  title: 'Components/Badge',
  tags: ['autodocs'],

  args: {
    label: 'Badge label',
    icon: '',
  },

  argTypes: {
    label: {
      description: 'The label of the badge.',
      name: 'Label',
      control: { type: 'text' },
      table: {
        category: 'story controls',
        type: {
          summary: 'string'
        }
      }
    },
    icon: {
      control: { type: 'select' },
      options: ['none', ...Object.values(icons).map(i => i['name'])],
      description: 'Set the icon of the tab. Choose "none" to display no icon.',
      table: {
        category: 'ifx-tab props',
        type: {
          summary: 'string'
        }
      }
    },
  },
};

const DefaultTemplate = args => {
  const icon = args.icon === 'none' ? '' : args.icon;

  return `<ifx-badge>
  ${args.label}
  ${icon ? `<ifx-icon icon="${icon}"></ifx-icon>` : ''}
</ifx-badge>`;
};

export const Default = DefaultTemplate.bind({});
Default.argTypes = {};
