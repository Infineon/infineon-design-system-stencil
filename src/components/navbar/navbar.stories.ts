import CustomMDXDocumentation from './Custom-MDX-Documentation.mdx';

export default {
  title: "Components/Ifx-Navbar",
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};


const DefaultTemplate = () =>
  `<ifx-navbar>
    <ifx-navbar-menu-item hide-label="false" slot="left-menu-item">ONE</ifx-navbar-menu-item>
    <ifx-navbar-menu-item slot="left-menu-item">TWO</ifx-navbar-menu-item>
    <ifx-navbar-menu-item slot="left-menu-item">THREE</ifx-navbar-menu-item>
    <ifx-navbar-menu-item slot="left-menu-item">FOUR</ifx-navbar-menu-item>
    <ifx-navbar-menu-item slot="left-menu-item">FIVE</ifx-navbar-menu-item>
    <ifx-navbar-menu-item slot="left-menu-item">SIX</ifx-navbar-menu-item>
    <ifx-navbar-menu-item slot="left-menu-item">SEVEN</ifx-navbar-menu-item>
    <ifx-navbar-menu-item slot="left-menu-item">EIGHT</ifx-navbar-menu-item>

    <ifx-search-bar slot="search-bar" is-open="false" show-close-button="true"></ifx-search-bar>

    <ifx-navbar-menu-item hide-label="false" slot="right-menu-item">Right One</ifx-navbar-menu-item>
    <ifx-navbar-menu-item hide-label="false" slot="right-menu-item">Right Two</ifx-navbar-menu-item>
    <ifx-navbar-menu-item hide-label="false" slot="right-menu-profile-item">Tisho</ifx-navbar-menu-item>
  </ifx-navbar>`;


export const Default = DefaultTemplate.bind({});


