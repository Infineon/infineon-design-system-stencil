const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ifx-action-list.entry-uLIiTpjG.js","./dom-utils-CtINY9El-CZY0_Num.js","./tracking-DNHOWgWh-BE-DLK5Z.js","./ifx-action-list-item.entry-8HVuqq_n.js","./index-BfTCfPZ1-CrzGNZJJ.js","./ifx-breadcrumb.entry-NupYW4JL.js","./ifx-card.entry-C8uKQaux.js","./ifx-checkbox-group.entry-BtIQFSfE.js","./ifx-content-switcher.entry-BCN9eSbt.js","./ifx-date-picker.entry-DDp2E3Fd.js","./ifx-dropdown.entry-DTQDayef.js","./popper-BfP9ezJQ-CAMpDiU4.js","./ifx-file-upload.entry-hK2PPCqi.js","./ifx-footer.entry-DYb_Ar34.js","./ifx-icons-preview.entry-BUY9hlOq.js","./icons-CmdmgBUp-DE211srv.js","./ifx-navbar.entry-BXfctKVk.js","./ifx-radio-button-group.entry-C3j122Lx.js","./ifx-search-bar.entry-DYm4lIB5.js","./ifx-segmented-control.entry-4O6PI5o9.js","./ifx-sidebar.entry-DxIGN5EQ.js","./ifx-slider.entry-DcaGqOhx.js","./ifx-status.entry-BPoqL9of.js","./ifx-stepper.entry-CJL7oBul.js","./ifx-switch.entry-3T--7j40.js","./ifx-tabs.entry-IqNmAMG5.js","./ifx-textarea.entry-BG7S39Ao.js","./ifx-tooltip.entry-CkNMgDef.js","./ifx-tree-view.entry-D__ZlRgC.js","./ifx-notification.entry-8ZGMsy6b.js","./ifx-progress-bar.entry-D0LcIMHs.js","./ifx-radio-button.entry-kg7REGAc.js","./ifx-search-field.entry-B9VL0-Jb.js","./ifx-button.entry-CIdzt2lD.js","./ifx-icon-button.entry-BFnr8w27.js","./ifx-indicator.entry-CUwNBiQj.js","./ifx-checkbox.entry-BG2r9e30.js","./ifx-link.entry-IF9X9VnY.js","./ifx-icon.entry-D5pNg_VZ.js","./ifx-select.entry-Dzfy0CCs.js","./ifx-basic-table.entry-B8n_Tuxw.js","./main.esm-ByHlxOiP-Dxp3GBcE.js","./ifx-modal.entry-Dw8lZW-a.js","./ifx-accordion_2.entry-qEeGCqCb.js","./ifx-alert_2.entry-DWLRDbDP.js","./ifx-multiselect_2.entry-BkIev6sU.js","./ifx-spinner_2.entry-DQojGOtP.js","./ifx-chip_3.entry-D56P1z28.js","./ifx-table.entry-BnBsoGpI.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();const Tl="modulepreload",Fl=function(e,t){return new URL(e,t).href},ur={},R=function(t,i,n){let r=Promise.resolve();if(i&&i.length>0){let d=function(u){return Promise.all(u.map(p=>Promise.resolve(p).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const l=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");r=d(i.map(u=>{if(u=Fl(u,n),u in ur)return;ur[u]=!0;const p=u.endsWith(".css"),h=p?'[rel="stylesheet"]':"";if(n)for(let k=l.length-1;k>=0;k--){const y=l[k];if(y.href===u&&(!p||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const v=document.createElement("link");if(v.rel=p?"stylesheet":Tl,p||(v.as="script"),v.crossOrigin="",v.href=u,c&&v.setAttribute("nonce",c),document.head.appendChild(v),p)return new Promise((k,y)=>{v.addEventListener("load",k),v.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(l){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=l,window.dispatchEvent(a),!a.defaultPrevented)throw l}return r.then(l=>{for(const a of l||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})},Pl="infineon-design-system-stencil",mt={hydratedSelectorName:"hydrated",lazyLoad:!0,propChangeCallback:!0,shadowDom:!0,slotRelocation:!0,state:!0,updatable:!0};function Ol(){}const Rl=Ol,Dl='@font-face{font-family:"Source Sans 3";font-style:normal;font-weight:400;src:url("https://cdn.jsdelivr.net/npm/@infineon/design-system-tokens@5.0.0/dist/fonts/source-sans-3/SourceSans3-Regular.ttf.woff2") format("woff2"), url("https://cdn.jsdelivr.net/npm/@infineon/design-system-tokens@5.0.0/dist/fonts/source-sans-3/SourceSans3-Regular.ttf.woff") format("woff")}@font-face{font-family:"Source Sans 3";font-style:normal;font-weight:600;src:url("https://cdn.jsdelivr.net/npm/@infineon/design-system-tokens@5.0.0/dist/fonts/source-sans-3/SourceSans3-Semibold.ttf.woff2") format("woff2"), url("https://cdn.jsdelivr.net/npm/@infineon/design-system-tokens@5.0.0/dist/fonts/source-sans-3/SourceSans3-Semibold.ttf.woff") format("woff")}@font-face{font-family:"Source Sans 3";font-style:italic;font-weight:400;src:url("https://cdn.jsdelivr.net/npm/@infineon/design-system-tokens@5.0.0/dist/fonts/source-sans-3/SourceSans3-It.ttf.woff2") format("woff2"), url("https://cdn.jsdelivr.net/npm/@infineon/design-system-tokens@5.0.0/dist/fonts/source-sans-3/SourceSans3-It.ttf.woff") format("woff")}:root{--ifx-font-family:"Source Sans 3", "Arial, sans-serif"}ifx-icon:empty{display:none}';var Ml=Object.defineProperty,zl=(e,t)=>{for(var i in t)Ml(e,i,{get:t[i],enumerable:!0})},Hl="http://www.w3.org/2000/svg",ql="http://www.w3.org/1999/xhtml",ls=(e=>(e.Undefined="undefined",e.Null="null",e.String="string",e.Number="number",e.SpecialNumber="number",e.Boolean="boolean",e.BigInt="bigint",e))(ls||{}),as=(e=>(e.Array="array",e.Date="date",e.Map="map",e.Object="object",e.RegularExpression="regexp",e.Set="set",e.Channel="channel",e.Symbol="symbol",e))(as||{}),Ui="type",Wi="value",on="serialized:",Bl=(e,t)=>{var i;const n=t.$cmpMeta$;Object.entries((i=n.$members$)!=null?i:{}).map(([s,[l]])=>{if(l&31||l&32){const a=e[s],c=Nl(Object.getPrototypeOf(e),s)||Object.getOwnPropertyDescriptor(e,s);c&&Object.defineProperty(e,s,{get(){return c.get.call(this)},set(d){c.set.call(this,d)},configurable:!0,enumerable:!0}),e[s]=t.$instanceValues$.has(s)?t.$instanceValues$.get(s):a}})};function Nl(e,t){for(;e;){const i=Object.getOwnPropertyDescriptor(e,t);if(i?.get)return i;e=Object.getPrototypeOf(e)}}var Te=e=>{if(e.__stencil__getHostRef)return e.__stencil__getHostRef()},Ap=(e,t)=>{t&&(e.__stencil__getHostRef=()=>t,t.$lazyInstance$=e,t.$cmpMeta$.$flags$&512&&mt.state&&Bl(e,t))},jl=(e,t)=>{const i={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map,$serializerValues$:new Map};i.$onInstancePromise$=new Promise(r=>i.$onInstanceResolve$=r),i.$onReadyPromise$=new Promise(r=>i.$onReadyResolve$=r),e["s-p"]=[],e["s-rc"]=[],i.$fetchedCbList$=[];const n=i;return e.__stencil__getHostRef=()=>n,n},dr=(e,t)=>t in e,L=(e,t)=>(0,console.error)(e,t),Gi=new Map,Vl=(e,t,i)=>{const n=e.$tagName$.replace(/-/g,"_"),r=e.$lazyBundleId$;if(!r)return;const s=Gi.get(r);if(s)return s[n];{const l=a=>(Gi.set(r,a),a[n]);switch(r){case"ifx-action-list":return R(()=>import("./ifx-action-list.entry-uLIiTpjG.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(l,L);case"ifx-action-list-item":return R(()=>import("./ifx-action-list-item.entry-8HVuqq_n.js"),__vite__mapDeps([3,4]),import.meta.url).then(l,L);case"ifx-breadcrumb":return R(()=>import("./ifx-breadcrumb.entry-NupYW4JL.js"),__vite__mapDeps([5,1,2]),import.meta.url).then(l,L);case"ifx-breadcrumb-item":return R(()=>import("./ifx-breadcrumb-item.entry-jDQtoz7P.js"),[],import.meta.url).then(l,L);case"ifx-breadcrumb-item-label":return R(()=>import("./ifx-breadcrumb-item-label.entry-ZoNj4NOe.js"),[],import.meta.url).then(l,L);case"ifx-card":return R(()=>import("./ifx-card.entry-C8uKQaux.js"),__vite__mapDeps([6,1,2]),import.meta.url).then(l,L);case"ifx-card-headline":return R(()=>import("./ifx-card-headline.entry-CPWag_SR.js"),[],import.meta.url).then(l,L);case"ifx-card-image":return R(()=>import("./ifx-card-image.entry-My71cMm1.js"),[],import.meta.url).then(l,L);case"ifx-card-links":return R(()=>import("./ifx-card-links.entry-PMzaaonL.js"),[],import.meta.url).then(l,L);case"ifx-card-overline":return R(()=>import("./ifx-card-overline.entry-B9Di0Jmt.js"),[],import.meta.url).then(l,L);case"ifx-card-text":return R(()=>import("./ifx-card-text.entry-CccB-9DG.js"),[],import.meta.url).then(l,L);case"ifx-checkbox-group":return R(()=>import("./ifx-checkbox-group.entry-BtIQFSfE.js"),__vite__mapDeps([7,1,2]),import.meta.url).then(l,L);case"ifx-content-switcher":return R(()=>import("./ifx-content-switcher.entry-BCN9eSbt.js"),__vite__mapDeps([8,1,2]),import.meta.url).then(l,L);case"ifx-content-switcher-item":return R(()=>import("./ifx-content-switcher-item.entry-DQp155pF.js"),[],import.meta.url).then(l,L);case"ifx-date-picker":return R(()=>import("./ifx-date-picker.entry-DDp2E3Fd.js"),__vite__mapDeps([9,1,2]),import.meta.url).then(l,L);case"ifx-download":return R(()=>import("./ifx-download.entry-DU5Pbh_t.js"),[],import.meta.url).then(l,L);case"ifx-dropdown":return R(()=>import("./ifx-dropdown.entry-DTQDayef.js"),__vite__mapDeps([10,1,2,11]),import.meta.url).then(l,L);case"ifx-dropdown-header":return R(()=>import("./ifx-dropdown-header.entry-CVRByIov.js"),[],import.meta.url).then(l,L);case"ifx-dropdown-item":return R(()=>import("./ifx-dropdown-item.entry-CHdJ2VtL.js"),[],import.meta.url).then(l,L);case"ifx-dropdown-menu":return R(()=>import("./ifx-dropdown-menu.entry-Czw0IbFD.js"),[],import.meta.url).then(l,L);case"ifx-dropdown-separator":return R(()=>import("./ifx-dropdown-separator.entry-BG7nU-zU.js"),[],import.meta.url).then(l,L);case"ifx-dropdown-trigger":return R(()=>import("./ifx-dropdown-trigger.entry-Chom0NyR.js"),[],import.meta.url).then(l,L);case"ifx-dropdown-trigger-button":return R(()=>import("./ifx-dropdown-trigger-button.entry-DNKAZbEf.js"),[],import.meta.url).then(l,L);case"ifx-faq":return R(()=>import("./ifx-faq.entry-D_6sjd3F.js"),[],import.meta.url).then(l,L);case"ifx-file-upload":return R(()=>import("./ifx-file-upload.entry-hK2PPCqi.js"),__vite__mapDeps([12,1,2]),import.meta.url).then(l,L);case"ifx-filter-bar":return R(()=>import("./ifx-filter-bar.entry-Vperdaxq.js"),[],import.meta.url).then(l,L);case"ifx-filter-search":return R(()=>import("./ifx-filter-search.entry-2UZce0wW.js"),[],import.meta.url).then(l,L);case"ifx-filter-type-group":return R(()=>import("./ifx-filter-type-group.entry-BUMyQba9.js"),[],import.meta.url).then(l,L);case"ifx-footer":return R(()=>import("./ifx-footer.entry-DYb_Ar34.js"),__vite__mapDeps([13,1,2]),import.meta.url).then(l,L);case"ifx-footer-column":return R(()=>import("./ifx-footer-column.entry-jPeHcrjD.js"),[],import.meta.url).then(l,L);case"ifx-icons-preview":return R(()=>import("./ifx-icons-preview.entry-BUY9hlOq.js"),__vite__mapDeps([14,15]),import.meta.url).then(l,L);case"ifx-list":return R(()=>import("./ifx-list.entry-C91jUy_v.js"),[],import.meta.url).then(l,L);case"ifx-list-entry":return R(()=>import("./ifx-list-entry.entry-BVmoehmP.js"),[],import.meta.url).then(l,L);case"ifx-navbar":return R(()=>import("./ifx-navbar.entry-BXfctKVk.js"),__vite__mapDeps([16,2]),import.meta.url).then(l,L);case"ifx-navbar-item":return R(()=>import("./ifx-navbar-item.entry-Dxagy5Kz.js"),[],import.meta.url).then(l,L);case"ifx-navbar-profile":return R(()=>import("./ifx-navbar-profile.entry-BFkDM0PD.js"),[],import.meta.url).then(l,L);case"ifx-overview-table":return R(()=>import("./ifx-overview-table.entry-J1Cv362z.js"),[],import.meta.url).then(l,L);case"ifx-radio-button-group":return R(()=>import("./ifx-radio-button-group.entry-C3j122Lx.js"),__vite__mapDeps([17,1,2]),import.meta.url).then(l,L);case"ifx-search-bar":return R(()=>import("./ifx-search-bar.entry-DYm4lIB5.js"),__vite__mapDeps([18,1,2]),import.meta.url).then(l,L);case"ifx-segment":return R(()=>import("./ifx-segment.entry-vAdFvziJ.js"),[],import.meta.url).then(l,L);case"ifx-segmented-control":return R(()=>import("./ifx-segmented-control.entry-4O6PI5o9.js"),__vite__mapDeps([19,1,2]),import.meta.url).then(l,L);case"ifx-set-filter":return R(()=>import("./ifx-set-filter.entry-cSKeIgHr.js"),[],import.meta.url).then(l,L);case"ifx-sidebar":return R(()=>import("./ifx-sidebar.entry-DxIGN5EQ.js"),__vite__mapDeps([20,2]),import.meta.url).then(l,L);case"ifx-sidebar-item":return R(()=>import("./ifx-sidebar-item.entry-DfjAn-N5.js"),[],import.meta.url).then(l,L);case"ifx-sidebar-title":return R(()=>import("./ifx-sidebar-title.entry-Ca2Ve0o1.js"),[],import.meta.url).then(l,L);case"ifx-slider":return R(()=>import("./ifx-slider.entry-DcaGqOhx.js"),__vite__mapDeps([21,1,2]),import.meta.url).then(l,L);case"ifx-status":return R(()=>import("./ifx-status.entry-BPoqL9of.js"),__vite__mapDeps([22,1,2]),import.meta.url).then(l,L);case"ifx-step":return R(()=>import("./ifx-step.entry-Dogbuqhx.js"),[],import.meta.url).then(l,L);case"ifx-stepper":return R(()=>import("./ifx-stepper.entry-CJL7oBul.js"),__vite__mapDeps([23,1,2]),import.meta.url).then(l,L);case"ifx-switch":return R(()=>import("./ifx-switch.entry-3T--7j40.js"),__vite__mapDeps([24,1,2]),import.meta.url).then(l,L);case"ifx-tab":return R(()=>import("./ifx-tab.entry-BSFlgDUe.js"),[],import.meta.url).then(l,L);case"ifx-tabs":return R(()=>import("./ifx-tabs.entry-IqNmAMG5.js"),__vite__mapDeps([25,1,2]),import.meta.url).then(l,L);case"ifx-templates-ui":return R(()=>import("./ifx-templates-ui.entry-BhuS7bOQ.js"),[],import.meta.url).then(l,L);case"ifx-textarea":return R(()=>import("./ifx-textarea.entry-BG7S39Ao.js"),__vite__mapDeps([26,1,2]),import.meta.url).then(l,L);case"ifx-tooltip":return R(()=>import("./ifx-tooltip.entry-CkNMgDef.js"),__vite__mapDeps([27,1,2,11]),import.meta.url).then(l,L);case"ifx-tree-view":return R(()=>import("./ifx-tree-view.entry-D__ZlRgC.js"),__vite__mapDeps([28,1,2]),import.meta.url).then(l,L);case"ifx-tree-view-item":return R(()=>import("./ifx-tree-view-item.entry-B7PZMMG5.js"),[],import.meta.url).then(l,L);case"ifx-notification":return R(()=>import("./ifx-notification.entry-8ZGMsy6b.js"),__vite__mapDeps([29,1,2]),import.meta.url).then(l,L);case"ifx-progress-bar":return R(()=>import("./ifx-progress-bar.entry-D0LcIMHs.js"),__vite__mapDeps([30,1,2]),import.meta.url).then(l,L);case"ifx-radio-button":return R(()=>import("./ifx-radio-button.entry-kg7REGAc.js"),__vite__mapDeps([31,1,2]),import.meta.url).then(l,L);case"ifx-search-field":return R(()=>import("./ifx-search-field.entry-B9VL0-Jb.js"),__vite__mapDeps([32,4,1,2]),import.meta.url).then(l,L);case"ifx-button":return R(()=>import("./ifx-button.entry-CIdzt2lD.js"),__vite__mapDeps([33,4,1,2]),import.meta.url).then(l,L);case"ifx-icon-button":return R(()=>import("./ifx-icon-button.entry-BFnr8w27.js"),__vite__mapDeps([34,4,1,2]),import.meta.url).then(l,L);case"ifx-indicator":return R(()=>import("./ifx-indicator.entry-CUwNBiQj.js"),__vite__mapDeps([35,1,2]),import.meta.url).then(l,L);case"ifx-checkbox":return R(()=>import("./ifx-checkbox.entry-BG2r9e30.js"),__vite__mapDeps([36,1,2]),import.meta.url).then(l,L);case"ifx-link":return R(()=>import("./ifx-link.entry-IF9X9VnY.js"),__vite__mapDeps([37,4,1,2]),import.meta.url).then(l,L);case"ifx-icon":return R(()=>import("./ifx-icon.entry-D5pNg_VZ.js"),__vite__mapDeps([38,15,1,2]),import.meta.url).then(l,L);case"ifx-filter-accordion":return R(()=>import("./ifx-filter-accordion.entry-BFIwaOYY.js"),[],import.meta.url).then(l,L);case"ifx-select":return R(()=>import("./ifx-select.entry-Dzfy0CCs.js"),__vite__mapDeps([39,1,2]),import.meta.url).then(l,L);case"ifx-basic-table":return R(()=>import("./ifx-basic-table.entry-B8n_Tuxw.js"),__vite__mapDeps([40,41,4,1,2]),import.meta.url).then(l,L);case"ifx-modal":return R(()=>import("./ifx-modal.entry-Dw8lZW-a.js"),__vite__mapDeps([42,1,2]),import.meta.url).then(l,L);case"ifx-accordion_2":return R(()=>import("./ifx-accordion_2.entry-qEeGCqCb.js"),__vite__mapDeps([43,1,2]),import.meta.url).then(l,L);case"ifx-alert_2":return R(()=>import("./ifx-alert_2.entry-DWLRDbDP.js"),__vite__mapDeps([44,1,2]),import.meta.url).then(l,L);case"ifx-multiselect_2":return R(()=>import("./ifx-multiselect_2.entry-BkIev6sU.js"),__vite__mapDeps([45,1,2]),import.meta.url).then(l,L);case"ifx-spinner_2":return R(()=>import("./ifx-spinner_2.entry-DQojGOtP.js"),__vite__mapDeps([46,4,1,2]),import.meta.url).then(l,L);case"ifx-chip_3":return R(()=>import("./ifx-chip_3.entry-D56P1z28.js"),__vite__mapDeps([47,1,2]),import.meta.url).then(l,L);case"ifx-table":return R(()=>import("./ifx-table.entry-BnBsoGpI.js"),__vite__mapDeps([48,41,4,1,2]),import.meta.url).then(l,L)}}return R(()=>import(`./${r}.entry.js`),[],import.meta.url).then(l=>(Gi.set(r,l),l[n]),l=>{L(l,t.$hostElement$)})},wi=new Map,Ul="r",Wl="o",cn="s",Gl="t",Kl="c",ii="s-id",un="sty-id",fr="c-id",Yl="{visibility:hidden}.hydrated{visibility:inherit}",os="slot-fb{display:contents}slot-fb[hidden]{display:none}",pr="http://www.w3.org/1999/xlink",ie=typeof window<"u"?window:{};ie.HTMLElement;var re={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,i,n)=>e.addEventListener(t,i,n),rel:(e,t,i,n)=>e.removeEventListener(t,i,n),ce:(e,t)=>new CustomEvent(e,t)},Zl=mt.shadowDom,Jl=(()=>{var e;let t=!1;try{(e=ie.document)==null||e.addEventListener("e",null,Object.defineProperty({},"passive",{get(){t=!0}}))}catch{}return t})(),Xl=e=>Promise.resolve(e),Ri=(()=>{try{return new CSSStyleSheet,typeof new CSSStyleSheet().replaceSync=="function"}catch{}return!1})(),dn=Ri?!!ie.document&&Object.getOwnPropertyDescriptor(ie.document.adoptedStyleSheets,"length").writable:!1,fn=!1,mr=[],cs=[],Ql=(e,t)=>i=>{e.push(i),fn||(fn=!0,re.$flags$&4?Pn(pn):re.raf(pn))},hr=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(i){L(i)}e.length=0},pn=()=>{hr(mr),hr(cs),(fn=mr.length>0)&&re.raf(pn)},Pn=e=>Xl().then(e),ea=Ql(cs),Ep=e=>{const t=new URL(e,re.$resourcesUrl$);return t.origin!==ie.location.origin?t.href:t.pathname},On=e=>(e=typeof e,e==="object"||e==="function");function us(e){var t,i,n;return(n=(i=(t=e.head)==null?void 0:t.querySelector('meta[name="csp-nonce"]'))==null?void 0:i.getAttribute("content"))!=null?n:void 0}var ta=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),ia=class wt{static fromLocalValue(t){const i=t[Ui],n=Wi in t?t[Wi]:void 0;switch(i){case"string":return n;case"boolean":return n;case"bigint":return BigInt(n);case"undefined":return;case"null":return null;case"number":return n==="NaN"?NaN:n==="-0"?-0:n==="Infinity"?1/0:n==="-Infinity"?-1/0:n;case"array":return n.map(d=>wt.fromLocalValue(d));case"date":return new Date(n);case"map":const r=new Map;for(const[d,u]of n){const p=typeof d=="object"&&d!==null?wt.fromLocalValue(d):d,h=wt.fromLocalValue(u);r.set(p,h)}return r;case"object":const s={};for(const[d,u]of n)s[d]=wt.fromLocalValue(u);return s;case"regexp":const{pattern:l,flags:a}=n;return new RegExp(l,a);case"set":const c=new Set;for(const d of n)c.add(wt.fromLocalValue(d));return c;case"symbol":return Symbol(n);default:throw new Error(`Unsupported type: ${i}`)}}static fromLocalValueArray(t){return t.map(i=>wt.fromLocalValue(i))}static isLocalValueObject(t){if(typeof t!="object"||t===null||!t.hasOwnProperty(Ui))return!1;const i=t[Ui];return Object.values({...ls,...as}).includes(i)?i!=="null"&&i!=="undefined"?t.hasOwnProperty(Wi):!0:!1}},na={};zl(na,{err:()=>ds,map:()=>ra,ok:()=>mn,unwrap:()=>sa,unwrapErr:()=>la});var mn=e=>({isOk:!0,isErr:!1,value:e}),ds=e=>({isOk:!1,isErr:!0,value:e});function ra(e,t){if(e.isOk){const i=t(e.value);return i instanceof Promise?i.then(n=>mn(n)):mn(i)}if(e.isErr){const i=e.value;return ds(i)}throw"should never get here"}var sa=e=>{if(e.isOk)return e.value;throw e.value},la=e=>{if(e.isErr)return e.value;throw e.value};function aa(e){return typeof e!="string"||!e.startsWith(on)?e:ia.fromLocalValue(JSON.parse(atob(e.slice(on.length))))}function oa(e){if(!Ri)return;const t=new CSSStyleSheet;return t.replaceSync(e),t}var jt;function ca(e){var t;const i=this.attachShadow({mode:"open",delegatesFocus:!!(e.$flags$&16)});jt===void 0&&(jt=(t=oa(Dl))!=null?t:null),jt&&(dn?i.adoptedStyleSheets.push(jt):i.adoptedStyleSheets=[...i.adoptedStyleSheets,jt])}var fs=e=>{const t=dt(e,"childNodes");e.tagName&&e.tagName.includes("-")&&e["s-cr"]&&e.tagName!=="SLOT-FB"&&ps(t,e.tagName).forEach(n=>{n.nodeType===1&&n.tagName==="SLOT-FB"&&(da(n,Rn(n),!1).length?n.hidden=!0:n.hidden=!1)});let i=0;for(i=0;i<t.length;i++){const n=t[i];n.nodeType===1&&dt(n,"childNodes").length&&fs(n)}},ua=e=>{const t=[];for(let i=0;i<e.length;i++){const n=e[i]["s-nr"]||void 0;n&&n.isConnected&&t.push(n)}return t};function ps(e,t,i){let n=0,r=[],s;for(;n<e.length;n++)s=e[n],s["s-sr"]&&(!t||s["s-hn"]===t)&&i===void 0&&r.push(s),r=[...r,...ps(s.childNodes,t,i)];return r}var da=(e,t,i=!0)=>{const n=[];(i&&e["s-sr"]||!e["s-sr"])&&n.push(e);let r=e;for(;r=r.nextSibling;)Rn(r)===t&&(i||!r["s-sr"])&&n.push(r);return n},gr=(e,t)=>e.nodeType===1?e.getAttribute("slot")===null&&t===""||e.getAttribute("slot")===t:e["s-sn"]===t?!0:t==="",fa=(e,t,i,n)=>{if(e["s-ol"]&&e["s-ol"].isConnected)return;const r=document.createTextNode("");if(r["s-nr"]=e,!t["s-cr"]||!t["s-cr"].parentNode)return;const s=t["s-cr"].parentNode,l=dt(s,"appendChild");if(typeof n<"u"){r["s-oo"]=n;const a=dt(s,"childNodes"),c=[r];a.forEach(d=>{d["s-nr"]&&c.push(d)}),c.sort((d,u)=>!d["s-oo"]||d["s-oo"]<(u["s-oo"]||0)?-1:!u["s-oo"]||u["s-oo"]<d["s-oo"]?1:0),c.forEach(d=>l.call(s,d))}else l.call(s,r);e["s-ol"]=r,e["s-sh"]=t["s-hn"]},Rn=e=>typeof e["s-sn"]=="string"?e["s-sn"]:e.nodeType===1&&e.getAttribute("slot")||void 0;function ms(e){if(e.assignedElements||e.assignedNodes||!e["s-sr"])return;const t=i=>(function(n){const r=[],s=this["s-sn"];n?.flatten&&console.error(`
          Flattening is not supported for Stencil non-shadow slots.
          You can use \`.childNodes\` to nested slot fallback content.
          If you have a particular use case, please open an issue on the Stencil repo.
        `);const l=this["s-cr"].parentElement;return(l.__childNodes?l.childNodes:ua(l.childNodes)).forEach(c=>{s===Rn(c)&&r.push(c)}),i?r.filter(c=>c.nodeType===1):r}).bind(e);e.assignedElements=t(!0),e.assignedNodes=t(!1)}var pa=e=>{const t=e.cloneNode;e.cloneNode=function(i){const n=this,r=n.shadowRoot&&Zl,s=t.call(n,r?i:!1);if(!r&&i){let l=0,a,c;const d=["s-id","s-cr","s-lr","s-rc","s-sc","s-p","s-cn","s-sr","s-sn","s-hn","s-ol","s-nr","s-si","s-rf","s-scs"],u=this.__childNodes||this.childNodes;for(;l<u.length;l++)a=u[l]["s-nr"],c=d.every(p=>!u[l][p]),a&&s.appendChild(a.cloneNode(!0)),c&&s.appendChild(u[l].cloneNode(!0))}return s}};function dt(e,t){if("__"+t in e){const i=e["__"+t];return typeof i!="function"?i:i.bind(e)}else return typeof e[t]!="function"?e[t]:e[t].bind(e)}var Ke=(e,t="")=>()=>{},ma=(e,t)=>()=>{},Tt=new WeakMap,hs=(e,t,i)=>{let n=wi.get(e);Ri&&i?(n=n||new CSSStyleSheet,typeof n=="string"?n=t:n.replaceSync(t)):n=t,wi.set(e,n)},gs=(e,t,i)=>{var n;const r=Dn(t),s=wi.get(r);if(!ie.document)return r;if(e=e.nodeType===11?e:ie.document,s)if(typeof s=="string"){e=e.head||e;let l=Tt.get(e),a;if(l||Tt.set(e,l=new Set),!l.has(r)){if(e.host&&(a=e.querySelector(`[${un}="${r}"]`)))a.innerHTML=s;else{a=ie.document.createElement("style"),a.innerHTML=s;const c=(n=re.$nonce$)!=null?n:us(ie.document);if(c!=null&&a.setAttribute("nonce",c),!(t.$flags$&1))if(e.nodeName==="HEAD"){const d=e.querySelectorAll("link[rel=preconnect]"),u=d.length>0?d[d.length-1].nextSibling:e.querySelector("style");e.insertBefore(a,u?.parentNode===e?u:null)}else if("host"in e)if(Ri){const d=new CSSStyleSheet;d.replaceSync(s),dn?e.adoptedStyleSheets.unshift(d):e.adoptedStyleSheets=[d,...e.adoptedStyleSheets]}else{const d=e.querySelector("style");d?d.innerHTML=s+d.innerHTML:e.prepend(a)}else e.append(a);t.$flags$&1&&e.insertBefore(a,null)}t.$flags$&4&&(a.innerHTML+=os),l&&l.add(r)}}else e.adoptedStyleSheets.includes(s)||(dn?e.adoptedStyleSheets.push(s):e.adoptedStyleSheets=[...e.adoptedStyleSheets,s]);return r},ha=e=>{const t=e.$cmpMeta$,i=e.$hostElement$,n=t.$flags$,r=Ke("attachStyles",t.$tagName$),s=gs(i.shadowRoot?i.shadowRoot:i.getRootNode(),t);n&10&&(i["s-sc"]=s,i.classList.add(s+"-h")),r()},Dn=(e,t)=>"sc-"+e.$tagName$,ga=e=>e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{"),xa=()=>{if(!ie.document)return;const e=ie.document.querySelectorAll(`[${un}]`);let t=0;for(;t<e.length;t++)hs(e[t].getAttribute(un),ga(e[t].innerHTML),!0)},xs=(e,t,...i)=>{let n=null,r=null,s=null,l=!1,a=!1;const c=[],d=p=>{for(let h=0;h<p.length;h++)n=p[h],Array.isArray(n)?d(n):n!=null&&typeof n!="boolean"&&((l=typeof e!="function"&&!On(n))&&(n=String(n)),l&&a?c[c.length-1].$text$+=n:c.push(l?Mt(null,n):n),a=l)};if(d(i),t){t.key&&(r=t.key),t.name&&(s=t.name);{const p=t.className||t.class;p&&(t.class=typeof p!="object"?p:Object.keys(p).filter(h=>p[h]).join(" "))}}if(typeof e=="function")return e(t===null?{}:t,c,_a);const u=Mt(e,null);return u.$attrs$=t,c.length>0&&(u.$children$=c),u.$key$=r,u.$name$=s,u},Mt=(e,t)=>{const i={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};return i.$attrs$=null,i.$key$=null,i.$name$=null,i},ba={},va=e=>e&&e.$tag$===ba,_a={forEach:(e,t)=>e.map(xr).forEach(t),map:(e,t)=>e.map(xr).map(t).map($a)},xr=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),$a=e=>{if(typeof e.vtag=="function"){const i={...e.vattrs};return e.vkey&&(i.key=e.vkey),e.vname&&(i.name=e.vname),xs(e.vtag,i,...e.vchildren||[])}const t=Mt(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},ya=(e,t,i,n)=>{var r,s;const l=Ke("hydrateClient",t),a=e.shadowRoot,c=[],d=[],u=[],p=a?[]:null,h=Mt(t,null);h.$elm$=e,ie.document&&(!re.$orgLocNodes$||!re.$orgLocNodes$.size)&&gn(ie.document.body,re.$orgLocNodes$=new Map),e[ii]=i,e.removeAttribute(ii),n.$vnode$=hn(h,c,d,p,e,e,i,u);let v=0;const k=c.length;let y;for(v;v<k;v++){y=c[v];const E=y.$hostId$+"."+y.$nodeId$,D=re.$orgLocNodes$.get(E),F=y.$elm$;if(!a)F["s-hn"]=t.toUpperCase(),y.$tag$==="slot"&&(F["s-cr"]=e["s-cr"]);else if((r=y.$tag$)!=null&&r.toString().includes("-")&&y.$tag$!=="slot-fb"&&!y.$elm$.shadowRoot){const te=Te(y.$elm$);if(te){const oe=Dn(te.$cmpMeta$),be=ie.document.querySelector(`style[sty-id="${oe}"]`);be&&e.shadowRoot.append(be.cloneNode(!0))}}y.$tag$==="slot"&&(y.$name$=y.$elm$["s-sn"]||y.$elm$.name||null,y.$children$?(y.$flags$|=2,y.$elm$.childNodes.length||y.$children$.forEach(te=>{y.$elm$.appendChild(te.$elm$)})):y.$flags$|=1),D&&D.isConnected&&(D.parentElement.shadowRoot&&D["s-en"]===""&&D.parentNode.insertBefore(F,D.nextSibling),D.parentNode.removeChild(D),a||(F["s-oo"]=parseInt(y.$nodeId$))),D&&!D["s-id"]&&re.$orgLocNodes$.delete(E)}const z=[],q=u.length;let b=0,g,x,w,_;for(b;b<q;b++)if(g=u[b],!(!g||!g.length))for(w=g.length,x=0,x;x<w;x++){if(_=g[x],z[_.hostId]||(z[_.hostId]=re.$orgLocNodes$.get(_.hostId)),!z[_.hostId])continue;const E=z[_.hostId];E.shadowRoot&&_.node.parentElement!==E&&E.appendChild(_.node),(!E.shadowRoot||!a)&&(_.slot["s-cr"]||(_.slot["s-cr"]=E["s-cr"],!_.slot["s-cr"]&&E.shadowRoot?_.slot["s-cr"]=E:_.slot["s-cr"]=(E.__childNodes||E.childNodes)[0]),fa(_.node,_.slot,!1,_.node["s-oo"]),(s=_.node.parentElement)!=null&&s.shadowRoot&&_.node.getAttribute&&_.node.getAttribute("slot")&&_.node.removeAttribute("slot"))}if(a){let E=0;const D=p.length;if(D){for(E;E<D;E++){const F=p[E];F&&a.appendChild(F)}Array.from(e.childNodes).forEach(F=>{typeof F["s-en"]!="string"&&typeof F["s-sn"]!="string"&&(F.nodeType===1&&F.slot&&F.hidden?F.removeAttribute("hidden"):(F.nodeType===8&&!F.nodeValue||F.nodeType===3&&!F.wholeText.trim())&&F.parentNode.removeChild(F))})}}n.$hostElement$=e,l()},hn=(e,t,i,n,r,s,l,a=[])=>{let c,d,u,p;if(s.nodeType===1){if(c=s.getAttribute(fr),c&&(d=c.split("."),d[0]===l||d[0]==="0")){u=br({$flags$:0,$hostId$:d[0],$nodeId$:d[1],$depth$:d[2],$index$:d[3],$tag$:s.tagName.toLowerCase(),$elm$:s,$attrs$:{class:s.className||""}}),t.push(u),s.removeAttribute(fr),e.$children$||(e.$children$=[]);const v=u.$elm$.getAttribute("s-sn");typeof v=="string"&&(u.$tag$==="slot-fb"&&vr(v,d[2],u,s,e,t,i,n,a),u.$elm$["s-sn"]=v,u.$elm$.removeAttribute("s-sn")),u.$index$!==void 0&&(e.$children$[u.$index$]=u),e=u,n&&u.$depth$==="0"&&(n[u.$index$]=u.$elm$)}if(s.shadowRoot)for(p=s.shadowRoot.childNodes.length-1;p>=0;p--)hn(e,t,i,n,r,s.shadowRoot.childNodes[p],l,a);const h=s.__childNodes||s.childNodes;for(p=h.length-1;p>=0;p--)hn(e,t,i,n,r,h[p],l,a)}else if(s.nodeType===8){if(d=s.nodeValue.split("."),d[1]===l||d[1]==="0"){if(c=d[0],u=br({$hostId$:d[1],$nodeId$:d[2],$depth$:d[3],$index$:d[4]||"0",$elm$:s,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null}),c===Gl)u.$elm$=$r(s,3),u.$elm$&&u.$elm$.nodeType===3&&(u.$text$=u.$elm$.textContent,t.push(u),s.remove(),l===u.$hostId$&&(e.$children$||(e.$children$=[]),e.$children$[u.$index$]=u),n&&u.$depth$==="0"&&(n[u.$index$]=u.$elm$));else if(c===Kl)u.$elm$=$r(s,8),u.$elm$&&u.$elm$.nodeType===8&&(t.push(u),s.remove());else if(u.$hostId$===l)if(c===cn){const h=s["s-sn"]=d[5]||"";vr(h,d[2],u,s,e,t,i,n,a)}else c===Ul&&(n?s.remove():(r["s-cr"]=s,s["s-cn"]=!0))}}else if(e&&e.$tag$==="style"){const h=Mt(null,s.textContent);h.$elm$=s,h.$index$="0",e.$children$=[h]}else s.nodeType===3&&!s.wholeText.trim()&&!s["s-nr"]&&s.remove();return e},gn=(e,t)=>{if(e.nodeType===1){const i=e[ii]||e.getAttribute(ii);i&&t.set(i,e);let n=0;if(e.shadowRoot)for(;n<e.shadowRoot.childNodes.length;n++)gn(e.shadowRoot.childNodes[n],t);const r=e.__childNodes||e.childNodes;for(n=0;n<r.length;n++)gn(r[n],t)}else if(e.nodeType===8){const i=e.nodeValue.split(".");i[0]===Wl&&(t.set(i[1]+"."+i[2],e),e.nodeValue="",e["s-en"]=i[3])}},br=e=>({...{$flags$:0,$hostId$:null,$nodeId$:null,$depth$:null,$index$:"0",$elm$:null,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null},...e});function vr(e,t,i,n,r,s,l,a,c){n["s-sr"]=!0,i.$name$=e||null,i.$tag$="slot";const d=r?.$elm$?r.$elm$["s-id"]||r.$elm$.getAttribute("s-id"):"";if(a&&ie.document){const u=i.$elm$=ie.document.createElement(i.$tag$);i.$name$&&i.$elm$.setAttribute("name",e),r.$elm$.shadowRoot&&d&&d!==i.$hostId$?dt(r.$elm$,"insertBefore")(u,dt(r.$elm$,"children")[0]):dt(dt(n,"parentNode"),"insertBefore")(u,n),_r(c,t,e,n,i.$hostId$),n.remove(),i.$depth$==="0"&&(a[i.$index$]=i.$elm$)}else{const u=i.$elm$,p=d&&d!==i.$hostId$&&r.$elm$.shadowRoot;_r(c,t,e,n,p?d:i.$hostId$),ms(n),p&&r.$elm$.insertBefore(u,r.$elm$.children[0])}s.push(i),l.push(i),r.$children$||(r.$children$=[]),r.$children$[i.$index$]=i}var _r=(e,t,i,n,r)=>{var s,l;let a=n.nextSibling;if(e[t]=e[t]||[],!(!a||(s=a.nodeValue)!=null&&s.startsWith(cn+".")))do a&&((a.getAttribute&&a.getAttribute("slot")||a["s-sn"])===i||i===""&&!a["s-sn"]&&(!a.getAttribute||!a.getAttribute("slot"))&&(a.nodeType===8||a.nodeType===3))&&(a["s-sn"]=i,e[t].push({slot:n,node:a,hostId:r})),a=a?.nextSibling;while(a&&!((l=a.nodeValue)!=null&&l.startsWith(cn+".")))},$r=(e,t)=>{let i=e;do i=i.nextSibling;while(i&&(i.nodeType!==t||!i.nodeValue));return i},Mn=e=>{const t=ta(e);return new RegExp(`(^|[^@]|@(?!supports\\s+selector\\s*\\([^{]*?${t}))(${t}\\b)`,"g")};Mn("::slotted");Mn(":host");Mn(":host-context");var xn=(e,t,i)=>typeof e=="string"&&e.startsWith(on)?(e=aa(e),e):e!=null&&!On(e)?t&4?e==="false"?!1:e===""||!!e:t&2?typeof e=="string"?parseFloat(e):typeof e=="number"?e:NaN:t&1?String(e):e:e,wa=e=>{var t;return(t=Te(e))==null?void 0:t.$hostElement$},kp=(e,t,i)=>{const n=wa(e);return{emit:r=>bs(n,t,{bubbles:!!(i&4),composed:!!(i&2),cancelable:!!(i&1),detail:r})}},bs=(e,t,i)=>{const n=re.ce(t,i);return e.dispatchEvent(n),n},yr=(e,t,i,n,r,s,l)=>{if(i===n)return;let a=dr(e,t),c=t.toLowerCase();if(t==="class"){const d=e.classList,u=wr(i);let p=wr(n);if((e["s-si"]||e["s-sc"])&&l){const h=e["s-sc"]||e["s-si"];p.push(h),u.forEach(v=>{v.startsWith(h)&&p.push(v)}),p=[...new Set(p)].filter(v=>v),d.add(...p)}else d.remove(...u.filter(h=>h&&!p.includes(h))),d.add(...p.filter(h=>h&&!u.includes(h)))}else if(t==="style"){for(const d in i)(!n||n[d]==null)&&(d.includes("-")?e.style.removeProperty(d):e.style[d]="");for(const d in n)(!i||n[d]!==i[d])&&(d.includes("-")?e.style.setProperty(d,n[d]):e.style[d]=n[d])}else if(t!=="key")if(t==="ref")n&&n(e);else if(!a&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"?t=t.slice(3):dr(ie,c)?t=c.slice(2):t=c[2]+t.slice(3),i||n){const d=t.endsWith(vs);t=t.replace(Ia,""),i&&re.rel(e,t,i,d),n&&re.ael(e,t,n,d)}}else{const d=On(n);if((a||d&&n!==null)&&!r)try{if(e.tagName.includes("-"))e[t]!==n&&(e[t]=n);else{const p=n??"";t==="list"?a=!1:(i==null||e[t]!=p)&&(typeof e.__lookupSetter__(t)=="function"?e[t]=p:e.setAttribute(t,p))}}catch{}let u=!1;c!==(c=c.replace(/^xlink\:?/,""))&&(t=c,u=!0),n==null||n===!1?(n!==!1||e.getAttribute(t)==="")&&(u?e.removeAttributeNS(pr,t):e.removeAttribute(t)):(!a||s&4||r)&&!d&&e.nodeType===1&&(n=n===!0?"":n,u?e.setAttributeNS(pr,t,n):e.setAttribute(t,n))}},Sa=/\s/,wr=e=>(typeof e=="object"&&e&&"baseVal"in e&&(e=e.baseVal),!e||typeof e!="string"?[]:e.split(Sa)),vs="Capture",Ia=new RegExp(vs+"$"),bn=(e,t,i,n)=>{const r=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$,s=e&&e.$attrs$||{},l=t.$attrs$||{};for(const a of Sr(Object.keys(s)))a in l||yr(r,a,s[a],void 0,i,t.$flags$,n);for(const a of Sr(Object.keys(l)))yr(r,a,s[a],l[a],i,t.$flags$,n)};function Sr(e){return e.includes("ref")?[...e.filter(t=>t!=="ref"),"ref"]:e}var vn,Di,_n=!1,Si=!1,zn=!1,Ee=!1,Ii=(e,t,i)=>{var n;const r=t.$children$[i];let s=0,l,a,c;if(_n||(zn=!0,r.$tag$==="slot"&&(r.$flags$|=r.$children$?2:1)),r.$text$!==null)l=r.$elm$=ie.document.createTextNode(r.$text$);else if(r.$flags$&1)l=r.$elm$=ie.document.createTextNode(""),bn(null,r,Ee);else{if(Ee||(Ee=r.$tag$==="svg"),!ie.document)throw new Error("You are trying to render a Stencil component in an environment that doesn't support the DOM. Make sure to populate the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window/window) object before rendering a component.");if(l=r.$elm$=ie.document.createElementNS(Ee?Hl:ql,!_n&&mt.slotRelocation&&r.$flags$&2?"slot-fb":r.$tag$),Ee&&r.$tag$==="foreignObject"&&(Ee=!1),bn(null,r,Ee),r.$children$)for(s=0;s<r.$children$.length;++s)a=Ii(e,r,s),a&&l.appendChild(a);r.$tag$==="svg"?Ee=!1:l.tagName==="foreignObject"&&(Ee=!0)}return l["s-hn"]=Di,r.$flags$&3&&(l["s-sr"]=!0,l["s-cr"]=vn,l["s-sn"]=r.$name$||"",l["s-rf"]=(n=r.$attrs$)==null?void 0:n.ref,ms(l),c=e&&e.$children$&&e.$children$[i],c&&c.$tag$===r.$tag$&&e.$elm$&&ni(e.$elm$,!1)),l},ni=(e,t)=>{re.$flags$|=1;const i=Array.from(e.__childNodes||e.childNodes);for(let n=i.length-1;n>=0;n--){const r=i[n];r["s-hn"]!==Di&&r["s-ol"]&&(ft(ri(r).parentNode,r,ri(r)),r["s-ol"].remove(),r["s-ol"]=void 0,r["s-sh"]=void 0,zn=!0),t&&ni(r,t)}re.$flags$&=-2},_s=(e,t,i,n,r,s)=>{let l=e["s-cr"]&&e["s-cr"].parentNode||e,a;for(l.shadowRoot&&l.tagName===Di&&(l=l.shadowRoot);r<=s;++r)n[r]&&(a=Ii(null,i,r),a&&(n[r].$elm$=a,ft(l,a,ri(t))))},$s=(e,t,i)=>{for(let n=t;n<=i;++n){const r=e[n];if(r){const s=r.$elm$;ws(r),s&&(Si=!0,s["s-ol"]?s["s-ol"].remove():ni(s,!0),s.remove())}}},Ca=(e,t,i,n,r=!1)=>{let s=0,l=0,a=0,c=0,d=t.length-1,u=t[0],p=t[d],h=n.length-1,v=n[0],k=n[h],y,z;for(;s<=d&&l<=h;)if(u==null)u=t[++s];else if(p==null)p=t[--d];else if(v==null)v=n[++l];else if(k==null)k=n[--h];else if(hi(u,v,r))kt(u,v,r),u=t[++s],v=n[++l];else if(hi(p,k,r))kt(p,k,r),p=t[--d],k=n[--h];else if(hi(u,k,r))(u.$tag$==="slot"||k.$tag$==="slot")&&ni(u.$elm$.parentNode,!1),kt(u,k,r),ft(e,u.$elm$,p.$elm$.nextSibling),u=t[++s],k=n[--h];else if(hi(p,v,r))(u.$tag$==="slot"||k.$tag$==="slot")&&ni(p.$elm$.parentNode,!1),kt(p,v,r),ft(e,p.$elm$,u.$elm$),p=t[--d],v=n[++l];else{for(a=-1,c=s;c<=d;++c)if(t[c]&&t[c].$key$!==null&&t[c].$key$===v.$key$){a=c;break}a>=0?(z=t[a],z.$tag$!==v.$tag$?y=Ii(t&&t[l],i,a):(kt(z,v,r),t[a]=void 0,y=z.$elm$),v=n[++l]):(y=Ii(t&&t[l],i,l),v=n[++l]),y&&ft(ri(u.$elm$).parentNode,y,ri(u.$elm$))}s>d?_s(e,n[h+1]==null?null:n[h+1].$elm$,i,n,l,h):l>h&&$s(t,s,d)},hi=(e,t,i=!1)=>e.$tag$===t.$tag$?e.$tag$==="slot"?e.$name$===t.$name$:i?(i&&!e.$key$&&t.$key$&&(e.$key$=t.$key$),!0):e.$key$===t.$key$:!1,ri=e=>e&&e["s-ol"]||e,kt=(e,t,i=!1)=>{const n=t.$elm$=e.$elm$,r=e.$children$,s=t.$children$,l=t.$tag$,a=t.$text$;let c;a===null?(Ee=l==="svg"?!0:l==="foreignObject"?!1:Ee,bn(e,t,Ee,i),r!==null&&s!==null?Ca(n,r,t,s,i):s!==null?(e.$text$!==null&&(n.textContent=""),_s(n,null,t,s,0,s.length-1)):!i&&mt.updatable&&r!==null?$s(r,0,r.length-1):i&&mt.updatable&&r!==null&&s===null&&(t.$children$=r),Ee&&l==="svg"&&(Ee=!1)):(c=n["s-cr"])?c.parentNode.textContent=a:e.$text$!==a&&(n.data=a)},et=[],ys=e=>{let t,i,n;const r=e.__childNodes||e.childNodes;for(const s of r){if(s["s-sr"]&&(t=s["s-cr"])&&t.parentNode){i=t.parentNode.__childNodes||t.parentNode.childNodes;const l=s["s-sn"];for(n=i.length-1;n>=0;n--)if(t=i[n],!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==s["s-hn"])if(gr(t,l)){let a=et.find(c=>c.$nodeToRelocate$===t);Si=!0,t["s-sn"]=t["s-sn"]||l,a?(a.$nodeToRelocate$["s-sh"]=s["s-hn"],a.$slotRefNode$=s):(t["s-sh"]=s["s-hn"],et.push({$slotRefNode$:s,$nodeToRelocate$:t})),t["s-sr"]&&et.map(c=>{gr(c.$nodeToRelocate$,t["s-sn"])&&(a=et.find(d=>d.$nodeToRelocate$===t),a&&!c.$slotRefNode$&&(c.$slotRefNode$=a.$slotRefNode$))})}else et.some(a=>a.$nodeToRelocate$===t)||et.push({$nodeToRelocate$:t})}s.nodeType===1&&ys(s)}},ws=e=>{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(ws)},ft=(e,t,i)=>e?.insertBefore(t,i),Aa=(e,t,i=!1)=>{var n,r,s,l;const a=e.$hostElement$,c=e.$cmpMeta$,d=e.$vnode$||Mt(null,null),p=va(t)?t:xs(null,null,t);if(Di=a.tagName,c.$attrsToReflect$&&(p.$attrs$=p.$attrs$||{},c.$attrsToReflect$.forEach(([h,v])=>{p.$attrs$[v]=a[h]})),i&&p.$attrs$)for(const h of Object.keys(p.$attrs$))a.hasAttribute(h)&&!["key","ref","style","class"].includes(h)&&(p.$attrs$[h]=a[h]);p.$tag$=null,p.$flags$|=4,e.$vnode$=p,p.$elm$=d.$elm$=a.shadowRoot||a,_n=!!(c.$flags$&1)&&!(c.$flags$&128),vn=a["s-cr"],Si=!1,kt(d,p,i);{if(re.$flags$|=1,zn){ys(p.$elm$);for(const h of et){const v=h.$nodeToRelocate$;if(!v["s-ol"]&&ie.document){const k=ie.document.createTextNode("");k["s-nr"]=v,ft(v.parentNode,v["s-ol"]=k,v)}}for(const h of et){const v=h.$nodeToRelocate$,k=h.$slotRefNode$;if(k){const y=k.parentNode;let z=k.nextSibling;{let g=(n=v["s-ol"])==null?void 0:n.previousSibling;for(;g;){let x=(r=g["s-nr"])!=null?r:null;if(x&&x["s-sn"]===v["s-sn"]&&y===(x.__parentNode||x.parentNode)){for(x=x.nextSibling;x===v||x?.["s-sr"];)x=x?.nextSibling;if(!x||!x["s-nr"]){z=x;break}}g=g.previousSibling}}const q=v.__parentNode||v.parentNode,b=v.__nextSibling||v.nextSibling;(!z&&y!==q||b!==z)&&v!==z&&(!v["s-hn"]&&v["s-ol"]&&(v["s-hn"]=v["s-ol"].parentNode.nodeName),ft(y,v,z),v.nodeType===1&&v.tagName!=="SLOT-FB"&&(v.hidden=(s=v["s-ih"])!=null?s:!1)),v&&typeof k["s-rf"]=="function"&&k["s-rf"](k)}else v.nodeType===1&&(i&&(v["s-ih"]=(l=v.hidden)!=null?l:!1),v.hidden=!0)}}Si&&fs(p.$elm$),re.$flags$&=-2,et.length=0}vn=void 0},Ss=(e,t)=>{if(t&&!e.$onRenderResolve$&&t["s-p"]){const i=t["s-p"].push(new Promise(n=>e.$onRenderResolve$=()=>{t["s-p"].splice(i-1,1),n()}))}},Hn=(e,t)=>{if(e.$flags$|=16,e.$flags$&4){e.$flags$|=512;return}Ss(e,e.$ancestorComponent$);const i=()=>Ea(e,t);if(t){queueMicrotask(()=>{i()});return}return ea(i)},Ea=(e,t)=>{const i=e.$hostElement$,n=Ke("scheduleUpdate",e.$cmpMeta$.$tagName$),r=e.$lazyInstance$;if(!r)throw new Error(`Can't render component <${i.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`);let s;return t?(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map(([l,a])=>it(r,l,a,i)),e.$queuedListeners$=void 0),e.$fetchedCbList$.length&&e.$fetchedCbList$.forEach(l=>l(i)),s=it(r,"componentWillLoad",void 0,i)):s=it(r,"componentWillUpdate",void 0,i),s=Ir(s,()=>it(r,"componentWillRender",void 0,i)),n(),Ir(s,()=>La(e,r,t))},Ir=(e,t)=>ka(e)?e.then(t).catch(i=>{console.error(i),t()}):t(),ka=e=>e instanceof Promise||e&&e.then&&typeof e.then=="function",La=async(e,t,i)=>{var n;const r=e.$hostElement$,s=Ke("update",e.$cmpMeta$.$tagName$),l=r["s-rc"];i&&ha(e);const a=Ke("render",e.$cmpMeta$.$tagName$);Ta(e,t,r,i),l&&(l.map(c=>c()),r["s-rc"]=void 0),a(),s();{const c=(n=r["s-p"])!=null?n:[],d=()=>Fa(e);c.length===0?d():(Promise.all(c).then(d),e.$flags$|=4,c.length=0)}},Ta=(e,t,i,n)=>{try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,Aa(e,t,n)}catch(r){L(r,e.$hostElement$)}return null},Fa=e=>{const t=e.$cmpMeta$.$tagName$,i=e.$hostElement$,n=Ke("postUpdate",t),r=e.$lazyInstance$,s=e.$ancestorComponent$;it(r,"componentDidRender",void 0,i),e.$flags$&64?(it(r,"componentDidUpdate",void 0,i),n()):(e.$flags$|=64,Pa(i),it(r,"componentDidLoad",void 0,i),n(),e.$onReadyResolve$(i),s||Is()),e.$onInstanceResolve$(i),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),e.$flags$&512&&Pn(()=>Hn(e,!1)),e.$flags$&=-517},Is=e=>{var t;Pn(()=>bs(ie,"appload",{detail:{namespace:Pl}})),(t=re.$orgLocNodes$)!=null&&t.size&&re.$orgLocNodes$.clear()},it=(e,t,i,n)=>{if(e&&e[t])try{return e[t](i)}catch(r){L(r,n)}},Pa=e=>{var t;return e.classList.add((t=mt.hydratedSelectorName)!=null?t:"hydrated")},Oa=(e,t)=>Te(e).$instanceValues$.get(t),Ki=(e,t,i,n)=>{const r=Te(e);if(!r)return;if(!r)throw new Error(`Couldn't find host element for "${n.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/stenciljs/core/issues/5457).`);const s=r.$hostElement$,l=r.$instanceValues$.get(t),a=r.$flags$,c=r.$lazyInstance$;i=xn(i,n.$members$[t][0]);const d=Number.isNaN(l)&&Number.isNaN(i),u=i!==l&&!d;if((!(a&8)||l===void 0)&&u&&(r.$instanceValues$.set(t,i),c)){if(n.$watchers$&&a&128){const p=n.$watchers$[t];p&&p.map(h=>{try{c[h](i,l,t)}catch(v){L(v,s)}})}if((a&18)===2){if(c.componentShouldUpdate&&c.componentShouldUpdate(i,l,t)===!1)return;Hn(r,!1)}}},Cs=(e,t,i)=>{var n,r;const s=e.prototype;if(t.$members$||mt.propChangeCallback){e.watchers&&!t.$watchers$&&(t.$watchers$=e.watchers),e.deserializers&&!t.$deserializers$&&(t.$deserializers$=e.deserializers),e.serializers&&!t.$serializers$&&(t.$serializers$=e.serializers);const l=Object.entries((n=t.$members$)!=null?n:{});if(l.map(([a,[c]])=>{if(c&31||i&2&&c&32){const{get:d,set:u}=Object.getOwnPropertyDescriptor(s,a)||{};d&&(t.$members$[a][0]|=2048),u&&(t.$members$[a][0]|=4096),(i&1||!d)&&Object.defineProperty(s,a,{get(){{if((t.$members$[a][0]&2048)===0)return Oa(this,a);const p=Te(this),h=p?p.$lazyInstance$:s;return h?h[a]:void 0}},configurable:!0,enumerable:!0}),Object.defineProperty(s,a,{set(p){const h=Te(this);if(h){if(u){typeof(c&32?this[a]:h.$hostElement$[a])>"u"&&h.$instanceValues$.get(a)&&(p=h.$instanceValues$.get(a)),u.apply(this,[xn(p,c)]),p=c&32?this[a]:h.$hostElement$[a],Ki(this,a,p,t);return}{if((i&1)===0||(t.$members$[a][0]&4096)===0){Ki(this,a,p,t),i&1&&!h.$lazyInstance$&&h.$fetchedCbList$.push(()=>{t.$members$[a][0]&4096&&h.$lazyInstance$[a]!==h.$instanceValues$.get(a)&&(h.$lazyInstance$[a]=p)});return}const v=()=>{const k=h.$lazyInstance$[a];!h.$instanceValues$.get(a)&&k&&h.$instanceValues$.set(a,k),h.$lazyInstance$[a]=xn(p,c),Ki(this,a,h.$lazyInstance$[a],t)};h.$lazyInstance$?v():h.$fetchedCbList$.push(()=>{v()})}}}})}else i&1&&c&64&&Object.defineProperty(s,a,{value(...d){var u;const p=Te(this);return(u=p?.$onInstancePromise$)==null?void 0:u.then(()=>{var h;return(h=p.$lazyInstance$)==null?void 0:h[a](...d)})}})}),i&1){const a=new Map;s.attributeChangedCallback=function(c,d,u){re.jmp(()=>{var p;const h=a.get(c),v=Te(this);if(this.hasOwnProperty(h)&&mt.lazyLoad&&(u=this[h],delete this[h]),s.hasOwnProperty(h)&&typeof this[h]=="number"&&this[h]==u)return;if(h==null){const z=v?.$flags$;if(v&&z&&!(z&8)&&z&128&&u!==d){const q=v.$lazyInstance$,b=(p=t.$watchers$)==null?void 0:p[c];b?.forEach(g=>{q[g]!=null&&q[g].call(q,u,d,c)})}return}const k=l.find(([z])=>z===h);k&&k[1][0]&4&&(u=!(u===null||u==="false"));const y=Object.getOwnPropertyDescriptor(s,h);u!=this[h]&&(!y.get||y.set)&&(this[h]=u)})},e.observedAttributes=Array.from(new Set([...Object.keys((r=t.$watchers$)!=null?r:{}),...l.filter(([c,d])=>d[0]&31).map(([c,d])=>{var u;const p=d[1]||c;return a.set(p,c),d[0]&512&&((u=t.$attrsToReflect$)==null||u.push([c,p])),p})]))}}return e},Ra=async(e,t,i,n)=>{let r;if((t.$flags$&32)===0){if(t.$flags$|=32,i.$lazyBundleId$){const c=Vl(i,t);if(c&&"then"in c){const u=ma();r=await c,u()}else r=c;if(!r)throw new Error(`Constructor for "${i.$tagName$}#${t.$modeName$}" was not found`);r.isProxied||(i.$watchers$=r.watchers,i.$serializers$=r.serializers,i.$deserializers$=r.deserializers,Cs(r,i,2),r.isProxied=!0);const d=Ke("createInstance",i.$tagName$);t.$flags$|=8;try{new r(t)}catch(u){L(u,e)}t.$flags$&=-9,t.$flags$|=128,d(),$n(t.$lazyInstance$,e)}else{r=e.constructor;const c=e.localName;customElements.whenDefined(c).then(()=>t.$flags$|=128)}if(r&&r.style){let c;typeof r.style=="string"&&(c=r.style);const d=Dn(i);if(!wi.has(d)){const u=Ke("registerStyles",i.$tagName$);hs(d,c,!!(i.$flags$&1)),u()}}}const s=t.$ancestorComponent$,l=()=>Hn(t,!0);s&&s["s-rc"]?s["s-rc"].push(l):l()},$n=(e,t)=>{it(e,"connectedCallback",void 0,t)},Da=e=>{if((re.$flags$&1)===0){const t=Te(e);if(!t)return;const i=t.$cmpMeta$,n=Ke("connectedCallback",i.$tagName$);if(t.$flags$&1)As(e,t,i.$listeners$),t?.$lazyInstance$?$n(t.$lazyInstance$,e):t?.$onReadyPromise$&&t.$onReadyPromise$.then(()=>$n(t.$lazyInstance$,e));else{t.$flags$|=1;let r;if(r=e.getAttribute(ii),r){if(i.$flags$&1){const s=gs(e.shadowRoot,i);e.classList.remove(s+"-h",s+"-s")}ya(e,i.$tagName$,r,t)}r||i.$flags$&12&&Ma(e);{let s=e;for(;s=s.parentNode||s.host;)if(s.nodeType===1&&s.hasAttribute("s-id")&&s["s-p"]||s["s-p"]){Ss(t,t.$ancestorComponent$=s);break}}i.$members$&&Object.entries(i.$members$).map(([s,[l]])=>{if(l&31&&s in e&&e[s]!==Object.prototype[s]){const a=e[s];delete e[s],e[s]=a}}),Ra(e,t,i)}n()}},Ma=e=>{if(!ie.document)return;const t=e["s-cr"]=ie.document.createComment("");t["s-cn"]=!0,ft(e,t,e.firstChild)},Cr=(e,t)=>{it(e,"disconnectedCallback",void 0,t||e)},za=async e=>{if((re.$flags$&1)===0){const t=Te(e);t?.$rmListeners$&&(t.$rmListeners$.map(i=>i()),t.$rmListeners$=void 0),t?.$lazyInstance$?Cr(t.$lazyInstance$,e):t?.$onReadyPromise$&&t.$onReadyPromise$.then(()=>Cr(t.$lazyInstance$,e))}Tt.has(e)&&Tt.delete(e),e.shadowRoot&&Tt.has(e.shadowRoot)&&Tt.delete(e.shadowRoot)},Ha=(e,t={})=>{var i;if(!ie.document){console.warn("Stencil: No document found. Skipping bootstrapping lazy components.");return}const n=Ke(),r=[],s=t.exclude||[],l=ie.customElements,a=ie.document.head,c=a.querySelector("meta[charset]"),d=ie.document.createElement("style"),u=[];let p,h=!0;Object.assign(re,t),re.$resourcesUrl$=new URL(t.resourcesUrl||"./",ie.document.baseURI).href,re.$flags$|=2,xa();let v=!1;if(e.map(k=>{k[1].map(y=>{var z,q,b;const g={$flags$:y[0],$tagName$:y[1],$members$:y[2],$listeners$:y[3]};g.$flags$&4&&(v=!0),g.$members$=y[2],g.$listeners$=y[3],g.$attrsToReflect$=[],g.$watchers$=(z=y[4])!=null?z:{},g.$serializers$=(q=y[5])!=null?q:{},g.$deserializers$=(b=y[6])!=null?b:{};const x=g.$tagName$,w=class extends HTMLElement{constructor(_){if(super(_),this.hasRegisteredEventListeners=!1,_=this,jl(_,g),g.$flags$&1){if(!_.shadowRoot)ca.call(_,g);else if(_.shadowRoot.mode!=="open")throw new Error(`Unable to re-use existing shadow root for ${g.$tagName$}! Mode is set to ${_.shadowRoot.mode} but Stencil only supports open shadow roots.`)}}connectedCallback(){const _=Te(this);_&&(this.hasRegisteredEventListeners||(this.hasRegisteredEventListeners=!0,As(this,_,g.$listeners$)),p&&(clearTimeout(p),p=null),h?u.push(this):re.jmp(()=>Da(this)))}disconnectedCallback(){re.jmp(()=>za(this)),re.raf(()=>{var _;const E=Te(this);if(!E)return;const D=u.findIndex(F=>F===this);D>-1&&u.splice(D,1),((_=E?.$vnode$)==null?void 0:_.$elm$)instanceof Node&&!E.$vnode$.$elm$.isConnected&&delete E.$vnode$.$elm$})}componentOnReady(){var _;return(_=Te(this))==null?void 0:_.$onReadyPromise$}};!(g.$flags$&1)&&g.$flags$&256&&pa(w.prototype),g.$lazyBundleId$=k[0],!s.includes(x)&&!l.get(x)&&(r.push(x),l.define(x,Cs(w,g,1)))})}),r.length>0&&(v&&(d.textContent+=os),d.textContent+=r.sort()+Yl,d.innerHTML.length)){d.setAttribute("data-styles","");const k=(i=re.$nonce$)!=null?i:us(ie.document);k!=null&&d.setAttribute("nonce",k),a.insertBefore(d,c?c.nextSibling:a.firstChild)}h=!1,u.length?u.map(k=>k.connectedCallback()):re.jmp(()=>p=setTimeout(Is,30)),n()},Lp=(e,t)=>t,As=(e,t,i,n)=>{i&&ie.document&&i.map(([r,s,l])=>{const a=Ba(ie.document,e,r),c=qa(t,l),d=Na(r);re.ael(a,s,c,d),(t.$rmListeners$=t.$rmListeners$||[]).push(()=>re.rel(a,s,c,d))})},qa=(e,t)=>i=>{var n;try{e.$flags$&256?(n=e.$lazyInstance$)==null||n[t](i):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,i])}catch(r){L(r,e.$hostElement$)}},Ba=(e,t,i)=>i&4?e:i&8?ie:i&16?e.body:t,Na=e=>Jl?{passive:(e&1)!==0,capture:(e&2)!==0}:(e&2)!==0;const ja=async(e,t)=>{if(!(typeof window>"u"))return await Rl(),Ha(JSON.parse('[["ifx-table",[[769,"ifx-table",{"cols":[8],"rows":[8],"buttonRendererOptions":[16],"iconButtonRendererOptions":[16],"rowHeight":[1,"row-height"],"tableHeight":[1,"table-height"],"pagination":[4],"paginationItemsPerPage":[1,"pagination-items-per-page"],"filterOrientation":[1,"filter-orientation"],"headline":[1],"variant":[1],"serverSidePagination":[4,"server-side-pagination"],"serverPageChangeHandler":[16],"showLoading":[4,"show-loading"],"currentPage":[32],"rowData":[32],"colData":[32],"filterOptions":[32],"currentFilters":[32],"uniqueKey":[32],"paginationPageSize":[32],"showSidebarFilters":[32],"matchingResultsCount":[32],"onBtShowLoading":[64]},[[0,"ifxItemsPerPageChange","handleResultsPerPageChange"],[0,"ifxChange","handleChipChange"]],{"rows":["rowsChanged"],"cols":["colsChanged"],"buttonRendererOptions":["onButtonRendererOptionsChanged"],"iconButtonRendererOptions":["onIconButtonRendererOptionsChanged"]}]]],["ifx-templates-ui",[[257,"ifx-templates-ui",null,[[0,"fieldError","handleError"],[0,"toggleTemplates","filterTemplates"]]]]],["ifx-set-filter",[[769,"ifx-set-filter",{"filterName":[1,"filter-name"],"filterLabel":[1,"filter-label"],"placeholder":[1],"type":[1],"options":[1],"filterValues":[32]}]]],["ifx-file-upload",[[769,"ifx-file-upload",{"dragAndDrop":[4,"drag-and-drop"],"required":[4],"disabled":[4],"maxFileSizeMB":[2,"max-file-size-m-b"],"allowedFileTypes":[1,"allowed-file-types"],"additionalAllowedFileTypes":[1,"additional-allowed-file-types"],"allowAnyFileType":[4,"allow-any-file-type"],"allowedFileExtensions":[1,"allowed-file-extensions"],"uploadHandler":[16],"maxFiles":[6146,"max-files"],"label":[1],"labelRequiredError":[1,"label-required-error"],"labelBrowseFiles":[1,"label-browse-files"],"labelDragAndDrop":[1,"label-drag-and-drop"],"labelUploadedFilesHeading":[1,"label-uploaded-files-heading"],"labelFileTooLarge":[1,"label-file-too-large"],"labelUnsupportedFileType":[1,"label-unsupported-file-type"],"labelUploaded":[1,"label-uploaded"],"labelUploadFailed":[1,"label-upload-failed"],"labelSupportedFormatsTemplate":[1,"label-supported-formats-template"],"labelFileSingular":[1,"label-file-singular"],"labelFilePlural":[1,"label-file-plural"],"labelMaxFilesInfo":[1,"label-max-files-info"],"labelMaxFilesExceeded":[1,"label-max-files-exceeded"],"ariaLabelBrowseFiles":[1,"aria-label-browse-files"],"ariaLabelDropzone":[1,"aria-label-dropzone"],"ariaLabelFileInput":[1,"aria-label-file-input"],"ariaLabelRemoveFile":[1,"aria-label-remove-file"],"ariaLabelCancelUpload":[1,"aria-label-cancel-upload"],"ariaLabelRetryUpload":[1,"aria-label-retry-upload"],"ariaLabelUploadingStatus":[1,"aria-label-uploading-status"],"ariaLabelUploadedStatus":[1,"aria-label-uploaded-status"],"ariaLabelUploadFailedStatus":[1,"aria-label-upload-failed-status"],"isDragOver":[32],"files":[32],"uploadTasks":[32],"rejectedSizeFiles":[32],"rejectedTypeFiles":[32],"requiredError":[32],"statusMessage":[32],"injectDemoState":[64],"triggerDemoValidation":[64]}]]],["ifx-icons-preview",[[769,"ifx-icons-preview",{"iconsArray":[32],"isCopied":[32],"copiedIndex":[32],"copiedIcon":[32],"htmlTag":[32],"iconName":[32],"searchTerm":[32]}]]],["ifx-faq",[[257,"ifx-faq"]]],["ifx-list-entry",[[769,"ifx-list-entry",{"value":[1028],"label":[1],"type":[1]},[[0,"ifxChange","handleFilterEntryChange"]],{"value":["valueChanged"]}]]],["ifx-overview-table",[[257,"ifx-overview-table"]]],["ifx-dropdown-trigger-button",[[769,"ifx-dropdown-trigger-button",{"isOpen":[4,"is-open"],"theme":[1],"variant":[1],"size":[1],"disabled":[4],"hideArrow":[4,"hide-arrow"]}]]],["ifx-filter-accordion",[[769,"ifx-filter-accordion",{"maxVisibleItems":[2,"max-visible-items"],"filterGroupName":[1,"filter-group-name"],"expanded":[32],"count":[32],"totalItems":[32]}]]],["ifx-filter-bar",[[769,"ifx-filter-bar",{"maxShownFilters":[2,"max-shown-filters"],"showMoreFiltersButton":[4,"show-more-filters-button"],"selectedOptions":[32],"showAllFilters":[32],"visibleSlots":[32]}]]],["ifx-filter-search",[[769,"ifx-filter-search",{"filterName":[1,"filter-name"],"disabled":[4],"filterValue":[1025,"filter-value"],"filterKey":[1,"filter-key"],"filterOrientation":[1,"filter-orientation"],"placeholder":[1],"showDeleteIcon":[32]},[[0,"ifxInput","handleFilterSearchChange"]],{"value":["valueChanged"]}]]],["ifx-list",[[769,"ifx-list",{"name":[1],"maxVisibleItems":[2,"max-visible-items"],"type":[1],"resetTrigger":[1028,"reset-trigger"],"expanded":[32],"showMore":[32],"selectedCount":[32],"totalItems":[32],"internalResetTrigger":[32]},null,{"type":["handleTypeChange"],"resetTrigger":["resetTriggerChanged"]}]]],["ifx-modal",[[769,"ifx-modal",{"opened":[1540],"caption":[1],"captionAriaLabel":[1,"caption-aria-label"],"closeOnOverlayClick":[4,"close-on-overlay-click"],"variant":[1],"size":[1],"alertIcon":[1,"alert-icon"],"okButtonLabel":[1,"ok-button-label"],"cancelButtonLabel":[1,"cancel-button-label"],"closeButtonAriaLabel":[1,"close-button-aria-label"],"showCloseButton":[4,"show-close-button"],"showModal":[32],"slotButtonsPresent":[32]},null,{"opened":["openedChanged"]}]]],["ifx-navbar-item",[[769,"ifx-navbar-item",{"showLabel":[4,"show-label"],"icon":[1],"href":[1],"target":[1],"hideOnMobile":[4,"hide-on-mobile"],"numberIndicator":[2,"number-indicator"],"dotIndicator":[4,"dot-indicator"],"internalHref":[32],"isMenuItem":[32],"hasChildNavItems":[32],"isSidebarMenuItem":[32],"itemPosition":[32],"hideComponent":[64],"showComponent":[64],"toggleChildren":[64],"moveChildComponentsIntoSubLayerMenu":[64],"toggleFirstLayerItem":[64],"addMenuItemClass":[64],"moveChildComponentsBackIntoNavbar":[64],"returnToFirstLayer":[64],"setMenuItemPosition":[64],"setItemSideSpecifications":[64]},[[0,"focusout","handleFocusOut"],[5,"mousedown","handleOutsideClick"]]]]],["ifx-search-bar",[[769,"ifx-search-bar",{"isOpen":[4,"is-open"],"disabled":[4],"value":[1025],"maxlength":[2],"autocomplete":[1],"internalState":[32],"onNavbarMobile":[64]},null,{"isOpen":["handlePropChange"]}]]],["ifx-sidebar-item",[[769,"ifx-sidebar-item",{"icon":[1],"href":[1],"target":[1],"numberIndicator":[2,"number-indicator"],"active":[4],"isActionItem":[4,"is-action-item"],"handleItemClick":[16],"showIcon":[32],"showIconWrapper":[32],"internalHref":[32],"isExpandable":[32],"isNested":[32],"isSubMenuItem":[32],"indicatorVariant":[32],"internalActiveState":[32],"setActiveClasses":[64],"expandMenu":[64],"isItemExpandable":[64]},[[0,"consoleError","handleConsoleError"]],{"active":["handleActiveChange"],"numberIndicator":["handleNumberIndicatorChange"]}]]],["ifx-tabs",[[769,"ifx-tabs",{"orientation":[1],"activeTabIndex":[1026,"active-tab-index"],"fullWidth":[4,"full-width"],"internalOrientation":[32],"internalActiveTabIndex":[32],"tabObjects":[32],"canScrollLeft":[32],"canScrollRight":[32]},[[9,"resize","updateBorderOnWindowResize"],[0,"tabHeaderChange","handleTabHeaderChange"],[0,"slotchange","onSlotChange"],[0,"keydown","handleKeyDown"]],{"activeTabIndex":["activeTabIndexChanged"]}]]],["ifx-tree-view-item",[[769,"ifx-tree-view-item",{"expanded":[1540],"initiallyExpanded":[4,"initially-expanded"],"disableItem":[4,"disable-item"],"ariaLabel":[1,"aria-label"],"initiallySelected":[4,"initially-selected"],"value":[1],"hasChildren":[32],"isChecked":[32],"partialChecked":[32],"level":[32],"disableAllItems":[32],"expandAllItems":[32],"suppressExpandEvents":[32]},null,{"expanded":["handleExpandedChange"],"disableItem":["handleDisableItemChange"]}]]],["ifx-breadcrumb-item-label",[[769,"ifx-breadcrumb-item-label",{"icon":[1],"href":[1],"target":[1]}]]],["ifx-checkbox-group",[[769,"ifx-checkbox-group",{"alignment":[1],"size":[1],"showGroupLabel":[4,"show-group-label"],"groupLabelText":[1,"group-label-text"],"showCaption":[4,"show-caption"],"captionText":[1,"caption-text"],"showCaptionIcon":[4,"show-caption-icon"],"required":[4],"hasErrors":[32],"setGroupError":[64]},[[0,"ifxError","handleCheckboxError"]]]]],["ifx-date-picker",[[769,"ifx-date-picker",{"size":[1],"error":[4],"success":[4],"disabled":[4],"ariaLabel":[1,"aria-label"],"value":[1],"type":[1],"max":[1],"min":[1],"required":[4],"label":[1],"caption":[1],"autocomplete":[1]}]]],["ifx-download",[[769,"ifx-download",{"tokens":[1]}]]],["ifx-dropdown-item",[[769,"ifx-dropdown-item",{"icon":[1],"href":[1],"target":[1],"hide":[4],"size":[32]},[[16,"menuSize","handleMenuSize"]]]]],["ifx-navbar",[[769,"ifx-navbar",{"applicationName":[1,"application-name"],"fixed":[4],"showLogoAndAppname":[4,"show-logo-and-appname"],"logoHref":[1,"logo-href"],"logoHrefTarget":[1,"logo-href-target"],"main":[32],"products":[32],"applications":[32],"design":[32],"support":[32],"about":[32],"hasLeftMenuItems":[32],"searchBarIsOpen":[32],"internalLogoHref":[32],"internalLogoHrefTarget":[32]},[[0,"ifxNavItem","clearFirstLayerMenu"],[0,"ifxOpen","handleSearchBarToggle"]]]]],["ifx-radio-button-group",[[769,"ifx-radio-button-group",{"alignment":[1],"size":[1],"showGroupLabel":[4,"show-group-label"],"groupLabelText":[1,"group-label-text"],"showCaption":[4,"show-caption"],"captionText":[1,"caption-text"],"showCaptionIcon":[4,"show-caption-icon"],"required":[4],"hasErrors":[32],"setGroupError":[64]},[[0,"ifxError","handleRadioButtonError"]]]]],["ifx-segment",[[769,"ifx-segment",{"icon":[1],"segmentIndex":[2,"segment-index"],"selected":[1028],"value":[1]}]]],["ifx-segmented-control",[[769,"ifx-segmented-control",{"caption":[1],"label":[1],"size":[1],"required":[4],"error":[4]},[[0,"segmentSelect","onSegmentSelect"]]]]],["ifx-sidebar",[[769,"ifx-sidebar",{"applicationName":[1,"application-name"],"initialCollapse":[4,"initial-collapse"],"showFooter":[4,"show-footer"],"showHeader":[4,"show-header"],"termsOfUse":[1,"terms-of-use"],"imprint":[1],"privacyPolicy":[1,"privacy-policy"],"target":[1],"copyrightText":[1,"copyright-text"],"collapsible":[4],"collapsed":[4],"hideMenuLabel":[1,"hide-menu-label"],"currentYear":[32],"internalTermsofUse":[32],"internalImprint":[32],"internalPrivacyPolicy":[32],"internalShowFooter":[32],"activeItem":[32],"isCollapsed":[32],"toggleCollapse":[64],"collapse":[64],"expand":[64]},[[0,"ifxSidebarMenu","handleSidebarItemInteraction"],[0,"ifxSidebarNavigationItem","handleSidebarItemActivated"]],{"collapsible":["handleCollapsibleChange"],"collapsed":["handleCollapsedPropChange"]}]]],["ifx-slider",[[769,"ifx-slider",{"min":[2],"max":[2],"step":[2],"value":[2],"minValueHandle":[2,"min-value-handle"],"maxValueHandle":[2,"max-value-handle"],"disabled":[4],"showPercentage":[4,"show-percentage"],"leftIcon":[1,"left-icon"],"rightIcon":[1,"right-icon"],"leftText":[1,"left-text"],"rightText":[1,"right-text"],"type":[1],"ariaLabel":[1,"aria-label"],"internalValue":[32],"percentage":[32],"internalMinValue":[32],"internalMaxValue":[32]},null,{"value":["valueChanged"],"minValueHandle":["minValueChanged"],"maxValueHandle":["maxValueChanged"]}]]],["ifx-step",[[769,"ifx-step",{"complete":[4],"disabled":[4],"error":[1028],"lastStep":[4,"last-step"],"stepId":[2,"step-id"],"stepperState":[16],"active":[32],"clickable":[32]},[[4,"ifxChange","onStepChange"]],{"stepperState":["updateCurrentStep"],"active":["updateErrorState"]}]]],["ifx-tooltip",[[769,"ifx-tooltip",{"header":[1],"text":[1],"position":[1],"ariaLabel":[1,"aria-label"],"variant":[1],"icon":[1],"tooltipVisible":[32],"internalPosition":[32]},null,{"position":["positionChanged"]}]]],["ifx-action-list",[[769,"ifx-action-list",{"listAriaLabel":[1,"list-aria-label"]}]]],["ifx-action-list-item",[[769,"ifx-action-list-item",{"itemTitle":[1,"item-title"],"description":[1],"value":[1],"href":[1],"target":[1],"disabled":[4],"itemAriaLabel":[1,"item-aria-label"]},null,{"disabled":["onDisabledChange"]}]]],["ifx-basic-table",[[768,"ifx-basic-table",{"cols":[1],"rows":[1],"rowHeight":[1,"row-height"],"tableHeight":[1,"table-height"],"variant":[1],"gridOptions":[32],"columnDefs":[32],"rowData":[32],"uniqueKey":[32]}]]],["ifx-breadcrumb",[[257,"ifx-breadcrumb"]]],["ifx-breadcrumb-item",[[769,"ifx-breadcrumb-item",{"isLastItem":[32],"uniqueId":[32],"hasDropdownMenu":[32]},[[5,"mousedown","handleOutsideClick"],[0,"keydown","handleKeyDown"],[0,"breadcrumbMenuIconWrapper","menuWrapperEventReEmitter"]]]]],["ifx-card",[[769,"ifx-card",{"direction":[1],"href":[1],"target":[1],"ariaLabel":[1,"aria-label"],"noBtns":[32],"alignment":[32],"noImg":[32],"internalHref":[32]},[[0,"imgPosition","setImgPosition"]]]]],["ifx-card-headline",[[769,"ifx-card-headline",{"direction":[32],"hasDesc":[32]}]]],["ifx-card-image",[[769,"ifx-card-image",{"src":[1],"alt":[1],"position":[1]}]]],["ifx-card-links",[[257,"ifx-card-links"]]],["ifx-card-overline",[[257,"ifx-card-overline"]]],["ifx-card-text",[[769,"ifx-card-text",{"hasBtn":[32]}]]],["ifx-content-switcher",[[769,"ifx-content-switcher",{"items":[32],"activeIndex":[32],"hoverIndex":[32],"focusIndex":[32],"dividers":[32]}]]],["ifx-content-switcher-item",[[769,"ifx-content-switcher-item",{"selected":[4],"value":[1]}]]],["ifx-dropdown",[[769,"ifx-dropdown",{"placement":[1],"defaultOpen":[4,"default-open"],"noAppendToBody":[4,"no-append-to-body"],"disabled":[4],"noCloseOnOutsideClick":[4,"no-close-on-outside-click"],"noCloseOnMenuClick":[4,"no-close-on-menu-click"],"internalIsOpen":[32],"trigger":[32],"menu":[32],"isOpen":[64],"closeDropdown":[64],"openDropdown":[64]},[[5,"mousedown","handleOutsideClick"],[4,"focusin","handleFocusOutside"],[0,"slotchange","watchHandlerSlot"]],{"defaultOpen":["watchHandlerIsOpen"],"disabled":["watchHandlerDisabled"]}]]],["ifx-dropdown-header",[[257,"ifx-dropdown-header"]]],["ifx-dropdown-menu",[[769,"ifx-dropdown-menu",{"isOpen":[4,"is-open"],"size":[1],"hideTopPadding":[32],"filteredItems":[32]},[[0,"ifxInput","handleMenuFilter"],[0,"ifxDropdownItem","handleDropdownItemValueEmission"]]]]],["ifx-dropdown-separator",[[257,"ifx-dropdown-separator"]]],["ifx-dropdown-trigger",[[769,"ifx-dropdown-trigger",{"isOpen":[4,"is-open"]}]]],["ifx-filter-type-group",[[769,"ifx-filter-type-group",{"selectedOptions":[32]}]]],["ifx-footer",[[769,"ifx-footer",{"copyrightText":[1,"copyright-text"],"currentYear":[32]}]]],["ifx-footer-column",[[257,"ifx-footer-column"]]],["ifx-navbar-profile",[[769,"ifx-navbar-profile",{"showLabel":[4,"show-label"],"href":[1],"imageUrl":[1,"image-url"],"target":[1],"alt":[1],"userName":[1,"user-name"],"internalHref":[32],"isMenuItem":[32],"hasChildNavItems":[32],"internalImageUrl":[32],"hideComponent":[64],"showComponent":[64]},[[5,"mousedown","handleOutsideClick"]]]]],["ifx-sidebar-title",[[769,"ifx-sidebar-title",{"showInCollapsed":[4,"show-in-collapsed"]}]]],["ifx-status",[[769,"ifx-status",{"label":[1],"border":[4],"color":[1]}]]],["ifx-stepper",[[769,"ifx-stepper",{"activeStep":[1026,"active-step"],"indicatorPosition":[1,"indicator-position"],"showStepNumber":[4,"show-step-number"],"variant":[1],"ariaLabel":[1,"aria-label"],"ariaCurrent":[1,"aria-current"],"stepsCount":[32],"shouldEmitEvent":[32],"emittedByClick":[32]},[[0,"ifxChange","onStepChange"]],{"activeStep":["handleActiveStep"]}]]],["ifx-switch",[[769,"ifx-switch",{"checked":[4],"name":[1],"disabled":[4],"value":[1],"internalChecked":[32],"isChecked":[64]},null,{"checked":["valueChanged"]}]]],["ifx-tab",[[772,"ifx-tab",{"header":[1],"disabled":[4],"icon":[1],"iconPosition":[1,"icon-position"]}]]],["ifx-textarea",[[769,"ifx-textarea",{"caption":[1],"cols":[2],"disabled":[4],"error":[4],"label":[1],"maxlength":[2],"name":[1],"placeholder":[1],"required":[4],"readOnly":[4,"read-only"],"resize":[1],"rows":[2],"value":[1025],"wrap":[1],"fullWidth":[513,"full-width"],"reset":[64]}]]],["ifx-tree-view",[[769,"ifx-tree-view",{"label":[1],"disableAllItems":[4,"disable-all-items"],"expandAllItems":[4,"expand-all-items"],"ariaLabel":[1,"aria-label"]},null,{"expandAllItems":["handleExpandAllItemsChange"],"disableAllItems":["handleDisableAllItemsChange"]}]]],["ifx-notification",[[769,"ifx-notification",{"icon":[1],"variant":[1],"linkText":[1,"link-text"],"linkHref":[1,"link-href"],"linkTarget":[1,"link-target"]}]]],["ifx-progress-bar",[[769,"ifx-progress-bar",{"value":[2],"size":[1],"showLabel":[4,"show-label"],"internalValue":[32]},null,{"value":["valueChanged"]}]]],["ifx-radio-button",[[769,"ifx-radio-button",{"disabled":[4],"value":[1],"error":[4],"size":[513],"name":[513],"checked":[1028],"internalChecked":[32],"hasSlot":[32],"isChecked":[64]},[[0,"keydown","handleKeyDown"],[4,"change","handleExternalChange"]],{"checked":["handleCheckedChange"],"internalChecked":["updateFormValue"],"error":["errorChanged"]}]]],["ifx-alert_2",[[769,"ifx-template",{"name":[1],"thumbnail":[1],"repoDetails":[32],"repoUrl":[32],"showDetails":[32],"isTemplatePage":[32],"isLoading":[32],"repoError":[32],"toggleTemplate":[64]}],[769,"ifx-alert",{"variant":[1],"icon":[1],"closable":[4],"AriaLive":[1,"aria-live"],"uniqueId":[32]}]]],["ifx-multiselect_2",[[769,"ifx-multiselect",{"name":[1],"disabled":[4],"required":[4],"error":[4],"caption":[1],"label":[1],"placeholder":[1],"showSearch":[4,"show-search"],"showSelectAll":[4,"show-select-all"],"showClearButton":[4,"show-clear-button"],"showExpandCollapse":[4,"show-expand-collapse"],"noResultsMessage":[1,"no-results-message"],"showNoResultsMessage":[4,"show-no-results-message"],"searchPlaceholder":[1,"search-placeholder"],"selectAllLabel":[1,"select-all-label"],"expandLabel":[1,"expand-label"],"collapseLabel":[1,"collapse-label"],"ariaMultiSelectLabel":[1,"aria-multi-select-label"],"ariaMultiSelectLabelledBy":[1,"aria-multi-select-labelled-by"],"ariaMultiSelectDescribedBy":[1,"aria-multi-select-described-by"],"ariaSearchLabel":[1,"aria-search-label"],"ariaClearLabel":[1,"aria-clear-label"],"ariaToggleLabel":[1,"aria-toggle-label"],"ariaSelectAllLabel":[1,"aria-select-all-label"],"ariaExpandAllLabel":[1,"aria-expand-all-label"],"ariaCollapseAllLabel":[1,"aria-collapse-all-label"],"internalError":[32],"persistentSelectedOptions":[32],"dropdownOpen":[32],"dropdownFlipped":[32],"searchTerm":[32],"clearSelection":[64]},null,{"error":["updateInternalError"],"persistentSelectedOptions":["onSelectionChange"]}],[769,"ifx-multiselect-option",{"value":[1],"selected":[1540],"disabled":[1540],"indeterminate":[1540],"isExpanded":[32],"hasChildren":[32],"depth":[32],"searchTerm":[32],"isSearchActive":[32],"isSearchDisabled":[32]},[[0,"click","handleClick"],[0,"keydown","handleKeyDown"]]]]],["ifx-accordion_2",[[769,"ifx-accordion-item",{"caption":[1],"open":[1028],"AriaLevel":[2,"aria-level"],"internalOpen":[32]},[[0,"keydown","handleKeydown"]],{"open":["openChanged"]}],[785,"ifx-accordion",{"autoCollapse":[4,"auto-collapse"]},[[0,"ifxOpen","onItemOpen"]]]]],["ifx-select",[[768,"ifx-select",{"value":[1],"name":[1],"items":[16],"choices":[1],"renderChoiceLimit":[2,"render-choice-limit"],"maxItemCount":[2,"max-item-count"],"addItems":[4,"add-items"],"removeItems":[4,"remove-items"],"removeItemButton":[4,"remove-item-button"],"editItems":[4,"edit-items"],"duplicateItemsAllowed":[4,"duplicate-items-allowed"],"delimiter":[1],"paste":[4],"showSearch":[4,"show-search"],"searchChoices":[4,"search-choices"],"searchFields":[1,"search-fields"],"searchFloor":[2,"search-floor"],"searchResultLimit":[2,"search-result-limit"],"position":[1],"resetScrollPosition":[4,"reset-scroll-position"],"shouldSort":[4,"should-sort"],"shouldSortItems":[4,"should-sort-items"],"sorter":[16],"placeholder":[8],"searchPlaceholderValue":[1,"search-placeholder-value"],"prependValue":[1,"prepend-value"],"appendValue":[1,"append-value"],"renderSelectedChoices":[1,"render-selected-choices"],"loadingText":[1,"loading-text"],"noResultsText":[1,"no-results-text"],"noChoicesText":[1,"no-choices-text"],"itemSelectText":[1,"item-select-text"],"addItemText":[1,"add-item-text"],"maxItemText":[1,"max-item-text"],"uniqueItemText":[1,"unique-item-text"],"classNames":[16],"fuseOptions":[16],"addItemFilter":[1,"add-item-filter"],"customAddItemText":[1,"custom-add-item-text"],"callbackOnInit":[16],"callbackOnCreateTemplates":[16],"valueComparer":[16],"error":[4],"label":[1],"caption":[1],"disabled":[4],"required":[4],"placeholderValue":[1,"placeholder-value"],"options":[1025],"size":[1],"showClearButton":[4,"show-clear-button"],"selectedOption":[32],"optionIsSelected":[32],"clearSelection":[64],"handleChange":[64],"highlightItem":[64],"unhighlightItem":[64],"highlightAll":[64],"unhighlightAll":[64],"removeActiveItemsByValue":[64],"removeActiveItems":[64],"removeHighlightedItems":[64],"showDropdown":[64],"hideDropdown":[64],"getValue":[64],"setValue":[64],"setChoiceByValue":[64],"setChoices":[64],"clearChoices":[64],"clearStore":[64],"clearInput":[64],"ajax":[64],"handleDeleteIcon":[64]},[[5,"mousedown","handleOutsideClick"]],{"disabled":["watchDisabled"]}]]],["ifx-spinner_2",[[769,"ifx-spinner",{"size":[1],"variant":[1],"inverted":[4],"ariaLabel":[1,"aria-label"]}],[769,"ifx-text-field",{"placeholder":[1],"value":[1025],"error":[4],"label":[1],"icon":[1],"caption":[1],"size":[1],"required":[4],"success":[4],"disabled":[4],"readOnly":[4,"read-only"],"maxlength":[2],"showDeleteIcon":[4,"show-delete-icon"],"autocomplete":[1],"type":[1],"internalId":[1,"internal-id"],"internalType":[32],"reset":[64]},null,{"value":["valueWatcher"]}]]],["ifx-search-field",[[769,"ifx-search-field",{"value":[1025],"suggestions":[16],"showSuggestions":[4,"show-suggestions"],"maxSuggestions":[2,"max-suggestions"],"maxHistoryItems":[2,"max-history-items"],"enableHistory":[4,"enable-history"],"historyKey":[1,"history-key"],"historyHeaderText":[1,"history-header-text"],"ariaLabel":[1,"aria-label"],"ariaLabelledBy":[1,"aria-labelled-by"],"ariaDescribedBy":[1,"aria-described-by"],"deleteIconAriaLabel":[1,"delete-icon-aria-label"],"historyDeleteAriaLabel":[1,"history-delete-aria-label"],"dropdownAriaLabel":[1,"dropdown-aria-label"],"suggestionAriaLabel":[1,"suggestion-aria-label"],"historyItemAriaLabel":[1,"history-item-aria-label"],"showDeleteIcon":[4,"show-delete-icon"],"disabled":[4],"size":[1],"placeholder":[1],"autocomplete":[1],"maxlength":[2],"showDropdown":[32],"filteredSuggestions":[32],"selectedSuggestionIndex":[32],"searchHistory":[32],"showDeleteIconInternalState":[32],"isFocused":[32]},[[5,"mousedown","handleOutsideClick"],[0,"keydown","handleKeyDown"]],{"value":["valueWatcher"],"suggestions":["suggestionsWatcher"]}]]],["ifx-icon-button",[[769,"ifx-icon-button",{"variant":[1],"size":[1],"disabled":[4],"icon":[1],"href":[1],"target":[1],"shape":[1],"ariaLabel":[1,"aria-label"],"internalIcon":[32],"setFocus":[64]},[[2,"click","handleClick"]],{"icon":["updateIcon"]}]]],["ifx-button",[[769,"ifx-button",{"variant":[1],"theme":[1],"size":[1],"disabled":[4],"href":[1],"target":[1],"type":[1],"fullWidth":[4,"full-width"],"ariaLabel":[1,"aria-label"],"internalHref":[32],"setFocus":[64]},[[0,"keydown","handleKeyDown"],[2,"click","handleHostClick"]],{"href":["setInternalHref"]}]]],["ifx-indicator",[[769,"ifx-indicator",{"inverted":[4],"ariaLabel":[1,"aria-label"],"variant":[1],"number":[2],"filteredNumber":[32]}]]],["ifx-checkbox",[[769,"ifx-checkbox",{"disabled":[4],"checked":[4],"error":[4],"size":[1],"indeterminate":[4],"value":[1],"internalChecked":[32],"internalIndeterminate":[32],"isChecked":[64],"toggleCheckedState":[64]},null,{"checked":["valueChanged"],"error":["errorChanged"],"indeterminate":["indeterminateChanged"]}]]],["ifx-chip_3",[[769,"ifx-pagination",{"currentPage":[2,"current-page"],"showItemsPerPage":[4,"show-items-per-page"],"total":[2],"itemsPerPage":[1,"items-per-page"],"internalPage":[32],"internalItemsPerPage":[32],"numberOfPages":[32],"filteredItemsPerPage":[32],"visiblePages":[32]},[[0,"ifxSelect","setItemsPerPage"]],{"total":["watchTotalHandler"],"currentPage":["currentPageWatcher"]}],[769,"ifx-chip",{"placeholder":[1],"size":[1],"value":[1025],"variant":[1],"theme":[1],"readOnly":[4,"read-only"],"ariaLabel":[1,"aria-label"],"disabled":[4],"icon":[1],"opened":[32],"selectedOptions":[32]},[[5,"mousedown","closeDropdownOnOutsideClick"],[0,"keydown","handleKeyDown"],[0,"ifxChipItemSelect","updateSelectedOptions"]],{"value":["handleValueChange"],"readOnly":["handleReadOnlyChange"]}],[769,"ifx-chip-item",{"value":[1],"chipState":[16],"selected":[1540]},[[16,"ifxChipItemSelect","updateItemSelection"]],{"selected":["validateSelected"]}]]],["ifx-link",[[769,"ifx-link",{"href":[1],"target":[1],"variant":[1],"size":[1],"disabled":[4],"download":[1],"ariaLabel":[1,"aria-label"],"internalHref":[32],"internalTarget":[32],"internalVariant":[32]}]]],["ifx-icon",[[768,"ifx-icon",{"icon":[1025],"ifxIcon":[1032,"ifx-icon"],"internalIcon":[32]},null,{"icon":["updateIcon"]}]]]]'),t)};(function(){if(typeof window<"u"&&window.Reflect!==void 0&&window.customElements!==void 0){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}})();const Va={async install(){ja()}};function qn(e){const t=Object.create(null);for(const i of e.split(","))t[i]=1;return i=>i in t}const fe={},Ft=[],Ge=()=>{},Es=()=>!1,Mi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Bn=e=>e.startsWith("onUpdate:"),$e=Object.assign,Nn=(e,t)=>{const i=e.indexOf(t);i>-1&&e.splice(i,1)},Ua=Object.prototype.hasOwnProperty,le=(e,t)=>Ua.call(e,t),W=Array.isArray,Pt=e=>zi(e)==="[object Map]",ks=e=>zi(e)==="[object Set]",G=e=>typeof e=="function",he=e=>typeof e=="string",xt=e=>typeof e=="symbol",pe=e=>e!==null&&typeof e=="object",Ls=e=>(pe(e)||G(e))&&G(e.then)&&G(e.catch),Ts=Object.prototype.toString,zi=e=>Ts.call(e),Wa=e=>zi(e).slice(8,-1),Fs=e=>zi(e)==="[object Object]",jn=e=>he(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Kt=qn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hi=e=>{const t=Object.create(null);return(i=>t[i]||(t[i]=e(i)))},Ga=/-\w/g,ht=Hi(e=>e.replace(Ga,t=>t.slice(1).toUpperCase())),Ka=/\B([A-Z])/g,Ct=Hi(e=>e.replace(Ka,"-$1").toLowerCase()),Ps=Hi(e=>e.charAt(0).toUpperCase()+e.slice(1)),Yi=Hi(e=>e?`on${Ps(e)}`:""),pt=(e,t)=>!Object.is(e,t),Zi=(e,...t)=>{for(let i=0;i<e.length;i++)e[i](...t)},Os=(e,t,i,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:i})},Ya=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ar;const qi=()=>Ar||(Ar=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vn(e){if(W(e)){const t={};for(let i=0;i<e.length;i++){const n=e[i],r=he(n)?Qa(n):Vn(n);if(r)for(const s in r)t[s]=r[s]}return t}else if(he(e)||pe(e))return e}const Za=/;(?![^(]*\))/g,Ja=/:([^]+)/,Xa=/\/\*[^]*?\*\//g;function Qa(e){const t={};return e.replace(Xa,"").split(Za).forEach(i=>{if(i){const n=i.split(Ja);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Un(e){let t="";if(he(e))t=e;else if(W(e))for(let i=0;i<e.length;i++){const n=Un(e[i]);n&&(t+=n+" ")}else if(pe(e))for(const i in e)e[i]&&(t+=i+" ");return t.trim()}const eo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",to=qn(eo);function Rs(e){return!!e||e===""}const Ds=e=>!!(e&&e.__v_isRef===!0),J=e=>he(e)?e:e==null?"":W(e)||pe(e)&&(e.toString===Ts||!G(e.toString))?Ds(e)?J(e.value):JSON.stringify(e,Ms,2):String(e),Ms=(e,t)=>Ds(t)?Ms(e,t.value):Pt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((i,[n,r],s)=>(i[Ji(n,s)+" =>"]=r,i),{})}:ks(t)?{[`Set(${t.size})`]:[...t.values()].map(i=>Ji(i))}:xt(t)?Ji(t):pe(t)&&!W(t)&&!Fs(t)?String(t):t,Ji=(e,t="")=>{var i;return xt(e)?`Symbol(${(i=e.description)!=null?i:t})`:e};let Ae;class io{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ae,!t&&Ae&&(this.index=(Ae.scopes||(Ae.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,i;if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].pause();for(t=0,i=this.effects.length;t<i;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,i;if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].resume();for(t=0,i=this.effects.length;t<i;t++)this.effects[t].resume()}}run(t){if(this._active){const i=Ae;try{return Ae=this,t()}finally{Ae=i}}}on(){++this._on===1&&(this.prevScope=Ae,Ae=this)}off(){this._on>0&&--this._on===0&&(Ae=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let i,n;for(i=0,n=this.effects.length;i<n;i++)this.effects[i].stop();for(this.effects.length=0,i=0,n=this.cleanups.length;i<n;i++)this.cleanups[i]();if(this.cleanups.length=0,this.scopes){for(i=0,n=this.scopes.length;i<n;i++)this.scopes[i].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function no(){return Ae}let de;const Xi=new WeakSet;class zs{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ae&&Ae.active&&Ae.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xi.has(this)&&(Xi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||qs(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Er(this),Bs(this);const t=de,i=Re;de=this,Re=!0;try{return this.fn()}finally{Ns(this),de=t,Re=i,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Kn(t);this.deps=this.depsTail=void 0,Er(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){yn(this)&&this.run()}get dirty(){return yn(this)}}let Hs=0,Yt,Zt;function qs(e,t=!1){if(e.flags|=8,t){e.next=Zt,Zt=e;return}e.next=Yt,Yt=e}function Wn(){Hs++}function Gn(){if(--Hs>0)return;if(Zt){let t=Zt;for(Zt=void 0;t;){const i=t.next;t.next=void 0,t.flags&=-9,t=i}}let e;for(;Yt;){let t=Yt;for(Yt=void 0;t;){const i=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=i}}if(e)throw e}function Bs(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ns(e){let t,i=e.depsTail,n=i;for(;n;){const r=n.prevDep;n.version===-1?(n===i&&(i=r),Kn(n),ro(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}e.deps=t,e.depsTail=i}function yn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(js(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function js(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===si)||(e.globalVersion=si,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!yn(e))))return;e.flags|=2;const t=e.dep,i=de,n=Re;de=e,Re=!0;try{Bs(e);const r=e.fn(e._value);(t.version===0||pt(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{de=i,Re=n,Ns(e),e.flags&=-3}}function Kn(e,t=!1){const{dep:i,prevSub:n,nextSub:r}=e;if(n&&(n.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=n,e.nextSub=void 0),i.subs===e&&(i.subs=n,!n&&i.computed)){i.computed.flags&=-5;for(let s=i.computed.deps;s;s=s.nextDep)Kn(s,!0)}!t&&!--i.sc&&i.map&&i.map.delete(i.key)}function ro(e){const{prevDep:t,nextDep:i}=e;t&&(t.nextDep=i,e.prevDep=void 0),i&&(i.prevDep=t,e.nextDep=void 0)}let Re=!0;const Vs=[];function nt(){Vs.push(Re),Re=!1}function rt(){const e=Vs.pop();Re=e===void 0?!0:e}function Er(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const i=de;de=void 0;try{t()}finally{de=i}}}let si=0;class so{constructor(t,i){this.sub=t,this.dep=i,this.version=i.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Yn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!de||!Re||de===this.computed)return;let i=this.activeLink;if(i===void 0||i.sub!==de)i=this.activeLink=new so(de,this),de.deps?(i.prevDep=de.depsTail,de.depsTail.nextDep=i,de.depsTail=i):de.deps=de.depsTail=i,Us(i);else if(i.version===-1&&(i.version=this.version,i.nextDep)){const n=i.nextDep;n.prevDep=i.prevDep,i.prevDep&&(i.prevDep.nextDep=n),i.prevDep=de.depsTail,i.nextDep=void 0,de.depsTail.nextDep=i,de.depsTail=i,de.deps===i&&(de.deps=n)}return i}trigger(t){this.version++,si++,this.notify(t)}notify(t){Wn();try{for(let i=this.subs;i;i=i.prevSub)i.sub.notify()&&i.sub.dep.notify()}finally{Gn()}}}function Us(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)Us(n)}const i=e.dep.subs;i!==e&&(e.prevSub=i,i&&(i.nextSub=e)),e.dep.subs=e}}const wn=new WeakMap,It=Symbol(""),Sn=Symbol(""),li=Symbol("");function ve(e,t,i){if(Re&&de){let n=wn.get(e);n||wn.set(e,n=new Map);let r=n.get(i);r||(n.set(i,r=new Yn),r.map=n,r.key=i),r.track()}}function tt(e,t,i,n,r,s){const l=wn.get(e);if(!l){si++;return}const a=c=>{c&&c.trigger()};if(Wn(),t==="clear")l.forEach(a);else{const c=W(e),d=c&&jn(i);if(c&&i==="length"){const u=Number(n);l.forEach((p,h)=>{(h==="length"||h===li||!xt(h)&&h>=u)&&a(p)})}else switch((i!==void 0||l.has(void 0))&&a(l.get(i)),d&&a(l.get(li)),t){case"add":c?d&&a(l.get("length")):(a(l.get(It)),Pt(e)&&a(l.get(Sn)));break;case"delete":c||(a(l.get(It)),Pt(e)&&a(l.get(Sn)));break;case"set":Pt(e)&&a(l.get(It));break}}Gn()}function Et(e){const t=se(e);return t===e?t:(ve(t,"iterate",li),De(e)?t:t.map(st))}function Zn(e){return ve(e=se(e),"iterate",li),e}function at(e,t){return gt(e)?Ot(e)?ai(st(t)):ai(t):st(t)}const lo={__proto__:null,[Symbol.iterator](){return Qi(this,Symbol.iterator,e=>at(this,e))},concat(...e){return Et(this).concat(...e.map(t=>W(t)?Et(t):t))},entries(){return Qi(this,"entries",e=>(e[1]=at(this,e[1]),e))},every(e,t){return Xe(this,"every",e,t,void 0,arguments)},filter(e,t){return Xe(this,"filter",e,t,i=>i.map(n=>at(this,n)),arguments)},find(e,t){return Xe(this,"find",e,t,i=>at(this,i),arguments)},findIndex(e,t){return Xe(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Xe(this,"findLast",e,t,i=>at(this,i),arguments)},findLastIndex(e,t){return Xe(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Xe(this,"forEach",e,t,void 0,arguments)},includes(...e){return en(this,"includes",e)},indexOf(...e){return en(this,"indexOf",e)},join(e){return Et(this).join(e)},lastIndexOf(...e){return en(this,"lastIndexOf",e)},map(e,t){return Xe(this,"map",e,t,void 0,arguments)},pop(){return Vt(this,"pop")},push(...e){return Vt(this,"push",e)},reduce(e,...t){return kr(this,"reduce",e,t)},reduceRight(e,...t){return kr(this,"reduceRight",e,t)},shift(){return Vt(this,"shift")},some(e,t){return Xe(this,"some",e,t,void 0,arguments)},splice(...e){return Vt(this,"splice",e)},toReversed(){return Et(this).toReversed()},toSorted(e){return Et(this).toSorted(e)},toSpliced(...e){return Et(this).toSpliced(...e)},unshift(...e){return Vt(this,"unshift",e)},values(){return Qi(this,"values",e=>at(this,e))}};function Qi(e,t,i){const n=Zn(e),r=n[t]();return n!==e&&!De(e)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=i(s.value)),s}),r}const ao=Array.prototype;function Xe(e,t,i,n,r,s){const l=Zn(e),a=l!==e&&!De(e),c=l[t];if(c!==ao[t]){const p=c.apply(e,s);return a?st(p):p}let d=i;l!==e&&(a?d=function(p,h){return i.call(this,at(e,p),h,e)}:i.length>2&&(d=function(p,h){return i.call(this,p,h,e)}));const u=c.call(l,d,n);return a&&r?r(u):u}function kr(e,t,i,n){const r=Zn(e);let s=i;return r!==e&&(De(e)?i.length>3&&(s=function(l,a,c){return i.call(this,l,a,c,e)}):s=function(l,a,c){return i.call(this,l,at(e,a),c,e)}),r[t](s,...n)}function en(e,t,i){const n=se(e);ve(n,"iterate",li);const r=n[t](...i);return(r===-1||r===!1)&&er(i[0])?(i[0]=se(i[0]),n[t](...i)):r}function Vt(e,t,i=[]){nt(),Wn();const n=se(e)[t].apply(e,i);return Gn(),rt(),n}const oo=qn("__proto__,__v_isRef,__isVue"),Ws=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(xt));function co(e){xt(e)||(e=String(e));const t=se(this);return ve(t,"has",e),t.hasOwnProperty(e)}class Gs{constructor(t=!1,i=!1){this._isReadonly=t,this._isShallow=i}get(t,i,n){if(i==="__v_skip")return t.__v_skip;const r=this._isReadonly,s=this._isShallow;if(i==="__v_isReactive")return!r;if(i==="__v_isReadonly")return r;if(i==="__v_isShallow")return s;if(i==="__v_raw")return n===(r?s?_o:Js:s?Zs:Ys).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const l=W(t);if(!r){let c;if(l&&(c=lo[i]))return c;if(i==="hasOwnProperty")return co}const a=Reflect.get(t,i,_e(t)?t:n);if((xt(i)?Ws.has(i):oo(i))||(r||ve(t,"get",i),s))return a;if(_e(a)){const c=l&&jn(i)?a:a.value;return r&&pe(c)?Cn(c):c}return pe(a)?r?Cn(a):Xn(a):a}}class Ks extends Gs{constructor(t=!1){super(!1,t)}set(t,i,n,r){let s=t[i];const l=W(t)&&jn(i);if(!this._isShallow){const d=gt(s);if(!De(n)&&!gt(n)&&(s=se(s),n=se(n)),!l&&_e(s)&&!_e(n))return d||(s.value=n),!0}const a=l?Number(i)<t.length:le(t,i),c=Reflect.set(t,i,n,_e(t)?t:r);return t===se(r)&&(a?pt(n,s)&&tt(t,"set",i,n):tt(t,"add",i,n)),c}deleteProperty(t,i){const n=le(t,i);t[i];const r=Reflect.deleteProperty(t,i);return r&&n&&tt(t,"delete",i,void 0),r}has(t,i){const n=Reflect.has(t,i);return(!xt(i)||!Ws.has(i))&&ve(t,"has",i),n}ownKeys(t){return ve(t,"iterate",W(t)?"length":It),Reflect.ownKeys(t)}}class uo extends Gs{constructor(t=!1){super(!0,t)}set(t,i){return!0}deleteProperty(t,i){return!0}}const fo=new Ks,po=new uo,mo=new Ks(!0);const In=e=>e,gi=e=>Reflect.getPrototypeOf(e);function ho(e,t,i){return function(...n){const r=this.__v_raw,s=se(r),l=Pt(s),a=e==="entries"||e===Symbol.iterator&&l,c=e==="keys"&&l,d=r[e](...n),u=i?In:t?ai:st;return!t&&ve(s,"iterate",c?Sn:It),{next(){const{value:p,done:h}=d.next();return h?{value:p,done:h}:{value:a?[u(p[0]),u(p[1])]:u(p),done:h}},[Symbol.iterator](){return this}}}}function xi(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function go(e,t){const i={get(r){const s=this.__v_raw,l=se(s),a=se(r);e||(pt(r,a)&&ve(l,"get",r),ve(l,"get",a));const{has:c}=gi(l),d=t?In:e?ai:st;if(c.call(l,r))return d(s.get(r));if(c.call(l,a))return d(s.get(a));s!==l&&s.get(r)},get size(){const r=this.__v_raw;return!e&&ve(se(r),"iterate",It),r.size},has(r){const s=this.__v_raw,l=se(s),a=se(r);return e||(pt(r,a)&&ve(l,"has",r),ve(l,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const l=this,a=l.__v_raw,c=se(a),d=t?In:e?ai:st;return!e&&ve(c,"iterate",It),a.forEach((u,p)=>r.call(s,d(u),d(p),l))}};return $e(i,e?{add:xi("add"),set:xi("set"),delete:xi("delete"),clear:xi("clear")}:{add(r){!t&&!De(r)&&!gt(r)&&(r=se(r));const s=se(this);return gi(s).has.call(s,r)||(s.add(r),tt(s,"add",r,r)),this},set(r,s){!t&&!De(s)&&!gt(s)&&(s=se(s));const l=se(this),{has:a,get:c}=gi(l);let d=a.call(l,r);d||(r=se(r),d=a.call(l,r));const u=c.call(l,r);return l.set(r,s),d?pt(s,u)&&tt(l,"set",r,s):tt(l,"add",r,s),this},delete(r){const s=se(this),{has:l,get:a}=gi(s);let c=l.call(s,r);c||(r=se(r),c=l.call(s,r)),a&&a.call(s,r);const d=s.delete(r);return c&&tt(s,"delete",r,void 0),d},clear(){const r=se(this),s=r.size!==0,l=r.clear();return s&&tt(r,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(r=>{i[r]=ho(r,e,t)}),i}function Jn(e,t){const i=go(e,t);return(n,r,s)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?n:Reflect.get(le(i,r)&&r in n?i:n,r,s)}const xo={get:Jn(!1,!1)},bo={get:Jn(!1,!0)},vo={get:Jn(!0,!1)};const Ys=new WeakMap,Zs=new WeakMap,Js=new WeakMap,_o=new WeakMap;function $o(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yo(e){return e.__v_skip||!Object.isExtensible(e)?0:$o(Wa(e))}function Xn(e){return gt(e)?e:Qn(e,!1,fo,xo,Ys)}function wo(e){return Qn(e,!1,mo,bo,Zs)}function Cn(e){return Qn(e,!0,po,vo,Js)}function Qn(e,t,i,n,r){if(!pe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=yo(e);if(s===0)return e;const l=r.get(e);if(l)return l;const a=new Proxy(e,s===2?n:i);return r.set(e,a),a}function Ot(e){return gt(e)?Ot(e.__v_raw):!!(e&&e.__v_isReactive)}function gt(e){return!!(e&&e.__v_isReadonly)}function De(e){return!!(e&&e.__v_isShallow)}function er(e){return e?!!e.__v_raw:!1}function se(e){const t=e&&e.__v_raw;return t?se(t):e}function So(e){return!le(e,"__v_skip")&&Object.isExtensible(e)&&Os(e,"__v_skip",!0),e}const st=e=>pe(e)?Xn(e):e,ai=e=>pe(e)?Cn(e):e;function _e(e){return e?e.__v_isRef===!0:!1}function Xs(e){return Io(e,!1)}function Io(e,t){return _e(e)?e:new Co(e,t)}class Co{constructor(t,i){this.dep=new Yn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=i?t:se(t),this._value=i?t:st(t),this.__v_isShallow=i}get value(){return this.dep.track(),this._value}set value(t){const i=this._rawValue,n=this.__v_isShallow||De(t)||gt(t);t=n?t:se(t),pt(t,i)&&(this._rawValue=t,this._value=n?t:st(t),this.dep.trigger())}}function Ci(e){return _e(e)?e.value:e}const Ao={get:(e,t,i)=>t==="__v_raw"?e:Ci(Reflect.get(e,t,i)),set:(e,t,i,n)=>{const r=e[t];return _e(r)&&!_e(i)?(r.value=i,!0):Reflect.set(e,t,i,n)}};function Qs(e){return Ot(e)?e:new Proxy(e,Ao)}class Eo{constructor(t,i,n){this.fn=t,this.setter=i,this._value=void 0,this.dep=new Yn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=si-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!i,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&de!==this)return qs(this,!0),!0}get value(){const t=this.dep.track();return js(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ko(e,t,i=!1){let n,r;return G(e)?n=e:(n=e.get,r=e.set),new Eo(n,r,i)}const bi={},Ai=new WeakMap;let St;function Lo(e,t=!1,i=St){if(i){let n=Ai.get(i);n||Ai.set(i,n=[]),n.push(e)}}function To(e,t,i=fe){const{immediate:n,deep:r,once:s,scheduler:l,augmentJob:a,call:c}=i,d=x=>r?x:De(x)||r===!1||r===0?ut(x,1):ut(x);let u,p,h,v,k=!1,y=!1;if(_e(e)?(p=()=>e.value,k=De(e)):Ot(e)?(p=()=>d(e),k=!0):W(e)?(y=!0,k=e.some(x=>Ot(x)||De(x)),p=()=>e.map(x=>{if(_e(x))return x.value;if(Ot(x))return d(x);if(G(x))return c?c(x,2):x()})):G(e)?t?p=c?()=>c(e,2):e:p=()=>{if(h){nt();try{h()}finally{rt()}}const x=St;St=u;try{return c?c(e,3,[v]):e(v)}finally{St=x}}:p=Ge,t&&r){const x=p,w=r===!0?1/0:r;p=()=>ut(x(),w)}const z=no(),q=()=>{u.stop(),z&&z.active&&Nn(z.effects,u)};if(s&&t){const x=t;t=(...w)=>{x(...w),q()}}let b=y?new Array(e.length).fill(bi):bi;const g=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(t){const w=u.run();if(r||k||(y?w.some((_,E)=>pt(_,b[E])):pt(w,b))){h&&h();const _=St;St=u;try{const E=[w,b===bi?void 0:y&&b[0]===bi?[]:b,v];b=w,c?c(t,3,E):t(...E)}finally{St=_}}}else u.run()};return a&&a(g),u=new zs(p),u.scheduler=l?()=>l(g,!1):g,v=x=>Lo(x,!1,u),h=u.onStop=()=>{const x=Ai.get(u);if(x){if(c)c(x,4);else for(const w of x)w();Ai.delete(u)}},t?n?g(!0):b=u.run():l?l(g.bind(null,!0),!0):u.run(),q.pause=u.pause.bind(u),q.resume=u.resume.bind(u),q.stop=q,q}function ut(e,t=1/0,i){if(t<=0||!pe(e)||e.__v_skip||(i=i||new Map,(i.get(e)||0)>=t))return e;if(i.set(e,t),t--,_e(e))ut(e.value,t,i);else if(W(e))for(let n=0;n<e.length;n++)ut(e[n],t,i);else if(ks(e)||Pt(e))e.forEach(n=>{ut(n,t,i)});else if(Fs(e)){for(const n in e)ut(e[n],t,i);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&ut(e[n],t,i)}return e}function di(e,t,i,n){try{return n?e(...n):e()}catch(r){Bi(r,t,i)}}function Ye(e,t,i,n){if(G(e)){const r=di(e,t,i,n);return r&&Ls(r)&&r.catch(s=>{Bi(s,t,i)}),r}if(W(e)){const r=[];for(let s=0;s<e.length;s++)r.push(Ye(e[s],t,i,n));return r}}function Bi(e,t,i,n=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||fe;if(t){let a=t.parent;const c=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${i}`;for(;a;){const u=a.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,c,d)===!1)return}a=a.parent}if(s){nt(),di(s,null,10,[e,c,d]),rt();return}}Fo(e,i,r,n,l)}function Fo(e,t,i,n=!0,r=!1){if(r)throw e;console.error(e)}const we=[];let je=-1;const Rt=[];let ot=null,Lt=0;const el=Promise.resolve();let Ei=null;function X(e){const t=Ei||el;return e?t.then(this?e.bind(this):e):t}function Po(e){let t=je+1,i=we.length;for(;t<i;){const n=t+i>>>1,r=we[n],s=oi(r);s<e||s===e&&r.flags&2?t=n+1:i=n}return t}function tr(e){if(!(e.flags&1)){const t=oi(e),i=we[we.length-1];!i||!(e.flags&2)&&t>=oi(i)?we.push(e):we.splice(Po(t),0,e),e.flags|=1,tl()}}function tl(){Ei||(Ei=el.then(nl))}function Oo(e){W(e)?Rt.push(...e):ot&&e.id===-1?ot.splice(Lt+1,0,e):e.flags&1||(Rt.push(e),e.flags|=1),tl()}function Lr(e,t,i=je+1){for(;i<we.length;i++){const n=we[i];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;we.splice(i,1),i--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function il(e){if(Rt.length){const t=[...new Set(Rt)].sort((i,n)=>oi(i)-oi(n));if(Rt.length=0,ot){ot.push(...t);return}for(ot=t,Lt=0;Lt<ot.length;Lt++){const i=ot[Lt];i.flags&4&&(i.flags&=-2),i.flags&8||i(),i.flags&=-2}ot=null,Lt=0}}const oi=e=>e.id==null?e.flags&2?-1:1/0:e.id;function nl(e){try{for(je=0;je<we.length;je++){const t=we[je];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),di(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;je<we.length;je++){const t=we[je];t&&(t.flags&=-2)}je=-1,we.length=0,il(),Ei=null,(we.length||Rt.length)&&nl()}}let We=null,rl=null;function ki(e){const t=We;return We=e,rl=e&&e.type.__scopeId||null,t}function Ro(e,t=We,i){if(!t||e._n)return e;const n=(...r)=>{n._d&&Fi(-1);const s=ki(t);let l;try{l=e(...r)}finally{ki(s),n._d&&Fi(1)}return l};return n._n=!0,n._c=!0,n._d=!0,n}function $t(e,t,i,n){const r=e.dirs,s=t&&t.dirs;for(let l=0;l<r.length;l++){const a=r[l];s&&(a.oldValue=s[l].value);let c=a.dir[n];c&&(nt(),Ye(c,i,8,[e.el,a,e,t]),rt())}}const Do=Symbol("_vte"),Mo=e=>e.__isTeleport,zo=Symbol("_leaveCb");function ir(e,t){e.shapeFlag&6&&e.component?(e.transition=t,ir(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Y(e,t){return G(e)?$e({name:e.name},t,{setup:e}):e}function sl(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Li=new WeakMap;function Jt(e,t,i,n,r=!1){if(W(e)){e.forEach((k,y)=>Jt(k,t&&(W(t)?t[y]:t),i,n,r));return}if(Xt(n)&&!r){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Jt(e,t,i,n.component.subTree);return}const s=n.shapeFlag&4?lr(n.component):n.el,l=r?null:s,{i:a,r:c}=e,d=t&&t.r,u=a.refs===fe?a.refs={}:a.refs,p=a.setupState,h=se(p),v=p===fe?Es:k=>le(h,k);if(d!=null&&d!==c){if(Tr(t),he(d))u[d]=null,v(d)&&(p[d]=null);else if(_e(d)){d.value=null;const k=t;k.k&&(u[k.k]=null)}}if(G(c))di(c,a,12,[l,u]);else{const k=he(c),y=_e(c);if(k||y){const z=()=>{if(e.f){const q=k?v(c)?p[c]:u[c]:c.value;if(r)W(q)&&Nn(q,s);else if(W(q))q.includes(s)||q.push(s);else if(k)u[c]=[s],v(c)&&(p[c]=u[c]);else{const b=[s];c.value=b,e.k&&(u[e.k]=b)}}else k?(u[c]=l,v(c)&&(p[c]=l)):y&&(c.value=l,e.k&&(u[e.k]=l))};if(l){const q=()=>{z(),Li.delete(e)};q.id=-1,Li.set(e,q),Le(q,i)}else Tr(e),z()}}}function Tr(e){const t=Li.get(e);t&&(t.flags|=8,Li.delete(e))}qi().requestIdleCallback;qi().cancelIdleCallback;const Xt=e=>!!e.type.__asyncLoader,ll=e=>e.type.__isKeepAlive;function Ho(e,t){al(e,"a",t)}function qo(e,t){al(e,"da",t)}function al(e,t,i=Se){const n=e.__wdc||(e.__wdc=()=>{let r=i;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Ni(t,n,i),i){let r=i.parent;for(;r&&r.parent;)ll(r.parent.vnode)&&Bo(n,t,i,r),r=r.parent}}function Bo(e,t,i,n){const r=Ni(t,e,n,!0);ol(()=>{Nn(n[t],r)},i)}function Ni(e,t,i=Se,n=!1){if(i){const r=i[e]||(i[e]=[]),s=t.__weh||(t.__weh=(...l)=>{nt();const a=fi(i),c=Ye(t,i,e,l);return a(),rt(),c});return n?r.unshift(s):r.push(s),s}}const lt=e=>(t,i=Se)=>{(!ui||e==="sp")&&Ni(e,(...n)=>t(...n),i)},No=lt("bm"),Z=lt("m"),jo=lt("bu"),Vo=lt("u"),Uo=lt("bum"),ol=lt("um"),Wo=lt("sp"),Go=lt("rtg"),Ko=lt("rtc");function Yo(e,t=Se){Ni("ec",e,t)}const Zo=Symbol.for("v-ndc"),An=e=>e?El(e)?lr(e):An(e.parent):null,Qt=$e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>An(e.parent),$root:e=>An(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ul(e),$forceUpdate:e=>e.f||(e.f=()=>{tr(e.update)}),$nextTick:e=>e.n||(e.n=X.bind(e.proxy)),$watch:e=>oc.bind(e)}),tn=(e,t)=>e!==fe&&!e.__isScriptSetup&&le(e,t),Jo={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:i,setupState:n,data:r,props:s,accessCache:l,type:a,appContext:c}=e;if(t[0]!=="$"){const h=l[t];if(h!==void 0)switch(h){case 1:return n[t];case 2:return r[t];case 4:return i[t];case 3:return s[t]}else{if(tn(n,t))return l[t]=1,n[t];if(r!==fe&&le(r,t))return l[t]=2,r[t];if(le(s,t))return l[t]=3,s[t];if(i!==fe&&le(i,t))return l[t]=4,i[t];En&&(l[t]=0)}}const d=Qt[t];let u,p;if(d)return t==="$attrs"&&ve(e.attrs,"get",""),d(e);if((u=a.__cssModules)&&(u=u[t]))return u;if(i!==fe&&le(i,t))return l[t]=4,i[t];if(p=c.config.globalProperties,le(p,t))return p[t]},set({_:e},t,i){const{data:n,setupState:r,ctx:s}=e;return tn(r,t)?(r[t]=i,!0):n!==fe&&le(n,t)?(n[t]=i,!0):le(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=i,!0)},has({_:{data:e,setupState:t,accessCache:i,ctx:n,appContext:r,props:s,type:l}},a){let c;return!!(i[a]||e!==fe&&a[0]!=="$"&&le(e,a)||tn(t,a)||le(s,a)||le(n,a)||le(Qt,a)||le(r.config.globalProperties,a)||(c=l.__cssModules)&&c[a])},defineProperty(e,t,i){return i.get!=null?e._.accessCache[t]=0:le(i,"value")&&this.set(e,t,i.value,null),Reflect.defineProperty(e,t,i)}};function Fr(e){return W(e)?e.reduce((t,i)=>(t[i]=null,t),{}):e}let En=!0;function Xo(e){const t=ul(e),i=e.proxy,n=e.ctx;En=!1,t.beforeCreate&&Pr(t.beforeCreate,e,"bc");const{data:r,computed:s,methods:l,watch:a,provide:c,inject:d,created:u,beforeMount:p,mounted:h,beforeUpdate:v,updated:k,activated:y,deactivated:z,beforeDestroy:q,beforeUnmount:b,destroyed:g,unmounted:x,render:w,renderTracked:_,renderTriggered:E,errorCaptured:D,serverPrefetch:F,expose:te,inheritAttrs:oe,components:be,directives:bt,filters:At}=t;if(d&&Qo(d,n,null),l)for(const ce in l){const U=l[ce];G(U)&&(n[ce]=U.bind(i))}if(r){const ce=r.call(i,i);pe(ce)&&(e.data=Xn(ce))}if(En=!0,s)for(const ce in s){const U=s[ce],ge=G(U)?U.bind(i,i):G(U.get)?U.get.bind(i,i):Ge,Oe=!G(U)&&G(U.set)?U.set.bind(i):Ge,Pe=Nc({get:ge,set:Oe});Object.defineProperty(n,ce,{enumerable:!0,configurable:!0,get:()=>Pe.value,set:me=>Pe.value=me})}if(a)for(const ce in a)cl(a[ce],n,i,ce);if(c){const ce=G(c)?c.call(i):c;Reflect.ownKeys(ce).forEach(U=>{sc(U,ce[U])})}u&&Pr(u,e,"c");function xe(ce,U){W(U)?U.forEach(ge=>ce(ge.bind(i))):U&&ce(U.bind(i))}if(xe(No,p),xe(Z,h),xe(jo,v),xe(Vo,k),xe(Ho,y),xe(qo,z),xe(Yo,D),xe(Ko,_),xe(Go,E),xe(Uo,b),xe(ol,x),xe(Wo,F),W(te))if(te.length){const ce=e.exposed||(e.exposed={});te.forEach(U=>{Object.defineProperty(ce,U,{get:()=>i[U],set:ge=>i[U]=ge,enumerable:!0})})}else e.exposed||(e.exposed={});w&&e.render===Ge&&(e.render=w),oe!=null&&(e.inheritAttrs=oe),be&&(e.components=be),bt&&(e.directives=bt),F&&sl(e)}function Qo(e,t,i=Ge){W(e)&&(e=kn(e));for(const n in e){const r=e[n];let s;pe(r)?"default"in r?s=ei(r.from||n,r.default,!0):s=ei(r.from||n):s=ei(r),_e(s)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:l=>s.value=l}):t[n]=s}}function Pr(e,t,i){Ye(W(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,i)}function cl(e,t,i,n){let r=n.includes(".")?pl(i,n):()=>i[n];if(he(e)){const s=t[e];G(s)&&nn(r,s)}else if(G(e))nn(r,e.bind(i));else if(pe(e))if(W(e))e.forEach(s=>cl(s,t,i,n));else{const s=G(e.handler)?e.handler.bind(i):t[e.handler];G(s)&&nn(r,s,e)}}function ul(e){const t=e.type,{mixins:i,extends:n}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:l}}=e.appContext,a=s.get(t);let c;return a?c=a:!r.length&&!i&&!n?c=t:(c={},r.length&&r.forEach(d=>Ti(c,d,l,!0)),Ti(c,t,l)),pe(t)&&s.set(t,c),c}function Ti(e,t,i,n=!1){const{mixins:r,extends:s}=t;s&&Ti(e,s,i,!0),r&&r.forEach(l=>Ti(e,l,i,!0));for(const l in t)if(!(n&&l==="expose")){const a=ec[l]||i&&i[l];e[l]=a?a(e[l],t[l]):t[l]}return e}const ec={data:Or,props:Rr,emits:Rr,methods:Wt,computed:Wt,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:Wt,directives:Wt,watch:ic,provide:Or,inject:tc};function Or(e,t){return t?e?function(){return $e(G(e)?e.call(this,this):e,G(t)?t.call(this,this):t)}:t:e}function tc(e,t){return Wt(kn(e),kn(t))}function kn(e){if(W(e)){const t={};for(let i=0;i<e.length;i++)t[e[i]]=e[i];return t}return e}function ye(e,t){return e?[...new Set([].concat(e,t))]:t}function Wt(e,t){return e?$e(Object.create(null),e,t):t}function Rr(e,t){return e?W(e)&&W(t)?[...new Set([...e,...t])]:$e(Object.create(null),Fr(e),Fr(t??{})):t}function ic(e,t){if(!e)return t;if(!t)return e;const i=$e(Object.create(null),e);for(const n in t)i[n]=ye(e[n],t[n]);return i}function dl(){return{app:null,config:{isNativeTag:Es,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nc=0;function rc(e,t){return function(n,r=null){G(n)||(n=$e({},n)),r!=null&&!pe(r)&&(r=null);const s=dl(),l=new WeakSet,a=[];let c=!1;const d=s.app={_uid:nc++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Vc,get config(){return s.config},set config(u){},use(u,...p){return l.has(u)||(u&&G(u.install)?(l.add(u),u.install(d,...p)):G(u)&&(l.add(u),u(d,...p))),d},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),d},component(u,p){return p?(s.components[u]=p,d):s.components[u]},directive(u,p){return p?(s.directives[u]=p,d):s.directives[u]},mount(u,p,h){if(!c){const v=d._ceVNode||j(n,r);return v.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),e(v,u,h),c=!0,d._container=u,u.__vue_app__=d,lr(v.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Ye(a,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(u,p){return s.provides[u]=p,d},runWithContext(u){const p=Dt;Dt=d;try{return u()}finally{Dt=p}}};return d}}let Dt=null;function sc(e,t){if(Se){let i=Se.provides;const n=Se.parent&&Se.parent.provides;n===i&&(i=Se.provides=Object.create(n)),i[e]=t}}function ei(e,t,i=!1){const n=Al();if(n||Dt){let r=Dt?Dt._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return i&&G(t)?t.call(n&&n.proxy):t}}const lc=Symbol.for("v-scx"),ac=()=>ei(lc);function nn(e,t,i){return fl(e,t,i)}function fl(e,t,i=fe){const{immediate:n,deep:r,flush:s,once:l}=i,a=$e({},i),c=t&&n||!t&&s!=="post";let d;if(ui){if(s==="sync"){const v=ac();d=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=Ge,v.resume=Ge,v.pause=Ge,v}}const u=Se;a.call=(v,k,y)=>Ye(v,u,k,y);let p=!1;s==="post"?a.scheduler=v=>{Le(v,u&&u.suspense)}:s!=="sync"&&(p=!0,a.scheduler=(v,k)=>{k?v():tr(v)}),a.augmentJob=v=>{t&&(v.flags|=4),p&&(v.flags|=2,u&&(v.id=u.uid,v.i=u))};const h=To(e,t,a);return ui&&(d?d.push(h):c&&h()),h}function oc(e,t,i){const n=this.proxy,r=he(e)?e.includes(".")?pl(n,e):()=>n[e]:e.bind(n,n);let s;G(t)?s=t:(s=t.handler,i=t);const l=fi(this),a=fl(r,s.bind(n),i);return l(),a}function pl(e,t){const i=t.split(".");return()=>{let n=e;for(let r=0;r<i.length&&n;r++)n=n[i[r]];return n}}const cc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ht(t)}Modifiers`]||e[`${Ct(t)}Modifiers`];function uc(e,t,...i){if(e.isUnmounted)return;const n=e.vnode.props||fe;let r=i;const s=t.startsWith("update:"),l=s&&cc(n,t.slice(7));l&&(l.trim&&(r=i.map(u=>he(u)?u.trim():u)),l.number&&(r=i.map(Ya)));let a,c=n[a=Yi(t)]||n[a=Yi(ht(t))];!c&&s&&(c=n[a=Yi(Ct(t))]),c&&Ye(c,e,6,r);const d=n[a+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ye(d,e,6,r)}}const dc=new WeakMap;function ml(e,t,i=!1){const n=i?dc:t.emitsCache,r=n.get(e);if(r!==void 0)return r;const s=e.emits;let l={},a=!1;if(!G(e)){const c=d=>{const u=ml(d,t,!0);u&&(a=!0,$e(l,u))};!i&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!a?(pe(e)&&n.set(e,null),null):(W(s)?s.forEach(c=>l[c]=null):$e(l,s),pe(e)&&n.set(e,l),l)}function ji(e,t){return!e||!Mi(t)?!1:(t=t.slice(2).replace(/Once$/,""),le(e,t[0].toLowerCase()+t.slice(1))||le(e,Ct(t))||le(e,t))}function Dr(e){const{type:t,vnode:i,proxy:n,withProxy:r,propsOptions:[s],slots:l,attrs:a,emit:c,render:d,renderCache:u,props:p,data:h,setupState:v,ctx:k,inheritAttrs:y}=e,z=ki(e);let q,b;try{if(i.shapeFlag&4){const x=r||n,w=x;q=Ue(d.call(w,x,u,p,v,h,k)),b=a}else{const x=t;q=Ue(x.length>1?x(p,{attrs:a,slots:l,emit:c}):x(p,null)),b=t.props?a:fc(a)}}catch(x){ti.length=0,Bi(x,e,1),q=j(zt)}let g=q;if(b&&y!==!1){const x=Object.keys(b),{shapeFlag:w}=g;x.length&&w&7&&(s&&x.some(Bn)&&(b=pc(b,s)),g=Ht(g,b,!1,!0))}return i.dirs&&(g=Ht(g,null,!1,!0),g.dirs=g.dirs?g.dirs.concat(i.dirs):i.dirs),i.transition&&ir(g,i.transition),q=g,ki(z),q}const fc=e=>{let t;for(const i in e)(i==="class"||i==="style"||Mi(i))&&((t||(t={}))[i]=e[i]);return t},pc=(e,t)=>{const i={};for(const n in e)(!Bn(n)||!(n.slice(9)in t))&&(i[n]=e[n]);return i};function mc(e,t,i){const{props:n,children:r,component:s}=e,{props:l,children:a,patchFlag:c}=t,d=s.emitsOptions;if(t.dirs||t.transition)return!0;if(i&&c>=0){if(c&1024)return!0;if(c&16)return n?Mr(n,l,d):!!l;if(c&8){const u=t.dynamicProps;for(let p=0;p<u.length;p++){const h=u[p];if(l[h]!==n[h]&&!ji(d,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===l?!1:n?l?Mr(n,l,d):!0:!!l;return!1}function Mr(e,t,i){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(t[s]!==e[s]&&!ji(i,s))return!0}return!1}function hc({vnode:e,parent:t},i){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n===e)(e=t.vnode).el=i,t=t.parent;else break}}const hl={},gl=()=>Object.create(hl),xl=e=>Object.getPrototypeOf(e)===hl;function gc(e,t,i,n=!1){const r={},s=gl();e.propsDefaults=Object.create(null),bl(e,t,r,s);for(const l in e.propsOptions[0])l in r||(r[l]=void 0);i?e.props=n?r:wo(r):e.type.props?e.props=r:e.props=s,e.attrs=s}function xc(e,t,i,n){const{props:r,attrs:s,vnode:{patchFlag:l}}=e,a=se(r),[c]=e.propsOptions;let d=!1;if((n||l>0)&&!(l&16)){if(l&8){const u=e.vnode.dynamicProps;for(let p=0;p<u.length;p++){let h=u[p];if(ji(e.emitsOptions,h))continue;const v=t[h];if(c)if(le(s,h))v!==s[h]&&(s[h]=v,d=!0);else{const k=ht(h);r[k]=Ln(c,a,k,v,e,!1)}else v!==s[h]&&(s[h]=v,d=!0)}}}else{bl(e,t,r,s)&&(d=!0);let u;for(const p in a)(!t||!le(t,p)&&((u=Ct(p))===p||!le(t,u)))&&(c?i&&(i[p]!==void 0||i[u]!==void 0)&&(r[p]=Ln(c,a,p,void 0,e,!0)):delete r[p]);if(s!==a)for(const p in s)(!t||!le(t,p))&&(delete s[p],d=!0)}d&&tt(e.attrs,"set","")}function bl(e,t,i,n){const[r,s]=e.propsOptions;let l=!1,a;if(t)for(let c in t){if(Kt(c))continue;const d=t[c];let u;r&&le(r,u=ht(c))?!s||!s.includes(u)?i[u]=d:(a||(a={}))[u]=d:ji(e.emitsOptions,c)||(!(c in n)||d!==n[c])&&(n[c]=d,l=!0)}if(s){const c=se(i),d=a||fe;for(let u=0;u<s.length;u++){const p=s[u];i[p]=Ln(r,c,p,d[p],e,!le(d,p))}}return l}function Ln(e,t,i,n,r,s){const l=e[i];if(l!=null){const a=le(l,"default");if(a&&n===void 0){const c=l.default;if(l.type!==Function&&!l.skipFactory&&G(c)){const{propsDefaults:d}=r;if(i in d)n=d[i];else{const u=fi(r);n=d[i]=c.call(null,t),u()}}else n=c;r.ce&&r.ce._setProp(i,n)}l[0]&&(s&&!a?n=!1:l[1]&&(n===""||n===Ct(i))&&(n=!0))}return n}const bc=new WeakMap;function vl(e,t,i=!1){const n=i?bc:t.propsCache,r=n.get(e);if(r)return r;const s=e.props,l={},a=[];let c=!1;if(!G(e)){const u=p=>{c=!0;const[h,v]=vl(p,t,!0);$e(l,h),v&&a.push(...v)};!i&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!c)return pe(e)&&n.set(e,Ft),Ft;if(W(s))for(let u=0;u<s.length;u++){const p=ht(s[u]);zr(p)&&(l[p]=fe)}else if(s)for(const u in s){const p=ht(u);if(zr(p)){const h=s[u],v=l[p]=W(h)||G(h)?{type:h}:$e({},h),k=v.type;let y=!1,z=!0;if(W(k))for(let q=0;q<k.length;++q){const b=k[q],g=G(b)&&b.name;if(g==="Boolean"){y=!0;break}else g==="String"&&(z=!1)}else y=G(k)&&k.name==="Boolean";v[0]=y,v[1]=z,(y||le(v,"default"))&&a.push(p)}}const d=[l,a];return pe(e)&&n.set(e,d),d}function zr(e){return e[0]!=="$"&&!Kt(e)}const nr=e=>e==="_"||e==="_ctx"||e==="$stable",rr=e=>W(e)?e.map(Ue):[Ue(e)],vc=(e,t,i)=>{if(t._n)return t;const n=Ro((...r)=>rr(t(...r)),i);return n._c=!1,n},_l=(e,t,i)=>{const n=e._ctx;for(const r in e){if(nr(r))continue;const s=e[r];if(G(s))t[r]=vc(r,s,n);else if(s!=null){const l=rr(s);t[r]=()=>l}}},$l=(e,t)=>{const i=rr(t);e.slots.default=()=>i},yl=(e,t,i)=>{for(const n in t)(i||!nr(n))&&(e[n]=t[n])},_c=(e,t,i)=>{const n=e.slots=gl();if(e.vnode.shapeFlag&32){const r=t._;r?(yl(n,t,i),i&&Os(n,"_",r,!0)):_l(t,n)}else t&&$l(e,t)},$c=(e,t,i)=>{const{vnode:n,slots:r}=e;let s=!0,l=fe;if(n.shapeFlag&32){const a=t._;a?i&&a===1?s=!1:yl(r,t,i):(s=!t.$stable,_l(t,r)),l=t}else t&&($l(e,t),l={default:1});if(s)for(const a in r)!nr(a)&&l[a]==null&&delete r[a]},Le=Cc;function yc(e){return wc(e)}function wc(e,t){const i=qi();i.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:l,createText:a,createComment:c,setText:d,setElementText:u,parentNode:p,nextSibling:h,setScopeId:v=Ge,insertStaticContent:k}=e,y=(f,m,$,A=null,S=null,I=null,M=void 0,O=null,P=!!m.dynamicChildren)=>{if(f===m)return;f&&!Ut(f,m)&&(A=Ze(f),me(f,S,I,!0),f=null),m.patchFlag===-2&&(P=!1,m.dynamicChildren=null);const{type:C,ref:N,shapeFlag:H}=m;switch(C){case Vi:z(f,m,$,A);break;case zt:q(f,m,$,A);break;case _i:f==null&&b(m,$,A,M);break;case Ve:be(f,m,$,A,S,I,M,O,P);break;default:H&1?w(f,m,$,A,S,I,M,O,P):H&6?bt(f,m,$,A,S,I,M,O,P):(H&64||H&128)&&C.process(f,m,$,A,S,I,M,O,P,Je)}N!=null&&S?Jt(N,f&&f.ref,I,m||f,!m):N==null&&f&&f.ref!=null&&Jt(f.ref,null,I,f,!0)},z=(f,m,$,A)=>{if(f==null)n(m.el=a(m.children),$,A);else{const S=m.el=f.el;m.children!==f.children&&d(S,m.children)}},q=(f,m,$,A)=>{f==null?n(m.el=c(m.children||""),$,A):m.el=f.el},b=(f,m,$,A)=>{[f.el,f.anchor]=k(f.children,m,$,A,f.el,f.anchor)},g=({el:f,anchor:m},$,A)=>{let S;for(;f&&f!==m;)S=h(f),n(f,$,A),f=S;n(m,$,A)},x=({el:f,anchor:m})=>{let $;for(;f&&f!==m;)$=h(f),r(f),f=$;r(m)},w=(f,m,$,A,S,I,M,O,P)=>{if(m.type==="svg"?M="svg":m.type==="math"&&(M="mathml"),f==null)_(m,$,A,S,I,M,O,P);else{const C=f.el&&f.el._isVueCE?f.el:null;try{C&&C._beginPatch(),F(f,m,S,I,M,O,P)}finally{C&&C._endPatch()}}},_=(f,m,$,A,S,I,M,O)=>{let P,C;const{props:N,shapeFlag:H,transition:B,dirs:V}=f;if(P=f.el=l(f.type,I,N&&N.is,N),H&8?u(P,f.children):H&16&&D(f.children,P,null,A,S,rn(f,I),M,O),V&&$t(f,null,A,"created"),E(P,f,f.scopeId,M,A),N){for(const ue in N)ue!=="value"&&!Kt(ue)&&s(P,ue,null,N[ue],I,A);"value"in N&&s(P,"value",null,N.value,I),(C=N.onVnodeBeforeMount)&&Ne(C,A,f)}V&&$t(f,null,A,"beforeMount");const ne=Sc(S,B);ne&&B.beforeEnter(P),n(P,m,$),((C=N&&N.onVnodeMounted)||ne||V)&&Le(()=>{C&&Ne(C,A,f),ne&&B.enter(P),V&&$t(f,null,A,"mounted")},S)},E=(f,m,$,A,S)=>{if($&&v(f,$),A)for(let I=0;I<A.length;I++)v(f,A[I]);if(S){let I=S.subTree;if(m===I||Il(I.type)&&(I.ssContent===m||I.ssFallback===m)){const M=S.vnode;E(f,M,M.scopeId,M.slotScopeIds,S.parent)}}},D=(f,m,$,A,S,I,M,O,P=0)=>{for(let C=P;C<f.length;C++){const N=f[C]=O?ct(f[C]):Ue(f[C]);y(null,N,m,$,A,S,I,M,O)}},F=(f,m,$,A,S,I,M)=>{const O=m.el=f.el;let{patchFlag:P,dynamicChildren:C,dirs:N}=m;P|=f.patchFlag&16;const H=f.props||fe,B=m.props||fe;let V;if($&&yt($,!1),(V=B.onVnodeBeforeUpdate)&&Ne(V,$,m,f),N&&$t(m,f,$,"beforeUpdate"),$&&yt($,!0),(H.innerHTML&&B.innerHTML==null||H.textContent&&B.textContent==null)&&u(O,""),C?te(f.dynamicChildren,C,O,$,A,rn(m,S),I):M||U(f,m,O,null,$,A,rn(m,S),I,!1),P>0){if(P&16)oe(O,H,B,$,S);else if(P&2&&H.class!==B.class&&s(O,"class",null,B.class,S),P&4&&s(O,"style",H.style,B.style,S),P&8){const ne=m.dynamicProps;for(let ue=0;ue<ne.length;ue++){const ae=ne[ue],Ie=H[ae],Ce=B[ae];(Ce!==Ie||ae==="value")&&s(O,ae,Ie,Ce,S,$)}}P&1&&f.children!==m.children&&u(O,m.children)}else!M&&C==null&&oe(O,H,B,$,S);((V=B.onVnodeUpdated)||N)&&Le(()=>{V&&Ne(V,$,m,f),N&&$t(m,f,$,"updated")},A)},te=(f,m,$,A,S,I,M)=>{for(let O=0;O<m.length;O++){const P=f[O],C=m[O],N=P.el&&(P.type===Ve||!Ut(P,C)||P.shapeFlag&198)?p(P.el):$;y(P,C,N,null,A,S,I,M,!0)}},oe=(f,m,$,A,S)=>{if(m!==$){if(m!==fe)for(const I in m)!Kt(I)&&!(I in $)&&s(f,I,m[I],null,S,A);for(const I in $){if(Kt(I))continue;const M=$[I],O=m[I];M!==O&&I!=="value"&&s(f,I,O,M,S,A)}"value"in $&&s(f,"value",m.value,$.value,S)}},be=(f,m,$,A,S,I,M,O,P)=>{const C=m.el=f?f.el:a(""),N=m.anchor=f?f.anchor:a("");let{patchFlag:H,dynamicChildren:B,slotScopeIds:V}=m;V&&(O=O?O.concat(V):V),f==null?(n(C,$,A),n(N,$,A),D(m.children||[],$,N,S,I,M,O,P)):H>0&&H&64&&B&&f.dynamicChildren?(te(f.dynamicChildren,B,$,S,I,M,O),(m.key!=null||S&&m===S.subTree)&&wl(f,m,!0)):U(f,m,$,N,S,I,M,O,P)},bt=(f,m,$,A,S,I,M,O,P)=>{m.slotScopeIds=O,f==null?m.shapeFlag&512?S.ctx.activate(m,$,A,M,P):At(m,$,A,S,I,M,P):pi(f,m,P)},At=(f,m,$,A,S,I,M)=>{const O=f.component=Dc(f,A,S);if(ll(f)&&(O.ctx.renderer=Je),Mc(O,!1,M),O.asyncDep){if(S&&S.registerDep(O,xe,M),!f.el){const P=O.subTree=j(zt);q(null,P,m,$),f.placeholder=P.el}}else xe(O,f,m,$,S,I,M)},pi=(f,m,$)=>{const A=m.component=f.component;if(mc(f,m,$))if(A.asyncDep&&!A.asyncResolved){ce(A,m,$);return}else A.next=m,A.update();else m.el=f.el,A.vnode=m},xe=(f,m,$,A,S,I,M)=>{const O=()=>{if(f.isMounted){let{next:H,bu:B,u:V,parent:ne,vnode:ue}=f;{const qe=Sl(f);if(qe){H&&(H.el=ue.el,ce(f,H,M)),qe.asyncDep.then(()=>{f.isUnmounted||O()});return}}let ae=H,Ie;yt(f,!1),H?(H.el=ue.el,ce(f,H,M)):H=ue,B&&Zi(B),(Ie=H.props&&H.props.onVnodeBeforeUpdate)&&Ne(Ie,ne,H,ue),yt(f,!0);const Ce=Dr(f),He=f.subTree;f.subTree=Ce,y(He,Ce,p(He.el),Ze(He),f,S,I),H.el=Ce.el,ae===null&&hc(f,Ce.el),V&&Le(V,S),(Ie=H.props&&H.props.onVnodeUpdated)&&Le(()=>Ne(Ie,ne,H,ue),S)}else{let H;const{el:B,props:V}=m,{bm:ne,m:ue,parent:ae,root:Ie,type:Ce}=f,He=Xt(m);yt(f,!1),ne&&Zi(ne),!He&&(H=V&&V.onVnodeBeforeMount)&&Ne(H,ae,m),yt(f,!0);{Ie.ce&&Ie.ce._def.shadowRoot!==!1&&Ie.ce._injectChildStyle(Ce);const qe=f.subTree=Dr(f);y(null,qe,$,A,f,S,I),m.el=qe.el}if(ue&&Le(ue,S),!He&&(H=V&&V.onVnodeMounted)){const qe=m;Le(()=>Ne(H,ae,qe),S)}(m.shapeFlag&256||ae&&Xt(ae.vnode)&&ae.vnode.shapeFlag&256)&&f.a&&Le(f.a,S),f.isMounted=!0,m=$=A=null}};f.scope.on();const P=f.effect=new zs(O);f.scope.off();const C=f.update=P.run.bind(P),N=f.job=P.runIfDirty.bind(P);N.i=f,N.id=f.uid,P.scheduler=()=>tr(N),yt(f,!0),C()},ce=(f,m,$)=>{m.component=f;const A=f.vnode.props;f.vnode=m,f.next=null,xc(f,m.props,A,$),$c(f,m.children,$),nt(),Lr(f),rt()},U=(f,m,$,A,S,I,M,O,P=!1)=>{const C=f&&f.children,N=f?f.shapeFlag:0,H=m.children,{patchFlag:B,shapeFlag:V}=m;if(B>0){if(B&128){Oe(C,H,$,A,S,I,M,O,P);return}else if(B&256){ge(C,H,$,A,S,I,M,O,P);return}}V&8?(N&16&&ze(C,S,I),H!==C&&u($,H)):N&16?V&16?Oe(C,H,$,A,S,I,M,O,P):ze(C,S,I,!0):(N&8&&u($,""),V&16&&D(H,$,A,S,I,M,O,P))},ge=(f,m,$,A,S,I,M,O,P)=>{f=f||Ft,m=m||Ft;const C=f.length,N=m.length,H=Math.min(C,N);let B;for(B=0;B<H;B++){const V=m[B]=P?ct(m[B]):Ue(m[B]);y(f[B],V,$,null,S,I,M,O,P)}C>N?ze(f,S,I,!0,!1,H):D(m,$,A,S,I,M,O,P,H)},Oe=(f,m,$,A,S,I,M,O,P)=>{let C=0;const N=m.length;let H=f.length-1,B=N-1;for(;C<=H&&C<=B;){const V=f[C],ne=m[C]=P?ct(m[C]):Ue(m[C]);if(Ut(V,ne))y(V,ne,$,null,S,I,M,O,P);else break;C++}for(;C<=H&&C<=B;){const V=f[H],ne=m[B]=P?ct(m[B]):Ue(m[B]);if(Ut(V,ne))y(V,ne,$,null,S,I,M,O,P);else break;H--,B--}if(C>H){if(C<=B){const V=B+1,ne=V<N?m[V].el:A;for(;C<=B;)y(null,m[C]=P?ct(m[C]):Ue(m[C]),$,ne,S,I,M,O,P),C++}}else if(C>B)for(;C<=H;)me(f[C],S,I,!0),C++;else{const V=C,ne=C,ue=new Map;for(C=ne;C<=B;C++){const ke=m[C]=P?ct(m[C]):Ue(m[C]);ke.key!=null&&ue.set(ke.key,C)}let ae,Ie=0;const Ce=B-ne+1;let He=!1,qe=0;const Nt=new Array(Ce);for(C=0;C<Ce;C++)Nt[C]=0;for(C=V;C<=H;C++){const ke=f[C];if(Ie>=Ce){me(ke,S,I,!0);continue}let Be;if(ke.key!=null)Be=ue.get(ke.key);else for(ae=ne;ae<=B;ae++)if(Nt[ae-ne]===0&&Ut(ke,m[ae])){Be=ae;break}Be===void 0?me(ke,S,I,!0):(Nt[Be-ne]=C+1,Be>=qe?qe=Be:He=!0,y(ke,m[Be],$,null,S,I,M,O,P),Ie++)}const ar=He?Ic(Nt):Ft;for(ae=ar.length-1,C=Ce-1;C>=0;C--){const ke=ne+C,Be=m[ke],or=m[ke+1],cr=ke+1<N?or.el||or.placeholder:A;Nt[C]===0?y(null,Be,$,cr,S,I,M,O,P):He&&(ae<0||C!==ar[ae]?Pe(Be,$,cr,2):ae--)}}},Pe=(f,m,$,A,S=null)=>{const{el:I,type:M,transition:O,children:P,shapeFlag:C}=f;if(C&6){Pe(f.component.subTree,m,$,A);return}if(C&128){f.suspense.move(m,$,A);return}if(C&64){M.move(f,m,$,Je);return}if(M===Ve){n(I,m,$);for(let H=0;H<P.length;H++)Pe(P[H],m,$,A);n(f.anchor,m,$);return}if(M===_i){g(f,m,$);return}if(A!==2&&C&1&&O)if(A===0)O.beforeEnter(I),n(I,m,$),Le(()=>O.enter(I),S);else{const{leave:H,delayLeave:B,afterLeave:V}=O,ne=()=>{f.ctx.isUnmounted?r(I):n(I,m,$)},ue=()=>{I._isLeaving&&I[zo](!0),H(I,()=>{ne(),V&&V()})};B?B(I,ne,ue):ue()}else n(I,m,$)},me=(f,m,$,A=!1,S=!1)=>{const{type:I,props:M,ref:O,children:P,dynamicChildren:C,shapeFlag:N,patchFlag:H,dirs:B,cacheIndex:V}=f;if(H===-2&&(S=!1),O!=null&&(nt(),Jt(O,null,$,f,!0),rt()),V!=null&&(m.renderCache[V]=void 0),N&256){m.ctx.deactivate(f);return}const ne=N&1&&B,ue=!Xt(f);let ae;if(ue&&(ae=M&&M.onVnodeBeforeUnmount)&&Ne(ae,m,f),N&6)vt(f.component,$,A);else{if(N&128){f.suspense.unmount($,A);return}ne&&$t(f,null,m,"beforeUnmount"),N&64?f.type.remove(f,m,$,Je,A):C&&!C.hasOnce&&(I!==Ve||H>0&&H&64)?ze(C,m,$,!1,!0):(I===Ve&&H&384||!S&&N&16)&&ze(P,m,$),A&&mi(f)}(ue&&(ae=M&&M.onVnodeUnmounted)||ne)&&Le(()=>{ae&&Ne(ae,m,f),ne&&$t(f,null,m,"unmounted")},$)},mi=f=>{const{type:m,el:$,anchor:A,transition:S}=f;if(m===Ve){Me($,A);return}if(m===_i){x(f);return}const I=()=>{r($),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(f.shapeFlag&1&&S&&!S.persisted){const{leave:M,delayLeave:O}=S,P=()=>M($,I);O?O(f.el,I,P):P()}else I()},Me=(f,m)=>{let $;for(;f!==m;)$=h(f),r(f),f=$;r(m)},vt=(f,m,$)=>{const{bum:A,scope:S,job:I,subTree:M,um:O,m:P,a:C}=f;Hr(P),Hr(C),A&&Zi(A),S.stop(),I&&(I.flags|=8,me(M,f,m,$)),O&&Le(O,m),Le(()=>{f.isUnmounted=!0},m)},ze=(f,m,$,A=!1,S=!1,I=0)=>{for(let M=I;M<f.length;M++)me(f[M],m,$,A,S)},Ze=f=>{if(f.shapeFlag&6)return Ze(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const m=h(f.anchor||f.el),$=m&&m[Do];return $?h($):m};let _t=!1;const qt=(f,m,$)=>{f==null?m._vnode&&me(m._vnode,null,null,!0):y(m._vnode||null,f,m,null,null,null,$),m._vnode=f,_t||(_t=!0,Lr(),il(),_t=!1)},Je={p:y,um:me,m:Pe,r:mi,mt:At,mc:D,pc:U,pbc:te,n:Ze,o:e};return{render:qt,hydrate:void 0,createApp:rc(qt)}}function rn({type:e,props:t},i){return i==="svg"&&e==="foreignObject"||i==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:i}function yt({effect:e,job:t},i){i?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Sc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function wl(e,t,i=!1){const n=e.children,r=t.children;if(W(n)&&W(r))for(let s=0;s<n.length;s++){const l=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ct(r[s]),a.el=l.el),!i&&a.patchFlag!==-2&&wl(l,a)),a.type===Vi&&a.patchFlag!==-1&&(a.el=l.el),a.type===zt&&!a.el&&(a.el=l.el)}}function Ic(e){const t=e.slice(),i=[0];let n,r,s,l,a;const c=e.length;for(n=0;n<c;n++){const d=e[n];if(d!==0){if(r=i[i.length-1],e[r]<d){t[n]=r,i.push(n);continue}for(s=0,l=i.length-1;s<l;)a=s+l>>1,e[i[a]]<d?s=a+1:l=a;d<e[i[s]]&&(s>0&&(t[n]=i[s-1]),i[s]=n)}}for(s=i.length,l=i[s-1];s-- >0;)i[s]=l,l=t[l];return i}function Sl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Sl(t)}function Hr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Il=e=>e.__isSuspense;function Cc(e,t){t&&t.pendingBranch?W(e)?t.effects.push(...e):t.effects.push(e):Oo(e)}const Ve=Symbol.for("v-fgt"),Vi=Symbol.for("v-txt"),zt=Symbol.for("v-cmt"),_i=Symbol.for("v-stc"),ti=[];let Fe=null;function Q(e=!1){ti.push(Fe=e?null:[])}function Ac(){ti.pop(),Fe=ti[ti.length-1]||null}let ci=1;function Fi(e,t=!1){ci+=e,e<0&&Fe&&t&&(Fe.hasOnce=!0)}function Ec(e){return e.dynamicChildren=ci>0?Fe||Ft:null,Ac(),ci>0&&Fe&&Fe.push(e),e}function ee(e,t,i,n,r,s){return Ec(o(e,t,i,n,r,s,!0))}function Pi(e){return e?e.__v_isVNode===!0:!1}function Ut(e,t){return e.type===t.type&&e.key===t.key}const Cl=({key:e})=>e??null,$i=({ref:e,ref_key:t,ref_for:i})=>(typeof e=="number"&&(e=""+e),e!=null?he(e)||_e(e)||G(e)?{i:We,r:e,k:t,f:!!i}:e:null);function o(e,t=null,i=null,n=0,r=null,s=e===Ve?0:1,l=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Cl(t),ref:t&&$i(t),scopeId:rl,slotScopeIds:null,children:i,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:We};return a?(sr(c,i),s&128&&e.normalize(c)):i&&(c.shapeFlag|=he(i)?8:16),ci>0&&!l&&Fe&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Fe.push(c),c}const j=kc;function kc(e,t=null,i=null,n=0,r=null,s=!1){if((!e||e===Zo)&&(e=zt),Pi(e)){const a=Ht(e,t,!0);return i&&sr(a,i),ci>0&&!s&&Fe&&(a.shapeFlag&6?Fe[Fe.indexOf(e)]=a:Fe.push(a)),a.patchFlag=-2,a}if(Bc(e)&&(e=e.__vccOpts),t){t=Lc(t);let{class:a,style:c}=t;a&&!he(a)&&(t.class=Un(a)),pe(c)&&(er(c)&&!W(c)&&(c=$e({},c)),t.style=Vn(c))}const l=he(e)?1:Il(e)?128:Mo(e)?64:pe(e)?4:G(e)?2:0;return o(e,t,i,n,r,l,s,!0)}function Lc(e){return e?er(e)||xl(e)?$e({},e):e:null}function Ht(e,t,i=!1,n=!1){const{props:r,ref:s,patchFlag:l,children:a,transition:c}=e,d=t?Pc(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Cl(d),ref:t&&t.ref?i&&s?W(s)?s.concat($i(t)):[s,$i(t)]:$i(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ve?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ht(e.ssContent),ssFallback:e.ssFallback&&Ht(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&n&&ir(u,c.clone(u)),u}function Tc(e=" ",t=0){return j(Vi,null,e,t)}function Fc(e,t){const i=j(_i,null,e);return i.staticCount=t,i}function Ue(e){return e==null||typeof e=="boolean"?j(zt):W(e)?j(Ve,null,e.slice()):Pi(e)?ct(e):j(Vi,null,String(e))}function ct(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ht(e)}function sr(e,t){let i=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(W(t))i=16;else if(typeof t=="object")if(n&65){const r=t.default;r&&(r._c&&(r._d=!1),sr(e,r()),r._c&&(r._d=!0));return}else{i=32;const r=t._;!r&&!xl(t)?t._ctx=We:r===3&&We&&(We.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else G(t)?(t={default:t,_ctx:We},i=32):(t=String(t),n&64?(i=16,t=[Tc(t)]):i=8);e.children=t,e.shapeFlag|=i}function Pc(...e){const t={};for(let i=0;i<e.length;i++){const n=e[i];for(const r in n)if(r==="class")t.class!==n.class&&(t.class=Un([t.class,n.class]));else if(r==="style")t.style=Vn([t.style,n.style]);else if(Mi(r)){const s=t[r],l=n[r];l&&s!==l&&!(W(s)&&s.includes(l))&&(t[r]=s?[].concat(s,l):l)}else r!==""&&(t[r]=n[r])}return t}function Ne(e,t,i,n=null){Ye(e,t,7,[i,n])}const Oc=dl();let Rc=0;function Dc(e,t,i){const n=e.type,r=(t?t.appContext:e.appContext)||Oc,s={uid:Rc++,vnode:e,type:n,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new io(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vl(n,r),emitsOptions:ml(n,r),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:n.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:i,suspenseId:i?i.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=uc.bind(null,s),e.ce&&e.ce(s),s}let Se=null;const Al=()=>Se||We;let Oi,Tn;{const e=qi(),t=(i,n)=>{let r;return(r=e[i])||(r=e[i]=[]),r.push(n),s=>{r.length>1?r.forEach(l=>l(s)):r[0](s)}};Oi=t("__VUE_INSTANCE_SETTERS__",i=>Se=i),Tn=t("__VUE_SSR_SETTERS__",i=>ui=i)}const fi=e=>{const t=Se;return Oi(e),e.scope.on(),()=>{e.scope.off(),Oi(t)}},qr=()=>{Se&&Se.scope.off(),Oi(null)};function El(e){return e.vnode.shapeFlag&4}let ui=!1;function Mc(e,t=!1,i=!1){t&&Tn(t);const{props:n,children:r}=e.vnode,s=El(e);gc(e,n,s,t),_c(e,r,i||t);const l=s?zc(e,t):void 0;return t&&Tn(!1),l}function zc(e,t){const i=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Jo);const{setup:n}=i;if(n){nt();const r=e.setupContext=n.length>1?qc(e):null,s=fi(e),l=di(n,e,0,[e.props,r]),a=Ls(l);if(rt(),s(),(a||e.sp)&&!Xt(e)&&sl(e),a){if(l.then(qr,qr),t)return l.then(c=>{Br(e,c)}).catch(c=>{Bi(c,e,0)});e.asyncDep=l}else Br(e,l)}else kl(e)}function Br(e,t,i){G(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:pe(t)&&(e.setupState=Qs(t)),kl(e)}function kl(e,t,i){const n=e.type;e.render||(e.render=n.render||Ge);{const r=fi(e);nt();try{Xo(e)}finally{rt(),r()}}}const Hc={get(e,t){return ve(e,"get",""),e[t]}};function qc(e){const t=i=>{e.exposed=i||{}};return{attrs:new Proxy(e.attrs,Hc),slots:e.slots,emit:e.emit,expose:t}}function lr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Qs(So(e.exposed)),{get(t,i){if(i in t)return t[i];if(i in Qt)return Qt[i](e)},has(t,i){return i in t||i in Qt}})):e.proxy}function Bc(e){return G(e)&&"__vccOpts"in e}const Nc=(e,t)=>ko(e,t,ui);function jc(e,t,i){try{Fi(-1);const n=arguments.length;return n===2?pe(t)&&!W(t)?Pi(t)?j(e,null,[t]):j(e,t):j(e,null,t):(n>3?i=Array.prototype.slice.call(arguments,2):n===3&&Pi(i)&&(i=[i]),j(e,t,i))}finally{Fi(1)}}const Vc="3.5.25";let Fn;const Nr=typeof window<"u"&&window.trustedTypes;if(Nr)try{Fn=Nr.createPolicy("vue",{createHTML:e=>e})}catch{}const Ll=Fn?e=>Fn.createHTML(e):e=>e,Uc="http://www.w3.org/2000/svg",Wc="http://www.w3.org/1998/Math/MathML",Qe=typeof document<"u"?document:null,jr=Qe&&Qe.createElement("template"),Gc={insert:(e,t,i)=>{t.insertBefore(e,i||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,i,n)=>{const r=t==="svg"?Qe.createElementNS(Uc,e):t==="mathml"?Qe.createElementNS(Wc,e):i?Qe.createElement(e,{is:i}):Qe.createElement(e);return e==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:e=>Qe.createTextNode(e),createComment:e=>Qe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Qe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,i,n,r,s){const l=i?i.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),i),!(r===s||!(r=r.nextSibling)););else{jr.innerHTML=Ll(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const a=jr.content;if(n==="svg"||n==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,i)}return[l?l.nextSibling:t.firstChild,i?i.previousSibling:t.lastChild]}},Kc=Symbol("_vtc");function Yc(e,t,i){const n=e[Kc];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):i?e.setAttribute("class",t):e.className=t}const Vr=Symbol("_vod"),Zc=Symbol("_vsh"),Jc=Symbol(""),Xc=/(?:^|;)\s*display\s*:/;function Qc(e,t,i){const n=e.style,r=he(i);let s=!1;if(i&&!r){if(t)if(he(t))for(const l of t.split(";")){const a=l.slice(0,l.indexOf(":")).trim();i[a]==null&&yi(n,a,"")}else for(const l in t)i[l]==null&&yi(n,l,"");for(const l in i)l==="display"&&(s=!0),yi(n,l,i[l])}else if(r){if(t!==i){const l=n[Jc];l&&(i+=";"+l),n.cssText=i,s=Xc.test(i)}}else t&&e.removeAttribute("style");Vr in e&&(e[Vr]=s?n.display:"",e[Zc]&&(n.display="none"))}const Ur=/\s*!important$/;function yi(e,t,i){if(W(i))i.forEach(n=>yi(e,t,n));else if(i==null&&(i=""),t.startsWith("--"))e.setProperty(t,i);else{const n=eu(e,t);Ur.test(i)?e.setProperty(Ct(n),i.replace(Ur,""),"important"):e[n]=i}}const Wr=["Webkit","Moz","ms"],sn={};function eu(e,t){const i=sn[t];if(i)return i;let n=ht(t);if(n!=="filter"&&n in e)return sn[t]=n;n=Ps(n);for(let r=0;r<Wr.length;r++){const s=Wr[r]+n;if(s in e)return sn[t]=s}return t}const Gr="http://www.w3.org/1999/xlink";function Kr(e,t,i,n,r,s=to(t)){n&&t.startsWith("xlink:")?i==null?e.removeAttributeNS(Gr,t.slice(6,t.length)):e.setAttributeNS(Gr,t,i):i==null||s&&!Rs(i)?e.removeAttribute(t):e.setAttribute(t,s?"":xt(i)?String(i):i)}function Yr(e,t,i,n,r){if(t==="innerHTML"||t==="textContent"){i!=null&&(e[t]=t==="innerHTML"?Ll(i):i);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?e.getAttribute("value")||"":e.value,c=i==null?e.type==="checkbox"?"on":"":String(i);(a!==c||!("_value"in e))&&(e.value=c),i==null&&e.removeAttribute(t),e._value=i;return}let l=!1;if(i===""||i==null){const a=typeof e[t];a==="boolean"?i=Rs(i):i==null&&a==="string"?(i="",l=!0):a==="number"&&(i=0,l=!0)}try{e[t]=i}catch{}l&&e.removeAttribute(r||t)}function tu(e,t,i,n){e.addEventListener(t,i,n)}function iu(e,t,i,n){e.removeEventListener(t,i,n)}const Zr=Symbol("_vei");function nu(e,t,i,n,r=null){const s=e[Zr]||(e[Zr]={}),l=s[t];if(n&&l)l.value=n;else{const[a,c]=ru(t);if(n){const d=s[t]=au(n,r);tu(e,a,d,c)}else l&&(iu(e,a,l,c),s[t]=void 0)}}const Jr=/(?:Once|Passive|Capture)$/;function ru(e){let t;if(Jr.test(e)){t={};let n;for(;n=e.match(Jr);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ct(e.slice(2)),t]}let ln=0;const su=Promise.resolve(),lu=()=>ln||(su.then(()=>ln=0),ln=Date.now());function au(e,t){const i=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=i.attached)return;Ye(ou(n,i.value),t,5,[n])};return i.value=e,i.attached=lu(),i}function ou(e,t){if(W(t)){const i=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{i.call(e),e._stopped=!0},t.map(n=>r=>!r._stopped&&n&&n(r))}else return t}const Xr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,cu=(e,t,i,n,r,s)=>{const l=r==="svg";t==="class"?Yc(e,n,l):t==="style"?Qc(e,i,n):Mi(t)?Bn(t)||nu(e,t,i,n,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):uu(e,t,n,l))?(Yr(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Kr(e,t,n,l,s,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!he(n))?Yr(e,ht(t),n,s,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),Kr(e,t,n,l))};function uu(e,t,i,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&Xr(t)&&G(i));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Xr(t)&&he(i)?!1:t in e}const du=$e({patchProp:cu},Gc);let Qr;function fu(){return Qr||(Qr=yc(du))}const pu=((...e)=>{const t=fu().createApp(...e),{mount:i}=t;return t.mount=n=>{const r=hu(n);if(!r)return;const s=t._component;!G(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const l=i(r,!1,mu(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),l},t});function mu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function hu(e){return he(e)?document.querySelector(e):e}const vi="routerLink",es="navManager",gu="router",xu="aria",Gt=Symbol(),bu={default:Gt},ts=e=>e?.split(" ")||[],vu=(e,t,i=[])=>{const n=new Set([...Array.from(e?.classList||[]),...Array.from(t),...i]);return Array.from(n)},T=(e,t,i=[],n=[],r,s,l)=>{const a=n,c=[vi,...i].reduce((d,u)=>(d[u]=bu,d),{});return Y((d,{attrs:u,slots:p,emit:h})=>{const v=Xs(),k=new Set(ts(u.class));Z(()=>{n.forEach(x=>{v.value?.addEventListener(x,w=>{h(x,w)})})});const y=Al(),q=y?.appContext?.provides[es]?ei(es):void 0,b=y?.vnode.el,g=x=>{const{routerLink:w}=d;if(w!==Gt)if(q!==void 0){x.preventDefault();let _={event:x};for(const E in d){const D=d[E];d.hasOwnProperty(E)&&E.startsWith(gu)&&D!==Gt&&(_[E]=D)}q.navigate(_)}else console.warn("Tried to navigate, but no router was found. Make sure you have mounted Vue Router.")};return()=>{d[r],ts(u.class).forEach(D=>{k.add(D)});const x=d.onClick,w=D=>{x!==void 0&&x(D),D.defaultPrevented||g(D)},_={ref:v,class:vu(b,k),onClick:w};for(const D in d){const F=d[D];(d.hasOwnProperty(D)&&F!==Gt||D.startsWith(xu))&&(_[D]=F);const te="on"+D.slice(0,1).toUpperCase()+D.slice(1),oe=u[te];v.value&&u.hasOwnProperty(te)&&"addEventListener"in v.value&&v.value.addEventListener(D,oe)}return vi in d&&d[vi]!==Gt&&(_.href=d[vi]),jc(e,_,p.default&&p.default())}},{name:e,props:c,emits:a})};T("ifx-accordion",void 0,["autoCollapse"]);T("ifx-accordion-item",void 0,["caption","open","AriaLevel","ifxOpen","ifxClose"],["ifxOpen","ifxClose"]);T("ifx-action-list",void 0,["listAriaLabel"]);T("ifx-action-list-item",void 0,["itemTitle","description","value","href","target","disabled","itemAriaLabel","ifxActionListItemClick"],["ifxActionListItemClick"]);T("ifx-alert",void 0,["variant","icon","closable","AriaLive","ifxClose"],["ifxClose"]);T("ifx-basic-table",void 0,["cols","rows","rowHeight","tableHeight","variant"]);T("ifx-breadcrumb");T("ifx-breadcrumb-item");T("ifx-breadcrumb-item-label",void 0,["icon","href","target","breadcrumbMenuIconWrapper"],["breadcrumbMenuIconWrapper"]);T("ifx-button",void 0,["variant","theme","size","disabled","href","target","type","fullWidth","ariaLabel"]);T("ifx-card",void 0,["direction","href","target","ariaLabel"]);T("ifx-card-headline");T("ifx-card-image",void 0,["src","alt","position","imgPosition"],["imgPosition"]);T("ifx-card-links");T("ifx-card-overline");T("ifx-card-text");T("ifx-checkbox",void 0,["disabled","checked","error","size","indeterminate","value","ifxChange","ifxError"],["ifxChange","ifxError"]);T("ifx-checkbox-group",void 0,["alignment","size","showGroupLabel","groupLabelText","showCaption","captionText","showCaptionIcon","required"]);T("ifx-chip",void 0,["placeholder","size","value","variant","theme","readOnly","ariaLabel","disabled","icon","ifxChange"],["ifxChange"]);T("ifx-chip-item",void 0,["value","chipState","selected","ifxChipItemSelect"],["ifxChipItemSelect"]);T("ifx-content-switcher",void 0,["ifxChange"],["ifxChange"]);T("ifx-content-switcher-item",void 0,["selected","value"]);T("ifx-date-picker",void 0,["size","error","success","disabled","ariaLabel","value","type","max","min","required","label","caption","autocomplete","ifxDate"],["ifxDate"]);T("ifx-download",void 0,["tokens"]);T("ifx-dropdown",void 0,["placement","defaultOpen","noAppendToBody","disabled","noCloseOnOutsideClick","noCloseOnMenuClick","ifxOpen","ifxClose","ifxDropdown"],["ifxOpen","ifxClose","ifxDropdown"]);T("ifx-dropdown-header");T("ifx-dropdown-item",void 0,["icon","href","target","hide","ifxDropdownItem"],["ifxDropdownItem"]);T("ifx-dropdown-menu",void 0,["isOpen","size","menuSize","ifxDropdownMenuItem"],["menuSize","ifxDropdownMenuItem"]);T("ifx-dropdown-separator");T("ifx-dropdown-trigger",void 0,["isOpen"]);T("ifx-dropdown-trigger-button",void 0,["isOpen","theme","variant","size","disabled","hideArrow"]);T("ifx-faq");T("ifx-file-upload",void 0,["dragAndDrop","required","disabled","maxFileSizeMB","allowedFileTypes","additionalAllowedFileTypes","allowAnyFileType","allowedFileExtensions","uploadHandler","maxFiles","label","labelRequiredError","labelBrowseFiles","labelDragAndDrop","labelUploadedFilesHeading","labelFileTooLarge","labelUnsupportedFileType","labelUploaded","labelUploadFailed","labelSupportedFormatsTemplate","labelFileSingular","labelFilePlural","labelMaxFilesInfo","labelMaxFilesExceeded","ariaLabelBrowseFiles","ariaLabelDropzone","ariaLabelFileInput","ariaLabelRemoveFile","ariaLabelCancelUpload","ariaLabelRetryUpload","ariaLabelUploadingStatus","ariaLabelUploadedStatus","ariaLabelUploadFailedStatus","ifxFileUploadAdd","ifxFileUploadRemove","ifxFileUploadChange","ifxFileUploadError","ifxFileUploadInvalid","ifxFileUploadStart","ifxFileUploadComplete","ifxFileUploadAllComplete","ifxFileUploadAbort","ifxFileUploadDrop","ifxFileUploadClick","ifxFileUploadMaxFilesExceeded","ifxFileUploadValidation","ifxFileUploadRetry"],["ifxFileUploadAdd","ifxFileUploadRemove","ifxFileUploadChange","ifxFileUploadError","ifxFileUploadInvalid","ifxFileUploadStart","ifxFileUploadComplete","ifxFileUploadAllComplete","ifxFileUploadAbort","ifxFileUploadDrop","ifxFileUploadClick","ifxFileUploadMaxFilesExceeded","ifxFileUploadValidation","ifxFileUploadRetry"]);T("ifx-filter-accordion",void 0,["maxVisibleItems","filterGroupName","ifxFilterAccordionChange"],["ifxFilterAccordionChange"]);T("ifx-filter-bar",void 0,["maxShownFilters","showMoreFiltersButton","ifxTopbarFilterChange"],["ifxTopbarFilterChange"]);T("ifx-filter-search",void 0,["filterName","disabled","filterValue","filterKey","filterOrientation","placeholder","ifxFilterSearchChange"],["ifxFilterSearchChange"]);T("ifx-filter-type-group",void 0,["ifxSidebarFilterChange"],["ifxSidebarFilterChange"]);T("ifx-footer",void 0,["copyrightText"]);T("ifx-footer-column");T("ifx-icon",void 0,["icon","ifxIcon","consoleError"],["consoleError"]);T("ifx-icon-button",void 0,["variant","size","disabled","icon","href","target","shape","ariaLabel"]);T("ifx-icons-preview");T("ifx-indicator",void 0,["inverted","ariaLabel","variant","number"]);T("ifx-link",void 0,["href","target","variant","size","disabled","download","ariaLabel"]);T("ifx-list",void 0,["name","maxVisibleItems","type","resetTrigger","ifxListUpdate"],["ifxListUpdate"]);T("ifx-list-entry",void 0,["value","label","type","ifxListEntryChange"],["ifxListEntryChange"]);T("ifx-modal",void 0,["opened","caption","captionAriaLabel","closeOnOverlayClick","variant","size","alertIcon","okButtonLabel","cancelButtonLabel","closeButtonAriaLabel","showCloseButton","ifxOpen","ifxClose"],["ifxOpen","ifxClose"]);T("ifx-multiselect",void 0,["name","disabled","required","error","caption","label","placeholder","showSearch","showSelectAll","showClearButton","showExpandCollapse","noResultsMessage","showNoResultsMessage","searchPlaceholder","selectAllLabel","expandLabel","collapseLabel","ariaMultiSelectLabel","ariaMultiSelectLabelledBy","ariaMultiSelectDescribedBy","ariaSearchLabel","ariaClearLabel","ariaToggleLabel","ariaSelectAllLabel","ariaExpandAllLabel","ariaCollapseAllLabel","ifxSelect","ifxOpen"],["ifxSelect","ifxOpen"]);T("ifx-multiselect-option",void 0,["value","selected","disabled","indeterminate"]);T("ifx-navbar",void 0,["applicationName","fixed","showLogoAndAppname","logoHref","logoHrefTarget","ifxNavbarMobileMenuIsOpen"],["ifxNavbarMobileMenuIsOpen"]);T("ifx-navbar-item",void 0,["showLabel","icon","href","target","hideOnMobile","numberIndicator","dotIndicator","ifxNavItem"],["ifxNavItem"]);T("ifx-navbar-profile",void 0,["showLabel","href","imageUrl","target","alt","userName"]);T("ifx-notification",void 0,["icon","variant","linkText","linkHref","linkTarget"]);T("ifx-overview-table");T("ifx-pagination",void 0,["currentPage","showItemsPerPage","total","itemsPerPage","ifxPageChange","ifxItemsPerPageChange"],["ifxPageChange","ifxItemsPerPageChange"]);T("ifx-progress-bar",void 0,["value","size","showLabel"]);T("ifx-radio-button",void 0,["disabled","value","error","size","name","checked","ifxChange","ifxError"],["ifxChange","ifxError"]);T("ifx-radio-button-group",void 0,["alignment","size","showGroupLabel","groupLabelText","showCaption","captionText","showCaptionIcon","required"]);T("ifx-search-bar",void 0,["isOpen","disabled","value","maxlength","autocomplete","ifxInput","ifxOpen"],["ifxInput","ifxOpen"]);T("ifx-search-field",void 0,["value","suggestions","showSuggestions","maxSuggestions","maxHistoryItems","enableHistory","historyKey","historyHeaderText","ariaLabel","ariaLabelledBy","ariaDescribedBy","deleteIconAriaLabel","historyDeleteAriaLabel","dropdownAriaLabel","suggestionAriaLabel","historyItemAriaLabel","showDeleteIcon","disabled","size","placeholder","autocomplete","maxlength","ifxInput","ifxSuggestionRequested","ifxSuggestionSelected","ifxFocus","ifxBlur"],["ifxInput","ifxSuggestionRequested","ifxSuggestionSelected","ifxFocus","ifxBlur"]);T("ifx-segment",void 0,["icon","segmentIndex","selected","value","segmentSelect"],["segmentSelect"]);T("ifx-segmented-control",void 0,["caption","label","size","required","error","ifxChange"],["ifxChange"]);T("ifx-select",void 0,["value","name","items","choices","renderChoiceLimit","maxItemCount","addItems","removeItems","removeItemButton","editItems","duplicateItemsAllowed","delimiter","paste","showSearch","searchChoices","searchFields","searchFloor","searchResultLimit","position","resetScrollPosition","shouldSort","shouldSortItems","sorter","placeholder","searchPlaceholderValue","prependValue","appendValue","renderSelectedChoices","loadingText","noResultsText","noChoicesText","itemSelectText","addItemText","maxItemText","uniqueItemText","classNames","fuseOptions","addItemFilter","customAddItemText","callbackOnInit","callbackOnCreateTemplates","valueComparer","error","label","caption","disabled","required","placeholderValue","options","size","showClearButton","ifxSelect","ifxInput"],["ifxSelect","ifxInput"]);T("ifx-set-filter",void 0,["filterName","filterLabel","placeholder","type","options","ifxFilterSelect"],["ifxFilterSelect"]);T("ifx-sidebar",void 0,["applicationName","initialCollapse","showFooter","showHeader","termsOfUse","imprint","privacyPolicy","target","copyrightText","collapsible","collapsed","hideMenuLabel","ifxSidebarCollapseChange"],["ifxSidebarCollapseChange"]);T("ifx-sidebar-item",void 0,["icon","href","target","numberIndicator","active","isActionItem","handleItemClick","ifxSidebarMenu","ifxSidebarNavigationItem","ifxSidebarActionItem"],["ifxSidebarMenu","ifxSidebarNavigationItem","ifxSidebarActionItem"]);T("ifx-sidebar-title",void 0,["showInCollapsed"]);T("ifx-slider",void 0,["min","max","step","value","minValueHandle","maxValueHandle","disabled","showPercentage","leftIcon","rightIcon","leftText","rightText","type","ariaLabel","ifxChange"],["ifxChange"]);T("ifx-spinner",void 0,["size","variant","inverted","ariaLabel"]);T("ifx-status",void 0,["label","border","color"]);T("ifx-step",void 0,["complete","disabled","error","lastStep","stepId","stepperState"]);T("ifx-stepper",void 0,["activeStep","indicatorPosition","showStepNumber","variant","ariaLabel","ariaCurrent","ifxChange"],["ifxChange"]);T("ifx-switch",void 0,["checked","name","disabled","value","ifxChange"],["ifxChange"]);T("ifx-tab",void 0,["header","disabled","icon","iconPosition","tabHeaderChange"],["tabHeaderChange"]);T("ifx-table",void 0,["cols","rows","buttonRendererOptions","iconButtonRendererOptions","rowHeight","tableHeight","pagination","paginationItemsPerPage","filterOrientation","headline","variant","serverSidePagination","serverPageChangeHandler","showLoading"]);T("ifx-tabs",void 0,["orientation","activeTabIndex","fullWidth","ifxChange"],["ifxChange"]);T("ifx-template",void 0,["name","thumbnail","toggleTemplates","fieldError"],["toggleTemplates","fieldError"]);T("ifx-templates-ui");T("ifx-text-field",void 0,["placeholder","value","error","label","icon","caption","size","required","success","disabled","readOnly","maxlength","showDeleteIcon","autocomplete","type","internalId","ifxInput"],["ifxInput"]);T("ifx-textarea",void 0,["caption","cols","disabled","error","label","maxlength","name","placeholder","required","readOnly","resize","rows","value","wrap","fullWidth","ifxInput"],["ifxInput"]);T("ifx-tooltip",void 0,["header","text","position","ariaLabel","variant","icon"]);T("ifx-tree-view",void 0,["label","disableAllItems","expandAllItems","ariaLabel","ifxTreeViewExpandAllChange","ifxTreeViewDisableAllChange"],["ifxTreeViewExpandAllChange","ifxTreeViewDisableAllChange"]);T("ifx-tree-view-item",void 0,["expanded","initiallyExpanded","disableItem","ariaLabel","initiallySelected","value","ifxTreeViewItemExpandChange","ifxTreeViewItemCheckChange","ifxTreeViewItemDisableChange"],["ifxTreeViewItemExpandChange","ifxTreeViewItemCheckChange","ifxTreeViewItemDisableChange"]);var is=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _u(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var an={exports:{}},ns;function $u(){return ns||(ns=1,(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};var i=(function(n){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,l={},a={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function b(g){return g instanceof c?new c(g.type,b(g.content),g.alias):Array.isArray(g)?g.map(b):g.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++s}),b.__id},clone:function b(g,x){x=x||{};var w,_;switch(a.util.type(g)){case"Object":if(_=a.util.objId(g),x[_])return x[_];w={},x[_]=w;for(var E in g)g.hasOwnProperty(E)&&(w[E]=b(g[E],x));return w;case"Array":return _=a.util.objId(g),x[_]?x[_]:(w=[],x[_]=w,g.forEach(function(D,F){w[F]=b(D,x)}),w);default:return g}},getLanguage:function(b){for(;b;){var g=r.exec(b.className);if(g)return g[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,g){b.className=b.className.replace(RegExp(r,"gi"),""),b.classList.add("language-"+g)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(w){var b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(w.stack)||[])[1];if(b){var g=document.getElementsByTagName("script");for(var x in g)if(g[x].src==b)return g[x]}return null}},isActive:function(b,g,x){for(var w="no-"+g;b;){var _=b.classList;if(_.contains(g))return!0;if(_.contains(w))return!1;b=b.parentElement}return!!x}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(b,g){var x=a.util.clone(a.languages[b]);for(var w in g)x[w]=g[w];return x},insertBefore:function(b,g,x,w){w=w||a.languages;var _=w[b],E={};for(var D in _)if(_.hasOwnProperty(D)){if(D==g)for(var F in x)x.hasOwnProperty(F)&&(E[F]=x[F]);x.hasOwnProperty(D)||(E[D]=_[D])}var te=w[b];return w[b]=E,a.languages.DFS(a.languages,function(oe,be){be===te&&oe!=b&&(this[oe]=E)}),E},DFS:function b(g,x,w,_){_=_||{};var E=a.util.objId;for(var D in g)if(g.hasOwnProperty(D)){x.call(g,D,g[D],w||D);var F=g[D],te=a.util.type(F);te==="Object"&&!_[E(F)]?(_[E(F)]=!0,b(F,x,null,_)):te==="Array"&&!_[E(F)]&&(_[E(F)]=!0,b(F,x,D,_))}}},plugins:{},highlightAll:function(b,g){a.highlightAllUnder(document,b,g)},highlightAllUnder:function(b,g,x){var w={callback:x,container:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",w),w.elements=Array.prototype.slice.apply(w.container.querySelectorAll(w.selector)),a.hooks.run("before-all-elements-highlight",w);for(var _=0,E;E=w.elements[_++];)a.highlightElement(E,g===!0,w.callback)},highlightElement:function(b,g,x){var w=a.util.getLanguage(b),_=a.languages[w];a.util.setLanguage(b,w);var E=b.parentElement;E&&E.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(E,w);var D=b.textContent,F={element:b,language:w,grammar:_,code:D};function te(be){F.highlightedCode=be,a.hooks.run("before-insert",F),F.element.innerHTML=F.highlightedCode,a.hooks.run("after-highlight",F),a.hooks.run("complete",F),x&&x.call(F.element)}if(a.hooks.run("before-sanity-check",F),E=F.element.parentElement,E&&E.nodeName.toLowerCase()==="pre"&&!E.hasAttribute("tabindex")&&E.setAttribute("tabindex","0"),!F.code){a.hooks.run("complete",F),x&&x.call(F.element);return}if(a.hooks.run("before-highlight",F),!F.grammar){te(a.util.encode(F.code));return}if(g&&n.Worker){var oe=new Worker(a.filename);oe.onmessage=function(be){te(be.data)},oe.postMessage(JSON.stringify({language:F.language,code:F.code,immediateClose:!0}))}else te(a.highlight(F.code,F.grammar,F.language))},highlight:function(b,g,x){var w={code:b,grammar:g,language:x};if(a.hooks.run("before-tokenize",w),!w.grammar)throw new Error('The language "'+w.language+'" has no grammar.');return w.tokens=a.tokenize(w.code,w.grammar),a.hooks.run("after-tokenize",w),c.stringify(a.util.encode(w.tokens),w.language)},tokenize:function(b,g){var x=g.rest;if(x){for(var w in x)g[w]=x[w];delete g.rest}var _=new p;return h(_,_.head,b),u(b,_,g,_.head,0),k(_)},hooks:{all:{},add:function(b,g){var x=a.hooks.all;x[b]=x[b]||[],x[b].push(g)},run:function(b,g){var x=a.hooks.all[b];if(!(!x||!x.length))for(var w=0,_;_=x[w++];)_(g)}},Token:c};n.Prism=a;function c(b,g,x,w){this.type=b,this.content=g,this.alias=x,this.length=(w||"").length|0}c.stringify=function b(g,x){if(typeof g=="string")return g;if(Array.isArray(g)){var w="";return g.forEach(function(te){w+=b(te,x)}),w}var _={type:g.type,content:b(g.content,x),tag:"span",classes:["token",g.type],attributes:{},language:x},E=g.alias;E&&(Array.isArray(E)?Array.prototype.push.apply(_.classes,E):_.classes.push(E)),a.hooks.run("wrap",_);var D="";for(var F in _.attributes)D+=" "+F+'="'+(_.attributes[F]||"").replace(/"/g,"&quot;")+'"';return"<"+_.tag+' class="'+_.classes.join(" ")+'"'+D+">"+_.content+"</"+_.tag+">"};function d(b,g,x,w){b.lastIndex=g;var _=b.exec(x);if(_&&w&&_[1]){var E=_[1].length;_.index+=E,_[0]=_[0].slice(E)}return _}function u(b,g,x,w,_,E){for(var D in x)if(!(!x.hasOwnProperty(D)||!x[D])){var F=x[D];F=Array.isArray(F)?F:[F];for(var te=0;te<F.length;++te){if(E&&E.cause==D+","+te)return;var oe=F[te],be=oe.inside,bt=!!oe.lookbehind,At=!!oe.greedy,pi=oe.alias;if(At&&!oe.pattern.global){var xe=oe.pattern.toString().match(/[imsuy]*$/)[0];oe.pattern=RegExp(oe.pattern.source,xe+"g")}for(var ce=oe.pattern||oe,U=w.next,ge=_;U!==g.tail&&!(E&&ge>=E.reach);ge+=U.value.length,U=U.next){var Oe=U.value;if(g.length>b.length)return;if(!(Oe instanceof c)){var Pe=1,me;if(At){if(me=d(ce,ge,b,bt),!me||me.index>=b.length)break;var ze=me.index,mi=me.index+me[0].length,Me=ge;for(Me+=U.value.length;ze>=Me;)U=U.next,Me+=U.value.length;if(Me-=U.value.length,ge=Me,U.value instanceof c)continue;for(var vt=U;vt!==g.tail&&(Me<mi||typeof vt.value=="string");vt=vt.next)Pe++,Me+=vt.value.length;Pe--,Oe=b.slice(ge,Me),me.index-=ge}else if(me=d(ce,0,Oe,bt),!me)continue;var ze=me.index,Ze=me[0],_t=Oe.slice(0,ze),qt=Oe.slice(ze+Ze.length),Je=ge+Oe.length;E&&Je>E.reach&&(E.reach=Je);var Bt=U.prev;_t&&(Bt=h(g,Bt,_t),ge+=_t.length),v(g,Bt,Pe);var f=new c(D,be?a.tokenize(Ze,be):Ze,pi,Ze);if(U=h(g,Bt,f),qt&&h(g,U,qt),Pe>1){var m={cause:D+","+te,reach:Je};u(b,g,x,U.prev,ge,m),E&&m.reach>E.reach&&(E.reach=m.reach)}}}}}}function p(){var b={value:null,prev:null,next:null},g={value:null,prev:b,next:null};b.next=g,this.head=b,this.tail=g,this.length=0}function h(b,g,x){var w=g.next,_={value:x,prev:g,next:w};return g.next=_,w.prev=_,b.length++,_}function v(b,g,x){for(var w=g.next,_=0;_<x&&w!==b.tail;_++)w=w.next;g.next=w,w.prev=g,b.length-=_}function k(b){for(var g=[],x=b.head.next;x!==b.tail;)g.push(x.value),x=x.next;return g}if(!n.document)return n.addEventListener&&(a.disableWorkerMessageHandler||n.addEventListener("message",function(b){var g=JSON.parse(b.data),x=g.language,w=g.code,_=g.immediateClose;n.postMessage(a.highlight(w,a.languages[x],x)),_&&n.close()},!1)),a;var y=a.util.currentScript();y&&(a.filename=y.src,y.hasAttribute("data-manual")&&(a.manual=!0));function z(){a.manual||a.highlightAll()}if(!a.manual){var q=document.readyState;q==="loading"||q==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",z):window.requestAnimationFrame?window.requestAnimationFrame(z):window.setTimeout(z,16)}return a})(t);e.exports&&(e.exports=i),typeof is<"u"&&(is.Prism=i),i.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},i.languages.markup.tag.inside["attr-value"].inside.entity=i.languages.markup.entity,i.languages.markup.doctype.inside["internal-subset"].inside=i.languages.markup,i.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(i.languages.markup.tag,"addInlined",{value:function(r,s){var l={};l["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:i.languages[s]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};a["language-"+s]={pattern:/[\s\S]+/,inside:i.languages[s]};var c={};c[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:a},i.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(i.languages.markup.tag,"addAttribute",{value:function(n,r){i.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:i.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),i.languages.html=i.languages.markup,i.languages.mathml=i.languages.markup,i.languages.svg=i.languages.markup,i.languages.xml=i.languages.extend("markup",{}),i.languages.ssml=i.languages.xml,i.languages.atom=i.languages.xml,i.languages.rss=i.languages.xml,(function(n){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var s=n.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))})(i),i.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},i.languages.javascript=i.languages.extend("clike",{"class-name":[i.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),i.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,i.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:i.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:i.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:i.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:i.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:i.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),i.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:i.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),i.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),i.languages.markup&&(i.languages.markup.tag.addInlined("script","javascript"),i.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),i.languages.js=i.languages.javascript,(function(){if(typeof i>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var n="Loading…",r=function(y,z){return"✖ Error "+y+" while fetching file: "+z},s="✖ Error: File does not exist or is empty",l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",c="loading",d="loaded",u="failed",p="pre[data-src]:not(["+a+'="'+d+'"]):not(['+a+'="'+c+'"])';function h(y,z,q){var b=new XMLHttpRequest;b.open("GET",y,!0),b.onreadystatechange=function(){b.readyState==4&&(b.status<400&&b.responseText?z(b.responseText):b.status>=400?q(r(b.status,b.statusText)):q(s))},b.send(null)}function v(y){var z=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(z){var q=Number(z[1]),b=z[2],g=z[3];return b?g?[q,Number(g)]:[q,void 0]:[q,q]}}i.hooks.add("before-highlightall",function(y){y.selector+=", "+p}),i.hooks.add("before-sanity-check",function(y){var z=y.element;if(z.matches(p)){y.code="",z.setAttribute(a,c);var q=z.appendChild(document.createElement("CODE"));q.textContent=n;var b=z.getAttribute("data-src"),g=y.language;if(g==="none"){var x=(/\.(\w+)$/.exec(b)||[,"none"])[1];g=l[x]||x}i.util.setLanguage(q,g),i.util.setLanguage(z,g);var w=i.plugins.autoloader;w&&w.loadLanguages(g),h(b,function(_){z.setAttribute(a,d);var E=v(z.getAttribute("data-range"));if(E){var D=_.split(/\r\n?|\n/g),F=E[0],te=E[1]==null?D.length:E[1];F<0&&(F+=D.length),F=Math.max(0,Math.min(F-1,D.length)),te<0&&(te+=D.length),te=Math.max(0,Math.min(te,D.length)),_=D.slice(F,te).join(`
`),z.hasAttribute("data-start")||z.setAttribute("data-start",String(F+1))}q.textContent=_,i.highlightElement(q)},function(_){z.setAttribute(a,u),q.textContent=_})}}),i.plugins.fileHighlight={highlight:function(z){for(var q=(z||document).querySelectorAll(p),b=0,g;g=q[b++];)i.highlightElement(g)}};var k=!1;i.fileHighlight=function(){k||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),k=!0),i.plugins.fileHighlight.highlight.apply(this,arguments)}})()})(an)),an.exports}var yu=$u();const K=_u(yu);Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,i){var n={};n["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[i]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};r["language-"+i]={pattern:/[\s\S]+/,inside:Prism.languages[i]};var s={};s[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:r},Prism.languages.insertBefore("markup","cdata",s)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;const wu={"@infineon/infineon-design-system-vue":"40.0.0--canary.2100.19851112046.0"},Su={dependencies:wu},Iu="40.0.0--canary.2100.19851112046.0";(function(e){function t(i,n){return"___"+i.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(i,n,r,s){if(i.language===n){var l=i.tokenStack=[];i.code=i.code.replace(r,function(a){if(typeof s=="function"&&!s(a))return a;for(var c=l.length,d;i.code.indexOf(d=t(n,c))!==-1;)++c;return l[c]=a,d}),i.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(i,n){if(i.language!==n||!i.tokenStack)return;i.grammar=e.languages[n];var r=0,s=Object.keys(i.tokenStack);function l(a){for(var c=0;c<a.length&&!(r>=s.length);c++){var d=a[c];if(typeof d=="string"||d.content&&typeof d.content=="string"){var u=s[r],p=i.tokenStack[u],h=typeof d=="string"?d:d.content,v=t(n,u),k=h.indexOf(v);if(k>-1){++r;var y=h.substring(0,k),z=new e.Token(n,e.tokenize(p,i.grammar),"language-"+n,p),q=h.substring(k+v.length),b=[];y&&b.push.apply(b,l([y])),b.push(z),q&&b.push.apply(b,l([q])),typeof d=="string"?a.splice.apply(a,[c,1].concat(b)):d.content=b}}else d.content&&l(d.content)}return a}l(i.tokens)}}})})(Prism);Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;var rs={},ss;function Cu(){return ss||(ss=1,(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism)),rs}Cu();const Au={"auto-collapse":"false"},Eu=`<script setup lang="ts">
const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event.detail);
  // Add your handler logic here
};

const handleClose = (event: CustomEvent) => {
  console.log('ifxClose:', event.detail);
  // Add your handler logic here
};
</' + 'script>

<template>
  <div>
    <ifx-accordion auto-collapse="false">
      <ifx-accordion-item
        caption="Label"
        open="true"
        aria-level="3"
        mutable="true"
        @ifxOpen="handleOpen"
        @ifxClose="handleClose">
        Content for Initial Item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-accordion-item>
      <ifx-accordion-item
        caption="Label"
        open="false"
        aria-level="3"
        mutable="true">
        Content for Item #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-accordion-item>
      <ifx-accordion-item
        caption="Label"
        open="false"
        aria-level="3"
        mutable="true">
        Content for Item #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-accordion-item>
    </ifx-accordion>
  </div>
</' + 'template>`,ku=Y({__name:"IfxAccordionExample",setup(e){const t=n=>{console.log("ifxOpen:",n.detail)},i=n=>{console.log("ifxClose:",n.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(n,r)=>(Q(),ee("div",null,[o("ifx-accordion",Au,[o("ifx-accordion-item",{caption:"Label",open:"true","aria-level":"3",mutable:"true","on:ifxOpen":t,"on:ifxClose":i}," Content for Initial Item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. ",32),r[0]||(r[0]=o("ifx-accordion-item",{caption:"Label",open:"false","aria-level":"3",mutable:"true"}," Content for Item #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. ",-1)),r[1]||(r[1]=o("ifx-accordion-item",{caption:"Label",open:"false","aria-level":"3",mutable:"true"}," Content for Item #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. ",-1))]),o("details",{class:"code-details"},[r[2]||(r[2]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Eu))])])]))}}),Lu={"list-aria-label":"Navigation menu"},Tu=`<script setup lang="ts">
const handleActionListItemClick = (event: CustomEvent) => {
  console.log('ifxActionListItemClick:', event.detail);
  // Add your handler logic here
};
</' + 'script>

<template>
  <div>
    <ifx-action-list list-aria-label="Navigation menu">
      <ifx-action-list-item
        item-title="Dashboard"
        description="View your main dashboard"
        value="dashboard"
        item-aria-label="Navigation item"
        @ifxActionListItemClick="handleActionListItemClick">
        <ifx-icon
          slot="trailing"
          icon="chevron-right-16" />
      </ifx-action-list-item>
      <ifx-action-list-item
        item-title="Settings"
        value="settings"
        item-aria-label="Navigation item">
        <ifx-icon
          slot="trailing"
          icon="chevron-right-16" />
      </ifx-action-list-item>
      <ifx-action-list-item
        item-title="Profile"
        description="Manage your profile information"
        value="profile"
        disabled="true"
        item-aria-label="Navigation item">
        <ifx-icon
          slot="trailing"
          icon="chevron-right-16" />
      </ifx-action-list-item>
      <ifx-action-list-item
        item-title="Advanced Analytics and Reporting Dashboard with Extended Functionality"
        description="This comprehensive analytics dashboard provides detailed insights into user behavior and system performance metrics."
        value="analytics"
        item-aria-label="Navigation item">
        <ifx-icon
          slot="trailing"
          icon="chevron-right-16" />
      </ifx-action-list-item>
    </ifx-action-list>
  </div>
</' + 'template>`,Fu=Y({__name:"IfxActionListExample",setup(e){const t=i=>{console.log("ifxActionListItemClick:",i.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(i,n)=>(Q(),ee("div",null,[o("ifx-action-list",Lu,[o("ifx-action-list-item",{"item-title":"Dashboard",description:"View your main dashboard",value:"dashboard","item-aria-label":"Navigation item","on:ifxActionListItemClick":t},[...n[0]||(n[0]=[o("ifx-icon",{slot:"trailing",icon:"chevron-right-16"},null,-1)])],32),n[1]||(n[1]=o("ifx-action-list-item",{"item-title":"Settings",value:"settings","item-aria-label":"Navigation item"},[o("ifx-icon",{slot:"trailing",icon:"chevron-right-16"})],-1)),n[2]||(n[2]=o("ifx-action-list-item",{"item-title":"Profile",description:"Manage your profile information",value:"profile",disabled:"true","item-aria-label":"Navigation item"},[o("ifx-icon",{slot:"trailing",icon:"chevron-right-16"})],-1)),n[3]||(n[3]=o("ifx-action-list-item",{"item-title":"Advanced Analytics and Reporting Dashboard with Extended Functionality",description:"This comprehensive analytics dashboard provides detailed insights into user behavior and system performance metrics.",value:"analytics","item-aria-label":"Navigation item"},[o("ifx-icon",{slot:"trailing",icon:"chevron-right-16"})],-1))]),o("details",{class:"code-details"},[n[4]||(n[4]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Tu))])])]))}}),Pu=`<script setup lang="ts">
const handleClose = (event: CustomEvent) => {
  console.log('ifxClose:', event.detail);
  // Add your handler logic here
};
</' + 'script>

<template>
  <div>
    <ifx-alert
      aria-live="assertive"
      variant="primary"
      icon="c-info-16"
      closable="true"
      @ifxClose="handleClose">
      Attention! This is an alert message — check it out!
    </ifx-alert>
  </div>
</' + 'template>`,Ou=Y({__name:"IfxAlertExample",setup(e){const t=i=>{console.log("ifxClose:",i.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(i,n)=>(Q(),ee("div",null,[o("ifx-alert",{"aria-live":"assertive",variant:"primary",icon:"c-info-16",closable:"true","on:ifxClose":t}," Attention! This is an alert message — check it out! ",32),o("details",{class:"code-details"},[n[0]||(n[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Pu))])])]))}}),Ru=`<script setup lang="ts">
</' + 'script>

<template>
  <div>
    <ifx-button
      type="button"
      aria-label="Button"
      disabled="false"
      variant="primary"
      size="m"
      target="_blank"
      theme="default"
      full-width="false">
      Button
    </ifx-button>
  </div>
</' + 'template>`,Du=Y({__name:"IfxButtonExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-button",{type:"button","aria-label":"Button",disabled:"false",variant:"primary",size:"m",target:"_blank",theme:"default","full-width":"false"}," Button ",-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Ru))])])]))}}),Mu=`<script setup lang="ts">
</' + 'script>

<template>
  <div>
    <ifx-card
      direction="vertical"
      href=""
      target="_blank"
      aria-label="Card">
      <ifx-card-image
        position="right"
        src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg"
        alt="Coffee"
        slot="img" />
      <ifx-card-overline>
        Overline
      </ifx-card-overline>
      <ifx-card-headline>
        Headline
      </ifx-card-headline>
      <ifx-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </ifx-card-text>
      <ifx-card-links slot="buttons">
        <ifx-button variant="primary">
          Button
        </ifx-button>
        <ifx-button variant="secondary">
          Button
        </ifx-button>
      </ifx-card-links>
    </ifx-card>
  </div>
</' + 'template>`,zu=Y({__name:"IfxCardExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-card",{direction:"vertical",href:"",target:"_blank","aria-label":"Card"},[o("ifx-card-image",{position:"right",src:"https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg",alt:"Coffee",slot:"img"}),o("ifx-card-overline",null," Overline "),o("ifx-card-headline",null," Headline "),o("ifx-card-text",null," Some quick example text to build on the card title and make up the bulk of the card's content. "),o("ifx-card-links",{slot:"buttons"},[o("ifx-button",{variant:"primary"}," Button "),o("ifx-button",{variant:"secondary"}," Button ")])],-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Mu))])])]))}}),Hu=`<script setup lang="ts">
const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event.detail);
  // Add your handler logic here
};

const handleError = (event: CustomEvent) => {
  console.log('ifxError:', event.detail);
  // Add your handler logic here
};
</' + 'script>

<template>
  <div>
    <ifx-checkbox
      error="false"
      disabled="false"
      checked="false"
      size="s"
      indeterminate="false"
      name="checkbox"
      @ifxChange="handleChange"
      @ifxError="handleError">
      Text
    </ifx-checkbox>
  </div>
</' + 'template>`,qu=Y({__name:"IfxCheckboxExample",setup(e){const t=n=>{console.log("ifxChange:",n.detail)},i=n=>{console.log("ifxError:",n.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(n,r)=>(Q(),ee("div",null,[o("ifx-checkbox",{error:"false",disabled:"false",checked:"false",size:"s",indeterminate:"false",name:"checkbox","on:ifxChange":t,"on:ifxError":i}," Text ",32),o("details",{class:"code-details"},[r[0]||(r[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Hu))])])]))}}),Bu=`<script setup lang="ts">
const handleSetGroupError = (event: CustomEvent) => {
  console.log('setGroupError:', event.detail);
  // Add your handler logic here
};
</' + 'script>

<template>
  <div>
    <ifx-checkbox-group
      alignment="vertical"
      show-group-label="false"
      group-label-text="Group Label"
      show-caption="false"
      caption-text="Caption text, description, error notification"
      show-caption-icon="false"
      required="false">
      <ifx-checkbox
        value="0"
        disabled="false"
        checked="false"
        size="m"
        indeterminate="false"
        error="false">
        Option 0
      </ifx-checkbox>
      <ifx-checkbox
        value="1"
        size="m">
        Option 1
      </ifx-checkbox>
      <ifx-checkbox
        value="2"
        size="m">
        Option 2
      </ifx-checkbox>
    </ifx-checkbox-group>
  </div>
</' + 'template>`,Nu=Y({__name:"IfxCheckboxGroupExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-checkbox-group",{alignment:"vertical","show-group-label":"false","group-label-text":"Group Label","show-caption":"false","caption-text":"Caption text, description, error notification","show-caption-icon":"false",required:"false"},[o("ifx-checkbox",{value:"0",disabled:"false",checked:"false",size:"m",indeterminate:"false",error:"false"}," Option 0 "),o("ifx-checkbox",{value:"1",size:"m"}," Option 1 "),o("ifx-checkbox",{value:"2",size:"m"}," Option 2 ")],-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Bu))])])]))}}),ju={placeholder:"Label",size:"medium",variant:"single",theme:"outlined",icon:"","read-only":"false","aria-label":"Chip",disabled:"false"},Vu=`<script setup lang="ts">
const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event.detail);
  // Add your handler logic here
};
</' + 'script>

<template>
  <div>
    <ifx-chip
      placeholder="Label"
      size="medium"
      variant="single"
      theme="outlined"
      icon=""
      read-only="false"
      aria-label="Chip"
      disabled="false">
      <ifx-chip-item
        value="Item Value 1"
        @ifxChange="handleChange">
        Item Label 1
      </ifx-chip-item>
      <ifx-chip-item value="Item Value 2">
        Item Label 2
      </ifx-chip-item>
      <ifx-chip-item value="Item Value 3">
        Item Label 3
      </ifx-chip-item>
      <ifx-chip-item value="Item Value 4">
        Item Label 4
      </ifx-chip-item>
    </ifx-chip>
  </div>
</' + 'template>`,Uu=Y({__name:"IfxChipExample",setup(e){const t=i=>{console.log("ifxChange:",i.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(i,n)=>(Q(),ee("div",null,[o("ifx-chip",ju,[o("ifx-chip-item",{value:"Item Value 1","on:ifxChange":t}," Item Label 1 ",32),n[0]||(n[0]=o("ifx-chip-item",{value:"Item Value 2"}," Item Label 2 ",-1)),n[1]||(n[1]=o("ifx-chip-item",{value:"Item Value 3"}," Item Label 3 ",-1)),n[2]||(n[2]=o("ifx-chip-item",{value:"Item Value 4"}," Item Label 4 ",-1))]),o("details",{class:"code-details"},[n[3]||(n[3]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Vu))])])]))}}),Wu=`<script setup lang="ts">
const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event.detail);
  // Add your handler logic here
};
</' + 'script>

<template>
  <div>
    <ifx-content-switcher>
      <ifx-content-switcher-item
        value="item 1"
        @ifxChange="handleChange">
        <ifx-icon icon="applications-16" />
      </ifx-content-switcher-item>
      <ifx-content-switcher-item value="item 2">
        <ifx-icon icon="applications-16" />
      </ifx-content-switcher-item>
      <ifx-content-switcher-item value="item 3">
        <ifx-icon icon="applications-16" />
      </ifx-content-switcher-item>
      <ifx-content-switcher-item value="item 4">
        <ifx-icon icon="applications-16" />
      </ifx-content-switcher-item>
    </ifx-content-switcher>
  </div>
</' + 'template>`,Gu=Y({__name:"IfxContentSwitcherExample",setup(e){const t=i=>{console.log("ifxChange:",i.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(i,n)=>(Q(),ee("div",null,[o("ifx-content-switcher",null,[o("ifx-content-switcher-item",{value:"item 1","on:ifxChange":t},[...n[0]||(n[0]=[o("ifx-icon",{icon:"applications-16"},null,-1)])],32),n[1]||(n[1]=Fc('<ifx-content-switcher-item value="item 2"><ifx-icon icon="applications-16"></ifx-icon></ifx-content-switcher-item><ifx-content-switcher-item value="item 3"><ifx-icon icon="applications-16"></ifx-icon></ifx-content-switcher-item><ifx-content-switcher-item value="item 4"><ifx-icon icon="applications-16"></ifx-icon></ifx-content-switcher-item>',3))]),o("details",{class:"code-details"},[n[2]||(n[2]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Wu))])])]))}}),Ku=`<script setup lang="ts">
const handleDate = (event: CustomEvent) => {
  console.log('ifxDate:', event.detail);
  // Add your handler logic here
};
</' + 'script>

<template>
  <div>
    <ifx-date-picker
      name="date-picker"
      error="false"
      disabled="false"
      size="s"
      success="false"
      value=""
      max=""
      min=""
      label="Label Text"
      caption="Caption text, description, error notification."
      aria-label="Date Picker"
      required="false"
      autocomplete="on"
      type="date"
      @ifxDate="handleDate" />
  </div>
</' + 'template>`,Yu=Y({__name:"IfxDatePickerExample",setup(e){const t=i=>{console.log("ifxDate:",i.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(i,n)=>(Q(),ee("div",null,[o("ifx-date-picker",{name:"date-picker",error:"false",disabled:"false",size:"s",success:"false",value:"",max:"",min:"",label:"Label Text",caption:"Caption text, description, error notification.","aria-label":"Date Picker",required:"false",autocomplete:"on",type:"date","on:ifxDate":t},null,32),o("details",{class:"code-details"},[n[0]||(n[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Ku))])])]))}}),Zu={placement:"bottom-start",disabled:"false","default-open":"false","no-close-on-outside-click":"false","no-close-on-menu-click":"false","no-append-to-body":"false"},Ju=`<script setup lang="ts">
const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event.detail);
  // Add your handler logic here
};

const handleClose = (event: CustomEvent) => {
  console.log('ifxClose:', event.detail);
  // Add your handler logic here
};

const handleDropdownMenuItem = (event: CustomEvent) => {
  console.log('ifxDropdownMenuItem:', event.detail);
  // Add your handler logic here
};
</' + 'script>

<template>
  <div>
    <div
      @ifxOpen="handleOpen"
      @ifxClose="handleClose"
      @ifxDropdownMenuItem="handleDropdownMenuItem">
      <ifx-dropdown
        placement="bottom-start"
        disabled="false"
        default-open="false"
        no-close-on-outside-click="false"
        no-close-on-menu-click="false"
        no-append-to-body="false">
        <ifx-dropdown-trigger-button
          variant="primary"
          @ifxOpen="handleOpen"
          @ifxClose="handleClose"
          @ifxDropdownMenuItem="handleDropdownMenuItem">
          Dropdown
        </ifx-dropdown-trigger-button>
        <ifx-dropdown-menu
          size="m"
          @ifxOpen="handleOpen"
          @ifxClose="handleClose"
          @ifxDropdownMenuItem="handleDropdownMenuItem">
          <ifx-dropdown-item
            icon="c-info-16"
            target="_self"
            href=""
            @ifxOpen="handleOpen"
            @ifxClose="handleClose"
            @ifxDropdownMenuItem="handleDropdownMenuItem">
            Menu Item
          </ifx-dropdown-item>
          <ifx-dropdown-item
            icon="c-info-16"
            target="_self"
            href="">
            Menu Item
          </ifx-dropdown-item>
          <ifx-dropdown-item
            icon="c-info-16"
            target="_self"
            href="">
            Menu Item
          </ifx-dropdown-item>
          <ifx-dropdown-item
            icon="c-info-16"
            target="_self"
            href="">
            Menu Item
          </ifx-dropdown-item>
          <ifx-dropdown-item
            icon="c-info-16"
            target="_self"
            href="">
            Menu Item
          </ifx-dropdown-item>
        </ifx-dropdown-menu>
      </ifx-dropdown>
    </div>
  </div>
</' + 'template>`,Xu=Y({__name:"IfxDropdownExample",setup(e){const t=r=>{console.log("ifxOpen:",r.detail)},i=r=>{console.log("ifxClose:",r.detail)},n=r=>{console.log("ifxDropdownMenuItem:",r.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(r,s)=>(Q(),ee("div",null,[o("div",{"on:ifxOpen":t,"on:ifxClose":i,"on:ifxDropdownMenuItem":n},[o("ifx-dropdown",Zu,[o("ifx-dropdown-trigger-button",{variant:"primary","on:ifxOpen":t,"on:ifxClose":i,"on:ifxDropdownMenuItem":n}," Dropdown ",32),o("ifx-dropdown-menu",{size:"m","on:ifxOpen":t,"on:ifxClose":i,"on:ifxDropdownMenuItem":n},[o("ifx-dropdown-item",{icon:"c-info-16",target:"_self",href:"","on:ifxOpen":t,"on:ifxClose":i,"on:ifxDropdownMenuItem":n}," Menu Item ",32),s[0]||(s[0]=o("ifx-dropdown-item",{icon:"c-info-16",target:"_self",href:""}," Menu Item ",-1)),s[1]||(s[1]=o("ifx-dropdown-item",{icon:"c-info-16",target:"_self",href:""}," Menu Item ",-1)),s[2]||(s[2]=o("ifx-dropdown-item",{icon:"c-info-16",target:"_self",href:""}," Menu Item ",-1)),s[3]||(s[3]=o("ifx-dropdown-item",{icon:"c-info-16",target:"_self",href:""}," Menu Item ",-1))],32)])],32),o("details",{class:"code-details"},[s[4]||(s[4]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Ju))])])]))}}),Qu=`<script setup lang="ts">
</' + 'script>

<template>
  <div>
    <ifx-footer copyright-text="© 1999 - 2024 Infineon Technologies AG">
      <div slot="socials">
        <ifx-link
          variant="title"
          href="http://infineon.com"
          aria-label="Go to Homepage">
          <ifx-icon icon="home-16" />
        </ifx-link>
        <ifx-link
          variant="title"
          href="http://facebook.com/infineon"
          aria-label="Follow us on Facebook">
          <ifx-icon icon="facebook" />
        </ifx-link>
        <ifx-link
          variant="title"
          href="http://youtube.com/infineon"
          aria-label="Follow us on Youtube">
          <ifx-icon icon="youtube" />
        </ifx-link>
        <ifx-link
          variant="title"
          href="http://instagram.com/infineon"
          aria-label="Follow us on Instagram">
          <ifx-icon icon="instagram" />
        </ifx-link>
        <ifx-link
          variant="title"
          href="http://linkedin.com/infineon"
          aria-label="Follow us on LinkedIn">
          <ifx-icon icon="linkedin" />
        </ifx-link>
        <ifx-link
          variant="title"
          href="http://xing.com/infineon"
          aria-label="Follow us on Xing">
          <ifx-icon icon="xing" />
        </ifx-link>
      </div>
      <div slot="info">
        <ifx-link
          variant="menu"
          href="https://yourwebsite.com/terms"
          target="_blank">
          Terms
        </ifx-link>
        <ifx-link
          variant="menu"
          href="https://yourwebsite.com/imprint"
          target="_blank">
          Imprint
        </ifx-link>
        <ifx-link
          variant="menu"
          href="https://yourwebsite.com/privacy-policy"
          target="_blank">
          Privacy policy
        </ifx-link>
        <ifx-link
          variant="menu"
          href="https://yourwebsite.com/glossary"
          target="_blank">
          Glossary
        </ifx-link>
      </div>
    </ifx-footer>
  </div>
</' + 'template>`,ed=Y({__name:"IfxFooterMediumExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-footer",{"copyright-text":"© 1999 - 2024 Infineon Technologies AG"},[o("div",{slot:"socials"},[o("ifx-link",{variant:"title",href:"http://infineon.com","aria-label":"Go to Homepage"},[o("ifx-icon",{icon:"home-16"})]),o("ifx-link",{variant:"title",href:"http://facebook.com/infineon","aria-label":"Follow us on Facebook"},[o("ifx-icon",{icon:"facebook"})]),o("ifx-link",{variant:"title",href:"http://youtube.com/infineon","aria-label":"Follow us on Youtube"},[o("ifx-icon",{icon:"youtube"})]),o("ifx-link",{variant:"title",href:"http://instagram.com/infineon","aria-label":"Follow us on Instagram"},[o("ifx-icon",{icon:"instagram"})]),o("ifx-link",{variant:"title",href:"http://linkedin.com/infineon","aria-label":"Follow us on LinkedIn"},[o("ifx-icon",{icon:"linkedin"})]),o("ifx-link",{variant:"title",href:"http://xing.com/infineon","aria-label":"Follow us on Xing"},[o("ifx-icon",{icon:"xing"})])]),o("div",{slot:"info"},[o("ifx-link",{variant:"menu",href:"https://yourwebsite.com/terms",target:"_blank"}," Terms "),o("ifx-link",{variant:"menu",href:"https://yourwebsite.com/imprint",target:"_blank"}," Imprint "),o("ifx-link",{variant:"menu",href:"https://yourwebsite.com/privacy-policy",target:"_blank"}," Privacy policy "),o("ifx-link",{variant:"menu",href:"https://yourwebsite.com/glossary",target:"_blank"}," Glossary ")])],-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Qu))])])]))}}),td=`<script setup lang="ts">
</' + 'script>

<template>
  <div>
    <ifx-icon-button
      shape="round"
      variant="primary"
      icon="c-info-16"
      href=""
      target="_blank"
      size="m"
      disabled="false"
      aria-label="Icon Button" />
  </div>
</' + 'template>`,id=Y({__name:"IfxIconButtonExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-icon-button",{shape:"round",variant:"primary",icon:"c-info-16",href:"",target:"_blank",size:"m",disabled:"false","aria-label":"Icon Button"},null,-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(td))])])]))}}),nd=`<script setup lang="ts">
</' + 'script>

<template>
  <div>
    <ifx-indicator
      variant="number"
      number="1"
      inverted="false" />
  </div>
</' + 'template>`,rd=Y({__name:"IfxIndicatorExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-indicator",{variant:"number",number:"1",inverted:"false"},null,-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(nd))])])]))}}),sd=`<script setup lang="ts">
</' + 'script>

<template>
  <div>
    <ifx-link
      href=""
      aria-label="Link"
      target="_blank"
      size="m"
      variant="bold"
      disabled="false"
      download="">
      Link
    </ifx-link>
  </div>
</' + 'template>`,ld=Y({__name:"IfxLinkExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-link",{href:"","aria-label":"Link",target:"_blank",size:"m",variant:"bold",disabled:"false",download:""}," Link ",-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(sd))])])]))}}),ad=`<script setup lang="ts">
</' + 'script>

<template>
  <div>
    <ifx-navbar
      show-logo-and-appname="true"
      application-name="Application name"
      fixed="false"
      logo-href="http://google.com"
      logo-href-target="_self">
      <ifx-navbar-item
        slot="left-item"
        target="_self"
        href=""
        hide-on-mobile="true">
        <ifx-navbar-item icon="">
          <ifx-navbar-item>
            <ifx-navbar-item
              href="http://google.com"
              target="_blank">
              Link Layer 3 Nested Item 1
            </ifx-navbar-item>
            <ifx-navbar-item>
              Layer 3 Nested Item 2
            </ifx-navbar-item>
            <ifx-navbar-item>
              Layer 3 Nested Item 3
            </ifx-navbar-item>
            <ifx-navbar-item>
              Layer 3 Nested Item 4
            </ifx-navbar-item>
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Nested Item 3
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Nested Item 4
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Nested Item 5
          </ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Item 1
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Item 2
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Item 3
          </ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item>
          Nested Item 3
        </ifx-navbar-item>
        <ifx-navbar-item>
          <ifx-navbar-item>
            Nested Item 4
          </ifx-navbar-item>
        </ifx-navbar-item>
      </ifx-navbar-item>
      <ifx-navbar-item
        href=""
        target="_self"
        slot="left-item"
        icon=""
        show-label="true">
        Menu Item
      </ifx-navbar-item>
      <ifx-navbar-item slot="left-item">
        <ifx-navbar-item>
          Item1
        </ifx-navbar-item>
        <ifx-navbar-item>
          Item2
        </ifx-navbar-item>
      </ifx-navbar-item>
      <ifx-search-bar
        slot="search-bar-left"
        is-open="false" />
      <ifx-navbar-item
        number-indicator=""
        slot="right-item"
        target="_blank"
        href="http://google.com"
        hide-on-mobile="true"
        show-label="false"
        icon="image-16" />
      <ifx-navbar-item
        dot-indicator="false"
        slot="right-item"
        hide-on-mobile="true"
        show-label="false"
        icon="image-16" />
      <ifx-navbar-profile
        user-name=""
        slot="right-item"
        image-url=""
        show-label="true"
        href=""
        target="_self"
        alt="profile image" />
    </ifx-navbar>
  </div>
</' + 'template>`,od=Y({__name:"IfxNavbarExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-navbar",{"show-logo-and-appname":"true","application-name":"Application name",fixed:"false","logo-href":"http://google.com","logo-href-target":"_self"},[o("ifx-navbar-item",{slot:"left-item",target:"_self",href:"","hide-on-mobile":"true"},[o("ifx-navbar-item",{icon:""},[o("ifx-navbar-item",null,[o("ifx-navbar-item",{href:"http://google.com",target:"_blank"}," Link Layer 3 Nested Item 1 "),o("ifx-navbar-item",null," Layer 3 Nested Item 2 "),o("ifx-navbar-item",null," Layer 3 Nested Item 3 "),o("ifx-navbar-item",null," Layer 3 Nested Item 4 ")]),o("ifx-navbar-item",null," Layer 2 Nested Item 3 "),o("ifx-navbar-item",null," Layer 2 Nested Item 4 "),o("ifx-navbar-item",null," Layer 2 Nested Item 5 ")]),o("ifx-navbar-item",null,[o("ifx-navbar-item",null," Layer 2 Item 1 "),o("ifx-navbar-item",null," Layer 2 Item 2 "),o("ifx-navbar-item",null," Layer 2 Item 3 ")]),o("ifx-navbar-item",null," Nested Item 3 "),o("ifx-navbar-item",null,[o("ifx-navbar-item",null," Nested Item 4 ")])]),o("ifx-navbar-item",{href:"",target:"_self",slot:"left-item",icon:"","show-label":"true"}," Menu Item "),o("ifx-navbar-item",{slot:"left-item"},[o("ifx-navbar-item",null," Item1 "),o("ifx-navbar-item",null," Item2 ")]),o("ifx-search-bar",{slot:"search-bar-left","is-open":"false"}),o("ifx-navbar-item",{"number-indicator":"",slot:"right-item",target:"_blank",href:"http://google.com","hide-on-mobile":"true","show-label":"false",icon:"image-16"}),o("ifx-navbar-item",{"dot-indicator":"false",slot:"right-item","hide-on-mobile":"true","show-label":"false",icon:"image-16"}),o("ifx-navbar-profile",{"user-name":"",slot:"right-item","image-url":"","show-label":"true",href:"",target:"_self",alt:"profile image"})],-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(ad))])])]))}}),cd={"application-name":"Application Name",collapsible:"false",collapsed:"false","show-header":"true","show-footer":"true","initial-collapse":"true","terms-of-use":"https://yourwebsite.com/terms",imprint:"https://yourwebsite.com/imprint","privacy-policy":"https://yourwebsite.com/privacy-policy","copyright-text":"© 1999 - 2025 Infineon Technologies AG"},ud=`<script setup lang="ts">
const handleSidebarNavigationItem = (event: CustomEvent) => {
  console.log('ifxSidebarNavigationItem:', event.detail);
  // Add your handler logic here
};

const handleSidebarActionItem = (event: CustomEvent) => {
  console.log('ifxSidebarActionItem:', event.detail);
  // Add your handler logic here
};

const handleSidebarMenu = (event: CustomEvent) => {
  console.log('ifxSidebarMenu:', event.detail);
  // Add your handler logic here
};

const handleSidebarCollapseChange = (event: CustomEvent) => {
  console.log('ifxSidebarCollapseChange:', event.detail);
  // Add your handler logic here
};
</' + 'script>

<template>
  <div>
    <ifx-sidebar
      application-name="Application Name"
      collapsible="false"
      collapsed="false"
      show-header="true"
      show-footer="true"
      initial-collapse="true"
      terms-of-use="https://yourwebsite.com/terms"
      imprint="https://yourwebsite.com/imprint"
      privacy-policy="https://yourwebsite.com/privacy-policy"
      copyright-text="© 1999 - 2025 Infineon Technologies AG">
      <ifx-sidebar-title
        @ifxSidebarNavigationItem="handleSidebarNavigationItem"
        @ifxSidebarActionItem="handleSidebarActionItem"
        @ifxSidebarMenu="handleSidebarMenu"
        @ifxSidebarCollapseChange="handleSidebarCollapseChange">
        Menu Items
      </ifx-sidebar-title>
      <ifx-sidebar-item
        href="https://google.com"
        target="_blank"
        icon="image-16"
        @ifxSidebarNavigationItem="handleSidebarNavigationItem"
        @ifxSidebarActionItem="handleSidebarActionItem"
        @ifxSidebarMenu="handleSidebarMenu"
        @ifxSidebarCollapseChange="handleSidebarCollapseChange">
        Menu Item
      </ifx-sidebar-item>
      <ifx-sidebar-item
        href="https://google.com"
        target="_blank"
        icon="image-16">
        Menu Item
      </ifx-sidebar-item>
      <ifx-sidebar-item
        href="https://google.com"
        target="_blank"
        icon="image-16">
        Menu Item
      </ifx-sidebar-item>
      <ifx-sidebar-item
        href="https://google.com"
        target="_blank"
        icon="image-16">
        Menu Item
      </ifx-sidebar-item>
      <ifx-sidebar-item>
        <ifx-sidebar-item
          href="https://google.com"
          target="_blank"
          icon="image-16">
          Menu Item
        </ifx-sidebar-item>
        <ifx-sidebar-item icon="image-16">
          <ifx-sidebar-item>
            Sub menu item
          </ifx-sidebar-item>
          <ifx-sidebar-item active="true">
            Sub menu item
          </ifx-sidebar-item>
          <ifx-sidebar-item>
            Sub menu item
          </ifx-sidebar-item>
        </ifx-sidebar-item>
        <ifx-sidebar-item
          href="https://google.com"
          target="_blank">
          Menu Item
        </ifx-sidebar-item>
        <ifx-sidebar-item
          href="https://google.com"
          target="_blank">
          Menu Item
        </ifx-sidebar-item>
      </ifx-sidebar-item>
      <ifx-sidebar-title>
        Items group
      </ifx-sidebar-title>
      <ifx-sidebar-item
        href="https://google.com"
        target="_self"
        icon="image-16"
        number-indicator=""
        isactionitem="false"
        active="false">
        Item 1
      </ifx-sidebar-item>
      <ifx-sidebar-item
        href="https://google.com"
        target="_blank"
        icon="image-16">
        Item 2
      </ifx-sidebar-item>
    </ifx-sidebar>
  </div>
</' + 'template>`,dd=Y({__name:"IfxSidebarExample",setup(e){const t=s=>{console.log("ifxSidebarNavigationItem:",s.detail)},i=s=>{console.log("ifxSidebarActionItem:",s.detail)},n=s=>{console.log("ifxSidebarMenu:",s.detail)},r=s=>{console.log("ifxSidebarCollapseChange:",s.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(s,l)=>(Q(),ee("div",null,[o("ifx-sidebar",cd,[o("ifx-sidebar-title",{"on:ifxSidebarNavigationItem":t,"on:ifxSidebarActionItem":i,"on:ifxSidebarMenu":n,"on:ifxSidebarCollapseChange":r}," Menu Items ",32),o("ifx-sidebar-item",{href:"https://google.com",target:"_blank",icon:"image-16","on:ifxSidebarNavigationItem":t,"on:ifxSidebarActionItem":i,"on:ifxSidebarMenu":n,"on:ifxSidebarCollapseChange":r}," Menu Item ",32),l[0]||(l[0]=o("ifx-sidebar-item",{href:"https://google.com",target:"_blank",icon:"image-16"}," Menu Item ",-1)),l[1]||(l[1]=o("ifx-sidebar-item",{href:"https://google.com",target:"_blank",icon:"image-16"}," Menu Item ",-1)),l[2]||(l[2]=o("ifx-sidebar-item",{href:"https://google.com",target:"_blank",icon:"image-16"}," Menu Item ",-1)),l[3]||(l[3]=o("ifx-sidebar-item",null,[o("ifx-sidebar-item",{href:"https://google.com",target:"_blank",icon:"image-16"}," Menu Item "),o("ifx-sidebar-item",{icon:"image-16"},[o("ifx-sidebar-item",null," Sub menu item "),o("ifx-sidebar-item",{active:"true"}," Sub menu item "),o("ifx-sidebar-item",null," Sub menu item ")]),o("ifx-sidebar-item",{href:"https://google.com",target:"_blank"}," Menu Item "),o("ifx-sidebar-item",{href:"https://google.com",target:"_blank"}," Menu Item ")],-1)),l[4]||(l[4]=o("ifx-sidebar-title",null," Items group ",-1)),l[5]||(l[5]=o("ifx-sidebar-item",{href:"https://google.com",target:"_self",icon:"image-16","number-indicator":"",isactionitem:"false",active:"false"}," Item 1 ",-1)),l[6]||(l[6]=o("ifx-sidebar-item",{href:"https://google.com",target:"_blank",icon:"image-16"}," Item 2 ",-1))]),o("details",{class:"code-details"},[l[7]||(l[7]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(ud))])])]))}}),fd=`<script setup lang="ts">
</' + 'script>

<template>
  <div>
    <ifx-notification
      icon="c-check-16"
      variant="success"
      link-text="Link"
      link-href="https://www.example.com"
      link-target="_blank">
      Sample Notification
    </ifx-notification>
  </div>
</' + 'template>`,pd=Y({__name:"IfxNotificationExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-notification",{icon:"c-check-16",variant:"success","link-text":"Link","link-href":"https://www.example.com","link-target":"_blank"}," Sample Notification ",-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(fd))])])]))}}),md=`<script setup lang="ts">
const handlePageChange = (event: CustomEvent) => {
  console.log('ifxPageChange:', event.detail);
  // Add your handler logic here
};

const handleItemsPerPageChange = (event: CustomEvent) => {
  console.log('ifxItemsPerPageChange:', event.detail);
  // Add your handler logic here
};
</' + 'script>

<template>
  <div>
    <ifx-pagination
      total="50"
      current-page="1"
      show-items-per-page="true"
      items-per-page='[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]'
      @ifxPageChange="handlePageChange"
      @ifxItemsPerPageChange="handleItemsPerPageChange" />
  </div>
</' + 'template>`,hd=Y({__name:"IfxPaginationExample",setup(e){const t=n=>{console.log("ifxPageChange:",n.detail)},i=n=>{console.log("ifxItemsPerPageChange:",n.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(n,r)=>(Q(),ee("div",null,[o("ifx-pagination",{total:"50","current-page":"1","show-items-per-page":"true","items-per-page":'[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]',"on:ifxPageChange":t,"on:ifxItemsPerPageChange":i},null,32),o("details",{class:"code-details"},[r[0]||(r[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(md))])])]))}}),gd=`<script setup lang="ts">
</' + 'script>

<template>
  <div>
    <ifx-progress-bar
      value="50"
      size="m"
      show-label="false" />
  </div>
</' + 'template>`,xd=Y({__name:"IfxProgressBarExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-progress-bar",{value:"50",size:"m","show-label":"false"},null,-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(gd))])])]))}}),bd=`<script setup lang="ts">
const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event.detail);
  // Add your handler logic here
};

const handleError = (event: CustomEvent) => {
  console.log('ifxError:', event.detail);
  // Add your handler logic here
};
</' + 'script>

<template>
  <div>
    <ifx-radio-button
      size="s"
      name="radio-button"
      value="radio"
      @ifxChange="handleChange"
      @ifxError="handleError">
      Text
    </ifx-radio-button>
  </div>
</' + 'template>`,vd=Y({__name:"IfxRadioButtonExample",setup(e){const t=n=>{console.log("ifxChange:",n.detail)},i=n=>{console.log("ifxError:",n.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(n,r)=>(Q(),ee("div",null,[o("ifx-radio-button",{size:"s",name:"radio-button",value:"radio","on:ifxChange":t,"on:ifxError":i}," Text ",32),o("details",{class:"code-details"},[r[0]||(r[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(bd))])])]))}}),_d=`<script setup lang="ts">
const handleSetGroupError = (event: CustomEvent) => {
  console.log('setGroupError:', event.detail);
  // Add your handler logic here
};
</' + 'script>

<template>
  <div>
    <ifx-radio-button-group
      alignment="vertical"
      show-group-label="false"
      group-label-text="Group Label"
      show-caption="false"
      caption-text="Caption text, description, error notification"
      show-caption-icon="false"
      required="false">
      <ifx-radio-button
        value="0"
        disabled="false"
        checked="false"
        error="false"
        size="m">
        Option 0
      </ifx-radio-button>
      <ifx-radio-button
        value="1"
        size="m">
        Option 1
      </ifx-radio-button>
      <ifx-radio-button
        value="2"
        size="m">
        Option 2
      </ifx-radio-button>
    </ifx-radio-button-group>
  </div>
</' + 'template>`,$d=Y({__name:"IfxRadioButtonGroupExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-radio-button-group",{alignment:"vertical","show-group-label":"false","group-label-text":"Group Label","show-caption":"false","caption-text":"Caption text, description, error notification","show-caption-icon":"false",required:"false"},[o("ifx-radio-button",{value:"0",disabled:"false",checked:"false",error:"false",size:"m"}," Option 0 "),o("ifx-radio-button",{value:"1",size:"m"}," Option 1 "),o("ifx-radio-button",{value:"2",size:"m"}," Option 2 ")],-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(_d))])])]))}}),yd=`<script setup lang="ts">
const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event.detail);
  // Add your handler logic here
};

const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event.detail);
  // Add your handler logic here
};
</' + 'script>

<template>
  <div>
    <ifx-search-bar
      is-open="true"
      disabled="false"
      value=""
      autocomplete="on"
      @ifxInput="handleInput"
      @ifxOpen="handleOpen" />
  </div>
</' + 'template>`,wd=Y({__name:"IfxSearchBarExample",setup(e){const t=n=>{console.log("ifxInput:",n.detail)},i=n=>{console.log("ifxOpen:",n.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(n,r)=>(Q(),ee("div",null,[o("ifx-search-bar",{"is-open":"true",disabled:"false",value:"",autocomplete:"on","on:ifxInput":t,"on:ifxOpen":i},null,32),o("details",{class:"code-details"},[r[0]||(r[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(yd))])])]))}}),Sd=`<script setup lang="ts">
const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event.detail);
  // Add your handler logic here
};

const handleSuggestionRequested = (event: CustomEvent) => {
  console.log('ifxSuggestionRequested:', event.detail);
  // Add your handler logic here
};

const handleSuggestionSelected = (event: CustomEvent) => {
  console.log('ifxSuggestionSelected:', event.detail);
  // Add your handler logic here
};

const handleFocus = (event: CustomEvent) => {
  console.log('ifxFocus:', event.detail);
  // Add your handler logic here
};

const handleBlur = (event: CustomEvent) => {
  console.log('ifxBlur:', event.detail);
  // Add your handler logic here
};
</' + 'script>

<template>
  <div>
    <ifx-search-field
      size="m"
      disabled="false"
      show-delete-icon="true"
      show-suggestions="false"
      enable-history="true"
      max-suggestions="10"
      max-history-items="5"
      history-key="ifx-search-history"
      history-header-text="Recent Searches"
      value=""
      autocomplete="on"
      placeholder="Search..."
      aria-label="Search field"
      delete-icon-aria-label="Clear search"
      history-delete-aria-label="Remove from history"
      dropdown-aria-label="Search suggestions and history"
      suggestion-aria-label="Search suggestion"
      history-item-aria-label="Search history item"
      @ifxInput="handleInput"
      @ifxSuggestionRequested="handleSuggestionRequested"
      @ifxSuggestionSelected="handleSuggestionSelected"
      @ifxFocus="handleFocus"
      @ifxBlur="handleBlur" />
  </div>
</' + 'template>`,Id=Y({__name:"IfxSearchFieldExample",setup(e){const t=l=>{console.log("ifxInput:",l.detail)},i=l=>{console.log("ifxSuggestionRequested:",l.detail)},n=l=>{console.log("ifxSuggestionSelected:",l.detail)},r=l=>{console.log("ifxFocus:",l.detail)},s=l=>{console.log("ifxBlur:",l.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(l,a)=>(Q(),ee("div",null,[o("ifx-search-field",{size:"m",disabled:"false","show-delete-icon":"true","show-suggestions":"false","enable-history":"true","max-suggestions":"10","max-history-items":"5","history-key":"ifx-search-history","history-header-text":"Recent Searches",value:"",autocomplete:"on",placeholder:"Search...","aria-label":"Search field","delete-icon-aria-label":"Clear search","history-delete-aria-label":"Remove from history","dropdown-aria-label":"Search suggestions and history","suggestion-aria-label":"Search suggestion","history-item-aria-label":"Search history item","on:ifxInput":t,"on:ifxSuggestionRequested":i,"on:ifxSuggestionSelected":n,"on:ifxFocus":r,"on:ifxBlur":s},null,32),o("details",{class:"code-details"},[a[0]||(a[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Sd))])])]))}}),Cd=`<script setup lang="ts">
</' + 'script>

<template>
  <div>
    <ifx-segmented-control
      caption="Caption text to describe the controls"
      label="Group Label"
      size="regular"
      error="false"
      required="false">
      <ifx-segment
        value="Value1"
        icon="star-16" />
      <ifx-segment
        value="Value2"
        icon="star-16" />
      <ifx-segment
        value="Value3"
        icon="star-16" />
      <ifx-segment
        value="Value4"
        icon="star-16" />
      <ifx-segment
        value="Value5"
        icon="star-16" />
    </ifx-segmented-control>
  </div>
</' + 'template>`,Ad=Y({__name:"IfxSegmentedControlExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-segmented-control",{caption:"Caption text to describe the controls",label:"Group Label",size:"regular",error:"false",required:"false"},[o("ifx-segment",{value:"Value1",icon:"star-16"}),o("ifx-segment",{value:"Value2",icon:"star-16"}),o("ifx-segment",{value:"Value3",icon:"star-16"}),o("ifx-segment",{value:"Value4",icon:"star-16"}),o("ifx-segment",{value:"Value5",icon:"star-16"})],-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Cd))])])]))}}),Ed=`<script setup lang="ts">
const handleSelect = (event: CustomEvent) => {
  console.log('ifxSelect:', event.detail);
  // Add your handler logic here
};

const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event.detail);
  // Add your handler logic here
};
</' + 'script>

<template>
  <div>
    <ifx-select
      size="m"
      placeholder="true"
      show-clear-button="true"
      show-search="true"
      search-placeholder-value="Search..."
      disabled="false"
      required="true"
      error="false"
      label=""
      caption=""
      placeholder-value="Placeholder"
      options='[{"value":"a","label":"option a","selected":false},{"value":"b","label":"option b","selected":false},{"value":"c","label":"option c","selected":false}]'
      @ifxSelect="handleSelect"
      @ifxInput="handleInput" />
  </div>
</' + 'template>`,kd=Y({__name:"IfxSelectExample",setup(e){const t=n=>{console.log("ifxSelect:",n.detail)},i=n=>{console.log("ifxInput:",n.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(n,r)=>(Q(),ee("div",null,[o("ifx-select",{size:"m",placeholder:"true","show-clear-button":"true","show-search":"true","search-placeholder-value":"Search...",disabled:"false",required:"true",error:"false",label:"",caption:"","placeholder-value":"Placeholder",options:'[{"value":"a","label":"option a","selected":false},{"value":"b","label":"option b","selected":false},{"value":"c","label":"option c","selected":false}]',"on:ifxSelect":t,"on:ifxInput":i},null,32),o("details",{class:"code-details"},[r[0]||(r[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Ed))])])]))}}),Ld=`<script setup lang="ts">
</' + 'script>

<template>
  <div>
    <ifx-spinner
      aria-label=""
      variant="default"
      size="m"
      inverted="false" />
  </div>
</' + 'template>`,Td=Y({__name:"IfxSpinnerExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-spinner",{"aria-label":"",variant:"default",size:"m",inverted:"false"},null,-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Ld))])])]))}}),Fd=`<script setup lang="ts">
</' + 'script>

<template>
  <div>
    <ifx-status
      label="text"
      color="orange-500"
      border="true" />
  </div>
</' + 'template>`,Pd=Y({__name:"IfxStatusExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-status",{label:"text",color:"orange-500",border:"true"},null,-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Fd))])])]))}}),Od=`<script setup lang="ts">
const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event.detail);
  // Add your handler logic here
};
</' + 'script>

<template>
  <div>
    <ifx-stepper
      active-step="2"
      aria-label=""
      aria-current=""
      show-step-number="false"
      variant="default">
      <ifx-step>
        Step Label 1
      </ifx-step>
      <ifx-step>
        Step Label 2
      </ifx-step>
      <ifx-step>
        Step Label 3
      </ifx-step>
      <ifx-step>
        Step Label 4
      </ifx-step>
      <ifx-step>
        Step Label 5
      </ifx-step>
    </ifx-stepper>
  </div>
</' + 'template>`,Rd=Y({__name:"IfxStepperExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-stepper",{"active-step":"2","aria-label":"","aria-current":"","show-step-number":"false",variant:"default"},[o("ifx-step",null," Step Label 1 "),o("ifx-step",null," Step Label 2 "),o("ifx-step",null," Step Label 3 "),o("ifx-step",null," Step Label 4 "),o("ifx-step",null," Step Label 5 ")],-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Od))])])]))}}),Dd=`<script setup lang="ts">
const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event.detail);
  // Add your handler logic here
};
</' + 'script>

<template>
  <div>
    <ifx-stepper
      active-step="2"
      aria-label=""
      aria-current=""
      indicator-position="left"
      variant="compact">
      <ifx-step>
        Step Label 1
      </ifx-step>
      <ifx-step>
        Step Label 2
      </ifx-step>
      <ifx-step>
        Step Label 3
      </ifx-step>
      <ifx-step>
        Step Label 4
      </ifx-step>
      <ifx-step>
        Step Label 5
      </ifx-step>
    </ifx-stepper>
  </div>
</' + 'template>`,Md=Y({__name:"IfxStepperCompactExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-stepper",{"active-step":"2","aria-label":"","aria-current":"","indicator-position":"left",variant:"compact"},[o("ifx-step",null," Step Label 1 "),o("ifx-step",null," Step Label 2 "),o("ifx-step",null," Step Label 3 "),o("ifx-step",null," Step Label 4 "),o("ifx-step",null," Step Label 5 ")],-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Dd))])])]))}}),zd=`<script setup lang="ts">
const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event.detail);
  // Add your handler logic here
};
</' + 'script>

<template>
  <div>
    <ifx-switch
      checked="false"
      name="switch"
      value="switch"
      disabled="false"
      @ifxChange="handleChange">
      Switch
    </ifx-switch>
  </div>
</' + 'template>`,Hd=Y({__name:"IfxSwitchExample",setup(e){const t=i=>{console.log("ifxChange:",i.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(i,n)=>(Q(),ee("div",null,[o("ifx-switch",{checked:"false",name:"switch",value:"switch",disabled:"false","on:ifxChange":t}," Switch ",32),o("details",{class:"code-details"},[n[0]||(n[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(zd))])])]))}}),qd=`<script setup lang="ts">
</' + 'script>

<template>
  <div>
    <ifx-basic-table
      cols='[{"headerName":"Make","field":"make","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Model","field":"model","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Age","field":"age"}]'
      rows='[{"make":"Toyota","model":"Celica","price":35000,"age":10},{"make":"Ford","model":"Mondeo","price":32000,"age":12},{"make":"Porsche","model":"Boxster","price":72000},{"make":"Toyota","model":"Celica","price":37000,"age":8},{"make":"Ford","model":"Mondeo","price":34000,"age":10},{"make":"Porsche","model":"Boxster","price":72000},{"make":"Toyota","model":"Celica","price":38000,"age":7},{"make":"Ford","model":"Mondeo","price":36000,"age":8},{"make":"Porsche","model":"Boxster","price":72000},{"make":"Toyota","model":"Celica","price":39000,"age":2},{"make":"Ford","model":"Mondeo","price":38000,"age":6},{"make":"Porsche","model":"Boxster","price":72000}]'
      table-height="auto"
      row-height="default"
      variant="default" />
  </div>
</' + 'template>`,Bd=Y({__name:"IfxBasicTableExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-basic-table",{cols:'[{"headerName":"Make","field":"make","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Model","field":"model","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Age","field":"age"}]',rows:'[{"make":"Toyota","model":"Celica","price":35000,"age":10},{"make":"Ford","model":"Mondeo","price":32000,"age":12},{"make":"Porsche","model":"Boxster","price":72000},{"make":"Toyota","model":"Celica","price":37000,"age":8},{"make":"Ford","model":"Mondeo","price":34000,"age":10},{"make":"Porsche","model":"Boxster","price":72000},{"make":"Toyota","model":"Celica","price":38000,"age":7},{"make":"Ford","model":"Mondeo","price":36000,"age":8},{"make":"Porsche","model":"Boxster","price":72000},{"make":"Toyota","model":"Celica","price":39000,"age":2},{"make":"Ford","model":"Mondeo","price":38000,"age":6},{"make":"Porsche","model":"Boxster","price":72000}]',"table-height":"auto","row-height":"default",variant:"default"},null,-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(qd))])])]))}}),Nd=`<script setup lang="ts">
</' + 'script>

<template>
  <div>
    <ifx-table
      row-height="default"
      cols='[{"headerName":"Make","field":"make","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Model","field":"model","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Age","field":"age"}]'
      rows='[{"make":"Toyota","model":"Celica","price":35000,"age":10},{"make":"Ford","model":"Mondeo","price":32000,"age":12},{"make":"Porsche","model":"Boxster","price":72000},{"make":"Bmw","model":"x","price":72000},{"make":"Mercedes","model":"y","price":72000},{"make":"Ferrari","model":"z","price":72000},{"make":"Chrysler","model":"a","price":72000},{"make":"Range rover","model":"b","price":72000},{"make":"Tesla","model":"x","price":72000},{"make":"Audi","model":"3","price":72000},{"make":"Landrover","model":"x","price":72000}]'
      table-height="auto"
      pagination="true"
      server-side-pagination="false"
      pagination-items-per-page='[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]'
      filter-orientation="none"
      variant="default" />
  </div>
</' + 'template>`,jd=Y({__name:"IfxTablePaginationExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-table",{"row-height":"default",cols:'[{"headerName":"Make","field":"make","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Model","field":"model","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Age","field":"age"}]',rows:'[{"make":"Toyota","model":"Celica","price":35000,"age":10},{"make":"Ford","model":"Mondeo","price":32000,"age":12},{"make":"Porsche","model":"Boxster","price":72000},{"make":"Bmw","model":"x","price":72000},{"make":"Mercedes","model":"y","price":72000},{"make":"Ferrari","model":"z","price":72000},{"make":"Chrysler","model":"a","price":72000},{"make":"Range rover","model":"b","price":72000},{"make":"Tesla","model":"x","price":72000},{"make":"Audi","model":"3","price":72000},{"make":"Landrover","model":"x","price":72000}]',"table-height":"auto",pagination:"true","server-side-pagination":"false","pagination-items-per-page":'[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]',"filter-orientation":"none",variant:"default"},null,-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Nd))])])]))}}),Vd=`<script setup lang="ts">
const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event.detail);
  // Add your handler logic here
};
</' + 'script>

<template>
  <div>
    <ifx-tabs
      orientation="horizontal"
      active-tab-index="0"
      full-width="false">
      <ifx-tab
        header="Tab 1"
        icon=""
        icon-position="left">
        Content for Tab #1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-tab>
      <ifx-tab
        header="Tab 2"
        disabled="false"
        icon=""
        icon-position="left">
        Content for Tab #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-tab>
      <ifx-tab
        header="Tab 3"
        icon=""
        icon-position="left">
        Content for Tab #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-tab>
    </ifx-tabs>
  </div>
</' + 'template>`,Ud=Y({__name:"IfxTabsExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-tabs",{orientation:"horizontal","active-tab-index":"0","full-width":"false"},[o("ifx-tab",{header:"Tab 1",icon:"","icon-position":"left"}," Content for Tab #1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. "),o("ifx-tab",{header:"Tab 2",disabled:"false",icon:"","icon-position":"left"}," Content for Tab #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. "),o("ifx-tab",{header:"Tab 3",icon:"","icon-position":"left"}," Content for Tab #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. ")],-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Vd))])])]))}}),Wd=`<script setup lang="ts">
const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event.detail);
  // Add your handler logic here
};
</' + 'script>

<template>
  <div>
    <ifx-text-field
      error="false"
      disabled="false"
      size="m"
      icon=""
      success="false"
      placeholder="Placeholder"
      read-only="false"
      caption="Caption"
      label="Label"
      required="true"
      name="text-field"
      show-delete-icon="false"
      value=""
      autocomplete="on"
      type="text"
      internal-id="text-field"
      aria-label="text field for user input"
      @ifxInput="handleInput" />
  </div>
</' + 'template>`,Gd=Y({__name:"IfxTextFieldExample",setup(e){const t=i=>{console.log("ifxInput:",i.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(i,n)=>(Q(),ee("div",null,[o("ifx-text-field",{error:"false",disabled:"false",size:"m",icon:"",success:"false",placeholder:"Placeholder","read-only":"false",caption:"Caption",label:"Label",required:"true",name:"text-field","show-delete-icon":"false",value:"",autocomplete:"on",type:"text","internal-id":"text-field","aria-label":"text field for user input","on:ifxInput":t},null,32),o("details",{class:"code-details"},[n[0]||(n[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Wd))])])]))}}),Kd=`<script setup lang="ts">
</' + 'script>

<template>
  <div>
    <ifx-textarea
      caption="Caption text, description, error notification"
      cols="43"
      disabled="false"
      error="false"
      label="Label Text"
      name="textarea"
      placeholder="Placeholder"
      required="true"
      read-only="false"
      resize="both"
      rows="5"
      value=""
      wrap="soft"
      full-width="false" />
  </div>
</' + 'template>`,Yd=Y({__name:"IfxTextareaExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-textarea",{caption:"Caption text, description, error notification",cols:"43",disabled:"false",error:"false",label:"Label Text",name:"textarea",placeholder:"Placeholder",required:"true","read-only":"false",resize:"both",rows:"5",value:"",wrap:"soft","full-width":"false"},null,-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Kd))])])]))}}),Zd=`<script setup lang="ts">
</' + 'script>

<template>
  <div>
    <ifx-tooltip
      text="Hi, I'm a tooltip"
      variant="compact"
      position="auto"
      icon="c-info-16"
      aria-label="Tooltip with important information">
      I'm the tooltip reference element - Please hover me
    </ifx-tooltip>
  </div>
</' + 'template>`,Jd=Y({__name:"IfxTooltipExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-tooltip",{text:"Hi, I'm a tooltip",variant:"compact",position:"auto",icon:"c-info-16","aria-label":"Tooltip with important information"}," I'm the tooltip reference element - Please hover me ",-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Zd))])])]))}}),Xd={class:"code-details"},Qd=["innerHTML"],ef=Y({__name:"ModalExample",setup(e){const t=Xs(null),i=()=>{t.value&&(t.value.opened=!0)},n=l=>{console.log("ifxOpen:",l.detail)},r=l=>{console.log("ifxClose:",l.detail)},s=K.highlight(`<template>
  <div>
    <ifx-modal
      ref="modalRef"
      caption="Modal Title"
      caption-aria-label="Additional information for caption"
      close-button-aria-label="Close modal"
      variant="default"
      :close-on-overlay-click="false"
      :show-close-button="true"
      size="s"
      @ifxOpen="handleOpen"
      @ifxClose="handleClose">
      <div slot="content">
        <span>Modal content</span>
      </div>
      <div slot="buttons">
        <ifx-button variant="secondary">Cancel</ifx-button>
        <ifx-button>OK</ifx-button>
      </div>
    </ifx-modal>
    <ifx-button @click="openModal">Open Modal</ifx-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modalRef = ref<HTMLElement | null>(null);

const openModal = () => {
  if (modalRef.value) {
    (modalRef.value as any).opened = true;
  }
};

const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event.detail);
};

const handleClose = (event: CustomEvent) => {
  console.log('ifxClose:', event.detail);
};
<\/script>`,K.languages.markup,"markup");return(l,a)=>(Q(),ee("div",null,[o("ifx-modal",{ref_key:"modalRef",ref:t,caption:"Modal Title","caption-aria-label":"Additional information for caption","close-button-aria-label":"Close modal",variant:"default","close-on-overlay-click":!1,"show-close-button":!0,size:"s","on:ifxOpen":n,"on:ifxClose":r},[...a[0]||(a[0]=[o("div",{slot:"content"},[o("span",null,"Modal content")],-1),o("div",{slot:"buttons"},[o("ifx-button",{variant:"secondary"},"Cancel"),o("ifx-button",null,"OK")],-1)])],544),o("ifx-button",{onClick:i},"Open Modal"),o("details",Xd,[a[1]||(a[1]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup",innerHTML:Ci(s)},null,8,Qd)])])]))}}),tf={class:"version-info"},nf={class:"components"},rf={id:"ifx-accordion-example",class:"component-example"},sf={class:"demo"},lf={id:"ifx-action-list-example",class:"component-example"},af={class:"demo"},of={id:"ifx-alert-example",class:"component-example"},cf={class:"demo"},uf={id:"ifx-button-example",class:"component-example"},df={class:"demo"},ff={id:"ifx-card-example",class:"component-example"},pf={class:"demo"},mf={id:"ifx-checkbox-example",class:"component-example"},hf={class:"demo"},gf={id:"ifx-checkbox-group-example",class:"component-example"},xf={class:"demo"},bf={id:"ifx-chip-example",class:"component-example"},vf={class:"demo"},_f={id:"ifx-content-switcher-example",class:"component-example"},$f={class:"demo"},yf={id:"ifx-date-picker-example",class:"component-example"},wf={class:"demo"},Sf={id:"ifx-dropdown-example",class:"component-example"},If={class:"demo"},Cf={id:"ifx-footer-example-medium",class:"component-example"},Af={class:"demo"},Ef={id:"ifx-icon-button-example",class:"component-example"},kf={class:"demo"},Lf={id:"ifx-indicator-example",class:"component-example"},Tf={class:"demo"},Ff={id:"ifx-link-example",class:"component-example"},Pf={class:"demo"},Of={id:"ifx-navbar-example",class:"component-example"},Rf={class:"demo"},Df={id:"ifx-sidebar-example",class:"component-example"},Mf={class:"demo"},zf={id:"ifx-notification-example",class:"component-example"},Hf={class:"demo"},qf={id:"ifx-pagination-example",class:"component-example"},Bf={class:"demo"},Nf={id:"ifx-progress-bar-example",class:"component-example"},jf={class:"demo"},Vf={id:"ifx-radio-button-example",class:"component-example"},Uf={class:"demo"},Wf={id:"ifx-radio-button-group-example",class:"component-example"},Gf={class:"demo"},Kf={id:"ifx-search-bar-example",class:"component-example"},Yf={class:"demo"},Zf={id:"ifx-search-field-example",class:"component-example"},Jf={class:"demo"},Xf={id:"ifx-segmented-control-example",class:"component-example"},Qf={class:"demo"},ep={id:"ifx-select-example",class:"component-example"},tp={class:"demo"},ip={id:"ifx-spinner-example",class:"component-example"},np={class:"demo"},rp={id:"ifx-status-example",class:"component-example"},sp={class:"demo"},lp={id:"ifx-stepper-example",class:"component-example"},ap={class:"demo"},op={id:"ifx-stepper-example-compact",class:"component-example"},cp={class:"demo"},up={id:"ifx-switch-example",class:"component-example"},dp={class:"demo"},fp={id:"ifx-basic-table-example",class:"component-example"},pp={class:"demo"},mp={id:"ifx-table-example-pagination",class:"component-example"},hp={class:"demo"},gp={id:"ifx-tabs-example",class:"component-example"},xp={class:"demo"},bp={id:"ifx-text-field-example",class:"component-example"},vp={class:"demo"},_p={id:"ifx-textarea-example",class:"component-example"},$p={class:"demo"},yp={id:"ifx-tooltip-example",class:"component-example"},wp={class:"demo"},Sp={id:"modal-example",class:"component-example"},Ip={class:"demo"},Cp=Y({__name:"App",setup(e){const t=Su.dependencies["@infineon/infineon-design-system-vue"];return Z(()=>{X(()=>{K.highlightAll()})}),(i,n)=>(Q(),ee(Ve,null,[n[38]||(n[38]=o("ifx-navbar",{"show-logo-and-appname":"true","application-name":"Infineon Design System - Vue Example",fixed:!1},null,-1)),o("div",tf,"@infineon/infineon-design-system-vue@"+J(Ci(t).includes("workspace")?"workspace":Ci(Iu)),1),o("div",nf,[o("section",rf,[n[0]||(n[0]=o("h2",null,"Accordion",-1)),o("div",sf,[j(ku)])]),o("section",lf,[n[1]||(n[1]=o("h2",null,"Action List",-1)),o("div",af,[j(Fu)])]),o("section",of,[n[2]||(n[2]=o("h2",null,"Alert",-1)),o("div",cf,[j(Ou)])]),o("section",uf,[n[3]||(n[3]=o("h2",null,"Button",-1)),o("div",df,[j(Du)])]),o("section",ff,[n[4]||(n[4]=o("h2",null,"Card",-1)),o("div",pf,[j(zu)])]),o("section",mf,[n[5]||(n[5]=o("h2",null,"Checkbox",-1)),o("div",hf,[j(qu)])]),o("section",gf,[n[6]||(n[6]=o("h2",null,"Checkbox Group",-1)),o("div",xf,[j(Nu)])]),o("section",bf,[n[7]||(n[7]=o("h2",null,"Chip",-1)),o("div",vf,[j(Uu)])]),o("section",_f,[n[8]||(n[8]=o("h2",null,"Content Switcher",-1)),o("div",$f,[j(Gu)])]),o("section",yf,[n[9]||(n[9]=o("h2",null,"Date Picker",-1)),o("div",wf,[j(Yu)])]),o("section",Sf,[n[10]||(n[10]=o("h2",null,"Dropdown",-1)),o("div",If,[j(Xu)])]),o("section",Cf,[n[11]||(n[11]=o("h2",null,"Footer - Medium",-1)),o("div",Af,[j(ed)])]),o("section",Ef,[n[12]||(n[12]=o("h2",null,"Icon Button",-1)),o("div",kf,[j(id)])]),o("section",Lf,[n[13]||(n[13]=o("h2",null,"Indicator",-1)),o("div",Tf,[j(rd)])]),o("section",Ff,[n[14]||(n[14]=o("h2",null,"Link",-1)),o("div",Pf,[j(ld)])]),o("section",Of,[n[15]||(n[15]=o("h2",null,"Navigation/Navbar",-1)),o("div",Rf,[j(od)])]),o("section",Df,[n[16]||(n[16]=o("h2",null,"Navigation/Sidebar",-1)),o("div",Mf,[j(dd)])]),o("section",zf,[n[17]||(n[17]=o("h2",null,"Notification",-1)),o("div",Hf,[j(pd)])]),o("section",qf,[n[18]||(n[18]=o("h2",null,"Pagination",-1)),o("div",Bf,[j(hd)])]),o("section",Nf,[n[19]||(n[19]=o("h2",null,"Progress Bar",-1)),o("div",jf,[j(xd)])]),o("section",Vf,[n[20]||(n[20]=o("h2",null,"Radio Button",-1)),o("div",Uf,[j(vd)])]),o("section",Wf,[n[21]||(n[21]=o("h2",null,"Radio Button Group",-1)),o("div",Gf,[j($d)])]),o("section",Kf,[n[22]||(n[22]=o("h2",null,"Search Bar",-1)),o("div",Yf,[j(wd)])]),o("section",Zf,[n[23]||(n[23]=o("h2",null,"Search Field",-1)),o("div",Jf,[j(Id)])]),o("section",Xf,[n[24]||(n[24]=o("h2",null,"Segmented Control",-1)),o("div",Qf,[j(Ad)])]),o("section",ep,[n[25]||(n[25]=o("h2",null,"Select/Single Select",-1)),o("div",tp,[j(kd)])]),o("section",ip,[n[26]||(n[26]=o("h2",null,"Spinner",-1)),o("div",np,[j(Td)])]),o("section",rp,[n[27]||(n[27]=o("h2",null,"Status",-1)),o("div",sp,[j(Pd)])]),o("section",lp,[n[28]||(n[28]=o("h2",null,"Stepper",-1)),o("div",ap,[j(Rd)])]),o("section",op,[n[29]||(n[29]=o("h2",null,"Stepper - Compact",-1)),o("div",cp,[j(Md)])]),o("section",up,[n[30]||(n[30]=o("h2",null,"Switch",-1)),o("div",dp,[j(Hd)])]),o("section",fp,[n[31]||(n[31]=o("h2",null,"Table (basic)",-1)),o("div",pp,[j(Bd)])]),o("section",mp,[n[32]||(n[32]=o("h2",null,"Table (advanced) - Pagination",-1)),o("div",hp,[j(jd)])]),o("section",gp,[n[33]||(n[33]=o("h2",null,"Tabs",-1)),o("div",xp,[j(Ud)])]),o("section",bp,[n[34]||(n[34]=o("h2",null,"Text Field",-1)),o("div",vp,[j(Gd)])]),o("section",_p,[n[35]||(n[35]=o("h2",null,"Textarea",-1)),o("div",$p,[j(Yd)])]),o("section",yp,[n[36]||(n[36]=o("h2",null,"Tooltip",-1)),o("div",wp,[j(Jd)])]),o("section",Sp,[n[37]||(n[37]=o("h2",null,"Modal (Manual Example)",-1)),o("div",Ip,[j(ef)])])])],64))}});pu(Cp).use(Va).mount("#app");export{Lp as F,ba as H,R as _,Ep as a,kp as c,wa as g,xs as h,Ap as r};
