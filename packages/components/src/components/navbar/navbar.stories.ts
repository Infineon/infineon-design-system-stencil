
export default {
  title: "Components/Navbar",

};


const DefaultTemplate = () =>
  `<ifx-navbar application-name="Application name" fixed="false">
  <ifx-navbar-item hide-label="false" icon="calendar16" slot="left-item" target="_blank" href="https://google.com">Menu Item1</ifx-navbar-item>
  <ifx-navbar-item  slot="left-item">Menu Item</ifx-navbar-item>
  <ifx-navbar-item  slot="left-item">Menu Item</ifx-navbar-item>

  <ifx-navbar-menu slot="menu">
    <ifx-navbar-menu-item href="https://google.com" target="_blank">Item 1</ifx-navbar-menu-item>
    <ifx-navbar-menu-item href="https://google.com">Item 2</ifx-navbar-menu-item>
    <ifx-navbar-menu-item href="https://google.com">Item 3</ifx-navbar-menu-item>
  </ifx-navbar-menu>

  <ifx-search-bar size="default" slot="search-bar-right" is-open="false" show-close-button="true"></ifx-search-bar>

  <ifx-navbar-item hide-label="false" slot="right-item">Right One</ifx-navbar-item>
  <ifx-navbar-item hide-label="false" slot="right-item">Right Two</ifx-navbar-item>
  <ifx-navbar-item hide-label="false" slot="right-profile-item">Tisho</ifx-navbar-item>
</ifx-navbar>`;


export const Default = DefaultTemplate.bind({});


