import { newE2EPage } from '@stencil/core/testing';

describe('ifx-radio-button', () => {

  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-radio-button></ifx-radio-button>');

    const element = await page.find('ifx-radio-button');
    expect(element).toHaveClass('hydrated');
  });



  it('renders changes to the error prop', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-radio-button>Error Test</ifx-radio-button>');
    const component = await page.find('ifx-radio-button');

    component.setProperty('error', true);
    await page.waitForChanges();
    const element = await page.find('ifx-radio-button >>> .label');
    expect(element).toHaveClass('error');
  });



  it('handleRadioButtonClick should emit ifxChange event if not disabled and not in error', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-radio-button>Test</ifx-radio-button>');
    const component = await page.find('ifx-radio-button');

    component.setProperty('disabled', false);
    component.setProperty('error', false);
    await page.waitForChanges();

    const changeSpy = await component.spyOnEvent('ifxChange');

    const element = await page.find('ifx-radio-button >>> .label');
    await element.click();

    expect(changeSpy).toHaveReceivedEventDetail(true);
  });

});
