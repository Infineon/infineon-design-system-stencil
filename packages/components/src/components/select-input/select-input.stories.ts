import { Meta } from '@storybook/html';

export default {
  title: "Components/SelectInput",
  args: {
    icon: 'bargraph16',
  },
  parameters: {
    viewport: {
      defaultViewport: 'reset',
    },
    docs: {
      viewport: {
        defaultViewport: 'custom',
        viewports: {
          custom: {
            name: 'Custom',
            styles: {
              width: '400px', // Adjust the width as per your requirements
              height: '500px', // Adjust the height as per your requirements
            },
          },
        },
      },
    },
  },
  argTypes: {},
} as Meta;


const DefaultTemplate = (args) =>
  `<ifx-select-input>
    <ifx-text-input icon="true" readonly="true" slot="text-input"></ifx-text-input>
    <ifx-dropdown-menu slot="menu">
      <ifx-dropdown-item value="Item1">Item1</ifx-dropdown-item>
      <ifx-dropdown-item value="Item2">Item2</ifx-dropdown-item>
      <ifx-dropdown-divider></ifx-dropdown-divider>
      <ifx-dropdown-item icon="${args.icon}" value="Item3">Item3</ifx-dropdown-item>
      <ifx-dropdown-item icon="${args.icon}" value="Item3">Item4</ifx-dropdown-item>
    </ifx-dropdown-menu>
  </ifx-select-input>`;


export const Default = DefaultTemplate.bind({});


