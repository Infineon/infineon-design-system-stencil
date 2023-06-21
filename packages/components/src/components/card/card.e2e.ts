import { newE2EPage } from '@stencil/core/testing';

describe('ifx-card', () => {

  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-card></ifx-card>');

    const element = await page.find('ifx-card');
    expect(element).toHaveClass('hydrated');
  });

  it('should set correct direction', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-card direction="horizontal"></ifx-card>');

    const element = await page.find('ifx-card');
    const direction = await element.getProperty('direction');

    expect(direction).toBe('horizontal');
  });

  it('should set correct alignment', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-card alignment="center"></ifx-card>');

    const element = await page.find('ifx-card');
    const alignment = await element.getProperty('alignment');

    expect(alignment).toBe('center');
  });

});
