"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[314],{314:function(e,t,o){o.r(t),o.d(t,{ifx_chip:function(){return l}});var r=o(5671),n=o(9466),i=o(3144),l=function(){function e(t){var o=this;(0,r.Z)(this,e),(0,i.r)(this,t),this.addActiveMenuItem=function(e){var t=o.getClickedElement(e.composedPath()[0]),r=e.target.shadowRoot.querySelector("a"),n=e.target.checkable;o.uncheckCheckboxes(r),t?n?o.toggleCheckbox(t):(o.removeActiveMenuItem(),o.handleClassList(t,"add","active"),o.toggleDropdownMenu()):!1===r.querySelector("ifx-checkbox").checked&&o.returnToDefaultLabel()},this.placeholder=void 0,this.isEmpty=!0}return(0,n.Z)(e,[{key:"handleOutsideClick",value:function(e){e.composedPath().includes(this.el)||this.closeDropdownMenu()}},{key:"getDropdownMenu",value:function(){var e=this.el.querySelector("ifx-dropdown-menu");if(e)return(e=this.el.querySelector("ifx-dropdown-menu").shadowRoot).querySelector(".dropdown-menu")}},{key:"getDropdownWrapper",value:function(){return this.el.shadowRoot.querySelector(".dropdown")}},{key:"getDropdownItems",value:function(){return this.el.querySelectorAll("ifx-dropdown-item")}},{key:"handleClassList",value:function(e,t,o){null===e||void 0===e||e.classList[t](o)}},{key:"toggleDropdownMenu",value:function(){var e=this.getTextField(),t=e.querySelector(".wrapper-close-button"),o=e.closest(".wrapper"),r=this.getDropdownMenu(),n=this.getDropdownWrapper();this.handleClassList(r,"toggle","show"),this.handleClassList(n,"toggle","show"),this.handleClassList(t,"toggle","show"),this.handleClassList(o,"toggle","open")}},{key:"closeDropdownMenu",value:function(){var e=this.getDropdownMenu(),t=this.getDropdownWrapper(),o=this.getTextField(),r=o.closest(".wrapper"),n=o.querySelector(".wrapper-close-button");this.handleClassList(e,"remove","show"),this.handleClassList(t,"remove","show"),this.handleClassList(n,"remove","show"),this.handleClassList(r,"remove","open")}},{key:"removeActiveMenuItem",value:function(){for(var e=this.getDropdownItems(),t=0;t<e.length;t++)this.handleClassList(e[t].shadowRoot.querySelector("a"),"remove","active")}},{key:"uncheckCheckboxes",value:function(e){for(var t=this.getDropdownItems(),o=0;o<t.length;o++)t[o].shadowRoot.querySelector("a")!==e&&(t[o].shadowRoot.querySelector("a").querySelector("ifx-checkbox").checked=!1)}},{key:"returnToDefaultLabel",value:function(){this.getTextField().querySelector(".wrapper-label").innerHTML=this.placeholder}},{key:"toggleCheckbox",value:function(e){this.uncheckCheckboxes(e),e.querySelector("ifx-checkbox").checked=!e.querySelector("ifx-checkbox").checked,!1===e.querySelector("ifx-checkbox").checked&&this.returnToDefaultLabel()}},{key:"getClickedElement",value:function(e){return(e instanceof SVGElement||!e.className.includes("dropdown-menu")&&!e.className.includes("form-check-input"))&&e.closest(".dropdown-item")}},{key:"getTextField",value:function(){return this.el.shadowRoot.querySelector(".wrapper")}},{key:"addItemValueToTextField",value:function(e){var t,o=this.getTextField().querySelector(".wrapper-label");e.target.setAttribute("target",null===(t=e.target)||void 0===t?void 0:t.index),o.innerHTML=e.value}},{key:"addEventListeners",value:function(){var e=this,t=this.getDropdownMenu();document.addEventListener("click",this.handleOutsideClick.bind(this)),t.addEventListener("click",this.addActiveMenuItem),this.el.querySelector("ifx-dropdown-menu").addEventListener("selectValues",(function(t){e.addItemValueToTextField(t.detail)}))}},{key:"componentDidRender",value:function(){var e=this.getTextField();e&&(e.addEventListener("click",this.toggleDropdownMenu.bind(this)),this.addEventListeners())}},{key:"render",value:function(){return(0,i.h)("div",{class:"dropdown container"},(0,i.h)("div",{class:"wrapper"},(0,i.h)("div",{class:"wrapper-label"},this.placeholder),(0,i.h)("div",{class:"wrapper-close-button"},(0,i.h)("ifx-icon",{icon:"chevrondown12"}))),(0,i.h)("slot",{name:"menu"}))}},{key:"el",get:function(){return(0,i.g)(this)}}]),e}();l.style='*{font-family:"Source Sans 3"}.container{position:relative}.container .wrapper{display:inline-flex;flex-direction:row;align-items:center;padding:8px 16px;gap:8px;background:#FFFFFF;border:1px solid #BFBBBB;border-radius:100px}.container .wrapper:hover{cursor:pointer;border:1px solid #575352}.container .wrapper:active{border:1px solid #0A8276}.container .wrapper.open{border:1px solid #0A8276}.container .wrapper .wrapper-label{font-style:normal;font-weight:400;font-size:0.813rem;line-height:1.25rem;display:flex;align-items:center;color:#1D1D1D;flex:none;order:0;flex-grow:0}.container .wrapper .wrapper-close-button ifx-icon{transition:0.3s}.container .wrapper .wrapper-close-button.show ifx-icon{transition:0.3s;transform:rotate(180deg)}.container .wrapper .wrapper-close-button ifx-icon{width:12px;height:12px;flex:none;order:1;flex-grow:0}'}}]);
//# sourceMappingURL=314.747c9188.chunk.js.map