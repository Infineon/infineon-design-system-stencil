export default {
  title: "Components/MultiSelectInput",
  tags: ['autodocs'],

  args: {
    placeholder: 'Placeholder',
  },

  argTypes: {

  },
};


const DefaultTemplate = (args) =>
  `<ifx-multi-select-input placeholder="${args.placeholder}">
  <ifx-dropdown-menu slot="menu">
    <ifx-dropdown-item checkable value="Automated system">Automated system</ifx-dropdown-item>
    <ifx-dropdown-item checkable value="Automated machine">Automated machine</ifx-dropdown-item>
    <ifx-dropdown-item checkable value="Automated Engineering system">Automated Engineering system</ifx-dropdown-item>
    <ifx-dropdown-item checkable value="Item4">Item4</ifx-dropdown-item>
    <ifx-dropdown-item checkable value="Item5">Item5</ifx-dropdown-item>
    <ifx-dropdown-item checkable value="Item6">Item6</ifx-dropdown-item>
  </ifx-dropdown-menu>
</ifx-multi-select-input>`;


export const Default = DefaultTemplate.bind({});