import { newE2EPage } from '@stencil/core/testing';

describe('Link', () => {
  it('should render', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-link href="https://example.com">Example Link</ifx-link>');

    const linkElement = await page.find('ifx-link');
    const anchorElement = await page.find('ifx-link >>> a');

    expect(linkElement).toHaveClass('hydrated');
    expect(anchorElement).toHaveClass('link');
    expect(anchorElement.getAttribute('href')).toBe('https://example.com');
    expect(anchorElement.getAttribute('target')).toBe('_self');
  });

  it('should have additional class names based on props', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-link href="https://example.com" color="primary" bold="false" underline="false">Example Link</ifx-link>');

    const linkElement = await page.find('ifx-link');
    const anchorElement = await page.find('ifx-link >>> a');

    expect(linkElement).toHaveClass('hydrated');
    expect(anchorElement).toHaveClass('primary');
    expect(anchorElement).not.toHaveClass('underline');
  });
});
