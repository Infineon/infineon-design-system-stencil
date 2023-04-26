import { newE2EPage } from '@stencil/core/testing';

describe('ifx-search-bar', () => {
  it('emits search event on input', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-search-bar></ifx-search-bar>');


    const shadowRoot = await page.evaluateHandle(() => document.querySelector('ifx-search-bar').shadowRoot);

    const input = await shadowRoot.$('ifx-search-input >>> .search-input__wrapper input[type="text"]');
    await input.type('query');

    const event = await page.waitForEvent('search');
    expect(event).not.toBeNull();
  });
});
