export default {
  title: 'Components/Tag',
  args: {
    text: "text",
    color: "primary",
    border: true,
  },
  argTypes: {

    border: {
      options: [ true, false],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning'],
      control: { type: 'radio' },
    },
  },
}

const DefaultTemplate = (args) =>
  `<ifx-tag text="${args.text}" color="${args.color}" border="${args.border}"/>`;

export const Default = DefaultTemplate.bind({});
Default.argTypes={
  
}
