//ifxAccordionItem
import { Component, Prop, h, State, Event, EventEmitter, Watch, Listen } from '@stencil/core';

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
  @Prop() AriaLevel = 3;
  @State() internalOpen: boolean = false;
  @Event() ifxOpen: EventEmitter;
  @Event() ifxClose: EventEmitter;
  private contentEl!: HTMLElement;


  componentWillLoad() {
    this.internalOpen = this.open;
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
      this.ifxOpen.emit({ isOpen: this.internalOpen });
    } else {
      this.ifxClose.emit({ isClosed: !this.internalOpen });
    }
  }

  openAccordionItem() {
    if (this.internalOpen) {
      this.contentEl.style.maxHeight = `${this.contentEl.scrollHeight}px`;
    } else {
      this.contentEl.style.maxHeight = '0';
    }
  }

  handleSlotChange(e) {
    const slotElement = e.target;
    const nodes = slotElement.assignedNodes();
    
    if(nodes.length > 0) {
      nodes.forEach(node => {
        const observer = new MutationObserver((mutationsList, _) => {
          for(let mutation of mutationsList) {
            if (mutation.type === 'childList') {
              if (this.internalOpen) {
                this.openAccordionItem();
              }
            }
          }
        });
        observer.observe(node, { attributes: true, childList: true, subtree: true });
      });
    }

    if (this.internalOpen) {
      this.openAccordionItem();
    }
  }

  

  @Listen('keydown')
  handleKeydown(ev: KeyboardEvent) {
    switch (ev.key) {
      case 'Enter': // fallthrough
      case ' ': // space
        ev.preventDefault();
        this.toggleOpen();
        break;
    }
  }


  render() {
    return (
      <div class={`accordion-item ${this.internalOpen ? 'open' : ''}`}>
        <div role="button" aria-expanded={this.internalOpen} aria-controls="accordion-content" class="accordion-title" onClick={() => this.toggleOpen()} tabindex='0'>
          <span aria-hidden="true" role="heading" aria-level={String(this.AriaLevel) as string} class="accordion-icon">
            <ifx-icon icon="chevron-down-12"/>
          </span>
          <span id="accordion-caption" class="accordion-caption">{this.caption}</span>
        </div>
        <div id="accordion-content" class="accordion-content" ref={(el) => (this.contentEl = el as HTMLElement)} role="region" aria-labelledby="accordion-caption">
          <div class="inner-content">
            <slot onSlotchange={(e) => this.handleSlotChange(e)} />
          </div>
        </div>
      </div>
    );
  }
}