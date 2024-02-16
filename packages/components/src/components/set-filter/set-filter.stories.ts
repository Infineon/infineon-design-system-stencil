
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Set filter',
  tags: ['autodocs'],

  args: {
    filterName: "ColumnA",
    filterLabel: "Column A filter",
    filterOptions: [{
      value: "a",
      label: "option a",
      selected: false
    },
    {
      value: "b",
      label: "option b",
      selected: false
    },
    {
      value: "z",
      label: "option z",
      selected: false,
    }],

    type: "text",
  },
  argTypes: {
    type: {
      description: "Filter type",
      options: ['text', 'single-select', 'multi-select', 'chips'],
      control: { type: 'radio' },
    },
  },
};


const Template = (args) => {
  const element = document.createElement('ifx-set-filter');
  element.setAttribute('filter-name', args.filterName);
  element.setAttribute('placeholder', args.filterName);
  element.setAttribute('options', JSON.stringify(args.filterOptions));
  element.setAttribute('type', args.type);
  element.addEventListener('onIfxFilterChange', action('ifxFilterChange'));

  return element;
};

export const Default = Template.bind({});


