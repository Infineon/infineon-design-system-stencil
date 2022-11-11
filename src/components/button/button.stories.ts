export default {
  title: "Components/Button",
  args: {
    label: "Button",
    variant: "solid",
    color: "primary",
    icon: true,
  },
  argTypes: {
    variant: {
      options: ['solid', 'outline', 'outline-text'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning'],
      control: { type: 'radio' },
    },
  },
};

const DefaultTemplate = (args) => 
`<ifx-button label="${args.label}" variant="${args.variant}" color="${args.color}" icon="${args.icon}">
</ifx-button>`;

export const Default = DefaultTemplate.bind({});
