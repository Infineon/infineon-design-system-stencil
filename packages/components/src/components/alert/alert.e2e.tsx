import { newE2EPage } from '@stencil/core/testing';

describe('alert component', () => {
  it('renders correctly', async () => {
    const page = await newE2EPage();
    await page.setContent(`<ifx-alert color="primary"></ifx-alert>`);

    const alertElement = await page.find('ifx-alert');
    expect(alertElement).not.toBeNull();
  });

  it('handles overflowing text', async () => {
    const page = await newE2EPage();
    await page.setContent(`<ifx-alert color="primary" overflowing="true">Some long text that overflows</ifx-alert>`);

    const alertText = await page.find('.alert-text');
    expect(await alertText.getProperty('classList')).toContain('text-overflow');
  });

  it('toggles icon visibility', async () => {
    const page = await newE2EPage();
    await page.setContent(`<ifx-alert color="primary" icon="info"></ifx-alert>`);

    const alertElement = await page.find('ifx-alert');
    const iconWrapper = await alertElement.find('.alert-icon-wrapper');
    await alertElement.callMethod('toggleIcon', iconWrapper);

    expect(await iconWrapper.getProperty('classList')).toContain('show');
  });
});
