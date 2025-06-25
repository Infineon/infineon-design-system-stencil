import { newE2EPage } from '@stencil/core/testing';

describe('Indicator', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-indicator variant="number" number="5" />');

    const indicator = await page.find('ifx-indicator');
    expect(indicator).toHaveClass('hydrated');

    const container = await page.find('ifx-indicator >>> .number__container');
    expect(container).toHaveClass('number__container');

    const span = await page.find('ifx-indicator >>> .number__container > number__wrapper');
    expect(await span.getProperty('textContent')).toBe('');
  });

  it('should apply inverted class', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-indicator variant="number" number="5" inverted />');

    const container = await page.find('ifx-indicator >>> .number__container');
    expect(container).toHaveClass('inverted');
  });
});
