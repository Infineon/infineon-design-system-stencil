import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ifx-checkbox', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-checkbox></ifx-checkbox>');

    const element = await page.find('ifx-checkbox');
    expect(element).toHaveClass('hydrated');
  });

  it('should display slotted content', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-checkbox>Test content</ifx-checkbox>');

    const labelContent = await page.evaluate(() => {
      const checkbox = document.querySelector('ifx-checkbox');
      const slot = checkbox.shadowRoot.querySelector('slot');
      const nodes = slot.assignedNodes();
      return nodes[0].textContent;
    });

    expect(labelContent).toBe('Test content');
  });

  it('should emit ifxChange event when clicked', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-checkbox></ifx-checkbox>');

    const checkbox = await page.find('ifx-checkbox');
    const ifxChange = await checkbox.spyOnEvent('ifxChange');

    const checkboxWrapper = await page.find('ifx-checkbox >>> .checkbox__wrapper');
    await checkboxWrapper.click();

    expect(ifxChange).toHaveReceivedEvent();
  });

  it('should not be in FormData when form is submitted', async () => {
    const page = await newE2EPage();
    await page.setContent(`<form id="testForm" onSubmit="handleSubmit(event)">
      <ifx-checkbox name="checkbox"></ifx-checkbox>
      <button id="submit" type="submit">Submit</button>
    </form>`);
    await addHandleSubmitScript(page);

    const value = await submitAndGetValue(page);
    expect(value).toBeUndefined();
  })

  it('should be on when form is submitted', async () => {
    const page = await newE2EPage();
    await page.setContent(`<form id="testForm" onSubmit="handleSubmit(event)">
      <ifx-checkbox name="checkbox"></ifx-checkbox>
      <button id="submit" type="submit">Submit</button>
    </form>`);
    await addHandleSubmitScript(page);
    const checkbox = await page.find('ifx-checkbox');

    checkbox.click();

    const value = await submitAndGetValue(page);
    expect(value).toBe('on')
  });

  it('should not change value when disabled attribute is present', async () => {
    const page = await newE2EPage();
    await page.setContent(`<form id="testForm" onSubmit="handleSubmit(event)">
      <ifx-checkbox name="checkbox" disabled></ifx-checkbox>
      <button id="submit" type="submit">Submit</button>
    </form>`);
    await addHandleSubmitScript(page);
    const checkbox = await page.find('ifx-checkbox');

    checkbox.click();

    const value = await submitAndGetValue(page);
    expect(value).toBeUndefined();
  });

  it('should not be in FormData when form is reset', async () => {
    const page = await newE2EPage();
    await page.setContent(`<form id="testForm" onSubmit="handleSubmit(event)">
      <ifx-checkbox name="checkbox"></ifx-checkbox>
      <button id="submit" type="submit">Submit</button>
      <button id="reset" type="reset">Reset</button>
    </form>`);
    await addHandleSubmitScript(page);

    const checkbox = await page.find('ifx-checkbox');
    const resetButton = await page.find('#reset')

    await checkbox.click();
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

  return formData['checkbox']
}
