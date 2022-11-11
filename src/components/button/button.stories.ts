export default {
  title: "Components/Button",
  args: {
    label: "Button",
    gradient: "purple",
    icon: true,
  }
};

const DefaultTemplate = (args) => 
`<ifx-button label="${args.label}" gradient="${args.gradient}" icon="${args.icon}">
</ifx-button>`;

export const Default = DefaultTemplate.bind({});
