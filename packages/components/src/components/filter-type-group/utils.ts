// utils.ts
export function getInitiallySelectedItems(el: HTMLElement) {
  return Array.from(el.querySelectorAll('ifx-filter-entry'))
    .filter(entry => entry.getAttribute('value') === 'true')
    .map(entry => ({
      filterName: entry.getAttribute('filter-name'),
      value: entry.getAttribute('value')
    }));
}