import { E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ifx-switch', () => {
  beforeEach(async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-switch></ifx-switch>');
    await page.waitForChanges();

  });
  it('renders', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-switch></ifx-switch>');
    await page.waitForChanges();

    const element = await page.find('ifx-switch');
    expect(element).toHaveClass('hydrated');
  });


  it('does not toggle when disabled', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-switch disabled></ifx-switch>');
    await page.waitForChanges();

    const switchDiv = await page.find('ifx-switch >>> div[role="switch"]');

    await switchDiv.click();

    const container = await page.find('ifx-switch >>> .switch__checkbox-container');
    expect(container).not.toHaveClass('checked');
  });


  it('emits the ifxChange event', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-switch></ifx-switch>');
    await page.waitForChanges();

    const component = await page.find('ifx-switch');
    const ifxChangeEvent = await component.spyOnEvent('ifxChange');

    await component.click();
    expect(ifxChangeEvent).toHaveReceivedEventDetail(true);
  });

  it('toggles when Enter is pressed', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-switch></ifx-switch>');
    await page.waitForChanges();

    const component = await page.find('ifx-switch');
    await component.press('Enter');

    const container = await page.find('ifx-switch >>> .switch__checkbox-container');
    expect(container).not.toHaveClass('checked');
  });

  it('toggles when Space is pressed', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-switch></ifx-switch>');
    await page.waitForChanges();

    const switchDiv = await page.find('ifx-switch >>> div[role="switch"]');
    await switchDiv.press('Space');

    // Wait for any changes after pressing 'Space'
    await page.waitForChanges();

    const container = await page.find('ifx-switch >>> .switch__checkbox-container');
    expect(container).not.toHaveClass('checked');
  });

  it('updates the visual state when checked prop changes', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-switch checked="false"></ifx-switch>');
    await page.waitForChanges();

    const component = await page.find('ifx-switch');
    component.setProperty('checked', true);
    await page.waitForChanges();

    const container = await page.find('ifx-switch >>> .switch__checkbox-container');
    expect(container).toHaveClass('checked');
  });

  it('should not be in FormData when form is submitted', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent(`<form id="testForm" onSubmit="handleSubmit(event)">
      <ifx-switch name="switch"></ifx-switch>
      <button id="submit" type="submit">Submit</button>
    </form>`);
    await page.waitForChanges();

    await addHandleSubmitScript(page);

    const value = await submitAndGetValue(page);
    expect(value).toBeUndefined();
  })

  it('should be on when form is submitted', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent(`<form id="testForm" onSubmit="handleSubmit(event)">
      <ifx-switch name="switch"></ifx-switch>
      <button id="submit" type="submit">Submit</button>
    </form>`);
    await page.waitForChanges();

    await addHandleSubmitScript(page);
    const switchEl = await page.find('ifx-switch');

    await switchEl.click();

    const value = await submitAndGetValue(page);
    expect(value).toBe('on')
  });

  it('should be value when form is submitted and value is set', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent(`<form id="testForm" onSubmit="handleSubmit(event)">
      <ifx-switch name="switch" value="val"></ifx-switch>
      <button id="submit" type="submit">Submit</button>
    </form>`);
    await page.waitForChanges();

    await addHandleSubmitScript(page);
    const switchEl = await page.find('ifx-switch');

    await switchEl.click();

    const value = await submitAndGetValue(page);
    expect(value).toBe('val')
  });

  it('should not change value when disabled attribute is present', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent(`<form id="testForm" onSubmit="handleSubmit(event)">
      <ifx-switch name="switch" disabled></ifx-switch>
      <button id="submit" type="submit">Submit</button>
    </form>`);
    await page.waitForChanges();

    await addHandleSubmitScript(page);
    const switchEl = await page.find('ifx-switch');

    await switchEl.click();

    const value = await submitAndGetValue(page);
    expect(value).toBeUndefined();
  });

  it('should not be in FormData when form is reset', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent(`<form id="testForm" onSubmit="handleSubmit(event)">
      <ifx-switch name="switch"></ifx-switch>
      <button id="submit" type="submit">Submit</button>
      <button id="reset" type="reset">Reset</button>
    </form>`);
    await page.waitForChanges();

    await addHandleSubmitScript(page);

    const switchEl = await page.find('ifx-switch');
    const resetButton = await page.find('#reset')

    await switchEl.click();
    await resetButton.click();

    const value = await submitAndGetValue(page);
    expect(value).toBeUndefined();
  });

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

  return formData['switch']
}
