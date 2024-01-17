//ifxAccordion.tsx
import { Component, h, Listen, Element, Prop } from '@stencil/core';

@Component({
  tag: 'ifx-accordion',
  styleUrl: 'accordion.scss',
  shadow: true,
})
export class Accordion {
  @Element() el: HTMLElement;
  @Prop() autoCollapse: boolean = false;

  @Listen('ifxItemOpen')
  async onItemOpen(event: CustomEvent) {
    if (this.autoCollapse) {
      const items = Array.from(this.el.querySelectorAll('ifx-accordion-item'));
      for (const item of items) {
        const itemElement = item as HTMLIfxAccordionItemElement;
        if (itemElement !== event.target && (await itemElement.open)) {
          itemElement.open = false;
        }
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
