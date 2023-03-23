import { newE2EPage } from '@stencil/core/testing';

describe('spinner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<spinner></spinner>');

    const element = await page.find('spinner');
    await page.waitForChanges();
    expect(element).toHaveClass('hydrated');
  });

  it('displays the correct size', async () => {
    const page = await newE2EPage();
    await page.setContent('<spinner size="s"></spinner>');
    const element = await page.find('spinner >>> .spinner');
    await page.waitForChanges();
    expect(element).toHaveClass('s');
  });
});
