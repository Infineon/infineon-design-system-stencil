"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[3347],{3347:(l,i,t)=>{t.r(i),t.d(i,{ifx_search_bar:()=>h});var r=t(6330),e=t(581);const h=(()=>{let s=class{constructor(a){(0,e.r)(this,a),this.ifxInput=(0,e.c)(this,"ifxInput",7),this.ifxSearchBarIsOpen=(0,e.c)(this,"ifxSearchBarIsOpen",7),this.handleCloseButton=()=>{this.internalState=!this.internalState,this.ifxSearchBarIsOpen.emit(this.internalState)},this.handleFocus=()=>{this.internalState=!0},this.isOpen=!0,this.disabled=!1,this.internalState=void 0,this.value=void 0,this.maxlength=void 0}onNavbarMobile(){var a=this;return(0,r.A)(function*(){a.ifxSearchBarIsOpen.emit(!1),a.internalState=!1})()}handlePropChange(){this.internalState=this.isOpen}setInitialState(){this.internalState=this.isOpen}componentWillLoad(){this.setInitialState(),this.ifxSearchBarIsOpen.emit(this.internalState)}handleInput(a){this.value=a.detail}render(){return(0,e.h)("div",{key:"a0d45dc79e136db856db02b31a16eb3e93b516ae","aria-label":"a search bar","aria-disabled":this.disabled,class:"search-bar "+(this.internalState?"open":"closed")},this.internalState?(0,e.h)("div",{class:"search-bar-wrapper"},(0,e.h)("ifx-search-field",{disabled:this.disabled,value:this.value,maxlength:this.maxlength,onIfxInput:this.handleInput.bind(this)},(0,e.h)("ifx-icon",{icon:"search-16",slot:"search-icon"})),(0,e.h)("a",{tabindex:"-1",href:"javascript:void(0)",onClick:this.handleCloseButton},"Close")):(0,e.h)("div",{class:"search-bar__icon-wrapper",onClick:this.handleCloseButton},(0,e.h)("ifx-icon",{icon:"search-16"})))}get el(){return(0,e.g)(this)}static get watchers(){return{isOpen:["handlePropChange"]}}};return s.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{width:100%;display:flex}.search-bar{box-sizing:border-box;height:40px;background-color:#FFFFFF;display:flex;flex-direction:row;align-items:center;width:100%;font-family:var(--ifx-font-family)}.search-bar.closed{display:flex;width:auto;justify-content:flex-start}.search-bar .search-bar-wrapper{display:flex;align-items:center;gap:16px;width:100%}.search-bar .search-bar-wrapper a{text-decoration:none;font-size:1rem;font-style:normal;font-weight:600;line-height:1.5rem;color:#0A8276;cursor:pointer}.search-bar .search-bar-wrapper ifx-search-field{width:100%}.search-bar .search-bar__icon-wrapper{display:none;flex-direction:row;align-items:center}.search-bar .search-bar__icon-wrapper ifx-icon:hover{cursor:pointer}.search-bar.closed .search-bar__icon-wrapper{display:flex}.search-bar.closed .search-bar-wrapper{display:none}',s})()}}]);