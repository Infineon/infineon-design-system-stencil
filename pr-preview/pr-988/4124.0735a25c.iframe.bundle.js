"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[4124],{"./dist/esm/ifx-icons-preview.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_icons_preview:()=>IconsPreview});var _index_b1722db8_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-b1722db8.js"),_icons_4575d84a_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/icons-4575d84a.js");const IconsPreview=class{constructor(hostRef){(0,_index_b1722db8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.iconsArray=[],this.isCopied=!1,this.copiedIndex=void 0,this.htmlTag='<ifx-icon icon="calendar-16"></ifx-icon>',this.iconName='"c-info-24"'}handleCopiedText(){this.isCopied=!0,setTimeout((()=>{this.isCopied=!1}),2e3)}copyIconText(icon){this.htmlTag=`<ifx-icon icon="${icon}"></ifx-icon>`,this.iconName=`"${icon}"`}copyHtmlString(){const copiedTag=`<ifx-icon icon=${this.iconName}></ifx-icon>`;navigator.clipboard.writeText(copiedTag),this.handleCopiedText()}componentWillLoad(){for(let icon in _icons_4575d84a_js__WEBPACK_IMPORTED_MODULE_1__.i)this.iconsArray.push(icon)}render(){return(0,_index_b1722db8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"3afe399c77b88aa8248e0a6a620948a550492ab0",class:"container"},(0,_index_b1722db8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"1e5e019d8710f8fe460b4a75fc0ac356b728a37c",class:"html-wrapper"},(0,_index_b1722db8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"da04d9b530617219986d07ba8ab3ce9ab5ee6baa",class:"html-tag"},"<"),(0,_index_b1722db8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"929d7cec2596f2e073dadda65481315ee3b3f389",class:"component-name"},"ifx-icon"),(0,_index_b1722db8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"f8ab7b9ffc1103bacffd48abc7e6701db4e3ba00",class:"attribute-name"}," icon"),"=",(0,_index_b1722db8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"803df0492947d5070233eb0c0232ab10104bd58f",class:"attribute-value"},this.iconName),(0,_index_b1722db8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"3f1002753c8f4b207a02cb05514cae282da7f125",class:"html-tag"},">"),(0,_index_b1722db8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"cd47b272274522beb3297d469f3cde612b187e2d",class:"html-tag"},"</"),(0,_index_b1722db8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"f1556efd2b3999cd82ae4ea9d057e888cd57cc1e",class:"component-name"},"ifx-icon"),(0,_index_b1722db8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"045f9b4f2c8347eafacab2bbed8d84f39891f02a",class:"html-tag"},">"),(0,_index_b1722db8_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{key:"1779825dbe38d787aa1e71ff9369b428eecbdde2",onClick:()=>this.copyHtmlString()},this.isCopied?"Copied":"Copy")),(0,_index_b1722db8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"bd519d868ea8c82045a1f412d44c27b498baa013",class:"preview__container"},this.iconsArray.map(((icon,index)=>(0,_index_b1722db8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"preview__container-item "+(this.isCopied&&this.copiedIndex===index?"copied":""),onClick:()=>this.copyIconText(icon)},(0,_index_b1722db8_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon}))))))}get el(){return(0,_index_b1722db8_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};IconsPreview.style='.container{display:flex;flex-direction:column;gap:10px}.html-wrapper{background:rgb(38, 38, 38);padding:20px;color:white;font-family:monospace;position:sticky;top:0;left:0;z-index:99}.html-wrapper button{position:absolute;right:0px;bottom:0px;background:rgba(0, 0, 0, 0.85);color:#C9CDCF;border:0 none;padding:4px 10px;font-size:0.75rem;font-family:"Nunito Sans";font-weight:700;border-top:1px solid rgba(255, 255, 255, 0.1);border-left:1px solid rgba(255, 255, 255, 0.1);margin-left:-1px;border-radius:4px 0 0 0;cursor:pointer}.html-wrapper .component-name{color:#A8FF60}.html-wrapper .attribute-name{color:rgb(150, 203, 254)}.html-wrapper .attribute-value{color:rgb(180, 116, 221)}.preview__container{box-sizing:border-box;display:flex;align-items:center;padding:2px;flex-wrap:wrap;gap:4px}.preview__container .preview__container-item{display:flex;justify-content:center;align-items:center;border:1px solid #f1f1f1;padding:2px;width:50px;height:50px;position:relative}.preview__container .preview__container-item:active{border-color:#378375}.preview__container .preview__container-item:hover{cursor:pointer}.preview__container .preview__container-item.copied::after{z-index:50;content:"copied!";position:absolute;top:0;left:50px;background-color:#000;color:white;padding:3px;border-radius:4px}'}}]);