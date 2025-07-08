//ifxAccordionItem
import { Component, Prop, h, State, Event, EventEmitter, Watch, Listen, Element } from '@stencil/core';

@Component({
  tag: 'ifx-accordion-item',
  styleUrl: 'accordionItem.scss',
  shadow: true,
})
export class IfxAccordionItem {
  @Element() el;
  @Prop() caption: string;
  @Prop({
    mutable: true,
  }) open: boolean = false;
  @Prop() AriaLevel = 3;
  @State() internalOpen: boolean = false;
  @Event() ifxOpen: EventEmitter;
  @Event() ifxClose: EventEmitter;
  private contentEl!: HTMLElement;
  private titleEl!: HTMLElement;
  private resizeObserver!: ResizeObserver;

  componentWillLoad() {
    this.internalOpen = this.open;
  }

  componentDidLoad() {
    this.openAccordionItem()

     this.contentEl = this.el.shadowRoot.querySelector('#accordion-content');
      if (this.contentEl) {
        this.attachResizeObserver();
      }
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
    if (this.contentEl) {
      if (this.internalOpen) {
      this.contentEl.style.height = 'auto'; 
      const updatedHeight = this.contentEl.scrollHeight; 
      this.contentEl.style.height = `${updatedHeight}px`; 
        this.contentEl.style.overflow = 'visible';
      } else {
        this.contentEl.style.height = '0';
        this.contentEl.style.overflow = 'hidden';
      }
    }
  }

  attachResizeObserver() { 
    const innerContentEl = this.el.shadowRoot.querySelector('.inner-content');

    if (innerContentEl) {
      this.resizeObserver = new ResizeObserver(() => {
        if (this.internalOpen) {
          this.openAccordionItem();
        }
      });

      this.resizeObserver.observe(innerContentEl); 
    }
  }

  @Listen('keydown')
  handleKeydown(ev: KeyboardEvent) {
    const path = ev.composedPath();

    if(!path.includes(this.titleEl)) { 
      return;
    }

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
        <div role="button" aria-expanded={this.internalOpen} aria-controls="accordion-content" class="accordion-title" onClick={() => this.toggleOpen()} tabindex='0' ref={(el) => (this.titleEl = el as HTMLElement)}>
          <span aria-hidden="true" role="heading" aria-level={String(this.AriaLevel) as string} class="accordion-icon">
            <ifx-icon icon="chevron-down-16"/>
          </span>
          <span id="accordion-caption" class="accordion-caption">{this.caption}</span>
        </div>
        <div id="accordion-content" class="accordion-content" ref={(el) => (this.contentEl = el as HTMLElement)} role="region" aria-labelledby="accordion-caption">
          <div class="inner-content">
            <slot />
          </div>
        </div>
      </div>
    );
  }
}