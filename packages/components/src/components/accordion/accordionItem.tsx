//ifxAccordionItem
import { Component, Prop, h, State, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 'ifx-accordion-item',
  styleUrl: 'accordionItem.scss',
  shadow: true,
})
export class IfxAccordionItem {
  @Prop() caption: string;
  @Prop({
    mutable: true,
  }) open: boolean = false;
  @Prop() initialCollapse: boolean = true;
  @State() internalOpen: boolean = false;
  @Event() ifxItemOpen: EventEmitter;
  @Event() ifxItemClose: EventEmitter;
  private contentEl!: HTMLElement;


  componentWillLoad() {
    this.internalOpen = this.open;
    if (!this.initialCollapse) {
      this.internalOpen = true;
    }
  }

  componentDidLoad() {
    this.openAccordionItem()
  }

  componentDidUpdate() {
    this.openAccordionItem()
  }



  @Watch('open')
  openChanged(newValue: boolean) {
    this.internalOpen = newValue;
  }

  toggleOpen() {
    this.internalOpen = !this.internalOpen;
    this.open = this.internalOpen;

    if (this.internalOpen) {
      this.ifxItemOpen.emit({ isOpen: this.internalOpen });
    } else {
      this.ifxItemClose.emit({ isClosed: !this.internalOpen });
    }
  }

  openAccordionItem() {
    if (this.internalOpen) {
      this.contentEl.style.maxHeight = `${this.contentEl.scrollHeight}px`;
    } else {
      this.contentEl.style.maxHeight = '0';
    }
  }

  handleSlotChange() {
    if (this.internalOpen) {
      this.openAccordionItem();
    }
  }
  render() {
    return (
      <div aria-label={this.caption} class={`accordion-item ${this.internalOpen ? 'open' : ''}`}>
        <div class="accordion-title" onClick={() => this.toggleOpen()}>
          <span class="accordion-icon">
            <ifx-icon icon="chevron-down-12" />
          </span>
          <span class="accordion-caption">{this.caption}</span>
        </div>
        <div class="accordion-content" ref={(el) => (this.contentEl = el as HTMLElement)}>
          <div class="inner-content">
            <slot onSlotchange={() => this.handleSlotChange()} />
          </div>
        </div>
      </div>
    );
  }
}
