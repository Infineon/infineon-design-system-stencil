import { newE2EPage } from '@stencil/core/testing';

describe('NumberIndicator', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-number-indicator>42</ifx-number-indicator>');

    const numberIndicator = await page.find('ifx-number-indicator');
    expect(numberIndicator).toHaveClass('hydrated');

    const container = await page.find('ifx-number-indicator >>> .numberIndicator__container');
    expect(container).toHaveClass('numberIndicator__container');

    const span = await page.find('ifx-number-indicator >>> .numberIndicator__container > span');
    expect(await span.getProperty('textContent')).toBe('');
  });

  it('should apply inverted class', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-number-indicator inverted>42</ifx-number-indicator>');

    const container = await page.find('ifx-number-indicator >>> .numberIndicator__container');
    expect(container).toHaveClass('inverted');
  });
});
