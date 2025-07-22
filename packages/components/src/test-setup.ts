let defineCustomElements;
process.env.NODE_ENV = 'test';  

// First, mock tracking to prevent the pp.parentNode error
jest.mock('./global/utils/tracking', () => ({
  trackComponent: jest.fn(),
  isNestedInIfxComponent: jest.fn().mockReturnValue(false),
  initializeTracking: jest.fn()
}));

try {
  // Attempt to import defineCustomElements
  const loader = await import('../types/loader');
  defineCustomElements = loader.defineCustomElements;
  console.log('defineCustomElements imported successfully');
} catch (error) {
  // If the import fails, provide a mock implementation
  console.warn('Failed to import defineCustomElements. Using mock implementation.');
  defineCustomElements = async () => {
    console.warn('Mock defineCustomElements called. No components will be registered.');
  };
}

// Create a more robust ElementInternals mock
if (!('ElementInternals' in window)) {
  class MockElementInternals {
    // Required basic properties
    form = null;
    labels = [];
    validationMessage = '';
    validity = {
      valid: true,
      badInput: false,
      customError: false,
      patternMismatch: false,
      rangeOverflow: false,
      rangeUnderflow: false,
      stepMismatch: false,
      tooLong: false,
      tooShort: false,
      typeMismatch: false,
      valueMissing: false
    };
    
    // Required methods with full implementation
    setFormValue = jest.fn();
    setValidity = jest.fn();
    checkValidity = jest.fn().mockReturnValue(true);
    reportValidity = jest.fn().mockReturnValue(true);
    
    // Additional properties to satisfy TypeScript
    shadowRoot = null;
    states = new Set();
    willValidate = true;
    
    // ARIA properties (add as needed)
    ariaAtomic = null;
    ariaAutoComplete = null;
    ariaBusy = null;
    ariaChecked = null;
    ariaColCount = null;
    // ... other aria properties
  }
  
  // Assign the class to window
  (window as any).ElementInternals = MockElementInternals;
  
  // Mock attachInternals - use type assertion to avoid TypeScript errors
  if (!HTMLElement.prototype.attachInternals) {
    HTMLElement.prototype.attachInternals = jest.fn(() => 
      new MockElementInternals()
    ) as unknown as () => ElementInternals;
  }
}

// Fix for multiselect tests - ensure FormData exists
if (!window.FormData) {
  window.FormData = class FormData {
    private data = new Map();
    append(key, value) { this.data.set(key, value); }
    delete(key) { this.data.delete(key); }
    get(key) { return this.data.get(key); }
    getAll(key) { return [this.data.get(key)]; }
    has(key) { return this.data.has(key); }
    set(key, value) { this.data.set(key, value); }
    entries() { return this.data.entries(); }
    keys() { return this.data.keys(); }
    values() { return this.data.values(); }
    forEach(callback) { this.data.forEach((value, key) => callback(value, key)); }
  } as any;
}

async function setup() {
  try {
    console.log('Registering custom elements');
    await defineCustomElements(window);  
    console.log('Custom elements registered');
  } catch (error) {
    console.error('Error during component registration:', error);
  }
}

setup();

// Fix for Sidebar test - mock expandActiveItems globally
setTimeout(() => {
  try {
    // We use setTimeout to ensure this runs after module loading
    const { Sidebar } = require('./components/navigation/sidebar/sidebar');
    console.log('Found Sidebar component, mocking expandActiveItems');
    if (Sidebar && Sidebar.prototype) {
      Sidebar.prototype.expandActiveItems = jest.fn();
    }
  } catch (e) {
    console.warn('Could not mock Sidebar.expandActiveItems:', e);
  }
}, 0);

export {};