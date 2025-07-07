import { newE2EPage } from '@stencil/core/testing';

describe('ifx-basic-table', () => {

  it('renders the table', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent(`
  <ifx-basic-table
    cols='[{"field":"name","headerName":"Name"}]'
    rows='[{"name":"Test"}]'
  ></ifx-basic-table>
`);
    await page.waitForChanges();

    const element = await page.find('ifx-basic-table');
    expect(element).toHaveClass('hydrated');
  });

  it('renders with correct height when set to auto', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent(`<ifx-basic-table cols='[{"field":"name","headerName":"Name"}]'
rows='[{"name":"Test"}]' table-height="auto"></ifx-basic-table>`);
    await page.waitForChanges();
   
const wrapperElement = await page.find('ifx-basic-table');

    const autoHeight = await wrapperElement.getProperty('tableHeight');
    expect(autoHeight).toBe('auto');
  });



});
