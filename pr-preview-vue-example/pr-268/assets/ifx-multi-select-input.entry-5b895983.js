import{r as d,h as n,g as u}from"./index-fbab3841.js";const p=".multiSelect.dropdown{box-sizing:border-box;width:300px;border:1px solid transparent}.multiSelect.dropdown:active{outline:none;border:1px solid #0A8276}.multiSelectInput__container{position:relative;display:flex;flex-direction:column;align-items:flex-start;padding:0px;width:100%;border:1px solid #8D8786;flex:none;order:0;align-self:stretch;flex-grow:0}.multiSelectInput__container:focus:not(.success,:active){outline:2px solid #0A8276;border:1px solid #3C3A39;border-radius:1px;outline-offset:2px}.multiSelectInput__container:hover:not(:disabled,.success){border:1px solid #3C3A39;cursor:pointer}.multiSelectInput__container.success{border:1px solid #4CA460}.multiSelectInput__container.success:focus{outline:none}.multiSelectInput__container .prev{position:absolute;top:7px;left:5px;z-index:1000;cursor:pointer}.multiSelectInput__container .prev ifx-icon svg{width:10px}.multiSelectInput__container .next{position:absolute;top:7px;right:40px;z-index:1000;cursor:pointer}.multiSelectInput__container .next ifx-icon svg{width:10px}.multiSelectInput__container .multiSelectInput__icon-wrapper:hover{cursor:pointer}.multiSelectInput__container.show .multiSelectInput__icon-wrapper ifx-icon{transition:0.3s;transform:rotate(180deg)}.multiSelectInput__container .multiSelectInput__icon-wrapper ifx-icon{position:absolute;top:12px;right:17px;transition:0.3s}.multiSelectInput__container .multiSelectInput__wrapper{position:relative;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:0px;height:40px;left:20px;width:220px;background-color:#ffffff;color:#1D1D1D;border-radius:1px;flex:none;flex-grow:0}.multiSelectInput__container .multiSelectInput__wrapper .multiSelectInput__content{box-sizing:border-box;display:flex;flex-direction:row;width:220px;gap:6px;font-size:14px;overflow:hidden}.multiSelectInput__container .multiSelectInput__wrapper .multiSelectInput__content span{font-style:normal;font-weight:400;font-size:16px;line-height:24px;pointer-events:none;color:#8D8786;flex:none;order:1;flex-grow:1}.multiSelectInput__container .textInput__bottom-wrapper-error{font-style:normal;font-weight:400;font-size:12px;line-height:16px;letter-spacing:0.2px;color:#CD002F;flex:none;order:1;align-self:stretch;flex-grow:0}",a=class{constructor(e){d(this,e),this.addActiveMenuItem=t=>{const i=this.getClickedElement(t.composedPath()[0]),o=t.target.checkable;if(i){if(o){this.toggleCheckbox(i);return}this.removeActiveMenuItem(),this.handleClassList(i,"add","active"),this.toggleDropdownMenu(t)}},this.Placeholder="",this.isEmpty=!0,this.isOverflowing=!1}handleOutsideClick(e){e.composedPath().includes(this.el)||this.closeDropdownMenu()}handleButtonClose(e){var t,i;const o=(t=e.detail)===null||t===void 0?void 0:t.getAttribute("target"),l=this.el.querySelectorAll("ifx-dropdown-item"),s=this.el.shadowRoot.querySelector(".dropdown").querySelectorAll("ifx-multi-select-input-item");for(let r=0;r<l.length;r++)l[r].index===Number(o)&&(l[r].shadowRoot.querySelector("ifx-checkbox").checked=!1);if((i=e.detail)===null||i===void 0||i.remove(),e&&e.check)for(let r=0;r<s.length;r++){let c=s[r].getAttribute("target");Number(e.target.index)===Number(c)&&s[r].remove()}this.togglePlaceHolder(),this.toggleSlideButtons()}togglePlaceHolder(){const t=this.getMultiSelectFieldWrapper().querySelector("ifx-multi-select-input-item");t&&this.isEmpty?this.isEmpty=!1:!t&&!this.isEmpty&&(this.isEmpty=!0)}toggleSlideButtons(){const e=this.getMultiSelectFieldWrapper();this.isOverflown(e)?this.isOverflowing=!0:this.isOverflowing&&(this.isOverflowing=!1)}getDropdownMenu(){let e=this.el.querySelector("ifx-dropdown-menu");if(e)return e=this.el.querySelector("ifx-dropdown-menu").shadowRoot,e.querySelector(".dropdown-menu")}getDropdownWrapper(){return this.el.shadowRoot.querySelector(".dropdown")}getDropdownItems(){return this.el.querySelectorAll("ifx-dropdown-item")}handleClassList(e,t,i){e==null||e.classList[t](i)}toggleDropdownMenu(e){if(e.composedPath()[0].closest("span"))return;const i=this.getMultiSelectFieldContainer(),o=this.getDropdownMenu(),l=this.getDropdownWrapper();this.handleClassList(o,"toggle","show"),this.handleClassList(l,"toggle","show"),this.handleClassList(i,"toggle","show")}closeDropdownMenu(){const e=this.getDropdownMenu(),t=this.getDropdownWrapper(),i=this.getMultiSelectFieldContainer();this.handleClassList(e,"remove","show"),this.handleClassList(t,"remove","show"),this.handleClassList(i,"remove","show")}removeActiveMenuItem(){const e=this.getDropdownItems();for(let t=0;t<e.length;t++)this.handleClassList(e[t].shadowRoot.querySelector("a"),"remove","active")}toggleCheckbox(e){e.querySelector("ifx-checkbox").checked=!e.querySelector("ifx-checkbox").checked}getClickedElement(e){return e instanceof SVGElement?e.closest(".dropdown-item"):e.className.includes("dropdown-menu")||e.className.includes("form-check-input")?!1:e.closest(".dropdown-item")}getMultiSelectFieldWrapper(){return this.el.shadowRoot.querySelector(".multiSelectInput__content")}getMultiSelectFieldContainer(){return this.el.shadowRoot.querySelector(".multiSelectInput__container")}getMultiSelectFieldIconWrapper(){return this.el.shadowRoot.querySelector(".multiSelectInput__container").querySelector(".multiSelectInput__icon-wrapper")}addSelectItemsToArray(){var e=this.getMultiSelectFieldWrapper(),t=e.querySelectorAll("ifx-multi-select-input-item"),i=Array.from(t).reduce(function(o,l){return o+l.offsetWidth},0);return i}isOverflown(e){return e.scrollWidth>e.clientWidth}addSelectSlider(e){var t=this.getMultiSelectFieldWrapper(),i=t.querySelectorAll("ifx-multi-select-input-item"),o=Array.from(i).reduce(function(l,s){return l+s.offsetWidth},0);e==="left"?t.scrollLeft-=o:e==="right"&&(t.scrollLeft+=o)}async addItemValueToTextField(e){var t;const i=this.getMultiSelectFieldWrapper(),o=document.createElement("ifx-multi-select-input-item");o.setAttribute("target",(t=e.target)===null||t===void 0?void 0:t.index),o.setAttribute("content",e.value),i.append(o),setTimeout(()=>{this.toggleSlideButtons()},20)}addEventListeners(){const e=this.getDropdownMenu();let t=this.el.querySelector("ifx-dropdown-menu");document.addEventListener("click",this.handleOutsideClick.bind(this)),e.addEventListener("click",this.addActiveMenuItem),t.addEventListener("selectValues",i=>{this.addItemValueToTextField(i.detail),this.handleButtonClose(i.detail)})}componentDidLoad(){this.getMultiSelectFieldContainer().addEventListener("click",this.toggleDropdownMenu.bind(this)),this.addEventListeners()}render(){return n("div",{class:"multiSelect dropdown"},n("div",{class:"multiSelectInput__container",tabindex:1},this.isOverflowing&&n("span",{class:"prev",onClick:()=>this.addSelectSlider("left")},n("ifx-icon",{icon:"chevron-left-16"})),this.isOverflowing&&n("span",{class:"next",onClick:()=>this.addSelectSlider("right")},n("ifx-icon",{icon:"chevron-right-16"})),n("div",{class:"multiSelectInput__wrapper"},n("div",{class:"multiSelectInput__content"},this.isEmpty&&n("span",null,this.Placeholder))),n("div",{class:"multiSelectInput__icon-wrapper"},n("ifx-icon",{icon:"chevron-down-16"}))),n("slot",{name:"menu"}))}get el(){return u(this)}};a.style=p;export{a as ifx_multi_select_input};