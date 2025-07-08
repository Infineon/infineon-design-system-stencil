import { newE2EPage } from '@stencil/core/testing';

describe('ifx-search-bar', () => {
  let page;
  let element;

  beforeEach(async () => {
    page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-search-bar></ifx-search-bar>');
    element = await page.find('ifx-search-bar');
  });

  it('should be rendered', async () => {
    expect(element).toHaveClass('hydrated');
  });

  it('should reflect the isOpen prop in the rendered output', async () => {
    element.setProperty('isOpen', false);
    await page.waitForChanges();
    let searchBarWrapper = await page.find('ifx-search-bar >>> .search-bar-wrapper');
    expect(searchBarWrapper).toBeNull(); // When isOpen is false, search-bar-wrapper should not be visible

    const iconWrapper = await page.find('ifx-search-bar >>> .search-bar__icon-wrapper');
    await iconWrapper.click(); // Click to open the search bar
    await page.waitForChanges();
    searchBarWrapper = await page.find('ifx-search-bar >>> .search-bar-wrapper');
    expect(searchBarWrapper).not.toBeNull(); // After clicking iconWrapper, search-bar-wrapper should be visible
  });

  // Other tests remain the same...
});
