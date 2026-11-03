import{j as e,r as d,S as i}from"./blocks-CC3vyqVJ.js";const l=({packageName:n="@infineon/design-system-angular"})=>{const[o,r]=d.useState(0);d.useEffect(()=>{const a=localStorage.getItem("preferredPackageManager");a!==null&&r(parseInt(a,10));const t=s=>{s.detail!==void 0&&r(s.detail)};return()=>document.removeEventListener("ifxTabChange",t)},[]);const c=a=>{const t=a.detail.currentTab;r(t),localStorage.setItem("preferredPackageManager",t.toString()),document.dispatchEvent(new CustomEvent("ifxTabChange",{detail:t}))};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          ifx-tab pre {
            margin: 0 !important;
            padding: 12px !important;
          }
          ifx-tab .docblock-source {
            margin: 0 !important;
          }
        `}),e.jsxs("ifx-tabs",{orientation:"horizontal","active-tab-index":o,"full-width":"false",ref:a=>{a&&a.addEventListener("ifxChange",c)},children:[e.jsx("ifx-tab",{header:"npm",children:e.jsx(i,{language:"sh",code:`npm install ${n}`})}),e.jsx("ifx-tab",{header:"yarn",children:e.jsx(i,{language:"sh",code:`yarn add ${n}`})}),e.jsx("ifx-tab",{header:"pnpm",children:e.jsx(i,{language:"sh",code:`pnpm add ${n}`})})]})]})},x=l;function g(n){return e.jsx(e.Fragment,{})}function h(n={}){return e.jsx(x,{...n,children:e.jsx(g,{...n})})}export{h as M};
