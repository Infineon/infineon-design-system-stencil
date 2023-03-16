export default {
  title: 'Components/Tag',
  args: {
    text: "text",
    color: "primary",
  },
  argTypes: {

    color: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning'],
      control: { type: 'radio' },
    },
  },
}

const DefaultTemplate = (args) =>
  `<ifx-tag text="${args.text}" color="${args.color}"/>`;

export const Default = DefaultTemplate.bind({});
Default.argTypes={
  
}
