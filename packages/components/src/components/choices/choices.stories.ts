
export default {
  title: 'Components/Choices',
  decorators: [(Story, context) => {
    const story = Story();
    const el = document.createElement('div');
    el.innerHTML = story;

    setTimeout(() => {
      const component = el.querySelector('ifx-choices');

      console.log("choices ", context.args.choices)
      const choices = context.args.choices?.split(',').map((choice) => ({
        value: choice.trim(),
        label: choice.trim(),
      }));
      if (context.args.type === 'single' || context.args.type === 'multiple') {
        component.setChoices(choices, 'value', 'label', true);
      }
      component.addEventListener('change', (event: CustomEvent) => {
        console.log('Change Event:', event.detail);
        context.args.onChange(event);
      });
    }, 0);


    return el;
  }],

  argTypes: {
    type: { control: { type: 'select', options: ['single', 'multiple', 'text'] } },
    value: { control: 'text' },
    name: { control: 'text' },
    removeItemButton: { control: { type: 'boolean' } },
    searchPlaceholderValue: { control: { type: 'text' } },
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
  searchPlaceholderValue: 'Search...',
  choices: 'Choice 1, Choice 2, Choice 3',

};

export const SingleWithIcon = Template.bind({});
SingleWithIcon.args = {
  type: 'single',
  value: 'Placeholder',
  name: 'single',
  searchPlaceholderValue: 'Search...',
  choices: "Choice 1, <ifx-icon icon='chevron-down-16'></ifx-icon> Choice 2, <ifx-icon icon='chevron-down-16'></ifx-icon> Choice 3",

};


export const Multiple = Template.bind({});
Multiple.args = {
  type: 'multiple',
  value: 'Placeholder',
  name: 'multi',
  removeItemButton: true,
  choices: 'Choice 1, Choice 2, Choice 3'

};






