import{r as i,c as t,h as e,g as r}from"./index-CcQaIP_L.js";const s=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{width:100%;display:flex}.search-bar{box-sizing:border-box;height:40px;background-color:#FFFFFF;display:flex;flex-direction:row;align-items:center;width:100%;font-family:var(--ifx-font-family)}.search-bar.closed{display:flex;width:auto;justify-content:flex-start}.search-bar .search-bar-wrapper{display:flex;align-items:center;gap:16px;width:100%}.search-bar .search-bar-wrapper a{text-decoration:none;font-size:1rem;font-style:normal;font-weight:600;line-height:1.5rem;color:#0A8276;cursor:pointer}.search-bar .search-bar-wrapper ifx-search-field{width:100%}.search-bar .search-bar__icon-wrapper{display:none;flex-direction:row;align-items:center}.search-bar .search-bar__icon-wrapper ifx-icon:hover{cursor:pointer}.search-bar.closed .search-bar__icon-wrapper{display:flex}.search-bar.closed .search-bar-wrapper{display:none}',n=s,h=class{constructor(a){i(this,a),this.ifxInput=t(this,"ifxInput",7),this.ifxOpen=t(this,"ifxOpen",7),this.isOpen=!0,this.disabled=!1,this.handleCloseButton=()=>{this.internalState=!this.internalState,this.ifxOpen.emit(this.internalState)},this.handleFocus=()=>{this.internalState=!0}}async onNavbarMobile(){this.ifxOpen.emit(!1),this.internalState=!1}handlePropChange(){this.internalState=this.isOpen}setInitialState(){this.internalState=this.isOpen}componentWillLoad(){this.setInitialState(),this.ifxOpen.emit(this.internalState)}handleInput(a){this.value=a.detail}render(){return e("div",{key:"8d79e2302e0e1d0f457a5ce94740966b8f7a6095","aria-label":"a search bar","aria-disabled":this.disabled,class:`search-bar ${this.internalState?"open":"closed"}`},this.internalState?e("div",{class:"search-bar-wrapper"},e("ifx-search-field",{disabled:this.disabled,value:this.value,maxlength:this.maxlength,onIfxInput:this.handleInput.bind(this)},e("ifx-icon",{icon:"search-16",slot:"search-icon"})),e("a",{tabindex:"-1",href:"javascript:void(0)",onClick:this.handleCloseButton},"Close")):e("div",{class:"search-bar__icon-wrapper",onClick:this.handleCloseButton},e("ifx-icon",{icon:"search-16"})))}get el(){return r(this)}static get watchers(){return{isOpen:["handlePropChange"]}}};h.style=n;export{h as ifx_search_bar};
