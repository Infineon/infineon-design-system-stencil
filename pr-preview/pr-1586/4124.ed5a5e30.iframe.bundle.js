"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[4124],{"./dist/esm/ifx-icons-preview.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_icons_preview:()=>IconsPreview});var _index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-30c509de.js"),_icons_4575d84a_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/icons-4575d84a.js");const IconsPreview=class{constructor(hostRef){(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.iconsArray=[],this.isCopied=!1,this.copiedIndex=void 0,this.htmlTag='<ifx-icon icon="calendar-16"></ifx-icon>',this.iconName='"c-info-24"'}handleCopiedText(){this.isCopied=!0,setTimeout((()=>{this.isCopied=!1}),2e3)}copyIconText(icon){this.htmlTag=`<ifx-icon icon="${icon}"></ifx-icon>`,this.iconName=`"${icon}"`}copyHtmlString(){const copiedTag=`<ifx-icon icon=${this.iconName}></ifx-icon>`;navigator.clipboard.writeText(copiedTag),this.handleCopiedText()}componentWillLoad(){for(let icon in _icons_4575d84a_js__WEBPACK_IMPORTED_MODULE_1__.i)this.iconsArray.push(icon)}render(){return(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"3ba4104c2885b23a2fdc0b97228538f4eeca20c9",class:"container"},(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"444162701364d6b39e5b0a1db795f4f54dbfd806",class:"html-wrapper"},(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"a502bd97c22b836dcff023381bf3f91c38a1c09e",class:"html-tag"},"<"),(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"8f124b31ac00c97c67b6d9da89f210bdcd419dbc",class:"component-name"},"ifx-icon"),(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"c06dff6e75888c1961f5d78449908a1747b2a2b2",class:"attribute-name"}," icon"),"=",(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"765ec1b2f3a1912fe12d5d66c801902b28273218",class:"attribute-value"},this.iconName),(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"d976a89dd873258f55305211ffa41d40e6145e14",class:"html-tag"},">"),(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"1677b7ce86f0cd068e0a3e99d75ef486f14e6af8",class:"html-tag"},"</"),(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"8ca40f7276afdc99f740b8c8019a7c38a7071200",class:"component-name"},"ifx-icon"),(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"5e29ba84146d98406c8e198ce7712c4b2ab241f5",class:"html-tag"},">"),(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{key:"475c66219e5d3eeffd7261675bbdc21c788dbbdb",onClick:()=>this.copyHtmlString()},this.isCopied?"Copied":"Copy")),(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"5ee4ef33e943825e125ea16a2095f30959ffc8d5",class:"preview__container"},this.iconsArray.map(((icon,index)=>(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"preview__container-item "+(this.isCopied&&this.copiedIndex===index?"copied":""),onClick:()=>this.copyIconText(icon)},(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon}))))))}get el(){return(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};IconsPreview.style='.container{display:flex;flex-direction:column;gap:10px}.html-wrapper{background:rgb(38, 38, 38);padding:20px;color:white;font-family:monospace;position:sticky;top:0;left:0;z-index:99}.html-wrapper button{position:absolute;right:0px;bottom:0px;background:rgba(0, 0, 0, 0.85);color:#C9CDCF;border:0 none;padding:4px 10px;font-size:0.75rem;font-family:"Nunito Sans";font-weight:700;border-top:1px solid rgba(255, 255, 255, 0.1);border-left:1px solid rgba(255, 255, 255, 0.1);margin-left:-1px;border-radius:4px 0 0 0;cursor:pointer}.html-wrapper .component-name{color:#A8FF60}.html-wrapper .attribute-name{color:rgb(150, 203, 254)}.html-wrapper .attribute-value{color:rgb(180, 116, 221)}.preview__container{box-sizing:border-box;display:flex;align-items:center;padding:2px;flex-wrap:wrap;gap:4px}.preview__container .preview__container-item{display:flex;justify-content:center;align-items:center;border:1px solid #f1f1f1;padding:2px;width:50px;height:50px;position:relative}.preview__container .preview__container-item:active{border-color:#378375}.preview__container .preview__container-item:hover{cursor:pointer}.preview__container .preview__container-item.copied::after{z-index:50;content:"copied!";position:absolute;top:0;left:50px;background-color:#000;color:white;padding:3px;border-radius:4px}'}}]);