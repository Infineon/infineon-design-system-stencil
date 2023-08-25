import { newE2EPage } from '@stencil/core/testing';

describe('ifx-multiselect', () => {

  it('should render without errors', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-multiselect></ifx-multiselect>');

    const element = await page.find('ifx-multiselect');
    expect(element).toHaveClass('hydrated');
  });

  it('should accept properties and reflect them', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-multiselect label="Test label"></ifx-multiselect>');

    const component = await page.find('ifx-multiselect');
    const label = await component.getProperty('label');

    expect(label).toBe('Test label');
  });


  it('should emit ifxMultiselectIsOpen when dropdown is toggled', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-multiselect></ifx-multiselect>');

    const select = await page.find('ifx-multiselect');
    const openEvent = await select.spyOnEvent('ifxMultiselectIsOpen');

    const multiselectWrapper = await page.find('ifx-multiselect >>> .ifx-multiselect-wrapper ');
    await multiselectWrapper.click();

    expect(openEvent).toHaveReceivedEvent();
  });

  it('should toggle dropdown when clicked', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-multiselect></ifx-multiselect>');

    const component = await page.find('ifx-multiselect');

    await component.click();
    let dropdown = await page.find('ifx-multiselect >>> .ifx-multiselect-dropdown-menu');
    expect(dropdown).not.toBeNull();

    await component.click();
    dropdown = await page.find('ifx-multiselect >>> .ifx-multiselect-dropdown-menu');
    expect(dropdown).toBeNull();
  });

  it('should close dropdown when clicked outside', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <div style="height: 1000px; width: 1000px;"></div>
      <ifx-multiselect></ifx-multiselect>
    `);

    const component = await page.find('ifx-multiselect');

    await component.click();
    let dropdown = await page.find('ifx-multiselect >>> .ifx-multiselect-dropdown-menu');
    expect(dropdown).not.toBeNull();

    const outsideArea = await page.find('div');
    await outsideArea.click();

    dropdown = await page.find('ifx-multiselect >>> .ifx-multiselect-dropdown-menu');
    expect(dropdown).toBeNull();
  });

  // Add more tests for keyboard navigation, clearing selections, error message rendering, dropdown positioning, etc.
});
