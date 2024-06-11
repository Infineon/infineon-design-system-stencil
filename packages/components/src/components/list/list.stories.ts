import { action } from "@storybook/addon-actions";


export default {
  title: 'Components/List',

  tags: ['autodocs'],
  args: {
    name: 'checkbox-list',
    maxVisibleItems: 10,
    type: 'checkbox'
  },
  argTypes: {
    type: {
      description: 'Type options currently available: Checkbox and Radio button',
      options: ['checkbox', 'radio-button'],
      control: { type: 'radio' },
    },
    ifxListUpdate: {
      action: 'ifxListUpdate',
      description: 'Custom event emitted when the selected items in the list change',
      table: {
        type: {
          summary: 'Framework integration',
          detail:
            'React: onIfxListUpdate={handleChange}\nVue:@ifxListUpdate="handleChange"\nAngular:(ifxListUpdate)="handleChange()"\nVanillaJs:.addEventListener("ifxListUpdate", (event) => {//handle change});',
        },
      },
    },
  },

};

const CheckboxListTemplate = (args) => {
  const list = document.createElement('ifx-list');
  list.setAttribute('name', args.name);
  list.setAttribute('max-visible-items', args.maxVisibleItems);
  list.setAttribute('type', args.type);

  for (let i = 1; i <= 7; i++) {
    const listEntry = document.createElement('ifx-list-entry');
    listEntry.setAttribute('type', args.type);
    listEntry.setAttribute('label', `Checkbox ${i}`);
    listEntry.setAttribute('value', 'false');
    listEntry.setAttribute('slot', `slot${i}`); // Assign a unique slot name to each entry
    listEntry.textContent = `Checkbox ${i}`;

    list.appendChild(listEntry);
  }

  list.addEventListener('ifxListUpdate', action('ifxListUpdate'));

  // Add a new list entry after 3 seconds
  setTimeout(() => {
    const listEntry = document.createElement('ifx-list-entry');
    listEntry.setAttribute('type', args.type);
    listEntry.setAttribute('label', `Checkbox 8`);
    listEntry.setAttribute('value', 'false');
    listEntry.setAttribute('slot', `slot8`); // Assign a unique slot name to the new entry
    listEntry.textContent = `Checkbox 8`;

    list.appendChild(listEntry);
  }, 3000);

  return list;
};
export const CheckboxList = CheckboxListTemplate.bind({});
CheckboxList.args = {
  name: 'checkbox-list',
  type: 'checkbox',
};



const RadioButtonListTemplate = (args) => {
  args.type = 'radio-button';
  const list = document.createElement('ifx-list');
  list.setAttribute('name', args.name);
  list.setAttribute('max-visible-items', args.maxVisibleItems);
  list.setAttribute('type', args.type);


  for (let i = 1; i <= 7; i++) {
    const listEntry = document.createElement('ifx-list-entry');
    listEntry.setAttribute('type', args.type);
    listEntry.setAttribute('label', `Radio Button ${i}`);
    listEntry.setAttribute('value', 'false');
    listEntry.setAttribute('slot', `slot${i}`); // Assign a unique slot name to each entry
    listEntry.textContent = `Radio Button ${i}`;

    list.appendChild(listEntry);

  }
  list.addEventListener('ifxListUpdate', action('ifxListUpdate'));

  return list;
};

export const RadioButtonList = RadioButtonListTemplate.bind({});
RadioButtonList.args = {
  name: 'radio-button-list',
  type: 'radio-button',
};
