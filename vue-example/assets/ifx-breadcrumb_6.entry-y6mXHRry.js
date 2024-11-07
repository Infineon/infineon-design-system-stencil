import{r as a,h as n,g as l,c,H as u}from"./index-BuT-J6V5.js";import{g as f}from"./icons-4575d84a-Bveiqm1q.js";const m=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.breadcrumb{list-style:none;padding:0px;margin:0px;display:flex;flex-direction:row;font-family:var(--ifx-font-family);font-size:0.875rem;align-items:flex-start}',b=m,x=class{constructor(e){a(this,e)}componentDidLoad(){const e=this.el.shadowRoot.firstChild;this.validateBreadcrumbItemStructure(e)}validateBreadcrumbItemStructure(e){if(!e){console.error("element not found");return}const t=e.querySelector("slot");if(t){const o=t.assignedNodes();for(let i=0;i<o.length;i++){const s=o[i];if(s.nodeName==="IFX-BREADCRUMB-ITEM"){const r=s,d=r.querySelector("ifx-breadcrumb-item-label"),p=r.querySelector("ifx-dropdown-menu");if(d.hasAttribute("url")&&p)throw new Error("ifx-breadcrumb-item cannot have both a url and a dropdown menu.")}}}}render(){return n("nav",{key:"82aec60bebf9a71d7cdcfc2916f91c0e36dee868","aria-label":"Page navigation breadcrumb"},n("ol",{key:"70bae75b26b5df4c509f16c0ab8e2b10333de8ac",class:"breadcrumb"},n("slot",{key:"1cb28e3640f20319349b4f6d3cb1568508d3b1ba"})))}get el(){return l(this)}};x.style=b;const w=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.breadcrumb-parent{display:flex;flex-direction:row;align-items:center;padding:0px;gap:12px;min-height:24px;justify-content:center}.breadcrumb-parent:hover{cursor:pointer}.breadcrumb-parent .breadcrumb-wrapper{display:flex;flex-direction:row;align-items:center;padding:0px;gap:8px;position:relative}.breadcrumb-parent .breadcrumb-wrapper .dropdown-menu{display:none;position:absolute;top:20px}.breadcrumb-parent .breadcrumb-wrapper .dropdown-menu.open{display:block}.breadcrumb-parent .breadcrumb-wrapper a{text-decoration:none;color:#1D1D1D;font-family:var(--ifx-font-family);font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;display:flex;align-items:center;color:#1D1D1D;flex-direction:column;justify-content:center;padding:0px;border-bottom:1px solid #1D1D1D}.breadcrumb-parent .breadcrumb-divider{width:10px;height:16px;color:#EEEDED;line-height:13px;font-size:1.25rem;margin-right:12px}',g=w,y=class{constructor(e){a(this,e),this.isLastItem=!1,this.uniqueId=void 0,this.hasDropdownMenu=!1}handleOutsideClick(e){e.composedPath().includes(this.el)||this.closeDropdownMenu()}handleKeyDown(e){e.key==="Enter"||e.key===" "?this.toggleDropdownMenu():e.key==="Escape"&&this.closeDropdownMenu()}getDropdownMenu(){return this.el.shadowRoot.querySelector(".dropdown-menu")}menuWrapperEventReEmitter(e){this.emittedElement=e.detail}getMenuIconWrapper(){return this.emittedElement}handleClassList(e,t,o){e.classList[t](o)}closeDropdownMenu(){if(this.hasDropdownMenu){const e=this.getDropdownMenu(),t=this.getMenuIconWrapper();this.handleClassList(e,"remove","open"),this.handleClassList(t,"remove","show")}}toggleDropdownMenu(){if(this.hasDropdownMenu){const e=this.getDropdownMenu(),t=this.getMenuIconWrapper();this.handleClassList(e,"toggle","open"),this.handleClassList(t,"toggle","show")}}isDropdownMenuOpen(){const e=this.getDropdownMenu();return this.hasDropdownMenu&&e&&e.classList.contains("open")}handleLastItem(){const e=this.el.closest("ifx-breadcrumb").querySelectorAll("ifx-breadcrumb-item");this.el===e[e.length-1]?this.isLastItem=!0:this.isLastItem=!1}generateUniqueId(e="id"){return`${e}-${Math.random().toString(36).substring(2,9)}`}componentWillLoad(){this.uniqueId||(this.uniqueId=this.generateUniqueId("breadcrumb-dropdown")),this.handleLastItem()}componentDidUpdate(){this.handleLastItem()}componentWillRender(){this.setHasDropdownMenuState()}setHasDropdownMenuState(){const e=this.getIfxDropdownMenuComponent();e&&(this.hasDropdownMenu=!!e)}getIfxDropdownMenuComponent(){return this.el.querySelector("ifx-dropdown-menu")}componentDidLoad(){const e=this.getIfxDropdownMenuComponent();if(this.hasDropdownMenu)e.isOpen=!0;else{const t=this.getMenuIconWrapper();this.handleClassList(t,"toggle","hide")}}render(){return n("li",{key:"5779bbe0854a084c33c1bb535655fe484165784e",class:"breadcrumb-parent","aria-current":`${this.isLastItem?"page":""}`},n("li",{key:"63e956424dda4002a84c7da17bfe42b3f7f830b0",role:"button",tabindex:this.hasDropdownMenu?0:-1,class:"breadcrumb-wrapper",onClick:()=>this.toggleDropdownMenu(),"aria-controls":this.uniqueId,"aria-haspopup":"menu","aria-label":"Toggle dropdown menu"},n("slot",{key:"14f66501d9ac8efc9ff9e6b771757e30c70814a6",name:"label"}),n("div",{key:"9620ab0608dc5c74aa39fe321a332421ee4c76b3",id:this.uniqueId,class:"dropdown-menu","aria-expanded":this.isDropdownMenuOpen(),"aria-label":"Dropdown menu"},n("slot",{key:"c4e6e9b1650f2467876f7824201139b369625b3d"}))),!this.isLastItem&&n("span",{key:"5c028ab8720841b8a2777a84d7ad3f933ab43b79",class:"breadcrumb-divider","aria-hidden":"true"},"/"))}get el(){return l(this)}};y.style=g;const I=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.breadcrumb-item-label-container{display:flex;align-items:center;gap:8px;text-decoration:none;color:#1D1D1D}.breadcrumb-item-label-container.margin{margin-left:16px}.breadcrumb-item-label-container ifx-icon:empty{display:none}.breadcrumb-item-label-container .label-icon-wrapper{display:inline-flex}.breadcrumb-item-label-container .menu-icon-wrapper{display:flex;justify-content:center;align-items:center;width:16px;height:16px}.breadcrumb-item-label-container .menu-icon-wrapper.hide{display:none}.breadcrumb-item-label-container .menu-icon-wrapper ifx-icon{transition:0.3s}.breadcrumb-item-label-container .menu-icon-wrapper.show ifx-icon{transition:0.3s;transform:rotate(180deg)}',D=I,M=class{constructor(e){a(this,e),this.breadcrumbMenuIconWrapper=c(this,"breadcrumbMenuIconWrapper",7),this.icon=void 0,this.iconAriaLabel=void 0,this.url=void 0,this.target="_self"}componentDidLoad(){const t=this.el.shadowRoot.querySelector(".breadcrumb-item-label-container").querySelector(".menu-icon-wrapper");this.breadcrumbMenuIconWrapper.emit(t)}render(){return n("a",{key:"dd125c445b9233ffd748760e4c553c73d4ce549c",href:this.url,target:this.target,class:"breadcrumb-item-label-container",role:"link"},n("ifx-icon",{key:"aefce7159d105df87660236e3b373f6ebba70f70",icon:this.icon,"aria-hidden":"true"}),n("span",{key:"822fbaea86f9854e96c11972759e87041ce82d01",class:"label-wrapper"},n("slot",{key:"63a4f6749680f5c29ef222d055f0d3bf2d10add8"})),n("span",{key:"8635855400bf03c7cae746e07512653a71bd902b",class:"menu-icon-wrapper","aria-hiden":"true"},n("ifx-icon",{key:"46716d95fc31e1a3a389e45393447ecf2d1949fe",icon:"chevron-down-12"})))}get el(){return l(this)}};M.style=D;const v=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.dropdown-item{text-decoration:none;color:#1D1D1D;display:flex;align-items:center;padding:8px 16px;gap:8px;font-family:var(--ifx-font-family)}.dropdown-item.hide{display:none}.dropdown-item span{color:#1D1D1D;font-size:16px;font-style:normal;font-weight:400;line-height:24px;}.dropdown-item.small span{font-size:14px}.dropdown-item:hover{cursor:pointer;background-color:#EEEDED}.dropdown-item:active{background-color:#BFBBBB}.icon{margin-right:4px}',S=v,k=class{constructor(e){a(this,e),this.ifxDropdownItem=c(this,"ifxDropdownItem",7),this.icon=void 0,this.href="",this.target="_self",this.hide=!1,this.size="l"}handleMenuSize(e){this.size=e.detail}handleEventEmission(){this.ifxDropdownItem.emit(this.el.textContent)}render(){let e=this.href?{href:this.href,target:this.target}:{};return n("a",Object.assign({key:"3c7e061f9508b493bd785551a4f7a0c4d4d28089"},e,{onClick:()=>this.handleEventEmission(),class:`dropdown-item ${this.size==="s"?"small":""} ${this.hide?"hide":""}`}),this.icon&&n("ifx-icon",{key:"91743f629c462d98aab8ca751093da0eb1accc4c",class:"icon",icon:this.icon}),n("span",{key:"832a9090c808cca9432ee38303f086f5ff5b7670"},n("slot",{key:"cc910ad035b750195b38278391a334dd1aa451ea"})))}get el(){return l(this)}};k.style=S;const E=":host{position:relative;z-index:1000}.dropdown-menu{display:none;visibility:hidden;flex-direction:column;width:224px;max-height:289px;min-width:224px;overflow-y:auto;background:#FFFFFF;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;padding:8px 0px;font-family:var(--ifx-font-family)}.dropdown-menu.small{max-height:266px;max-width:186px;overflow-y:auto}.dropdown-menu.hideTopPadding{padding-top:0px}.dropdown-menu.show{display:flex;visibility:visible;position:absolute}",L=E,C=class{constructor(e){a(this,e),this.menuSize=c(this,"menuSize",7),this.ifxDropdownMenuItem=c(this,"ifxDropdownMenuItem",7),this.isOpen=!1,this.size="l",this.hideTopPadding=!1,this.filteredItems=[]}handleMenuFilter(e){const t=e.detail;this.filterDropdownItems(t)}handleDropdownItemValueEmission(e){this.ifxDropdownMenuItem.emit(e.detail)}filterDropdownItems(e){const t=Array.from(this.el.querySelectorAll("ifx-dropdown-item"));let o,i,s=e.toUpperCase();for(let r=0;r<t.length;r++)o=t[r],i=o.textContent||o.innerText,i.toUpperCase().indexOf(s)>-1?o.setAttribute("hide",!1):o.setAttribute("hide",!0)}componentWillUpdate(){this.menuSize.emit(this.size)}componentWillLoad(){this.filteredItems=Array.from(this.el.querySelectorAll("ifx-dropdown-item"));const e=this.el.querySelector("ifx-search-field"),t=this.el.querySelector("ifx-dropdown-header");e||t?this.hideTopPadding=!0:this.hideTopPadding=!1}render(){return n("div",{key:"6604ba596a0da542ae0d68c217c25a7951d0cfde",class:`dropdown-menu 
      ${this.isOpen?"show":""} 
      ${this.hideTopPadding?"hideTopPadding":""}
      ${this.size==="s"?"small":""}`},n("slot",{key:"0fceab1c429ec43ce2c25e28703c120fee46c9d6"}))}get el(){return l(this)}};C.style=L;const q="ifx-icon{display:inline-flex;justify-content:center}ifx-icon:empty{display:none}",T=q,z=class{constructor(e){a(this,e),this.consoleError=c(this,"consoleError",7),this.icon="",this.ifxIcon=void 0}convertStringToHtml(e){const t=document.createElement("div");return t.innerHTML=e,t.firstChild}convertHtmlToObject(e){return Array.from(e.attributes,({name:o,value:i})=>({name:o,value:i})).reduce((o,i)=>(o[i.name]=i.value,o),{})}convertPathsToVnode(e){let t=[];const o=this.convertHtmlToObject(e),i=n("path",o);if(t.push(i),e.firstChild){const s=e.querySelectorAll("path"),r=e.querySelectorAll("path").length;for(let d=0;d<r;d++){let p=this.convertHtmlToObject(s[d]),h=n("path",p);t.push(h)}}return t}getSVG(e){return n("svg",{class:"inline-svg",width:this.ifxIcon.width,height:this.ifxIcon.height,xmlns:"http://www.w3.org/2000/svg",fill:this.ifxIcon.fill,viewBox:this.ifxIcon.viewBox},...e)}constructIcon(){if(this.ifxIcon){const e=this.convertStringToHtml(this.ifxIcon.svgContent),t=this.convertPathsToVnode(e);return this.getSVG(t)}else if(this.icon!==""){console.error("Icon not found!"),this.consoleError.emit(!0);return}else return}componentWillLoad(){const e=t=>t.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,(o,i)=>i);this.ifxIcon=f(e(this.icon))}render(){return n(u,{key:"a87c4af3053dd98421a76a254e9eaa624421c615"},this.constructIcon())}};z.style=T;export{x as ifx_breadcrumb,y as ifx_breadcrumb_item,M as ifx_breadcrumb_item_label,k as ifx_dropdown_item,C as ifx_dropdown_menu,z as ifx_icon};
