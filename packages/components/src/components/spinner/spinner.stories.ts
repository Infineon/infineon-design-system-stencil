export default {
  title: 'Components/Spinner',
  tags: ['autodocs'],

  args: {
    size: "m",
    variant: 'border'
  },
  argTypes: {
    size: {
      description: "Size options: s (24px) and m (40px) - default: m",
      options: ['s', 'm'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['border', 'semiconductor'],
      control: { type: 'radio' }
    }
  },
}

const DefaultTemplate = (args) =>
  `<ifx-spinner variant="${args.variant}" size="${args.size}"></ifx-spinner>`;

export const Default = DefaultTemplate.bind({});
Default.argsTypes = {

}
