export default {
  title: 'Components/Status',
  args: {
    text: "text",
    color: "orange",
    border: true,
  },
  argTypes: {

    border: {
       control: 'boolean',
       attr: 'border',
    },
    color: {
      options: ['orange', 'ocean', 'grey', 'grey-200', 'red', 'green', 'berry'],
      control: { type: 'radio' },
    },
  },
}

const DefaultTemplate = (args) =>
  `<ifx-status text="${args.text}" color="${args.color}" border="${args.border}"/>`;

export const Default = DefaultTemplate.bind({});
Default.argTypes={
  
}
