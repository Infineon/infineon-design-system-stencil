export default {
  title: "Components/Checkbox",
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
  `<ifx-checkbox error=${args.error} disabled=${args.disabled} checked=${args.checked}>${args.label}</ifx-checkbox>`;


export const Default = DefaultTemplate.bind({});


