(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/@infineon/infineon-design-system-stencil/dist/esm/ifx-card_6.entry.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@infineon/infineon-design-system-stencil/dist/esm/ifx-card_6.entry.js ***!
  \********************************************************************************************/
/*! exports provided: ifx_card, ifx_card_headline, ifx_card_overline, ifx_card_text, ifx_icon, ifx_link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifx_card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifx_card_headline", function() { return CardHeadline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifx_card_overline", function() { return CardOverline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifx_card_text", function() { return CardText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifx_icon", function() { return InfineonIconStencil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifx_link", function() { return Link; });
/* harmony import */ var _index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-8aa164cc.js */ "./node_modules/@infineon/infineon-design-system-stencil/dist/esm/index-8aa164cc.js");


const indexCss$1 = "@font-face{font-family:\"Source Sans Pro\";font-style:normal;font-weight:400;src:local(\"\"),url(\"fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-regular.woff2\") format(\"woff2\"),url(\"fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-regular.woff\") format(\"woff\")}@font-face{font-family:\"Source Sans Pro\";font-style:normal;font-weight:600;src:local(\"\"),url(\"fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-600.woff2\") format(\"woff2\"),url(\"fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-600.woff\") format(\"woff\")}@font-face{font-family:\"Source Sans Pro\";font-style:normal;font-weight:700;src:local(\"\"),url(\"fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-700.woff2\") format(\"woff2\"),url(\"fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-700.woff\") format(\"woff\")}*{box-sizing:border-box;line-height:1.75;font-family:\"Source Sans Pro\"}.btn{display:inline-flex;align-items:center;min-width:80px;min-height:40px;padding:0px 16px;gap:8px;color:#FFFFFF;flex-direction:row;font-weight:600;border-radius:1px;line-height:24px;outline:none;font-family:\"Source Sans Pro\";text-decoration:none;user-select:none;border:1px solid rgba(0, 0, 0, 0);font-size:1rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.btn:not(.disabled){cursor:pointer}.btn-primary{color:#ffffff;background-color:#378375;border-color:#378375}.btn-outline-primary{background-color:#ffffff;color:#378375;border-color:#378375}.btn-secondary{color:#ffffff;background-color:#ab377a;border-color:#ab377a}.btn-outline-secondary{background-color:#ffffff;color:#ab377a;border-color:#ab377a}.btn-success{color:#1d1d1d;background-color:#aec067;border-color:#aec067}.btn-outline-success{background-color:#ffffff;border-color:#aec067}.btn-danger{color:#ffffff;background-color:#cd002f;border-color:#cd002f}.btn-outline-danger{background-color:#ffffff;color:#cd002f;border-color:#cd002f}.btn-warning{color:#1d1d1d;background-color:#f07f3c;border-color:#f07f3c}.btn-outline-warning{background-color:#ffffff;border-color:#f07f3c}.btn.btn-s{font-size:0.8125rem;min-width:71px;min-height:32px;line-height:16px}.btn.icon-button{min-width:initial;min-height:initial;width:40px;height:40px;padding:0;justify-content:center}.btn.icon-button.btn-round{border-radius:100px}.btn.icon-button.btn-square{border-radius:1px}.btn.icon-button.btn-s{width:32px;height:32px}.btn.btn-primary:focus,.btn.btn-outline-primary:focus,.btn.btn-secondary:focus,.btn.btn-outline-secondary:focus,.btn.btn-success:focus,.btn.btn-outline-success:focus,.btn.btn-danger:focus,.btn.btn-outline-danger:focus,.btn.btn-warning:focus,.btn.btn-outline-warning:focus,.btn.btn-outline-text:focus{box-shadow:none}.btn.btn-primary:focus-visible,.btn.btn-outline-primary:focus-visible,.btn.btn-secondary:focus-visible,.btn.btn-outline-secondary:focus-visible,.btn.btn-success:focus-visible,.btn.btn-outline-success:focus-visible,.btn.btn-danger:focus-visible,.btn.btn-outline-danger:focus-visible,.btn.btn-warning:focus-visible,.btn.btn-outline-warning:focus-visible,.btn.btn-outline-text:focus-visible{box-shadow:0 0 0 3px #B4DDD8}.btn:disabled,.btn.disabled{opacity:1;background-color:#dcd5d7;border-color:#dcd5d7;color:#ffffff}.btn.btn-primary:not(:disabled,.disabled):focus{background-color:#378375;border-color:#378375}.btn.btn-primary:not(:disabled,.disabled):hover{background-color:#2d6357;border-color:#2d6357}.btn.btn-primary:not(:disabled,.disabled):active,.btn.btn-primary:not(:disabled,.disabled).active{background-color:#28594e;border-color:#28594e}.btn.btn-outline-primary:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-primary:not(:disabled,.disabled):hover{color:#ffffff;background-color:#2d6357;border-color:#2d6357}.btn.btn-outline-primary:not(:disabled,.disabled):active,.btn.btn-outline-primary:not(:disabled,.disabled).active{background-color:#28594e;border-color:#28594e}.btn.btn-secondary:not(:disabled,.disabled):focus{background-color:#ab377a;border-color:#ab377a}.btn.btn-secondary:not(:disabled,.disabled):hover{background-color:#99316d;border-color:#99316d}.btn.btn-secondary:not(:disabled,.disabled):active,.btn.btn-secondary:not(:disabled,.disabled).active{background-color:#822060;border-color:#822060}.btn.btn-outline-secondary:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-secondary:not(:disabled,.disabled):hover{color:#ffffff;background-color:#99316d;border-color:#99316d}.btn.btn-outline-secondary:not(:disabled,.disabled):active,.btn.btn-outline-secondary:not(:disabled,.disabled).active{background-color:#822060;border-color:#822060}.btn.btn-success:not(:disabled,.disabled):focus{background-color:#aec067;border-color:#aec067}.btn.btn-success:not(:disabled,.disabled):hover{background-color:#91a646;border-color:#91a646}.btn.btn-success:not(:disabled,.disabled):active,.btn.btn-success:not(:disabled,.disabled).active{background-color:#7d933c;border-color:#7d933c}.btn.btn-outline-success:not(:disabled,.disabled){color:#1d1d1d}.btn.btn-outline-success:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-success:not(:disabled,.disabled):hover{background-color:#91a646;border-color:#91a646}.btn.btn-outline-success:not(:disabled,.disabled):active,.btn.btn-outline-success:not(:disabled,.disabled).active{background-color:#7d933c;border-color:#7d933c}.btn.btn-danger:not(:disabled,.disabled):focus{background-color:#cd002f;border-color:#cd002f}.btn.btn-danger:not(:disabled,.disabled):hover{background-color:#bf0023;border-color:#bf0023}.btn.btn-danger:not(:disabled,.disabled):active,.btn.btn-danger:not(:disabled,.disabled).active{background-color:#900021;border-color:#900021}.btn.btn-outline-danger:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-danger:not(:disabled,.disabled):hover{color:#ffffff;background-color:#bf0023;border-color:#bf0023}.btn.btn-outline-danger:not(:disabled,.disabled):active,.btn.btn-outline-danger:not(:disabled,.disabled).active{background-color:#900021;border-color:#900021}.btn.btn-warning:not(:disabled,.disabled):focus{background-color:#f07f3c;border-color:#f07f3c}.btn.btn-warning:not(:disabled,.disabled):hover{background-color:#d97336;border-color:#d97336}.btn.btn-warning:not(:disabled,.disabled):active,.btn.btn-warning:not(:disabled,.disabled).active{background-color:#cc6e33;border-color:#cc6e33}.btn.btn-outline-warning:not(:disabled,.disabled){color:#1d1d1d}.btn.btn-outline-warning:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-warning:not(:disabled,.disabled):hover{background-color:#d97336;border-color:#d97336}.btn.btn-outline-warning:not(:disabled,.disabled):active,.btn.btn-outline-warning:not(:disabled,.disabled).active{background-color:#cc6e33;border-color:#cc6e33}.btn.btn-primary-outline-text{background-color:transparent;color:#378375}.btn.btn-primary-outline-text:hover{color:#2d6357}.btn.btn-primary-outline-text:active,.btn.btn-primary-outline-text.active{color:#28594e}.btn.btn-primary-outline-text:disabled,.btn.btn-primary-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}.btn.btn-secondary-outline-text{background-color:transparent;color:#ab377a}.btn.btn-secondary-outline-text:hover{color:#99316d}.btn.btn-secondary-outline-text:active,.btn.btn-secondary-outline-text.active{color:#822060}.btn.btn-secondary-outline-text:disabled,.btn.btn-secondary-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}.btn.btn-success-outline-text{background-color:transparent;color:#aec067}.btn.btn-success-outline-text:hover{color:#91a646}.btn.btn-success-outline-text:active,.btn.btn-success-outline-text.active{color:#7d933c}.btn.btn-success-outline-text:disabled,.btn.btn-success-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}.btn.btn-danger-outline-text{background-color:transparent;color:#cd002f}.btn.btn-danger-outline-text:hover{color:#bf0023}.btn.btn-danger-outline-text:active,.btn.btn-danger-outline-text.active{color:#900021}.btn.btn-danger-outline-text:disabled,.btn.btn-danger-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}.btn.btn-warning-outline-text{background-color:transparent;color:#f07f3c}.btn.btn-warning-outline-text:hover{color:#d97336}.btn.btn-warning-outline-text:active,.btn.btn-warning-outline-text.active{color:#cc6e33}.btn.btn-warning-outline-text:disabled,.btn.btn-warning-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}.card{position:relative;display:inline-flex;flex-direction:column;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid #ebe9e9;border-radius:1px;width:22rem;height:auto}.card .card-img ::slotted([slot=img]){width:100%;vertical-align:bottom}.card .card-body{padding:24px}.card.horizontal{flex-direction:row;width:538px}.card.horizontal.hasAll{height:auto}.card.horizontal.largeSize{height:218px}.card.horizontal.smallSize{height:138px}.card.horizontal .card-body{flex:1;width:0;padding:17px 24px 25px 25px}.card.horizontal .card-img{flex:1;order:2}.card.horizontal .card-img ::slotted([slot=img]){width:100%;height:100%;vertical-align:bottom;object-fit:cover}.card.horizontal.right .card-img{order:1}.card.horizontal.right .card-body{order:2}.dropdown{position:relative}.dropdown .btn{min-width:200px}.dropdown .dropdown-toggle::after{content:\"\";display:inline-block;border:none;vertical-align:-2px;margin-left:10px;width:14px;height:14px;background-size:14px;background-position:center;background-repeat:no-repeat;transition:transform 0.2s ease-in-out;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FFF' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M4.251 181.1C7.392 177.7 11.69 175.1 16 175.1c3.891 0 7.781 1.406 10.86 4.25l197.1 181.1l197.1-181.1c6.5-6 16.64-5.625 22.61 .9062c6 6.5 5.594 16.59-.8906 22.59l-208 192c-6.156 5.688-15.56 5.688-21.72 0l-208-192C-1.343 197.7-1.749 187.6 4.251 181.1z'/%3E%3C/svg%3E\")}.dropdown.show .dropdown-toggle::after{transform:rotate(-180deg);background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FFF' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M4.251 181.1C7.392 177.7 11.69 175.1 16 175.1c3.891 0 7.781 1.406 10.86 4.25l197.1 181.1l197.1-181.1c6.5-6 16.64-5.625 22.61 .9062c6 6.5 5.594 16.59-.8906 22.59l-208 192c-6.156 5.688-15.56 5.688-21.72 0l-208-192C-1.343 197.7-1.749 187.6 4.251 181.1z'/%3E%3C/svg%3E\")}.dropdown .btn-sm+.dropdown-menu{transform:translate3d(0px, 56.75px, 0px) !important}.dropdown .btn-lg+.dropdown-menu{transform:translate3d(0px, 72.5px, 0px) !important}.show>.btn-secondary.dropdown-toggle:focus{box-shadow:none}.svg-wrapper{display:inline-block}.dropdown-menu{display:none}.dropdown-menu.show{display:inline-block;position:absolute;z-index:1000;inset:0px auto auto 0px;min-width:200px;padding:0;border:none;border-radius:1px;background-color:#fafafa;transform:translate3d(0px, 52px, 0px) !important}.dropdown-menu.show.nested{transform:none !important;position:static}.dropdown-menu.show .form-control,.dropdown-menu.show .form-select{margin:16px}.dropdown-menu.show .form-select{color:#c5bbbd}.dropdown-menu.show .inf__search-input,.dropdown-menu.show .inf__filter-input{width:160px;min-height:calc(1.75em + 18px);font-size:0.8125rem;margin:16px;display:block;padding:8px 16px;font-family:\"Source Sans Pro\";font-weight:400;line-height:1.75;color:#1d1d1d;background-color:#fff;background-clip:padding-box;border:1px solid #c5bbbd;appearance:none;border-radius:1px;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.dropdown-menu.show .ifx__search-icon-wrapper{margin-right:24px}.dropdown-menu.show .dropdown-item{display:flex;align-items:center;width:100%;text-align:inherit;white-space:nowrap;border:0;padding:8px 16px;background-color:rgba(0, 0, 0, 0);text-decoration:none;color:#1d1d1d}.dropdown-menu.show .dropdown-item .form-check-label:hover{cursor:pointer}.dropdown-menu.show .dropdown-item:focus{background-color:#fafafa}.dropdown-menu.show .dropdown-item:focus-visible{outline:none;background-color:#fafafa;border:3px solid #B4DDD8;padding-left:13px;margin-left:0}.dropdown-menu.show .dropdown-item:hover{font-weight:600;background-color:#ebe9e9}.dropdown-menu.show .dropdown-item:hover svg{color:#1d1d1d}.dropdown-menu.show .dropdown-item.active,.dropdown-menu.show .dropdown-item:active{font-weight:600;background-color:transparent;color:#378375}.dropdown-menu.show .dropdown-item.active svg,.dropdown-menu.show .dropdown-item:active svg{color:#378375}.dropdown-menu.show .dropdown-item svg{width:13px;height:13px;margin-right:10px;vertical-align:-0.5px}.dropdown-menu.show .form-check-label{font-weight:400}.dropdown-item{display:flex;align-items:center;gap:12px;width:100%;text-align:inherit;white-space:nowrap;border:0;padding:8px 16px;background-color:rgba(0, 0, 0, 0);text-decoration:none;color:#1d1d1d}.dropdown-item.primary input[type=checkbox]{accent-color:#378375}.dropdown-item.secondary input[type=checkbox]{accent-color:#ab377a}.dropdown-item.success input[type=checkbox]{accent-color:#aec067}.dropdown-item.danger input[type=checkbox]{accent-color:#cd002f}.dropdown-item.warning input[type=checkbox]{accent-color:#f07f3c}.dropdown-item .form-check-label:hover{cursor:pointer}.dropdown-item .form-check-input{border-radius:1px}.dropdown-item:focus{background-color:#fafafa}.dropdown-item:focus-visible{outline:none;background-color:#fafafa;border:3px solid #B4DDD8;padding-left:13px;margin-left:0}.dropdown-item:hover{font-weight:600;background-color:#ebe9e9}.dropdown-item:hover svg{color:#1d1d1d}.dropdown-item.active,.dropdown-item:active{font-weight:600;background-color:transparent;color:#378375}.dropdown-item.active svg,.dropdown-item:active svg{color:#378375;fill:none}.inf__search-input{width:160px;min-height:calc(1.75em + 18px);font-size:0.8125rem;margin:16px;display:block;padding:8px 16px;font-family:\"Source Sans Pro\";font-weight:400;line-height:1.75;color:#1d1d1d;background-color:#fff;background-clip:padding-box;border:1px solid #c5bbbd;appearance:none;border-radius:1px;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.inf__filter-input{width:160px;min-height:calc(1.75em + 18px);font-size:0.8125rem;margin:16px;display:block;padding:8px 16px;font-family:\"Source Sans Pro\";font-weight:400;line-height:1.75;color:#1d1d1d;background-color:#fff;background-clip:padding-box;border:1px solid #c5bbbd;appearance:none;border-radius:1px;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.ifx__alert-text{font-size:16px;width:100%;padding:12px 0px 12px 12px;color:#1d1d1d}.ifx__alert-text.text-overflow{word-break:break-all}.ifx__alert-icon-wrapper{display:none}.ifx__alert-icon-wrapper.show{position:relative;min-width:48px;display:flex;justify-content:center;align-items:center;background-color:#378375}.ifx__close-icon-wrapper{display:flex;align-items:center;justify-content:center;min-width:40px}.ifx__close-icon-wrapper a{line-height:0;color:#1d1d1d}.ifx__close-icon-wrapper a:hover svg{stroke:#378375}.alert{display:flex;border:1px solid #378375;border-radius:1px;max-width:800px}.alert-primary,.alert-secondary,.alert-danger,.alert-success,.alert-warning{color:#1d1d1d;background-color:#ffffff}.alert-primary{border:1px solid #378375}.alert-primary .ifx__alert-icon-wrapper{background-color:#378375;color:#ffffff}.alert-secondary{border:1px solid #ab377a}.alert-secondary .ifx__alert-icon-wrapper{background-color:#ab377a;color:#ffffff}.alert-success{border:1px solid #aec067}.alert-success .ifx__alert-icon-wrapper{background-color:#aec067;color:#ffffff}.alert-danger{border:1px solid #cd002f}.alert-danger .ifx__alert-icon-wrapper{background-color:#cd002f;color:#ffffff}.alert-warning{border:1px solid #f07f3c}.alert-warning .ifx__alert-icon-wrapper{background-color:#f07f3c;color:#ffffff}.ifx-link{display:inline-flex;align-items:center;gap:8px;font-weight:600;font-size:16px;line-height:24px;color:#378375;text-decoration:none}.ifx-link.underline{text-decoration:underline;color:#1d1d1d;text-decoration-color:#378375}";

const Card = class {
  constructor(hostRef) {
    Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.hasBtn = undefined;
    this.direction = undefined;
    this.alignment = undefined;
    this.hasDesc = undefined;
    this.hasAll = undefined;
    this.largeSize = undefined;
    this.smallSize = undefined;
  }
  componentWillLoad() {
    const desc = this.el.querySelector('ifx-card-text');
    const overline = this.el.querySelector('ifx-card-overline');
    const headline = this.el.querySelector('ifx-card-headline');
    const link = this.el.querySelector('ifx-link');
    if (desc) {
      this.hasDesc = true;
    }
    if (overline && headline && desc && link) {
      this.hasAll = true;
    }
    else if (this.hasDesc || (overline && headline && link)) {
      this.largeSize = true;
    }
    else {
      this.smallSize = true;
    }
  }
  render() {
    return (Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["a"], null, Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: `card 
          ${this.direction} 
          ${this.alignment} 
          ${this.largeSize ? 'largeSize' : ""} 
          ${this.smallSize ? 'smallSize' : ""} 
          ${this.hasAll ? 'hasAll' : ""}` }, Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "card-img" }, Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "img" })), Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'card-body' }, Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: 'overline' }), Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: 'headline' }), Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: 'text' }), Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "btn" })))));
  }
  get el() { return Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
Card.style = indexCss$1;

const cardHeadlineCss = ".card__headline-wrapper{padding-bottom:16px}.card__headline-wrapper.withDesc{padding-bottom:8px}.card-headline{margin-top:0;padding-top:0;font-family:\"Source Sans Pro\";font-weight:600;font-size:1.5rem;line-height:32px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.card-headline.horizontal{font-size:1.25rem;line-height:28px}";

const CardHeadline = class {
  constructor(hostRef) {
    Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.direction = undefined;
    this.hasDesc = undefined;
  }
  componentWillLoad() {
    const isHorizontal = this.el.closest('ifx-card').shadowRoot.querySelector('.card').className.includes('horizontal');
    if (isHorizontal) {
      this.direction = 'horizontal';
    }
    let desc = this.el.closest('ifx-card').querySelector('ifx-card-text');
    if (desc) {
      this.hasDesc = true;
    }
  }
  render() {
    return (Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: `card__headline-wrapper ${this.hasDesc ? 'withDesc' : ""}` }, Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: `card-headline ${this.direction}` }, Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
  }
  get el() { return Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
CardHeadline.style = cardHeadlineCss;

const cardOverlineCss = ".card-overline{font-size:1rem;font-weight:400;color:#7d6f72;padding-bottom:4px;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;word-break:break-all}";

const CardOverline = class {
  constructor(hostRef) {
    Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }
  render() {
    return (Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "card-overline" }, Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
};
CardOverline.style = cardOverlineCss;

const cardTextCss = ".card__text-wrapper{padding-bottom:0px}.card__text-wrapper.hasBtn{padding-bottom:16px}.card-text{line-height:24px;font-size:16px;font-weight:400;white-space:wrap;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}";

const CardText = class {
  constructor(hostRef) {
    Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.hasBtn = undefined;
  }
  componentWillLoad() {
    const link = this.el.closest('ifx-card').querySelector('ifx-link');
    if (link) {
      this.hasBtn = true;
    }
  }
  render() {
    return (Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: `card__text-wrapper ${this.hasBtn ? 'hasBtn' : ""}` }, Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: `card-text` }, Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
  }
  get el() { return Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
CardText.style = cardTextCss;

var arrowdown12 = {
  name: 'arrow-down-12',
  height: 12,
  width: 12,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 11.5V.5M10 7.5l-4 4-4-4"/>',
 fill: 'none',
 viewBox: '0 0 12 12'
};

var arrowdown16 = {
  name: 'arrow-down-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 .5v15M13 10.5l-5 5-5-5"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var arrowdown24 = {
  name: 'arrow-down-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 2.5v20M19.5 15.5l-7 7-7-7"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var arrowleft12 = {
  name: 'arrow-left-12',
  height: 12,
  width: 12,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 6h11M4.5 10l-4-4 4-4"/>',
 fill: 'none',
 viewBox: '0 0 12 12'
};

var arrowleft16 = {
  name: 'arrow-left-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 8H.5M5.5 13l-5-5 5-5"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var arrowleft24 = {
  name: 'arrow-left-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.5 12.5h-20M9.5 19.5l-7-7 7-7"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var arrowright12 = {
  name: 'arrow-right-12',
  height: 12,
  width: 12,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 6H.5M7.5 2l4 4-4 4"/>',
 fill: 'none',
 viewBox: '0 0 12 12'
};

var arrowright16 = {
  name: 'arrow-right-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 8h15M10.5 3l5 5-5 5"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var arrowright24 = {
  name: 'arrow-right-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 12.5h20M15.5 5.5l7 7-7 7"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var arrowtrianglediagonal12 = {
  name: 'arrow-triangle-diagonal-12',
  height: 12,
  width: 12,
  svgContent: '<path fill="currentColor" d="M1.688 10.033a.25.25 0 0 0 .277.277l4.416-.527a.25.25 0 0 0 .148-.425L2.639 5.47a.25.25 0 0 0-.424.148l-.527 4.416ZM10.313 1.963a.25.25 0 0 0-.278-.277l-4.416.527a.25.25 0 0 0-.148.425l3.89 3.889c.146.147.4.06.424-.148l.527-4.416Z"/>',
 fill: 'none',
 viewBox: '0 0 12 12'
};

var arrowtrianglediagonal16 = {
  name: 'arrow-triangle-diagonal-16',
  height: 16,
  width: 16,
  svgContent: '<path fill="currentColor" d="M3.854 7.146a.5.5 0 0 0-.847.272l-1 6a.5.5 0 0 0 .575.575l6-1a.5.5 0 0 0 .272-.847l-5-5ZM13.854 2.146a.51.51 0 0 0-.436-.139l-6 1a.5.5 0 0 0-.272.847l5 5a.5.5 0 0 0 .847-.272l1-6a.5.5 0 0 0-.139-.436Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var arrowtrianglediagonal24 = {
  name: 'arrow-triangle-diagonal-24',
  height: 24,
  width: 24,
  svgContent: '<path fill="currentColor" d="M2.023 20.778c-.157.674.525 1.356 1.199 1.2l9.21-2.14a1.006 1.006 0 0 0 .486-1.684l-7.071-7.072a1.006 1.006 0 0 0-1.686.485l-2.138 9.211ZM21.977 3.222c.156-.674-.526-1.356-1.2-1.2l-9.21 2.14a1.006 1.006 0 0 0-.485 1.685l7.071 7.07a1.006 1.006 0 0 0 1.686-.485l2.138-9.21Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var arrowtriangledown12 = {
  name: 'arrow-triangle-down-12',
  height: 12,
  width: 12,
  svgContent: '<path fill="currentColor" d="M5.804 7.9a.25.25 0 0 0 .392 0l2.75-3.495A.25.25 0 0 0 8.75 4h-5.5a.25.25 0 0 0-.196.405L5.804 7.9Z"/>',
 fill: 'none',
 viewBox: '0 0 12 12'
};

var arrowtriangledown16 = {
  name: 'arrow-triangle-down-16',
  height: 16,
  width: 16,
  svgContent: '<path fill="currentColor" d="M11.943 5.269A.5.5 0 0 0 11.5 5h-7a.5.5 0 0 0-.409.787l3.5 5a.5.5 0 0 0 .818 0l3.5-5a.5.5 0 0 0 .034-.518Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var arrowtriangledown24 = {
  name: 'arrow-triangle-down-24',
  height: 24,
  width: 24,
  svgContent: '<path fill="currentColor" d="M17 7H7a1.002 1.002 0 0 0-.848 1.53l5 8a1 1 0 0 0 1.696 0l5-8A1 1 0 0 0 17 7Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var arrowtrianglehorizontal12 = {
  name: 'arrow-triangle-horizontal-12',
  height: 12,
  width: 12,
  svgContent: '<path fill="currentColor" d="M.097 5.802a.25.25 0 0 0 0 .392l3.496 2.75a.25.25 0 0 0 .405-.196v-5.5a.25.25 0 0 0-.405-.196L.097 5.802ZM11.903 6.194a.25.25 0 0 0 0-.392l-3.496-2.75a.25.25 0 0 0-.405.196v5.5c0 .208.24.325.405.196l3.496-2.75Z"/>',
 fill: 'none',
 viewBox: '0 0 12 12'
};

var arrowtrianglehorizontal16 = {
  name: 'arrow-triangle-horizontal-16',
  height: 16,
  width: 16,
  svgContent: '<path fill="currentColor" d="M10.787 4.09A.5.5 0 0 0 10 4.5v7a.5.5 0 0 0 .787.41l5-3.5a.5.5 0 0 0 0-.82l-5-3.5ZM5.214 11.91A.5.5 0 0 0 6 11.5v-7a.5.5 0 0 0-.787-.41l-5 3.5a.5.5 0 0 0 0 .82l5 3.5Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var arrowtrianglehorizontal24 = {
  name: 'arrow-triangle-horizontal-24',
  height: 24,
  width: 24,
  svgContent: '<path fill="currentColor" d="M23.56 12.848c.587-.367.587-1.33 0-1.697l-8.025-5A1.006 1.006 0 0 0 14 7v10a1.006 1.006 0 0 0 1.535.849l8.025-5.002ZM.44 11.152c-.586.367-.586 1.33 0 1.697l8.025 5A1.006 1.006 0 0 0 10 17V7a1.006 1.006 0 0 0-1.535-.849L.44 11.153Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var arrowtriangleleft12 = {
  name: 'arrow-triangle-left-12',
  height: 12,
  width: 12,
  svgContent: '<path fill="currentColor" d="M4.095 5.804a.25.25 0 0 0 0 .392l3.496 2.75a.25.25 0 0 0 .405-.196v-5.5a.25.25 0 0 0-.405-.196l-3.496 2.75Z"/>',
 fill: 'none',
 viewBox: '0 0 12 12'
};

var arrowtriangleleft16 = {
  name: 'arrow-triangle-left-16',
  height: 16,
  width: 16,
  svgContent: '<path fill="currentColor" d="M10.73 4.057a.5.5 0 0 0-.517.033l-5 3.5a.5.5 0 0 0 0 .82l5 3.5A.5.5 0 0 0 11 11.5v-7a.5.5 0 0 0-.27-.443Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var arrowtriangleleft24 = {
  name: 'arrow-triangle-left-24',
  height: 24,
  width: 24,
  svgContent: '<path fill="currentColor" d="M16.485 6.125a.998.998 0 0 0-1.015.026l-8 5a1 1 0 0 0 0 1.697l8 5A1.002 1.002 0 0 0 17 17V7a1 1 0 0 0-.515-.875Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var arrowtriangleright12 = {
  name: 'arrow-triangle-right-12',
  height: 12,
  width: 12,
  svgContent: '<path fill="currentColor" d="M7.9 6.196a.25.25 0 0 0 0-.392l-3.495-2.75A.25.25 0 0 0 4 3.25v5.5c0 .208.24.325.405.196L7.9 6.196Z"/>',
 fill: 'none',
 viewBox: '0 0 12 12'
};

var arrowtriangleright16 = {
  name: 'arrow-triangle-right-16',
  height: 16,
  width: 16,
  svgContent: '<path fill="currentColor" d="M5.787 4.09A.5.5 0 0 0 5 4.5v7a.5.5 0 0 0 .787.41l5-3.5a.5.5 0 0 0 0-.82l-5-3.5Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var arrowtriangleright24 = {
  name: 'arrow-triangle-right-24',
  height: 24,
  width: 24,
  svgContent: '<path fill="currentColor" d="m16.53 11.152-8-5A.998.998 0 0 0 7 7v10a1 1 0 0 0 1.53.848l8-5a1 1 0 0 0 0-1.696Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var arrowtriangleup12 = {
  name: 'arrow-triangle-up-12',
  height: 12,
  width: 12,
  svgContent: '<path fill="currentColor" d="M6.196 4.095a.25.25 0 0 0-.392 0l-2.75 3.496a.25.25 0 0 0 .196.405h5.5a.25.25 0 0 0 .196-.405l-2.75-3.496Z"/>',
 fill: 'none',
 viewBox: '0 0 12 12'
};

var arrowtriangleup16 = {
  name: 'arrow-triangle-up-16',
  height: 16,
  width: 16,
  svgContent: '<path fill="currentColor" d="m11.91 10.211-3.5-5.01a.52.52 0 0 0-.82 0l-3.5 5.01A.502.502 0 0 0 4.5 11h7a.5.5 0 0 0 .41-.789Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var arrowtriangleup24 = {
  name: 'arrow-triangle-up-24',
  height: 24,
  width: 24,
  svgContent: '<path fill="currentColor" d="M12.848 7.44c-.366-.587-1.33-.587-1.696 0l-5 8.025A1.006 1.006 0 0 0 7 17h10a1.006 1.006 0 0 0 .849-1.535L12.848 7.44Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var arrowtrianglevertikal12 = {
  name: 'arrow-triangle-vertikal-12',
  height: 12,
  width: 12,
  svgContent: '<path fill="currentColor" d="M5.804 11.9a.25.25 0 0 0 .392 0l2.75-3.495A.25.25 0 0 0 8.75 8h-5.5a.25.25 0 0 0-.196.405l2.75 3.496ZM6.196.095a.25.25 0 0 0-.392 0l-2.75 3.496a.25.25 0 0 0 .196.405h5.5a.25.25 0 0 0 .196-.405L6.196.095Z"/>',
 fill: 'none',
 viewBox: '0 0 12 12'
};

var arrowtrianglevertikal16 = {
  name: 'arrow-triangle-vertikal-16',
  height: 16,
  width: 16,
  svgContent: '<path fill="currentColor" d="m4.09 10.789 3.5 5.01a.52.52 0 0 0 .82 0l3.5-5.01A.502.502 0 0 0 11.5 10h-7a.5.5 0 0 0-.41.789ZM11.91 5.211 8.41.201a.52.52 0 0 0-.82 0l-3.5 5.01A.502.502 0 0 0 4.5 6h7a.5.5 0 0 0 .41-.789Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var arrowtrianglevertikal24 = {
  name: 'arrow-triangle-vertikal-24',
  height: 24,
  width: 24,
  svgContent: '<path fill="currentColor" d="M11.153 23.56c.366.587 1.33.587 1.696 0l5-8.025A1.006 1.006 0 0 0 17 14H7a1.006 1.006 0 0 0-.849 1.535l5 8.025ZM12.848.44c-.366-.587-1.33-.587-1.696 0l-5 8.025A1.006 1.006 0 0 0 7 10h10a1.006 1.006 0 0 0 .849-1.535L12.848.44Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var arrowup12 = {
  name: 'arrow-up-12',
  height: 12,
  width: 12,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 .5v11M2 4.5l4-4 4 4"/>',
 fill: 'none',
 viewBox: '0 0 12 12'
};

var arrowup16 = {
  name: 'arrow-up-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 15.5V.5M3 5.5l5-5 5 5"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var arrowup24 = {
  name: 'arrow-up-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 22.5v-20M5.5 9.5l7-7 7 7"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var assembledproduct16 = {
  name: 'assembled-product-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 9.5h-1M15.5 11.5h-1M1.5 11.5h-1M1.5 4.5h-1M1.5 6.5h-1M1.5 9.5h-1M4.5 15.5v-1M6.5 15.5v-1M9.5 15.5v-1M11.5 15.5v-1M4.5 1.5v-1M6.5 1.5v-1"/><path fill="currentColor" d="M8 1.5h.5A.5.5 0 0 0 8 1v.5ZM14.5 8h.5a.5.5 0 0 0-.5-.5V8Zm-12 6a.5.5 0 0 1-.5-.5H1A1.5 1.5 0 0 0 2.5 15v-1Zm11.5-.5a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5h-1ZM2.5 1A1.5 1.5 0 0 0 1 2.5h1a.5.5 0 0 1 .5-.5V1Zm0 1H8V1H2.5v1ZM14 8v5.5h1V8h-1Zm-.5 6H8v1h5.5v-1ZM8 14H2.5v1H8v-1ZM7.5 1.5v13h1v-13h-1ZM2 13.5V8H1v5.5h1ZM2 8V2.5H1V8h1Zm12.5-.5h-13v1h13v-1Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var assembledproduct24 = {
  name: 'assembled-product-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 3.5v-2M10.5 3.5v-2M23.5 18.5h-2M23.5 14.5h-2M3.5 18.5h-2M3.5 6.5h-2M3.5 10.5h-2M3.5 14.5h-2M6.5 23.5v-2M14.5 23.5v-2M18.5 23.5v-2M10.5 23.5v-2M3.5 12.5v7a2 2 0 0 0 2 2h7m-9-9v-7a2 2 0 0 1 2-2h7v18m-9-9h18v7a2 2 0 0 1-2 2h-7"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var attachment16 = {
  name: 'attachment-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 5.5v4a2 2 0 1 0 4 0v-5a4 4 0 0 0-8 0V10a5.5 5.5 0 1 0 11 0V4.5"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var attachment24 = {
  name: 'attachment-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.5 4.5V17c0 3.6-2.9 6.5-6.5 6.5S5.5 20.6 5.5 17V6c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5v10c0 1.4-1.1 2.5-2.5 2.5S9.5 17.4 9.5 16V7.5"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var bargraph16 = {
  name: 'bar-graph-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 14.5v-9M8.5 14.5v-6M14.5 14.5v-6M11.5 14.5v-9M2.5 14.5v-12"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var bargraph24 = {
  name: 'bar-graph-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 21.5v-13M12.5 21.5v-8M17.5 21.5v-13M22.5 21.5v-8M2.5 21.5v-18"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var bell12 = {
  name: 'bell-12',
  height: 12,
  width: 12,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.592 10.5a1.491 1.491 0 0 0 2.816 0M.5 8.5h11M11.5 8.5a2.15 2.15 0 0 1-2-2V4A3.5 3.5 0 0 0 6 .5v0A3.5 3.5 0 0 0 2.5 4v2.5a2.151 2.151 0 0 1-2 2"/>',
 fill: 'none',
 viewBox: '0 0 12 12'
};

var bell16 = {
  name: 'bell-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10 13.5a2 2 0 1 1-4 0M.5 11.5h15M14.5 11.5h.5c-1.105 0-2.5-.895-2.5-2V5a4.5 4.5 0 0 0-9 0v4.5a2 2 0 0 1-2 2"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var bell24 = {
  name: 'bell-24',
  height: 24,
  width: 25,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5v-5a7 7 0 1 0-14 0v5c-.03 2.47-.72 4.887-2 7h18a13.833 13.833 0 0 1-2-7Z"/><path fill="currentColor" d="M9.674 22.5a3 3 0 0 0 5.652 0H9.674Z"/>',
 fill: 'none',
 viewBox: '0 0 24 25'
};

var board16 = {
  name: 'board-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5.5h-13a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 3.5h-3v3h3v-3ZM6.5 9.5h-3v3h3v-3ZM12.5 3.5h-3v9h3v-9Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var board24 = {
  name: 'board-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.5 2.5h-20v20h20v-20Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 6.5h-4v4h4v-4ZM10.5 14.5h-4v4h4v-4ZM18.5 6.5h-4v12h4v-12Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var book16 = {
  name: 'book-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 14V2.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2V14"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2 12.5h12a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 0 1 0-3ZM11.5 3.5h-7v5h7v-5Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var book24 = {
  name: 'book-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.5 6.5h-8v5h8v-5Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 18.5v-17h-16a2 2 0 0 0-2 2V21"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 18.5h15.5v5H6a2.5 2.5 0 1 1 0-5Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var bookbookmark16 = {
  name: 'book-bookmark-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5.5v7L6 5.5l-2.5 2v-7"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 14V2.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2V14"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14 12.5H2a1.5 1.5 0 0 0 0 3h12a1.5 1.5 0 0 0 0-3Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var bookbookmark24 = {
  name: 'book-bookmark-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 1.5v8l-3-2-3 2v-8"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 1.5a2 2 0 0 0-2 2v18a2 2 0 0 1 2-2h14a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2h-14Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 23.5a2 2 0 0 0 2-2v-4a2 2 0 0 1-2 2h-14a2 2 0 1 0 0 4h14Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var bookopen16 = {
  name: 'book-open-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.75 1.5C9.679 1.5 8 2.395 8 3.5c0-1.105-1.679-2-3.75-2-2.071 0-3.75.895-3.75 2v11c0-1.105 1.679-2 3.75-2 2.071 0 3.75.895 3.75 2 0-1.105 1.679-2 3.75-2 2.071 0 3.75.895 3.75 2v-11c0-1.105-1.679-2-3.75-2Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var bookopen24 = {
  name: 'book-open-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 4.5v17M18 2.5c-3 0-5.5 1.3-5.5 3 0-1.7-2.5-3-5.5-3s-5.5 1.3-5.5 3v17c0-1.7 2.5-3 5.5-3s5.5 1.3 5.5 3c0-1.7 2.5-3 5.5-3s5.5 1.3 5.5 3v-17c0-1.7-2.5-3-5.5-3Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var bookmark16 = {
  name: 'bookmark-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m2.5 15.5 5.5-4 5.5 4V2A1.5 1.5 0 0 0 12 .5H4A1.5 1.5 0 0 0 2.5 2v13.5Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var bookmark24 = {
  name: 'bookmark-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.5 22.5-9-5-9 5v-19a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v19Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var box16 = {
  name: 'box-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5H.5v3h15v-3ZM13.5 6.5v8h-11v-8"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 7.5h-5v3h5v-3Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var box24 = {
  name: 'box-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.5 2.5h-22v5h22v-5ZM21.5 11.5v11h-18v-11"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11.5h-6v4h6v-4Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var bug16 = {
  name: 'bug-16',
  height: 16,
  width: 17,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 10.5h3M5.708 3a2.5 2.5 0 0 1 4.584 0M3.756 7.5H3.5a3 3 0 0 1-3-3v0M3.756 13.5H3.5a3 3 0 0 0-3 3v0M15.5 10.5h-3M12.244 7.5h.256a3 3 0 0 0 3-3v0M12.244 13.5h.256a3 3 0 0 1 3 3v0"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 9a4.5 4.5 0 1 0-9 0v3a4.5 4.5 0 1 0 9 0V9Z"/>',
 fill: 'none',
 viewBox: '0 0 16 17'
};

var bug24 = {
  name: 'bug-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.79 10.5H4.5a3 3 0 0 1-3-3v-1M5.79 18.5H4.5a3 3 0 0 0-3 3v1M8.5 6.755V5.5a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v1.255M5.5 14.5h-4M19.21 10.5h1.29a3 3 0 0 0 3-3v-1M19.21 18.5h1.29a3 3 0 0 1 3 3v1M19.5 14.5h4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 16.5a7 7 0 1 1-14 0v-4a7 7 0 0 1 14 0v4Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var bulletlist16 = {
  name: 'bullet-list-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2 3.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM2 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM2 15.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM6.5 2.5h9M6.5 8.5h9M6.5 14.5h9"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var bulletlist24 = {
  name: 'bullet-list-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4.5 14.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4.5 22.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM10.5 4.5h12M10.5 12.5h12M10.5 20.5h12"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var cadd16 = {
  name: 'c-add-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 15.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM8.5 4.5v8M4.5 8.5h8"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var cadd24 = {
  name: 'c-add-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 7.5v10M17.5 12.5h-10M12.5 23.5c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var ccheck16 = {
  name: 'c-check-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 15.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 7.5 7 10l5-5"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var ccheck24 = {
  name: 'c-check-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.5 12.5 4 4 8-8"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 23.5c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var ccheckf16 = {
  name: 'c-check-f-16',
  height: 16,
  width: 16,
  svgContent: '<path fill="currentColor" fill-rule="evenodd" d="M0 8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8Zm12.354-2.646a.5.5 0 0 0-.708-.708L7 9.293 4.854 7.146a.5.5 0 1 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l5-5Z" clip-rule="evenodd"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var ccheckf24 = {
  name: 'c-check-f-24',
  height: 24,
  width: 24,
  svgContent: '<path fill="currentColor" fill-rule="evenodd" d="M12.5 1C6.149 1 1 6.149 1 12.5S6.149 24 12.5 24 24 18.851 24 12.5 18.851 1 12.5 1Zm6.354 7.854a.5.5 0 0 0-.708-.708L10.5 15.793l-3.646-3.647a.5.5 0 0 0-.708.708l4 4a.5.5 0 0 0 .708 0l8-8Z" clip-rule="evenodd"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var cdelete16 = {
  name: 'c-delete-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 15.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM4.5 8.5h8"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var cdelete24 = {
  name: 'c-delete-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.5 12.5h-10M12.5 23.5c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var cinfo16 = {
  name: 'c-info-16',
  height: 16,
  width: 16,
  svgContent: '<path fill="currentColor" d="M8.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 15.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM8.5 12.5v-4"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var cinfo24 = {
  name: 'c-info-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 23.5c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11ZM12.5 11.5v6"/><path fill="currentColor" d="M12.5 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var cquestion16 = {
  name: 'c-question-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 15.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"/><path fill="currentColor" d="M8.003 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 3.577c.953-.86 3.018-.845 3.423.635C10.453 6.134 8 6.142 8 9"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var cquestion24 = {
  name: 'c-question-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 23.5c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11Z"/><path fill="currentColor" d="M12.5 19.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.353 7.06c1.98-.875 4.542-.771 5.417.645s.271 3.063-1.229 4.334C13.041 13.31 12.5 14 12.5 15"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var cwarning16 = {
  name: 'c-warning-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 15.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"/><path fill="currentColor" d="M8.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 4.5V9"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var cwarning24 = {
  name: 'c-warning-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 23.5c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11ZM12.5 7.5v6"/><path fill="currentColor" d="M12.5 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var calendar16 = {
  name: 'calendar-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 5.5h15M14 2.5H2A1.5 1.5 0 0 0 .5 4v9A1.5 1.5 0 0 0 2 14.5h12a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 14 2.5v0ZM4.5.5v2M11.5.5v2"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var calendar24 = {
  name: 'calendar-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 9.5h22M21.5 3.5h-18a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2ZM6.5 1.5l-.001 4M18.5 1.5l-.001 4"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var cart16 = {
  name: 'cart-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 15.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM13 15.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM2.5 2.5h12l-2 5h-10"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5.5 2 2v5l-2 3h15"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var cart24 = {
  name: 'cart-24',
  height: 24,
  width: 25,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5h18l-3 10h-15"/><path fill="currentColor" d="M4.5 24.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20.5 24.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1.5 1.5 3 3v10l-2 4h21"/>',
 fill: 'none',
 viewBox: '0 0 24 25'
};

var chart16 = {
  name: 'chart-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5.5h-13a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.5 10.5 3-4 3 3 3-4"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var chart24 = {
  name: 'chart-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.5 1.5h-22v22h22v-22Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 15.5 5-6 5 4 4-4"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var chat16 = {
  name: 'chat-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 1.5h-13a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3v4l4.667-4H14.5a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var chat24 = {
  name: 'chat-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 2.5h22v15h-10l-7 5v-5h-5v-15Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var check12 = {
  name: 'check-12',
  height: 12,
  width: 12,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 7.5 3 3 8-9"/>',
 fill: 'none',
 viewBox: '0 0 12 12'
};

var check16 = {
  name: 'check-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1 9 4 4L15 3"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var check24 = {
  name: 'check-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m2.5 12.5 7 7 13-13"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var chemistry16 = {
  name: 'chemistry-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5.5h-9v3h9v-3ZM6 5.5V9l-3.411 4.031A1.5 1.5 0 0 0 3.734 15.5h8.532a1.5 1.5 0 0 0 1.145-2.469L10 9V5.5"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var chemistry24 = {
  name: 'chemistry-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.5 5.5v-4h-12v4h12ZM9.5 8.5v5l-4.751 5.938A2.5 2.5 0 0 0 6.7 23.5h11.6a2.5 2.5 0 0 0 1.953-4.062L15.5 13.5v-5"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var chevrondown12 = {
  name: 'chevron-down-12',
  height: 12,
  width: 12,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 3.5 5.5 6 5.5-6"/>',
 fill: 'none',
 viewBox: '0 0 12 12'
};

var chevrondown16 = {
  name: 'chevron-down-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 4.5 8 12 .5 4.5"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var chevrondown24 = {
  name: 'chevron-down-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m2.5 7.5 10 10 10-10"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var chevronleft12 = {
  name: 'chevron-left-12',
  height: 12,
  width: 12,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 11.5 2.5 6l6-5.5"/>',
 fill: 'none',
 viewBox: '0 0 12 12'
};

var chevronleft16 = {
  name: 'chevron-left-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5.5 4 8l7.5 7.5"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var chevronleft24 = {
  name: 'chevron-left-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.5 2.5-10 10 10 10"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var chevronright12 = {
  name: 'chevron-right-12',
  height: 12,
  width: 12,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.5.5 6 5.5-6 5.5"/>',
 fill: 'none',
 viewBox: '0 0 12 12'
};

var chevronright16 = {
  name: 'chevron-right-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5.5 12 8l-7.5 7.5"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var chevronright24 = {
  name: 'chevron-right-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.5 2.5 10 10-10 10"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var chevronup12 = {
  name: 'chevron-up-12',
  height: 12,
  width: 12,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 8.5 5.5-6 5.5 6"/>',
 fill: 'none',
 viewBox: '0 0 12 12'
};

var chevronup16 = {
  name: 'chevron-up-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11.5 8 4 .5 11.5"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var chevronup24 = {
  name: 'chevron-up-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.5 17.5-10-10-10 10"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var chip16 = {
  name: 'chip-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 2.5v-2M10.5 2.5v-2M15.5 10.5h-2M15.5 5.5h-2M2.5 10.5h-2M2.5 5.5h-2M5.5 15.5v-2M10.5 15.5v-2M12.4 2.5H3.6a1.1 1.1 0 0 0-1.1 1.1v8.8a1.1 1.1 0 0 0 1.1 1.1h8.8a1.1 1.1 0 0 0 1.1-1.1V3.6a1.1 1.1 0 0 0-1.1-1.1Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 4.5h-7v7h7v-7Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var chip24 = {
  name: 'chip-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 3.5v-2M16.5 3.5v-2M12.5 3.5v-2M23.5 16.5h-2M23.5 8.5h-2M23.5 12.5h-2M3.5 16.5h-2M3.5 8.5h-2M3.5 12.5h-2M8.5 23.5v-2M16.5 23.5v-2M12.5 23.5v-2M19.5 3.5h-14a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.5 7.5h-10v10h10v-10Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var chipdip16 = {
  name: 'chip-dip-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 3.5v-2M6.5 3.5v-2M9.5 3.5v-2M12.5 3.5v-2M3.5 14.5v-2M6.5 14.5v-2M9.5 14.5v-2M12.5 14.5v-2M14.4 3.5H1.6A1.1 1.1 0 0 0 .5 4.6v6.8a1.1 1.1 0 0 0 1.1 1.1h12.8a1.1 1.1 0 0 0 1.1-1.1V4.6a1.1 1.1 0 0 0-1.1-1.1Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var chipdip24 = {
  name: 'chip-dip-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 5.5v-3M12.5 5.5v-3M16.5 5.5v-3M20.5 5.5v-3M4.5 5.5v-3M4.5 21.5v-3M12.5 21.5v-3M16.5 21.5v-3M20.5 21.5v-3M8.5 21.5v-3M21.5 5.5h-18a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var chips16 = {
  name: 'chips-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 1.5v-1M12.5 1.5v-1M15.5 8.5h-1M15.5 3.5h-1M5.5 8.5h-1M5.5 3.5h-1M7.5 11.5v-1M12.5 11.5v-1M13.4 1.5H6.6a1.1 1.1 0 0 0-1.1 1.1v6.8a1.1 1.1 0 0 0 1.1 1.1h6.8a1.1 1.1 0 0 0 1.1-1.1V2.6a1.1 1.1 0 0 0-1.1-1.1Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 3.5h-5v5h5v-5ZM1.5 12.5h-1M1.5 7.5h-1M3.5 15.5v-1M8.5 15.5v-1M3.5 5.5h-.9a1.1 1.1 0 0 0-1.1 1.1v6.8a1.1 1.1 0 0 0 1.1 1.1h6.8a1.1 1.1 0 0 0 1.1-1.1v-.9"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var chips24 = {
  name: 'chips-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 3.5v-2M18.5 3.5v-2M23.5 12.5h-2M23.5 6.5h-2M9.5 12.5h-2M9.5 6.5h-2M12.5 17.5v-2M18.5 17.5v-2M19.786 3.5h-8.572c-.947 0-1.714.768-1.714 1.714v8.572c0 .947.768 1.714 1.714 1.714h8.572c.947 0 1.714-.768 1.714-1.714V5.214c0-.946-.767-1.714-1.714-1.714Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.5 7.5h-4v4h4v-4ZM3.5 18.5h-2M3.5 12.5h-2M6.5 23.5v-2M12.5 23.5v-2M5.5 9.5h-.286c-.946 0-1.714.768-1.714 1.714v8.572c0 .947.768 1.714 1.714 1.714h8.572c.947 0 1.714-.767 1.714-1.714V19.5"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var clipboard16 = {
  name: 'clipboard-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 1.5h1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1h1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5.5h-5v2h5v-2ZM4.5 6.5h7M4.5 10.5h7"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var clipboard24 = {
  name: 'clipboard-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 12.5h10M7.5 17.5h10M20.5 3.5h2v20h-20v-20h2"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 1.5v6h3a2 2 0 1 1 4 0h3v-6h-10Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var clipboardcheck16 = {
  name: 'clipboard-check-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 1.5h1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1h1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5.5h-5v2h5v-2ZM5 9l2 2 4-4"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var clipboardcheck24 = {
  name: 'clipboard-check-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.5 15.5 2 2 4-4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.5 3.5h2v20h-20v-20h2"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 1.5v6h3a2 2 0 1 1 4 0h3v-6h-10Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var code16 = {
  name: 'code-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.5 1.5-5 13M3.5 4.5l-3 3 3 3M12.5 4.5l3 3-3 3"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var code24 = {
  name: 'code-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.5 8.5-4 4 4 4M18.5 8.5l4 4-4 4M10.5 20.5l4-16"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var cogwheel16 = {
  name: 'cogwheel-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 9V7l-2.177-.363a5.463 5.463 0 0 0-.595-1.437l1.283-1.796-1.415-1.414L10.8 3.272a5.463 5.463 0 0 0-1.437-.595L9 .5H7l-.363 2.177a5.463 5.463 0 0 0-1.437.595L3.404 1.99 1.99 3.404 3.272 5.2a5.463 5.463 0 0 0-.595 1.437L.5 7v2l2.177.363c.131.512.332.994.595 1.437L1.99 12.596l1.414 1.414L5.2 12.728c.443.263.925.464 1.437.595L7 15.5h2l.363-2.177a5.463 5.463 0 0 0 1.437-.595l1.796 1.283 1.414-1.414-1.282-1.797c.263-.443.464-.925.595-1.437L15.5 9Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var cogwheel24 = {
  name: 'cogwheel-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.5 14v-3l-3.248-.443a7.925 7.925 0 0 0-.9-2.165l1.984-2.61-2.118-2.121-2.61 1.984a7.927 7.927 0 0 0-2.165-.9L14 1.5h-3l-.443 3.248a7.927 7.927 0 0 0-2.165.9l-2.61-1.987-2.121 2.121 1.984 2.61a7.927 7.927 0 0 0-.9 2.165L1.5 11v3l3.248.443c.191.762.494 1.492.9 2.165l-1.984 2.61 2.121 2.121 2.61-1.984a7.925 7.925 0 0 0 2.165.9L11 23.5h3l.443-3.248a7.925 7.925 0 0 0 2.165-.9l2.61 1.984 2.121-2.121-1.984-2.61a7.925 7.925 0 0 0 .9-2.165L23.5 14Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 15.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var comment16 = {
  name: 'comment-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 5.5h7M4.5 8.5h7M15.5 7C15.5 3.41 12.142.5 8 .5 3.858.5.5 3.41.5 7s3.358 6.5 7.5 6.5c.525 0 1.037-.048 1.532-.137L13.5 15.5v-4.091c1.238-1.159 2-2.705 2-4.409Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var comment24 = {
  name: 'comment-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.9 17.3c1.6-1.6 2.6-3.6 2.6-5.8 0-5-4.9-9-11-9s-11 4-11 9 4.9 9 11 9c1.1 0 2.1-.1 3.1-.4l5.9 2.4-.6-5.2ZM8.5 9.5h8M8.5 13.5h5"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var community16 = {
  name: 'community-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 7.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.5 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5.5 9.5a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5v0ZM10.841 9a3 3 0 0 1 4.659 2.5v1h-3"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var community24 = {
  name: 'community-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.167 15.5H23.5v-3.94c0-.685-.359-1.32-.947-1.672l-2.825-1.695"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.748 3.699A3.498 3.498 0 0 1 17 1.5 3.5 3.5 0 0 1 20.5 5v1A3.5 3.5 0 0 1 17 9.5c-.547 0-1.039-.12-1.5-.344M7.358 13.39l-4.547 2.724A2.698 2.698 0 0 0 1.5 18.429V22.5h18v-4.071a2.7 2.7 0 0 0-1.311-2.315l-4.547-2.724"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 14.5a5 5 0 0 1-5-5v-2a5 5 0 0 1 10 0v2a5 5 0 0 1-5 5Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var cross12 = {
  name: 'cross-12',
  height: 12,
  width: 12,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1.5 1.5 9 9M10.5 1.5l-9 9"/>',
 fill: 'none',
 viewBox: '0 0 12 12'
};

var cross16 = {
  name: 'cross-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5 2.5-11 11M2.5 2.5l11 11"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var cross24 = {
  name: 'cross-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.5 5.5-14 14M19.5 19.5l-14-14"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var curvedarrowleft16 = {
  name: 'curved-arrow-left-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 10.5H11a4.5 4.5 0 0 0 0-9H4.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 6.5-4 4 4 4"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var curvedarrowleft24 = {
  name: 'curved-arrow-left-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 16.5h14a7 7 0 1 0 0-14h-7"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.5 11.5-5 5 5 5"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var curvedarrowright16 = {
  name: 'curved-arrow-right-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 10.5H5a4.5 4.5 0 0 1 0-9h6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.5 6.5 4 4-4 4"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var curvedarrowright24 = {
  name: 'curved-arrow-right-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.5 16.5h-14a7 7 0 1 1 0-14h7"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.5 11.5 5 5-5 5"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var deleteforever16 = {
  name: 'delete-forever-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 5.5v8a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-8M1.5 3.5h13M5.5 3.5v-3h5v3M5.5 12.5l5-5M10.5 12.5l-5-5"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var deleteforever24 = {
  name: 'delete-forever-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.5 9.5v12a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-12M1.5 5.5h22M8.5 5.5v-4h8v4M15.5 12.485l-6 6M15.5 18.485l-6-6"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var deletex16 = {
  name: 'delete-x-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 13.5H14a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 14 2.5H5.5L.5 8l5 5.5ZM7.5 5.5l5 5M12.5 5.5l-5 5"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var deletex24 = {
  name: 'delete-x-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.5 20.5h-12l-6-8 6-8h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2ZM11.5 9.5l6 6M17.5 9.5l-6 6"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var desktop16 = {
  name: 'desktop-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 9.5h-4v-6h4M2.5 12.5h2M14.5.5h-7a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1ZM9.5 4.5h3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var desktop24 = {
  name: 'desktop-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 21.5h3M6.5 17.5h-5v-14h5M23.5 1.5h-14v22h14v-22ZM14.5 6.5h4M14.5 10.5h4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var doublechevronleft12 = {
  name: 'double-chevron-left-12',
  height: 12,
  width: 12,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5.5 4.5 6l6 5.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5.5.5 6l6 5.5"/>',
 fill: 'none',
 viewBox: '0 0 12 12'
};

var doublechevronleft16 = {
  name: 'double-chevron-left-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5.5 7.5 8l6 7.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5.5 2.5 8l6 7.5"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var doublechevronleft24 = {
  name: 'double-chevron-left-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.5 22.5-10-10 10-10"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.5 22.5-10-10 10-10"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var doublechevronright12 = {
  name: 'double-chevron-right-12',
  height: 12,
  width: 12,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1.5.5 6 5.5-6 5.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5.5 6 5.5-6 5.5"/>',
 fill: 'none',
 viewBox: '0 0 12 12'
};

var doublechevronright16 = {
  name: 'double-chevron-right-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m2.5.5 6 7.5-6 7.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.5.5 6 7.5-6 7.5"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var doublechevronright24 = {
  name: 'double-chevron-right-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 2.5 10 10-10 10"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.5 2.5 10 10-10 10"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var download16 = {
  name: 'download-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.5 6.5 4.5 5 4.5-5h-3v-6h-3v6h-3Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 10.5V14a1.5 1.5 0 0 1-1.5 1.5H2A1.5 1.5 0 0 1 .5 14v-3.5"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var download24 = {
  name: 'download-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 16.5v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4M12.5 1.5v15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.5 11.5 5 5 5-5"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var file16 = {
  name: 'file-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5h-8v15h13v-10l-5-5Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var file24 = {
  name: 'file-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5h-12v22h18v-16l-6-6Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var fileaac16 = {
  name: 'file-aac-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 14v1.5h-13v-1M1.5 7.5v-7h8l5 5v1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path fill="currentColor" d="M.877 13 2.5 7.784h1.408L5.533 13H4.285l-.672-2.64a94.839 94.839 0 0 0-.208-.832 48.097 48.097 0 0 1-.208-.848h-.032l-.2.848c-.07.293-.139.57-.208.832L2.077 13h-1.2Zm1.072-1.24v-.92h2.496v.92H1.949ZM5.674 13l1.624-5.216h1.408L10.33 13H9.082l-.672-2.64a94.839 94.839 0 0 0-.208-.832 48.186 48.186 0 0 1-.208-.848h-.032l-.2.848c-.07.293-.14.57-.208.832L6.874 13h-1.2Zm1.072-1.24v-.92h2.496v.92H6.746ZM13.246 13.096a2.58 2.58 0 0 1-.928-.168 2.209 2.209 0 0 1-.768-.504 2.45 2.45 0 0 1-.528-.84 3.245 3.245 0 0 1-.192-1.16c0-.576.11-1.067.328-1.472.224-.41.523-.723.896-.936.38-.219.8-.328 1.264-.328.331 0 .63.07.896.208.267.133.488.285.664.456l-.648.728a1.364 1.364 0 0 0-.408-.272 1.15 1.15 0 0 0-.504-.104c-.245 0-.464.07-.656.208a1.35 1.35 0 0 0-.456.576c-.112.25-.168.55-.168.896 0 .357.056.664.168.92.112.25.267.443.464.576.203.133.435.2.696.2.192 0 .366-.043.52-.128a1.68 1.68 0 0 0 .424-.336l.648.712c-.213.25-.464.443-.752.576a2.338 2.338 0 0 1-.96.192Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var fileaac24 = {
  name: 'file-aac-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21v2.5h-18V21M3.5 10.5v-9h12l6 6v3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6M23.5 10.5h-22v10h22v-10Z"/><path fill="currentColor" d="M5.377 18 7 12.784h1.408L10.033 18H8.785l-.672-2.64a94.566 94.566 0 0 0-.208-.832 48.032 48.032 0 0 1-.208-.848h-.032l-.2.848c-.07.293-.139.57-.208.832L6.577 18h-1.2Zm1.072-1.24v-.92h2.496v.92H6.449ZM10.174 18l1.624-5.216h1.408L14.83 18h-1.248l-.672-2.64a97.112 97.112 0 0 0-.208-.832 47.769 47.769 0 0 1-.208-.848h-.032l-.2.848c-.07.293-.14.57-.208.832l-.68 2.64h-1.2Zm1.072-1.24v-.92h2.496v.92h-2.496ZM17.746 18.096a2.58 2.58 0 0 1-.928-.168 2.209 2.209 0 0 1-.768-.504 2.45 2.45 0 0 1-.528-.84 3.245 3.245 0 0 1-.192-1.16c0-.576.11-1.067.328-1.472.224-.41.523-.723.896-.936.38-.219.8-.328 1.264-.328.331 0 .63.07.896.208.267.133.488.285.664.456l-.648.728a1.364 1.364 0 0 0-.408-.272 1.15 1.15 0 0 0-.504-.104c-.245 0-.464.07-.656.208a1.35 1.35 0 0 0-.456.576c-.112.25-.168.55-.168.896 0 .357.056.664.168.92.112.25.267.443.464.576.203.133.435.2.696.2.192 0 .366-.043.52-.128a1.68 1.68 0 0 0 .424-.336l.648.712c-.213.25-.464.443-.752.576a2.338 2.338 0 0 1-.96.192Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var fileavi16 = {
  name: 'file-avi-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 14.5v1h-13v-1M1.5 7.5v-7h8l5 5v1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path fill="currentColor" d="M.877 13 2.5 7.784h1.408L5.533 13H4.285l-.672-2.64a93.945 93.945 0 0 0-.208-.832 48.119 48.119 0 0 1-.208-.848h-.032l-.2.848c-.07.293-.139.57-.208.832L2.077 13h-1.2Zm1.072-1.24v-.92h2.496v.92H1.949ZM7.298 13 5.722 7.784H6.97l.624 2.432c.08.288.149.568.208.84.064.267.133.544.208.832h.032c.085-.288.157-.565.216-.832.064-.272.133-.552.208-.84l.616-2.432h1.2L8.714 13H7.298ZM10.99 13v-.992h1.216V8.776H10.99v-.992h3.616v.992H13.39v3.232h1.216V13H10.99Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var fileavi24 = {
  name: 'file-avi-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21v2.5h-18V21M3.5 10.5v-9h12l6 6v3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6M23.5 10.5h-22v10h22v-10Z"/><path fill="currentColor" d="M5.377 18 7 12.784h1.408L10.033 18H8.785l-.672-2.64a93.689 93.689 0 0 0-.208-.832 48.25 48.25 0 0 1-.208-.848h-.032l-.2.848c-.07.293-.139.57-.208.832L6.577 18h-1.2Zm1.072-1.24v-.92h2.496v.92H6.449ZM11.798 18l-1.576-5.216h1.248l.624 2.432c.08.288.149.568.208.84.064.267.133.544.208.832h.032c.085-.288.157-.565.216-.832.064-.272.133-.552.208-.84l.616-2.432h1.2L13.214 18h-1.416ZM15.49 18v-.992h1.216v-3.232H15.49v-.992h3.616v.992H17.89v3.232h1.216V18H15.49Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var filecss16 = {
  name: 'file-css-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 14v1.5h-13v-2M1.5 7.5v-7h8l5 5v1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path fill="currentColor" d="M3.653 13.096a2.58 2.58 0 0 1-.928-.168 2.209 2.209 0 0 1-.768-.504 2.45 2.45 0 0 1-.528-.84 3.245 3.245 0 0 1-.192-1.16c0-.576.109-1.067.328-1.472.224-.41.522-.723.896-.936.378-.219.8-.328 1.264-.328.33 0 .629.07.896.208.266.133.488.285.664.456l-.648.728a1.365 1.365 0 0 0-.408-.272 1.15 1.15 0 0 0-.504-.104c-.246 0-.464.07-.656.208a1.35 1.35 0 0 0-.456.576c-.112.25-.168.55-.168.896 0 .357.056.664.168.92.112.25.266.443.464.576.202.133.434.2.696.2.192 0 .365-.043.52-.128a1.68 1.68 0 0 0 .424-.336l.648.712c-.214.25-.464.443-.752.576a2.338 2.338 0 0 1-.96.192ZM7.986 13.096c-.352 0-.702-.064-1.048-.192a3.055 3.055 0 0 1-.936-.56l.68-.808c.197.16.413.29.648.392.24.101.485.152.736.152.25 0 .434-.043.552-.128a.385.385 0 0 0 .184-.328.409.409 0 0 0-.096-.288.763.763 0 0 0-.28-.192 9.945 9.945 0 0 0-.432-.192l-.672-.288a2.448 2.448 0 0 1-.544-.296 1.57 1.57 0 0 1-.416-.464 1.372 1.372 0 0 1-.152-.664c0-.288.08-.547.24-.776a1.74 1.74 0 0 1 .672-.56 2.208 2.208 0 0 1 1-.216c.314 0 .624.059.928.176.304.117.573.288.808.512l-.6.744a2.324 2.324 0 0 0-.544-.304 1.721 1.721 0 0 0-.656-.112.85.85 0 0 0-.472.12.394.394 0 0 0-.184.352c0 .101.037.187.112.256.074.07.176.13.304.184.128.053.274.112.44.176l.632.272c.234.085.434.192.6.32.165.123.293.275.384.456.09.181.136.395.136.64 0 .288-.08.555-.24.8a1.642 1.642 0 0 1-.688.592c-.3.15-.664.224-1.096.224ZM12.782 13.096c-.352 0-.7-.064-1.048-.192a3.055 3.055 0 0 1-.936-.56l.68-.808c.198.16.414.29.648.392.24.101.486.152.736.152.251 0 .435-.043.552-.128a.385.385 0 0 0 .184-.328.409.409 0 0 0-.096-.288.763.763 0 0 0-.28-.192 9.87 9.87 0 0 0-.432-.192l-.672-.288a2.448 2.448 0 0 1-.544-.296 1.571 1.571 0 0 1-.416-.464 1.372 1.372 0 0 1-.152-.664c0-.288.08-.547.24-.776.166-.235.39-.421.672-.56a2.208 2.208 0 0 1 1-.216c.315 0 .624.059.928.176.304.117.574.288.808.512l-.6.744a2.322 2.322 0 0 0-.544-.304 1.721 1.721 0 0 0-.656-.112.85.85 0 0 0-.472.12.394.394 0 0 0-.184.352c0 .101.038.187.112.256.075.07.176.13.304.184.128.053.275.112.44.176l.632.272c.235.085.435.192.6.32.166.123.294.275.384.456.091.181.136.395.136.64 0 .288-.08.555-.24.8a1.642 1.642 0 0 1-.688.592c-.298.15-.664.224-1.096.224Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var filecss24 = {
  name: 'file-css-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21v2.5h-18V21M3.5 10.5v-9h12l6 6v3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6M23.5 10.5h-22v10h22v-10Z"/><path fill="currentColor" d="M8.153 18.096a2.58 2.58 0 0 1-.928-.168 2.209 2.209 0 0 1-.768-.504 2.45 2.45 0 0 1-.528-.84 3.245 3.245 0 0 1-.192-1.16c0-.576.109-1.067.328-1.472.224-.41.522-.723.896-.936.378-.219.8-.328 1.264-.328.33 0 .629.07.896.208.266.133.488.285.664.456l-.648.728a1.366 1.366 0 0 0-.408-.272 1.15 1.15 0 0 0-.504-.104c-.246 0-.464.07-.656.208a1.35 1.35 0 0 0-.456.576c-.112.25-.168.55-.168.896 0 .357.056.664.168.92.112.25.266.443.464.576.202.133.434.2.696.2.192 0 .365-.043.52-.128a1.68 1.68 0 0 0 .424-.336l.648.712c-.214.25-.464.443-.752.576a2.338 2.338 0 0 1-.96.192ZM12.486 18.096c-.352 0-.702-.064-1.048-.192a3.055 3.055 0 0 1-.936-.56l.68-.808c.197.16.413.29.648.392.24.101.485.152.736.152.25 0 .434-.043.552-.128a.386.386 0 0 0 .184-.328.408.408 0 0 0-.096-.288.761.761 0 0 0-.28-.192 9.738 9.738 0 0 0-.432-.192l-.672-.288a2.45 2.45 0 0 1-.544-.296 1.57 1.57 0 0 1-.416-.464 1.371 1.371 0 0 1-.152-.664c0-.288.08-.547.24-.776a1.74 1.74 0 0 1 .672-.56 2.208 2.208 0 0 1 1-.216c.314 0 .624.059.928.176.304.117.573.288.808.512l-.6.744a2.326 2.326 0 0 0-.544-.304 1.721 1.721 0 0 0-.656-.112c-.192 0-.35.04-.472.12a.394.394 0 0 0-.184.352c0 .101.037.187.112.256.074.07.176.13.304.184.128.053.274.112.44.176l.632.272c.234.085.434.192.6.32.165.123.293.275.384.456.09.181.136.395.136.64 0 .288-.08.555-.24.8a1.643 1.643 0 0 1-.688.592c-.3.15-.664.224-1.096.224ZM17.282 18.096c-.352 0-.7-.064-1.048-.192a3.057 3.057 0 0 1-.936-.56l.68-.808c.198.16.414.29.648.392.24.101.486.152.736.152.251 0 .435-.043.552-.128a.385.385 0 0 0 .184-.328.408.408 0 0 0-.096-.288.76.76 0 0 0-.28-.192 9.635 9.635 0 0 0-.432-.192l-.672-.288a2.452 2.452 0 0 1-.544-.296 1.572 1.572 0 0 1-.416-.464 1.372 1.372 0 0 1-.152-.664c0-.288.08-.547.24-.776.166-.235.39-.421.672-.56a2.208 2.208 0 0 1 1-.216c.315 0 .624.059.928.176.304.117.574.288.808.512l-.6.744a2.322 2.322 0 0 0-.544-.304 1.72 1.72 0 0 0-.656-.112.85.85 0 0 0-.472.12.394.394 0 0 0-.184.352c0 .101.038.187.112.256.075.07.176.13.304.184.128.053.275.112.44.176l.632.272a2.2 2.2 0 0 1 .6.32c.166.123.294.275.384.456.091.181.136.395.136.64 0 .288-.08.555-.24.8a1.642 1.642 0 0 1-.688.592c-.298.15-.664.224-1.096.224Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var filecsv16 = {
  name: 'file-csv-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 13v2.5h-13v-2M1.5 7.5v-7h8l5 5v1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path fill="currentColor" d="M3.653 13.096a2.58 2.58 0 0 1-.928-.168 2.209 2.209 0 0 1-.768-.504 2.45 2.45 0 0 1-.528-.84 3.245 3.245 0 0 1-.192-1.16c0-.576.109-1.067.328-1.472.224-.41.522-.723.896-.936.378-.219.8-.328 1.264-.328.33 0 .629.07.896.208.266.133.488.285.664.456l-.648.728a1.365 1.365 0 0 0-.408-.272 1.15 1.15 0 0 0-.504-.104c-.246 0-.464.07-.656.208a1.35 1.35 0 0 0-.456.576c-.112.25-.168.55-.168.896 0 .357.056.664.168.92.112.25.266.443.464.576.202.133.434.2.696.2.192 0 .365-.043.52-.128a1.68 1.68 0 0 0 .424-.336l.648.712c-.214.25-.464.443-.752.576a2.338 2.338 0 0 1-.96.192ZM7.986 13.096c-.352 0-.702-.064-1.048-.192a3.055 3.055 0 0 1-.936-.56l.68-.808c.197.16.413.29.648.392.24.101.485.152.736.152.25 0 .434-.043.552-.128a.385.385 0 0 0 .184-.328.409.409 0 0 0-.096-.288.763.763 0 0 0-.28-.192 9.945 9.945 0 0 0-.432-.192l-.672-.288a2.448 2.448 0 0 1-.544-.296 1.57 1.57 0 0 1-.416-.464 1.372 1.372 0 0 1-.152-.664c0-.288.08-.547.24-.776a1.74 1.74 0 0 1 .672-.56 2.208 2.208 0 0 1 1-.216c.314 0 .624.059.928.176.304.117.573.288.808.512l-.6.744a2.324 2.324 0 0 0-.544-.304 1.721 1.721 0 0 0-.656-.112.85.85 0 0 0-.472.12.394.394 0 0 0-.184.352c0 .101.037.187.112.256.074.07.176.13.304.184.128.053.274.112.44.176l.632.272c.234.085.434.192.6.32.165.123.293.275.384.456.09.181.136.395.136.64 0 .288-.08.555-.24.8a1.642 1.642 0 0 1-.688.592c-.3.15-.664.224-1.096.224ZM12.094 13l-1.576-5.216h1.248l.624 2.432c.08.288.15.568.208.84.064.267.134.544.208.832h.032c.086-.288.158-.565.216-.832.064-.272.134-.552.208-.84l.616-2.432h1.2L13.51 13h-1.416Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var filecsv24 = {
  name: 'file-csv-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21v2.5h-18V21M3.5 10.5v-9h12l6 6v3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6M23.5 10.5h-22v10h22v-10Z"/><path fill="currentColor" d="M8.153 18.096a2.58 2.58 0 0 1-.928-.168 2.209 2.209 0 0 1-.768-.504 2.45 2.45 0 0 1-.528-.84 3.245 3.245 0 0 1-.192-1.16c0-.576.109-1.067.328-1.472.224-.41.522-.723.896-.936.378-.219.8-.328 1.264-.328.33 0 .629.07.896.208.266.133.488.285.664.456l-.648.728a1.366 1.366 0 0 0-.408-.272 1.15 1.15 0 0 0-.504-.104c-.246 0-.464.07-.656.208a1.35 1.35 0 0 0-.456.576c-.112.25-.168.55-.168.896 0 .357.056.664.168.92.112.25.266.443.464.576.202.133.434.2.696.2.192 0 .365-.043.52-.128a1.68 1.68 0 0 0 .424-.336l.648.712c-.214.25-.464.443-.752.576a2.338 2.338 0 0 1-.96.192ZM12.486 18.096c-.352 0-.702-.064-1.048-.192a3.055 3.055 0 0 1-.936-.56l.68-.808c.197.16.413.29.648.392.24.101.485.152.736.152.25 0 .434-.043.552-.128a.386.386 0 0 0 .184-.328.408.408 0 0 0-.096-.288.761.761 0 0 0-.28-.192 9.738 9.738 0 0 0-.432-.192l-.672-.288a2.45 2.45 0 0 1-.544-.296 1.57 1.57 0 0 1-.416-.464 1.371 1.371 0 0 1-.152-.664c0-.288.08-.547.24-.776a1.74 1.74 0 0 1 .672-.56 2.208 2.208 0 0 1 1-.216c.314 0 .624.059.928.176.304.117.573.288.808.512l-.6.744a2.326 2.326 0 0 0-.544-.304 1.721 1.721 0 0 0-.656-.112c-.192 0-.35.04-.472.12a.394.394 0 0 0-.184.352c0 .101.037.187.112.256.074.07.176.13.304.184.128.053.274.112.44.176l.632.272c.234.085.434.192.6.32.165.123.293.275.384.456.09.181.136.395.136.64 0 .288-.08.555-.24.8a1.643 1.643 0 0 1-.688.592c-.3.15-.664.224-1.096.224ZM16.594 18l-1.576-5.216h1.248l.624 2.432c.08.288.15.568.208.84.064.267.134.544.208.832h.032c.086-.288.158-.565.216-.832.064-.272.134-.552.208-.84l.616-2.432h1.2L18.01 18h-1.416Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var filedoc16 = {
  name: 'file-doc-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 14v1.5h-13v-1M1.5 6.5v-6h8l5 5v1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path fill="currentColor" d="M1.365 13V7.784h1.44c.506 0 .946.09 1.32.272.378.181.672.464.88.848.208.379.312.867.312 1.464s-.104 1.09-.312 1.48a1.99 1.99 0 0 1-.856.872c-.368.187-.792.28-1.272.28H1.365Zm1.184-.952h.192c.277 0 .517-.053.72-.16.202-.107.36-.283.472-.528.117-.245.176-.576.176-.992 0-.416-.059-.741-.176-.976a.994.994 0 0 0-.472-.504 1.593 1.593 0 0 0-.72-.152h-.192v3.312ZM8.002 13.096c-.416 0-.782-.104-1.096-.312-.315-.208-.56-.512-.736-.912-.176-.405-.264-.907-.264-1.504 0-.581.088-1.07.264-1.464.176-.4.42-.701.736-.904.314-.208.68-.312 1.096-.312.416 0 .78.104 1.096.312.314.203.56.504.736.904.176.395.264.883.264 1.464 0 .597-.088 1.099-.264 1.504-.176.4-.422.704-.736.912-.315.208-.68.312-1.096.312Zm0-1.016a.659.659 0 0 0 .472-.192c.133-.133.234-.325.304-.576.074-.256.112-.57.112-.944 0-.363-.038-.667-.112-.912-.07-.245-.171-.432-.304-.56a.659.659 0 0 0-.472-.192.659.659 0 0 0-.472.192c-.134.128-.238.315-.312.56-.07.245-.104.55-.104.912 0 .373.034.688.104.944.074.25.178.443.312.576.133.128.29.192.472.192ZM13.246 13.096a2.58 2.58 0 0 1-.928-.168 2.209 2.209 0 0 1-.768-.504 2.45 2.45 0 0 1-.528-.84 3.245 3.245 0 0 1-.192-1.16c0-.576.11-1.067.328-1.472.224-.41.523-.723.896-.936.38-.219.8-.328 1.264-.328.331 0 .63.07.896.208.267.133.488.285.664.456l-.648.728a1.364 1.364 0 0 0-.408-.272 1.15 1.15 0 0 0-.504-.104c-.245 0-.464.07-.656.208a1.35 1.35 0 0 0-.456.576c-.112.25-.168.55-.168.896 0 .357.056.664.168.92.112.25.267.443.464.576.203.133.435.2.696.2.192 0 .366-.043.52-.128a1.68 1.68 0 0 0 .424-.336l.648.712c-.213.25-.464.443-.752.576a2.338 2.338 0 0 1-.96.192Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var filedoc24 = {
  name: 'file-doc-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21v2.5h-18V21M3.5 10.5v-9h12l6 6v3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6M23.5 10.5h-22v10h22v-10Z"/><path fill="currentColor" d="M5.865 18v-5.216h1.44c.506 0 .946.09 1.32.272.378.181.672.464.88.848.208.379.312.867.312 1.464s-.104 1.09-.312 1.48a1.99 1.99 0 0 1-.856.872c-.368.187-.792.28-1.272.28H5.865Zm1.184-.952h.192c.277 0 .517-.053.72-.16.202-.107.36-.283.472-.528.117-.245.176-.576.176-.992 0-.416-.059-.741-.176-.976a.994.994 0 0 0-.472-.504 1.593 1.593 0 0 0-.72-.152h-.192v3.312ZM12.502 18.096c-.416 0-.782-.104-1.096-.312-.315-.208-.56-.512-.736-.912-.176-.405-.264-.907-.264-1.504 0-.581.088-1.07.264-1.464.176-.4.42-.701.736-.904.314-.208.68-.312 1.096-.312.416 0 .78.104 1.096.312.314.203.56.504.736.904.176.395.264.883.264 1.464 0 .597-.088 1.099-.264 1.504-.176.4-.422.704-.736.912-.315.208-.68.312-1.096.312Zm0-1.016a.66.66 0 0 0 .472-.192c.133-.133.234-.325.304-.576.074-.256.112-.57.112-.944 0-.363-.038-.667-.112-.912-.07-.245-.171-.432-.304-.56a.66.66 0 0 0-.472-.192.659.659 0 0 0-.472.192c-.134.128-.238.315-.312.56-.07.245-.104.55-.104.912 0 .373.034.688.104.944.074.25.178.443.312.576.133.128.29.192.472.192ZM17.746 18.096a2.58 2.58 0 0 1-.928-.168 2.209 2.209 0 0 1-.768-.504 2.45 2.45 0 0 1-.528-.84 3.245 3.245 0 0 1-.192-1.16c0-.576.11-1.067.328-1.472.224-.41.523-.723.896-.936.38-.219.8-.328 1.264-.328.331 0 .63.07.896.208.267.133.488.285.664.456l-.648.728a1.364 1.364 0 0 0-.408-.272 1.15 1.15 0 0 0-.504-.104c-.245 0-.464.07-.656.208a1.35 1.35 0 0 0-.456.576c-.112.25-.168.55-.168.896 0 .357.056.664.168.92.112.25.267.443.464.576.203.133.435.2.696.2.192 0 .366-.043.52-.128a1.68 1.68 0 0 0 .424-.336l.648.712c-.213.25-.464.443-.752.576a2.338 2.338 0 0 1-.96.192Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var filedocx16 = {
  name: 'file-docx-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 14.5v1h-13v-1M1.5 7V.5h8l5 5V7"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path fill="currentColor" d="M.895 13V8.436h1.26c.444 0 .829.08 1.155.238.332.159.588.406.77.742.182.331.273.758.273 1.281 0 .523-.09.954-.273 1.295-.177.34-.427.595-.749.763A2.428 2.428 0 0 1 2.218 13H.895Zm1.036-.833H2.1c.243 0 .453-.047.63-.14a.94.94 0 0 0 .413-.462c.103-.215.154-.504.154-.868s-.05-.649-.154-.854a.87.87 0 0 0-.413-.441 1.394 1.394 0 0 0-.63-.133h-.168v2.898ZM6.303 13.084c-.364 0-.684-.09-.96-.273-.275-.182-.49-.448-.643-.798-.154-.355-.231-.793-.231-1.316 0-.509.077-.936.23-1.28.155-.35.37-.615.645-.792.275-.182.595-.273.959-.273s.683.091.959.273c.275.177.49.441.644.791.154.345.23.772.23 1.281 0 .523-.076.961-.23 1.316-.154.35-.369.616-.644.798a1.699 1.699 0 0 1-.96.273Zm0-.889a.577.577 0 0 0 .413-.168c.116-.117.205-.285.266-.504.065-.224.098-.5.098-.826 0-.317-.033-.583-.098-.798-.06-.215-.15-.378-.266-.49a.577.577 0 0 0-.413-.168.577.577 0 0 0-.413.168 1.116 1.116 0 0 0-.273.49 2.98 2.98 0 0 0-.091.798c0 .327.03.602.09.826.066.22.157.387.274.504a.577.577 0 0 0 .413.168ZM10.492 13.084c-.285 0-.555-.049-.812-.147a1.933 1.933 0 0 1-.672-.44c-.196-.202-.35-.447-.462-.736a2.84 2.84 0 0 1-.168-1.015c0-.504.096-.933.287-1.288.196-.36.457-.632.784-.819.331-.191.7-.287 1.106-.287.29 0 .55.06.784.182.233.117.427.25.581.399l-.567.637a1.194 1.194 0 0 0-.357-.238 1.006 1.006 0 0 0-.441-.091.956.956 0 0 0-.574.182 1.181 1.181 0 0 0-.399.504c-.098.22-.147.48-.147.784a2 2 0 0 0 .147.805c.098.22.233.387.406.504.177.117.38.175.609.175.168 0 .32-.037.455-.112.135-.075.259-.173.371-.294l.567.623c-.187.22-.406.387-.658.504a2.046 2.046 0 0 1-.84.168Z"/><path fill="currentColor" d="m11.923 13 1.33-2.345L12 8.436h1.155l.441.861c.052.103.105.215.161.336.056.121.12.254.19.4h.027a7.154 7.154 0 0 1 .308-.736l.406-.861h1.106l-1.253 2.268L15.871 13h-1.148l-.497-.93c-.06-.122-.121-.241-.182-.358l-.182-.392h-.028c-.056.14-.112.27-.168.392l-.168.357-.476.931h-1.099Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var filedocx24 = {
  name: 'file-docx-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21v2.5h-18V21M3.5 10.5v-9h12l6 6v3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6M23.5 10.5h-22v10h22v-10Z"/><path fill="currentColor" d="M3.466 18v-5.216h1.44c.507 0 .947.09 1.32.272.379.181.672.464.88.848.208.379.312.867.312 1.464s-.104 1.09-.312 1.48a1.99 1.99 0 0 1-.856.872c-.368.187-.792.28-1.272.28H3.466Zm1.184-.952h.192c.278 0 .518-.053.72-.16.203-.107.36-.283.472-.528.118-.245.176-.576.176-.992 0-.416-.058-.741-.176-.976a.994.994 0 0 0-.472-.504 1.593 1.593 0 0 0-.72-.152H4.65v3.312ZM10.103 18.096c-.416 0-.781-.104-1.096-.312-.315-.208-.56-.512-.736-.912-.176-.405-.264-.907-.264-1.504 0-.581.088-1.07.264-1.464.176-.4.421-.701.736-.904.315-.208.68-.312 1.096-.312.416 0 .781.104 1.096.312.315.203.56.504.736.904.176.395.264.883.264 1.464 0 .597-.088 1.099-.264 1.504-.176.4-.421.704-.736.912-.315.208-.68.312-1.096.312Zm0-1.016a.659.659 0 0 0 .472-.192c.134-.133.235-.325.304-.576.075-.256.112-.57.112-.944 0-.363-.037-.667-.112-.912-.07-.245-.17-.432-.304-.56a.659.659 0 0 0-.472-.192.659.659 0 0 0-.472.192c-.133.128-.237.315-.312.56-.07.245-.104.55-.104.912 0 .373.035.688.104.944.075.25.179.443.312.576.133.128.29.192.472.192ZM15.348 18.096a2.58 2.58 0 0 1-.928-.168 2.209 2.209 0 0 1-.768-.504 2.45 2.45 0 0 1-.528-.84 3.245 3.245 0 0 1-.192-1.16c0-.576.11-1.067.328-1.472.224-.41.523-.723.896-.936.379-.219.8-.328 1.264-.328.33 0 .63.07.896.208.267.133.488.285.664.456l-.648.728a1.367 1.367 0 0 0-.408-.272 1.15 1.15 0 0 0-.504-.104c-.245 0-.464.07-.656.208a1.35 1.35 0 0 0-.456.576c-.112.25-.168.55-.168.896 0 .357.056.664.168.92.112.25.267.443.464.576.203.133.435.2.696.2.192 0 .365-.043.52-.128a1.68 1.68 0 0 0 .424-.336l.648.712c-.213.25-.464.443-.752.576a2.338 2.338 0 0 1-.96.192ZM17.44 18l1.52-2.68-1.431-2.536h1.32l.504.984c.058.117.12.245.184.384s.136.29.216.456h.032c.058-.165.117-.317.176-.456.059-.139.117-.267.176-.384l.464-.984h1.264l-1.432 2.592L21.953 18H20.64l-.568-1.064c-.07-.139-.139-.275-.208-.408a125.99 125.99 0 0 0-.208-.448h-.032c-.064.16-.128.31-.192.448-.064.133-.128.27-.192.408L18.697 18H17.44Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var fileeps16 = {
  name: 'file-eps-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 14v1.5h-13v-1M1.5 6.5v-6h8l5 5v1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path fill="currentColor" d="M1.54 13V7.784h3.457v.992H2.725v1.048h1.928v.984H2.725v1.2h2.352V13H1.54ZM6.202 13V7.784H8.05c.378 0 .72.053 1.024.16.309.101.554.275.736.52.186.245.28.579.28 1 0 .405-.094.739-.28 1a1.684 1.684 0 0 1-.744.584c-.31.123-.648.184-1.016.184h-.672V13H6.202Zm1.176-2.704h.6c.325 0 .565-.072.72-.216.16-.144.24-.35.24-.616 0-.277-.083-.47-.248-.576-.16-.112-.398-.168-.712-.168h-.6v1.576ZM12.783 13.096c-.352 0-.702-.064-1.048-.192a3.053 3.053 0 0 1-.936-.56l.68-.808c.197.16.413.29.648.392.24.101.485.152.736.152.25 0 .434-.043.552-.128a.385.385 0 0 0 .184-.328.409.409 0 0 0-.097-.288.764.764 0 0 0-.28-.192 9.977 9.977 0 0 0-.431-.192l-.673-.288a2.446 2.446 0 0 1-.543-.296 1.569 1.569 0 0 1-.416-.464 1.371 1.371 0 0 1-.152-.664c0-.288.08-.547.24-.776a1.74 1.74 0 0 1 .671-.56 2.208 2.208 0 0 1 1-.216c.315 0 .625.059.929.176.303.117.573.288.808.512l-.6.744a2.326 2.326 0 0 0-.544-.304 1.722 1.722 0 0 0-.656-.112c-.193 0-.35.04-.473.12a.394.394 0 0 0-.184.352c0 .101.038.187.112.256.075.07.176.13.304.184.128.053.275.112.44.176l.633.272c.234.085.434.192.6.32.165.123.293.275.383.456.091.181.136.395.136.64 0 .288-.08.555-.24.8a1.642 1.642 0 0 1-.688.592c-.298.15-.664.224-1.095.224Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var fileeps24 = {
  name: 'file-eps-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21v2.5h-18V21M3.5 10.5v-9h12l6 6v3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6M23.5 10.5h-22v10h22v-10Z"/><path fill="currentColor" d="M6.04 18v-5.216h3.457v.992H7.225v1.048h1.928v.984H7.225v1.2h2.352V18H6.04ZM10.702 18v-5.216h1.848c.378 0 .72.053 1.024.16.309.101.554.275.736.52.186.245.28.579.28 1 0 .405-.094.739-.28 1a1.685 1.685 0 0 1-.744.584c-.31.123-.648.184-1.016.184h-.672V18h-1.176Zm1.176-2.704h.6c.325 0 .565-.072.72-.216.16-.144.24-.35.24-.616 0-.277-.083-.47-.248-.576-.16-.112-.398-.168-.712-.168h-.6v1.576ZM17.282 18.096c-.352 0-.7-.064-1.047-.192a3.055 3.055 0 0 1-.936-.56l.68-.808c.197.16.413.29.648.392.24.101.485.152.736.152.25 0 .434-.043.552-.128a.386.386 0 0 0 .184-.328.408.408 0 0 0-.096-.288.761.761 0 0 0-.28-.192 9.738 9.738 0 0 0-.432-.192l-.672-.288a2.45 2.45 0 0 1-.544-.296 1.57 1.57 0 0 1-.416-.464 1.371 1.371 0 0 1-.152-.664c0-.288.08-.547.24-.776a1.74 1.74 0 0 1 .672-.56 2.208 2.208 0 0 1 1-.216c.314 0 .623.059.927.176.305.117.574.288.808.512l-.6.744a2.326 2.326 0 0 0-.543-.304 1.721 1.721 0 0 0-.656-.112c-.192 0-.35.04-.473.12a.394.394 0 0 0-.184.352c0 .101.038.187.113.256.074.07.175.13.303.184.128.053.275.112.44.176l.633.272c.234.085.434.192.6.32.165.123.293.275.384.456.09.181.136.395.136.64 0 .288-.08.555-.24.8a1.643 1.643 0 0 1-.689.592c-.298.15-.663.224-1.096.224Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var fileexe16 = {
  name: 'file-exe-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 14.5v1h-13v-1M1.5 6.5v-6h8l5 5v1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path fill="currentColor" d="M1.54 13V7.784h3.457v.992H2.725v1.048h1.928v.984H2.725v1.2h2.352V13H1.54ZM5.746 13l1.52-2.68-1.432-2.536h1.32l.504.984c.058.117.12.245.184.384s.136.29.216.456h.032c.058-.165.117-.317.176-.456.058-.139.117-.267.176-.384l.464-.984h1.264l-1.432 2.592L10.258 13H8.946l-.568-1.064-.208-.408-.208-.448H7.93c-.064.16-.128.31-.192.448-.064.133-.128.27-.192.408L7.002 13H5.746ZM11.134 13V7.784h3.457v.992h-2.272v1.048h1.927v.984h-1.928v1.2h2.353V13h-3.537Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var fileexe24 = {
  name: 'file-exe-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21v2.5h-18V21M3.5 10.5v-9h12l6 6v3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6M23.5 10.5h-22v10h22v-10Z"/><path fill="currentColor" d="M6.04 18v-5.216h3.457v.992H7.225v1.048h1.928v.984H7.225v1.2h2.352V18H6.04ZM10.246 18l1.52-2.68-1.432-2.536h1.32l.504.984c.058.117.12.245.184.384s.136.29.216.456h.032c.058-.165.117-.317.176-.456.058-.139.117-.267.176-.384l.464-.984h1.264l-1.432 2.592L14.758 18h-1.312l-.568-1.064-.208-.408a110.45 110.45 0 0 0-.208-.448h-.032c-.064.16-.128.31-.192.448-.064.133-.128.27-.192.408L11.502 18h-1.256ZM15.634 18v-5.216h3.456v.992H16.82v1.048h1.928v.984h-1.928v1.2h2.352V18h-3.537Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var filegif16 = {
  name: 'file-gif-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 12.5v3h-13v-2M1.5 7V.5h8l5 5v1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path fill="currentColor" d="M3.549 13.096c-.443 0-.846-.099-1.208-.296a2.189 2.189 0 0 1-.864-.896c-.214-.4-.32-.893-.32-1.48 0-.581.106-1.075.32-1.48.213-.41.501-.723.864-.936.368-.213.776-.32 1.224-.32.352 0 .653.07.904.208.25.133.458.285.624.456l-.648.728a1.494 1.494 0 0 0-.368-.272 1.107 1.107 0 0 0-.512-.104.976.976 0 0 0-.608.208 1.349 1.349 0 0 0-.432.576c-.102.25-.152.55-.152.896 0 .357.045.664.136.92.09.25.229.443.416.576.186.133.416.2.688.2.101 0 .197-.013.288-.04a.497.497 0 0 0 .224-.12v-.896h-.76v-.96H5.18v2.4c-.176.165-.411.312-.704.44a2.259 2.259 0 0 1-.928.192ZM6.194 13v-.992H7.41V8.776H6.194v-.992H9.81v.992H8.594v3.232H9.81V13H6.194ZM11.238 13V7.784h3.464v.992h-2.288v1.208h1.952v.992h-1.952V13h-1.176Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var filegif24 = {
  name: 'file-gif-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21v2.5h-18V21M3.5 10.5v-9h12l6 6v3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6M23.5 10.5h-22v10h22v-10Z"/><path fill="currentColor" d="M8.049 18.096c-.443 0-.846-.099-1.208-.296a2.19 2.19 0 0 1-.864-.896c-.214-.4-.32-.893-.32-1.48 0-.581.106-1.075.32-1.48.213-.41.501-.723.864-.936.368-.213.776-.32 1.224-.32.352 0 .653.07.904.208.25.133.458.285.624.456l-.648.728a1.493 1.493 0 0 0-.368-.272 1.107 1.107 0 0 0-.512-.104.976.976 0 0 0-.608.208 1.348 1.348 0 0 0-.432.576c-.102.25-.152.55-.152.896 0 .357.045.664.136.92.09.25.229.443.416.576.186.133.416.2.688.2.101 0 .197-.013.288-.04a.5.5 0 0 0 .224-.12v-.896h-.76v-.96H9.68v2.4c-.176.165-.411.312-.704.44a2.259 2.259 0 0 1-.928.192ZM10.694 18v-.992h1.216v-3.232h-1.216v-.992h3.616v.992h-1.216v3.232h1.216V18h-3.616ZM15.738 18v-5.216h3.464v.992h-2.288v1.208h1.952v.992h-1.952V18h-1.176Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var filehtml16 = {
  name: 'file-html-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 14.5v1h-13v-1M1.5 7V.5h8l5 5V8"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path fill="currentColor" d="M.653 13V8.436h1.03V10.2h1.245V8.436h1.03V13h-1.03v-1.904H1.682V13H.653ZM5.585 13V9.304H4.22v-.868h3.766v.868H6.62V13H5.585ZM8.206 13V8.436h1.078l.448 1.617.154.63h.028l.154-.63.448-1.617h1.078V13h-.868v-1.414c0-.126.005-.282.014-.469.01-.191.021-.39.035-.595l.042-.588c.019-.187.033-.34.042-.462h-.021l-.35 1.218-.35 1.099h-.504l-.357-1.099-.329-1.218h-.021l.035.462c.019.187.035.383.049.588.014.205.026.404.035.595.01.187.014.343.014.469V13h-.854ZM12.346 13V8.436h1.03v3.696h2.03V13h-3.06Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var filehtml24 = {
  name: 'file-html-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21v2.5h-18V21M3.5 10.5v-9h12l6 6v3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6M23.5 10.5h-22v10h22v-10Z"/><path fill="currentColor" d="M3.418 18v-5.216h1.176V14.8h1.424v-2.016h1.176V18H6.018v-2.176H4.594V18H3.418ZM9.511 18v-4.224h-1.56v-.992h4.304v.992h-1.56V18H9.511ZM12.964 18v-5.216h1.232l.512 1.848.176.72h.032l.176-.72.512-1.848h1.232V18h-.992v-1.616c0-.144.005-.323.016-.536.01-.219.024-.445.04-.68l.048-.672c.021-.213.037-.39.048-.528h-.024l-.4 1.392-.4 1.256h-.576l-.408-1.256-.376-1.392h-.024l.04.528c.021.213.04.437.056.672.016.235.03.461.04.68.01.213.016.392.016.536V18h-.976ZM18.153 18v-5.216h1.176v4.224h2.32V18h-3.496Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var filejpg16 = {
  name: 'file-jpg-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 14v1.5h-13V14M1.5 6.5v-6h8l5 5v1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path fill="currentColor" d="M2.989 13.096c-.288 0-.59-.064-.904-.192-.31-.128-.579-.352-.808-.672l.68-.728c.149.187.309.33.48.432.17.096.341.144.512.144.266 0 .466-.07.6-.208.138-.139.208-.387.208-.744v-2.36h-2.04v-.984h3.216v3.44c0 .341-.064.653-.192.936-.123.283-.326.51-.608.68-.278.17-.659.256-1.144.256ZM6.202 13V7.784H8.05c.378 0 .72.053 1.024.16.309.101.554.275.736.52.186.245.28.579.28 1 0 .405-.094.739-.28 1a1.684 1.684 0 0 1-.744.584c-.31.123-.648.184-1.016.184h-.672V13H6.202Zm1.176-2.704h.6c.325 0 .565-.072.72-.216.16-.144.24-.35.24-.616 0-.277-.083-.47-.248-.576-.16-.112-.398-.168-.712-.168h-.6v1.576ZM13.142 13.096c-.442 0-.845-.099-1.208-.296a2.19 2.19 0 0 1-.864-.896c-.213-.4-.32-.893-.32-1.48 0-.581.107-1.075.32-1.48.214-.41.502-.723.864-.936.368-.213.776-.32 1.224-.32.352 0 .654.07.904.208.251.133.46.285.624.456l-.648.728a1.493 1.493 0 0 0-.368-.272 1.106 1.106 0 0 0-.512-.104.976.976 0 0 0-.608.208 1.35 1.35 0 0 0-.432.576c-.1.25-.152.55-.152.896 0 .357.046.664.136.92.091.25.23.443.416.576.187.133.416.2.688.2.102 0 .198-.013.288-.04a.497.497 0 0 0 .224-.12v-.896h-.76v-.96h1.816v2.4a2.45 2.45 0 0 1-.704.44 2.259 2.259 0 0 1-.928.192Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var filejpg24 = {
  name: 'file-jpg-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21v2.5h-18V21M3.5 10.5v-9h12l6 6v3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6M23.5 10.5h-22v10h22v-10Z"/><path fill="currentColor" d="M7.489 18.096c-.288 0-.59-.064-.904-.192-.31-.128-.579-.352-.808-.672l.68-.728c.149.187.309.33.48.432.17.096.341.144.512.144.266 0 .466-.07.6-.208.138-.139.208-.387.208-.744v-2.36h-2.04v-.984h3.216v3.44c0 .341-.064.653-.192.936-.123.283-.326.51-.608.68-.278.17-.659.256-1.144.256ZM10.701 18v-5.216h1.848c.38 0 .72.053 1.024.16.31.101.555.275.736.52.187.245.28.579.28 1 0 .405-.093.739-.28 1a1.684 1.684 0 0 1-.743.584c-.31.123-.649.184-1.017.184h-.671V18H10.7Zm1.176-2.704h.6c.326 0 .566-.072.72-.216.16-.144.24-.35.24-.616 0-.277-.082-.47-.247-.576-.16-.112-.398-.168-.713-.168h-.6v1.576ZM17.642 18.096c-.442 0-.845-.099-1.208-.296a2.19 2.19 0 0 1-.864-.896c-.213-.4-.32-.893-.32-1.48 0-.581.107-1.075.32-1.48.214-.41.502-.723.864-.936.368-.213.776-.32 1.224-.32.352 0 .654.07.904.208.251.133.46.285.624.456l-.648.728a1.492 1.492 0 0 0-.368-.272 1.107 1.107 0 0 0-.512-.104.976.976 0 0 0-.608.208 1.349 1.349 0 0 0-.432.576c-.1.25-.152.55-.152.896 0 .357.046.664.136.92.091.25.23.443.416.576.187.133.416.2.688.2.102 0 .198-.013.288-.04a.5.5 0 0 0 .224-.12v-.896h-.76v-.96h1.816v2.4c-.176.165-.41.312-.704.44a2.259 2.259 0 0 1-.928.192Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var filejs16 = {
  name: 'file-js-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 14v1.5h-13V14"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 14.5V.5h8l5 5v9"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path fill="currentColor" d="M5.387 13.096c-.288 0-.59-.064-.904-.192-.31-.128-.579-.352-.808-.672l.68-.728c.15.187.31.33.48.432.17.096.341.144.512.144.267 0 .467-.07.6-.208.139-.139.208-.387.208-.744v-2.36h-2.04v-.984h3.216v3.44c0 .341-.064.653-.192.936-.123.283-.325.51-.608.68-.277.17-.659.256-1.144.256ZM10.384 13.096c-.352 0-.701-.064-1.048-.192a3.055 3.055 0 0 1-.936-.56l.68-.808c.197.16.413.29.648.392.24.101.485.152.736.152.25 0 .435-.043.552-.128a.385.385 0 0 0 .184-.328.409.409 0 0 0-.096-.288.763.763 0 0 0-.28-.192 9.977 9.977 0 0 0-.432-.192l-.672-.288a2.448 2.448 0 0 1-.544-.296 1.57 1.57 0 0 1-.416-.464 1.372 1.372 0 0 1-.152-.664c0-.288.08-.547.24-.776a1.74 1.74 0 0 1 .672-.56 2.208 2.208 0 0 1 1-.216c.315 0 .624.059.928.176.304.117.573.288.808.512l-.6.744a2.324 2.324 0 0 0-.544-.304 1.721 1.721 0 0 0-.656-.112.85.85 0 0 0-.472.12.394.394 0 0 0-.184.352c0 .101.037.187.112.256.075.07.176.13.304.184.128.053.275.112.44.176l.632.272c.235.085.435.192.6.32.165.123.293.275.384.456.09.181.136.395.136.64 0 .288-.08.555-.24.8a1.642 1.642 0 0 1-.688.592c-.299.15-.664.224-1.096.224Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var filejs24 = {
  name: 'file-js-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21v2.5h-18V21M3.5 10.5v-9h12l6 6v3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6M23.5 10.5h-22v10h22v-10Z"/><path fill="currentColor" d="M9.887 18.096c-.288 0-.59-.064-.904-.192-.31-.128-.579-.352-.808-.672l.68-.728c.15.187.31.33.48.432.17.096.341.144.512.144.267 0 .467-.07.6-.208.139-.139.208-.387.208-.744v-2.36h-2.04v-.984h3.216v3.44c0 .341-.064.653-.192.936-.123.283-.325.51-.608.68-.277.17-.659.256-1.144.256ZM14.884 18.096c-.352 0-.701-.064-1.048-.192a3.057 3.057 0 0 1-.936-.56l.68-.808c.197.16.413.29.648.392.24.101.485.152.736.152.25 0 .435-.043.552-.128a.385.385 0 0 0 .184-.328.408.408 0 0 0-.096-.288.76.76 0 0 0-.28-.192 9.738 9.738 0 0 0-.432-.192l-.672-.288a2.452 2.452 0 0 1-.544-.296 1.57 1.57 0 0 1-.416-.464 1.372 1.372 0 0 1-.152-.664c0-.288.08-.547.24-.776a1.74 1.74 0 0 1 .672-.56 2.208 2.208 0 0 1 1-.216c.315 0 .624.059.928.176.304.117.573.288.808.512l-.6.744a2.324 2.324 0 0 0-.544-.304 1.72 1.72 0 0 0-.656-.112.85.85 0 0 0-.472.12.394.394 0 0 0-.184.352c0 .101.037.187.112.256.075.07.176.13.304.184.128.053.275.112.44.176l.632.272a2.2 2.2 0 0 1 .6.32c.165.123.293.275.384.456.09.181.136.395.136.64 0 .288-.08.555-.24.8a1.643 1.643 0 0 1-.688.592c-.299.15-.664.224-1.096.224Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var filejson16 = {
  name: 'file-json-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 14.5v1h-13v-1M1.5 7V.5h8l5 5V7"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path fill="currentColor" d="M2.116 13.084c-.252 0-.515-.056-.79-.168a1.65 1.65 0 0 1-.708-.588l.595-.637c.131.163.271.29.42.378.15.084.3.126.448.126.234 0 .409-.06.525-.182.122-.121.182-.338.182-.65V9.296H1.003v-.861h2.814v3.01c0 .299-.056.572-.168.82a1.283 1.283 0 0 1-.532.594c-.242.15-.576.224-1 .224ZM6.089 13.084a2.63 2.63 0 0 1-1.736-.658l.595-.707c.172.14.361.254.567.343.21.089.424.133.644.133.22 0 .38-.037.483-.112a.337.337 0 0 0 .16-.287.357.357 0 0 0-.083-.252.665.665 0 0 0-.245-.168 8.405 8.405 0 0 0-.378-.168l-.588-.252a2.15 2.15 0 0 1-.476-.259 1.375 1.375 0 0 1-.364-.406 1.2 1.2 0 0 1-.133-.58c0-.253.07-.48.21-.68.144-.205.34-.369.588-.49.252-.126.543-.189.875-.189.275 0 .546.051.812.154.266.103.501.252.707.448l-.525.651a2.034 2.034 0 0 0-.476-.266 1.506 1.506 0 0 0-.574-.098.743.743 0 0 0-.413.105.345.345 0 0 0-.161.308c0 .089.032.163.098.224.065.06.154.114.266.161.112.047.24.098.385.154l.553.238c.205.075.38.168.525.28.144.107.256.24.336.4.08.158.119.344.119.56 0 .251-.07.484-.21.7a1.438 1.438 0 0 1-.602.517c-.262.13-.581.196-.96.196ZM9.9 13.084c-.364 0-.684-.09-.959-.273-.275-.182-.49-.448-.644-.798-.154-.355-.231-.793-.231-1.316 0-.509.077-.936.231-1.28.154-.35.369-.615.644-.792.275-.182.595-.273.959-.273s.684.091.959.273c.275.177.49.441.644.791.154.345.231.772.231 1.281 0 .523-.077.961-.231 1.316-.154.35-.369.616-.644.798a1.699 1.699 0 0 1-.959.273Zm0-.889a.577.577 0 0 0 .413-.168c.117-.117.205-.285.266-.504.065-.224.098-.5.098-.826a2.78 2.78 0 0 0-.098-.798c-.06-.215-.15-.378-.266-.49a.577.577 0 0 0-.413-.168.577.577 0 0 0-.413.168 1.116 1.116 0 0 0-.273.49 2.98 2.98 0 0 0-.091.798c0 .327.03.602.091.826.065.22.156.387.273.504a.577.577 0 0 0 .413.168ZM12.06 13V8.436h1.056l.96 2.268.391 1.008h.028a29.25 29.25 0 0 0-.09-.812 6.83 6.83 0 0 1-.057-.847V8.436h.987V13h-1.057l-.959-2.275-.392-.994H12.9c.024.247.054.518.091.812.038.29.056.57.056.84V13h-.987Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var filejson24 = {
  name: 'file-json-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21v2.5h-18V21M3.5 10.5v-9h12l6 6v3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6M23.5 10.5h-22v10h22v-10Z"/><path fill="currentColor" d="M5.09 18.096c-.288 0-.589-.064-.904-.192-.309-.128-.578-.352-.808-.672l.68-.728c.15.187.31.33.48.432.171.096.342.144.512.144.267 0 .467-.07.6-.208.139-.139.208-.387.208-.744v-2.36h-2.04v-.984h3.216v3.44c0 .341-.064.653-.192.936-.122.283-.325.51-.608.68-.277.17-.658.256-1.144.256ZM10.087 18.096c-.352 0-.701-.064-1.048-.192a3.057 3.057 0 0 1-.936-.56l.68-.808c.197.16.414.29.648.392.24.101.486.152.736.152s.435-.043.552-.128a.386.386 0 0 0 .184-.328.408.408 0 0 0-.096-.288.761.761 0 0 0-.28-.192 9.738 9.738 0 0 0-.432-.192l-.672-.288a2.452 2.452 0 0 1-.544-.296 1.57 1.57 0 0 1-.416-.464 1.372 1.372 0 0 1-.152-.664c0-.288.08-.547.24-.776a1.74 1.74 0 0 1 .672-.56 2.208 2.208 0 0 1 1-.216c.315 0 .624.059.928.176.304.117.574.288.808.512l-.6.744a2.326 2.326 0 0 0-.544-.304 1.721 1.721 0 0 0-.656-.112.85.85 0 0 0-.472.12.394.394 0 0 0-.184.352c0 .101.037.187.112.256.075.07.176.13.304.184.128.053.275.112.44.176l.632.272c.235.085.435.192.6.32.166.123.293.275.384.456.09.181.136.395.136.64 0 .288-.08.555-.24.8a1.643 1.643 0 0 1-.688.592c-.299.15-.664.224-1.096.224ZM14.9 18.096c-.416 0-.781-.104-1.096-.312-.315-.208-.56-.512-.736-.912-.176-.405-.264-.907-.264-1.504 0-.581.088-1.07.264-1.464.176-.4.421-.701.736-.904.315-.208.68-.312 1.096-.312.416 0 .781.104 1.096.312.315.203.56.504.736.904.176.395.264.883.264 1.464 0 .597-.088 1.099-.264 1.504-.176.4-.421.704-.736.912-.315.208-.68.312-1.096.312Zm0-1.016a.659.659 0 0 0 .472-.192c.133-.133.235-.325.304-.576.075-.256.112-.57.112-.944 0-.363-.037-.667-.112-.912-.07-.245-.17-.432-.304-.56a.659.659 0 0 0-.472-.192.66.66 0 0 0-.472.192c-.133.128-.237.315-.312.56-.07.245-.104.55-.104.912 0 .373.035.688.104.944.075.25.179.443.312.576a.66.66 0 0 0 .472.192ZM17.825 18v-5.216h1.208l1.096 2.592.448 1.152h.032a32.673 32.673 0 0 0-.104-.928 7.834 7.834 0 0 1-.064-.968v-1.848h1.128V18H20.36l-1.096-2.6-.448-1.136h-.032c.027.283.061.592.104.928.043.33.064.65.064.96V18h-1.128Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var filemkv16 = {
  name: 'file-mkv-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 13.5v2h-13v-1M1.5 6.5v-6h8l5 5v1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path fill="currentColor" d="M1.269 13V7.784H2.5l.512 1.848.176.72h.032l.176-.72.512-1.848H5.14V13h-.992v-1.616c0-.144.005-.323.016-.536.01-.219.024-.445.04-.68l.048-.672c.021-.213.037-.39.048-.528h-.024l-.4 1.392-.4 1.256H2.9l-.408-1.256-.376-1.392h-.024l.04.528c.021.213.04.437.056.672.016.235.029.461.04.68.01.213.016.392.016.536V13h-.976ZM6.146 13V7.784h1.192V9.92h.024l1.544-2.136h1.304l-2.872 3.792V13H6.146Zm2.904 0-1.216-2.424.696-.92L10.354 13H9.05ZM12.094 13l-1.576-5.216h1.248l.624 2.432c.08.288.15.568.208.84.064.267.134.544.208.832h.032c.086-.288.158-.565.216-.832.064-.272.134-.552.208-.84l.616-2.432h1.2L13.51 13h-1.416Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var filemkv24 = {
  name: 'file-mkv-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21v2.5h-18V21M3.5 10.5v-9h12l6 6v3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6M23.5 10.5h-22v10h22v-10Z"/><path fill="currentColor" d="M5.769 18v-5.216H7l.512 1.848.176.72h.032l.176-.72.512-1.848H9.64V18h-.992v-1.616c0-.144.005-.323.016-.536.01-.219.024-.445.04-.68l.048-.672c.021-.213.037-.39.048-.528h-.024l-.4 1.392-.4 1.256H7.4l-.408-1.256-.376-1.392h-.024l.04.528c.021.213.04.437.056.672.016.235.029.461.04.68.01.213.016.392.016.536V18h-.976ZM10.646 18v-5.216h1.192v2.136h.024l1.544-2.136h1.304l-2.872 3.792V18h-1.192Zm2.904 0-1.216-2.424.696-.92L14.854 18H13.55ZM16.594 18l-1.576-5.216h1.248l.624 2.432c.08.288.15.568.208.84.064.267.134.544.208.832h.032c.086-.288.158-.565.216-.832.064-.272.134-.552.208-.84l.616-2.432h1.2L18.01 18h-1.416Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var filemov16 = {
  name: 'file-mov-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 13.5v2h-13v-1M1.5 6.5v-6h8l5 5v1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path fill="currentColor" d="M1.269 13V7.784H2.5l.512 1.848.176.72h.032l.176-.72.512-1.848H5.14V13h-.992v-1.616c0-.144.005-.323.016-.536.01-.219.024-.445.04-.68l.048-.672c.021-.213.037-.39.048-.528h-.024l-.4 1.392-.4 1.256H2.9l-.408-1.256-.376-1.392h-.024l.04.528c.021.213.04.437.056.672.016.235.029.461.04.68.01.213.016.392.016.536V13h-.976ZM8.002 13.096c-.416 0-.782-.104-1.096-.312-.315-.208-.56-.512-.736-.912-.176-.405-.264-.907-.264-1.504 0-.581.088-1.07.264-1.464.176-.4.42-.701.736-.904.314-.208.68-.312 1.096-.312.416 0 .78.104 1.096.312.314.203.56.504.736.904.176.395.264.883.264 1.464 0 .597-.088 1.099-.264 1.504-.176.4-.422.704-.736.912-.315.208-.68.312-1.096.312Zm0-1.016a.659.659 0 0 0 .472-.192c.133-.133.234-.325.304-.576.074-.256.112-.57.112-.944 0-.363-.038-.667-.112-.912-.07-.245-.171-.432-.304-.56a.659.659 0 0 0-.472-.192.659.659 0 0 0-.472.192c-.134.128-.238.315-.312.56-.07.245-.104.55-.104.912 0 .373.034.688.104.944.074.25.178.443.312.576.133.128.29.192.472.192ZM12.094 13l-1.576-5.216h1.248l.624 2.432c.08.288.15.568.208.84.064.267.134.544.208.832h.032c.086-.288.158-.565.216-.832.064-.272.134-.552.208-.84l.616-2.432h1.2L13.51 13h-1.416Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var filemov24 = {
  name: 'file-mov-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21v2.5h-18V21M3.5 10.5v-9h12l6 6v3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6M23.5 10.5h-22v10h22v-10Z"/><path fill="currentColor" d="M5.769 18v-5.216H7l.512 1.848.176.72h.032l.176-.72.512-1.848H9.64V18h-.992v-1.616c0-.144.005-.323.016-.536.01-.219.024-.445.04-.68l.048-.672c.021-.213.037-.39.048-.528h-.024l-.4 1.392-.4 1.256H7.4l-.408-1.256-.376-1.392h-.024l.04.528c.021.213.04.437.056.672.016.235.029.461.04.68.01.213.016.392.016.536V18h-.976ZM12.502 18.096c-.416 0-.782-.104-1.096-.312-.315-.208-.56-.512-.736-.912-.176-.405-.264-.907-.264-1.504 0-.581.088-1.07.264-1.464.176-.4.42-.701.736-.904.314-.208.68-.312 1.096-.312.416 0 .78.104 1.096.312.314.203.56.504.736.904.176.395.264.883.264 1.464 0 .597-.088 1.099-.264 1.504-.176.4-.422.704-.736.912-.315.208-.68.312-1.096.312Zm0-1.016a.66.66 0 0 0 .472-.192c.133-.133.234-.325.304-.576.074-.256.112-.57.112-.944 0-.363-.038-.667-.112-.912-.07-.245-.171-.432-.304-.56a.66.66 0 0 0-.472-.192.659.659 0 0 0-.472.192c-.134.128-.238.315-.312.56-.07.245-.104.55-.104.912 0 .373.034.688.104.944.074.25.178.443.312.576.133.128.29.192.472.192ZM16.594 18l-1.576-5.216h1.248l.624 2.432c.08.288.15.568.208.84.064.267.134.544.208.832h.032c.086-.288.158-.565.216-.832.064-.272.134-.552.208-.84l.616-2.432h1.2L18.01 18h-1.416Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var filemp316 = {
  name: 'file-mp3-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 14v1.5h-13v-1M1.5 6.5v-6h8l5 5V7"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path fill="currentColor" d="M1.269 13V7.784H2.5l.512 1.848.176.72h.032l.176-.72.512-1.848H5.14V13h-.992v-1.616c0-.144.005-.323.016-.536.01-.219.024-.445.04-.68l.048-.672c.021-.213.037-.39.048-.528h-.024l-.4 1.392-.4 1.256H2.9l-.408-1.256-.376-1.392h-.024l.04.528c.021.213.04.437.056.672.016.235.029.461.04.68.01.213.016.392.016.536V13h-.976ZM6.202 13V7.784H8.05c.378 0 .72.053 1.024.16.309.101.554.275.736.52.186.245.28.579.28 1 0 .405-.094.739-.28 1a1.685 1.685 0 0 1-.744.584c-.31.123-.648.184-1.016.184h-.672V13H6.202Zm1.176-2.704h.6c.325 0 .565-.072.72-.216.16-.144.24-.35.24-.616 0-.277-.083-.47-.248-.576-.16-.112-.398-.168-.712-.168h-.6v1.576ZM12.63 13.096a3.07 3.07 0 0 1-.792-.096 2.484 2.484 0 0 1-.632-.248 1.859 1.859 0 0 1-.472-.376l.544-.744c.171.15.363.272.576.368a1.72 1.72 0 0 0 1.152.08.755.755 0 0 0 .336-.208c.086-.09.128-.2.128-.328a.573.573 0 0 0-.136-.384c-.09-.112-.248-.197-.472-.256-.218-.059-.528-.088-.928-.088v-.832c.336 0 .603-.03.8-.088.198-.059.342-.139.432-.24a.512.512 0 0 0 .136-.352.48.48 0 0 0-.2-.416c-.133-.096-.317-.144-.552-.144-.197 0-.384.04-.56.12-.17.075-.344.184-.52.328l-.592-.72c.251-.203.52-.36.808-.472.288-.117.595-.176.92-.176.368 0 .694.056.976.168.283.107.502.264.656.472.16.203.24.453.24.752a.961.961 0 0 1-.256.672c-.17.187-.408.339-.712.456v.032c.214.059.406.144.576.256.176.107.312.243.408.408.102.165.152.357.152.576 0 .315-.093.584-.28.808a1.796 1.796 0 0 1-.736.504 2.872 2.872 0 0 1-1 .168Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var filemp324 = {
  name: 'file-mp3-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21v2.5h-18V21M3.5 10.5v-9h12l6 6v3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6M23.5 10.5h-22v10h22v-10Z"/><path fill="currentColor" d="M5.769 18v-5.216H7l.512 1.848.176.72h.032l.176-.72.512-1.848H9.64V18h-.992v-1.616c0-.144.005-.323.016-.536.01-.219.024-.445.04-.68l.048-.672c.021-.213.037-.39.048-.528h-.024l-.4 1.392-.4 1.256H7.4l-.408-1.256-.376-1.392h-.024l.04.528c.021.213.04.437.056.672.016.235.029.461.04.68.01.213.016.392.016.536V18h-.976ZM10.702 18v-5.216h1.848c.378 0 .72.053 1.024.16.309.101.554.275.736.52.186.245.28.579.28 1 0 .405-.094.739-.28 1a1.685 1.685 0 0 1-.744.584c-.31.123-.648.184-1.016.184h-.672V18h-1.176Zm1.176-2.704h.6c.325 0 .565-.072.72-.216.16-.144.24-.35.24-.616 0-.277-.083-.47-.248-.576-.16-.112-.398-.168-.712-.168h-.6v1.576ZM17.13 18.096a3.07 3.07 0 0 1-.792-.096 2.484 2.484 0 0 1-.632-.248 1.859 1.859 0 0 1-.472-.376l.544-.744c.171.15.363.272.576.368a1.72 1.72 0 0 0 1.152.08.755.755 0 0 0 .336-.208c.086-.09.128-.2.128-.328a.573.573 0 0 0-.136-.384c-.09-.112-.248-.197-.472-.256-.218-.059-.528-.088-.928-.088v-.832c.336 0 .603-.03.8-.088.198-.059.342-.139.432-.24a.512.512 0 0 0 .136-.352.48.48 0 0 0-.2-.416c-.133-.096-.317-.144-.552-.144-.197 0-.384.04-.56.12-.17.075-.344.184-.52.328l-.592-.72c.251-.203.52-.36.808-.472.288-.117.595-.176.92-.176.368 0 .694.056.976.168.283.107.502.264.656.472.16.203.24.453.24.752a.961.961 0 0 1-.256.672c-.17.187-.408.339-.712.456v.032c.214.059.406.144.576.256.176.107.312.243.408.408.102.165.152.357.152.576 0 .315-.093.584-.28.808a1.796 1.796 0 0 1-.736.504 2.872 2.872 0 0 1-1 .168Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var filemp416 = {
  name: 'file-mp4-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 14.5v1h-13v-1M1.5 6.5v-6h8l5 5v1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path fill="currentColor" d="M1.269 13V7.784H2.5l.512 1.848.176.72h.032l.176-.72.512-1.848H5.14V13h-.992v-1.616c0-.144.005-.323.016-.536.01-.219.024-.445.04-.68l.048-.672c.021-.213.037-.39.048-.528h-.024l-.4 1.392-.4 1.256H2.9l-.408-1.256-.376-1.392h-.024l.04.528c.021.213.04.437.056.672.016.235.029.461.04.68.01.213.016.392.016.536V13h-.976ZM6.202 13V7.784H8.05c.378 0 .72.053 1.024.16.309.101.554.275.736.52.186.245.28.579.28 1 0 .405-.094.739-.28 1a1.685 1.685 0 0 1-.744.584c-.31.123-.648.184-1.016.184h-.672V13H6.202Zm1.176-2.704h.6c.325 0 .565-.072.72-.216.16-.144.24-.35.24-.616 0-.277-.083-.47-.248-.576-.16-.112-.398-.168-.712-.168h-.6v1.576ZM13.126 13v-2.968c0-.16.006-.344.016-.552.011-.213.02-.4.024-.56h-.032a8.2 8.2 0 0 1-.28.424c-.096.144-.186.29-.272.44l-.768 1.104h3.048v.896h-4.184v-.808l2.12-3.056h1.424V13h-1.096Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var filemp424 = {
  name: 'file-mp4-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21v2.5h-18V21M3.5 10.5v-9h12l6 6v3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6M23.5 10.5h-22v10h22v-10Z"/><path fill="currentColor" d="M5.769 18v-5.216H7l.512 1.848.176.72h.032l.176-.72.512-1.848H9.64V18h-.992v-1.616c0-.144.005-.323.016-.536.01-.219.024-.445.04-.68l.048-.672c.021-.213.037-.39.048-.528h-.024l-.4 1.392-.4 1.256H7.4l-.408-1.256-.376-1.392h-.024l.04.528c.021.213.04.437.056.672.016.235.029.461.04.68.01.213.016.392.016.536V18h-.976ZM10.702 18v-5.216h1.848c.378 0 .72.053 1.024.16.309.101.554.275.736.52.186.245.28.579.28 1 0 .405-.094.739-.28 1a1.685 1.685 0 0 1-.744.584c-.31.123-.648.184-1.016.184h-.672V18h-1.176Zm1.176-2.704h.6c.325 0 .565-.072.72-.216.16-.144.24-.35.24-.616 0-.277-.083-.47-.248-.576-.16-.112-.398-.168-.712-.168h-.6v1.576ZM17.626 18v-2.968c0-.16.006-.344.016-.552.011-.213.02-.4.024-.56h-.032c-.085.139-.178.28-.28.424-.096.144-.186.29-.272.44l-.768 1.104h3.048v.896h-4.184v-.808l2.12-3.056h1.424V18h-1.096Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var filempg16 = {
  name: 'file-mpg-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 14v1.5h-13v-1M1.5 6.5v-6h8l5 5v1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path fill="currentColor" d="M1.269 13V7.784H2.5l.512 1.848.176.72h.032l.176-.72.512-1.848H5.14V13h-.992v-1.616c0-.144.005-.323.016-.536.01-.219.024-.445.04-.68l.048-.672c.021-.213.037-.39.048-.528h-.024l-.4 1.392-.4 1.256H2.9l-.408-1.256-.376-1.392h-.024l.04.528c.021.213.04.437.056.672.016.235.029.461.04.68.01.213.016.392.016.536V13h-.976ZM6.202 13V7.784H8.05c.378 0 .72.053 1.024.16.309.101.554.275.736.52.186.245.28.579.28 1 0 .405-.094.739-.28 1a1.684 1.684 0 0 1-.744.584c-.31.123-.648.184-1.016.184h-.672V13H6.202Zm1.176-2.704h.6c.325 0 .565-.072.72-.216.16-.144.24-.35.24-.616 0-.277-.083-.47-.248-.576-.16-.112-.398-.168-.712-.168h-.6v1.576ZM13.142 13.096c-.442 0-.845-.099-1.208-.296a2.19 2.19 0 0 1-.864-.896c-.213-.4-.32-.893-.32-1.48 0-.581.107-1.075.32-1.48.214-.41.502-.723.864-.936.368-.213.776-.32 1.224-.32.352 0 .654.07.904.208.251.133.46.285.624.456l-.648.728a1.493 1.493 0 0 0-.368-.272 1.106 1.106 0 0 0-.512-.104.976.976 0 0 0-.608.208 1.35 1.35 0 0 0-.432.576c-.1.25-.152.55-.152.896 0 .357.046.664.136.92.091.25.23.443.416.576.187.133.416.2.688.2.102 0 .198-.013.288-.04a.497.497 0 0 0 .224-.12v-.896h-.76v-.96h1.816v2.4a2.45 2.45 0 0 1-.704.44 2.259 2.259 0 0 1-.928.192Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var filempg24 = {
  name: 'file-mpg-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21v2.5h-18V21M3.5 10.5v-9h12l6 6v3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6M23.5 10.5h-22v10h22v-10Z"/><path fill="currentColor" d="M5.769 18v-5.216H7l.512 1.848.176.72h.032l.176-.72.512-1.848H9.64V18h-.992v-1.616c0-.144.005-.323.016-.536.01-.219.024-.445.04-.68l.048-.672c.021-.213.037-.39.048-.528h-.024l-.4 1.392-.4 1.256H7.4l-.408-1.256-.376-1.392h-.024l.04.528c.021.213.04.437.056.672.016.235.029.461.04.68.01.213.016.392.016.536V18h-.976ZM10.702 18v-5.216h1.848c.378 0 .72.053 1.024.16.309.101.554.275.736.52.186.245.28.579.28 1 0 .405-.094.739-.28 1a1.685 1.685 0 0 1-.744.584c-.31.123-.648.184-1.016.184h-.672V18h-1.176Zm1.176-2.704h.6c.325 0 .565-.072.72-.216.16-.144.24-.35.24-.616 0-.277-.083-.47-.248-.576-.16-.112-.398-.168-.712-.168h-.6v1.576ZM17.642 18.096c-.442 0-.845-.099-1.208-.296a2.19 2.19 0 0 1-.864-.896c-.213-.4-.32-.893-.32-1.48 0-.581.107-1.075.32-1.48.214-.41.502-.723.864-.936.368-.213.776-.32 1.224-.32.352 0 .654.07.904.208.251.133.46.285.624.456l-.648.728a1.492 1.492 0 0 0-.368-.272 1.107 1.107 0 0 0-.512-.104.976.976 0 0 0-.608.208 1.349 1.349 0 0 0-.432.576c-.1.25-.152.55-.152.896 0 .357.046.664.136.92.091.25.23.443.416.576.187.133.416.2.688.2.102 0 .198-.013.288-.04a.5.5 0 0 0 .224-.12v-.896h-.76v-.96h1.816v2.4c-.176.165-.41.312-.704.44a2.259 2.259 0 0 1-.928.192Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var fileotf16 = {
  name: 'file-otf-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 12.5v3h-13V14M1.5 7V.5h8l5 5v1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path fill="currentColor" d="M3.205 13.096c-.416 0-.782-.104-1.096-.312-.315-.208-.56-.512-.736-.912-.176-.405-.264-.907-.264-1.504 0-.581.088-1.07.264-1.464.176-.4.421-.701.736-.904.314-.208.68-.312 1.096-.312.416 0 .781.104 1.096.312.314.203.56.504.736.904.176.395.264.883.264 1.464 0 .597-.088 1.099-.264 1.504-.176.4-.422.704-.736.912-.315.208-.68.312-1.096.312Zm0-1.016a.659.659 0 0 0 .472-.192c.133-.133.234-.325.304-.576.074-.256.112-.57.112-.944 0-.363-.038-.667-.112-.912-.07-.245-.171-.432-.304-.56a.659.659 0 0 0-.472-.192.659.659 0 0 0-.472.192c-.134.128-.238.315-.312.56-.07.245-.104.55-.104.912 0 .373.034.688.104.944.074.25.178.443.312.576.133.128.29.192.472.192ZM7.41 13V8.776H5.85v-.992h4.304v.992h-1.56V13H7.41ZM11.239 13V7.784h3.463v.992h-2.287v1.208h1.952v.992h-1.953V13H11.24Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var fileotf24 = {
  name: 'file-otf-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21v2.5h-18V21M3.5 10.5v-9h12l6 6v3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6M23.5 10.5h-22v10h22v-10Z"/><path fill="currentColor" d="M7.705 18.096c-.416 0-.782-.104-1.096-.312-.315-.208-.56-.512-.736-.912-.176-.405-.264-.907-.264-1.504 0-.581.088-1.07.264-1.464.176-.4.421-.701.736-.904.314-.208.68-.312 1.096-.312.416 0 .781.104 1.096.312.314.203.56.504.736.904.176.395.264.883.264 1.464 0 .597-.088 1.099-.264 1.504-.176.4-.422.704-.736.912-.315.208-.68.312-1.096.312Zm0-1.016a.659.659 0 0 0 .472-.192c.133-.133.234-.325.304-.576.074-.256.112-.57.112-.944 0-.363-.038-.667-.112-.912-.07-.245-.171-.432-.304-.56a.659.659 0 0 0-.472-.192.659.659 0 0 0-.472.192c-.134.128-.238.315-.312.56-.07.245-.104.55-.104.912 0 .373.034.688.104.944.074.25.178.443.312.576.133.128.29.192.472.192ZM11.91 18v-4.224h-1.56v-.992h4.303v.992h-1.56V18H11.91ZM15.738 18v-5.216h3.464v.992h-2.288v1.208h1.952v.992h-1.952V18h-1.176Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var filepng16 = {
  name: 'file-png-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 14v1.5h-13v-1M1.5 6.5v-6h8l5 5v1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path fill="currentColor" d="M1.405 13V7.784h1.848c.378 0 .72.053 1.024.16.309.101.554.275.736.52.186.245.28.579.28 1 0 .405-.094.739-.28 1a1.684 1.684 0 0 1-.744.584c-.31.123-.648.184-1.016.184H2.58V13H1.405Zm1.176-2.704h.6c.325 0 .565-.072.72-.216.16-.144.24-.35.24-.616 0-.277-.083-.47-.248-.576-.16-.112-.398-.168-.712-.168h-.6v1.576ZM6.13 13V7.784h1.208l1.096 2.592.448 1.152h.032a33.123 33.123 0 0 0-.104-.928 7.82 7.82 0 0 1-.064-.968V7.784h1.128V13H8.666L7.57 10.4l-.448-1.136H7.09c.026.283.06.592.104.928.042.33.064.65.064.96V13H6.13ZM13.142 13.096c-.442 0-.845-.099-1.208-.296a2.188 2.188 0 0 1-.864-.896c-.213-.4-.32-.893-.32-1.48 0-.581.107-1.075.32-1.48.214-.41.502-.723.864-.936.368-.213.776-.32 1.224-.32.352 0 .654.07.904.208.251.133.46.285.624.456l-.648.728a1.495 1.495 0 0 0-.368-.272 1.106 1.106 0 0 0-.512-.104.976.976 0 0 0-.608.208 1.35 1.35 0 0 0-.432.576c-.1.25-.152.55-.152.896 0 .357.046.664.136.92.091.25.23.443.416.576.187.133.416.2.688.2.102 0 .198-.013.288-.04a.497.497 0 0 0 .224-.12v-.896h-.76v-.96h1.816v2.4c-.176.165-.41.312-.704.44a2.259 2.259 0 0 1-.928.192Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var filepng24 = {
  name: 'file-png-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21v2.5h-18V21M3.5 10.5v-9h12l6 6v3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6M23.5 10.5h-22v10h22v-10Z"/><path fill="currentColor" d="M5.905 18v-5.216h1.848c.378 0 .72.053 1.024.16.309.101.554.275.736.52.186.245.28.579.28 1 0 .405-.094.739-.28 1a1.685 1.685 0 0 1-.744.584c-.31.123-.648.184-1.016.184H7.08V18H5.905Zm1.176-2.704h.6c.325 0 .565-.072.72-.216.16-.144.24-.35.24-.616 0-.277-.083-.47-.248-.576-.16-.112-.398-.168-.712-.168h-.6v1.576ZM10.63 18v-5.216h1.207l1.097 2.592.448 1.152h.032a32.673 32.673 0 0 0-.104-.928 7.834 7.834 0 0 1-.065-.968v-1.848h1.129V18h-1.209l-1.095-2.6-.449-1.136h-.032c.027.283.062.592.104.928.043.33.065.65.065.96V18H10.63ZM17.642 18.096c-.442 0-.845-.099-1.208-.296a2.189 2.189 0 0 1-.864-.896c-.213-.4-.32-.893-.32-1.48 0-.581.107-1.075.32-1.48.214-.41.502-.723.864-.936.368-.213.776-.32 1.224-.32.352 0 .654.07.904.208.251.133.46.285.624.456l-.648.728a1.494 1.494 0 0 0-.368-.272 1.107 1.107 0 0 0-.512-.104.976.976 0 0 0-.608.208 1.349 1.349 0 0 0-.432.576c-.1.25-.152.55-.152.896 0 .357.046.664.136.92.091.25.23.443.416.576.187.133.416.2.688.2.102 0 .198-.013.288-.04a.5.5 0 0 0 .224-.12v-.896h-.76v-.96h1.816v2.4c-.176.165-.41.312-.704.44a2.259 2.259 0 0 1-.928.192Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var filepptx16 = {
  name: 'file-pptx-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 14.5v1h-13v-1M1.5 7V.5h8l5 5V7"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path fill="currentColor" d="M.73 13V8.436h1.617c.332 0 .63.047.896.14.271.089.486.24.644.455.164.215.245.506.245.875 0 .355-.081.646-.245.875-.163.229-.38.399-.65.511a2.39 2.39 0 0 1-.89.161H1.76V13H.73Zm1.03-2.366h.524c.285 0 .495-.063.63-.189.14-.126.21-.306.21-.539 0-.243-.072-.41-.217-.504-.14-.098-.347-.147-.623-.147H1.76v1.379ZM4.528 13V8.436h1.617c.331 0 .63.047.896.14.27.089.485.24.644.455.163.215.245.506.245.875 0 .355-.082.646-.245.875-.164.229-.38.399-.651.511a2.39 2.39 0 0 1-.89.161h-.587V13h-1.03Zm1.029-2.366h.525c.284 0 .494-.063.63-.189.14-.126.21-.306.21-.539 0-.243-.073-.41-.217-.504-.14-.098-.348-.147-.623-.147h-.525v1.379ZM9.382 13V9.304H8.017v-.868h3.766v.868h-1.365V13H9.382ZM11.723 13l1.33-2.345L11.8 8.436h1.155l.441.861c.052.103.105.215.161.336.056.121.12.254.19.399h.027a7.18 7.18 0 0 1 .308-.735l.406-.861h1.106l-1.253 2.268L15.671 13h-1.148l-.497-.931c-.06-.121-.121-.24-.182-.357l-.182-.392h-.028c-.056.14-.112.27-.168.392l-.168.357-.476.931h-1.099Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var filepptx24 = {
  name: 'file-pptx-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21v2.5h-18V21M3.5 10.5v-9h12l6 6v3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6M23.5 10.5h-22v10h22v-10Z"/><path fill="currentColor" d="M3.506 18v-5.216h1.848c.379 0 .72.053 1.024.16.31.101.555.275.736.52.187.245.28.579.28 1 0 .405-.093.739-.28 1a1.685 1.685 0 0 1-.744.584c-.31.123-.648.184-1.016.184h-.672V18H3.506Zm1.176-2.704h.6c.326 0 .566-.072.72-.216.16-.144.24-.35.24-.616 0-.277-.082-.47-.248-.576-.16-.112-.397-.168-.712-.168h-.6v1.576ZM8.303 18v-5.216h1.848c.379 0 .72.053 1.024.16.31.101.555.275.736.52.187.245.28.579.28 1 0 .405-.093.739-.28 1a1.685 1.685 0 0 1-.744.584c-.31.123-.648.184-1.016.184H9.48V18H8.303Zm1.176-2.704h.6c.325 0 .565-.072.72-.216.16-.144.24-.35.24-.616 0-.277-.083-.47-.248-.576-.16-.112-.397-.168-.712-.168h-.6v1.576ZM14.308 18v-4.224h-1.56v-.992h4.304v.992h-1.56V18h-1.184ZM17.44 18l1.52-2.68-1.431-2.536h1.32l.504.984c.058.117.12.245.184.384s.136.29.216.456h.032c.058-.165.117-.317.176-.456.059-.139.117-.267.176-.384l.464-.984h1.264l-1.432 2.592L21.953 18H20.64l-.568-1.064c-.07-.139-.139-.275-.208-.408a125.99 125.99 0 0 0-.208-.448h-.032c-.064.16-.128.31-.192.448-.064.133-.128.27-.192.408L18.697 18H17.44Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var filerar16 = {
  name: 'file-rar-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 14.5v1h-13v-1M1.5 6.5v-6h8l5 5v1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path fill="currentColor" d="M1.365 13V7.784h1.848c.368 0 .704.05 1.008.152.304.096.546.264.728.504.186.235.28.557.28.968 0 .4-.094.725-.28.976-.182.25-.424.437-.728.56-.304.117-.64.176-1.008.176H2.54V13H1.365Zm1.176-2.816h.576c.309 0 .544-.064.704-.192.165-.133.248-.328.248-.584 0-.256-.083-.435-.248-.536-.16-.101-.395-.152-.704-.152H2.54v1.464Zm.456.632.816-.76L5.477 13h-1.32l-1.16-2.184ZM5.674 13l1.624-5.216h1.408L10.33 13H9.082l-.672-2.64a93.945 93.945 0 0 0-.208-.832 48.119 48.119 0 0 1-.208-.848h-.032l-.2.848c-.07.293-.14.57-.208.832L6.874 13h-1.2Zm1.072-1.24v-.92h2.496v.92H6.746ZM10.958 13V7.784h1.848c.368 0 .704.05 1.008.152.304.096.547.264.728.504.187.235.28.557.28.968 0 .4-.093.725-.28.976-.18.25-.424.437-.728.56-.304.117-.64.176-1.008.176h-.672V13h-1.176Zm1.176-2.816h.576c.31 0 .544-.064.704-.192.166-.133.248-.328.248-.584 0-.256-.082-.435-.248-.536-.16-.101-.394-.152-.704-.152h-.576v1.464Zm.456.632.816-.76L15.07 13h-1.32l-1.16-2.184Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var filerar24 = {
  name: 'file-rar-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21v2.5h-18V21M3.5 10.5v-9h12l6 6v3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6M23.5 10.5h-22v10h22v-10Z"/><path fill="currentColor" d="M5.865 18v-5.216h1.848c.368 0 .704.05 1.008.152.304.096.546.264.728.504.186.235.28.557.28.968 0 .4-.094.725-.28.976-.182.25-.424.437-.728.56-.304.117-.64.176-1.008.176H7.04V18H5.865Zm1.176-2.816h.576c.31 0 .544-.064.704-.192.165-.133.248-.328.248-.584 0-.256-.083-.435-.248-.536-.16-.101-.395-.152-.704-.152H7.04v1.464Zm.456.632.816-.76L9.977 18h-1.32l-1.16-2.184ZM10.174 18l1.624-5.216h1.408L14.83 18h-1.248l-.672-2.64a92.658 92.658 0 0 0-.208-.832 48.88 48.88 0 0 1-.208-.848h-.032l-.2.848c-.07.293-.139.57-.208.832l-.68 2.64h-1.2Zm1.072-1.24v-.92h2.496v.92h-2.496ZM15.459 18v-5.216h1.848c.367 0 .704.05 1.008.152.303.096.546.264.727.504.187.235.28.557.28.968 0 .4-.093.725-.28.976-.18.25-.424.437-.728.56-.303.117-.64.176-1.008.176h-.672V18H15.46Zm1.175-2.816h.576c.31 0 .544-.064.704-.192.166-.133.248-.328.248-.584 0-.256-.082-.435-.247-.536-.16-.101-.395-.152-.704-.152h-.576v1.464Zm.456.632.817-.76L19.57 18h-1.32l-1.16-2.184Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var filertf16 = {
  name: 'file-rtf-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 12.5v3h-13v-1M1.5 6.5v-6h8l5 5v1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path fill="currentColor" d="M1.365 13V7.784h1.848c.368 0 .704.05 1.008.152.304.096.546.264.728.504.186.235.28.557.28.968 0 .4-.094.725-.28.976-.182.25-.424.437-.728.56-.304.117-.64.176-1.008.176H2.54V13H1.365Zm1.176-2.816h.576c.31 0 .544-.064.704-.192.165-.133.248-.328.248-.584 0-.256-.083-.435-.248-.536-.16-.101-.395-.152-.704-.152H2.54v1.464Zm.456.632.816-.76L5.477 13h-1.32l-1.16-2.184ZM7.41 13V8.776H5.85v-.992h4.304v.992h-1.56V13H7.41ZM11.239 13V7.784h3.463v.992h-2.287v1.208h1.952v.992h-1.953V13H11.24Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var filertf24 = {
  name: 'file-rtf-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21v2.5h-18V21M3.5 10.5v-9h12l6 6v3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6M23.5 10.5h-22v10h22v-10Z"/><path fill="currentColor" d="M5.865 18v-5.216h1.848c.368 0 .704.05 1.008.152.304.096.546.264.728.504.186.235.28.557.28.968 0 .4-.094.725-.28.976-.182.25-.424.437-.728.56-.304.117-.64.176-1.008.176H7.04V18H5.865Zm1.176-2.816h.576c.31 0 .544-.064.704-.192.165-.133.248-.328.248-.584 0-.256-.083-.435-.248-.536-.16-.101-.395-.152-.704-.152H7.04v1.464Zm.456.632.816-.76L9.977 18h-1.32l-1.16-2.184ZM11.91 18v-4.224h-1.56v-.992h4.304v.992h-1.56V18H11.91ZM15.739 18v-5.216h3.463v.992h-2.288v1.208h1.952v.992h-1.951V18h-1.176Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var filesql16 = {
  name: 'file-sql-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 14.5v1h-13V14M1.5 7V.5h8l5 5v4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path fill="currentColor" d="M3.189 13.096c-.352 0-.702-.064-1.048-.192a3.055 3.055 0 0 1-.936-.56l.68-.808c.197.16.413.29.648.392.24.101.485.152.736.152.25 0 .434-.043.552-.128a.385.385 0 0 0 .184-.328.409.409 0 0 0-.096-.288.763.763 0 0 0-.28-.192 9.934 9.934 0 0 0-.432-.192l-.672-.288a2.448 2.448 0 0 1-.544-.296 1.57 1.57 0 0 1-.416-.464 1.372 1.372 0 0 1-.152-.664c0-.288.08-.547.24-.776a1.74 1.74 0 0 1 .672-.56 2.208 2.208 0 0 1 1-.216c.314 0 .624.059.928.176.304.117.573.288.808.512l-.6.744a2.324 2.324 0 0 0-.544-.304 1.721 1.721 0 0 0-.656-.112.85.85 0 0 0-.472.12.394.394 0 0 0-.184.352c0 .101.037.187.112.256.074.07.176.13.304.184.128.053.274.112.44.176l.632.272c.234.085.434.192.6.32.165.123.293.275.384.456.09.181.136.395.136.64 0 .288-.08.555-.24.8a1.642 1.642 0 0 1-.688.592c-.299.15-.664.224-1.096.224ZM8.002 13.096c-.416 0-.782-.104-1.096-.312-.315-.208-.56-.512-.736-.912-.176-.405-.264-.907-.264-1.504 0-.581.088-1.07.264-1.464.176-.4.42-.701.736-.904.314-.208.68-.312 1.096-.312.416 0 .78.104 1.096.312.314.203.56.504.736.904.176.395.264.883.264 1.464 0 .597-.088 1.099-.264 1.504-.176.4-.422.704-.736.912-.315.208-.68.312-1.096.312Zm0-.96a.659.659 0 0 0 .472-.192c.133-.128.234-.32.304-.576.074-.261.112-.595.112-1 0-.363-.038-.667-.112-.912-.07-.245-.171-.432-.304-.56a.659.659 0 0 0-.472-.192.659.659 0 0 0-.472.192c-.134.128-.238.315-.312.56-.07.245-.104.55-.104.912 0 .405.034.739.104 1 .074.256.178.448.312.576.133.128.29.192.472.192Zm1.496 2.288c-.518 0-.952-.136-1.304-.408a2.354 2.354 0 0 1-.76-1.048l1.192-.12a.854.854 0 0 0 .592.576c.138.037.28.056.424.056.08 0 .154-.01.224-.032.074-.021.138-.045.192-.072l.208.88a1.297 1.297 0 0 1-.32.12 1.86 1.86 0 0 1-.448.048ZM11.255 13V7.784h1.175v4.224h2.32V13h-3.495Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var filesql24 = {
  name: 'file-sql-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21v2.5h-18V21M3.5 10.5v-9h12l6 6v3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6M23.5 10.5h-22v10h22v-10Z"/><path fill="currentColor" d="M7.689 18.096c-.352 0-.702-.064-1.048-.192a3.057 3.057 0 0 1-.936-.56l.68-.808c.197.16.413.29.648.392.24.101.485.152.736.152.25 0 .434-.043.552-.128a.385.385 0 0 0 .184-.328.408.408 0 0 0-.096-.288.76.76 0 0 0-.28-.192 9.697 9.697 0 0 0-.432-.192l-.672-.288a2.452 2.452 0 0 1-.544-.296 1.571 1.571 0 0 1-.416-.464 1.372 1.372 0 0 1-.152-.664c0-.288.08-.547.24-.776a1.74 1.74 0 0 1 .672-.56 2.208 2.208 0 0 1 1-.216c.314 0 .624.059.928.176.304.117.573.288.808.512l-.6.744a2.324 2.324 0 0 0-.544-.304 1.72 1.72 0 0 0-.656-.112.85.85 0 0 0-.472.12.394.394 0 0 0-.184.352c0 .101.037.187.112.256.074.07.176.13.304.184.128.053.274.112.44.176l.632.272c.234.085.434.192.6.32.165.123.293.275.384.456.09.181.136.395.136.64 0 .288-.08.555-.24.8a1.643 1.643 0 0 1-.688.592c-.299.15-.664.224-1.096.224ZM12.502 18.096c-.416 0-.782-.104-1.096-.312-.315-.208-.56-.512-.736-.912-.176-.405-.264-.907-.264-1.504 0-.581.088-1.07.264-1.464.176-.4.42-.701.736-.904.314-.208.68-.312 1.096-.312.416 0 .78.104 1.096.312.314.203.56.504.736.904.176.395.264.883.264 1.464 0 .597-.088 1.099-.264 1.504-.176.4-.422.704-.736.912-.315.208-.68.312-1.096.312Zm0-.96a.659.659 0 0 0 .472-.192c.133-.128.234-.32.304-.576.074-.261.112-.595.112-1 0-.363-.038-.667-.112-.912-.07-.245-.171-.432-.304-.56a.659.659 0 0 0-.472-.192.659.659 0 0 0-.472.192c-.134.128-.238.315-.312.56-.07.245-.104.55-.104.912 0 .405.034.739.104 1 .074.256.178.448.312.576.133.128.29.192.472.192Zm1.496 2.288c-.518 0-.952-.136-1.304-.408a2.354 2.354 0 0 1-.76-1.048l1.192-.12a.854.854 0 0 0 .592.576c.138.037.28.056.424.056.08 0 .154-.01.224-.032.074-.021.138-.045.192-.072l.208.88a1.297 1.297 0 0 1-.32.12 1.86 1.86 0 0 1-.448.048ZM15.755 18v-5.216h1.175v4.224h2.32V18h-3.495Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var filesvg16 = {
  name: 'file-svg-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 14v1.5h-13V14M1.5 7V.5h8l5 5v1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path fill="currentColor" d="M3.189 13.096c-.352 0-.702-.064-1.048-.192a3.055 3.055 0 0 1-.936-.56l.68-.808c.197.16.413.29.648.392.24.101.485.152.736.152.25 0 .434-.043.552-.128a.385.385 0 0 0 .184-.328.409.409 0 0 0-.096-.288.763.763 0 0 0-.28-.192 9.934 9.934 0 0 0-.432-.192l-.672-.288a2.448 2.448 0 0 1-.544-.296 1.57 1.57 0 0 1-.416-.464 1.372 1.372 0 0 1-.152-.664c0-.288.08-.547.24-.776a1.74 1.74 0 0 1 .672-.56 2.208 2.208 0 0 1 1-.216c.314 0 .624.059.928.176.304.117.573.288.808.512l-.6.744a2.324 2.324 0 0 0-.544-.304 1.721 1.721 0 0 0-.656-.112.85.85 0 0 0-.472.12.394.394 0 0 0-.184.352c0 .101.037.187.112.256.074.07.176.13.304.184.128.053.274.112.44.176l.632.272c.234.085.434.192.6.32.165.123.293.275.384.456.09.181.136.395.136.64 0 .288-.08.555-.24.8a1.642 1.642 0 0 1-.688.592c-.299.15-.664.224-1.096.224ZM7.298 13 5.722 7.784H6.97l.624 2.432c.08.288.149.568.208.84.064.267.133.544.208.832h.032c.085-.288.157-.565.216-.832.064-.272.133-.552.208-.84l.616-2.432h1.2L8.714 13H7.298ZM13.143 13.096c-.443 0-.846-.099-1.209-.296a2.188 2.188 0 0 1-.864-.896c-.213-.4-.32-.893-.32-1.48 0-.581.107-1.075.32-1.48.214-.41.502-.723.864-.936.369-.213.777-.32 1.225-.32.351 0 .653.07.903.208.251.133.46.285.625.456l-.648.728a1.495 1.495 0 0 0-.368-.272 1.107 1.107 0 0 0-.512-.104.976.976 0 0 0-.609.208 1.348 1.348 0 0 0-.432.576c-.1.25-.152.55-.152.896 0 .357.046.664.136.92.091.25.23.443.416.576.187.133.416.2.688.2.102 0 .198-.013.289-.04a.498.498 0 0 0 .224-.12v-.896h-.76v-.96h1.816v2.4c-.177.165-.411.312-.705.44a2.26 2.26 0 0 1-.928.192Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var filesvg24 = {
  name: 'file-svg-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21v2.5h-18V21M3.5 10.5v-9h12l6 6v3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6M23.5 10.5h-22v10h22v-10Z"/><path fill="currentColor" d="M7.689 18.096c-.352 0-.702-.064-1.048-.192a3.057 3.057 0 0 1-.936-.56l.68-.808c.197.16.413.29.648.392.24.101.485.152.736.152.25 0 .434-.043.552-.128a.385.385 0 0 0 .184-.328.408.408 0 0 0-.096-.288.76.76 0 0 0-.28-.192 9.697 9.697 0 0 0-.432-.192l-.672-.288a2.452 2.452 0 0 1-.544-.296 1.571 1.571 0 0 1-.416-.464 1.372 1.372 0 0 1-.152-.664c0-.288.08-.547.24-.776a1.74 1.74 0 0 1 .672-.56 2.208 2.208 0 0 1 1-.216c.314 0 .624.059.928.176.304.117.573.288.808.512l-.6.744a2.324 2.324 0 0 0-.544-.304 1.72 1.72 0 0 0-.656-.112.85.85 0 0 0-.472.12.394.394 0 0 0-.184.352c0 .101.037.187.112.256.074.07.176.13.304.184.128.053.274.112.44.176l.632.272c.234.085.434.192.6.32.165.123.293.275.384.456.09.181.136.395.136.64 0 .288-.08.555-.24.8a1.643 1.643 0 0 1-.688.592c-.299.15-.664.224-1.096.224ZM11.798 18l-1.576-5.216h1.248l.624 2.432c.08.288.149.568.208.84.064.267.133.544.208.832h.032c.085-.288.157-.565.216-.832.064-.272.133-.552.208-.84l.616-2.432h1.2L13.214 18h-1.416ZM17.642 18.096c-.442 0-.845-.099-1.207-.296a2.189 2.189 0 0 1-.864-.896c-.214-.4-.32-.893-.32-1.48 0-.581.106-1.075.32-1.48.213-.41.5-.723.864-.936.367-.213.776-.32 1.224-.32.352 0 .653.07.904.208.25.133.458.285.623.456l-.648.728a1.494 1.494 0 0 0-.367-.272 1.107 1.107 0 0 0-.512-.104.976.976 0 0 0-.608.208 1.347 1.347 0 0 0-.432.576c-.102.25-.152.55-.152.896 0 .357.045.664.136.92.09.25.229.443.415.576.187.133.416.2.688.2.102 0 .198-.013.288-.04a.5.5 0 0 0 .224-.12v-.896h-.76v-.96h1.817v2.4c-.176.165-.411.312-.704.44a2.26 2.26 0 0 1-.929.192Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var filetxt16 = {
  name: 'file-txt-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 13.5v2h-13v-2M1.5 6.5v-6h8l5 5v1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path fill="currentColor" d="M2.613 13V8.776h-1.56v-.992h4.304v.992h-1.56V13H2.613ZM5.746 13l1.52-2.68-1.432-2.536h1.32l.504.984c.058.117.12.245.184.384s.136.29.216.456h.032a8.28 8.28 0 0 1 .176-.456c.058-.139.117-.267.176-.384l.464-.984h1.264l-1.432 2.592L10.258 13H8.946l-.568-1.064-.208-.408-.208-.448H7.93c-.064.16-.128.31-.192.448-.064.133-.128.27-.192.408L7.002 13H5.746ZM12.207 13V8.776h-1.56v-.992h4.303v.992h-1.56V13h-1.184Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var filetxt24 = {
  name: 'file-txt-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21v2.5h-18V21M3.5 10.5v-9h12l6 6v3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6M23.5 10.5h-22v10h22v-10Z"/><path fill="currentColor" d="M7.113 18v-4.224h-1.56v-.992h4.304v.992h-1.56V18H7.113ZM10.246 18l1.52-2.68-1.432-2.536h1.32l.504.984c.058.117.12.245.184.384s.136.29.216.456h.032c.058-.165.117-.317.176-.456.058-.139.117-.267.176-.384l.464-.984h1.264l-1.432 2.592L14.758 18h-1.312l-.568-1.064-.208-.408a110.45 110.45 0 0 0-.208-.448h-.032c-.064.16-.128.31-.192.448-.064.133-.128.27-.192.408L11.502 18h-1.256ZM16.706 18v-4.224h-1.56v-.992h4.305v.992h-1.56V18h-1.184Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var filexlsx16 = {
  name: 'file-xlsx-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 14.5v1h-13v-1M1.5 7V.5h8l5 5V7"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path fill="currentColor" d="m.331 13 1.33-2.345L.408 8.436h1.155l.441.861c.052.103.105.215.161.336.056.121.12.254.19.4h.027a7.233 7.233 0 0 1 .308-.736l.406-.861h1.106L2.95 10.704 4.28 13H3.131l-.497-.93a24.55 24.55 0 0 0-.182-.358 98.744 98.744 0 0 0-.182-.392h-.028c-.056.14-.112.27-.168.392l-.168.357L1.43 13H.331ZM4.752 13V8.436H5.78v3.696h2.03V13H4.75ZM9.886 13.084a2.63 2.63 0 0 1-1.736-.658l.595-.707c.173.14.362.254.567.343.21.089.425.133.644.133.22 0 .38-.037.483-.112a.337.337 0 0 0 .161-.287.357.357 0 0 0-.084-.252.665.665 0 0 0-.245-.168 8.451 8.451 0 0 0-.378-.168l-.588-.252a2.15 2.15 0 0 1-.476-.259 1.375 1.375 0 0 1-.364-.406 1.2 1.2 0 0 1-.133-.58c0-.253.07-.48.21-.68.145-.205.34-.369.588-.49.252-.126.544-.189.875-.189.275 0 .546.051.812.154.266.103.502.252.707.448l-.525.651a2.036 2.036 0 0 0-.476-.266 1.507 1.507 0 0 0-.574-.098.743.743 0 0 0-.413.105.345.345 0 0 0-.161.308c0 .089.033.163.098.224.065.06.154.114.266.161.112.047.24.098.385.154l.553.238c.205.075.38.168.525.28.145.107.257.24.336.4.08.158.119.344.119.56 0 .251-.07.484-.21.7a1.439 1.439 0 0 1-.602.517c-.261.13-.581.196-.96.196ZM11.723 13l1.33-2.345L11.8 8.436h1.155l.441.861c.052.103.105.215.161.336.056.121.12.254.19.4h.027a5.92 5.92 0 0 1 .308-.735l.406-.862h1.106l-1.253 2.268L15.671 13h-1.148l-.497-.93c-.06-.122-.121-.241-.182-.358a89.7 89.7 0 0 0-.182-.392h-.028c-.056.14-.112.27-.168.392l-.168.357-.476.931h-1.099Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var filexlsx24 = {
  name: 'file-xlsx-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21v2.5h-18V21M3.5 10.5v-9h12l6 6v3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6M23.5 10.5h-22v10h22v-10Z"/><path fill="currentColor" d="m3.05 18 1.52-2.68-1.432-2.536h1.32l.504.984c.059.117.12.245.184.384s.136.29.216.456h.032c.059-.165.118-.317.176-.456.059-.139.118-.267.176-.384l.464-.984h1.264l-1.432 2.592L7.562 18H6.25l-.568-1.064a28.4 28.4 0 0 0-.208-.408l-.208-.448h-.032c-.064.16-.128.31-.192.448-.064.133-.128.27-.192.408L4.306 18H3.05ZM8.56 18v-5.216h1.175v4.224h2.32V18H8.56ZM14.884 18.096c-.352 0-.701-.064-1.048-.192a3.057 3.057 0 0 1-.936-.56l.68-.808c.197.16.413.29.648.392.24.101.485.152.736.152.25 0 .435-.043.552-.128a.385.385 0 0 0 .184-.328.408.408 0 0 0-.096-.288.76.76 0 0 0-.28-.192 9.635 9.635 0 0 0-.432-.192l-.672-.288a2.452 2.452 0 0 1-.544-.296 1.572 1.572 0 0 1-.416-.464 1.372 1.372 0 0 1-.152-.664c0-.288.08-.547.24-.776.165-.235.39-.421.672-.56a2.208 2.208 0 0 1 1-.216c.315 0 .624.059.928.176.304.117.573.288.808.512l-.6.744a2.322 2.322 0 0 0-.544-.304 1.72 1.72 0 0 0-.656-.112.85.85 0 0 0-.472.12.394.394 0 0 0-.184.352c0 .101.037.187.112.256.075.07.176.13.304.184.128.053.275.112.44.176l.632.272a2.2 2.2 0 0 1 .6.32c.165.123.293.275.384.456.09.181.136.395.136.64 0 .288-.08.555-.24.8a1.642 1.642 0 0 1-.688.592c-.299.15-.664.224-1.096.224ZM17.44 18l1.52-2.68-1.431-2.536h1.32l.504.984c.059.117.12.245.184.384s.136.29.216.456h.032c.059-.165.117-.317.176-.456.059-.139.117-.267.176-.384l.464-.984h1.264l-1.432 2.592L21.953 18H20.64l-.568-1.064c-.07-.139-.139-.275-.208-.408a110.45 110.45 0 0 0-.208-.448h-.032c-.064.16-.128.31-.192.448-.064.133-.128.27-.192.408L18.697 18H17.44Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var filexml16 = {
  name: 'file-xml-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 14.5v1h-13v-1M1.5 6.5v-6h8l5 5v4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path fill="currentColor" d="m.949 13 1.52-2.68-1.432-2.536h1.32l.504.984c.058.117.12.245.184.384s.136.29.216.456h.032a8.28 8.28 0 0 1 .176-.456c.058-.139.117-.267.176-.384l.464-.984h1.264L3.94 10.376 5.46 13H4.149l-.568-1.064c-.07-.139-.139-.275-.208-.408l-.208-.448h-.032c-.064.16-.128.31-.192.448-.064.133-.128.27-.192.408L2.205 13H.949ZM6.066 13V7.784h1.232l.512 1.848.176.72h.032l.176-.72.512-1.848h1.232V13h-.992v-1.616c0-.144.005-.323.016-.536.01-.219.024-.445.04-.68l.048-.672c.02-.213.037-.39.048-.528h-.024l-.4 1.392-.4 1.256h-.576L7.29 10.36l-.376-1.392H6.89l.04.528c.02.213.04.437.056.672.016.235.029.461.04.68.01.213.016.392.016.536V13h-.976ZM11.255 13V7.784h1.175v4.224h2.32V13h-3.495Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var filexml24 = {
  name: 'file-xml-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21v2.5h-18V21M3.5 10.5v-9h12l6 6v3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6M23.5 10.5h-22v10h22v-10Z"/><path fill="currentColor" d="m5.449 18 1.52-2.68-1.432-2.536h1.32l.504.984c.058.117.12.245.184.384s.136.29.216.456h.032c.058-.165.117-.317.176-.456.058-.139.117-.267.176-.384l.464-.984h1.264L8.44 15.376 9.96 18H8.649l-.568-1.064c-.07-.139-.139-.275-.208-.408l-.208-.448h-.032c-.064.16-.128.31-.192.448-.064.133-.128.27-.192.408L6.705 18H5.449ZM10.566 18v-5.216h1.232l.512 1.848.176.72h.032l.176-.72.512-1.848h1.232V18h-.992v-1.616c0-.144.005-.323.016-.536.01-.219.024-.445.04-.68l.048-.672c.02-.213.037-.39.048-.528h-.024l-.4 1.392-.4 1.256h-.576l-.408-1.256-.376-1.392h-.024l.04.528c.02.213.04.437.056.672.016.235.029.461.04.68.01.213.016.392.016.536V18h-.976ZM15.755 18v-5.216h1.175v4.224h2.32V18h-3.495Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var filezip16 = {
  name: 'file-zip-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 12.5v3h-13v-1M1.5 6.5v-6h8l5 5v1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5.5v5h5"/><path fill="currentColor" d="M1.253 13v-.712l2.44-3.52H1.485v-.984h3.664v.712l-2.44 3.512H5.18V13H1.253ZM6.194 13v-.992H7.41V8.776H6.194v-.992H9.81v.992H8.594v3.232H9.81V13H6.194ZM10.998 13V7.784h1.848c.38 0 .72.053 1.024.16.31.101.555.275.736.52.187.245.28.579.28 1 0 .405-.093.739-.28 1a1.684 1.684 0 0 1-.744.584c-.309.123-.648.184-1.016.184h-.672V13h-1.176Zm1.176-2.704h.6c.326 0 .566-.072.72-.216.16-.144.24-.35.24-.616 0-.277-.082-.47-.248-.576-.16-.112-.397-.168-.712-.168h-.6v1.576Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var filezip24 = {
  name: 'file-zip-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21v2.5h-18V21M3.5 10.5v-9h12l6 6v3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 1.5v6h6M23.5 10.5h-22v10h22v-10Z"/><path fill="currentColor" d="M5.753 18v-.712l2.44-3.52H5.985v-.984h3.664v.712l-2.44 3.512H9.68V18H5.753ZM10.694 18v-.992h1.216v-3.232h-1.216v-.992h3.616v.992h-1.216v3.232h1.216V18h-3.616ZM15.498 18v-5.216h1.848c.38 0 .72.053 1.024.16.31.101.555.275.736.52.187.245.28.579.28 1 0 .405-.093.739-.28 1a1.684 1.684 0 0 1-.744.584c-.309.123-.648.184-1.016.184h-.672V18h-1.176Zm1.176-2.704h.6c.326 0 .566-.072.72-.216.16-.144.24-.35.24-.616 0-.277-.082-.47-.248-.576-.16-.112-.397-.168-.712-.168h-.6v1.576Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var filter16 = {
  name: 'filter-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5.5v3l6 4v8l3-2v-6l6-4v-3H.5Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var filter24 = {
  name: 'filter-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.5 4.5-8 8v8l-4 2v-10l-8-8v-3h20v3Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var flag16 = {
  name: 'flag-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 1.5h11l-2 4 2 4h-11M2.5.5v15"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var flag24 = {
  name: 'flag-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 3.5h18l-3 6 3 6h-18M3.5 1.5v22"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var flagf16 = {
  name: 'flag-f-16',
  height: 16,
  width: 16,
  svgContent: '<path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 1.5h11l-2 4 2 4h-11"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5.5v15"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var flagf24 = {
  name: 'flag-f-24',
  height: 24,
  width: 24,
  svgContent: '<path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 3.5h18l-3 6 3 6h-18"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 1.5v22"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var floppydisk16 = {
  name: 'floppy-disk-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2 .5h9.5l4 4V14a1.5 1.5 0 0 1-1.5 1.5H2A1.5 1.5 0 0 1 .5 14V2A1.5 1.5 0 0 1 2 .5v0Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 2.5v3h-6v-3M12.5 13.5v-4h-9v4"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var floppydisk24 = {
  name: 'floppy-disk-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 18.5v-6h12v6"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.5 22.5h-16a2 2 0 0 1-2-2v-16a2 2 0 0 1 2-2h13l5 5v13a2 2 0 0 1-2 2ZM15.5 6.5v2"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var folder16 = {
  name: 'folder-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.5 4.5-2-3h-5V13A1.5 1.5 0 0 0 2 14.5h12a1.5 1.5 0 0 0 1.5-1.5V4.5h-8Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var folder24 = {
  name: 'folder-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 22.5h-18a2 2 0 0 1-2-2v-18h8l3 4h11v14a2 2 0 0 1-2 2Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var gallery16 = {
  name: 'gallery-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 1.5v14M1.5 8.5h14M15.5 1.5h-14v14h14v-14Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var gallery24 = {
  name: 'gallery-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 2.5v20M2.5 12.5h20M22.5 2.5h-20v20h20v-20Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var glasses16 = {
  name: 'glasses-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 12.5v-10a2 2 0 0 1 2-2h1M15.5 12.5v-10a2 2 0 0 0-2-2h-1M9.776 11.242A2.47 2.47 0 0 0 8 10.5a2.47 2.47 0 0 0-1.776.742"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 15.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.5 15.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var glasses24 = {
  name: 'glasses-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 18V5.5c0-1.7 1.3-3 3-3h1M23.5 18V5.5c0-1.7-1.3-3-3-3h-1M10.5 17.5c0-1.1.9-2 2-2s2 .9 2 2"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 22.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM19 22.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var globe16 = {
  name: 'globe-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 15.5c1.775 0 3.214-3.358 3.214-7.5C11.214 3.858 9.775.5 8 .5S4.786 3.858 4.786 8c0 4.142 1.439 7.5 3.214 7.5ZM.5 8h15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 15.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var globe24 = {
  name: 'globe-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 1.5v22M1.5 12.5h22M12.5 23.5c3.038 0 5.5-4.925 5.5-11s-2.462-11-5.5-11S7 6.425 7 12.5s2.462 11 5.5 11Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 23.5c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var grid16 = {
  name: 'grid-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5.5h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1ZM14.5.5h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1ZM5.5 9.5h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1ZM14.5 9.5h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var grid24 = {
  name: 'grid-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 2.5h-7v7h7v-7ZM22.5 2.5h-7v7h7v-7ZM9.5 15.5h-7v7h7v-7ZM22.5 15.5h-7v7h7v-7Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var gridlayout16 = {
  name: 'grid-layout-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 3.5h-3v3h3v-3ZM12.5 3.5h-3v3h3v-3ZM6.5 9.5h-3v3h3v-3ZM12.5 9.5h-3v3h3v-3Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5.5h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var gridlayout24 = {
  name: 'grid-layout-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.5 2.5h-20v20h20v-20Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 6.5h-4v4h4v-4ZM18.5 6.5h-4v4h4v-4ZM10.5 14.5h-4v4h4v-4ZM18.5 14.5h-4v4h4v-4Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var hide16 = {
  name: 'hide-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 8s3-5.5 7.5-5.5S15.5 8 15.5 8s-3 5.5-7.5 5.5S.5 8 .5 8Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 8a3 3 0 0 1 3-3M11 8a3 3 0 0 1-3 3M1 15 15 1"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var hide24 = {
  name: 'hide-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.873 13.683a2.064 2.064 0 0 1 0-2.366C3.446 9.09 7.319 4.5 12.5 4.5c5.181 0 9.054 4.59 10.627 6.817a2.064 2.064 0 0 1 0 2.366C21.554 15.91 17.681 20.5 12.5 20.5c-5.181 0-9.054-4.59-10.627-6.817Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 16.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM2.5 22.5l20-20"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var home16 = {
  name: 'home-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 7.5 8 .5l-7.5 7M2.5 8.5v7h4v-4h3v4h4v-7"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var home24 = {
  name: 'home-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1.5 11.5 11-9 11 9M10.5 23.5v-6h4v6"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 13.5v10h16v-10"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var hyperlink16 = {
  name: 'hyperlink-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 10.5H2A1.5 1.5 0 0 1 .5 9V4A1.5 1.5 0 0 1 2 2.5h8A1.5 1.5 0 0 1 11.5 4v5a1.5 1.5 0 0 1-1.5 1.5H6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 6.5h.5A1.5 1.5 0 0 1 15.5 8v5a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 13V8A1.5 1.5 0 0 1 6 6.5h3.5"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var hyperlink24 = {
  name: 'hyperlink-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.145 10.499A3.99 3.99 0 0 1 23.5 13.5v4a4 4 0 0 1-4 4h-9a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4h4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.855 14.501A3.99 3.99 0 0 1 1.5 11.5v-4a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4h-4"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var image16 = {
  name: 'image-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 12.5 3-3 2 2 5-5 5 5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14 15.5H2A1.5 1.5 0 0 1 .5 14V2A1.5 1.5 0 0 1 2 .5h12A1.5 1.5 0 0 1 15.5 2v12a1.5 1.5 0 0 1-1.5 1.5v0Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var image24 = {
  name: 'image-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.5 2.5h-16a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2Z"/><path stroke="currentColor" d="m19 17 .447-.224L19 17H6l2.5-4 2.097 2.516.405.486.379-.506 4.118-5.49.003-.002L19 17Z"/><path fill="currentColor" d="M10 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var key16 = {
  name: 'key-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 12.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5.5h-3L6.29 6.71A4.478 4.478 0 0 0 5 6.5 4.5 4.5 0 1 0 9.5 11c0-.451-.087-.879-.21-1.29L11.5 7.5v-3h3l1-1v-3Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var key24 = {
  name: 'key-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.5 1.5-8.234 8.234A6.953 6.953 0 0 0 8.5 9.5a7 7 0 1 0 7 7c0-.891-.173-1.74-.476-2.524L17.5 11.5v-3h3l3-3v-4h-5Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 18.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var laptop16 = {
  name: 'laptop-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 8.5v-7h11v7M13.5 8.5h-11l-2 6h15l-2-6Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var laptop24 = {
  name: 'laptop-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.5 14.5v-10a1 1 0 0 0-1-1h-14a1 1 0 0 0-1 1v10M20.5 14.5h-16l-2.403 5.606a1 1 0 0 0 .92 1.394h18.967a1 1 0 0 0 .919-1.394L20.5 14.5Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var launch16 = {
  name: 'launch-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.5.5-8 8M8.5.5h7v7M12.5 9.5V14a1.5 1.5 0 0 1-1.5 1.5H2A1.5 1.5 0 0 1 .5 14V5A1.5 1.5 0 0 1 2 3.5h4.5"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var launch24 = {
  name: 'launch-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.5 13.5 11-11M14.5 2.5h8v8M9.5 4.5h-5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var layout16 = {
  name: 'layout-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 5.5h15M5.5 5.5v10M14 15.5H2A1.5 1.5 0 0 1 .5 14V2A1.5 1.5 0 0 1 2 .5h12A1.5 1.5 0 0 1 15.5 2v12a1.5 1.5 0 0 1-1.5 1.5v0Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var layout24 = {
  name: 'layout-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 8.5h20M8.5 8.5v14M20.5 22.5h-16a2 2 0 0 1-2-2v-16a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var leaf16 = {
  name: 'leaf-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.543 5.006C6.024 2.524 15 1 15 1s-1.524 8.976-4.006 11.457a5.268 5.268 0 1 1-7.451-7.451ZM1 15l6.5-6.5"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var leaf24 = {
  name: 'leaf-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.5c4.2-4.2 15-6 15-6s-1.4 10.4-6 15c-4.9 4.9-10.7 1.7-10.7 1.7S2.5 13.5 7.5 8.5ZM13.5 11.5l-11 11"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var linegraph16 = {
  name: 'line-graph-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 11.5 5-5 4 4 6-6"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var linegraph24 = {
  name: 'line-graph-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1.5 17.5 8-8 6 6 8-8"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var list16 = {
  name: 'list-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 2.5H.5v4h15v-4ZM.5 10.5h15M.5 14.5h15"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var list24 = {
  name: 'list-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.5 3.5h-22v6h22v-6ZM1.5 15.5h22M1.5 21.5h22"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var lock16 = {
  name: 'lock-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 15.5h-11a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1ZM4.5 6.5V4A3.5 3.5 0 0 1 8 .5v0A3.5 3.5 0 0 1 11.5 4v2.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 12.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var lock24 = {
  name: 'lock-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 11.5h-14a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 19.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17.5 7.5v-1a4.95 4.95 0 0 0-4.9-5h-.1a4.95 4.95 0 0 0-5 4.9v1.1"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var logout16 = {
  name: 'logout-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 8h10M11.5 4l4 4-4 4M8.5 15.5H2A1.5 1.5 0 0 1 .5 14V2A1.5 1.5 0 0 1 2 .5h6.5"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var logout24 = {
  name: 'logout-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 12.5h12M17.5 16.5l4-4-4-4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 4.5v-1a2 2 0 0 0-2-2h-10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var mail12 = {
  name: 'mail-12',
  height: 12,
  width: 12,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5h-9a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m2.5 3.5 3.5 3 3.5-3"/>',
 fill: 'none',
 viewBox: '0 0 12 12'
};

var mail16 = {
  name: 'mail-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 14.5h-13a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 4.5 8 9l5.5-4.5"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var mail24 = {
  name: 'mail-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.114 4.058 12.5 13.5l10.385-9.441"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 3.5h-18a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var medal16 = {
  name: 'medal-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.59 3.5H5.41M4.009 8.919.5 3.5l3-3h9l3 3-3.509 5.419M3.5.5l3.85 6.047M12.5.5 8.65 6.547"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 15.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var medal24 = {
  name: 'medal-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.534 11.568 2.5 1.5h6l4 8M17.466 11.568 22.5 1.5h-6l-4 8"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 23.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"/><path fill="currentColor" d="m12.5 12.882 1.176 2.382 2.628.382-1.902 1.854.449 2.618-2.351-1.236-2.351 1.236.449-2.618-1.902-1.854 2.628-.382 1.176-2.382Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var menu12 = {
  name: 'menu-12',
  height: 12,
  width: 12,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 10.5h11M.5 1.5h11M.5 6h11"/>',
 fill: 'none',
 viewBox: '0 0 12 12'
};

var menu16 = {
  name: 'menu-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 2.5h14M1.5 8.5h14M1.5 14.5h14"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var menu24 = {
  name: 'menu-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1 12.5h22M1 5.5h22M1 19.5h22"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var menuleft16 = {
  name: 'menu-left-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 3.5h15M.5 8.5h15M.5 13.5h8"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var menuleft24 = {
  name: 'menu-left-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 12.5h22M1.5 5.5h22M1.5 19.5h11"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var menuright16 = {
  name: 'menu-right-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 3.5h15M.5 8.5h15M7.5 13.5h8"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var menuright24 = {
  name: 'menu-right-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 12.5h22M1.5 5.5h22M12.5 19.5h11"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var minus12 = {
  name: 'minus-12',
  height: 12,
  width: 12,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1 6h10"/>',
 fill: 'none',
 viewBox: '0 0 12 12'
};

var minus16 = {
  name: 'minus-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 8.5h14"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var minus24 = {
  name: 'minus-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.5 12.5h-20"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var mobilechat16 = {
  name: 'mobile-chat-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 8.5v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1h2"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 6.5h-5l-3 2v-7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var mobilechat24 = {
  name: 'mobile-chat-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 11.5h-8l-4 2v-10a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 3.5h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-7"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var module16 = {
  name: 'module-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 2.5v-2M8.5 2.5v-2M15.5 7.5h-2M15.5 11.5h-2"/><path stroke="currentColor" d="M1.5 3a.5.5 0 0 1 .5-.5h9.5a2 2 0 0 1 2 2V14a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V3Z"/><path stroke="currentColor" d="M4.5 6a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V6Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var module24 = {
  name: 'module-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 4.5v-3M5.5 4.5v-3M23.5 19.5h-3M23.5 12.5h-3M15.5 9.5h-9v9h9v-9Z"/><path stroke="currentColor" d="M1.5 5a.5.5 0 0 1 .5-.5h12.5a6 6 0 0 1 6 6V23a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V5Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var more12 = {
  name: 'more-12',
  height: 12,
  width: 12,
  svgContent: '<path fill="currentColor" d="M1.5 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM10.5 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM6 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>',
 fill: 'none',
 viewBox: '0 0 12 12'
};

var more16 = {
  name: 'more-16',
  height: 16,
  width: 16,
  svgContent: '<path fill="currentColor" d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM14 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var more24 = {
  name: 'more-24',
  height: 24,
  width: 24,
  svgContent: '<path fill="currentColor" d="M6 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM22 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var multilinegraph16 = {
  name: 'multi-line-graph-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.5 8.5 2-4 6 4 4-7M.5 14.5 2.25 11"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 8.5h3l7 5 5-5"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var multilinegraph24 = {
  name: 'multi-line-graph-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.5 13.5 3-6 7 5 6-9M2.5 21.5l2.246-4.492M2.5 13.5h4l10 5 6-4"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var paragraphs16 = {
  name: 'paragraphs-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5.5h-6v6h6v-6ZM6.5 9.5h-6v6h6v-6ZM9.5 1.5h6M9.5 5.5h6M9.5 10.5h6M9.5 14.5h6"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var paragraphs24 = {
  name: 'paragraphs-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 2.5h-7v7h7v-7ZM9.5 15.5h-7v7h7v-7ZM14.5 3.5h8M14.5 8.5h8M14.5 16.5h8M14.5 21.5h8"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var pen16 = {
  name: 'pen-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10 3 3 3M12 1l3 3L5 14l-4 1 1-4L12 1Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var pen24 = {
  name: 'pen-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.5 6.5 4 4M7.5 21.5l-5 1 1-5 15-15 4 4-15 15Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var people16 = {
  name: 'people-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM3.5 12.5h1a3 3 0 0 1 3 3v0h-7a3 3 0 0 1 3-3v0ZM12 3.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM11.5 5.5h1a3 3 0 0 1 3 3v0h-7a3 3 0 0 1 3-3v0Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var people24 = {
  name: 'people-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 22.5h-14v-4.313c0-1.213.725-2.307 1.846-2.772 1.135-.47 2.824-.915 5.154-.915s4.019.445 5.154.916a2.994 2.994 0 0 1 1.846 2.771V22.5ZM8.5 11.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM23.5 11.336c0-.604-.265-1.179-.738-1.554C22.039 9.208 20.785 8.5 19 8.5s-3.039.708-3.762 1.282c-.473.375-.738.95-.738 1.554V12.5h9v-1.164ZM19 6.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var phone16 = {
  name: 'phone-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.514 9.764-1.222 1.528a12.89 12.89 0 0 1-4.584-4.584l1.528-1.222a1.038 1.038 0 0 0 .3-1.232L5.143 1.117a1.038 1.038 0 0 0-1.21-.583l-2.652.687A1.046 1.046 0 0 0 .51 2.375 15.407 15.407 0 0 0 13.625 15.49a1.044 1.044 0 0 0 1.153-.771l.688-2.651a1.039 1.039 0 0 0-.583-1.21l-3.137-1.393a1.04 1.04 0 0 0-1.232.299v0Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var phone24 = {
  name: 'phone-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.808 14.688 13.667 16.8a17.38 17.38 0 0 1-3.092-2.375A17.61 17.61 0 0 1 8.2 11.332l2.11-2.141a.918.918 0 0 0 .19-1.005L8.3 3.058a.918.918 0 0 0-1.078-.525L3.188 3.6a.919.919 0 0 0-.688.916 19.4 19.4 0 0 0 5.49 12.493A19.4 19.4 0 0 0 20.486 22.5a.915.915 0 0 0 .917-.687l1.066-4.036a.917.917 0 0 0-.524-1.078L16.816 14.5a.916.916 0 0 0-1.008.188v0Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var phonecall16 = {
  name: 'phone-call-16',
  height: 17,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.178 10.529-1.059 1.325a11.187 11.187 0 0 1-3.973-3.973l1.325-1.059a.9.9 0 0 0 .26-1.068L5.524 3.036a.9.9 0 0 0-1.049-.506l-2.3.6a.9.9 0 0 0-.668 1 13.35 13.35 0 0 0 11.367 11.361.9.9 0 0 0 1-.668l.6-2.3a.9.9 0 0 0-.506-1.048l-2.722-1.205a.9.9 0 0 0-1.068.259v0ZM9.5 4A3.5 3.5 0 0 1 13 7.5M9.5 1A6.5 6.5 0 0 1 16 7.5"/>',
 fill: 'none',
 viewBox: '0 0 17 16'
};

var phonecall24 = {
  name: 'phone-call-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.808 15.691 12.667 17.8a17.408 17.408 0 0 1-3.092-2.376 17.606 17.606 0 0 1-2.375-3.09l2.11-2.141a.918.918 0 0 0 .189-1L7.3 4.06a.918.918 0 0 0-1.078-.525L2.188 4.6a.92.92 0 0 0-.688.919 19.4 19.4 0 0 0 5.49 12.492A19.4 19.4 0 0 0 19.486 23.5a.917.917 0 0 0 .917-.688l1.066-4.036a.917.917 0 0 0-.524-1.078L15.816 15.5a.917.917 0 0 0-1.008.191v0ZM14.5 1.5a9 9 0 0 1 9 9M14.5 5.5a5 5 0 0 1 5 5"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var pin16 = {
  name: 'pin-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 6c0 4.5-5.5 9.5-5.5 9.5s-5.5-5-5.5-9.5a5.5 5.5 0 1 1 11 0v0Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var pin24 = {
  name: 'pin-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.5 9.5c0 4.9-8 13-8 13s-8-8.1-8-13c0-5.1 4.1-8 8-8 3.9 0 8 2.9 8 8Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 12.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var plus12 = {
  name: 'plus-12',
  height: 12,
  width: 12,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 1v10M1 6h10"/>',
 fill: 'none',
 viewBox: '0 0 12 12'
};

var plus16 = {
  name: 'plus-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 1.5v14M1.5 8.5h14"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var plus24 = {
  name: 'plus-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 2.5v20M22.5 12.5h-20"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var preferences16 = {
  name: 'preferences-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 12.5h3M.5 3.5h3M9.5 3.5h6M6.5.5h-3v6h3v-6ZM12.5 9.5h-3v6h3v-6ZM.5 12.5h6"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var preferences24 = {
  name: 'preferences-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 4.5h12M1.5 4.5h3M8.5 1.5h-4v6h4v-6ZM21.5 12.5h2M1.5 12.5h13M18.5 9.5h-4v6h4v-6ZM11.5 20.5h12M1.5 20.5h3M8.5 17.5h-4v6h4v-6Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var reply16 = {
  name: 'reply-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 7.5 7-6v4.033c3.781 0 8 1.467 8 7.967-1.969-3.188-5-4-8-4v4l-7-6Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var reply24 = {
  name: 'reply-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m2.5 11.5 8-8v5c5.6 0 13 2.2 13 12-2.7-4.6-5.5-6-13-6v5l-8-8Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var sad16 = {
  name: 'sad-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 15.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"/><path fill="currentColor" d="M5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 11.2a3.5 3.5 0 0 1 6 0"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var sad24 = {
  name: 'sad-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 23.5c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11Z"/><path fill="currentColor" d="M8 12.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17 12.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 18.5a3 3 0 0 1 6 0"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var search16 = {
  name: 'search-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.5 15.5-3-3M6.5 12.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var search24 = {
  name: 'search-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.5 22.5-4-4M10.5 18.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 10.5a4 4 0 0 1 4-4"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var share12 = {
  name: 'share-12',
  height: 12,
  width: 12,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.713 3.394 4.288 5.106M7.713 8.606 4.288 6.894M9.5 4.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9.5 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2.5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>',
 fill: 'none',
 viewBox: '0 0 12 12'
};

var share16 = {
  name: 'share-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.12 6.675 3.761-2.35M6.12 9.325l3.761 2.35M12 5.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM12 15.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM4 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var share24 = {
  name: 'share-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.1 10.7 6.8-3.4M9.1 14.2l6.8 3.4M5.5 16.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM19.5 9.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM19.5 23.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var sidebarleft16 = {
  name: 'sidebar-left-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 1.5h13a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1ZM7.5 1.5v13M5 8H3M5 5H3M5 11H3"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var sidebarleft24 = {
  name: 'sidebar-left-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 3.5h22v18h-22v-18ZM11.5 3.5v18M7.5 8.5h-2M7.5 12.5h-2M7.5 16.5h-2"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var sidebarright16 = {
  name: 'sidebar-right-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 1.5h-13a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1ZM8.5 1.5v13M11 8h2M11 5h2M11 11h2"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var sidebarright24 = {
  name: 'sidebar-right-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.5 3.5h-22v18h22v-18ZM13.5 3.5v18M17.5 8.5h2M17.5 12.5h2M17.5 16.5h2"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var smartphone16 = {
  name: 'smartphone-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.5h1M12.5.5h-9a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var smartphone24 = {
  name: 'smartphone-24',
  height: 24,
  width: 24,
  svgContent: '<path fill="currentColor" d="M12.5 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.5 23.5h-12a2 2 0 0 1-2-2v-18a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var smile16 = {
  name: 'smile-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 15.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"/><path fill="currentColor" d="M5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 9.8a3.5 3.5 0 0 1-6 0"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var smile24 = {
  name: 'smile-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 23.5c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11Z"/><path fill="currentColor" d="M8 12.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17 12.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 15.5a3 3 0 0 0 6 0"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var snow16 = {
  name: 'snow-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 3.5v10M10.5 15.5l-2-2M6.5 15.5l2-2M6.5 1.5l2 2M10.5 1.5l-2 2M12.72 5.818l-8.44 5.364M3.665 13.943l.615-2.761M1.52 10.567l2.76.615M13.335 3.057l-.615 2.761M15.48 6.433l-2.76-.615M12.72 11.182 4.28 5.818M3.665 3.057l.615 2.761M1.52 6.433l2.76-.615M13.335 13.943l-.615-2.761M15.48 10.567l-2.76.615"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var snow24 = {
  name: 'snow-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 1.5v22M9.5 2.5l3 3 3-3M9.5 22.5l3-3 3 3M3 7l19 11M2.3 10.1 6.4 9 5.3 4.9M19.7 20.1 18.6 16l4.1-1.1M22 7 3 18M22.7 10.1 18.6 9l1.1-4.1M5.3 20.1 6.4 16l-4.1-1.1"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var star16 = {
  name: 'star-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8 .867 2.318 4.696 5.182.753-3.75 3.655.885 5.162L8 12.696l-4.635 2.437.885-5.162L.5 6.316l5.182-.753L8 .867Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var star24 = {
  name: 'star-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.5 2.99 3.09 6.26 6.91 1.004-5 4.874 1.18 6.882-6.18-3.248-6.18 3.248 1.18-6.882-5-4.874L9.41 9.25l3.09-6.26Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var table16 = {
  name: 'table-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 5.5h15M.5 10.5h15M5.5.5v15M14 15.5H2A1.5 1.5 0 0 1 .5 14V2A1.5 1.5 0 0 1 2 .5h12A1.5 1.5 0 0 1 15.5 2v12a1.5 1.5 0 0 1-1.5 1.5v0Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var table24 = {
  name: 'table-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 8.5h20M2.5 15.5h20M8.5 2.5v20M20.5 22.5h-16a2 2 0 0 1-2-2v-16a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var temperature16 = {
  name: 'temperature-16',
  height: 16,
  width: 18,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 9.045V3.49a2 2 0 1 0-4 0v5.555a4 4 0 1 0 4 0v0Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 14.49a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM10.5 5.49v5M1.5 2.5h4M3.5 5.5h2M1.5 8.5h4"/>',
 fill: 'none',
 viewBox: '0 0 16 18'
};

var temperature24 = {
  name: 'temperature-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.5 12.3V4.5a3 3 0 0 0-6 0v7.8a6 6 0 1 0 6 0v0Z"/><path fill="currentColor" d="M15.5 20.5a3 3 0 0 0 3-3h-6a3 3 0 0 0 3 3Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.5h-4M7.5 8.5h-4M5.5 13.5h-2"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var thumbdown16 = {
  name: 'thumb-down-16',
  height: 17,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5.5h-3v8h3v-8ZM5.5.5h6.9a2 2 0 0 1 1.952 1.566l1.111 5A2 2 0 0 1 13.507 9.5H9.5v4a2 2 0 0 1-2 2l-2-6"/>',
 fill: 'none',
 viewBox: '0 0 17 16'
};

var thumbdown24 = {
  name: 'thumb-down-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 1.5h-5v11h5M6.5 12.5l3 11a3 3 0 0 0 3-3v-6H20a3 3 0 0 0 2.965-3.456l-1.077-7A3 3 0 0 0 18.926 1.5H6.5v11Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var thumbup16 = {
  name: 'thumb-up-16',
  height: 17,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 7.5h-3v8h3v-8ZM5.5 15.5h6.9a2 2 0 0 0 1.952-1.566l1.111-5A2 2 0 0 0 13.507 6.5H9.5v-4a2 2 0 0 0-2-2l-2 6"/>',
 fill: 'none',
 viewBox: '0 0 17 16'
};

var thumbup24 = {
  name: 'thumb-up-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 23.5h-5v-11h5M6.5 12.5l3-11a3 3 0 0 1 3 3v6H20a3 3 0 0 1 2.965 3.456l-1.077 7a3 3 0 0 1-2.962 2.544H6.5v-11Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var treestructure16 = {
  name: 'tree-structure-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 3.5h-9v4h9v-4ZM15.5 11.5h-9v4h9v-4ZM.5.5v13h3M.5 5.5h3"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var treestructure24 = {
  name: 'tree-structure-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 13.5h7M3.5 5.5h7M3.5 1.5v20h7M21.5 3.5h-11v4h11v-4ZM21.5 19.5h-11v4h11v-4ZM21.5 11.5h-11v4h11v-4Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var trenddown16 = {
  name: 'trend-down-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.5 12.5-7-7-4 4-4-4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 12.5h6v-6"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var trenddown24 = {
  name: 'trend-down-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.5 17.5-9-10-6 6-5-5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 17.5h7v-7"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var trendup16 = {
  name: 'trend-up-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.5 3.5-7 7-4-4-4 4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 3.5h6v6"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var trendup24 = {
  name: 'trend-up-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.5 6.5-9 10-6-6-5 5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 6.5h7v7"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var unlocked16 = {
  name: 'unlocked-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 15.5h-11a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1ZM4.5 6.5V4a3.5 3.5 0 0 1 6.855-1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 12.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var unlocked24 = {
  name: 'unlocked-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 11.5h-18v12h18v-12Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 19.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17.5 6.5a4.95 4.95 0 0 0-4.9-5h-.1a4.95 4.95 0 0 0-5 4.9v5.1"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var upload16 = {
  name: 'upload-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 4.5 8 .5l-3.5 4h2v6h3v-6h2Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 6.5H14A1.5 1.5 0 0 1 15.5 8v6a1.5 1.5 0 0 1-1.5 1.5H2A1.5 1.5 0 0 1 .5 14V8A1.5 1.5 0 0 1 2 6.5h1.5"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var upload24 = {
  name: 'upload-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 2.5v14M8.5 6.5l4-4 4 4M17.5 10.5h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-16a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h3"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var user12 = {
  name: 'user-12',
  height: 12,
  width: 12,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 5.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM6 7.5c-3.038 0-4.5 1.895-4.5 3v1h9v-1c0-1.1-1.462-3-4.5-3Z"/>',
 fill: 'none',
 viewBox: '0 0 12 12'
};

var user16 = {
  name: 'user-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 12.976a1 1 0 0 0-.426-.82A10.367 10.367 0 0 0 8 10.5a10.367 10.367 0 0 0-6.074 1.656 1 1 0 0 0-.426.82V15.5h13v-2.524ZM8 7.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var user24 = {
  name: 'user-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 12.5a5 5 0 0 1-5-5v-1a5 5 0 0 1 10 0v1a5 5 0 0 1-5 5ZM22.5 20.408a3.99 3.99 0 0 0-2.934-3.856c-1.894-.517-4.48-1.052-7.066-1.052-2.586 0-5.172.535-7.066 1.052A3.99 3.99 0 0 0 2.5 20.408V22.5h20v-2.092Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var view16 = {
  name: 'view-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 8s3-5.5 7.5-5.5S15.5 8 15.5 8s-3 5.5-7.5 5.5S.5 8 .5 8Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var view24 = {
  name: 'view-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.873 13.683a2.064 2.064 0 0 1 0-2.366C3.446 9.09 7.319 4.5 12.5 4.5c5.181 0 9.054 4.59 10.627 6.817a2.064 2.064 0 0 1 0 2.366C21.554 15.91 17.681 20.5 12.5 20.5c-5.181 0-9.054-4.59-10.627-6.817Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 16.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var warning16 = {
  name: 'warning-16',
  height: 16,
  width: 16,
  svgContent: '<path fill="currentColor" d="M8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 4.5v5M.741 12.776 6.97 1.208a1.17 1.17 0 0 1 2.06 0l6.229 11.568a1.17 1.17 0 0 1-1.03 1.724H1.771a1.17 1.17 0 0 1-1.03-1.724v0Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var warning24 = {
  name: 'warning-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1.743 19.453 8.909-16.842a2.094 2.094 0 0 1 3.7 0l8.909 16.842a2.078 2.078 0 0 1-1.853 3.047H3.592a2.08 2.08 0 0 1-1.849-3.047v0ZM12.5 7.5v6"/><path fill="currentColor" d="M12.5 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var warningcritical16 = {
  name: 'warning-critical-16',
  height: 16,
  width: 16,
  svgContent: '<path fill="currentColor" d="M8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.107.5H4.893L.5 4.893v6.214L4.893 15.5h6.214l4.393-4.393V4.893L11.107.5ZM8 3.5V9"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var warningcritical24 = {
  name: 'warning-critical-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.056 1.5H7.944L1.5 7.944v9.112L7.944 23.5h9.112l6.444-6.444V7.944L17.056 1.5ZM12.5 7.5v6"/><path fill="currentColor" d="M12.5 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var webpage16 = {
  name: 'webpage-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 3.5h15M5.5 3.5v12M14.5.5h-13a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1Z"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var webpage24 = {
  name: 'webpage-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.5v14M1.5 8.5h22M23.5 2.5h-22v20h22v-20Z"/><path fill="currentColor" d="M4.5 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM7.5 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var zoomin16 = {
  name: 'zoom-in-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 13.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM15.5 15.5l-3.758-3.758M7.5 4.5v6M10.5 7.5h-6"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var zoomin24 = {
  name: 'zoom-in-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 7.5v6M13.5 10.5h-6M22.5 22.5l-6.344-6.344M10.5 18.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

var zoomout16 = {
  name: 'zoom-out-16',
  height: 16,
  width: 16,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 13.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM15.5 15.5l-3.758-3.758M10.5 7.5h-6"/>',
 fill: 'none',
 viewBox: '0 0 16 16'
};

var zoomout24 = {
  name: 'zoom-out-24',
  height: 24,
  width: 24,
  svgContent: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5h-6M22.5 22.5l-6.344-6.344M10.5 18.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/>',
 fill: 'none',
 viewBox: '0 0 24 24'
};

const icons = {
  arrowdown12,
  arrowdown16,
  arrowdown24,
  arrowleft12,
  arrowleft16,
  arrowleft24,
  arrowright12,
  arrowright16,
  arrowright24,
  arrowtrianglediagonal12,
  arrowtrianglediagonal16,
  arrowtrianglediagonal24,
  arrowtriangledown12,
  arrowtriangledown16,
  arrowtriangledown24,
  arrowtrianglehorizontal12,
  arrowtrianglehorizontal16,
  arrowtrianglehorizontal24,
  arrowtriangleleft12,
  arrowtriangleleft16,
  arrowtriangleleft24,
  arrowtriangleright12,
  arrowtriangleright16,
  arrowtriangleright24,
  arrowtriangleup12,
  arrowtriangleup16,
  arrowtriangleup24,
  arrowtrianglevertikal12,
  arrowtrianglevertikal16,
  arrowtrianglevertikal24,
  arrowup12,
  arrowup16,
  arrowup24,
  assembledproduct16,
  assembledproduct24,
  attachment16,
  attachment24,
  bargraph16,
  bargraph24,
  bell12,
  bell16,
  bell24,
  board16,
  board24,
  book16,
  book24,
  bookbookmark16,
  bookbookmark24,
  bookopen16,
  bookopen24,
  bookmark16,
  bookmark24,
  box16,
  box24,
  bug16,
  bug24,
  bulletlist16,
  bulletlist24,
  cadd16,
  cadd24,
  ccheck16,
  ccheck24,
  ccheckf16,
  ccheckf24,
  cdelete16,
  cdelete24,
  cinfo16,
  cinfo24,
  cquestion16,
  cquestion24,
  cwarning16,
  cwarning24,
  calendar16,
  calendar24,
  cart16,
  cart24,
  chart16,
  chart24,
  chat16,
  chat24,
  check12,
  check16,
  check24,
  chemistry16,
  chemistry24,
  chevrondown12,
  chevrondown16,
  chevrondown24,
  chevronleft12,
  chevronleft16,
  chevronleft24,
  chevronright12,
  chevronright16,
  chevronright24,
  chevronup12,
  chevronup16,
  chevronup24,
  chip16,
  chip24,
  chipdip16,
  chipdip24,
  chips16,
  chips24,
  clipboard16,
  clipboard24,
  clipboardcheck16,
  clipboardcheck24,
  code16,
  code24,
  cogwheel16,
  cogwheel24,
  comment16,
  comment24,
  community16,
  community24,
  cross12,
  cross16,
  cross24,
  curvedarrowleft16,
  curvedarrowleft24,
  curvedarrowright16,
  curvedarrowright24,
  deleteforever16,
  deleteforever24,
  deletex16,
  deletex24,
  desktop16,
  desktop24,
  doublechevronleft12,
  doublechevronleft16,
  doublechevronleft24,
  doublechevronright12,
  doublechevronright16,
  doublechevronright24,
  download16,
  download24,
  file16,
  file24,
  fileaac16,
  fileaac24,
  fileavi16,
  fileavi24,
  filecss16,
  filecss24,
  filecsv16,
  filecsv24,
  filedoc16,
  filedoc24,
  filedocx16,
  filedocx24,
  fileeps16,
  fileeps24,
  fileexe16,
  fileexe24,
  filegif16,
  filegif24,
  filehtml16,
  filehtml24,
  filejpg16,
  filejpg24,
  filejs16,
  filejs24,
  filejson16,
  filejson24,
  filemkv16,
  filemkv24,
  filemov16,
  filemov24,
  filemp316,
  filemp324,
  filemp416,
  filemp424,
  filempg16,
  filempg24,
  fileotf16,
  fileotf24,
  filepng16,
  filepng24,
  filepptx16,
  filepptx24,
  filerar16,
  filerar24,
  filertf16,
  filertf24,
  filesql16,
  filesql24,
  filesvg16,
  filesvg24,
  filetxt16,
  filetxt24,
  filexlsx16,
  filexlsx24,
  filexml16,
  filexml24,
  filezip16,
  filezip24,
  filter16,
  filter24,
  flag16,
  flag24,
  flagf16,
  flagf24,
  floppydisk16,
  floppydisk24,
  folder16,
  folder24,
  gallery16,
  gallery24,
  glasses16,
  glasses24,
  globe16,
  globe24,
  grid16,
  grid24,
  gridlayout16,
  gridlayout24,
  hide16,
  hide24,
  home16,
  home24,
  hyperlink16,
  hyperlink24,
  image16,
  image24,
  key16,
  key24,
  laptop16,
  laptop24,
  launch16,
  launch24,
  layout16,
  layout24,
  leaf16,
  leaf24,
  linegraph16,
  linegraph24,
  list16,
  list24,
  lock16,
  lock24,
  logout16,
  logout24,
  mail12,
  mail16,
  mail24,
  medal16,
  medal24,
  menu12,
  menu16,
  menu24,
  menuleft16,
  menuleft24,
  menuright16,
  menuright24,
  minus12,
  minus16,
  minus24,
  mobilechat16,
  mobilechat24,
  module16,
  module24,
  more12,
  more16,
  more24,
  multilinegraph16,
  multilinegraph24,
  paragraphs16,
  paragraphs24,
  pen16,
  pen24,
  people16,
  people24,
  phone16,
  phone24,
  phonecall16,
  phonecall24,
  pin16,
  pin24,
  plus12,
  plus16,
  plus24,
  preferences16,
  preferences24,
  reply16,
  reply24,
  sad16,
  sad24,
  search16,
  search24,
  share12,
  share16,
  share24,
  sidebarleft16,
  sidebarleft24,
  sidebarright16,
  sidebarright24,
  smartphone16,
  smartphone24,
  smile16,
  smile24,
  snow16,
  snow24,
  star16,
  star24,
  table16,
  table24,
  temperature16,
  temperature24,
  thumbdown16,
  thumbdown24,
  thumbup16,
  thumbup24,
  treestructure16,
  treestructure24,
  trenddown16,
  trenddown24,
  trendup16,
  trendup24,
  unlocked16,
  unlocked24,
  upload16,
  upload24,
  user12,
  user16,
  user24,
  view16,
  view24,
  warning16,
  warning24,
  warningcritical16,
  warningcritical24,
  webpage16,
  webpage24,
  zoomin16,
  zoomin24,
  zoomout16,
  zoomout24,
};

 const getIcon = (icon) => icons[icon];

const infineonIconStencilCss = "ifx-icon{display:inline-flex}";

const InfineonIconStencil = class {
  constructor(hostRef) {
    Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.icon = undefined;
    this.ifxIcon = undefined;
  }
  convertStringToHtml(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString;
    return div.firstChild;
  }
  convertHtmlToObject(htmlElement) {
    let pathToObject = Array
      .from(htmlElement.attributes, ({ name, value }) => ({ name, value }))
      .reduce((acc, current) => {
      acc[current.name] = current.value;
      return acc;
    }, {});
    return pathToObject;
  }
  convertPathsToVnode(htmlPath) {
    let svgPaths = [];
    const parentPath = this.convertHtmlToObject(htmlPath);
    const parentPathToVnode = Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", parentPath);
    svgPaths.push(parentPathToVnode);
    if (htmlPath.firstChild) {
      const paths = htmlPath.querySelectorAll('path');
      const pathLength = htmlPath.querySelectorAll('path').length;
      for (let i = 0; i < pathLength; i++) {
        let pathToObject = this.convertHtmlToObject(paths[i]);
        let objToVnode = Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", pathToObject);
        svgPaths.push(objToVnode);
      }
    }
    return svgPaths;
  }
  getSVG(svgPath) {
    return Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { class: "inline-svg", width: this.ifxIcon.width, height: this.ifxIcon.height, xmlns: "http://www.w3.org/2000/svg", fill: this.ifxIcon.fill, viewBox: this.ifxIcon.viewBox }, ...svgPath);
  }
  constructIcon() {
    if (this.ifxIcon) {
      const htmlPath = this.convertStringToHtml(this.ifxIcon.svgContent);
      const svgPath = this.convertPathsToVnode(htmlPath);
      const SVG = this.getSVG(svgPath);
      return SVG;
    }
    else {
      console.error('Icon not found!');
      return "";
    }
  }
  componentWillLoad() {
    const removeHyphen = (str) => str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr);
    this.ifxIcon = getIcon(removeHyphen(this.icon));
  }
  render() {
    return (Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["a"], null, this.constructIcon()));
  }
};
InfineonIconStencil.style = infineonIconStencilCss;

const indexCss = "@font-face{font-family:\"Source Sans Pro\";font-style:normal;font-weight:400;src:local(\"\"),url(\"fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-regular.woff2\") format(\"woff2\"),url(\"fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-regular.woff\") format(\"woff\")}@font-face{font-family:\"Source Sans Pro\";font-style:normal;font-weight:600;src:local(\"\"),url(\"fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-600.woff2\") format(\"woff2\"),url(\"fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-600.woff\") format(\"woff\")}@font-face{font-family:\"Source Sans Pro\";font-style:normal;font-weight:700;src:local(\"\"),url(\"fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-700.woff2\") format(\"woff2\"),url(\"fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-700.woff\") format(\"woff\")}*{box-sizing:border-box;line-height:1.75;font-family:\"Source Sans Pro\"}.btn{display:inline-flex;align-items:center;min-width:80px;min-height:40px;padding:0px 16px;gap:8px;color:#FFFFFF;flex-direction:row;font-weight:600;border-radius:1px;line-height:24px;outline:none;font-family:\"Source Sans Pro\";text-decoration:none;user-select:none;border:1px solid rgba(0, 0, 0, 0);font-size:1rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.btn:not(.disabled){cursor:pointer}.btn-primary{color:#ffffff;background-color:#378375;border-color:#378375}.btn-outline-primary{background-color:#ffffff;color:#378375;border-color:#378375}.btn-secondary{color:#ffffff;background-color:#ab377a;border-color:#ab377a}.btn-outline-secondary{background-color:#ffffff;color:#ab377a;border-color:#ab377a}.btn-success{color:#1d1d1d;background-color:#aec067;border-color:#aec067}.btn-outline-success{background-color:#ffffff;border-color:#aec067}.btn-danger{color:#ffffff;background-color:#cd002f;border-color:#cd002f}.btn-outline-danger{background-color:#ffffff;color:#cd002f;border-color:#cd002f}.btn-warning{color:#1d1d1d;background-color:#f07f3c;border-color:#f07f3c}.btn-outline-warning{background-color:#ffffff;border-color:#f07f3c}.btn.btn-s{font-size:0.8125rem;min-width:71px;min-height:32px;line-height:16px}.btn.icon-button{min-width:initial;min-height:initial;width:40px;height:40px;padding:0;justify-content:center}.btn.icon-button.btn-round{border-radius:100px}.btn.icon-button.btn-square{border-radius:1px}.btn.icon-button.btn-s{width:32px;height:32px}.btn.btn-primary:focus,.btn.btn-outline-primary:focus,.btn.btn-secondary:focus,.btn.btn-outline-secondary:focus,.btn.btn-success:focus,.btn.btn-outline-success:focus,.btn.btn-danger:focus,.btn.btn-outline-danger:focus,.btn.btn-warning:focus,.btn.btn-outline-warning:focus,.btn.btn-outline-text:focus{box-shadow:none}.btn.btn-primary:focus-visible,.btn.btn-outline-primary:focus-visible,.btn.btn-secondary:focus-visible,.btn.btn-outline-secondary:focus-visible,.btn.btn-success:focus-visible,.btn.btn-outline-success:focus-visible,.btn.btn-danger:focus-visible,.btn.btn-outline-danger:focus-visible,.btn.btn-warning:focus-visible,.btn.btn-outline-warning:focus-visible,.btn.btn-outline-text:focus-visible{box-shadow:0 0 0 3px #B4DDD8}.btn:disabled,.btn.disabled{opacity:1;background-color:#dcd5d7;border-color:#dcd5d7;color:#ffffff}.btn.btn-primary:not(:disabled,.disabled):focus{background-color:#378375;border-color:#378375}.btn.btn-primary:not(:disabled,.disabled):hover{background-color:#2d6357;border-color:#2d6357}.btn.btn-primary:not(:disabled,.disabled):active,.btn.btn-primary:not(:disabled,.disabled).active{background-color:#28594e;border-color:#28594e}.btn.btn-outline-primary:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-primary:not(:disabled,.disabled):hover{color:#ffffff;background-color:#2d6357;border-color:#2d6357}.btn.btn-outline-primary:not(:disabled,.disabled):active,.btn.btn-outline-primary:not(:disabled,.disabled).active{background-color:#28594e;border-color:#28594e}.btn.btn-secondary:not(:disabled,.disabled):focus{background-color:#ab377a;border-color:#ab377a}.btn.btn-secondary:not(:disabled,.disabled):hover{background-color:#99316d;border-color:#99316d}.btn.btn-secondary:not(:disabled,.disabled):active,.btn.btn-secondary:not(:disabled,.disabled).active{background-color:#822060;border-color:#822060}.btn.btn-outline-secondary:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-secondary:not(:disabled,.disabled):hover{color:#ffffff;background-color:#99316d;border-color:#99316d}.btn.btn-outline-secondary:not(:disabled,.disabled):active,.btn.btn-outline-secondary:not(:disabled,.disabled).active{background-color:#822060;border-color:#822060}.btn.btn-success:not(:disabled,.disabled):focus{background-color:#aec067;border-color:#aec067}.btn.btn-success:not(:disabled,.disabled):hover{background-color:#91a646;border-color:#91a646}.btn.btn-success:not(:disabled,.disabled):active,.btn.btn-success:not(:disabled,.disabled).active{background-color:#7d933c;border-color:#7d933c}.btn.btn-outline-success:not(:disabled,.disabled){color:#1d1d1d}.btn.btn-outline-success:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-success:not(:disabled,.disabled):hover{background-color:#91a646;border-color:#91a646}.btn.btn-outline-success:not(:disabled,.disabled):active,.btn.btn-outline-success:not(:disabled,.disabled).active{background-color:#7d933c;border-color:#7d933c}.btn.btn-danger:not(:disabled,.disabled):focus{background-color:#cd002f;border-color:#cd002f}.btn.btn-danger:not(:disabled,.disabled):hover{background-color:#bf0023;border-color:#bf0023}.btn.btn-danger:not(:disabled,.disabled):active,.btn.btn-danger:not(:disabled,.disabled).active{background-color:#900021;border-color:#900021}.btn.btn-outline-danger:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-danger:not(:disabled,.disabled):hover{color:#ffffff;background-color:#bf0023;border-color:#bf0023}.btn.btn-outline-danger:not(:disabled,.disabled):active,.btn.btn-outline-danger:not(:disabled,.disabled).active{background-color:#900021;border-color:#900021}.btn.btn-warning:not(:disabled,.disabled):focus{background-color:#f07f3c;border-color:#f07f3c}.btn.btn-warning:not(:disabled,.disabled):hover{background-color:#d97336;border-color:#d97336}.btn.btn-warning:not(:disabled,.disabled):active,.btn.btn-warning:not(:disabled,.disabled).active{background-color:#cc6e33;border-color:#cc6e33}.btn.btn-outline-warning:not(:disabled,.disabled){color:#1d1d1d}.btn.btn-outline-warning:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-warning:not(:disabled,.disabled):hover{background-color:#d97336;border-color:#d97336}.btn.btn-outline-warning:not(:disabled,.disabled):active,.btn.btn-outline-warning:not(:disabled,.disabled).active{background-color:#cc6e33;border-color:#cc6e33}.btn.btn-primary-outline-text{background-color:transparent;color:#378375}.btn.btn-primary-outline-text:hover{color:#2d6357}.btn.btn-primary-outline-text:active,.btn.btn-primary-outline-text.active{color:#28594e}.btn.btn-primary-outline-text:disabled,.btn.btn-primary-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}.btn.btn-secondary-outline-text{background-color:transparent;color:#ab377a}.btn.btn-secondary-outline-text:hover{color:#99316d}.btn.btn-secondary-outline-text:active,.btn.btn-secondary-outline-text.active{color:#822060}.btn.btn-secondary-outline-text:disabled,.btn.btn-secondary-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}.btn.btn-success-outline-text{background-color:transparent;color:#aec067}.btn.btn-success-outline-text:hover{color:#91a646}.btn.btn-success-outline-text:active,.btn.btn-success-outline-text.active{color:#7d933c}.btn.btn-success-outline-text:disabled,.btn.btn-success-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}.btn.btn-danger-outline-text{background-color:transparent;color:#cd002f}.btn.btn-danger-outline-text:hover{color:#bf0023}.btn.btn-danger-outline-text:active,.btn.btn-danger-outline-text.active{color:#900021}.btn.btn-danger-outline-text:disabled,.btn.btn-danger-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}.btn.btn-warning-outline-text{background-color:transparent;color:#f07f3c}.btn.btn-warning-outline-text:hover{color:#d97336}.btn.btn-warning-outline-text:active,.btn.btn-warning-outline-text.active{color:#cc6e33}.btn.btn-warning-outline-text:disabled,.btn.btn-warning-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}.card{position:relative;display:inline-flex;flex-direction:column;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid #ebe9e9;border-radius:1px;width:22rem;height:auto}.card .card-img ::slotted([slot=img]){width:100%;vertical-align:bottom}.card .card-body{padding:24px}.card.horizontal{flex-direction:row;width:538px}.card.horizontal.hasAll{height:auto}.card.horizontal.largeSize{height:218px}.card.horizontal.smallSize{height:138px}.card.horizontal .card-body{flex:1;width:0;padding:17px 24px 25px 25px}.card.horizontal .card-img{flex:1;order:2}.card.horizontal .card-img ::slotted([slot=img]){width:100%;height:100%;vertical-align:bottom;object-fit:cover}.card.horizontal.right .card-img{order:1}.card.horizontal.right .card-body{order:2}.dropdown{position:relative}.dropdown .btn{min-width:200px}.dropdown .dropdown-toggle::after{content:\"\";display:inline-block;border:none;vertical-align:-2px;margin-left:10px;width:14px;height:14px;background-size:14px;background-position:center;background-repeat:no-repeat;transition:transform 0.2s ease-in-out;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FFF' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M4.251 181.1C7.392 177.7 11.69 175.1 16 175.1c3.891 0 7.781 1.406 10.86 4.25l197.1 181.1l197.1-181.1c6.5-6 16.64-5.625 22.61 .9062c6 6.5 5.594 16.59-.8906 22.59l-208 192c-6.156 5.688-15.56 5.688-21.72 0l-208-192C-1.343 197.7-1.749 187.6 4.251 181.1z'/%3E%3C/svg%3E\")}.dropdown.show .dropdown-toggle::after{transform:rotate(-180deg);background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FFF' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M4.251 181.1C7.392 177.7 11.69 175.1 16 175.1c3.891 0 7.781 1.406 10.86 4.25l197.1 181.1l197.1-181.1c6.5-6 16.64-5.625 22.61 .9062c6 6.5 5.594 16.59-.8906 22.59l-208 192c-6.156 5.688-15.56 5.688-21.72 0l-208-192C-1.343 197.7-1.749 187.6 4.251 181.1z'/%3E%3C/svg%3E\")}.dropdown .btn-sm+.dropdown-menu{transform:translate3d(0px, 56.75px, 0px) !important}.dropdown .btn-lg+.dropdown-menu{transform:translate3d(0px, 72.5px, 0px) !important}.show>.btn-secondary.dropdown-toggle:focus{box-shadow:none}.svg-wrapper{display:inline-block}.dropdown-menu{display:none}.dropdown-menu.show{display:inline-block;position:absolute;z-index:1000;inset:0px auto auto 0px;min-width:200px;padding:0;border:none;border-radius:1px;background-color:#fafafa;transform:translate3d(0px, 52px, 0px) !important}.dropdown-menu.show.nested{transform:none !important;position:static}.dropdown-menu.show .form-control,.dropdown-menu.show .form-select{margin:16px}.dropdown-menu.show .form-select{color:#c5bbbd}.dropdown-menu.show .inf__search-input,.dropdown-menu.show .inf__filter-input{width:160px;min-height:calc(1.75em + 18px);font-size:0.8125rem;margin:16px;display:block;padding:8px 16px;font-family:\"Source Sans Pro\";font-weight:400;line-height:1.75;color:#1d1d1d;background-color:#fff;background-clip:padding-box;border:1px solid #c5bbbd;appearance:none;border-radius:1px;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.dropdown-menu.show .ifx__search-icon-wrapper{margin-right:24px}.dropdown-menu.show .dropdown-item{display:flex;align-items:center;width:100%;text-align:inherit;white-space:nowrap;border:0;padding:8px 16px;background-color:rgba(0, 0, 0, 0);text-decoration:none;color:#1d1d1d}.dropdown-menu.show .dropdown-item .form-check-label:hover{cursor:pointer}.dropdown-menu.show .dropdown-item:focus{background-color:#fafafa}.dropdown-menu.show .dropdown-item:focus-visible{outline:none;background-color:#fafafa;border:3px solid #B4DDD8;padding-left:13px;margin-left:0}.dropdown-menu.show .dropdown-item:hover{font-weight:600;background-color:#ebe9e9}.dropdown-menu.show .dropdown-item:hover svg{color:#1d1d1d}.dropdown-menu.show .dropdown-item.active,.dropdown-menu.show .dropdown-item:active{font-weight:600;background-color:transparent;color:#378375}.dropdown-menu.show .dropdown-item.active svg,.dropdown-menu.show .dropdown-item:active svg{color:#378375}.dropdown-menu.show .dropdown-item svg{width:13px;height:13px;margin-right:10px;vertical-align:-0.5px}.dropdown-menu.show .form-check-label{font-weight:400}.dropdown-item{display:flex;align-items:center;gap:12px;width:100%;text-align:inherit;white-space:nowrap;border:0;padding:8px 16px;background-color:rgba(0, 0, 0, 0);text-decoration:none;color:#1d1d1d}.dropdown-item.primary input[type=checkbox]{accent-color:#378375}.dropdown-item.secondary input[type=checkbox]{accent-color:#ab377a}.dropdown-item.success input[type=checkbox]{accent-color:#aec067}.dropdown-item.danger input[type=checkbox]{accent-color:#cd002f}.dropdown-item.warning input[type=checkbox]{accent-color:#f07f3c}.dropdown-item .form-check-label:hover{cursor:pointer}.dropdown-item .form-check-input{border-radius:1px}.dropdown-item:focus{background-color:#fafafa}.dropdown-item:focus-visible{outline:none;background-color:#fafafa;border:3px solid #B4DDD8;padding-left:13px;margin-left:0}.dropdown-item:hover{font-weight:600;background-color:#ebe9e9}.dropdown-item:hover svg{color:#1d1d1d}.dropdown-item.active,.dropdown-item:active{font-weight:600;background-color:transparent;color:#378375}.dropdown-item.active svg,.dropdown-item:active svg{color:#378375;fill:none}.inf__search-input{width:160px;min-height:calc(1.75em + 18px);font-size:0.8125rem;margin:16px;display:block;padding:8px 16px;font-family:\"Source Sans Pro\";font-weight:400;line-height:1.75;color:#1d1d1d;background-color:#fff;background-clip:padding-box;border:1px solid #c5bbbd;appearance:none;border-radius:1px;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.inf__filter-input{width:160px;min-height:calc(1.75em + 18px);font-size:0.8125rem;margin:16px;display:block;padding:8px 16px;font-family:\"Source Sans Pro\";font-weight:400;line-height:1.75;color:#1d1d1d;background-color:#fff;background-clip:padding-box;border:1px solid #c5bbbd;appearance:none;border-radius:1px;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.ifx__alert-text{font-size:16px;width:100%;padding:12px 0px 12px 12px;color:#1d1d1d}.ifx__alert-text.text-overflow{word-break:break-all}.ifx__alert-icon-wrapper{display:none}.ifx__alert-icon-wrapper.show{position:relative;min-width:48px;display:flex;justify-content:center;align-items:center;background-color:#378375}.ifx__close-icon-wrapper{display:flex;align-items:center;justify-content:center;min-width:40px}.ifx__close-icon-wrapper a{line-height:0;color:#1d1d1d}.ifx__close-icon-wrapper a:hover svg{stroke:#378375}.alert{display:flex;border:1px solid #378375;border-radius:1px;max-width:800px}.alert-primary,.alert-secondary,.alert-danger,.alert-success,.alert-warning{color:#1d1d1d;background-color:#ffffff}.alert-primary{border:1px solid #378375}.alert-primary .ifx__alert-icon-wrapper{background-color:#378375;color:#ffffff}.alert-secondary{border:1px solid #ab377a}.alert-secondary .ifx__alert-icon-wrapper{background-color:#ab377a;color:#ffffff}.alert-success{border:1px solid #aec067}.alert-success .ifx__alert-icon-wrapper{background-color:#aec067;color:#ffffff}.alert-danger{border:1px solid #cd002f}.alert-danger .ifx__alert-icon-wrapper{background-color:#cd002f;color:#ffffff}.alert-warning{border:1px solid #f07f3c}.alert-warning .ifx__alert-icon-wrapper{background-color:#f07f3c;color:#ffffff}.ifx-link{display:inline-flex;align-items:center;gap:8px;font-weight:600;font-size:16px;line-height:24px;color:#378375;text-decoration:none}.ifx-link.underline{text-decoration:underline;color:#1d1d1d;text-decoration-color:#378375}";

const Link = class {
  constructor(hostRef) {
    Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.href = undefined;
    this.target = '_self';
    this.icon = "";
    this.position = 'right';
    this.underline = "";
  }
  componentWillLoad() {
    if (this.icon.toUpperCase() !== 'TRUE') {
      this.icon = false;
    }
    else
      this.icon = true;
    if (this.position.toUpperCase() !== "LEFT") {
      this.position = 'right';
    }
    if (this.underline.toUpperCase() !== 'TRUE') {
      this.underline = false;
    }
    else
      this.underline = true;
  }
  render() {
    return (Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: this.href, target: this.target, class: `ifx-link ${this.underline ? 'underline' : ""}` }, this.icon && this.position.toUpperCase() === "LEFT" && Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ifx-icon", { icon: "arrow-right-16" }), Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), this.icon && this.position.toUpperCase() === "RIGHT" && Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ifx-icon", { icon: "arrow-right-16" })));
  }
  get el() { return Object(_index_8aa164cc_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
Link.style = indexCss;




/***/ })

}]);
//# sourceMappingURL=2.js.map