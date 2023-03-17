(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/@infineon/infineon-design-system-stencil/dist/esm/ifx-card.entry.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@infineon/infineon-design-system-stencil/dist/esm/ifx-card.entry.js ***!
  \******************************************************************************************/
/*! exports provided: ifx_card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifx_card", function() { return Card; });
/* harmony import */ var _index_ecead46a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-ecead46a.js */ "./node_modules/@infineon/infineon-design-system-stencil/dist/esm/index-ecead46a.js");


const cardCss = ":host{--background:white --radius: 1px}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid #ebe9e9;border-radius:1px;width:22rem}.img-fluid{max-width:100%;height:auto}.card-body{flex:1 1 auto;padding:24px 24px}.card-subtitle{font-size:1rem;font-weight:400;color:#343a40;margin-top:0;margin-bottom:4px;font-family:\"Source Sans Pro\";line-height:1.2}.card-title{margin-top:0;margin-bottom:0.5rem;font-family:\"Source Sans Pro\";font-weight:600;line-height:1.2}p{margin-top:0;margin-bottom:1rem}.card-text:last-child{margin-bottom:0}.card .list-group .list-group-item{padding-left:24px;padding-right:24px}.card-subtitle{font-size:1rem;font-weight:400;color:#7d6f72;margin-top:0;margin-bottom:4px}.card-title{font-size:1.5rem}.card-body .badge{margin-bottom:16px}.card>.list-group{border-top:inherit}.list-group{max-width:350px;border-radius:1px}.list-group .list-group-item{padding:8px 16px;color:#1d1d1d}.list-group .list-group-item:hover{background-color:#ebe9e9}.list-group .list-group-item.active{color:#ffffff;background-color:#378375;border-color:#ebe9e9}.list-group .badge{color:#ffffff;padding:2px 8px}.list-group-item{border:1px solid #ebe9e9}.ifx__list-group-heading{font-weight:600;line-height:20px;color:#378375;padding-bottom:11px}.active .ifx__list-group-heading{color:#ffffff}.ifx__list-group-date{font-size:13px;line-height:20px;color:#378375}.active .ifx__list-group-date{color:#ffffff}.active .badge{color:#378375}.ifx__list-group-notification .list-group-item{padding:16px}.list-group.ifx__list-group-bulletpoints .list-group-item{display:list-item;list-style-position:inside}.list-group-flush>.list-group-item{border-width:0 0 1px}.list-group-item{border:1px solid #ebe9e9}.list-group-item{position:relative;display:block;text-decoration:none;background-color:#fff}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.ifx__list-icon{padding-left:0}.ifx__list-icon ul{padding-left:0}.ifx__list-icon li{position:relative;list-style-type:none;padding-left:2em}.ifx__list-icon--check li:before{content:\"\";position:absolute;left:0.25em;top:0.25em;height:1.25em;width:1.25em;background-size:contain;background-repeat:no-repeat;background-position:center;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='20' width='20' fill='%231d1d1d' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M443.3 100.7C449.6 106.9 449.6 117.1 443.3 123.3L171.3 395.3C165.1 401.6 154.9 401.6 148.7 395.3L4.686 251.3C-1.562 245.1-1.562 234.9 4.686 228.7C10.93 222.4 21.06 222.4 27.31 228.7L160 361.4L420.7 100.7C426.9 94.44 437.1 94.44 443.3 100.7H443.3z'/%3E%3C/svg%3E\")}";

const Card = class {
  constructor(hostRef) {
    Object(_index_ecead46a_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.skyline = undefined;
    this.headline = undefined;
    this.subtitle = undefined;
    this.text = undefined;
    this.button = undefined;
    this.list = undefined;
  }
  render() {
    return (Object(_index_ecead46a_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_ecead46a_js__WEBPACK_IMPORTED_MODULE_0__["a"], null, Object(_index_ecead46a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "card" }, Object(_index_ecead46a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "card-body" }, Object(_index_ecead46a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { part: "img" }, Object(_index_ecead46a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "img" })), `${this.skyline}` === "true"
      ? Object(_index_ecead46a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "card-subtitle" }, this.subtitle)
      : null, Object(_index_ecead46a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "card-title" }, this.headline), Object(_index_ecead46a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", { class: "card-text" }, this.text), Object(_index_ecead46a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { part: "action" }, this.button
      ? Object(_index_ecead46a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "action" })
      : "")), `${this.list}` === "true"
      ? Object(_index_ecead46a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "list-group list-group-flush" }, Object(_index_ecead46a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "list-group-item" }, "An item"), Object(_index_ecead46a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "list-group-item" }, "A second item"), Object(_index_ecead46a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "list-group-item" }, "A third item"))
      : null)));
  }
};
Card.style = cardCss;




/***/ })

}]);
//# sourceMappingURL=1.js.map