import{r as s,c as d,h as n,g as r}from"./index-ddf2d401.js";const l=".dropdown-menu{display:none;box-sizing:border-box;background:white;box-shadow:0px 0px 16px rgba(29, 29, 29, 0.12);border-radius:1px;margin-top:8px;z-index:1000}.dropdown-menu ifx-search-input{max-width:150px}.dropdown-menu.show{display:inline-flex;flex-direction:column;position:absolute;min-width:224px;padding:0;border:none;border-radius:1px}.dropdown-menu.show.select{width:235px}.dropdown-menu.show.multiSelect{width:300px}.dropdown-menu.show.nested{transform:none !important;position:static}.dropdown-menu.show .form-control,.dropdown-menu.show .form-select{margin:16px}.dropdown-menu.show .form-select{color:#c5bbbd}.dropdown-menu.show .ifx__search-icon-wrapper{margin-right:24px}.dropdown-menu.show .dropdown-item{display:flex;align-items:center;width:100%;text-align:inherit;white-space:nowrap;border:0;padding:8px 16px;background-color:rgba(0, 0, 0, 0);text-decoration:none;color:#1d1d1d}.dropdown-menu.show .dropdown-item .form-check-label:hover{cursor:pointer}.dropdown-menu.show .dropdown-item:hover{font-weight:600;background-color:#ebe9e9}.dropdown-menu.show .dropdown-item:hover svg{color:#1d1d1d}.dropdown-menu.show .dropdown-item.active,.dropdown-menu.show .dropdown-item:active{font-weight:600;background-color:transparent;color:#378375}.dropdown-menu.show .dropdown-item.active svg,.dropdown-menu.show .dropdown-item:active svg{color:#378375}.dropdown-menu.show .dropdown-item svg{width:13px;height:13px;margin-right:10px;vertical-align:-0.5px}.dropdown-menu.show .form-check-label{font-weight:400}",c=class{constructor(e){s(this,e),this.selectValues=d(this,"selectValues",3),this.label=void 0,this.size=void 0,this.disabled=void 0,this.icon=!1,this.search=!1,this.filter=!1,this.isShown=!0,this.isInsideSelect=!1,this.isInsideMultiSelect=!1}handleValues(e){this.selectValues.emit(e.detail)}toggleCheckbox(e){e.querySelector("input").checked=!e.querySelector("input").checked}componentWillRender(){const e=this.el.closest("ifx-dropdown"),o=this.el.closest("ifx-select-input"),i=this.el.closest("ifx-multi-select-input"),t=this.el.closest("ifx-chip");(e||o||i||t)&&(this.isShown=!1),o?this.isInsideSelect=!0:this.isInsideSelect=!1,i?this.isInsideMultiSelect=!0:this.isInsideMultiSelect=!1}componentDidLoad(){const e=this.el.querySelectorAll("ifx-dropdown-item");for(let o=0;o<e.length;o++)e[o].addEventListener("itemValues",this.handleValues.bind(this)),e[o].index=o}render(){return n("div",{class:`dropdown-menu 
        ${this.isShown?"show nested":""} 
        ${this.icon?"showIcon":""}
        ${this.isInsideSelect?"select":""}
        ${this.isInsideMultiSelect?"multiSelect":""}`},n("slot",null))}get el(){return r(this)}};c.style=l;export{c as ifx_dropdown_menu};
