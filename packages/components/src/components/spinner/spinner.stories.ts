export default {
  title: 'Components/Spinner',
  tags: ['autodocs'],

  args: {
    size: 'm',
    variant: 'default',
  },
  argTypes: {
    size: {
      description: 'Size options: s (24px) and m (40px) - default: m',
      options: ['s', 'm'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['default', 'brand'],
      control: { type: 'radio' },
    },
  },
};

const DefaultTemplate = args => `<ifx-spinner variant="${args.variant}" size="${args.size}"></ifx-spinner>`;

export const Default = DefaultTemplate.bind({});
Default.argsTypes = {};
