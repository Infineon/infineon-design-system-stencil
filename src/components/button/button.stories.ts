export default {
  title: "Components/Button",
  args: {
    label: "Button",
    variant: "solid",
    color: "primary",
    size: "m",
    disabled: false,
    icon: false,
  },
  argTypes: {
    variant: {
      options: ['solid', 'outline', 'outline-text'],
      control: {type: 'radio'},
    },
    color: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning'],
      control: {type: 'radio'},
    },
    size: {
      options: ['s', 'm'],
      control: {type: 'radio'},
    },
  },
};

const DefaultTemplate = (args) => 
`<ifx-button label="${args.label}" variant="${args.variant}" color="${args.color}" size="${args.size}" disabled="${args.disabled}" icon="${args.icon}">
</ifx-button>`;

export const Default = DefaultTemplate.bind({});
