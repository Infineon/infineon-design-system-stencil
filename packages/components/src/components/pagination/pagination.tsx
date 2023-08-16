import { Component, h, Element, Event, EventEmitter, Prop, State } from '@stencil/core';

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
  @State() visiblePageIndices: number[] = [];

  handleEventEmission(currentItem, pageItemsArray) { 
    let currentPage = parseInt(currentItem.childNodes[0].textContent);
    let totalPages = pageItemsArray.length;
    let prevPage = isNaN(parseInt(pageItemsArray[currentPage-2]?.childNodes[0].textContent)) ? false : parseInt(pageItemsArray[currentPage-2]?.childNodes[0].textContent);
    let nextPage = isNaN(parseInt(pageItemsArray[currentPage]?.childNodes[0].textContent)) ? false : parseInt(pageItemsArray[currentPage]?.childNodes[0].textContent)

    this.ifxPageChange.emit({currentPage, totalPages, prevPage, nextPage})
  }

  toggleActiveClass(currentItem, pageItemsArray) {
    for(let i = 0; i < pageItemsArray.length; i++) { 
      let pageNumberItem = (pageItemsArray[i] as HTMLElement);
      pageNumberItem.classList.remove('active')
    }
    currentItem.classList.add('active')
    this.handleEventEmission(currentItem, pageItemsArray)
  }

  getArrayOfPageItems() { 
    const pageItemsWrapper = this.el.shadowRoot.querySelector('.page__numbers-wrapper');
    let pageItemsArray = Array.from(pageItemsWrapper.children)
    return pageItemsArray;
  }

  handleNavPageButtons(action) { 
    //const pageItemsWrapper = this.el.shadowRoot.querySelector('.page__numbers-wrapper');
    let pageItemsArray = this.getArrayOfPageItems()

    if(this.internalPage > pageItemsArray.length) { 
      this.internalPage = pageItemsArray.length;
    } 

    if (action === 'increment') {
      this.internalPage += 1;
    } else if(action === 'decrement') {
      this.internalPage -= 1;
    }
  }

  addEventListeners(pageItemsArray, navPageButtons) { 
    //let pageItemsArray = Array.from(pageItemsWrapper.children)
    let navPageButtonsArray = Array.from(navPageButtons)
    let navPageLeftButton =  navPageButtonsArray[0] as HTMLElement;
    let navPageRightButton =  navPageButtonsArray[1] as HTMLElement;
 
    for(let i = 0; i < pageItemsArray.length; i++) { 
      let pageNumberItem = (pageItemsArray[i] as HTMLElement);
      pageNumberItem.addEventListener('click', () => {
        let currentPage = parseInt(pageNumberItem.childNodes[0].textContent);
        this.internalPage = currentPage === 0 ? currentPage + 1 : currentPage;
        this.toggleActiveClass(pageNumberItem, pageItemsArray)
      })
    }
    
    let currentPageIndex = this.internalPage-1;

    if(this.internalPage > pageItemsArray.length) { 
      currentPageIndex = pageItemsArray.length-1;
    } 
  
    this.toggleActiveClass(pageItemsArray[currentPageIndex], pageItemsArray)

    navPageLeftButton.addEventListener('click', () => {
      if (this.internalPage-1 > 0) {
        this.handleNavPageButtons('decrement');
        this.toggleActiveClass(pageItemsArray[this.internalPage-1], pageItemsArray);
      }
    });
  
    navPageRightButton.addEventListener('click', () => {
      if (this.internalPage < pageItemsArray.length) {
        this.handleNavPageButtons('increment');
        const index = this.internalPage === 0 ? this.internalPage : this.internalPage-1
        this.toggleActiveClass(pageItemsArray[index], pageItemsArray);
      }
    });
  }

  calculateVisiblePageIndices() {
    const startIndex = Math.max(0, this.internalPage - this.surroundingPageCount);
    const endIndex = Math.min(
      this.numberOfPages.length - 1,
      this.internalPage + this.surroundingPageCount
    );

    this.visiblePageIndices = Array.from(
      { length: endIndex - startIndex + 1 },
      (_, index) => startIndex + index
    );
  }


  componentDidLoad() { 
   let pageItemsArray = this.getArrayOfPageItems()
   const navPageButtons = this.el.shadowRoot.querySelectorAll('.items__total-button');
   this.addEventListeners(pageItemsArray, navPageButtons)
   //this.calculateVisiblePageIndices();
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
          <div class='items__total-button'>
            <ifx-icon-button variant='outline' color='primary' icon='arrow-left-24'></ifx-icon-button>
          </div>
          <div class='page__numbers-wrapper'>
            
          {this.numberOfPages.map((_, i) => 
            <div class='page__number-item'>
              <span>{i+1}</span>
            </div>)}
            {/* <div class='page__number-item'>
              <span>1</span>
            </div>
            <div class='page__number-item'>
              <span>2</span>
            </div>
            <div class='page__number-item'>
              <span>3</span>
            </div> */}
          </div>
           <div class='items__total-button'>
            <ifx-icon-button variant='outline' color='primary' icon='arrow-right-24'></ifx-icon-button>
           </div>
        </div>
      </div>
    );
  }
}