import { newE2EPage } from '@stencil/core/testing';

describe('ifx-checkbox', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-checkbox></ifx-checkbox>');

    const element = await page.find('ifx-checkbox');
    expect(element).toHaveClass('hydrated');
  });

  it('should display slotted content', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-checkbox>Test content</ifx-checkbox>');

    const labelContent = await page.evaluate(() => {
      const checkbox = document.querySelector('ifx-checkbox');
      const slot = checkbox.shadowRoot.querySelector('slot');
      const nodes = slot.assignedNodes();
      return nodes[0].textContent;
    });

    expect(labelContent).toBe('Test content');
  });

  it('should emit ifxChange event when clicked', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-checkbox></ifx-checkbox>');

    const checkbox = await page.find('ifx-checkbox');
    const ifxChange = await checkbox.spyOnEvent('ifxChange');

    const checkboxWrapper = await page.find('ifx-checkbox >>> .checkbox__wrapper');
    await checkboxWrapper.click();

    expect(ifxChange).toHaveReceivedEvent();
  });

});
