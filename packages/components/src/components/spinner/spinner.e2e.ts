import { newE2EPage } from '@stencil/core/testing';

describe('ifx-spinner', () => {
  it('renders correctly with default props', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-spinner></ifx-spinner>');

    const container = await page.find('ifx-spinner');
    const spinner = await container.find('.spinner');
    const borderDiv = await container.find('.border');
    const semiconductorDiv = await container.find('.semiconductor');

    expect(container).toHaveClass('hydrated');
    expect(spinner).toBeDefined();
    expect(borderDiv).toBeDefined();
    expect(semiconductorDiv).toBeDefined();
  });

  it('renders with size "s"', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-spinner size="s"></ifx-spinner>');

    const container = await page.find('ifx-spinner');
    const spinner = await container.find('.spinner.s');
    const semiconductorDiv = await container.find('.semiconductor.s');

    expect(spinner).toBeDefined();
    expect(semiconductorDiv).toBeDefined();
  });

  it('renders with variant "semiconductor"', async () => {
    const page = await newE2EPage({ timeout: 30000 });
    await page.setContent('<ifx-spinner variant="semiconductor"></ifx-spinner>');

    const container = await page.find('ifx-spinner');
    const semiconductorDiv = await container.find('.semiconductor');
    const borderDiv = await container.find('.border');

    expect(semiconductorDiv).toBeDefined();
    expect(borderDiv).toBeNull();
  });
});
