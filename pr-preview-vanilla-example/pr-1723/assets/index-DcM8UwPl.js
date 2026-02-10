(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const w="modulepreload",g=function(c,a){return new URL(c,a).href},p={},i=function(a,s,o){let e=Promise.resolve();if(s&&s.length>0){const n=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),d=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));e=Promise.allSettled(s.map(m=>{if(m=g(m,o),m in p)return;p[m]=!0;const l=m.endsWith(".css"),x=l?'[rel="stylesheet"]':"";if(!!o)for(let v=n.length-1;v>=0;v--){const f=n[v];if(f.href===m&&(!l||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${x}`))return;const _=document.createElement("link");if(_.rel=l?"stylesheet":w,l||(_.as="script"),_.crossOrigin="",_.href=m,d&&_.setAttribute("nonce",d),document.head.appendChild(_),l)return new Promise((v,f)=>{_.addEventListener("load",v),_.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${m}`)))})}))}function t(n){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=n,window.dispatchEvent(r),!r.defaultPrevented)throw n}return e.then(n=>{for(const r of n||[])r.status==="rejected"&&t(r.reason);return a().catch(t)})},E=(c,a,s)=>{const o=c[a];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((e,t)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+a+(a.split("/").length!==s?". Note that variables only represent file names one level deep.":""))))})},b=document.getElementById("page");async function u(c){const a=await E(Object.assign({"./pages/accordion.js":()=>i(()=>import("./accordion-D67YvWuK.js"),[],import.meta.url),"./pages/action-list.js":()=>i(()=>import("./action-list-D4McKQMe.js"),[],import.meta.url),"./pages/advanced-table.js":()=>i(()=>import("./advanced-table-BK7dlpAw.js"),[],import.meta.url),"./pages/alert.js":()=>i(()=>import("./alert-B9qjDXG9.js"),[],import.meta.url),"./pages/basic-table.js":()=>i(()=>import("./basic-table-W57ln4EP.js"),[],import.meta.url),"./pages/breadcrumb.js":()=>i(()=>import("./breadcrumb-Mx3lAy2n.js"),[],import.meta.url),"./pages/button.js":()=>i(()=>import("./button-H0UvmgTf.js"),[],import.meta.url),"./pages/card.js":()=>i(()=>import("./card-DYrP9Gfz.js"),[],import.meta.url),"./pages/checkbox-group.js":()=>i(()=>import("./checkbox-group-CZ5Nyp0Q.js"),[],import.meta.url),"./pages/checkbox.js":()=>i(()=>import("./checkbox-CvTX0WLQ.js"),[],import.meta.url),"./pages/chip.js":()=>i(()=>import("./chip-JgJ3hkL2.js"),[],import.meta.url),"./pages/content-switcher.js":()=>i(()=>import("./content-switcher-CPqYDvIw.js"),[],import.meta.url),"./pages/date-picker.js":()=>i(()=>import("./date-picker-yUlCmC4c.js"),[],import.meta.url),"./pages/dropdown.js":()=>i(()=>import("./dropdown-CdK9eHi2.js"),[],import.meta.url),"./pages/file-upload.js":()=>i(()=>import("./file-upload-DvpADRdg.js"),[],import.meta.url),"./pages/footer.js":()=>i(()=>import("./footer-DJYASuLM.js"),[],import.meta.url),"./pages/icon-button.js":()=>i(()=>import("./icon-button-DX4DMJuo.js"),[],import.meta.url),"./pages/icon.js":()=>i(()=>import("./icon-C7683sVN.js"),[],import.meta.url),"./pages/indicator.js":()=>i(()=>import("./indicator-CoEKJNvT.js"),[],import.meta.url),"./pages/link.js":()=>i(()=>import("./link-D8NFkhc7.js"),[],import.meta.url),"./pages/modal.js":()=>i(()=>import("./modal-H_H1fCF-.js"),[],import.meta.url),"./pages/multi-select.js":()=>i(()=>import("./multi-select-CB9vJYOg.js"),[],import.meta.url),"./pages/notification.js":()=>i(()=>import("./notification-6MRBzD_5.js"),[],import.meta.url),"./pages/pagination.js":()=>i(()=>import("./pagination-DV9Wl2Pz.js"),[],import.meta.url),"./pages/progress-bar.js":()=>i(()=>import("./progress-bar-DjvMmsAP.js"),[],import.meta.url),"./pages/radio-button-group.js":()=>i(()=>import("./radio-button-group-C2WrjXSQ.js"),[],import.meta.url),"./pages/radio-button.js":()=>i(()=>import("./radio-button-DzaB5j_H.js"),[],import.meta.url),"./pages/search-bar.js":()=>i(()=>import("./search-bar-DhzSB6Si.js"),[],import.meta.url),"./pages/search-field.js":()=>i(()=>import("./search-field-DMDGHMUp.js"),[],import.meta.url),"./pages/segmented-control.js":()=>i(()=>import("./segmented-control-B6MXSyVN.js"),[],import.meta.url),"./pages/sidebar.js":()=>i(()=>import("./sidebar-DaKJrPfm.js"),[],import.meta.url),"./pages/single-select.js":()=>i(()=>import("./single-select-Bww6rQIS.js"),[],import.meta.url),"./pages/slider.js":()=>i(()=>import("./slider-BW0JFE1Y.js"),[],import.meta.url),"./pages/spinner.js":()=>i(()=>import("./spinner-BdTzF5mx.js"),[],import.meta.url),"./pages/status.js":()=>i(()=>import("./status-5zSIn5bD.js"),[],import.meta.url),"./pages/stepper.js":()=>i(()=>import("./stepper-_dAeLze7.js"),[],import.meta.url),"./pages/switch.js":()=>i(()=>import("./switch-CGMQWs_b.js"),[],import.meta.url),"./pages/tabs.js":()=>i(()=>import("./tabs-zaw-_eMq.js"),[],import.meta.url),"./pages/text-field.js":()=>i(()=>import("./text-field-DX9bmS8b.js"),[],import.meta.url),"./pages/textarea.js":()=>i(()=>import("./textarea-eFnhfrnH.js"),[],import.meta.url),"./pages/tooltip.js":()=>i(()=>import("./tooltip-BCZOfefg.js"),[],import.meta.url),"./pages/tree-view.js":()=>i(()=>import("./tree-view-DVZ3-l-T.js"),[],import.meta.url)}),`./pages/${c}.js`,3);b.innerHTML="",a.render(b)}const h=document.getElementById("navbar");h.innerHTML=`
  <ifx-navbar show-logo-and-appname="true" application-name="VANILLA APP" fixed="false" logo-href="http://google.com"
    logo-href-target="_self">

    <ifx-navbar-item icon="calendar16" slot="left-item" target="" href="">
        Components A-E
        <ifx-navbar-item onclick="window.__nav('accordion')">Accordion</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('action-list')">Action List</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('alert')">Alert</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('breadcrumb')">Breadcrumb</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('button')">Button</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('card')">Card</ifx-navbar-item>
        <ifx-navbar-item>
            Checkbox
            <ifx-navbar-item onclick="window.__nav('checkbox')">Checkbox</ifx-navbar-item>
            <ifx-navbar-item onclick="window.__nav('checkbox-group')">Checkbox Group</ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('chip')">Chip</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('content-switcher')">Content-Switcher</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('date-picker')">Date-Picker</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('dropdown')">Dropdown</ifx-navbar-item>
    </ifx-navbar-item>

    <ifx-navbar-item icon="calendar16" slot="left-item" target="" href="">
        Components F-R
        <ifx-navbar-item onclick="window.__nav('file-upload')">File Upload</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('footer')">Footer</ifx-navbar-item>
        <ifx-navbar-item>
            Icon
            <ifx-navbar-item onclick="window.__nav('icon')">Icon</ifx-navbar-item>
            <ifx-navbar-item onclick="window.__nav('icon-button')">Icon Button</ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('indicator')">Indicator</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('link')">Link</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('modal')">Modal</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('notification')">Notification</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('pagination')">Pagination</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('progress-bar')">Progress Bar</ifx-navbar-item>
        <ifx-navbar-item>
            Radio Button
            <ifx-navbar-item onclick="window.__nav('radio-button')">Radio Button</ifx-navbar-item>
            <ifx-navbar-item onclick="window.__nav('radio-button-group')">Radio Button Group</ifx-navbar-item>
        </ifx-navbar-item>
    </ifx-navbar-item>

    <ifx-navbar-item icon="calendar16" slot="left-item" target="" href="">
        Components S-Z
        <ifx-navbar-item>
            Search
            <ifx-navbar-item onclick="window.__nav('search-bar')">Search Bar</ifx-navbar-item>
            <ifx-navbar-item onclick="window.__nav('search-field')">Search Field</ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('segmented-control')">Segmented Control</ifx-navbar-item>
        <ifx-navbar-item>
            Select
            <ifx-navbar-item onclick="window.__nav('single-select')">Single Select</ifx-navbar-item>
            <ifx-navbar-item onclick="window.__nav('multi-select')">Multi Select</ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('sidebar')">Sidebar</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('slider')">Slider</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('spinner')">Spinner</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('status')">Status</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('stepper')">Stepper</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('switch')">Switch</ifx-navbar-item>
        <ifx-navbar-item>
            Table
            <ifx-navbar-item onclick="window.__nav('basic-table')">Basic Table</ifx-navbar-item>
            <ifx-navbar-item onclick="window.__nav('advanced-table')">Advanced Table</ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('tabs')">Tabs</ifx-navbar-item>
        <ifx-navbar-item>
            Text
            <ifx-navbar-item onclick="window.__nav('text-field')">Text Field</ifx-navbar-item>
            <ifx-navbar-item onclick="window.__nav('textarea')">Textarea</ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('tooltip')">Tooltip</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('tree-view')">Tree View</ifx-navbar-item>
    </ifx-navbar-item>

    <ifx-search-bar id="myBar" slot="search-bar-left" is-open="false"></ifx-search-bar>

    <ifx-navbar-item slot="right-item" target="_blank" href="http://google.com" hide-on-mobile="false"
        show-label="false" icon="cartf16">Right Item</ifx-navbar-item>
    <ifx-navbar-item slot="right-item" hide-on-mobile="true" show-label='true' icon="airplane16">
        Right Item
        <ifx-navbar-item>
            Nested one
            <ifx-navbar-item>
                Nested one
                <ifx-navbar-item>
                    Nested one
                    <ifx-navbar-item>Final one</ifx-navbar-item>
                </ifx-navbar-item>
            </ifx-navbar-item>
        </ifx-navbar-item>
    </ifx-navbar-item>

    <ifx-navbar-profile slot="right-item"
        image-url="https://i.pinimg.com/originals/82/d4/92/82d4926dcf09dd4c73eb1a6c0300c135.jpg" show-label="true"
        href="" target="_blank">
        User
        <ifx-navbar-item>Item</ifx-navbar-item>
        <ifx-navbar-item>Item</ifx-navbar-item>
        <ifx-navbar-item>Item</ifx-navbar-item>
        <ifx-navbar-item>Item</ifx-navbar-item>
    </ifx-navbar-profile>
</ifx-navbar>

`;window.__nav=u;u("accordion");
