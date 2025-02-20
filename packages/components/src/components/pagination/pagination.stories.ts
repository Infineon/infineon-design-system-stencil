import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Pagination',
  // tags: ['autodocs'],

  args: {
    total: 50,
    currentPage: 1,
    itemsPerPage: '[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]'
  },
  argTypes: {
    currentPage: {
      description: 'Current page number.',
      table: {
        category: 'Ifx-pagination props',
        defaultValue: {
          'summary': '0'
        },
        type: {
          summary: 'number',
        },
      },
    },

    total: {
      description: 'Total number of items.',
      table: {
        category: 'Ifx-pagination props',
        defaultValue: {
          'summary': '1'
        },
        type: {
          summary: 'number',
        },
      },
    },
    itemsPerPage: {
      description: 'Stringified array of objects setting up the items per page. *Value* and *selected* are required.',
      table: {
        category: 'Ifx-pagination props',
        type: {
          summary: 'string',
        },
      },
    },

    ifxPageChange: {
      action: 'ifxPageChange',
      description: 'Custom event emitted when page is changed.',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail:
            'React: onIfxPageChange={handlePageChange}\nVue:@ifxPageChange="handlePageChange"\nAngular:(ifxPageChange)="handlePageChange()"\nVanillaJs:.addEventListener("ifxPageChange", (event) => {//handle page change});',
        },
      },
    },
  },
};


const DefaultTemplate = args => {
  const element = `<ifx-pagination total="${args.total}" current-page="${args.currentPage}" items-per-page='${args.itemsPerPage}'></ifx-pagination>`
  setTimeout(() => {
    document.querySelector('ifx-pagination')?.addEventListener('ifxPageChange', action('ifxPageChange'));
  }, 0);
  return element;
};

export const Default = DefaultTemplate.bind({});
Default.argTypes = {};
