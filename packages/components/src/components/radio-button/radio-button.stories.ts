

export default {
  title: "Components/Radio Button",



  args: {
    error: false,
    disabled: false,
    checked: false,
    label: 'Text'
  },

  argTypes: {

  },
};


const DefaultTemplate = (args) =>
  `<ifx-radio-button error=${args.error} disabled=${args.disabled} checked=${args.checked}>${args.label}</ifx-radio-button>`;


export const Default = DefaultTemplate.bind({});



