import { newE2EPage } from '@stencil/core/testing';

describe('ifx-alert', () => {

  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-alert></ifx-alert>');

    const element = await page.find('ifx-alert');
    expect(element).toHaveClass('hydrated');
  });

  it('should set the correct variant', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-alert variant="primary"></ifx-alert>');

    const element = await page.find('ifx-alert');
    const variant = await element.getProperty('variant');

    expect(variant).toBe('primary');
  });

  it('should set the correct icon', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-alert icon="cinfo24"></ifx-alert>');

    const element = await page.find('ifx-alert');
    const icon = await element.getProperty('icon');

    expect(icon).toBe('cinfo24');
  });

  it('should display the correct icon', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-alert icon="cinfo24"></ifx-alert>');

    const iconElement = await page.find('ifx-alert >>> .icon-wrapper > ifx-icon');
    const iconProp = await iconElement.getProperty('icon');

    expect(iconProp).toBe('cinfo24');
  });

});
