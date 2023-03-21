export default {
  title: 'Components/Tag',
  args: {
    text: "Tag label",
  },
  argTypes: {

  },
}

const DefaultTemplate = (args) =>
  `<ifx-tag text="${args.text}"/>`;

export const Default = DefaultTemplate.bind({});
Default.argTypes={
  
}
