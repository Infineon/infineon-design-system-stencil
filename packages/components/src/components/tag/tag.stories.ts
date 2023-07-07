export default {
  title: 'Components/Tag',
  tags: ['autodocs'],

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
