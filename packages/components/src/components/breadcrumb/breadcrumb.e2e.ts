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

  // Add more test cases as needed
});
