import { newE2EPage } from "@stencil/core/testing";

describe('Notification', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-notification>42</ifx-notification>');

    const notification = await page.find('ifx-notification');
    expect(notification).toHaveClass('hydrated');
  });

  it('should apply success class', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-notification variant="success">42</ifx-notification>');

    const notification = await page.find('ifx-notification >>> .ifx-notification__wrapper');
    expect(notification).toHaveClass('ifx-notification__wrapper--success');
  });

  it('should apply warning class', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-notification variant="warning">42</ifx-notification>');

    const notification = await page.find('ifx-notification >>> .ifx-notification__wrapper');
    expect(notification).toHaveClass('ifx-notification__wrapper--warning');
  });

  it('should apply error class', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-notification variant="error">42</ifx-notification>');

    const notification = await page.find('ifx-notification >>> .ifx-notification__wrapper');
    expect(notification).toHaveClass('ifx-notification__wrapper--error');
  });

  it('should render icon', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-notification icon="c-check-16">42</ifx-notification>');

    const icon = await page.find('ifx-notification >>> .ifx-notification__icon');
    expect(icon).not.toBeNull();
  });

  it('should render link', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-notification link-text="Link" link-href="https://www.example.com">42</ifx-notification>');

    const link = await page.find('ifx-notification >>> .ifx-notification__link');
    expect(await link.find('ifx-link')).not.toBeNull();
    expect(link).not.toBeNull();
  });

  it('should render content', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-notification>42</ifx-notification>');

    const content = await page.find('ifx-notification >>> .ifx-notification__slot');
    expect(content).not.toBeNull();
  });

  it('should render slot content', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-notification>42</ifx-notification>');

    const content = await page.find('ifx-notification >>> .ifx-notification__slot');
    expect(await content.find('slot')).not.toBeNull();
  });
});