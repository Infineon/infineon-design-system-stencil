import { action } from "@storybook/addon-actions";

export default {
  title: 'Components/Choices',
  tags: ['autodocs'],
  args: {
    searchEnabled: true,
    removeItemButton: false,
    disabled: false,
  },

  argTypes: {
    // type: { control: { type: 'select', options: ['single', 'multiple', 'text'] } },
    value: { control: 'text' },
    name: { control: 'text' },
    removeItemButton: {
      options: [true, false],
      control: { type: 'radio' },
    },
    searchEnabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
    searchPlaceholderValue: { control: { type: 'text' } },
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
    choices: { control: 'text', options: ['Choice 1', 'Choice 2', 'Choice 3'] },
    onChange: { action: 'change' },
  },
};

const DefaultTemplate = (args) => {
  const element = document.createElement('ifx-choices');
  element.setAttribute('disabled', args.disabled);
  element.setAttribute('type', args.type);
  element.setAttribute('value', args.value);
  element.setAttribute('name', args.name);
  element.setAttribute('remove-item-button', args.removeItemButton);
  element.setAttribute('search-enabled', args.searchEnabled)
  element.setAttribute('search-placeholder-value', args.searchPlaceholderValue)
  element.setAttribute('choices', args.choices);

  console.log("choices ", args.choices)
  const choicesStr = args.choices;
  if (typeof choicesStr === 'string') {
    const choices = choicesStr.split(',').map((choice) => ({
      value: choice.trim(),
      label: choice.trim(),
    }));
    if (args.type === 'single' || args.type === 'multiple') {
      element.setChoices(choices, 'value', 'label', true);
    }
  } else {
    console.error("Invalid choices input:", choicesStr);
  }

  element.addEventListener('ifxChange', action('ifxChange'));

  return element;
}


export const Default = DefaultTemplate.bind({});
Default.args = {
  type: 'text',
  value: 'Placeholder',
  name: 'text',
  choices: 'Choice 1, Choice 2, Choice 3',

};


export const Single = DefaultTemplate.bind({});
Single.args = {
  type: 'single',
  value: 'Placeholder',
  name: 'single',
  removeItemButton: true,
  searchPlaceholderValue: 'Search...',
  searchEnabled: true,
  disabled: false,
  choices: 'Choice 1, Choice 2, Choice 3',

};

export const SingleWithIcon = DefaultTemplate.bind({});
SingleWithIcon.args = {
  type: 'single',
  value: 'Placeholder',
  name: 'single',
  searchPlaceholderValue: 'Search...',
  searchEnabled: true,
  disabled: false,
  choices: "Choice 1, Choice 2 <ifx-icon icon='check16'></ifx-icon>, Choice 3 <ifx-icon icon='check16'></ifx-icon>",

};


export const Multiple = DefaultTemplate.bind({});
Multiple.args = {
  type: 'multiple',
  value: 'Placeholder',
  name: 'multi',
  removeItemButton: true,
  disabled: false,
  choices: 'Choice 1, Choice 2, Choice 3'

};






