export default {
  title: 'Components/Tag',
  args: {
    label: "Tag label",
  },
  argTypes: {

  },
}

const DefaultTemplate = (args) =>
  `<ifx-tag label="${args.label}"/>`;

export const Default = DefaultTemplate.bind({});
Default.argTypes = {

}
