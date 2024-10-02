import{r as c,c as a,h as t,g as s}from"./index-fXfwTqY-.js";const l=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.chip-item{display:flex;align-items:center;gap:8px;padding:8px 16px;user-select:none;transition:all 100ms ease;transition-property:background, color}.chip-item:hover{cursor:pointer;background-color:#EEEDED}.chip-item:active{background-color:#BFBBBB}.chip-item.chip-item--large{font:400 1rem/1.5rem "Source Sans 3"}.chip-item.chip-item--small{font:400 0.875rem/1.25rem "Source Sans 3"}.chip-item.chip-item--selected{color:#0A8276}.chip-item.chip-item--selected .chip-item__selected-indicator{display:block}.chip-item__selected-indicator{display:none;margin-left:auto}',h=l,n=class{constructor(e){c(this,e),this.ifxChipItemSelect=a(this,"ifxChipItemSelect",5),this.value=void 0,this.chipState={emitIfxChipItemSelect:!0,variant:"multi",size:"large"},this.selected=!1}updateItemSelection(e){if(this.chipState.variant==="single"){const i=e.target;this.chipItem!==i&&this.chipItem.parentElement===i.parentElement&&(this.selected=!1)}}validateSelected(e,i){e!==i&&(this.chipState.emitIfxChipItemSelect?this.emitIfxChipItemSelectEvent():this.chipState.emitIfxChipItemSelect=!0)}getItemLabel(){return this.chipItem.innerText}toggleItemSelection(){this.selected=!this.selected}emitIfxChipItemSelectEvent(e=!0){this.ifxChipItemSelect.emit({emitIfxChipChange:e,key:this.chipState.key,label:this.getItemLabel(),selected:this.selected,value:this.value})}handleItemClick(){this.toggleItemSelection()}handleItemKeyDown(e){(e.code==="Enter"||e.code==="Space")&&this.toggleItemSelection()}handleSelectedState(){this.selected&&this.emitIfxChipItemSelectEvent(!1)}componentWillLoad(){this.handleSelectedState()}render(){return t("div",{key:"43fbad1d2db378ecfefcd5e591374e12227639ac",class:`chip-item chip-item--${this.chipState.size} 
                         chip-item--${(this.selected&&this.chipState.variant)==="single"?"selected":""}`,tabIndex:0,onClick:()=>{this.handleItemClick()},onKeyDown:e=>{this.handleItemKeyDown(e)}},this.chipState.variant==="multi"&&t("ifx-checkbox",{key:"6a62b66f737873105b36bdd5ed7d8647faa65447",value:this.selected,tabIndex:-1,size:"s"}),t("div",{key:"00f6935bffe7f0c2f44ab119f342e795649fae76",class:"chip-item__label"}," ",t("slot",{key:"f25fd89bdee9b6e0e45dd4d78608a6d7238e1fb5"})," "),t("div",{key:"ab59271a98f854f5c06e0aab6c7297bdda9949e8",class:"chip-item__selected-indicator"},t("ifx-icon",{key:"ffb9247f166482bbac44c4f7a22b03f73d8fdaa0",icon:`check${this.chipState.size==="small"?"12":"16"}`}," ")))}get chipItem(){return s(this)}static get watchers(){return{selected:["validateSelected"]}}};n.style=h;export{n as ifx_chip_item};
