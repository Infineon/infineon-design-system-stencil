import { newE2EPage } from '@stencil/core/testing';

describe('minimal-component-wrapper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<minimal-component-wrapper></minimal-component-wrapper>');

    const element = await page.find('minimal-component-wrapper');
    expect(element).toHaveClass('hydrated');
  });
});
