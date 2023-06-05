export default {
  title: "Components/Chip",
  args: {
    defaultLabel: 'default label',
  },

  argTypes: {

  },
};


const DefaultTemplate = (args) =>
  `<ifx-chip default-label="${args.defaultLabel}">
  <ifx-dropdown-menu slot="menu">
    <ifx-dropdown-item value="Item 1" checkable>Item1</ifx-dropdown-item>
    <ifx-dropdown-item value="Item 2" checkable>Item2</ifx-dropdown-item>
    <ifx-dropdown-item value="Item 3" checkable>Item3</ifx-dropdown-item>
    <ifx-dropdown-item value="Item 4" checkable>Item4</ifx-dropdown-item>
  </ifx-dropdown-menu>
</ifx-chip>`;


export const Default = DefaultTemplate.bind({});


