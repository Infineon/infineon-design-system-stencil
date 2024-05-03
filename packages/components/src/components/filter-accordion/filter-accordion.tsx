import { Component, h, State, Element } from '@stencil/core';

@Component({
  tag: 'ifx-filter-accordion',
  styleUrl: 'filter-accordion.scss',
  shadow: true,
})
export class FilterAccordion {
  @Element() private el: HTMLElement;
  @State() expanded: boolean = false;
  @State() showMore = false;
  @State() selectedCount: number = 0;
  @State() totalItems = 0;
  @Prop() filterGroupName = "";

  componentWillLoad() {
    this.el.addEventListener('ifxFilterEntryChange', this.handleCheckedChange);
    // Calculate the initial selectedCount
    this.handleCheckedChange();
  }

  componentDidLoad() {
    this.totalItems = this.el.querySelectorAll('ifx-filter-entry').length;
  }

  componentWillUnload() {
    this.el.removeEventListener('ifxFilterEntryChange', this.handleCheckedChange);
  }

  toggleAccordion = (event: MouseEvent) => {
    event.stopPropagation();
    this.expanded = !this.expanded;
  }

  toggleShowMore = (event: MouseEvent) => {
    event.stopPropagation();
    this.showMore = !this.showMore;
  }

  handleCheckedChange = () => {
    this.selectedCount = Array.from(this.el.querySelectorAll('ifx-filter-entry'))
      .filter(entry => {
        return entry.getAttribute('value') === 'true'
      }).length;
  }

  render() {
    const remainingItems = this.totalItems - 6;

    return (
      <div class={`accordion ${this.expanded ? 'expanded' : ''} ${this.showMore ? 'show-more' : ''}`}>
        <div class="header" onClick={this.toggleAccordion}>
          <div class="text-and-icon">
            <div class="text">
              <span>{this.filterGroupName}</span>
              <ifx-number-indicator>{this.selectedCount}</ifx-number-indicator>
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
            <slot></slot>
            <div class="link" onClick={this.toggleShowMore}>
              <ifx-icon key={this.showMore.toString()} icon={this.showMore ? 'chevron-up-12' : 'chevron-down-12'} />              <ifx-link href="" target="_blank" size="m" variant="underlined" disabled={false} >
                {this.showMore ? 'Show less' : `Show ${remainingItems} more`}
              </ifx-link>
            </div>
          </div>
        }
      </div>
    );
  }
}

function Prop(): (target: FilterAccordion, propertyKey: "filterGroupName") => void {
  throw new Error('Function not implemented.');
}
