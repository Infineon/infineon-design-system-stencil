(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/@infineon/infineon-design-system-stencil/dist/esm/infineon-icon-stencil.entry.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@infineon/infineon-design-system-stencil/dist/esm/infineon-icon-stencil.entry.js ***!
  \*******************************************************************************************************/
/*! exports provided: infineon_icon_stencil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infineon_icon_stencil", function() { return InfineonIconStencil; });
/* harmony import */ var _index_ecead46a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-ecead46a.js */ "./node_modules/@infineon/infineon-design-system-stencil/dist/esm/index-ecead46a.js");


const InfineonIconStencil = class {
  constructor(hostRef) {
    Object(_index_ecead46a_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.icon = undefined;
    this.path = undefined;
    this.svgWidth = undefined;
    this.svgHeight = undefined;
    this.pathD = undefined;
    this.svgStroke = undefined;
    this.svgStrokeLinecap = undefined;
    this.svgLineJoin = undefined;
  }
  parseHTML(html) {
    let el = document.createElement("div");
    el.innerHTML = html;
    return el.children;
  }
  componentWillLoad() {
    this.path = this.parseHTML(this.icon.svgContent);
    this.svgWidth = this.icon.width;
    this.svgHeight = this.icon.height;
    this.pathD = this.path[0].attributes[3].nodeValue;
    this.svgStroke = this.path[0].attributes[0].nodeValue;
    this.svgStrokeLinecap = this.path[0].attributes[1].nodeValue;
    this.svgLineJoin = this.path[0].attributes[2].nodeValue;
  }
  render() {
    return (Object(_index_ecead46a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "svg-wrapper" }, Object(_index_ecead46a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { class: "inline-svg", width: this.svgWidth, height: this.svgHeight, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16" }, Object(_index_ecead46a_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { stroke: this.svgStroke, "stroke-linecap": this.svgStrokeLinecap, "stroke-linejoin": this.svgLineJoin, d: this.pathD }))));
  }
};




/***/ })

}]);
//# sourceMappingURL=2.js.map