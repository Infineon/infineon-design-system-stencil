(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/@infineon/infineon-design-system-stencil/dist/esm/ifx-tag.entry.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@infineon/infineon-design-system-stencil/dist/esm/ifx-tag.entry.js ***!
  \*****************************************************************************************/
/*! exports provided: ifx_tag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifx_tag", function() { return Tag; });
/* harmony import */ var _index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-8aa164cc.js */ "./node_modules/@infineon/infineon-design-system-stencil/dist/esm/index-8aa164cc.js");


const tagCss = ":host{display:inline-block}.container{display:flex;align-items:center;padding:2px 16px;border:1px solid #dcd5d7;border-radius:100px;text-decoration:none}.container:hover{border-color:#1d1d1d}.container:active{border-color:#1d1d1d;background-color:#fafafa}.text{font-family:\"Source Sans Pro\";margin:0;font-weight:400;font-size:1rem;line-height:1.5rem;color:#1d1d1d}";

const Tag = class {
  constructor(hostRef) {
    Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.text = undefined;
  }
  render() {
    return (Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "javascript:void(null);", class: `container` }, Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", { class: "text" }, this.text)));
  }
};
Tag.style = tagCss;




/***/ })

}]);
//# sourceMappingURL=10.js.map