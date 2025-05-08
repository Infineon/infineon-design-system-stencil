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
for (let i = 1; i <= 50; i++) {
  let children = undefined;
  if (i % 3 == 0) {
    children = [{
      "value": `${i}.1`,
      "label": `Option ${i}.1`,
      "selected": i % 2 == 0 ? true : false
    }, {
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
    name: 'multiselect',
    size: 'm',
    disabled: false,
    batchSize: 10,
    maxItemCount: 10,
    showSearch: true,
    showSelectAll: true,
    error: false,
    errorMessage: 'Some error',
    label: '',
    placeholder: 'Placeholder',
    showClearButton: true
  },
  argTypes: {
    size: {
      description: 'Size of the input field.',
      options: {
        'small (36px)': 's',
        'medium (40px)': 'm',
      },
      control: {
        type: 'radio',
      },
      table: {
        category: 'ifx-multiselect props',
        defaultValue: {
          summary: 'medium (40px)',
        },
        type: {
          summary: '36px | 40px',
        },
      },
    },
    disabled: {
      description: 'Disable the input field.',
      options: [true, false],
      control: { type: 'boolean' },
      table: {
        category: 'ifx-multiselect props',
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    name: {
      description: `For a <*form*> element, the name attribute is  used as a reference when the data is submitted.`,
      control: 'text',
      table: {
        category: 'ifx-multiselect props',
        type: {
          summary: 'string',
        },
      },
    },
    batchSize: {
      description: 'Batch size used during lazy loading options.',
      control: {
        type: 'number',
      },
      table: {
        category: 'ifx-multiselect props',
        defaultValue: {
          summary: '50',
        },
        type: {
          summary: 'number',
        },
      },
    },
    maxItemCount: {
      control: { type: 'number' },
      description: 'Number of maximum selectable items.',
      table: {
        category: 'ifx-multiselect props',
        type: {
          summary: 'number'
        }
      }
    },
    showSearch: {
      description: 'Show a search input.',
      options: [true, false],
      control: { type: 'radio' },
      table: {
        category: 'ifx-multiselect props',
        defaultValue: {
          summary: 'true',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    showSelectAll: {
      description: 'Show a checkbox to select all options.',
      options: [true, false],
      control: { type: 'radio' },
      table: {
        category: 'ifx-multiselect props',
        defaultValue: {
          summary: 'true',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    showClearButton: {
      description: 'Shows the clear icon button.',
      control: 'boolean',
      table: {
        category: 'ifx-multiselect props',
        defaultValue: {
          summary: true
        }
      }
    },
    error: {
      description: 'Show error state.',
      options: [true, false],
      control: { type: 'radio' },
      table: {
        category: 'ifx-multiselect props',
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display.',
      table: {
        category: 'ifx-multiselect props',
        defaultValue: {
          summary: 'Error',
        },
        type: {
          summary: 'string',
        },
      },
    },
    label: {
      description: 'Label over the input field.',
      control: 'text',
      table: {
        category: 'ifx-multiselect props',
        type: {
          summary: 'string',
        },
      },
    },
    placeholder: {
      description: 'Label inside the input field.',
      control: 'text',
      table: {
        category: 'ifx-multiselect props',
        type: {
          summary: 'string',
        },
      },
    },
    options: {
      description: 'Takes an array of objects in the following format.',
      table: {
        category: 'ifx-multiselect props',
        type: {
          summary: 'Details',
          detail: `'Array<{ value: string, label: string, selected: boolean, children?: Array<{ value: string, label: string, selected: boolean }> }>'`,
        },
      },
    },
    ifxSelect: {
      action: 'ifxSelect',
      description: 'Custom event emitted when item is selected or unselected.',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail:
            'React: onIfxSelect={handleInput}\nVue:@ifxSelect="handleInput"\nAngular:(ifxSelect)="handleInput()"\nVanillaJs:.addEventListener("ifxSelect", (event) => {//handle input});',
        },
      },
    },
    ifxOpen: {
      action: 'ifxOpen',
      description: 'Custom event emitted when multiselect is opened.',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail:
            'React: onIfxOpen={handleChange}\nVue:@ifxOpen="handleChange"\nAngular:(ifxOpen)="handleChange()"\nVanillaJs:.addEventListener("ifxOpen", (event) => {//handle change});',
        },
      },

    }
  },
};

const Template = args => {
  const template = `<ifx-multiselect 
  name='${args.name}'
  options='${JSON.stringify(args.options)}' 
  batch-size='${args.batchSize}'
  size='${args.size}'
  disabled='${args.disabled}'
  max-item-count='${args.maxItemCount}'
  error='${args.error}'
  error-message='${args.errorMessage}'
  label='${args.label}'
  placeholder='${args.placeholder}'
  show-search='${args.showSearch}'
  show-select-all='${args.showSelectAll}'
  show-clear-button='${args.showClearButton}'>
</ifx-multiselect>`;

  setTimeout(() => {
    document.querySelector('ifx-multiselect').addEventListener('ifxSelect', action('ifxSelect'));
    document.querySelector('ifx-multiselect').addEventListener('ifxOpen', action('ifxOpen'));
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
