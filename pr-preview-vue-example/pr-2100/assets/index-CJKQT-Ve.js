const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ifx-action-list.entry-BIm4SW-T.js","./framework-detection-DcmcuUOA-BMsXG9Ok.js","./dom-utils-Bw2fh5LT-CZY0_Num.js","./ifx-action-list-item.entry-DQRrXRz4.js","./index-BfTCfPZ1-CrzGNZJJ.js","./ifx-breadcrumb.entry-B4sc1n5z.js","./ifx-card.entry-BsvmRZEk.js","./ifx-checkbox-group.entry-BH7LDAId.js","./ifx-content-switcher.entry-YaRzgOj2.js","./ifx-date-picker.entry-BiSaMywn.js","./ifx-dropdown.entry-BE-vH-Tl.js","./popper-BfP9ezJQ-CAMpDiU4.js","./ifx-file-upload.entry-6BZFOUkF.js","./ifx-footer.entry-CS69xTQ7.js","./ifx-icons-preview.entry-DxFcOQlh.js","./icons-CmdmgBUp-DE211srv.js","./ifx-navbar.entry-BnU-F6yu.js","./ifx-radio-button-group.entry-C6VQndQH.js","./ifx-search-bar.entry-CwyJPV22.js","./ifx-segmented-control.entry-BMD3O28-.js","./ifx-sidebar.entry-4PmWR_WU.js","./ifx-slider.entry-COkaLIp4.js","./ifx-status.entry-CW0ZPOKM.js","./ifx-stepper.entry-ygvRIbM7.js","./ifx-switch.entry-BsK8V3E4.js","./ifx-tabs.entry-Dk00giiE.js","./ifx-textarea.entry-DMXHeE2Z.js","./ifx-tooltip.entry-DT83ysvu.js","./ifx-tree-view.entry-eUS_N5eG.js","./ifx-notification.entry-CaEMQkl5.js","./ifx-progress-bar.entry-BoPKSxaB.js","./ifx-radio-button.entry-Ja6Ch18E.js","./ifx-search-field.entry-BhqYUL6Y.js","./ifx-button.entry-BGTrIQGQ.js","./ifx-icon-button.entry-CYWhIDdh.js","./ifx-indicator.entry-C7LtWMJl.js","./ifx-checkbox.entry-CYAhLiod.js","./ifx-link.entry-CEHmlnMf.js","./ifx-icon.entry-CmclfAc8.js","./ifx-select.entry-C9b3GhT9.js","./ifx-basic-table.entry-C_-QdMii.js","./main.esm-ByHlxOiP-Dxp3GBcE.js","./ifx-modal.entry-CZXV91kz.js","./ifx-accordion_2.entry-rQ0gcuKw.js","./ifx-alert_2.entry-D-cDWjon.js","./ifx-multiselect_2.entry-UdpRxJXM.js","./ifx-spinner_2.entry-DKiLSphW.js","./ifx-chip_3.entry-C7lsY1S8.js","./ifx-table.entry-C1Gpn6k4.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();function Pn(e){const t=Object.create(null);for(const i of e.split(","))t[i]=1;return i=>i in t}const fe={},Ft=[],Ge=()=>{},ls=()=>!1,Ri=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),On=e=>e.startsWith("onUpdate:"),$e=Object.assign,Rn=(e,t)=>{const i=e.indexOf(t);i>-1&&e.splice(i,1)},Tl=Object.prototype.hasOwnProperty,le=(e,t)=>Tl.call(e,t),W=Array.isArray,Pt=e=>Di(e)==="[object Map]",as=e=>Di(e)==="[object Set]",G=e=>typeof e=="function",he=e=>typeof e=="string",xt=e=>typeof e=="symbol",pe=e=>e!==null&&typeof e=="object",os=e=>(pe(e)||G(e))&&G(e.then)&&G(e.catch),cs=Object.prototype.toString,Di=e=>cs.call(e),Fl=e=>Di(e).slice(8,-1),us=e=>Di(e)==="[object Object]",Dn=e=>he(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Kt=Pn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mi=e=>{const t=Object.create(null);return(i=>t[i]||(t[i]=e(i)))},Pl=/-\w/g,mt=Mi(e=>e.replace(Pl,t=>t.slice(1).toUpperCase())),Ol=/\B([A-Z])/g,Ct=Mi(e=>e.replace(Ol,"-$1").toLowerCase()),ds=Mi(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ui=Mi(e=>e?`on${ds(e)}`:""),ft=(e,t)=>!Object.is(e,t),Wi=(e,...t)=>{for(let i=0;i<e.length;i++)e[i](...t)},fs=(e,t,i,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:i})},Rl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ur;const zi=()=>ur||(ur=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Mn(e){if(W(e)){const t={};for(let i=0;i<e.length;i++){const n=e[i],r=he(n)?Hl(n):Mn(n);if(r)for(const s in r)t[s]=r[s]}return t}else if(he(e)||pe(e))return e}const Dl=/;(?![^(]*\))/g,Ml=/:([^]+)/,zl=/\/\*[^]*?\*\//g;function Hl(e){const t={};return e.replace(zl,"").split(Dl).forEach(i=>{if(i){const n=i.split(Ml);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function zn(e){let t="";if(he(e))t=e;else if(W(e))for(let i=0;i<e.length;i++){const n=zn(e[i]);n&&(t+=n+" ")}else if(pe(e))for(const i in e)e[i]&&(t+=i+" ");return t.trim()}const ql="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bl=Pn(ql);function ps(e){return!!e||e===""}const ms=e=>!!(e&&e.__v_isRef===!0),J=e=>he(e)?e:e==null?"":W(e)||pe(e)&&(e.toString===cs||!G(e.toString))?ms(e)?J(e.value):JSON.stringify(e,hs,2):String(e),hs=(e,t)=>ms(t)?hs(e,t.value):Pt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((i,[n,r],s)=>(i[Gi(n,s)+" =>"]=r,i),{})}:as(t)?{[`Set(${t.size})`]:[...t.values()].map(i=>Gi(i))}:xt(t)?Gi(t):pe(t)&&!W(t)&&!us(t)?String(t):t,Gi=(e,t="")=>{var i;return xt(e)?`Symbol(${(i=e.description)!=null?i:t})`:e};let Ae;class Nl{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ae,!t&&Ae&&(this.index=(Ae.scopes||(Ae.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,i;if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].pause();for(t=0,i=this.effects.length;t<i;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,i;if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].resume();for(t=0,i=this.effects.length;t<i;t++)this.effects[t].resume()}}run(t){if(this._active){const i=Ae;try{return Ae=this,t()}finally{Ae=i}}}on(){++this._on===1&&(this.prevScope=Ae,Ae=this)}off(){this._on>0&&--this._on===0&&(Ae=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let i,n;for(i=0,n=this.effects.length;i<n;i++)this.effects[i].stop();for(this.effects.length=0,i=0,n=this.cleanups.length;i<n;i++)this.cleanups[i]();if(this.cleanups.length=0,this.scopes){for(i=0,n=this.scopes.length;i<n;i++)this.scopes[i].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function jl(){return Ae}let de;const Ki=new WeakSet;class gs{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ae&&Ae.active&&Ae.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ki.has(this)&&(Ki.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||bs(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,dr(this),vs(this);const t=de,i=Re;de=this,Re=!0;try{return this.fn()}finally{_s(this),de=t,Re=i,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Bn(t);this.deps=this.depsTail=void 0,dr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ki.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){on(this)&&this.run()}get dirty(){return on(this)}}let xs=0,Yt,Zt;function bs(e,t=!1){if(e.flags|=8,t){e.next=Zt,Zt=e;return}e.next=Yt,Yt=e}function Hn(){xs++}function qn(){if(--xs>0)return;if(Zt){let t=Zt;for(Zt=void 0;t;){const i=t.next;t.next=void 0,t.flags&=-9,t=i}}let e;for(;Yt;){let t=Yt;for(Yt=void 0;t;){const i=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=i}}if(e)throw e}function vs(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function _s(e){let t,i=e.depsTail,n=i;for(;n;){const r=n.prevDep;n.version===-1?(n===i&&(i=r),Bn(n),Vl(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}e.deps=t,e.depsTail=i}function on(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&($s(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function $s(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ii)||(e.globalVersion=ii,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!on(e))))return;e.flags|=2;const t=e.dep,i=de,n=Re;de=e,Re=!0;try{vs(e);const r=e.fn(e._value);(t.version===0||ft(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{de=i,Re=n,_s(e),e.flags&=-3}}function Bn(e,t=!1){const{dep:i,prevSub:n,nextSub:r}=e;if(n&&(n.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=n,e.nextSub=void 0),i.subs===e&&(i.subs=n,!n&&i.computed)){i.computed.flags&=-5;for(let s=i.computed.deps;s;s=s.nextDep)Bn(s,!0)}!t&&!--i.sc&&i.map&&i.map.delete(i.key)}function Vl(e){const{prevDep:t,nextDep:i}=e;t&&(t.nextDep=i,e.prevDep=void 0),i&&(i.prevDep=t,e.nextDep=void 0)}let Re=!0;const ys=[];function nt(){ys.push(Re),Re=!1}function rt(){const e=ys.pop();Re=e===void 0?!0:e}function dr(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const i=de;de=void 0;try{t()}finally{de=i}}}let ii=0;class Ul{constructor(t,i){this.sub=t,this.dep=i,this.version=i.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Nn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!de||!Re||de===this.computed)return;let i=this.activeLink;if(i===void 0||i.sub!==de)i=this.activeLink=new Ul(de,this),de.deps?(i.prevDep=de.depsTail,de.depsTail.nextDep=i,de.depsTail=i):de.deps=de.depsTail=i,ws(i);else if(i.version===-1&&(i.version=this.version,i.nextDep)){const n=i.nextDep;n.prevDep=i.prevDep,i.prevDep&&(i.prevDep.nextDep=n),i.prevDep=de.depsTail,i.nextDep=void 0,de.depsTail.nextDep=i,de.depsTail=i,de.deps===i&&(de.deps=n)}return i}trigger(t){this.version++,ii++,this.notify(t)}notify(t){Hn();try{for(let i=this.subs;i;i=i.prevSub)i.sub.notify()&&i.sub.dep.notify()}finally{qn()}}}function ws(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)ws(n)}const i=e.dep.subs;i!==e&&(e.prevSub=i,i&&(i.nextSub=e)),e.dep.subs=e}}const cn=new WeakMap,It=Symbol(""),un=Symbol(""),ni=Symbol("");function ve(e,t,i){if(Re&&de){let n=cn.get(e);n||cn.set(e,n=new Map);let r=n.get(i);r||(n.set(i,r=new Nn),r.map=n,r.key=i),r.track()}}function tt(e,t,i,n,r,s){const l=cn.get(e);if(!l){ii++;return}const a=c=>{c&&c.trigger()};if(Hn(),t==="clear")l.forEach(a);else{const c=W(e),d=c&&Dn(i);if(c&&i==="length"){const u=Number(n);l.forEach((p,h)=>{(h==="length"||h===ni||!xt(h)&&h>=u)&&a(p)})}else switch((i!==void 0||l.has(void 0))&&a(l.get(i)),d&&a(l.get(ni)),t){case"add":c?d&&a(l.get("length")):(a(l.get(It)),Pt(e)&&a(l.get(un)));break;case"delete":c||(a(l.get(It)),Pt(e)&&a(l.get(un)));break;case"set":Pt(e)&&a(l.get(It));break}}qn()}function Et(e){const t=se(e);return t===e?t:(ve(t,"iterate",ni),De(e)?t:t.map(st))}function jn(e){return ve(e=se(e),"iterate",ni),e}function at(e,t){return ht(e)?Ot(e)?ri(st(t)):ri(t):st(t)}const Wl={__proto__:null,[Symbol.iterator](){return Yi(this,Symbol.iterator,e=>at(this,e))},concat(...e){return Et(this).concat(...e.map(t=>W(t)?Et(t):t))},entries(){return Yi(this,"entries",e=>(e[1]=at(this,e[1]),e))},every(e,t){return Xe(this,"every",e,t,void 0,arguments)},filter(e,t){return Xe(this,"filter",e,t,i=>i.map(n=>at(this,n)),arguments)},find(e,t){return Xe(this,"find",e,t,i=>at(this,i),arguments)},findIndex(e,t){return Xe(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Xe(this,"findLast",e,t,i=>at(this,i),arguments)},findLastIndex(e,t){return Xe(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Xe(this,"forEach",e,t,void 0,arguments)},includes(...e){return Zi(this,"includes",e)},indexOf(...e){return Zi(this,"indexOf",e)},join(e){return Et(this).join(e)},lastIndexOf(...e){return Zi(this,"lastIndexOf",e)},map(e,t){return Xe(this,"map",e,t,void 0,arguments)},pop(){return jt(this,"pop")},push(...e){return jt(this,"push",e)},reduce(e,...t){return fr(this,"reduce",e,t)},reduceRight(e,...t){return fr(this,"reduceRight",e,t)},shift(){return jt(this,"shift")},some(e,t){return Xe(this,"some",e,t,void 0,arguments)},splice(...e){return jt(this,"splice",e)},toReversed(){return Et(this).toReversed()},toSorted(e){return Et(this).toSorted(e)},toSpliced(...e){return Et(this).toSpliced(...e)},unshift(...e){return jt(this,"unshift",e)},values(){return Yi(this,"values",e=>at(this,e))}};function Yi(e,t,i){const n=jn(e),r=n[t]();return n!==e&&!De(e)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=i(s.value)),s}),r}const Gl=Array.prototype;function Xe(e,t,i,n,r,s){const l=jn(e),a=l!==e&&!De(e),c=l[t];if(c!==Gl[t]){const p=c.apply(e,s);return a?st(p):p}let d=i;l!==e&&(a?d=function(p,h){return i.call(this,at(e,p),h,e)}:i.length>2&&(d=function(p,h){return i.call(this,p,h,e)}));const u=c.call(l,d,n);return a&&r?r(u):u}function fr(e,t,i,n){const r=jn(e);let s=i;return r!==e&&(De(e)?i.length>3&&(s=function(l,a,c){return i.call(this,l,a,c,e)}):s=function(l,a,c){return i.call(this,l,at(e,a),c,e)}),r[t](s,...n)}function Zi(e,t,i){const n=se(e);ve(n,"iterate",ni);const r=n[t](...i);return(r===-1||r===!1)&&Gn(i[0])?(i[0]=se(i[0]),n[t](...i)):r}function jt(e,t,i=[]){nt(),Hn();const n=se(e)[t].apply(e,i);return qn(),rt(),n}const Kl=Pn("__proto__,__v_isRef,__isVue"),Ss=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(xt));function Yl(e){xt(e)||(e=String(e));const t=se(this);return ve(t,"has",e),t.hasOwnProperty(e)}class Is{constructor(t=!1,i=!1){this._isReadonly=t,this._isShallow=i}get(t,i,n){if(i==="__v_skip")return t.__v_skip;const r=this._isReadonly,s=this._isShallow;if(i==="__v_isReactive")return!r;if(i==="__v_isReadonly")return r;if(i==="__v_isShallow")return s;if(i==="__v_raw")return n===(r?s?sa:ks:s?Es:As).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const l=W(t);if(!r){let c;if(l&&(c=Wl[i]))return c;if(i==="hasOwnProperty")return Yl}const a=Reflect.get(t,i,_e(t)?t:n);if((xt(i)?Ss.has(i):Kl(i))||(r||ve(t,"get",i),s))return a;if(_e(a)){const c=l&&Dn(i)?a:a.value;return r&&pe(c)?fn(c):c}return pe(a)?r?fn(a):Un(a):a}}class Cs extends Is{constructor(t=!1){super(!1,t)}set(t,i,n,r){let s=t[i];const l=W(t)&&Dn(i);if(!this._isShallow){const d=ht(s);if(!De(n)&&!ht(n)&&(s=se(s),n=se(n)),!l&&_e(s)&&!_e(n))return d||(s.value=n),!0}const a=l?Number(i)<t.length:le(t,i),c=Reflect.set(t,i,n,_e(t)?t:r);return t===se(r)&&(a?ft(n,s)&&tt(t,"set",i,n):tt(t,"add",i,n)),c}deleteProperty(t,i){const n=le(t,i);t[i];const r=Reflect.deleteProperty(t,i);return r&&n&&tt(t,"delete",i,void 0),r}has(t,i){const n=Reflect.has(t,i);return(!xt(i)||!Ss.has(i))&&ve(t,"has",i),n}ownKeys(t){return ve(t,"iterate",W(t)?"length":It),Reflect.ownKeys(t)}}class Zl extends Is{constructor(t=!1){super(!0,t)}set(t,i){return!0}deleteProperty(t,i){return!0}}const Jl=new Cs,Xl=new Zl,Ql=new Cs(!0);const dn=e=>e,hi=e=>Reflect.getPrototypeOf(e);function ea(e,t,i){return function(...n){const r=this.__v_raw,s=se(r),l=Pt(s),a=e==="entries"||e===Symbol.iterator&&l,c=e==="keys"&&l,d=r[e](...n),u=i?dn:t?ri:st;return!t&&ve(s,"iterate",c?un:It),{next(){const{value:p,done:h}=d.next();return h?{value:p,done:h}:{value:a?[u(p[0]),u(p[1])]:u(p),done:h}},[Symbol.iterator](){return this}}}}function gi(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ta(e,t){const i={get(r){const s=this.__v_raw,l=se(s),a=se(r);e||(ft(r,a)&&ve(l,"get",r),ve(l,"get",a));const{has:c}=hi(l),d=t?dn:e?ri:st;if(c.call(l,r))return d(s.get(r));if(c.call(l,a))return d(s.get(a));s!==l&&s.get(r)},get size(){const r=this.__v_raw;return!e&&ve(se(r),"iterate",It),r.size},has(r){const s=this.__v_raw,l=se(s),a=se(r);return e||(ft(r,a)&&ve(l,"has",r),ve(l,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const l=this,a=l.__v_raw,c=se(a),d=t?dn:e?ri:st;return!e&&ve(c,"iterate",It),a.forEach((u,p)=>r.call(s,d(u),d(p),l))}};return $e(i,e?{add:gi("add"),set:gi("set"),delete:gi("delete"),clear:gi("clear")}:{add(r){!t&&!De(r)&&!ht(r)&&(r=se(r));const s=se(this);return hi(s).has.call(s,r)||(s.add(r),tt(s,"add",r,r)),this},set(r,s){!t&&!De(s)&&!ht(s)&&(s=se(s));const l=se(this),{has:a,get:c}=hi(l);let d=a.call(l,r);d||(r=se(r),d=a.call(l,r));const u=c.call(l,r);return l.set(r,s),d?ft(s,u)&&tt(l,"set",r,s):tt(l,"add",r,s),this},delete(r){const s=se(this),{has:l,get:a}=hi(s);let c=l.call(s,r);c||(r=se(r),c=l.call(s,r)),a&&a.call(s,r);const d=s.delete(r);return c&&tt(s,"delete",r,void 0),d},clear(){const r=se(this),s=r.size!==0,l=r.clear();return s&&tt(r,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(r=>{i[r]=ea(r,e,t)}),i}function Vn(e,t){const i=ta(e,t);return(n,r,s)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?n:Reflect.get(le(i,r)&&r in n?i:n,r,s)}const ia={get:Vn(!1,!1)},na={get:Vn(!1,!0)},ra={get:Vn(!0,!1)};const As=new WeakMap,Es=new WeakMap,ks=new WeakMap,sa=new WeakMap;function la(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function aa(e){return e.__v_skip||!Object.isExtensible(e)?0:la(Fl(e))}function Un(e){return ht(e)?e:Wn(e,!1,Jl,ia,As)}function oa(e){return Wn(e,!1,Ql,na,Es)}function fn(e){return Wn(e,!0,Xl,ra,ks)}function Wn(e,t,i,n,r){if(!pe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=aa(e);if(s===0)return e;const l=r.get(e);if(l)return l;const a=new Proxy(e,s===2?n:i);return r.set(e,a),a}function Ot(e){return ht(e)?Ot(e.__v_raw):!!(e&&e.__v_isReactive)}function ht(e){return!!(e&&e.__v_isReadonly)}function De(e){return!!(e&&e.__v_isShallow)}function Gn(e){return e?!!e.__v_raw:!1}function se(e){const t=e&&e.__v_raw;return t?se(t):e}function ca(e){return!le(e,"__v_skip")&&Object.isExtensible(e)&&fs(e,"__v_skip",!0),e}const st=e=>pe(e)?Un(e):e,ri=e=>pe(e)?fn(e):e;function _e(e){return e?e.__v_isRef===!0:!1}function Ls(e){return ua(e,!1)}function ua(e,t){return _e(e)?e:new da(e,t)}class da{constructor(t,i){this.dep=new Nn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=i?t:se(t),this._value=i?t:st(t),this.__v_isShallow=i}get value(){return this.dep.track(),this._value}set value(t){const i=this._rawValue,n=this.__v_isShallow||De(t)||ht(t);t=n?t:se(t),ft(t,i)&&(this._rawValue=t,this._value=n?t:st(t),this.dep.trigger())}}function wi(e){return _e(e)?e.value:e}const fa={get:(e,t,i)=>t==="__v_raw"?e:wi(Reflect.get(e,t,i)),set:(e,t,i,n)=>{const r=e[t];return _e(r)&&!_e(i)?(r.value=i,!0):Reflect.set(e,t,i,n)}};function Ts(e){return Ot(e)?e:new Proxy(e,fa)}class pa{constructor(t,i,n){this.fn=t,this.setter=i,this._value=void 0,this.dep=new Nn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ii-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!i,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&de!==this)return bs(this,!0),!0}get value(){const t=this.dep.track();return $s(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ma(e,t,i=!1){let n,r;return G(e)?n=e:(n=e.get,r=e.set),new pa(n,r,i)}const xi={},Si=new WeakMap;let wt;function ha(e,t=!1,i=wt){if(i){let n=Si.get(i);n||Si.set(i,n=[]),n.push(e)}}function ga(e,t,i=fe){const{immediate:n,deep:r,once:s,scheduler:l,augmentJob:a,call:c}=i,d=x=>r?x:De(x)||r===!1||r===0?ut(x,1):ut(x);let u,p,h,v,k=!1,y=!1;if(_e(e)?(p=()=>e.value,k=De(e)):Ot(e)?(p=()=>d(e),k=!0):W(e)?(y=!0,k=e.some(x=>Ot(x)||De(x)),p=()=>e.map(x=>{if(_e(x))return x.value;if(Ot(x))return d(x);if(G(x))return c?c(x,2):x()})):G(e)?t?p=c?()=>c(e,2):e:p=()=>{if(h){nt();try{h()}finally{rt()}}const x=wt;wt=u;try{return c?c(e,3,[v]):e(v)}finally{wt=x}}:p=Ge,t&&r){const x=p,w=r===!0?1/0:r;p=()=>ut(x(),w)}const z=jl(),q=()=>{u.stop(),z&&z.active&&Rn(z.effects,u)};if(s&&t){const x=t;t=(...w)=>{x(...w),q()}}let b=y?new Array(e.length).fill(xi):xi;const g=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(t){const w=u.run();if(r||k||(y?w.some((_,E)=>ft(_,b[E])):ft(w,b))){h&&h();const _=wt;wt=u;try{const E=[w,b===xi?void 0:y&&b[0]===xi?[]:b,v];b=w,c?c(t,3,E):t(...E)}finally{wt=_}}}else u.run()};return a&&a(g),u=new gs(p),u.scheduler=l?()=>l(g,!1):g,v=x=>ha(x,!1,u),h=u.onStop=()=>{const x=Si.get(u);if(x){if(c)c(x,4);else for(const w of x)w();Si.delete(u)}},t?n?g(!0):b=u.run():l?l(g.bind(null,!0),!0):u.run(),q.pause=u.pause.bind(u),q.resume=u.resume.bind(u),q.stop=q,q}function ut(e,t=1/0,i){if(t<=0||!pe(e)||e.__v_skip||(i=i||new Map,(i.get(e)||0)>=t))return e;if(i.set(e,t),t--,_e(e))ut(e.value,t,i);else if(W(e))for(let n=0;n<e.length;n++)ut(e[n],t,i);else if(as(e)||Pt(e))e.forEach(n=>{ut(n,t,i)});else if(us(e)){for(const n in e)ut(e[n],t,i);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&ut(e[n],t,i)}return e}function di(e,t,i,n){try{return n?e(...n):e()}catch(r){Hi(r,t,i)}}function Ke(e,t,i,n){if(G(e)){const r=di(e,t,i,n);return r&&os(r)&&r.catch(s=>{Hi(s,t,i)}),r}if(W(e)){const r=[];for(let s=0;s<e.length;s++)r.push(Ke(e[s],t,i,n));return r}}function Hi(e,t,i,n=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||fe;if(t){let a=t.parent;const c=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${i}`;for(;a;){const u=a.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,c,d)===!1)return}a=a.parent}if(s){nt(),di(s,null,10,[e,c,d]),rt();return}}xa(e,i,r,n,l)}function xa(e,t,i,n=!0,r=!1){if(r)throw e;console.error(e)}const we=[];let je=-1;const Rt=[];let ot=null,kt=0;const Fs=Promise.resolve();let Ii=null;function X(e){const t=Ii||Fs;return e?t.then(this?e.bind(this):e):t}function ba(e){let t=je+1,i=we.length;for(;t<i;){const n=t+i>>>1,r=we[n],s=si(r);s<e||s===e&&r.flags&2?t=n+1:i=n}return t}function Kn(e){if(!(e.flags&1)){const t=si(e),i=we[we.length-1];!i||!(e.flags&2)&&t>=si(i)?we.push(e):we.splice(ba(t),0,e),e.flags|=1,Ps()}}function Ps(){Ii||(Ii=Fs.then(Rs))}function va(e){W(e)?Rt.push(...e):ot&&e.id===-1?ot.splice(kt+1,0,e):e.flags&1||(Rt.push(e),e.flags|=1),Ps()}function pr(e,t,i=je+1){for(;i<we.length;i++){const n=we[i];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;we.splice(i,1),i--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Os(e){if(Rt.length){const t=[...new Set(Rt)].sort((i,n)=>si(i)-si(n));if(Rt.length=0,ot){ot.push(...t);return}for(ot=t,kt=0;kt<ot.length;kt++){const i=ot[kt];i.flags&4&&(i.flags&=-2),i.flags&8||i(),i.flags&=-2}ot=null,kt=0}}const si=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Rs(e){try{for(je=0;je<we.length;je++){const t=we[je];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),di(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;je<we.length;je++){const t=we[je];t&&(t.flags&=-2)}je=-1,we.length=0,Os(),Ii=null,(we.length||Rt.length)&&Rs()}}let We=null,Ds=null;function Ci(e){const t=We;return We=e,Ds=e&&e.type.__scopeId||null,t}function _a(e,t=We,i){if(!t||e._n)return e;const n=(...r)=>{n._d&&ki(-1);const s=Ci(t);let l;try{l=e(...r)}finally{Ci(s),n._d&&ki(1)}return l};return n._n=!0,n._c=!0,n._d=!0,n}function $t(e,t,i,n){const r=e.dirs,s=t&&t.dirs;for(let l=0;l<r.length;l++){const a=r[l];s&&(a.oldValue=s[l].value);let c=a.dir[n];c&&(nt(),Ke(c,i,8,[e.el,a,e,t]),rt())}}const $a=Symbol("_vte"),ya=e=>e.__isTeleport,wa=Symbol("_leaveCb");function Yn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Yn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Y(e,t){return G(e)?$e({name:e.name},t,{setup:e}):e}function Ms(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Ai=new WeakMap;function Jt(e,t,i,n,r=!1){if(W(e)){e.forEach((k,y)=>Jt(k,t&&(W(t)?t[y]:t),i,n,r));return}if(Xt(n)&&!r){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Jt(e,t,i,n.component.subTree);return}const s=n.shapeFlag&4?Qn(n.component):n.el,l=r?null:s,{i:a,r:c}=e,d=t&&t.r,u=a.refs===fe?a.refs={}:a.refs,p=a.setupState,h=se(p),v=p===fe?ls:k=>le(h,k);if(d!=null&&d!==c){if(mr(t),he(d))u[d]=null,v(d)&&(p[d]=null);else if(_e(d)){d.value=null;const k=t;k.k&&(u[k.k]=null)}}if(G(c))di(c,a,12,[l,u]);else{const k=he(c),y=_e(c);if(k||y){const z=()=>{if(e.f){const q=k?v(c)?p[c]:u[c]:c.value;if(r)W(q)&&Rn(q,s);else if(W(q))q.includes(s)||q.push(s);else if(k)u[c]=[s],v(c)&&(p[c]=u[c]);else{const b=[s];c.value=b,e.k&&(u[e.k]=b)}}else k?(u[c]=l,v(c)&&(p[c]=l)):y&&(c.value=l,e.k&&(u[e.k]=l))};if(l){const q=()=>{z(),Ai.delete(e)};q.id=-1,Ai.set(e,q),Le(q,i)}else mr(e),z()}}}function mr(e){const t=Ai.get(e);t&&(t.flags|=8,Ai.delete(e))}zi().requestIdleCallback;zi().cancelIdleCallback;const Xt=e=>!!e.type.__asyncLoader,zs=e=>e.type.__isKeepAlive;function Sa(e,t){Hs(e,"a",t)}function Ia(e,t){Hs(e,"da",t)}function Hs(e,t,i=Se){const n=e.__wdc||(e.__wdc=()=>{let r=i;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(qi(t,n,i),i){let r=i.parent;for(;r&&r.parent;)zs(r.parent.vnode)&&Ca(n,t,i,r),r=r.parent}}function Ca(e,t,i,n){const r=qi(t,e,n,!0);qs(()=>{Rn(n[t],r)},i)}function qi(e,t,i=Se,n=!1){if(i){const r=i[e]||(i[e]=[]),s=t.__weh||(t.__weh=(...l)=>{nt();const a=fi(i),c=Ke(t,i,e,l);return a(),rt(),c});return n?r.unshift(s):r.push(s),s}}const lt=e=>(t,i=Se)=>{(!ai||e==="sp")&&qi(e,(...n)=>t(...n),i)},Aa=lt("bm"),Z=lt("m"),Ea=lt("bu"),ka=lt("u"),La=lt("bum"),qs=lt("um"),Ta=lt("sp"),Fa=lt("rtg"),Pa=lt("rtc");function Oa(e,t=Se){qi("ec",e,t)}const Ra=Symbol.for("v-ndc"),pn=e=>e?ll(e)?Qn(e):pn(e.parent):null,Qt=$e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>pn(e.parent),$root:e=>pn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ns(e),$forceUpdate:e=>e.f||(e.f=()=>{Kn(e.update)}),$nextTick:e=>e.n||(e.n=X.bind(e.proxy)),$watch:e=>Ga.bind(e)}),Ji=(e,t)=>e!==fe&&!e.__isScriptSetup&&le(e,t),Da={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:i,setupState:n,data:r,props:s,accessCache:l,type:a,appContext:c}=e;if(t[0]!=="$"){const h=l[t];if(h!==void 0)switch(h){case 1:return n[t];case 2:return r[t];case 4:return i[t];case 3:return s[t]}else{if(Ji(n,t))return l[t]=1,n[t];if(r!==fe&&le(r,t))return l[t]=2,r[t];if(le(s,t))return l[t]=3,s[t];if(i!==fe&&le(i,t))return l[t]=4,i[t];mn&&(l[t]=0)}}const d=Qt[t];let u,p;if(d)return t==="$attrs"&&ve(e.attrs,"get",""),d(e);if((u=a.__cssModules)&&(u=u[t]))return u;if(i!==fe&&le(i,t))return l[t]=4,i[t];if(p=c.config.globalProperties,le(p,t))return p[t]},set({_:e},t,i){const{data:n,setupState:r,ctx:s}=e;return Ji(r,t)?(r[t]=i,!0):n!==fe&&le(n,t)?(n[t]=i,!0):le(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=i,!0)},has({_:{data:e,setupState:t,accessCache:i,ctx:n,appContext:r,props:s,type:l}},a){let c;return!!(i[a]||e!==fe&&a[0]!=="$"&&le(e,a)||Ji(t,a)||le(s,a)||le(n,a)||le(Qt,a)||le(r.config.globalProperties,a)||(c=l.__cssModules)&&c[a])},defineProperty(e,t,i){return i.get!=null?e._.accessCache[t]=0:le(i,"value")&&this.set(e,t,i.value,null),Reflect.defineProperty(e,t,i)}};function hr(e){return W(e)?e.reduce((t,i)=>(t[i]=null,t),{}):e}let mn=!0;function Ma(e){const t=Ns(e),i=e.proxy,n=e.ctx;mn=!1,t.beforeCreate&&gr(t.beforeCreate,e,"bc");const{data:r,computed:s,methods:l,watch:a,provide:c,inject:d,created:u,beforeMount:p,mounted:h,beforeUpdate:v,updated:k,activated:y,deactivated:z,beforeDestroy:q,beforeUnmount:b,destroyed:g,unmounted:x,render:w,renderTracked:_,renderTriggered:E,errorCaptured:D,serverPrefetch:F,expose:te,inheritAttrs:oe,components:be,directives:bt,filters:At}=t;if(d&&za(d,n,null),l)for(const ce in l){const U=l[ce];G(U)&&(n[ce]=U.bind(i))}if(r){const ce=r.call(i,i);pe(ce)&&(e.data=Un(ce))}if(mn=!0,s)for(const ce in s){const U=s[ce],ge=G(U)?U.bind(i,i):G(U.get)?U.get.bind(i,i):Ge,Oe=!G(U)&&G(U.set)?U.set.bind(i):Ge,Pe=Eo({get:ge,set:Oe});Object.defineProperty(n,ce,{enumerable:!0,configurable:!0,get:()=>Pe.value,set:me=>Pe.value=me})}if(a)for(const ce in a)Bs(a[ce],n,i,ce);if(c){const ce=G(c)?c.call(i):c;Reflect.ownKeys(ce).forEach(U=>{Va(U,ce[U])})}u&&gr(u,e,"c");function xe(ce,U){W(U)?U.forEach(ge=>ce(ge.bind(i))):U&&ce(U.bind(i))}if(xe(Aa,p),xe(Z,h),xe(Ea,v),xe(ka,k),xe(Sa,y),xe(Ia,z),xe(Oa,D),xe(Pa,_),xe(Fa,E),xe(La,b),xe(qs,x),xe(Ta,F),W(te))if(te.length){const ce=e.exposed||(e.exposed={});te.forEach(U=>{Object.defineProperty(ce,U,{get:()=>i[U],set:ge=>i[U]=ge,enumerable:!0})})}else e.exposed||(e.exposed={});w&&e.render===Ge&&(e.render=w),oe!=null&&(e.inheritAttrs=oe),be&&(e.components=be),bt&&(e.directives=bt),F&&Ms(e)}function za(e,t,i=Ge){W(e)&&(e=hn(e));for(const n in e){const r=e[n];let s;pe(r)?"default"in r?s=ei(r.from||n,r.default,!0):s=ei(r.from||n):s=ei(r),_e(s)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:l=>s.value=l}):t[n]=s}}function gr(e,t,i){Ke(W(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,i)}function Bs(e,t,i,n){let r=n.includes(".")?Us(i,n):()=>i[n];if(he(e)){const s=t[e];G(s)&&Xi(r,s)}else if(G(e))Xi(r,e.bind(i));else if(pe(e))if(W(e))e.forEach(s=>Bs(s,t,i,n));else{const s=G(e.handler)?e.handler.bind(i):t[e.handler];G(s)&&Xi(r,s,e)}}function Ns(e){const t=e.type,{mixins:i,extends:n}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:l}}=e.appContext,a=s.get(t);let c;return a?c=a:!r.length&&!i&&!n?c=t:(c={},r.length&&r.forEach(d=>Ei(c,d,l,!0)),Ei(c,t,l)),pe(t)&&s.set(t,c),c}function Ei(e,t,i,n=!1){const{mixins:r,extends:s}=t;s&&Ei(e,s,i,!0),r&&r.forEach(l=>Ei(e,l,i,!0));for(const l in t)if(!(n&&l==="expose")){const a=Ha[l]||i&&i[l];e[l]=a?a(e[l],t[l]):t[l]}return e}const Ha={data:xr,props:br,emits:br,methods:Wt,computed:Wt,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:Wt,directives:Wt,watch:Ba,provide:xr,inject:qa};function xr(e,t){return t?e?function(){return $e(G(e)?e.call(this,this):e,G(t)?t.call(this,this):t)}:t:e}function qa(e,t){return Wt(hn(e),hn(t))}function hn(e){if(W(e)){const t={};for(let i=0;i<e.length;i++)t[e[i]]=e[i];return t}return e}function ye(e,t){return e?[...new Set([].concat(e,t))]:t}function Wt(e,t){return e?$e(Object.create(null),e,t):t}function br(e,t){return e?W(e)&&W(t)?[...new Set([...e,...t])]:$e(Object.create(null),hr(e),hr(t??{})):t}function Ba(e,t){if(!e)return t;if(!t)return e;const i=$e(Object.create(null),e);for(const n in t)i[n]=ye(e[n],t[n]);return i}function js(){return{app:null,config:{isNativeTag:ls,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Na=0;function ja(e,t){return function(n,r=null){G(n)||(n=$e({},n)),r!=null&&!pe(r)&&(r=null);const s=js(),l=new WeakSet,a=[];let c=!1;const d=s.app={_uid:Na++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Lo,get config(){return s.config},set config(u){},use(u,...p){return l.has(u)||(u&&G(u.install)?(l.add(u),u.install(d,...p)):G(u)&&(l.add(u),u(d,...p))),d},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),d},component(u,p){return p?(s.components[u]=p,d):s.components[u]},directive(u,p){return p?(s.directives[u]=p,d):s.directives[u]},mount(u,p,h){if(!c){const v=d._ceVNode||j(n,r);return v.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),e(v,u,h),c=!0,d._container=u,u.__vue_app__=d,Qn(v.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Ke(a,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(u,p){return s.provides[u]=p,d},runWithContext(u){const p=Dt;Dt=d;try{return u()}finally{Dt=p}}};return d}}let Dt=null;function Va(e,t){if(Se){let i=Se.provides;const n=Se.parent&&Se.parent.provides;n===i&&(i=Se.provides=Object.create(n)),i[e]=t}}function ei(e,t,i=!1){const n=sl();if(n||Dt){let r=Dt?Dt._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return i&&G(t)?t.call(n&&n.proxy):t}}const Ua=Symbol.for("v-scx"),Wa=()=>ei(Ua);function Xi(e,t,i){return Vs(e,t,i)}function Vs(e,t,i=fe){const{immediate:n,deep:r,flush:s,once:l}=i,a=$e({},i),c=t&&n||!t&&s!=="post";let d;if(ai){if(s==="sync"){const v=Wa();d=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=Ge,v.resume=Ge,v.pause=Ge,v}}const u=Se;a.call=(v,k,y)=>Ke(v,u,k,y);let p=!1;s==="post"?a.scheduler=v=>{Le(v,u&&u.suspense)}:s!=="sync"&&(p=!0,a.scheduler=(v,k)=>{k?v():Kn(v)}),a.augmentJob=v=>{t&&(v.flags|=4),p&&(v.flags|=2,u&&(v.id=u.uid,v.i=u))};const h=ga(e,t,a);return ai&&(d?d.push(h):c&&h()),h}function Ga(e,t,i){const n=this.proxy,r=he(e)?e.includes(".")?Us(n,e):()=>n[e]:e.bind(n,n);let s;G(t)?s=t:(s=t.handler,i=t);const l=fi(this),a=Vs(r,s.bind(n),i);return l(),a}function Us(e,t){const i=t.split(".");return()=>{let n=e;for(let r=0;r<i.length&&n;r++)n=n[i[r]];return n}}const Ka=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${mt(t)}Modifiers`]||e[`${Ct(t)}Modifiers`];function Ya(e,t,...i){if(e.isUnmounted)return;const n=e.vnode.props||fe;let r=i;const s=t.startsWith("update:"),l=s&&Ka(n,t.slice(7));l&&(l.trim&&(r=i.map(u=>he(u)?u.trim():u)),l.number&&(r=i.map(Rl)));let a,c=n[a=Ui(t)]||n[a=Ui(mt(t))];!c&&s&&(c=n[a=Ui(Ct(t))]),c&&Ke(c,e,6,r);const d=n[a+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ke(d,e,6,r)}}const Za=new WeakMap;function Ws(e,t,i=!1){const n=i?Za:t.emitsCache,r=n.get(e);if(r!==void 0)return r;const s=e.emits;let l={},a=!1;if(!G(e)){const c=d=>{const u=Ws(d,t,!0);u&&(a=!0,$e(l,u))};!i&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!a?(pe(e)&&n.set(e,null),null):(W(s)?s.forEach(c=>l[c]=null):$e(l,s),pe(e)&&n.set(e,l),l)}function Bi(e,t){return!e||!Ri(t)?!1:(t=t.slice(2).replace(/Once$/,""),le(e,t[0].toLowerCase()+t.slice(1))||le(e,Ct(t))||le(e,t))}function vr(e){const{type:t,vnode:i,proxy:n,withProxy:r,propsOptions:[s],slots:l,attrs:a,emit:c,render:d,renderCache:u,props:p,data:h,setupState:v,ctx:k,inheritAttrs:y}=e,z=Ci(e);let q,b;try{if(i.shapeFlag&4){const x=r||n,w=x;q=Ue(d.call(w,x,u,p,v,h,k)),b=a}else{const x=t;q=Ue(x.length>1?x(p,{attrs:a,slots:l,emit:c}):x(p,null)),b=t.props?a:Ja(a)}}catch(x){ti.length=0,Hi(x,e,1),q=j(Mt)}let g=q;if(b&&y!==!1){const x=Object.keys(b),{shapeFlag:w}=g;x.length&&w&7&&(s&&x.some(On)&&(b=Xa(b,s)),g=zt(g,b,!1,!0))}return i.dirs&&(g=zt(g,null,!1,!0),g.dirs=g.dirs?g.dirs.concat(i.dirs):i.dirs),i.transition&&Yn(g,i.transition),q=g,Ci(z),q}const Ja=e=>{let t;for(const i in e)(i==="class"||i==="style"||Ri(i))&&((t||(t={}))[i]=e[i]);return t},Xa=(e,t)=>{const i={};for(const n in e)(!On(n)||!(n.slice(9)in t))&&(i[n]=e[n]);return i};function Qa(e,t,i){const{props:n,children:r,component:s}=e,{props:l,children:a,patchFlag:c}=t,d=s.emitsOptions;if(t.dirs||t.transition)return!0;if(i&&c>=0){if(c&1024)return!0;if(c&16)return n?_r(n,l,d):!!l;if(c&8){const u=t.dynamicProps;for(let p=0;p<u.length;p++){const h=u[p];if(l[h]!==n[h]&&!Bi(d,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===l?!1:n?l?_r(n,l,d):!0:!!l;return!1}function _r(e,t,i){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(t[s]!==e[s]&&!Bi(i,s))return!0}return!1}function eo({vnode:e,parent:t},i){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n===e)(e=t.vnode).el=i,t=t.parent;else break}}const Gs={},Ks=()=>Object.create(Gs),Ys=e=>Object.getPrototypeOf(e)===Gs;function to(e,t,i,n=!1){const r={},s=Ks();e.propsDefaults=Object.create(null),Zs(e,t,r,s);for(const l in e.propsOptions[0])l in r||(r[l]=void 0);i?e.props=n?r:oa(r):e.type.props?e.props=r:e.props=s,e.attrs=s}function io(e,t,i,n){const{props:r,attrs:s,vnode:{patchFlag:l}}=e,a=se(r),[c]=e.propsOptions;let d=!1;if((n||l>0)&&!(l&16)){if(l&8){const u=e.vnode.dynamicProps;for(let p=0;p<u.length;p++){let h=u[p];if(Bi(e.emitsOptions,h))continue;const v=t[h];if(c)if(le(s,h))v!==s[h]&&(s[h]=v,d=!0);else{const k=mt(h);r[k]=gn(c,a,k,v,e,!1)}else v!==s[h]&&(s[h]=v,d=!0)}}}else{Zs(e,t,r,s)&&(d=!0);let u;for(const p in a)(!t||!le(t,p)&&((u=Ct(p))===p||!le(t,u)))&&(c?i&&(i[p]!==void 0||i[u]!==void 0)&&(r[p]=gn(c,a,p,void 0,e,!0)):delete r[p]);if(s!==a)for(const p in s)(!t||!le(t,p))&&(delete s[p],d=!0)}d&&tt(e.attrs,"set","")}function Zs(e,t,i,n){const[r,s]=e.propsOptions;let l=!1,a;if(t)for(let c in t){if(Kt(c))continue;const d=t[c];let u;r&&le(r,u=mt(c))?!s||!s.includes(u)?i[u]=d:(a||(a={}))[u]=d:Bi(e.emitsOptions,c)||(!(c in n)||d!==n[c])&&(n[c]=d,l=!0)}if(s){const c=se(i),d=a||fe;for(let u=0;u<s.length;u++){const p=s[u];i[p]=gn(r,c,p,d[p],e,!le(d,p))}}return l}function gn(e,t,i,n,r,s){const l=e[i];if(l!=null){const a=le(l,"default");if(a&&n===void 0){const c=l.default;if(l.type!==Function&&!l.skipFactory&&G(c)){const{propsDefaults:d}=r;if(i in d)n=d[i];else{const u=fi(r);n=d[i]=c.call(null,t),u()}}else n=c;r.ce&&r.ce._setProp(i,n)}l[0]&&(s&&!a?n=!1:l[1]&&(n===""||n===Ct(i))&&(n=!0))}return n}const no=new WeakMap;function Js(e,t,i=!1){const n=i?no:t.propsCache,r=n.get(e);if(r)return r;const s=e.props,l={},a=[];let c=!1;if(!G(e)){const u=p=>{c=!0;const[h,v]=Js(p,t,!0);$e(l,h),v&&a.push(...v)};!i&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!c)return pe(e)&&n.set(e,Ft),Ft;if(W(s))for(let u=0;u<s.length;u++){const p=mt(s[u]);$r(p)&&(l[p]=fe)}else if(s)for(const u in s){const p=mt(u);if($r(p)){const h=s[u],v=l[p]=W(h)||G(h)?{type:h}:$e({},h),k=v.type;let y=!1,z=!0;if(W(k))for(let q=0;q<k.length;++q){const b=k[q],g=G(b)&&b.name;if(g==="Boolean"){y=!0;break}else g==="String"&&(z=!1)}else y=G(k)&&k.name==="Boolean";v[0]=y,v[1]=z,(y||le(v,"default"))&&a.push(p)}}const d=[l,a];return pe(e)&&n.set(e,d),d}function $r(e){return e[0]!=="$"&&!Kt(e)}const Zn=e=>e==="_"||e==="_ctx"||e==="$stable",Jn=e=>W(e)?e.map(Ue):[Ue(e)],ro=(e,t,i)=>{if(t._n)return t;const n=_a((...r)=>Jn(t(...r)),i);return n._c=!1,n},Xs=(e,t,i)=>{const n=e._ctx;for(const r in e){if(Zn(r))continue;const s=e[r];if(G(s))t[r]=ro(r,s,n);else if(s!=null){const l=Jn(s);t[r]=()=>l}}},Qs=(e,t)=>{const i=Jn(t);e.slots.default=()=>i},el=(e,t,i)=>{for(const n in t)(i||!Zn(n))&&(e[n]=t[n])},so=(e,t,i)=>{const n=e.slots=Ks();if(e.vnode.shapeFlag&32){const r=t._;r?(el(n,t,i),i&&fs(n,"_",r,!0)):Xs(t,n)}else t&&Qs(e,t)},lo=(e,t,i)=>{const{vnode:n,slots:r}=e;let s=!0,l=fe;if(n.shapeFlag&32){const a=t._;a?i&&a===1?s=!1:el(r,t,i):(s=!t.$stable,Xs(t,r)),l=t}else t&&(Qs(e,t),l={default:1});if(s)for(const a in r)!Zn(a)&&l[a]==null&&delete r[a]},Le=fo;function ao(e){return oo(e)}function oo(e,t){const i=zi();i.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:l,createText:a,createComment:c,setText:d,setElementText:u,parentNode:p,nextSibling:h,setScopeId:v=Ge,insertStaticContent:k}=e,y=(f,m,$,A=null,S=null,I=null,M=void 0,O=null,P=!!m.dynamicChildren)=>{if(f===m)return;f&&!Vt(f,m)&&(A=Ze(f),me(f,S,I,!0),f=null),m.patchFlag===-2&&(P=!1,m.dynamicChildren=null);const{type:C,ref:N,shapeFlag:H}=m;switch(C){case Ni:z(f,m,$,A);break;case Mt:q(f,m,$,A);break;case _i:f==null&&b(m,$,A,M);break;case Ve:be(f,m,$,A,S,I,M,O,P);break;default:H&1?w(f,m,$,A,S,I,M,O,P):H&6?bt(f,m,$,A,S,I,M,O,P):(H&64||H&128)&&C.process(f,m,$,A,S,I,M,O,P,Je)}N!=null&&S?Jt(N,f&&f.ref,I,m||f,!m):N==null&&f&&f.ref!=null&&Jt(f.ref,null,I,f,!0)},z=(f,m,$,A)=>{if(f==null)n(m.el=a(m.children),$,A);else{const S=m.el=f.el;m.children!==f.children&&d(S,m.children)}},q=(f,m,$,A)=>{f==null?n(m.el=c(m.children||""),$,A):m.el=f.el},b=(f,m,$,A)=>{[f.el,f.anchor]=k(f.children,m,$,A,f.el,f.anchor)},g=({el:f,anchor:m},$,A)=>{let S;for(;f&&f!==m;)S=h(f),n(f,$,A),f=S;n(m,$,A)},x=({el:f,anchor:m})=>{let $;for(;f&&f!==m;)$=h(f),r(f),f=$;r(m)},w=(f,m,$,A,S,I,M,O,P)=>{if(m.type==="svg"?M="svg":m.type==="math"&&(M="mathml"),f==null)_(m,$,A,S,I,M,O,P);else{const C=f.el&&f.el._isVueCE?f.el:null;try{C&&C._beginPatch(),F(f,m,S,I,M,O,P)}finally{C&&C._endPatch()}}},_=(f,m,$,A,S,I,M,O)=>{let P,C;const{props:N,shapeFlag:H,transition:B,dirs:V}=f;if(P=f.el=l(f.type,I,N&&N.is,N),H&8?u(P,f.children):H&16&&D(f.children,P,null,A,S,Qi(f,I),M,O),V&&$t(f,null,A,"created"),E(P,f,f.scopeId,M,A),N){for(const ue in N)ue!=="value"&&!Kt(ue)&&s(P,ue,null,N[ue],I,A);"value"in N&&s(P,"value",null,N.value,I),(C=N.onVnodeBeforeMount)&&Ne(C,A,f)}V&&$t(f,null,A,"beforeMount");const ne=co(S,B);ne&&B.beforeEnter(P),n(P,m,$),((C=N&&N.onVnodeMounted)||ne||V)&&Le(()=>{C&&Ne(C,A,f),ne&&B.enter(P),V&&$t(f,null,A,"mounted")},S)},E=(f,m,$,A,S)=>{if($&&v(f,$),A)for(let I=0;I<A.length;I++)v(f,A[I]);if(S){let I=S.subTree;if(m===I||nl(I.type)&&(I.ssContent===m||I.ssFallback===m)){const M=S.vnode;E(f,M,M.scopeId,M.slotScopeIds,S.parent)}}},D=(f,m,$,A,S,I,M,O,P=0)=>{for(let C=P;C<f.length;C++){const N=f[C]=O?ct(f[C]):Ue(f[C]);y(null,N,m,$,A,S,I,M,O)}},F=(f,m,$,A,S,I,M)=>{const O=m.el=f.el;let{patchFlag:P,dynamicChildren:C,dirs:N}=m;P|=f.patchFlag&16;const H=f.props||fe,B=m.props||fe;let V;if($&&yt($,!1),(V=B.onVnodeBeforeUpdate)&&Ne(V,$,m,f),N&&$t(m,f,$,"beforeUpdate"),$&&yt($,!0),(H.innerHTML&&B.innerHTML==null||H.textContent&&B.textContent==null)&&u(O,""),C?te(f.dynamicChildren,C,O,$,A,Qi(m,S),I):M||U(f,m,O,null,$,A,Qi(m,S),I,!1),P>0){if(P&16)oe(O,H,B,$,S);else if(P&2&&H.class!==B.class&&s(O,"class",null,B.class,S),P&4&&s(O,"style",H.style,B.style,S),P&8){const ne=m.dynamicProps;for(let ue=0;ue<ne.length;ue++){const ae=ne[ue],Ie=H[ae],Ce=B[ae];(Ce!==Ie||ae==="value")&&s(O,ae,Ie,Ce,S,$)}}P&1&&f.children!==m.children&&u(O,m.children)}else!M&&C==null&&oe(O,H,B,$,S);((V=B.onVnodeUpdated)||N)&&Le(()=>{V&&Ne(V,$,m,f),N&&$t(m,f,$,"updated")},A)},te=(f,m,$,A,S,I,M)=>{for(let O=0;O<m.length;O++){const P=f[O],C=m[O],N=P.el&&(P.type===Ve||!Vt(P,C)||P.shapeFlag&198)?p(P.el):$;y(P,C,N,null,A,S,I,M,!0)}},oe=(f,m,$,A,S)=>{if(m!==$){if(m!==fe)for(const I in m)!Kt(I)&&!(I in $)&&s(f,I,m[I],null,S,A);for(const I in $){if(Kt(I))continue;const M=$[I],O=m[I];M!==O&&I!=="value"&&s(f,I,O,M,S,A)}"value"in $&&s(f,"value",m.value,$.value,S)}},be=(f,m,$,A,S,I,M,O,P)=>{const C=m.el=f?f.el:a(""),N=m.anchor=f?f.anchor:a("");let{patchFlag:H,dynamicChildren:B,slotScopeIds:V}=m;V&&(O=O?O.concat(V):V),f==null?(n(C,$,A),n(N,$,A),D(m.children||[],$,N,S,I,M,O,P)):H>0&&H&64&&B&&f.dynamicChildren?(te(f.dynamicChildren,B,$,S,I,M,O),(m.key!=null||S&&m===S.subTree)&&tl(f,m,!0)):U(f,m,$,N,S,I,M,O,P)},bt=(f,m,$,A,S,I,M,O,P)=>{m.slotScopeIds=O,f==null?m.shapeFlag&512?S.ctx.activate(m,$,A,M,P):At(m,$,A,S,I,M,P):pi(f,m,P)},At=(f,m,$,A,S,I,M)=>{const O=f.component=yo(f,A,S);if(zs(f)&&(O.ctx.renderer=Je),wo(O,!1,M),O.asyncDep){if(S&&S.registerDep(O,xe,M),!f.el){const P=O.subTree=j(Mt);q(null,P,m,$),f.placeholder=P.el}}else xe(O,f,m,$,S,I,M)},pi=(f,m,$)=>{const A=m.component=f.component;if(Qa(f,m,$))if(A.asyncDep&&!A.asyncResolved){ce(A,m,$);return}else A.next=m,A.update();else m.el=f.el,A.vnode=m},xe=(f,m,$,A,S,I,M)=>{const O=()=>{if(f.isMounted){let{next:H,bu:B,u:V,parent:ne,vnode:ue}=f;{const qe=il(f);if(qe){H&&(H.el=ue.el,ce(f,H,M)),qe.asyncDep.then(()=>{f.isUnmounted||O()});return}}let ae=H,Ie;yt(f,!1),H?(H.el=ue.el,ce(f,H,M)):H=ue,B&&Wi(B),(Ie=H.props&&H.props.onVnodeBeforeUpdate)&&Ne(Ie,ne,H,ue),yt(f,!0);const Ce=vr(f),He=f.subTree;f.subTree=Ce,y(He,Ce,p(He.el),Ze(He),f,S,I),H.el=Ce.el,ae===null&&eo(f,Ce.el),V&&Le(V,S),(Ie=H.props&&H.props.onVnodeUpdated)&&Le(()=>Ne(Ie,ne,H,ue),S)}else{let H;const{el:B,props:V}=m,{bm:ne,m:ue,parent:ae,root:Ie,type:Ce}=f,He=Xt(m);yt(f,!1),ne&&Wi(ne),!He&&(H=V&&V.onVnodeBeforeMount)&&Ne(H,ae,m),yt(f,!0);{Ie.ce&&Ie.ce._def.shadowRoot!==!1&&Ie.ce._injectChildStyle(Ce);const qe=f.subTree=vr(f);y(null,qe,$,A,f,S,I),m.el=qe.el}if(ue&&Le(ue,S),!He&&(H=V&&V.onVnodeMounted)){const qe=m;Le(()=>Ne(H,ae,qe),S)}(m.shapeFlag&256||ae&&Xt(ae.vnode)&&ae.vnode.shapeFlag&256)&&f.a&&Le(f.a,S),f.isMounted=!0,m=$=A=null}};f.scope.on();const P=f.effect=new gs(O);f.scope.off();const C=f.update=P.run.bind(P),N=f.job=P.runIfDirty.bind(P);N.i=f,N.id=f.uid,P.scheduler=()=>Kn(N),yt(f,!0),C()},ce=(f,m,$)=>{m.component=f;const A=f.vnode.props;f.vnode=m,f.next=null,io(f,m.props,A,$),lo(f,m.children,$),nt(),pr(f),rt()},U=(f,m,$,A,S,I,M,O,P=!1)=>{const C=f&&f.children,N=f?f.shapeFlag:0,H=m.children,{patchFlag:B,shapeFlag:V}=m;if(B>0){if(B&128){Oe(C,H,$,A,S,I,M,O,P);return}else if(B&256){ge(C,H,$,A,S,I,M,O,P);return}}V&8?(N&16&&ze(C,S,I),H!==C&&u($,H)):N&16?V&16?Oe(C,H,$,A,S,I,M,O,P):ze(C,S,I,!0):(N&8&&u($,""),V&16&&D(H,$,A,S,I,M,O,P))},ge=(f,m,$,A,S,I,M,O,P)=>{f=f||Ft,m=m||Ft;const C=f.length,N=m.length,H=Math.min(C,N);let B;for(B=0;B<H;B++){const V=m[B]=P?ct(m[B]):Ue(m[B]);y(f[B],V,$,null,S,I,M,O,P)}C>N?ze(f,S,I,!0,!1,H):D(m,$,A,S,I,M,O,P,H)},Oe=(f,m,$,A,S,I,M,O,P)=>{let C=0;const N=m.length;let H=f.length-1,B=N-1;for(;C<=H&&C<=B;){const V=f[C],ne=m[C]=P?ct(m[C]):Ue(m[C]);if(Vt(V,ne))y(V,ne,$,null,S,I,M,O,P);else break;C++}for(;C<=H&&C<=B;){const V=f[H],ne=m[B]=P?ct(m[B]):Ue(m[B]);if(Vt(V,ne))y(V,ne,$,null,S,I,M,O,P);else break;H--,B--}if(C>H){if(C<=B){const V=B+1,ne=V<N?m[V].el:A;for(;C<=B;)y(null,m[C]=P?ct(m[C]):Ue(m[C]),$,ne,S,I,M,O,P),C++}}else if(C>B)for(;C<=H;)me(f[C],S,I,!0),C++;else{const V=C,ne=C,ue=new Map;for(C=ne;C<=B;C++){const ke=m[C]=P?ct(m[C]):Ue(m[C]);ke.key!=null&&ue.set(ke.key,C)}let ae,Ie=0;const Ce=B-ne+1;let He=!1,qe=0;const Nt=new Array(Ce);for(C=0;C<Ce;C++)Nt[C]=0;for(C=V;C<=H;C++){const ke=f[C];if(Ie>=Ce){me(ke,S,I,!0);continue}let Be;if(ke.key!=null)Be=ue.get(ke.key);else for(ae=ne;ae<=B;ae++)if(Nt[ae-ne]===0&&Vt(ke,m[ae])){Be=ae;break}Be===void 0?me(ke,S,I,!0):(Nt[Be-ne]=C+1,Be>=qe?qe=Be:He=!0,y(ke,m[Be],$,null,S,I,M,O,P),Ie++)}const ar=He?uo(Nt):Ft;for(ae=ar.length-1,C=Ce-1;C>=0;C--){const ke=ne+C,Be=m[ke],or=m[ke+1],cr=ke+1<N?or.el||or.placeholder:A;Nt[C]===0?y(null,Be,$,cr,S,I,M,O,P):He&&(ae<0||C!==ar[ae]?Pe(Be,$,cr,2):ae--)}}},Pe=(f,m,$,A,S=null)=>{const{el:I,type:M,transition:O,children:P,shapeFlag:C}=f;if(C&6){Pe(f.component.subTree,m,$,A);return}if(C&128){f.suspense.move(m,$,A);return}if(C&64){M.move(f,m,$,Je);return}if(M===Ve){n(I,m,$);for(let H=0;H<P.length;H++)Pe(P[H],m,$,A);n(f.anchor,m,$);return}if(M===_i){g(f,m,$);return}if(A!==2&&C&1&&O)if(A===0)O.beforeEnter(I),n(I,m,$),Le(()=>O.enter(I),S);else{const{leave:H,delayLeave:B,afterLeave:V}=O,ne=()=>{f.ctx.isUnmounted?r(I):n(I,m,$)},ue=()=>{I._isLeaving&&I[wa](!0),H(I,()=>{ne(),V&&V()})};B?B(I,ne,ue):ue()}else n(I,m,$)},me=(f,m,$,A=!1,S=!1)=>{const{type:I,props:M,ref:O,children:P,dynamicChildren:C,shapeFlag:N,patchFlag:H,dirs:B,cacheIndex:V}=f;if(H===-2&&(S=!1),O!=null&&(nt(),Jt(O,null,$,f,!0),rt()),V!=null&&(m.renderCache[V]=void 0),N&256){m.ctx.deactivate(f);return}const ne=N&1&&B,ue=!Xt(f);let ae;if(ue&&(ae=M&&M.onVnodeBeforeUnmount)&&Ne(ae,m,f),N&6)vt(f.component,$,A);else{if(N&128){f.suspense.unmount($,A);return}ne&&$t(f,null,m,"beforeUnmount"),N&64?f.type.remove(f,m,$,Je,A):C&&!C.hasOnce&&(I!==Ve||H>0&&H&64)?ze(C,m,$,!1,!0):(I===Ve&&H&384||!S&&N&16)&&ze(P,m,$),A&&mi(f)}(ue&&(ae=M&&M.onVnodeUnmounted)||ne)&&Le(()=>{ae&&Ne(ae,m,f),ne&&$t(f,null,m,"unmounted")},$)},mi=f=>{const{type:m,el:$,anchor:A,transition:S}=f;if(m===Ve){Me($,A);return}if(m===_i){x(f);return}const I=()=>{r($),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(f.shapeFlag&1&&S&&!S.persisted){const{leave:M,delayLeave:O}=S,P=()=>M($,I);O?O(f.el,I,P):P()}else I()},Me=(f,m)=>{let $;for(;f!==m;)$=h(f),r(f),f=$;r(m)},vt=(f,m,$)=>{const{bum:A,scope:S,job:I,subTree:M,um:O,m:P,a:C}=f;yr(P),yr(C),A&&Wi(A),S.stop(),I&&(I.flags|=8,me(M,f,m,$)),O&&Le(O,m),Le(()=>{f.isUnmounted=!0},m)},ze=(f,m,$,A=!1,S=!1,I=0)=>{for(let M=I;M<f.length;M++)me(f[M],m,$,A,S)},Ze=f=>{if(f.shapeFlag&6)return Ze(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const m=h(f.anchor||f.el),$=m&&m[$a];return $?h($):m};let _t=!1;const qt=(f,m,$)=>{f==null?m._vnode&&me(m._vnode,null,null,!0):y(m._vnode||null,f,m,null,null,null,$),m._vnode=f,_t||(_t=!0,pr(),Os(),_t=!1)},Je={p:y,um:me,m:Pe,r:mi,mt:At,mc:D,pc:U,pbc:te,n:Ze,o:e};return{render:qt,hydrate:void 0,createApp:ja(qt)}}function Qi({type:e,props:t},i){return i==="svg"&&e==="foreignObject"||i==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:i}function yt({effect:e,job:t},i){i?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function co(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function tl(e,t,i=!1){const n=e.children,r=t.children;if(W(n)&&W(r))for(let s=0;s<n.length;s++){const l=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ct(r[s]),a.el=l.el),!i&&a.patchFlag!==-2&&tl(l,a)),a.type===Ni&&a.patchFlag!==-1&&(a.el=l.el),a.type===Mt&&!a.el&&(a.el=l.el)}}function uo(e){const t=e.slice(),i=[0];let n,r,s,l,a;const c=e.length;for(n=0;n<c;n++){const d=e[n];if(d!==0){if(r=i[i.length-1],e[r]<d){t[n]=r,i.push(n);continue}for(s=0,l=i.length-1;s<l;)a=s+l>>1,e[i[a]]<d?s=a+1:l=a;d<e[i[s]]&&(s>0&&(t[n]=i[s-1]),i[s]=n)}}for(s=i.length,l=i[s-1];s-- >0;)i[s]=l,l=t[l];return i}function il(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:il(t)}function yr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const nl=e=>e.__isSuspense;function fo(e,t){t&&t.pendingBranch?W(e)?t.effects.push(...e):t.effects.push(e):va(e)}const Ve=Symbol.for("v-fgt"),Ni=Symbol.for("v-txt"),Mt=Symbol.for("v-cmt"),_i=Symbol.for("v-stc"),ti=[];let Te=null;function Q(e=!1){ti.push(Te=e?null:[])}function po(){ti.pop(),Te=ti[ti.length-1]||null}let li=1;function ki(e,t=!1){li+=e,e<0&&Te&&t&&(Te.hasOnce=!0)}function mo(e){return e.dynamicChildren=li>0?Te||Ft:null,po(),li>0&&Te&&Te.push(e),e}function ee(e,t,i,n,r,s){return mo(o(e,t,i,n,r,s,!0))}function Li(e){return e?e.__v_isVNode===!0:!1}function Vt(e,t){return e.type===t.type&&e.key===t.key}const rl=({key:e})=>e??null,$i=({ref:e,ref_key:t,ref_for:i})=>(typeof e=="number"&&(e=""+e),e!=null?he(e)||_e(e)||G(e)?{i:We,r:e,k:t,f:!!i}:e:null);function o(e,t=null,i=null,n=0,r=null,s=e===Ve?0:1,l=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&rl(t),ref:t&&$i(t),scopeId:Ds,slotScopeIds:null,children:i,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:We};return a?(Xn(c,i),s&128&&e.normalize(c)):i&&(c.shapeFlag|=he(i)?8:16),li>0&&!l&&Te&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Te.push(c),c}const j=ho;function ho(e,t=null,i=null,n=0,r=null,s=!1){if((!e||e===Ra)&&(e=Mt),Li(e)){const a=zt(e,t,!0);return i&&Xn(a,i),li>0&&!s&&Te&&(a.shapeFlag&6?Te[Te.indexOf(e)]=a:Te.push(a)),a.patchFlag=-2,a}if(Ao(e)&&(e=e.__vccOpts),t){t=go(t);let{class:a,style:c}=t;a&&!he(a)&&(t.class=zn(a)),pe(c)&&(Gn(c)&&!W(c)&&(c=$e({},c)),t.style=Mn(c))}const l=he(e)?1:nl(e)?128:ya(e)?64:pe(e)?4:G(e)?2:0;return o(e,t,i,n,r,l,s,!0)}function go(e){return e?Gn(e)||Ys(e)?$e({},e):e:null}function zt(e,t,i=!1,n=!1){const{props:r,ref:s,patchFlag:l,children:a,transition:c}=e,d=t?vo(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&rl(d),ref:t&&t.ref?i&&s?W(s)?s.concat($i(t)):[s,$i(t)]:$i(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ve?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&zt(e.ssContent),ssFallback:e.ssFallback&&zt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&n&&Yn(u,c.clone(u)),u}function xo(e=" ",t=0){return j(Ni,null,e,t)}function bo(e,t){const i=j(_i,null,e);return i.staticCount=t,i}function Ue(e){return e==null||typeof e=="boolean"?j(Mt):W(e)?j(Ve,null,e.slice()):Li(e)?ct(e):j(Ni,null,String(e))}function ct(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:zt(e)}function Xn(e,t){let i=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(W(t))i=16;else if(typeof t=="object")if(n&65){const r=t.default;r&&(r._c&&(r._d=!1),Xn(e,r()),r._c&&(r._d=!0));return}else{i=32;const r=t._;!r&&!Ys(t)?t._ctx=We:r===3&&We&&(We.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else G(t)?(t={default:t,_ctx:We},i=32):(t=String(t),n&64?(i=16,t=[xo(t)]):i=8);e.children=t,e.shapeFlag|=i}function vo(...e){const t={};for(let i=0;i<e.length;i++){const n=e[i];for(const r in n)if(r==="class")t.class!==n.class&&(t.class=zn([t.class,n.class]));else if(r==="style")t.style=Mn([t.style,n.style]);else if(Ri(r)){const s=t[r],l=n[r];l&&s!==l&&!(W(s)&&s.includes(l))&&(t[r]=s?[].concat(s,l):l)}else r!==""&&(t[r]=n[r])}return t}function Ne(e,t,i,n=null){Ke(e,t,7,[i,n])}const _o=js();let $o=0;function yo(e,t,i){const n=e.type,r=(t?t.appContext:e.appContext)||_o,s={uid:$o++,vnode:e,type:n,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Nl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Js(n,r),emitsOptions:Ws(n,r),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:n.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:i,suspenseId:i?i.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Ya.bind(null,s),e.ce&&e.ce(s),s}let Se=null;const sl=()=>Se||We;let Ti,xn;{const e=zi(),t=(i,n)=>{let r;return(r=e[i])||(r=e[i]=[]),r.push(n),s=>{r.length>1?r.forEach(l=>l(s)):r[0](s)}};Ti=t("__VUE_INSTANCE_SETTERS__",i=>Se=i),xn=t("__VUE_SSR_SETTERS__",i=>ai=i)}const fi=e=>{const t=Se;return Ti(e),e.scope.on(),()=>{e.scope.off(),Ti(t)}},wr=()=>{Se&&Se.scope.off(),Ti(null)};function ll(e){return e.vnode.shapeFlag&4}let ai=!1;function wo(e,t=!1,i=!1){t&&xn(t);const{props:n,children:r}=e.vnode,s=ll(e);to(e,n,s,t),so(e,r,i||t);const l=s?So(e,t):void 0;return t&&xn(!1),l}function So(e,t){const i=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Da);const{setup:n}=i;if(n){nt();const r=e.setupContext=n.length>1?Co(e):null,s=fi(e),l=di(n,e,0,[e.props,r]),a=os(l);if(rt(),s(),(a||e.sp)&&!Xt(e)&&Ms(e),a){if(l.then(wr,wr),t)return l.then(c=>{Sr(e,c)}).catch(c=>{Hi(c,e,0)});e.asyncDep=l}else Sr(e,l)}else al(e)}function Sr(e,t,i){G(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:pe(t)&&(e.setupState=Ts(t)),al(e)}function al(e,t,i){const n=e.type;e.render||(e.render=n.render||Ge);{const r=fi(e);nt();try{Ma(e)}finally{rt(),r()}}}const Io={get(e,t){return ve(e,"get",""),e[t]}};function Co(e){const t=i=>{e.exposed=i||{}};return{attrs:new Proxy(e.attrs,Io),slots:e.slots,emit:e.emit,expose:t}}function Qn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Ts(ca(e.exposed)),{get(t,i){if(i in t)return t[i];if(i in Qt)return Qt[i](e)},has(t,i){return i in t||i in Qt}})):e.proxy}function Ao(e){return G(e)&&"__vccOpts"in e}const Eo=(e,t)=>ma(e,t,ai);function ko(e,t,i){try{ki(-1);const n=arguments.length;return n===2?pe(t)&&!W(t)?Li(t)?j(e,null,[t]):j(e,t):j(e,null,t):(n>3?i=Array.prototype.slice.call(arguments,2):n===3&&Li(i)&&(i=[i]),j(e,t,i))}finally{ki(1)}}const Lo="3.5.25";let bn;const Ir=typeof window<"u"&&window.trustedTypes;if(Ir)try{bn=Ir.createPolicy("vue",{createHTML:e=>e})}catch{}const ol=bn?e=>bn.createHTML(e):e=>e,To="http://www.w3.org/2000/svg",Fo="http://www.w3.org/1998/Math/MathML",Qe=typeof document<"u"?document:null,Cr=Qe&&Qe.createElement("template"),Po={insert:(e,t,i)=>{t.insertBefore(e,i||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,i,n)=>{const r=t==="svg"?Qe.createElementNS(To,e):t==="mathml"?Qe.createElementNS(Fo,e):i?Qe.createElement(e,{is:i}):Qe.createElement(e);return e==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:e=>Qe.createTextNode(e),createComment:e=>Qe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Qe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,i,n,r,s){const l=i?i.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),i),!(r===s||!(r=r.nextSibling)););else{Cr.innerHTML=ol(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const a=Cr.content;if(n==="svg"||n==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,i)}return[l?l.nextSibling:t.firstChild,i?i.previousSibling:t.lastChild]}},Oo=Symbol("_vtc");function Ro(e,t,i){const n=e[Oo];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):i?e.setAttribute("class",t):e.className=t}const Ar=Symbol("_vod"),Do=Symbol("_vsh"),Mo=Symbol(""),zo=/(?:^|;)\s*display\s*:/;function Ho(e,t,i){const n=e.style,r=he(i);let s=!1;if(i&&!r){if(t)if(he(t))for(const l of t.split(";")){const a=l.slice(0,l.indexOf(":")).trim();i[a]==null&&yi(n,a,"")}else for(const l in t)i[l]==null&&yi(n,l,"");for(const l in i)l==="display"&&(s=!0),yi(n,l,i[l])}else if(r){if(t!==i){const l=n[Mo];l&&(i+=";"+l),n.cssText=i,s=zo.test(i)}}else t&&e.removeAttribute("style");Ar in e&&(e[Ar]=s?n.display:"",e[Do]&&(n.display="none"))}const Er=/\s*!important$/;function yi(e,t,i){if(W(i))i.forEach(n=>yi(e,t,n));else if(i==null&&(i=""),t.startsWith("--"))e.setProperty(t,i);else{const n=qo(e,t);Er.test(i)?e.setProperty(Ct(n),i.replace(Er,""),"important"):e[n]=i}}const kr=["Webkit","Moz","ms"],en={};function qo(e,t){const i=en[t];if(i)return i;let n=mt(t);if(n!=="filter"&&n in e)return en[t]=n;n=ds(n);for(let r=0;r<kr.length;r++){const s=kr[r]+n;if(s in e)return en[t]=s}return t}const Lr="http://www.w3.org/1999/xlink";function Tr(e,t,i,n,r,s=Bl(t)){n&&t.startsWith("xlink:")?i==null?e.removeAttributeNS(Lr,t.slice(6,t.length)):e.setAttributeNS(Lr,t,i):i==null||s&&!ps(i)?e.removeAttribute(t):e.setAttribute(t,s?"":xt(i)?String(i):i)}function Fr(e,t,i,n,r){if(t==="innerHTML"||t==="textContent"){i!=null&&(e[t]=t==="innerHTML"?ol(i):i);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?e.getAttribute("value")||"":e.value,c=i==null?e.type==="checkbox"?"on":"":String(i);(a!==c||!("_value"in e))&&(e.value=c),i==null&&e.removeAttribute(t),e._value=i;return}let l=!1;if(i===""||i==null){const a=typeof e[t];a==="boolean"?i=ps(i):i==null&&a==="string"?(i="",l=!0):a==="number"&&(i=0,l=!0)}try{e[t]=i}catch{}l&&e.removeAttribute(r||t)}function Bo(e,t,i,n){e.addEventListener(t,i,n)}function No(e,t,i,n){e.removeEventListener(t,i,n)}const Pr=Symbol("_vei");function jo(e,t,i,n,r=null){const s=e[Pr]||(e[Pr]={}),l=s[t];if(n&&l)l.value=n;else{const[a,c]=Vo(t);if(n){const d=s[t]=Go(n,r);Bo(e,a,d,c)}else l&&(No(e,a,l,c),s[t]=void 0)}}const Or=/(?:Once|Passive|Capture)$/;function Vo(e){let t;if(Or.test(e)){t={};let n;for(;n=e.match(Or);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ct(e.slice(2)),t]}let tn=0;const Uo=Promise.resolve(),Wo=()=>tn||(Uo.then(()=>tn=0),tn=Date.now());function Go(e,t){const i=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=i.attached)return;Ke(Ko(n,i.value),t,5,[n])};return i.value=e,i.attached=Wo(),i}function Ko(e,t){if(W(t)){const i=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{i.call(e),e._stopped=!0},t.map(n=>r=>!r._stopped&&n&&n(r))}else return t}const Rr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Yo=(e,t,i,n,r,s)=>{const l=r==="svg";t==="class"?Ro(e,n,l):t==="style"?Ho(e,i,n):Ri(t)?On(t)||jo(e,t,i,n,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Zo(e,t,n,l))?(Fr(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Tr(e,t,n,l,s,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!he(n))?Fr(e,mt(t),n,s,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),Tr(e,t,n,l))};function Zo(e,t,i,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&Rr(t)&&G(i));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Rr(t)&&he(i)?!1:t in e}const Jo=$e({patchProp:Yo},Po);let Dr;function Xo(){return Dr||(Dr=ao(Jo))}const Qo=((...e)=>{const t=Xo().createApp(...e),{mount:i}=t;return t.mount=n=>{const r=tc(n);if(!r)return;const s=t._component;!G(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const l=i(r,!1,ec(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),l},t});function ec(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function tc(e){return he(e)?document.querySelector(e):e}var Mr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ic(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nn={exports:{}},zr;function nc(){return zr||(zr=1,(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};var i=(function(n){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,l={},a={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function b(g){return g instanceof c?new c(g.type,b(g.content),g.alias):Array.isArray(g)?g.map(b):g.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++s}),b.__id},clone:function b(g,x){x=x||{};var w,_;switch(a.util.type(g)){case"Object":if(_=a.util.objId(g),x[_])return x[_];w={},x[_]=w;for(var E in g)g.hasOwnProperty(E)&&(w[E]=b(g[E],x));return w;case"Array":return _=a.util.objId(g),x[_]?x[_]:(w=[],x[_]=w,g.forEach(function(D,F){w[F]=b(D,x)}),w);default:return g}},getLanguage:function(b){for(;b;){var g=r.exec(b.className);if(g)return g[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,g){b.className=b.className.replace(RegExp(r,"gi"),""),b.classList.add("language-"+g)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(w){var b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(w.stack)||[])[1];if(b){var g=document.getElementsByTagName("script");for(var x in g)if(g[x].src==b)return g[x]}return null}},isActive:function(b,g,x){for(var w="no-"+g;b;){var _=b.classList;if(_.contains(g))return!0;if(_.contains(w))return!1;b=b.parentElement}return!!x}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(b,g){var x=a.util.clone(a.languages[b]);for(var w in g)x[w]=g[w];return x},insertBefore:function(b,g,x,w){w=w||a.languages;var _=w[b],E={};for(var D in _)if(_.hasOwnProperty(D)){if(D==g)for(var F in x)x.hasOwnProperty(F)&&(E[F]=x[F]);x.hasOwnProperty(D)||(E[D]=_[D])}var te=w[b];return w[b]=E,a.languages.DFS(a.languages,function(oe,be){be===te&&oe!=b&&(this[oe]=E)}),E},DFS:function b(g,x,w,_){_=_||{};var E=a.util.objId;for(var D in g)if(g.hasOwnProperty(D)){x.call(g,D,g[D],w||D);var F=g[D],te=a.util.type(F);te==="Object"&&!_[E(F)]?(_[E(F)]=!0,b(F,x,null,_)):te==="Array"&&!_[E(F)]&&(_[E(F)]=!0,b(F,x,D,_))}}},plugins:{},highlightAll:function(b,g){a.highlightAllUnder(document,b,g)},highlightAllUnder:function(b,g,x){var w={callback:x,container:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",w),w.elements=Array.prototype.slice.apply(w.container.querySelectorAll(w.selector)),a.hooks.run("before-all-elements-highlight",w);for(var _=0,E;E=w.elements[_++];)a.highlightElement(E,g===!0,w.callback)},highlightElement:function(b,g,x){var w=a.util.getLanguage(b),_=a.languages[w];a.util.setLanguage(b,w);var E=b.parentElement;E&&E.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(E,w);var D=b.textContent,F={element:b,language:w,grammar:_,code:D};function te(be){F.highlightedCode=be,a.hooks.run("before-insert",F),F.element.innerHTML=F.highlightedCode,a.hooks.run("after-highlight",F),a.hooks.run("complete",F),x&&x.call(F.element)}if(a.hooks.run("before-sanity-check",F),E=F.element.parentElement,E&&E.nodeName.toLowerCase()==="pre"&&!E.hasAttribute("tabindex")&&E.setAttribute("tabindex","0"),!F.code){a.hooks.run("complete",F),x&&x.call(F.element);return}if(a.hooks.run("before-highlight",F),!F.grammar){te(a.util.encode(F.code));return}if(g&&n.Worker){var oe=new Worker(a.filename);oe.onmessage=function(be){te(be.data)},oe.postMessage(JSON.stringify({language:F.language,code:F.code,immediateClose:!0}))}else te(a.highlight(F.code,F.grammar,F.language))},highlight:function(b,g,x){var w={code:b,grammar:g,language:x};if(a.hooks.run("before-tokenize",w),!w.grammar)throw new Error('The language "'+w.language+'" has no grammar.');return w.tokens=a.tokenize(w.code,w.grammar),a.hooks.run("after-tokenize",w),c.stringify(a.util.encode(w.tokens),w.language)},tokenize:function(b,g){var x=g.rest;if(x){for(var w in x)g[w]=x[w];delete g.rest}var _=new p;return h(_,_.head,b),u(b,_,g,_.head,0),k(_)},hooks:{all:{},add:function(b,g){var x=a.hooks.all;x[b]=x[b]||[],x[b].push(g)},run:function(b,g){var x=a.hooks.all[b];if(!(!x||!x.length))for(var w=0,_;_=x[w++];)_(g)}},Token:c};n.Prism=a;function c(b,g,x,w){this.type=b,this.content=g,this.alias=x,this.length=(w||"").length|0}c.stringify=function b(g,x){if(typeof g=="string")return g;if(Array.isArray(g)){var w="";return g.forEach(function(te){w+=b(te,x)}),w}var _={type:g.type,content:b(g.content,x),tag:"span",classes:["token",g.type],attributes:{},language:x},E=g.alias;E&&(Array.isArray(E)?Array.prototype.push.apply(_.classes,E):_.classes.push(E)),a.hooks.run("wrap",_);var D="";for(var F in _.attributes)D+=" "+F+'="'+(_.attributes[F]||"").replace(/"/g,"&quot;")+'"';return"<"+_.tag+' class="'+_.classes.join(" ")+'"'+D+">"+_.content+"</"+_.tag+">"};function d(b,g,x,w){b.lastIndex=g;var _=b.exec(x);if(_&&w&&_[1]){var E=_[1].length;_.index+=E,_[0]=_[0].slice(E)}return _}function u(b,g,x,w,_,E){for(var D in x)if(!(!x.hasOwnProperty(D)||!x[D])){var F=x[D];F=Array.isArray(F)?F:[F];for(var te=0;te<F.length;++te){if(E&&E.cause==D+","+te)return;var oe=F[te],be=oe.inside,bt=!!oe.lookbehind,At=!!oe.greedy,pi=oe.alias;if(At&&!oe.pattern.global){var xe=oe.pattern.toString().match(/[imsuy]*$/)[0];oe.pattern=RegExp(oe.pattern.source,xe+"g")}for(var ce=oe.pattern||oe,U=w.next,ge=_;U!==g.tail&&!(E&&ge>=E.reach);ge+=U.value.length,U=U.next){var Oe=U.value;if(g.length>b.length)return;if(!(Oe instanceof c)){var Pe=1,me;if(At){if(me=d(ce,ge,b,bt),!me||me.index>=b.length)break;var ze=me.index,mi=me.index+me[0].length,Me=ge;for(Me+=U.value.length;ze>=Me;)U=U.next,Me+=U.value.length;if(Me-=U.value.length,ge=Me,U.value instanceof c)continue;for(var vt=U;vt!==g.tail&&(Me<mi||typeof vt.value=="string");vt=vt.next)Pe++,Me+=vt.value.length;Pe--,Oe=b.slice(ge,Me),me.index-=ge}else if(me=d(ce,0,Oe,bt),!me)continue;var ze=me.index,Ze=me[0],_t=Oe.slice(0,ze),qt=Oe.slice(ze+Ze.length),Je=ge+Oe.length;E&&Je>E.reach&&(E.reach=Je);var Bt=U.prev;_t&&(Bt=h(g,Bt,_t),ge+=_t.length),v(g,Bt,Pe);var f=new c(D,be?a.tokenize(Ze,be):Ze,pi,Ze);if(U=h(g,Bt,f),qt&&h(g,U,qt),Pe>1){var m={cause:D+","+te,reach:Je};u(b,g,x,U.prev,ge,m),E&&m.reach>E.reach&&(E.reach=m.reach)}}}}}}function p(){var b={value:null,prev:null,next:null},g={value:null,prev:b,next:null};b.next=g,this.head=b,this.tail=g,this.length=0}function h(b,g,x){var w=g.next,_={value:x,prev:g,next:w};return g.next=_,w.prev=_,b.length++,_}function v(b,g,x){for(var w=g.next,_=0;_<x&&w!==b.tail;_++)w=w.next;g.next=w,w.prev=g,b.length-=_}function k(b){for(var g=[],x=b.head.next;x!==b.tail;)g.push(x.value),x=x.next;return g}if(!n.document)return n.addEventListener&&(a.disableWorkerMessageHandler||n.addEventListener("message",function(b){var g=JSON.parse(b.data),x=g.language,w=g.code,_=g.immediateClose;n.postMessage(a.highlight(w,a.languages[x],x)),_&&n.close()},!1)),a;var y=a.util.currentScript();y&&(a.filename=y.src,y.hasAttribute("data-manual")&&(a.manual=!0));function z(){a.manual||a.highlightAll()}if(!a.manual){var q=document.readyState;q==="loading"||q==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",z):window.requestAnimationFrame?window.requestAnimationFrame(z):window.setTimeout(z,16)}return a})(t);e.exports&&(e.exports=i),typeof Mr<"u"&&(Mr.Prism=i),i.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},i.languages.markup.tag.inside["attr-value"].inside.entity=i.languages.markup.entity,i.languages.markup.doctype.inside["internal-subset"].inside=i.languages.markup,i.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(i.languages.markup.tag,"addInlined",{value:function(r,s){var l={};l["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:i.languages[s]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};a["language-"+s]={pattern:/[\s\S]+/,inside:i.languages[s]};var c={};c[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:a},i.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(i.languages.markup.tag,"addAttribute",{value:function(n,r){i.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:i.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),i.languages.html=i.languages.markup,i.languages.mathml=i.languages.markup,i.languages.svg=i.languages.markup,i.languages.xml=i.languages.extend("markup",{}),i.languages.ssml=i.languages.xml,i.languages.atom=i.languages.xml,i.languages.rss=i.languages.xml,(function(n){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var s=n.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))})(i),i.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},i.languages.javascript=i.languages.extend("clike",{"class-name":[i.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),i.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,i.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:i.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:i.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:i.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:i.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:i.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),i.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:i.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),i.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),i.languages.markup&&(i.languages.markup.tag.addInlined("script","javascript"),i.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),i.languages.js=i.languages.javascript,(function(){if(typeof i>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var n="Loading…",r=function(y,z){return"✖ Error "+y+" while fetching file: "+z},s="✖ Error: File does not exist or is empty",l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",c="loading",d="loaded",u="failed",p="pre[data-src]:not(["+a+'="'+d+'"]):not(['+a+'="'+c+'"])';function h(y,z,q){var b=new XMLHttpRequest;b.open("GET",y,!0),b.onreadystatechange=function(){b.readyState==4&&(b.status<400&&b.responseText?z(b.responseText):b.status>=400?q(r(b.status,b.statusText)):q(s))},b.send(null)}function v(y){var z=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(z){var q=Number(z[1]),b=z[2],g=z[3];return b?g?[q,Number(g)]:[q,void 0]:[q,q]}}i.hooks.add("before-highlightall",function(y){y.selector+=", "+p}),i.hooks.add("before-sanity-check",function(y){var z=y.element;if(z.matches(p)){y.code="",z.setAttribute(a,c);var q=z.appendChild(document.createElement("CODE"));q.textContent=n;var b=z.getAttribute("data-src"),g=y.language;if(g==="none"){var x=(/\.(\w+)$/.exec(b)||[,"none"])[1];g=l[x]||x}i.util.setLanguage(q,g),i.util.setLanguage(z,g);var w=i.plugins.autoloader;w&&w.loadLanguages(g),h(b,function(_){z.setAttribute(a,d);var E=v(z.getAttribute("data-range"));if(E){var D=_.split(/\r\n?|\n/g),F=E[0],te=E[1]==null?D.length:E[1];F<0&&(F+=D.length),F=Math.max(0,Math.min(F-1,D.length)),te<0&&(te+=D.length),te=Math.max(0,Math.min(te,D.length)),_=D.slice(F,te).join(`
`),z.hasAttribute("data-start")||z.setAttribute("data-start",String(F+1))}q.textContent=_,i.highlightElement(q)},function(_){z.setAttribute(a,u),q.textContent=_})}}),i.plugins.fileHighlight={highlight:function(z){for(var q=(z||document).querySelectorAll(p),b=0,g;g=q[b++];)i.highlightElement(g)}};var k=!1;i.fileHighlight=function(){k||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),k=!0),i.plugins.fileHighlight.highlight.apply(this,arguments)}})()})(nn)),nn.exports}var rc=nc();const K=ic(rc);Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,i){var n={};n["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[i]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};r["language-"+i]={pattern:/[\s\S]+/,inside:Prism.languages[i]};var s={};s[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:r},Prism.languages.insertBefore("markup","cdata",s)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;const sc={"@infineon/infineon-design-system-vue":"39.3.1--canary.2100.19756334840.0"},lc={dependencies:sc},ac="39.3.1--canary.2100.19756334840.0";(function(e){function t(i,n){return"___"+i.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(i,n,r,s){if(i.language===n){var l=i.tokenStack=[];i.code=i.code.replace(r,function(a){if(typeof s=="function"&&!s(a))return a;for(var c=l.length,d;i.code.indexOf(d=t(n,c))!==-1;)++c;return l[c]=a,d}),i.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(i,n){if(i.language!==n||!i.tokenStack)return;i.grammar=e.languages[n];var r=0,s=Object.keys(i.tokenStack);function l(a){for(var c=0;c<a.length&&!(r>=s.length);c++){var d=a[c];if(typeof d=="string"||d.content&&typeof d.content=="string"){var u=s[r],p=i.tokenStack[u],h=typeof d=="string"?d:d.content,v=t(n,u),k=h.indexOf(v);if(k>-1){++r;var y=h.substring(0,k),z=new e.Token(n,e.tokenize(p,i.grammar),"language-"+n,p),q=h.substring(k+v.length),b=[];y&&b.push.apply(b,l([y])),b.push(z),q&&b.push.apply(b,l([q])),typeof d=="string"?a.splice.apply(a,[c,1].concat(b)):d.content=b}}else d.content&&l(d.content)}return a}l(i.tokens)}}})})(Prism);Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;var Hr={},qr;function oc(){return qr||(qr=1,(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism)),Hr}oc();const cc={"auto-collapse":"false"},uc=`<script setup lang="ts">
const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event.detail);
  // Add your handler logic here
};

const handleClose = (event: CustomEvent) => {
  console.log('ifxClose:', event.detail);
  // Add your handler logic here
};
<\/script>

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
</template>`,dc=Y({__name:"IfxAccordionExample",setup(e){const t=n=>{console.log("ifxOpen:",n.detail)},i=n=>{console.log("ifxClose:",n.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(n,r)=>(Q(),ee("div",null,[o("ifx-accordion",cc,[o("ifx-accordion-item",{caption:"Label",open:"true","aria-level":"3",mutable:"true","on:ifxOpen":t,"on:ifxClose":i}," Content for Initial Item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. ",32),r[0]||(r[0]=o("ifx-accordion-item",{caption:"Label",open:"false","aria-level":"3",mutable:"true"}," Content for Item #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. ",-1)),r[1]||(r[1]=o("ifx-accordion-item",{caption:"Label",open:"false","aria-level":"3",mutable:"true"}," Content for Item #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. ",-1))]),o("details",{class:"code-details"},[r[2]||(r[2]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(uc))])])]))}}),fc={"list-aria-label":"Navigation menu"},pc=`<script setup lang="ts">
const handleActionListItemClick = (event: CustomEvent) => {
  console.log('ifxActionListItemClick:', event.detail);
  // Add your handler logic here
};
<\/script>

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
</template>`,mc=Y({__name:"IfxActionListExample",setup(e){const t=i=>{console.log("ifxActionListItemClick:",i.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(i,n)=>(Q(),ee("div",null,[o("ifx-action-list",fc,[o("ifx-action-list-item",{"item-title":"Dashboard",description:"View your main dashboard",value:"dashboard","item-aria-label":"Navigation item","on:ifxActionListItemClick":t},[...n[0]||(n[0]=[o("ifx-icon",{slot:"trailing",icon:"chevron-right-16"},null,-1)])],32),n[1]||(n[1]=o("ifx-action-list-item",{"item-title":"Settings",value:"settings","item-aria-label":"Navigation item"},[o("ifx-icon",{slot:"trailing",icon:"chevron-right-16"})],-1)),n[2]||(n[2]=o("ifx-action-list-item",{"item-title":"Profile",description:"Manage your profile information",value:"profile",disabled:"true","item-aria-label":"Navigation item"},[o("ifx-icon",{slot:"trailing",icon:"chevron-right-16"})],-1)),n[3]||(n[3]=o("ifx-action-list-item",{"item-title":"Advanced Analytics and Reporting Dashboard with Extended Functionality",description:"This comprehensive analytics dashboard provides detailed insights into user behavior and system performance metrics.",value:"analytics","item-aria-label":"Navigation item"},[o("ifx-icon",{slot:"trailing",icon:"chevron-right-16"})],-1))]),o("details",{class:"code-details"},[n[4]||(n[4]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(pc))])])]))}}),hc=`<script setup lang="ts">
const handleClose = (event: CustomEvent) => {
  console.log('ifxClose:', event.detail);
  // Add your handler logic here
};
<\/script>

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
</template>`,gc=Y({__name:"IfxAlertExample",setup(e){const t=i=>{console.log("ifxClose:",i.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(i,n)=>(Q(),ee("div",null,[o("ifx-alert",{"aria-live":"assertive",variant:"primary",icon:"c-info-16",closable:"true","on:ifxClose":t}," Attention! This is an alert message — check it out! ",32),o("details",{class:"code-details"},[n[0]||(n[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(hc))])])]))}}),xc=`<script setup lang="ts">
<\/script>

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
</template>`,bc=Y({__name:"IfxButtonExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-button",{type:"button","aria-label":"Button",disabled:"false",variant:"primary",size:"m",target:"_blank",theme:"default","full-width":"false"}," Button ",-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(xc))])])]))}}),vc=`<script setup lang="ts">
<\/script>

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
</template>`,_c=Y({__name:"IfxCardExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-card",{direction:"vertical",href:"",target:"_blank","aria-label":"Card"},[o("ifx-card-image",{position:"right",src:"https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg",alt:"Coffee",slot:"img"}),o("ifx-card-overline",null," Overline "),o("ifx-card-headline",null," Headline "),o("ifx-card-text",null," Some quick example text to build on the card title and make up the bulk of the card's content. "),o("ifx-card-links",{slot:"buttons"},[o("ifx-button",{variant:"primary"}," Button "),o("ifx-button",{variant:"secondary"}," Button ")])],-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(vc))])])]))}}),$c=`<script setup lang="ts">
const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event.detail);
  // Add your handler logic here
};

const handleError = (event: CustomEvent) => {
  console.log('ifxError:', event.detail);
  // Add your handler logic here
};
<\/script>

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
</template>`,yc=Y({__name:"IfxCheckboxExample",setup(e){const t=n=>{console.log("ifxChange:",n.detail)},i=n=>{console.log("ifxError:",n.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(n,r)=>(Q(),ee("div",null,[o("ifx-checkbox",{error:"false",disabled:"false",checked:"false",size:"s",indeterminate:"false",name:"checkbox","on:ifxChange":t,"on:ifxError":i}," Text ",32),o("details",{class:"code-details"},[r[0]||(r[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J($c))])])]))}}),wc=`<script setup lang="ts">
const handleSetGroupError = (event: CustomEvent) => {
  console.log('setGroupError:', event.detail);
  // Add your handler logic here
};
<\/script>

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
</template>`,Sc=Y({__name:"IfxCheckboxGroupExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-checkbox-group",{alignment:"vertical","show-group-label":"false","group-label-text":"Group Label","show-caption":"false","caption-text":"Caption text, description, error notification","show-caption-icon":"false",required:"false"},[o("ifx-checkbox",{value:"0",disabled:"false",checked:"false",size:"m",indeterminate:"false",error:"false"}," Option 0 "),o("ifx-checkbox",{value:"1",size:"m"}," Option 1 "),o("ifx-checkbox",{value:"2",size:"m"}," Option 2 ")],-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(wc))])])]))}}),Ic={placeholder:"Label",size:"medium",variant:"single",theme:"outlined",icon:"","read-only":"false","aria-label":"Chip",disabled:"false"},Cc=`<script setup lang="ts">
const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event.detail);
  // Add your handler logic here
};
<\/script>

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
</template>`,Ac=Y({__name:"IfxChipExample",setup(e){const t=i=>{console.log("ifxChange:",i.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(i,n)=>(Q(),ee("div",null,[o("ifx-chip",Ic,[o("ifx-chip-item",{value:"Item Value 1","on:ifxChange":t}," Item Label 1 ",32),n[0]||(n[0]=o("ifx-chip-item",{value:"Item Value 2"}," Item Label 2 ",-1)),n[1]||(n[1]=o("ifx-chip-item",{value:"Item Value 3"}," Item Label 3 ",-1)),n[2]||(n[2]=o("ifx-chip-item",{value:"Item Value 4"}," Item Label 4 ",-1))]),o("details",{class:"code-details"},[n[3]||(n[3]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Cc))])])]))}}),Ec=`<script setup lang="ts">
const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event.detail);
  // Add your handler logic here
};
<\/script>

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
</template>`,kc=Y({__name:"IfxContentSwitcherExample",setup(e){const t=i=>{console.log("ifxChange:",i.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(i,n)=>(Q(),ee("div",null,[o("ifx-content-switcher",null,[o("ifx-content-switcher-item",{value:"item 1","on:ifxChange":t},[...n[0]||(n[0]=[o("ifx-icon",{icon:"applications-16"},null,-1)])],32),n[1]||(n[1]=bo('<ifx-content-switcher-item value="item 2"><ifx-icon icon="applications-16"></ifx-icon></ifx-content-switcher-item><ifx-content-switcher-item value="item 3"><ifx-icon icon="applications-16"></ifx-icon></ifx-content-switcher-item><ifx-content-switcher-item value="item 4"><ifx-icon icon="applications-16"></ifx-icon></ifx-content-switcher-item>',3))]),o("details",{class:"code-details"},[n[2]||(n[2]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Ec))])])]))}}),Lc=`<script setup lang="ts">
const handleDate = (event: CustomEvent) => {
  console.log('ifxDate:', event.detail);
  // Add your handler logic here
};
<\/script>

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
</template>`,Tc=Y({__name:"IfxDatePickerExample",setup(e){const t=i=>{console.log("ifxDate:",i.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(i,n)=>(Q(),ee("div",null,[o("ifx-date-picker",{name:"date-picker",error:"false",disabled:"false",size:"s",success:"false",value:"",max:"",min:"",label:"Label Text",caption:"Caption text, description, error notification.","aria-label":"Date Picker",required:"false",autocomplete:"on",type:"date","on:ifxDate":t},null,32),o("details",{class:"code-details"},[n[0]||(n[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Lc))])])]))}}),Fc={placement:"bottom-start",disabled:"false","default-open":"false","no-close-on-outside-click":"false","no-close-on-menu-click":"false","no-append-to-body":"false"},Pc=`<script setup lang="ts">
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
<\/script>

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
</template>`,Oc=Y({__name:"IfxDropdownExample",setup(e){const t=r=>{console.log("ifxOpen:",r.detail)},i=r=>{console.log("ifxClose:",r.detail)},n=r=>{console.log("ifxDropdownMenuItem:",r.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(r,s)=>(Q(),ee("div",null,[o("div",{"on:ifxOpen":t,"on:ifxClose":i,"on:ifxDropdownMenuItem":n},[o("ifx-dropdown",Fc,[o("ifx-dropdown-trigger-button",{variant:"primary","on:ifxOpen":t,"on:ifxClose":i,"on:ifxDropdownMenuItem":n}," Dropdown ",32),o("ifx-dropdown-menu",{size:"m","on:ifxOpen":t,"on:ifxClose":i,"on:ifxDropdownMenuItem":n},[o("ifx-dropdown-item",{icon:"c-info-16",target:"_self",href:"","on:ifxOpen":t,"on:ifxClose":i,"on:ifxDropdownMenuItem":n}," Menu Item ",32),s[0]||(s[0]=o("ifx-dropdown-item",{icon:"c-info-16",target:"_self",href:""}," Menu Item ",-1)),s[1]||(s[1]=o("ifx-dropdown-item",{icon:"c-info-16",target:"_self",href:""}," Menu Item ",-1)),s[2]||(s[2]=o("ifx-dropdown-item",{icon:"c-info-16",target:"_self",href:""}," Menu Item ",-1)),s[3]||(s[3]=o("ifx-dropdown-item",{icon:"c-info-16",target:"_self",href:""}," Menu Item ",-1))],32)])],32),o("details",{class:"code-details"},[s[4]||(s[4]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Pc))])])]))}}),Rc=`<script setup lang="ts">
<\/script>

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
</template>`,Dc=Y({__name:"IfxFooterMediumExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-footer",{"copyright-text":"© 1999 - 2024 Infineon Technologies AG"},[o("div",{slot:"socials"},[o("ifx-link",{variant:"title",href:"http://infineon.com","aria-label":"Go to Homepage"},[o("ifx-icon",{icon:"home-16"})]),o("ifx-link",{variant:"title",href:"http://facebook.com/infineon","aria-label":"Follow us on Facebook"},[o("ifx-icon",{icon:"facebook"})]),o("ifx-link",{variant:"title",href:"http://youtube.com/infineon","aria-label":"Follow us on Youtube"},[o("ifx-icon",{icon:"youtube"})]),o("ifx-link",{variant:"title",href:"http://instagram.com/infineon","aria-label":"Follow us on Instagram"},[o("ifx-icon",{icon:"instagram"})]),o("ifx-link",{variant:"title",href:"http://linkedin.com/infineon","aria-label":"Follow us on LinkedIn"},[o("ifx-icon",{icon:"linkedin"})]),o("ifx-link",{variant:"title",href:"http://xing.com/infineon","aria-label":"Follow us on Xing"},[o("ifx-icon",{icon:"xing"})])]),o("div",{slot:"info"},[o("ifx-link",{variant:"menu",href:"https://yourwebsite.com/terms",target:"_blank"}," Terms "),o("ifx-link",{variant:"menu",href:"https://yourwebsite.com/imprint",target:"_blank"}," Imprint "),o("ifx-link",{variant:"menu",href:"https://yourwebsite.com/privacy-policy",target:"_blank"}," Privacy policy "),o("ifx-link",{variant:"menu",href:"https://yourwebsite.com/glossary",target:"_blank"}," Glossary ")])],-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Rc))])])]))}}),Mc=`<script setup lang="ts">
<\/script>

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
</template>`,zc=Y({__name:"IfxIconButtonExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-icon-button",{shape:"round",variant:"primary",icon:"c-info-16",href:"",target:"_blank",size:"m",disabled:"false","aria-label":"Icon Button"},null,-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Mc))])])]))}}),Hc=`<script setup lang="ts">
<\/script>

<template>
  <div>
    <ifx-indicator
      variant="number"
      number="1"
      inverted="false" />
  </div>
</template>`,qc=Y({__name:"IfxIndicatorExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-indicator",{variant:"number",number:"1",inverted:"false"},null,-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Hc))])])]))}}),Bc=`<script setup lang="ts">
<\/script>

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
</template>`,Nc=Y({__name:"IfxLinkExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-link",{href:"","aria-label":"Link",target:"_blank",size:"m",variant:"bold",disabled:"false",download:""}," Link ",-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Bc))])])]))}}),jc=`<script setup lang="ts">
<\/script>

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
</template>`,Vc=Y({__name:"IfxNavbarExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-navbar",{"show-logo-and-appname":"true","application-name":"Application name",fixed:"false","logo-href":"http://google.com","logo-href-target":"_self"},[o("ifx-navbar-item",{slot:"left-item",target:"_self",href:"","hide-on-mobile":"true"},[o("ifx-navbar-item",{icon:""},[o("ifx-navbar-item",null,[o("ifx-navbar-item",{href:"http://google.com",target:"_blank"}," Link Layer 3 Nested Item 1 "),o("ifx-navbar-item",null," Layer 3 Nested Item 2 "),o("ifx-navbar-item",null," Layer 3 Nested Item 3 "),o("ifx-navbar-item",null," Layer 3 Nested Item 4 ")]),o("ifx-navbar-item",null," Layer 2 Nested Item 3 "),o("ifx-navbar-item",null," Layer 2 Nested Item 4 "),o("ifx-navbar-item",null," Layer 2 Nested Item 5 ")]),o("ifx-navbar-item",null,[o("ifx-navbar-item",null," Layer 2 Item 1 "),o("ifx-navbar-item",null," Layer 2 Item 2 "),o("ifx-navbar-item",null," Layer 2 Item 3 ")]),o("ifx-navbar-item",null," Nested Item 3 "),o("ifx-navbar-item",null,[o("ifx-navbar-item",null," Nested Item 4 ")])]),o("ifx-navbar-item",{href:"",target:"_self",slot:"left-item",icon:"","show-label":"true"}," Menu Item "),o("ifx-navbar-item",{slot:"left-item"},[o("ifx-navbar-item",null," Item1 "),o("ifx-navbar-item",null," Item2 ")]),o("ifx-search-bar",{slot:"search-bar-left","is-open":"false"}),o("ifx-navbar-item",{"number-indicator":"",slot:"right-item",target:"_blank",href:"http://google.com","hide-on-mobile":"true","show-label":"false",icon:"image-16"}),o("ifx-navbar-item",{"dot-indicator":"false",slot:"right-item","hide-on-mobile":"true","show-label":"false",icon:"image-16"}),o("ifx-navbar-profile",{"user-name":"",slot:"right-item","image-url":"","show-label":"true",href:"",target:"_self",alt:"profile image"})],-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(jc))])])]))}}),Uc={"application-name":"Application Name",collapsible:"false",collapsed:"false","show-header":"true","show-footer":"true","initial-collapse":"true","terms-of-use":"https://yourwebsite.com/terms",imprint:"https://yourwebsite.com/imprint","privacy-policy":"https://yourwebsite.com/privacy-policy","copyright-text":"© 1999 - 2025 Infineon Technologies AG"},Wc=`<script setup lang="ts">
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
<\/script>

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
</template>`,Gc=Y({__name:"IfxSidebarExample",setup(e){const t=s=>{console.log("ifxSidebarNavigationItem:",s.detail)},i=s=>{console.log("ifxSidebarActionItem:",s.detail)},n=s=>{console.log("ifxSidebarMenu:",s.detail)},r=s=>{console.log("ifxSidebarCollapseChange:",s.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(s,l)=>(Q(),ee("div",null,[o("ifx-sidebar",Uc,[o("ifx-sidebar-title",{"on:ifxSidebarNavigationItem":t,"on:ifxSidebarActionItem":i,"on:ifxSidebarMenu":n,"on:ifxSidebarCollapseChange":r}," Menu Items ",32),o("ifx-sidebar-item",{href:"https://google.com",target:"_blank",icon:"image-16","on:ifxSidebarNavigationItem":t,"on:ifxSidebarActionItem":i,"on:ifxSidebarMenu":n,"on:ifxSidebarCollapseChange":r}," Menu Item ",32),l[0]||(l[0]=o("ifx-sidebar-item",{href:"https://google.com",target:"_blank",icon:"image-16"}," Menu Item ",-1)),l[1]||(l[1]=o("ifx-sidebar-item",{href:"https://google.com",target:"_blank",icon:"image-16"}," Menu Item ",-1)),l[2]||(l[2]=o("ifx-sidebar-item",{href:"https://google.com",target:"_blank",icon:"image-16"}," Menu Item ",-1)),l[3]||(l[3]=o("ifx-sidebar-item",null,[o("ifx-sidebar-item",{href:"https://google.com",target:"_blank",icon:"image-16"}," Menu Item "),o("ifx-sidebar-item",{icon:"image-16"},[o("ifx-sidebar-item",null," Sub menu item "),o("ifx-sidebar-item",{active:"true"}," Sub menu item "),o("ifx-sidebar-item",null," Sub menu item ")]),o("ifx-sidebar-item",{href:"https://google.com",target:"_blank"}," Menu Item "),o("ifx-sidebar-item",{href:"https://google.com",target:"_blank"}," Menu Item ")],-1)),l[4]||(l[4]=o("ifx-sidebar-title",null," Items group ",-1)),l[5]||(l[5]=o("ifx-sidebar-item",{href:"https://google.com",target:"_self",icon:"image-16","number-indicator":"",isactionitem:"false",active:"false"}," Item 1 ",-1)),l[6]||(l[6]=o("ifx-sidebar-item",{href:"https://google.com",target:"_blank",icon:"image-16"}," Item 2 ",-1))]),o("details",{class:"code-details"},[l[7]||(l[7]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Wc))])])]))}}),Kc=`<script setup lang="ts">
<\/script>

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
</template>`,Yc=Y({__name:"IfxNotificationExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-notification",{icon:"c-check-16",variant:"success","link-text":"Link","link-href":"https://www.example.com","link-target":"_blank"}," Sample Notification ",-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Kc))])])]))}}),Zc=`<script setup lang="ts">
const handlePageChange = (event: CustomEvent) => {
  console.log('ifxPageChange:', event.detail);
  // Add your handler logic here
};

const handleItemsPerPageChange = (event: CustomEvent) => {
  console.log('ifxItemsPerPageChange:', event.detail);
  // Add your handler logic here
};
<\/script>

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
</template>`,Jc=Y({__name:"IfxPaginationExample",setup(e){const t=n=>{console.log("ifxPageChange:",n.detail)},i=n=>{console.log("ifxItemsPerPageChange:",n.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(n,r)=>(Q(),ee("div",null,[o("ifx-pagination",{total:"50","current-page":"1","show-items-per-page":"true","items-per-page":'[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]',"on:ifxPageChange":t,"on:ifxItemsPerPageChange":i},null,32),o("details",{class:"code-details"},[r[0]||(r[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Zc))])])]))}}),Xc=`<script setup lang="ts">
<\/script>

<template>
  <div>
    <ifx-progress-bar
      value="50"
      size="m"
      show-label="false" />
  </div>
</template>`,Qc=Y({__name:"IfxProgressBarExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-progress-bar",{value:"50",size:"m","show-label":"false"},null,-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Xc))])])]))}}),eu=`<script setup lang="ts">
const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event.detail);
  // Add your handler logic here
};

const handleError = (event: CustomEvent) => {
  console.log('ifxError:', event.detail);
  // Add your handler logic here
};
<\/script>

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
</template>`,tu=Y({__name:"IfxRadioButtonExample",setup(e){const t=n=>{console.log("ifxChange:",n.detail)},i=n=>{console.log("ifxError:",n.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(n,r)=>(Q(),ee("div",null,[o("ifx-radio-button",{size:"s",name:"radio-button",value:"radio","on:ifxChange":t,"on:ifxError":i}," Text ",32),o("details",{class:"code-details"},[r[0]||(r[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(eu))])])]))}}),iu=`<script setup lang="ts">
const handleSetGroupError = (event: CustomEvent) => {
  console.log('setGroupError:', event.detail);
  // Add your handler logic here
};
<\/script>

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
</template>`,nu=Y({__name:"IfxRadioButtonGroupExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-radio-button-group",{alignment:"vertical","show-group-label":"false","group-label-text":"Group Label","show-caption":"false","caption-text":"Caption text, description, error notification","show-caption-icon":"false",required:"false"},[o("ifx-radio-button",{value:"0",disabled:"false",checked:"false",error:"false",size:"m"}," Option 0 "),o("ifx-radio-button",{value:"1",size:"m"}," Option 1 "),o("ifx-radio-button",{value:"2",size:"m"}," Option 2 ")],-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(iu))])])]))}}),ru=`<script setup lang="ts">
const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event.detail);
  // Add your handler logic here
};

const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event.detail);
  // Add your handler logic here
};
<\/script>

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
</template>`,su=Y({__name:"IfxSearchBarExample",setup(e){const t=n=>{console.log("ifxInput:",n.detail)},i=n=>{console.log("ifxOpen:",n.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(n,r)=>(Q(),ee("div",null,[o("ifx-search-bar",{"is-open":"true",disabled:"false",value:"",autocomplete:"on","on:ifxInput":t,"on:ifxOpen":i},null,32),o("details",{class:"code-details"},[r[0]||(r[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(ru))])])]))}}),lu=`<script setup lang="ts">
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
<\/script>

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
</template>`,au=Y({__name:"IfxSearchFieldExample",setup(e){const t=l=>{console.log("ifxInput:",l.detail)},i=l=>{console.log("ifxSuggestionRequested:",l.detail)},n=l=>{console.log("ifxSuggestionSelected:",l.detail)},r=l=>{console.log("ifxFocus:",l.detail)},s=l=>{console.log("ifxBlur:",l.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(l,a)=>(Q(),ee("div",null,[o("ifx-search-field",{size:"m",disabled:"false","show-delete-icon":"true","show-suggestions":"false","enable-history":"true","max-suggestions":"10","max-history-items":"5","history-key":"ifx-search-history","history-header-text":"Recent Searches",value:"",autocomplete:"on",placeholder:"Search...","aria-label":"Search field","delete-icon-aria-label":"Clear search","history-delete-aria-label":"Remove from history","dropdown-aria-label":"Search suggestions and history","suggestion-aria-label":"Search suggestion","history-item-aria-label":"Search history item","on:ifxInput":t,"on:ifxSuggestionRequested":i,"on:ifxSuggestionSelected":n,"on:ifxFocus":r,"on:ifxBlur":s},null,32),o("details",{class:"code-details"},[a[0]||(a[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(lu))])])]))}}),ou=`<script setup lang="ts">
<\/script>

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
</template>`,cu=Y({__name:"IfxSegmentedControlExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-segmented-control",{caption:"Caption text to describe the controls",label:"Group Label",size:"regular",error:"false",required:"false"},[o("ifx-segment",{value:"Value1",icon:"star-16"}),o("ifx-segment",{value:"Value2",icon:"star-16"}),o("ifx-segment",{value:"Value3",icon:"star-16"}),o("ifx-segment",{value:"Value4",icon:"star-16"}),o("ifx-segment",{value:"Value5",icon:"star-16"})],-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(ou))])])]))}}),uu=`<script setup lang="ts">
const handleSelect = (event: CustomEvent) => {
  console.log('ifxSelect:', event.detail);
  // Add your handler logic here
};

const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event.detail);
  // Add your handler logic here
};
<\/script>

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
</template>`,du=Y({__name:"IfxSelectExample",setup(e){const t=n=>{console.log("ifxSelect:",n.detail)},i=n=>{console.log("ifxInput:",n.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(n,r)=>(Q(),ee("div",null,[o("ifx-select",{size:"m",placeholder:"true","show-clear-button":"true","show-search":"true","search-placeholder-value":"Search...",disabled:"false",required:"true",error:"false",label:"",caption:"","placeholder-value":"Placeholder",options:'[{"value":"a","label":"option a","selected":false},{"value":"b","label":"option b","selected":false},{"value":"c","label":"option c","selected":false}]',"on:ifxSelect":t,"on:ifxInput":i},null,32),o("details",{class:"code-details"},[r[0]||(r[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(uu))])])]))}}),fu=`<script setup lang="ts">
<\/script>

<template>
  <div>
    <ifx-spinner
      aria-label=""
      variant="default"
      size="m"
      inverted="false" />
  </div>
</template>`,pu=Y({__name:"IfxSpinnerExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-spinner",{"aria-label":"",variant:"default",size:"m",inverted:"false"},null,-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(fu))])])]))}}),mu=`<script setup lang="ts">
<\/script>

<template>
  <div>
    <ifx-status
      label="text"
      color="orange-500"
      border="true" />
  </div>
</template>`,hu=Y({__name:"IfxStatusExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-status",{label:"text",color:"orange-500",border:"true"},null,-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(mu))])])]))}}),gu=`<script setup lang="ts">
const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event.detail);
  // Add your handler logic here
};
<\/script>

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
</template>`,xu=Y({__name:"IfxStepperExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-stepper",{"active-step":"2","aria-label":"","aria-current":"","show-step-number":"false",variant:"default"},[o("ifx-step",null," Step Label 1 "),o("ifx-step",null," Step Label 2 "),o("ifx-step",null," Step Label 3 "),o("ifx-step",null," Step Label 4 "),o("ifx-step",null," Step Label 5 ")],-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(gu))])])]))}}),bu=`<script setup lang="ts">
const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event.detail);
  // Add your handler logic here
};
<\/script>

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
</template>`,vu=Y({__name:"IfxStepperCompactExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-stepper",{"active-step":"2","aria-label":"","aria-current":"","indicator-position":"left",variant:"compact"},[o("ifx-step",null," Step Label 1 "),o("ifx-step",null," Step Label 2 "),o("ifx-step",null," Step Label 3 "),o("ifx-step",null," Step Label 4 "),o("ifx-step",null," Step Label 5 ")],-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(bu))])])]))}}),_u=`<script setup lang="ts">
const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event.detail);
  // Add your handler logic here
};
<\/script>

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
</template>`,$u=Y({__name:"IfxSwitchExample",setup(e){const t=i=>{console.log("ifxChange:",i.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(i,n)=>(Q(),ee("div",null,[o("ifx-switch",{checked:"false",name:"switch",value:"switch",disabled:"false","on:ifxChange":t}," Switch ",32),o("details",{class:"code-details"},[n[0]||(n[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(_u))])])]))}}),yu=`<script setup lang="ts">
<\/script>

<template>
  <div>
    <ifx-basic-table
      cols='[{"headerName":"Make","field":"make","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Model","field":"model","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Age","field":"age"}]'
      rows='[{"make":"Toyota","model":"Celica","price":35000,"age":10},{"make":"Ford","model":"Mondeo","price":32000,"age":12},{"make":"Porsche","model":"Boxster","price":72000},{"make":"Toyota","model":"Celica","price":37000,"age":8},{"make":"Ford","model":"Mondeo","price":34000,"age":10},{"make":"Porsche","model":"Boxster","price":72000},{"make":"Toyota","model":"Celica","price":38000,"age":7},{"make":"Ford","model":"Mondeo","price":36000,"age":8},{"make":"Porsche","model":"Boxster","price":72000},{"make":"Toyota","model":"Celica","price":39000,"age":2},{"make":"Ford","model":"Mondeo","price":38000,"age":6},{"make":"Porsche","model":"Boxster","price":72000}]'
      table-height="auto"
      row-height="default"
      variant="default" />
  </div>
</template>`,wu=Y({__name:"IfxBasicTableExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-basic-table",{cols:'[{"headerName":"Make","field":"make","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Model","field":"model","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Age","field":"age"}]',rows:'[{"make":"Toyota","model":"Celica","price":35000,"age":10},{"make":"Ford","model":"Mondeo","price":32000,"age":12},{"make":"Porsche","model":"Boxster","price":72000},{"make":"Toyota","model":"Celica","price":37000,"age":8},{"make":"Ford","model":"Mondeo","price":34000,"age":10},{"make":"Porsche","model":"Boxster","price":72000},{"make":"Toyota","model":"Celica","price":38000,"age":7},{"make":"Ford","model":"Mondeo","price":36000,"age":8},{"make":"Porsche","model":"Boxster","price":72000},{"make":"Toyota","model":"Celica","price":39000,"age":2},{"make":"Ford","model":"Mondeo","price":38000,"age":6},{"make":"Porsche","model":"Boxster","price":72000}]',"table-height":"auto","row-height":"default",variant:"default"},null,-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(yu))])])]))}}),Su=`<script setup lang="ts">
<\/script>

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
</template>`,Iu=Y({__name:"IfxTablePaginationExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-table",{"row-height":"default",cols:'[{"headerName":"Make","field":"make","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Model","field":"model","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Age","field":"age"}]',rows:'[{"make":"Toyota","model":"Celica","price":35000,"age":10},{"make":"Ford","model":"Mondeo","price":32000,"age":12},{"make":"Porsche","model":"Boxster","price":72000},{"make":"Bmw","model":"x","price":72000},{"make":"Mercedes","model":"y","price":72000},{"make":"Ferrari","model":"z","price":72000},{"make":"Chrysler","model":"a","price":72000},{"make":"Range rover","model":"b","price":72000},{"make":"Tesla","model":"x","price":72000},{"make":"Audi","model":"3","price":72000},{"make":"Landrover","model":"x","price":72000}]',"table-height":"auto",pagination:"true","server-side-pagination":"false","pagination-items-per-page":'[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]',"filter-orientation":"none",variant:"default"},null,-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Su))])])]))}}),Cu=`<script setup lang="ts">
const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event.detail);
  // Add your handler logic here
};
<\/script>

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
</template>`,Au=Y({__name:"IfxTabsExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-tabs",{orientation:"horizontal","active-tab-index":"0","full-width":"false"},[o("ifx-tab",{header:"Tab 1",icon:"","icon-position":"left"}," Content for Tab #1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. "),o("ifx-tab",{header:"Tab 2",disabled:"false",icon:"","icon-position":"left"}," Content for Tab #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. "),o("ifx-tab",{header:"Tab 3",icon:"","icon-position":"left"}," Content for Tab #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. ")],-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Cu))])])]))}}),Eu=`<script setup lang="ts">
const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event.detail);
  // Add your handler logic here
};
<\/script>

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
</template>`,ku=Y({__name:"IfxTextFieldExample",setup(e){const t=i=>{console.log("ifxInput:",i.detail)};return Z(()=>{X(()=>{K.highlightAll()})}),(i,n)=>(Q(),ee("div",null,[o("ifx-text-field",{error:"false",disabled:"false",size:"m",icon:"",success:"false",placeholder:"Placeholder","read-only":"false",caption:"Caption",label:"Label",required:"true",name:"text-field","show-delete-icon":"false",value:"",autocomplete:"on",type:"text","internal-id":"text-field","aria-label":"text field for user input","on:ifxInput":t},null,32),o("details",{class:"code-details"},[n[0]||(n[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Eu))])])]))}}),Lu=`<script setup lang="ts">
<\/script>

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
</template>`,Tu=Y({__name:"IfxTextareaExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-textarea",{caption:"Caption text, description, error notification",cols:"43",disabled:"false",error:"false",label:"Label Text",name:"textarea",placeholder:"Placeholder",required:"true","read-only":"false",resize:"both",rows:"5",value:"",wrap:"soft","full-width":"false"},null,-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Lu))])])]))}}),Fu=`<script setup lang="ts">
<\/script>

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
</template>`,Pu=Y({__name:"IfxTooltipExample",setup(e){return Z(()=>{X(()=>{K.highlightAll()})}),(t,i)=>(Q(),ee("div",null,[i[1]||(i[1]=o("ifx-tooltip",{text:"Hi, I'm a tooltip",variant:"compact",position:"auto",icon:"c-info-16","aria-label":"Tooltip with important information"}," I'm the tooltip reference element - Please hover me ",-1)),o("details",{class:"code-details"},[i[0]||(i[0]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup"},J(Fu))])])]))}}),Ou={class:"code-details"},Ru=["innerHTML"],Du=Y({__name:"ModalExample",setup(e){const t=Ls(null),i=()=>{t.value&&(t.value.opened=!0)},n=l=>{console.log("ifxOpen:",l.detail)},r=l=>{console.log("ifxClose:",l.detail)},s=K.highlight(`<template>
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
<\/script>`,K.languages.markup,"markup");return(l,a)=>(Q(),ee("div",null,[o("ifx-modal",{ref_key:"modalRef",ref:t,caption:"Modal Title","caption-aria-label":"Additional information for caption","close-button-aria-label":"Close modal",variant:"default","close-on-overlay-click":!1,"show-close-button":!0,size:"s","on:ifxOpen":n,"on:ifxClose":r},[...a[0]||(a[0]=[o("div",{slot:"content"},[o("span",null,"Modal content")],-1),o("div",{slot:"buttons"},[o("ifx-button",{variant:"secondary"},"Cancel"),o("ifx-button",null,"OK")],-1)])],544),o("ifx-button",{onClick:i},"Open Modal"),o("details",Ou,[a[1]||(a[1]=o("summary",null,"View Code",-1)),o("pre",null,[o("code",{class:"language-markup",innerHTML:wi(s)},null,8,Ru)])])]))}}),Mu={class:"version-info"},zu={class:"components"},Hu={id:"ifx-accordion-example",class:"component-example"},qu={class:"demo"},Bu={id:"ifx-action-list-example",class:"component-example"},Nu={class:"demo"},ju={id:"ifx-alert-example",class:"component-example"},Vu={class:"demo"},Uu={id:"ifx-button-example",class:"component-example"},Wu={class:"demo"},Gu={id:"ifx-card-example",class:"component-example"},Ku={class:"demo"},Yu={id:"ifx-checkbox-example",class:"component-example"},Zu={class:"demo"},Ju={id:"ifx-checkbox-group-example",class:"component-example"},Xu={class:"demo"},Qu={id:"ifx-chip-example",class:"component-example"},ed={class:"demo"},td={id:"ifx-content-switcher-example",class:"component-example"},id={class:"demo"},nd={id:"ifx-date-picker-example",class:"component-example"},rd={class:"demo"},sd={id:"ifx-dropdown-example",class:"component-example"},ld={class:"demo"},ad={id:"ifx-footer-example-medium",class:"component-example"},od={class:"demo"},cd={id:"ifx-icon-button-example",class:"component-example"},ud={class:"demo"},dd={id:"ifx-indicator-example",class:"component-example"},fd={class:"demo"},pd={id:"ifx-link-example",class:"component-example"},md={class:"demo"},hd={id:"ifx-navbar-example",class:"component-example"},gd={class:"demo"},xd={id:"ifx-sidebar-example",class:"component-example"},bd={class:"demo"},vd={id:"ifx-notification-example",class:"component-example"},_d={class:"demo"},$d={id:"ifx-pagination-example",class:"component-example"},yd={class:"demo"},wd={id:"ifx-progress-bar-example",class:"component-example"},Sd={class:"demo"},Id={id:"ifx-radio-button-example",class:"component-example"},Cd={class:"demo"},Ad={id:"ifx-radio-button-group-example",class:"component-example"},Ed={class:"demo"},kd={id:"ifx-search-bar-example",class:"component-example"},Ld={class:"demo"},Td={id:"ifx-search-field-example",class:"component-example"},Fd={class:"demo"},Pd={id:"ifx-segmented-control-example",class:"component-example"},Od={class:"demo"},Rd={id:"ifx-select-example",class:"component-example"},Dd={class:"demo"},Md={id:"ifx-spinner-example",class:"component-example"},zd={class:"demo"},Hd={id:"ifx-status-example",class:"component-example"},qd={class:"demo"},Bd={id:"ifx-stepper-example",class:"component-example"},Nd={class:"demo"},jd={id:"ifx-stepper-example-compact",class:"component-example"},Vd={class:"demo"},Ud={id:"ifx-switch-example",class:"component-example"},Wd={class:"demo"},Gd={id:"ifx-basic-table-example",class:"component-example"},Kd={class:"demo"},Yd={id:"ifx-table-example-pagination",class:"component-example"},Zd={class:"demo"},Jd={id:"ifx-tabs-example",class:"component-example"},Xd={class:"demo"},Qd={id:"ifx-text-field-example",class:"component-example"},ef={class:"demo"},tf={id:"ifx-textarea-example",class:"component-example"},nf={class:"demo"},rf={id:"ifx-tooltip-example",class:"component-example"},sf={class:"demo"},lf={id:"modal-example",class:"component-example"},af={class:"demo"},of=Y({__name:"App",setup(e){const t=lc.dependencies["@infineon/infineon-design-system-vue"];return Z(()=>{X(()=>{K.highlightAll()})}),(i,n)=>(Q(),ee(Ve,null,[n[38]||(n[38]=o("ifx-navbar",{"show-logo-and-appname":"true","application-name":"Infineon Design System - Vue Example",fixed:!1},null,-1)),o("div",Mu,"@infineon/infineon-design-system-vue@"+J(wi(t).includes("workspace")?"workspace":wi(ac)),1),o("div",zu,[o("section",Hu,[n[0]||(n[0]=o("h2",null,"Accordion",-1)),o("div",qu,[j(dc)])]),o("section",Bu,[n[1]||(n[1]=o("h2",null,"Action List",-1)),o("div",Nu,[j(mc)])]),o("section",ju,[n[2]||(n[2]=o("h2",null,"Alert",-1)),o("div",Vu,[j(gc)])]),o("section",Uu,[n[3]||(n[3]=o("h2",null,"Button",-1)),o("div",Wu,[j(bc)])]),o("section",Gu,[n[4]||(n[4]=o("h2",null,"Card",-1)),o("div",Ku,[j(_c)])]),o("section",Yu,[n[5]||(n[5]=o("h2",null,"Checkbox",-1)),o("div",Zu,[j(yc)])]),o("section",Ju,[n[6]||(n[6]=o("h2",null,"Checkbox Group",-1)),o("div",Xu,[j(Sc)])]),o("section",Qu,[n[7]||(n[7]=o("h2",null,"Chip",-1)),o("div",ed,[j(Ac)])]),o("section",td,[n[8]||(n[8]=o("h2",null,"Content Switcher",-1)),o("div",id,[j(kc)])]),o("section",nd,[n[9]||(n[9]=o("h2",null,"Date Picker",-1)),o("div",rd,[j(Tc)])]),o("section",sd,[n[10]||(n[10]=o("h2",null,"Dropdown",-1)),o("div",ld,[j(Oc)])]),o("section",ad,[n[11]||(n[11]=o("h2",null,"Footer - Medium",-1)),o("div",od,[j(Dc)])]),o("section",cd,[n[12]||(n[12]=o("h2",null,"Icon Button",-1)),o("div",ud,[j(zc)])]),o("section",dd,[n[13]||(n[13]=o("h2",null,"Indicator",-1)),o("div",fd,[j(qc)])]),o("section",pd,[n[14]||(n[14]=o("h2",null,"Link",-1)),o("div",md,[j(Nc)])]),o("section",hd,[n[15]||(n[15]=o("h2",null,"Navigation/Navbar",-1)),o("div",gd,[j(Vc)])]),o("section",xd,[n[16]||(n[16]=o("h2",null,"Navigation/Sidebar",-1)),o("div",bd,[j(Gc)])]),o("section",vd,[n[17]||(n[17]=o("h2",null,"Notification",-1)),o("div",_d,[j(Yc)])]),o("section",$d,[n[18]||(n[18]=o("h2",null,"Pagination",-1)),o("div",yd,[j(Jc)])]),o("section",wd,[n[19]||(n[19]=o("h2",null,"Progress Bar",-1)),o("div",Sd,[j(Qc)])]),o("section",Id,[n[20]||(n[20]=o("h2",null,"Radio Button",-1)),o("div",Cd,[j(tu)])]),o("section",Ad,[n[21]||(n[21]=o("h2",null,"Radio Button Group",-1)),o("div",Ed,[j(nu)])]),o("section",kd,[n[22]||(n[22]=o("h2",null,"Search Bar",-1)),o("div",Ld,[j(su)])]),o("section",Td,[n[23]||(n[23]=o("h2",null,"Search Field",-1)),o("div",Fd,[j(au)])]),o("section",Pd,[n[24]||(n[24]=o("h2",null,"Segmented Control",-1)),o("div",Od,[j(cu)])]),o("section",Rd,[n[25]||(n[25]=o("h2",null,"Select/Single Select",-1)),o("div",Dd,[j(du)])]),o("section",Md,[n[26]||(n[26]=o("h2",null,"Spinner",-1)),o("div",zd,[j(pu)])]),o("section",Hd,[n[27]||(n[27]=o("h2",null,"Status",-1)),o("div",qd,[j(hu)])]),o("section",Bd,[n[28]||(n[28]=o("h2",null,"Stepper",-1)),o("div",Nd,[j(xu)])]),o("section",jd,[n[29]||(n[29]=o("h2",null,"Stepper - Compact",-1)),o("div",Vd,[j(vu)])]),o("section",Ud,[n[30]||(n[30]=o("h2",null,"Switch",-1)),o("div",Wd,[j($u)])]),o("section",Gd,[n[31]||(n[31]=o("h2",null,"Table (basic)",-1)),o("div",Kd,[j(wu)])]),o("section",Yd,[n[32]||(n[32]=o("h2",null,"Table (advanced) - Pagination",-1)),o("div",Zd,[j(Iu)])]),o("section",Jd,[n[33]||(n[33]=o("h2",null,"Tabs",-1)),o("div",Xd,[j(Au)])]),o("section",Qd,[n[34]||(n[34]=o("h2",null,"Text Field",-1)),o("div",ef,[j(ku)])]),o("section",tf,[n[35]||(n[35]=o("h2",null,"Textarea",-1)),o("div",nf,[j(Tu)])]),o("section",rf,[n[36]||(n[36]=o("h2",null,"Tooltip",-1)),o("div",sf,[j(Pu)])]),o("section",lf,[n[37]||(n[37]=o("h2",null,"Modal (Manual Example)",-1)),o("div",af,[j(Du)])])])],64))}}),cf="modulepreload",uf=function(e,t){return new URL(e,t).href},Br={},R=function(t,i,n){let r=Promise.resolve();if(i&&i.length>0){let d=function(u){return Promise.all(u.map(p=>Promise.resolve(p).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const l=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");r=d(i.map(u=>{if(u=uf(u,n),u in Br)return;Br[u]=!0;const p=u.endsWith(".css"),h=p?'[rel="stylesheet"]':"";if(n)for(let k=l.length-1;k>=0;k--){const y=l[k];if(y.href===u&&(!p||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const v=document.createElement("link");if(v.rel=p?"stylesheet":cf,p||(v.as="script"),v.crossOrigin="",v.href=u,c&&v.setAttribute("nonce",c),document.head.appendChild(v),p)return new Promise((k,y)=>{v.addEventListener("load",k),v.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(l){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=l,window.dispatchEvent(a),!a.defaultPrevented)throw l}return r.then(l=>{for(const a of l||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})},bi="routerLink",Nr="navManager",df="router",ff="aria",Gt=Symbol(),pf={default:Gt},jr=e=>e?.split(" ")||[],mf=(e,t,i=[])=>{const n=new Set([...Array.from(e?.classList||[]),...Array.from(t),...i]);return Array.from(n)},T=(e,t,i=[],n=[],r,s,l)=>{const a=n,c=[bi,...i].reduce((d,u)=>(d[u]=pf,d),{});return Y((d,{attrs:u,slots:p,emit:h})=>{const v=Ls(),k=new Set(jr(u.class));Z(()=>{n.forEach(x=>{v.value?.addEventListener(x,w=>{h(x,w)})})});const y=sl(),q=y?.appContext?.provides[Nr]?ei(Nr):void 0,b=y?.vnode.el,g=x=>{const{routerLink:w}=d;if(w!==Gt)if(q!==void 0){x.preventDefault();let _={event:x};for(const E in d){const D=d[E];d.hasOwnProperty(E)&&E.startsWith(df)&&D!==Gt&&(_[E]=D)}q.navigate(_)}else console.warn("Tried to navigate, but no router was found. Make sure you have mounted Vue Router.")};return()=>{d[r],jr(u.class).forEach(D=>{k.add(D)});const x=d.onClick,w=D=>{x!==void 0&&x(D),D.defaultPrevented||g(D)},_={ref:v,class:mf(b,k),onClick:w};for(const D in d){const F=d[D];(d.hasOwnProperty(D)&&F!==Gt||D.startsWith(ff))&&(_[D]=F);const te="on"+D.slice(0,1).toUpperCase()+D.slice(1),oe=u[te];v.value&&u.hasOwnProperty(te)&&"addEventListener"in v.value&&v.value.addEventListener(D,oe)}return bi in d&&d[bi]!==Gt&&(_.href=d[bi]),ko(e,_,p.default&&p.default())}},{name:e,props:c,emits:a})};T("ifx-accordion",void 0,["autoCollapse"]);T("ifx-accordion-item",void 0,["caption","open","AriaLevel","ifxOpen","ifxClose"],["ifxOpen","ifxClose"]);T("ifx-action-list",void 0,["listAriaLabel"]);T("ifx-action-list-item",void 0,["itemTitle","description","value","href","target","disabled","itemAriaLabel","ifxActionListItemClick"],["ifxActionListItemClick"]);T("ifx-alert",void 0,["variant","icon","closable","AriaLive","ifxClose"],["ifxClose"]);T("ifx-basic-table",void 0,["cols","rows","rowHeight","tableHeight","variant"]);T("ifx-breadcrumb");T("ifx-breadcrumb-item");T("ifx-breadcrumb-item-label",void 0,["icon","href","target","breadcrumbMenuIconWrapper"],["breadcrumbMenuIconWrapper"]);T("ifx-button",void 0,["variant","theme","size","disabled","href","target","type","fullWidth","ariaLabel"]);T("ifx-card",void 0,["direction","href","target","ariaLabel"]);T("ifx-card-headline");T("ifx-card-image",void 0,["src","alt","position","imgPosition"],["imgPosition"]);T("ifx-card-links");T("ifx-card-overline");T("ifx-card-text");T("ifx-checkbox",void 0,["disabled","checked","error","size","indeterminate","value","ifxChange","ifxError"],["ifxChange","ifxError"]);T("ifx-checkbox-group",void 0,["alignment","size","showGroupLabel","groupLabelText","showCaption","captionText","showCaptionIcon","required"]);T("ifx-chip",void 0,["placeholder","size","value","variant","theme","readOnly","ariaLabel","disabled","icon","ifxChange"],["ifxChange"]);T("ifx-chip-item",void 0,["value","chipState","selected","ifxChipItemSelect"],["ifxChipItemSelect"]);T("ifx-content-switcher",void 0,["ifxChange"],["ifxChange"]);T("ifx-content-switcher-item",void 0,["selected","value"]);T("ifx-date-picker",void 0,["size","error","success","disabled","ariaLabel","value","type","max","min","required","label","caption","autocomplete","ifxDate"],["ifxDate"]);T("ifx-download",void 0,["tokens"]);T("ifx-dropdown",void 0,["placement","defaultOpen","noAppendToBody","disabled","noCloseOnOutsideClick","noCloseOnMenuClick","ifxOpen","ifxClose","ifxDropdown"],["ifxOpen","ifxClose","ifxDropdown"]);T("ifx-dropdown-header");T("ifx-dropdown-item",void 0,["icon","href","target","hide","ifxDropdownItem"],["ifxDropdownItem"]);T("ifx-dropdown-menu",void 0,["isOpen","size","menuSize","ifxDropdownMenuItem"],["menuSize","ifxDropdownMenuItem"]);T("ifx-dropdown-separator");T("ifx-dropdown-trigger",void 0,["isOpen"]);T("ifx-dropdown-trigger-button",void 0,["isOpen","theme","variant","size","disabled","hideArrow"]);T("ifx-faq");T("ifx-file-upload",void 0,["dragAndDrop","required","disabled","maxFileSizeMB","allowedFileTypes","additionalAllowedFileTypes","allowAnyFileType","allowedFileExtensions","uploadHandler","maxFiles","label","labelRequiredError","labelBrowseFiles","labelDragAndDrop","labelUploadedFilesHeading","labelFileTooLarge","labelUnsupportedFileType","labelUploaded","labelUploadFailed","labelSupportedFormatsTemplate","labelFileSingular","labelFilePlural","labelMaxFilesInfo","labelMaxFilesExceeded","ariaLabelBrowseFiles","ariaLabelDropzone","ariaLabelFileInput","ariaLabelRemoveFile","ariaLabelCancelUpload","ariaLabelRetryUpload","ariaLabelUploadingStatus","ariaLabelUploadedStatus","ariaLabelUploadFailedStatus","ifxFileUploadAdd","ifxFileUploadRemove","ifxFileUploadChange","ifxFileUploadError","ifxFileUploadInvalid","ifxFileUploadStart","ifxFileUploadComplete","ifxFileUploadAllComplete","ifxFileUploadAbort","ifxFileUploadDrop","ifxFileUploadClick","ifxFileUploadMaxFilesExceeded","ifxFileUploadValidation","ifxFileUploadRetry"],["ifxFileUploadAdd","ifxFileUploadRemove","ifxFileUploadChange","ifxFileUploadError","ifxFileUploadInvalid","ifxFileUploadStart","ifxFileUploadComplete","ifxFileUploadAllComplete","ifxFileUploadAbort","ifxFileUploadDrop","ifxFileUploadClick","ifxFileUploadMaxFilesExceeded","ifxFileUploadValidation","ifxFileUploadRetry"]);T("ifx-filter-accordion",void 0,["maxVisibleItems","filterGroupName","ifxFilterAccordionChange"],["ifxFilterAccordionChange"]);T("ifx-filter-bar",void 0,["maxShownFilters","showMoreFiltersButton","ifxTopbarFilterChange"],["ifxTopbarFilterChange"]);T("ifx-filter-search",void 0,["filterName","disabled","filterValue","filterKey","filterOrientation","placeholder","ifxFilterSearchChange"],["ifxFilterSearchChange"]);T("ifx-filter-type-group",void 0,["ifxSidebarFilterChange"],["ifxSidebarFilterChange"]);T("ifx-footer",void 0,["copyrightText"]);T("ifx-footer-column");T("ifx-icon",void 0,["icon","ifxIcon","consoleError"],["consoleError"]);T("ifx-icon-button",void 0,["variant","size","disabled","icon","href","target","shape","ariaLabel"]);T("ifx-icons-preview");T("ifx-indicator",void 0,["inverted","ariaLabel","variant","number"]);T("ifx-link",void 0,["href","target","variant","size","disabled","download","ariaLabel"]);T("ifx-list",void 0,["name","maxVisibleItems","type","resetTrigger","ifxListUpdate"],["ifxListUpdate"]);T("ifx-list-entry",void 0,["value","label","type","ifxListEntryChange"],["ifxListEntryChange"]);T("ifx-modal",void 0,["opened","caption","captionAriaLabel","closeOnOverlayClick","variant","size","alertIcon","okButtonLabel","cancelButtonLabel","closeButtonAriaLabel","showCloseButton","ifxOpen","ifxClose"],["ifxOpen","ifxClose"]);T("ifx-multiselect",void 0,["name","disabled","required","error","caption","label","placeholder","showSearch","showSelectAll","showClearButton","showExpandCollapse","noResultsMessage","showNoResultsMessage","searchPlaceholder","selectAllLabel","expandLabel","collapseLabel","ariaMultiSelectLabel","ariaMultiSelectLabelledBy","ariaMultiSelectDescribedBy","ariaSearchLabel","ariaClearLabel","ariaToggleLabel","ariaSelectAllLabel","ariaExpandAllLabel","ariaCollapseAllLabel","ifxSelect","ifxOpen"],["ifxSelect","ifxOpen"]);T("ifx-multiselect-option",void 0,["value","selected","disabled","indeterminate"]);T("ifx-navbar",void 0,["applicationName","fixed","showLogoAndAppname","logoHref","logoHrefTarget","ifxNavbarMobileMenuIsOpen"],["ifxNavbarMobileMenuIsOpen"]);T("ifx-navbar-item",void 0,["showLabel","icon","href","target","hideOnMobile","numberIndicator","dotIndicator","ifxNavItem"],["ifxNavItem"]);T("ifx-navbar-profile",void 0,["showLabel","href","imageUrl","target","alt","userName"]);T("ifx-notification",void 0,["icon","variant","linkText","linkHref","linkTarget"]);T("ifx-overview-table");T("ifx-pagination",void 0,["currentPage","showItemsPerPage","total","itemsPerPage","ifxPageChange","ifxItemsPerPageChange"],["ifxPageChange","ifxItemsPerPageChange"]);T("ifx-progress-bar",void 0,["value","size","showLabel"]);T("ifx-radio-button",void 0,["disabled","value","error","size","name","checked","ifxChange","ifxError"],["ifxChange","ifxError"]);T("ifx-radio-button-group",void 0,["alignment","size","showGroupLabel","groupLabelText","showCaption","captionText","showCaptionIcon","required"]);T("ifx-search-bar",void 0,["isOpen","disabled","value","maxlength","autocomplete","ifxInput","ifxOpen"],["ifxInput","ifxOpen"]);T("ifx-search-field",void 0,["value","suggestions","showSuggestions","maxSuggestions","maxHistoryItems","enableHistory","historyKey","historyHeaderText","ariaLabel","ariaLabelledBy","ariaDescribedBy","deleteIconAriaLabel","historyDeleteAriaLabel","dropdownAriaLabel","suggestionAriaLabel","historyItemAriaLabel","showDeleteIcon","disabled","size","placeholder","autocomplete","maxlength","ifxInput","ifxSuggestionRequested","ifxSuggestionSelected","ifxFocus","ifxBlur"],["ifxInput","ifxSuggestionRequested","ifxSuggestionSelected","ifxFocus","ifxBlur"]);T("ifx-segment",void 0,["icon","segmentIndex","selected","value","segmentSelect"],["segmentSelect"]);T("ifx-segmented-control",void 0,["caption","label","size","required","error","ifxChange"],["ifxChange"]);T("ifx-select",void 0,["value","name","items","choices","renderChoiceLimit","maxItemCount","addItems","removeItems","removeItemButton","editItems","duplicateItemsAllowed","delimiter","paste","showSearch","searchChoices","searchFields","searchFloor","searchResultLimit","position","resetScrollPosition","shouldSort","shouldSortItems","sorter","placeholder","searchPlaceholderValue","prependValue","appendValue","renderSelectedChoices","loadingText","noResultsText","noChoicesText","itemSelectText","addItemText","maxItemText","uniqueItemText","classNames","fuseOptions","addItemFilter","customAddItemText","callbackOnInit","callbackOnCreateTemplates","valueComparer","error","label","caption","disabled","required","placeholderValue","options","size","showClearButton","ifxSelect","ifxInput"],["ifxSelect","ifxInput"]);T("ifx-set-filter",void 0,["filterName","filterLabel","placeholder","type","options","ifxFilterSelect"],["ifxFilterSelect"]);T("ifx-sidebar",void 0,["applicationName","initialCollapse","showFooter","showHeader","termsOfUse","imprint","privacyPolicy","target","copyrightText","collapsible","collapsed","hideMenuLabel","ifxSidebarCollapseChange"],["ifxSidebarCollapseChange"]);T("ifx-sidebar-item",void 0,["icon","href","target","numberIndicator","active","isActionItem","handleItemClick","ifxSidebarMenu","ifxSidebarNavigationItem","ifxSidebarActionItem"],["ifxSidebarMenu","ifxSidebarNavigationItem","ifxSidebarActionItem"]);T("ifx-sidebar-title",void 0,["showInCollapsed"]);T("ifx-slider",void 0,["min","max","step","value","minValueHandle","maxValueHandle","disabled","showPercentage","leftIcon","rightIcon","leftText","rightText","type","ariaLabel","ifxChange"],["ifxChange"]);T("ifx-spinner",void 0,["size","variant","inverted","ariaLabel"]);T("ifx-status",void 0,["label","border","color"]);T("ifx-step",void 0,["complete","disabled","error","lastStep","stepId","stepperState"]);T("ifx-stepper",void 0,["activeStep","indicatorPosition","showStepNumber","variant","ariaLabel","ariaCurrent","ifxChange"],["ifxChange"]);T("ifx-switch",void 0,["checked","name","disabled","value","ifxChange"],["ifxChange"]);T("ifx-tab",void 0,["header","disabled","icon","iconPosition","tabHeaderChange"],["tabHeaderChange"]);T("ifx-table",void 0,["cols","rows","buttonRendererOptions","iconButtonRendererOptions","rowHeight","tableHeight","pagination","paginationItemsPerPage","filterOrientation","headline","variant","serverSidePagination","serverPageChangeHandler","showLoading"]);T("ifx-tabs",void 0,["orientation","activeTabIndex","fullWidth","ifxChange"],["ifxChange"]);T("ifx-template",void 0,["name","thumbnail","toggleTemplates","fieldError"],["toggleTemplates","fieldError"]);T("ifx-templates-ui");T("ifx-text-field",void 0,["placeholder","value","error","label","icon","caption","size","required","success","disabled","readOnly","maxlength","showDeleteIcon","autocomplete","type","internalId","ifxInput"],["ifxInput"]);T("ifx-textarea",void 0,["caption","cols","disabled","error","label","maxlength","name","placeholder","required","readOnly","resize","rows","value","wrap","fullWidth","ifxInput"],["ifxInput"]);T("ifx-tooltip",void 0,["header","text","position","ariaLabel","variant","icon"]);T("ifx-tree-view",void 0,["label","disableAllItems","expandAllItems","ariaLabel","ifxTreeViewExpandAllChange","ifxTreeViewDisableAllChange"],["ifxTreeViewExpandAllChange","ifxTreeViewDisableAllChange"]);T("ifx-tree-view-item",void 0,["expanded","initiallyExpanded","disableItem","ariaLabel","initiallySelected","value","ifxTreeViewItemExpandChange","ifxTreeViewItemCheckChange","ifxTreeViewItemDisableChange"],["ifxTreeViewItemExpandChange","ifxTreeViewItemCheckChange","ifxTreeViewItemDisableChange"]);const hf="infineon-design-system-stencil",gt={hydratedSelectorName:"hydrated",lazyLoad:!0,propChangeCallback:!0,shadowDom:!0,slotRelocation:!0,state:!0,updatable:!0};function gf(){}const xf=gf,bf='@font-face{font-family:"Source Sans 3";font-style:normal;font-weight:400;src:url("https://cdn.jsdelivr.net/npm/@infineon/design-system-tokens@5.0.0/dist/fonts/source-sans-3/SourceSans3-Regular.ttf.woff2") format("woff2"), url("https://cdn.jsdelivr.net/npm/@infineon/design-system-tokens@5.0.0/dist/fonts/source-sans-3/SourceSans3-Regular.ttf.woff") format("woff")}@font-face{font-family:"Source Sans 3";font-style:normal;font-weight:600;src:url("https://cdn.jsdelivr.net/npm/@infineon/design-system-tokens@5.0.0/dist/fonts/source-sans-3/SourceSans3-Semibold.ttf.woff2") format("woff2"), url("https://cdn.jsdelivr.net/npm/@infineon/design-system-tokens@5.0.0/dist/fonts/source-sans-3/SourceSans3-Semibold.ttf.woff") format("woff")}@font-face{font-family:"Source Sans 3";font-style:italic;font-weight:400;src:url("https://cdn.jsdelivr.net/npm/@infineon/design-system-tokens@5.0.0/dist/fonts/source-sans-3/SourceSans3-It.ttf.woff2") format("woff2"), url("https://cdn.jsdelivr.net/npm/@infineon/design-system-tokens@5.0.0/dist/fonts/source-sans-3/SourceSans3-It.ttf.woff") format("woff")}:root{--ifx-font-family:"Source Sans 3", "Arial, sans-serif"}ifx-icon:empty{display:none}';var vf=Object.defineProperty,_f=(e,t)=>{for(var i in t)vf(e,i,{get:t[i],enumerable:!0})},$f="http://www.w3.org/2000/svg",yf="http://www.w3.org/1999/xhtml",cl=(e=>(e.Undefined="undefined",e.Null="null",e.String="string",e.Number="number",e.SpecialNumber="number",e.Boolean="boolean",e.BigInt="bigint",e))(cl||{}),ul=(e=>(e.Array="array",e.Date="date",e.Map="map",e.Object="object",e.RegularExpression="regexp",e.Set="set",e.Channel="channel",e.Symbol="symbol",e))(ul||{}),rn="type",sn="value",vn="serialized:",wf=(e,t)=>{var i;const n=t.$cmpMeta$;Object.entries((i=n.$members$)!=null?i:{}).map(([s,[l]])=>{if(l&31||l&32){const a=e[s],c=Sf(Object.getPrototypeOf(e),s)||Object.getOwnPropertyDescriptor(e,s);c&&Object.defineProperty(e,s,{get(){return c.get.call(this)},set(d){c.set.call(this,d)},configurable:!0,enumerable:!0}),e[s]=t.$instanceValues$.has(s)?t.$instanceValues$.get(s):a}})};function Sf(e,t){for(;e;){const i=Object.getOwnPropertyDescriptor(e,t);if(i?.get)return i;e=Object.getPrototypeOf(e)}}var Fe=e=>{if(e.__stencil__getHostRef)return e.__stencil__getHostRef()},Ap=(e,t)=>{t&&(e.__stencil__getHostRef=()=>t,t.$lazyInstance$=e,t.$cmpMeta$.$flags$&512&&gt.state&&wf(e,t))},If=(e,t)=>{const i={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map,$serializerValues$:new Map};i.$onInstancePromise$=new Promise(r=>i.$onInstanceResolve$=r),i.$onReadyPromise$=new Promise(r=>i.$onReadyResolve$=r),e["s-p"]=[],e["s-rc"]=[],i.$fetchedCbList$=[];const n=i;return e.__stencil__getHostRef=()=>n,n},Vr=(e,t)=>t in e,L=(e,t)=>(0,console.error)(e,t),ln=new Map,Cf=(e,t,i)=>{const n=e.$tagName$.replace(/-/g,"_"),r=e.$lazyBundleId$;if(!r)return;const s=ln.get(r);if(s)return s[n];{const l=a=>(ln.set(r,a),a[n]);switch(r){case"ifx-action-list":return R(()=>import("./ifx-action-list.entry-BIm4SW-T.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(l,L);case"ifx-action-list-item":return R(()=>import("./ifx-action-list-item.entry-DQRrXRz4.js"),__vite__mapDeps([3,4]),import.meta.url).then(l,L);case"ifx-breadcrumb":return R(()=>import("./ifx-breadcrumb.entry-B4sc1n5z.js"),__vite__mapDeps([5,1,2]),import.meta.url).then(l,L);case"ifx-breadcrumb-item":return R(()=>import("./ifx-breadcrumb-item.entry-B22drGuC.js"),[],import.meta.url).then(l,L);case"ifx-breadcrumb-item-label":return R(()=>import("./ifx-breadcrumb-item-label.entry-Sv0YnqQP.js"),[],import.meta.url).then(l,L);case"ifx-card":return R(()=>import("./ifx-card.entry-BsvmRZEk.js"),__vite__mapDeps([6,1,2]),import.meta.url).then(l,L);case"ifx-card-headline":return R(()=>import("./ifx-card-headline.entry-DmSbWPJS.js"),[],import.meta.url).then(l,L);case"ifx-card-image":return R(()=>import("./ifx-card-image.entry-Cxws8632.js"),[],import.meta.url).then(l,L);case"ifx-card-links":return R(()=>import("./ifx-card-links.entry-DrREYJ7H.js"),[],import.meta.url).then(l,L);case"ifx-card-overline":return R(()=>import("./ifx-card-overline.entry-BkVjGfhh.js"),[],import.meta.url).then(l,L);case"ifx-card-text":return R(()=>import("./ifx-card-text.entry-BJgW004r.js"),[],import.meta.url).then(l,L);case"ifx-checkbox-group":return R(()=>import("./ifx-checkbox-group.entry-BH7LDAId.js"),__vite__mapDeps([7,1,2]),import.meta.url).then(l,L);case"ifx-content-switcher":return R(()=>import("./ifx-content-switcher.entry-YaRzgOj2.js"),__vite__mapDeps([8,1,2]),import.meta.url).then(l,L);case"ifx-content-switcher-item":return R(()=>import("./ifx-content-switcher-item.entry-Dzi0G7Kv.js"),[],import.meta.url).then(l,L);case"ifx-date-picker":return R(()=>import("./ifx-date-picker.entry-BiSaMywn.js"),__vite__mapDeps([9,1,2]),import.meta.url).then(l,L);case"ifx-download":return R(()=>import("./ifx-download.entry-CYU7ug63.js"),[],import.meta.url).then(l,L);case"ifx-dropdown":return R(()=>import("./ifx-dropdown.entry-BE-vH-Tl.js"),__vite__mapDeps([10,1,2,11]),import.meta.url).then(l,L);case"ifx-dropdown-header":return R(()=>import("./ifx-dropdown-header.entry-wR_yb7jR.js"),[],import.meta.url).then(l,L);case"ifx-dropdown-item":return R(()=>import("./ifx-dropdown-item.entry-BlyX8Ram.js"),[],import.meta.url).then(l,L);case"ifx-dropdown-menu":return R(()=>import("./ifx-dropdown-menu.entry-DLWT2agM.js"),[],import.meta.url).then(l,L);case"ifx-dropdown-separator":return R(()=>import("./ifx-dropdown-separator.entry-Dj9l_uiA.js"),[],import.meta.url).then(l,L);case"ifx-dropdown-trigger":return R(()=>import("./ifx-dropdown-trigger.entry-D85VPFjZ.js"),[],import.meta.url).then(l,L);case"ifx-dropdown-trigger-button":return R(()=>import("./ifx-dropdown-trigger-button.entry-CcIXdN0g.js"),[],import.meta.url).then(l,L);case"ifx-faq":return R(()=>import("./ifx-faq.entry-zAORuWYm.js"),[],import.meta.url).then(l,L);case"ifx-file-upload":return R(()=>import("./ifx-file-upload.entry-6BZFOUkF.js"),__vite__mapDeps([12,1,2]),import.meta.url).then(l,L);case"ifx-filter-bar":return R(()=>import("./ifx-filter-bar.entry-4fAtK2dk.js"),[],import.meta.url).then(l,L);case"ifx-filter-search":return R(()=>import("./ifx-filter-search.entry-Bxvw7PSW.js"),[],import.meta.url).then(l,L);case"ifx-filter-type-group":return R(()=>import("./ifx-filter-type-group.entry-C6wM6YQA.js"),[],import.meta.url).then(l,L);case"ifx-footer":return R(()=>import("./ifx-footer.entry-CS69xTQ7.js"),__vite__mapDeps([13,1,2]),import.meta.url).then(l,L);case"ifx-footer-column":return R(()=>import("./ifx-footer-column.entry-CvfqAMV9.js"),[],import.meta.url).then(l,L);case"ifx-icons-preview":return R(()=>import("./ifx-icons-preview.entry-DxFcOQlh.js"),__vite__mapDeps([14,15]),import.meta.url).then(l,L);case"ifx-list":return R(()=>import("./ifx-list.entry-DN4nNHUM.js"),[],import.meta.url).then(l,L);case"ifx-list-entry":return R(()=>import("./ifx-list-entry.entry-WzEg30cq.js"),[],import.meta.url).then(l,L);case"ifx-navbar":return R(()=>import("./ifx-navbar.entry-BnU-F6yu.js"),__vite__mapDeps([16,1]),import.meta.url).then(l,L);case"ifx-navbar-item":return R(()=>import("./ifx-navbar-item.entry-Co78_wAL.js"),[],import.meta.url).then(l,L);case"ifx-navbar-profile":return R(()=>import("./ifx-navbar-profile.entry-guSef6pH.js"),[],import.meta.url).then(l,L);case"ifx-overview-table":return R(()=>import("./ifx-overview-table.entry-uL8mEhru.js"),[],import.meta.url).then(l,L);case"ifx-radio-button-group":return R(()=>import("./ifx-radio-button-group.entry-C6VQndQH.js"),__vite__mapDeps([17,1,2]),import.meta.url).then(l,L);case"ifx-search-bar":return R(()=>import("./ifx-search-bar.entry-CwyJPV22.js"),__vite__mapDeps([18,1,2]),import.meta.url).then(l,L);case"ifx-segment":return R(()=>import("./ifx-segment.entry-QvItobuO.js"),[],import.meta.url).then(l,L);case"ifx-segmented-control":return R(()=>import("./ifx-segmented-control.entry-BMD3O28-.js"),__vite__mapDeps([19,1,2]),import.meta.url).then(l,L);case"ifx-set-filter":return R(()=>import("./ifx-set-filter.entry-DQBFmMcU.js"),[],import.meta.url).then(l,L);case"ifx-sidebar":return R(()=>import("./ifx-sidebar.entry-4PmWR_WU.js"),__vite__mapDeps([20,1]),import.meta.url).then(l,L);case"ifx-sidebar-item":return R(()=>import("./ifx-sidebar-item.entry-DNvbM-wE.js"),[],import.meta.url).then(l,L);case"ifx-sidebar-title":return R(()=>import("./ifx-sidebar-title.entry-DOEUXsAz.js"),[],import.meta.url).then(l,L);case"ifx-slider":return R(()=>import("./ifx-slider.entry-COkaLIp4.js"),__vite__mapDeps([21,1,2]),import.meta.url).then(l,L);case"ifx-status":return R(()=>import("./ifx-status.entry-CW0ZPOKM.js"),__vite__mapDeps([22,1,2]),import.meta.url).then(l,L);case"ifx-step":return R(()=>import("./ifx-step.entry-BHyRmoou.js"),[],import.meta.url).then(l,L);case"ifx-stepper":return R(()=>import("./ifx-stepper.entry-ygvRIbM7.js"),__vite__mapDeps([23,1,2]),import.meta.url).then(l,L);case"ifx-switch":return R(()=>import("./ifx-switch.entry-BsK8V3E4.js"),__vite__mapDeps([24,1,2]),import.meta.url).then(l,L);case"ifx-tab":return R(()=>import("./ifx-tab.entry-BLhZ9o-c.js"),[],import.meta.url).then(l,L);case"ifx-tabs":return R(()=>import("./ifx-tabs.entry-Dk00giiE.js"),__vite__mapDeps([25,1,2]),import.meta.url).then(l,L);case"ifx-templates-ui":return R(()=>import("./ifx-templates-ui.entry-CSP_nVlp.js"),[],import.meta.url).then(l,L);case"ifx-textarea":return R(()=>import("./ifx-textarea.entry-DMXHeE2Z.js"),__vite__mapDeps([26,1,2]),import.meta.url).then(l,L);case"ifx-tooltip":return R(()=>import("./ifx-tooltip.entry-DT83ysvu.js"),__vite__mapDeps([27,1,2,11]),import.meta.url).then(l,L);case"ifx-tree-view":return R(()=>import("./ifx-tree-view.entry-eUS_N5eG.js"),__vite__mapDeps([28,1,2]),import.meta.url).then(l,L);case"ifx-tree-view-item":return R(()=>import("./ifx-tree-view-item.entry-0Xc_lMCa.js"),[],import.meta.url).then(l,L);case"ifx-notification":return R(()=>import("./ifx-notification.entry-CaEMQkl5.js"),__vite__mapDeps([29,1,2]),import.meta.url).then(l,L);case"ifx-progress-bar":return R(()=>import("./ifx-progress-bar.entry-BoPKSxaB.js"),__vite__mapDeps([30,1,2]),import.meta.url).then(l,L);case"ifx-radio-button":return R(()=>import("./ifx-radio-button.entry-Ja6Ch18E.js"),__vite__mapDeps([31,1,2]),import.meta.url).then(l,L);case"ifx-search-field":return R(()=>import("./ifx-search-field.entry-BhqYUL6Y.js"),__vite__mapDeps([32,1,2,4]),import.meta.url).then(l,L);case"ifx-button":return R(()=>import("./ifx-button.entry-BGTrIQGQ.js"),__vite__mapDeps([33,1,2,4]),import.meta.url).then(l,L);case"ifx-icon-button":return R(()=>import("./ifx-icon-button.entry-CYWhIDdh.js"),__vite__mapDeps([34,1,2,4]),import.meta.url).then(l,L);case"ifx-indicator":return R(()=>import("./ifx-indicator.entry-C7LtWMJl.js"),__vite__mapDeps([35,1,2]),import.meta.url).then(l,L);case"ifx-checkbox":return R(()=>import("./ifx-checkbox.entry-CYAhLiod.js"),__vite__mapDeps([36,1,2]),import.meta.url).then(l,L);case"ifx-link":return R(()=>import("./ifx-link.entry-CEHmlnMf.js"),__vite__mapDeps([37,1,2,4]),import.meta.url).then(l,L);case"ifx-icon":return R(()=>import("./ifx-icon.entry-CmclfAc8.js"),__vite__mapDeps([38,15,1,2]),import.meta.url).then(l,L);case"ifx-filter-accordion":return R(()=>import("./ifx-filter-accordion.entry-C8A_iWH8.js"),[],import.meta.url).then(l,L);case"ifx-select":return R(()=>import("./ifx-select.entry-C9b3GhT9.js"),__vite__mapDeps([39,1,2]),import.meta.url).then(l,L);case"ifx-basic-table":return R(()=>import("./ifx-basic-table.entry-C_-QdMii.js"),__vite__mapDeps([40,1,2,41,4]),import.meta.url).then(l,L);case"ifx-modal":return R(()=>import("./ifx-modal.entry-CZXV91kz.js"),__vite__mapDeps([42,1,2]),import.meta.url).then(l,L);case"ifx-accordion_2":return R(()=>import("./ifx-accordion_2.entry-rQ0gcuKw.js"),__vite__mapDeps([43,1,2]),import.meta.url).then(l,L);case"ifx-alert_2":return R(()=>import("./ifx-alert_2.entry-D-cDWjon.js"),__vite__mapDeps([44,1,2]),import.meta.url).then(l,L);case"ifx-multiselect_2":return R(()=>import("./ifx-multiselect_2.entry-UdpRxJXM.js"),__vite__mapDeps([45,1,2]),import.meta.url).then(l,L);case"ifx-spinner_2":return R(()=>import("./ifx-spinner_2.entry-DKiLSphW.js"),__vite__mapDeps([46,1,2,4]),import.meta.url).then(l,L);case"ifx-chip_3":return R(()=>import("./ifx-chip_3.entry-C7lsY1S8.js"),__vite__mapDeps([47,1,2]),import.meta.url).then(l,L);case"ifx-table":return R(()=>import("./ifx-table.entry-C1Gpn6k4.js"),__vite__mapDeps([48,4,1,2,41]),import.meta.url).then(l,L)}}return R(()=>import(`./${r}.entry.js`),[],import.meta.url).then(l=>(ln.set(r,l),l[n]),l=>{L(l,t.$hostElement$)})},Fi=new Map,Af="r",Ef="o",_n="s",kf="t",Lf="c",oi="s-id",$n="sty-id",Ur="c-id",Tf="{visibility:hidden}.hydrated{visibility:inherit}",dl="slot-fb{display:contents}slot-fb[hidden]{display:none}",Wr="http://www.w3.org/1999/xlink",ie=typeof window<"u"?window:{};ie.HTMLElement;var re={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,i,n)=>e.addEventListener(t,i,n),rel:(e,t,i,n)=>e.removeEventListener(t,i,n),ce:(e,t)=>new CustomEvent(e,t)},Ff=gt.shadowDom,Pf=(()=>{var e;let t=!1;try{(e=ie.document)==null||e.addEventListener("e",null,Object.defineProperty({},"passive",{get(){t=!0}}))}catch{}return t})(),Of=e=>Promise.resolve(e),ji=(()=>{try{return new CSSStyleSheet,typeof new CSSStyleSheet().replaceSync=="function"}catch{}return!1})(),yn=ji?!!ie.document&&Object.getOwnPropertyDescriptor(ie.document.adoptedStyleSheets,"length").writable:!1,wn=!1,Gr=[],fl=[],Rf=(e,t)=>i=>{e.push(i),wn||(wn=!0,re.$flags$&4?er(Sn):re.raf(Sn))},Kr=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(i){L(i)}e.length=0},Sn=()=>{Kr(Gr),Kr(fl),(wn=Gr.length>0)&&re.raf(Sn)},er=e=>Of().then(e),Df=Rf(fl),Ep=e=>{const t=new URL(e,re.$resourcesUrl$);return t.origin!==ie.location.origin?t.href:t.pathname},tr=e=>(e=typeof e,e==="object"||e==="function");function pl(e){var t,i,n;return(n=(i=(t=e.head)==null?void 0:t.querySelector('meta[name="csp-nonce"]'))==null?void 0:i.getAttribute("content"))!=null?n:void 0}var Mf=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),zf=class St{static fromLocalValue(t){const i=t[rn],n=sn in t?t[sn]:void 0;switch(i){case"string":return n;case"boolean":return n;case"bigint":return BigInt(n);case"undefined":return;case"null":return null;case"number":return n==="NaN"?NaN:n==="-0"?-0:n==="Infinity"?1/0:n==="-Infinity"?-1/0:n;case"array":return n.map(d=>St.fromLocalValue(d));case"date":return new Date(n);case"map":const r=new Map;for(const[d,u]of n){const p=typeof d=="object"&&d!==null?St.fromLocalValue(d):d,h=St.fromLocalValue(u);r.set(p,h)}return r;case"object":const s={};for(const[d,u]of n)s[d]=St.fromLocalValue(u);return s;case"regexp":const{pattern:l,flags:a}=n;return new RegExp(l,a);case"set":const c=new Set;for(const d of n)c.add(St.fromLocalValue(d));return c;case"symbol":return Symbol(n);default:throw new Error(`Unsupported type: ${i}`)}}static fromLocalValueArray(t){return t.map(i=>St.fromLocalValue(i))}static isLocalValueObject(t){if(typeof t!="object"||t===null||!t.hasOwnProperty(rn))return!1;const i=t[rn];return Object.values({...cl,...ul}).includes(i)?i!=="null"&&i!=="undefined"?t.hasOwnProperty(sn):!0:!1}},Hf={};_f(Hf,{err:()=>ml,map:()=>qf,ok:()=>In,unwrap:()=>Bf,unwrapErr:()=>Nf});var In=e=>({isOk:!0,isErr:!1,value:e}),ml=e=>({isOk:!1,isErr:!0,value:e});function qf(e,t){if(e.isOk){const i=t(e.value);return i instanceof Promise?i.then(n=>In(n)):In(i)}if(e.isErr){const i=e.value;return ml(i)}throw"should never get here"}var Bf=e=>{if(e.isOk)return e.value;throw e.value},Nf=e=>{if(e.isErr)return e.value;throw e.value};function jf(e){return typeof e!="string"||!e.startsWith(vn)?e:zf.fromLocalValue(JSON.parse(atob(e.slice(vn.length))))}function Vf(e){if(!ji)return;const t=new CSSStyleSheet;return t.replaceSync(e),t}var Ut;function Uf(e){var t;const i=this.attachShadow({mode:"open",delegatesFocus:!!(e.$flags$&16)});Ut===void 0&&(Ut=(t=Vf(bf))!=null?t:null),Ut&&(yn?i.adoptedStyleSheets.push(Ut):i.adoptedStyleSheets=[...i.adoptedStyleSheets,Ut])}var hl=e=>{const t=dt(e,"childNodes");e.tagName&&e.tagName.includes("-")&&e["s-cr"]&&e.tagName!=="SLOT-FB"&&gl(t,e.tagName).forEach(n=>{n.nodeType===1&&n.tagName==="SLOT-FB"&&(Gf(n,ir(n),!1).length?n.hidden=!0:n.hidden=!1)});let i=0;for(i=0;i<t.length;i++){const n=t[i];n.nodeType===1&&dt(n,"childNodes").length&&hl(n)}},Wf=e=>{const t=[];for(let i=0;i<e.length;i++){const n=e[i]["s-nr"]||void 0;n&&n.isConnected&&t.push(n)}return t};function gl(e,t,i){let n=0,r=[],s;for(;n<e.length;n++)s=e[n],s["s-sr"]&&(!t||s["s-hn"]===t)&&i===void 0&&r.push(s),r=[...r,...gl(s.childNodes,t,i)];return r}var Gf=(e,t,i=!0)=>{const n=[];(i&&e["s-sr"]||!e["s-sr"])&&n.push(e);let r=e;for(;r=r.nextSibling;)ir(r)===t&&(i||!r["s-sr"])&&n.push(r);return n},Yr=(e,t)=>e.nodeType===1?e.getAttribute("slot")===null&&t===""||e.getAttribute("slot")===t:e["s-sn"]===t?!0:t==="",Kf=(e,t,i,n)=>{if(e["s-ol"]&&e["s-ol"].isConnected)return;const r=document.createTextNode("");if(r["s-nr"]=e,!t["s-cr"]||!t["s-cr"].parentNode)return;const s=t["s-cr"].parentNode,l=dt(s,"appendChild");if(typeof n<"u"){r["s-oo"]=n;const a=dt(s,"childNodes"),c=[r];a.forEach(d=>{d["s-nr"]&&c.push(d)}),c.sort((d,u)=>!d["s-oo"]||d["s-oo"]<(u["s-oo"]||0)?-1:!u["s-oo"]||u["s-oo"]<d["s-oo"]?1:0),c.forEach(d=>l.call(s,d))}else l.call(s,r);e["s-ol"]=r,e["s-sh"]=t["s-hn"]},ir=e=>typeof e["s-sn"]=="string"?e["s-sn"]:e.nodeType===1&&e.getAttribute("slot")||void 0;function xl(e){if(e.assignedElements||e.assignedNodes||!e["s-sr"])return;const t=i=>(function(n){const r=[],s=this["s-sn"];n?.flatten&&console.error(`
          Flattening is not supported for Stencil non-shadow slots.
          You can use \`.childNodes\` to nested slot fallback content.
          If you have a particular use case, please open an issue on the Stencil repo.
        `);const l=this["s-cr"].parentElement;return(l.__childNodes?l.childNodes:Wf(l.childNodes)).forEach(c=>{s===ir(c)&&r.push(c)}),i?r.filter(c=>c.nodeType===1):r}).bind(e);e.assignedElements=t(!0),e.assignedNodes=t(!1)}var Yf=e=>{const t=e.cloneNode;e.cloneNode=function(i){const n=this,r=n.shadowRoot&&Ff,s=t.call(n,r?i:!1);if(!r&&i){let l=0,a,c;const d=["s-id","s-cr","s-lr","s-rc","s-sc","s-p","s-cn","s-sr","s-sn","s-hn","s-ol","s-nr","s-si","s-rf","s-scs"],u=this.__childNodes||this.childNodes;for(;l<u.length;l++)a=u[l]["s-nr"],c=d.every(p=>!u[l][p]),a&&s.appendChild(a.cloneNode(!0)),c&&s.appendChild(u[l].cloneNode(!0))}return s}};function dt(e,t){if("__"+t in e){const i=e["__"+t];return typeof i!="function"?i:i.bind(e)}else return typeof e[t]!="function"?e[t]:e[t].bind(e)}var Ye=(e,t="")=>()=>{},Zf=(e,t)=>()=>{},Tt=new WeakMap,bl=(e,t,i)=>{let n=Fi.get(e);ji&&i?(n=n||new CSSStyleSheet,typeof n=="string"?n=t:n.replaceSync(t)):n=t,Fi.set(e,n)},vl=(e,t,i)=>{var n;const r=nr(t),s=Fi.get(r);if(!ie.document)return r;if(e=e.nodeType===11?e:ie.document,s)if(typeof s=="string"){e=e.head||e;let l=Tt.get(e),a;if(l||Tt.set(e,l=new Set),!l.has(r)){if(e.host&&(a=e.querySelector(`[${$n}="${r}"]`)))a.innerHTML=s;else{a=ie.document.createElement("style"),a.innerHTML=s;const c=(n=re.$nonce$)!=null?n:pl(ie.document);if(c!=null&&a.setAttribute("nonce",c),!(t.$flags$&1))if(e.nodeName==="HEAD"){const d=e.querySelectorAll("link[rel=preconnect]"),u=d.length>0?d[d.length-1].nextSibling:e.querySelector("style");e.insertBefore(a,u?.parentNode===e?u:null)}else if("host"in e)if(ji){const d=new CSSStyleSheet;d.replaceSync(s),yn?e.adoptedStyleSheets.unshift(d):e.adoptedStyleSheets=[d,...e.adoptedStyleSheets]}else{const d=e.querySelector("style");d?d.innerHTML=s+d.innerHTML:e.prepend(a)}else e.append(a);t.$flags$&1&&e.insertBefore(a,null)}t.$flags$&4&&(a.innerHTML+=dl),l&&l.add(r)}}else e.adoptedStyleSheets.includes(s)||(yn?e.adoptedStyleSheets.push(s):e.adoptedStyleSheets=[...e.adoptedStyleSheets,s]);return r},Jf=e=>{const t=e.$cmpMeta$,i=e.$hostElement$,n=t.$flags$,r=Ye("attachStyles",t.$tagName$),s=vl(i.shadowRoot?i.shadowRoot:i.getRootNode(),t);n&10&&(i["s-sc"]=s,i.classList.add(s+"-h")),r()},nr=(e,t)=>"sc-"+e.$tagName$,Xf=e=>e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{"),Qf=()=>{if(!ie.document)return;const e=ie.document.querySelectorAll(`[${$n}]`);let t=0;for(;t<e.length;t++)bl(e[t].getAttribute($n),Xf(e[t].innerHTML),!0)},_l=(e,t,...i)=>{let n=null,r=null,s=null,l=!1,a=!1;const c=[],d=p=>{for(let h=0;h<p.length;h++)n=p[h],Array.isArray(n)?d(n):n!=null&&typeof n!="boolean"&&((l=typeof e!="function"&&!tr(n))&&(n=String(n)),l&&a?c[c.length-1].$text$+=n:c.push(l?Ht(null,n):n),a=l)};if(d(i),t){t.key&&(r=t.key),t.name&&(s=t.name);{const p=t.className||t.class;p&&(t.class=typeof p!="object"?p:Object.keys(p).filter(h=>p[h]).join(" "))}}if(typeof e=="function")return e(t===null?{}:t,c,ip);const u=Ht(e,null);return u.$attrs$=t,c.length>0&&(u.$children$=c),u.$key$=r,u.$name$=s,u},Ht=(e,t)=>{const i={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};return i.$attrs$=null,i.$key$=null,i.$name$=null,i},ep={},tp=e=>e&&e.$tag$===ep,ip={forEach:(e,t)=>e.map(Zr).forEach(t),map:(e,t)=>e.map(Zr).map(t).map(np)},Zr=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),np=e=>{if(typeof e.vtag=="function"){const i={...e.vattrs};return e.vkey&&(i.key=e.vkey),e.vname&&(i.name=e.vname),_l(e.vtag,i,...e.vchildren||[])}const t=Ht(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},rp=(e,t,i,n)=>{var r,s;const l=Ye("hydrateClient",t),a=e.shadowRoot,c=[],d=[],u=[],p=a?[]:null,h=Ht(t,null);h.$elm$=e,ie.document&&(!re.$orgLocNodes$||!re.$orgLocNodes$.size)&&An(ie.document.body,re.$orgLocNodes$=new Map),e[oi]=i,e.removeAttribute(oi),n.$vnode$=Cn(h,c,d,p,e,e,i,u);let v=0;const k=c.length;let y;for(v;v<k;v++){y=c[v];const E=y.$hostId$+"."+y.$nodeId$,D=re.$orgLocNodes$.get(E),F=y.$elm$;if(!a)F["s-hn"]=t.toUpperCase(),y.$tag$==="slot"&&(F["s-cr"]=e["s-cr"]);else if((r=y.$tag$)!=null&&r.toString().includes("-")&&y.$tag$!=="slot-fb"&&!y.$elm$.shadowRoot){const te=Fe(y.$elm$);if(te){const oe=nr(te.$cmpMeta$),be=ie.document.querySelector(`style[sty-id="${oe}"]`);be&&e.shadowRoot.append(be.cloneNode(!0))}}y.$tag$==="slot"&&(y.$name$=y.$elm$["s-sn"]||y.$elm$.name||null,y.$children$?(y.$flags$|=2,y.$elm$.childNodes.length||y.$children$.forEach(te=>{y.$elm$.appendChild(te.$elm$)})):y.$flags$|=1),D&&D.isConnected&&(D.parentElement.shadowRoot&&D["s-en"]===""&&D.parentNode.insertBefore(F,D.nextSibling),D.parentNode.removeChild(D),a||(F["s-oo"]=parseInt(y.$nodeId$))),D&&!D["s-id"]&&re.$orgLocNodes$.delete(E)}const z=[],q=u.length;let b=0,g,x,w,_;for(b;b<q;b++)if(g=u[b],!(!g||!g.length))for(w=g.length,x=0,x;x<w;x++){if(_=g[x],z[_.hostId]||(z[_.hostId]=re.$orgLocNodes$.get(_.hostId)),!z[_.hostId])continue;const E=z[_.hostId];E.shadowRoot&&_.node.parentElement!==E&&E.appendChild(_.node),(!E.shadowRoot||!a)&&(_.slot["s-cr"]||(_.slot["s-cr"]=E["s-cr"],!_.slot["s-cr"]&&E.shadowRoot?_.slot["s-cr"]=E:_.slot["s-cr"]=(E.__childNodes||E.childNodes)[0]),Kf(_.node,_.slot,!1,_.node["s-oo"]),(s=_.node.parentElement)!=null&&s.shadowRoot&&_.node.getAttribute&&_.node.getAttribute("slot")&&_.node.removeAttribute("slot"))}if(a){let E=0;const D=p.length;if(D){for(E;E<D;E++){const F=p[E];F&&a.appendChild(F)}Array.from(e.childNodes).forEach(F=>{typeof F["s-en"]!="string"&&typeof F["s-sn"]!="string"&&(F.nodeType===1&&F.slot&&F.hidden?F.removeAttribute("hidden"):(F.nodeType===8&&!F.nodeValue||F.nodeType===3&&!F.wholeText.trim())&&F.parentNode.removeChild(F))})}}n.$hostElement$=e,l()},Cn=(e,t,i,n,r,s,l,a=[])=>{let c,d,u,p;if(s.nodeType===1){if(c=s.getAttribute(Ur),c&&(d=c.split("."),d[0]===l||d[0]==="0")){u=Jr({$flags$:0,$hostId$:d[0],$nodeId$:d[1],$depth$:d[2],$index$:d[3],$tag$:s.tagName.toLowerCase(),$elm$:s,$attrs$:{class:s.className||""}}),t.push(u),s.removeAttribute(Ur),e.$children$||(e.$children$=[]);const v=u.$elm$.getAttribute("s-sn");typeof v=="string"&&(u.$tag$==="slot-fb"&&Xr(v,d[2],u,s,e,t,i,n,a),u.$elm$["s-sn"]=v,u.$elm$.removeAttribute("s-sn")),u.$index$!==void 0&&(e.$children$[u.$index$]=u),e=u,n&&u.$depth$==="0"&&(n[u.$index$]=u.$elm$)}if(s.shadowRoot)for(p=s.shadowRoot.childNodes.length-1;p>=0;p--)Cn(e,t,i,n,r,s.shadowRoot.childNodes[p],l,a);const h=s.__childNodes||s.childNodes;for(p=h.length-1;p>=0;p--)Cn(e,t,i,n,r,h[p],l,a)}else if(s.nodeType===8){if(d=s.nodeValue.split("."),d[1]===l||d[1]==="0"){if(c=d[0],u=Jr({$hostId$:d[1],$nodeId$:d[2],$depth$:d[3],$index$:d[4]||"0",$elm$:s,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null}),c===kf)u.$elm$=es(s,3),u.$elm$&&u.$elm$.nodeType===3&&(u.$text$=u.$elm$.textContent,t.push(u),s.remove(),l===u.$hostId$&&(e.$children$||(e.$children$=[]),e.$children$[u.$index$]=u),n&&u.$depth$==="0"&&(n[u.$index$]=u.$elm$));else if(c===Lf)u.$elm$=es(s,8),u.$elm$&&u.$elm$.nodeType===8&&(t.push(u),s.remove());else if(u.$hostId$===l)if(c===_n){const h=s["s-sn"]=d[5]||"";Xr(h,d[2],u,s,e,t,i,n,a)}else c===Af&&(n?s.remove():(r["s-cr"]=s,s["s-cn"]=!0))}}else if(e&&e.$tag$==="style"){const h=Ht(null,s.textContent);h.$elm$=s,h.$index$="0",e.$children$=[h]}else s.nodeType===3&&!s.wholeText.trim()&&!s["s-nr"]&&s.remove();return e},An=(e,t)=>{if(e.nodeType===1){const i=e[oi]||e.getAttribute(oi);i&&t.set(i,e);let n=0;if(e.shadowRoot)for(;n<e.shadowRoot.childNodes.length;n++)An(e.shadowRoot.childNodes[n],t);const r=e.__childNodes||e.childNodes;for(n=0;n<r.length;n++)An(r[n],t)}else if(e.nodeType===8){const i=e.nodeValue.split(".");i[0]===Ef&&(t.set(i[1]+"."+i[2],e),e.nodeValue="",e["s-en"]=i[3])}},Jr=e=>({...{$flags$:0,$hostId$:null,$nodeId$:null,$depth$:null,$index$:"0",$elm$:null,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null},...e});function Xr(e,t,i,n,r,s,l,a,c){n["s-sr"]=!0,i.$name$=e||null,i.$tag$="slot";const d=r?.$elm$?r.$elm$["s-id"]||r.$elm$.getAttribute("s-id"):"";if(a&&ie.document){const u=i.$elm$=ie.document.createElement(i.$tag$);i.$name$&&i.$elm$.setAttribute("name",e),r.$elm$.shadowRoot&&d&&d!==i.$hostId$?dt(r.$elm$,"insertBefore")(u,dt(r.$elm$,"children")[0]):dt(dt(n,"parentNode"),"insertBefore")(u,n),Qr(c,t,e,n,i.$hostId$),n.remove(),i.$depth$==="0"&&(a[i.$index$]=i.$elm$)}else{const u=i.$elm$,p=d&&d!==i.$hostId$&&r.$elm$.shadowRoot;Qr(c,t,e,n,p?d:i.$hostId$),xl(n),p&&r.$elm$.insertBefore(u,r.$elm$.children[0])}s.push(i),l.push(i),r.$children$||(r.$children$=[]),r.$children$[i.$index$]=i}var Qr=(e,t,i,n,r)=>{var s,l;let a=n.nextSibling;if(e[t]=e[t]||[],!(!a||(s=a.nodeValue)!=null&&s.startsWith(_n+".")))do a&&((a.getAttribute&&a.getAttribute("slot")||a["s-sn"])===i||i===""&&!a["s-sn"]&&(!a.getAttribute||!a.getAttribute("slot"))&&(a.nodeType===8||a.nodeType===3))&&(a["s-sn"]=i,e[t].push({slot:n,node:a,hostId:r})),a=a?.nextSibling;while(a&&!((l=a.nodeValue)!=null&&l.startsWith(_n+".")))},es=(e,t)=>{let i=e;do i=i.nextSibling;while(i&&(i.nodeType!==t||!i.nodeValue));return i},rr=e=>{const t=Mf(e);return new RegExp(`(^|[^@]|@(?!supports\\s+selector\\s*\\([^{]*?${t}))(${t}\\b)`,"g")};rr("::slotted");rr(":host");rr(":host-context");var En=(e,t,i)=>typeof e=="string"&&e.startsWith(vn)?(e=jf(e),e):e!=null&&!tr(e)?t&4?e==="false"?!1:e===""||!!e:t&2?typeof e=="string"?parseFloat(e):typeof e=="number"?e:NaN:t&1?String(e):e:e,sp=e=>{var t;return(t=Fe(e))==null?void 0:t.$hostElement$},kp=(e,t,i)=>{const n=sp(e);return{emit:r=>$l(n,t,{bubbles:!!(i&4),composed:!!(i&2),cancelable:!!(i&1),detail:r})}},$l=(e,t,i)=>{const n=re.ce(t,i);return e.dispatchEvent(n),n},ts=(e,t,i,n,r,s,l)=>{if(i===n)return;let a=Vr(e,t),c=t.toLowerCase();if(t==="class"){const d=e.classList,u=is(i);let p=is(n);if((e["s-si"]||e["s-sc"])&&l){const h=e["s-sc"]||e["s-si"];p.push(h),u.forEach(v=>{v.startsWith(h)&&p.push(v)}),p=[...new Set(p)].filter(v=>v),d.add(...p)}else d.remove(...u.filter(h=>h&&!p.includes(h))),d.add(...p.filter(h=>h&&!u.includes(h)))}else if(t==="style"){for(const d in i)(!n||n[d]==null)&&(d.includes("-")?e.style.removeProperty(d):e.style[d]="");for(const d in n)(!i||n[d]!==i[d])&&(d.includes("-")?e.style.setProperty(d,n[d]):e.style[d]=n[d])}else if(t!=="key")if(t==="ref")n&&n(e);else if(!a&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"?t=t.slice(3):Vr(ie,c)?t=c.slice(2):t=c[2]+t.slice(3),i||n){const d=t.endsWith(yl);t=t.replace(ap,""),i&&re.rel(e,t,i,d),n&&re.ael(e,t,n,d)}}else{const d=tr(n);if((a||d&&n!==null)&&!r)try{if(e.tagName.includes("-"))e[t]!==n&&(e[t]=n);else{const p=n??"";t==="list"?a=!1:(i==null||e[t]!=p)&&(typeof e.__lookupSetter__(t)=="function"?e[t]=p:e.setAttribute(t,p))}}catch{}let u=!1;c!==(c=c.replace(/^xlink\:?/,""))&&(t=c,u=!0),n==null||n===!1?(n!==!1||e.getAttribute(t)==="")&&(u?e.removeAttributeNS(Wr,t):e.removeAttribute(t)):(!a||s&4||r)&&!d&&e.nodeType===1&&(n=n===!0?"":n,u?e.setAttributeNS(Wr,t,n):e.setAttribute(t,n))}},lp=/\s/,is=e=>(typeof e=="object"&&e&&"baseVal"in e&&(e=e.baseVal),!e||typeof e!="string"?[]:e.split(lp)),yl="Capture",ap=new RegExp(yl+"$"),kn=(e,t,i,n)=>{const r=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$,s=e&&e.$attrs$||{},l=t.$attrs$||{};for(const a of ns(Object.keys(s)))a in l||ts(r,a,s[a],void 0,i,t.$flags$,n);for(const a of ns(Object.keys(l)))ts(r,a,s[a],l[a],i,t.$flags$,n)};function ns(e){return e.includes("ref")?[...e.filter(t=>t!=="ref"),"ref"]:e}var Ln,Vi,Tn=!1,Pi=!1,sr=!1,Ee=!1,Oi=(e,t,i)=>{var n;const r=t.$children$[i];let s=0,l,a,c;if(Tn||(sr=!0,r.$tag$==="slot"&&(r.$flags$|=r.$children$?2:1)),r.$text$!==null)l=r.$elm$=ie.document.createTextNode(r.$text$);else if(r.$flags$&1)l=r.$elm$=ie.document.createTextNode(""),kn(null,r,Ee);else{if(Ee||(Ee=r.$tag$==="svg"),!ie.document)throw new Error("You are trying to render a Stencil component in an environment that doesn't support the DOM. Make sure to populate the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window/window) object before rendering a component.");if(l=r.$elm$=ie.document.createElementNS(Ee?$f:yf,!Tn&&gt.slotRelocation&&r.$flags$&2?"slot-fb":r.$tag$),Ee&&r.$tag$==="foreignObject"&&(Ee=!1),kn(null,r,Ee),r.$children$)for(s=0;s<r.$children$.length;++s)a=Oi(e,r,s),a&&l.appendChild(a);r.$tag$==="svg"?Ee=!1:l.tagName==="foreignObject"&&(Ee=!0)}return l["s-hn"]=Vi,r.$flags$&3&&(l["s-sr"]=!0,l["s-cr"]=Ln,l["s-sn"]=r.$name$||"",l["s-rf"]=(n=r.$attrs$)==null?void 0:n.ref,xl(l),c=e&&e.$children$&&e.$children$[i],c&&c.$tag$===r.$tag$&&e.$elm$&&ci(e.$elm$,!1)),l},ci=(e,t)=>{re.$flags$|=1;const i=Array.from(e.__childNodes||e.childNodes);for(let n=i.length-1;n>=0;n--){const r=i[n];r["s-hn"]!==Vi&&r["s-ol"]&&(pt(ui(r).parentNode,r,ui(r)),r["s-ol"].remove(),r["s-ol"]=void 0,r["s-sh"]=void 0,sr=!0),t&&ci(r,t)}re.$flags$&=-2},wl=(e,t,i,n,r,s)=>{let l=e["s-cr"]&&e["s-cr"].parentNode||e,a;for(l.shadowRoot&&l.tagName===Vi&&(l=l.shadowRoot);r<=s;++r)n[r]&&(a=Oi(null,i,r),a&&(n[r].$elm$=a,pt(l,a,ui(t))))},Sl=(e,t,i)=>{for(let n=t;n<=i;++n){const r=e[n];if(r){const s=r.$elm$;Cl(r),s&&(Pi=!0,s["s-ol"]?s["s-ol"].remove():ci(s,!0),s.remove())}}},op=(e,t,i,n,r=!1)=>{let s=0,l=0,a=0,c=0,d=t.length-1,u=t[0],p=t[d],h=n.length-1,v=n[0],k=n[h],y,z;for(;s<=d&&l<=h;)if(u==null)u=t[++s];else if(p==null)p=t[--d];else if(v==null)v=n[++l];else if(k==null)k=n[--h];else if(vi(u,v,r))Lt(u,v,r),u=t[++s],v=n[++l];else if(vi(p,k,r))Lt(p,k,r),p=t[--d],k=n[--h];else if(vi(u,k,r))(u.$tag$==="slot"||k.$tag$==="slot")&&ci(u.$elm$.parentNode,!1),Lt(u,k,r),pt(e,u.$elm$,p.$elm$.nextSibling),u=t[++s],k=n[--h];else if(vi(p,v,r))(u.$tag$==="slot"||k.$tag$==="slot")&&ci(p.$elm$.parentNode,!1),Lt(p,v,r),pt(e,p.$elm$,u.$elm$),p=t[--d],v=n[++l];else{for(a=-1,c=s;c<=d;++c)if(t[c]&&t[c].$key$!==null&&t[c].$key$===v.$key$){a=c;break}a>=0?(z=t[a],z.$tag$!==v.$tag$?y=Oi(t&&t[l],i,a):(Lt(z,v,r),t[a]=void 0,y=z.$elm$),v=n[++l]):(y=Oi(t&&t[l],i,l),v=n[++l]),y&&pt(ui(u.$elm$).parentNode,y,ui(u.$elm$))}s>d?wl(e,n[h+1]==null?null:n[h+1].$elm$,i,n,l,h):l>h&&Sl(t,s,d)},vi=(e,t,i=!1)=>e.$tag$===t.$tag$?e.$tag$==="slot"?e.$name$===t.$name$:i?(i&&!e.$key$&&t.$key$&&(e.$key$=t.$key$),!0):e.$key$===t.$key$:!1,ui=e=>e&&e["s-ol"]||e,Lt=(e,t,i=!1)=>{const n=t.$elm$=e.$elm$,r=e.$children$,s=t.$children$,l=t.$tag$,a=t.$text$;let c;a===null?(Ee=l==="svg"?!0:l==="foreignObject"?!1:Ee,kn(e,t,Ee,i),r!==null&&s!==null?op(n,r,t,s,i):s!==null?(e.$text$!==null&&(n.textContent=""),wl(n,null,t,s,0,s.length-1)):!i&&gt.updatable&&r!==null?Sl(r,0,r.length-1):i&&gt.updatable&&r!==null&&s===null&&(t.$children$=r),Ee&&l==="svg"&&(Ee=!1)):(c=n["s-cr"])?c.parentNode.textContent=a:e.$text$!==a&&(n.data=a)},et=[],Il=e=>{let t,i,n;const r=e.__childNodes||e.childNodes;for(const s of r){if(s["s-sr"]&&(t=s["s-cr"])&&t.parentNode){i=t.parentNode.__childNodes||t.parentNode.childNodes;const l=s["s-sn"];for(n=i.length-1;n>=0;n--)if(t=i[n],!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==s["s-hn"])if(Yr(t,l)){let a=et.find(c=>c.$nodeToRelocate$===t);Pi=!0,t["s-sn"]=t["s-sn"]||l,a?(a.$nodeToRelocate$["s-sh"]=s["s-hn"],a.$slotRefNode$=s):(t["s-sh"]=s["s-hn"],et.push({$slotRefNode$:s,$nodeToRelocate$:t})),t["s-sr"]&&et.map(c=>{Yr(c.$nodeToRelocate$,t["s-sn"])&&(a=et.find(d=>d.$nodeToRelocate$===t),a&&!c.$slotRefNode$&&(c.$slotRefNode$=a.$slotRefNode$))})}else et.some(a=>a.$nodeToRelocate$===t)||et.push({$nodeToRelocate$:t})}s.nodeType===1&&Il(s)}},Cl=e=>{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(Cl)},pt=(e,t,i)=>e?.insertBefore(t,i),cp=(e,t,i=!1)=>{var n,r,s,l;const a=e.$hostElement$,c=e.$cmpMeta$,d=e.$vnode$||Ht(null,null),p=tp(t)?t:_l(null,null,t);if(Vi=a.tagName,c.$attrsToReflect$&&(p.$attrs$=p.$attrs$||{},c.$attrsToReflect$.forEach(([h,v])=>{p.$attrs$[v]=a[h]})),i&&p.$attrs$)for(const h of Object.keys(p.$attrs$))a.hasAttribute(h)&&!["key","ref","style","class"].includes(h)&&(p.$attrs$[h]=a[h]);p.$tag$=null,p.$flags$|=4,e.$vnode$=p,p.$elm$=d.$elm$=a.shadowRoot||a,Tn=!!(c.$flags$&1)&&!(c.$flags$&128),Ln=a["s-cr"],Pi=!1,Lt(d,p,i);{if(re.$flags$|=1,sr){Il(p.$elm$);for(const h of et){const v=h.$nodeToRelocate$;if(!v["s-ol"]&&ie.document){const k=ie.document.createTextNode("");k["s-nr"]=v,pt(v.parentNode,v["s-ol"]=k,v)}}for(const h of et){const v=h.$nodeToRelocate$,k=h.$slotRefNode$;if(k){const y=k.parentNode;let z=k.nextSibling;{let g=(n=v["s-ol"])==null?void 0:n.previousSibling;for(;g;){let x=(r=g["s-nr"])!=null?r:null;if(x&&x["s-sn"]===v["s-sn"]&&y===(x.__parentNode||x.parentNode)){for(x=x.nextSibling;x===v||x?.["s-sr"];)x=x?.nextSibling;if(!x||!x["s-nr"]){z=x;break}}g=g.previousSibling}}const q=v.__parentNode||v.parentNode,b=v.__nextSibling||v.nextSibling;(!z&&y!==q||b!==z)&&v!==z&&(!v["s-hn"]&&v["s-ol"]&&(v["s-hn"]=v["s-ol"].parentNode.nodeName),pt(y,v,z),v.nodeType===1&&v.tagName!=="SLOT-FB"&&(v.hidden=(s=v["s-ih"])!=null?s:!1)),v&&typeof k["s-rf"]=="function"&&k["s-rf"](k)}else v.nodeType===1&&(i&&(v["s-ih"]=(l=v.hidden)!=null?l:!1),v.hidden=!0)}}Pi&&hl(p.$elm$),re.$flags$&=-2,et.length=0}Ln=void 0},Al=(e,t)=>{if(t&&!e.$onRenderResolve$&&t["s-p"]){const i=t["s-p"].push(new Promise(n=>e.$onRenderResolve$=()=>{t["s-p"].splice(i-1,1),n()}))}},lr=(e,t)=>{if(e.$flags$|=16,e.$flags$&4){e.$flags$|=512;return}Al(e,e.$ancestorComponent$);const i=()=>up(e,t);if(t){queueMicrotask(()=>{i()});return}return Df(i)},up=(e,t)=>{const i=e.$hostElement$,n=Ye("scheduleUpdate",e.$cmpMeta$.$tagName$),r=e.$lazyInstance$;if(!r)throw new Error(`Can't render component <${i.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`);let s;return t?(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map(([l,a])=>it(r,l,a,i)),e.$queuedListeners$=void 0),e.$fetchedCbList$.length&&e.$fetchedCbList$.forEach(l=>l(i)),s=it(r,"componentWillLoad",void 0,i)):s=it(r,"componentWillUpdate",void 0,i),s=rs(s,()=>it(r,"componentWillRender",void 0,i)),n(),rs(s,()=>fp(e,r,t))},rs=(e,t)=>dp(e)?e.then(t).catch(i=>{console.error(i),t()}):t(),dp=e=>e instanceof Promise||e&&e.then&&typeof e.then=="function",fp=async(e,t,i)=>{var n;const r=e.$hostElement$,s=Ye("update",e.$cmpMeta$.$tagName$),l=r["s-rc"];i&&Jf(e);const a=Ye("render",e.$cmpMeta$.$tagName$);pp(e,t,r,i),l&&(l.map(c=>c()),r["s-rc"]=void 0),a(),s();{const c=(n=r["s-p"])!=null?n:[],d=()=>mp(e);c.length===0?d():(Promise.all(c).then(d),e.$flags$|=4,c.length=0)}},pp=(e,t,i,n)=>{try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,cp(e,t,n)}catch(r){L(r,e.$hostElement$)}return null},mp=e=>{const t=e.$cmpMeta$.$tagName$,i=e.$hostElement$,n=Ye("postUpdate",t),r=e.$lazyInstance$,s=e.$ancestorComponent$;it(r,"componentDidRender",void 0,i),e.$flags$&64?(it(r,"componentDidUpdate",void 0,i),n()):(e.$flags$|=64,hp(i),it(r,"componentDidLoad",void 0,i),n(),e.$onReadyResolve$(i),s||El()),e.$onInstanceResolve$(i),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),e.$flags$&512&&er(()=>lr(e,!1)),e.$flags$&=-517},El=e=>{var t;er(()=>$l(ie,"appload",{detail:{namespace:hf}})),(t=re.$orgLocNodes$)!=null&&t.size&&re.$orgLocNodes$.clear()},it=(e,t,i,n)=>{if(e&&e[t])try{return e[t](i)}catch(r){L(r,n)}},hp=e=>{var t;return e.classList.add((t=gt.hydratedSelectorName)!=null?t:"hydrated")},gp=(e,t)=>Fe(e).$instanceValues$.get(t),an=(e,t,i,n)=>{const r=Fe(e);if(!r)return;if(!r)throw new Error(`Couldn't find host element for "${n.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/stenciljs/core/issues/5457).`);const s=r.$hostElement$,l=r.$instanceValues$.get(t),a=r.$flags$,c=r.$lazyInstance$;i=En(i,n.$members$[t][0]);const d=Number.isNaN(l)&&Number.isNaN(i),u=i!==l&&!d;if((!(a&8)||l===void 0)&&u&&(r.$instanceValues$.set(t,i),c)){if(n.$watchers$&&a&128){const p=n.$watchers$[t];p&&p.map(h=>{try{c[h](i,l,t)}catch(v){L(v,s)}})}if((a&18)===2){if(c.componentShouldUpdate&&c.componentShouldUpdate(i,l,t)===!1)return;lr(r,!1)}}},kl=(e,t,i)=>{var n,r;const s=e.prototype;if(t.$members$||gt.propChangeCallback){e.watchers&&!t.$watchers$&&(t.$watchers$=e.watchers),e.deserializers&&!t.$deserializers$&&(t.$deserializers$=e.deserializers),e.serializers&&!t.$serializers$&&(t.$serializers$=e.serializers);const l=Object.entries((n=t.$members$)!=null?n:{});if(l.map(([a,[c]])=>{if(c&31||i&2&&c&32){const{get:d,set:u}=Object.getOwnPropertyDescriptor(s,a)||{};d&&(t.$members$[a][0]|=2048),u&&(t.$members$[a][0]|=4096),(i&1||!d)&&Object.defineProperty(s,a,{get(){{if((t.$members$[a][0]&2048)===0)return gp(this,a);const p=Fe(this),h=p?p.$lazyInstance$:s;return h?h[a]:void 0}},configurable:!0,enumerable:!0}),Object.defineProperty(s,a,{set(p){const h=Fe(this);if(h){if(u){typeof(c&32?this[a]:h.$hostElement$[a])>"u"&&h.$instanceValues$.get(a)&&(p=h.$instanceValues$.get(a)),u.apply(this,[En(p,c)]),p=c&32?this[a]:h.$hostElement$[a],an(this,a,p,t);return}{if((i&1)===0||(t.$members$[a][0]&4096)===0){an(this,a,p,t),i&1&&!h.$lazyInstance$&&h.$fetchedCbList$.push(()=>{t.$members$[a][0]&4096&&h.$lazyInstance$[a]!==h.$instanceValues$.get(a)&&(h.$lazyInstance$[a]=p)});return}const v=()=>{const k=h.$lazyInstance$[a];!h.$instanceValues$.get(a)&&k&&h.$instanceValues$.set(a,k),h.$lazyInstance$[a]=En(p,c),an(this,a,h.$lazyInstance$[a],t)};h.$lazyInstance$?v():h.$fetchedCbList$.push(()=>{v()})}}}})}else i&1&&c&64&&Object.defineProperty(s,a,{value(...d){var u;const p=Fe(this);return(u=p?.$onInstancePromise$)==null?void 0:u.then(()=>{var h;return(h=p.$lazyInstance$)==null?void 0:h[a](...d)})}})}),i&1){const a=new Map;s.attributeChangedCallback=function(c,d,u){re.jmp(()=>{var p;const h=a.get(c),v=Fe(this);if(this.hasOwnProperty(h)&&gt.lazyLoad&&(u=this[h],delete this[h]),s.hasOwnProperty(h)&&typeof this[h]=="number"&&this[h]==u)return;if(h==null){const z=v?.$flags$;if(v&&z&&!(z&8)&&z&128&&u!==d){const q=v.$lazyInstance$,b=(p=t.$watchers$)==null?void 0:p[c];b?.forEach(g=>{q[g]!=null&&q[g].call(q,u,d,c)})}return}const k=l.find(([z])=>z===h);k&&k[1][0]&4&&(u=!(u===null||u==="false"));const y=Object.getOwnPropertyDescriptor(s,h);u!=this[h]&&(!y.get||y.set)&&(this[h]=u)})},e.observedAttributes=Array.from(new Set([...Object.keys((r=t.$watchers$)!=null?r:{}),...l.filter(([c,d])=>d[0]&31).map(([c,d])=>{var u;const p=d[1]||c;return a.set(p,c),d[0]&512&&((u=t.$attrsToReflect$)==null||u.push([c,p])),p})]))}}return e},xp=async(e,t,i,n)=>{let r;if((t.$flags$&32)===0){if(t.$flags$|=32,i.$lazyBundleId$){const c=Cf(i,t);if(c&&"then"in c){const u=Zf();r=await c,u()}else r=c;if(!r)throw new Error(`Constructor for "${i.$tagName$}#${t.$modeName$}" was not found`);r.isProxied||(i.$watchers$=r.watchers,i.$serializers$=r.serializers,i.$deserializers$=r.deserializers,kl(r,i,2),r.isProxied=!0);const d=Ye("createInstance",i.$tagName$);t.$flags$|=8;try{new r(t)}catch(u){L(u,e)}t.$flags$&=-9,t.$flags$|=128,d(),Fn(t.$lazyInstance$,e)}else{r=e.constructor;const c=e.localName;customElements.whenDefined(c).then(()=>t.$flags$|=128)}if(r&&r.style){let c;typeof r.style=="string"&&(c=r.style);const d=nr(i);if(!Fi.has(d)){const u=Ye("registerStyles",i.$tagName$);bl(d,c,!!(i.$flags$&1)),u()}}}const s=t.$ancestorComponent$,l=()=>lr(t,!0);s&&s["s-rc"]?s["s-rc"].push(l):l()},Fn=(e,t)=>{it(e,"connectedCallback",void 0,t)},bp=e=>{if((re.$flags$&1)===0){const t=Fe(e);if(!t)return;const i=t.$cmpMeta$,n=Ye("connectedCallback",i.$tagName$);if(t.$flags$&1)Ll(e,t,i.$listeners$),t?.$lazyInstance$?Fn(t.$lazyInstance$,e):t?.$onReadyPromise$&&t.$onReadyPromise$.then(()=>Fn(t.$lazyInstance$,e));else{t.$flags$|=1;let r;if(r=e.getAttribute(oi),r){if(i.$flags$&1){const s=vl(e.shadowRoot,i);e.classList.remove(s+"-h",s+"-s")}rp(e,i.$tagName$,r,t)}r||i.$flags$&12&&vp(e);{let s=e;for(;s=s.parentNode||s.host;)if(s.nodeType===1&&s.hasAttribute("s-id")&&s["s-p"]||s["s-p"]){Al(t,t.$ancestorComponent$=s);break}}i.$members$&&Object.entries(i.$members$).map(([s,[l]])=>{if(l&31&&s in e&&e[s]!==Object.prototype[s]){const a=e[s];delete e[s],e[s]=a}}),xp(e,t,i)}n()}},vp=e=>{if(!ie.document)return;const t=e["s-cr"]=ie.document.createComment("");t["s-cn"]=!0,pt(e,t,e.firstChild)},ss=(e,t)=>{it(e,"disconnectedCallback",void 0,t||e)},_p=async e=>{if((re.$flags$&1)===0){const t=Fe(e);t?.$rmListeners$&&(t.$rmListeners$.map(i=>i()),t.$rmListeners$=void 0),t?.$lazyInstance$?ss(t.$lazyInstance$,e):t?.$onReadyPromise$&&t.$onReadyPromise$.then(()=>ss(t.$lazyInstance$,e))}Tt.has(e)&&Tt.delete(e),e.shadowRoot&&Tt.has(e.shadowRoot)&&Tt.delete(e.shadowRoot)},$p=(e,t={})=>{var i;if(!ie.document){console.warn("Stencil: No document found. Skipping bootstrapping lazy components.");return}const n=Ye(),r=[],s=t.exclude||[],l=ie.customElements,a=ie.document.head,c=a.querySelector("meta[charset]"),d=ie.document.createElement("style"),u=[];let p,h=!0;Object.assign(re,t),re.$resourcesUrl$=new URL(t.resourcesUrl||"./",ie.document.baseURI).href,re.$flags$|=2,Qf();let v=!1;if(e.map(k=>{k[1].map(y=>{var z,q,b;const g={$flags$:y[0],$tagName$:y[1],$members$:y[2],$listeners$:y[3]};g.$flags$&4&&(v=!0),g.$members$=y[2],g.$listeners$=y[3],g.$attrsToReflect$=[],g.$watchers$=(z=y[4])!=null?z:{},g.$serializers$=(q=y[5])!=null?q:{},g.$deserializers$=(b=y[6])!=null?b:{};const x=g.$tagName$,w=class extends HTMLElement{constructor(_){if(super(_),this.hasRegisteredEventListeners=!1,_=this,If(_,g),g.$flags$&1){if(!_.shadowRoot)Uf.call(_,g);else if(_.shadowRoot.mode!=="open")throw new Error(`Unable to re-use existing shadow root for ${g.$tagName$}! Mode is set to ${_.shadowRoot.mode} but Stencil only supports open shadow roots.`)}}connectedCallback(){const _=Fe(this);_&&(this.hasRegisteredEventListeners||(this.hasRegisteredEventListeners=!0,Ll(this,_,g.$listeners$)),p&&(clearTimeout(p),p=null),h?u.push(this):re.jmp(()=>bp(this)))}disconnectedCallback(){re.jmp(()=>_p(this)),re.raf(()=>{var _;const E=Fe(this);if(!E)return;const D=u.findIndex(F=>F===this);D>-1&&u.splice(D,1),((_=E?.$vnode$)==null?void 0:_.$elm$)instanceof Node&&!E.$vnode$.$elm$.isConnected&&delete E.$vnode$.$elm$})}componentOnReady(){var _;return(_=Fe(this))==null?void 0:_.$onReadyPromise$}};!(g.$flags$&1)&&g.$flags$&256&&Yf(w.prototype),g.$lazyBundleId$=k[0],!s.includes(x)&&!l.get(x)&&(r.push(x),l.define(x,kl(w,g,1)))})}),r.length>0&&(v&&(d.textContent+=dl),d.textContent+=r.sort()+Tf,d.innerHTML.length)){d.setAttribute("data-styles","");const k=(i=re.$nonce$)!=null?i:pl(ie.document);k!=null&&d.setAttribute("nonce",k),a.insertBefore(d,c?c.nextSibling:a.firstChild)}h=!1,u.length?u.map(k=>k.connectedCallback()):re.jmp(()=>p=setTimeout(El,30)),n()},Lp=(e,t)=>t,Ll=(e,t,i,n)=>{i&&ie.document&&i.map(([r,s,l])=>{const a=wp(ie.document,e,r),c=yp(t,l),d=Sp(r);re.ael(a,s,c,d),(t.$rmListeners$=t.$rmListeners$||[]).push(()=>re.rel(a,s,c,d))})},yp=(e,t)=>i=>{var n;try{e.$flags$&256?(n=e.$lazyInstance$)==null||n[t](i):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,i])}catch(r){L(r,e.$hostElement$)}},wp=(e,t,i)=>i&4?e:i&8?ie:i&16?e.body:t,Sp=e=>Pf?{passive:(e&1)!==0,capture:(e&2)!==0}:(e&2)!==0;const Ip=async(e,t)=>{if(!(typeof window>"u"))return await xf(),$p(JSON.parse('[["ifx-table",[[769,"ifx-table",{"cols":[8],"rows":[8],"buttonRendererOptions":[16],"iconButtonRendererOptions":[16],"rowHeight":[1,"row-height"],"tableHeight":[1,"table-height"],"pagination":[4],"paginationItemsPerPage":[1,"pagination-items-per-page"],"filterOrientation":[1,"filter-orientation"],"headline":[1],"variant":[1],"serverSidePagination":[4,"server-side-pagination"],"serverPageChangeHandler":[16],"showLoading":[4,"show-loading"],"currentPage":[32],"rowData":[32],"colData":[32],"filterOptions":[32],"currentFilters":[32],"uniqueKey":[32],"paginationPageSize":[32],"showSidebarFilters":[32],"matchingResultsCount":[32],"onBtShowLoading":[64]},[[0,"ifxItemsPerPageChange","handleResultsPerPageChange"],[0,"ifxChange","handleChipChange"]],{"rows":["rowsChanged"],"cols":["colsChanged"],"buttonRendererOptions":["onButtonRendererOptionsChanged"],"iconButtonRendererOptions":["onIconButtonRendererOptionsChanged"]}]]],["ifx-templates-ui",[[257,"ifx-templates-ui",null,[[0,"fieldError","handleError"],[0,"toggleTemplates","filterTemplates"]]]]],["ifx-set-filter",[[769,"ifx-set-filter",{"filterName":[1,"filter-name"],"filterLabel":[1,"filter-label"],"placeholder":[1],"type":[1],"options":[1],"filterValues":[32]}]]],["ifx-file-upload",[[769,"ifx-file-upload",{"dragAndDrop":[4,"drag-and-drop"],"required":[4],"disabled":[4],"maxFileSizeMB":[2,"max-file-size-m-b"],"allowedFileTypes":[1,"allowed-file-types"],"additionalAllowedFileTypes":[1,"additional-allowed-file-types"],"allowAnyFileType":[4,"allow-any-file-type"],"allowedFileExtensions":[1,"allowed-file-extensions"],"uploadHandler":[16],"maxFiles":[6146,"max-files"],"label":[1],"labelRequiredError":[1,"label-required-error"],"labelBrowseFiles":[1,"label-browse-files"],"labelDragAndDrop":[1,"label-drag-and-drop"],"labelUploadedFilesHeading":[1,"label-uploaded-files-heading"],"labelFileTooLarge":[1,"label-file-too-large"],"labelUnsupportedFileType":[1,"label-unsupported-file-type"],"labelUploaded":[1,"label-uploaded"],"labelUploadFailed":[1,"label-upload-failed"],"labelSupportedFormatsTemplate":[1,"label-supported-formats-template"],"labelFileSingular":[1,"label-file-singular"],"labelFilePlural":[1,"label-file-plural"],"labelMaxFilesInfo":[1,"label-max-files-info"],"labelMaxFilesExceeded":[1,"label-max-files-exceeded"],"ariaLabelBrowseFiles":[1,"aria-label-browse-files"],"ariaLabelDropzone":[1,"aria-label-dropzone"],"ariaLabelFileInput":[1,"aria-label-file-input"],"ariaLabelRemoveFile":[1,"aria-label-remove-file"],"ariaLabelCancelUpload":[1,"aria-label-cancel-upload"],"ariaLabelRetryUpload":[1,"aria-label-retry-upload"],"ariaLabelUploadingStatus":[1,"aria-label-uploading-status"],"ariaLabelUploadedStatus":[1,"aria-label-uploaded-status"],"ariaLabelUploadFailedStatus":[1,"aria-label-upload-failed-status"],"isDragOver":[32],"files":[32],"uploadTasks":[32],"rejectedSizeFiles":[32],"rejectedTypeFiles":[32],"requiredError":[32],"statusMessage":[32],"injectDemoState":[64],"triggerDemoValidation":[64]}]]],["ifx-icons-preview",[[769,"ifx-icons-preview",{"iconsArray":[32],"isCopied":[32],"copiedIndex":[32],"copiedIcon":[32],"htmlTag":[32],"iconName":[32],"searchTerm":[32]}]]],["ifx-faq",[[257,"ifx-faq"]]],["ifx-list-entry",[[769,"ifx-list-entry",{"value":[1028],"label":[1],"type":[1]},[[0,"ifxChange","handleFilterEntryChange"]],{"value":["valueChanged"]}]]],["ifx-overview-table",[[257,"ifx-overview-table"]]],["ifx-dropdown-trigger-button",[[769,"ifx-dropdown-trigger-button",{"isOpen":[4,"is-open"],"theme":[1],"variant":[1],"size":[1],"disabled":[4],"hideArrow":[4,"hide-arrow"]}]]],["ifx-filter-accordion",[[769,"ifx-filter-accordion",{"maxVisibleItems":[2,"max-visible-items"],"filterGroupName":[1,"filter-group-name"],"expanded":[32],"count":[32],"totalItems":[32]}]]],["ifx-filter-bar",[[769,"ifx-filter-bar",{"maxShownFilters":[2,"max-shown-filters"],"showMoreFiltersButton":[4,"show-more-filters-button"],"selectedOptions":[32],"showAllFilters":[32],"visibleSlots":[32]}]]],["ifx-filter-search",[[769,"ifx-filter-search",{"filterName":[1,"filter-name"],"disabled":[4],"filterValue":[1025,"filter-value"],"filterKey":[1,"filter-key"],"filterOrientation":[1,"filter-orientation"],"placeholder":[1],"showDeleteIcon":[32]},[[0,"ifxInput","handleFilterSearchChange"]],{"value":["valueChanged"]}]]],["ifx-list",[[769,"ifx-list",{"name":[1],"maxVisibleItems":[2,"max-visible-items"],"type":[1],"resetTrigger":[1028,"reset-trigger"],"expanded":[32],"showMore":[32],"selectedCount":[32],"totalItems":[32],"internalResetTrigger":[32]},null,{"type":["handleTypeChange"],"resetTrigger":["resetTriggerChanged"]}]]],["ifx-modal",[[769,"ifx-modal",{"opened":[1540],"caption":[1],"captionAriaLabel":[1,"caption-aria-label"],"closeOnOverlayClick":[4,"close-on-overlay-click"],"variant":[1],"size":[1],"alertIcon":[1,"alert-icon"],"okButtonLabel":[1,"ok-button-label"],"cancelButtonLabel":[1,"cancel-button-label"],"closeButtonAriaLabel":[1,"close-button-aria-label"],"showCloseButton":[4,"show-close-button"],"showModal":[32],"slotButtonsPresent":[32]},null,{"opened":["openedChanged"]}]]],["ifx-navbar-item",[[769,"ifx-navbar-item",{"showLabel":[4,"show-label"],"icon":[1],"href":[1],"target":[1],"hideOnMobile":[4,"hide-on-mobile"],"numberIndicator":[2,"number-indicator"],"dotIndicator":[4,"dot-indicator"],"internalHref":[32],"isMenuItem":[32],"hasChildNavItems":[32],"isSidebarMenuItem":[32],"itemPosition":[32],"hideComponent":[64],"showComponent":[64],"toggleChildren":[64],"moveChildComponentsIntoSubLayerMenu":[64],"toggleFirstLayerItem":[64],"addMenuItemClass":[64],"moveChildComponentsBackIntoNavbar":[64],"returnToFirstLayer":[64],"setMenuItemPosition":[64],"setItemSideSpecifications":[64]},[[0,"focusout","handleFocusOut"],[5,"mousedown","handleOutsideClick"]]]]],["ifx-search-bar",[[769,"ifx-search-bar",{"isOpen":[4,"is-open"],"disabled":[4],"value":[1025],"maxlength":[2],"autocomplete":[1],"internalState":[32],"onNavbarMobile":[64]},null,{"isOpen":["handlePropChange"]}]]],["ifx-sidebar-item",[[769,"ifx-sidebar-item",{"icon":[1],"href":[1],"target":[1],"numberIndicator":[2,"number-indicator"],"active":[4],"isActionItem":[4,"is-action-item"],"handleItemClick":[16],"showIcon":[32],"showIconWrapper":[32],"internalHref":[32],"isExpandable":[32],"isNested":[32],"isSubMenuItem":[32],"indicatorVariant":[32],"internalActiveState":[32],"setActiveClasses":[64],"expandMenu":[64],"isItemExpandable":[64]},[[0,"consoleError","handleConsoleError"]],{"active":["handleActiveChange"],"numberIndicator":["handleNumberIndicatorChange"]}]]],["ifx-tabs",[[769,"ifx-tabs",{"orientation":[1],"activeTabIndex":[1026,"active-tab-index"],"fullWidth":[4,"full-width"],"internalOrientation":[32],"internalActiveTabIndex":[32],"tabObjects":[32],"canScrollLeft":[32],"canScrollRight":[32]},[[9,"resize","updateBorderOnWindowResize"],[0,"tabHeaderChange","handleTabHeaderChange"],[0,"slotchange","onSlotChange"],[0,"keydown","handleKeyDown"]],{"activeTabIndex":["activeTabIndexChanged"]}]]],["ifx-tree-view-item",[[769,"ifx-tree-view-item",{"expanded":[1540],"initiallyExpanded":[4,"initially-expanded"],"disableItem":[4,"disable-item"],"ariaLabel":[1,"aria-label"],"initiallySelected":[4,"initially-selected"],"value":[1],"hasChildren":[32],"isChecked":[32],"partialChecked":[32],"level":[32],"disableAllItems":[32],"expandAllItems":[32],"suppressExpandEvents":[32]},null,{"expanded":["handleExpandedChange"],"disableItem":["handleDisableItemChange"]}]]],["ifx-breadcrumb-item-label",[[769,"ifx-breadcrumb-item-label",{"icon":[1],"href":[1],"target":[1]}]]],["ifx-checkbox-group",[[769,"ifx-checkbox-group",{"alignment":[1],"size":[1],"showGroupLabel":[4,"show-group-label"],"groupLabelText":[1,"group-label-text"],"showCaption":[4,"show-caption"],"captionText":[1,"caption-text"],"showCaptionIcon":[4,"show-caption-icon"],"required":[4],"hasErrors":[32],"setGroupError":[64]},[[0,"ifxError","handleCheckboxError"]]]]],["ifx-date-picker",[[769,"ifx-date-picker",{"size":[1],"error":[4],"success":[4],"disabled":[4],"ariaLabel":[1,"aria-label"],"value":[1],"type":[1],"max":[1],"min":[1],"required":[4],"label":[1],"caption":[1],"autocomplete":[1]}]]],["ifx-download",[[769,"ifx-download",{"tokens":[1]}]]],["ifx-dropdown-item",[[769,"ifx-dropdown-item",{"icon":[1],"href":[1],"target":[1],"hide":[4],"size":[32]},[[16,"menuSize","handleMenuSize"]]]]],["ifx-navbar",[[769,"ifx-navbar",{"applicationName":[1,"application-name"],"fixed":[4],"showLogoAndAppname":[4,"show-logo-and-appname"],"logoHref":[1,"logo-href"],"logoHrefTarget":[1,"logo-href-target"],"main":[32],"products":[32],"applications":[32],"design":[32],"support":[32],"about":[32],"hasLeftMenuItems":[32],"searchBarIsOpen":[32],"internalLogoHref":[32],"internalLogoHrefTarget":[32]},[[0,"ifxNavItem","clearFirstLayerMenu"],[0,"ifxOpen","handleSearchBarToggle"]]]]],["ifx-radio-button-group",[[769,"ifx-radio-button-group",{"alignment":[1],"size":[1],"showGroupLabel":[4,"show-group-label"],"groupLabelText":[1,"group-label-text"],"showCaption":[4,"show-caption"],"captionText":[1,"caption-text"],"showCaptionIcon":[4,"show-caption-icon"],"required":[4],"hasErrors":[32],"setGroupError":[64]},[[0,"ifxError","handleRadioButtonError"]]]]],["ifx-segment",[[769,"ifx-segment",{"icon":[1],"segmentIndex":[2,"segment-index"],"selected":[1028],"value":[1]}]]],["ifx-segmented-control",[[769,"ifx-segmented-control",{"caption":[1],"label":[1],"size":[1],"required":[4],"error":[4]},[[0,"segmentSelect","onSegmentSelect"]]]]],["ifx-sidebar",[[769,"ifx-sidebar",{"applicationName":[1,"application-name"],"initialCollapse":[4,"initial-collapse"],"showFooter":[4,"show-footer"],"showHeader":[4,"show-header"],"termsOfUse":[1,"terms-of-use"],"imprint":[1],"privacyPolicy":[1,"privacy-policy"],"target":[1],"copyrightText":[1,"copyright-text"],"collapsible":[4],"collapsed":[4],"hideMenuLabel":[1,"hide-menu-label"],"currentYear":[32],"internalTermsofUse":[32],"internalImprint":[32],"internalPrivacyPolicy":[32],"internalShowFooter":[32],"activeItem":[32],"isCollapsed":[32],"toggleCollapse":[64],"collapse":[64],"expand":[64]},[[0,"ifxSidebarMenu","handleSidebarItemInteraction"],[0,"ifxSidebarNavigationItem","handleSidebarItemActivated"]],{"collapsible":["handleCollapsibleChange"],"collapsed":["handleCollapsedPropChange"]}]]],["ifx-slider",[[769,"ifx-slider",{"min":[2],"max":[2],"step":[2],"value":[2],"minValueHandle":[2,"min-value-handle"],"maxValueHandle":[2,"max-value-handle"],"disabled":[4],"showPercentage":[4,"show-percentage"],"leftIcon":[1,"left-icon"],"rightIcon":[1,"right-icon"],"leftText":[1,"left-text"],"rightText":[1,"right-text"],"type":[1],"ariaLabel":[1,"aria-label"],"internalValue":[32],"percentage":[32],"internalMinValue":[32],"internalMaxValue":[32]},null,{"value":["valueChanged"],"minValueHandle":["minValueChanged"],"maxValueHandle":["maxValueChanged"]}]]],["ifx-step",[[769,"ifx-step",{"complete":[4],"disabled":[4],"error":[1028],"lastStep":[4,"last-step"],"stepId":[2,"step-id"],"stepperState":[16],"active":[32],"clickable":[32]},[[4,"ifxChange","onStepChange"]],{"stepperState":["updateCurrentStep"],"active":["updateErrorState"]}]]],["ifx-tooltip",[[769,"ifx-tooltip",{"header":[1],"text":[1],"position":[1],"ariaLabel":[1,"aria-label"],"variant":[1],"icon":[1],"tooltipVisible":[32],"internalPosition":[32]},null,{"position":["positionChanged"]}]]],["ifx-action-list",[[769,"ifx-action-list",{"listAriaLabel":[1,"list-aria-label"]}]]],["ifx-action-list-item",[[769,"ifx-action-list-item",{"itemTitle":[1,"item-title"],"description":[1],"value":[1],"href":[1],"target":[1],"disabled":[4],"itemAriaLabel":[1,"item-aria-label"]},null,{"disabled":["onDisabledChange"]}]]],["ifx-basic-table",[[768,"ifx-basic-table",{"cols":[1],"rows":[1],"rowHeight":[1,"row-height"],"tableHeight":[1,"table-height"],"variant":[1],"gridOptions":[32],"columnDefs":[32],"rowData":[32],"uniqueKey":[32]}]]],["ifx-breadcrumb",[[257,"ifx-breadcrumb"]]],["ifx-breadcrumb-item",[[769,"ifx-breadcrumb-item",{"isLastItem":[32],"uniqueId":[32],"hasDropdownMenu":[32]},[[5,"mousedown","handleOutsideClick"],[0,"keydown","handleKeyDown"],[0,"breadcrumbMenuIconWrapper","menuWrapperEventReEmitter"]]]]],["ifx-card",[[769,"ifx-card",{"direction":[1],"href":[1],"target":[1],"ariaLabel":[1,"aria-label"],"noBtns":[32],"alignment":[32],"noImg":[32],"internalHref":[32]},[[0,"imgPosition","setImgPosition"]]]]],["ifx-card-headline",[[769,"ifx-card-headline",{"direction":[32],"hasDesc":[32]}]]],["ifx-card-image",[[769,"ifx-card-image",{"src":[1],"alt":[1],"position":[1]}]]],["ifx-card-links",[[257,"ifx-card-links"]]],["ifx-card-overline",[[257,"ifx-card-overline"]]],["ifx-card-text",[[769,"ifx-card-text",{"hasBtn":[32]}]]],["ifx-content-switcher",[[769,"ifx-content-switcher",{"items":[32],"activeIndex":[32],"hoverIndex":[32],"focusIndex":[32],"dividers":[32]}]]],["ifx-content-switcher-item",[[769,"ifx-content-switcher-item",{"selected":[4],"value":[1]}]]],["ifx-dropdown",[[769,"ifx-dropdown",{"placement":[1],"defaultOpen":[4,"default-open"],"noAppendToBody":[4,"no-append-to-body"],"disabled":[4],"noCloseOnOutsideClick":[4,"no-close-on-outside-click"],"noCloseOnMenuClick":[4,"no-close-on-menu-click"],"internalIsOpen":[32],"trigger":[32],"menu":[32],"isOpen":[64],"closeDropdown":[64],"openDropdown":[64]},[[5,"mousedown","handleOutsideClick"],[4,"focusin","handleFocusOutside"],[0,"slotchange","watchHandlerSlot"]],{"defaultOpen":["watchHandlerIsOpen"],"disabled":["watchHandlerDisabled"]}]]],["ifx-dropdown-header",[[257,"ifx-dropdown-header"]]],["ifx-dropdown-menu",[[769,"ifx-dropdown-menu",{"isOpen":[4,"is-open"],"size":[1],"hideTopPadding":[32],"filteredItems":[32]},[[0,"ifxInput","handleMenuFilter"],[0,"ifxDropdownItem","handleDropdownItemValueEmission"]]]]],["ifx-dropdown-separator",[[257,"ifx-dropdown-separator"]]],["ifx-dropdown-trigger",[[769,"ifx-dropdown-trigger",{"isOpen":[4,"is-open"]}]]],["ifx-filter-type-group",[[769,"ifx-filter-type-group",{"selectedOptions":[32]}]]],["ifx-footer",[[769,"ifx-footer",{"copyrightText":[1,"copyright-text"],"currentYear":[32]}]]],["ifx-footer-column",[[257,"ifx-footer-column"]]],["ifx-navbar-profile",[[769,"ifx-navbar-profile",{"showLabel":[4,"show-label"],"href":[1],"imageUrl":[1,"image-url"],"target":[1],"alt":[1],"userName":[1,"user-name"],"internalHref":[32],"isMenuItem":[32],"hasChildNavItems":[32],"internalImageUrl":[32],"hideComponent":[64],"showComponent":[64]},[[5,"mousedown","handleOutsideClick"]]]]],["ifx-sidebar-title",[[769,"ifx-sidebar-title",{"showInCollapsed":[4,"show-in-collapsed"]}]]],["ifx-status",[[769,"ifx-status",{"label":[1],"border":[4],"color":[1]}]]],["ifx-stepper",[[769,"ifx-stepper",{"activeStep":[1026,"active-step"],"indicatorPosition":[1,"indicator-position"],"showStepNumber":[4,"show-step-number"],"variant":[1],"ariaLabel":[1,"aria-label"],"ariaCurrent":[1,"aria-current"],"stepsCount":[32],"shouldEmitEvent":[32],"emittedByClick":[32]},[[0,"ifxChange","onStepChange"]],{"activeStep":["handleActiveStep"]}]]],["ifx-switch",[[769,"ifx-switch",{"checked":[4],"name":[1],"disabled":[4],"value":[1],"internalChecked":[32],"isChecked":[64]},null,{"checked":["valueChanged"]}]]],["ifx-tab",[[772,"ifx-tab",{"header":[1],"disabled":[4],"icon":[1],"iconPosition":[1,"icon-position"]}]]],["ifx-textarea",[[769,"ifx-textarea",{"caption":[1],"cols":[2],"disabled":[4],"error":[4],"label":[1],"maxlength":[2],"name":[1],"placeholder":[1],"required":[4],"readOnly":[4,"read-only"],"resize":[1],"rows":[2],"value":[1025],"wrap":[1],"fullWidth":[513,"full-width"],"reset":[64]}]]],["ifx-tree-view",[[769,"ifx-tree-view",{"label":[1],"disableAllItems":[4,"disable-all-items"],"expandAllItems":[4,"expand-all-items"],"ariaLabel":[1,"aria-label"]},null,{"expandAllItems":["handleExpandAllItemsChange"],"disableAllItems":["handleDisableAllItemsChange"]}]]],["ifx-notification",[[769,"ifx-notification",{"icon":[1],"variant":[1],"linkText":[1,"link-text"],"linkHref":[1,"link-href"],"linkTarget":[1,"link-target"]}]]],["ifx-progress-bar",[[769,"ifx-progress-bar",{"value":[2],"size":[1],"showLabel":[4,"show-label"],"internalValue":[32]},null,{"value":["valueChanged"]}]]],["ifx-radio-button",[[769,"ifx-radio-button",{"disabled":[4],"value":[1],"error":[4],"size":[513],"name":[513],"checked":[1028],"internalChecked":[32],"hasSlot":[32],"isChecked":[64]},[[0,"keydown","handleKeyDown"],[4,"change","handleExternalChange"]],{"checked":["handleCheckedChange"],"internalChecked":["updateFormValue"],"error":["errorChanged"]}]]],["ifx-alert_2",[[769,"ifx-template",{"name":[1],"thumbnail":[1],"repoDetails":[32],"repoUrl":[32],"showDetails":[32],"isTemplatePage":[32],"isLoading":[32],"repoError":[32],"toggleTemplate":[64]}],[769,"ifx-alert",{"variant":[1],"icon":[1],"closable":[4],"AriaLive":[1,"aria-live"],"uniqueId":[32]}]]],["ifx-multiselect_2",[[769,"ifx-multiselect",{"name":[1],"disabled":[4],"required":[4],"error":[4],"caption":[1],"label":[1],"placeholder":[1],"showSearch":[4,"show-search"],"showSelectAll":[4,"show-select-all"],"showClearButton":[4,"show-clear-button"],"showExpandCollapse":[4,"show-expand-collapse"],"noResultsMessage":[1,"no-results-message"],"showNoResultsMessage":[4,"show-no-results-message"],"searchPlaceholder":[1,"search-placeholder"],"selectAllLabel":[1,"select-all-label"],"expandLabel":[1,"expand-label"],"collapseLabel":[1,"collapse-label"],"ariaMultiSelectLabel":[1,"aria-multi-select-label"],"ariaMultiSelectLabelledBy":[1,"aria-multi-select-labelled-by"],"ariaMultiSelectDescribedBy":[1,"aria-multi-select-described-by"],"ariaSearchLabel":[1,"aria-search-label"],"ariaClearLabel":[1,"aria-clear-label"],"ariaToggleLabel":[1,"aria-toggle-label"],"ariaSelectAllLabel":[1,"aria-select-all-label"],"ariaExpandAllLabel":[1,"aria-expand-all-label"],"ariaCollapseAllLabel":[1,"aria-collapse-all-label"],"internalError":[32],"persistentSelectedOptions":[32],"dropdownOpen":[32],"dropdownFlipped":[32],"searchTerm":[32],"clearSelection":[64]},null,{"error":["updateInternalError"],"persistentSelectedOptions":["onSelectionChange"]}],[769,"ifx-multiselect-option",{"value":[1],"selected":[1540],"disabled":[1540],"indeterminate":[1540],"isExpanded":[32],"hasChildren":[32],"depth":[32],"searchTerm":[32],"isSearchActive":[32],"isSearchDisabled":[32]},[[0,"click","handleClick"],[0,"keydown","handleKeyDown"]]]]],["ifx-accordion_2",[[769,"ifx-accordion-item",{"caption":[1],"open":[1028],"AriaLevel":[2,"aria-level"],"internalOpen":[32]},[[0,"keydown","handleKeydown"]],{"open":["openChanged"]}],[785,"ifx-accordion",{"autoCollapse":[4,"auto-collapse"]},[[0,"ifxOpen","onItemOpen"]]]]],["ifx-select",[[768,"ifx-select",{"value":[1],"name":[1],"items":[16],"choices":[1],"renderChoiceLimit":[2,"render-choice-limit"],"maxItemCount":[2,"max-item-count"],"addItems":[4,"add-items"],"removeItems":[4,"remove-items"],"removeItemButton":[4,"remove-item-button"],"editItems":[4,"edit-items"],"duplicateItemsAllowed":[4,"duplicate-items-allowed"],"delimiter":[1],"paste":[4],"showSearch":[4,"show-search"],"searchChoices":[4,"search-choices"],"searchFields":[1,"search-fields"],"searchFloor":[2,"search-floor"],"searchResultLimit":[2,"search-result-limit"],"position":[1],"resetScrollPosition":[4,"reset-scroll-position"],"shouldSort":[4,"should-sort"],"shouldSortItems":[4,"should-sort-items"],"sorter":[16],"placeholder":[8],"searchPlaceholderValue":[1,"search-placeholder-value"],"prependValue":[1,"prepend-value"],"appendValue":[1,"append-value"],"renderSelectedChoices":[1,"render-selected-choices"],"loadingText":[1,"loading-text"],"noResultsText":[1,"no-results-text"],"noChoicesText":[1,"no-choices-text"],"itemSelectText":[1,"item-select-text"],"addItemText":[1,"add-item-text"],"maxItemText":[1,"max-item-text"],"uniqueItemText":[1,"unique-item-text"],"classNames":[16],"fuseOptions":[16],"addItemFilter":[1,"add-item-filter"],"customAddItemText":[1,"custom-add-item-text"],"callbackOnInit":[16],"callbackOnCreateTemplates":[16],"valueComparer":[16],"error":[4],"label":[1],"caption":[1],"disabled":[4],"required":[4],"placeholderValue":[1,"placeholder-value"],"options":[1025],"size":[1],"showClearButton":[4,"show-clear-button"],"selectedOption":[32],"optionIsSelected":[32],"clearSelection":[64],"handleChange":[64],"highlightItem":[64],"unhighlightItem":[64],"highlightAll":[64],"unhighlightAll":[64],"removeActiveItemsByValue":[64],"removeActiveItems":[64],"removeHighlightedItems":[64],"showDropdown":[64],"hideDropdown":[64],"getValue":[64],"setValue":[64],"setChoiceByValue":[64],"setChoices":[64],"clearChoices":[64],"clearStore":[64],"clearInput":[64],"ajax":[64],"handleDeleteIcon":[64]},[[5,"mousedown","handleOutsideClick"]],{"disabled":["watchDisabled"]}]]],["ifx-spinner_2",[[769,"ifx-spinner",{"size":[1],"variant":[1],"inverted":[4],"ariaLabel":[1,"aria-label"]}],[769,"ifx-text-field",{"placeholder":[1],"value":[1025],"error":[4],"label":[1],"icon":[1],"caption":[1],"size":[1],"required":[4],"success":[4],"disabled":[4],"readOnly":[4,"read-only"],"maxlength":[2],"showDeleteIcon":[4,"show-delete-icon"],"autocomplete":[1],"type":[1],"internalId":[1,"internal-id"],"internalType":[32],"reset":[64]},null,{"value":["valueWatcher"]}]]],["ifx-search-field",[[769,"ifx-search-field",{"value":[1025],"suggestions":[16],"showSuggestions":[4,"show-suggestions"],"maxSuggestions":[2,"max-suggestions"],"maxHistoryItems":[2,"max-history-items"],"enableHistory":[4,"enable-history"],"historyKey":[1,"history-key"],"historyHeaderText":[1,"history-header-text"],"ariaLabel":[1,"aria-label"],"ariaLabelledBy":[1,"aria-labelled-by"],"ariaDescribedBy":[1,"aria-described-by"],"deleteIconAriaLabel":[1,"delete-icon-aria-label"],"historyDeleteAriaLabel":[1,"history-delete-aria-label"],"dropdownAriaLabel":[1,"dropdown-aria-label"],"suggestionAriaLabel":[1,"suggestion-aria-label"],"historyItemAriaLabel":[1,"history-item-aria-label"],"showDeleteIcon":[4,"show-delete-icon"],"disabled":[4],"size":[1],"placeholder":[1],"autocomplete":[1],"maxlength":[2],"showDropdown":[32],"filteredSuggestions":[32],"selectedSuggestionIndex":[32],"searchHistory":[32],"showDeleteIconInternalState":[32],"isFocused":[32]},[[5,"mousedown","handleOutsideClick"],[0,"keydown","handleKeyDown"]],{"value":["valueWatcher"],"suggestions":["suggestionsWatcher"]}]]],["ifx-icon-button",[[769,"ifx-icon-button",{"variant":[1],"size":[1],"disabled":[4],"icon":[1],"href":[1],"target":[1],"shape":[1],"ariaLabel":[1,"aria-label"],"internalIcon":[32],"setFocus":[64]},[[2,"click","handleClick"]],{"icon":["updateIcon"]}]]],["ifx-button",[[769,"ifx-button",{"variant":[1],"theme":[1],"size":[1],"disabled":[4],"href":[1],"target":[1],"type":[1],"fullWidth":[4,"full-width"],"ariaLabel":[1,"aria-label"],"internalHref":[32],"setFocus":[64]},[[0,"keydown","handleKeyDown"],[2,"click","handleHostClick"]],{"href":["setInternalHref"]}]]],["ifx-indicator",[[769,"ifx-indicator",{"inverted":[4],"ariaLabel":[1,"aria-label"],"variant":[1],"number":[2],"filteredNumber":[32]}]]],["ifx-checkbox",[[769,"ifx-checkbox",{"disabled":[4],"checked":[4],"error":[4],"size":[1],"indeterminate":[4],"value":[1],"internalChecked":[32],"internalIndeterminate":[32],"isChecked":[64],"toggleCheckedState":[64]},null,{"checked":["valueChanged"],"error":["errorChanged"],"indeterminate":["indeterminateChanged"]}]]],["ifx-chip_3",[[769,"ifx-pagination",{"currentPage":[2,"current-page"],"showItemsPerPage":[4,"show-items-per-page"],"total":[2],"itemsPerPage":[1,"items-per-page"],"internalPage":[32],"internalItemsPerPage":[32],"numberOfPages":[32],"filteredItemsPerPage":[32],"visiblePages":[32]},[[0,"ifxSelect","setItemsPerPage"]],{"total":["watchTotalHandler"],"currentPage":["currentPageWatcher"]}],[769,"ifx-chip",{"placeholder":[1],"size":[1],"value":[1025],"variant":[1],"theme":[1],"readOnly":[4,"read-only"],"ariaLabel":[1,"aria-label"],"disabled":[4],"icon":[1],"opened":[32],"selectedOptions":[32]},[[5,"mousedown","closeDropdownOnOutsideClick"],[0,"keydown","handleKeyDown"],[0,"ifxChipItemSelect","updateSelectedOptions"]],{"value":["handleValueChange"],"readOnly":["handleReadOnlyChange"]}],[769,"ifx-chip-item",{"value":[1],"chipState":[16],"selected":[1540]},[[16,"ifxChipItemSelect","updateItemSelection"]],{"selected":["validateSelected"]}]]],["ifx-link",[[769,"ifx-link",{"href":[1],"target":[1],"variant":[1],"size":[1],"disabled":[4],"download":[1],"ariaLabel":[1,"aria-label"],"internalHref":[32],"internalTarget":[32],"internalVariant":[32]}]]],["ifx-icon",[[768,"ifx-icon",{"icon":[1025],"ifxIcon":[1032,"ifx-icon"],"internalIcon":[32]},null,{"icon":["updateIcon"]}]]]]'),t)};(function(){if(typeof window<"u"&&window.Reflect!==void 0&&window.customElements!==void 0){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}})();const Cp={async install(){Ip()}};Qo(of).use(Cp).mount("#app");export{Lp as F,ep as H,R as _,Ep as a,kp as c,sp as g,_l as h,Ap as r};
