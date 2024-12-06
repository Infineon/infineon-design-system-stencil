import { action } from '@storybook/addon-actions';
import { icons } from '@infineon/infineon-icons';

export default {
  title: 'Components/Breadcrumb',
  tags: ['autodocs'],

  args: {
    icon: '',
    iconArialLabel: '',
    url: 'http://google.com',
    target: '_self',
  },
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: ['none', ...Object.values(icons).map(i => i['name'])],
      description: 'Set the icon of the tab. Choose "none" to display no icon.',
      table: {
        category: 'ifx-breadcrumb-item-label props',
        defaultValue: {
          summary: ''
        },
        type: {
          summary: 'string'
        }
      }
    },
    target: {
      control: { type: 'text' },
      description: 'Set the target of the link.',
      table: {
        category: 'ifx-breadcrumb-item-label props',
        defaultValue: {
          summary: '_self'
        },
        type: {
          summary: 'string'
        }
      }
    },
    iconArialLabel: {
      control: { type: 'text' },
      description: 'Set the aria label of the icon.',
      table: {
        category: 'ifx-breadcrumb-item-label props',
        defaultValue: {
          summary: ''
        },
        type: {
          summary: 'string'
        }
      }
    },
    url: {
      control: { type: 'text' },
      description: 'Set the url of the link.',
      table: {
        category: 'ifx-dropdown-item props',
        defaultValue: {
          summary: ''
        },
        type: {
          summary: 'string'
        }
      }
    },
    ifxDropdownMenuItem: {
      action: 'ifxDropdownMenuItem',
      description: 'Custom event emitted when an item is selected.',
      table: {
        category: 'custom events',
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
  const icon = args.icon === 'none' ? '' : args.icon;
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `<ifx-breadcrumb>
  <ifx-breadcrumb-item>
    <ifx-breadcrumb-item-label slot="label" icon="${args.icon ? icon : ''}">Breadcrumb 1</ifx-breadcrumb-item-label>
    <ifx-dropdown-menu>
      <ifx-dropdown-item url=${args.url}>Google</ifx-dropdown-item>
      <ifx-dropdown-item url="http://bing.com">Bing</ifx-dropdown-item>
      <ifx-dropdown-item url="http://yahoo.com">Yahoo</ifx-dropdown-item>
      <ifx-dropdown-item url="http://naver.com">Naver</ifx-dropdown-item>
    </ifx-dropdown-menu>
  </ifx-breadcrumb-item>

  <ifx-breadcrumb-item>
    <ifx-breadcrumb-item-label slot="label" icon="${args.icon ? icon : ''}">Breadcrumb 2</ifx-breadcrumb-item-label>
    <ifx-dropdown-menu>
    <ifx-dropdown-item url=${args.url}>Google</ifx-dropdown-item>
    <ifx-dropdown-item url="http://bing.com">Bing</ifx-dropdown-item>
    <ifx-dropdown-item url="http://yahoo.com">Yahoo</ifx-dropdown-item>
    <ifx-dropdown-item url="http://naver.com">Naver</ifx-dropdown-item>
    </ifx-dropdown-menu>
  </ifx-breadcrumb-item>

  <ifx-breadcrumb-item>
    <ifx-breadcrumb-item-label slot="label" icon="${args.icon ? icon : ''}" url="http://google.com">Breadcrumb 3</ifx-breadcrumb-item-label>
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
