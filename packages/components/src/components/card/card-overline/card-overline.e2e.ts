import { newE2EPage } from '@stencil/core/testing';

describe('ifx-card-overline', () => {

  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-card-overline></ifx-card-overline>');

    const element = await page.find('ifx-card-overline');
    expect(element).toHaveClass('hydrated');
  });

  it('should display slotted content', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-card-overline>Card Overline</ifx-card-overline>');

    const cardOverlineText = await page.evaluate(() => {
      const cardOverline = document.querySelector('ifx-card-overline');
      const slot = cardOverline.shadowRoot.querySelector('slot');
      const nodes = slot.assignedNodes();
      return nodes[0].textContent;
    });

    expect(cardOverlineText).toBe('Card Overline');
  });
});
