import{r as i,h as e,g as s}from"./index-CUTtscpp.js";import"@stencil/react-output-target/runtime";const o='@charset "UTF-8";.list-group-item{display:flex;align-items:center;justify-content:space-between;height:40px;width:350px;padding:8px 16px;background-color:#FFFFFF;border:1px solid #EEEDED;border-radius:1px 1px 0px 0px;font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;font-family:var(--ifx-font-family)}.list-group-item.flush{border:none;border-bottom:1px solid #EEEDED}.list-group-item.flush.bulletpoint{padding:8px}.list-group-item.bulletpoint .list-group-item-content::before{content:"•";display:inline-block;font-size:1.125rem;padding-right:10px}.list-group-item:hover:not(.show){background-color:#EEEDED}.list-group-item:active:not(.show){background-color:#0A8276;color:#FFFFFF}.list-group-item.show{display:block;height:88px;padding:16px}',l=o,r=class{constructor(t){i(this,t),this.isFlush=!1,this.hasBulletpoint=!1,this.badge=!1,this.badgeValue=0}componentWillLoad(){const t=this.el.closest("ifx-list-group");t.flush?this.isFlush=!0:this.isFlush=!1,t.bulletpoint&&!this.badge?this.hasBulletpoint=!0:this.hasBulletpoint=!1}render(){return e("div",{key:"2b49cdf4e760c4f4863157d0252958fd4cd62513",class:`list-group-item 
        ${this.isFlush?"flush":""}
        ${this.hasBulletpoint?"bulletpoint":""}`},e("div",{key:"b54b6473102d35dcf3864ea71f4d63afb2cdf636",class:"list-group-item-content"},e("slot",{key:"75bef5236fd2fa45df925fd0756ad15febcd97fb"})),this.badge&&e("ifx-number-indicator",{key:"93ce1f7e34e497edef0c5fab0a7deae5c1e2cdb1"},this.badgeValue))}get el(){return s(this)}};r.style=l;export{r as ifx_list_item};
