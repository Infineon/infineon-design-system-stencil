export default {
  title: 'Components/Number Indicator',
  tags: ['autodocs'],

  args: {
    label: 1,
    inverted: false,
  },
  argTypes: {
    label: {
      name: 'Label of Number Indicator',
      description: 'Specifies the number to be displayed within the indicator.',
      table: {
        category: 'story controls'
      }
    },
    inverted: {
      description: 'Toggles the color scheme of the number indicator.',
      control: 'boolean',
      table: {
        category: 'ifx-number-indicator props',
        defaultValue: {
          summary: false
        }
      }
    }
  }
};

const DefaultTemplate = args => `<ifx-number-indicator inverted="${args.inverted}">${args.label}</ifx-number-indicator>`;

export const Default = DefaultTemplate.bind({});
Default.argTypes = {};
