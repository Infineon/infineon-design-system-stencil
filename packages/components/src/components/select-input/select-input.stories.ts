
export default {
  title: "Components/SelectInput",
  tags: ['autodocs'],

  args: {
    icon: 'bargraph16',
  },
}


const DefaultTemplate = (args) =>
  `<ifx-select-input>
    <ifx-text-field icon="true" readonly="true" slot="text-input"></ifx-text-field>
    <ifx-dropdown-menu slot="menu">
      <ifx-dropdown-item value="Item1">Item1</ifx-dropdown-item>
      <ifx-dropdown-item value="Item2">Item2</ifx-dropdown-item>
      <ifx-dropdown-divider></ifx-dropdown-divider>
      <ifx-dropdown-item icon="${args.icon}" value="Item3">Item3</ifx-dropdown-item>
      <ifx-dropdown-item icon="${args.icon}" value="Item3">Item4</ifx-dropdown-item>
    </ifx-dropdown-menu>
  </ifx-select-input>`;


export const Default = DefaultTemplate.bind({});


