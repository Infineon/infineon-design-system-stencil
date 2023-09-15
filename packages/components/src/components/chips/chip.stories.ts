import { action } from '@storybook/addon-actions';

export default {
  title: "Components/Chip",
  tags: ['autodocs'],

  args: {
    placeholder: 'Placeholder',
  },
  argTypes: {

  },
};


const DefaultTemplate = (args) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `<ifx-chip placeholder="${args.placeholder}">
  <ifx-dropdown-menu size="m" slot="menu">
  <ifx-dropdown-item icon="" target="_self" href="">Menu Item 1</ifx-dropdown-item>
  <ifx-dropdown-item icon="" target="_self" href="">Menu Item 2</ifx-dropdown-item>
  <ifx-dropdown-item icon="" target="_self" href="">Menu Item 3</ifx-dropdown-item>
  <ifx-dropdown-item icon="" target="_self" href="">Menu Item 4</ifx-dropdown-item>
  <ifx-dropdown-item icon="" target="_self" href="">Menu Item 5</ifx-dropdown-item>
</ifx-dropdown-menu>
</ifx-chip>`;

  const chip = wrapper.querySelector('ifx-chip') as HTMLElement;
  const dropdownMenu = chip.querySelector('ifx-dropdown-menu');

  dropdownMenu.addEventListener('ifxDropdownMenuItem', action('ifxDropdownMenuItem'));
  return wrapper;
}

export const Default = DefaultTemplate.bind({});


