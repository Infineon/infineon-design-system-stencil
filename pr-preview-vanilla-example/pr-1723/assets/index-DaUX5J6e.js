(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const e of i)if(e.type==="childList")for(const t of e.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function f(i){const e={};return i.integrity&&(e.integrity=i.integrity),i.referrerPolicy&&(e.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?e.credentials="include":i.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(i){if(i.ep)return;i.ep=!0;const e=f(i);fetch(i.href,e)}})();const p="modulepreload",h=function(m,n){return new URL(m,n).href},x={},l=function(n,f,r){let i=Promise.resolve();if(f&&f.length>0){const t=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),d=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(f.map(o=>{if(o=h(o,r),o in x)return;x[o]=!0;const v=o.endsWith(".css"),u=v?'[rel="stylesheet"]':"";if(!!r)for(let b=t.length-1;b>=0;b--){const s=t[b];if(s.href===o&&(!v||s.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${u}`))return;const c=document.createElement("link");if(c.rel=v?"stylesheet":p,v||(c.as="script"),c.crossOrigin="",c.href=o,d&&c.setAttribute("nonce",d),document.head.appendChild(c),v)return new Promise((b,s)=>{c.addEventListener("load",b),c.addEventListener("error",()=>s(new Error(`Unable to preload CSS for ${o}`)))})}))}function e(t){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=t,window.dispatchEvent(a),!a.defaultPrevented)throw t}return i.then(t=>{for(const a of t||[])a.status==="rejected"&&e(a.reason);return n().catch(e)})},g=(m,n,f)=>{const r=m[n];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((i,e)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+n+(n.split("/").length!==f?". Note that variables only represent file names one level deep.":""))))})},_=document.getElementById("page");async function w(m){const n=await g(Object.assign({"./pages/accordion.js":()=>l(()=>import("./accordion-Bu6bwXR8.js"),[],import.meta.url),"./pages/action-list.js":()=>l(()=>import("./action-list-BWZFc_N_.js"),[],import.meta.url),"./pages/alert.js":()=>l(()=>import("./alert-DRvlaoIJ.js"),[],import.meta.url),"./pages/breadcrumb.js":()=>l(()=>import("./breadcrumb-Cam2FcUQ.js"),[],import.meta.url),"./pages/button.js":()=>l(()=>import("./button-Bl1_U_ns.js"),[],import.meta.url),"./pages/checkbox.js":()=>l(()=>import("./checkbox-5EvEL5vb.js"),[],import.meta.url),"./pages/chip.js":()=>l(()=>import("./chip-sybjLaol.js"),[],import.meta.url)}),`./pages/${m}.js`,3);_.innerHTML="",n.render(_)}const k=document.getElementById("navbar");k.innerHTML=`
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
            <ifx-navbar-item onclick="window.__nav('checkboxgroup')">Checkbox Group</ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('chip')">Chip</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('contentswitcher')">Content-Switcher</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('datepicker')">Date-Picker</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('dropdown')">Dropdown</ifx-navbar-item>
    </ifx-navbar-item>

    <ifx-navbar-item icon="calendar16" slot="left-item" target="" href="">
        Components F-R
        <ifx-navbar-item onclick="window.__nav('fileupload')">File Upload</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('footer')">Footer</ifx-navbar-item>
        <ifx-navbar-item>
            Icon
            <ifx-navbar-item onclick="window.__nav('icon')">Icon</ifx-navbar-item>
            <ifx-navbar-item onclick="window.__nav('iconbutton')">Icon Button</ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('indicator')">Indicator</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('link')">Link</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('modal')">Modal</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('notification')">Notification</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('pagination')">Pagination</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('progressbar')">Progress Bar</ifx-navbar-item>
        <ifx-navbar-item>
            Radio Button
            <ifx-navbar-item onclick="window.__nav('radiobutton')">Radio Button</ifx-navbar-item>
            <ifx-navbar-item onclick="window.__nav('radiobuttongroup')">Radio Button Group</ifx-navbar-item>
        </ifx-navbar-item>
    </ifx-navbar-item>

    <ifx-navbar-item icon="calendar16" slot="left-item" target="" href="">
        Components S-Z
        <ifx-navbar-item>
            Search
            <ifx-navbar-item onclick="window.__nav('searchbar')">Search Bar</ifx-navbar-item>
            <ifx-navbar-item onclick="window.__nav('searchfield')">Search Field</ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('segmentedcontrol')">Segmented Control</ifx-navbar-item>
        <ifx-navbar-item>
            Select
            <ifx-navbar-item onclick="window.__nav('singleselect')">Single Select</ifx-navbar-item>
            <ifx-navbar-item onclick="window.__nav('multiselect')">Multi Select</ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('sidebar')">Sidebar</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('slider')">Slider</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('spinner')">Spinner</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('status')">Status</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('stepper')">Stepper</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('switch')">Switch</ifx-navbar-item>
        <ifx-navbar-item>
            Table
            <ifx-navbar-item onclick="window.__nav('basictable')">Basic Table</ifx-navbar-item>
            <ifx-navbar-item onclick="window.__nav('advancedtable')">Advanced Table</ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('tabs')">Tabs</ifx-navbar-item>
        <ifx-navbar-item>
            Text
            <ifx-navbar-item onclick="window.__nav('textfield')">Text Field</ifx-navbar-item>
            <ifx-navbar-item onclick="window.__nav('textarea')">Textarea</ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('tooltip')">Tooltip</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('treeview')">Tree View</ifx-navbar-item>
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

`;window.__nav=w;w("accordion");
