import { newE2EPage } from '@stencil/core/testing';

describe('ifx-search-bar', () => {
  it('emits ifx-change event on input', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-search-bar></ifx-search-bar>');

    const searchBar = await page.find('ifx-search-bar');
    const input = await searchBar.find('ifx-search-input >>> .search-input__wrapper input[type="text"]');
    await input.type('query');

    const event = await page.waitForEvent('ifxChange');
    expect(event).not.toBeNull();
  });
});
