// src/test-setup.ts
import { defineCustomElements } from '../loader/'; // Adjust path if needed

try {
  await defineCustomElements(window); // Await if it's async
} catch (error) {
  console.error('Error during component registration:', error);
}

if (customElements.get('ifx-accordion')) {
  console.log('ifx-accordion component is registered');
} else {
  console.error('ifx-accordion component is NOT registered');
}