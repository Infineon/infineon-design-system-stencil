import { newE2EPage } from '@stencil/core/testing';

describe('ifx-accordion', () => {
  let page;
  let element;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<ifx-accordion></ifx-accordion>');
    element = await page.find('ifx-accordion');
  });

  it('renders', async () => {
    expect(element).toHaveClass('hydrated');
  });

  it('autoCollapse prop works as expected', async () => {
    element.setProperty('autoCollapse', true);
    await page.waitForChanges();
    expect(await element.getProperty('autoCollapse')).toBe(true);
  });

});
