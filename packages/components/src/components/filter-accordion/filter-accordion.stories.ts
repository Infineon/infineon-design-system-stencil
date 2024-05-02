// filter-accordion.stories.js
export default {
  title: 'Components/Filter Accordion',
  tags: ['autodocs'],
};

// An array of filters for demonstration purposes.
// Replace this with your actual data.
const filters = [
  { name: 'Filter 1', value: true },
  { name: 'Filter 2', value: false },
  { name: 'Filter 3', value: true },
  // Add as many filters as needed
];

// A function that generates the HTML for all the ifx-filter-entry components
const generateFilterEntries = () => {
  return filters.map(filter => `
    <ifx-filter-entry name="${filter.name}" value="${filter.value ? 'true' : 'false'}"></ifx-filter-entry>
  `).join('');
};

export const Default = () => `
  <ifx-filter-accordion>
    ${generateFilterEntries()}
  </ifx-filter-accordion>
`;