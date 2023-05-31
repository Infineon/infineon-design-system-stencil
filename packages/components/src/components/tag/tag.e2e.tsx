import { newE2EPage } from '@stencil/core/testing';

describe('ifx-tag component', () => {
  it('renders the component with the correct text', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-tag text="Hello World"></ifx-tag>');
    const textElement = await page.find('ifx-tag >>> .text');
    expect(textElement.textContent).toEqual('Hello World');
  });

  it('handles click events', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-tag text="Click me"></ifx-tag>');
    const element = await page.find('ifx-tag');
    const clickEvent = await element.spyOnEvent('click');
    await element.click();
    expect(clickEvent).toHaveReceivedEvent();
  });
});