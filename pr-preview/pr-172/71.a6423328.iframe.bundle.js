(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"./dist/esm/ifx-multi-select-input-item.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ifx_multi_select_input_item",(function(){return MultiSelectInputItem}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_940739b3_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/esm/index-940739b3.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var MultiSelectInputItem=function(){function MultiSelectInputItem(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,MultiSelectInputItem),Object(_index_940739b3_js__WEBPACK_IMPORTED_MODULE_8__.g)(this,hostRef),this.closed=Object(_index_940739b3_js__WEBPACK_IMPORTED_MODULE_8__.c)(this,"closed",3),this.content=""}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(MultiSelectInputItem,[{key:"handleCloseButton",value:function handleCloseButton(){this.closed.emit(this.el)}},{key:"handleSelectItem",value:function handleSelectItem(event){event.stopPropagation()}},{key:"render",value:function render(){return Object(_index_940739b3_js__WEBPACK_IMPORTED_MODULE_8__.e)("div",{class:"multiSelectInput__item-container",onClick:this.handleSelectItem.bind(this)},Object(_index_940739b3_js__WEBPACK_IMPORTED_MODULE_8__.e)("div",{class:"multiSelectInput__item-content"},this.content),Object(_index_940739b3_js__WEBPACK_IMPORTED_MODULE_8__.e)("div",{class:"multiSelectInput__item-icon"},Object(_index_940739b3_js__WEBPACK_IMPORTED_MODULE_8__.e)("ifx-icon",{onClick:this.handleCloseButton.bind(this),icon:"cross-12"})))}},{key:"el",get:function get(){return Object(_index_940739b3_js__WEBPACK_IMPORTED_MODULE_8__.d)(this)}}]),MultiSelectInputItem}();MultiSelectInputItem.style=":host{flex-shrink:0}.multiSelectInput__item-container{position:relative;display:flex;justify-content:space-between;align-items:center;gap:6px;border:1px solid;border-radius:4px;padding:0 8px;flex-shrink:0}.multiSelectInput__item-container .multiSelectInput__item-content{display:flex;align-items:center;flex-shrink:0}.multiSelectInput__item-container .multiSelectInput__item-icon{display:flex;align-items:center}.multiSelectInput__item-container .multiSelectInput__item-icon ifx-icon svg{width:10px}"}}]);