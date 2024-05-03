"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[544],{5544:function(o,e,n){n.r(e),n.d(e,{ifx_dropdown:function(){return d}});var t=n(5671),r=n(9466),i=n(6672),d=function(){function o(e){var n=this;(0,t.Z)(this,o),(0,i.r)(this,e),this.addActiveMenuItem=function(o){var e=n.getClickedElement(o.composedPath()[0]),t=o.target.checkable;e&&(t?n.toggleCheckbox(e):(n.removeActiveMenuItem(),n.handleClassList(e,"add","active"),n.toggleDropdownMenu()))},this.label=void 0,this.size=void 0,this.disabled=void 0,this.icon=!1,this.search=!1,this.filter=!1}return(0,r.Z)(o,[{key:"handleOutsideClick",value:function(o){o.composedPath().includes(this.el)||this.closeDropdownMenu()}},{key:"getDropdownMenu",value:function(){return this.el.querySelector("ifx-dropdown-menu").shadowRoot.querySelector(".dropdown-menu")}},{key:"getDropdownWrapper",value:function(){return this.el.shadowRoot.querySelector(".dropdown")}},{key:"getDropdownItems",value:function(){return this.el.querySelectorAll("ifx-dropdown-item")}},{key:"handleClassList",value:function(o,e,n){o.classList[e](n)}},{key:"toggleDropdownMenu",value:function(){var o=this.getDropdownMenu(),e=this.getDropdownWrapper();this.handleClassList(o,"toggle","show"),this.handleClassList(e,"toggle","show")}},{key:"closeDropdownMenu",value:function(){var o=this.getDropdownMenu(),e=this.getDropdownWrapper();this.handleClassList(o,"remove","show"),this.handleClassList(e,"remove","show")}},{key:"removeActiveMenuItem",value:function(){for(var o=this.getDropdownItems(),e=0;e<o.length;e++)this.handleClassList(o[e].shadowRoot.querySelector("a"),"remove","active")}},{key:"toggleCheckbox",value:function(o){o.querySelector("input").checked=!o.querySelector("input").checked}},{key:"getClickedElement",value:function(o){return(o instanceof SVGElement||!o.className.includes("dropdown-menu")&&!o.className.includes("form-check-input"))&&o.closest(".dropdown-item")}},{key:"addEventListeners",value:function(){var o=this.getDropdownMenu();document.addEventListener("click",this.handleOutsideClick.bind(this)),o.addEventListener("click",this.addActiveMenuItem)}},{key:"componentDidRender",value:function(){var o=this.el.querySelector("ifx-button");if(o){var e=o.shadowRoot.querySelector("button");e.classList.contains("disabled")||(e.addEventListener("click",this.toggleDropdownMenu.bind(this)),this.addEventListeners())}}},{key:"render",value:function(){return(0,i.h)("div",{class:"dropdown"},(0,i.h)("slot",{name:"button"}),(0,i.h)("slot",null))}},{key:"el",get:function(){return(0,i.g)(this)}}]),o}();d.style='@charset "UTF-8";@font-face{font-family:"Source Sans Pro";font-style:normal;font-weight:400;src:local(""),url("fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-regular.woff2") format("woff2"),url("fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-regular.woff") format("woff")}@font-face{font-family:"Source Sans Pro";font-style:normal;font-weight:600;src:local(""),url("fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-600.woff2") format("woff2"),url("fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-600.woff") format("woff")}@font-face{font-family:"Source Sans Pro";font-style:normal;font-weight:700;src:local(""),url("fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-700.woff2") format("woff2"),url("fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-700.woff") format("woff")}*{box-sizing:border-box;line-height:1.75;font-family:"Source Sans Pro"}.btn{display:inline-flex;align-items:center;min-width:80px;min-height:40px;padding:0px 16px;gap:8px;color:#FFFFFF;flex-direction:row;font-weight:600;border-radius:1px;line-height:24px;outline:none;font-family:"Source Sans Pro";text-decoration:none;user-select:none;border:1px solid rgba(0, 0, 0, 0);font-size:1rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.btn:not(.disabled){cursor:pointer}.btn-primary{color:#ffffff;background-color:#378375;border-color:#378375}.btn-outline-primary{background-color:#ffffff;color:#378375;border-color:#378375}.btn-secondary{color:#ffffff;background-color:#ab377a;border-color:#ab377a}.btn-outline-secondary{background-color:#ffffff;color:#ab377a;border-color:#ab377a}.btn-success{color:#1d1d1d;background-color:#aec067;border-color:#aec067}.btn-outline-success{background-color:#ffffff;border-color:#aec067}.btn-danger{color:#ffffff;background-color:#cd002f;border-color:#cd002f}.btn-outline-danger{background-color:#ffffff;color:#cd002f;border-color:#cd002f}.btn-warning{color:#1d1d1d;background-color:#f07f3c;border-color:#f07f3c}.btn-outline-warning{background-color:#ffffff;border-color:#f07f3c}.btn.btn-s{font-size:0.8125rem;min-width:71px;min-height:32px;line-height:16px}.btn.icon-button{min-width:initial;min-height:initial;width:40px;height:40px;padding:0;justify-content:center}.btn.icon-button.btn-round{border-radius:100px}.btn.icon-button.btn-square{border-radius:1px}.btn.icon-button.btn-s{width:32px;height:32px}.btn.btn-primary:focus,.btn.btn-outline-primary:focus,.btn.btn-secondary:focus,.btn.btn-outline-secondary:focus,.btn.btn-success:focus,.btn.btn-outline-success:focus,.btn.btn-danger:focus,.btn.btn-outline-danger:focus,.btn.btn-warning:focus,.btn.btn-outline-warning:focus,.btn.btn-outline-text:focus{box-shadow:none}.btn.btn-primary:focus-visible,.btn.btn-outline-primary:focus-visible,.btn.btn-secondary:focus-visible,.btn.btn-outline-secondary:focus-visible,.btn.btn-success:focus-visible,.btn.btn-outline-success:focus-visible,.btn.btn-danger:focus-visible,.btn.btn-outline-danger:focus-visible,.btn.btn-warning:focus-visible,.btn.btn-outline-warning:focus-visible,.btn.btn-outline-text:focus-visible{box-shadow:0 0 0 3px #B4DDD8}.btn:disabled,.btn.disabled{opacity:1;background-color:#dcd5d7;border-color:#dcd5d7;color:#ffffff}.btn.btn-primary:not(:disabled,.disabled):focus{background-color:#378375;border-color:#378375}.btn.btn-primary:not(:disabled,.disabled):hover{background-color:#2d6357;border-color:#2d6357}.btn.btn-primary:not(:disabled,.disabled):active,.btn.btn-primary:not(:disabled,.disabled).active{background-color:#28594e;border-color:#28594e}.btn.btn-outline-primary:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-primary:not(:disabled,.disabled):hover{color:#ffffff;background-color:#2d6357;border-color:#2d6357}.btn.btn-outline-primary:not(:disabled,.disabled):active,.btn.btn-outline-primary:not(:disabled,.disabled).active{background-color:#28594e;border-color:#28594e}.btn.btn-secondary:not(:disabled,.disabled):focus{background-color:#ab377a;border-color:#ab377a}.btn.btn-secondary:not(:disabled,.disabled):hover{background-color:#99316d;border-color:#99316d}.btn.btn-secondary:not(:disabled,.disabled):active,.btn.btn-secondary:not(:disabled,.disabled).active{background-color:#822060;border-color:#822060}.btn.btn-outline-secondary:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-secondary:not(:disabled,.disabled):hover{color:#ffffff;background-color:#99316d;border-color:#99316d}.btn.btn-outline-secondary:not(:disabled,.disabled):active,.btn.btn-outline-secondary:not(:disabled,.disabled).active{background-color:#822060;border-color:#822060}.btn.btn-success:not(:disabled,.disabled):focus{background-color:#aec067;border-color:#aec067}.btn.btn-success:not(:disabled,.disabled):hover{background-color:#91a646;border-color:#91a646}.btn.btn-success:not(:disabled,.disabled):active,.btn.btn-success:not(:disabled,.disabled).active{background-color:#7d933c;border-color:#7d933c}.btn.btn-outline-success:not(:disabled,.disabled){color:#1d1d1d}.btn.btn-outline-success:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-success:not(:disabled,.disabled):hover{background-color:#91a646;border-color:#91a646}.btn.btn-outline-success:not(:disabled,.disabled):active,.btn.btn-outline-success:not(:disabled,.disabled).active{background-color:#7d933c;border-color:#7d933c}.btn.btn-danger:not(:disabled,.disabled):focus{background-color:#cd002f;border-color:#cd002f}.btn.btn-danger:not(:disabled,.disabled):hover{background-color:#bf0023;border-color:#bf0023}.btn.btn-danger:not(:disabled,.disabled):active,.btn.btn-danger:not(:disabled,.disabled).active{background-color:#900021;border-color:#900021}.btn.btn-outline-danger:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-danger:not(:disabled,.disabled):hover{color:#ffffff;background-color:#bf0023;border-color:#bf0023}.btn.btn-outline-danger:not(:disabled,.disabled):active,.btn.btn-outline-danger:not(:disabled,.disabled).active{background-color:#900021;border-color:#900021}.btn.btn-warning:not(:disabled,.disabled):focus{background-color:#f07f3c;border-color:#f07f3c}.btn.btn-warning:not(:disabled,.disabled):hover{background-color:#d97336;border-color:#d97336}.btn.btn-warning:not(:disabled,.disabled):active,.btn.btn-warning:not(:disabled,.disabled).active{background-color:#cc6e33;border-color:#cc6e33}.btn.btn-outline-warning:not(:disabled,.disabled){color:#1d1d1d}.btn.btn-outline-warning:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-warning:not(:disabled,.disabled):hover{background-color:#d97336;border-color:#d97336}.btn.btn-outline-warning:not(:disabled,.disabled):active,.btn.btn-outline-warning:not(:disabled,.disabled).active{background-color:#cc6e33;border-color:#cc6e33}.btn.btn-primary-outline-text{background-color:transparent;color:#378375}.btn.btn-primary-outline-text:hover{color:#2d6357}.btn.btn-primary-outline-text:active,.btn.btn-primary-outline-text.active{color:#28594e}.btn.btn-primary-outline-text:disabled,.btn.btn-primary-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}.btn.btn-secondary-outline-text{background-color:transparent;color:#ab377a}.btn.btn-secondary-outline-text:hover{color:#99316d}.btn.btn-secondary-outline-text:active,.btn.btn-secondary-outline-text.active{color:#822060}.btn.btn-secondary-outline-text:disabled,.btn.btn-secondary-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}.btn.btn-success-outline-text{background-color:transparent;color:#aec067}.btn.btn-success-outline-text:hover{color:#91a646}.btn.btn-success-outline-text:active,.btn.btn-success-outline-text.active{color:#7d933c}.btn.btn-success-outline-text:disabled,.btn.btn-success-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}.btn.btn-danger-outline-text{background-color:transparent;color:#cd002f}.btn.btn-danger-outline-text:hover{color:#bf0023}.btn.btn-danger-outline-text:active,.btn.btn-danger-outline-text.active{color:#900021}.btn.btn-danger-outline-text:disabled,.btn.btn-danger-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}.btn.btn-warning-outline-text{background-color:transparent;color:#f07f3c}.btn.btn-warning-outline-text:hover{color:#d97336}.btn.btn-warning-outline-text:active,.btn.btn-warning-outline-text.active{color:#cc6e33}.btn.btn-warning-outline-text:disabled,.btn.btn-warning-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}.card{position:relative;display:inline-flex;flex-direction:column;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid #ebe9e9;border-radius:1px;width:22rem;height:auto}.card .card-img ::slotted([slot=img]){width:100%;vertical-align:bottom}.card .card-body{padding:24px}.card.horizontal{flex-direction:row;width:538px}.card.horizontal.hasAll{height:auto}.card.horizontal.largeSize{height:218px}.card.horizontal.smallSize{height:138px}.card.horizontal .card-body{flex:1;width:0;padding:17px 24px 25px 25px}.card.horizontal .card-img{flex:1;order:2}.card.horizontal .card-img ::slotted([slot=img]){width:100%;height:100%;vertical-align:bottom;object-fit:cover}.card.horizontal.right .card-img{order:1}.card.horizontal.right .card-body{order:2}.dropdown{position:relative}.dropdown .btn{min-width:200px}.dropdown .dropdown-toggle::after{content:"";display:inline-block;border:none;vertical-align:-2px;margin-left:10px;background-position:center;background-repeat:no-repeat;transition:transform 0.2s ease-in-out;background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23FFF\' viewBox=\'0 0 448 512\'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d=\'M4.251 181.1C7.392 177.7 11.69 175.1 16 175.1c3.891 0 7.781 1.406 10.86 4.25l197.1 181.1l197.1-181.1c6.5-6 16.64-5.625 22.61 .9062c6 6.5 5.594 16.59-.8906 22.59l-208 192c-6.156 5.688-15.56 5.688-21.72 0l-208-192C-1.343 197.7-1.749 187.6 4.251 181.1z\'/%3E%3C/svg%3E")}.dropdown.show .dropdown-toggle::after{transform:rotate(-180deg);background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23FFF\' viewBox=\'0 0 448 512\'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d=\'M4.251 181.1C7.392 177.7 11.69 175.1 16 175.1c3.891 0 7.781 1.406 10.86 4.25l197.1 181.1l197.1-181.1c6.5-6 16.64-5.625 22.61 .9062c6 6.5 5.594 16.59-.8906 22.59l-208 192c-6.156 5.688-15.56 5.688-21.72 0l-208-192C-1.343 197.7-1.749 187.6 4.251 181.1z\'/%3E%3C/svg%3E")}.dropdown .btn-sm+.dropdown-menu{transform:translate3d(0px, 56.75px, 0px) !important}.dropdown .btn-lg+.dropdown-menu{transform:translate3d(0px, 72.5px, 0px) !important}.show>.btn-secondary.dropdown-toggle:focus{box-shadow:none}.svg-wrapper{display:inline-block}.dropdown-menu{display:none;box-sizing:border-box;background:#FFFF;box-shadow:0px 0px 16px rgba(29, 29, 29, 0.12);border-radius:1px;margin-top:8px}.dropdown-menu ifx-search-input{max-width:150px}.dropdown-menu.show{display:inline-block;position:absolute;min-width:224px;padding:0;border:none;border-radius:1px}.dropdown-menu.show.nested{transform:none !important;position:static}.dropdown-menu.show .form-control,.dropdown-menu.show .form-select{margin:16px}.dropdown-menu.show .form-select{color:#c5bbbd}.dropdown-menu.show .ifx__search-icon-wrapper{margin-right:24px}.dropdown-menu.show .dropdown-item{display:flex;align-items:center;width:100%;text-align:inherit;white-space:nowrap;border:0;padding:8px 16px;background-color:rgba(0, 0, 0, 0);text-decoration:none;color:#1d1d1d}.dropdown-menu.show .dropdown-item .form-check-label:hover{cursor:pointer}.dropdown-menu.show .dropdown-item:hover{font-weight:600;background-color:#ebe9e9}.dropdown-menu.show .dropdown-item:hover svg{color:#1d1d1d}.dropdown-menu.show .dropdown-item.active,.dropdown-menu.show .dropdown-item:active{font-weight:600;background-color:transparent;color:#378375}.dropdown-menu.show .dropdown-item.active svg,.dropdown-menu.show .dropdown-item:active svg{color:#378375}.dropdown-menu.show .dropdown-item svg{width:13px;height:13px;margin-right:10px;vertical-align:-0.5px}.dropdown-menu.show .form-check-label{font-weight:400}.dropdown-item{display:flex;align-items:center;gap:12px;width:100%;text-align:inherit;white-space:nowrap;border:0;padding:8px 16px;text-decoration:none;color:#1d1d1d}.dropdown-item.primary input[type=checkbox]{accent-color:#378375}.dropdown-item.secondary input[type=checkbox]{accent-color:#ab377a}.dropdown-item.success input[type=checkbox]{accent-color:#aec067}.dropdown-item.danger input[type=checkbox]{accent-color:#cd002f}.dropdown-item.warning input[type=checkbox]{accent-color:#f07f3c}.dropdown-item .form-check-label:hover{cursor:pointer}.dropdown-item .form-check-input{border-radius:1px}.dropdown-item:hover{font-weight:600;background-color:#ebe9e9}.dropdown-item:hover svg{color:#1d1d1d}.dropdown-item.active,.dropdown-item:active{font-weight:600;background-color:transparent;color:#378375}.dropdown-item.active svg,.dropdown-item:active svg{color:#378375;fill:none}:host{display:block}.search-input{background:#FFFFFF;flex-direction:row;align-items:center;padding:16px 16px;flex:1}.search-input.inside-dropdown{max-width:192px}.search-input .search-input__wrapper{height:40px;box-sizing:border-box;display:flex;align-items:center;border:1px solid #8D8786;border-radius:1px;padding:12px 16px;gap:12px;flex:none;order:0;align-self:stretch;flex-grow:0;position:relative}.search-input .search-input__wrapper.search-input__wrapper-s{height:40px}.search-input .search-input__wrapper.search-input__wrapper-outline-light{border:1px solid #8D8786}.search-input .search-input__wrapper.search-input__wrapper-outline-dark{border:1px solid #3C3A39}.search-input .search-input__wrapper.search-input__wrapper-outline-green{border:1px solid #0A8276}.search-input .search-input__wrapper ::slotted(.search-icon){left:12px}.search-input .search-input__wrapper .delete-icon{right:12px}.search-input .search-input__wrapper input[type=text]{line-height:24px;font-family:"Source Sans Pro";font-style:normal;font-weight:400;font-size:16px;color:#8D8786;border:none;width:100%;min-width:168px}.search-input .search-input__wrapper input[type=text]:focus{outline:none}.search-input .search-input__wrapper input[type=text]:disabled{background-color:#EEEDED}.search-input .search-input__wrapper:has(input[disabled]){background-color:#EEEDED}.inf__filter-input{width:160px;min-height:calc(1.75em + 18px);font-size:0.8125rem;margin:16px;display:block;padding:8px 16px;font-family:"Source Sans Pro";font-weight:400;line-height:1.75;color:#1d1d1d;background-color:#fff;background-clip:padding-box;border:1px solid #c5bbbd;appearance:none;border-radius:1px;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.ifx__alert-text{font-size:16px;width:100%;padding:12px 0px 12px 12px;color:#1d1d1d}.ifx__alert-text.text-overflow{word-break:break-all}.ifx__alert-icon-wrapper{display:none}.ifx__alert-icon-wrapper.show{position:relative;min-width:48px;display:flex;justify-content:center;align-items:center;background-color:#378375}.ifx__close-icon-wrapper{display:flex;align-items:center;justify-content:center;min-width:40px}.ifx__close-icon-wrapper a{line-height:0;color:#1d1d1d}.ifx__close-icon-wrapper a:hover svg{stroke:#378375}.alert{display:flex;border:1px solid #378375;border-radius:1px;max-width:800px}.alert-primary,.alert-secondary,.alert-danger,.alert-success,.alert-warning{color:#1d1d1d;background-color:#ffffff}.alert-primary{border:1px solid #378375}.alert-primary .ifx__alert-icon-wrapper{background-color:#378375;color:#ffffff}.alert-secondary{border:1px solid #ab377a}.alert-secondary .ifx__alert-icon-wrapper{background-color:#ab377a;color:#ffffff}.alert-success{border:1px solid #aec067}.alert-success .ifx__alert-icon-wrapper{background-color:#aec067;color:#ffffff}.alert-danger{border:1px solid #cd002f}.alert-danger .ifx__alert-icon-wrapper{background-color:#cd002f;color:#ffffff}.alert-warning{border:1px solid #f07f3c}.alert-warning .ifx__alert-icon-wrapper{background-color:#f07f3c;color:#ffffff}.ifx-link{display:inline-flex;align-items:center;gap:8px;font-weight:600;font-size:16px;line-height:24px;color:#378375;text-decoration:none}.ifx-link.underline{text-decoration:underline;color:#1d1d1d;text-decoration-color:#378375}.list-group-container{display:inline-flex;flex-direction:column;gap:3px}.list-group-item{display:flex;align-items:center;justify-content:space-between;height:40px;width:350px;padding:8px 16px;background-color:#ffffff;border:1px solid #ebe9e9;border-radius:1px 1px 0px 0px;font-style:normal;font-weight:400;font-size:16px;line-height:24px}.list-group-item.flush{border:none;border-bottom:1px solid #ebe9e9}.list-group-item.flush.bulletpoint{padding:8px}.list-group-item.bulletpoint .list-group-item-content::before{content:"\u2022";display:inline-block;font-size:18px;padding-right:10px}.list-group-item:hover:not(.show){background-color:#ebe9e9}.list-group-item:active:not(.show){background-color:#378375;color:#ffffff}.list-group-item.show{display:block;height:88px;padding:16px}.list-group-notification{width:350px;height:88px;padding:16px;margin-bottom:8px;background-color:#ffffff;border:1px solid #ebe9e9}.list-group-notification .description__section{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.list-group-notification.flush{border:none;border-bottom:1px solid #ebe9e9}.list-group-notification .heading__section{display:flex;justify-content:space-between;margin-bottom:8px;color:#378375}.list-group-notification .heading__section-title{flex:1;margin:0;font-family:"Source Sans Pro";font-weight:600;line-height:1.2;font-size:1rem;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.list-group-notification .heading__section-time{flex:1;margin-left:2px;font-size:14px;line-height:20px;font-weight:400;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.numberIndicator__container{display:inline-flex;justify-content:center;align-items:center;min-width:16px;height:16px;padding:0px 4px;background-color:#378375;color:#ffffff;border-radius:100px;font-weight:600;font-size:14px;line-height:16px}.numberIndicator__container.inverted{background-color:#ffffff;color:#378375}'}}]);
//# sourceMappingURL=544.243f0251.chunk.js.map