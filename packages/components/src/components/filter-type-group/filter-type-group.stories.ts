// filter-type-group.stories.js
export default {
  title: 'Components/Filter Type Group',
  tags: ['autodocs'],
};

// An array of filters for demonstration purposes.
// Replace this with your actual data.
const filters = [
  { name: 'Filter 1', value: true },
  { name: 'Filter 2', value: false },
  { name: 'Filter 3', value: true },
  { name: 'Filter 4', value: false },
  { name: 'Filter 5', value: false },
  { name: 'Filter 6', value: false },
  { name: 'Filter 7', value: false },
  { name: 'Filter 8', value: false },

  // Add as many filters as needed
];

// A function that generates the HTML for all the ifx-filter-entry components
const generateFilterEntries = () => {
  return filters.map(filter => `
    <ifx-filter-entry name="${filter.name}" value="${filter.value ? 'true' : 'false'}"></ifx-filter-entry>
  `).join('');
};

export const Default = () => `
  <ifx-filter-type-group>
    <div slot="filter-search">
    <ifx-filter-search filter-name="Your filter name"></ifx-filter-search>
     </div>
    <div slot="filter-accordion">
      <ifx-filter-accordion>
        ${generateFilterEntries()}
      </ifx-filter-accordion>
      <ifx-filter-accordion>
        ${generateFilterEntries()}
      </ifx-filter-accordion>
    </div>
  </ifx-filter-type-group>
`;