import { newE2EPage } from '@stencil/core/testing';

describe('ifx-text-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-text-input></ifx-text-input>');
    const element = await page.find('ifx-text-input');
    expect(element).toHaveClass('hydrated');
  });

  it('renders placeholder', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-text-input placeholder="Testing placeholder"></ifx-text-input>');
    const input = await page.find('ifx-text-input >>> input');
    expect(await input.getProperty('placeholder')).toEqual('Testing placeholder');
  });

  it('renders disabled', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-text-input disabled></ifx-text-input>');
    const input = await page.find('ifx-text-input >>> input');
    expect(await input.getProperty('disabled')).toBeTruthy();
  });

  it('renders readonly', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-text-input readonly></ifx-text-input>');
    const input = await page.find('ifx-text-input >>> input');
    expect(await input.getAttribute('readonly')).not.toBeNull();
  });

  it('handles value change', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-text-input></ifx-text-input>');
    const input = await page.find('ifx-text-input >>> input');
    const newValue = 'New value';
    await input.type(newValue);
    expect(await input.getProperty('value')).toBe(newValue);
  });

  it('renders with error', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-text-input error error-message="Invalid input"></ifx-text-input>');
    const errorDiv = await page.find('ifx-text-input >>> .textInput__bottom-wrapper-error');
    expect(errorDiv.innerText).toBe('Invalid input');
  });

  it('renders with success', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-text-input success></ifx-text-input>');
    const input = await page.find('ifx-text-input >>> input');
    expect(input).toHaveClass('success');
  });

  it('renders with icon', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-text-input icon></ifx-text-input>');
    const icon = await page.find('ifx-text-input >>> ifx-icon');
    expect(icon).not.toBeNull();
  });
});
