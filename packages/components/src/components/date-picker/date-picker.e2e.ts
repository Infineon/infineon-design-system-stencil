import { newE2EPage } from '@stencil/core/testing';

describe('ifx-date-picker', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-date-picker></ifx-date-picker>');

    const element = await page.find('ifx-date-picker');
    expect(element).toHaveClass('hydrated');
  });

  it('should display the correct size', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-date-picker size="l"></ifx-date-picker>');
  
    const element = await page.find('ifx-date-picker >>> .input__wrapper');
    expect(element).toHaveClass('large');
  });

  it('should be disabled when the disabled prop is true', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-date-picker disabled="true"></ifx-date-picker>');
  
    const input = await page.find('ifx-date-picker >>> .date__picker-input');
    const disabled = await input.getProperty('disabled');
    expect(disabled).toBeTruthy();
  });

  it('should update the input value when a date is selected', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-date-picker></ifx-date-picker>');
  
    const date = new Date(2023, 0, 1);
    const dateString = date.toISOString().substring(0,10);
  
    await page.$eval('ifx-date-picker', (el: any, value: string) => {
      const input = el.shadowRoot.querySelector('.date__picker-input');
      input.value = value;
      input.dispatchEvent(new Event('change'));
    }, dateString);
    
    const inputValue = await page.$eval('ifx-date-picker >>> .date__picker-input', (el: any) => el.value);
    expect(inputValue).toBe(dateString);
  });
  
});
