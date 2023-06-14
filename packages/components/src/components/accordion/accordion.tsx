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
    const items = Array.from(this.el.querySelectorAll('ifx-accordion-item'));
    if(this.autoCollapse) { 
      for (const item of items) {
        const itemElement = item as HTMLIfxAccordionItemElement;
        if (itemElement !== event.target && (await itemElement.isOpen())) {
          itemElement.close();
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
