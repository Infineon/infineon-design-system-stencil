import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Pagination',
  // tags: ['autodocs'],

  args: {
    total: 50,
    currentPage: 1,
  },
  argTypes: {
    currentPage: {
      description: 'Current page number',
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
      description: 'Total number of items',
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

    ifxPageChange: {
      action: 'ifxPageChange',
      description: 'Custom event emitted page is changed',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail:
            'React: onIfxPageChange={handlePageChange}\nVue:@ifxPageChange="handlePageChange"\nAngular:(ifxPageChange)="handlePageChange()"\nVanillaJs:.addEventListener("ifxPageChange", (event) => {//handle page change});',
        },
      },
    },
    ifxNextPage: {
      action: 'ifxNextPage',
      description: 'Custom event emitted when next page button clicked',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail:
            'React: onIfxNextPage={handlePageChange}\nVue:@ifxNextPage="handlePageChange"\nAngular:(ifxNextPage)="handlePageChange()"\nVanillaJs:.addEventListener("ifxNextPage", (event) => {//handle page change});',
        },
      },
    },
    ifxPrevPage: {
      action: 'ifxPrevPage',
      description: 'Custom event emitted when previous page button clicked',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail:
            'React: onIfxPrevPage={handlePageChange}\nVue:@ifxPrevPage="handlePageChange"\nAngular:(ifxPrevPage)="handlePageChange()"\nVanillaJs:.addEventListener("ifxPrevPage", (event) => {//handle page change});',
        },
      },
    },
  },
};

const DefaultTemplate = args => {
  const element = document.createElement('ifx-pagination');
  element.setAttribute('total', args.total);
  element.setAttribute('current-page', args.currentPage);
  element.addEventListener('ifxPageChange', action('ifxPageChange'));
  return element;
};

export const Default = DefaultTemplate.bind({});
Default.argTypes = {};
