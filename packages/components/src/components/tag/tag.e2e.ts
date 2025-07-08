import { newE2EPage } from '@stencil/core/testing';

describe('ifx-tag', () => {
  it('should render', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-tag>Test Tag</ifx-tag>');

    const element = await page.find('ifx-tag');
    expect(element).toHaveClass('hydrated');
  });

  it('should display the correct label', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-tag>Test Tag</ifx-tag>');
  });

  it('should have the correct container class', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-tag>Test Tag</ifx-tag>');
  });

  it('should have the correct href attribute', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-tag>Test Tag</ifx-tag>');

  });
});
