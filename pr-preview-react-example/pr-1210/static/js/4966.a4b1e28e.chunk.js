"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[4966],{4966:(e,a,t)=>{t.r(a),t.d(a,{ifx_search_bar:()=>r});var i=t(7770);const r=class{constructor(e){(0,i.r)(this,e),this.ifxInput=(0,i.c)(this,"ifxInput",7),this.ifxSearchBarIsOpen=(0,i.c)(this,"ifxSearchBarIsOpen",7),this.handleCloseButton=()=>{this.internalState=!this.internalState,this.ifxSearchBarIsOpen.emit(this.internalState)},this.handleFocus=()=>{this.internalState=!0},this.isOpen=!0,this.disabled=!1,this.internalState=void 0,this.value=void 0}async onNavbarMobile(){this.ifxSearchBarIsOpen.emit(!1),this.internalState=!1}handlePropChange(){this.internalState=this.isOpen}setInitialState(){this.internalState=this.isOpen}componentWillLoad(){this.setInitialState(),this.ifxSearchBarIsOpen.emit(this.internalState)}handleInput(e){this.value=e.detail}render(){return(0,i.h)("div",{key:"333fec6b4fa2a9622f72e2cf0ca4c8ba7624ae00","aria-label":"a search bar","aria-disabled":this.disabled,class:"search-bar ".concat(this.internalState?"open":"closed")},this.internalState?(0,i.h)("div",{class:"search-bar-wrapper"},(0,i.h)("ifx-search-field",{disabled:this.disabled,value:this.value,onIfxInput:this.handleInput.bind(this)},(0,i.h)("ifx-icon",{icon:"search-16",slot:"search-icon"})),(0,i.h)("a",{tabindex:"-1",href:"javascript:void(0)",onClick:this.handleCloseButton},"Close")):(0,i.h)("div",{class:"search-bar__icon-wrapper",onClick:this.handleCloseButton},(0,i.h)("ifx-icon",{icon:"search-16"})))}get el(){return(0,i.g)(this)}static get watchers(){return{isOpen:["handlePropChange"]}}};r.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{width:100%;display:flex}.search-bar{box-sizing:border-box;height:40px;background-color:#FFFFFF;display:flex;flex-direction:row;align-items:center;width:100%;font-family:var(--ifx-font-family)}.search-bar.closed{display:flex;width:auto;justify-content:flex-start}.search-bar .search-bar-wrapper{display:flex;align-items:center;gap:16px;width:100%}.search-bar .search-bar-wrapper a{text-decoration:none;font-size:1rem;font-style:normal;font-weight:600;line-height:1.5rem;color:#0A8276;cursor:pointer}.search-bar .search-bar-wrapper ifx-search-field{width:100%}.search-bar .search-bar__icon-wrapper{display:none;flex-direction:row;align-items:center}.search-bar .search-bar__icon-wrapper ifx-icon:hover{cursor:pointer}.search-bar.closed .search-bar__icon-wrapper{display:flex}.search-bar.closed .search-bar-wrapper{display:none}'}}]);
//# sourceMappingURL=4966.a4b1e28e.chunk.js.map