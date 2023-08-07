import{r as d,h as s,g as i}from"./index-34ac8905.js";const r=".selectInput.dropdown{width:235px}",l=class{constructor(e){d(this,e),this.addActiveMenuItem=t=>{const o=this.getClickedElement(t.composedPath()[0]),n=t.target.checkable;if(o){if(n){this.toggleCheckbox(o);return}this.removeActiveMenuItem(),this.handleClassList(o,"add","active"),this.toggleDropdownMenu()}}}handleOutsideClick(e){e.composedPath().includes(this.el)||this.closeDropdownMenu()}getDropdownMenu(){let e=this.el.querySelector("ifx-dropdown-menu");if(e)return e=this.el.querySelector("ifx-dropdown-menu").shadowRoot,e.querySelector(".dropdown-menu")}getDropdownWrapper(){return this.el.shadowRoot.querySelector(".dropdown")}getDropdownItems(){return this.el.querySelectorAll("ifx-dropdown-item")}handleClassList(e,t,o){e==null||e.classList[t](o)}toggleDropdownMenu(){const t=this.getTextField().shadowRoot.querySelector(".textInput__bottom-wrapper"),o=this.getDropdownMenu(),n=this.getDropdownWrapper();this.handleClassList(o,"toggle","show"),this.handleClassList(n,"toggle","show"),this.handleClassList(t,"toggle","show")}closeDropdownMenu(){const e=this.getDropdownMenu(),t=this.getDropdownWrapper(),n=this.getTextField().shadowRoot.querySelector(".textInput__bottom-wrapper");this.handleClassList(e,"remove","show"),this.handleClassList(t,"remove","show"),this.handleClassList(n,"remove","show")}removeActiveMenuItem(){const e=this.getDropdownItems();for(let t=0;t<e.length;t++)this.handleClassList(e[t].shadowRoot.querySelector("a"),"remove","active")}toggleCheckbox(e){e.querySelector("ifx-checkbox").checked=!e.querySelector("ifx-checkbox").checked}getClickedElement(e){return e instanceof SVGElement?e.closest(".dropdown-item"):e.className.includes("dropdown-menu")||e.className.includes("form-check-input")?!1:e.closest(".dropdown-item")}getTextField(){return this.el.querySelector("ifx-text-field")}addItemValueToTextField(e){const t=this.getTextField();t.value=e.value}addEventListeners(){const e=this.getDropdownMenu();document.addEventListener("click",this.handleOutsideClick.bind(this)),e.addEventListener("click",this.addActiveMenuItem),this.el.querySelector("ifx-dropdown-menu").addEventListener("selectValues",o=>{this.addItemValueToTextField(o.detail)})}componentDidRender(){let e=this.el.querySelector("ifx-text-field");if(e){const t=e.shadowRoot.querySelector("input");t.classList.contains("disabled")||(t.addEventListener("click",this.toggleDropdownMenu.bind(this)),this.addEventListeners())}}render(){return s("div",{class:"dropdown selectInput"},s("slot",{name:"text-input"}),s("slot",{name:"menu"}))}get el(){return i(this)}};l.style=r;export{l as ifx_select_input};
