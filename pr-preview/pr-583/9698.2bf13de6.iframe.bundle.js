/*! For license information please see 9698.2bf13de6.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[9698],{"./dist/esm/_commonjsHelpers-e9b9b14e.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getDefaultExportFromCjs(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}__webpack_require__.d(__webpack_exports__,{c:()=>createCommonjsModule,g:()=>getDefaultExportFromCjs})},"./dist/esm/ifx-link.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_link:()=>Link});var _index_f31c492a_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-f31c492a.js"),_index_3c58b0c1_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/index-3c58b0c1.js");const Link=class{constructor(hostRef){(0,_index_f31c492a_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.href=void 0,this.target="_self",this.size=void 0,this.variant="bold"}render(){return(0,_index_f31c492a_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{href:this.href,target:this.target,class:this.linkClassNames()},(0,_index_f31c492a_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}getSizeClass(){const small="s"===this.size?"small":null,medium="m"===this.size?"medium":null,large="l"===this.size?"large":null,extraLarge="xl"===this.size?"extraLarge":null;return small||(medium||(large||(extraLarge&&"underlined"===this.variant?"large":extraLarge&&"underlined"!==this.variant?extraLarge:"")))}getVariantClass(){const bold="bold"===this.variant?"bold":null,title="title"===this.variant?"title":null,underlined="underlined"===this.variant?"underlined":null,menu="menu"===this.variant?"menu":null;return bold||(title||(underlined||(menu||bold)))}linkClassNames(){return(0,_index_3c58b0c1_js__WEBPACK_IMPORTED_MODULE_1__.c)("link","primary",this.getVariantClass(),this.getSizeClass())}};Link.style='*{font-family:"Source Sans 3"}:host{display:inline-flex}.link{display:inline-flex;align-items:center;font-weight:400;font-size:1rem;text-decoration:none;color:#0A8276;gap:8px;line-height:1.6}.link:focus{outline-width:2px;outline-style:solid;outline-color:#0A8276;outline-offset:2px;border-radius:3px}.link.bold{font-weight:600}.link.bold:hover{text-decoration:underline}.link.bold:active{color:#08665C;font-style:normal;font-weight:600;text-decoration:underline}.link.underlined{text-decoration:underline;text-decoration-color:#0A8276;color:#1D1D1D}.link.underlined:hover{color:#0A8276}.link.underlined:active{color:#0A8276}.link.title{text-decoration:none;font-weight:600;color:#1D1D1D}.link.title:hover{color:#0A8276}.link.title:active{color:#08665C}.link.menu{font-weight:400;font-style:normal;line-height:26px;color:#1D1D1D}.link.menu:hover{color:#0A8276}.link.menu:active{color:#08665C}.link.small{font-size:0.875rem}.link.medium{font-size:1rem}.link.large{font-size:1.125rem}.link.extraLarge{font-size:1.25rem}.link.underline{text-decoration:underline}'},"./dist/esm/index-3c58b0c1.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>classnames});var classnames=(0,__webpack_require__("./dist/esm/_commonjsHelpers-e9b9b14e.js").c)((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))}}]);