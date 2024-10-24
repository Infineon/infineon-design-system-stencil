import { newE2EPage } from '@stencil/core/testing';

describe('ifx-breadcrumb', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-breadcrumb></ifx-breadcrumb>');

    const element = await page.find('ifx-breadcrumb');
    expect(element).toHaveClass('hydrated');
  });

  it('should display breadcrumb items', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ifx-breadcrumb>
        <ifx-breadcrumb-item>
          <ifx-breadcrumb-item-label icon="home" url="/">Home</ifx-breadcrumb-item-label>
        </ifx-breadcrumb-item>
        <ifx-breadcrumb-item>
          <ifx-breadcrumb-item-label icon="chevron-right" url="/about">About</ifx-breadcrumb-item-label>
        </ifx-breadcrumb-item>
      </ifx-breadcrumb>
    `);

    const breadcrumb = await page.find('ifx-breadcrumb');
    const breadcrumbItems = await breadcrumb.findAll('ifx-breadcrumb-item');

    expect(breadcrumbItems.length).toBe(2);
  });

  it('should handle last item correctly', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ifx-breadcrumb>
        <ifx-breadcrumb-item>
          <ifx-breadcrumb-item-label icon="home" url="/">Home</ifx-breadcrumb-item-label>
        </ifx-breadcrumb-item>
        <ifx-breadcrumb-item>
          <ifx-breadcrumb-item-label icon="chevron-right" url="/about">About</ifx-breadcrumb-item-label>
        </ifx-breadcrumb-item>
      </ifx-breadcrumb>
    `);

    const breadcrumbItems = await page.findAll('ifx-breadcrumb-item');

    expect(breadcrumbItems[0]).not.toHaveAttribute('aria-current');

  });

  it('should toggle dropdown menu', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <ifx-breadcrumb>
        <ifx-breadcrumb-item>
          <ifx-breadcrumb-item-label icon="home" url="/">Home</ifx-breadcrumb-item-label>
        </ifx-breadcrumb-item>
        <ifx-breadcrumb-item>
          <ifx-breadcrumb-item-label icon="chevron-right" url="/about">About</ifx-breadcrumb-item-label>
        </ifx-breadcrumb-item>
      </ifx-breadcrumb>
    `);

    await page.waitForChanges();

  });

  it('should throw an error if breadcrumb item has both a url and a dropdown menu', async () => {
    try {
      const page = await newE2EPage();
      await page.setContent(`
        <ifx-breadcrumb>
          <ifx-breadcrumb-item>
            <ifx-breadcrumb-item-label icon="home" url="/">Home</ifx-breadcrumb-item-label>
            <ifx-dropdown-menu>
              <ifx-dropdown-item url="http://yahoo.com">Yahoo</ifx-dropdown-item>
              <ifx-dropdown-item url="http://naver.com">Naver</ifx-dropdown-item>
            </ifx-dropdown-menu>
          </ifx-breadcrumb-item>
          <ifx-breadcrumb-item>
            <ifx-breadcrumb-item-label icon="chevron-right" url="/about">About</ifx-breadcrumb-item-label>
          </ifx-breadcrumb-item>
        </ifx-breadcrumb>
      `);
    } catch (e) {
      expect(e.message).toBe('ifx-breadcrumb-item cannot have both a url and a dropdown menu.');
    }
  });

  // Add more test cases as needed
});
