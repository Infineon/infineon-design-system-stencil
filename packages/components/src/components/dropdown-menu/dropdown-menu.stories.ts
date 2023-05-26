export default {
  title: 'Components/Dropdown-Menu',
  args: {
    icon: "c-check-16"
  }
}

const DefaultTemplate = (args) =>
  `<ifx-dropdown-menu>
    <ifx-dropdown-item icon=${args.icon}>item 1</ifx-dropdown-item>
    <ifx-dropdown-item icon=${args.icon}>item 1</ifx-dropdown-item>
    <ifx-dropdown-item icon=${args.icon}>item 1</ifx-dropdown-item>
    <ifx-dropdown-item icon=${args.icon}>item 1</ifx-dropdown-item>
  </ifx-dropdown-menu>`;

export const Default = DefaultTemplate.bind({});

