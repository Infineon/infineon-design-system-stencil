import { action } from '@storybook/addon-actions';

export default {
  title: "Components/Pagination",
  // tags: ['autodocs'],

  args: {
    total: 50,
    currentPage: 1
  },
  argTypes: {
    onIfxPageChange: {
      action: 'ifxPageChange',
      description: 'Custom event',
      table: {
        type: {
          summary: 'Framework integration',
          detail: 'React: onIfxPageChange={handlePageChange}\nVue:@ifxPageChange="handlePageChange"\nAngular:(ifxPageChange)="handlePageChange()"\nVanillaJs:.addEventListener("ifxPageChange", (event) => {//handle page change});',
        },
      },
    },
  }
};


const DefaultTemplate = (args) => {
  const element = document.createElement('ifx-pagination');
  element.setAttribute('total', args.total);
  element.setAttribute('current-page', args.currentPage);
  element.addEventListener('ifxPageChange', action('ifxPageChange'));
  return element;
}



export const Default = DefaultTemplate.bind({});
Default.argTypes = {

}


