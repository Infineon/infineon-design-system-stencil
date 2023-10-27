//ifxAccordionItem
import { Component, Prop, h, State, Event, EventEmitter, Method } from '@stencil/core';

@Component({
  tag: 'ifx-accordion-item',
  styleUrl: 'accordionItem.scss',
  shadow: true,
})
export class IfxAccordionItem {
  @Prop() caption: string;
  @Prop() initialCollapse: boolean = true;
  @State() open: boolean = false;
  @Event() ifxItemOpen: EventEmitter;
  @Event() ifxItemClose: EventEmitter;
  private contentEl!: HTMLElement;

  toggleOpen() {
    this.open = !this.open;
    if (this.open) {
      this.ifxItemOpen.emit();
    } else {
      this.ifxItemClose.emit();
    }
  }

  openAccordionItem() { 
    if (this.open) {
      this.contentEl.style.maxHeight = `${this.contentEl.scrollHeight}px`;
    } else {
      this.contentEl.style.maxHeight = '0';
    }
  }

  componentWillLoad() { 
    if(!this.initialCollapse) { 
      this.open = true;
      this.ifxItemOpen.emit();
    }
  }

  componentDidLoad() { 
    this.openAccordionItem()
  }

  componentDidUpdate() {
    this.openAccordionItem()
  }

  @Method()
  async close() {
    this.open = false;
    this.ifxItemClose.emit();
  }

  @Method()
  async isOpen(): Promise<boolean> {
    return this.open;
  }

  render() {
    return (
      <div class={`accordion-item ${this.open ? 'open' : ''}`}>
        <div class="accordion-title" onClick={() => this.toggleOpen()}>
          <span class="accordion-icon">
            <ifx-icon icon="chevron-down-12" />
          </span>
          <span class="accordion-caption">{this.caption}</span>
        </div>
        <div class="accordion-content" ref={(el) => (this.contentEl = el as HTMLElement)}>
          <div class="inner-content">
            <slot />
          </div>
        </div>
      </div>
    );
  }
}
