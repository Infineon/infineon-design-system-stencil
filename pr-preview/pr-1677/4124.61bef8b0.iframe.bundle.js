"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[4124],{"./dist/esm/ifx-icons-preview.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_icons_preview:()=>IconsPreview});var _index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-dc4139fb.js"),_icons_4575d84a_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/icons-4575d84a.js");const IconsPreview=class{constructor(hostRef){(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.iconsArray=[],this.isCopied=!1,this.copiedIndex=void 0,this.htmlTag='<ifx-icon icon="calendar-16"></ifx-icon>',this.iconName='"c-info-24"'}handleCopiedText(){this.isCopied=!0,setTimeout((()=>{this.isCopied=!1}),2e3)}copyIconText(icon){this.htmlTag=`<ifx-icon icon="${icon}"></ifx-icon>`,this.iconName=`"${icon}"`}copyHtmlString(){const copiedTag=`<ifx-icon icon=${this.iconName}></ifx-icon>`;navigator.clipboard.writeText(copiedTag),this.handleCopiedText()}componentWillLoad(){for(let icon in _icons_4575d84a_js__WEBPACK_IMPORTED_MODULE_1__.i)this.iconsArray.push(icon)}render(){return(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"1115df3774a76b620e5a03e11bd3ef59e5ff05fd",class:"container"},(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"18a2839c3a492c31215bbbb29cbcd3c0fea50bf0",class:"html-wrapper"},(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"488ae76fd009a5fa0c9aaf2727deaa33cae3e3a1",class:"html-tag"},"<"),(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"b8e95423cc15694f066d47b29dc03f6b41ff82fe",class:"component-name"},"ifx-icon"),(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"7b87f22cbb47743521365708561b9f1eba8cdf32",class:"attribute-name"}," icon"),"=",(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"13ec8254b12497b899b8960e26edf219205dbc36",class:"attribute-value"},this.iconName),(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"6ae1377d4f1ba39b8e59a86da834e783bc343bb9",class:"html-tag"},">"),(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"017d823522230476dded7323580c5e288c75cb47",class:"html-tag"},"</"),(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"cd9091d4d3de72c0495c17097d0bcce5a9234441",class:"component-name"},"ifx-icon"),(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"408b285174e12b46b9e3c2f8e413f5914c8fa62d",class:"html-tag"},">"),(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{key:"ce263f21f91373c8bc2f697fc876c72611297f0f",onClick:()=>this.copyHtmlString()},this.isCopied?"Copied":"Copy")),(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"400251cc2a3dc9aaa646ad631fd37b142aa83381",class:"preview__container"},this.iconsArray.map(((icon,index)=>(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"preview__container-item "+(this.isCopied&&this.copiedIndex===index?"copied":""),onClick:()=>this.copyIconText(icon)},(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon}))))))}get el(){return(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};IconsPreview.style='.container{display:flex;flex-direction:column;gap:10px}.html-wrapper{background:rgb(38, 38, 38);padding:20px;color:white;font-family:monospace;position:sticky;top:0;left:0;z-index:99}.html-wrapper button{position:absolute;right:0px;bottom:0px;background:rgba(0, 0, 0, 0.85);color:#C9CDCF;border:0 none;padding:4px 10px;font-size:0.75rem;font-family:"Nunito Sans";font-weight:700;border-top:1px solid rgba(255, 255, 255, 0.1);border-left:1px solid rgba(255, 255, 255, 0.1);margin-left:-1px;border-radius:4px 0 0 0;cursor:pointer}.html-wrapper .component-name{color:#A8FF60}.html-wrapper .attribute-name{color:rgb(150, 203, 254)}.html-wrapper .attribute-value{color:rgb(180, 116, 221)}.preview__container{box-sizing:border-box;display:flex;align-items:center;padding:2px;flex-wrap:wrap;gap:4px}.preview__container .preview__container-item{display:flex;justify-content:center;align-items:center;border:1px solid #f1f1f1;padding:2px;width:50px;height:50px;position:relative}.preview__container .preview__container-item:active{border-color:#378375}.preview__container .preview__container-item:hover{cursor:pointer}.preview__container .preview__container-item.copied::after{z-index:50;content:"copied!";position:absolute;top:0;left:50px;background-color:#000;color:white;padding:3px;border-radius:4px}'}}]);