
import { action } from '@storybook/addon-actions';


export default {
  title: 'Components/Filter Search',
  tags: ['autodocs'],
  args: {
    filterName: 'Filter',
  },
  argTypes: {
    filterName: {
      description: 'The name of the filter',
      control: { type: 'text' },
    },
  },
};

const DefaultTemplate = ({ filterName }) => {
  const element = document.createElement('ifx-filter-search');
  element.setAttribute('filter-name', filterName);
  element.addEventListener('ifxInput', action('ifxInput'));


  return element;
};

export const Default = DefaultTemplate.bind({});
