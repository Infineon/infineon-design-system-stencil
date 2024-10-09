import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Chip',
  tags: ['autodocs'],
  parameters: {
    docs: {
      story: {
        height: '100px',
      },
    },
  },
  args: {
    amountOfChipItems: 4,
    chipItemLabel: 'Item Label',
    placeholder: 'Label',
    size: 'large',
    variant: 'single',
    readOnly: false,
    selected: false,
    value: 'Item Value'
  },
  argTypes: {
    amountOfChipItems: {
      name: 'Amount of Chip Items',
      control: 'number',
      description: 'Control the number of *<ifx-chip-item>* in a Chip.',
      table: {
        category: 'story controls',
        type: {
          summary: null
        }
      }
    },
    chipItemLabel: {
      name: 'Label of Chip Item',
      description: 'Set the label of *<ifx-chip-item>*.',
      table: {
        category: 'story controls',
        type: {
          summary: '<ifx-chip-item> `label` </ifx-chip-item>'
        }
      }
    },
    placeholder: {
      description: 'Set the placeholder string.',
      table: {
        category: 'ifx-chip props'
      }
    },
    size: {
      description: 'Switch the size of Chip.',
      control: 'radio',
      options: ['large', 'small'],
      table: {
        category: 'ifx-chip props',
        defaultValue: {
          summary: 'large'
        },
        type: {
          summary: 'large | small'
        }
      }
    },
    variant: {
      description: 'Switch the variant of Chip.',
      control: 'radio',
      options: ['single', 'multi'],
      table: {
        category: 'ifx-chip props',
        defaultValue: {
          summary: 'single'
        },
        type: {
          summary: 'single | multi'
        }
      }
    },
    readOnly: {
      name: 'read-only',
      description: 'No dropdown menu. The chip component is read-only.',
      control: 'boolean',
      table: {
        category: 'ifx-chip props',
        defaultValue: {
          summary: false,
        }
      }
    },
    selected: {
      description: 'Set the *selected* prop to pre-select the chip item.',
      table: {
        category: 'ifx-chip-item props',
        defaultValue: {
          summary: 'false'
        }
      }
    },
    value: {
      description: 'Set the value of chip item.',
      table: {
        category: 'ifx-chip-item props',
      }
    },
    ifxChipChange: {
      action: 'ifxChipChange',
      description: `A custom event emitted when the selection in a *<ifx-chip>* is updated.\n
      event.detail: 
      {
        currentSelection: Array<Option>,
        previousSelection: Array<Option>
      }

      Option:
      {
        key: number,
        label: string,
        selected: boolean,
        value: string
      }
      `,
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail: `
React: onIfxChipChange={handleChange}
Vue: @ifxChipChange="handleChange"
Angular: (ifxChipChange)="handleChange()"
VanillaJs: .addEventListener("ifxChipChange", (event) => {/*handle change*/});`,
        }
      }
    }
  }
};

const Template = (args) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
<ifx-chip
placeholder="${args.placeholder}"
size="${args.size}"
variant="${args.variant}"
read-only="${args.readOnly}"
>
  ${
    (() => {
      return Array.from({ length: args.amountOfChipItems }, (_, chipItemId) => {
        const chipItem: HTMLIfxChipItemElement = document.createElement('ifx-chip-item');
        chipItem.innerHTML = args.chipItemLabel + ' ' + (chipItemId + 1);
        chipItem.setAttribute('value', args.value + ' ' + (chipItemId + 1));
        if (args.readOnly) {
          if (args.variant === 'multi') {
            chipItem.setAttribute('selected', 'true');
          } else if (chipItemId === 0) {
            chipItem.setAttribute('selected', 'true');
          }
        }
        return chipItem.outerHTML;
      }).join(`\n    `);
    })()
  }
</ifx-chip>`;

  const chip = wrapper.querySelector('ifx-chip');
  chip.addEventListener('ifxChipChange', action('ifxChipChange'));

  return chip;
};

export const Default = Template.bind({});
Default.tags = ['!dev', '!autodocs'];

export const Single = Template.bind({});
Single.args = {
  variant: 'single'
};
Single.argTypes = {
  variant: {
    table: {
      disable: true
    }
  }
};

export const Multi = Template.bind({});
Multi.args = {
  variant: 'multi'
};
Multi.argTypes = {
  variant: {
    table: {
      disable: true
    }
  }
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  readOnly: true,
  variant: 'multi'
};
ReadOnly.argTypes = {
  readOnly: {
    table: {
      disable: true
    }
  }
};
