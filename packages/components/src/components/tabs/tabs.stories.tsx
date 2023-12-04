import { action } from '@storybook/addon-actions';

const tabHeaders = [{
  header: "tab a",
  disabled: false
},
{
  header: "tab b",
  disabled: true
},
{
  header: "tab c",
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

    ifxTabChange: {
      action: 'ifxTabChange',
      description: 'Custom event emitted on tab index change, containing the current (currentTab) and the previous tab (previousTab)',
      table: {
        type: {
          summary: 'Framework integration',
          detail: 'React: onIfxTabChange={handleChange}\nVue:@ifxTabChange="handleChange"\nAngular:(ifxTabChange)="handleChange()"\nVanillaJs:.addEventListener("ifxTabChange", (event) => {//handle change});',
        },
      },
    },
    setActiveTab: {
      action: 'setActiveTab',
      description: 'A function to set the active tab. Must be called with the index of the tab to activate',
      table: {
        type: {
          summary: 'Framework integration',
          detail: 'Angular:\n//app.component.html\n<ifx-tabs #tabsElement>...</ifx-tabs>\n//app.component.ts\nimport { IfxTabs } from \'@infineon/infineon-design-system-angular\';\n...\n@ViewChild(\'tabsElement\') ifxTabs: IfxTabs | undefined;\nthis.ifxTabs?.setActiveTab(index);\n\nReact:\n//Tabs.js\n<ifx-tabs ref={tabsElement}>...</ifx-tabs>\n...\nconst tabsElement = useRef(null);\ntabsElement.current.setActiveTab(index);\n\nVue:\n//Tabs.vue\n<ifx-tabs ref="tabsElement">...</ifx-tabs>\n...\nconst tabsElement = ref(null);\ntabsElement.value.setActiveTab(index);',
        }
      },
    }
  },
};


const Template = (args) => {
  const tabsElement = document.createElement('ifx-tabs') as HTMLIfxTabsElement;
  tabsElement.setAttribute('orientation', args.orientation);
  tabsElement.addEventListener('ifxTabChange', action(`ifxTabChange`));

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
