import { newE2EPage } from '@stencil/core/testing';

describe('ifx-toggle', () => {
  it('should render the component', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-toggle></ifx-toggle>');

    const element = await page.find('ifx-toggle');
    expect(element).toHaveClass('hydrated');
  });

  it('should toggle checked state on click', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-toggle></ifx-toggle>');

    const toggle = await page.find('ifx-toggle >>> .pill-container');
    await toggle.click();

    const hasCheckedClass = await page.evaluate(() => {
      const pillContainer = document.querySelector('ifx-toggle').shadowRoot.querySelector('.pill-container');
      return pillContainer.classList.contains('checked');
    });
    expect(hasCheckedClass).toBeTruthy();
  });

  it('should emit valueChanged event', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-toggle></ifx-toggle>');

    const valueChanged = await page.spyOnEvent('valueChanged');
    const toggle = await page.find('ifx-toggle >>> .pill-container');
    await toggle.click();

    expect(valueChanged).toHaveReceivedEventTimes(1);
    expect(valueChanged).toHaveReceivedEventDetail(true);
  });
});
