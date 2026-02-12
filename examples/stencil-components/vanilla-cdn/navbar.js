import { navigate } from './router.js';

const navbar = document.getElementById('navbar');

navbar.innerHTML = `
  <ifx-navbar show-logo-and-appname="true" application-name="VANILLA APP" fixed="false" logo-href="http://google.com"
    logo-href-target="_self">

    <ifx-navbar-item icon="calendar16" slot="left-item" target="" href="">
        Components A-E
        <ifx-navbar-item onclick="window.__nav('accordion')">Accordion</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('action-list')">Action List</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('alert')">Alert</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('breadcrumb')">Breadcrumb</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('button')">Button</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('card')">Card</ifx-navbar-item>
        <ifx-navbar-item>
            Checkbox
            <ifx-navbar-item onclick="window.__nav('checkbox')">Checkbox</ifx-navbar-item>
            <ifx-navbar-item onclick="window.__nav('checkbox-group')">Checkbox Group</ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('chip')">Chip</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('content-switcher')">Content-Switcher</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('date-picker')">Date-Picker</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('dropdown')">Dropdown</ifx-navbar-item>
    </ifx-navbar-item>

    <ifx-navbar-item icon="calendar16" slot="left-item" target="" href="">
        Components F-R
        <ifx-navbar-item onclick="window.__nav('file-upload')">File Upload</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('footer')">Footer</ifx-navbar-item>
        <ifx-navbar-item>
            Icon
            <ifx-navbar-item onclick="window.__nav('icon')">Icon</ifx-navbar-item>
            <ifx-navbar-item onclick="window.__nav('icon-button')">Icon Button</ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('indicator')">Indicator</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('link')">Link</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('modal')">Modal</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('notification')">Notification</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('pagination')">Pagination</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('popover')">Popover</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('progress-bar')">Progress Bar</ifx-navbar-item>
        <ifx-navbar-item>
            Radio Button
            <ifx-navbar-item onclick="window.__nav('radio-button')">Radio Button</ifx-navbar-item>
            <ifx-navbar-item onclick="window.__nav('radio-button-group')">Radio Button Group</ifx-navbar-item>
        </ifx-navbar-item>
    </ifx-navbar-item>

    <ifx-navbar-item icon="calendar16" slot="left-item" target="" href="">
        Components S-Z
        <ifx-navbar-item>
            Search
            <ifx-navbar-item onclick="window.__nav('search-bar')">Search Bar</ifx-navbar-item>
            <ifx-navbar-item onclick="window.__nav('search-field')">Search Field</ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('segmented-control')">Segmented Control</ifx-navbar-item>
        <ifx-navbar-item>
            Select
            <ifx-navbar-item onclick="window.__nav('single-select')">Single Select</ifx-navbar-item>
            <ifx-navbar-item onclick="window.__nav('multi-select')">Multi Select</ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('sidebar')">Sidebar</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('slider')">Slider</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('spinner')">Spinner</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('status')">Status</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('stepper')">Stepper</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('switch')">Switch</ifx-navbar-item>
        <ifx-navbar-item>
            Table
            <ifx-navbar-item onclick="window.__nav('basic-table')">Basic Table</ifx-navbar-item>
            <ifx-navbar-item onclick="window.__nav('advanced-table')">Advanced Table</ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('tabs')">Tabs</ifx-navbar-item>
        <ifx-navbar-item>
            Text
            <ifx-navbar-item onclick="window.__nav('text-field')">Text Field</ifx-navbar-item>
            <ifx-navbar-item onclick="window.__nav('textarea')">Textarea</ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('tooltip')">Tooltip</ifx-navbar-item>
        <ifx-navbar-item onclick="window.__nav('tree-view')">Tree View</ifx-navbar-item>
    </ifx-navbar-item>

    <ifx-search-bar id="myBar" slot="search-bar-left" is-open="false"></ifx-search-bar>

    <ifx-navbar-item slot="right-item" target="_blank" href="http://google.com" hide-on-mobile="false"
        show-label="false" icon="cartf16">Right Item</ifx-navbar-item>
    <ifx-navbar-item slot="right-item" hide-on-mobile="true" show-label='true' icon="airplane16">
        Right Item
        <ifx-navbar-item>
            Nested one
            <ifx-navbar-item>
                Nested one
                <ifx-navbar-item>
                    Nested one
                    <ifx-navbar-item>Final one</ifx-navbar-item>
                </ifx-navbar-item>
            </ifx-navbar-item>
        </ifx-navbar-item>
    </ifx-navbar-item>

    <ifx-navbar-profile slot="right-item"
        image-url="https://i.pinimg.com/originals/82/d4/92/82d4926dcf09dd4c73eb1a6c0300c135.jpg" show-label="true"
        href="" target="_blank">
        User
        <ifx-navbar-item>Item</ifx-navbar-item>
        <ifx-navbar-item>Item</ifx-navbar-item>
        <ifx-navbar-item>Item</ifx-navbar-item>
        <ifx-navbar-item>Item</ifx-navbar-item>
    </ifx-navbar-profile>
</ifx-navbar>

`;

window.__nav = navigate;