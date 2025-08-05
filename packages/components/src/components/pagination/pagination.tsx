import { Component, h, Element, Event, EventEmitter, Prop, State, Listen } from '@stencil/core';
import { trackComponent } from '../../global/utils/tracking';
import { isNestedInIfxComponent } from '../../global/utils/dom-utils';
import { detectFramework } from '../../global/utils/framework-detection';

@Component({
  tag: 'ifx-pagination',
  styleUrl: 'pagination.scss',
  shadow: true
})
export class Pagination {
  @Element() el: HTMLElement;
  @Event() ifxPageChange: EventEmitter;
  @Prop() currentPage: number = 1;
  @State() internalPage: number = 1;
  @State() internalItemsPerPage: number = 10;
  @State() numberOfPages: number[] = [];
  @Prop() total: number = 1;
  @Prop() itemsPerPage: any[] | string;
  @State() filteredItemsPerPage: any[] = [];
  @State() visiblePages: (number | string)[] = [];

  private CLASS_DISABLED = "disabled";
  private CLASS_ACTIVE = "active";
  private prevInternalPage: number;

    @Listen('ifxSelect')
    setItemsPerPage(e: CustomEvent) {
      const selectedValue = e.detail?.value || e.detail?.label; 
      const newItemsPerPage = parseInt(selectedValue) || 10;

      if (newItemsPerPage === this.internalItemsPerPage) {
        return;
      }

      this.internalItemsPerPage = newItemsPerPage;
      this.internalPage = 1; 
      this.calculateNumberOfPages();
      this.updateVisiblePages();
      this.handleEventEmission();
    }

  componentDidLoad() {
    if(!isNestedInIfxComponent(this.el)) { 
      const framework = detectFramework();
      trackComponent('ifx-pagination', framework)
    }
    this.initPagination();
  }

  updateVisiblePages() {
    const buffer = 2;
    const totalPages = this.numberOfPages.length;
    const current = this.internalPage;
    let pages: (number | string)[] = [];
  
    if (totalPages <= 5) {
      pages = [...this.numberOfPages];
    } else {
      pages.push(1);
  
      if (current > buffer + 1) pages.push('...');
  
      let start = Math.max(2, current - buffer);
      let end = Math.min(totalPages - 1, current + buffer);
  
      if (current <= buffer + 1) end = buffer * 2 + 1;
      if (current >= totalPages - buffer) start = totalPages - buffer * 2;
  
      for (let i = start; i <= end; i++) pages.push(i);
  
      if (current < totalPages - buffer) pages.push('...');
      pages.push(totalPages);
    }
  
    this.visiblePages = [...new Set(pages)];
  }

  calculateNumberOfPages() {
    const totalPages = Math.ceil(this.total / this.internalItemsPerPage);
    this.numberOfPages = Array.from({ length: totalPages }, (_, i) => i + 1);
    this.internalPage = Math.max(1, Math.min(this.currentPage, totalPages));
  }

  filterOptionsArray() { 
    const items = typeof this.itemsPerPage === 'string' ? 
      JSON.parse(this.itemsPerPage) : this.itemsPerPage;
    this.filteredItemsPerPage = items.map(item => ({
      ...item,
      label: item.label || item.value
    }));
  }

  componentWillLoad() {
    this.calculateNumberOfPages();
    this.filterOptionsArray();
    this.updateVisiblePages();
  }

  componentWillUpdate() { 
     if (this.prevInternalPage !== this.internalPage) {
      this.updateVisiblePages();
      this.prevInternalPage = this.internalPage;
    }
  }

  componentDidUpdate() {
    this.initPagination();
  }

  handleEventEmission() {
    this.ifxPageChange.emit({
      currentPage: this.internalPage,
      totalPages: this.numberOfPages.length,
      itemsPerPage: this.internalItemsPerPage
    });
  }

  initPagination() {
    const pagination = this.el.shadowRoot.querySelector('.pagination');
    if (!pagination) return;

    const updateButtons = () => {
      const prev = pagination.querySelector<HTMLButtonElement>('.prev');
      const next = pagination.querySelector<HTMLButtonElement>('.next');
      if (prev) {
        prev.disabled = this.internalPage === 1;
        prev.classList.toggle(this.CLASS_DISABLED, this.internalPage === 1);
      }
      if (next) {
        next.disabled = this.internalPage === this.numberOfPages.length;
        next.classList.toggle(this.CLASS_DISABLED, this.internalPage === this.numberOfPages.length);
      }
    };

    pagination.querySelectorAll('li').forEach(li => {
      li.removeEventListener('click', this.handlePageClick);
      li.addEventListener('click', this.handlePageClick);
    });

    updateButtons();
  }

  private handlePageClick = (e: Event) => {
    const li = e.currentTarget as HTMLLIElement;
    const page = parseInt(li.dataset.page);
    if (!isNaN(page)) this.changePage(page);
  };

  changePage(newPage: number) {
    newPage = Math.max(1, Math.min(newPage, this.numberOfPages.length));
    if (newPage === this.internalPage) return;
    
    this.internalPage = newPage;
    this.handleEventEmission();
    this.initPagination();
  }

  render() {
    return (
      <div class="container">
        <div class="items__per-page-wrapper">
          <div class="items__per-page-label">Results per Page</div>
          <div class="items__per-page-field">
            <ifx-select
              placeholder='false'
              show-search='false'
              value={undefined}
              disabled={false}
              error={false}
              size="s"
              options={this.filteredItemsPerPage}
              placeholder-value="Select"
            ></ifx-select>
          </div>
        </div>
        
        <div class="items__total-wrapper">
          <div class="pagination">
            <ifx-icon-button
              class="prev"
              icon="arrow-left-16"
              onClick={() => this.changePage(this.internalPage - 1)}
            ></ifx-icon-button>
            
            <ol>
            {this.visiblePages.map((page, i) => typeof page === 'number' ? (
              <li 
                key={`page-${page}`}
                class={{ [this.CLASS_ACTIVE]: page === this.internalPage }}
                data-page={page}
              >
                <a href="javascript:void(0)">{page}</a>
              </li>
            ) : (
              <li class="ellipsis" key={`ellipsis-${i}`}>
                <span>...</span>
              </li>
            ))}
            </ol>
            
            <ifx-icon-button
              class="next"
              icon="arrow-right-16"
              onClick={() => this.changePage(this.internalPage + 1)}
            ></ifx-icon-button>
          </div>
        </div>
      </div>
    );
  }
}