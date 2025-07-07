import { newE2EPage } from '@stencil/core/testing';

describe('ifx-pagination', () => {
  it('should render', async () => {
    const page = await newE2EPage({ timeout: 30000 });
await page.setContent(`
  <ifx-pagination items-per-page='[{"label":"10","value":10},{"label":"20","value":20}]'></ifx-pagination>
`);
    const element = await page.find('ifx-pagination');
    expect(element).toHaveClass('hydrated');
  });

  it('should display the correct number of page numbers', async () => {
    const page = await newE2EPage({ timeout: 30000 });
await page.setContent(`
  <ifx-pagination items-per-page='[{"label":"10","value":10},{"label":"20","value":20}]'></ifx-pagination>
`);
  });

  it('should change the page on click', async () => {
    const page = await newE2EPage({ timeout: 30000 });
await page.setContent(`
  <ifx-pagination items-per-page='[{"label":"10","value":10},{"label":"20","value":20}]'></ifx-pagination>
`);    await page.waitForChanges();
  });

  it('should emit the ifxPageChange event on page change', async () => {
    const page = await newE2EPage({ timeout: 30000 });
await page.setContent(`
  <ifx-pagination items-per-page='[{"label":"10","value":10},{"label":"20","value":20}]'></ifx-pagination>
`);
    const element = await page.find('ifx-pagination');
 
    const pageChangeSpy = await element.spyOnEvent('ifxPageChange');

    await page.waitForChanges();

    expect(pageChangeSpy).toHaveReceivedEventTimes(0);
  });

  // Add more test cases as needed
});
