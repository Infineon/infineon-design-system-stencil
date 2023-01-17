export default {
  title: "Components/Button",
  args: {
    label: "Button",
    variant: "solid",
    color: "primary",
    size: "m",
    disabled: false,
    icon: false,
    position: 'left'
  },
  argsSlot: {
    label: "Button",
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
    size: {
      options: ['s', 'm'],
      control: { type: 'radio' },
    },
    position: { 
      options: ['left', 'right'],
      control: {type: 'radio'}
    }
  },
};


const DefaultTemplate = (args) => 
`<ifx-button label="${args.label}" variant="${args.variant}" color="${args.color}" size="${args.size}" disabled="${args.disabled}" icon="${args.icon}" position="${args.position}">

const DefaultTemplate = (args) =>
  `<ifx-button label="${args.label}" variant="${args.variant}" color="${args.color}" size="${args.size}" disabled="${args.disabled}" icon="${args.icon}">
</ifx-button>`;

const WithSlotTemplate = (args) =>
  `<ifx-button variant="${args.variant}" color="${args.color}" size="${args.size}" >
  <slot="label">${args.label}</slot>
</ifx-button>`;

const WithIconTemplateToTheLeft = (args) =>
  `<ifx-button label="${args.label}" icon="yes" variant="${args.variant}" color="${args.color}" size="${args.size}" disabled="${args.disabled}" icon="${args.icon}">

</ifx-button>`;

export const Default = DefaultTemplate.bind({});
export const WithSlot = WithSlotTemplate.bind({});
WithSlot.args = {
  label: 'Label via slot',
};
export const WithIconToTheLeft = WithIconTemplateToTheLeft.bind({});
WithIconToTheLeft.args = {
  icon: true,
};