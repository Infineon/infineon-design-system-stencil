"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[5106],{5106:(e,a,t)=>{t.r(a),t.d(a,{ifx_search_bar:()=>r});var i=t(7322);const r=class{constructor(e){(0,i.r)(this,e),this.ifxInput=(0,i.c)(this,"ifxInput",7),this.ifxSearchBarIsOpen=(0,i.c)(this,"ifxSearchBarIsOpen",7),this.handleCloseButton=()=>{this.internalState=!this.internalState,this.ifxSearchBarIsOpen.emit(this.internalState)},this.handleFocus=()=>{this.internalState=!0},this.isOpen=!0,this.disabled=!1,this.internalState=void 0,this.value=void 0}handlePropChange(){this.internalState=this.isOpen}setInitialState(){this.internalState=this.isOpen}componentWillLoad(){this.setInitialState()}handleInput(e){this.value=e.detail}render(){return(0,i.h)("div",{"aria-label":"a search bar","aria-disabled":this.disabled,class:"search-bar ".concat(this.internalState?"open":"closed")},this.internalState?(0,i.h)("div",{class:"search-bar-wrapper"},(0,i.h)("ifx-search-field",{disabled:this.disabled,value:this.value,onIfxInput:this.handleInput.bind(this)},(0,i.h)("ifx-icon",{icon:"search-16",slot:"search-icon"})),(0,i.h)("a",{tabindex:"-1",href:"javascript:void(0)",onClick:this.handleCloseButton},"Close")):(0,i.h)("div",{class:"search-bar__icon-wrapper",onClick:this.handleCloseButton},(0,i.h)("ifx-icon",{icon:"search-16"})))}static get watchers(){return{isOpen:["handlePropChange"]}}};r.style=":root{--ifx-font-family:tokens.$ifxFontFamilyBody}*{font-family:var(--ifx-font-family), sans-serif}:host{width:100%;display:flex}.search-bar{box-sizing:border-box;height:40px;background-color:#FFFFFF;display:flex;flex-direction:row;align-items:center;width:100%}.search-bar.closed{display:flex;width:auto;justify-content:flex-start}.search-bar .search-bar-wrapper{display:flex;align-items:center;gap:16px;width:100%}.search-bar .search-bar-wrapper a{text-decoration:none;font-size:1rem;font-style:normal;font-weight:600;line-height:1.5rem;color:#0A8276;cursor:pointer}.search-bar .search-bar-wrapper ifx-search-field{width:100%}.search-bar .search-bar__icon-wrapper{display:none;flex-direction:row;align-items:center}.search-bar .search-bar__icon-wrapper ifx-icon:hover{cursor:pointer}.search-bar.closed .search-bar__icon-wrapper{display:flex}.search-bar.closed .search-bar-wrapper{display:none}"}}]);
//# sourceMappingURL=5106.78d20577.chunk.js.map