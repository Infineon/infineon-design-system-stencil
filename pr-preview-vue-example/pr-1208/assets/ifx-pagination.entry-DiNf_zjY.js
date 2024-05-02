import{r as c,c as r,h as n,g as o}from"./index-aTk1u9YA.js";const d='@charset "UTF-8";:root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.container{display:inline-flex;justify-content:center;align-items:center;gap:32px;font-family:var(--ifx-font-family)}.container .items__per-page-wrapper{display:flex;align-items:center;gap:16px}.container .items__per-page-wrapper .items__per-page-label{color:#1D1D1D;font-size:14px;font-style:normal;font-weight:600;line-height:20px}.container .items__per-page-wrapper .items__per-page-field{display:flex;flex-direction:column;align-items:flex-start}.container .items__per-page-wrapper .items__per-page-field ifx-select{width:92px}.container .items__total-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .items__total-button{display:flex;width:40px;height:40px;justify-content:center;align-items:center;border-radius:100px;border:1px solid #BFBBBB;background:#FFF}.container .items__total-wrapper .page__numbers-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item{display:flex;padding:6px;flex-direction:column;justify-content:center;align-items:center;gap:10px;border-radius:100px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active{background-color:#0A8276}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active span{color:#fff}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover{cursor:pointer}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover:not(.active){background-color:#ddd}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:active:not(.active){background-color:#575352}.container .items__total-wrapper .page__numbers-wrapper .page__number-item span{display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-size:13px;font-style:normal;font-weight:400;line-height:20px}.pagination{display:flex}.pagination ifx-icon-button:first-of-type{margin-right:12px}.pagination ifx-icon-button:last-of-type{margin-left:12px}a{padding:6px;border-radius:100px}ol{list-style-type:none;padding:0;margin:0;display:inline-flex;align-items:center;gap:12px}li{display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:100px}li:hover:not(.active) a{background-color:#EEEDED}li:active:not(.active) a{background-color:#575352;color:#fff}li.active{background-color:#0A8276}li.active a{color:#fff}li:hover{cursor:pointer}li a{text-decoration:none;display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-size:13px;font-style:normal;font-weight:400;line-height:20px}.prev.disabled,.next.disabled{cursor:default}.prev.disabled:hover,.next.disabled:hover{cursor:default;text-decoration:none}.prev{margin-right:2.5px}.next{margin-left:2.5px}@media (min-width: 400px){li:first-child,li.active-sibling,li.active,li.active+li,li:last-child{display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8)~li{display:none}li:first-child:nth-last-child(n+8)~li.active-sibling:before{content:"…";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li.active+li:after{content:"…";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+5){display:inline-flex;flex-direction:row}li:first-child:nth-last-child(n+8)~li:nth-last-child(5):before{content:"…";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):after,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):after,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):before,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):after{display:none !important}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5){display:none}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5):before,li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5):before{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+5){display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+4):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+4):after{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(5):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(5):after{content:"…";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8).active:before,li:first-child:nth-last-child(n+8).active:after,li:first-child:nth-last-child(n+8)~li.active:before,li:first-child:nth-last-child(n+8)~li.active:after{display:none}}',h=d,f=class{constructor(e){c(this,e),this.ifxPageChange=r(this,"ifxPageChange",7),this.ifxNextPage=r(this,"ifxNextPage",7),this.ifxPrevPage=r(this,"ifxPrevPage",7),this.CLASS_DISABLED="disabled",this.CLASS_ACTIVE="active",this.CLASS_SIBLING_ACTIVE="active-sibling",this.DATA_KEY="pagination",this.currentPage=0,this.internalPage=1,this.itemsPerPage=10,this.numberOfPages=[],this.total=1}setItemsPerPage(e){this.itemsPerPage=parseInt(e.detail.label)}componentDidLoad(){this.calculateVisiblePageIndices();var e=this.el.shadowRoot.querySelector(".pagination");let a=e.querySelector(".prev");this.navigateSinglePage(a,!0)}calculateNumberOfPages(){isNaN(this.currentPage)&&(this.currentPage=1);const e=this.total<=this.itemsPerPage?this.itemsPerPage:this.total,a=this.itemsPerPage,t=Math.ceil(e/a);this.currentPage<=0?this.internalPage=1:this.currentPage>t?this.internalPage=t:this.internalPage=this.currentPage,this.numberOfPages=Array.from({length:t},(l,i)=>i+1)}componentWillLoad(){this.calculateNumberOfPages()}componentDidUpdate(){var e=this.el.shadowRoot.querySelector(".pagination"),a=e.querySelectorAll("li");this.addEventListenersToPageItems(a,e),e.dataset[this.DATA_KEY]<this.numberOfPages?e.dataset[this.DATA_KEY]=e.dataset[this.DATA_KEY]:e.dataset[this.DATA_KEY]=0,this.changePage(e,!1)}componentWillUpdate(){this.calculateNumberOfPages()}handleEventEmission(e){let a=e+1,t=this.numberOfPages.length,l=e===0?null:e,i=e+2>t?null:e+2,s=this.itemsPerPage;this.ifxPageChange.emit({currentPage:a,totalPages:t,prevPage:l,nextPage:i,itemsPerPage:s})}addEventListenersToPageItems(e,a){e.forEach(t=>{t.addEventListener("click",l=>{var i=a;let s=i.querySelectorAll("li");i.dataset[this.DATA_KEY]=Array.from(s).indexOf(l.currentTarget),this.changePage(i,!1)})})}initPagination(e){var a=e.querySelectorAll("li");e.dataset[this.DATA_KEY]=Array.from(a).indexOf(e.querySelector(".active")),e.querySelector(".prev").addEventListener("click",t=>this.navigateSinglePage(t,!1)),e.querySelector(".next").addEventListener("click",t=>this.navigateSinglePage(t,!1)),this.addEventListenersToPageItems(a,e)}navigateSinglePage(e,a){let t=e;if(typeof e.target=="object"&&(t=e.target),!t.classList.contains(this.CLASS_DISABLED)){var l=t.closest(".pagination"),i=parseInt(l.dataset[this.DATA_KEY],10);i+=1*(t.classList.contains("prev")?-1:1),i===-1&&(i=0),l.dataset[this.DATA_KEY]=i,this.changePage(l,a)}}changePage(e,a){const t=e;var l=t.querySelectorAll("li"),i=parseInt(t.dataset[this.DATA_KEY],10);l.forEach(s=>{s.classList.remove(this.CLASS_ACTIVE),s.classList.remove(this.CLASS_SIBLING_ACTIVE)}),a&&this.internalPage>1&&(i=Math.floor(this.internalPage-1),t.dataset[this.DATA_KEY]=i),this.handleEventEmission(i),l[i].classList.add(this.CLASS_ACTIVE),i===0?(t.querySelector(".prev").classList.add(this.CLASS_DISABLED),t.querySelector(".prev").disabled=!0):(l[i-1].classList.add(this.CLASS_SIBLING_ACTIVE),t.querySelector(".prev").classList.remove(this.CLASS_DISABLED),t.querySelector(".prev").disabled=!1),i===l.length-1?(t.querySelector(".next").classList.add(this.CLASS_DISABLED),t.querySelector(".next").disabled=!0):(t.querySelector(".next").classList.remove(this.CLASS_DISABLED),t.querySelector(".next").disabled=!1)}calculateVisiblePageIndices(){var e=this.el.shadowRoot.querySelector(".pagination");this.initPagination(e)}render(){return n("div",{key:"f602ead06c3d4ecffee9f7d7a851ec891f061edd","aria-label":"a pagination","aria-value":this.currentPage,class:"container"},n("div",{key:"549f13fdd22c6719811d20a1f81e30ed2ab58672",class:"items__per-page-wrapper"},n("div",{key:"88af3560e0d622903d35c7de0d60469f2640d016",class:"items__per-page-label"},"Results per Page"),n("div",{key:"62713fc7d0cf76ea6b57227549454f9e6d2e056b",class:"items__per-page-field"},n("ifx-select",{key:"0057db8616cda3fd1f3cac58cd842946d12a83b8",type:"single",value:"undefined","ifx-size":"s",placeholder:"false","search-enabled":"false","search-placeholder-value":"Search...","ifx-disabled":"false","ifx-error":"false","ifx-error-message":"Error","ifx-label":"","ifx-placeholder-value":"Placeholder","ifx-options":'[{"value":"ten","label":"10","selected":true}, {"value":"Twenty","label":"20","selected":false}, {"value":"Thirty","label":"30","selected":false}]'}))),n("div",{key:"9d64d2e9978fca20bf8ea6c2748c7a10c5d9f3ee",class:"items__total-wrapper"},n("div",{key:"c13e642149b0d2224da50ba8d184649714cbcee3",class:"page__numbers-wrapper"},n("div",{key:"33eafcaf96e05fecbb0268c6b9c1f10b32dc174c",class:"pagination"},n("ifx-icon-button",{key:"064e0e7fc2e6e226a6d38b2f8502162400a1c7ad",variant:"secondary",class:"prev",color:"primary",icon:"arrow-left-24"}),n("ol",{key:"f69ee356bb5aded75407d0f3f1437f598fb521de"},this.numberOfPages.map(e=>n("li",{class:`${this.internalPage===e?"active":""}`},n("a",{href:void 0},e)))),n("ifx-icon-button",{key:"a692551d0157b66cf095d65943302c53ba165808",class:"next",variant:"secondary",color:"primary",icon:"arrow-right-24"})))))}get el(){return o(this)}};f.style=h;export{f as ifx_pagination};
