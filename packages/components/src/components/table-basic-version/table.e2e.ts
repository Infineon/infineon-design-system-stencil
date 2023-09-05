import { newE2EPage } from '@stencil/core/testing';

describe('ifx-basic-table', () => {

  it('renders the table', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-basic-table></ifx-basic-table>');

    const element = await page.find('ifx-basic-table');
    expect(element).toHaveClass('hydrated');
  });

  it('renders with correct height when set to auto', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-basic-table table-height="auto"></ifx-basic-table>');

    const wrapperElement = await page.find('ifx-basic-table');

    const autoHeight = await wrapperElement.getProperty('tableHeight');
    expect(autoHeight).toBe('auto');
  });



  // Example for checking parsed columns and rows
  it('parses cols and rows correctly', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-basic-table cols=\'[...]\' rows=\'[...]\'>'); // Replace [...] with your mock data

    const component = await page.find('ifx-basic-table');
    const columnDefs = await component.getProperty('columnDefs');
    const rowData = await component.getProperty('rowData');

    expect(columnDefs).toBeDefined();
    expect(rowData).toBeDefined();
    expect(Array.isArray(columnDefs)).toBeTruthy();
    expect(Array.isArray(rowData)).toBeTruthy();
  });

});
