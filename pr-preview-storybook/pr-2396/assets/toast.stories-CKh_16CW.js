import{b as x}from"./iframe-CXzyCGAW.js";function T(t,e){e.toastId!==void 0&&(t.toastId=e.toastId),e.status!==void 0&&(t.status=e.status),e.message!==void 0&&(t.message=e.message),e.actionText!==void 0&&(t.actionText=e.actionText),e.duration!==void 0&&(t.duration=e.duration)}const A="bottom-right",p=new Map,w={el:null,update(){},dismiss(){}};function b(){return typeof document<"u"&&typeof document.createElement=="function"}function C(t){const e=p.get(t);if(e&&document.body.contains(e))return e;const s=document.createElement("ifx-toast-container");return s.placement=t,document.body.appendChild(s),p.set(t,s),s}function S(t){const e=()=>t.enforceMax?.(),s=t.componentOnReady?.();s&&typeof s.then=="function"?s.then(e):e()}function y(t){typeof t.dismiss=="function"?t.dismiss():t.remove()}function E(t){return{el:t,update(e){T(t,e)},dismiss(){y(t)}}}function h(t={}){if(!b())return w;const{placement:e=A,max:s,...a}=t,o=C(e);s!==void 0&&(o.max=s);const n=document.createElement("ifx-toast");return T(n,a),n.addEventListener("ifxToastClose",()=>n.remove(),{once:!0}),o.appendChild(n),S(o),E(n)}function u(t,e,s){return h({...s,status:t,message:e})}function O(t){if(!b())return;const e=t?[p.get(t)]:Array.from(p.values());for(const s of e){if(!s)continue;const a=Array.from(s.querySelectorAll("ifx-toast"));for(const o of a)y(o)}}const m={show:h,success:(t,e)=>u("success",t,e),warning:(t,e)=>u("warning",t,e),danger:(t,e)=>u("danger",t,e),loading:(t,e)=>u("loading",t,e),dismissAll:O},{action:l}=__STORYBOOK_MODULE_ACTIONS__,v=t=>{t&&(t.addEventListener("ifxToastOpen",l("ifxToastOpen")),t.addEventListener("ifxToastClose",l("ifxToastClose")),t.addEventListener("ifxToastAction",l("ifxToastAction")))},g=["loading","success","warning","danger"],$=["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"],I={title:"Components/Toast",tags:["autodocs"],args:{status:"success",message:"Insert information text here",actionText:"Dismiss",toastId:"",duration:0,placement:"bottom-right"},argTypes:{toastId:{description:"Stable id emitted with every toast event. Auto-generated when left empty.",control:"text",table:{category:"ifx-toast props"}},status:{description:"Status variant controlling the status icon and accent color.",options:g,control:"radio",table:{category:"ifx-toast props",defaultValue:{summary:"success"}}},message:{description:"The message text displayed in the toast.",control:"text",table:{category:"ifx-toast props"}},actionText:{description:"Text for the trailing action button. Optional — clicking it dismisses the toast.",control:"text",table:{category:"ifx-toast props"}},duration:{description:"Auto-dismiss delay in ms. 0 disables auto-dismiss. The loading status never auto-dismisses.",control:{type:"number",min:0,step:500},table:{category:"ifx-toast props",defaultValue:{summary:"5000"}}},placement:{description:"Placement of the toasts in the live demos.",options:$,control:"select",table:{category:"ifx-toast-container props",defaultValue:{summary:"bottom-right"}}},ifxToastOpen:{action:"ifxToastOpen",description:"Emitted once the toast has been shown.",table:{category:"custom events"}},ifxToastClose:{action:"ifxToastClose",description:"Emitted after the toast finished dismissing.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxToastClose={handleChange}
Vue:@ifxToastClose="handleChange"
Angular:(ifxToastClose)="handleChange()"
VanillaJs:.addEventListener("ifxToastClose", (event) => {//handle change});`}}},ifxToastAction:{action:"ifxToastAction",description:"Emitted when the action is activated (before dismissing).",table:{category:"custom events"}}}},_=t=>x`<ifx-toast
        toast-id="${t.toastId}"
        status="${t.status}"
        message="${t.message}"
        action-text="${t.actionText}"
        duration="${t.duration}"
        @ifxToastOpen="${l("ifxToastOpen")}"
        @ifxToastClose="${l("ifxToastClose")}"
        @ifxToastAction="${l("ifxToastAction")}"
    ></ifx-toast>`,i=_.bind({});i.args={duration:0};i.argTypes={placement:{table:{disable:!0}}};const L=t=>x`<div style="display:flex;flex-direction:column;gap:12px;max-width:440px;">
        ${g.map(e=>x`<ifx-toast
                    status="${e}"
                    message="${t.message}"
                    action-text="${t.actionText}"
                    duration="0"
                ></ifx-toast>`)}
    </div>`,d=L.bind({});d.argTypes={toastId:{table:{disable:!0}},status:{table:{disable:!0}},duration:{table:{disable:!0}},placement:{table:{disable:!0}}};const D=t=>{m.dismissAll();const e=document.createElement("div");e.style.display="flex",e.style.gap="8px",e.style.flexWrap="wrap";for(const s of g){const a=document.createElement("ifx-button");a.setAttribute("variant","secondary"),a.textContent=`Show ${s}`,a.addEventListener("click",()=>{const o=m.show({status:s,message:"Insert information text here",actionText:"Dismiss",placement:t.placement});v(o.el)}),e.appendChild(a)}return e},r=D.bind({});r.args={placement:"bottom-right"};r.argTypes={toastId:{table:{disable:!0}},status:{table:{disable:!0}},message:{table:{disable:!0}},actionText:{table:{disable:!0}},duration:{table:{disable:!0}}};const k=t=>{m.dismissAll();const e=document.createElement("div");e.style.display="flex",e.style.gap="8px";const s=(a,o)=>{const n=document.createElement("ifx-button");return n.setAttribute("variant","secondary"),n.textContent=a,n.addEventListener("click",()=>{const f=m.loading("Saving…",{placement:t.placement});v(f.el),setTimeout(()=>{o?f.update({status:"success",message:"Saved",actionText:"Dismiss"}):f.update({status:"danger",message:"Could not save",actionText:"Dismiss"})},2e3)}),n};return e.appendChild(s("Save (succeeds)",!0)),e.appendChild(s("Save (fails)",!1)),e},c=k.bind({});c.args={placement:"bottom-right"};c.argTypes={toastId:{table:{disable:!0}},status:{table:{disable:!0}},message:{table:{disable:!0}},actionText:{table:{disable:!0}},duration:{table:{disable:!0}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:'(args: Record<string, any>) => html`<ifx-toast\n        toast-id="${args.toastId}"\n        status="${args.status}"\n        message="${args.message}"\n        action-text="${args.actionText}"\n        duration="${args.duration}"\n        @ifxToastOpen="${action("ifxToastOpen")}"\n        @ifxToastClose="${action("ifxToastClose")}"\n        @ifxToastAction="${action("ifxToastAction")}"\n    ></ifx-toast>`',...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:'(args: Record<string, any>) => html`<div style="display:flex;flex-direction:column;gap:12px;max-width:440px;">\n        ${STATUS_OPTIONS.map(status => html`<ifx-toast\n                    status="${status}"\n                    message="${args.message}"\n                    action-text="${args.actionText}"\n                    duration="0"\n                ></ifx-toast>`)}\n    </div>`',...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: Record<string, any>) => {
  ifxToast.dismissAll();
  const wrapper = document.createElement("div");
  wrapper.style.display = "flex";
  wrapper.style.gap = "8px";
  wrapper.style.flexWrap = "wrap";
  for (const status of STATUS_OPTIONS) {
    const button = document.createElement("ifx-button");
    button.setAttribute("variant", "secondary");
    button.textContent = \`Show \${status}\`;
    button.addEventListener("click", () => {
      const handle = ifxToast.show({
        status: status as any,
        message: "Insert information text here",
        actionText: "Dismiss",
        placement: args.placement
      });
      wireToastActions(handle.el);
    });
    wrapper.appendChild(button);
  }
  return wrapper;
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: Record<string, any>) => {
  ifxToast.dismissAll();
  const wrapper = document.createElement("div");
  wrapper.style.display = "flex";
  wrapper.style.gap = "8px";
  const makeButton = (label: string, succeeds: boolean) => {
    const button = document.createElement("ifx-button");
    button.setAttribute("variant", "secondary");
    button.textContent = label;
    button.addEventListener("click", () => {
      const handle = ifxToast.loading("Saving…", {
        placement: args.placement
      });
      wireToastActions(handle.el);
      setTimeout(() => {
        if (succeeds) {
          handle.update({
            status: "success",
            message: "Saved",
            actionText: "Dismiss"
          });
        } else {
          handle.update({
            status: "danger",
            message: "Could not save",
            actionText: "Dismiss"
          });
        }
      }, 2000);
    });
    return button;
  };
  wrapper.appendChild(makeButton("Save (succeeds)", true));
  wrapper.appendChild(makeButton("Save (fails)", false));
  return wrapper;
}`,...c.parameters?.docs?.source}}};const N=["Default","AllVariants","LiveDemo","AsyncTransition"],V=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:d,AsyncTransition:c,Default:i,LiveDemo:r,__namedExportsOrder:N,default:I},Symbol.toStringTag,{value:"Module"}));export{V as T};
