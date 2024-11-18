export default {
  title: 'Components/Number Indicator',
  tags: ['autodocs'],

  args: {
    label: 1,
    inverted: false,
  },
  argTypes: {
    label: {
      description: 'Specifies the number to be displayed within the indicator.',
      table: {
        category: 'ifx-number-indicator props'
      }
    },
    inverted: {
      description: 'Toggles the color scheme of the number indicator.',
      control: 'boolean',
      table: {
        category: 'ifx-number-indicator props',
        defautlValue: {
          summary: false
        }
      }
    }
  }
};

const DefaultTemplate = args => `<ifx-number-indicator inverted="${args.inverted}">${args.label}</ifx-number-indicator>`;

export const Default = DefaultTemplate.bind({});
Default.argTypes = {};
