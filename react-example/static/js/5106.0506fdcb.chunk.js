"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[5106],{5106:function(e,t,a){a.r(t),a.d(t,{ifx_search_bar:function(){return s}});var i=a(5671),n=a(9466),r=a(1091),s=function(){function e(t){var a=this;(0,i.Z)(this,e),(0,r.r)(this,t),this.ifxInput=(0,r.c)(this,"ifxInput",7),this.handleCloseButton=function(){a.internalState=!a.internalState},this.handleFocus=function(){a.internalState=!0},this.showCloseButton=!0,this.isOpen=!0,this.disabled=!1,this.internalState=void 0,this.value=void 0}return(0,n.Z)(e,[{key:"handlePropChange",value:function(){this.internalState=this.isOpen}},{key:"handleSearchInput",value:function(e){console.log("search field event in search bar",e),this.value=e.detail.detail,this.ifxInput.emit(e.detail)}},{key:"setInitialState",value:function(){this.internalState=this.isOpen}},{key:"componentWillLoad",value:function(){this.setInitialState()}},{key:"handleInput",value:function(e){this.value=e.detail}},{key:"render",value:function(){return(0,r.h)("div",{class:"search-bar ".concat(this.internalState?"open":"closed")},this.internalState?(0,r.h)("div",{class:"search-bar-wrapper"},(0,r.h)("ifx-search-field",{disabled:this.disabled,value:this.value,onIfxInput:this.handleInput.bind(this)},(0,r.h)("ifx-icon",{icon:"search-16",slot:"search-icon"})),this.showCloseButton&&(0,r.h)("a",{href:"javascript:void(0)",onClick:this.handleCloseButton},"Close")):(0,r.h)("div",{class:"search-bar__icon-wrapper",onClick:this.handleCloseButton},(0,r.h)("ifx-icon",{icon:"search-16"})))}}],[{key:"watchers",get:function(){return{isOpen:["handlePropChange"]}}}]),e}();s.style='*{font-family:"Source Sans 3"}.search-bar{box-sizing:border-box;height:40px;background-color:#FFFFFF;display:flex;flex-direction:row;align-items:center;width:100%}.search-bar.closed{display:flex;width:auto;justify-content:flex-start}.search-bar .search-bar-wrapper{display:flex;align-items:center;gap:16px;width:100%}.search-bar .search-bar-wrapper a{text-decoration:none;font-size:1rem;font-style:normal;font-weight:600;line-height:1.5rem;color:#0A8276;cursor:pointer}.search-bar .search-bar-wrapper ifx-search-field{width:100%}.search-bar .search-bar__icon-wrapper{display:none;flex-direction:row;align-items:center}.search-bar .search-bar__icon-wrapper ifx-icon:hover{cursor:pointer}.search-bar.closed .search-bar__icon-wrapper{display:flex}.search-bar.closed .search-bar-wrapper{display:none}'}}]);
//# sourceMappingURL=5106.0506fdcb.chunk.js.map