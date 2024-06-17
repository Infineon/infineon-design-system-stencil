import { Component, h, Prop, State, Event, EventEmitter, Element, Watch } from '@stencil/core';

@Component({
  tag: 'ifx-list',
  styleUrl: 'list.scss',
  shadow: true,
})
export class List {
  @Element() private el: HTMLElement;
  @State() expanded: boolean = false;
  @State() showMore = false;
  @State() selectedCount: number = 0;
  @State() totalItems = 0;
  @Prop() name = "";
  @Prop() maxVisibleItems = 6;
  @Prop() type: string;

  @Event() ifxListUpdate: EventEmitter;

  observer: MutationObserver;

  @Watch('type')
  handleTypeChange(newType: string) {
    const listEntries = Array.from(this.el.querySelectorAll('ifx-list-entry'));
    listEntries.forEach(entry => entry.setAttribute('type', newType));
  }


  componentWillLoad() {
    this.el.addEventListener('ifxListEntryChange', this.handleCheckedChange);
    this.selectedCount = this.getSelectedItems(this.el).length;
    this.totalItems = this.getTotalItems();

    this.handleTypeChange(this.type);

    // If the list type is 'radio-button' and more than one item is preselected, deselect all items
    if (this.type === 'radio-button' && this.selectedCount > 1) {
      const selectedItems = this.getSelectedItems(this.el);
      // Keep the first one selected and deselect the others
      selectedItems.slice(1).forEach(item => item.element.setAttribute('value', 'false'));
      // Or deselect all items
      // selectedItems.forEach(item => item.element.setAttribute('value', 'false'));
      this.selectedCount = this.getSelectedItems(this.el).length;
    }
    this.observer = new MutationObserver(() => {
      const newTotalItems = this.getTotalItems();
      if (newTotalItems !== this.totalItems) {
        this.totalItems = newTotalItems;
        this.handleCheckedChange();
      }
      this.handleTypeChange(this.type);

    });

    this.observer.observe(this.el, { childList: true });
  }


  disconnectedCallback() {
    this.el.removeEventListener('ifxListEntryChange', this.handleCheckedChange);
    this.observer.disconnect();
  }

  getTotalItems() {
    return this.el.querySelectorAll('ifx-list-entry').length;
  }


  toggleList = (event: MouseEvent) => {
    event.stopPropagation();
    this.expanded = !this.expanded;
  }

  toggleShowMore = (event: MouseEvent) => {
    event.stopPropagation();
    this.showMore = !this.showMore;
  }

  getSelectedItems(el: HTMLElement) {
    return Array.from(el.querySelectorAll('ifx-list-entry'))
      .filter(entry => entry.getAttribute('value') === 'true')
      .map(entry => ({
        label: entry.getAttribute('label'),
        value: entry.getAttribute('value'),
        type: entry.getAttribute('type'),
        element: entry
      }));
  }

  handleCheckedChange = (event?: CustomEvent) => {
    // If the type of the changed entry is 'radio-button' and its value is true, deselect all other radio buttons
    if (event && event.detail.type === 'radio-button' && event.detail.value) {
      const otherRadioButtons = Array.from(this.el.querySelectorAll('ifx-list-entry'))
        .filter(entry => entry.getAttribute('type') === 'radio-button' && entry !== event.target);
      otherRadioButtons.forEach(radioButton => radioButton.setAttribute('value', 'false'));
    }

    const selectedItems = this.getSelectedItems(this.el);
    this.selectedCount = selectedItems.length;

    this.ifxListUpdate.emit({ name: this.name, selectedItems });
  }

  render() {
    const listEntries = Array.from(this.el.querySelectorAll('ifx-list-entry'));
    const visibleItems = this.showMore ? listEntries : listEntries.slice(0, this.maxVisibleItems);
    const remainingItems = listEntries.length - visibleItems.length;
 
    return (
      <div class="list-wrapper">
        {visibleItems.map(entry => <slot name={entry.getAttribute('slot')}></slot>)}
        {(remainingItems > 0 || this.showMore) && (
          <div class="link-wrapper" onClick={this.toggleShowMore}>
            <ifx-icon key={this.showMore.toString()} icon={this.showMore ? 'chevron-up-12' : 'chevron-down-12'} />
            <ifx-link size="s" href="" target="_blank" variant="underlined" disabled={false} >
              {this.showMore ? 'Show less' : `Show ${remainingItems} more`}
            </ifx-link>
          </div>
        )}
      </div>
    );
  }
}