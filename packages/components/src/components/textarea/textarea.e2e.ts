import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ifx-textarea', () => {
        beforeEach(async () => {
     const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-textarea></ifx-textarea>');
        await page.waitForChanges();

  });
  it('renders', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-textarea></ifx-textarea>');
        await page.waitForChanges();

    const element = await page.find('ifx-textarea');
    expect(element).toHaveClass('hydrated');
  });

  it('renders placeholder', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-textarea placeholder="Testing placeholder"></ifx-textarea>');
       await page.waitForChanges();

    const input = await page.find('ifx-textarea >>> textarea');
    expect(await input.getProperty('placeholder')).toEqual('Testing placeholder');
  });

  it('renders disabled', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-textarea disabled></ifx-textarea>');
        await page.waitForChanges();

    const input = await page.find('ifx-textarea >>> textarea');
    expect(await input.getProperty('disabled')).toBeTruthy();
  });

  it('handles value change', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-textarea></ifx-textarea>');
        await page.waitForChanges();

    const input = await page.find('ifx-textarea >>> textarea');
    const newValue = 'New value';
    await input.type(newValue);
    expect(await input.getProperty('value')).toBe(newValue);
  });

  it('should submit the form data when the form is submitted and value is not set', async () => {
    const page = await newE2EPageWithRadioButtonWithinForm();
    const submitButton = await page.find('#submit');
    await submitButton.click();

    const formData: FormData = await page.evaluate(() => {
      return window['formData'];
    });

    expect(formData['textArea']).toBeUndefined();
  });

  it('should submit the form data when the form is submitted', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent(`
      <form id="testForm" onSubmit="handleSubmit(event)">
        <ifx-textarea name="textArea"></ifx-textarea>
        <button id="submit" type="submit">Submit</button>
        <button id="reset" type="reset">Reset</button>
      </form>
    `);
      await page.waitForChanges();

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
  
    const input = await page.find('ifx-textarea >>> textarea');
    const submitButton = await page.find('#submit');
  
    const expectedValue = 'test';
    await input.type(expectedValue);
    await submitButton.click();
  
    const formData: FormData = await page.evaluate(() => {
      return window['formData'];
    });
  
    expect(formData['textArea']).toBe(expectedValue);
  });

  it('should reset value when form is reset', async () => {
    const page = await newE2EPageWithRadioButtonWithinForm();
    const input = await page.find('ifx-textarea >>> textarea');
    const submitButton = await page.find('#submit');
    const resetButton = await page.find('#reset');

    input.type('test');

    await resetButton.click();

    await submitButton.click();

    const formData: FormData = await page.evaluate(() => {
      return window['formData'];
    });

    expect(formData['textArea']).toBe("");
  });

  it('handles value change', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-textarea maxlength="2"></ifx-textarea>');
    await page.waitForChanges();

    const input = await page.find('ifx-textarea >>> textarea');
    await input.press('KeyA');
    await input.press('KeyB');
    await input.press('KeyC');

    expect(await input.getProperty('value')).toBe('ab');
  });
});

async function newE2EPageWithRadioButtonWithinForm(): Promise<E2EPage> {
  const page = await newE2EPage({ timeout: 30000 });
  await page.setContent(`<form id="testForm" onSubmit="handleSubmit(event)">
    <ifx-textarea name="textArea"></ifx-textarea>
    <button id="submit" type="submit">Submit</button>
    <button id="reset" type="reset">Reset</button>
  </form>`);
    await page.waitForChanges();

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
