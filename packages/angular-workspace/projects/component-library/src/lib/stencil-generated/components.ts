/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

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
})
export class IfxAccordion {
  protected el: HTMLElement;
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
})
export class IfxAccordionItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxOpen', 'ifxClose']);
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
})
export class IfxActionList {
  protected el: HTMLElement;
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
})
export class IfxActionListItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxActionListItemClick']);
  }
}


export declare interface IfxActionListItem extends Components.IfxActionListItem {
  /**
   * Event emitted when the main item area is clicked
   */
  ifxActionListItemClick: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['AriaLive', 'closable', 'icon', 'variant']
})
@Component({
  selector: 'ifx-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['AriaLive', 'closable', 'icon', 'variant'],
})
export class IfxAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxClose']);
  }
}


export declare interface IfxAlert extends Components.IfxAlert {

  ifxClose: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
})
@Component({
  selector: 'ifx-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IfxBadge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxBadge extends Components.IfxBadge {}


@ProxyCmp({
  inputs: ['cols', 'rowHeight', 'rows', 'tableHeight', 'variant']
})
@Component({
  selector: 'ifx-basic-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['cols', 'rowHeight', 'rows', 'tableHeight', 'variant'],
})
export class IfxBasicTable {
  protected el: HTMLElement;
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
})
export class IfxBreadcrumb {
  protected el: HTMLElement;
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
})
export class IfxBreadcrumbItem {
  protected el: HTMLElement;
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
})
export class IfxBreadcrumbItemLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['breadcrumbMenuIconWrapper']);
  }
}


export declare interface IfxBreadcrumbItemLabel extends Components.IfxBreadcrumbItemLabel {

  breadcrumbMenuIconWrapper: EventEmitter<CustomEvent<CustomEvent>>;
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
})
export class IfxButton {
  protected el: HTMLElement;
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
})
export class IfxCard {
  protected el: HTMLElement;
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
})
export class IfxCardHeadline {
  protected el: HTMLElement;
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
})
export class IfxCardImage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['imgPosition']);
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
})
export class IfxCardLinks {
  protected el: HTMLElement;
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
})
export class IfxCardOverline {
  protected el: HTMLElement;
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
})
export class IfxCardText {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxCardText extends Components.IfxCardText {}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'error', 'indeterminate', 'size', 'value'],
  methods: ['isChecked', 'toggleCheckedState']
})
@Component({
  selector: 'ifx-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'error', 'indeterminate', 'size', 'value'],
})
export class IfxCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxChange', 'ifxError']);
  }
}


export declare interface IfxCheckbox extends Components.IfxCheckbox {

  ifxChange: EventEmitter<CustomEvent<any>>;

  ifxError: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['alignment', 'captionText', 'groupLabelText', 'showCaption', 'showCaptionIcon', 'showGroupLabel', 'size'],
  methods: ['setGroupError']
})
@Component({
  selector: 'ifx-checkbox-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignment', 'captionText', 'groupLabelText', 'showCaption', 'showCaptionIcon', 'showGroupLabel', 'size'],
})
export class IfxCheckboxGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxCheckboxGroup extends Components.IfxCheckboxGroup {}


@ProxyCmp({
  inputs: ['ariaLabel', 'placeholder', 'readOnly', 'size', 'value', 'variant']
})
@Component({
  selector: 'ifx-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'placeholder', 'readOnly', 'size', 'value', 'variant'],
})
export class IfxChip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxChange']);
  }
}


import type { ChipItemSelectEvent as IIfxChipChipItemSelectEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxChip extends Components.IfxChip {

  ifxChange: EventEmitter<CustomEvent<{ previousSelection: Array<IIfxChipChipItemSelectEvent>, currentSelection: Array<IIfxChipChipItemSelectEvent>, name: string }>>;
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
})
export class IfxChipItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxChipItemSelect']);
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
})
export class IfxContentSwitcher {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxChange']);
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
})
export class IfxContentSwitcherItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxContentSwitcherItem extends Components.IfxContentSwitcherItem {}


@ProxyCmp({
  inputs: ['ariaLabel', 'autocomplete', 'caption', 'disabled', 'error', 'label', 'max', 'min', 'required', 'size', 'success', 'type', 'value']
})
@Component({
  selector: 'ifx-date-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'autocomplete', 'caption', 'disabled', 'error', 'label', 'max', 'min', 'required', 'size', 'success', 'type', 'value'],
})
export class IfxDatePicker {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxDate']);
  }
}


export declare interface IfxDatePicker extends Components.IfxDatePicker {

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
})
export class IfxDownload {
  protected el: HTMLElement;
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
})
export class IfxDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxOpen', 'ifxClose', 'ifxDropdown']);
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
})
export class IfxDropdownHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxDropdownHeader extends Components.IfxDropdownHeader {}


@ProxyCmp({
  inputs: ['hide', 'href', 'icon', 'target']
})
@Component({
  selector: 'ifx-dropdown-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hide', 'href', 'icon', 'target'],
})
export class IfxDropdownItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxDropdownItem']);
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
})
export class IfxDropdownMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['menuSize', 'ifxDropdownMenuItem']);
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
})
export class IfxDropdownSeparator {
  protected el: HTMLElement;
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
})
export class IfxDropdownTrigger {
  protected el: HTMLElement;
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
})
export class IfxDropdownTriggerButton {
  protected el: HTMLElement;
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
})
export class IfxFaq {
  protected el: HTMLElement;
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
})
export class IfxFileUpload {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxFileUploadAdd', 'ifxFileUploadRemove', 'ifxFileUploadChange', 'ifxFileUploadError', 'ifxFileUploadInvalid', 'ifxFileUploadStart', 'ifxFileUploadComplete', 'ifxFileUploadAllComplete', 'ifxFileUploadAbort', 'ifxFileUploadDrop', 'ifxFileUploadClick', 'ifxFileUploadMaxFilesExceeded', 'ifxFileUploadValidation', 'ifxFileUploadRetry']);
  }
}


export declare interface IfxFileUpload extends Components.IfxFileUpload {

  ifxFileUploadAdd: EventEmitter<CustomEvent<{ addedFiles: File[]; files: File[] }>>;

  ifxFileUploadRemove: EventEmitter<CustomEvent<{ removedFile: File; files: File[] }>>;

  ifxFileUploadChange: EventEmitter<CustomEvent<{ files: File[] }>>;

  ifxFileUploadError: EventEmitter<CustomEvent<{ errorType: string; file: File; message: string; reason?: string; }>>;

  ifxFileUploadInvalid: EventEmitter<CustomEvent<{ file: File; reason: string }>>;

  ifxFileUploadStart: EventEmitter<CustomEvent<{ file: File }>>;

  ifxFileUploadComplete: EventEmitter<CustomEvent<{ file: File }>>;

  ifxFileUploadAllComplete: EventEmitter<CustomEvent<{ files: File[] }>>;

  ifxFileUploadAbort: EventEmitter<CustomEvent<{ file: File }>>;

  ifxFileUploadDrop: EventEmitter<CustomEvent<{ droppedFiles: File[]; acceptedFiles: File[]; rejectedFiles: File[] }>>;

  ifxFileUploadClick: EventEmitter<CustomEvent<void>>;

  ifxFileUploadMaxFilesExceeded: EventEmitter<CustomEvent<{ maxFiles: number; attempted: number }>>;

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
})
export class IfxFilterAccordion {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxFilterAccordionChange']);
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
})
export class IfxFilterBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxTopbarFilterChange']);
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
})
export class IfxFilterSearch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxFilterSearchChange']);
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
})
export class IfxFilterTypeGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxSidebarFilterChange']);
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
})
export class IfxFooter {
  protected el: HTMLElement;
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
})
export class IfxFooterColumn {
  protected el: HTMLElement;
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
})
export class IfxIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['consoleError']);
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
})
export class IfxIconButton {
  protected el: HTMLElement;
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
})
export class IfxIconsPreview {
  protected el: HTMLElement;
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
})
export class IfxIndicator {
  protected el: HTMLElement;
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
})
export class IfxLink {
  protected el: HTMLElement;
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
})
export class IfxList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxListUpdate']);
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
})
export class IfxListEntry {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxListEntryChange']);
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
})
export class IfxModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxOpen', 'ifxClose']);
  }
}


export declare interface IfxModal extends Components.IfxModal {

  ifxOpen: EventEmitter<CustomEvent<any>>;

  ifxClose: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['ariaClearLabel', 'ariaCollapseAllLabel', 'ariaExpandAllLabel', 'ariaMultiSelectDescribedBy', 'ariaMultiSelectLabel', 'ariaMultiSelectLabelledBy', 'ariaSearchLabel', 'ariaSelectAllLabel', 'ariaToggleLabel', 'collapseLabel', 'disabled', 'error', 'errorMessage', 'expandLabel', 'label', 'name', 'noResultsMessage', 'placeholder', 'searchPlaceholder', 'selectAllLabel', 'showClearButton', 'showExpandCollapse', 'showNoResultsMessage', 'showSearch', 'showSelectAll'],
  methods: ['clearSelection']
})
@Component({
  selector: 'ifx-multiselect',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaClearLabel', 'ariaCollapseAllLabel', 'ariaExpandAllLabel', 'ariaMultiSelectDescribedBy', 'ariaMultiSelectLabel', 'ariaMultiSelectLabelledBy', 'ariaSearchLabel', 'ariaSelectAllLabel', 'ariaToggleLabel', 'collapseLabel', 'disabled', 'error', 'errorMessage', 'expandLabel', 'label', 'name', 'noResultsMessage', 'placeholder', 'searchPlaceholder', 'selectAllLabel', 'showClearButton', 'showExpandCollapse', 'showNoResultsMessage', 'showSearch', 'showSelectAll'],
})
export class IfxMultiselect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxSelect', 'ifxOpen']);
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
})
export class IfxMultiselectOption {
  protected el: HTMLElement;
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
})
export class IfxNavbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxNavbarMobileMenuIsOpen']);
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
})
export class IfxNavbarItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxNavItem']);
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
})
export class IfxNavbarProfile {
  protected el: HTMLElement;
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
})
export class IfxNotification {
  protected el: HTMLElement;
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
})
export class IfxOverviewTable {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxOverviewTable extends Components.IfxOverviewTable {}


@ProxyCmp({
  inputs: ['currentPage', 'itemsPerPage', 'total']
})
@Component({
  selector: 'ifx-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['currentPage', 'itemsPerPage', 'total'],
})
export class IfxPagination {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxPageChange', 'ifxItemsPerPageChange']);
  }
}


export declare interface IfxPagination extends Components.IfxPagination {

  ifxPageChange: EventEmitter<CustomEvent<any>>;

  ifxItemsPerPageChange: EventEmitter<CustomEvent<any>>;
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
})
export class IfxProgressBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxProgressBar extends Components.IfxProgressBar {}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'error', 'name', 'size', 'value'],
  methods: ['isChecked']
})
@Component({
  selector: 'ifx-radio-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'error', 'name', 'size', 'value'],
})
export class IfxRadioButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxChange', 'ifxError']);
  }
}


export declare interface IfxRadioButton extends Components.IfxRadioButton {

  ifxChange: EventEmitter<CustomEvent<any>>;

  ifxError: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['alignment', 'captionText', 'groupLabelText', 'showCaption', 'showCaptionIcon', 'showGroupLabel', 'size'],
  methods: ['setGroupError']
})
@Component({
  selector: 'ifx-radio-button-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignment', 'captionText', 'groupLabelText', 'showCaption', 'showCaptionIcon', 'showGroupLabel', 'size'],
})
export class IfxRadioButtonGroup {
  protected el: HTMLElement;
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
})
export class IfxSearchBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxInput', 'ifxOpen']);
  }
}


export declare interface IfxSearchBar extends Components.IfxSearchBar {

  ifxInput: EventEmitter<CustomEvent<any>>;

  ifxOpen: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autocomplete', 'deleteIconAriaLabel', 'disabled', 'dropdownAriaLabel', 'enableHistory', 'historyDeleteAriaLabel', 'historyHeaderText', 'historyItemAriaLabel', 'historyKey', 'maxHistoryItems', 'maxSuggestions', 'maxlength', 'placeholder', 'showDeleteIcon', 'showSuggestions', 'size', 'suggestionAriaLabel', 'suggestions', 'value']
})
@Component({
  selector: 'ifx-search-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autocomplete', 'deleteIconAriaLabel', 'disabled', 'dropdownAriaLabel', 'enableHistory', 'historyDeleteAriaLabel', 'historyHeaderText', 'historyItemAriaLabel', 'historyKey', 'maxHistoryItems', 'maxSuggestions', 'maxlength', 'placeholder', 'showDeleteIcon', 'showSuggestions', 'size', 'suggestionAriaLabel', 'suggestions', 'value'],
})
export class IfxSearchField {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxInput', 'ifxSuggestionRequested', 'ifxSuggestionSelected', 'ifxFocus', 'ifxBlur']);
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
  inputs: ['icon', 'segmentIndex', 'selected', 'value'],
})
export class IfxSegment {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['segmentSelect']);
  }
}


export declare interface IfxSegment extends Components.IfxSegment {

  segmentSelect: EventEmitter<CustomEvent<number>>;
}


@ProxyCmp({
  inputs: ['caption', 'label', 'size']
})
@Component({
  selector: 'ifx-segmented-control',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['caption', 'label', 'size'],
})
export class IfxSegmentedControl {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxChange']);
  }
}


export declare interface IfxSegmentedControl extends Components.IfxSegmentedControl {

  ifxChange: EventEmitter<CustomEvent<{ previousValue: string, selectedValue: string }>>;
}


@ProxyCmp({
  inputs: ['addItemFilter', 'addItemText', 'addItems', 'appendValue', 'callbackOnCreateTemplates', 'callbackOnInit', 'choices', 'classNames', 'customAddItemText', 'delimiter', 'disabled', 'duplicateItemsAllowed', 'editItems', 'error', 'errorMessage', 'fuseOptions', 'itemSelectText', 'items', 'label', 'loadingText', 'maxItemCount', 'maxItemText', 'name', 'noChoicesText', 'noResultsText', 'options', 'paste', 'placeholder', 'placeholderValue', 'position', 'prependValue', 'removeItemButton', 'removeItems', 'renderChoiceLimit', 'renderSelectedChoices', 'resetScrollPosition', 'searchChoices', 'searchFields', 'searchFloor', 'searchPlaceholderValue', 'searchResultLimit', 'shouldSort', 'shouldSortItems', 'showClearButton', 'showSearch', 'size', 'sorter', 'uniqueItemText', 'value', 'valueComparer'],
  methods: ['clearSelection', 'handleChange', 'highlightItem', 'unhighlightItem', 'highlightAll', 'unhighlightAll', 'removeActiveItemsByValue', 'removeActiveItems', 'removeHighlightedItems', 'showDropdown', 'hideDropdown', 'getValue', 'setValue', 'setChoiceByValue', 'setChoices', 'clearChoices', 'clearStore', 'clearInput', 'ajax', 'handleDeleteIcon']
})
@Component({
  selector: 'ifx-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['addItemFilter', 'addItemText', 'addItems', 'appendValue', 'callbackOnCreateTemplates', 'callbackOnInit', 'choices', 'classNames', 'customAddItemText', 'delimiter', 'disabled', 'duplicateItemsAllowed', 'editItems', 'error', 'errorMessage', 'fuseOptions', 'itemSelectText', 'items', 'label', 'loadingText', 'maxItemCount', 'maxItemText', 'name', 'noChoicesText', 'noResultsText', 'options', 'paste', 'placeholder', 'placeholderValue', 'position', 'prependValue', 'removeItemButton', 'removeItems', 'renderChoiceLimit', 'renderSelectedChoices', 'resetScrollPosition', 'searchChoices', 'searchFields', 'searchFloor', 'searchPlaceholderValue', 'searchResultLimit', 'shouldSort', 'shouldSortItems', 'showClearButton', 'showSearch', 'size', 'sorter', 'uniqueItemText', 'value', 'valueComparer'],
})
export class IfxSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxSelect', 'ifxInput']);
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
})
export class IfxSetFilter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxFilterSelect']);
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
})
export class IfxSidebar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxSidebarCollapseChange']);
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
})
export class IfxSidebarItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxSidebarMenu', 'ifxSidebarNavigationItem', 'ifxSidebarActionItem']);
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
})
export class IfxSidebarTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxSidebarTitle extends Components.IfxSidebarTitle {}


@ProxyCmp({
  inputs: ['disabled', 'leftIcon', 'leftText', 'max', 'maxValueHandle', 'min', 'minValueHandle', 'rightIcon', 'rightText', 'showPercentage', 'step', 'type', 'value']
})
@Component({
  selector: 'ifx-slider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'leftIcon', 'leftText', 'max', 'maxValueHandle', 'min', 'minValueHandle', 'rightIcon', 'rightText', 'showPercentage', 'step', 'type', 'value'],
})
export class IfxSlider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxChange']);
  }
}


export declare interface IfxSlider extends Components.IfxSlider {

  ifxChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['inverted', 'size', 'variant']
})
@Component({
  selector: 'ifx-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['inverted', 'size', 'variant'],
})
export class IfxSpinner {
  protected el: HTMLElement;
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
})
export class IfxStatus {
  protected el: HTMLElement;
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
})
export class IfxStep {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxStep extends Components.IfxStep {}


@ProxyCmp({
  inputs: ['activeStep', 'indicatorPosition', 'showStepNumber', 'variant']
})
@Component({
  selector: 'ifx-stepper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activeStep', 'indicatorPosition', 'showStepNumber', 'variant'],
})
export class IfxStepper {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxChange']);
  }
}


export declare interface IfxStepper extends Components.IfxStepper {

  ifxChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'name', 'value'],
  methods: ['isChecked']
})
@Component({
  selector: 'ifx-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'name', 'value'],
})
export class IfxSwitch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxChange']);
  }
}


export declare interface IfxSwitch extends Components.IfxSwitch {

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
})
export class IfxTab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['tabHeaderChange']);
  }
}


export declare interface IfxTab extends Components.IfxTab {

  tabHeaderChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['buttonRendererOptions', 'cols', 'filterOrientation', 'headline', 'pagination', 'paginationItemsPerPage', 'rowHeight', 'rows', 'serverPageChangeHandler', 'serverSidePagination', 'showLoading', 'tableHeight', 'variant'],
  methods: ['onBtShowLoading']
})
@Component({
  selector: 'ifx-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['buttonRendererOptions', 'cols', 'filterOrientation', 'headline', 'pagination', 'paginationItemsPerPage', 'rowHeight', 'rows', 'serverPageChangeHandler', 'serverSidePagination', 'showLoading', 'tableHeight', 'variant'],
})
export class IfxTable {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxTable extends Components.IfxTable {}


@ProxyCmp({
  inputs: ['activeTabIndex', 'fullWidth', 'orientation']
})
@Component({
  selector: 'ifx-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activeTabIndex', 'fullWidth', 'orientation'],
})
export class IfxTabs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxChange']);
  }
}


export declare interface IfxTabs extends Components.IfxTabs {

  ifxChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['icon']
})
@Component({
  selector: 'ifx-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon'],
})
export class IfxTag {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxTag extends Components.IfxTag {}


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
})
export class IfxTemplate {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggleTemplates', 'fieldError']);
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
})
export class IfxTemplatesUi {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxTemplatesUi extends Components.IfxTemplatesUi {}


@ProxyCmp({
  inputs: ['autocomplete', 'caption', 'disabled', 'error', 'icon', 'internalId', 'label', 'maxlength', 'optional', 'placeholder', 'required', 'showDeleteIcon', 'size', 'success', 'type', 'value'],
  methods: ['reset']
})
@Component({
  selector: 'ifx-text-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autocomplete', 'caption', 'disabled', 'error', 'icon', 'internalId', 'label', 'maxlength', 'optional', 'placeholder', 'required', 'showDeleteIcon', 'size', 'success', 'type', 'value'],
})
export class IfxTextField {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxInput']);
  }
}


export declare interface IfxTextField extends Components.IfxTextField {

  ifxInput: EventEmitter<CustomEvent<String>>;
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
})
export class IfxTextarea {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxInput']);
  }
}


export declare interface IfxTextarea extends Components.IfxTextarea {

  ifxInput: EventEmitter<CustomEvent<String>>;
}


@ProxyCmp({
  inputs: ['header', 'icon', 'position', 'text', 'variant']
})
@Component({
  selector: 'ifx-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['header', 'icon', 'position', 'text', 'variant'],
})
export class IfxTooltip {
  protected el: HTMLElement;
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
})
export class IfxTreeView {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxTreeViewExpandAllChange', 'ifxTreeViewDisableAllChange']);
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
})
export class IfxTreeViewItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxTreeViewItemExpandChange', 'ifxTreeViewItemCheckChange', 'ifxTreeViewItemDisableChange']);
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


