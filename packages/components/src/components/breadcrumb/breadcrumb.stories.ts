import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Breadcrumb',
  tags: ['autodocs'],

  args: {
    icon: false,
  },
  argTypes: {
    ifxDropdownMenuItem: {
      action: 'ifxDropdownMenuItem',
      description: 'Custom event emitted when an item is selected',
      table: {
        type: {
          summary: 'Framework integration',
          detail:
            'React: onIfxDropdownMenuItem={handleChange}\nVue:@ifxDropdownMenuItem="handleChange"\nAngular:(ifxDropdownMenuItem)="handleChange()"\nVanillaJs:.addEventListener("ifxDropdownMenuItem", (event) => {//handle change});',
        },
      },
    },
  },
};

const DefaultTemplate = args => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `<ifx-breadcrumb>
  <ifx-breadcrumb-item>
    <ifx-breadcrumb-item-label slot="label" icon="${args.icon ? 'c-info-16' : ''}">Breadcrumb 1</ifx-breadcrumb-item-label>
    <ifx-dropdown-menu>
      <ifx-dropdown-item url="http://google.com">Google</ifx-dropdown-item>
      <ifx-dropdown-item url="http://bing.com">Bing</ifx-dropdown-item>
      <ifx-dropdown-item url="http://yahoo.com">Yahoo</ifx-dropdown-item>
      <ifx-dropdown-item url="http://naver.com">Naver</ifx-dropdown-item>
    </ifx-dropdown-menu>
  </ifx-breadcrumb-item>

  <ifx-breadcrumb-item>
    <ifx-breadcrumb-item-label slot="label" icon="${args.icon ? 'c-info-16' : ''}">Breadcrumb 2</ifx-breadcrumb-item-label>
    <ifx-dropdown-menu>
    <ifx-dropdown-item url="http://google.com">Google</ifx-dropdown-item>
    <ifx-dropdown-item url="http://bing.com">Bing</ifx-dropdown-item>
    <ifx-dropdown-item url="http://yahoo.com">Yahoo</ifx-dropdown-item>
    <ifx-dropdown-item url="http://naver.com">Naver</ifx-dropdown-item>
    </ifx-dropdown-menu>
  </ifx-breadcrumb-item>

  <ifx-breadcrumb-item>
    <ifx-breadcrumb-item-label slot="label" icon="${args.icon ? 'c-info-16' : ''}" url="http://google.com">Breadcrumb 3</ifx-breadcrumb-item-label>
  </ifx-breadcrumb-item>
</ifx-breadcrumb>`;

  const breadcrumb = wrapper.querySelector('ifx-breadcrumb') as HTMLElement;
  // Loop through each breadcrumb item and attach event listeners to its dropdown menu
  const breadcrumbItems = breadcrumb.querySelectorAll('ifx-breadcrumb-item');
  breadcrumbItems.forEach(breadcrumbItem => {
    const dropdownMenu = breadcrumbItem.querySelector('ifx-dropdown-menu');
    dropdownMenu?.addEventListener('ifxDropdownMenuItem', action('ifxDropdownMenuItem'));
  });

  return wrapper;
};

export const Default = DefaultTemplate.bind({});
