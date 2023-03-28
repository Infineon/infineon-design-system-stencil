import { newE2EPage } from '@stencil/core/testing';

describe('ifx-progress-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-progress-bar></ifx-progress-bar>');

    const element = await page.find('ifx-progress-bar');
    expect(element).toHaveClass('hydrated');
  });

  it('renders small progress bar', async () => {
    const page = await newE2EPage();

    await page.setContent('<ifx-progress-bar size="s"></ifx-progress-bar>');
    const element = await page.find('ifx-progress-bar >>> .progress-bar');
    await page.waitForChanges();
    expect(element).toHaveClass('s');

  });
});
