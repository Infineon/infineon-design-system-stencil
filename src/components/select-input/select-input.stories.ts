export default {
  title: "Components/SelectInput",
  args: {
    icon: false,
  },

  argTypes: {

  },
};


const DefaultTemplate = (args) =>
  `<ifx-radio-button icon=${args.icon}</ifx-radio-button>`;


export const Default = DefaultTemplate.bind({});


