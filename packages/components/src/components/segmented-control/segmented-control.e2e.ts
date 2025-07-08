import { newE2EPage } from '@stencil/core/testing';

describe('ifx-segmented-control', () => {

  it('should render without errors', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-segmented-control><ifx-segment>Label</ifx-segment></ifx-segmented-control>');

    const element = await page.find('ifx-segmented-control');
    expect(element).toHaveClass('hydrated');
  });

  it('should emit ifxChange when segment is clicked/selected', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-segmented-control><ifx-segment value="v1">Label</ifx-segment><ifx-segment value="v1" selected="true">Label</ifx-segment></ifx-segmented-control>');

    const select = await page.find('ifx-segmented-control');
    const changeEvent = await select.spyOnEvent('ifxChange');

    const segment = await page.find('ifx-segment');
    await segment.click();

    expect(changeEvent).toHaveReceivedEvent();
  });

});
