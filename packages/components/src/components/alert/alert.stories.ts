import { icons } from '@infineon/infineon-icons';
import { action } from '@storybook/addon-actions';

export default {
  title: "Components/Alert",
  tags: ['autodocs'],

  args: {
    label: 'Attention! This is an alert message — check it out!',
    color: "primary",
    showIcon: true,
    iconName: 'c-info-24',
  },

  argTypes: {
    color: {
      options: ['primary', 'secondary', 'danger', 'warning'],
      control: { type: 'radio' },
    },

    iconName: {
      options: Object.values(icons).map(i => i['name']),
      control: { type: 'select' }
    },

    ifxClose: {
      action: 'ifxClose',
      description: 'Custom event emitted when close button clicked',
      table: {
        type: {
          summary: 'Framework integration',
          detail: 'React: onIfxClose={handleChange}\nVue:@ifxClose="handleChange"\nAngular:(ifxClose)="handleChange()"\nVanillaJs:.addEventListener("ifxClose", (event) => {//handle change});',
        },
      },
    }
  }
};


  const DefaultTemplate = ({
    color,
    iconName,
    label,
    showIcon
  }) => {
    const alert = document.createElement('ifx-alert');
    alert.setAttribute('color', color);
    alert.setAttribute('icon', showIcon ? iconName : "");
    alert.addEventListener('ifxClose', action('ifxClose'));
    alert.innerHTML = label;
  
    return alert;
  };

export const Default = DefaultTemplate.bind({});
