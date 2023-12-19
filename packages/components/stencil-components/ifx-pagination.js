import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$4 } from './infineonIconStencil.js';
import { d as defineCustomElement$3 } from './icon-button.js';
import { d as defineCustomElement$2 } from './select.js';

const paginationCss = "@charset \"UTF-8\";*{font-family:\"Source Sans 3\"}:host{display:inline-flex}.container{display:inline-flex;justify-content:center;align-items:center;gap:32px}.container .items__per-page-wrapper{display:flex;align-items:center;gap:16px}.container .items__per-page-wrapper .items__per-page-label{color:#1D1D1D;font-family:Source Sans 3;font-size:14px;font-style:normal;font-weight:600;line-height:20px}.container .items__per-page-wrapper .items__per-page-field{display:flex;flex-direction:column;align-items:flex-start}.container .items__per-page-wrapper .items__per-page-field ifx-select{width:92px}.container .items__total-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .items__total-button{display:flex;width:40px;height:40px;justify-content:center;align-items:center;border-radius:100px;border:1px solid #BFBBBB;background:#FFF}.container .items__total-wrapper .page__numbers-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item{display:flex;padding:6px;flex-direction:column;justify-content:center;align-items:center;gap:10px;border-radius:100px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active{background-color:#0A8276}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active span{color:#fff}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover{cursor:pointer}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover:not(.active){background-color:#ddd}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:active:not(.active){background-color:#575352}.container .items__total-wrapper .page__numbers-wrapper .page__number-item span{display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-family:Source Sans 3;font-size:13px;font-style:normal;font-weight:400;line-height:20px}.pagination{display:flex}.pagination ifx-icon-button:first-of-type{margin-right:12px}.pagination ifx-icon-button:last-of-type{margin-left:12px}a{padding:6px;border-radius:100px}ol{list-style-type:none;padding:0;margin:0;display:inline-flex;align-items:center;gap:12px}li{display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:100px}li:hover:not(.active) a{background-color:#EEEDED}li:active:not(.active) a{background-color:#575352;color:#fff}li.active{background-color:#0A8276}li.active a{color:#fff}li:hover{cursor:pointer}li a{text-decoration:none;display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-family:\"Source Sans 3\";font-size:13px;font-style:normal;font-weight:400;line-height:20px}.prev.disabled,.next.disabled{cursor:default}.prev.disabled:hover,.next.disabled:hover{cursor:default;text-decoration:none}.prev{margin-right:2.5px}.next{margin-left:2.5px}@media (min-width: 400px){li:first-child,li.active-sibling,li.active,li.active+li,li:last-child{display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8)~li{display:none}li:first-child:nth-last-child(n+8)~li.active-sibling:before{content:\"…\";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li.active+li:after{content:\"…\";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+5){display:inline-flex;flex-direction:row}li:first-child:nth-last-child(n+8)~li:nth-last-child(5):before{content:\"…\";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):after,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):after,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):before,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):after{display:none !important}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5){display:none}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5):before,li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5):before{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+5){display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+4):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+4):after{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(5):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(5):after{content:\"…\";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8).active:before,li:first-child:nth-last-child(n+8).active:after,li:first-child:nth-last-child(n+8)~li.active:before,li:first-child:nth-last-child(n+8)~li.active:after{display:none}}";

const Pagination = /*@__PURE__*/ proxyCustomElement(class Pagination extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ifxPageChange = createEvent(this, "ifxPageChange", 7);
    this.ifxNextPage = createEvent(this, "ifxNextPage", 7);
    this.ifxPrevPage = createEvent(this, "ifxPrevPage", 7);
    this.CLASS_DISABLED = "disabled";
    this.CLASS_ACTIVE = "active";
    this.CLASS_SIBLING_ACTIVE = "active-sibling";
    this.DATA_KEY = "pagination";
    this.currentPage = 0;
    this.internalPage = 1;
    this.itemsPerPage = 10;
    this.numberOfPages = [];
    this.total = 1;
  }
  setItemsPerPage(e) {
    this.itemsPerPage = parseInt(e.detail.label);
  }
  componentDidLoad() {
    this.calculateVisiblePageIndices();
    var paginationElement = this.el.shadowRoot.querySelector(".pagination");
    let leftArrow = paginationElement.querySelector('.prev');
    this.navigateSinglePage(leftArrow, true);
  }
  calculateNumberOfPages() {
    if (isNaN(this.currentPage)) {
      this.currentPage = 1;
    }
    const total = this.total <= this.itemsPerPage ? this.itemsPerPage : this.total;
    const itemsPerPage = this.itemsPerPage;
    const totalPageNumber = Math.ceil(total / itemsPerPage);
    if (this.currentPage <= 0) {
      this.internalPage = 1;
    }
    else if (this.currentPage > totalPageNumber) {
      this.internalPage = totalPageNumber;
    }
    else
      this.internalPage = this.currentPage;
    this.numberOfPages = Array.from({ length: totalPageNumber }, (_, index) => index + 1);
  }
  componentWillLoad() {
    this.calculateNumberOfPages();
  }
  componentDidUpdate() {
    var paginationElement = this.el.shadowRoot.querySelector(".pagination");
    var listItems = paginationElement.querySelectorAll("li");
    this.addEventListenersToPageItems(listItems, paginationElement);
    if (paginationElement.dataset[this.DATA_KEY] < this.numberOfPages) {
      paginationElement.dataset[this.DATA_KEY] = paginationElement.dataset[this.DATA_KEY];
    }
    else
      paginationElement.dataset[this.DATA_KEY] = 0;
    this.changePage(paginationElement, false);
  }
  componentWillUpdate() {
    this.calculateNumberOfPages();
  }
  handleEventEmission(currActive) {
    let currentPage = currActive + 1;
    let totalPages = this.numberOfPages.length;
    let prevPage = currActive === 0 ? null : currActive;
    let nextPage = currActive + 2 > totalPages ? null : currActive + 2;
    let itemsPerPage = this.itemsPerPage;
    this.ifxPageChange.emit({ currentPage, totalPages, prevPage, nextPage, itemsPerPage });
  }
  addEventListenersToPageItems(listItems, paginationContainer) {
    listItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        var parent = paginationContainer;
        let listItems = parent.querySelectorAll("li");
        parent.dataset[this.DATA_KEY] = Array.from(listItems).indexOf(e.currentTarget);
        this.changePage(parent, false);
      });
    });
  }
  initPagination(paginationContainer) {
    var listItems = paginationContainer.querySelectorAll("li");
    paginationContainer.dataset[this.DATA_KEY] = Array.from(listItems).indexOf(paginationContainer.querySelector(".active"));
    paginationContainer.querySelector(".prev").addEventListener("click", (e) => this.navigateSinglePage(e, false));
    paginationContainer.querySelector(".next").addEventListener("click", (e) => this.navigateSinglePage(e, false));
    this.addEventListenersToPageItems(listItems, paginationContainer);
  }
  navigateSinglePage(e, initialValue) {
    let el = e;
    if (typeof e.target === 'object') {
      el = e.target;
    }
    if (!el.classList.contains(this.CLASS_DISABLED)) {
      var parent = el.closest(".pagination");
      var currActive = parseInt(parent.dataset[this.DATA_KEY], 10);
      currActive += 1 * (el.classList.contains("prev") ? -1 : 1);
      if (currActive === -1) {
        currActive = 0;
      }
      parent.dataset[this.DATA_KEY] = currActive;
      this.changePage(parent, initialValue);
    }
  }
  changePage(pagination, initialValue) {
    const paginationContainer = pagination;
    var listItems = paginationContainer.querySelectorAll("li");
    var currActive = parseInt(paginationContainer.dataset[this.DATA_KEY], 10);
    listItems.forEach((item) => {
      item.classList.remove(this.CLASS_ACTIVE);
      item.classList.remove(this.CLASS_SIBLING_ACTIVE);
    });
    if (initialValue && this.internalPage > 1) {
      currActive = Math.floor(this.internalPage - 1);
      paginationContainer.dataset[this.DATA_KEY] = currActive;
    }
    this.handleEventEmission(currActive);
    listItems[currActive].classList.add(this.CLASS_ACTIVE);
    if (currActive === 0) {
      paginationContainer.querySelector(".prev").classList.add(this.CLASS_DISABLED);
      paginationContainer.querySelector(".prev").disabled = true;
    }
    else {
      listItems[currActive - 1].classList.add(this.CLASS_SIBLING_ACTIVE);
      paginationContainer.querySelector(".prev").classList.remove(this.CLASS_DISABLED);
      paginationContainer.querySelector(".prev").disabled = false;
    }
    if (currActive === (listItems.length - 1)) {
      paginationContainer.querySelector(".next").classList.add(this.CLASS_DISABLED);
      paginationContainer.querySelector(".next").disabled = true;
    }
    else {
      paginationContainer.querySelector(".next").classList.remove(this.CLASS_DISABLED);
      paginationContainer.querySelector(".next").disabled = false;
    }
  }
  calculateVisiblePageIndices() {
    var paginationElement = this.el.shadowRoot.querySelector(".pagination");
    this.initPagination(paginationElement);
  }
  render() {
    return (h("div", { "aria-label": 'a pagination', "aria-value": this.currentPage, class: "container" }, h("div", { class: 'items__per-page-wrapper' }, h("div", { class: 'items__per-page-label' }, "Results per Page"), h("div", { class: 'items__per-page-field' }, h("ifx-select", { type: 'single', value: 'undefined', "ifx-size": 's', placeholder: 'false', "search-enabled": 'false', "search-placeholder-value": 'Search...', "ifx-disabled": 'false', "ifx-error": 'false', "ifx-error-message": 'Error', "ifx-label": '', "ifx-placeholder-value": 'Placeholder', "ifx-options": '[{"value":"ten","label":"10","selected":true}, {"value":"Twenty","label":"20","selected":false}, {"value":"Thirty","label":"30","selected":false}]' }))), h("div", { class: 'items__total-wrapper' }, h("div", { class: 'page__numbers-wrapper' }, h("div", { class: "pagination" }, h("ifx-icon-button", { variant: 'secondary', class: "prev", color: 'primary', icon: 'arrow-left-24' }), h("ol", null, this.numberOfPages.map((item) => h("li", { class: `${this.internalPage === item ? 'active' : ""}` }, h("a", { href: undefined }, item)))), h("ifx-icon-button", { class: "next", variant: 'secondary', color: 'primary', icon: 'arrow-right-24' }))))));
  }
  get el() { return this; }
  static get style() { return paginationCss; }
}, [1, "ifx-pagination", {
    "currentPage": [2, "current-page"],
    "total": [2],
    "internalPage": [32],
    "itemsPerPage": [32],
    "numberOfPages": [32]
  }, [[0, "ifxSelect", "setItemsPerPage"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-pagination", "ifx-icon", "ifx-icon-button", "ifx-select"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-pagination":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Pagination);
      }
      break;
    case "ifx-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ifx-icon-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ifx-select":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IfxPagination = Pagination;
const defineCustomElement = defineCustomElement$1;

export { IfxPagination, defineCustomElement };

//# sourceMappingURL=ifx-pagination.js.map