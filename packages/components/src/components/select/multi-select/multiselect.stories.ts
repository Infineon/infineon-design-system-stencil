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
  const el = document.createElement('ifx-multiselect') as any;

  // Set boolean properties directly
  el.disabled = args.disabled;
  el.error = args.error;
  el.showSearch = args.showSearch;
  el.showSelectAll = args.showSelectAll;
  el.showClearButton = args.showClearButton;

  // Set string/number attributes
  el.setAttribute('name', args.name);
  el.setAttribute('size', args.size);
  el.setAttribute('batch-size', args.batchSize);
  if (args.maxItemCount !== undefined) el.setAttribute('max-item-count', args.maxItemCount);
  el.setAttribute('error-message', args.errorMessage);
  el.setAttribute('label', args.label);
  el.setAttribute('placeholder', args.placeholder);

  // Set options as a property (not attribute)
  el.options = args.options;

  // Add event listeners
  el.addEventListener('ifxSelect', action('ifxSelect'));
  el.addEventListener('ifxOpen', action('ifxOpen'));

  return el;
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
