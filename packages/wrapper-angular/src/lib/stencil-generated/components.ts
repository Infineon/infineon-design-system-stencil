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
  inputs: ['ariaLevelNumber', 'caption', 'icon', 'open']
})
@Component({
  selector: 'ifx-accordion-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLevelNumber', 'caption', 'icon', 'open'],
  outputs: ['ifxOpen', 'ifxClose'],
  standalone: false
})
export class IfxAccordionItem {
  protected el: HTMLIfxAccordionItemElement;
  @Output() ifxOpen = new EventEmitter<IfxAccordionItemCustomEvent<any>>();
  @Output() ifxClose = new EventEmitter<IfxAccordionItemCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxAccordionItemCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxAccordionItem extends Components.IfxAccordionItem {
  /**
   * Event emitted when accordion is opened.
   */
  ifxOpen: EventEmitter<IfxAccordionItemCustomEvent<any>>;
  /**
   * Event emitted when an accordion item is closed.
   */
  ifxClose: EventEmitter<IfxAccordionItemCustomEvent<any>>;
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
  @Output() ifxActionListItemClick = new EventEmitter<IfxActionListItemCustomEvent<IIfxActionListItemActionListItemClickEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxActionListItemCustomEvent } from '@infineon/infineon-design-system-stencil';
import type { ActionListItemClickEvent as IIfxActionListItemActionListItemClickEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxActionListItem extends Components.IfxActionListItem {
  /**
   * Event emitted when the main item area is clicked
   */
  ifxActionListItemClick: EventEmitter<IfxActionListItemCustomEvent<IIfxActionListItemActionListItemClickEvent>>;
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
  inputs: ['AriaLiveText', 'closable', 'icon', 'variant']
})
@Component({
  selector: 'ifx-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['AriaLiveText', 'closable', 'icon', 'variant'],
  outputs: ['ifxClose'],
  standalone: false
})
export class IfxAlert {
  protected el: HTMLIfxAlertElement;
  @Output() ifxClose = new EventEmitter<IfxAlertCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxAlertCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxAlert extends Components.IfxAlert {
  /**
   * Event emitted when the component is closed.
   */
  ifxClose: EventEmitter<IfxAlertCustomEvent<any>>;
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
  @Output() breadcrumbMenuIconWrapper = new EventEmitter<IfxBreadcrumbItemLabelCustomEvent<HTMLElement>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxBreadcrumbItemLabelCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxBreadcrumbItemLabel extends Components.IfxBreadcrumbItemLabel {
  /**
   * Fires with the icon wrapper element when it's ready.
   */
  breadcrumbMenuIconWrapper: EventEmitter<IfxBreadcrumbItemLabelCustomEvent<HTMLElement>>;
}


@ProxyCmp({
  inputs: ['ariaLabelText', 'disabled', 'fullWidth', 'href', 'size', 'target', 'theme', 'type', 'variant'],
  methods: ['setFocus']
})
@Component({
  selector: 'ifx-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelText', 'disabled', 'fullWidth', 'href', 'size', 'target', 'theme', 'type', 'variant'],
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
  inputs: ['actionsPlacement', 'ariaLabelText', 'direction', 'fullWidth', 'href', 'target']
})
@Component({
  selector: 'ifx-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['actionsPlacement', 'ariaLabelText', 'direction', 'fullWidth', 'href', 'target'],
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
  inputs: ['alt', 'objectFit', 'position', 'src']
})
@Component({
  selector: 'ifx-card-image',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alt', 'objectFit', 'position', 'src'],
  outputs: ['imgPosition'],
  standalone: false
})
export class IfxCardImage {
  protected el: HTMLIfxCardImageElement;
  @Output() imgPosition = new EventEmitter<IfxCardImageCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxCardImageCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxCardImage extends Components.IfxCardImage {
  /**
   * Emits the image position when it changes or is set.
   */
  imgPosition: EventEmitter<IfxCardImageCustomEvent<any>>;
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
  inputs: ['checked', 'disabled', 'error', 'indeterminate', 'name', 'readOnly', 'size', 'value'],
  methods: ['isChecked', 'setChecked', 'toggleCheckedState', 'toggle']
})
@Component({
  selector: 'ifx-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'error', 'indeterminate', 'name', 'readOnly', 'size', 'value'],
  outputs: ['ifxChange', 'ifxError'],
  standalone: false
})
export class IfxCheckbox {
  protected el: HTMLIfxCheckboxElement;
  @Output() ifxChange = new EventEmitter<IfxCheckboxCustomEvent<boolean>>();
  @Output() ifxError = new EventEmitter<IfxCheckboxCustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxCheckboxCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxCheckbox extends Components.IfxCheckbox {
  /**
   * Event emitted when the checkbox state changes.
Emits the new checked state as a boolean value.
   */
  ifxChange: EventEmitter<IfxCheckboxCustomEvent<boolean>>;
  /**
   * Event emitted when the error state changes.
Emits the new error state as a boolean value.
   */
  ifxError: EventEmitter<IfxCheckboxCustomEvent<boolean>>;
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
  inputs: ['ariaLabelText', 'disabled', 'icon', 'placeholder', 'readOnly', 'size', 'theme', 'value', 'variant']
})
@Component({
  selector: 'ifx-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelText', 'disabled', 'icon', 'placeholder', 'readOnly', 'size', 'theme', 'value', 'variant'],
  outputs: ['ifxChange'],
  standalone: false
})
export class IfxChip {
  protected el: HTMLIfxChipElement;
  @Output() ifxChange = new EventEmitter<IfxChipCustomEvent<{ previousSelection: Array<IIfxChipChipItemSelectEvent>; currentSelection: Array<IIfxChipChipItemSelectEvent>; name: string; }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxChipCustomEvent } from '@infineon/infineon-design-system-stencil';
import type { ChipItemSelectEvent as IIfxChipChipItemSelectEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxChip extends Components.IfxChip {
  /**
   * Fires on selection change.
   */
  ifxChange: EventEmitter<IfxChipCustomEvent<{ previousSelection: Array<IIfxChipChipItemSelectEvent>; currentSelection: Array<IIfxChipChipItemSelectEvent>; name: string; }>>;
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
  @Output() ifxChipItemSelect = new EventEmitter<IfxChipItemCustomEvent<IIfxChipItemChipItemSelectEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxChipItemCustomEvent } from '@infineon/infineon-design-system-stencil';
import type { ChipItemSelectEvent as IIfxChipItemChipItemSelectEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxChipItem extends Components.IfxChipItem {
  /**
   * Emitted on chip select/deselect.
   */
  ifxChipItemSelect: EventEmitter<IfxChipItemCustomEvent<IIfxChipItemChipItemSelectEvent>>;
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
  @Output() ifxChange = new EventEmitter<IfxContentSwitcherCustomEvent<IIfxContentSwitcherChangeEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxContentSwitcherCustomEvent } from '@infineon/infineon-design-system-stencil';
import type { ChangeEvent as IIfxContentSwitcherChangeEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxContentSwitcher extends Components.IfxContentSwitcher {
  /**
   * Fired when the selected option changes.
   */
  ifxChange: EventEmitter<IfxContentSwitcherCustomEvent<IIfxContentSwitcherChangeEvent>>;
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
  inputs: ['value']
})
@Component({
  selector: 'ifx-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['value'],
  outputs: ['ifxChange'],
  standalone: false
})
export class IfxCounter {
  protected el: HTMLIfxCounterElement;
  @Output() ifxChange = new EventEmitter<IfxCounterCustomEvent<number>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxCounterCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxCounter extends Components.IfxCounter {

  ifxChange: EventEmitter<IfxCounterCustomEvent<number>>;
}


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
  @Output() ifxDate = new EventEmitter<IfxDatePickerCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxDatePickerCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxDatePicker extends Components.IfxDatePicker {
  /**
   * Event emitted when date value changes
   */
  ifxDate: EventEmitter<IfxDatePickerCustomEvent<any>>;
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
  @Output() ifxOpen = new EventEmitter<IfxDropdownCustomEvent<any>>();
  @Output() ifxClose = new EventEmitter<IfxDropdownCustomEvent<any>>();
  @Output() ifxDropdown = new EventEmitter<IfxDropdownCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxDropdownCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxDropdown extends Components.IfxDropdown {
  /**
   * Fired when dropdown open.
   */
  ifxOpen: EventEmitter<IfxDropdownCustomEvent<any>>;
  /**
   * Fired when dropdown closed.
   */
  ifxClose: EventEmitter<IfxDropdownCustomEvent<any>>;
  /**
   * General dropdown event.
   */
  ifxDropdown: EventEmitter<IfxDropdownCustomEvent<any>>;
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
  inputs: ['disabled', 'error', 'hide', 'href', 'icon', 'target']
})
@Component({
  selector: 'ifx-dropdown-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'error', 'hide', 'href', 'icon', 'target'],
  outputs: ['ifxDropdownItem'],
  standalone: false
})
export class IfxDropdownItem {
  protected el: HTMLIfxDropdownItemElement;
  @Output() ifxDropdownItem = new EventEmitter<IfxDropdownItemCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxDropdownItemCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxDropdownItem extends Components.IfxDropdownItem {
  /**
   * Fired when the dropdown item is clicked or selected.
   */
  ifxDropdownItem: EventEmitter<IfxDropdownItemCustomEvent<any>>;
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
  @Output() menuSize = new EventEmitter<IfxDropdownMenuCustomEvent<any>>();
  @Output() ifxDropdownMenuItem = new EventEmitter<IfxDropdownMenuCustomEvent<CustomEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxDropdownMenuCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxDropdownMenu extends Components.IfxDropdownMenu {
  /**
   * Emits the calculated size of the menu
   */
  menuSize: EventEmitter<IfxDropdownMenuCustomEvent<any>>;
  /**
   * Fired when a dropdown menu item is selected
   */
  ifxDropdownMenuItem: EventEmitter<IfxDropdownMenuCustomEvent<CustomEvent>>;
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
  inputs: ['description', 'headline', 'illustrationUrl', 'imgAlt', 'type']
})
@Component({
  selector: 'ifx-error-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['description', 'headline', 'illustrationUrl', 'imgAlt', 'type'],
  standalone: false
})
export class IfxErrorPage {
  protected el: HTMLIfxErrorPageElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IfxErrorPage extends Components.IfxErrorPage {}


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
  @Output() ifxFileUploadAdd = new EventEmitter<IfxFileUploadCustomEvent<{ addedFiles: File[]; files: File[]; }>>();
  @Output() ifxFileUploadRemove = new EventEmitter<IfxFileUploadCustomEvent<{ removedFile: File; files: File[]; }>>();
  @Output() ifxFileUploadChange = new EventEmitter<IfxFileUploadCustomEvent<{ files: File[] }>>();
  @Output() ifxFileUploadError = new EventEmitter<IfxFileUploadCustomEvent<{ errorType: string; file: File; message: string; reason?: string; }>>();
  @Output() ifxFileUploadInvalid = new EventEmitter<IfxFileUploadCustomEvent<{ file: File; reason: string }>>();
  @Output() ifxFileUploadStart = new EventEmitter<IfxFileUploadCustomEvent<{ file: File }>>();
  @Output() ifxFileUploadComplete = new EventEmitter<IfxFileUploadCustomEvent<{ file: File }>>();
  @Output() ifxFileUploadAllComplete = new EventEmitter<IfxFileUploadCustomEvent<{ files: File[] }>>();
  @Output() ifxFileUploadAbort = new EventEmitter<IfxFileUploadCustomEvent<{ file: File }>>();
  @Output() ifxFileUploadDrop = new EventEmitter<IfxFileUploadCustomEvent<{ droppedFiles: File[]; acceptedFiles: File[]; rejectedFiles: File[]; }>>();
  @Output() ifxFileUploadClick = new EventEmitter<IfxFileUploadCustomEvent<void>>();
  @Output() ifxFileUploadMaxFilesExceeded = new EventEmitter<IfxFileUploadCustomEvent<{ maxFiles: number; attempted: number; }>>();
  @Output() ifxFileUploadValidation = new EventEmitter<IfxFileUploadCustomEvent<{ valid: boolean }>>();
  @Output() ifxFileUploadRetry = new EventEmitter<IfxFileUploadCustomEvent<{ file: File }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxFileUploadCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxFileUpload extends Components.IfxFileUpload {
  /**
   * Fired when files are added (e.g. via browse or drop).
   */
  ifxFileUploadAdd: EventEmitter<IfxFileUploadCustomEvent<{ addedFiles: File[]; files: File[]; }>>;
  /**
   * Fired when a file is removed from the list.
   */
  ifxFileUploadRemove: EventEmitter<IfxFileUploadCustomEvent<{ removedFile: File; files: File[]; }>>;
  /**
   * Fired whenever the list of selected files changes.
   */
  ifxFileUploadChange: EventEmitter<IfxFileUploadCustomEvent<{ files: File[] }>>;
  /**
   * Fired when an upload-related error occurs.
   */
  ifxFileUploadError: EventEmitter<IfxFileUploadCustomEvent<{ errorType: string; file: File; message: string; reason?: string; }>>;
  /**
   * Fired when a file fails validation before upload.
   */
  ifxFileUploadInvalid: EventEmitter<IfxFileUploadCustomEvent<{ file: File; reason: string }>>;
  /**
   * Fired when upload starts for a file.
   */
  ifxFileUploadStart: EventEmitter<IfxFileUploadCustomEvent<{ file: File }>>;
  /**
   * Fired when a single file upload finishes successfully.
   */
  ifxFileUploadComplete: EventEmitter<IfxFileUploadCustomEvent<{ file: File }>>;
  /**
   * Fired when all file uploads have finished successfully.
   */
  ifxFileUploadAllComplete: EventEmitter<IfxFileUploadCustomEvent<{ files: File[] }>>;
  /**
   * Fired when an ongoing upload is aborted/cancelled.
   */
  ifxFileUploadAbort: EventEmitter<IfxFileUploadCustomEvent<{ file: File }>>;
  /**
   * Fired when files are dropped onto the drop zone.
   */
  ifxFileUploadDrop: EventEmitter<IfxFileUploadCustomEvent<{ droppedFiles: File[]; acceptedFiles: File[]; rejectedFiles: File[]; }>>;
  /**
   * Fired when the upload area is clicked (typically to open file dialog).
   */
  ifxFileUploadClick: EventEmitter<IfxFileUploadCustomEvent<void>>;
  /**
   * Fired when the user tries to add more than the allowed number of files.
   */
  ifxFileUploadMaxFilesExceeded: EventEmitter<IfxFileUploadCustomEvent<{ maxFiles: number; attempted: number; }>>;
  /**
   * Fired after validating the current files (valid or invalid).
   */
  ifxFileUploadValidation: EventEmitter<IfxFileUploadCustomEvent<{ valid: boolean }>>;
  /**
   * Fired when the user retries uploading a file after a failure.
   */
  ifxFileUploadRetry: EventEmitter<IfxFileUploadCustomEvent<{ file: File }>>;
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
  @Output() ifxFilterAccordionChange = new EventEmitter<IfxFilterAccordionCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxFilterAccordionCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxFilterAccordion extends Components.IfxFilterAccordion {
  /**
   * Emitted when the filter accordion`s state or selection changes
   */
  ifxFilterAccordionChange: EventEmitter<IfxFilterAccordionCustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['maxShownFilters'],
  methods: ['showMoreFilters']
})
@Component({
  selector: 'ifx-filter-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['maxShownFilters'],
  outputs: ['ifxTopbarFilterChange'],
  standalone: false
})
export class IfxFilterBar {
  protected el: HTMLIfxFilterBarElement;
  @Output() ifxTopbarFilterChange = new EventEmitter<IfxFilterBarCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxFilterBarCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxFilterBar extends Components.IfxFilterBar {
  /**
   * Emitted when a topbar filter changes
   */
  ifxTopbarFilterChange: EventEmitter<IfxFilterBarCustomEvent<any>>;
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
  @Output() ifxFilterSearchChange = new EventEmitter<IfxFilterSearchCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxFilterSearchCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxFilterSearch extends Components.IfxFilterSearch {
  /**
   * Emitted when the filter/search value changes
   */
  ifxFilterSearchChange: EventEmitter<IfxFilterSearchCustomEvent<any>>;
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
  @Output() ifxSidebarFilterChange = new EventEmitter<IfxFilterTypeGroupCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxFilterTypeGroupCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxFilterTypeGroup extends Components.IfxFilterTypeGroup {
  /**
   * Emitted when a sidebar filter is updated
   */
  ifxSidebarFilterChange: EventEmitter<IfxFilterTypeGroupCustomEvent<any>>;
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
  inputs: ['icon']
})
@Component({
  selector: 'ifx-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon'],
  outputs: ['consoleError'],
  standalone: false
})
export class IfxIcon {
  protected el: HTMLIfxIconElement;
  @Output() consoleError = new EventEmitter<IfxIconCustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxIconCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxIcon extends Components.IfxIcon {
  /**
   * Emitted when the provided icon name is invalid and the component fails to render an icon.
 The event detail contains a boolean value `true` indicating an error occurred.
   */
  consoleError: EventEmitter<IfxIconCustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['ariaLabelText', 'disabled', 'href', 'icon', 'shape', 'size', 'target', 'variant'],
  methods: ['setFocus']
})
@Component({
  selector: 'ifx-icon-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelText', 'disabled', 'href', 'icon', 'shape', 'size', 'target', 'variant'],
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
  inputs: ['ariaLabelText', 'inverted', 'number', 'variant']
})
@Component({
  selector: 'ifx-indicator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelText', 'inverted', 'number', 'variant'],
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
  inputs: ['ariaLabelText', 'disabled', 'download', 'href', 'size', 'target', 'variant']
})
@Component({
  selector: 'ifx-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelText', 'disabled', 'download', 'href', 'size', 'target', 'variant'],
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
  @Output() ifxListUpdate = new EventEmitter<IfxListCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxListCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxList extends Components.IfxList {
  /**
   * Emitted when the list's items or selections are updated
   */
  ifxListUpdate: EventEmitter<IfxListCustomEvent<any>>;
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
  @Output() ifxListEntryChange = new EventEmitter<IfxListEntryCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxListEntryCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxListEntry extends Components.IfxListEntry {

  ifxListEntryChange: EventEmitter<IfxListEntryCustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['alertIcon', 'caption', 'captionAriaLabel', 'closeButtonAriaLabel', 'closeOnOverlayClick', 'opened', 'showCloseButton', 'size', 'variant'],
  methods: ['openModal', 'closeModal']
})
@Component({
  selector: 'ifx-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alertIcon', 'caption', 'captionAriaLabel', 'closeButtonAriaLabel', 'closeOnOverlayClick', 'opened', 'showCloseButton', 'size', 'variant'],
  outputs: ['ifxOpen', 'ifxClose', 'ifxOpenedChange'],
  standalone: false
})
export class IfxModal {
  protected el: HTMLIfxModalElement;
  @Output() ifxOpen = new EventEmitter<IfxModalCustomEvent<any>>();
  @Output() ifxClose = new EventEmitter<IfxModalCustomEvent<any>>();
  @Output() ifxOpenedChange = new EventEmitter<IfxModalCustomEvent<{ opened: boolean }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxModalCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxModal extends Components.IfxModal {
  /**
   * Emitted when the modal finishes opening and the opening animation completes. No additional data is provided with this event.
   */
  ifxOpen: EventEmitter<IfxModalCustomEvent<any>>;
  /**
   * Emitted when the modal finishes closing and the closing animation completes. No additional data is provided with this event.
   */
  ifxClose: EventEmitter<IfxModalCustomEvent<any>>;
  /**
   * Emitted immediately when the `opened` state changes (before animations).
The event detail contains `{ opened: boolean }` with the new state.
Use this event for two-way binding (v-model in Vue, [(ngModel)] in Angular).
   */
  ifxOpenedChange: EventEmitter<IfxModalCustomEvent<{ opened: boolean }>>;
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
  @Output() ifxSelect = new EventEmitter<IfxMultiselectCustomEvent<any>>();
  @Output() ifxOpen = new EventEmitter<IfxMultiselectCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxMultiselectCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxMultiselect extends Components.IfxMultiselect {
  /**
   * Fired when an option is selected in the multi-select.
   */
  ifxSelect: EventEmitter<IfxMultiselectCustomEvent<any>>;
  /**
   * Fired when the multi-select dropdown is opened.
   */
  ifxOpen: EventEmitter<IfxMultiselectCustomEvent<any>>;
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
  @Output() ifxNavbarMobileMenuIsOpen = new EventEmitter<IfxNavbarCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxNavbarCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxNavbar extends Components.IfxNavbar {
  /**
   * Fired when the mobile navbar menu is opened or closed.
   */
  ifxNavbarMobileMenuIsOpen: EventEmitter<IfxNavbarCustomEvent<any>>;
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
  @Output() ifxNavItem = new EventEmitter<IfxNavbarItemCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxNavbarItemCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxNavbarItem extends Components.IfxNavbarItem {
  /**
   * Fired when the navigation item is activated or clicked.
   */
  ifxNavItem: EventEmitter<IfxNavbarItemCustomEvent<any>>;
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
  inputs: ['currentPage', 'itemsPerPage', 'itemsPerPageLabel', 'showItemsPerPage', 'total']
})
@Component({
  selector: 'ifx-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['currentPage', 'itemsPerPage', 'itemsPerPageLabel', 'showItemsPerPage', 'total'],
  outputs: ['ifxPageChange', 'ifxItemsPerPageChange'],
  standalone: false
})
export class IfxPagination {
  protected el: HTMLIfxPaginationElement;
  @Output() ifxPageChange = new EventEmitter<IfxPaginationCustomEvent<any>>();
  @Output() ifxItemsPerPageChange = new EventEmitter<IfxPaginationCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxPaginationCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxPagination extends Components.IfxPagination {
  /**
   * Emitted when the current page changes
   */
  ifxPageChange: EventEmitter<IfxPaginationCustomEvent<any>>;
  /**
   * Emitted when the items-per-page value changes
   */
  ifxItemsPerPageChange: EventEmitter<IfxPaginationCustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['ariaLabelText', 'disabled', 'open', 'popoverTitle', 'position', 'text'],
  methods: ['show', 'hide', 'toggle']
})
@Component({
  selector: 'ifx-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelText', 'disabled', 'open', 'popoverTitle', 'position', 'text'],
  outputs: ['ifxOpen', 'ifxClose'],
  standalone: false
})
export class IfxPopover {
  protected el: HTMLIfxPopoverElement;
  @Output() ifxOpen = new EventEmitter<IfxPopoverCustomEvent<{ trigger: HTMLElement | null }>>();
  @Output() ifxClose = new EventEmitter<IfxPopoverCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxPopoverCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxPopover extends Components.IfxPopover {
  /**
   * Emitted when the popover is opened
   */
  ifxOpen: EventEmitter<IfxPopoverCustomEvent<{ trigger: HTMLElement | null }>>;
  /**
   * Fired when the component is closed.
   */
  ifxClose: EventEmitter<IfxPopoverCustomEvent<any>>;
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
  @Output() ifxChange = new EventEmitter<IfxRadioButtonCustomEvent<any>>();
  @Output() ifxError = new EventEmitter<IfxRadioButtonCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxRadioButtonCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxRadioButton extends Components.IfxRadioButton {
  /**
   * Fired when the checked state of the checkbox changes.
   */
  ifxChange: EventEmitter<IfxRadioButtonCustomEvent<any>>;
  /**
   * Fired when the checkbox enters or leaves an error state.
   */
  ifxError: EventEmitter<IfxRadioButtonCustomEvent<any>>;
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
  inputs: ['autocomplete', 'disabled', 'isOpen', 'maxlength', 'showCloseButton', 'value'],
  methods: ['open', 'close']
})
@Component({
  selector: 'ifx-search-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autocomplete', 'disabled', 'isOpen', 'maxlength', 'showCloseButton', 'value'],
  outputs: ['ifxInput', 'ifxOpen'],
  standalone: false
})
export class IfxSearchBar {
  protected el: HTMLIfxSearchBarElement;
  @Output() ifxInput = new EventEmitter<IfxSearchBarCustomEvent<any>>();
  @Output() ifxOpen = new EventEmitter<IfxSearchBarCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxSearchBarCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxSearchBar extends Components.IfxSearchBar {
  /**
   * Emits when the search input value changes.
   */
  ifxInput: EventEmitter<IfxSearchBarCustomEvent<any>>;
  /**
   * Emits when the search bar is opened or closed.
Payload is the new open state.
   */
  ifxOpen: EventEmitter<IfxSearchBarCustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['ariaDescribedBy', 'ariaLabelText', 'ariaLabelledBy', 'autocomplete', 'deleteIconAriaLabel', 'disabled', 'dropdownAriaLabel', 'enableHistory', 'historyDeleteAriaLabel', 'historyHeaderText', 'historyItemAriaLabel', 'historyKey', 'maxHistoryItems', 'maxSuggestions', 'maxlength', 'placeholder', 'showDeleteIcon', 'showSuggestions', 'size', 'suggestionAriaLabel', 'suggestions', 'value'],
  methods: ['clearSearchHistory']
})
@Component({
  selector: 'ifx-search-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaDescribedBy', 'ariaLabelText', 'ariaLabelledBy', 'autocomplete', 'deleteIconAriaLabel', 'disabled', 'dropdownAriaLabel', 'enableHistory', 'historyDeleteAriaLabel', 'historyHeaderText', 'historyItemAriaLabel', 'historyKey', 'maxHistoryItems', 'maxSuggestions', 'maxlength', 'placeholder', 'showDeleteIcon', 'showSuggestions', 'size', 'suggestionAriaLabel', 'suggestions', 'value'],
  outputs: ['ifxInput', 'ifxSuggestionRequested', 'ifxSuggestionSelected', 'ifxFocus', 'ifxBlur'],
  standalone: false
})
export class IfxSearchField {
  protected el: HTMLIfxSearchFieldElement;
  @Output() ifxInput = new EventEmitter<IfxSearchFieldCustomEvent<string>>();
  @Output() ifxSuggestionRequested = new EventEmitter<IfxSearchFieldCustomEvent<string>>();
  @Output() ifxSuggestionSelected = new EventEmitter<IfxSearchFieldCustomEvent<IIfxSearchFieldSuggestionItem>>();
  @Output() ifxFocus = new EventEmitter<IfxSearchFieldCustomEvent<void>>();
  @Output() ifxBlur = new EventEmitter<IfxSearchFieldCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxSearchFieldCustomEvent } from '@infineon/infineon-design-system-stencil';
import type { SuggestionItem as IIfxSearchFieldSuggestionItem } from '@infineon/infineon-design-system-stencil';

export declare interface IfxSearchField extends Components.IfxSearchField {
  /**
   * Emitted on input change with the current value.
   */
  ifxInput: EventEmitter<IfxSearchFieldCustomEvent<string>>;
  /**
   * Emitted to request external suggestions for the given query.
   */
  ifxSuggestionRequested: EventEmitter<IfxSearchFieldCustomEvent<string>>;
  /**
   * Emitted when a suggestion or history item is selected.
   */
  ifxSuggestionSelected: EventEmitter<IfxSearchFieldCustomEvent<IIfxSearchFieldSuggestionItem>>;
  /**
   * Emitted when the input gains focus.
   */
  ifxFocus: EventEmitter<IfxSearchFieldCustomEvent<void>>;
  /**
   * Emitted when the input loses focus.
   */
  ifxBlur: EventEmitter<IfxSearchFieldCustomEvent<void>>;
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
  @Output() segmentSelect = new EventEmitter<IfxSegmentCustomEvent<number>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxSegmentCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxSegment extends Components.IfxSegment {
  /**
   * Fired when this segment is selected (emits the segment index).
   */
  segmentSelect: EventEmitter<IfxSegmentCustomEvent<number>>;
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
  @Output() ifxChange = new EventEmitter<IfxSegmentedControlCustomEvent<{ previousValue: string; selectedValue: string; }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxSegmentedControlCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxSegmentedControl extends Components.IfxSegmentedControl {
  /**
   * Fired when the selected segment changes (previous and new value).
   */
  ifxChange: EventEmitter<IfxSegmentedControlCustomEvent<{ previousValue: string; selectedValue: string; }>>;
}


@ProxyCmp({
  inputs: ['addItemFilter', 'addItemText', 'addItems', 'appendValue', 'callbackOnCreateTemplates', 'callbackOnInit', 'caption', 'choices', 'classNames', 'customAddItemText', 'delimiter', 'disabled', 'duplicateItemsAllowed', 'editItems', 'error', 'fuseOptions', 'itemSelectText', 'items', 'label', 'loadingText', 'maxItemCount', 'maxItemText', 'name', 'noChoicesText', 'noResultsText', 'options', 'paste', 'placeholder', 'placeholderValue', 'position', 'prependValue', 'readOnly', 'removeItemButton', 'removeItems', 'renderChoiceLimit', 'renderSelectedChoices', 'required', 'resetScrollPosition', 'searchChoices', 'searchFields', 'searchFloor', 'searchPlaceholderValue', 'searchResultLimit', 'shouldSort', 'shouldSortItems', 'showClearButton', 'showSearch', 'size', 'sorter', 'uniqueItemText', 'value', 'valueComparer'],
  methods: ['clearSelection', 'handleChange', 'highlightItem', 'unhighlightItem', 'highlightAll', 'unhighlightAll', 'removeActiveItemsByValue', 'removeActiveItems', 'removeHighlightedItems', 'showDropdown', 'hideDropdown', 'getValue', 'setValue', 'setChoiceByValue', 'setChoices', 'clearChoices', 'clearStore', 'clearInput', 'ajax', 'handleDeleteIcon']
})
@Component({
  selector: 'ifx-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['addItemFilter', 'addItemText', 'addItems', 'appendValue', 'callbackOnCreateTemplates', 'callbackOnInit', 'caption', 'choices', 'classNames', 'customAddItemText', 'delimiter', 'disabled', 'duplicateItemsAllowed', 'editItems', 'error', 'fuseOptions', 'itemSelectText', 'items', 'label', 'loadingText', 'maxItemCount', 'maxItemText', 'name', 'noChoicesText', 'noResultsText', 'options', 'paste', 'placeholder', 'placeholderValue', 'position', 'prependValue', 'readOnly', 'removeItemButton', 'removeItems', 'renderChoiceLimit', 'renderSelectedChoices', 'required', 'resetScrollPosition', 'searchChoices', 'searchFields', 'searchFloor', 'searchPlaceholderValue', 'searchResultLimit', 'shouldSort', 'shouldSortItems', 'showClearButton', 'showSearch', 'size', 'sorter', 'uniqueItemText', 'value', 'valueComparer'],
  outputs: ['ifxSelect', 'ifxInput'],
  standalone: false
})
export class IfxSelect {
  protected el: HTMLIfxSelectElement;
  @Output() ifxSelect = new EventEmitter<IfxSelectCustomEvent<CustomEvent>>();
  @Output() ifxInput = new EventEmitter<IfxSelectCustomEvent<CustomEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxSelectCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxSelect extends Components.IfxSelect {
  /**
   * Fired when an option is selected.
   */
  ifxSelect: EventEmitter<IfxSelectCustomEvent<CustomEvent>>;
  /**
   * Fired when the input / search value changes.
   */
  ifxInput: EventEmitter<IfxSelectCustomEvent<CustomEvent>>;
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
  @Output() ifxFilterSelect = new EventEmitter<IfxSetFilterCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxSetFilterCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxSetFilter extends Components.IfxSetFilter {
  /**
   * Emitted when the filter's value or selection changes
   */
  ifxFilterSelect: EventEmitter<IfxSetFilterCustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['applicationName', 'collapsed', 'collapsible', 'copyrightText', 'fixed', 'footerHrefTarget', 'hideMenuLabel', 'imprint', 'initialCollapse', 'logoHref', 'logoHrefTarget', 'position', 'privacyPolicy', 'showFooter', 'showHeader', 'termsOfUse'],
  methods: ['toggleCollapse', 'collapse', 'expand']
})
@Component({
  selector: 'ifx-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['applicationName', 'collapsed', 'collapsible', 'copyrightText', 'fixed', 'footerHrefTarget', 'hideMenuLabel', 'imprint', 'initialCollapse', 'logoHref', 'logoHrefTarget', 'position', 'privacyPolicy', 'showFooter', 'showHeader', 'termsOfUse'],
  outputs: ['ifxSidebarCollapseChange', 'ifxSidebarLogoClick'],
  standalone: false
})
export class IfxSidebar {
  protected el: HTMLIfxSidebarElement;
  @Output() ifxSidebarCollapseChange = new EventEmitter<IfxSidebarCustomEvent<{ collapsed: boolean }>>();
  @Output() ifxSidebarLogoClick = new EventEmitter<IfxSidebarCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxSidebarCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxSidebar extends Components.IfxSidebar {
  /**
   * Emitted when collapsed state changes
   */
  ifxSidebarCollapseChange: EventEmitter<IfxSidebarCustomEvent<{ collapsed: boolean }>>;
  /**
   * Emitted when logo image is clicked
   */
  ifxSidebarLogoClick: EventEmitter<IfxSidebarCustomEvent<any>>;
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
  @Output() ifxSidebarMenu = new EventEmitter<IfxSidebarItemCustomEvent<any>>();
  @Output() ifxSidebarNavigationItem = new EventEmitter<IfxSidebarItemCustomEvent<any>>();
  @Output() ifxSidebarActionItem = new EventEmitter<IfxSidebarItemCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxSidebarItemCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxSidebarItem extends Components.IfxSidebarItem {
  /**
   * Event fired for menu item interactions
   */
  ifxSidebarMenu: EventEmitter<IfxSidebarItemCustomEvent<any>>;
  /**
   * Event fired when a navigation item is clicked
   */
  ifxSidebarNavigationItem: EventEmitter<IfxSidebarItemCustomEvent<any>>;
  /**
   * Event fired when an action item is clicked
   */
  ifxSidebarActionItem: EventEmitter<IfxSidebarItemCustomEvent<any>>;
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
  inputs: ['ariaLabelText', 'disabled', 'leftIcon', 'leftText', 'max', 'maxValueHandle', 'min', 'minValueHandle', 'readOnly', 'rightIcon', 'rightText', 'showPercentage', 'step', 'type', 'value']
})
@Component({
  selector: 'ifx-slider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelText', 'disabled', 'leftIcon', 'leftText', 'max', 'maxValueHandle', 'min', 'minValueHandle', 'readOnly', 'rightIcon', 'rightText', 'showPercentage', 'step', 'type', 'value'],
  outputs: ['ifxChange'],
  standalone: false
})
export class IfxSlider {
  protected el: HTMLIfxSliderElement;
  @Output() ifxChange = new EventEmitter<IfxSliderCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxSliderCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxSlider extends Components.IfxSlider {
  /**
   * Fired when the slider value (or values) change.
   */
  ifxChange: EventEmitter<IfxSliderCustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['ariaLabelText', 'inverted', 'size', 'variant']
})
@Component({
  selector: 'ifx-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelText', 'inverted', 'size', 'variant'],
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
  inputs: ['activeStep', 'ariaCurrentText', 'ariaLabelText', 'indicatorPosition', 'showStepNumber', 'variant']
})
@Component({
  selector: 'ifx-stepper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activeStep', 'ariaCurrentText', 'ariaLabelText', 'indicatorPosition', 'showStepNumber', 'variant'],
  outputs: ['ifxChange'],
  standalone: false
})
export class IfxStepper {
  protected el: HTMLIfxStepperElement;
  @Output() ifxChange = new EventEmitter<IfxStepperCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxStepperCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxStepper extends Components.IfxStepper {
  /**
   * Fired when the active step changes.
   */
  ifxChange: EventEmitter<IfxStepperCustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'name', 'readOnly', 'value'],
  methods: ['isChecked', 'setChecked', 'toggle']
})
@Component({
  selector: 'ifx-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'name', 'readOnly', 'value'],
  outputs: ['ifxChange'],
  standalone: false
})
export class IfxSwitch {
  protected el: HTMLIfxSwitchElement;
  @Output() ifxChange = new EventEmitter<IfxSwitchCustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxSwitchCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxSwitch extends Components.IfxSwitch {
  /**
   * Emitted when checked state changes.
   */
  ifxChange: EventEmitter<IfxSwitchCustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['disabled', 'header', 'icon', 'iconPosition', 'label', 'number', 'positionSticky', 'subline']
})
@Component({
  selector: 'ifx-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'header', 'icon', 'iconPosition', 'label', 'number', 'positionSticky', 'subline'],
  outputs: ['tabHeaderChange'],
  standalone: false
})
export class IfxTab {
  protected el: HTMLIfxTabElement;
  @Output() tabHeaderChange = new EventEmitter<IfxTabCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxTabCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxTab extends Components.IfxTab {
  /**
   * Emitted when tab header triggers a change (selection or property updates).
   */
  tabHeaderChange: EventEmitter<IfxTabCustomEvent<any>>;
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
  @Output() ifxSortChange = new EventEmitter<IfxTableCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxTableCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxTable extends Components.IfxTable {
  /**
   * Emitted when sort order changes.
   */
  ifxSortChange: EventEmitter<IfxTableCustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['activeTabIndex', 'fullWidth', 'label', 'number', 'orientation', 'positionSticky', 'subline']
})
@Component({
  selector: 'ifx-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activeTabIndex', 'fullWidth', 'label', 'number', 'orientation', 'positionSticky', 'subline'],
  outputs: ['ifxChange'],
  standalone: false
})
export class IfxTabs {
  protected el: HTMLIfxTabsElement;
  @Output() ifxChange = new EventEmitter<IfxTabsCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxTabsCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxTabs extends Components.IfxTabs {
  /**
   * Emitted when the active tab changes (e.g., user selects a different tab).
   */
  ifxChange: EventEmitter<IfxTabsCustomEvent<any>>;
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
  @Output() toggleTemplates = new EventEmitter<IfxTemplateCustomEvent<any>>();
  @Output() fieldError = new EventEmitter<IfxTemplateCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxTemplateCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxTemplate extends Components.IfxTemplate {
  /**
   * Fired when templates are toggled on or off.
   */
  toggleTemplates: EventEmitter<IfxTemplateCustomEvent<any>>;
  /**
   * Fired when a validation error occurs on the field.
   */
  fieldError: EventEmitter<IfxTemplateCustomEvent<any>>;
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
  inputs: ['autocomplete', 'caption', 'disabled', 'error', 'icon', 'internalId', 'label', 'maxlength', 'name', 'placeholder', 'readOnly', 'required', 'showDeleteIcon', 'size', 'success', 'type', 'value'],
  methods: ['reset']
})
@Component({
  selector: 'ifx-text-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autocomplete', 'caption', 'disabled', 'error', 'icon', 'internalId', 'label', 'maxlength', 'name', 'placeholder', 'readOnly', 'required', 'showDeleteIcon', 'size', 'success', 'type', 'value'],
  outputs: ['ifxInput'],
  standalone: false
})
export class IfxTextField {
  protected el: HTMLIfxTextFieldElement;
  @Output() ifxInput = new EventEmitter<IfxTextFieldCustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxTextFieldCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxTextField extends Components.IfxTextField {
  /**
   * Fired when the user types or the value changes.
   */
  ifxInput: EventEmitter<IfxTextFieldCustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['caption', 'cols', 'disabled', 'error', 'fullWidth', 'label', 'maxlength', 'name', 'placeholder', 'readOnly', 'required', 'resize', 'rows', 'success', 'value', 'wrap'],
  methods: ['reset']
})
@Component({
  selector: 'ifx-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['caption', 'cols', 'disabled', 'error', 'fullWidth', 'label', 'maxlength', 'name', 'placeholder', 'readOnly', 'required', 'resize', 'rows', 'success', 'value', 'wrap'],
  outputs: ['ifxInput'],
  standalone: false
})
export class IfxTextarea {
  protected el: HTMLIfxTextareaElement;
  @Output() ifxInput = new EventEmitter<IfxTextareaCustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxTextareaCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxTextarea extends Components.IfxTextarea {
  /**
   * Fired when the textarea value changes.
   */
  ifxInput: EventEmitter<IfxTextareaCustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['appendToBody', 'ariaLabelText', 'header', 'icon', 'position', 'text', 'variant']
})
@Component({
  selector: 'ifx-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appendToBody', 'ariaLabelText', 'header', 'icon', 'position', 'text', 'variant'],
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
  inputs: ['ariaLabelText', 'disableAllItems', 'expandAllItems', 'label']
})
@Component({
  selector: 'ifx-tree-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelText', 'disableAllItems', 'expandAllItems', 'label'],
  outputs: ['ifxTreeViewExpandAllChange', 'ifxTreeViewDisableAllChange'],
  standalone: false
})
export class IfxTreeView {
  protected el: HTMLIfxTreeViewElement;
  @Output() ifxTreeViewExpandAllChange = new EventEmitter<IfxTreeViewCustomEvent<boolean>>();
  @Output() ifxTreeViewDisableAllChange = new EventEmitter<IfxTreeViewCustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxTreeViewCustomEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxTreeView extends Components.IfxTreeView {
  /**
   * Fired when the “expand all items” state changes.
   */
  ifxTreeViewExpandAllChange: EventEmitter<IfxTreeViewCustomEvent<boolean>>;
  /**
   * Fired when the “disable all items” state changes.
   */
  ifxTreeViewDisableAllChange: EventEmitter<IfxTreeViewCustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['ariaLabelText', 'disableItem', 'expanded', 'initiallyExpanded', 'initiallySelected', 'value']
})
@Component({
  selector: 'ifx-tree-view-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelText', 'disableItem', 'expanded', 'initiallyExpanded', 'initiallySelected', 'value'],
  outputs: ['ifxTreeViewItemExpandChange', 'ifxTreeViewItemCheckChange', 'ifxTreeViewItemDisableChange'],
  standalone: false
})
export class IfxTreeViewItem {
  protected el: HTMLIfxTreeViewItemElement;
  @Output() ifxTreeViewItemExpandChange = new EventEmitter<IfxTreeViewItemCustomEvent<IIfxTreeViewItemTreeViewExpandChangeEvent>>();
  @Output() ifxTreeViewItemCheckChange = new EventEmitter<IfxTreeViewItemCustomEvent<IIfxTreeViewItemTreeViewCheckChangeEvent>>();
  @Output() ifxTreeViewItemDisableChange = new EventEmitter<IfxTreeViewItemCustomEvent<IIfxTreeViewItemTreeViewDisableChangeEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IfxTreeViewItemCustomEvent } from '@infineon/infineon-design-system-stencil';
import type { TreeViewExpandChangeEvent as IIfxTreeViewItemTreeViewExpandChangeEvent } from '@infineon/infineon-design-system-stencil';
import type { TreeViewCheckChangeEvent as IIfxTreeViewItemTreeViewCheckChangeEvent } from '@infineon/infineon-design-system-stencil';
import type { TreeViewDisableChangeEvent as IIfxTreeViewItemTreeViewDisableChangeEvent } from '@infineon/infineon-design-system-stencil';

export declare interface IfxTreeViewItem extends Components.IfxTreeViewItem {
  /**
   * Fired when the expanded / collapsed state of the item changes.
   */
  ifxTreeViewItemExpandChange: EventEmitter<IfxTreeViewItemCustomEvent<IIfxTreeViewItemTreeViewExpandChangeEvent>>;
  /**
   * Fired when the checked / selected state of the item changes.
   */
  ifxTreeViewItemCheckChange: EventEmitter<IfxTreeViewItemCustomEvent<IIfxTreeViewItemTreeViewCheckChangeEvent>>;
  /**
   * Fired when the disabled state of the item changes.
   */
  ifxTreeViewItemDisableChange: EventEmitter<IfxTreeViewItemCustomEvent<IIfxTreeViewItemTreeViewDisableChangeEvent>>;
}


