//ifxAccordion.tsx
import { Component, h, Listen, Element } from '@stencil/core';

@Component({
  tag: 'ifx-accordion',
  styleUrl: 'accordion.scss',
  shadow: true,
})
export class IfxAccordion {
  @Element() el: HTMLElement;

  @Listen('itemOpened', { target: 'body' })
  async onItemOpened(event: CustomEvent) {
    const items = Array.from(this.el.shadowRoot.querySelectorAll('ifx-accordion-item'));
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
