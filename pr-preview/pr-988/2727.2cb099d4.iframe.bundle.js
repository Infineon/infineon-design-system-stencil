/*! For license information please see 2727.2cb099d4.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[2727],{"./dist/esm/ifx-link.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_link:()=>Link});var _index_b1722db8_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-b1722db8.js"),_index_72ac5051_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/index-72ac5051.js");const Link=class{constructor(hostRef){(0,_index_b1722db8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.href=void 0,this.target="_self",this.variant="bold",this.size=void 0,this.disabled=!1,this.internalHref="",this.internalTarget="",this.internalVariant=""}setInternalStates(){this.href?this.internalHref=this.href.trim():this.internalHref=void 0,this.internalTarget=this.target.trim(),this.internalVariant=this.variant.trim().toLowerCase()}componentWillRender(){this.setInternalStates()}render(){return(0,_index_b1722db8_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{key:"c9f027bc20969c90772a98287babc63d9685a8f0","aria-label":"a navigation link button",href:this.internalHref,target:this.internalTarget,class:this.linkClassNames()},(0,_index_b1722db8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"7979bd305f1d2205eaf1156a1190557bfebf6b94"}))}getSizeClass(){const small="s"===this.size?"small":null,medium="m"===this.size?"medium":null,large="l"===this.size?"large":null,extraLarge="xl"===this.size?"extraLarge":null;return small||(medium||(large||(extraLarge&&"underlined"===this.internalVariant?"large":extraLarge&&"underlined"!==this.internalVariant?extraLarge:"")))}getVariantClass(){const bold="bold"===this.internalVariant?"bold":null,title="title"===this.internalVariant?"title":null,underlined="underlined"===this.internalVariant?"underlined":null,menu="menu"===this.internalVariant?"menu":null;return bold||(title||(underlined||(menu||bold)))}linkClassNames(){return(0,_index_72ac5051_js__WEBPACK_IMPORTED_MODULE_1__.c)("link","primary",this.getVariantClass(),this.getSizeClass(),this.disabled?"disabled":"")}};Link.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.link{display:inline-flex;align-items:center;font-weight:400;font-size:1rem;text-decoration:none;color:#0A8276;gap:8px;line-height:1.6;font-family:var(--ifx-font-family)}.link:focus{outline-width:2px;outline-style:solid;outline-color:#0A8276;outline-offset:4px;border-radius:3px}.link.bold{font-weight:600}.link.bold:hover{text-decoration:underline}.link.bold:active{color:#08665C;font-style:normal;font-weight:600;text-decoration:underline}.link.underlined{text-decoration:underline;text-decoration-color:#0A8276;color:#1D1D1D;text-underline-offset:8px}.link.underlined:hover{color:#0A8276}.link.underlined:active{color:#0A8276}.link.underlined:disabled,.link.underlined.disabled{text-decoration-color:#BFBBBB}.link.title{text-decoration:none;font-weight:600;color:#1D1D1D}.link.title:hover{color:#0A8276}.link.title:active{color:#08665C}.link.menu{font-weight:400;font-style:normal;line-height:26px;color:#1D1D1D}.link.menu:hover{color:#0A8276}.link.menu:active{color:#08665C}.link.small{font-size:0.875rem}.link.medium{font-size:1rem}.link.large{font-size:1.125rem}.link.extraLarge{font-size:1.25rem}.link.underline{text-decoration:underline}.link:disabled,.link.disabled{color:#BFBBBB;cursor:default;pointer-events:none}'},"./dist/esm/index-72ac5051.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>classNames});var module,classnames={exports:{}};module=classnames,function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}();const classNames=classnames.exports}}]);