import { newE2EPage } from '@stencil/core/testing';

describe('ifx-footer-column', () => {

  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-footer-column></ifx-footer-column>');

    const element = await page.find('ifx-footer-column');
    expect(element).toHaveClass('hydrated');
  });

  it('should display slots', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-footer-column><span slot="title">Test title</span><a slot="link" href="https://test.com">Test link</a></ifx-footer-column>');

    const titleSlot = await page.find('ifx-footer-column > span');
    const linkSlot = await page.find('ifx-footer-column > a');

    expect(titleSlot).toEqualText('Test title');
    expect(linkSlot).toEqualText('Test link');
  });

  it('should check if element exists', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-footer-column></ifx-footer-column>');

    const element = await page.find('ifx-footer-column');
    expect(element).toBeDefined();
  });


});
