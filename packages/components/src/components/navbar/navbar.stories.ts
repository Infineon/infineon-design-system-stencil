import { icons } from '@infineon/infineon-icons';

export default {
  title: "Components/Navbar",
  args: {
    applicationName: 'Application name',
    hideLabel: false,
    navbarItemTarget: "_blank",
    navbarItemHref: "",
    navbarMenuHref: "",
    navbarMenuTarget: "_blank",
    searchBarIsOpen: false,
    searchBarShowCloseButton: true,
    navbarPositionFixed: false
  },
  argTypes: { 
    icon: {
      options: Object.values(icons).map(i => i['name']),
      control: { type: 'select' }
    }
  }
};


const DefaultTemplate = (args) =>
  `<ifx-navbar application-name="${args.applicationName}" fixed="${args.navbarPositionFixed}">
  <ifx-navbar-item hide-label="${args.hideLabel}" icon="${args.icon}" slot="left-item" target="${args.navbBarItemTarget}" href="${args.navbBarItemHref}">Menu Item 1</ifx-navbar-item>
  <ifx-navbar-item hide-label="${args.hideLabel}" slot="left-item">Menu Item</ifx-navbar-item>
  <ifx-navbar-item hide-label="${args.hideLabel}" slot="left-item">Menu Item</ifx-navbar-item>

  <ifx-navbar-menu slot="menu">
    <ifx-navbar-menu-item href="${args.navbarMenuHref}" target="${args.navbarMenuTarget}">Item 1</ifx-navbar-menu-item>
    <ifx-navbar-menu-item href="${args.navbarMenuHref}">Item 2</ifx-navbar-menu-item>
    <ifx-navbar-menu-item href="${args.navbarMenuHref}">Item 3</ifx-navbar-menu-item>
  </ifx-navbar-menu>

  <ifx-search-bar slot="search-bar-right" is-open="${args.searchBarIsOpen}" show-close-button="${args.searchBarShowCloseButton}"></ifx-search-bar>

  <ifx-navbar-item hide-label="${args.hideLabel}" slot="right-item">Right One</ifx-navbar-item>
  <ifx-navbar-item hide-label="${args.hideLabel}" slot="right-item">Right Two</ifx-navbar-item>
  <ifx-navbar-item hide-label="${args.hideLabel}" slot="right-profile-item">Tisho</ifx-navbar-item>
</ifx-navbar>`;


export const Default = DefaultTemplate.bind({});


