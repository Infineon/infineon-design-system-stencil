import{r as i,h as e,g as s}from"./index-DjC80i5L.js";const l='@charset "UTF-8";.list-group-item{display:flex;align-items:center;justify-content:space-between;height:40px;width:350px;padding:8px 16px;background-color:#FFFFFF;border:1px solid #EEEDED;border-radius:1px 1px 0px 0px;font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;font-family:var(--ifx-font-family)}.list-group-item.flush{border:none;border-bottom:1px solid #EEEDED}.list-group-item.flush.bulletpoint{padding:8px}.list-group-item.bulletpoint .list-group-item-content::before{content:"•";display:inline-block;font-size:1.125rem;padding-right:10px}.list-group-item:hover:not(.show){background-color:#EEEDED}.list-group-item:active:not(.show){background-color:#0A8276;color:#FFFFFF}.list-group-item.show{display:block;height:88px;padding:16px}',o=l,a=class{constructor(t){i(this,t),this.isFlush=!1,this.hasBulletpoint=!1,this.badge=!1,this.badgeValue=0}componentWillLoad(){const t=this.el.closest("ifx-list-group");t.flush?this.isFlush=!0:this.isFlush=!1,t.bulletpoint&&!this.badge?this.hasBulletpoint=!0:this.hasBulletpoint=!1}render(){return e("div",{key:"954e6df8d25a9a796ad922d8840b2f7017d59a02",class:`list-group-item 
        ${this.isFlush?"flush":""}
        ${this.hasBulletpoint?"bulletpoint":""}`},e("div",{key:"693a59f588970820fc1be6654975a65fec803f4f",class:"list-group-item-content"},e("slot",{key:"890ac3a6b6959f74b2d4cc9e8d069b436f464ceb"})),this.badge&&e("ifx-number-indicator",{key:"f72a05a1e53737c16a914fdad8ad4223a988f65c"},this.badgeValue))}get el(){return s(this)}};a.style=o;export{a as ifx_list_item};
