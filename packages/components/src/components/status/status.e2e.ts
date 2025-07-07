import { newE2EPage } from '@stencil/core/testing';

describe('ifx-status', () => {
  it('renders with default props', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-status></ifx-status>');
    await page.waitForChanges();

    const container = await page.find('ifx-status');
    const dotElement = await page.find('ifx-status >>> .dot');
    const textElement = await page.find('ifx-status >>> .text');
    const borderClass = await container.getProperty('className');

    expect(dotElement).not.toBeNull();
    expect(textElement).not.toBeNull();
    expect(borderClass).not.toContain('border-');
  });

  it('renders with custom label', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-status label="Custom Label"></ifx-status>');
    await page.waitForChanges();

    const textElement = await page.find('ifx-status >>> .text');
    const labelText = await textElement.getProperty('textContent');

    expect(labelText).toBe('Custom Label');
  });

  it('renders with border when border prop is true', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-status border=true></ifx-status>');
    await page.waitForChanges();

    const wrapper = await page.find('ifx-status >>> .container');


    const borderClass = await wrapper.getProperty('className');


    expect(borderClass).toContain('border-');
  });


  it('renders with custom color', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-status color="green"></ifx-status>');
    await page.waitForChanges();

    const dotElement = await page.find('ifx-status >>> .dot');
    const dotClass = await dotElement.getProperty('className');

    expect(dotClass).toContain('green');
  });
});
