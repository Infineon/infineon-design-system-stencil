import { newE2EPage } from '@stencil/core/testing';

describe('ifx-range', () => {
  it('should render the component', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-range></ifx-range>');

    const element = await page.find('ifx-range');
    expect(element).toHaveClass('hydrated');
  });

  it('should set --value-percent correctly', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-range min="0" max="100" value="50"></ifx-range>');
  
    const input = await page.find('ifx-range >>> input');
    await input.focus();
    await page.keyboard.press('ArrowRight');
  
    const valuePercent = await page.evaluate(() => {
      const ifxRange = document.querySelector('ifx-range');
      const inputEl = ifxRange.shadowRoot.querySelector('input') as HTMLInputElement;
      return inputEl.style.getPropertyValue('--value-percent').trim();
    });
  
    expect(valuePercent).toBe('51%');
  });
  

  it('should emit valueChanged event', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-range></ifx-range>');

    const valueChanged = await page.spyOnEvent('valueChanged');
    const input = await page.find('ifx-range >>> input');
    await input.focus();
    await page.keyboard.press('ArrowRight');

    expect(valueChanged).toHaveReceivedEventTimes(1);
    expect(valueChanged).toHaveReceivedEventDetail(1);
  });

  it('should not update value when disabled', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-range disabled="true"></ifx-range>');

    const input = await page.find('ifx-range >>> input');
    await input.focus();
    await page.keyboard.press('ArrowRight');

    expect(await input.getProperty('value')).toBe('0');
  });
});
