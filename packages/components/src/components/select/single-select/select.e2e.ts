import { newE2EPage } from '@stencil/core/testing';

describe('ifx-select', () => {

  it('should render without errors', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-select></ifx-select>');
    await page.$eval('ifx-select', (el: any) => { el.choices = []; });

    const element = await page.find('ifx-select');
    expect(element).toHaveClass('hydrated');
  });

  it('should accept properties and reflect them', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-select></ifx-select>');
    await page.$eval('ifx-select', (el: any) => {
      el.choices = [];
      el.label = 'Test label';
    });
    const component = await page.find('ifx-select');

    const label = await component.getProperty('label');
    expect(label).toBe('Test label');
  });



  it('should display error message when ifxError is true', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-select error="true" error-message="This is an error"></ifx-select>');
    await page.$eval('ifx-select', (el: any) => { el.choices = []; });    const component = await page.find('ifx-select');

    const errorMessage = await component.getProperty('errorMessage');
    expect(errorMessage).toBe('This is an error');
  });



});
