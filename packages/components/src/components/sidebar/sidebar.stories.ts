
export default {
  title: "Components/Sidebar",
  tags: ['autodocs'],

  args: {
    icon: true,
    applicationName: 'Application Name'
  },

  argTypes: {

  },
};


const DefaultTemplate = (args) =>
  `<ifx-sidebar application-name="${args.applicationName}">
  <ifx-sidebar-item href="http://google.com" target="_blank" icon="${args.icon ? 'image-16' : ""}">Item One</ifx-sidebar-item>
  <ifx-sidebar-item href="http://google.com" target="_blank" icon="${args.icon ? 'image-16' : ""}">Item Two</ifx-sidebar-item>
  <ifx-sidebar-item href="http://google.com" target="_blank" icon="${args.icon ? 'image-16' : ""}">Item Three</ifx-sidebar-item>
  <ifx-sidebar-item href="http://google.com" target="_blank" icon="${args.icon ? 'image-16' : ""}">Item Four</ifx-sidebar-item>
</ifx-sidebar>`;


export const Default = DefaultTemplate.bind({});




