/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import { Components } from '@infineon/infineon-design-system-stencil';


@ProxyCmp({
  inputs: ['autoCollapse']
})
@Component({
  selector: 'ifx-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoCollapse'],
  standalone: false
})
export class IfxAccordion {
  protected el: HTMLIfxAccordionElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxAccordion extends Components.IfxAccordion {}


@ProxyCmp({
  inputs: ['AriaLevel', 'caption', 'open']
})
@Component({
  selector: 'ifx-accordion-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['AriaLevel', 'caption', 'open'],
  outputs: ['ifxOpen', 'ifxClose'],
  standalone: false
})
export class IfxAccordionItem {
  protected el: HTMLIfxAccordionItemElement;
  @Output() ifxOpen = new EventEmitter<CustomEvent<any>>();
  @Output() ifxClose = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxAccordionItem extends Components.IfxAccordionItem {

  ifxOpen: EventEmitter<CustomEvent<any>>;

  ifxClose: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['listAriaLabel']
})
@Component({
  selector: 'ifx-action-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['listAriaLabel'],
  standalone: false
})
export class IfxActionList {
  protected el: HTMLIfxActionListElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxActionList extends Components.IfxActionList {}


@ProxyCmp({
  inputs: ['description', 'disabled', 'href', 'itemAriaLabel', 'itemTitle', 'target', 'value']
})
@Component({
  selector: 'ifx-action-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['description', 'disabled', 'href', 'itemAriaLabel', 'itemTitle', 'target', 'value'],
  outputs: ['ifxActionListItemClick'],
  standalone: false
})
export class IfxActionListItem {
  protected el: HTMLIfxActionListItemElement;
  @Output() ifxActionListItemClick = new EventEmitter<CustomEvent<IIfxActionListItemActionListItemClickEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { ActionListItemClickEvent as IIfxActionListItemActionListItemClickEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxActionListItem extends Components.IfxActionListItem {
  /**
   * Event emitted when the main item area is clicked
   */
  ifxActionListItemClick: EventEmitter<CustomEvent<IIfxActionListItemActionListItemClickEvent>>;
}


@ProxyCmp({
  inputs: ['divider', 'variant']
})
@Component({
  selector: 'ifx-ai-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['divider', 'variant'],
  standalone: false
})
export class IfxAiLabel {
  protected el: HTMLIfxAiLabelElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxAiLabel extends Components.IfxAiLabel {}


@ProxyCmp({
  inputs: ['AriaLive', 'closable', 'icon', 'variant']
})
@Component({
  selector: 'ifx-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['AriaLive', 'closable', 'icon', 'variant'],
  outputs: ['ifxClose'],
  standalone: false
})
export class IfxAlert {
  protected el: HTMLIfxAlertElement;
  @Output() ifxClose = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxAlert extends Components.IfxAlert {

  ifxClose: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['cols', 'rowHeight', 'rows', 'tableHeight', 'variant']
})
@Component({
  selector: 'ifx-basic-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['cols', 'rowHeight', 'rows', 'tableHeight', 'variant'],
  standalone: false
})
export class IfxBasicTable {
  protected el: HTMLIfxBasicTableElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxBasicTable extends Components.IfxBasicTable {}


@ProxyCmp({
})
@Component({
  selector: 'ifx-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class IfxBreadcrumb {
  protected el: HTMLIfxBreadcrumbElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxBreadcrumb extends Components.IfxBreadcrumb {}


@ProxyCmp({
})
@Component({
  selector: 'ifx-breadcrumb-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class IfxBreadcrumbItem {
  protected el: HTMLIfxBreadcrumbItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxBreadcrumbItem extends Components.IfxBreadcrumbItem {}


@ProxyCmp({
  inputs: ['href', 'icon', 'target']
})
@Component({
  selector: 'ifx-breadcrumb-item-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['href', 'icon', 'target'],
  outputs: ['breadcrumbMenuIconWrapper'],
  standalone: false
})
export class IfxBreadcrumbItemLabel {
  protected el: HTMLIfxBreadcrumbItemLabelElement;
  @Output() breadcrumbMenuIconWrapper = new EventEmitter<CustomEvent<HTMLElement>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxBreadcrumbItemLabel extends Components.IfxBreadcrumbItemLabel {

  breadcrumbMenuIconWrapper: EventEmitter<CustomEvent<HTMLElement>>;
}


@ProxyCmp({
  inputs: ['ariaLabel', 'disabled', 'fullWidth', 'href', 'size', 'target', 'theme', 'type', 'variant'],
  methods: ['setFocus']
})
@Component({
  selector: 'ifx-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'disabled', 'fullWidth', 'href', 'size', 'target', 'theme', 'type', 'variant'],
  standalone: false
})
export class IfxButton {
  protected el: HTMLIfxButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxButton extends Components.IfxButton {}


@ProxyCmp({
  inputs: ['ariaLabel', 'direction', 'href', 'target']
})
@Component({
  selector: 'ifx-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'direction', 'href', 'target'],
  standalone: false
})
export class IfxCard {
  protected el: HTMLIfxCardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxCard extends Components.IfxCard {}


@ProxyCmp({
})
@Component({
  selector: 'ifx-card-headline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class IfxCardHeadline {
  protected el: HTMLIfxCardHeadlineElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxCardHeadline extends Components.IfxCardHeadline {}


@ProxyCmp({
  inputs: ['alt', 'position', 'src']
})
@Component({
  selector: 'ifx-card-image',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alt', 'position', 'src'],
  outputs: ['imgPosition'],
  standalone: false
})
export class IfxCardImage {
  protected el: HTMLIfxCardImageElement;
  @Output() imgPosition = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxCardImage extends Components.IfxCardImage {

  imgPosition: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
})
@Component({
  selector: 'ifx-card-links',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class IfxCardLinks {
  protected el: HTMLIfxCardLinksElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxCardLinks extends Components.IfxCardLinks {}


@ProxyCmp({
})
@Component({
  selector: 'ifx-card-overline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class IfxCardOverline {
  protected el: HTMLIfxCardOverlineElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxCardOverline extends Components.IfxCardOverline {}


@ProxyCmp({
})
@Component({
  selector: 'ifx-card-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class IfxCardText {
  protected el: HTMLIfxCardTextElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxCardText extends Components.IfxCardText {}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'error', 'indeterminate', 'readOnly', 'size', 'value'],
  methods: ['isChecked', 'toggleCheckedState']
})
@Component({
  selector: 'ifx-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'error', 'indeterminate', 'readOnly', 'size', 'value'],
  outputs: ['ifxChange', 'ifxError'],
  standalone: false
})
export class IfxCheckbox {
  protected el: HTMLIfxCheckboxElement;
  @Output() ifxChange = new EventEmitter<CustomEvent<any>>();
  @Output() ifxError = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxCheckbox extends Components.IfxCheckbox {

  ifxChange: EventEmitter<CustomEvent<any>>;

  ifxError: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['alignment', 'captionText', 'groupLabelText', 'required', 'showCaption', 'showCaptionIcon', 'showGroupLabel', 'size'],
  methods: ['setGroupError']
})
@Component({
  selector: 'ifx-checkbox-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignment', 'captionText', 'groupLabelText', 'required', 'showCaption', 'showCaptionIcon', 'showGroupLabel', 'size'],
  standalone: false
})
export class IfxCheckboxGroup {
  protected el: HTMLIfxCheckboxGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxCheckboxGroup extends Components.IfxCheckboxGroup {}


@ProxyCmp({
  inputs: ['ariaLabel', 'disabled', 'icon', 'placeholder', 'readOnly', 'size', 'theme', 'value', 'variant']
})
@Component({
  selector: 'ifx-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'disabled', 'icon', 'placeholder', 'readOnly', 'size', 'theme', 'value', 'variant'],
  outputs: ['ifxChange'],
  standalone: false
})
export class IfxChip {
  protected el: HTMLIfxChipElement;
  @Output() ifxChange = new EventEmitter<CustomEvent<{ previousSelection: Array<IIfxChipChipItemSelectEvent>; currentSelection: Array<IIfxChipChipItemSelectEvent>; name: string; }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { ChipItemSelectEvent as IIfxChipChipItemSelectEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxChip extends Components.IfxChip {

  ifxChange: EventEmitter<CustomEvent<{ previousSelection: Array<IIfxChipChipItemSelectEvent>; currentSelection: Array<IIfxChipChipItemSelectEvent>; name: string; }>>;
}


@ProxyCmp({
  inputs: ['chipState', 'selected', 'value']
})
@Component({
  selector: 'ifx-chip-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['chipState', 'selected', 'value'],
  outputs: ['ifxChipItemSelect'],
  standalone: false
})
export class IfxChipItem {
  protected el: HTMLIfxChipItemElement;
  @Output() ifxChipItemSelect = new EventEmitter<CustomEvent<IIfxChipItemChipItemSelectEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { ChipItemSelectEvent as IIfxChipItemChipItemSelectEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxChipItem extends Components.IfxChipItem {

  ifxChipItemSelect: EventEmitter<CustomEvent<IIfxChipItemChipItemSelectEvent>>;
}


@ProxyCmp({
})
@Component({
  selector: 'ifx-content-switcher',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  outputs: ['ifxChange'],
  standalone: false
})
export class IfxContentSwitcher {
  protected el: HTMLIfxContentSwitcherElement;
  @Output() ifxChange = new EventEmitter<CustomEvent<IIfxContentSwitcherChangeEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { ChangeEvent as IIfxContentSwitcherChangeEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxContentSwitcher extends Components.IfxContentSwitcher {

  ifxChange: EventEmitter<CustomEvent<IIfxContentSwitcherChangeEvent>>;
}


@ProxyCmp({
  inputs: ['selected', 'value']
})
@Component({
  selector: 'ifx-content-switcher-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['selected', 'value'],
  standalone: false
})
export class IfxContentSwitcherItem {
  protected el: HTMLIfxContentSwitcherItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxContentSwitcherItem extends Components.IfxContentSwitcherItem {}


@ProxyCmp({
  inputs: ['ariaLabelText', 'autocomplete', 'caption', 'disabled', 'error', 'label', 'max', 'min', 'readOnly', 'required', 'size', 'success', 'type', 'value'],
  methods: ['clear']
})
@Component({
  selector: 'ifx-date-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelText', 'autocomplete', 'caption', 'disabled', 'error', 'label', 'max', 'min', 'readOnly', 'required', 'size', 'success', 'type', 'value'],
  outputs: ['ifxDate'],
  standalone: false
})
export class IfxDatePicker {
  protected el: HTMLIfxDatePickerElement;
  @Output() ifxDate = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxDatePicker extends Components.IfxDatePicker {
  /**
   * Event emitted when date value changes
   */
  ifxDate: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['tokens']
})
@Component({
  selector: 'ifx-download',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['tokens'],
  standalone: false
})
export class IfxDownload {
  protected el: HTMLIfxDownloadElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxDownload extends Components.IfxDownload {}


@ProxyCmp({
  inputs: ['defaultOpen', 'disabled', 'noAppendToBody', 'noCloseOnMenuClick', 'noCloseOnOutsideClick', 'placement'],
  methods: ['isOpen', 'closeDropdown', 'openDropdown']
})
@Component({
  selector: 'ifx-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['defaultOpen', 'disabled', 'noAppendToBody', 'noCloseOnMenuClick', 'noCloseOnOutsideClick', 'placement'],
  outputs: ['ifxOpen', 'ifxClose', 'ifxDropdown'],
  standalone: false
})
export class IfxDropdown {
  protected el: HTMLIfxDropdownElement;
  @Output() ifxOpen = new EventEmitter<CustomEvent<any>>();
  @Output() ifxClose = new EventEmitter<CustomEvent<any>>();
  @Output() ifxDropdown = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxDropdown extends Components.IfxDropdown {

  ifxOpen: EventEmitter<CustomEvent<any>>;

  ifxClose: EventEmitter<CustomEvent<any>>;

  ifxDropdown: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
})
@Component({
  selector: 'ifx-dropdown-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class IfxDropdownHeader {
  protected el: HTMLIfxDropdownHeaderElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxDropdownHeader extends Components.IfxDropdownHeader {}


@ProxyCmp({
  inputs: ['error', 'hide', 'href', 'icon', 'target']
})
@Component({
  selector: 'ifx-dropdown-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['error', 'hide', 'href', 'icon', 'target'],
  outputs: ['ifxDropdownItem'],
  standalone: false
})
export class IfxDropdownItem {
  protected el: HTMLIfxDropdownItemElement;
  @Output() ifxDropdownItem = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxDropdownItem extends Components.IfxDropdownItem {

  ifxDropdownItem: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['isOpen', 'size']
})
@Component({
  selector: 'ifx-dropdown-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['isOpen', 'size'],
  outputs: ['menuSize', 'ifxDropdownMenuItem'],
  standalone: false
})
export class IfxDropdownMenu {
  protected el: HTMLIfxDropdownMenuElement;
  @Output() menuSize = new EventEmitter<CustomEvent<any>>();
  @Output() ifxDropdownMenuItem = new EventEmitter<CustomEvent<CustomEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxDropdownMenu extends Components.IfxDropdownMenu {

  menuSize: EventEmitter<CustomEvent<any>>;

  ifxDropdownMenuItem: EventEmitter<CustomEvent<CustomEvent>>;
}


@ProxyCmp({
})
@Component({
  selector: 'ifx-dropdown-separator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class IfxDropdownSeparator {
  protected el: HTMLIfxDropdownSeparatorElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxDropdownSeparator extends Components.IfxDropdownSeparator {}


@ProxyCmp({
  inputs: ['isOpen']
})
@Component({
  selector: 'ifx-dropdown-trigger',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['isOpen'],
  standalone: false
})
export class IfxDropdownTrigger {
  protected el: HTMLIfxDropdownTriggerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxDropdownTrigger extends Components.IfxDropdownTrigger {}


@ProxyCmp({
  inputs: ['disabled', 'hideArrow', 'isOpen', 'size', 'theme', 'variant']
})
@Component({
  selector: 'ifx-dropdown-trigger-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'hideArrow', 'isOpen', 'size', 'theme', 'variant'],
  standalone: false
})
export class IfxDropdownTriggerButton {
  protected el: HTMLIfxDropdownTriggerButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxDropdownTriggerButton extends Components.IfxDropdownTriggerButton {}


@ProxyCmp({
})
@Component({
  selector: 'ifx-faq',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class IfxFaq {
  protected el: HTMLIfxFaqElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxFaq extends Components.IfxFaq {}


@ProxyCmp({
  inputs: ['additionalAllowedFileTypes', 'allowAnyFileType', 'allowedFileExtensions', 'allowedFileTypes', 'ariaLabelBrowseFiles', 'ariaLabelCancelUpload', 'ariaLabelDropzone', 'ariaLabelFileInput', 'ariaLabelRemoveFile', 'ariaLabelRetryUpload', 'ariaLabelUploadFailedStatus', 'ariaLabelUploadedStatus', 'ariaLabelUploadingStatus', 'disabled', 'dragAndDrop', 'label', 'labelBrowseFiles', 'labelDragAndDrop', 'labelFilePlural', 'labelFileSingular', 'labelFileTooLarge', 'labelMaxFilesExceeded', 'labelMaxFilesInfo', 'labelRequiredError', 'labelSupportedFormatsTemplate', 'labelUnsupportedFileType', 'labelUploadFailed', 'labelUploaded', 'labelUploadedFilesHeading', 'maxFileSizeMB', 'maxFiles', 'required', 'uploadHandler'],
  methods: ['injectDemoState', 'triggerDemoValidation']
})
@Component({
  selector: 'ifx-file-upload',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['additionalAllowedFileTypes', 'allowAnyFileType', 'allowedFileExtensions', 'allowedFileTypes', 'ariaLabelBrowseFiles', 'ariaLabelCancelUpload', 'ariaLabelDropzone', 'ariaLabelFileInput', 'ariaLabelRemoveFile', 'ariaLabelRetryUpload', 'ariaLabelUploadFailedStatus', 'ariaLabelUploadedStatus', 'ariaLabelUploadingStatus', 'disabled', 'dragAndDrop', 'label', 'labelBrowseFiles', 'labelDragAndDrop', 'labelFilePlural', 'labelFileSingular', 'labelFileTooLarge', 'labelMaxFilesExceeded', 'labelMaxFilesInfo', 'labelRequiredError', 'labelSupportedFormatsTemplate', 'labelUnsupportedFileType', 'labelUploadFailed', 'labelUploaded', 'labelUploadedFilesHeading', 'maxFileSizeMB', 'maxFiles', 'required', 'uploadHandler'],
  outputs: ['ifxFileUploadAdd', 'ifxFileUploadRemove', 'ifxFileUploadChange', 'ifxFileUploadError', 'ifxFileUploadInvalid', 'ifxFileUploadStart', 'ifxFileUploadComplete', 'ifxFileUploadAllComplete', 'ifxFileUploadAbort', 'ifxFileUploadDrop', 'ifxFileUploadClick', 'ifxFileUploadMaxFilesExceeded', 'ifxFileUploadValidation', 'ifxFileUploadRetry'],
  standalone: false
})
export class IfxFileUpload {
  protected el: HTMLIfxFileUploadElement;
  @Output() ifxFileUploadAdd = new EventEmitter<CustomEvent<{ addedFiles: File[]; files: File[]; }>>();
  @Output() ifxFileUploadRemove = new EventEmitter<CustomEvent<{ removedFile: File; files: File[]; }>>();
  @Output() ifxFileUploadChange = new EventEmitter<CustomEvent<{ files: File[] }>>();
  @Output() ifxFileUploadError = new EventEmitter<CustomEvent<{ errorType: string; file: File; message: string; reason?: string; }>>();
  @Output() ifxFileUploadInvalid = new EventEmitter<CustomEvent<{ file: File; reason: string }>>();
  @Output() ifxFileUploadStart = new EventEmitter<CustomEvent<{ file: File }>>();
  @Output() ifxFileUploadComplete = new EventEmitter<CustomEvent<{ file: File }>>();
  @Output() ifxFileUploadAllComplete = new EventEmitter<CustomEvent<{ files: File[] }>>();
  @Output() ifxFileUploadAbort = new EventEmitter<CustomEvent<{ file: File }>>();
  @Output() ifxFileUploadDrop = new EventEmitter<CustomEvent<{ droppedFiles: File[]; acceptedFiles: File[]; rejectedFiles: File[]; }>>();
  @Output() ifxFileUploadClick = new EventEmitter<CustomEvent<void>>();
  @Output() ifxFileUploadMaxFilesExceeded = new EventEmitter<CustomEvent<{ maxFiles: number; attempted: number; }>>();
  @Output() ifxFileUploadValidation = new EventEmitter<CustomEvent<{ valid: boolean }>>();
  @Output() ifxFileUploadRetry = new EventEmitter<CustomEvent<{ file: File }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxFileUpload extends Components.IfxFileUpload {

  ifxFileUploadAdd: EventEmitter<CustomEvent<{ addedFiles: File[]; files: File[]; }>>;

  ifxFileUploadRemove: EventEmitter<CustomEvent<{ removedFile: File; files: File[]; }>>;

  ifxFileUploadChange: EventEmitter<CustomEvent<{ files: File[] }>>;

  ifxFileUploadError: EventEmitter<CustomEvent<{ errorType: string; file: File; message: string; reason?: string; }>>;

  ifxFileUploadInvalid: EventEmitter<CustomEvent<{ file: File; reason: string }>>;

  ifxFileUploadStart: EventEmitter<CustomEvent<{ file: File }>>;

  ifxFileUploadComplete: EventEmitter<CustomEvent<{ file: File }>>;

  ifxFileUploadAllComplete: EventEmitter<CustomEvent<{ files: File[] }>>;

  ifxFileUploadAbort: EventEmitter<CustomEvent<{ file: File }>>;

  ifxFileUploadDrop: EventEmitter<CustomEvent<{ droppedFiles: File[]; acceptedFiles: File[]; rejectedFiles: File[]; }>>;

  ifxFileUploadClick: EventEmitter<CustomEvent<void>>;

  ifxFileUploadMaxFilesExceeded: EventEmitter<CustomEvent<{ maxFiles: number; attempted: number; }>>;

  ifxFileUploadValidation: EventEmitter<CustomEvent<{ valid: boolean }>>;

  ifxFileUploadRetry: EventEmitter<CustomEvent<{ file: File }>>;
}


@ProxyCmp({
  inputs: ['filterGroupName', 'maxVisibleItems']
})
@Component({
  selector: 'ifx-filter-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['filterGroupName', 'maxVisibleItems'],
  outputs: ['ifxFilterAccordionChange'],
  standalone: false
})
export class IfxFilterAccordion {
  protected el: HTMLIfxFilterAccordionElement;
  @Output() ifxFilterAccordionChange = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxFilterAccordion extends Components.IfxFilterAccordion {

  ifxFilterAccordionChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['maxShownFilters', 'showMoreFiltersButton']
})
@Component({
  selector: 'ifx-filter-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['maxShownFilters', 'showMoreFiltersButton'],
  outputs: ['ifxTopbarFilterChange'],
  standalone: false
})
export class IfxFilterBar {
  protected el: HTMLIfxFilterBarElement;
  @Output() ifxTopbarFilterChange = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxFilterBar extends Components.IfxFilterBar {

  ifxTopbarFilterChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['disabled', 'filterKey', 'filterName', 'filterOrientation', 'filterValue', 'placeholder']
})
@Component({
  selector: 'ifx-filter-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'filterKey', 'filterName', 'filterOrientation', 'filterValue', 'placeholder'],
  outputs: ['ifxFilterSearchChange'],
  standalone: false
})
export class IfxFilterSearch {
  protected el: HTMLIfxFilterSearchElement;
  @Output() ifxFilterSearchChange = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxFilterSearch extends Components.IfxFilterSearch {

  ifxFilterSearchChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
})
@Component({
  selector: 'ifx-filter-type-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  outputs: ['ifxSidebarFilterChange'],
  standalone: false
})
export class IfxFilterTypeGroup {
  protected el: HTMLIfxFilterTypeGroupElement;
  @Output() ifxSidebarFilterChange = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxFilterTypeGroup extends Components.IfxFilterTypeGroup {

  ifxSidebarFilterChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['copyrightText']
})
@Component({
  selector: 'ifx-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['copyrightText'],
  standalone: false
})
export class IfxFooter {
  protected el: HTMLIfxFooterElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxFooter extends Components.IfxFooter {}


@ProxyCmp({
})
@Component({
  selector: 'ifx-footer-column',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class IfxFooterColumn {
  protected el: HTMLIfxFooterColumnElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxFooterColumn extends Components.IfxFooterColumn {}


@ProxyCmp({
  inputs: ['icon', 'ifxIcon']
})
@Component({
  selector: 'ifx-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'ifxIcon'],
  outputs: ['consoleError'],
  standalone: false
})
export class IfxIcon {
  protected el: HTMLIfxIconElement;
  @Output() consoleError = new EventEmitter<CustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxIcon extends Components.IfxIcon {

  consoleError: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['ariaLabel', 'disabled', 'href', 'icon', 'shape', 'size', 'target', 'variant'],
  methods: ['setFocus']
})
@Component({
  selector: 'ifx-icon-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'disabled', 'href', 'icon', 'shape', 'size', 'target', 'variant'],
  standalone: false
})
export class IfxIconButton {
  protected el: HTMLIfxIconButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxIconButton extends Components.IfxIconButton {}


@ProxyCmp({
})
@Component({
  selector: 'ifx-icons-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class IfxIconsPreview {
  protected el: HTMLIfxIconsPreviewElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxIconsPreview extends Components.IfxIconsPreview {}


@ProxyCmp({
  inputs: ['ariaLabel', 'inverted', 'number', 'variant']
})
@Component({
  selector: 'ifx-indicator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'inverted', 'number', 'variant'],
  standalone: false
})
export class IfxIndicator {
  protected el: HTMLIfxIndicatorElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxIndicator extends Components.IfxIndicator {}


@ProxyCmp({
  inputs: ['ariaLabel', 'disabled', 'download', 'href', 'size', 'target', 'variant']
})
@Component({
  selector: 'ifx-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'disabled', 'download', 'href', 'size', 'target', 'variant'],
  standalone: false
})
export class IfxLink {
  protected el: HTMLIfxLinkElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxLink extends Components.IfxLink {}


@ProxyCmp({
  inputs: ['maxVisibleItems', 'name', 'resetTrigger', 'type']
})
@Component({
  selector: 'ifx-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['maxVisibleItems', 'name', 'resetTrigger', 'type'],
  outputs: ['ifxListUpdate'],
  standalone: false
})
export class IfxList {
  protected el: HTMLIfxListElement;
  @Output() ifxListUpdate = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxList extends Components.IfxList {

  ifxListUpdate: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['label', 'type', 'value']
})
@Component({
  selector: 'ifx-list-entry',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', 'type', 'value'],
  outputs: ['ifxListEntryChange'],
  standalone: false
})
export class IfxListEntry {
  protected el: HTMLIfxListEntryElement;
  @Output() ifxListEntryChange = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxListEntry extends Components.IfxListEntry {

  ifxListEntryChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['alertIcon', 'cancelButtonLabel', 'caption', 'captionAriaLabel', 'closeButtonAriaLabel', 'closeOnOverlayClick', 'okButtonLabel', 'opened', 'showCloseButton', 'size', 'variant']
})
@Component({
  selector: 'ifx-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alertIcon', 'cancelButtonLabel', 'caption', 'captionAriaLabel', 'closeButtonAriaLabel', 'closeOnOverlayClick', 'okButtonLabel', 'opened', 'showCloseButton', 'size', 'variant'],
  outputs: ['ifxOpen', 'ifxClose'],
  standalone: false
})
export class IfxModal {
  protected el: HTMLIfxModalElement;
  @Output() ifxOpen = new EventEmitter<CustomEvent<any>>();
  @Output() ifxClose = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxModal extends Components.IfxModal {

  ifxOpen: EventEmitter<CustomEvent<any>>;

  ifxClose: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['ariaClearLabel', 'ariaCollapseAllLabel', 'ariaExpandAllLabel', 'ariaMultiSelectDescribedBy', 'ariaMultiSelectLabel', 'ariaMultiSelectLabelledBy', 'ariaSearchLabel', 'ariaSelectAllLabel', 'ariaToggleLabel', 'caption', 'collapseLabel', 'disabled', 'error', 'expandLabel', 'label', 'name', 'noResultsMessage', 'placeholder', 'readOnly', 'required', 'searchPlaceholder', 'selectAllLabel', 'showClearButton', 'showExpandCollapse', 'showNoResultsMessage', 'showSearch', 'showSelectAll'],
  methods: ['clearSelection']
})
@Component({
  selector: 'ifx-multiselect',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaClearLabel', 'ariaCollapseAllLabel', 'ariaExpandAllLabel', 'ariaMultiSelectDescribedBy', 'ariaMultiSelectLabel', 'ariaMultiSelectLabelledBy', 'ariaSearchLabel', 'ariaSelectAllLabel', 'ariaToggleLabel', 'caption', 'collapseLabel', 'disabled', 'error', 'expandLabel', 'label', 'name', 'noResultsMessage', 'placeholder', 'readOnly', 'required', 'searchPlaceholder', 'selectAllLabel', 'showClearButton', 'showExpandCollapse', 'showNoResultsMessage', 'showSearch', 'showSelectAll'],
  outputs: ['ifxSelect', 'ifxOpen'],
  standalone: false
})
export class IfxMultiselect {
  protected el: HTMLIfxMultiselectElement;
  @Output() ifxSelect = new EventEmitter<CustomEvent<any>>();
  @Output() ifxOpen = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxMultiselect extends Components.IfxMultiselect {

  ifxSelect: EventEmitter<CustomEvent<any>>;

  ifxOpen: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['disabled', 'indeterminate', 'selected', 'value']
})
@Component({
  selector: 'ifx-multiselect-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'indeterminate', 'selected', 'value'],
  standalone: false
})
export class IfxMultiselectOption {
  protected el: HTMLIfxMultiselectOptionElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxMultiselectOption extends Components.IfxMultiselectOption {}


@ProxyCmp({
  inputs: ['applicationName', 'fixed', 'logoHref', 'logoHrefTarget', 'showLogoAndAppname']
})
@Component({
  selector: 'ifx-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['applicationName', 'fixed', 'logoHref', 'logoHrefTarget', 'showLogoAndAppname'],
  outputs: ['ifxNavbarMobileMenuIsOpen'],
  standalone: false
})
export class IfxNavbar {
  protected el: HTMLIfxNavbarElement;
  @Output() ifxNavbarMobileMenuIsOpen = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxNavbar extends Components.IfxNavbar {

  ifxNavbarMobileMenuIsOpen: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['dotIndicator', 'hideOnMobile', 'href', 'icon', 'numberIndicator', 'showLabel', 'target'],
  methods: ['hideComponent', 'showComponent', 'toggleChildren', 'moveChildComponentsIntoSubLayerMenu', 'toggleFirstLayerItem', 'addMenuItemClass', 'moveChildComponentsBackIntoNavbar', 'returnToFirstLayer', 'setMenuItemPosition', 'setItemSideSpecifications']
})
@Component({
  selector: 'ifx-navbar-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['dotIndicator', 'hideOnMobile', 'href', 'icon', 'numberIndicator', 'showLabel', 'target'],
  outputs: ['ifxNavItem'],
  standalone: false
})
export class IfxNavbarItem {
  protected el: HTMLIfxNavbarItemElement;
  @Output() ifxNavItem = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxNavbarItem extends Components.IfxNavbarItem {

  ifxNavItem: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['alt', 'href', 'imageUrl', 'showLabel', 'target', 'userName'],
  methods: ['hideComponent', 'showComponent']
})
@Component({
  selector: 'ifx-navbar-profile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alt', 'href', 'imageUrl', 'showLabel', 'target', 'userName'],
  standalone: false
})
export class IfxNavbarProfile {
  protected el: HTMLIfxNavbarProfileElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxNavbarProfile extends Components.IfxNavbarProfile {}


@ProxyCmp({
  inputs: ['icon', 'linkHref', 'linkTarget', 'linkText', 'variant']
})
@Component({
  selector: 'ifx-notification',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'linkHref', 'linkTarget', 'linkText', 'variant'],
  standalone: false
})
export class IfxNotification {
  protected el: HTMLIfxNotificationElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxNotification extends Components.IfxNotification {}


@ProxyCmp({
})
@Component({
  selector: 'ifx-overview-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class IfxOverviewTable {
  protected el: HTMLIfxOverviewTableElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxOverviewTable extends Components.IfxOverviewTable {}


@ProxyCmp({
  inputs: ['currentPage', 'itemsPerPage', 'showItemsPerPage', 'total']
})
@Component({
  selector: 'ifx-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['currentPage', 'itemsPerPage', 'showItemsPerPage', 'total'],
  outputs: ['ifxPageChange', 'ifxItemsPerPageChange'],
  standalone: false
})
export class IfxPagination {
  protected el: HTMLIfxPaginationElement;
  @Output() ifxPageChange = new EventEmitter<CustomEvent<any>>();
  @Output() ifxItemsPerPageChange = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxPagination extends Components.IfxPagination {

  ifxPageChange: EventEmitter<CustomEvent<any>>;

  ifxItemsPerPageChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['ariaLabel', 'disabled', 'open', 'popoverTitle', 'position', 'text'],
  methods: ['show', 'hide', 'toggle']
})
@Component({
  selector: 'ifx-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'disabled', 'open', 'popoverTitle', 'position', 'text'],
  outputs: ['ifxOpen', 'ifxClose'],
  standalone: false
})
export class IfxPopover {
  protected el: HTMLIfxPopoverElement;
  @Output() ifxOpen = new EventEmitter<CustomEvent<{ trigger: HTMLElement | null }>>();
  @Output() ifxClose = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxPopover extends Components.IfxPopover {
  /**
   * Emitted when the popover is opened
   */
  ifxOpen: EventEmitter<CustomEvent<{ trigger: HTMLElement | null }>>;

  ifxClose: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['showLabel', 'size', 'value']
})
@Component({
  selector: 'ifx-progress-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['showLabel', 'size', 'value'],
  standalone: false
})
export class IfxProgressBar {
  protected el: HTMLIfxProgressBarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxProgressBar extends Components.IfxProgressBar {}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'error', 'name', 'readOnly', 'size', 'value'],
  methods: ['isChecked']
})
@Component({
  selector: 'ifx-radio-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'error', 'name', 'readOnly', 'size', 'value'],
  outputs: ['ifxChange', 'ifxError'],
  standalone: false
})
export class IfxRadioButton {
  protected el: HTMLIfxRadioButtonElement;
  @Output() ifxChange = new EventEmitter<CustomEvent<any>>();
  @Output() ifxError = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxRadioButton extends Components.IfxRadioButton {

  ifxChange: EventEmitter<CustomEvent<any>>;

  ifxError: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['alignment', 'captionText', 'groupLabelText', 'required', 'showCaption', 'showCaptionIcon', 'showGroupLabel', 'size'],
  methods: ['setGroupError']
})
@Component({
  selector: 'ifx-radio-button-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignment', 'captionText', 'groupLabelText', 'required', 'showCaption', 'showCaptionIcon', 'showGroupLabel', 'size'],
  standalone: false
})
export class IfxRadioButtonGroup {
  protected el: HTMLIfxRadioButtonGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxRadioButtonGroup extends Components.IfxRadioButtonGroup {}


@ProxyCmp({
  inputs: ['autocomplete', 'disabled', 'isOpen', 'maxlength', 'value'],
  methods: ['onNavbarMobile']
})
@Component({
  selector: 'ifx-search-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autocomplete', 'disabled', 'isOpen', 'maxlength', 'value'],
  outputs: ['ifxInput', 'ifxOpen'],
  standalone: false
})
export class IfxSearchBar {
  protected el: HTMLIfxSearchBarElement;
  @Output() ifxInput = new EventEmitter<CustomEvent<any>>();
  @Output() ifxOpen = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxSearchBar extends Components.IfxSearchBar {

  ifxInput: EventEmitter<CustomEvent<any>>;

  ifxOpen: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autocomplete', 'deleteIconAriaLabel', 'disabled', 'dropdownAriaLabel', 'enableHistory', 'historyDeleteAriaLabel', 'historyHeaderText', 'historyItemAriaLabel', 'historyKey', 'maxHistoryItems', 'maxSuggestions', 'maxlength', 'placeholder', 'showDeleteIcon', 'showSuggestions', 'size', 'suggestionAriaLabel', 'suggestions', 'value'],
  methods: ['clearSearchHistory']
})
@Component({
  selector: 'ifx-search-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autocomplete', 'deleteIconAriaLabel', 'disabled', 'dropdownAriaLabel', 'enableHistory', 'historyDeleteAriaLabel', 'historyHeaderText', 'historyItemAriaLabel', 'historyKey', 'maxHistoryItems', 'maxSuggestions', 'maxlength', 'placeholder', 'showDeleteIcon', 'showSuggestions', 'size', 'suggestionAriaLabel', 'suggestions', 'value'],
  outputs: ['ifxInput', 'ifxSuggestionRequested', 'ifxSuggestionSelected', 'ifxFocus', 'ifxBlur'],
  standalone: false
})
export class IfxSearchField {
  protected el: HTMLIfxSearchFieldElement;
  @Output() ifxInput = new EventEmitter<CustomEvent<string>>();
  @Output() ifxSuggestionRequested = new EventEmitter<CustomEvent<string>>();
  @Output() ifxSuggestionSelected = new EventEmitter<CustomEvent<IIfxSearchFieldSuggestionItem>>();
  @Output() ifxFocus = new EventEmitter<CustomEvent<void>>();
  @Output() ifxBlur = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { SuggestionItem as IIfxSearchFieldSuggestionItem } from '@infineon/infineon-design-system-stencil';

export declare interface IfxSearchField extends Components.IfxSearchField {

  ifxInput: EventEmitter<CustomEvent<string>>;

  ifxSuggestionRequested: EventEmitter<CustomEvent<string>>;

  ifxSuggestionSelected: EventEmitter<CustomEvent<IIfxSearchFieldSuggestionItem>>;

  ifxFocus: EventEmitter<CustomEvent<void>>;

  ifxBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['icon', 'segmentIndex', 'selected', 'value']
})
@Component({
  selector: 'ifx-segment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'segmentIndex', 'selected', { name: 'value', required: true }],
  outputs: ['segmentSelect'],
  standalone: false
})
export class IfxSegment {
  protected el: HTMLIfxSegmentElement;
  @Output() segmentSelect = new EventEmitter<CustomEvent<number>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxSegment extends Components.IfxSegment {

  segmentSelect: EventEmitter<CustomEvent<number>>;
}


@ProxyCmp({
  inputs: ['caption', 'error', 'label', 'required', 'size']
})
@Component({
  selector: 'ifx-segmented-control',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['caption', 'error', 'label', 'required', 'size'],
  outputs: ['ifxChange'],
  standalone: false
})
export class IfxSegmentedControl {
  protected el: HTMLIfxSegmentedControlElement;
  @Output() ifxChange = new EventEmitter<CustomEvent<{ previousValue: string; selectedValue: string; }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxSegmentedControl extends Components.IfxSegmentedControl {

  ifxChange: EventEmitter<CustomEvent<{ previousValue: string; selectedValue: string; }>>;
}


@ProxyCmp({
  inputs: ['addItemFilter', 'addItemText', 'addItems', 'appendValue', 'callbackOnCreateTemplates', 'callbackOnInit', 'caption', 'choices', 'classNames', 'customAddItemText', 'delimiter', 'disabled', 'duplicateItemsAllowed', 'editItems', 'error', 'fuseOptions', 'itemSelectText', 'items', 'label', 'loadingText', 'maxItemCount', 'maxItemText', 'name', 'noChoicesText', 'noResultsText', 'options', 'paste', 'placeholder', 'placeholderValue', 'position', 'prependValue', 'removeItemButton', 'removeItems', 'renderChoiceLimit', 'renderSelectedChoices', 'required', 'resetScrollPosition', 'searchChoices', 'searchFields', 'searchFloor', 'searchPlaceholderValue', 'searchResultLimit', 'shouldSort', 'shouldSortItems', 'showClearButton', 'showSearch', 'size', 'sorter', 'uniqueItemText', 'value', 'valueComparer'],
  methods: ['clearSelection', 'handleChange', 'highlightItem', 'unhighlightItem', 'highlightAll', 'unhighlightAll', 'removeActiveItemsByValue', 'removeActiveItems', 'removeHighlightedItems', 'showDropdown', 'hideDropdown', 'getValue', 'setValue', 'setChoiceByValue', 'setChoices', 'clearChoices', 'clearStore', 'clearInput', 'ajax', 'handleDeleteIcon']
})
@Component({
  selector: 'ifx-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['addItemFilter', 'addItemText', 'addItems', 'appendValue', 'callbackOnCreateTemplates', 'callbackOnInit', 'caption', 'choices', 'classNames', 'customAddItemText', 'delimiter', 'disabled', 'duplicateItemsAllowed', 'editItems', 'error', 'fuseOptions', 'itemSelectText', 'items', 'label', 'loadingText', 'maxItemCount', 'maxItemText', 'name', 'noChoicesText', 'noResultsText', 'options', 'paste', 'placeholder', 'placeholderValue', 'position', 'prependValue', 'removeItemButton', 'removeItems', 'renderChoiceLimit', 'renderSelectedChoices', 'required', 'resetScrollPosition', 'searchChoices', 'searchFields', 'searchFloor', 'searchPlaceholderValue', 'searchResultLimit', 'shouldSort', 'shouldSortItems', 'showClearButton', 'showSearch', 'size', 'sorter', 'uniqueItemText', 'value', 'valueComparer'],
  outputs: ['ifxSelect', 'ifxInput'],
  standalone: false
})
export class IfxSelect {
  protected el: HTMLIfxSelectElement;
  @Output() ifxSelect = new EventEmitter<CustomEvent<CustomEvent>>();
  @Output() ifxInput = new EventEmitter<CustomEvent<CustomEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxSelect extends Components.IfxSelect {

  ifxSelect: EventEmitter<CustomEvent<CustomEvent>>;

  ifxInput: EventEmitter<CustomEvent<CustomEvent>>;
}


@ProxyCmp({
  inputs: ['filterLabel', 'filterName', 'options', 'placeholder', 'type']
})
@Component({
  selector: 'ifx-set-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['filterLabel', 'filterName', 'options', 'placeholder', 'type'],
  outputs: ['ifxFilterSelect'],
  standalone: false
})
export class IfxSetFilter {
  protected el: HTMLIfxSetFilterElement;
  @Output() ifxFilterSelect = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxSetFilter extends Components.IfxSetFilter {

  ifxFilterSelect: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['applicationName', 'collapsed', 'collapsible', 'copyrightText', 'hideMenuLabel', 'imprint', 'initialCollapse', 'privacyPolicy', 'showFooter', 'showHeader', 'target', 'termsOfUse'],
  methods: ['toggleCollapse', 'collapse', 'expand']
})
@Component({
  selector: 'ifx-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['applicationName', 'collapsed', 'collapsible', 'copyrightText', 'hideMenuLabel', 'imprint', 'initialCollapse', 'privacyPolicy', 'showFooter', 'showHeader', 'target', 'termsOfUse'],
  outputs: ['ifxSidebarCollapseChange'],
  standalone: false
})
export class IfxSidebar {
  protected el: HTMLIfxSidebarElement;
  @Output() ifxSidebarCollapseChange = new EventEmitter<CustomEvent<{ collapsed: boolean }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxSidebar extends Components.IfxSidebar {

  ifxSidebarCollapseChange: EventEmitter<CustomEvent<{ collapsed: boolean }>>;
}


@ProxyCmp({
  inputs: ['active', 'handleItemClick', 'href', 'icon', 'isActionItem', 'numberIndicator', 'target'],
  methods: ['setActiveClasses', 'expandMenu', 'isItemExpandable']
})
@Component({
  selector: 'ifx-sidebar-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'handleItemClick', 'href', 'icon', 'isActionItem', 'numberIndicator', 'target'],
  outputs: ['ifxSidebarMenu', 'ifxSidebarNavigationItem', 'ifxSidebarActionItem'],
  standalone: false
})
export class IfxSidebarItem {
  protected el: HTMLIfxSidebarItemElement;
  @Output() ifxSidebarMenu = new EventEmitter<CustomEvent<any>>();
  @Output() ifxSidebarNavigationItem = new EventEmitter<CustomEvent<any>>();
  @Output() ifxSidebarActionItem = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxSidebarItem extends Components.IfxSidebarItem {

  ifxSidebarMenu: EventEmitter<CustomEvent<any>>;

  ifxSidebarNavigationItem: EventEmitter<CustomEvent<any>>;

  ifxSidebarActionItem: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['showInCollapsed']
})
@Component({
  selector: 'ifx-sidebar-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['showInCollapsed'],
  standalone: false
})
export class IfxSidebarTitle {
  protected el: HTMLIfxSidebarTitleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxSidebarTitle extends Components.IfxSidebarTitle {}


@ProxyCmp({
  inputs: ['ariaLabel', 'disabled', 'leftIcon', 'leftText', 'max', 'maxValueHandle', 'min', 'minValueHandle', 'readOnly', 'rightIcon', 'rightText', 'showPercentage', 'step', 'type', 'value']
})
@Component({
  selector: 'ifx-slider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'disabled', 'leftIcon', 'leftText', 'max', 'maxValueHandle', 'min', 'minValueHandle', 'readOnly', 'rightIcon', 'rightText', 'showPercentage', 'step', 'type', 'value'],
  outputs: ['ifxChange'],
  standalone: false
})
export class IfxSlider {
  protected el: HTMLIfxSliderElement;
  @Output() ifxChange = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxSlider extends Components.IfxSlider {

  ifxChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['ariaLabel', 'inverted', 'size', 'variant']
})
@Component({
  selector: 'ifx-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'inverted', 'size', 'variant'],
  standalone: false
})
export class IfxSpinner {
  protected el: HTMLIfxSpinnerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxSpinner extends Components.IfxSpinner {}


@ProxyCmp({
  inputs: ['border', 'color', 'label']
})
@Component({
  selector: 'ifx-status',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['border', 'color', 'label'],
  standalone: false
})
export class IfxStatus {
  protected el: HTMLIfxStatusElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxStatus extends Components.IfxStatus {}


@ProxyCmp({
  inputs: ['complete', 'disabled', 'error', 'lastStep', 'stepId', 'stepperState']
})
@Component({
  selector: 'ifx-step',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['complete', 'disabled', 'error', 'lastStep', 'stepId', 'stepperState'],
  standalone: false
})
export class IfxStep {
  protected el: HTMLIfxStepElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxStep extends Components.IfxStep {}


@ProxyCmp({
  inputs: ['activeStep', 'ariaCurrent', 'ariaLabel', 'indicatorPosition', 'showStepNumber', 'variant']
})
@Component({
  selector: 'ifx-stepper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activeStep', 'ariaCurrent', 'ariaLabel', 'indicatorPosition', 'showStepNumber', 'variant'],
  outputs: ['ifxChange'],
  standalone: false
})
export class IfxStepper {
  protected el: HTMLIfxStepperElement;
  @Output() ifxChange = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxStepper extends Components.IfxStepper {

  ifxChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'error', 'name', 'readOnly', 'value'],
  methods: ['isChecked', 'setChecked', 'toggle']
})
@Component({
  selector: 'ifx-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'error', 'name', 'readOnly', 'value'],
  outputs: ['ifxChange'],
  standalone: false
})
export class IfxSwitch {
  protected el: HTMLIfxSwitchElement;
  @Output() ifxChange = new EventEmitter<CustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxSwitch extends Components.IfxSwitch {
  /**
   * Emitted when checked state changes.
   */
  ifxChange: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['disabled', 'header', 'icon', 'iconPosition']
})
@Component({
  selector: 'ifx-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'header', 'icon', 'iconPosition'],
  outputs: ['tabHeaderChange'],
  standalone: false
})
export class IfxTab {
  protected el: HTMLIfxTabElement;
  @Output() tabHeaderChange = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxTab extends Components.IfxTab {

  tabHeaderChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['buttonRendererOptions', 'checkboxRendererOptions', 'cols', 'columnMinWidth', 'columnWidth', 'enableSelection', 'filterOrientation', 'fitColumns', 'headline', 'headlineNumber', 'iconButtonRendererOptions', 'pagination', 'paginationItemsPerPage', 'rowHeight', 'rows', 'serverPageChangeHandler', 'serverSidePagination', 'showLoading', 'tableHeight', 'variant'],
  methods: ['onBtShowLoading']
})
@Component({
  selector: 'ifx-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['buttonRendererOptions', 'checkboxRendererOptions', 'cols', 'columnMinWidth', 'columnWidth', 'enableSelection', 'filterOrientation', 'fitColumns', 'headline', 'headlineNumber', 'iconButtonRendererOptions', 'pagination', 'paginationItemsPerPage', 'rowHeight', 'rows', 'serverPageChangeHandler', 'serverSidePagination', 'showLoading', 'tableHeight', 'variant'],
  outputs: ['ifxSortChange'],
  standalone: false
})
export class IfxTable {
  protected el: HTMLIfxTableElement;
  @Output() ifxSortChange = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxTable extends Components.IfxTable {
  /**
   * Emitted when sort order changes.
   */
  ifxSortChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['activeTabIndex', 'fullWidth', 'orientation']
})
@Component({
  selector: 'ifx-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activeTabIndex', 'fullWidth', 'orientation'],
  outputs: ['ifxChange'],
  standalone: false
})
export class IfxTabs {
  protected el: HTMLIfxTabsElement;
  @Output() ifxChange = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxTabs extends Components.IfxTabs {

  ifxChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['name', 'thumbnail'],
  methods: ['toggleTemplate']
})
@Component({
  selector: 'ifx-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['name', 'thumbnail'],
  outputs: ['toggleTemplates', 'fieldError'],
  standalone: false
})
export class IfxTemplate {
  protected el: HTMLIfxTemplateElement;
  @Output() toggleTemplates = new EventEmitter<CustomEvent<any>>();
  @Output() fieldError = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxTemplate extends Components.IfxTemplate {

  toggleTemplates: EventEmitter<CustomEvent<any>>;

  fieldError: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
})
@Component({
  selector: 'ifx-templates-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class IfxTemplatesUi {
  protected el: HTMLIfxTemplatesUiElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxTemplatesUi extends Components.IfxTemplatesUi {}


@ProxyCmp({
  inputs: ['autocomplete', 'caption', 'disabled', 'error', 'icon', 'internalId', 'label', 'maxlength', 'placeholder', 'readOnly', 'required', 'showDeleteIcon', 'size', 'success', 'type', 'value'],
  methods: ['reset']
})
@Component({
  selector: 'ifx-text-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autocomplete', 'caption', 'disabled', 'error', 'icon', 'internalId', 'label', 'maxlength', 'placeholder', 'readOnly', 'required', 'showDeleteIcon', 'size', 'success', 'type', 'value'],
  outputs: ['ifxInput'],
  standalone: false
})
export class IfxTextField {
  protected el: HTMLIfxTextFieldElement;
  @Output() ifxInput = new EventEmitter<CustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxTextField extends Components.IfxTextField {

  ifxInput: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['caption', 'cols', 'disabled', 'error', 'fullWidth', 'label', 'maxlength', 'name', 'placeholder', 'readOnly', 'required', 'resize', 'rows', 'value', 'wrap'],
  methods: ['reset']
})
@Component({
  selector: 'ifx-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['caption', 'cols', 'disabled', 'error', 'fullWidth', 'label', 'maxlength', 'name', 'placeholder', 'readOnly', 'required', 'resize', 'rows', 'value', 'wrap'],
  outputs: ['ifxInput'],
  standalone: false
})
export class IfxTextarea {
  protected el: HTMLIfxTextareaElement;
  @Output() ifxInput = new EventEmitter<CustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxTextarea extends Components.IfxTextarea {

  ifxInput: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['appendToBody', 'ariaLabel', 'header', 'icon', 'position', 'text', 'variant']
})
@Component({
  selector: 'ifx-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appendToBody', 'ariaLabel', 'header', 'icon', 'position', 'text', 'variant'],
  standalone: false
})
export class IfxTooltip {
  protected el: HTMLIfxTooltipElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxTooltip extends Components.IfxTooltip {}


@ProxyCmp({
  inputs: ['ariaLabel', 'disableAllItems', 'expandAllItems', 'label']
})
@Component({
  selector: 'ifx-tree-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'disableAllItems', 'expandAllItems', 'label'],
  outputs: ['ifxTreeViewExpandAllChange', 'ifxTreeViewDisableAllChange'],
  standalone: false
})
export class IfxTreeView {
  protected el: HTMLIfxTreeViewElement;
  @Output() ifxTreeViewExpandAllChange = new EventEmitter<CustomEvent<boolean>>();
  @Output() ifxTreeViewDisableAllChange = new EventEmitter<CustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxTreeView extends Components.IfxTreeView {

  ifxTreeViewExpandAllChange: EventEmitter<CustomEvent<boolean>>;

  ifxTreeViewDisableAllChange: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['ariaLabel', 'disableItem', 'expanded', 'initiallyExpanded', 'initiallySelected', 'value']
})
@Component({
  selector: 'ifx-tree-view-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'disableItem', 'expanded', 'initiallyExpanded', 'initiallySelected', 'value'],
  outputs: ['ifxTreeViewItemExpandChange', 'ifxTreeViewItemCheckChange', 'ifxTreeViewItemDisableChange'],
  standalone: false
})
export class IfxTreeViewItem {
  protected el: HTMLIfxTreeViewItemElement;
  @Output() ifxTreeViewItemExpandChange = new EventEmitter<CustomEvent<IIfxTreeViewItemTreeViewExpandChangeEvent>>();
  @Output() ifxTreeViewItemCheckChange = new EventEmitter<CustomEvent<IIfxTreeViewItemTreeViewCheckChangeEvent>>();
  @Output() ifxTreeViewItemDisableChange = new EventEmitter<CustomEvent<IIfxTreeViewItemTreeViewDisableChangeEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { TreeViewExpandChangeEvent as IIfxTreeViewItemTreeViewExpandChangeEvent } from '@infineon/infineon-design-system-stencil';
import type { TreeViewCheckChangeEvent as IIfxTreeViewItemTreeViewCheckChangeEvent } from '@infineon/infineon-design-system-stencil';
import type { TreeViewDisableChangeEvent as IIfxTreeViewItemTreeViewDisableChangeEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxTreeViewItem extends Components.IfxTreeViewItem {

  ifxTreeViewItemExpandChange: EventEmitter<CustomEvent<IIfxTreeViewItemTreeViewExpandChangeEvent>>;

  ifxTreeViewItemCheckChange: EventEmitter<CustomEvent<IIfxTreeViewItemTreeViewCheckChangeEvent>>;

  ifxTreeViewItemDisableChange: EventEmitter<CustomEvent<IIfxTreeViewItemTreeViewDisableChangeEvent>>;
}


