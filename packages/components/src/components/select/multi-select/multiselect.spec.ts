import { newSpecPage } from '@stencil/core/testing';
import { Multiselect } from './multiselect';

describe('ifx-multiselect', () => {
  // Mock implementation of the component's onSelectionChange method to avoid ElementInternals issue
  beforeEach(() => {
    // Create a stub method that doesn't use setFormValue
    Multiselect.prototype.onSelectionChange = jest.fn();
    
    // Prevent the loadInitialOptions method from setting persistentSelectedOptions
    Multiselect.prototype.loadInitialOptions = jest.fn().mockImplementation(function() {
      this.isLoading = true;
      this.internalError = this.error;
      this.internalErrorMessage = this.errorMessage;
      // Skip the problematic fetchOptions call
      this.loadedOptions = [];
      this.isLoading = false;
    });
    
    // Mock fetchOptions to return an empty array
    Multiselect.prototype.fetchOptions = jest.fn().mockResolvedValue([]);
  });

  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [Multiselect],
      html: `<ifx-multiselect></ifx-multiselect>`,
    });
    
    expect(page.root).toBeTruthy();
    
    // Check default size
    const wrapper = page.root.shadowRoot.querySelector('.ifx-multiselect-wrapper');
    expect(wrapper.classList.contains('medium-select')).toBeTruthy();
    
    // Input should have placeholder class
    const input = page.root.shadowRoot.querySelector('.ifx-multiselect-input');
    expect(input.classList.contains('placeholder')).toBeTruthy();
  });

  it('renders with custom label and placeholder', async () => {
    const page = await newSpecPage({
      components: [Multiselect],
      html: `<ifx-multiselect label="Custom Label" placeholder="Select options..."></ifx-multiselect>`,
    });
    
    const label = page.root.shadowRoot.querySelector('.ifx-label-wrapper span');
    expect(label.textContent).toBe('Custom Label');
    
    const input = page.root.shadowRoot.querySelector('.ifx-multiselect-input');
    expect(input.textContent.trim()).toBe('Select options...');
  });

  it('handles disabled state', async () => {
    const page = await newSpecPage({
      components: [Multiselect],
      html: `<ifx-multiselect disabled></ifx-multiselect>`,
    });
    
    const wrapper = page.root.shadowRoot.querySelector('.ifx-multiselect-wrapper');
    expect(wrapper.classList.contains('disabled')).toBeTruthy();
  });

  it('handles error state', async () => {
    const page = await newSpecPage({
      components: [Multiselect],
      html: `<ifx-multiselect error="true" error-message="Custom error"></ifx-multiselect>`,
    });
    
    const wrapper = page.root.shadowRoot.querySelector('.ifx-multiselect-wrapper');
    expect(wrapper.classList.contains('error')).toBeTruthy();
    
    const errorMessage = page.root.shadowRoot.querySelector('.ifx-error-message-wrapper span');
    expect(errorMessage.textContent).toBe('Custom error');
  });

  it('toggles dropdown state', async () => {
    const page = await newSpecPage({
      components: [Multiselect],
      html: `<ifx-multiselect></ifx-multiselect>`,
    });
    
    // Initially closed
    expect(page.rootInstance.dropdownOpen).toBeFalsy();
    
    // Manually toggle dropdown
    page.rootInstance.toggleDropdown();
    await page.waitForChanges();
    
    // Should now be open
    expect(page.rootInstance.dropdownOpen).toBeTruthy();
    
    // Toggle again
    page.rootInstance.toggleDropdown();
    await page.waitForChanges();
    
    // Should be closed again
    expect(page.rootInstance.dropdownOpen).toBeFalsy();
  });
});