import{r as i,h as e,g as s}from"./index-QJfIhVVO.js";const l='@charset "UTF-8";.list-group-item{display:flex;align-items:center;justify-content:space-between;height:40px;width:350px;padding:8px 16px;background-color:#FFFFFF;border:1px solid #EEEDED;border-radius:1px 1px 0px 0px;font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;font-family:var(--ifx-font-family)}.list-group-item.flush{border:none;border-bottom:1px solid #EEEDED}.list-group-item.flush.bulletpoint{padding:8px}.list-group-item.bulletpoint .list-group-item-content::before{content:"•";display:inline-block;font-size:1.125rem;padding-right:10px}.list-group-item:hover:not(.show){background-color:#EEEDED}.list-group-item:active:not(.show){background-color:#0A8276;color:#FFFFFF}.list-group-item.show{display:block;height:88px;padding:16px}',o=l,r=class{constructor(t){i(this,t),this.isFlush=!1,this.hasBulletpoint=!1,this.badge=!1,this.badgeValue=0}componentWillLoad(){const t=this.el.closest("ifx-list-group");t.flush?this.isFlush=!0:this.isFlush=!1,t.bulletpoint&&!this.badge?this.hasBulletpoint=!0:this.hasBulletpoint=!1}render(){return e("div",{key:"ac4a1713384912c8092b80cea32f4bc630c2abde",class:`list-group-item 
        ${this.isFlush?"flush":""}
        ${this.hasBulletpoint?"bulletpoint":""}`},e("div",{key:"d91fa04b64362d4f6f45126d2e2789b3698b791e",class:"list-group-item-content"},e("slot",{key:"4182bdcd4a235f10466984e0bb3ae6b187b572fb"})),this.badge&&e("ifx-number-indicator",{key:"b4b5e60e443adf24eff2dd45c5b6c438bdc49852"},this.badgeValue))}get el(){return s(this)}};r.style=o;export{r as ifx_list_item};
