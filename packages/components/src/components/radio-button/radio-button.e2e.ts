import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ifx-radio-button', () => {
  it('renders', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-radio-button></ifx-radio-button>');
    await page.waitForChanges();

    const element = await page.find('ifx-radio-button');
    expect(element).toHaveClass('hydrated');
  });

  it('should be checked if is attribute checked is set', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-radio-button checked>Test</ifx-radio-button>');
    await page.waitForChanges();

    const element = await page.find('ifx-radio-button');
    const checkmark = await page.find('ifx-radio-button >>> .radioButton__wrapper-mark');
    expect(await element.callMethod("isChecked")).toBe(true);
    expect(checkmark).not.toBeNull();
  });

  it('should not be checked if is attribute checked is not set', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-radio-button>Test</ifx-radio-button>');
    await page.waitForChanges();

    const element = await page.find('ifx-radio-button');
    const checkmark = await page.find('ifx-radio-button >>> .radioButton__wrapper-mark');
    expect(await element.callMethod("isChecked")).toBe(false);
    expect(checkmark).toBeNull();
  });

  it('should emit ifxChange event if button is clicked', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-radio-button>Test</ifx-radio-button>');
    await page.waitForChanges();

    const component = await page.find('ifx-radio-button');

    const changeSpy = await component.spyOnEvent('ifxChange');

    const button = await page.find('ifx-radio-button >>> .radioButton__wrapper');
    await button.click();

    expect(changeSpy).toHaveReceivedEventDetail(true);
  });

  it('should emit ifxChange event if label is clicked', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-radio-button>Test</ifx-radio-button>');
    await page.waitForChanges();

    const component = await page.find('ifx-radio-button');

    const changeSpy = await component.spyOnEvent('ifxChange');

    const label = await page.find('ifx-radio-button >>> .label');
    await label.click();

    expect(changeSpy).toHaveReceivedEventDetail(true);
  });

  it('should disable radio buttons of the same group', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent(`
      <ifx-radio-button name="test" value="one">One</ifx-radio-button>
      <ifx-radio-button name="test" value="two" checked>Two</ifx-radio-button>
      `);
    await page.waitForChanges();

    const button1 = await page.find('ifx-radio-button[value="one"]');
    const button2 = await page.find('ifx-radio-button[value="two"]');

    await button1.click();

    expect(await button1.callMethod('isChecked')).toBe(true);
    expect(await button2.callMethod('isChecked')).toBe(false);

    await button2.click();

    expect(await button1.callMethod('isChecked')).toBe(false);
    expect(await button2.callMethod('isChecked')).toBe(true);
  });

  it('should have the correct value when form is submitted', async () => {
    const page = await newE2EPageWithRadioButtonWithinForm();

    const button2 = await page.find('ifx-radio-button[value="two"]');
    await button2.click();

    const submitButton = await page.find('#submit');
    await submitButton.click();

    const formData: Record<string, FormDataEntryValue> = await page.evaluate(() => {
      return window['formData'];
    });

    expect(formData['test']).toBe('two');
  });

  async function newE2EPageWithRadioButtonWithinForm(): Promise<E2EPage> {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent(`
      <form id="testForm" onSubmit="handleSubmit(event)">
        <ifx-radio-button name="test" value="one">One</ifx-radio-button>
        <ifx-radio-button name="test" value="two">Two</ifx-radio-button>
        <ifx-radio-button name="test" value="three">Three</ifx-radio-button>
        <button id="submit" type="submit">Submit</button>
        <button id="reset" type="reset">Reset</button>
      </form>
    `);
    await page.waitForChanges();

    // convert form data to a serializable object and set it to window.formData
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
  };
});
