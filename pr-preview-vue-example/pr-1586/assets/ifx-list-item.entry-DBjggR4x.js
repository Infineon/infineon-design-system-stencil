import{r as i,h as e,g as s}from"./index-Dz5hOlod.js";const l='@charset "UTF-8";.list-group-item{display:flex;align-items:center;justify-content:space-between;height:40px;width:350px;padding:8px 16px;background-color:#FFFFFF;border:1px solid #EEEDED;border-radius:1px 1px 0px 0px;font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;font-family:var(--ifx-font-family)}.list-group-item.flush{border:none;border-bottom:1px solid #EEEDED}.list-group-item.flush.bulletpoint{padding:8px}.list-group-item.bulletpoint .list-group-item-content::before{content:"•";display:inline-block;font-size:1.125rem;padding-right:10px}.list-group-item:hover:not(.show){background-color:#EEEDED}.list-group-item:active:not(.show){background-color:#0A8276;color:#FFFFFF}.list-group-item.show{display:block;height:88px;padding:16px}',o=l,r=class{constructor(t){i(this,t),this.isFlush=!1,this.hasBulletpoint=!1,this.badge=!1,this.badgeValue=0}componentWillLoad(){const t=this.el.closest("ifx-list-group");t.flush?this.isFlush=!0:this.isFlush=!1,t.bulletpoint&&!this.badge?this.hasBulletpoint=!0:this.hasBulletpoint=!1}render(){return e("div",{key:"d00b96f27bd58b35075f65e7cd8f230c8b57f7c1",class:`list-group-item 
        ${this.isFlush?"flush":""}
        ${this.hasBulletpoint?"bulletpoint":""}`},e("div",{key:"dd7f2c0c37f5bc105d451af4e11c328a5410bf0e",class:"list-group-item-content"},e("slot",{key:"11710af13882ffbf3aa9f18752ae33e475617688"})),this.badge&&e("ifx-number-indicator",{key:"6c114f7ec1d053553c595545391ed450d82bd903"},this.badgeValue))}get el(){return s(this)}};r.style=o;export{r as ifx_list_item};
