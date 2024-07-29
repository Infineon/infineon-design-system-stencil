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

  it('should render the options, when dropdown is clicked', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <div style="height: 1000px; width: 1000px;"></div>
      <ifx-multiselect select-all-enabled="false" options='${JSON.stringify(getOptions(false))}'></ifx-multiselect>
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
      <ifx-multiselect select-all-enabled="false"></ifx-multiselect>
    `);

    // open dropdown
    const component = await page.find('ifx-multiselect');
    await component.click();
    

    const selectAllButton = await page.find('ifx-multiselect >>> .select-all-wrapper');

    expect(selectAllButton).toBeNull();
  });

  it('should render unchecked select all button, when enabled and nothing selected', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <div style="height: 1000px; width: 1000px;"></div>
      <ifx-multiselect select-all-enabled="true" options='${JSON.stringify(getOptions(false))}'></ifx-multiselect>
    `);

    // open dropdown
    const component = await page.find('ifx-multiselect');
    await component.click();

    const selectAllWrapper = await page.find('ifx-multiselect >>> .select-all-wrapper');
    expect(selectAllWrapper).not.toBeNull();

    const checkbox = await selectAllWrapper.find('ifx-checkbox >>> .checkbox__wrapper');
    expect(checkbox).not.toBeNull();
    expect(checkbox.className).not.toContain('indeterminate');
    expect(checkbox.className).not.toContain('checked');

  });

  it('should render indetereminate select all button, when enabled and one selected', async () => {
    const optionsOneSelected = JSON.parse(JSON.stringify(getOptions(false))); // deep clone options
    optionsOneSelected[0].selected = true;

    const page = await newE2EPage();
    await page.setContent(`
      <div style="height: 1000px; width: 1000px;"></div>
      <ifx-multiselect select-all-enabled="true" options='${JSON.stringify(optionsOneSelected)}'></ifx-multiselect>
    `);

    // open dropdown
    const component = await page.find('ifx-multiselect');
    await component.click();

    const selectAllWrapper = await page.find('ifx-multiselect >>> .select-all-wrapper');
    expect(selectAllWrapper).not.toBeNull();

    const checkbox = await selectAllWrapper.find('ifx-checkbox >>> .checkbox__wrapper');
    expect(checkbox).not.toBeNull();

    expect(checkbox.className).toContain('indeterminate');
    expect(checkbox.className).not.toContain('checked');
  });

  it('should render checked select all button, when enabled and all selected', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <div style="height: 1000px; width: 1000px;"></div>
      <ifx-multiselect select-all-enabled="true" options='${JSON.stringify(getOptions(false))}'></ifx-multiselect>
    `);

    // open dropdown
    const component = await page.find('ifx-multiselect');
    await component.click();

    let dropdown = await page.find('ifx-multiselect >>> .ifx-multiselect-dropdown-menu');
    expect(dropdown).not.toBeNull();

    // TODO: fix that multiselect doesnt apply the given values for nested children -> click all items
    const dropdownOptions = await dropdown.findAll(":not(.select-all-wrapper) > .option:not(.sub-option)");
    expect(dropdownOptions.length).toBe(3);
    for (const option of dropdownOptions) {
      await option.click();
    }

    const selectAllWrapper = await page.find('ifx-multiselect >>> .select-all-wrapper');
    expect(selectAllWrapper).not.toBeNull();

    const checkbox = await selectAllWrapper.find('ifx-checkbox >>> .checkbox__wrapper');
    expect(checkbox).not.toBeNull();
    expect(checkbox.className).not.toContain('indeterminate');
    expect(checkbox.className).toContain('checked');
  });

  it('should select all options if select all button is clicked when none are selected', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <div style="height: 1000px; width: 1000px;"></div>
      <ifx-multiselect select-all-enabled="true" options='${JSON.stringify(getOptions(false))}'></ifx-multiselect>
    `);

    // open dropdown
    const component = await page.find('ifx-multiselect');
    await component.click();

    let dropdown = await page.find('ifx-multiselect >>> .ifx-multiselect-dropdown-menu');
    expect(dropdown).not.toBeNull();

    const selectAllOption = await page.find('ifx-multiselect >>> .select-all-wrapper > .option');

    await selectAllOption.click();

    const checkbox = await selectAllOption.find('ifx-checkbox >>> .checkbox__wrapper');
    expect(checkbox).not.toBeNull();
    expect(checkbox.className).not.toContain('indeterminate');
    expect(checkbox.className).toContain('checked');
  });

  it('should select all options if select all button is clicked when some are selected', async () => {
    const optionsOneSelected = JSON.parse(JSON.stringify(getOptions(false))); // deep clone options
    optionsOneSelected[0].selected = true;

    const page = await newE2EPage();
    await page.setContent(`
      <div style="height: 1000px; width: 1000px;"></div>
      <ifx-multiselect select-all-enabled="true" options='${JSON.stringify(optionsOneSelected)}'></ifx-multiselect>
    `);

    // open dropdown
    const component = await page.find('ifx-multiselect');
    await component.click();

    let dropdown = await page.find('ifx-multiselect >>> .ifx-multiselect-dropdown-menu');
    expect(dropdown).not.toBeNull();

    const selectAllOption = await page.find('ifx-multiselect >>> .select-all-wrapper > .option');

    await selectAllOption.click();

    const checkbox = await selectAllOption.find('ifx-checkbox >>> .checkbox__wrapper');
    expect(checkbox).not.toBeNull();
    expect(checkbox.className).not.toContain('indeterminate');
    expect(checkbox.className).toContain('checked');
  });

  it('should clear all options if select all button is clicked when all are selected', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <div style="height: 1000px; width: 1000px;"></div>
      <ifx-multiselect select-all-enabled="true" options='${JSON.stringify(getOptions(false))}'></ifx-multiselect>
    `);

    // open dropdown
    const component = await page.find('ifx-multiselect');
    await component.click();

    let dropdown = await page.find('ifx-multiselect >>> .ifx-multiselect-dropdown-menu');
    expect(dropdown).not.toBeNull();

    const dropdownOptions = await dropdown.findAll(":not(.select-all-wrapper) > .option:not(.sub-option)");
    expect(dropdownOptions.length).toBe(3);
    for (const option of dropdownOptions) {
      await option.click();
    }

    const selectAllOption = await page.find('ifx-multiselect >>> .select-all-wrapper > .option');

    await selectAllOption.click();

    const checkbox = await selectAllOption.find('ifx-checkbox >>> .checkbox__wrapper');
    expect(checkbox).not.toBeNull();
    expect(checkbox.className).not.toContain('indeterminate');
    expect(checkbox.className).not.toContain('checked');
  });

  // Add more tests for keyboard navigation, clearing selections, error message rendering, dropdown positioning, etc.
});
