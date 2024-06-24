import { E2EPage } from '@stencil/core/testing';
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
  
  
  it('should not be in FormData when form is submitted', async () => {
    const page = await newE2EPage();
    await page.setContent(`<form id="testForm" onSubmit="handleSubmit(event)">
      <ifx-date-picker name="date"></ifx-date-picker>
      <button id="submit" type="submit">Submit</button>
    </form>`);
    await addHandleSubmitScript(page);

    const value = await submitAndGetValue(page);
    expect(value).toBeUndefined();
  })

  it('should send value when form is submitted', async () => {
    const page = await newE2EPage();
    await page.setContent(`<form id="testForm" onSubmit="handleSubmit(event)">
      <ifx-date-picker name="date"></ifx-date-picker>
      <button id="submit" type="submit">Submit</button>
    </form>`);
    await addHandleSubmitScript(page);

    const date = new Date(2024, 5, 24);
    const dateString = date.toISOString().substring(0,10);
    await page.$eval('ifx-date-picker', (el: any, value: string) => {
      const input = el.shadowRoot.querySelector('.date__picker-input');
      input.value = value;
      input.dispatchEvent(new Event('change'));
    }, dateString);

    const value = await submitAndGetValue(page);
    expect(value).toBe(dateString)
  });

  it('should not change value when disabled attribute is present', async () => {
    const page = await newE2EPage();
    await page.setContent(`<form id="testForm" onSubmit="handleSubmit(event)">
      <ifx-date-picker name="date" disabled></ifx-date-picker>
      <button id="submit" type="submit">Submit</button>
    </form>`);
    await addHandleSubmitScript(page);

    
    const date = new Date(2024, 5, 24);
    const dateString = date.toISOString().substring(0,10);
    await page.$eval('ifx-date-picker', (el: any, value: string) => {
      const input = el.shadowRoot.querySelector('.date__picker-input');
      input.value = value;
      input.dispatchEvent(new Event('change'));
    }, dateString);

    const value = await submitAndGetValue(page);
    expect(value).toBeUndefined();
  });

  it('should not be in FormData when form is reset', async () => {
    const page = await newE2EPage();
    await page.setContent(`<form id="testForm" onSubmit="handleSubmit(event)">
      <ifx-date-picker name="date" value="2024-06-24"></ifx-date-picker>
      <button id="submit" type="submit">Submit</button>
      <button id="reset" type="reset">Reset</button>
    </form>`);
    await addHandleSubmitScript(page);

    const datepicker = await page.find('ifx-date-picker');
    const resetButton = await page.find('#reset')

    await datepicker.click();
    await resetButton.click();

    const value = await submitAndGetValue(page);
    expect(value).toBeUndefined();
  })
});

async function addHandleSubmitScript(page: E2EPage) {
  await page.addScriptTag({
    content: `
      function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        
        const obj = Array.from(formData.entries()).reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
        window.formData = obj;
      }
      window.handleSubmit = handleSubmit;
    `,
  });
}

async function submitAndGetValue(page: E2EPage) {
  const submitButton = await page.find('#submit');
  await submitButton.click();

  const formData: FormData = await page.evaluate(() => {
    return window['formData'];
  });

  return formData['date']
}
