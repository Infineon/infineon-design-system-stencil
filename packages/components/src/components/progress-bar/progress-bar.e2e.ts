import { newE2EPage } from '@stencil/core/testing';

describe('ifx-progress-bar', () => {
      beforeEach(async () => {
     const page = await newE2EPage();
    await page.setContent('<ifx-progress-bar></ifx-progress-bar>');
  });
  it('should render component', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-progress-bar></ifx-progress-bar>');

    const element = await page.find('ifx-progress-bar');
    expect(element).toHaveClass('hydrated');
  });

  it('should reflect value prop', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-progress-bar value="70"></ifx-progress-bar>');

    const progressBar = await page.find('ifx-progress-bar');
    const value = await progressBar.getProperty('value');

    expect(value).toBe(70);
  });

  it('should show label when showLabel is true', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-progress-bar value="60"></ifx-progress-bar>');

    const progressBar = await page.find('ifx-progress-bar');
    await progressBar.setProperty('showLabel', true);
    await page.waitForChanges();

    const showLabel = await progressBar.getProperty('showLabel');
    const labelElement = await page.find('ifx-progress-bar >>> .label');

    expect(showLabel).toBe(true);
    expect(labelElement).not.toBeNull();
  });


  it('should not show label when size is "s"', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-progress-bar value="50" size="s" showLabel="true"></ifx-progress-bar>');

    const progressBar = await page.find('ifx-progress-bar');
    const size = await progressBar.getProperty('size');

    const labelElement = await page.find('ifx-progress-bar >>> .label');

    expect(size).toBe('s');
    expect(labelElement).toBeNull();
  });

  it('should reflect the progress percentage in the width style of the progress bar', async () => {
    const page = await newE2EPage();
    await page.setContent('<div style="width: 1000px;"><ifx-progress-bar value="50"></ifx-progress-bar></div>');

    const progressBar = await page.find('ifx-progress-bar >>> .progress');
    const computedStyle = await progressBar.getComputedStyle();
    const width = computedStyle['width'];

    expect(width).toEqual('500px');  // 50% of 1000px
  });


});
