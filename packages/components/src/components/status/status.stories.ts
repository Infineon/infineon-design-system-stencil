export default {
  title: 'Components/Status',
  tags: ['autodocs'],

  args: {
    label: 'text',
    color: 'orange-500',
    border: true,
  },
  argTypes: {
    label: {
      name: 'Label of Status',
      description: 'Set the label of *<ifx-status>*.',
      table: {
        category: 'ifx-status props',
        type: {
          summary: 'string'
        }
      }
    },
    border: {
      description: 'When set to **true** the status has a border.',
      control: 'boolean',
      attr: 'border',
      table: {
        category: 'ifx-status props',
        defaultValue: {
          summary: true
        }
      }
    },
    color: {
      description: 'Sets the color of the status.',
      control: 'radio',
      options: ['orange', 'ocean', 'grey', 'light-grey', 'red', 'green', 'berry'],
      table: {
        category: 'ifx-status props',
        defaultValue: {
          summary: 'orange'
        }
      }
    },
  },
};

const DefaultTemplate = args => `<ifx-status label="${args.label}" color="${args.color}" border="${args.border}"/>`;

export const Default = DefaultTemplate.bind({});
Default.argTypes = {};
