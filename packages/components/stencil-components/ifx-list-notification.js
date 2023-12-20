import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const listGroupNotificationCss = ".list-group-notification{width:350px;height:88px;padding:16px;margin-bottom:8px;background-color:#FFFFFF;border:1px solid #EEEDED}.list-group-notification .description__section{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.list-group-notification.flush{border:none;border-bottom:1px solid #EEEDED}.list-group-notification .heading__section{display:flex;justify-content:space-between;margin-bottom:8px;color:#0A8276}.list-group-notification .heading__section-title{flex:1;margin:0;font-family:\"Source Sans Pro\";font-weight:600;line-height:1.2;font-size:1rem;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.list-group-notification .heading__section-time{flex:none;margin-left:2px;font-size:0.875rem;line-height:1.25rem;font-weight:400;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}";

const ListGroupNotification = /*@__PURE__*/ proxyCustomElement(class ListGroupNotification extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.titleText = "";
    this.isFlush = false;
    this.creationTime = undefined;
    this.postTime = undefined;
    this.shownTime = undefined;
  }
  setDisplayTime(seconds, minutes, hours, days) {
    if (seconds <= 60) {
      this.shownTime = `Just now`;
    }
    else if (minutes <= 60) {
      this.shownTime = `${minutes} min. ago`;
    }
    else if (hours <= 24) {
      this.shownTime = hours > 1 ? `${hours} hr. ago` : `${hours} hrs. ago`;
    }
    else if (days) {
      this.shownTime = hours < 48 ? `1 day ago` : `${days} days ago`;
      if (hours > 168) {
        this.shownTime = `${new Date().getDay()}.${new Date().getMonth()}.${new Date().getFullYear()}`;
      }
    }
  }
  stringToDate(dataString) {
    if (!dataString)
      return null;
    let dateParts = dataString.split("/");
    if (dateParts[2]) {
      if (dateParts[2].split(" ")[1]) {
        let timeParts = dateParts[2].split(" ")[1].split(":");
        dateParts[2] = dateParts[2].split(" ")[0];
        return new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0], timeParts[0], timeParts[1], timeParts[2]);
      }
    }
  }
  getElapsedTime(time) {
    let date = this.stringToDate(time);
    if (date) {
      let miliseconds = Date.now() - date.getTime();
      let seconds = Math.floor(miliseconds / 1000);
      let minutes = Math.floor(miliseconds / 60000);
      let hours = Math.floor(minutes / 60);
      let days = Math.floor(hours / 24);
      this.setDisplayTime(seconds, minutes, hours, days);
    }
  }
  setTimeInterval(time) {
    this.postTime = window.setInterval(() => {
      this.getElapsedTime(time);
    }, 1000);
  }
  ;
  componentWillLoad() {
    this.getElapsedTime(this.creationTime);
    this.setTimeInterval(this.creationTime); //if time update on refresh, delete this & clear interval
    const ifxListGroup = this.el.closest('ifx-list-group');
    if (ifxListGroup.flush) {
      this.isFlush = true;
    }
    else
      this.isFlush = false;
  }
  disconnectedCallback() {
    window.clearInterval(this.postTime);
  }
  render() {
    return (h("div", { class: `list-group-notification ${this.isFlush ? 'flush' : ""}` }, h("div", { class: "heading__section" }, h("h6", { class: "heading__section-title" }, this.titleText), h("div", { class: "heading__section-time" }, this.shownTime)), h("div", { class: "description__section" }, h("slot", null))));
  }
  get el() { return this; }
  static get style() { return listGroupNotificationCss; }
}, [1, "ifx-list-notification", {
    "titleText": [1, "title-text"],
    "isFlush": [4, "is-flush"],
    "creationTime": [8, "creation-time"],
    "postTime": [32],
    "shownTime": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-list-notification"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-list-notification":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ListGroupNotification);
      }
      break;
  } });
}

const IfxListNotification = ListGroupNotification;
const defineCustomElement = defineCustomElement$1;

export { IfxListNotification, defineCustomElement };

//# sourceMappingURL=ifx-list-notification.js.map