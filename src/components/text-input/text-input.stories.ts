export default {
  title: "Components/TextInput",
  args: {
    error: false,
    disabled: false,
    success: false,
    placeholder: 'Placeholder',
    errorMessage: "",
  },

  argTypes: {

  },
};


const DefaultTemplate = (args) =>
  `<ifx-text-input disabled="${args.disabled}" error="${args.error}" success="${args.success}" error-message="${args.errorMessage}">Text field</ifx-text-input>`;


export const Default = DefaultTemplate.bind({});


