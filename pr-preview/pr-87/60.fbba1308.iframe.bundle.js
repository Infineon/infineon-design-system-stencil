(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"./dist/esm/ifx-progress-bar.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ifx_progress_bar",(function(){return ProgressBar}));__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/esm/index-2a2fcfb8.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var ProgressBar=function(){function ProgressBar(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ProgressBar),Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_7__.g)(this,hostRef),this.percentageChange=Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_7__.c)(this,"percentageChange",7),this.percentage=0,this.label="",this.size=void 0,this.showLabel=!1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(ProgressBar,[{key:"onPercentageChanged",value:function onPercentageChanged(newValue){this.percentageChange.emit(newValue)}},{key:"render",value:function render(){return Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_7__.e)("div",{class:"progress-bar "+this.size},Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_7__.e)("div",{class:"progress",style:{width:this.percentage+"%"}},this.showLabel&&"s"!==this.size&&Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_7__.e)("span",{class:"label"},this.percentage+"%")))}}],[{key:"watchers",get:function get(){return{percentage:["onPercentageChanged"]}}}]),ProgressBar}();ProgressBar.style='.progress-bar{height:16px;border-radius:1px;bottom:0;right:0;top:0;left:0}.progress-bar .label{height:17px;border-radius:1px 0px 0px 1px}.progress-bar.s{height:4px}.progress-bar .progress{height:100%;background-color:#0A8276;position:relative}.progress-bar .progress:after{content:"";background-color:#EEEDED;height:100%;position:absolute}.progress-bar .label{display:flex;align-items:center;justify-content:center;position:absolute;font-style:normal;font-weight:400;font-size:14px;line-height:20px;font-family:"Source Sans Pro";color:#fff;top:0;bottom:0;left:0;right:0}'}}]);