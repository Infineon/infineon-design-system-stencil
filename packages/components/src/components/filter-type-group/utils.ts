// utils.ts
export function getInitiallySelectedItems(el: HTMLElement) {
   return Array.from(el.querySelectorAll('ifx-list-entry'))

    .filter(entry => entry.getAttribute('value') === 'true')
    .map(entry => {
      return {
        label: entry.getAttribute('label'),
        value: entry.getAttribute('value'),
        type: entry.getAttribute('type')
      };
    });
}