import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ifx-radio-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-radio-button></ifx-radio-button>');

    const element = await page.find('ifx-radio-button');
    expect(element).toHaveClass('hydrated');
  });

  it('handleRadioButtonClick should emit ifxChange event if not disabled, not in errorv or not already checked', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-radio-button>Test</ifx-radio-button>');
    const component = await page.find('ifx-radio-button');

    component.setProperty('disabled', false);
    component.setProperty('error', false);
    component.setProperty('value', false);

    await page.waitForChanges();

    const changeSpy = await component.spyOnEvent('ifxChange');

    const element = await page.find('ifx-radio-button >>> .label');
    await element.click();

    expect(changeSpy).toHaveReceivedEventDetail(true);
  });

  it('handleRadioButtonClick should be on when form submitted', async () => {
    const page = await newE2EPageWithRadioButtonWithinForm();

    const radioButton = await page.find('ifx-radio-button');
    await radioButton.click();

    const submitButton = await page.find('button');
    await submitButton.click();

    const formData: FormData = await page.evaluate(() => {
      return window['formData'];
    });

    expect(formData['radiobtn']).toBe('on');
  });

  it('handleRadioButtonClick should be off when form submitted and radio button not clicked', async () => {
    const page = await newE2EPageWithRadioButtonWithinForm();

    const submitButton = await page.find('button');
    await submitButton.click();

    const formData: FormData = await page.evaluate(() => {
      return window['formData'];
    });

    expect(formData['radiobtn']).toBeUndefined;
  });
});

async function newE2EPageWithRadioButtonWithinForm(): Promise<E2EPage> {
  const page = await newE2EPage();
  await page.setContent(`<form id="testForm" onSubmit="handleSubmit(event)">
    <ifx-radio-button name="radiobtn" value="false">Test</ifx-radio-button>
    <button type="submit">Submit</button>
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
