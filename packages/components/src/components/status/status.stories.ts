export default {
  title: 'Components/Status',
  tags: ['autodocs'],

  args: {
    label: 'text',
    color: 'orange',
    border: true,
  },
  argTypes: {
    border: {
      control: 'boolean',
      attr: 'border',
    },
    color: {
      options: ['orange', 'ocean', 'grey', 'light-grey', 'red', 'green', 'berry'],
      control: { type: 'radio' },
    },
  },
};

const DefaultTemplate = args => `<ifx-status label="${args.label}" color="${args.color}" border="${args.border}"/>`;

export const Default = DefaultTemplate.bind({});
Default.argTypes = {};
