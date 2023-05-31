export default {
  title: 'Components/Spinner',
  args: {
    size: "m",
  },
  argTypes: {
    size: {
      options: ['s', 'm'],
      control: { type: 'radio' },
    },
  },
}

const DefaultTemplate = (args) =>
  `<ifx-spinner size="${args.size}" ></ifx-spinner>`;

export const Default = DefaultTemplate.bind({});
Default.argsTypes = {

}
