//ifxAccordion.tsx
import { Component, h, Listen } from '@stencil/core';

@Component({
  tag: 'ifx-accordion',
  styleUrl: 'ifxAccordion.scss',
  shadow: true,
})
export class IfxAccordion {
  @Listen('itemOpened', { target: 'body' })
  async onItemOpened(event: CustomEvent) {
    const items = Array.from(document.querySelectorAll('ifx-accordion-item'));
    for (const item of items) {
      const itemElement = item as HTMLIfxAccordionItemElement;
      if (itemElement !== event.target && (await itemElement.isOpen())) {
        itemElement.close();
      }
    }
  }

  render() {
    return (
      <div class="accordion-wrapper">
        <slot />
      </div>
    );
  }
}
