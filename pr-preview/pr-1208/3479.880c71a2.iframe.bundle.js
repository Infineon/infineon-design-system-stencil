"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[3479],{"./dist/esm/ifx-search-bar.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_search_bar:()=>SearchBar});var _index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-77e9cc30.js");const SearchBar=class{constructor(hostRef){(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxInput=(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxInput",7),this.ifxSearchBarIsOpen=(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxSearchBarIsOpen",7),this.handleCloseButton=()=>{this.internalState=!this.internalState,this.ifxSearchBarIsOpen.emit(this.internalState)},this.handleFocus=()=>{this.internalState=!0},this.isOpen=!0,this.disabled=!1,this.internalState=void 0,this.value=void 0}async onNavbarMobile(){this.ifxSearchBarIsOpen.emit(!1),this.internalState=!1}handlePropChange(){this.internalState=this.isOpen}setInitialState(){this.internalState=this.isOpen}componentWillLoad(){this.setInitialState()}handleInput(event){this.value=event.detail}render(){return(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"eba2d9e94f0995514e455472c860ea2b2bccdcfe","aria-label":"a search bar","aria-disabled":this.disabled,class:"search-bar "+(this.internalState?"open":"closed")},this.internalState?(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"search-bar-wrapper"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-search-field",{disabled:this.disabled,value:this.value,onIfxInput:this.handleInput.bind(this)},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:"search-16",slot:"search-icon"})),(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{tabindex:"-1",href:"javascript:void(0)",onClick:this.handleCloseButton},"Close")):(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"search-bar__icon-wrapper",onClick:this.handleCloseButton},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:"search-16"})))}get el(){return(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{isOpen:["handlePropChange"]}}};SearchBar.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{width:100%;display:flex}.search-bar{box-sizing:border-box;height:40px;background-color:#FFFFFF;display:flex;flex-direction:row;align-items:center;width:100%;font-family:var(--ifx-font-family)}.search-bar.closed{display:flex;width:auto;justify-content:flex-start}.search-bar .search-bar-wrapper{display:flex;align-items:center;gap:16px;width:100%}.search-bar .search-bar-wrapper a{text-decoration:none;font-size:1rem;font-style:normal;font-weight:600;line-height:1.5rem;color:#0A8276;cursor:pointer}.search-bar .search-bar-wrapper ifx-search-field{width:100%}.search-bar .search-bar__icon-wrapper{display:none;flex-direction:row;align-items:center}.search-bar .search-bar__icon-wrapper ifx-icon:hover{cursor:pointer}.search-bar.closed .search-bar__icon-wrapper{display:flex}.search-bar.closed .search-bar-wrapper{display:none}'}}]);