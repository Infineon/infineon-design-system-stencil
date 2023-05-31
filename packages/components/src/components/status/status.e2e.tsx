import { newE2EPage } from '@stencil/core/testing';

describe('ifx-status', () => {
  let page, element;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<ifx-status></ifx-status>');
    element = await page.find('ifx-status');
  });

  it('renders', async () => {
    expect(element).toHaveClass('hydrated');
  });

  it('displays the text', async () => {
    element.setProperty('text', 'Test text');
    await page.waitForChanges();
    const textElement = await page.find('ifx-status >>> .text');
    expect(textElement.textContent).toBe('Test text');
  });

  it('applies the correct border and dot color classes', async () => {
    element.setProperty('border', true);
    element.setProperty('color', 'secondary');
    await page.waitForChanges();
    const container = await page.find('ifx-status >>> .container');
    const dot = await page.find('ifx-status >>> .dot');
    expect(container).toHaveClass('border-secondary');
    expect(dot).toHaveClass('secondary');
  });

  it('removes the border when border prop is set to false', async () => {
    element.setProperty('border', false);
    await page.waitForChanges();
    const container = await page.find('ifx-status >>> .container');
    expect(container).not.toHaveClass('border-primary');
  });
});
