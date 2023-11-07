import { icons } from '@infineon/infineon-icons';

export default {
  title: "Components/Badge",
  tags: ['autodocs'],

  args: {
    label: 'Badge label',
    icon: false
  },
  
  argTypes: { 
    iconName: {
      options: Object.values(icons).map(i => i['name']),
      control: { type: 'select' }
    }
  }
};


const DefaultTemplate = (args) =>
  `<ifx-badge>
    ${args.icon ? `<ifx-icon icon="${args.iconName}"></ifx-icon>` : ""}
    ${args.label}
  </ifx-badge>`;


export const Default = DefaultTemplate.bind({});
Default.argTypes = {

}



