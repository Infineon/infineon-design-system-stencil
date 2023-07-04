
export default {
  title: "Components/Sidebar",
  tags: ['autodocs'],

  args: {
    icon: ""
  },

  argTypes: {

  },
};


const DefaultTemplate = (args) =>
  `<ifx-sidebar>
  <ifx-sidebar-item icon="${args.icon}">Item One</ifx-sidebar-item>
  <ifx-sidebar-item>Item Two</ifx-sidebar-item>
  <ifx-sidebar-item>Item Three</ifx-sidebar-item>
  <ifx-sidebar-item>Item Four</ifx-sidebar-item>
</ifx-sidebar>`;


export const Default = DefaultTemplate.bind({});




