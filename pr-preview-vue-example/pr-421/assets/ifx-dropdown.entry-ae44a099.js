import{r as dt,c as Ve,h as qe,g as vt}from"./index-82ef8dfc.js";var j="top",H="bottom",L="right",B="left",Ae="auto",fe=[j,H,L,B],Q="start",oe="end",ht="clippingParents",Ze="viewport",ne="popper",mt="reference",Fe=fe.reduce(function(e,t){return e.concat([t+"-"+Q,t+"-"+oe])},[]),_e=[].concat(fe,[Ae]).reduce(function(e,t){return e.concat([t,t+"-"+Q,t+"-"+oe])},[]),gt="beforeRead",yt="read",bt="afterRead",wt="beforeMain",Ot="main",xt="afterMain",Et="beforeWrite",Ct="write",At="afterWrite",Dt=[gt,yt,bt,wt,Ot,xt,Et,Ct,At];function W(e){return e?(e.nodeName||"").toLowerCase():null}function $(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function J(e){var t=$(e).Element;return e instanceof t||e instanceof Element}function S(e){var t=$(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function De(e){if(typeof ShadowRoot>"u")return!1;var t=$(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function kt(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},i=t.attributes[r]||{},a=t.elements[r];!S(a)||!W(a)||(Object.assign(a.style,n),Object.keys(i).forEach(function(p){var s=i[p];s===!1?a.removeAttribute(p):a.setAttribute(p,s===!0?"":s)}))})}function Pt(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var i=t.elements[n],a=t.attributes[n]||{},p=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),s=p.reduce(function(o,c){return o[c]="",o},{});!S(i)||!W(i)||(Object.assign(i.style,s),Object.keys(a).forEach(function(o){i.removeAttribute(o)}))})}}const jt={name:"applyStyles",enabled:!0,phase:"write",fn:kt,effect:Pt,requires:["computeStyles"]};function M(e){return e.split("-")[0]}var G=Math.max,ge=Math.min,Z=Math.round;function Ee(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function et(){return!/^((?!chrome|android).)*safari/i.test(Ee())}function _(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),i=1,a=1;t&&S(e)&&(i=e.offsetWidth>0&&Z(n.width)/e.offsetWidth||1,a=e.offsetHeight>0&&Z(n.height)/e.offsetHeight||1);var p=J(e)?$(e):window,s=p.visualViewport,o=!et()&&r,c=(n.left+(o&&s?s.offsetLeft:0))/i,f=(n.top+(o&&s?s.offsetTop:0))/a,h=n.width/i,y=n.height/a;return{width:h,height:y,top:f,right:c+h,bottom:f+y,left:c,x:c,y:f}}function ke(e){var t=_(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function tt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&De(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function N(e){return $(e).getComputedStyle(e)}function Bt(e){return["table","td","th"].indexOf(W(e))>=0}function q(e){return((J(e)?e.ownerDocument:e.document)||window.document).documentElement}function ye(e){return W(e)==="html"?e:e.assignedSlot||e.parentNode||(De(e)?e.host:null)||q(e)}function Xe(e){return!S(e)||N(e).position==="fixed"?null:e.offsetParent}function Rt(e){var t=/firefox/i.test(Ee()),r=/Trident/i.test(Ee());if(r&&S(e)){var n=N(e);if(n.position==="fixed")return null}var i=ye(e);for(De(i)&&(i=i.host);S(i)&&["html","body"].indexOf(W(i))<0;){var a=N(i);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return i;i=i.parentNode}return null}function pe(e){for(var t=$(e),r=Xe(e);r&&Bt(r)&&N(r).position==="static";)r=Xe(r);return r&&(W(r)==="html"||W(r)==="body"&&N(r).position==="static")?t:r||Rt(e)||t}function Pe(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ie(e,t,r){return G(e,ge(t,r))}function $t(e,t,r){var n=ie(e,t,r);return n>r?r:n}function rt(){return{top:0,right:0,bottom:0,left:0}}function nt(e){return Object.assign({},rt(),e)}function it(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var St=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,nt(typeof t!="number"?t:it(t,fe))};function Ht(e){var t,r=e.state,n=e.name,i=e.options,a=r.elements.arrow,p=r.modifiersData.popperOffsets,s=M(r.placement),o=Pe(s),c=[B,L].indexOf(s)>=0,f=c?"height":"width";if(!(!a||!p)){var h=St(i.padding,r),y=ke(a),l=o==="y"?j:B,w=o==="y"?H:L,v=r.rects.reference[f]+r.rects.reference[o]-p[o]-r.rects.popper[f],d=p[o]-r.rects.reference[o],b=pe(a),x=b?o==="y"?b.clientHeight||0:b.clientWidth||0:0,E=v/2-d/2,u=h[l],m=x-y[f]-h[w],g=x/2-y[f]/2+E,O=ie(u,g,m),D=o;r.modifiersData[n]=(t={},t[D]=O,t.centerOffset=O-g,t)}}function Lt(e){var t=e.state,r=e.options,n=r.element,i=n===void 0?"[data-popper-arrow]":n;i!=null&&(typeof i=="string"&&(i=t.elements.popper.querySelector(i),!i)||tt(t.elements.popper,i)&&(t.elements.arrow=i))}const Tt={name:"arrow",enabled:!0,phase:"main",fn:Ht,effect:Lt,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ee(e){return e.split("-")[1]}var It={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Mt(e,t){var r=e.x,n=e.y,i=t.devicePixelRatio||1;return{x:Z(r*i)/i||0,y:Z(n*i)/i||0}}function Ye(e){var t,r=e.popper,n=e.popperRect,i=e.placement,a=e.variation,p=e.offsets,s=e.position,o=e.gpuAcceleration,c=e.adaptive,f=e.roundOffsets,h=e.isFixed,y=p.x,l=y===void 0?0:y,w=p.y,v=w===void 0?0:w,d=typeof f=="function"?f({x:l,y:v}):{x:l,y:v};l=d.x,v=d.y;var b=p.hasOwnProperty("x"),x=p.hasOwnProperty("y"),E=B,u=j,m=window;if(c){var g=pe(r),O="clientHeight",D="clientWidth";if(g===$(r)&&(g=q(r),N(g).position!=="static"&&s==="absolute"&&(O="scrollHeight",D="scrollWidth")),g=g,i===j||(i===B||i===L)&&a===oe){u=H;var A=h&&g===m&&m.visualViewport?m.visualViewport.height:g[O];v-=A-n.height,v*=o?1:-1}if(i===B||(i===j||i===H)&&a===oe){E=L;var C=h&&g===m&&m.visualViewport?m.visualViewport.width:g[D];l-=C-n.width,l*=o?1:-1}}var k=Object.assign({position:s},c&&It),T=f===!0?Mt({x:l,y:v},$(r)):{x:l,y:v};if(l=T.x,v=T.y,o){var P;return Object.assign({},k,(P={},P[u]=x?"0":"",P[E]=b?"0":"",P.transform=(m.devicePixelRatio||1)<=1?"translate("+l+"px, "+v+"px)":"translate3d("+l+"px, "+v+"px, 0)",P))}return Object.assign({},k,(t={},t[u]=x?v+"px":"",t[E]=b?l+"px":"",t.transform="",t))}function Wt(e){var t=e.state,r=e.options,n=r.gpuAcceleration,i=n===void 0?!0:n,a=r.adaptive,p=a===void 0?!0:a,s=r.roundOffsets,o=s===void 0?!0:s,c={placement:M(t.placement),variation:ee(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ye(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:p,roundOffsets:o})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ye(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:o})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Nt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Wt,data:{}};var he={passive:!0};function Vt(e){var t=e.state,r=e.instance,n=e.options,i=n.scroll,a=i===void 0?!0:i,p=n.resize,s=p===void 0?!0:p,o=$(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&c.forEach(function(f){f.addEventListener("scroll",r.update,he)}),s&&o.addEventListener("resize",r.update,he),function(){a&&c.forEach(function(f){f.removeEventListener("scroll",r.update,he)}),s&&o.removeEventListener("resize",r.update,he)}}const qt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Vt,data:{}};var Ft={left:"right",right:"left",bottom:"top",top:"bottom"};function me(e){return e.replace(/left|right|bottom|top/g,function(t){return Ft[t]})}var Xt={start:"end",end:"start"};function ze(e){return e.replace(/start|end/g,function(t){return Xt[t]})}function je(e){var t=$(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Be(e){return _(q(e)).left+je(e).scrollLeft}function Yt(e,t){var r=$(e),n=q(e),i=r.visualViewport,a=n.clientWidth,p=n.clientHeight,s=0,o=0;if(i){a=i.width,p=i.height;var c=et();(c||!c&&t==="fixed")&&(s=i.offsetLeft,o=i.offsetTop)}return{width:a,height:p,x:s+Be(e),y:o}}function zt(e){var t,r=q(e),n=je(e),i=(t=e.ownerDocument)==null?void 0:t.body,a=G(r.scrollWidth,r.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),p=G(r.scrollHeight,r.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),s=-n.scrollLeft+Be(e),o=-n.scrollTop;return N(i||r).direction==="rtl"&&(s+=G(r.clientWidth,i?i.clientWidth:0)-a),{width:a,height:p,x:s,y:o}}function Re(e){var t=N(e),r=t.overflow,n=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+i+n)}function at(e){return["html","body","#document"].indexOf(W(e))>=0?e.ownerDocument.body:S(e)&&Re(e)?e:at(ye(e))}function ae(e,t){var r;t===void 0&&(t=[]);var n=at(e),i=n===((r=e.ownerDocument)==null?void 0:r.body),a=$(n),p=i?[a].concat(a.visualViewport||[],Re(n)?n:[]):n,s=t.concat(p);return i?s:s.concat(ae(ye(p)))}function Ce(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Ut(e,t){var r=_(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Ue(e,t,r){return t===Ze?Ce(Yt(e,r)):J(t)?Ut(t,r):Ce(zt(q(e)))}function Gt(e){var t=ae(ye(e)),r=["absolute","fixed"].indexOf(N(e).position)>=0,n=r&&S(e)?pe(e):e;return J(n)?t.filter(function(i){return J(i)&&tt(i,n)&&W(i)!=="body"}):[]}function Jt(e,t,r,n){var i=t==="clippingParents"?Gt(e):[].concat(t),a=[].concat(i,[r]),p=a[0],s=a.reduce(function(o,c){var f=Ue(e,c,n);return o.top=G(f.top,o.top),o.right=ge(f.right,o.right),o.bottom=ge(f.bottom,o.bottom),o.left=G(f.left,o.left),o},Ue(e,p,n));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ot(e){var t=e.reference,r=e.element,n=e.placement,i=n?M(n):null,a=n?ee(n):null,p=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,o;switch(i){case j:o={x:p,y:t.y-r.height};break;case H:o={x:p,y:t.y+t.height};break;case L:o={x:t.x+t.width,y:s};break;case B:o={x:t.x-r.width,y:s};break;default:o={x:t.x,y:t.y}}var c=i?Pe(i):null;if(c!=null){var f=c==="y"?"height":"width";switch(a){case Q:o[c]=o[c]-(t[f]/2-r[f]/2);break;case oe:o[c]=o[c]+(t[f]/2-r[f]/2);break}}return o}function se(e,t){t===void 0&&(t={});var r=t,n=r.placement,i=n===void 0?e.placement:n,a=r.strategy,p=a===void 0?e.strategy:a,s=r.boundary,o=s===void 0?ht:s,c=r.rootBoundary,f=c===void 0?Ze:c,h=r.elementContext,y=h===void 0?ne:h,l=r.altBoundary,w=l===void 0?!1:l,v=r.padding,d=v===void 0?0:v,b=nt(typeof d!="number"?d:it(d,fe)),x=y===ne?mt:ne,E=e.rects.popper,u=e.elements[w?x:y],m=Jt(J(u)?u:u.contextElement||q(e.elements.popper),o,f,p),g=_(e.elements.reference),O=ot({reference:g,element:E,strategy:"absolute",placement:i}),D=Ce(Object.assign({},E,O)),A=y===ne?D:g,C={top:m.top-A.top+b.top,bottom:A.bottom-m.bottom+b.bottom,left:m.left-A.left+b.left,right:A.right-m.right+b.right},k=e.modifiersData.offset;if(y===ne&&k){var T=k[i];Object.keys(C).forEach(function(P){var F=[L,H].indexOf(P)>=0?1:-1,X=[j,H].indexOf(P)>=0?"y":"x";C[P]+=T[X]*F})}return C}function Kt(e,t){t===void 0&&(t={});var r=t,n=r.placement,i=r.boundary,a=r.rootBoundary,p=r.padding,s=r.flipVariations,o=r.allowedAutoPlacements,c=o===void 0?_e:o,f=ee(n),h=f?s?Fe:Fe.filter(function(w){return ee(w)===f}):fe,y=h.filter(function(w){return c.indexOf(w)>=0});y.length===0&&(y=h);var l=y.reduce(function(w,v){return w[v]=se(e,{placement:v,boundary:i,rootBoundary:a,padding:p})[M(v)],w},{});return Object.keys(l).sort(function(w,v){return l[w]-l[v]})}function Qt(e){if(M(e)===Ae)return[];var t=me(e);return[ze(e),t,ze(t)]}function Zt(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var i=r.mainAxis,a=i===void 0?!0:i,p=r.altAxis,s=p===void 0?!0:p,o=r.fallbackPlacements,c=r.padding,f=r.boundary,h=r.rootBoundary,y=r.altBoundary,l=r.flipVariations,w=l===void 0?!0:l,v=r.allowedAutoPlacements,d=t.options.placement,b=M(d),x=b===d,E=o||(x||!w?[me(d)]:Qt(d)),u=[d].concat(E).reduce(function(K,V){return K.concat(M(V)===Ae?Kt(t,{placement:V,boundary:f,rootBoundary:h,padding:c,flipVariations:w,allowedAutoPlacements:v}):V)},[]),m=t.rects.reference,g=t.rects.popper,O=new Map,D=!0,A=u[0],C=0;C<u.length;C++){var k=u[C],T=M(k),P=ee(k)===Q,F=[j,H].indexOf(T)>=0,X=F?"width":"height",R=se(t,{placement:k,boundary:f,rootBoundary:h,altBoundary:y,padding:c}),I=F?P?L:B:P?H:j;m[X]>g[X]&&(I=me(I));var ce=me(I),Y=[];if(a&&Y.push(R[T]<=0),s&&Y.push(R[I]<=0,R[ce]<=0),Y.every(function(K){return K})){A=k,D=!1;break}O.set(k,Y)}if(D)for(var le=w?3:1,be=function(V){var re=u.find(function(de){var z=O.get(de);if(z)return z.slice(0,V).every(function(we){return we})});if(re)return A=re,"break"},te=le;te>0;te--){var ue=be(te);if(ue==="break")break}t.placement!==A&&(t.modifiersData[n]._skip=!0,t.placement=A,t.reset=!0)}}const _t={name:"flip",enabled:!0,phase:"main",fn:Zt,requiresIfExists:["offset"],data:{_skip:!1}};function Ge(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Je(e){return[j,L,H,B].some(function(t){return e[t]>=0})}function er(e){var t=e.state,r=e.name,n=t.rects.reference,i=t.rects.popper,a=t.modifiersData.preventOverflow,p=se(t,{elementContext:"reference"}),s=se(t,{altBoundary:!0}),o=Ge(p,n),c=Ge(s,i,a),f=Je(o),h=Je(c);t.modifiersData[r]={referenceClippingOffsets:o,popperEscapeOffsets:c,isReferenceHidden:f,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":h})}const tr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:er};function rr(e,t,r){var n=M(e),i=[B,j].indexOf(n)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,p=a[0],s=a[1];return p=p||0,s=(s||0)*i,[B,L].indexOf(n)>=0?{x:s,y:p}:{x:p,y:s}}function nr(e){var t=e.state,r=e.options,n=e.name,i=r.offset,a=i===void 0?[0,0]:i,p=_e.reduce(function(f,h){return f[h]=rr(h,t.rects,a),f},{}),s=p[t.placement],o=s.x,c=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=o,t.modifiersData.popperOffsets.y+=c),t.modifiersData[n]=p}const ir={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:nr};function ar(e){var t=e.state,r=e.name;t.modifiersData[r]=ot({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const or={name:"popperOffsets",enabled:!0,phase:"read",fn:ar,data:{}};function sr(e){return e==="x"?"y":"x"}function fr(e){var t=e.state,r=e.options,n=e.name,i=r.mainAxis,a=i===void 0?!0:i,p=r.altAxis,s=p===void 0?!1:p,o=r.boundary,c=r.rootBoundary,f=r.altBoundary,h=r.padding,y=r.tether,l=y===void 0?!0:y,w=r.tetherOffset,v=w===void 0?0:w,d=se(t,{boundary:o,rootBoundary:c,padding:h,altBoundary:f}),b=M(t.placement),x=ee(t.placement),E=!x,u=Pe(b),m=sr(u),g=t.modifiersData.popperOffsets,O=t.rects.reference,D=t.rects.popper,A=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,C=typeof A=="number"?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),k=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,T={x:0,y:0};if(g){if(a){var P,F=u==="y"?j:B,X=u==="y"?H:L,R=u==="y"?"height":"width",I=g[u],ce=I+d[F],Y=I-d[X],le=l?-D[R]/2:0,be=x===Q?O[R]:D[R],te=x===Q?-D[R]:-O[R],ue=t.elements.arrow,K=l&&ue?ke(ue):{width:0,height:0},V=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:rt(),re=V[F],de=V[X],z=ie(0,O[R],K[R]),we=E?O[R]/2-le-z-re-C.mainAxis:be-z-re-C.mainAxis,st=E?-O[R]/2+le+z+de+C.mainAxis:te+z+de+C.mainAxis,Oe=t.elements.arrow&&pe(t.elements.arrow),ft=Oe?u==="y"?Oe.clientTop||0:Oe.clientLeft||0:0,$e=(P=k==null?void 0:k[u])!=null?P:0,pt=I+we-$e-ft,ct=I+st-$e,Se=ie(l?ge(ce,pt):ce,I,l?G(Y,ct):Y);g[u]=Se,T[u]=Se-I}if(s){var He,lt=u==="x"?j:B,ut=u==="x"?H:L,U=g[m],ve=m==="y"?"height":"width",Le=U+d[lt],Te=U-d[ut],xe=[j,B].indexOf(b)!==-1,Ie=(He=k==null?void 0:k[m])!=null?He:0,Me=xe?Le:U-O[ve]-D[ve]-Ie+C.altAxis,We=xe?U+O[ve]+D[ve]-Ie-C.altAxis:Te,Ne=l&&xe?$t(Me,U,We):ie(l?Me:Le,U,l?We:Te);g[m]=Ne,T[m]=Ne-U}t.modifiersData[n]=T}}const pr={name:"preventOverflow",enabled:!0,phase:"main",fn:fr,requiresIfExists:["offset"]};function cr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function lr(e){return e===$(e)||!S(e)?je(e):cr(e)}function ur(e){var t=e.getBoundingClientRect(),r=Z(t.width)/e.offsetWidth||1,n=Z(t.height)/e.offsetHeight||1;return r!==1||n!==1}function dr(e,t,r){r===void 0&&(r=!1);var n=S(t),i=S(t)&&ur(t),a=q(t),p=_(e,i,r),s={scrollLeft:0,scrollTop:0},o={x:0,y:0};return(n||!n&&!r)&&((W(t)!=="body"||Re(a))&&(s=lr(t)),S(t)?(o=_(t,!0),o.x+=t.clientLeft,o.y+=t.clientTop):a&&(o.x=Be(a))),{x:p.left+s.scrollLeft-o.x,y:p.top+s.scrollTop-o.y,width:p.width,height:p.height}}function vr(e){var t=new Map,r=new Set,n=[];e.forEach(function(a){t.set(a.name,a)});function i(a){r.add(a.name);var p=[].concat(a.requires||[],a.requiresIfExists||[]);p.forEach(function(s){if(!r.has(s)){var o=t.get(s);o&&i(o)}}),n.push(a)}return e.forEach(function(a){r.has(a.name)||i(a)}),n}function hr(e){var t=vr(e);return Dt.reduce(function(r,n){return r.concat(t.filter(function(i){return i.phase===n}))},[])}function mr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function gr(e){var t=e.reduce(function(r,n){var i=r[n.name];return r[n.name]=i?Object.assign({},i,n,{options:Object.assign({},i.options,n.options),data:Object.assign({},i.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var Ke={placement:"bottom",modifiers:[],strategy:"absolute"};function Qe(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function yr(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,i=t.defaultOptions,a=i===void 0?Ke:i;return function(s,o,c){c===void 0&&(c=a);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ke,a),modifiersData:{},elements:{reference:s,popper:o},attributes:{},styles:{}},h=[],y=!1,l={state:f,setOptions:function(b){var x=typeof b=="function"?b(f.options):b;v(),f.options=Object.assign({},a,f.options,x),f.scrollParents={reference:J(s)?ae(s):s.contextElement?ae(s.contextElement):[],popper:ae(o)};var E=hr(gr([].concat(n,f.options.modifiers)));return f.orderedModifiers=E.filter(function(u){return u.enabled}),w(),l.update()},forceUpdate:function(){if(!y){var b=f.elements,x=b.reference,E=b.popper;if(Qe(x,E)){f.rects={reference:dr(x,pe(E),f.options.strategy==="fixed"),popper:ke(E)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(C){return f.modifiersData[C.name]=Object.assign({},C.data)});for(var u=0;u<f.orderedModifiers.length;u++){if(f.reset===!0){f.reset=!1,u=-1;continue}var m=f.orderedModifiers[u],g=m.fn,O=m.options,D=O===void 0?{}:O,A=m.name;typeof g=="function"&&(f=g({state:f,options:D,name:A,instance:l})||f)}}}},update:mr(function(){return new Promise(function(d){l.forceUpdate(),d(f)})}),destroy:function(){v(),y=!0}};if(!Qe(s,o))return l;l.setOptions(c).then(function(d){!y&&c.onFirstUpdate&&c.onFirstUpdate(d)});function w(){f.orderedModifiers.forEach(function(d){var b=d.name,x=d.options,E=x===void 0?{}:x,u=d.effect;if(typeof u=="function"){var m=u({state:f,name:b,instance:l,options:E}),g=function(){};h.push(m||g)}})}function v(){h.forEach(function(d){return d()}),h=[]}return l}}var br=[qt,or,Nt,jt,ir,_t,pr,Tt,tr],wr=yr({defaultModifiers:br});const Or=":host{display:inline-block}",xr=class{constructor(e){dt(this,e),this.ifxOpen=Ve(this,"ifxOpen",7),this.ifxClose=Ve(this,"ifxClose",7),this.placement="bottom-start",this.defaultOpen=!1,this.internalIsOpen=!1,this.noAppendToBody=!1,this.disabled=void 0,this.noCloseOnOutsideClick=!1,this.noCloseOnMenuClick=!1,this.trigger=void 0,this.menu=void 0}componentWillLoad(){this.updateSlotContent(),this.watchHandlerIsOpen(this.defaultOpen,this.internalIsOpen)}watchHandlerIsOpen(e,t){e!==t&&e!==this.internalIsOpen&&(e?this.openDropdown():this.closeDropdown())}watchHandlerDisabled(e){this.trigger&&(this.trigger.disabled=e)}watchHandlerSlot(){this.updateSlotContent()}updateSlotContent(){this.trigger=this.el.querySelector("ifx-dropdown-trigger-button, ifx-dropdown-trigger"),this.trigger&&(this.trigger.disabled=this.disabled,this.trigger.removeEventListener("click",this.triggerClickHandler.bind(this)),this.trigger.addEventListener("click",this.triggerClickHandler.bind(this))),this.noAppendToBody?this.menu=this.el.querySelector("ifx-dropdown-menu"):(this.menu&&this.menu.remove(),this.menu=this.el.querySelector("ifx-dropdown-menu"),document.body.append(this.menu)),this.menu.removeEventListener("click",this.menuClickHandler.bind(this)),this.menu.addEventListener("click",this.menuClickHandler.bind(this))}menuClickHandler(){this.noCloseOnMenuClick||this.closeDropdown()}triggerClickHandler(){this.internalIsOpen?this.closeDropdown():this.openDropdown()}disconnectedCallback(){this.popperInstance&&(this.popperInstance.destroy(),this.popperInstance=null),this.menu&&this.menu.remove()}async isOpen(){return this.internalIsOpen}async closeDropdown(){this.internalIsOpen&&(this.internalIsOpen=!1,this.trigger.isOpen=!1,this.menu.isOpen=!1,this.ifxClose.emit()),this.popperInstance&&(this.popperInstance.destroy(),this.popperInstance=null)}async openDropdown(){!this.internalIsOpen&&!this.disabled&&(this.internalIsOpen=!0,this.trigger.isOpen=!0,this.menu.isOpen=!0,this.popperInstance=wr(this.el,this.menu,{placement:this.placement}),this.ifxOpen.emit())}handleOutsideClick(e){const t=e.target;!this.noCloseOnOutsideClick&&!this.el.contains(t)&&!this.menu.contains(t)&&this.closeDropdown()}render(){return qe("div",{class:"dropdown"},qe("slot",null))}get el(){return vt(this)}static get watchers(){return{defaultOpen:["watchHandlerIsOpen"],disabled:["watchHandlerDisabled"]}}};xr.style=Or;export{xr as ifx_dropdown};