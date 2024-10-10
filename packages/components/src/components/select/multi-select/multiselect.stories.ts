import { action } from '@storybook/addon-actions';

const options = [
  {
    value: 'a',
    label: 'Option a',
    selected: false,
  },
  {
    value: 'b',
    label: 'Option b',
    selected: false,
  },
  {
    value: 'c',
    label: 'Option c',
    selected: false,
    children: [
      {
        value: 'z1',
        label: 'Option c1',
        selected: false,
      },
      {
        value: 'z2',
        label: 'Option c2',
        selected: false,
      },
    ],
  },
];

const longOptions = [];
for (let i=1; i<=50; i++) {
  let children = undefined;
  if (i % 3 == 0) {
    children = [{
      "value":  `${i}.1`,
      "label": `Option ${i}.1`,
      "selected": i % 2 == 0 ? true : false
    },{
      "value": `${i}.2`,
      "label": `Option ${i}.2`,
      "selected": i % 4 == 0 ? true : false
    }];
  }
  longOptions.push({
    "value": i,
    "label": `Option ${i}`,
    "selected": i % 2 == 0 ? true : false,
    "children": children
  })
}


export default {
  title: 'Components/Select/Multi Select',
  // tags: ['autodocs'],
  args: {
    size: 'm',
    batchSize: 10,
    maxItemCount: 10,
    showSearch: true,
    showSelectAll: true,
    error: false,
    errorMessage: 'Some error',
    label: '',
    placeholder: 'Placeholder',
  },
  argTypes: {
    size: {
      options: {
        'small (36px)': 's',
        'medium (40px)': 'm',
      },
      control: {
        type: 'radio',
      },
    },
    batchSize: {
      description: 'Batch size used during lazy loading options',
      control: {
        type: 'number',
      },
    },
    maxItemCount: {
      control: { type: 'number' },
      description: 'Number of maximum selectable items',
    },
    showSearch: {
      options: [true, false],
      control: { type: 'radio' },
    },
    showSelectAll: {
      description: 'Show a checkbox to select all options',
      options: [true, false],
      control: { type: 'radio' },
    },
    error: {
      options: [true, false],
      control: { type: 'radio' },
    },
    errorMessage: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    options: {
      description: 'Takes an array of objects in the following format',
    },
    ifxSelect: {
      action: 'ifxSelect',
      description: 'Custom event emitted when item is selected or unselected',
      table: {
        type: {
          summary: 'Framework integration',
          detail:
            'React: onIfxSelect={handleInput}\nVue:@ifxSelect="handleInput"\nAngular:(ifxSelect)="handleInput()"\nVanillaJs:.addEventListener("ifxSelect", (event) => {//handle input});',
        },
      },
    },
  },
};

const Template = args => {
  const template = `<ifx-multiselect 
  options='${JSON.stringify(args.options)}' 
  batch-size='${args.batchSize}'
  size='${args.size}'
  max-item-count='${args.maxItemCount}'
  error='${args.error}'
  error-message='${args.errorMessage}'
  label='${args.label}'
  placeholder='${args.placeholder}'
  show-search='${args.showSearch}'
  show-select-all='${args.showSelectAll}'>
</ifx-multiselect>`;

  setTimeout(() => {
    document.querySelector('ifx-multiselect').addEventListener('ifxSelect', action('ifxSelect'));
  }, 0);

  return template;
};

export const Default = Template.bind({});
Default.args = {
  options: options,
};

export const WithLazyLoading = Template.bind({});
WithLazyLoading.args = {
  options: longOptions,
  batchSize: 5,
  maxItemCount: undefined
};
