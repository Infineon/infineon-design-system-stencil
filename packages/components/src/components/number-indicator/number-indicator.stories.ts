export default {
  title: 'Components/Number Indicator',
  tags: ['autodocs'],

  args: {
    label: 1,
    inverted: false,
  },
};

const DefaultTemplate = args => `<ifx-number-indicator inverted="${args.inverted}">${args.label}</ifx-number-indicator>`;

export const Default = DefaultTemplate.bind({});
Default.argTypes = {};
