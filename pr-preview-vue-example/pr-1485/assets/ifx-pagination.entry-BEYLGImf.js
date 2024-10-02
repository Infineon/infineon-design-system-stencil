import{r as c,c as r,h as n,g as o}from"./index-D4bz33iy.js";const h='@charset "UTF-8";:root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.container{display:inline-flex;justify-content:center;align-items:center;gap:32px;font-family:var(--ifx-font-family)}.container .items__per-page-wrapper{display:flex;align-items:center;gap:16px}.container .items__per-page-wrapper .items__per-page-label{color:#1D1D1D;font-size:14px;font-style:normal;font-weight:600;line-height:20px}.container .items__per-page-wrapper .items__per-page-field{display:flex;flex-direction:column;align-items:flex-start}.container .items__per-page-wrapper .items__per-page-field ifx-select{width:92px}.container .items__total-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .items__total-button{display:flex;width:40px;height:40px;justify-content:center;align-items:center;border-radius:100px;border:1px solid #BFBBBB;background:#FFF}.container .items__total-wrapper .page__numbers-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item{display:flex;padding:6px;flex-direction:column;justify-content:center;align-items:center;gap:10px;border-radius:100px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active{background-color:#0A8276}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active span{color:#fff}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover{cursor:pointer}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover:not(.active){background-color:#ddd}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:active:not(.active){background-color:#575352}.container .items__total-wrapper .page__numbers-wrapper .page__number-item span{display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-size:13px;font-style:normal;font-weight:400;line-height:20px}.pagination{display:flex}.pagination ifx-icon-button:first-of-type{margin-right:12px}.pagination ifx-icon-button:last-of-type{margin-left:12px}a{padding:8px;border-radius:100px}ol{list-style-type:none;padding:0;margin:0;display:inline-flex;align-items:center;gap:12px}li{display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:100px}li:hover:not(.active) a{background-color:#EEEDED}li:active:not(.active) a{background-color:#575352;color:#fff}li.active{background-color:#0A8276}li.active a{color:#fff}li:hover{cursor:pointer}li a{text-decoration:none;display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-size:13px;font-style:normal;font-weight:400;line-height:20px;align-items:center}.prev.disabled,.next.disabled{cursor:default}.prev.disabled:hover,.next.disabled:hover{cursor:default;text-decoration:none}.prev{margin-right:2.5px}.next{margin-left:2.5px}@media (min-width: 400px){li:first-child,li.active-sibling,li.active,li.active+li,li:last-child{display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8)~li{display:none}li:first-child:nth-last-child(n+8)~li.active-sibling:before{content:"…";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li.active+li:after{content:"…";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+5){display:inline-flex;flex-direction:row}li:first-child:nth-last-child(n+8)~li:nth-last-child(5):before{content:"…";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):after,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):after,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):before,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):after{display:none !important}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5){display:none}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5):before,li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5):before{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+5){display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+4):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+4):after{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(5):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(5):after{content:"…";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8).active:before,li:first-child:nth-last-child(n+8).active:after,li:first-child:nth-last-child(n+8)~li.active:before,li:first-child:nth-last-child(n+8)~li.active:after{display:none}}',d=h,f=class{constructor(e){c(this,e),this.ifxPageChange=r(this,"ifxPageChange",7),this.ifxNextPage=r(this,"ifxNextPage",7),this.ifxPrevPage=r(this,"ifxPrevPage",7),this.CLASS_DISABLED="disabled",this.CLASS_ACTIVE="active",this.CLASS_SIBLING_ACTIVE="active-sibling",this.DATA_KEY="pagination",this.currentPage=0,this.internalPage=1,this.itemsPerPage=10,this.numberOfPages=[],this.total=1}setItemsPerPage(e){this.itemsPerPage=parseInt(e.detail.label)}componentDidLoad(){this.calculateVisiblePageIndices();var e=this.el.shadowRoot.querySelector(".pagination");let a=e.querySelector(".prev");this.navigateSinglePage(a,!0)}calculateNumberOfPages(){isNaN(this.currentPage)&&(this.currentPage=1);const e=this.total<=this.itemsPerPage?this.itemsPerPage:this.total,a=this.itemsPerPage,t=Math.ceil(e/a);this.currentPage<=0?this.internalPage=1:this.currentPage>t?this.internalPage=t:this.internalPage=this.currentPage,this.numberOfPages=Array.from({length:t},(l,i)=>i+1)}componentWillLoad(){this.calculateNumberOfPages()}componentDidUpdate(){var e=this.el.shadowRoot.querySelector(".pagination"),a=e.querySelectorAll("li");this.addEventListenersToPageItems(a,e),e.dataset[this.DATA_KEY]<this.numberOfPages?e.dataset[this.DATA_KEY]=e.dataset[this.DATA_KEY]:e.dataset[this.DATA_KEY]=0,this.changePage(e,!1)}componentWillUpdate(){this.calculateNumberOfPages()}handleEventEmission(e){let a=e+1,t=this.numberOfPages.length,l=e===0?null:e,i=e+2>t?null:e+2,s=this.itemsPerPage;this.ifxPageChange.emit({currentPage:a,totalPages:t,prevPage:l,nextPage:i,itemsPerPage:s})}addEventListenersToPageItems(e,a){e.forEach(t=>{t.addEventListener("click",l=>{var i=a;let s=i.querySelectorAll("li");i.dataset[this.DATA_KEY]=Array.from(s).indexOf(l.currentTarget),this.changePage(i,!1)})})}initPagination(e){var a=e.querySelectorAll("li");e.dataset[this.DATA_KEY]=Array.from(a).indexOf(e.querySelector(".active")),e.querySelector(".prev").addEventListener("click",t=>this.navigateSinglePage(t,!1)),e.querySelector(".next").addEventListener("click",t=>this.navigateSinglePage(t,!1)),this.addEventListenersToPageItems(a,e)}navigateSinglePage(e,a){let t=e;if(typeof e.target=="object"&&(t=e.target),!t.classList.contains(this.CLASS_DISABLED)){var l=t.closest(".pagination"),i=parseInt(l.dataset[this.DATA_KEY],10);i+=1*(t.classList.contains("prev")?-1:1),i===-1&&(i=0),l.dataset[this.DATA_KEY]=i,this.changePage(l,a)}}changePage(e,a){const t=e;var l=t.querySelectorAll("li"),i=parseInt(t.dataset[this.DATA_KEY],10);l.forEach(s=>{s.classList.remove(this.CLASS_ACTIVE),s.classList.remove(this.CLASS_SIBLING_ACTIVE)}),a&&this.internalPage>1&&(i=Math.floor(this.internalPage-1),t.dataset[this.DATA_KEY]=i),this.handleEventEmission(i),l[i].classList.add(this.CLASS_ACTIVE),i===0?(t.querySelector(".prev").classList.add(this.CLASS_DISABLED),t.querySelector(".prev").disabled=!0):(l[i-1].classList.add(this.CLASS_SIBLING_ACTIVE),t.querySelector(".prev").classList.remove(this.CLASS_DISABLED),t.querySelector(".prev").disabled=!1),i===l.length-1?(t.querySelector(".next").classList.add(this.CLASS_DISABLED),t.querySelector(".next").disabled=!0):(t.querySelector(".next").classList.remove(this.CLASS_DISABLED),t.querySelector(".next").disabled=!1)}calculateVisiblePageIndices(){var e=this.el.shadowRoot.querySelector(".pagination");this.initPagination(e)}render(){return n("div",{key:"44f46ca93e11ed06a827fd771e40d9601cf97800","aria-label":"a pagination","aria-value":this.currentPage,class:"container"},n("div",{key:"a294fbee4f9e734016d5898401f3ab75d2f93774",class:"items__per-page-wrapper"},n("div",{key:"441f564dbe329aab5bf42903d28ec03254d44d53",class:"items__per-page-label"},"Results per Page"),n("div",{key:"5e1716c2ddc068e60e92c04acbac3ec6c31b2934",class:"items__per-page-field"},n("ifx-select",{key:"b4f05594b45a9e8839246efee6e206118ea556d7",value:"undefined",size:"s",placeholder:"false","show-search":"false","search-placeholder-value":"Search...",disabled:!1,error:!1,"error-message":"Error",label:"","placeholder-value":"Placeholder",options:'[{"value":"ten","label":"10","selected":true}, {"value":"Twenty","label":"20","selected":false}, {"value":"Thirty","label":"30","selected":false}]'}))),n("div",{key:"2343b6018a705a7e269eac5dc7af71adbc7256e1",class:"items__total-wrapper"},n("div",{key:"3bbc869018a2bacbd747973811ec3ad249f8583b",class:"page__numbers-wrapper"},n("div",{key:"459070f22a012043fa7c53479fe259f425707610",class:"pagination"},n("ifx-icon-button",{key:"fd1f749d660a38cf28573f0fd80793b3cf465042",variant:"secondary",class:"prev",color:"primary",icon:"arrow-left-24"}),n("ol",{key:"55a842738467872b8888a7172e3778f3caffc7fd"},this.numberOfPages.map(e=>n("li",{class:`${this.internalPage===e?"active":""}`},n("a",{href:void 0},e)))),n("ifx-icon-button",{key:"fb03578f7d7b89e703b35a8785b0f86a2c554894",class:"next",variant:"secondary",color:"primary",icon:"arrow-right-24"})))))}get el(){return o(this)}};f.style=d;export{f as ifx_pagination};
