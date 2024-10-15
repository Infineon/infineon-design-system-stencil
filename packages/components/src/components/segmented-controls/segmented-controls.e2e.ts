import { newE2EPage } from '@stencil/core/testing';

describe('ifx-segmented-control-group', () => {

  it('should render without errors', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-segmented-control-group><ifx-segmented-control>Label</ifx-segmented-control></ifx-segmented-control-group>');

    const element = await page.find('ifx-segmented-control-group');
    expect(element).toHaveClass('hydrated');
  });

  it('should emit ifxChange when segment is clicked/selected', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-segmented-control-group><ifx-segmented-control value="v1">Label</ifx-segmented-control><ifx-segmented-control value="v1" selected="true">Label</ifx-segmented-control></ifx-segmented-control-group>');

    const select = await page.find('ifx-segmented-control-group');
    const changeEvent = await select.spyOnEvent('ifxChange');

    const segment = await page.find('ifx-segmented-control');
    await segment.click();

    expect(changeEvent).toHaveReceivedEvent();
  });

});
