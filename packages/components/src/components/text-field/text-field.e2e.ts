import { newE2EPage } from '@stencil/core/testing';

describe('ifx-text-field', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-text-field></ifx-text-field>');
    const element = await page.find('ifx-text-field');
    expect(element).toHaveClass('hydrated');
  });

  it('renders placeholder', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-text-field placeholder="Testing placeholder"></ifx-text-field>');
    const input = await page.find('ifx-text-field >>> input');
    expect(await input.getProperty('placeholder')).toEqual('Testing placeholder');
  });

  it('renders disabled', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-text-field disabled></ifx-text-field>');
    const input = await page.find('ifx-text-field >>> input');
    expect(await input.getProperty('disabled')).toBeTruthy();
  });


  it('handles value change', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-text-field></ifx-text-field>');
    const input = await page.find('ifx-text-field >>> input');
    const newValue = 'New value';
    await input.type(newValue);
    expect(await input.getProperty('value')).toBe(newValue);
  });

  it('renders with error', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-text-field error caption="Invalid input"></ifx-text-field>');
    const errorDiv = await page.find('ifx-text-field >>> .textInput__bottom-wrapper-caption.error');
    expect(errorDiv.innerText).toBe('Invalid input');
  });

  it('renders with success', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-text-field success></ifx-text-field>');
    const input = await page.find('ifx-text-field >>> input');
    expect(input).toHaveClass('success');
  });

  it('renders with icon', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-text-field icon="chevron-down-16"></ifx-text-field>'); // Set the icon attribute with a valid icon name
    await page.waitForChanges(); // Wait for any potential asynchronous updates
    const icon = await page.find('ifx-text-field >>> ifx-icon');
    expect(icon).not.toBeNull();
  });

});
