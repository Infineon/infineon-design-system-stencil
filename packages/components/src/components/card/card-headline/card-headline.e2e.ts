import { newE2EPage } from '@stencil/core/testing';

describe('ifx-card-headline', () => {

  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-card-headline></ifx-card-headline>');

    const element = await page.find('ifx-card-headline');
    expect(element).toHaveClass('hydrated');
  });

  it('should display slotted content', async () => {
    const page = await newE2EPage();

    await page.setContent('<ifx-card-headline>Test content</ifx-card-headline>');

    const headlineContent = await page.evaluate(() => {
      const headline = document.querySelector('ifx-card-headline');
      const slot = headline.shadowRoot.querySelector('slot');
      const nodes = slot.assignedNodes();
      return nodes[0].textContent;
    }).catch(e => console.error(e));

    expect(headlineContent).toBe('Test content');
  });

});
