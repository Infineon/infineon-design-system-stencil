/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { TabOrientation } from "./components/tabs/tabs";
export namespace Components {
    interface IfxAccordion {
    }
    interface IfxAccordionItem {
        "caption": string;
        "close": () => Promise<void>;
        "isOpen": () => Promise<boolean>;
    }
    interface IfxAlert {
        "color": 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
        "icon": string;
        "overflowing": boolean;
    }
    interface IfxBadge {
    }
    interface IfxButton {
        "color": 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
        "disabled": boolean;
        "href": string;
        "icon": string;
        "position": string;
        "setFocus": () => Promise<void>;
        "size": string;
        "target": string;
        "variant": 'solid' | 'outline' | 'outline-text';
    }
    interface IfxCard {
        "alignment": string;
        "direction": string;
        "hasAll": boolean;
        "hasBtn": boolean;
        "hasDesc": boolean;
        "largeSize": boolean;
        "smallSize": boolean;
    }
    interface IfxCardHeadline {
        "direction": string;
        "hasDesc": boolean;
    }
    interface IfxCardOverline {
    }
    interface IfxCardText {
        "hasBtn": boolean;
    }
    interface IfxCheckbox {
        "checked": boolean;
        "disabled": boolean;
        "error": boolean;
    }
    interface IfxDropdown {
        "disabled": boolean;
        "filter": boolean;
        "icon": boolean;
        "label": string;
        "search": boolean;
        "size": 's' | 'm';
    }
    interface IfxDropdownDivider {
    }
    interface IfxDropdownItem {
        "checkable": boolean;
        "disabled": boolean;
        "icon": string;
        "label": string;
        "size": 's' | 'm';
        "value": string;
    }
    interface IfxDropdownMenu {
        "disabled": boolean;
        "filter": boolean;
        "icon": boolean;
        "label": string;
        "search": boolean;
        "size": 's' | 'm';
    }
    interface IfxFilterInput {
        "disabled": boolean;
        "filter": boolean;
        "icon": boolean;
        "label": string;
        "search": boolean;
        "size": 's' | 'm';
    }
    interface IfxFooter {
        "variant": string;
    }
    interface IfxFooterColumn {
    }
    interface IfxIcon {
        "icon": any;
        "ifxIcon": any;
    }
    interface IfxIconButton {
        "color": 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
        "disabled": boolean;
        "href": string;
        "icon": string;
        "setFocus": () => Promise<void>;
        "shape": string;
        "size": string;
        "target": string;
        "variant": 'solid' | 'outline' | 'outline-text';
    }
    interface IfxIconsPreview {
    }
    interface IfxLink {
        "bold": boolean;
        "color": string;
        "href": string;
        "target": string;
        "underline": any;
    }
    interface IfxListGroup {
        "bulletpoint": boolean;
        "flush": boolean;
        "notification": boolean;
    }
    interface IfxListItem {
        "badge": boolean;
        "badgeValue": number;
        "isFlush": boolean;
    }
    interface IfxListNotification {
        "creationTime": any;
        "isFlush": boolean;
        "titleText": string;
    }
    interface IfxMultiSelectInput {
        "Placeholder": string;
    }
    interface IfxMultiSelectInputItem {
        "content": string;
    }
    interface IfxNavbar {
        "applicationName": string;
    }
    interface IfxNavbarMenuItem {
        "hideLabel": boolean;
        "icon": string;
        "isProfile": boolean;
    }
    interface IfxNumberIndicator {
        "inverted": boolean;
    }
    interface IfxProgressBar {
        "label": string;
        "percentage": number;
        "showLabel": boolean;
        "size": string;
    }
    interface IfxRadioButton {
        "checked": boolean;
        "disabled": boolean;
        "error": boolean;
    }
    interface IfxRange {
        "disabled": boolean;
        "leftIcon": string;
        "leftText": string;
        "max": number;
        "min": number;
        "rightIcon": string;
        "rightText": string;
        "showPercentage": boolean;
        "value": number;
    }
    interface IfxSearchBar {
        "hideLabel": boolean;
        "icon": string;
        "isOpen": boolean;
        "showCloseButton": boolean;
        "size": string;
    }
    interface IfxSearchInput {
        "borderColor": 'light' | 'dark' | 'green';
        "disabled": boolean;
        "showDeleteIcon": boolean;
        "size": string;
        "width": string;
    }
    interface IfxSelectInput {
    }
    interface IfxSidebar {
    }
    interface IfxSidebarItem {
        "icon": string;
    }
    interface IfxSpinner {
        "size": string;
    }
    interface IfxStatus {
        "border": boolean;
        "color": 'orange' | 'ocean'| 'grey'| 'grey-200'| 'red'| 'green'| 'berry';
        "text": string;
    }
    interface IfxTab {
        "header": string;
    }
    interface IfxTabs {
        "orientation": TabOrientation;
        "small": boolean;
        "tabs": string[];
    }
    interface IfxTag {
        "text": string;
    }
    interface IfxTextInput {
        "disabled": boolean;
        "error": boolean;
        "errorMessage": string;
        "icon": boolean;
        "placeholder": string;
        "readonly": boolean;
        "success": boolean;
        "value": string;
    }
    interface IfxToggle {
        "checked": boolean;
    }
    interface InfineonIconStencil {
        "icon": any;
    }
}
export interface IfxAccordionItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIfxAccordionItemElement;
}
export interface IfxDropdownItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIfxDropdownItemElement;
}
export interface IfxDropdownMenuCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIfxDropdownMenuElement;
}
export interface IfxMultiSelectInputItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIfxMultiSelectInputItemElement;
}
export interface IfxProgressBarCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIfxProgressBarElement;
}
export interface IfxRangeCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIfxRangeElement;
}
export interface IfxSearchBarCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIfxSearchBarElement;
}
export interface IfxSearchInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIfxSearchInputElement;
}
export interface IfxTabCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIfxTabElement;
}
export interface IfxTabsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIfxTabsElement;
}
export interface IfxToggleCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIfxToggleElement;
}
declare global {
    interface HTMLIfxAccordionElement extends Components.IfxAccordion, HTMLStencilElement {
    }
    var HTMLIfxAccordionElement: {
        prototype: HTMLIfxAccordionElement;
        new (): HTMLIfxAccordionElement;
    };
    interface HTMLIfxAccordionItemElement extends Components.IfxAccordionItem, HTMLStencilElement {
    }
    var HTMLIfxAccordionItemElement: {
        prototype: HTMLIfxAccordionItemElement;
        new (): HTMLIfxAccordionItemElement;
    };
    interface HTMLIfxAlertElement extends Components.IfxAlert, HTMLStencilElement {
    }
    var HTMLIfxAlertElement: {
        prototype: HTMLIfxAlertElement;
        new (): HTMLIfxAlertElement;
    };
    interface HTMLIfxBadgeElement extends Components.IfxBadge, HTMLStencilElement {
    }
    var HTMLIfxBadgeElement: {
        prototype: HTMLIfxBadgeElement;
        new (): HTMLIfxBadgeElement;
    };
    interface HTMLIfxButtonElement extends Components.IfxButton, HTMLStencilElement {
    }
    var HTMLIfxButtonElement: {
        prototype: HTMLIfxButtonElement;
        new (): HTMLIfxButtonElement;
    };
    interface HTMLIfxCardElement extends Components.IfxCard, HTMLStencilElement {
    }
    var HTMLIfxCardElement: {
        prototype: HTMLIfxCardElement;
        new (): HTMLIfxCardElement;
    };
    interface HTMLIfxCardHeadlineElement extends Components.IfxCardHeadline, HTMLStencilElement {
    }
    var HTMLIfxCardHeadlineElement: {
        prototype: HTMLIfxCardHeadlineElement;
        new (): HTMLIfxCardHeadlineElement;
    };
    interface HTMLIfxCardOverlineElement extends Components.IfxCardOverline, HTMLStencilElement {
    }
    var HTMLIfxCardOverlineElement: {
        prototype: HTMLIfxCardOverlineElement;
        new (): HTMLIfxCardOverlineElement;
    };
    interface HTMLIfxCardTextElement extends Components.IfxCardText, HTMLStencilElement {
    }
    var HTMLIfxCardTextElement: {
        prototype: HTMLIfxCardTextElement;
        new (): HTMLIfxCardTextElement;
    };
    interface HTMLIfxCheckboxElement extends Components.IfxCheckbox, HTMLStencilElement {
    }
    var HTMLIfxCheckboxElement: {
        prototype: HTMLIfxCheckboxElement;
        new (): HTMLIfxCheckboxElement;
    };
    interface HTMLIfxDropdownElement extends Components.IfxDropdown, HTMLStencilElement {
    }
    var HTMLIfxDropdownElement: {
        prototype: HTMLIfxDropdownElement;
        new (): HTMLIfxDropdownElement;
    };
    interface HTMLIfxDropdownDividerElement extends Components.IfxDropdownDivider, HTMLStencilElement {
    }
    var HTMLIfxDropdownDividerElement: {
        prototype: HTMLIfxDropdownDividerElement;
        new (): HTMLIfxDropdownDividerElement;
    };
    interface HTMLIfxDropdownItemElement extends Components.IfxDropdownItem, HTMLStencilElement {
    }
    var HTMLIfxDropdownItemElement: {
        prototype: HTMLIfxDropdownItemElement;
        new (): HTMLIfxDropdownItemElement;
    };
    interface HTMLIfxDropdownMenuElement extends Components.IfxDropdownMenu, HTMLStencilElement {
    }
    var HTMLIfxDropdownMenuElement: {
        prototype: HTMLIfxDropdownMenuElement;
        new (): HTMLIfxDropdownMenuElement;
    };
    interface HTMLIfxFilterInputElement extends Components.IfxFilterInput, HTMLStencilElement {
    }
    var HTMLIfxFilterInputElement: {
        prototype: HTMLIfxFilterInputElement;
        new (): HTMLIfxFilterInputElement;
    };
    interface HTMLIfxFooterElement extends Components.IfxFooter, HTMLStencilElement {
    }
    var HTMLIfxFooterElement: {
        prototype: HTMLIfxFooterElement;
        new (): HTMLIfxFooterElement;
    };
    interface HTMLIfxFooterColumnElement extends Components.IfxFooterColumn, HTMLStencilElement {
    }
    var HTMLIfxFooterColumnElement: {
        prototype: HTMLIfxFooterColumnElement;
        new (): HTMLIfxFooterColumnElement;
    };
    interface HTMLIfxIconElement extends Components.IfxIcon, HTMLStencilElement {
    }
    var HTMLIfxIconElement: {
        prototype: HTMLIfxIconElement;
        new (): HTMLIfxIconElement;
    };
    interface HTMLIfxIconButtonElement extends Components.IfxIconButton, HTMLStencilElement {
    }
    var HTMLIfxIconButtonElement: {
        prototype: HTMLIfxIconButtonElement;
        new (): HTMLIfxIconButtonElement;
    };
    interface HTMLIfxIconsPreviewElement extends Components.IfxIconsPreview, HTMLStencilElement {
    }
    var HTMLIfxIconsPreviewElement: {
        prototype: HTMLIfxIconsPreviewElement;
        new (): HTMLIfxIconsPreviewElement;
    };
    interface HTMLIfxLinkElement extends Components.IfxLink, HTMLStencilElement {
    }
    var HTMLIfxLinkElement: {
        prototype: HTMLIfxLinkElement;
        new (): HTMLIfxLinkElement;
    };
    interface HTMLIfxListGroupElement extends Components.IfxListGroup, HTMLStencilElement {
    }
    var HTMLIfxListGroupElement: {
        prototype: HTMLIfxListGroupElement;
        new (): HTMLIfxListGroupElement;
    };
    interface HTMLIfxListItemElement extends Components.IfxListItem, HTMLStencilElement {
    }
    var HTMLIfxListItemElement: {
        prototype: HTMLIfxListItemElement;
        new (): HTMLIfxListItemElement;
    };
    interface HTMLIfxListNotificationElement extends Components.IfxListNotification, HTMLStencilElement {
    }
    var HTMLIfxListNotificationElement: {
        prototype: HTMLIfxListNotificationElement;
        new (): HTMLIfxListNotificationElement;
    };
    interface HTMLIfxMultiSelectInputElement extends Components.IfxMultiSelectInput, HTMLStencilElement {
    }
    var HTMLIfxMultiSelectInputElement: {
        prototype: HTMLIfxMultiSelectInputElement;
        new (): HTMLIfxMultiSelectInputElement;
    };
    interface HTMLIfxMultiSelectInputItemElement extends Components.IfxMultiSelectInputItem, HTMLStencilElement {
    }
    var HTMLIfxMultiSelectInputItemElement: {
        prototype: HTMLIfxMultiSelectInputItemElement;
        new (): HTMLIfxMultiSelectInputItemElement;
    };
    interface HTMLIfxNavbarElement extends Components.IfxNavbar, HTMLStencilElement {
    }
    var HTMLIfxNavbarElement: {
        prototype: HTMLIfxNavbarElement;
        new (): HTMLIfxNavbarElement;
    };
    interface HTMLIfxNavbarMenuItemElement extends Components.IfxNavbarMenuItem, HTMLStencilElement {
    }
    var HTMLIfxNavbarMenuItemElement: {
        prototype: HTMLIfxNavbarMenuItemElement;
        new (): HTMLIfxNavbarMenuItemElement;
    };
    interface HTMLIfxNumberIndicatorElement extends Components.IfxNumberIndicator, HTMLStencilElement {
    }
    var HTMLIfxNumberIndicatorElement: {
        prototype: HTMLIfxNumberIndicatorElement;
        new (): HTMLIfxNumberIndicatorElement;
    };
    interface HTMLIfxProgressBarElement extends Components.IfxProgressBar, HTMLStencilElement {
    }
    var HTMLIfxProgressBarElement: {
        prototype: HTMLIfxProgressBarElement;
        new (): HTMLIfxProgressBarElement;
    };
    interface HTMLIfxRadioButtonElement extends Components.IfxRadioButton, HTMLStencilElement {
    }
    var HTMLIfxRadioButtonElement: {
        prototype: HTMLIfxRadioButtonElement;
        new (): HTMLIfxRadioButtonElement;
    };
    interface HTMLIfxRangeElement extends Components.IfxRange, HTMLStencilElement {
    }
    var HTMLIfxRangeElement: {
        prototype: HTMLIfxRangeElement;
        new (): HTMLIfxRangeElement;
    };
    interface HTMLIfxSearchBarElement extends Components.IfxSearchBar, HTMLStencilElement {
    }
    var HTMLIfxSearchBarElement: {
        prototype: HTMLIfxSearchBarElement;
        new (): HTMLIfxSearchBarElement;
    };
    interface HTMLIfxSearchInputElement extends Components.IfxSearchInput, HTMLStencilElement {
    }
    var HTMLIfxSearchInputElement: {
        prototype: HTMLIfxSearchInputElement;
        new (): HTMLIfxSearchInputElement;
    };
    interface HTMLIfxSelectInputElement extends Components.IfxSelectInput, HTMLStencilElement {
    }
    var HTMLIfxSelectInputElement: {
        prototype: HTMLIfxSelectInputElement;
        new (): HTMLIfxSelectInputElement;
    };
    interface HTMLIfxSidebarElement extends Components.IfxSidebar, HTMLStencilElement {
    }
    var HTMLIfxSidebarElement: {
        prototype: HTMLIfxSidebarElement;
        new (): HTMLIfxSidebarElement;
    };
    interface HTMLIfxSidebarItemElement extends Components.IfxSidebarItem, HTMLStencilElement {
    }
    var HTMLIfxSidebarItemElement: {
        prototype: HTMLIfxSidebarItemElement;
        new (): HTMLIfxSidebarItemElement;
    };
    interface HTMLIfxSpinnerElement extends Components.IfxSpinner, HTMLStencilElement {
    }
    var HTMLIfxSpinnerElement: {
        prototype: HTMLIfxSpinnerElement;
        new (): HTMLIfxSpinnerElement;
    };
    interface HTMLIfxStatusElement extends Components.IfxStatus, HTMLStencilElement {
    }
    var HTMLIfxStatusElement: {
        prototype: HTMLIfxStatusElement;
        new (): HTMLIfxStatusElement;
    };
    interface HTMLIfxTabElement extends Components.IfxTab, HTMLStencilElement {
    }
    var HTMLIfxTabElement: {
        prototype: HTMLIfxTabElement;
        new (): HTMLIfxTabElement;
    };
    interface HTMLIfxTabsElement extends Components.IfxTabs, HTMLStencilElement {
    }
    var HTMLIfxTabsElement: {
        prototype: HTMLIfxTabsElement;
        new (): HTMLIfxTabsElement;
    };
    interface HTMLIfxTagElement extends Components.IfxTag, HTMLStencilElement {
    }
    var HTMLIfxTagElement: {
        prototype: HTMLIfxTagElement;
        new (): HTMLIfxTagElement;
    };
    interface HTMLIfxTextInputElement extends Components.IfxTextInput, HTMLStencilElement {
    }
    var HTMLIfxTextInputElement: {
        prototype: HTMLIfxTextInputElement;
        new (): HTMLIfxTextInputElement;
    };
    interface HTMLIfxToggleElement extends Components.IfxToggle, HTMLStencilElement {
    }
    var HTMLIfxToggleElement: {
        prototype: HTMLIfxToggleElement;
        new (): HTMLIfxToggleElement;
    };
    interface HTMLInfineonIconStencilElement extends Components.InfineonIconStencil, HTMLStencilElement {
    }
    var HTMLInfineonIconStencilElement: {
        prototype: HTMLInfineonIconStencilElement;
        new (): HTMLInfineonIconStencilElement;
    };
    interface HTMLElementTagNameMap {
        "ifx-accordion": HTMLIfxAccordionElement;
        "ifx-accordion-item": HTMLIfxAccordionItemElement;
        "ifx-alert": HTMLIfxAlertElement;
        "ifx-badge": HTMLIfxBadgeElement;
        "ifx-button": HTMLIfxButtonElement;
        "ifx-card": HTMLIfxCardElement;
        "ifx-card-headline": HTMLIfxCardHeadlineElement;
        "ifx-card-overline": HTMLIfxCardOverlineElement;
        "ifx-card-text": HTMLIfxCardTextElement;
        "ifx-checkbox": HTMLIfxCheckboxElement;
        "ifx-dropdown": HTMLIfxDropdownElement;
        "ifx-dropdown-divider": HTMLIfxDropdownDividerElement;
        "ifx-dropdown-item": HTMLIfxDropdownItemElement;
        "ifx-dropdown-menu": HTMLIfxDropdownMenuElement;
        "ifx-filter-input": HTMLIfxFilterInputElement;
        "ifx-footer": HTMLIfxFooterElement;
        "ifx-footer-column": HTMLIfxFooterColumnElement;
        "ifx-icon": HTMLIfxIconElement;
        "ifx-icon-button": HTMLIfxIconButtonElement;
        "ifx-icons-preview": HTMLIfxIconsPreviewElement;
        "ifx-link": HTMLIfxLinkElement;
        "ifx-list-group": HTMLIfxListGroupElement;
        "ifx-list-item": HTMLIfxListItemElement;
        "ifx-list-notification": HTMLIfxListNotificationElement;
        "ifx-multi-select-input": HTMLIfxMultiSelectInputElement;
        "ifx-multi-select-input-item": HTMLIfxMultiSelectInputItemElement;
        "ifx-navbar": HTMLIfxNavbarElement;
        "ifx-navbar-menu-item": HTMLIfxNavbarMenuItemElement;
        "ifx-number-indicator": HTMLIfxNumberIndicatorElement;
        "ifx-progress-bar": HTMLIfxProgressBarElement;
        "ifx-radio-button": HTMLIfxRadioButtonElement;
        "ifx-range": HTMLIfxRangeElement;
        "ifx-search-bar": HTMLIfxSearchBarElement;
        "ifx-search-input": HTMLIfxSearchInputElement;
        "ifx-select-input": HTMLIfxSelectInputElement;
        "ifx-sidebar": HTMLIfxSidebarElement;
        "ifx-sidebar-item": HTMLIfxSidebarItemElement;
        "ifx-spinner": HTMLIfxSpinnerElement;
        "ifx-status": HTMLIfxStatusElement;
        "ifx-tab": HTMLIfxTabElement;
        "ifx-tabs": HTMLIfxTabsElement;
        "ifx-tag": HTMLIfxTagElement;
        "ifx-text-input": HTMLIfxTextInputElement;
        "ifx-toggle": HTMLIfxToggleElement;
        "infineon-icon-stencil": HTMLInfineonIconStencilElement;
    }
}
declare namespace LocalJSX {
    interface IfxAccordion {
    }
    interface IfxAccordionItem {
        "caption"?: string;
        "onItemClosed"?: (event: IfxAccordionItemCustomEvent<any>) => void;
        "onItemOpened"?: (event: IfxAccordionItemCustomEvent<any>) => void;
    }
    interface IfxAlert {
        "color"?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
        "icon"?: string;
        "overflowing"?: boolean;
    }
    interface IfxBadge {
    }
    interface IfxButton {
        "color"?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
        "disabled"?: boolean;
        "href"?: string;
        "icon"?: string;
        "position"?: string;
        "size"?: string;
        "target"?: string;
        "variant"?: 'solid' | 'outline' | 'outline-text';
    }
    interface IfxCard {
        "alignment"?: string;
        "direction"?: string;
        "hasAll"?: boolean;
        "hasBtn"?: boolean;
        "hasDesc"?: boolean;
        "largeSize"?: boolean;
        "smallSize"?: boolean;
    }
    interface IfxCardHeadline {
        "direction"?: string;
        "hasDesc"?: boolean;
    }
    interface IfxCardOverline {
    }
    interface IfxCardText {
        "hasBtn"?: boolean;
    }
    interface IfxCheckbox {
        "checked"?: boolean;
        "disabled"?: boolean;
        "error"?: boolean;
    }
    interface IfxDropdown {
        "disabled"?: boolean;
        "filter"?: boolean;
        "icon"?: boolean;
        "label"?: string;
        "search"?: boolean;
        "size"?: 's' | 'm';
    }
    interface IfxDropdownDivider {
    }
    interface IfxDropdownItem {
        "checkable"?: boolean;
        "disabled"?: boolean;
        "icon"?: string;
        "label"?: string;
        "onItemValues"?: (event: IfxDropdownItemCustomEvent<Object>) => void;
        "size"?: 's' | 'm';
        "value"?: string;
    }
    interface IfxDropdownMenu {
        "disabled"?: boolean;
        "filter"?: boolean;
        "icon"?: boolean;
        "label"?: string;
        "onSelectValues"?: (event: IfxDropdownMenuCustomEvent<Object>) => void;
        "search"?: boolean;
        "size"?: 's' | 'm';
    }
    interface IfxFilterInput {
        "disabled"?: boolean;
        "filter"?: boolean;
        "icon"?: boolean;
        "label"?: string;
        "search"?: boolean;
        "size"?: 's' | 'm';
    }
    interface IfxFooter {
        "variant"?: string;
    }
    interface IfxFooterColumn {
    }
    interface IfxIcon {
        "icon"?: any;
        "ifxIcon"?: any;
    }
    interface IfxIconButton {
        "color"?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
        "disabled"?: boolean;
        "href"?: string;
        "icon"?: string;
        "shape"?: string;
        "size"?: string;
        "target"?: string;
        "variant"?: 'solid' | 'outline' | 'outline-text';
    }
    interface IfxIconsPreview {
    }
    interface IfxLink {
        "bold"?: boolean;
        "color"?: string;
        "href"?: string;
        "target"?: string;
        "underline"?: any;
    }
    interface IfxListGroup {
        "bulletpoint"?: boolean;
        "flush"?: boolean;
        "notification"?: boolean;
    }
    interface IfxListItem {
        "badge"?: boolean;
        "badgeValue"?: number;
        "isFlush"?: boolean;
    }
    interface IfxListNotification {
        "creationTime"?: any;
        "isFlush"?: boolean;
        "titleText"?: string;
    }
    interface IfxMultiSelectInput {
        "Placeholder"?: string;
    }
    interface IfxMultiSelectInputItem {
        "content"?: string;
        "onClosed"?: (event: IfxMultiSelectInputItemCustomEvent<boolean>) => void;
    }
    interface IfxNavbar {
        "applicationName"?: string;
    }
    interface IfxNavbarMenuItem {
        "hideLabel"?: boolean;
        "icon"?: string;
        "isProfile"?: boolean;
    }
    interface IfxNumberIndicator {
        "inverted"?: boolean;
    }
    interface IfxProgressBar {
        "label"?: string;
        "onPercentageChange"?: (event: IfxProgressBarCustomEvent<CustomEvent>) => void;
        "percentage"?: number;
        "showLabel"?: boolean;
        "size"?: string;
    }
    interface IfxRadioButton {
        "checked"?: boolean;
        "disabled"?: boolean;
        "error"?: boolean;
    }
    interface IfxRange {
        "disabled"?: boolean;
        "leftIcon"?: string;
        "leftText"?: string;
        "max"?: number;
        "min"?: number;
        "onValueChanged"?: (event: IfxRangeCustomEvent<number>) => void;
        "rightIcon"?: string;
        "rightText"?: string;
        "showPercentage"?: boolean;
        "value"?: number;
    }
    interface IfxSearchBar {
        "hideLabel"?: boolean;
        "icon"?: string;
        "isOpen"?: boolean;
        "onSearch"?: (event: IfxSearchBarCustomEvent<string>) => void;
        "showCloseButton"?: boolean;
        "size"?: string;
    }
    interface IfxSearchInput {
        "borderColor"?: 'light' | 'dark' | 'green';
        "disabled"?: boolean;
        "onSearch"?: (event: IfxSearchInputCustomEvent<string>) => void;
        "showDeleteIcon"?: boolean;
        "size"?: string;
        "width"?: string;
    }
    interface IfxSelectInput {
    }
    interface IfxSidebar {
    }
    interface IfxSidebarItem {
        "icon"?: string;
    }
    interface IfxSpinner {
        "size"?: string;
    }
    interface IfxStatus {
        "border"?: boolean;
        "color"?: 'orange' | 'ocean'| 'grey'| 'grey-200'| 'red'| 'green'| 'berry';
        "text"?: string;
    }
    interface IfxTab {
        "header"?: string;
        "onTabBecameActive"?: (event: IfxTabCustomEvent<any>) => void;
        "onTabBecameInactive"?: (event: IfxTabCustomEvent<any>) => void;
    }
    interface IfxTabs {
        "onTabChange"?: (event: IfxTabsCustomEvent<any>) => void;
        "orientation"?: TabOrientation;
        "small"?: boolean;
        "tabs"?: string[];
    }
    interface IfxTag {
        "text"?: string;
    }
    interface IfxTextInput {
        "disabled"?: boolean;
        "error"?: boolean;
        "errorMessage"?: string;
        "icon"?: boolean;
        "placeholder"?: string;
        "readonly"?: boolean;
        "success"?: boolean;
        "value"?: string;
    }
    interface IfxToggle {
        "checked"?: boolean;
        "onValueChanged"?: (event: IfxToggleCustomEvent<boolean>) => void;
    }
    interface InfineonIconStencil {
        "icon"?: any;
    }
    interface IntrinsicElements {
        "ifx-accordion": IfxAccordion;
        "ifx-accordion-item": IfxAccordionItem;
        "ifx-alert": IfxAlert;
        "ifx-badge": IfxBadge;
        "ifx-button": IfxButton;
        "ifx-card": IfxCard;
        "ifx-card-headline": IfxCardHeadline;
        "ifx-card-overline": IfxCardOverline;
        "ifx-card-text": IfxCardText;
        "ifx-checkbox": IfxCheckbox;
        "ifx-dropdown": IfxDropdown;
        "ifx-dropdown-divider": IfxDropdownDivider;
        "ifx-dropdown-item": IfxDropdownItem;
        "ifx-dropdown-menu": IfxDropdownMenu;
        "ifx-filter-input": IfxFilterInput;
        "ifx-footer": IfxFooter;
        "ifx-footer-column": IfxFooterColumn;
        "ifx-icon": IfxIcon;
        "ifx-icon-button": IfxIconButton;
        "ifx-icons-preview": IfxIconsPreview;
        "ifx-link": IfxLink;
        "ifx-list-group": IfxListGroup;
        "ifx-list-item": IfxListItem;
        "ifx-list-notification": IfxListNotification;
        "ifx-multi-select-input": IfxMultiSelectInput;
        "ifx-multi-select-input-item": IfxMultiSelectInputItem;
        "ifx-navbar": IfxNavbar;
        "ifx-navbar-menu-item": IfxNavbarMenuItem;
        "ifx-number-indicator": IfxNumberIndicator;
        "ifx-progress-bar": IfxProgressBar;
        "ifx-radio-button": IfxRadioButton;
        "ifx-range": IfxRange;
        "ifx-search-bar": IfxSearchBar;
        "ifx-search-input": IfxSearchInput;
        "ifx-select-input": IfxSelectInput;
        "ifx-sidebar": IfxSidebar;
        "ifx-sidebar-item": IfxSidebarItem;
        "ifx-spinner": IfxSpinner;
        "ifx-status": IfxStatus;
        "ifx-tab": IfxTab;
        "ifx-tabs": IfxTabs;
        "ifx-tag": IfxTag;
        "ifx-text-input": IfxTextInput;
        "ifx-toggle": IfxToggle;
        "infineon-icon-stencil": InfineonIconStencil;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ifx-accordion": LocalJSX.IfxAccordion & JSXBase.HTMLAttributes<HTMLIfxAccordionElement>;
            "ifx-accordion-item": LocalJSX.IfxAccordionItem & JSXBase.HTMLAttributes<HTMLIfxAccordionItemElement>;
            "ifx-alert": LocalJSX.IfxAlert & JSXBase.HTMLAttributes<HTMLIfxAlertElement>;
            "ifx-badge": LocalJSX.IfxBadge & JSXBase.HTMLAttributes<HTMLIfxBadgeElement>;
            "ifx-button": LocalJSX.IfxButton & JSXBase.HTMLAttributes<HTMLIfxButtonElement>;
            "ifx-card": LocalJSX.IfxCard & JSXBase.HTMLAttributes<HTMLIfxCardElement>;
            "ifx-card-headline": LocalJSX.IfxCardHeadline & JSXBase.HTMLAttributes<HTMLIfxCardHeadlineElement>;
            "ifx-card-overline": LocalJSX.IfxCardOverline & JSXBase.HTMLAttributes<HTMLIfxCardOverlineElement>;
            "ifx-card-text": LocalJSX.IfxCardText & JSXBase.HTMLAttributes<HTMLIfxCardTextElement>;
            "ifx-checkbox": LocalJSX.IfxCheckbox & JSXBase.HTMLAttributes<HTMLIfxCheckboxElement>;
            "ifx-dropdown": LocalJSX.IfxDropdown & JSXBase.HTMLAttributes<HTMLIfxDropdownElement>;
            "ifx-dropdown-divider": LocalJSX.IfxDropdownDivider & JSXBase.HTMLAttributes<HTMLIfxDropdownDividerElement>;
            "ifx-dropdown-item": LocalJSX.IfxDropdownItem & JSXBase.HTMLAttributes<HTMLIfxDropdownItemElement>;
            "ifx-dropdown-menu": LocalJSX.IfxDropdownMenu & JSXBase.HTMLAttributes<HTMLIfxDropdownMenuElement>;
            "ifx-filter-input": LocalJSX.IfxFilterInput & JSXBase.HTMLAttributes<HTMLIfxFilterInputElement>;
            "ifx-footer": LocalJSX.IfxFooter & JSXBase.HTMLAttributes<HTMLIfxFooterElement>;
            "ifx-footer-column": LocalJSX.IfxFooterColumn & JSXBase.HTMLAttributes<HTMLIfxFooterColumnElement>;
            "ifx-icon": LocalJSX.IfxIcon & JSXBase.HTMLAttributes<HTMLIfxIconElement>;
            "ifx-icon-button": LocalJSX.IfxIconButton & JSXBase.HTMLAttributes<HTMLIfxIconButtonElement>;
            "ifx-icons-preview": LocalJSX.IfxIconsPreview & JSXBase.HTMLAttributes<HTMLIfxIconsPreviewElement>;
            "ifx-link": LocalJSX.IfxLink & JSXBase.HTMLAttributes<HTMLIfxLinkElement>;
            "ifx-list-group": LocalJSX.IfxListGroup & JSXBase.HTMLAttributes<HTMLIfxListGroupElement>;
            "ifx-list-item": LocalJSX.IfxListItem & JSXBase.HTMLAttributes<HTMLIfxListItemElement>;
            "ifx-list-notification": LocalJSX.IfxListNotification & JSXBase.HTMLAttributes<HTMLIfxListNotificationElement>;
            "ifx-multi-select-input": LocalJSX.IfxMultiSelectInput & JSXBase.HTMLAttributes<HTMLIfxMultiSelectInputElement>;
            "ifx-multi-select-input-item": LocalJSX.IfxMultiSelectInputItem & JSXBase.HTMLAttributes<HTMLIfxMultiSelectInputItemElement>;
            "ifx-navbar": LocalJSX.IfxNavbar & JSXBase.HTMLAttributes<HTMLIfxNavbarElement>;
            "ifx-navbar-menu-item": LocalJSX.IfxNavbarMenuItem & JSXBase.HTMLAttributes<HTMLIfxNavbarMenuItemElement>;
            "ifx-number-indicator": LocalJSX.IfxNumberIndicator & JSXBase.HTMLAttributes<HTMLIfxNumberIndicatorElement>;
            "ifx-progress-bar": LocalJSX.IfxProgressBar & JSXBase.HTMLAttributes<HTMLIfxProgressBarElement>;
            "ifx-radio-button": LocalJSX.IfxRadioButton & JSXBase.HTMLAttributes<HTMLIfxRadioButtonElement>;
            "ifx-range": LocalJSX.IfxRange & JSXBase.HTMLAttributes<HTMLIfxRangeElement>;
            "ifx-search-bar": LocalJSX.IfxSearchBar & JSXBase.HTMLAttributes<HTMLIfxSearchBarElement>;
            "ifx-search-input": LocalJSX.IfxSearchInput & JSXBase.HTMLAttributes<HTMLIfxSearchInputElement>;
            "ifx-select-input": LocalJSX.IfxSelectInput & JSXBase.HTMLAttributes<HTMLIfxSelectInputElement>;
            "ifx-sidebar": LocalJSX.IfxSidebar & JSXBase.HTMLAttributes<HTMLIfxSidebarElement>;
            "ifx-sidebar-item": LocalJSX.IfxSidebarItem & JSXBase.HTMLAttributes<HTMLIfxSidebarItemElement>;
            "ifx-spinner": LocalJSX.IfxSpinner & JSXBase.HTMLAttributes<HTMLIfxSpinnerElement>;
            "ifx-status": LocalJSX.IfxStatus & JSXBase.HTMLAttributes<HTMLIfxStatusElement>;
            "ifx-tab": LocalJSX.IfxTab & JSXBase.HTMLAttributes<HTMLIfxTabElement>;
            "ifx-tabs": LocalJSX.IfxTabs & JSXBase.HTMLAttributes<HTMLIfxTabsElement>;
            "ifx-tag": LocalJSX.IfxTag & JSXBase.HTMLAttributes<HTMLIfxTagElement>;
            "ifx-text-input": LocalJSX.IfxTextInput & JSXBase.HTMLAttributes<HTMLIfxTextInputElement>;
            "ifx-toggle": LocalJSX.IfxToggle & JSXBase.HTMLAttributes<HTMLIfxToggleElement>;
            "infineon-icon-stencil": LocalJSX.InfineonIconStencil & JSXBase.HTMLAttributes<HTMLInfineonIconStencilElement>;
        }
    }
}
