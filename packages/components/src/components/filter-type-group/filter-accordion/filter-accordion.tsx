import { Component, h, Prop, State, Event, EventEmitter, Element } from '@stencil/core';
import { getInitiallySelectedItems } from '../utils';

@Component({
  tag: 'ifx-filter-accordion',
  styleUrl: 'filter-accordion.scss',
  shadow: true,
})
export class FilterAccordion {
  @Element() private el: HTMLElement;
  @State() expanded: boolean = false;
  @State() showMore = false;
  @State() count: number = 0;
  @State() totalItems = 0;
  @Prop() filterGroupName = "";

  @Event() ifxFilterAccordionChange: EventEmitter; // Add this line

  componentWillLoad() {
    this.el.addEventListener('ifxListChange', this.handleCheckedChange);
  }

  componentDidLoad() {
    // Dispatch the ifxListChange event after the component has been fully loaded
    const selectedItems = getInitiallySelectedItems(this.el);
    this.count = selectedItems.length;

  }

  handleCheckedChange = (event: CustomEvent) => {
    const selectedItems = event.detail.selectedItems;
    this.count = selectedItems.length;
    this.ifxFilterAccordionChange.emit({ filterGroupName: this.filterGroupName, selectedItems });
  }

  componentWillUnload() {
    this.el.removeEventListener('ifxListChange', this.handleCheckedChange);
  }

  getTotalItems() {
    return this.el.querySelectorAll('ifx-list-entry').length;
  }

  toggleAccordion = (event: MouseEvent) => {
    event.stopPropagation();
    this.expanded = !this.expanded;
  }

  toggleShowMore = (event: MouseEvent) => {
    event.stopPropagation();
    this.showMore = !this.showMore;
  }


  render() {

    return (
      <div class={`accordion ${this.showMore ? 'show-more' : ''}`}>
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