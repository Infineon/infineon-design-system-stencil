import { newSpecPage } from '@stencil/core/testing';
import { Tag } from './tag';

describe('ifx-tag', () => {
  it('renders with basic structure', async () => {
    const page = await newSpecPage({
      components: [Tag],
      html: `<ifx-tag>Test Tag</ifx-tag>`,
    });
    
    // Basic rendering check
    expect(page.root).toBeTruthy();
    expect(page.root.shadowRoot).toBeTruthy();
    
    // Check container
    const container = page.root.shadowRoot.querySelector('.container');
    expect(container).toBeTruthy();
    expect(container.getAttribute('aria-label')).toBe(null);
    
    // Check label
    const label = page.root.shadowRoot.querySelector('.label');
    expect(label).toBeTruthy();
    expect(label.tagName).toBe('P');
    
    // Check no icon is rendered when not provided
    const icon = page.root.shadowRoot.querySelector('ifx-icon');
    expect(icon).toBeFalsy();
  });
  
  it('renders with icon when provided', async () => {
    const page = await newSpecPage({
      components: [Tag],
      html: `<ifx-tag icon="calendar16">Test Tag</ifx-tag>`,
    });
    
    // Check icon is rendered when provided
    const icon = page.root.shadowRoot.querySelector('ifx-icon');
    expect(icon).toBeTruthy();
    expect(icon.getAttribute('icon')).toBe('calendar16');
    
    // Check container still has other elements
    const container = page.root.shadowRoot.querySelector('.container');
    expect(container).toBeTruthy();
  });
});