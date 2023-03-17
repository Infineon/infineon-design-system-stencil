import { newE2EPage } from '@stencil/core/testing';

describe('ifx-tag', () => {
  it('renders with default values', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-tag></ifx-tag>');

    const container = await page.find('.container');
    const dot = await page.find('.dot');
    const text = await page.find('.text');

    expect(container).toHaveClass('border');
    expect(dot).toBeTruthy();
    expect(text).not.toHaveText();

    await page.waitForChanges();
  });

  it('renders with custom text', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-tag text="Hello"></ifx-tag>');

    const text = await page.find('.text');

    expect(text).toHaveText('Hello');

    await page.waitForChanges();
  });

  it('renders without border', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-tag border="false"></ifx-tag>');

    const container = await page.find('.container');

    expect(container).not.toHaveClass('border');

    await page.waitForChanges();
  });

  it('renders with secondary color', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-tag color="secondary"></ifx-tag>');

    const container = await page.find('.container');

    expect(container).toHaveClass('secondary');

    await page.waitForChanges();
  });
});