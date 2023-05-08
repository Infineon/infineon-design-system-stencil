export default {
  title: "Components/Checkbox",
  args: {
    error: false,
    disabled: false,
    checked: false
  },

  argTypes: {

  },
};


const DefaultTemplate = (args) =>
  `<ifx-checkbox error=${args.error} disabled=${args.disabled} checked=${args.checked}>Text</ifx-checkbox>`;


export const Default = DefaultTemplate.bind({});


