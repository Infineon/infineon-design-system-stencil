import{r as i,c as s,h as o,g as a}from"./index-DVFZl2YZ.js";const l=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block}.container{position:relative;font-family:var(--ifx-font-family)}.container .wrapper{display:inline-flex;flex-direction:row;align-items:center;padding:8px 16px;gap:8px;background:#FFFFFF;border:1px solid #BFBBBB;border-radius:100px}.container .wrapper:hover{cursor:pointer;border:1px solid #575352}.container .wrapper.active{border:1px solid #0A8276;outline:none}.container .wrapper .wrapper-label{font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;display:flex;align-items:center;color:#1D1D1D;flex:none;order:0;flex-grow:0}.container .wrapper .wrapper-close-button{display:flex;align-items:center}.container .wrapper .wrapper-close-button ifx-icon{transition:0.3s;width:12px;height:12px}.container .wrapper .wrapper-close-button.show ifx-icon{transition:transform 0.3s;transform:rotate(-180deg)}.container .wrapper.selected{border:1px solid #0A8276;outline:2px solid #0A8276;outline-offset:-3px}.container .wrapper.selected .wrapper-label{font-style:normal;font-weight:600;font-size:0.875rem;line-height:1.25rem;color:#0A8276}.container .wrapper.selected ifx-icon{color:#0A8276}.container .wrapper.selected:hover{border:1px solid #08665C;outline:2px solid #08665C}.container .wrapper.selected:hover ifx-icon,.container .wrapper.selected:hover .wrapper-label{color:#08665C}',c=l,p=class{constructor(e){i(this,e),this.ifxDropdownMenu=s(this,"ifxDropdownMenu",7),this.placeholder=void 0,this.selectedValue="",this.active=!1}handleOutsideClick(e){const t=e.composedPath(),n=this.el.shadowRoot.querySelector(".wrapper"),r=this.getDropdownMenu();!t.includes(r)&&!t.includes(n)&&this.closedMenu()}handleDropdownItemValueEmission(e){this.selectedValue=e.detail,this.ifxDropdownMenu.emit(e.detail),this.toggleMenu()}getDropdownMenu(){return this.el.querySelector("ifx-dropdown-menu")}closedMenu(){let e=this.getDropdownMenu();e.isOpen&&this.toggleCloseIcon(),e.isOpen=!1,this.active=!1}toggleMenu(){let e=this.getDropdownMenu();e.isOpen=!e.isOpen,this.active=e.isOpen,this.toggleCloseIcon()}toggleCloseIcon(){this.el.shadowRoot.querySelector(".wrapper-close-button").classList.toggle("show")}render(){return o("div",{key:"182ec72ccc009923423d5100497b9f23b2a3c607","aria-value":this.selectedValue,"aria-label":"chip with a dropdown menu",class:"dropdown container"},o("div",{key:"4623a9020da926b0ec54569b144fd6a6cac67662",class:`wrapper ${this.active?"active":""} ${this.selectedValue!==""?"selected":""}`,onClick:()=>this.toggleMenu(),tabIndex:0},o("div",{key:"0f6a7dc6e8845b143bf88c43d7144e108645a011",class:"wrapper-label"},this.selectedValue?this.selectedValue:this.placeholder),o("div",{key:"ddb275e1b7e1d055ccbe1a9977f3e105e1217c38",class:"wrapper-close-button"},o("ifx-icon",{key:"e6f9ffd4ff4226800d552f37f525c1d4859dee49",icon:"chevrondown12"}))),o("slot",{key:"23a79904a975df591e6eb33a9d5a40dac9719c48",name:"menu"}))}get el(){return a(this)}};p.style=c;export{p as ifx_chip};
