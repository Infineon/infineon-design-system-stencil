import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Filter Type Group',
  // tags: ['autodocs'],
};

// An array of filters for demonstration purposes.
// Replace this with your actual data.
const filters = [
  { filterName: 'Filter 1', value: true },
  { filterName: 'Filter 2', value: false },
  { filterName: 'Filter 3', value: false },
  { filterName: 'Filter 4', value: false },
  { filterName: 'Filter 5', value: true },
  { filterName: 'Filter 6', value: false },
  { filterName: 'Filter 7', value: false },
  { filterName: 'Filter 8', value: false },

  // Add as many filters as needed
];

// A function that generates the HTML for all the ifx-list-entry components
const generateFilterEntries = () => {
  return filters.map((filter, index) => {
    // For the first element, prepend a newline character.
    if (index === 0) {
      return `\n          <ifx-list-entry slot="slot${index}" label="${filter.filterName}" value="${filter.value ? 'true' : 'false'}"></ifx-list-entry>`;
    } else {
      // For subsequent elements, return them without the newline.
      return `
          <ifx-list-entry slot="slot${index}" label="${filter.filterName}" value="${filter.value ? 'true' : 'false'}"></ifx-list-entry>`;
    }
  }).join('');
};


export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
  <ifx-filter-type-group>
    <div slot="filter-search">
      <ifx-filter-search filter-orientation="sidebar" filter-name="Your filter name"></ifx-filter-search>
    </div>
    <div slot="filter-accordion">
      <ifx-filter-accordion filter-group-name="Filter group 1">
        <ifx-list slot="list" type="checkbox" name="Filter group 1" max-visible-items="10">${generateFilterEntries()}
        </ifx-list>
      </ifx-filter-accordion>
      <ifx-filter-accordion filter-group-name="Filter group 2">
        <ifx-list slot="list" type="radio-button" name="Filter group 2" max-visible-items="6">${generateFilterEntries()}
        </ifx-list>
      </ifx-filter-accordion>
    </div>
  </ifx-filter-type-group>
`;
  const element = wrapper.querySelector('ifx-filter-type-group') as HTMLElement;

  element.addEventListener('ifxSidebarFilterChange', action('ifxSidebarFilterChange'));

  return wrapper;
}
