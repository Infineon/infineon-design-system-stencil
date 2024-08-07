import { icons } from '@infineon/infineon-icons';

export default {
  title: 'Components/Navigation/Navbar',
  args: {
    applicationName: 'Application name',
    hideLabel: true,
    navbarItemTarget: '_blank',
    navbarItemHref: '',
    searchBarIsOpen: false,
    navbarPositionFixed: false,
    showLogoAndAppname: true,
    logoHref: 'http://google.com',
    logoHrefTarget: '_self',
    searchBarPosition: 'left',
    hideOnMobile: true,
    profileImageUrl: "",
    userName: "",
    profileLabel: ""
  },
  argTypes: {
    icon: {
      options: Object.values(icons).map(i => i['name']),
      control: { type: 'select' },
    },
    logoHrefTarget: {
      description: "If not '_self' or '_blank' or '_parent', then set to '_self' by default",
      options: ['_self', '_blank', '_parent'],
      control: { type: 'radio' },
    },
    searchBarPosition: {
      options: ['left', 'right'],
      control: { type: 'radio' },
    },
  },
};

const DefaultTemplate = args =>
  `<ifx-navbar  show-logo-and-appname="${args.showLogoAndAppname}" application-name="${args.applicationName}" fixed="${args.fixed}" logo-href="${args.logoHref}" logo-href-target="${args.logoHrefTarget}">
  <ifx-navbar-item icon="${args.icon}" slot="left-item" target="" href="" >
    Menu Item
    <ifx-navbar-item icon="">
      Layer 1 Nested Item 1
      <ifx-navbar-item>
        Layer 2 Nested Item 2
        <ifx-navbar-item href="http://google.com" target="_blank">Link Layer 3 Nested Item 1</ifx-navbar-item>
        <ifx-navbar-item>Layer 3 Nested Item 2</ifx-navbar-item>
        <ifx-navbar-item>Layer 3 Nested Item 3</ifx-navbar-item>
        <ifx-navbar-item>Layer 3 Nested Item 4</ifx-navbar-item>
      </ifx-navbar-item>
      <ifx-navbar-item >Layer 2 Nested Item 3</ifx-navbar-item>
      <ifx-navbar-item>Layer 2 Nested Item 4</ifx-navbar-item>
      <ifx-navbar-item>Layer 2 Nested Item 5</ifx-navbar-item>
    </ifx-navbar-item>

    <ifx-navbar-item>
      Layer 1 Nested Item 2
      <ifx-navbar-item>Layer 2 Item 1</ifx-navbar-item>
      <ifx-navbar-item>Layer 2 Item 2</ifx-navbar-item>
      <ifx-navbar-item>Layer 2 Item 3</ifx-navbar-item>
    </ifx-navbar-item>

    <ifx-navbar-item>Nested Item 3</ifx-navbar-item>

    <ifx-navbar-item>
      Layer 1 Nested Item 4
      <ifx-navbar-item>Nested Item 4</ifx-navbar-item>
    </ifx-navbar-item>

  </ifx-navbar-item>

  <ifx-navbar-item href="${args.navbarItemHref}" target="${args.navbarItemTarget}" slot="left-item" icon="" show-label="${args.hideLabel}">
    Menu Item
  </ifx-navbar-item>

  <ifx-navbar-item slot="left-item">
    More
    <ifx-navbar-item>Item1</ifx-navbar-item>
    <ifx-navbar-item>Item2</ifx-navbar-item>
  </ifx-navbar-item>

  <ifx-search-bar slot="search-bar-${args.searchBarPosition}" is-open="${args.searchBarIsOpen}"></ifx-search-bar>

  <ifx-navbar-item slot="right-item" target="_blank" href="http://google.com" hide-on-mobile="${args.hideOnMobile}" show-label="true" icon="image-16">
  </ifx-navbar-item>
  <ifx-navbar-item slot="right-item" hide-on-mobile="true" show-label='false' icon="image-16">
  </ifx-navbar-item>

  <ifx-navbar-profile user-name="${args.userName}" slot="right-item" image-url="${args.profileImageUrl}" show-label="true" href="" target="_blank">${args.profileLabel}</ifx-navbar-profile>
</ifx-navbar>`;

export const Default = DefaultTemplate.bind({});
