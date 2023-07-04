export default {
  title: 'Components/Breadcrumb',
  tags: ['autodocs'],

  args: {
    icon: false
  },
};

const DefaultTemplate = (args) =>
  `<ifx-breadcrumb>
  <ifx-breadcrumb-item>
    <ifx-breadcrumb-item-label slot="label" icon="${args.icon ? 'c-info-16' : ""}">Breadcrumb 1</ifx-breadcrumb-item-label>
    <ifx-dropdown-menu>
      <ifx-dropdown-item url="http://google.com">Google</ifx-dropdown-item>
      <ifx-dropdown-item url="http://bing.com">Bing</ifx-dropdown-item>
      <ifx-dropdown-item url="http://yahoo.com">Yahoo</ifx-dropdown-item>
      <ifx-dropdown-item url="http://naver.com">Naver</ifx-dropdown-item>
    </ifx-dropdown-menu>
  </ifx-breadcrumb-item>

  <ifx-breadcrumb-item>
    <ifx-breadcrumb-item-label slot="label" icon="${args.icon ? 'c-info-16' : ""}">Breadcrumb 2</ifx-breadcrumb-item-label>
    <ifx-dropdown-menu>
    <ifx-dropdown-item url="http://google.com">Google</ifx-dropdown-item>
    <ifx-dropdown-item url="http://bing.com">Bing</ifx-dropdown-item>
    <ifx-dropdown-item url="http://yahoo.com">Yahoo</ifx-dropdown-item>
    <ifx-dropdown-item url="http://naver.com">Naver</ifx-dropdown-item>
    </ifx-dropdown-menu>
  </ifx-breadcrumb-item>

  <ifx-breadcrumb-item>
    <ifx-breadcrumb-item-label slot="label" icon="${args.icon ? 'c-info-16' : ""}" url="http://google.com">Breadcrumb 3</ifx-breadcrumb-item-label>
  </ifx-breadcrumb-item>
</ifx-breadcrumb>`;

export const Default = DefaultTemplate.bind({});

