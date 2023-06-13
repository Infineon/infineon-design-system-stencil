import { newE2EPage } from '@stencil/core/testing';

describe('ifx-footer', () => {
  it('should render component with default props', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-footer></ifx-footer>');

    const element = await page.find('ifx-footer');
    expect(element).toHaveClass('hydrated');

    const variant = await element.getProperty('variant');
    expect(variant).toBe('default');

    const large = await element.getProperty('large');
    expect(large).toBe(false);

    const defaultProp = await element.getProperty('default');
    expect(defaultProp).toBe(false);

    const showFacebook = await element.getProperty('showFacebook');
    expect(showFacebook).toBe(true);
  });

  it('should render large variant correctly', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-footer variant="large"></ifx-footer>');

    const element = await page.find('ifx-footer');
    const variant = await element.getProperty('variant');
    expect(variant).toBe('large');

    const large = await element.getProperty('large');
    expect(large).toBe(true);

    const defaultProp = await element.getProperty('default');
    expect(defaultProp).toBe(true);
  });

  it('should handle slot change correctly', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-footer><span slot="facebook"></span></ifx-footer>');

    const element = await page.find('ifx-footer');
    element.callMethod('handleSlotChange', 'facebook');
    await page.waitForChanges();

    const showFacebook = await element.getProperty('showFacebook');
    expect(showFacebook).toBe(true);
  });

});
