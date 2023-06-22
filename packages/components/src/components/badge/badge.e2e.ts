import { newE2EPage } from '@stencil/core/testing';

describe('ifx-badge', () => {

  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-badge></ifx-badge>');

    const element = await page.find('ifx-badge');
    expect(element).toHaveClass('hydrated');
  });

  it('should display slotted content', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-badge>Test content</ifx-badge>');

    const badgeContent = await page.evaluate(() => {
      const badge = document.querySelector('ifx-badge');
      const slot = badge.shadowRoot.querySelector('slot');
      const nodes = slot.assignedNodes();
      return nodes[0].textContent;
    });

    expect(badgeContent).toBe('Test content');
  });

});
