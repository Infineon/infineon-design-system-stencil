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
    await page.setContent('<ifx-basic-table cols=\'[{"headerName": "Col1","field": "Col1"},{"headerName": "Col2","field": "Col2"}]\' rows=\'[{"col1": "data1", "col2": "data2"}]\'>'); // Replace [...] with your mock data

    const component = await page.find('ifx-basic-table >>>');
    const colDefsCell = await component.find('.ag-header-cell-label');
    const rowCell = await component.find('.ag-cell-value.ag-cell');
    
    expect(colDefsCell.textContent).toBeDefined();
    expect(rowCell.textContent).toBeDefined();
  });

});
