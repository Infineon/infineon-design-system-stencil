import{r as o,h as t,g as s}from"./index-VhSW81qW.js";const a=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.breadcrumb-parent{display:flex;flex-direction:row;align-items:center;padding:0px;gap:12px;min-height:24px;justify-content:center}.breadcrumb-parent:hover{cursor:pointer}.breadcrumb-parent .breadcrumb-wrapper{display:flex;flex-direction:row;align-items:center;padding:0px;gap:8px;position:relative}.breadcrumb-parent .breadcrumb-wrapper .dropdown-menu{display:none;position:absolute;top:20px}.breadcrumb-parent .breadcrumb-wrapper .dropdown-menu.open{display:block}.breadcrumb-parent .breadcrumb-wrapper a{text-decoration:none;color:#1D1D1D;font-family:var(--ifx-font-family);font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;display:flex;align-items:center;color:#1D1D1D;flex-direction:column;justify-content:center;padding:0px;border-bottom:1px solid #1D1D1D}.breadcrumb-parent .breadcrumb-divider{width:10px;height:16px;color:#EEEDED;line-height:13px;font-size:1.25rem;margin-right:12px}',i=a,d=class{constructor(e){o(this,e),this.isLastItem=!1,this.hasDropdownMenu=!1}handleOutsideClick(e){e.composedPath().includes(this.el)||this.closeDropdownMenu()}handleKeyDown(e){e.key==="Enter"||e.key===" "?this.toggleDropdownMenu():e.key==="Escape"&&this.closeDropdownMenu()}getDropdownMenu(){return this.el.shadowRoot.querySelector(".dropdown-menu")}menuWrapperEventReEmitter(e){this.emittedElement=e.detail}getMenuIconWrapper(){return this.emittedElement}handleClassList(e,n,r){e.classList[n](r)}closeDropdownMenu(){if(this.hasDropdownMenu){const e=this.getDropdownMenu(),n=this.getMenuIconWrapper();this.handleClassList(e,"remove","open"),this.handleClassList(n,"remove","show")}}toggleDropdownMenu(){if(this.hasDropdownMenu){const e=this.getDropdownMenu(),n=this.getMenuIconWrapper();this.handleClassList(e,"toggle","open"),this.handleClassList(n,"toggle","show")}}isDropdownMenuOpen(){const e=this.getDropdownMenu();return this.hasDropdownMenu&&e&&e.classList.contains("open")}handleLastItem(){const e=this.el.closest("ifx-breadcrumb").querySelectorAll("ifx-breadcrumb-item");this.el===e[e.length-1]?this.isLastItem=!0:this.isLastItem=!1}generateUniqueId(e="id"){return`${e}-${Math.random().toString(36).substring(2,9)}`}componentWillLoad(){this.uniqueId||(this.uniqueId=this.generateUniqueId("breadcrumb-dropdown")),this.handleLastItem()}componentDidUpdate(){this.handleLastItem()}componentWillRender(){this.setHasDropdownMenuState()}setHasDropdownMenuState(){const e=this.getIfxDropdownMenuComponent();e&&(this.hasDropdownMenu=!!e)}getIfxDropdownMenuComponent(){return this.el.querySelector("ifx-dropdown-menu")}componentDidLoad(){const e=this.getIfxDropdownMenuComponent();if(this.hasDropdownMenu)e.isOpen=!0;else{const n=this.getMenuIconWrapper();this.handleClassList(n,"toggle","hide")}}render(){return t("li",{key:"5779bbe0854a084c33c1bb535655fe484165784e",class:"breadcrumb-parent","aria-current":`${this.isLastItem?"page":""}`},t("li",{key:"63e956424dda4002a84c7da17bfe42b3f7f830b0",role:"button",tabindex:this.hasDropdownMenu?0:-1,class:"breadcrumb-wrapper",onClick:()=>this.toggleDropdownMenu(),"aria-controls":this.uniqueId,"aria-haspopup":"menu","aria-label":"Toggle dropdown menu"},t("slot",{key:"14f66501d9ac8efc9ff9e6b771757e30c70814a6",name:"label"}),t("div",{key:"9620ab0608dc5c74aa39fe321a332421ee4c76b3",id:this.uniqueId,class:"dropdown-menu","aria-expanded":this.isDropdownMenuOpen(),"aria-label":"Dropdown menu"},t("slot",{key:"c4e6e9b1650f2467876f7824201139b369625b3d"}))),!this.isLastItem&&t("span",{key:"5c028ab8720841b8a2777a84d7ad3f933ab43b79",class:"breadcrumb-divider","aria-hidden":"true"},"/"))}get el(){return s(this)}};d.style=i;export{d as ifx_breadcrumb_item};
