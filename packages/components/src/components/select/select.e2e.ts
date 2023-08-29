import { newE2EPage } from '@stencil/core/testing';

describe('ifx-select', () => {

  it('should render without errors', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-select></ifx-select>');

    const element = await page.find('ifx-select');
    expect(element).toHaveClass('hydrated');
  });

  it('should accept properties and reflect them', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-select ifx-label="Test label"></ifx-select>');

    const component = await page.find('ifx-select');

    const label = await component.getProperty('ifxLabel');
    expect(label).toBe('Test label');
  });



  it('should display error message when ifxError is true', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-select ifx-error="true" ifx-error-message="This is an error"></ifx-select>');
    const component = await page.find('ifx-select');

    const errorMessage = await component.getProperty('ifxErrorMessage');
    expect(errorMessage).toBe('This is an error');
  });


  it('should open the dropdown when clicked', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-select></ifx-select>');

    const dropdownTrigger = await page.find('ifx-select .ifx-choices__wrapper');
    await dropdownTrigger.click();

    await page.waitForChanges();

    const dropdown = await page.find('ifx-select .choices__list');
    expect(dropdown).not.toBeNull();
  });

});
