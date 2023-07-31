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
    error: {
      options: [true, false],
      control: { type: 'radio' },
    },
    errorMessage: { control: 'text' },
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
  element.setAttribute('error', args.error);
  element.setAttribute('errorMessage', args.errorMessage);
  element.setAttribute('placeholder', args.placeholder);
  element.setAttribute('placeholderValue', args.placeholderValue);
  element.setAttribute('remove-item-button', args.removeItemButton);
  element.setAttribute('search-enabled', args.searchEnabled)
  element.setAttribute('search-placeholder-value', args.searchPlaceholderValue)
  element.setAttribute('choices', args.choices);

  //no other way to set array of values in storybook
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
  name: 'text',
  choices: 'Choice 1, Choice 2, Choice 3',

};


export const Single = DefaultTemplate.bind({});
Single.args = {
  type: 'single',
  name: 'single',
  error: false,
  errorMessage: 'Single select error',
  removeItemButton: true,
  placeholder: true,
  placeholderValue: 'Placeholder',
  searchPlaceholderValue: 'Search...',
  searchEnabled: true,
  disabled: false,
  choices: 'Choice 1, Choice 2, Choice 3',

};

export const SingleWithIcon = DefaultTemplate.bind({});
SingleWithIcon.args = {
  type: 'single',
  name: 'single',
  searchPlaceholderValue: 'Search...',
  searchEnabled: true,
  placeholder: true,
  placeholderValue: 'Placeholder',
  disabled: false,
  choices: "Choice 1, Choice 2 <ifx-icon icon='check16'></ifx-icon>, Choice 3 <ifx-icon icon='check16'></ifx-icon>",

};


export const Multiple = DefaultTemplate.bind({});
Multiple.args = {
  type: 'multiple',
  name: 'multi',
  removeItemButton: true,
  disabled: false,
  placeholder: true,
  placeholderValue: 'Placeholder',
  choices: 'Choice 1, Choice 2, Choice 3'

};






