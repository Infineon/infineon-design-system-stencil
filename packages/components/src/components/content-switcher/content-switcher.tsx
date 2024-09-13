import { Component, h, Element, Event, EventEmitter, Host, Prop, State } from '@stencil/core';

type SwitchEvent = { oldIndex: number; newIndex: number };

@Component({
  tag: 'ifx-content-switcher',
  styleUrl: './content-switcher.scss',
  shadow: true,
})
export class ContentSwitcher {
  @Element() el: HTMLElement;
  @Prop() selected: boolean = false;

  @State() items: Element[];
  @State() activeIndex = -1;

  @Event() ifxSwitch: EventEmitter<SwitchEvent>;

  private eventHandlers: Map<Element, (event: Event) => void> = new Map();

  async componentDidLoad() {
    this.items = Array.from(this.el.children);
    
    // Filter to only one selected item
    for (let item of this.items) {
      if (item.hasAttribute("selected")) {
        if (this.activeIndex < 0) {
          this.activeIndex = this.items.indexOf(item);
        } else {
          item.removeAttribute("selected");
        }
      }
    }

    // Register Event Handlers and filter to only one selected item
    for (let item of this.items) {
      const handler = (event: Event) => {
        if (!(event.target instanceof window.Element)) return;
        const element: Element = event.target as Element;
        const index = this.items.indexOf(element as HTMLElement);
        if (index !== -1) {
          this.selectItem(index);
        }
      };
      item.addEventListener('click', handler);
      this.eventHandlers.set(item, handler);
    }
  }

  disconnectedCallback() {
    // Remove Event Handlers
    for (let [item, handler] of this.eventHandlers.entries()) {
      item.removeEventListener('click', handler);
    }
    this.eventHandlers.clear();
  }

  async selectItem(index: number) {
    if (index == this.activeIndex) return;

    this.items[this.activeIndex].removeAttribute('selected');
    this.items[index].setAttribute('selected', 'true');
    this.ifxSwitch.emit({ oldIndex: this.activeIndex, newIndex: index });
    this.activeIndex = index;
  }

  render() {
    return (
      <Host>
        <div class="ifx-content-switcher dividers" role="group">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
