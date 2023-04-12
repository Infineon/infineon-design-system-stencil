(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/@infineon/infineon-design-system-stencil/dist/esm/ifx-status.entry.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@infineon/infineon-design-system-stencil/dist/esm/ifx-status.entry.js ***!
  \********************************************************************************************/
/*! exports provided: ifx_status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifx_status", function() { return Status; });
/* harmony import */ var _index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-8aa164cc.js */ "./node_modules/@infineon/infineon-design-system-stencil/dist/esm/index-8aa164cc.js");


const statusCss = ":host{display:inline-block}.container{display:flex;align-items:center;padding:2px 16px;border-radius:100px}.text{font-family:\"Source Sans Pro\";margin:0;padding-left:5px;font-style:normal;font-weight:600;font-size:1rem;line-height:1.25rem;display:inline;color:#1d1d1d}.dot{display:inline-block;width:8px;height:8px;border-radius:50%}.container.border-orange{border:2px solid #f07f3c}.container.border-ocean{border:2px solid #378375}.container.border-grey{border:2px solid #7d6f72}.container.border-grey-200{border:2px solid #ebe9e9}.container.border-red{border:2px solid #cd002f}.container.border-green{border:2px solid #aec067}.container.border-berry{border:2px solid #ab377a}.dot.orange{background-color:#f07f3c}.dot.ocean{background-color:#378375}.dot.grey{background-color:#7d6f72}.dot.grey-200{background-color:#ebe9e9}.dot.red{background-color:#cd002f}.dot.green{background-color:#aec067}.dot.berry{background-color:#ab377a}";

const Status = class {
  constructor(hostRef) {
    Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.text = undefined;
    this.border = false;
    this.color = 'orange';
  }
  render() {
    const borderClass = this.border ? `border-${this.color}` : '';
    return (Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: `container ${borderClass}` }, Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: `dot ${this.color}` }), Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", { class: "text" }, this.text)));
  }
};
Status.style = statusCss;




/***/ })

}]);
//# sourceMappingURL=9.js.map