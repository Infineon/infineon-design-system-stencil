(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"./dist/esm/ifx-icons-preview.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ifx_icons_preview",(function(){return IconsPreview}));__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./dist/esm/index-2a2fcfb8.js"),_icons_4163e6b2_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./dist/esm/icons-4163e6b2.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var IconsPreview=function(){function IconsPreview(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,IconsPreview),Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_9__.g)(this,hostRef),this.iconsArray=[],this.isCopied=!1,this.copiedIndex=void 0}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(IconsPreview,[{key:"handleToolTip",value:function handleToolTip(index){var _this=this;this.isCopied=!0,this.copiedIndex=index,setTimeout((function(){_this.isCopied=!1}),2e3)}},{key:"copyIconText",value:function copyIconText(icon,index){navigator.clipboard.writeText(icon),this.handleToolTip(index)}},{key:"componentWillLoad",value:function componentWillLoad(){for(var icon in _icons_4163e6b2_js__WEBPACK_IMPORTED_MODULE_10__.b)this.iconsArray.push(icon)}},{key:"render",value:function render(){var _this2=this;return Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_9__.e)("div",{class:"preview__container"},this.iconsArray.map((function(icon,index){return Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_9__.e)("div",{class:"preview__container-item "+(_this2.isCopied&&_this2.copiedIndex===index?"copied":""),onClick:function onClick(){return _this2.copyIconText(icon,index)}},Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_9__.e)("ifx-icon",{icon:icon}))})))}},{key:"el",get:function get(){return Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_9__.d)(this)}}]),IconsPreview}();IconsPreview.style='.preview__container{box-sizing:border-box;display:flex;align-items:center;padding:2px;flex-wrap:wrap;gap:4px}.preview__container .preview__container-item{display:flex;justify-content:center;align-items:center;border:1px solid #f1f1f1;padding:2px;width:50px;height:50px;position:relative}.preview__container .preview__container-item:active{border-color:#378375}.preview__container .preview__container-item:hover{cursor:pointer}.preview__container .preview__container-item.copied::after{z-index:10000;content:"copied!";position:absolute;top:0;left:50px;background-color:#000;color:white;padding:3px;border-radius:4px}'}}]);