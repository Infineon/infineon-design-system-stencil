let defineCustomElements;

try {
  // Attempt to import defineCustomElements
  const loader = await import('../types/loader'); // Corrected path
  defineCustomElements = loader.defineCustomElements;
  console.log('defineCustomElements imported successfully');
} catch (error) {
  // If the import fails, provide a mock implementation
  console.warn('Failed to import defineCustomElements. Using mock implementation.');
  defineCustomElements = async () => {
    console.warn('Mock defineCustomElements called. No components will be registered.');
  };
}

// Mock ElementInternals if not available
if (!('ElementInternals' in window)) {
  (window as any).ElementInternals = class ElementInternals {
    setFormValue = jest.fn();
  };
}

async function setup() {
  try {
    console.log('Registering custom elements');
    await defineCustomElements(window);  
    console.log('Custom elements registered');
  } catch (error) {
    console.error('Error during component registration:', error);
  }

  if (customElements.get('ifx-accordion')) {
    console.log('ifx-accordion component is registered');
  } else {
    console.error('ifx-accordion component is NOT registered');
  }
}

setup();

export {}; 