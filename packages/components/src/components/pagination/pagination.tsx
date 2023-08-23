import { Component, h, Element, Event, EventEmitter, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'ifx-pagination',
  styleUrl: 'pagination.scss',
  shadow: true
})
export class Pagination {
  @Element() el;
  @Event() ifxPageChange: EventEmitter;
  @Event() ifxNextPage: EventEmitter;
  @Event() ifxPrevPage: EventEmitter;
  @Prop() currentPage: number = 0;
  @State() internalPage: number = 1;
  @Prop() itemsPerPage: number = 1;
  @State() numberOfPages: number[] = [];
  @Prop() total: number = 1;
  @Prop() surroundingPageCount: number = 1;
  @State() visiblePageIndices: Array<number | string> = [];


  @Watch('ifxSelect')
  setItemsPerPage(e) { 
    //this.itemsPerPage = e.detail;
  }

  exampleFunction() { 
    console.log('test')
  }

  componentDidLoad() { 
   this.calculateVisiblePageIndices()
  }

  componentWillLoad() { 
    if(this.currentPage <= 0) { 
      this.internalPage = 1;
    } else this.internalPage = this.currentPage;
    
    const total = this.total <= this.itemsPerPage ? this.itemsPerPage : this.total;
    const itemsPerPage = this.itemsPerPage;
    const totalPageNumber = total / itemsPerPage;
    this.numberOfPages = Array.from({ length: totalPageNumber }, (_, index) => index + 1);
  }


  calculateVisiblePageIndices() { 
    let self = this;
    var CLASS_DISABLED = "disabled",
    CLASS_ACTIVE = "active",
    CLASS_SIBLING_ACTIVE = "active-sibling",
    DATA_KEY = "pagination";

    var paginationElements = this.el.shadowRoot.querySelectorAll(".pagination");
    paginationElements.forEach(initPagination);

    function initPagination(element) {
      
      element.dataset[DATA_KEY] = Array.from(element.querySelectorAll("li")).indexOf(element.querySelector(".active")); 
    
      element.querySelector(".prev").addEventListener("click", navigateSinglePage);
      element.querySelector(".next").addEventListener("click", navigateSinglePage);
      var listItems = element.querySelectorAll("li");
      listItems.forEach(function(item) {
        item.addEventListener("click", function() {
          var parent = this.closest(".pagination");
          parent.dataset[DATA_KEY] = Array.from(parent.querySelectorAll("li")).indexOf(this);
          changePage.apply(parent);
        });
      });
    }

    function navigateSinglePage() {
      if (!this.classList.contains(CLASS_DISABLED)) {
        var parent = this.closest(".pagination");
        var currActive = parseInt(parent.dataset[DATA_KEY], 10);

        currActive += 1 * (this.classList.contains("prev") ? -1 : 1);

        parent.dataset[DATA_KEY] = currActive;
        changePage.apply(parent);
      }
    }

    function changePage() {
      var listItems = this.querySelectorAll("li");
      var currActive = parseInt(this.dataset[DATA_KEY], 10);

      let currentPage = currActive+1;
      let totalPages = self.numberOfPages.length;
      let prevPage = currActive;
      let nextPage = currActive+2;

      self.ifxPageChange.emit({currentPage, totalPages, prevPage, nextPage})

      listItems.forEach(function(item) {
        item.classList.remove(CLASS_ACTIVE);
        item.classList.remove(CLASS_SIBLING_ACTIVE);
      });
      
      listItems[currActive].classList.add(CLASS_ACTIVE);

      if (currActive === 0) {
        this.querySelector(".prev").classList.add(CLASS_DISABLED);
      } else {
        listItems[currActive - 1].classList.add(CLASS_SIBLING_ACTIVE);
        this.querySelector(".prev").classList.remove(CLASS_DISABLED);
      }

      if (currActive === (listItems.length - 1)) {
        this.querySelector(".next").classList.add(CLASS_DISABLED);
      } else {
        this.querySelector(".next").classList.remove(CLASS_DISABLED);
      }
    }
  }

  render() {
    return (
      <div class="container">
        <div class='items__per-page-wrapper'>
          <div class='items__per-page-label'>Results per Page</div>
          <div class='items__per-page-field'>
           <select name="items-per-page" id="items-per-page">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
           </select>
          </div>
        </div>
        <div class='items__total-wrapper'>
          <div class='page__numbers-wrapper'>
          <div class="pagination">
            <ifx-icon-button variant='outline' class="prev disabled" color='primary' icon='arrow-left-24'></ifx-icon-button>
            <ol>
              {this.numberOfPages.map((item, i) => 
              <li class={`${this.internalPage === item? 'active' : ""}`}><a href={undefined}>{item}</a></li>)}
            </ol>
            <ifx-icon-button class="next" variant='outline' color='primary' icon='arrow-right-24'></ifx-icon-button>
          </div>
          </div>
        </div>
      </div>
    );
  }
}