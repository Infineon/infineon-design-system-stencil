import { action } from "@storybook/addon-actions";

export default {
  title: 'Components/List',
  tags: ['autodocs'],
  args: {
    listName: 'Checkbox list',
    maxVisibleItems: 5,
  }
};


const radioButtons = [
  { label: 'Radio 1', value: true },
  { label: 'Radio 2', value: false },
  { label: 'Radio 3', value: true },
];


const generateNodes = (htmlString) => {
  const div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return Array.from(div.childNodes);
};

const wrapInDiv = (node) => {
  const div = document.createElement('div');
  div.appendChild(node);
  return div;
};


const generateRadioButtons = () => {
  return radioButtons.map((radioButton) => `
    <ifx-radio-button size="s" id="${radioButton.label}" name="${radioButton.label}" ${radioButton.value ? 'true' : ''}>
      ${radioButton.label}
    </ifx-radio-button>
  `).join('');
};

const radioBtns = generateNodes(generateRadioButtons()).map(wrapInDiv);


export const CheckboxList = (args) => {
  const list = document.createElement('ifx-list');
  list.setAttribute('list-name', args.listName);
  list.setAttribute('max-visible-items', args.maxVisibleItems);


  for (let i = 1; i <= 7; i++) {
    const listEntry = document.createElement('ifx-list-entry');
    listEntry.setAttribute('type', 'checkbox');
    listEntry.setAttribute('label', `Checkbox ${i}`);
    listEntry.setAttribute('value', 'false');
    listEntry.setAttribute('slot', `slot${i}`); // Assign a unique slot name to each entry
    listEntry.textContent = `Checkbox ${i}`;

    list.appendChild(listEntry);

  }
  list.addEventListener('ifxListChange', action('ifxListChange'));

  return list;
};

export const RadioButtonList = (args) => {
  const list = document.createElement('ifx-list');
  list.setAttribute('list-name', args.listName);

  radioBtns.forEach(radioBtn => list.appendChild(radioBtn));


  return list;
};