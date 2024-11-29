import { newE2EPage } from '@stencil/core/testing';


describe('ifx-tooltip', () => {

  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-tooltip></ifx-tooltip>');

    const element = await page.find('ifx-tooltip');
    expect(element).toHaveClass('hydrated');
  });


  it('renders tooltip when visible prop is set', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-tooltip></ifx-tooltip>');
    const component = await page.find('ifx-tooltip');

    component.setProperty('visible', true);
    await page.waitForChanges();

    const tooltipEl = await page.find('ifx-tooltip >>> .tooltip-compact');
    expect(tooltipEl).not.toBeNull();
  });

});

