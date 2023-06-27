import { newE2EPage } from '@stencil/core/testing';

describe('ifx-radio-button', () => {

  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-radio-button></ifx-radio-button>');

    const element = await page.find('ifx-radio-button');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the value prop', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-radio-button value="true"></ifx-radio-button>');

    const radioButton = await page.find('ifx-radio-button');
    radioButton.setProperty('value', true); // sets the value prop to true
    await page.waitForChanges();

    const element = await page.find('ifx-radio-button >>> .radioButton__wrapper');
    expect(element).toHaveClass('checked'); // now check for the 'checked' class

  });

  it('renders changes to the disabled prop', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-radio-button disabled="true"></ifx-radio-button>');

    const element = await page.find('ifx-radio-button >>> .radioButton__wrapper');
    expect(element).toHaveClass('disabled');
  });

  it('renders changes to the error prop', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-radio-button error="true"></ifx-radio-button>');

    const element = await page.find('ifx-radio-button >>> .radioButton__wrapper');
    expect(element).toHaveClass('error');
  });

  it('handleRadioButtonClick should emit ifxChange event if not disabled and not in error', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-radio-button></ifx-radio-button>');

    const changeSpy = await page.spyOnEvent('ifxChange');
    const element = await page.find('ifx-radio-button >>> .radioButton__wrapper');
    await element.click();

    expect(changeSpy).toHaveReceivedEventDetail(true);
  });

  it('detects if a slot is provided', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-radio-button><div id="testSlot">Test</div></ifx-radio-button>');

    const slotContent = await page.find('#testSlot');
    expect(slotContent).not.toBeNull();
  });

});
