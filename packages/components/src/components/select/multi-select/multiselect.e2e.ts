import { newE2EPage } from '@stencil/core/testing';

function getOptions(selected: boolean) {
  return  [
    { value: 'a', label: 'Option A', selected: selected },
    { value: 'b', label: 'Option B', selected: selected },
    {
      value: 'c',
      label: 'Option c',
      selected: selected,
      children: [
        { value: 'c1', label: 'Option C1', selected: selected },
        { value: 'c2', label: 'Option C2', selected: selected },
      ],
    },
  ];
}

describe('ifx-multiselect', () => {

  it('should render without errors', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-multiselect></ifx-multiselect>');

    const element = await page.find('ifx-multiselect');
    expect(element).toHaveClass('hydrated');
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

  it('should render the options, when dropdown is clicked', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <div style="height: 1000px; width: 1000px;"></div>
      <ifx-multiselect show-select-all="false" options='${JSON.stringify(getOptions(false))}'></ifx-multiselect>
    `);

    // open dropdown
    const component = await page.find('ifx-multiselect');
    await component.click();


    let dropdown = await page.find('ifx-multiselect >>> .ifx-multiselect-dropdown-menu');
    expect(dropdown).not.toBeNull();

    const dropdownOptions = await dropdown.findAll(".option");

    expect((await dropdownOptions).length).toBe(5);
  });

  it('should not render select all button, when disabled', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <div style="height: 1000px; width: 1000px;"></div>
      <ifx-multiselect show-select-all="false"></ifx-multiselect>
    `);

    // open dropdown
    const component = await page.find('ifx-multiselect');
    await component.click();
    

    const selectAllButton = await page.find('ifx-multiselect >>> .select-all-wrapper');

    expect(selectAllButton).toBeNull();
  });

  
  // Add more tests for keyboard navigation, clearing selections, error message rendering, dropdown positioning, etc.
});
