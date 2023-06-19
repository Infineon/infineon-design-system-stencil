import { newE2EPage } from '@stencil/core/testing';

describe('ifx-button', () => {

  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-button></ifx-button>');

    const element = await page.find('ifx-button');
    expect(element).toHaveClass('hydrated');
  });

  it('should display slotted content', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-button>Button Text</ifx-button>');

    const buttonText = await page.evaluate(() => {
      const button = document.querySelector('ifx-button');
      const slot = button.shadowRoot.querySelector('slot');
      const nodes = slot.assignedNodes();
      return nodes[0].textContent;
    });

    expect(buttonText).toBe('Button Text');
  });

  it('should set correct variant', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-button variant="outline"></ifx-button>');

    const element = await page.find('ifx-button');
    const variant = await element.getProperty('variant');

    expect(variant).toBe('outline');
  });

  it('should set correct color', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-button color="danger"></ifx-button>');

    const element = await page.find('ifx-button');
    const color = await element.getProperty('color');

    expect(color).toBe('danger');
  });

  it('should set correct size', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-button size="s"></ifx-button>');

    const element = await page.find('ifx-button');
    const size = await element.getProperty('size');

    expect(size).toBe('s');
  });

});
