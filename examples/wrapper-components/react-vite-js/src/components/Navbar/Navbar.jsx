import {
  IfxNavbar,
  IfxNavbarItem,
  IfxNavbarProfile,
  IfxSearchBar
} from '@infineon/infineon-design-system-react';

function Navbar({ onSelect }) {
  return (
    <IfxNavbar
      show-logo-and-appname="true"
      application-name="REACT APP"
      fixed="false"
      logo-href="http://google.com"
      logo-href-target="_self"
    >
      {/* Components A–E */}
      <IfxNavbarItem icon="calendar16" slot="left-item">
        Components A–E
        <IfxNavbarItem onClick={() => onSelect('accordion')}>Accordion</IfxNavbarItem>
        <IfxNavbarItem onClick={() => onSelect('actionlist')}>Action List</IfxNavbarItem>
        <IfxNavbarItem onClick={() => onSelect('alert')}>Alert</IfxNavbarItem>
        <IfxNavbarItem onClick={() => onSelect('breadcrumb')}>Breadcrumb</IfxNavbarItem>
        <IfxNavbarItem onClick={() => onSelect('button')}>Button</IfxNavbarItem>
        <IfxNavbarItem onClick={() => onSelect('card')}>Card</IfxNavbarItem>

        <IfxNavbarItem>
          Checkbox
          <IfxNavbarItem onClick={() => onSelect('checkbox')}>Checkbox</IfxNavbarItem>
          <IfxNavbarItem onClick={() => onSelect('checkboxgroup')}>Checkbox Group</IfxNavbarItem>
        </IfxNavbarItem>

        <IfxNavbarItem onClick={() => onSelect('chip')}>Chip</IfxNavbarItem>
        <IfxNavbarItem onClick={() => onSelect('contentswitcher')}>Content Switcher</IfxNavbarItem>
        <IfxNavbarItem onClick={() => onSelect('datepicker')}>Date Picker</IfxNavbarItem>
        <IfxNavbarItem onClick={() => onSelect('dropdown')}>Dropdown</IfxNavbarItem>
      </IfxNavbarItem>

      {/* Components F–R */}
      <IfxNavbarItem icon="calendar16" slot="left-item">
        Components F–R
        <IfxNavbarItem onClick={() => onSelect('fileupload')}>File Upload</IfxNavbarItem>
        <IfxNavbarItem onClick={() => onSelect('footer')}>Footer</IfxNavbarItem>

        <IfxNavbarItem>
          Icon
          <IfxNavbarItem onClick={() => onSelect('icon')}>Icon</IfxNavbarItem>
          <IfxNavbarItem onClick={() => onSelect('iconbutton')}>Icon Button</IfxNavbarItem>
        </IfxNavbarItem>

        <IfxNavbarItem onClick={() => onSelect('indicator')}>Indicator</IfxNavbarItem>
        <IfxNavbarItem onClick={() => onSelect('link')}>Link</IfxNavbarItem>
        <IfxNavbarItem onClick={() => onSelect('modal')}>Modal</IfxNavbarItem>
        <IfxNavbarItem onClick={() => onSelect('notification')}>Notification</IfxNavbarItem>
        <IfxNavbarItem onClick={() => onSelect('pagination')}>Pagination</IfxNavbarItem>
        <IfxNavbarItem onClick={() => onSelect('progressbar')}>Progress Bar</IfxNavbarItem>

        <IfxNavbarItem>
          Radio Button
          <IfxNavbarItem onClick={() => onSelect('radiobutton')}>Radio Button</IfxNavbarItem>
          <IfxNavbarItem onClick={() => onSelect('radiobuttongroup')}>Radio Button Group</IfxNavbarItem>
        </IfxNavbarItem>
      </IfxNavbarItem>

      {/* Components S–Z */}
      <IfxNavbarItem icon="calendar16" slot="left-item">
        Components S–Z
        <IfxNavbarItem>
          Search
          <IfxNavbarItem onClick={() => onSelect('searchbar')}>Search Bar</IfxNavbarItem>
          <IfxNavbarItem onClick={() => onSelect('searchfield')}>Search Field</IfxNavbarItem>
        </IfxNavbarItem>

        <IfxNavbarItem onClick={() => onSelect('segmentedcontrol')}>Segmented Control</IfxNavbarItem>

        <IfxNavbarItem>
          Select
          <IfxNavbarItem onClick={() => onSelect('singleselect')}>Single Select</IfxNavbarItem>
          <IfxNavbarItem onClick={() => onSelect('multiselect')}>Multi Select</IfxNavbarItem>
        </IfxNavbarItem>

        <IfxNavbarItem onClick={() => onSelect('sidebar')}>Sidebar</IfxNavbarItem>
        <IfxNavbarItem onClick={() => onSelect('slider')}>Slider</IfxNavbarItem>
        <IfxNavbarItem onClick={() => onSelect('spinner')}>Spinner</IfxNavbarItem>
        <IfxNavbarItem onClick={() => onSelect('status')}>Status</IfxNavbarItem>
        <IfxNavbarItem onClick={() => onSelect('stepper')}>Stepper</IfxNavbarItem>
        <IfxNavbarItem onClick={() => onSelect('switch')}>Switch</IfxNavbarItem>

        <IfxNavbarItem>
          Table
          <IfxNavbarItem onClick={() => onSelect('basictable')}>Basic Table</IfxNavbarItem>
          <IfxNavbarItem onClick={() => onSelect('table')}>Advanced Table</IfxNavbarItem>
        </IfxNavbarItem>

        <IfxNavbarItem onClick={() => onSelect('tabs')}>Tabs</IfxNavbarItem>

        <IfxNavbarItem>
          Text
          <IfxNavbarItem onClick={() => onSelect('textfield')}>Text Field</IfxNavbarItem>
          <IfxNavbarItem onClick={() => onSelect('textarea')}>Textarea</IfxNavbarItem>
        </IfxNavbarItem>

        <IfxNavbarItem onClick={() => onSelect('tooltip')}>Tooltip</IfxNavbarItem>
        <IfxNavbarItem onClick={() => onSelect('treeview')}>Tree View</IfxNavbarItem>
      </IfxNavbarItem>

      {/* Search */}
      <IfxSearchBar slot="search-bar-left" is-open="false"></IfxSearchBar>

      {/* Right items */}
      <IfxNavbarItem
        slot="right-item"
        href="http://google.com"
        icon="cartf16"
        show-label="false"
      >
        Right Item
      </IfxNavbarItem>

      <IfxNavbarItem slot="right-item" icon="airplane16" show-label="true">
        Right Item
        <IfxNavbarItem>
          Nested one
          <IfxNavbarItem>
            Nested one
            <IfxNavbarItem>
              Nested one
              <IfxNavbarItem>Final one</IfxNavbarItem>
            </IfxNavbarItem>
          </IfxNavbarItem>
        </IfxNavbarItem>
      </IfxNavbarItem>

      <IfxNavbarProfile
        slot="right-item"
        image-url="https://i.pinimg.com/originals/82/d4/92/82d4926dcf09dd4c73eb1a6c0300c135.jpg"
        show-label="true"
      >
        User
        <IfxNavbarItem>Item</IfxNavbarItem>
        <IfxNavbarItem>Item</IfxNavbarItem>
        <IfxNavbarItem>Item</IfxNavbarItem>
        <IfxNavbarItem>Item</IfxNavbarItem>
      </IfxNavbarProfile>
    </IfxNavbar>
  );
}

export default Navbar;