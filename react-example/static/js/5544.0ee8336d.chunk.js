"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[5544],{5544:function(e,t,n){n.r(t),n.d(t,{ifx_dropdown:function(){return Ee}});var r=n(4165),i=n(5861),o=n(5671),a=n(9466),s=n(1091),f="top",c="bottom",u="right",p="left",l="auto",d=[f,c,u,p],h="start",m="end",v="clippingParents",g="viewport",y="popper",b="reference",w=d.reduce((function(e,t){return e.concat([t+"-"+h,t+"-"+m])}),[]),x=[].concat(d,[l]).reduce((function(e,t){return e.concat([t,t+"-"+h,t+"-"+m])}),[]),O=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function k(e){return e?(e.nodeName||"").toLowerCase():null}function D(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function j(e){return e instanceof D(e).Element||e instanceof Element}function E(e){return e instanceof D(e).HTMLElement||e instanceof HTMLElement}function C(e){return"undefined"!==typeof ShadowRoot&&(e instanceof D(e).ShadowRoot||e instanceof ShadowRoot)}var A={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];E(i)&&k(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],i=t.attributes[e]||{},o=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});E(r)&&k(r)&&(Object.assign(r.style,o),Object.keys(i).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};function H(e){return e.split("-")[0]}var L=Math.max,I=Math.min,M=Math.round;function W(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function B(){return!/^((?!chrome|android).)*safari/i.test(W())}function P(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),i=1,o=1;t&&E(e)&&(i=e.offsetWidth>0&&M(r.width)/e.offsetWidth||1,o=e.offsetHeight>0&&M(r.height)/e.offsetHeight||1);var a=(j(e)?D(e):window).visualViewport,s=!B()&&n,f=(r.left+(s&&a?a.offsetLeft:0))/i,c=(r.top+(s&&a?a.offsetTop:0))/o,u=r.width/i,p=r.height/o;return{width:u,height:p,top:c,right:f+u,bottom:c+p,left:f,x:f,y:c}}function S(e){var t=P(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function T(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&C(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function R(e){return D(e).getComputedStyle(e)}function q(e){return["table","td","th"].indexOf(k(e))>=0}function V(e){return((j(e)?e.ownerDocument:e.document)||window.document).documentElement}function Z(e){return"html"===k(e)?e:e.assignedSlot||e.parentNode||(C(e)?e.host:null)||V(e)}function N(e){return E(e)&&"fixed"!==R(e).position?e.offsetParent:null}function _(e){for(var t=D(e),n=N(e);n&&q(n)&&"static"===R(n).position;)n=N(n);return n&&("html"===k(n)||"body"===k(n)&&"static"===R(n).position)?t:n||function(e){var t=/firefox/i.test(W());if(/Trident/i.test(W())&&E(e)&&"fixed"===R(e).position)return null;var n=Z(e);for(C(n)&&(n=n.host);E(n)&&["html","body"].indexOf(k(n))<0;){var r=R(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function F(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function U(e,t,n){return L(e,I(t,n))}function z(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function X(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var Y={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,i=e.options,o=n.elements.arrow,a=n.modifiersData.popperOffsets,s=H(n.placement),l=F(s),h=[p,u].indexOf(s)>=0?"height":"width";if(o&&a){var m=function(e,t){return z("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:X(e,d))}(i.padding,n),v=S(o),g="y"===l?f:p,y="y"===l?c:u,b=n.rects.reference[h]+n.rects.reference[l]-a[l]-n.rects.popper[h],w=a[l]-n.rects.reference[l],x=_(o),O=x?"y"===l?x.clientHeight||0:x.clientWidth||0:0,k=b/2-w/2,D=m[g],j=O-v[h]-m[y],E=O/2-v[h]/2+k,C=U(D,E,j),A=l;n.modifiersData[r]=((t={})[A]=C,t.centerOffset=C-E,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&T(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function G(e){return e.split("-")[1]}var J={top:"auto",right:"auto",bottom:"auto",left:"auto"};function K(e){var t,n=e.popper,r=e.popperRect,i=e.placement,o=e.variation,a=e.offsets,s=e.position,l=e.gpuAcceleration,d=e.adaptive,h=e.roundOffsets,v=e.isFixed,g=a.x,y=void 0===g?0:g,b=a.y,w=void 0===b?0:b,x="function"===typeof h?h({x:y,y:w}):{x:y,y:w};y=x.x,w=x.y;var O=a.hasOwnProperty("x"),k=a.hasOwnProperty("y"),j=p,E=f,C=window;if(d){var A=_(n),H="clientHeight",L="clientWidth";if(A===D(n)&&"static"!==R(A=V(n)).position&&"absolute"===s&&(H="scrollHeight",L="scrollWidth"),i===f||(i===p||i===u)&&o===m)E=c,w-=(v&&A===C&&C.visualViewport?C.visualViewport.height:A[H])-r.height,w*=l?1:-1;if(i===p||(i===f||i===c)&&o===m)j=u,y-=(v&&A===C&&C.visualViewport?C.visualViewport.width:A[L])-r.width,y*=l?1:-1}var I,W=Object.assign({position:s},d&&J),B=!0===h?function(e,t){var n=e.x,r=e.y,i=t.devicePixelRatio||1;return{x:M(n*i)/i||0,y:M(r*i)/i||0}}({x:y,y:w},D(n)):{x:y,y:w};return y=B.x,w=B.y,l?Object.assign({},W,((I={})[E]=k?"0":"",I[j]=O?"0":"",I.transform=(C.devicePixelRatio||1)<=1?"translate("+y+"px, "+w+"px)":"translate3d("+y+"px, "+w+"px, 0)",I)):Object.assign({},W,((t={})[E]=k?w+"px":"",t[j]=O?y+"px":"",t.transform="",t))}var Q={passive:!0};var $={left:"right",right:"left",bottom:"top",top:"bottom"};function ee(e){return e.replace(/left|right|bottom|top/g,(function(e){return $[e]}))}var te={start:"end",end:"start"};function ne(e){return e.replace(/start|end/g,(function(e){return te[e]}))}function re(e){var t=D(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ie(e){return P(V(e)).left+re(e).scrollLeft}function oe(e){var t=R(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function ae(e){return["html","body","#document"].indexOf(k(e))>=0?e.ownerDocument.body:E(e)&&oe(e)?e:ae(Z(e))}function se(e,t){var n;void 0===t&&(t=[]);var r=ae(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),o=D(r),a=i?[o].concat(o.visualViewport||[],oe(r)?r:[]):r,s=t.concat(a);return i?s:s.concat(se(Z(a)))}function fe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ce(e,t,n){return t===g?fe(function(e,t){var n=D(e),r=V(e),i=n.visualViewport,o=r.clientWidth,a=r.clientHeight,s=0,f=0;if(i){o=i.width,a=i.height;var c=B();(c||!c&&"fixed"===t)&&(s=i.offsetLeft,f=i.offsetTop)}return{width:o,height:a,x:s+ie(e),y:f}}(e,n)):j(t)?function(e,t){var n=P(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):fe(function(e){var t,n=V(e),r=re(e),i=null==(t=e.ownerDocument)?void 0:t.body,o=L(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),a=L(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),s=-r.scrollLeft+ie(e),f=-r.scrollTop;return"rtl"===R(i||n).direction&&(s+=L(n.clientWidth,i?i.clientWidth:0)-o),{width:o,height:a,x:s,y:f}}(V(e)))}function ue(e,t,n,r){var i="clippingParents"===t?function(e){var t=se(Z(e)),n=["absolute","fixed"].indexOf(R(e).position)>=0&&E(e)?_(e):e;return j(n)?t.filter((function(e){return j(e)&&T(e,n)&&"body"!==k(e)})):[]}(e):[].concat(t),o=[].concat(i,[n]),a=o[0],s=o.reduce((function(t,n){var i=ce(e,n,r);return t.top=L(i.top,t.top),t.right=I(i.right,t.right),t.bottom=I(i.bottom,t.bottom),t.left=L(i.left,t.left),t}),ce(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function pe(e){var t,n=e.reference,r=e.element,i=e.placement,o=i?H(i):null,a=i?G(i):null,s=n.x+n.width/2-r.width/2,l=n.y+n.height/2-r.height/2;switch(o){case f:t={x:s,y:n.y-r.height};break;case c:t={x:s,y:n.y+n.height};break;case u:t={x:n.x+n.width,y:l};break;case p:t={x:n.x-r.width,y:l};break;default:t={x:n.x,y:n.y}}var d=o?F(o):null;if(null!=d){var v="y"===d?"height":"width";switch(a){case h:t[d]=t[d]-(n[v]/2-r[v]/2);break;case m:t[d]=t[d]+(n[v]/2-r[v]/2)}}return t}function le(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=void 0===r?e.placement:r,o=n.strategy,a=void 0===o?e.strategy:o,s=n.boundary,p=void 0===s?v:s,l=n.rootBoundary,h=void 0===l?g:l,m=n.elementContext,w=void 0===m?y:m,x=n.altBoundary,O=void 0!==x&&x,k=n.padding,D=void 0===k?0:k,E=z("number"!==typeof D?D:X(D,d)),C=w===y?b:y,A=e.rects.popper,H=e.elements[O?C:w],L=ue(j(H)?H:H.contextElement||V(e.elements.popper),p,h,a),I=P(e.elements.reference),M=pe({reference:I,element:A,strategy:"absolute",placement:i}),W=fe(Object.assign({},A,M)),B=w===y?W:I,S={top:L.top-B.top+E.top,bottom:B.bottom-L.bottom+E.bottom,left:L.left-B.left+E.left,right:B.right-L.right+E.right},T=e.modifiersData.offset;if(w===y&&T){var R=T[i];Object.keys(S).forEach((function(e){var t=[u,c].indexOf(e)>=0?1:-1,n=[f,c].indexOf(e)>=0?"y":"x";S[e]+=R[n]*t}))}return S}function de(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=n.boundary,o=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?x:f,u=G(r),p=u?s?w:w.filter((function(e){return G(e)===u})):d,l=p.filter((function(e){return c.indexOf(e)>=0}));0===l.length&&(l=p);var h=l.reduce((function(t,n){return t[n]=le(e,{placement:n,boundary:i,rootBoundary:o,padding:a})[H(n)],t}),{});return Object.keys(h).sort((function(e,t){return h[e]-h[t]}))}var he={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=n.mainAxis,o=void 0===i||i,a=n.altAxis,s=void 0===a||a,d=n.fallbackPlacements,m=n.padding,v=n.boundary,g=n.rootBoundary,y=n.altBoundary,b=n.flipVariations,w=void 0===b||b,x=n.allowedAutoPlacements,O=t.options.placement,k=H(O),D=d||(k===O||!w?[ee(O)]:function(e){if(H(e)===l)return[];var t=ee(e);return[ne(e),t,ne(t)]}(O)),j=[O].concat(D).reduce((function(e,n){return e.concat(H(n)===l?de(t,{placement:n,boundary:v,rootBoundary:g,padding:m,flipVariations:w,allowedAutoPlacements:x}):n)}),[]),E=t.rects.reference,C=t.rects.popper,A=new Map,L=!0,I=j[0],M=0;M<j.length;M++){var W=j[M],B=H(W),P=G(W)===h,S=[f,c].indexOf(B)>=0,T=S?"width":"height",R=le(t,{placement:W,boundary:v,rootBoundary:g,altBoundary:y,padding:m}),q=S?P?u:p:P?c:f;E[T]>C[T]&&(q=ee(q));var V=ee(q),Z=[];if(o&&Z.push(R[B]<=0),s&&Z.push(R[q]<=0,R[V]<=0),Z.every((function(e){return e}))){I=W,L=!1;break}A.set(W,Z)}if(L)for(var N=function(e){var t=j.find((function(t){var n=A.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return I=t,"break"},_=w?3:1;_>0;_--){if("break"===N(_))break}t.placement!==I&&(t.modifiersData[r]._skip=!0,t.placement=I,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function me(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ve(e){return[f,u,c,p].some((function(t){return e[t]>=0}))}var ge={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,i=n.offset,o=void 0===i?[0,0]:i,a=x.reduce((function(e,n){return e[n]=function(e,t,n){var r=H(e),i=[p,f].indexOf(r)>=0?-1:1,o="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=o[0],s=o[1];return a=a||0,s=(s||0)*i,[p,u].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,o),e}),{}),s=a[t.placement],c=s.x,l=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=a}};var ye={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,i=n.mainAxis,o=void 0===i||i,a=n.altAxis,s=void 0!==a&&a,l=n.boundary,d=n.rootBoundary,m=n.altBoundary,v=n.padding,g=n.tether,y=void 0===g||g,b=n.tetherOffset,w=void 0===b?0:b,x=le(t,{boundary:l,rootBoundary:d,padding:v,altBoundary:m}),O=H(t.placement),k=G(t.placement),D=!k,j=F(O),E="x"===j?"y":"x",C=t.modifiersData.popperOffsets,A=t.rects.reference,M=t.rects.popper,W="function"===typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,B="number"===typeof W?{mainAxis:W,altAxis:W}:Object.assign({mainAxis:0,altAxis:0},W),P=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,T={x:0,y:0};if(C){if(o){var R,q="y"===j?f:p,V="y"===j?c:u,Z="y"===j?"height":"width",N=C[j],z=N+x[q],X=N-x[V],Y=y?-M[Z]/2:0,J=k===h?A[Z]:M[Z],K=k===h?-M[Z]:-A[Z],Q=t.elements.arrow,$=y&&Q?S(Q):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[q],ne=ee[V],re=U(0,A[Z],$[Z]),ie=D?A[Z]/2-Y-re-te-B.mainAxis:J-re-te-B.mainAxis,oe=D?-A[Z]/2+Y+re+ne+B.mainAxis:K+re+ne+B.mainAxis,ae=t.elements.arrow&&_(t.elements.arrow),se=ae?"y"===j?ae.clientTop||0:ae.clientLeft||0:0,fe=null!=(R=null==P?void 0:P[j])?R:0,ce=N+oe-fe,ue=U(y?I(z,N+ie-fe-se):z,N,y?L(X,ce):X);C[j]=ue,T[j]=ue-N}if(s){var pe,de="x"===j?f:p,he="x"===j?c:u,me=C[E],ve="y"===E?"height":"width",ge=me+x[de],ye=me-x[he],be=-1!==[f,p].indexOf(O),we=null!=(pe=null==P?void 0:P[E])?pe:0,xe=be?ge:me-A[ve]-M[ve]-we+B.altAxis,Oe=be?me+A[ve]+M[ve]-we-B.altAxis:ye,ke=y&&be?function(e,t,n){var r=U(e,t,n);return r>n?n:r}(xe,me,Oe):U(y?xe:ge,me,y?Oe:ye);C[E]=ke,T[E]=ke-me}t.modifiersData[r]=T}},requiresIfExists:["offset"]};function be(e,t,n){void 0===n&&(n=!1);var r=E(t),i=E(t)&&function(e){var t=e.getBoundingClientRect(),n=M(t.width)/e.offsetWidth||1,r=M(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),o=V(t),a=P(e,i,n),s={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(r||!r&&!n)&&(("body"!==k(t)||oe(o))&&(s=function(e){return e!==D(e)&&E(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:re(e);var t}(t)),E(t)?((f=P(t,!0)).x+=t.clientLeft,f.y+=t.clientTop):o&&(f.x=ie(o))),{x:a.left+s.scrollLeft-f.x,y:a.top+s.scrollTop-f.y,width:a.width,height:a.height}}function we(e){var t=new Map,n=new Set,r=[];function i(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||i(e)})),r}function xe(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var Oe={placement:"bottom",modifiers:[],strategy:"absolute"};function ke(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function De(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,i=t.defaultOptions,o=void 0===i?Oe:i;return function(e,t,n){void 0===n&&(n=o);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},Oe,o),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,f={state:i,setOptions:function(n){var s="function"===typeof n?n(i.options):n;c(),i.options=Object.assign({},o,i.options,s),i.scrollParents={reference:j(e)?se(e):e.contextElement?se(e.contextElement):[],popper:se(t)};var u=function(e){var t=we(e);return O.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,i.options.modifiers)));return i.orderedModifiers=u.filter((function(e){return e.enabled})),i.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"===typeof o){var s=o({state:i,name:t,instance:f,options:r}),c=function(){};a.push(s||c)}})),f.update()},forceUpdate:function(){if(!s){var e=i.elements,t=e.reference,n=e.popper;if(ke(t,n)){i.rects={reference:be(t,_(n),"fixed"===i.options.strategy),popper:S(n)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach((function(e){return i.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<i.orderedModifiers.length;r++)if(!0!==i.reset){var o=i.orderedModifiers[r],a=o.fn,c=o.options,u=void 0===c?{}:c,p=o.name;"function"===typeof a&&(i=a({state:i,options:u,name:p,instance:f})||i)}else i.reset=!1,r=-1}}},update:xe((function(){return new Promise((function(e){f.forceUpdate(),e(i)}))})),destroy:function(){c(),s=!0}};if(!ke(e,t))return f;function c(){a.forEach((function(e){return e()})),a=[]}return f.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var je=De({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,o=void 0===i||i,a=r.resize,s=void 0===a||a,f=D(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&c.forEach((function(e){e.addEventListener("scroll",n.update,Q)})),s&&f.addEventListener("resize",n.update,Q),function(){o&&c.forEach((function(e){e.removeEventListener("scroll",n.update,Q)})),s&&f.removeEventListener("resize",n.update,Q)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=pe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=void 0===r||r,o=n.adaptive,a=void 0===o||o,s=n.roundOffsets,f=void 0===s||s,c={placement:H(t.placement),variation:G(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,K(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,K(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},A,ge,he,ye,Y,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,a=le(t,{elementContext:"reference"}),s=le(t,{altBoundary:!0}),f=me(a,r),c=me(s,i,o),u=ve(f),p=ve(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}}]}),Ee=function(){function e(t){(0,o.Z)(this,e),(0,s.r)(this,t),this.ifxOpen=(0,s.c)(this,"ifxOpen",7),this.ifxClose=(0,s.c)(this,"ifxClose",7),this.placement="bottom-start",this.defaultOpen=!1,this.internalIsOpen=!1,this.noAppendToBody=!1,this.disabled=void 0,this.noCloseOnOutsideClick=!1,this.noCloseOnMenuClick=!1,this.trigger=void 0,this.menu=void 0}return(0,a.Z)(e,[{key:"componentWillLoad",value:function(){this.updateSlotContent(),this.watchHandlerIsOpen(this.defaultOpen,this.internalIsOpen)}},{key:"watchHandlerIsOpen",value:function(e,t){e!==t&&e!==this.internalIsOpen&&(e?this.openDropdown():this.closeDropdown())}},{key:"watchHandlerDisabled",value:function(e){this.trigger&&(this.trigger.disabled=e)}},{key:"watchHandlerSlot",value:function(){this.updateSlotContent()}},{key:"updateSlotContent",value:function(){this.trigger=this.el.querySelector("ifx-dropdown-trigger-button, ifx-dropdown-trigger"),this.trigger&&(this.trigger.disabled=this.disabled,this.trigger.removeEventListener("click",this.triggerClickHandler.bind(this)),this.trigger.addEventListener("click",this.triggerClickHandler.bind(this))),this.noAppendToBody?this.menu=this.el.querySelector("ifx-dropdown-menu"):(this.menu&&this.menu.remove(),this.menu=this.el.querySelector("ifx-dropdown-menu"),document.body.append(this.menu)),this.menu.removeEventListener("click",this.menuClickHandler.bind(this)),this.menu.addEventListener("click",this.menuClickHandler.bind(this))}},{key:"menuClickHandler",value:function(){this.noCloseOnMenuClick||this.closeDropdown()}},{key:"triggerClickHandler",value:function(){this.internalIsOpen?this.closeDropdown():this.openDropdown()}},{key:"disconnectedCallback",value:function(){this.popperInstance&&(this.popperInstance.destroy(),this.popperInstance=null),this.menu&&this.menu.remove()}},{key:"isOpen",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.internalIsOpen);case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"closeDropdown",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.internalIsOpen&&(this.internalIsOpen=!1,this.trigger.isOpen=!1,this.menu.isOpen=!1,this.ifxClose.emit()),this.popperInstance&&(this.popperInstance.destroy(),this.popperInstance=null);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openDropdown",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.internalIsOpen||this.disabled||(this.internalIsOpen=!0,this.trigger.isOpen=!0,this.menu.isOpen=!0,this.popperInstance=je(this.el,this.menu,{placement:this.placement}),this.ifxOpen.emit());case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleOutsideClick",value:function(e){var t=e.target;this.noCloseOnOutsideClick||this.el.contains(t)||this.menu.contains(t)||this.closeDropdown()}},{key:"render",value:function(){return(0,s.h)("div",{class:"dropdown"},(0,s.h)("slot",null))}},{key:"el",get:function(){return(0,s.g)(this)}}],[{key:"watchers",get:function(){return{defaultOpen:["watchHandlerIsOpen"],disabled:["watchHandlerDisabled"]}}}]),e}();Ee.style=":host{display:inline-block}"}}]);
//# sourceMappingURL=5544.0ee8336d.chunk.js.map