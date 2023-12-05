
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

const SubmenuTemplate = (args) =>
  `<ifx-sidebar application-name="${args.applicationName}">
  <ifx-sidebar-item>
  Header Section
  <ifx-sidebar-item icon="image-16">
    Menu Item
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  <ifx-sidebar-item icon="image-16">
    Menu Item
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  <ifx-sidebar-item icon="image-16">
    Menu Item
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  </ifx-sidebar-item>
  
  <ifx-sidebar-item>
  Header Section
  <ifx-sidebar-item icon="image-16">
    Menu Item
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  <ifx-sidebar-item icon="image-16">
    Menu Item
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  <ifx-sidebar-item icon="image-16">
    Menu Item
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  </ifx-sidebar-item>

  <ifx-sidebar-item>
  Header Section
  <ifx-sidebar-item icon="image-16">
    Menu Item
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  <ifx-sidebar-item icon="image-16">
    Menu Item
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  <ifx-sidebar-item icon="image-16">
    Menu Item
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  </ifx-sidebar-item>
</ifx-sidebar>`;


export const WithSubmenu = SubmenuTemplate.bind({});


const NumberIndicatorTemplate = () =>
  `<ifx-sidebar application-name="Application name">
  <ifx-sidebar-item icon="image-16" number-indicator="5">Menu Item</ifx-sidebar-item>
  <ifx-sidebar-item icon="image-16" number-indicator="1">Menu Item</ifx-sidebar-item>
  <ifx-sidebar-item icon="image-16" number-indicator="23">Menu Item</ifx-sidebar-item>
  <ifx-sidebar-item active="false">
    Header Section
    <ifx-sidebar-item icon="image-16" active="false" >
      Second layer
      <ifx-sidebar-item target="_blank" active="false" icon="image-16">
      3rd layer Menu Item
      </ifx-sidebar-item>

      <ifx-sidebar-item target="_blank" active="false" icon="image-16" value="thisPage">
      This Page
      </ifx-sidebar-item>

      <ifx-sidebar-item target="_blank" active="false" icon="image-16">
      3rd layer Menu Item
      </ifx-sidebar-item>
    </ifx-sidebar-item>

    <ifx-sidebar-item icon="image-16" active="false">
      Second layer
      <ifx-sidebar-item target="_blank" icon="image-16" active="false">
      Menu Item
      </ifx-sidebar-item>
    </ifx-sidebar-item>

    <ifx-sidebar-item icon="image-16" active="false">
      Second layer
      <ifx-sidebar-item target="_blank" icon="image-16" active="false">
      Menu Item
      </ifx-sidebar-item>
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  

  <ifx-sidebar-item active="false" active="false">
  Header Section
  <ifx-sidebar-item icon="image-16" active="false">
    Menu Item
    <ifx-sidebar-item active="false" target="_blank" icon="image-16">
    Sub Menu Item
    </ifx-sidebar-item>
    <ifx-sidebar-item target="_blank" icon="image-16" value="thisPage">
    This one too
    </ifx-sidebar-item>
    <ifx-sidebar-item target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  <ifx-sidebar-item icon="image-16">
    Menu Item
    <ifx-sidebar-item target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  <ifx-sidebar-item icon="image-16">
    Menu Item
    <ifx-sidebar-item target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  </ifx-sidebar-item>


  <ifx-sidebar-item>
  Header Section
  <ifx-sidebar-item icon="image-16">
    Menu Item
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  <ifx-sidebar-item icon="image-16">
    Menu Item
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  <ifx-sidebar-item icon="image-16">
    Menu Item
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">
    Menu Item
    </ifx-sidebar-item>
  </ifx-sidebar-item>
  </ifx-sidebar-item>
</ifx-sidebar>`;


export const WithNumberIndicator = NumberIndicatorTemplate.bind({});

