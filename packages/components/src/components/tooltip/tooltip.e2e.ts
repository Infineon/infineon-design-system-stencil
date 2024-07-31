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

  it('dismissable tooltip gets invisible after dismiss button is clicked', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-tooltip variant="dismissible" text="Tooltip"><ifx-button>Open</ifx-button></ifx-tooltip>');  
  
    const button = await page.find('ifx-button');
    await button.click();

    const tooltip = await page.find('ifx-tooltip >>> .tooltip-dismissible');

    // should be visible
    expect(tooltip).not.toBeNull();
    expect(tooltip.className).toContain('visible')

    const dismissButton = await page.find('ifx-tooltip >>> .close-button');
    await dismissButton.click();

    // should not be visible after click
    expect(tooltip.className).not.toContain('visible')
  });  

});

