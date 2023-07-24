"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IfxTag = exports.IfxTabs = exports.IfxTab = exports.IfxSwitch = exports.IfxStatus = exports.IfxSpinner = exports.IfxSidebarItem = exports.IfxSidebar = exports.IfxSelectInput = exports.IfxSearchInput = exports.IfxSearchBar = exports.IfxRange = exports.IfxRadioButton = exports.IfxProgressBar = exports.IfxNumberIndicator = exports.IfxNavbarMenuItem = exports.IfxNavbar = exports.IfxMultiSelectInputItem = exports.IfxMultiSelectInput = exports.IfxModal = exports.IfxListNotification = exports.IfxListItem = exports.IfxListGroup = exports.IfxLink = exports.IfxIconsPreview = exports.IfxIconButton = exports.IfxIcon = exports.IfxFooterColumn = exports.IfxFooter = exports.IfxFilterInput = exports.IfxFaq = exports.IfxExample = exports.IfxDropdownMenu = exports.IfxDropdownItem = exports.IfxDropdownDivider = exports.IfxDropdown = exports.IfxChip = exports.IfxCheckbox = exports.IfxCardText = exports.IfxCardOverline = exports.IfxCardHeadline = exports.IfxCard = exports.IfxButton = exports.IfxBreadcrumbItemLabel = exports.IfxBreadcrumbItem = exports.IfxBreadcrumb = exports.IfxBadge = exports.IfxAlert = exports.IfxAccordionItem = exports.IfxAccordion = void 0;
exports.IfxTextInput = void 0;
const utils_1 = require("./vue-component-lib/utils");
exports.IfxAccordion = (0, utils_1.defineContainer)('ifx-accordion', undefined, [
    'autoCollapse'
]);
exports.IfxAccordionItem = (0, utils_1.defineContainer)('ifx-accordion-item', undefined, [
    'caption',
    'ifxItemOpen',
    'ifxItemClose'
]);
exports.IfxAlert = (0, utils_1.defineContainer)('ifx-alert', undefined, [
    'color',
    'icon',
    'ifxClose'
]);
exports.IfxBadge = (0, utils_1.defineContainer)('ifx-badge', undefined);
exports.IfxBreadcrumb = (0, utils_1.defineContainer)('ifx-breadcrumb', undefined);
exports.IfxBreadcrumbItem = (0, utils_1.defineContainer)('ifx-breadcrumb-item', undefined);
exports.IfxBreadcrumbItemLabel = (0, utils_1.defineContainer)('ifx-breadcrumb-item-label', undefined, [
    'icon',
    'url',
    'target',
    'breadcrumbMenuIconWrapper'
]);
exports.IfxButton = (0, utils_1.defineContainer)('ifx-button', undefined, [
    'variant',
    'color',
    'size',
    'disabled',
    'icon',
    'position',
    'href',
    'target',
    'type'
]);
exports.IfxCard = (0, utils_1.defineContainer)('ifx-card', undefined, [
    'direction',
    'alignment',
    'hasAll',
    'largeSize',
    'smallSize'
]);
exports.IfxCardHeadline = (0, utils_1.defineContainer)('ifx-card-headline', undefined, [
    'direction',
    'hasDesc'
]);
exports.IfxCardOverline = (0, utils_1.defineContainer)('ifx-card-overline', undefined);
exports.IfxCardText = (0, utils_1.defineContainer)('ifx-card-text', undefined, [
    'hasBtn'
]);
exports.IfxCheckbox = (0, utils_1.defineContainer)('ifx-checkbox', undefined, [
    'disabled',
    'value',
    'error',
    'name',
    'ifxChange'
]);
exports.IfxChip = (0, utils_1.defineContainer)('ifx-chip', undefined, [
    'placeholder'
]);
exports.IfxDropdown = (0, utils_1.defineContainer)('ifx-dropdown', undefined, [
    'label',
    'size',
    'disabled',
    'icon',
    'search',
    'filter'
]);
exports.IfxDropdownDivider = (0, utils_1.defineContainer)('ifx-dropdown-divider', undefined);
exports.IfxDropdownItem = (0, utils_1.defineContainer)('ifx-dropdown-item', undefined, [
    'label',
    'size',
    'disabled',
    'icon',
    'checkable',
    'value',
    'url',
    'target',
    'itemValues'
]);
exports.IfxDropdownMenu = (0, utils_1.defineContainer)('ifx-dropdown-menu', undefined, [
    'label',
    'size',
    'disabled',
    'icon',
    'search',
    'filter',
    'selectValues'
]);
exports.IfxExample = (0, utils_1.defineContainer)('ifx-example', undefined, [
    'variant',
    'color',
    'size',
    'disabled',
    'icon',
    'position',
    'href',
    'target',
    'type'
]);
exports.IfxFaq = (0, utils_1.defineContainer)('ifx-faq', undefined);
exports.IfxFilterInput = (0, utils_1.defineContainer)('ifx-filter-input', undefined, [
    'label',
    'size',
    'disabled',
    'icon',
    'search',
    'filter',
    'selectValue'
]);
exports.IfxFooter = (0, utils_1.defineContainer)('ifx-footer', undefined, [
    'variant'
]);
exports.IfxFooterColumn = (0, utils_1.defineContainer)('ifx-footer-column', undefined);
exports.IfxIcon = (0, utils_1.defineContainer)('ifx-icon', undefined, [
    'icon',
    'ifxIcon',
    'consoleError'
]);
exports.IfxIconButton = (0, utils_1.defineContainer)('ifx-icon-button', undefined, [
    'variant',
    'color',
    'size',
    'disabled',
    'icon',
    'href',
    'target',
    'shape'
]);
exports.IfxIconsPreview = (0, utils_1.defineContainer)('ifx-icons-preview', undefined);
exports.IfxLink = (0, utils_1.defineContainer)('ifx-link', undefined, [
    'href',
    'target',
    'color',
    'bold',
    'underline'
]);
exports.IfxListGroup = (0, utils_1.defineContainer)('ifx-list-group', undefined, [
    'flush',
    'bulletpoint',
    'notification'
]);
exports.IfxListItem = (0, utils_1.defineContainer)('ifx-list-item', undefined, [
    'isFlush',
    'badge',
    'badgeValue'
]);
exports.IfxListNotification = (0, utils_1.defineContainer)('ifx-list-notification', undefined, [
    'titleText',
    'isFlush',
    'creationTime'
]);
exports.IfxModal = (0, utils_1.defineContainer)('ifx-modal', undefined, [
    'caption',
    'closeOnOverlayClick',
    'alertColor',
    'alertIcon',
    'modalOpen',
    'modalClose',
    'okButtonClick',
    'cancelButtonClick'
]);
exports.IfxMultiSelectInput = (0, utils_1.defineContainer)('ifx-multi-select-input', undefined, [
    'Placeholder'
]);
exports.IfxMultiSelectInputItem = (0, utils_1.defineContainer)('ifx-multi-select-input-item', undefined, [
    'content',
    'closed'
]);
exports.IfxNavbar = (0, utils_1.defineContainer)('ifx-navbar', undefined, [
    'applicationName'
]);
exports.IfxNavbarMenuItem = (0, utils_1.defineContainer)('ifx-navbar-menu-item', undefined, [
    'isProfile',
    'hideLabel',
    'icon'
]);
exports.IfxNumberIndicator = (0, utils_1.defineContainer)('ifx-number-indicator', undefined, [
    'inverted'
]);
exports.IfxProgressBar = (0, utils_1.defineContainer)('ifx-progress-bar', undefined, [
    'value',
    'label',
    'size',
    'showLabel'
]);
exports.IfxRadioButton = (0, utils_1.defineContainer)('ifx-radio-button', undefined, [
    'disabled',
    'value',
    'error',
    'size',
    'ifxChange'
]);
exports.IfxRange = (0, utils_1.defineContainer)('ifx-range', undefined, [
    'min',
    'max',
    'value',
    'disabled',
    'showPercentage',
    'leftIcon',
    'rightIcon',
    'leftText',
    'rightText',
    'ifxChanged'
]);
exports.IfxSearchBar = (0, utils_1.defineContainer)('ifx-search-bar', undefined, [
    'icon',
    'showCloseButton',
    'isOpen',
    'hideLabel',
    'size',
    'value',
    'ifxInput'
], 'value', 'ifxInput');
exports.IfxSearchInput = (0, utils_1.defineContainer)('ifx-search-input', undefined, [
    'value',
    'width',
    'showDeleteIcon',
    'disabled',
    'borderColor',
    'size',
    'ifxInput'
], 'value', 'ifxInput');
exports.IfxSelectInput = (0, utils_1.defineContainer)('ifx-select-input', undefined);
exports.IfxSidebar = (0, utils_1.defineContainer)('ifx-sidebar', undefined, [
    'applicationName'
]);
exports.IfxSidebarItem = (0, utils_1.defineContainer)('ifx-sidebar-item', undefined, [
    'icon',
    'href',
    'target'
]);
exports.IfxSpinner = (0, utils_1.defineContainer)('ifx-spinner', undefined, [
    'size',
    'variant'
]);
exports.IfxStatus = (0, utils_1.defineContainer)('ifx-status', undefined, [
    'label',
    'border',
    'color'
]);
exports.IfxSwitch = (0, utils_1.defineContainer)('ifx-switch', undefined, [
    'value',
    'name',
    'ifxChange'
]);
exports.IfxTab = (0, utils_1.defineContainer)('ifx-tab', undefined, [
    'header',
    'tabBecameActive',
    'tabBecameInactive'
]);
exports.IfxTabs = (0, utils_1.defineContainer)('ifx-tabs', undefined, [
    'tabs',
    'orientation',
    'small',
    'ifxTabIndex'
]);
exports.IfxTag = (0, utils_1.defineContainer)('ifx-tag', undefined);
exports.IfxTextInput = (0, utils_1.defineContainer)('ifx-text-input', undefined, [
    'placeholder',
    'value',
    'error',
    'errorMessage',
    'success',
    'disabled',
    'readonly',
    'icon',
    'ifxInput'
], 'value', 'ifxInput');
//# sourceMappingURL=components.js.map