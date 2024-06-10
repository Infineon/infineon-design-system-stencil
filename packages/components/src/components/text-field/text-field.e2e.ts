import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ifx-text-field', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-text-field></ifx-text-field>');
    const element = await page.find('ifx-text-field');
    expect(element).toHaveClass('hydrated');
  });

  it('renders placeholder', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-text-field placeholder="Testing placeholder"></ifx-text-field>');
    const input = await page.find('ifx-text-field >>> input');
    expect(await input.getProperty('placeholder')).toEqual('Testing placeholder');
  });

  it('renders disabled', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-text-field disabled></ifx-text-field>');
    const input = await page.find('ifx-text-field >>> input');
    expect(await input.getProperty('disabled')).toBeTruthy();
  });

  it('handles value change', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-text-field></ifx-text-field>');
    const input = await page.find('ifx-text-field >>> input');
    const newValue = 'New value';
    await input.type(newValue);
    expect(await input.getProperty('value')).toBe(newValue);
  });

  it('renders with error', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-text-field error caption="Invalid input"></ifx-text-field>');
    const errorDiv = await page.find('ifx-text-field >>> .textInput__bottom-wrapper-caption.error');
    expect(errorDiv.innerText).toBe('Invalid input');
  });

  it('renders with success', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-text-field success></ifx-text-field>');
    const input = await page.find('ifx-text-field >>> input');
    expect(input).toHaveClass('success');
  });

  it('renders with icon', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-text-field icon="chevron-down-16"></ifx-text-field>'); // Set the icon attribute with a valid icon name
    await page.waitForChanges(); // Wait for any potential asynchronous updates
    const icon = await page.find('ifx-text-field >>> ifx-icon');
    expect(icon).not.toBeNull();
  });

  it('should submit the form data when the form is submitted and value is not set', async () => {
    const page = await newE2EPageWithRadioButtonWithinForm();
    const submitButton = await page.find('#submit');
    await submitButton.click();

    const formData: FormData = await page.evaluate(() => {
      return window['formData'];
    });

    expect(formData['textField']).toBeUndefined();
  });

  it('should submit the form data when the form is submitted', async () => {
    const page = await newE2EPageWithRadioButtonWithinForm();
    const submitButton = await page.find('#submit');
    const input = await page.find('ifx-text-field >>> input');

    const expectedValue = 'test';

    input.type(expectedValue);
    await submitButton.click();

    const formData: FormData = await page.evaluate(() => {
      return window['formData'];
    });

    expect(formData['textField']).toBe(expectedValue);
  });

  it('should reset value when form is reset', async () => {
    const page = await newE2EPageWithRadioButtonWithinForm();
    const input = await page.find('ifx-text-field >>> input');
    const submitButton = await page.find('#submit');
    const resetButton = await page.find('#reset');

    input.type('test');

    await resetButton.click();

    await submitButton.click();

    const formData: FormData = await page.evaluate(() => {
      return window['formData'];
    });

    expect(formData['textField']).toBe("");
  });
});

async function newE2EPageWithRadioButtonWithinForm(): Promise<E2EPage> {
  const page = await newE2EPage();
  await page.setContent(`<form id="testForm" onSubmit="handleSubmit(event)">
    <ifx-text-field name="textField"></ifx-text-field>
    <button id="submit" type="submit">Submit</button>7
    <button id="reset" type="reset">Reset</button>
  </form>`);

  // convert formdata to serializable Object and set to window.formData
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

  return page;
}
