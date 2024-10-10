import { newE2EPage } from '@stencil/core/testing';

describe('ifx-filter-search', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-filter-search></ifx-filter-search>');

    const element = await page.find('ifx-filter-search');
    expect(element).toHaveClass('hydrated');
  });


});