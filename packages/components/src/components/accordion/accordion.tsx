import { Component, h, Listen, Element, Prop } from '@stencil/core';
import { trackComponent } from '../../global/utils/tracking';
import { isNestedInIfxComponent } from '../../global/utils/dom-utils';

@Component({
  tag: 'ifx-accordion',
  styleUrl: 'accordion.scss',
  shadow: { delegatesFocus: true },
})
export class Accordion {
  @Element() el: HTMLElement;
  @Prop() autoCollapse: boolean = false;

  componentWillLoad() { 
    if(!isNestedInIfxComponent(this.el)) { 
      trackComponent('ifx-accordion')
    }
  }

  @Listen('ifxOpen')
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
