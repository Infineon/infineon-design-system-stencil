import { Component, h, Prop, State, Event, EventEmitter, Element } from '@stencil/core';
import { getInitiallySelectedItems } from '../utils';

@Component({
  tag: 'ifx-filter-accordion',
  styleUrl: 'filter-accordion.scss',
  shadow: true,
})
export class FilterAccordion {
  private initialized = false;
  @Element() private el: HTMLElement;
  @State() expanded: boolean = false;
  @Prop() maxVisibleItems: number;
  @State() count: number = 0;
  @State() totalItems = 0;

  @Prop() filterGroupName = "";

  @Event() ifxFilterAccordionChange: EventEmitter;

  componentWillLoad() {
    this.el.addEventListener('ifxListUpdate', this.handleCheckedChange);

  }

componentDidLoad() {
  if (!this.initialized) {
    const selectedItems = getInitiallySelectedItems(this.el);
    this.count = selectedItems.length;
    this.initialized = true; // Prevent further execution in future calls
  }
}


handleCheckedChange = (event: CustomEvent) => {
    const selectedItems = event.detail.selectedItems;
    this.count = selectedItems.length;
    this.ifxFilterAccordionChange.emit({ filterGroupName: this.filterGroupName, selectedItems });
  }

  componentWillUnload() {
    this.el.removeEventListener('ifxListUpdate', this.handleCheckedChange);
  }

  toggleAccordion = (event: MouseEvent) => {
    event.stopPropagation();
    this.expanded = !this.expanded;
  }

  render() {
    return (
      <div class={`accordion ${this.expanded ? 'expanded' : ''}`}>
        <div class="header" onClick={this.toggleAccordion}>
          <div class={`text-and-icon ${this.expanded ? 'expanded' : ''}`}>
            <div class="text">
              <span>{this.filterGroupName}</span>
              <ifx-number-indicator>{this.count}</ifx-number-indicator>
            </div>
            <ifx-icon
              class={this.expanded ? '' : 'hidden'}
              icon="minus-16"
              onClick={this.toggleAccordion}
            ></ifx-icon>
            <ifx-icon
              class={this.expanded ? 'hidden' : ''}
              icon="plus-16"
              onClick={this.toggleAccordion}
            ></ifx-icon>
          </div>
        </div>
        {this.expanded &&
          <div class="filter-accordion-container">
            <slot name="list"></slot>
          </div>
        }
      </div>
    );
  }
}