import { newE2EPage } from '@stencil/core/testing';

describe('ifx-switch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-switch></ifx-switch>');

    const element = await page.find('ifx-switch');
    expect(element).toHaveClass('hydrated');
  });


  it('does not toggle when disabled', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-switch disabled></ifx-switch>');

    const switchDiv = await page.find('ifx-switch >>> div[role="switch"]');

    await switchDiv.click();

    const container = await page.find('ifx-switch >>> .container');
    expect(container).not.toHaveClass('checked');
  });


  it('emits the ifxChange event', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-switch></ifx-switch>');

    const component = await page.find('ifx-switch');
    const ifxChangeEvent = await component.spyOnEvent('ifxChange');

    await component.click();
    expect(ifxChangeEvent).toHaveReceivedEventDetail(true);
  });

  it('toggles when Enter is pressed', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-switch></ifx-switch>');

    const component = await page.find('ifx-switch');
    await component.press('Enter');

    const container = await page.find('ifx-switch >>> .container');
    expect(container).not.toHaveClass('checked');
  });

  it('toggles when Space is pressed', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-switch></ifx-switch>');

    const switchDiv = await page.find('ifx-switch >>> div[role="switch"]');
    await switchDiv.press('Space');

    // Wait for any changes after pressing 'Space'
    await page.waitForChanges();

    const container = await page.find('ifx-switch >>> .container');
    expect(container).toHaveClass('checked');
  });



  it('updates the visual state when value prop changes', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-switch value="false"></ifx-switch>');

    const component = await page.find('ifx-switch');
    component.setProperty('value', true);
    await page.waitForChanges();

    const container = await page.find('ifx-switch >>> .container');
    expect(container).toHaveClass('checked');
  });


});
