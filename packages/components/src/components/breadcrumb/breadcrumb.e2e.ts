import { newE2EPage } from '@stencil/core/testing';

describe('ifx-breadcrumb', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-breadcrumb></ifx-breadcrumb>');
    await page.waitForChanges();

    const element = await page.find('ifx-breadcrumb');
    expect(element).toHaveClass('hydrated');
  });

  it('should display breadcrumb items', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ifx-breadcrumb>
        <ifx-breadcrumb-item>
          <ifx-breadcrumb-item-label icon="home" href="/">Home</ifx-breadcrumb-item-label>
        </ifx-breadcrumb-item>
        <ifx-breadcrumb-item>
          <ifx-breadcrumb-item-label icon="chevron-right" href="/about">About</ifx-breadcrumb-item-label>
        </ifx-breadcrumb-item>
      </ifx-breadcrumb>
    `);
    await page.waitForChanges();

    const breadcrumb = await page.find('ifx-breadcrumb');
    const breadcrumbItems = await breadcrumb.findAll('ifx-breadcrumb-item');

    expect(breadcrumbItems.length).toBe(2);
  });

  it('should handle last item correctly', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ifx-breadcrumb>
        <ifx-breadcrumb-item>
          <ifx-breadcrumb-item-label icon="home" href="/">Home</ifx-breadcrumb-item-label>
        </ifx-breadcrumb-item>
        <ifx-breadcrumb-item>
          <ifx-breadcrumb-item-label icon="chevron-right" href="/about">About</ifx-breadcrumb-item-label>
        </ifx-breadcrumb-item>
      </ifx-breadcrumb>
    `);
    await page.waitForChanges();

    const breadcrumbItems = await page.findAll('ifx-breadcrumb-item');

    expect(breadcrumbItems[0]).not.toHaveAttribute('aria-current');

  });

  it('should toggle dropdown menu', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ifx-breadcrumb>
        <ifx-breadcrumb-item>
          <ifx-breadcrumb-item-label icon="home" href="/">Home</ifx-breadcrumb-item-label>
        </ifx-breadcrumb-item>
        <ifx-breadcrumb-item>
          <ifx-breadcrumb-item-label icon="chevron-right" href="/about">About</ifx-breadcrumb-item-label>
        </ifx-breadcrumb-item>
      </ifx-breadcrumb>
    `);
 
    await page.waitForChanges();

  });

  it('should throw an error if breadcrumb item has both a href and a dropdown menu', async () => {
    try {
      const page = await newE2EPage();
      await page.setContent(`
        <ifx-breadcrumb>
          <ifx-breadcrumb-item>
            <ifx-breadcrumb-item-label icon="home" href="/">Home</ifx-breadcrumb-item-label>
            <ifx-dropdown-menu>
              <ifx-dropdown-item href="http://yahoo.com">Yahoo</ifx-dropdown-item>
              <ifx-dropdown-item href="http://naver.com">Naver</ifx-dropdown-item>
            </ifx-dropdown-menu>
          </ifx-breadcrumb-item>
          <ifx-breadcrumb-item>
            <ifx-breadcrumb-item-label icon="chevron-right" href="/about">About</ifx-breadcrumb-item-label>
          </ifx-breadcrumb-item>
        </ifx-breadcrumb>
      `);
          await page.waitForChanges();

    } catch (e) {
      expect(e.message).toBe('ifx-breadcrumb-item cannot have both a href and a dropdown menu.');
    }
  });

  it('should have correct focus order', async () => {
    const page = await newE2EPage();
    await page.setContent(`
        <ifx-breadcrumb>
          <ifx-breadcrumb-item>
            <ifx-breadcrumb-item-label id="item-1" slot="label" href="http://google.com">Breadcrumb 1</ifx-breadcrumb-item-label>
          </ifx-breadcrumb-item>
          <ifx-breadcrumb-item id="item-2">
            <ifx-breadcrumb-item-label slot="label">Breadcrumb 2</ifx-breadcrumb-item-label>
            <ifx-dropdown-menu>
              <ifx-dropdown-item href="http://google.com">Google</ifx-dropdown-item>
              <ifx-dropdown-item href="http://bing.com">Bing</ifx-dropdown-item>
            </ifx-dropdown-menu>
          </ifx-breadcrumb-item>
          <ifx-breadcrumb-item>
            <ifx-breadcrumb-item-label id="item-3" slot="label">Breadcrumb 3</ifx-breadcrumb-item-label>
          </ifx-breadcrumb-item>
          <ifx-breadcrumb-item>
            <ifx-breadcrumb-item-label id="item-4" slot="label" href="http://bing.com">Breadcrumb 4</ifx-breadcrumb-item-label>
          </ifx-breadcrumb-item>
        </ifx-breadcrumb>`);
    await page.waitForChanges();

    await page.keyboard.press('Tab');
    let activeElId = await page.evaluate(() => document.activeElement!.id);
    expect(activeElId).toBe('item-1');

    await page.keyboard.press('Tab');
    activeElId = await page.evaluate(() => document.activeElement!.id);
    expect(activeElId).toBe('item-2');

    // Item 3 has neither href nor dropdown menu so it should be skipped
    await page.keyboard.press('Tab');
    activeElId = await page.evaluate(() => document.activeElement!.id);
    expect(activeElId).toBe('item-4');
  });

  it('should open dropdown menu on on keydown', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ifx-breadcrumb>
        <ifx-breadcrumb-item>
          <ifx-breadcrumb-item-label slot="label">Breadcrumb 2</ifx-breadcrumb-item-label>
          <ifx-dropdown-menu>
            <ifx-dropdown-item href="http://google.com">Google</ifx-dropdown-item>
            <ifx-dropdown-item href="http://bing.com">Bing</ifx-dropdown-item>
          </ifx-dropdown-menu>
        </ifx-breadcrumb-item>
      </ifx-breadcrumb>`);
    await page.waitForChanges();

    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.waitForChanges();

    const dropdownMenu = await page.find('ifx-breadcrumb-item >>> .dropdown-menu');
    expect(dropdownMenu).toHaveClass('open');
  });

  // Add more test cases as needed
});
