import { newE2EPage } from '@stencil/core/testing';

describe('IfxTabs', () => {
  it('should render with tabs and change active tab', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ifx-tabs>
        <ifx-tab header="Tab 1">
          <div>Tab 1 Content</div>
        </ifx-tab>
        <ifx-tab header="Tab 2">
          <div>Tab 2 Content</div>
        </ifx-tab>
        <ifx-tab header="Tab 3">
          <div>Tab 3 Content</div>
        </ifx-tab>
      </ifx-tabs>
    `);

    const tabs = await page.find('ifx-tabs');
    expect(tabs).toHaveClass('hydrated');

    const tabHeaders = await page.findAll('ifx-tabs >>> .tab-item');
    expect(tabHeaders.length).toBe(3);

    const tabContents = await page.findAll('ifx-tabs >>> .tab-content > div');
    expect(tabContents.length).toBe(3);

    const activeBorder = await page.find('ifx-tabs >>> .active-border');
    expect(activeBorder).toHaveClass('active-border');

    // Change active tab
    await tabHeaders[1].click();
    await page.waitForChanges();

    const newActiveBorder = await page.find('ifx-tabs >>> .active-border');
    expect(newActiveBorder).toHaveClass('active-border');

    const newActiveTabContent = await page.find('ifx-tabs >>> .tab-content > div[style="display: block;"]');
    expect(newActiveTabContent).not.toBeNull();

  });
});
