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

  @Watch('internalPage')
  handleSurroundingPages() { 
    //this.calculateVisiblePageIndices()
  }

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

  // calculateVisiblePageIndices() {

  //   if(this.visiblePageIndices.length < 1) { 
  //     if(this.numberOfPages.length > 7 ) { 
  //       //truncate
  //       for(let i = 0; i < 7; i++) { 
  //         this.visiblePageIndices.push(i)
  //       }
  //     }
  //   }

  //     //do the algorithm here.
  //     let firstPageItem = 1;
  //     //let lastPageItem = this.visiblePageIndices.length;
  //     let currentPageItem = this.internalPage;
  //     let numberOfSurroundingPageItems = this.surroundingPageCount;
  //     let leftSideArray = []

  //     if((firstPageItem+1) < (currentPageItem-numberOfSurroundingPageItems)) { 
  //       leftSideArray = this.visiblePageIndices.slice(2, currentPageItem-numberOfSurroundingPageItems)
  //     }

  //     //now we need to replace that spot with an ellipsis. 
  //     console.log(leftSideArray)
  //   //[firstPage, leftArray, currentITem, rightArray, lastPage]
  //     // const startIdx = this.visiblePageIndices.indexOf(leftSideArray[0]);
  //     // const endIdx = this.visiblePageIndices.indexOf(leftSideArray[leftSideArray.length - 1]);
      
  //     // const newArray = this.visiblePageIndices.slice(0, startIdx).concat('...', this.visiblePageIndices.slice(endIdx + 1));

  //     //new array must be from the leftarray.length to -1 in slice 
  //     //visiblepageindicies.slie(leftSidearray.length, -1) this will give us the 
  //     //if leftsideArray is [2,3] and we are currentyly on page 5, and surrounding is 1, therefore, we have to 
  //     //remove from firsPage to 3, but we don't even need to remove, we just creat ea new array, that contains
  //     //[firstpage, ..., result of total.slice(LeftSideArray.length(3), -1)]
  //     //[1,..., 4,5,6,7]

      
  //     let slicedArray = this.visiblePageIndices.slice(leftSideArray.length, -1)
      
  //     console.log(slicedArray)
  //     let newArray = [firstPageItem, '...', ...slicedArray]
   
  //     //console.log('new array', newArray)

  //   // const visiblePages = this.numberOfPages.flatMap((label, i) => {
  //   //   if (this.internalPage === label) { 
  //   //     const currentItem = label;
  //   //     const leftSide = this.numberOfPages[currentItem - this.surroundingPageCount-1]; 
  //   //     const rightSide = this.numberOfPages[currentItem + this.surroundingPageCount-1];

  //   //     return [leftSide, currentItem, rightSide];
  //   //   } else {
  //   //     return null; 
  //   //   }
  //   // }).filter((pageInfo) => pageInfo !== null);
    
  //   //console.log('result', visiblePages)
  // }

 
  handleNavPageButtons(action) { 
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

  componentDidLoad() { 
   let pageItemsArray = this.getArrayOfPageItems()
   const navPageButtons = this.el.shadowRoot.querySelectorAll('.items__total-button');
   //this.addEventListeners(pageItemsArray, navPageButtons)
   //console.log(this.numberOfPages)
   this.newFunc()
  }

  componentWillLoad() { 
    if(this.currentPage <= 0) { 
      this.internalPage = 1;
    } else this.internalPage = this.currentPage;
    
    const total = this.total <= this.itemsPerPage ? this.itemsPerPage : this.total;
    const itemsPerPage = this.itemsPerPage;
    const totalPageNumber = total / itemsPerPage;
    this.numberOfPages = Array.from({ length: totalPageNumber }, (_, index) => index + 1);

    //this.calculateVisiblePageIndices()
  }



  newFunc() { 
    let self = this;
    var CLASS_DISABLED = "disabled",
    CLASS_ACTIVE = "active",
    CLASS_SIBLING_ACTIVE = "active-sibling",
    DATA_KEY = "pagination";

    var paginationElements = this.el.shadowRoot.querySelectorAll(".pagination");
    //console.log(paginationElements)
    paginationElements.forEach(initPagination);

    function initPagination(element) {
      
      element.dataset[DATA_KEY] = Array.from(element.querySelectorAll("li")).indexOf(element.querySelector(".active")); //original
    
      //element.dataset[DATA_KEY] = self.internalPage; //test new
      
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

        parent.dataset[DATA_KEY] = currActive; //currActive
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
          {/* <div class='items__total-button'>
            <ifx-icon-button variant='outline' class="prev disabled" color='primary' icon='arrow-left-24'></ifx-icon-button>
          </div> */}
          <div class='page__numbers-wrapper'>

          <div class="pagination">
            {/* <a href="#" class="prev disabled">Previous</a> */}
            <ifx-icon-button variant='outline' class="prev disabled" color='primary' icon='arrow-left-24'></ifx-icon-button>
            <ol>
              {this.numberOfPages.map((item, i) => 
              <li class={`${this.internalPage === item? 'active' : ""}`}><a href={undefined}>{item}</a></li>)}
            </ol>
            {/* <a href="#" class="next">Next</a> */}
            <ifx-icon-button class="next" variant='outline' color='primary' icon='arrow-right-24'></ifx-icon-button>
          </div>
            
          {/* {this.numberOfPages.map((_, i) => 
            <div class='page__number-item'>
              <span>{i+1}</span>
            </div>)} */}

          </div>
           {/* <div class='items__total-button'>
            <ifx-icon-button class="next" variant='outline' color='primary' icon='arrow-right-24'></ifx-icon-button>
           </div> */}
        </div>
      </div>
    );
  }
}