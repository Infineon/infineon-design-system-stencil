import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'ifx-filter-accordion',
  styleUrl: 'filter-accordion.scss',
  shadow: true,
})
export class FilterAccordion {
  @State() expanded: boolean = false;

  toggleAccordion = (event: MouseEvent) => {
    event.stopPropagation();
    this.expanded = !this.expanded;
  }

  render() {
    return (
      <div class={`accordion ${this.expanded ? 'expanded' : ''}`}>
        <div class="header" onClick={this.toggleAccordion}>
          <div class="text-and-icon">
            <span class="text">Filter Group Name</span>
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
            <slot></slot>
          </div>
        }
      </div>
    );
  }
}