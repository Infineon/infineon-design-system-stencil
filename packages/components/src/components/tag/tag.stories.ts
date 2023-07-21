export default {
  title: 'Components/Tag',
  tags: ['autodocs'],

  args: {
    label: "Tag label",
  },

}

const DefaultTemplate = (args) =>
  `<ifx-tag>${args.label}</ifx-tag>`;

export const Default = DefaultTemplate.bind({});
Default.argTypes = {

}
