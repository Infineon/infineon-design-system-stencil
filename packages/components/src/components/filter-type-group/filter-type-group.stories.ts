import { action } from '@storybook/addon-actions';


// filter-type-group.stories.js
export default {
  title: 'Components/Filter Type Group',
  tags: ['autodocs'],
};

// An array of filters for demonstration purposes.
// Replace this with your actual data.
const filters = [
  { filterName: 'Filter 1', filterValue: true },
  { filterName: 'Filter 2', filterValue: false },
  { filterName: 'Filter 3', filterValue: true },
  { filterName: 'Filter 4', filterValue: false },
  { filterName: 'Filter 5', filterValue: false },
  { filterName: 'Filter 6', filterValue: false },
  { filterName: 'Filter 7', filterValue: false },
  { filterName: 'Filter 8', filterValue: false },

  // Add as many filters as needed
];

// A function that generates the HTML for all the ifx-filter-entry components
const generateFilterEntries = () => {
  return filters.map(filter => `
    <ifx-filter-entry filter-name="${filter.filterName}" filter-value="${filter.filterValue ? 'true' : 'false'}"></ifx-filter-entry>
  `).join('');
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `<ifx-filter-type-group>
  <div slot="filter-search">
  <ifx-filter-search filter-name="Your filter name"></ifx-filter-search>
   </div>
  <div slot="filter-accordion">
    <ifx-filter-accordion filter-group-name="Filter group 1">
      ${generateFilterEntries()}
    </ifx-filter-accordion>
    <ifx-filter-accordion filter-group-name="Filter group 2">
      ${generateFilterEntries()}
    </ifx-filter-accordion>
  </div>
</ifx-filter-type-group>
`;
  const element = wrapper.querySelector('ifx-filter-type-group') as HTMLElement;
  element.addEventListener('ifxFilterEntryChange', action('ifxFilterEntryChange'));
  element.addEventListener('ifxFilterSearchChange', action('ifxFilterSearchChange'));

  return wrapper;
}



