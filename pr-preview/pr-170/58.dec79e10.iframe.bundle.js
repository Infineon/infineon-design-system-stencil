(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"./dist/esm/ifx-card-headline.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ifx_card_headline",(function(){return CardHeadline}));__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_88b2408d_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./dist/esm/index-88b2408d.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var CardHeadline=function(){function CardHeadline(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,CardHeadline),Object(_index_88b2408d_js__WEBPACK_IMPORTED_MODULE_9__.g)(this,hostRef),this.direction=void 0,this.hasDesc=void 0}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(CardHeadline,[{key:"componentWillLoad",value:function componentWillLoad(){this.el.closest("ifx-card").shadowRoot.querySelector(".card").className.includes("horizontal")&&(this.direction="horizontal"),this.el.closest("ifx-card").querySelector("ifx-card-text")&&(this.hasDesc=!0)}},{key:"render",value:function render(){return Object(_index_88b2408d_js__WEBPACK_IMPORTED_MODULE_9__.e)("div",{class:"card__headline-wrapper "+(this.hasDesc?"withDesc":"")},Object(_index_88b2408d_js__WEBPACK_IMPORTED_MODULE_9__.e)("div",{class:"card-headline "+this.direction},Object(_index_88b2408d_js__WEBPACK_IMPORTED_MODULE_9__.e)("slot",null)))}},{key:"el",get:function get(){return Object(_index_88b2408d_js__WEBPACK_IMPORTED_MODULE_9__.d)(this)}}]),CardHeadline}();CardHeadline.style='.card__headline-wrapper{padding-bottom:16px}.card__headline-wrapper.withDesc{padding-bottom:8px}.card-headline{margin-top:0;padding-top:0;font-family:"Source Sans Pro";font-weight:600;font-size:1.5rem;line-height:32px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.card-headline.horizontal{font-size:1.25rem;line-height:28px}'}}]);