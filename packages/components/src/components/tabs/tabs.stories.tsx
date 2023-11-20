import { action } from '@storybook/addon-actions';

const tabHeaders = [{
  header: "a",
  disabled: false
},
{
  header: "b",
  disabled: true
},
{
  header: "c",
  disabled: false,
}];


export default {
  title: 'Components/Tabs',
  tags: ['autodocs'],

  component: 'ifx-tabs',
  argTypes: {
    amountOfTabs: { name: 'Amount of Tabs', control: 'number' },
    lastTabDisabled: { name: 'Last tab disabled', control: 'boolean' },
    orientation: {
      name: 'Orientation',
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
    // tabHeaders: {
    //   name: 'Tab Headers',
    //   type: { name: 'array', required: true },
    //   description: 'An array of tab headers in the following format to be used in the tabs component'
    // },
    ifxTabIndex: {
      action: 'ifxTabIndex',
      description: 'Custom event emitted on tab index change',
      table: {
        type: {
          summary: 'Framework integration',
          detail: 'React: onIfxTabIndex={handleChange}\nVue:@ifxTabIndex="handleChange"\nAngular:(ifxTabIndex)="handleChange()"\nVanillaJs:.addEventListener("ifxTabIndex", (event) => {//handle change});',
        },
      },
    },
    setActiveTab: {
      action: 'setActiveTab',
      description: 'A function to set the active tab. Must be called with the index of the tab to activate',
      table: {
        type: {
          summary: 'Framework integration',
          detail: 'React: const tabsElement = useRef(null);\n\nconst handleClick = (index) => {\n  tabsElement.current.setActiveTab(index);\n};\n\n<ifx-tabs ref={tabsElement}>...</ifx-tabs>\n\nVue: const tabsElement = ref(null);\n\nconst handleClick = (index) => {\n tabsElement.value.setActiveTab(index);\n};\n\n<ifx-tabs ref="tabsElement">...</ifx-tabs>',
        }
      },
    }
  },
};

// function isDisabled(activeTabIndex: string | number, tabHeaders: { [x: string]: { disabled: any; }; }) {
//   console.log("tab", activeTabIndex, tabHeaders[activeTabIndex].disabled)
//   if (tabHeaders[activeTabIndex].disabled) {
//     return true;
//   }
//   return false;
// }

const Template = (args) => {

  const tabsElement = document.createElement('ifx-tabs') as HTMLIfxTabsElement;
  tabsElement.setAttribute('orientation', args.orientation);
  tabsElement.addEventListener('ifxTabIndex', action(`ifxTabIndex`));

  for (let i = 0; i < args.amountOfTabs; i++) {
    const tabContent = document.createElement('ifx-tab');
    tabContent.setAttribute('header', tabHeaders[i].header);
    tabContent.setAttribute('disabled', tabHeaders[i].disabled.toString());
    if (i === args.amountOfTabs - 1) {
      tabContent.setAttribute('disabled', `${args.lastTabDisabled}`);
    }
    tabContent.innerHTML = `
        Content for Tab #${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
    `;
    tabsElement.append(tabContent);
  }

  // if (args.activeTabIndex !== undefined) { // && !isDisabled(args.activeTabIndex, args.tabHeaders)
  //   console.log("set active tab from new index: ", args.activeTabIndex)
  //   tabsElement.setActiveTab(args.activeTabIndex);
  // }
  // else {
  //   console.log("index", args.activeTabIndex);
  //   args.activeTabIndex = undefined;
  // }

  return tabsElement;
};

export const Default = Template.bind({});
Default.args = {
  amountOfTabs: 3,
  orientation: 'horizontal',
  lastTabDisabled: false

};

export const Disabled = Template.bind({});
Disabled.args = {
  amountOfTabs: 3,
  orientation: 'horizontal',
  lastTabDisabled: true
};
