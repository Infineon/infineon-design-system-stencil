export default {
  title: "Components/TextInput",
  args: {
    error: false,
    disabled: false,
    success: false,
    placeholder: 'Placeholder',
    errorMessage: ""
  },

  argTypes: {

  },
};


const DefaultTemplate = (args) =>
  `<ifx-text-input 
  error=${args.error} 
  disabled=${args.disabled} 
  error-message=${args.errorMessage}
  success="${args.success}"
  placeholder="${args.placeholder}">Text Field
  </ifx-text-input>`;


export const Default = DefaultTemplate.bind({});


