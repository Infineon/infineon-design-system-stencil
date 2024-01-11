import { newE2EPage } from '@stencil/core/testing';

describe('ifx-accordion-item', () => {
  let page;
  let element;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<ifx-accordion-item caption="Test"></ifx-accordion-item>');

    element = await page.find('ifx-accordion-item');
  });

  it('renders', async () => {
    expect(element).toHaveClass('hydrated');
  });

  it('displays the caption', async () => {
    const captionElement = await page.find('ifx-accordion-item >>> .accordion-caption');
    expect(captionElement.innerText).toEqual('Test');
  });

  it('expands and collapses on click', async () => {
    const titleElement = await page.find('ifx-accordion-item >>> .accordion-title');

    // Initially closed
    expect(await element.getProperty('open')).toBeFalsy();

    await titleElement.click();

    // Open after first click
    expect(await element.getProperty('open')).toBeTruthy();

    await titleElement.click();

    // Closed after second click
    expect(await element.getProperty('open')).toBeFalsy();
  });
});
