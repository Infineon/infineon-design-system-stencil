"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[9607],{9607:function(e,t,i){i.r(t),i.d(t,{ifx_pagination:function(){return r}});var a=i(5671),n=i(3144),l=i(929),r=function(){function e(t){(0,a.Z)(this,e),(0,l.r)(this,t),this.ifxPageChange=(0,l.c)(this,"ifxPageChange",7),this.ifxNextPage=(0,l.c)(this,"ifxNextPage",7),this.ifxPrevPage=(0,l.c)(this,"ifxPrevPage",7),this.CLASS_DISABLED="disabled",this.CLASS_ACTIVE="active",this.CLASS_SIBLING_ACTIVE="active-sibling",this.DATA_KEY="pagination",this.currentPage=0,this.internalPage=1,this.itemsPerPage=10,this.numberOfPages=[],this.total=1}return(0,n.Z)(e,[{key:"setItemsPerPage",value:function(e){this.itemsPerPage=parseInt(e.detail.label)}},{key:"componentDidLoad",value:function(){this.calculateVisiblePageIndices();var e=this.el.shadowRoot.querySelector(".pagination").querySelector(".prev");this.navigateSinglePage(e,!0)}},{key:"calculateNumberOfPages",value:function(){isNaN(this.currentPage)&&(this.currentPage=1);var e=(this.total<=this.itemsPerPage?this.itemsPerPage:this.total)/this.itemsPerPage;this.currentPage<=0?this.internalPage=1:this.currentPage>e?this.internalPage=e:this.internalPage=this.currentPage,this.numberOfPages=Array.from({length:e},(function(e,t){return t+1}))}},{key:"componentWillLoad",value:function(){this.calculateNumberOfPages()}},{key:"componentDidUpdate",value:function(){var e=this.el.shadowRoot.querySelector(".pagination"),t=e.querySelectorAll("li");this.addEventListenersToPageItems(t,e),e.dataset[this.DATA_KEY]<this.numberOfPages?e.dataset[this.DATA_KEY]=e.dataset[this.DATA_KEY]:e.dataset[this.DATA_KEY]=0,this.changePage(e,!1)}},{key:"componentWillUpdate",value:function(){this.calculateNumberOfPages()}},{key:"handleEventEmission",value:function(e){var t=e+1,i=this.numberOfPages.length,a=0===e?null:e,n=e+2>i?null:e+2,l=this.itemsPerPage;this.ifxPageChange.emit({currentPage:t,totalPages:i,prevPage:a,nextPage:n,itemsPerPage:l})}},{key:"addEventListenersToPageItems",value:function(e,t){var i=this;e.forEach((function(e){e.addEventListener("click",(function(e){var a=t,n=a.querySelectorAll("li");a.dataset[i.DATA_KEY]=Array.from(n).indexOf(e.currentTarget),i.changePage(a,!1)}))}))}},{key:"initPagination",value:function(e){var t=this,i=e.querySelectorAll("li");e.dataset[this.DATA_KEY]=Array.from(i).indexOf(e.querySelector(".active")),e.querySelector(".prev").addEventListener("click",(function(e){return t.navigateSinglePage(e,!1)})),e.querySelector(".next").addEventListener("click",(function(e){return t.navigateSinglePage(e,!1)})),this.addEventListenersToPageItems(i,e)}},{key:"navigateSinglePage",value:function(e,t){var i=e;if("object"===typeof e.target&&(i=e.target),!i.classList.contains(this.CLASS_DISABLED)){var a=i.closest(".pagination"),n=parseInt(a.dataset[this.DATA_KEY],10);-1===(n+=1*(i.classList.contains("prev")?-1:1))&&(n=0),a.dataset[this.DATA_KEY]=n,this.changePage(a,t)}}},{key:"changePage",value:function(e,t){var i=this,a=e,n=a.querySelectorAll("li"),l=parseInt(a.dataset[this.DATA_KEY],10);n.forEach((function(e){e.classList.remove(i.CLASS_ACTIVE),e.classList.remove(i.CLASS_SIBLING_ACTIVE)})),t&&this.internalPage>1&&(l=Math.floor(this.internalPage-1),a.dataset[this.DATA_KEY]=l),this.handleEventEmission(l),n[l].classList.add(this.CLASS_ACTIVE),0===l?(a.querySelector(".prev").classList.add(this.CLASS_DISABLED),a.querySelector(".prev").disabled=!0):(n[l-1].classList.add(this.CLASS_SIBLING_ACTIVE),a.querySelector(".prev").classList.remove(this.CLASS_DISABLED),a.querySelector(".prev").disabled=!1),l===n.length-1?(a.querySelector(".next").classList.add(this.CLASS_DISABLED),a.querySelector(".next").disabled=!0):(a.querySelector(".next").classList.remove(this.CLASS_DISABLED),a.querySelector(".next").disabled=!1)}},{key:"calculateVisiblePageIndices",value:function(){var e=this.el.shadowRoot.querySelector(".pagination");this.initPagination(e)}},{key:"render",value:function(){var e=this;return(0,l.h)("div",{"aria-label":"a pagination","aria-value":this.currentPage,class:"container"},(0,l.h)("div",{class:"items__per-page-wrapper"},(0,l.h)("div",{class:"items__per-page-label"},"Results per Page"),(0,l.h)("div",{class:"items__per-page-field"},(0,l.h)("ifx-select",{type:"single",value:"undefined","ifx-size":"s",placeholder:"false","search-enabled":"false","search-placeholder-value":"Search...","ifx-disabled":"false","ifx-error":"false","ifx-error-message":"Error","ifx-label":"","ifx-placeholder-value":"Placeholder","ifx-options":'[{"value":"ten","label":"10","selected":true}, {"value":"Twenty","label":"20","selected":false}, {"value":"Thirty","label":"30","selected":false}]'}))),(0,l.h)("div",{class:"items__total-wrapper"},(0,l.h)("div",{class:"page__numbers-wrapper"},(0,l.h)("div",{class:"pagination"},(0,l.h)("ifx-icon-button",{variant:"secondary",class:"prev",color:"primary",icon:"arrow-left-24"}),(0,l.h)("ol",null,this.numberOfPages.map((function(t){return(0,l.h)("li",{class:"".concat(e.internalPage===t?"active":"")},(0,l.h)("a",{href:void 0},t))}))),(0,l.h)("ifx-icon-button",{class:"next",variant:"secondary",color:"primary",icon:"arrow-right-24"})))))}},{key:"el",get:function(){return(0,l.g)(this)}}]),e}();r.style='@charset "UTF-8";*{font-family:"Source Sans 3"}:host{display:inline-flex}.container{display:inline-flex;justify-content:center;align-items:center;gap:32px}.container .items__per-page-wrapper{display:flex;align-items:center;gap:16px}.container .items__per-page-wrapper .items__per-page-label{color:#1D1D1D;font-family:Source Sans 3;font-size:14px;font-style:normal;font-weight:600;line-height:20px}.container .items__per-page-wrapper .items__per-page-field{display:flex;flex-direction:column;align-items:flex-start}.container .items__per-page-wrapper .items__per-page-field ifx-select{width:92px}.container .items__total-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .items__total-button{display:flex;width:40px;height:40px;justify-content:center;align-items:center;border-radius:100px;border:1px solid #BFBBBB;background:#FFF}.container .items__total-wrapper .page__numbers-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item{display:flex;padding:6px;flex-direction:column;justify-content:center;align-items:center;gap:10px;border-radius:100px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active{background-color:#0A8276}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active span{color:#fff}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover{cursor:pointer}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover:not(.active){background-color:#ddd}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:active:not(.active){background-color:#575352}.container .items__total-wrapper .page__numbers-wrapper .page__number-item span{display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-family:Source Sans 3;font-size:13px;font-style:normal;font-weight:400;line-height:20px}.pagination{display:flex}.pagination ifx-icon-button:first-of-type{margin-right:12px}.pagination ifx-icon-button:last-of-type{margin-left:12px}a{padding:6px;border-radius:100px}ol{list-style-type:none;padding:0;margin:0;display:inline-flex;align-items:center;gap:12px}li{display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:100px}li:hover:not(.active) a{background-color:#EEEDED}li:active:not(.active) a{background-color:#575352;color:#fff}li.active{background-color:#0A8276}li.active a{color:#fff}li:hover{cursor:pointer}li a{text-decoration:none;display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-family:"Source Sans 3";font-size:13px;font-style:normal;font-weight:400;line-height:20px}.prev.disabled,.next.disabled{cursor:default}.prev.disabled:hover,.next.disabled:hover{cursor:default;text-decoration:none}.prev{margin-right:2.5px}.next{margin-left:2.5px}@media (min-width: 400px){li:first-child,li.active-sibling,li.active,li.active+li,li:last-child{display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8)~li{display:none}li:first-child:nth-last-child(n+8)~li.active-sibling:before{content:"\u2026";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li.active+li:after{content:"\u2026";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+5){display:inline-flex;flex-direction:row}li:first-child:nth-last-child(n+8)~li:nth-last-child(5):before{content:"\u2026";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):after,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):after,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):before,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):after{display:none !important}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5){display:none}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5):before,li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5):before{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+5){display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+4):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+4):after{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(5):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(5):after{content:"\u2026";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8).active:before,li:first-child:nth-last-child(n+8).active:after,li:first-child:nth-last-child(n+8)~li.active:before,li:first-child:nth-last-child(n+8)~li.active:after{display:none}}'}}]);
//# sourceMappingURL=9607.12d087ab.chunk.js.map