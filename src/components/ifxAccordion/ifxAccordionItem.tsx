//ifxAccordionItem
import { Component, Prop, h, State, Event, EventEmitter, Method } from '@stencil/core';

@Component({
  tag: 'ifx-accordion-item',
  styleUrl: 'ifxAccordionItem.scss',
  shadow: true,
})
export class IfxAccordionItem {
  @Prop() caption: string;
  @State() open: boolean = false;
  @Event() itemOpened: EventEmitter;
  @Event() itemClosed: EventEmitter;
  private contentEl!: HTMLElement;

  toggleOpen() {
    this.open = !this.open;
    if (this.open) {
      this.itemOpened.emit();
    } else {
      this.itemClosed.emit();
    }
  }

  componentDidRender() {
    if (this.open) {
      this.contentEl.style.maxHeight = `${this.contentEl.scrollHeight}px`;
    } else {
      this.contentEl.style.maxHeight = '0';
    }
  }

  @Method()
  async close() {
    this.open = false;
    this.itemClosed.emit();
  }

  @Method()
  async isOpen(): Promise<boolean> {
    return this.open;
  }

  render() {
    return (
      <div class={`accordion-item ${this.open ? 'open' : ''}`} onClick={() => this.toggleOpen()}>
        <div class="accordion-title">
          <span class="accordion-icon">▶</span>
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
