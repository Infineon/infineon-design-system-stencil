import{j as e,r as o,b as i}from"./blocks-BlYqE6iC.js";const l=({packageName:n="@infineon/infineon-design-system-angular"})=>{const[d,r]=o.useState(0);o.useEffect(()=>{const a=localStorage.getItem("preferredPackageManager");a!==null&&r(parseInt(a,10));const t=s=>{s.detail!==void 0&&r(s.detail)};return()=>document.removeEventListener("ifxTabChange",t)},[]);const c=a=>{const t=a.detail.currentTab;r(t),localStorage.setItem("preferredPackageManager",t.toString()),document.dispatchEvent(new CustomEvent("ifxTabChange",{detail:t}))};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          ifx-tab pre {
            margin: 0 !important;
            padding: 12px !important;
          }
          ifx-tab .docblock-source {
            margin: 0 !important;
          }
        `}),e.jsxs("ifx-tabs",{orientation:"horizontal","active-tab-index":d,"full-width":"false",ref:a=>{a&&a.addEventListener("ifxChange",c)},children:[e.jsx("ifx-tab",{header:"npm",children:e.jsx(i,{language:"sh",code:`npm install ${n}`})}),e.jsx("ifx-tab",{header:"yarn",children:e.jsx(i,{language:"sh",code:`yarn add ${n}`})}),e.jsx("ifx-tab",{header:"pnpm",children:e.jsx(i,{language:"sh",code:`pnpm add ${n}`})})]})]})},x=l;function g(n){return e.jsx(e.Fragment,{})}function h(n={}){return e.jsx(x,{...n,children:e.jsx(g,{...n})})}export{h as M};
