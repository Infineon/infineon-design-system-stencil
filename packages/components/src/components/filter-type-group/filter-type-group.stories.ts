import { action } from '@storybook/addon-actions';


// filter-type-group.stories.js
export default {
  title: 'Components/Filter Type Group',
  tags: ['autodocs'],
};

// An array of filters for demonstration purposes.
// Replace this with your actual data.
const filters = [
  { filterName: 'Filter 1', value: true },
  { filterName: 'Filter 2', value: false },
  { filterName: 'Filter 3', value: true },
  { filterName: 'Filter 4', value: false },
  { filterName: 'Filter 5', value: false },
  { filterName: 'Filter 6', value: false },
  { filterName: 'Filter 7', value: false },
  { filterName: 'Filter 8', value: false },

  // Add as many filters as needed
];

// A function that generates the HTML for all the ifx-list-entry components
const generateFilterEntries = () => {
  return filters.map((filter, index) => `
    <ifx-list-entry slot="slot${index}" type="checkbox" label="${filter.filterName}" value="${filter.value ? 'true' : 'false'}"></ifx-list-entry>
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
  <ifx-list slot="list" list-name="Filter group 1" max-visible-items="6">
    ${generateFilterEntries()}
  </ifx-list>
</ifx-filter-accordion>
<ifx-filter-accordion filter-group-name="Filter group 2">
<ifx-list slot="list" list-name="Filter group 2" max-visible-items="6">
${generateFilterEntries()}
</ifx-list>
</ifx-filter-accordion>
  </div>
</ifx-filter-type-group>
`;
  const element = wrapper.querySelector('ifx-filter-type-group') as HTMLElement;

  element.addEventListener('ifxFilterTypeGroupChange', action('ifxFilterTypeGroupChange'));

  return wrapper;
}



