/*! For license information please see 4319.4fd83048.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[4319],{6385:function(t,n,o){function e(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function r(t,n,o){return t(o={path:n,exports:{},require:function(t,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},o.exports),o.exports}o.d(n,{c:function(){return r},g:function(){return e}})},4319:function(t,n,o){o.r(n),o.d(n,{ifx_example:function(){return c}});var e=o(4165),r=o(5861),i=o(5671),s=o(3144),b=o(4269),a=o(4464),c=function(){function t(n){(0,i.Z)(this,t),(0,b.r)(this,n),this.variant="solid",this.color="primary",this.size="m",this.disabled=!1,this.icon=void 0,this.position="left",this.internalPosition=void 0,this.href=void 0,this.target="_self",this.type="button"}return(0,s.Z)(t,[{key:"reassignPosition",value:function(t){t&&t!==this.internalPosition&&("LEFT"!==t.toUpperCase()&&"RIGHT"!==t.toUpperCase()||(this.internalPosition=t))}},{key:"setFocus",value:function(){var t=(0,r.Z)((0,e.Z)().mark((function t(){return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.focusableElement.focus();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentWillLoad",value:function(){"LEFT"!==this.position.toUpperCase()?this.internalPosition="left":this.internalPosition=this.position}},{key:"componentDidLoad",value:function(){"submit"===this.type&&this.el.closest("form")&&(this.nativeButton=document.createElement("button"),this.nativeButton.type="submit",this.nativeButton.style.display="none",this.el.closest("form").appendChild(this.nativeButton))}},{key:"handleClick",value:function(){this.nativeButton&&this.nativeButton.click()}},{key:"render",value:function(){var t=this;return(0,b.h)(b.a,null,this.href?(0,b.h)("a",{ref:function(n){return t.focusableElement=n},class:this.getClassNames(),href:this.disabled?void 0:this.href,target:this.target,rel:"_blank"===this.target?"noopener noreferrer":void 0},this.icon&&"LEFT"===this.internalPosition.toUpperCase()&&(0,b.h)("ifx-icon",{icon:this.icon}),(0,b.h)("slot",null),this.icon&&"RIGHT"===this.internalPosition.toUpperCase()&&(0,b.h)("ifx-icon",{icon:this.icon})):(0,b.h)("button",{class:this.getClassNames(),type:"button",onClick:this.handleClick.bind(this)},this.icon&&"LEFT"===this.internalPosition.toUpperCase()&&(0,b.h)("ifx-icon",{icon:this.icon}),(0,b.h)("slot",null),this.icon&&"RIGHT"===this.internalPosition.toUpperCase()&&(0,b.h)("ifx-icon",{icon:this.icon})))}},{key:"getVariantClass",value:function(){return"outline"==="".concat(this.variant)?"outline-".concat(this.color):"outline-text"==="".concat(this.variant)?"".concat(this.color,"-outline-text"):"".concat(this.color)}},{key:"getSizeClass",value:function(){return"s"==="".concat(this.size)?"s":""}},{key:"getClassNames",value:function(){return(0,a.c)("btn",this.size&&"btn-".concat(this.getSizeClass()),"btn-".concat(this.getVariantClass()),this.disabled?"disabled":"")}},{key:"el",get:function(){return(0,b.g)(this)}}],[{key:"watchers",get:function(){return{position:["reassignPosition"]}}}]),t}();c.style='.btn{display:inline-flex;justify-content:center;align-items:center;min-width:80px;min-height:40px;padding:0px 16px;gap:8px;color:#FFFFFF;flex-direction:row;font-weight:600;border-radius:1px;line-height:1.5rem;outline:none;font-family:"Source Sans 3";text-align:center;text-decoration:none;vertical-align:middle;user-select:none;border:1px solid rgba(0, 0, 0, 0);font-size:1rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.btn:not(.disabled){cursor:pointer}.btn-primary{color:#FFFFFF;background-color:#0A8276;border-color:#0A8276}.btn-primary svg{stroke:#FFFFFF}.btn-outline-primary{background-color:#FFFFFF;color:#0A8276;border-color:#0A8276}.btn-outline-primary svg{stroke:#0A8276}.btn-secondary{color:#FFFFFF;background-color:#9C216E;border-color:#9C216E}.btn-secondary svg{stroke:#FFFFFF}.btn-outline-secondary{background-color:#FFFFFF;color:#9C216E;border-color:#9C216E}.btn-outline-secondary svg{stroke:#9C216E}.btn-success{color:#1D1D1D;background-color:#4CA460;border-color:#4CA460}.btn-success svg{stroke:#1D1D1D}.btn-outline-success{background-color:#FFFFFF;border-color:#4CA460}.btn-outline-success svg{stroke:#1D1D1D}.btn-danger{color:#FFFFFF;background-color:#CD002F;border-color:#CD002F}.btn-danger svg{stroke:#FFFFFF}.btn-outline-danger{background-color:#FFFFFF;color:#CD002F;border-color:#CD002F}.btn-outline-danger svg{stroke:#CD002F}.btn-warning{color:#1D1D1D;background-color:#E16B25;border-color:#E16B25}.btn-warning svg{stroke:#1D1D1D}.btn-outline-warning{background-color:#FFFFFF;border-color:#E16B25}.btn-outline-warning svg{stroke:#1D1D1D}.btn.btn-s{font-size:0.813rem;min-width:71px;min-height:32px;line-height:1rem}.btn.btn-primary:focus,.btn.btn-outline-primary:focus,.btn.btn-secondary:focus,.btn.btn-outline-secondary:focus,.btn.btn-success:focus,.btn.btn-outline-success:focus,.btn.btn-danger:focus,.btn.btn-outline-danger:focus,.btn.btn-warning:focus,.btn.btn-outline-warning:focus,.btn.btn-outline-text:focus{box-shadow:none}.btn.btn-primary:focus-visible,.btn.btn-outline-primary:focus-visible,.btn.btn-secondary:focus-visible,.btn.btn-outline-secondary:focus-visible,.btn.btn-success:focus-visible,.btn.btn-outline-success:focus-visible,.btn.btn-danger:focus-visible,.btn.btn-outline-danger:focus-visible,.btn.btn-warning:focus-visible,.btn.btn-outline-warning:focus-visible,.btn.btn-outline-text:focus-visible{box-shadow:0 0 0 3px #B4DDD8}.btn:disabled,.btn.disabled{opacity:1;background-color:#BFBBBB;border-color:#BFBBBB;color:#FFFFFF}.btn.btn-primary:not(:disabled,.disabled):focus{background-color:#0A8276;border-color:#0A8276}.btn.btn-primary:not(:disabled,.disabled):hover{background-color:#08665C;border-color:#08665C}.btn.btn-primary:not(:disabled,.disabled):active,.btn.btn-primary:not(:disabled,.disabled).active{background-color:#06534B;border-color:#06534B}.btn.btn-outline-primary:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-primary:not(:disabled,.disabled):hover{color:#FFFFFF;background-color:#08665C;border-color:#08665C}.btn.btn-outline-primary:not(:disabled,.disabled):active,.btn.btn-outline-primary:not(:disabled,.disabled).active{background-color:#06534B;border-color:#06534B}.btn.btn-secondary:not(:disabled,.disabled):focus{background-color:#9C216E;border-color:#9C216E}.btn.btn-secondary:not(:disabled,.disabled):hover{background-color:#9C216E;border-color:#9C216E}.btn.btn-secondary:not(:disabled,.disabled):active,.btn.btn-secondary:not(:disabled,.disabled).active{background-color:#9C216E;border-color:#9C216E}.btn.btn-outline-secondary:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-secondary:not(:disabled,.disabled):hover{color:#FFFFFF;background-color:#9C216E;border-color:#9C216E}.btn.btn-outline-secondary:not(:disabled,.disabled):active,.btn.btn-outline-secondary:not(:disabled,.disabled).active{background-color:#9C216E;border-color:#9C216E}.btn.btn-success:not(:disabled,.disabled):focus{background-color:#4CA460;border-color:#4CA460}.btn.btn-success:not(:disabled,.disabled):hover{background-color:#4CA460;border-color:#4CA460}.btn.btn-success:not(:disabled,.disabled):active,.btn.btn-success:not(:disabled,.disabled).active{background-color:#4CA460;border-color:#4CA460}.btn.btn-outline-success:not(:disabled,.disabled){color:#1D1D1D}.btn.btn-outline-success:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-success:not(:disabled,.disabled):hover{background-color:#4CA460;border-color:#4CA460}.btn.btn-outline-success:not(:disabled,.disabled):active,.btn.btn-outline-success:not(:disabled,.disabled).active{background-color:#4CA460;border-color:#4CA460}.btn.btn-danger:not(:disabled,.disabled):focus{background-color:#CD002F;border-color:#CD002F}.btn.btn-danger:not(:disabled,.disabled):hover{background-color:#A2001E;border-color:#A2001E}.btn.btn-danger:not(:disabled,.disabled):active,.btn.btn-danger:not(:disabled,.disabled).active{background-color:#900021;border-color:#900021}.btn.btn-outline-danger:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-danger:not(:disabled,.disabled):hover{color:#FFFFFF;background-color:#A2001E;border-color:#A2001E}.btn.btn-outline-danger:not(:disabled,.disabled):active,.btn.btn-outline-danger:not(:disabled,.disabled).active{background-color:#900021;border-color:#900021}.btn.btn-warning:not(:disabled,.disabled):focus{background-color:#E16B25;border-color:#E16B25}.btn.btn-warning:not(:disabled,.disabled):hover{background-color:#E16B25;border-color:#E16B25}.btn.btn-warning:not(:disabled,.disabled):active,.btn.btn-warning:not(:disabled,.disabled).active{background-color:#E16B25;border-color:#E16B25}.btn.btn-outline-warning:not(:disabled,.disabled){color:#1D1D1D}.btn.btn-outline-warning:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-warning:not(:disabled,.disabled):hover{background-color:#E16B25;border-color:#E16B25}.btn.btn-outline-warning:not(:disabled,.disabled):active,.btn.btn-outline-warning:not(:disabled,.disabled).active{background-color:#E16B25;border-color:#E16B25}.btn.btn-primary-outline-text{background-color:transparent;color:#0A8276}.btn.btn-primary-outline-text:hover{color:#08665C}.btn.btn-primary-outline-text:hover svg{stroke:#08665C}.btn.btn-primary-outline-text:active,.btn.btn-primary-outline-text.active{color:#06534B}.btn.btn-primary-outline-text:active svg,.btn.btn-primary-outline-text.active svg{stroke:#06534B}.btn.btn-primary-outline-text:disabled,.btn.btn-primary-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#BFBBBB}.btn.btn-primary-outline-text:disabled svg,.btn.btn-primary-outline-text.disabled svg{stroke:#BFBBBB}.btn.btn-primary-outline-text svg{stroke:#0A8276}.btn.btn-secondary-outline-text{background-color:transparent;color:#9C216E}.btn.btn-secondary-outline-text:hover{color:#9C216E}.btn.btn-secondary-outline-text:hover svg{stroke:#9C216E}.btn.btn-secondary-outline-text:active,.btn.btn-secondary-outline-text.active{color:#9C216E}.btn.btn-secondary-outline-text:active svg,.btn.btn-secondary-outline-text.active svg{stroke:#9C216E}.btn.btn-secondary-outline-text:disabled,.btn.btn-secondary-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#BFBBBB}.btn.btn-secondary-outline-text:disabled svg,.btn.btn-secondary-outline-text.disabled svg{stroke:#BFBBBB}.btn.btn-secondary-outline-text svg{stroke:#9C216E}.btn.btn-success-outline-text{background-color:transparent;color:#4CA460}.btn.btn-success-outline-text:hover{color:#4CA460}.btn.btn-success-outline-text:hover svg{stroke:#4CA460}.btn.btn-success-outline-text:active,.btn.btn-success-outline-text.active{color:#4CA460}.btn.btn-success-outline-text:active svg,.btn.btn-success-outline-text.active svg{stroke:#4CA460}.btn.btn-success-outline-text:disabled,.btn.btn-success-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#BFBBBB}.btn.btn-success-outline-text:disabled svg,.btn.btn-success-outline-text.disabled svg{stroke:#BFBBBB}.btn.btn-success-outline-text svg{stroke:#4CA460}.btn.btn-danger-outline-text{background-color:transparent;color:#CD002F}.btn.btn-danger-outline-text:hover{color:#A2001E}.btn.btn-danger-outline-text:hover svg{stroke:#A2001E}.btn.btn-danger-outline-text:active,.btn.btn-danger-outline-text.active{color:#900021}.btn.btn-danger-outline-text:active svg,.btn.btn-danger-outline-text.active svg{stroke:#900021}.btn.btn-danger-outline-text:disabled,.btn.btn-danger-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#BFBBBB}.btn.btn-danger-outline-text:disabled svg,.btn.btn-danger-outline-text.disabled svg{stroke:#BFBBBB}.btn.btn-danger-outline-text svg{stroke:#CD002F}.btn.btn-warning-outline-text{background-color:transparent;color:#E16B25}.btn.btn-warning-outline-text:hover{color:#E16B25}.btn.btn-warning-outline-text:hover svg{stroke:#E16B25}.btn.btn-warning-outline-text:active,.btn.btn-warning-outline-text.active{color:#E16B25}.btn.btn-warning-outline-text:active svg,.btn.btn-warning-outline-text.active svg{stroke:#E16B25}.btn.btn-warning-outline-text:disabled,.btn.btn-warning-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#BFBBBB}.btn.btn-warning-outline-text:disabled svg,.btn.btn-warning-outline-text.disabled svg{stroke:#BFBBBB}.btn.btn-warning-outline-text svg{stroke:#E16B25}.ifx__btn-icon--before{margin-right:10px}.ifx__btn-icon--after{margin-left:10px}'},4464:function(t,n,o){o.d(n,{c:function(){return e}});var e=(0,o(6385).c)((function(t){!function(){var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)){if(r.length){var s=o.apply(null,r);s&&t.push(s)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){t.push(r.toString());continue}for(var b in r)n.call(r,b)&&r[b]&&t.push(b)}}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):window.classNames=o}()}))}}]);
//# sourceMappingURL=4319.4fd83048.chunk.js.map