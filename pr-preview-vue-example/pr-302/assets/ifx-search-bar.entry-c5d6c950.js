import{r as i,c as a,h as e}from"./index-6e624ecb.js";const s=".search-bar{box-sizing:border-box;height:40px;background-color:#ffffff;display:flex;flex-direction:row;align-items:center;width:100%}.search-bar.large{width:362px}.search-bar.closed{display:inline-flex;width:auto}.search-bar .search-bar-wrapper{display:flex;align-items:center;gap:16px;width:100%}.search-bar .search-bar-wrapper ifx-search-input{width:100%}.search-bar .search-bar-wrapper ifx-link:hover{cursor:pointer}.search-bar .search-bar__icon-wrapper{display:inline-flex;flex-direction:row;align-items:center;justify-content:center}.search-bar .search-bar__icon-wrapper a{font-style:normal;font-weight:400;font-size:14px;line-height:20px;color:#1d1d1d;text-decoration:none;display:flex;align-items:center;flex:none;order:1;flex-grow:0;padding-left:11px}.search-bar .search-bar__icon-wrapper ifx-icon:hover{cursor:pointer}",t=class{constructor(r){i(this,r),this.ifxInput=a(this,"ifxInput",7),this.handleClick=()=>{this.isOpen=!this.isOpen},this.icon=void 0,this.showCloseButton=!0,this.isOpen=!0,this.hideLabel=!1,this.size="",this.value=""}handleInput(r){this.value=r.detail}render(){return e("div",{class:`search-bar ${this.isOpen?"":"closed"} ${this.size==="large"?"large":""}`},this.isOpen?e("div",{class:"search-bar-wrapper"},e("ifx-search-input",{value:this.value,onIfxInput:this.handleInput.bind(this)},e("ifx-icon",{icon:"search-16",slot:"search-icon"})),this.showCloseButton&&e("ifx-link",{onClick:this.handleClick},"Close")):e("div",{class:"search-bar__icon-wrapper",onClick:this.handleClick},e("ifx-icon",{icon:"search-16"}),e("a",{href:"javascript:void(0)"},"Search")))}};t.style=s;export{t as ifx_search_bar};
