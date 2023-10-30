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
  inputs: ['caption', 'initialCollapse'],
  methods: ['close', 'isOpen']
})
@Component({
  selector: 'ifx-accordion-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['caption', 'initialCollapse'],
})
export class IfxAccordionItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxItemOpen', 'ifxItemClose']);
  }
}


export declare interface IfxAccordionItem extends Components.IfxAccordionItem {

  ifxItemOpen: EventEmitter<CustomEvent<any>>;

  ifxItemClose: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['color', 'icon']
})
@Component({
  selector: 'ifx-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'icon'],
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
  inputs: ['cols', 'columnDefs', 'rowData', 'rowHeight', 'rows', 'tableHeight', 'uniqueKey']
})
@Component({
  selector: 'ifx-basic-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['cols', 'columnDefs', 'rowData', 'rowHeight', 'rows', 'tableHeight', 'uniqueKey'],
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
  inputs: ['icon', 'target', 'url']
})
@Component({
  selector: 'ifx-breadcrumb-item-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'target', 'url'],
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
  inputs: ['disabled', 'href', 'size', 'target', 'theme', 'variant'],
  methods: ['setFocus']
})
@Component({
  selector: 'ifx-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'href', 'size', 'target', 'theme', 'variant'],
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
  inputs: ['direction', 'href', 'target']
})
@Component({
  selector: 'ifx-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['direction', 'href', 'target'],
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
  inputs: ['isHovered']
})
@Component({
  selector: 'ifx-card-headline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['isHovered'],
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
  inputs: ['disabled', 'error', 'indeterminate', 'name', 'size', 'value']
})
@Component({
  selector: 'ifx-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'error', 'indeterminate', 'name', 'size', 'value'],
})
export class IfxCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxChange']);
  }
}


export declare interface IfxCheckbox extends Components.IfxCheckbox {

  ifxChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['placeholder']
})
@Component({
  selector: 'ifx-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['placeholder'],
})
export class IfxChip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxDropdownMenu']);
  }
}


export declare interface IfxChip extends Components.IfxChip {

  ifxDropdownMenu: EventEmitter<CustomEvent<CustomEvent>>;
}


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
  inputs: ['variant']
})
@Component({
  selector: 'ifx-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['variant'],
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
  inputs: ['disabled', 'href', 'icon', 'shape', 'size', 'target', 'variant'],
  methods: ['setFocus']
})
@Component({
  selector: 'ifx-icon-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'href', 'icon', 'shape', 'size', 'target', 'variant'],
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
  inputs: ['href', 'size', 'target', 'variant']
})
@Component({
  selector: 'ifx-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['href', 'size', 'target', 'variant'],
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
  inputs: ['bulletpoint', 'flush', 'notification']
})
@Component({
  selector: 'ifx-list-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['bulletpoint', 'flush', 'notification'],
})
export class IfxListGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxListGroup extends Components.IfxListGroup {}


@ProxyCmp({
  inputs: ['badge', 'badgeValue', 'isFlush']
})
@Component({
  selector: 'ifx-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['badge', 'badgeValue', 'isFlush'],
})
export class IfxListItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxListItem extends Components.IfxListItem {}


@ProxyCmp({
  inputs: ['creationTime', 'isFlush', 'titleText']
})
@Component({
  selector: 'ifx-list-notification',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['creationTime', 'isFlush', 'titleText'],
})
export class IfxListNotification {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxListNotification extends Components.IfxListNotification {}


@ProxyCmp({
  inputs: ['alertIcon', 'cancelButtonLabel', 'caption', 'closeOnOverlayClick', 'okButtonLabel', 'opened', 'variant'],
  methods: ['open', 'close']
})
@Component({
  selector: 'ifx-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alertIcon', 'cancelButtonLabel', 'caption', 'closeOnOverlayClick', 'okButtonLabel', 'opened', 'variant'],
})
export class IfxModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxModalOpen', 'ifxModalClose']);
  }
}


export declare interface IfxModal extends Components.IfxModal {

  ifxModalOpen: EventEmitter<CustomEvent<any>>;

  ifxModalClose: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['disabled', 'error', 'errorMessage', 'label', 'maxItemCount', 'options', 'placeholder', 'size']
})
@Component({
  selector: 'ifx-multiselect',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'error', 'errorMessage', 'label', 'maxItemCount', 'options', 'placeholder', 'size'],
})
export class IfxMultiselect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxSelect', 'ifxMultiselectIsOpen']);
  }
}


export declare interface IfxMultiselect extends Components.IfxMultiselect {

  ifxSelect: EventEmitter<CustomEvent<any>>;

  ifxMultiselectIsOpen: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['applicationName', 'fixed', 'showLogo']
})
@Component({
  selector: 'ifx-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['applicationName', 'fixed', 'showLogo'],
})
export class IfxNavbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxNavbar extends Components.IfxNavbar {}


@ProxyCmp({
  inputs: ['hideComponent', 'hideLabel', 'href', 'icon', 'isProfile', 'target']
})
@Component({
  selector: 'ifx-navbar-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hideComponent', 'hideLabel', 'href', 'icon', 'isProfile', 'target'],
})
export class IfxNavbarItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxNavbarItem extends Components.IfxNavbarItem {}


@ProxyCmp({
})
@Component({
  selector: 'ifx-navbar-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IfxNavbarMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxNavbarMenu extends Components.IfxNavbarMenu {}


@ProxyCmp({
  inputs: ['hide', 'href', 'target']
})
@Component({
  selector: 'ifx-navbar-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hide', 'href', 'target'],
})
export class IfxNavbarMenuItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxNavbarMenuItem extends Components.IfxNavbarMenuItem {}


@ProxyCmp({
  inputs: ['inverted']
})
@Component({
  selector: 'ifx-number-indicator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['inverted'],
})
export class IfxNumberIndicator {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxNumberIndicator extends Components.IfxNumberIndicator {}


@ProxyCmp({
  inputs: ['currentPage', 'total']
})
@Component({
  selector: 'ifx-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['currentPage', 'total'],
})
export class IfxPagination {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxPageChange', 'ifxNextPage', 'ifxPrevPage']);
  }
}


export declare interface IfxPagination extends Components.IfxPagination {

  ifxPageChange: EventEmitter<CustomEvent<any>>;

  ifxNextPage: EventEmitter<CustomEvent<any>>;

  ifxPrevPage: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['label', 'showLabel', 'size', 'value']
})
@Component({
  selector: 'ifx-progress-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', 'showLabel', 'size', 'value'],
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
  inputs: ['disabled', 'error', 'size', 'value']
})
@Component({
  selector: 'ifx-radio-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'error', 'size', 'value'],
})
export class IfxRadioButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxChange']);
  }
}


export declare interface IfxRadioButton extends Components.IfxRadioButton {

  ifxChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['disabled', 'isOpen', 'value']
})
@Component({
  selector: 'ifx-search-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'isOpen', 'value'],
})
export class IfxSearchBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxInput', 'ifxSearchBarIsOpen']);
  }
}


export declare interface IfxSearchBar extends Components.IfxSearchBar {

  ifxInput: EventEmitter<CustomEvent<any>>;

  ifxSearchBarIsOpen: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['disabled', 'showDeleteIcon', 'size', 'value']
})
@Component({
  selector: 'ifx-search-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'showDeleteIcon', 'size', 'value'],
})
export class IfxSearchField {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxInput']);
  }
}


export declare interface IfxSearchField extends Components.IfxSearchField {

  ifxInput: EventEmitter<CustomEvent<String>>;
}


@ProxyCmp({
  inputs: ['addItemFilter', 'addItemText', 'addItems', 'appendValue', 'callbackOnCreateTemplates', 'callbackOnInit', 'choices', 'classNames', 'customAddItemText', 'delimiter', 'duplicateItemsAllowed', 'editItems', 'fuseOptions', 'ifxDisabled', 'ifxError', 'ifxErrorMessage', 'ifxLabel', 'ifxOptions', 'ifxPlaceholderValue', 'ifxSize', 'itemSelectText', 'items', 'loadingText', 'maxItemCount', 'maxItemText', 'name', 'noChoicesText', 'noResultsText', 'paste', 'placeholder', 'placeholderValue', 'position', 'prependValue', 'removeItemButton', 'removeItems', 'renderChoiceLimit', 'renderSelectedChoices', 'resetScrollPosition', 'searchChoices', 'searchEnabled', 'searchFields', 'searchFloor', 'searchPlaceholderValue', 'searchResultLimit', 'shouldSort', 'shouldSortItems', 'sorter', 'type', 'uniqueItemText', 'value', 'valueComparer'],
  methods: ['handleChange', 'highlightItem', 'unhighlightItem', 'highlightAll', 'unhighlightAll', 'removeActiveItemsByValue', 'removeActiveItems', 'removeHighlightedItems', 'showDropdown', 'hideDropdown', 'getValue', 'setValue', 'setChoiceByValue', 'setChoices', 'clearChoices', 'clearStore', 'clearInput', 'enable', 'disable', 'ajax']
})
@Component({
  selector: 'ifx-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['addItemFilter', 'addItemText', 'addItems', 'appendValue', 'callbackOnCreateTemplates', 'callbackOnInit', 'choices', 'classNames', 'customAddItemText', 'delimiter', 'duplicateItemsAllowed', 'editItems', 'fuseOptions', 'ifxDisabled', 'ifxError', 'ifxErrorMessage', 'ifxLabel', 'ifxOptions', 'ifxPlaceholderValue', 'ifxSize', 'itemSelectText', 'items', 'loadingText', 'maxItemCount', 'maxItemText', 'name', 'noChoicesText', 'noResultsText', 'paste', 'placeholder', 'placeholderValue', 'position', 'prependValue', 'removeItemButton', 'removeItems', 'renderChoiceLimit', 'renderSelectedChoices', 'resetScrollPosition', 'searchChoices', 'searchEnabled', 'searchFields', 'searchFloor', 'searchPlaceholderValue', 'searchResultLimit', 'shouldSort', 'shouldSortItems', 'sorter', 'type', 'uniqueItemText', 'value', 'valueComparer'],
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
  inputs: ['applicationName']
})
@Component({
  selector: 'ifx-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['applicationName'],
})
export class IfxSidebar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxSidebar extends Components.IfxSidebar {}


@ProxyCmp({
  inputs: ['href', 'icon', 'target']
})
@Component({
  selector: 'ifx-sidebar-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['href', 'icon', 'target'],
})
export class IfxSidebarItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxSidebarItem extends Components.IfxSidebarItem {}


@ProxyCmp({
  inputs: ['disabled', 'leftIcon', 'leftText', 'max', 'min', 'rightIcon', 'rightText', 'showPercentage', 'value']
})
@Component({
  selector: 'ifx-slider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'leftIcon', 'leftText', 'max', 'min', 'rightIcon', 'rightText', 'showPercentage', 'value'],
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

  ifxChange: EventEmitter<CustomEvent<number>>;
}


@ProxyCmp({
  inputs: ['size', 'variant']
})
@Component({
  selector: 'ifx-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size', 'variant'],
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
  inputs: ['disabled', 'name', 'value']
})
@Component({
  selector: 'ifx-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'name', 'value'],
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
})
@Component({
  selector: 'ifx-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IfxTab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxTab extends Components.IfxTab {}


@ProxyCmp({
  inputs: ['cols', 'columnDefs', 'pagination', 'paginationPageSize', 'rowData', 'rowHeight', 'rows', 'tableHeight', 'uniqueKey']
})
@Component({
  selector: 'ifx-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['cols', 'columnDefs', 'pagination', 'paginationPageSize', 'rowData', 'rowHeight', 'rows', 'tableHeight', 'uniqueKey'],
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
  inputs: ['orientation', 'tabs']
})
@Component({
  selector: 'ifx-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['orientation', 'tabs'],
})
export class IfxTabs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ifxTabIndex']);
  }
}


export declare interface IfxTabs extends Components.IfxTabs {

  ifxTabIndex: EventEmitter<CustomEvent<any>>;
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
  inputs: ['caption', 'disabled', 'error', 'icon', 'label', 'optional', 'placeholder', 'required', 'size', 'success', 'value']
})
@Component({
  selector: 'ifx-text-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['caption', 'disabled', 'error', 'icon', 'label', 'optional', 'placeholder', 'required', 'size', 'success', 'value'],
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


