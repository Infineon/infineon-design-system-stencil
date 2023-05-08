export default {
  title: "Components/RadioButton",
  args: {
    error: false,
    disabled: false,
    checked: false
  },

  argTypes: {

  },
};


const DefaultTemplate = (args) =>
  `<ifx-radio-button error=${args.error} disabled=${args.disabled} checked=${args.checked}>Text</ifx-radio-button>`;


export const Default = DefaultTemplate.bind({});


