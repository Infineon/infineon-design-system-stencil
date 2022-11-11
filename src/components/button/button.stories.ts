export default {
  title: "Components/Button",
  args: {
    label: "Button",
    color: "btn-primary",
    icon: true,
  },
  argTypes: {
    color: {
      options: ['btn-primary', 'btn-secondary', 'btn-success', 'btn-danger', 'btn-warning'],
      control: { type: 'radio' },
    },
  },
};

const DefaultTemplate = (args) => 
`<ifx-button label="${args.label}" color="${args.color}" icon="${args.icon}">
</ifx-button>`;

export const Default = DefaultTemplate.bind({});
