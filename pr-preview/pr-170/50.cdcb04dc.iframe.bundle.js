(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"./dist/esm/ifx-range.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ifx_range",(function(){return IfxRange}));__webpack_require__("./node_modules/core-js/modules/es.parse-int.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_88b2408d_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/esm/index-88b2408d.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var IfxRange=function(){function IfxRange(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,IfxRange),Object(_index_88b2408d_js__WEBPACK_IMPORTED_MODULE_8__.g)(this,hostRef),this.valueChanged=Object(_index_88b2408d_js__WEBPACK_IMPORTED_MODULE_8__.c)(this,"valueChanged",7),this.min=0,this.max=100,this.value=0,this.disabled=!1,this.showPercentage=!1,this.leftIcon=void 0,this.rightIcon=void 0,this.leftText=void 0,this.rightText=void 0}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(IfxRange,[{key:"handleInputChange",value:function handleInputChange(event){var target=event.target;this.value=parseInt(target.value),this.valueChanged.emit(this.value),this.updateValuePercent()}},{key:"updateValuePercent",value:function updateValuePercent(){if(this.inputRef){var percent=(this.value-this.min)/(this.max-this.min)*100;this.inputRef.style.setProperty("--value-percent",percent+"%")}}},{key:"componentDidLoad",value:function componentDidLoad(){this.updateValuePercent()}},{key:"render",value:function render(){var _this=this;return Object(_index_88b2408d_js__WEBPACK_IMPORTED_MODULE_8__.e)("div",{class:"ifx-range"},this.leftText&&Object(_index_88b2408d_js__WEBPACK_IMPORTED_MODULE_8__.e)("span",{class:"left-text"+(this.disabled?" disabled":"")},this.leftText),this.leftIcon&&Object(_index_88b2408d_js__WEBPACK_IMPORTED_MODULE_8__.e)("ifx-icon",{icon:this.leftIcon,class:"left-icon"+(this.disabled?" disabled":"")}),Object(_index_88b2408d_js__WEBPACK_IMPORTED_MODULE_8__.e)("input",{type:"range",min:this.min,max:this.max,disabled:this.disabled,value:this.value,ref:function ref(el){return _this.inputRef=el},onInput:function onInput(event){return _this.handleInputChange(event)}}),this.rightIcon&&Object(_index_88b2408d_js__WEBPACK_IMPORTED_MODULE_8__.e)("ifx-icon",{icon:this.rightIcon,class:"right-icon"+(this.disabled?" disabled":"")}),this.rightText&&Object(_index_88b2408d_js__WEBPACK_IMPORTED_MODULE_8__.e)("span",{class:"right-text"+(this.disabled?" disabled":"")},this.rightText),this.showPercentage&&Object(_index_88b2408d_js__WEBPACK_IMPORTED_MODULE_8__.e)("span",{class:"percentage-display"+(this.disabled?" disabled":"")},this.value,"%"))}}]),IfxRange}();IfxRange.style=':host{display:inline-block}.dot{display:inline-block;width:8px;height:8px;border-radius:50%}.left-icon,.right-icon,.left-text,.right-text,.percentage-display{font-family:"Source Sans Pro";font-size:0.8125rem;color:#7d6f72;margin-left:8px}.left-icon.disabled,.right-icon.disabled,.left-text.disabled,.right-text.disabled,.percentage-display.disabled{color:#dcd5d7}.left-icon,.left-text{margin-right:8px}.right-icon,.right-text,.percentage-display{margin-left:8px}.ifx-range{display:flex;align-items:center;padding:2px 16px;border-radius:100px}.ifx-range input[type=range]{-webkit-appearance:none;width:100%;height:3px;background:linear-gradient(to right, #378375 0%, #378375 var(--value-percent, 0%), #ebe9e9 var(--value-percent, 0%), #ebe9e9 100%);outline:none;cursor:pointer;transition:0.2s}.ifx-range input[type=range]:disabled{background:#dcd5d7;cursor:default}.ifx-range input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:#378375;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-range input[type=range]::-webkit-slider-thumb:hover{box-shadow:0px 1px 4px rgba(0, 0, 0, 0.4);background:#2d6357}.ifx-range input[type=range]::-webkit-slider-thumb:active{box-shadow:0px 1px 6px rgba(0, 0, 0, 0.6);background:#28594e}.ifx-range input[type=range]::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#378375;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-range input[type=range]::-moz-range-thumb:hover{box-shadow:0px 1px 4px rgba(0, 0, 0, 0.4);background:#2d6357}.ifx-range input[type=range]::-moz-range-thumb:active{box-shadow:0px 1px 6px rgba(0, 0, 0, 0.6);background:#28594e}'},"./node_modules/core-js/internals/number-parse-int.js":function(module,exports,__webpack_require__){var global=__webpack_require__("./node_modules/core-js/internals/global.js"),fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),toString=__webpack_require__("./node_modules/core-js/internals/to-string.js"),trim=__webpack_require__("./node_modules/core-js/internals/string-trim.js").trim,whitespaces=__webpack_require__("./node_modules/core-js/internals/whitespaces.js"),$parseInt=global.parseInt,Symbol=global.Symbol,ITERATOR=Symbol&&Symbol.iterator,hex=/^[+-]?0x/i,exec=uncurryThis(hex.exec),FORCED=8!==$parseInt(whitespaces+"08")||22!==$parseInt(whitespaces+"0x16")||ITERATOR&&!fails((function(){$parseInt(Object(ITERATOR))}));module.exports=FORCED?function parseInt(string,radix){var S=trim(toString(string));return $parseInt(S,radix>>>0||(exec(hex,S)?16:10))}:$parseInt},"./node_modules/core-js/modules/es.parse-int.js":function(module,exports,__webpack_require__){var $=__webpack_require__("./node_modules/core-js/internals/export.js"),$parseInt=__webpack_require__("./node_modules/core-js/internals/number-parse-int.js");$({global:!0,forced:parseInt!=$parseInt},{parseInt:$parseInt})}}]);