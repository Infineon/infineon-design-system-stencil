
export default {
  title: 'Components/Choices',
  tags: ['autodocs'],

  decorators: [(Story, context) => {
    const story = Story();
    const el = document.createElement('div');
    el.innerHTML = story;

    setTimeout(() => {
      const component = el.querySelector('ifx-choices');

      console.log("choices ", context.args.choices)
      const choicesStr = context.args.choices;
      if (typeof choicesStr === 'string') {
        const choices = choicesStr.split(',').map((choice) => ({
          value: choice.trim(),
          label: choice.trim(),
        }));
        if (context.args.type === 'single' || context.args.type === 'multiple') {
          component.setChoices(choices, 'value', 'label', true);
        }
      } else {
        console.error("Invalid choices input:", choicesStr);
      }

      component.addEventListener('change', (event: CustomEvent) => {
        context.args.onChange(event);
      });
    }, 0);


    return el;
  }],
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

const Template = (args) => {
  return (
    `<ifx-choices
      type="${args.type}"
      value="${args.value}"
      name="${args.name}"
      remove-item-button="${args.removeItemButton}"
      search-enabled="${args.searchEnabled}"
      search-placeholder-value="${args.searchPlaceholderValue}"
      choices="${args.choices}">
     </ifx-choices>`
  );
};

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  value: 'Placeholder',
  name: 'text',
  choices: 'Choice 1, Choice 2, Choice 3',

};


export const Single = Template.bind({});
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

export const SingleWithIcon = Template.bind({});
SingleWithIcon.args = {
  type: 'single',
  value: 'Placeholder',
  name: 'single',
  searchPlaceholderValue: 'Search...',
  searchEnabled: true,
  disabled: false,
  choices: "Choice 1, Choice 2 <ifx-icon icon='check16'></ifx-icon>, Choice 3 <ifx-icon icon='check16'></ifx-icon>",

};


export const Multiple = Template.bind({});
Multiple.args = {
  type: 'multiple',
  value: 'Placeholder',
  name: 'multi',
  removeItemButton: true,
  disabled: false,
  choices: 'Choice 1, Choice 2, Choice 3'

};






