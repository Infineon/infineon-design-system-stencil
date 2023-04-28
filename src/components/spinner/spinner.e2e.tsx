import { newE2EPage } from '@stencil/core/testing';

describe('ifx-spinner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-spinner></ifx-spinner>');

    const element = await page.find('ifx-spinner');
    expect(element).toHaveClass('hydrated');
  });

  it('displays the correct size', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-spinner size="s"></ifx-spinner>');
    const element = await page.find('ifx-spinner >>> .spinner');
    await page.waitForChanges();
    expect(element).toHaveClass('s');
  });
});
