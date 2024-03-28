
import { IfxNavbar, IfxNavbarProfile, IfxSearchBar, IfxNavbarItem } from '@infineon/infineon-design-system-react';

function Navbar() {
  return (
    <div>
      <IfxNavbar  show-logo-and-appname="true" application-name="App name" fixed="false" logo-href="http://google.com" logo-href-target="_self">
    <IfxNavbarItem icon="calendar16" slot="left-item" target="" href="" >
      Menu Item 1
      <IfxNavbarItem icon="calendar16">
        Layer 1 Nested Item 1
        <IfxNavbarItem>
          Layer 2 Nested Item 2
          <IfxNavbarItem href="http://google.com" target="_blank">Link Layer 3 Nested Item 1</IfxNavbarItem>
          <IfxNavbarItem>Layer 3 Nested Item 2</IfxNavbarItem>
          <IfxNavbarItem>Layer 3 Nested Item 3</IfxNavbarItem>
          <IfxNavbarItem>Layer 3 Nested Item 4</IfxNavbarItem>
        </IfxNavbarItem>
        <IfxNavbarItem >Layer 2 Nested Item 3</IfxNavbarItem>
        <IfxNavbarItem>Layer 2 Nested Item 4</IfxNavbarItem>
        <IfxNavbarItem>Layer 2 Nested Item 5</IfxNavbarItem>
      </IfxNavbarItem>

      <IfxNavbarItem>
        Layer 1 Nested Item 2
        <IfxNavbarItem>Layer 2 Item 1</IfxNavbarItem>
        <IfxNavbarItem>Layer 2 Item 2</IfxNavbarItem>
        <IfxNavbarItem>Layer 2 Item 3</IfxNavbarItem>
      </IfxNavbarItem>

      <IfxNavbarItem>Nested Item 3</IfxNavbarItem>

      <IfxNavbarItem>
        Layer 1 Nested Item 4
        <IfxNavbarItem>Nested Item 4</IfxNavbarItem>
      </IfxNavbarItem>

    </IfxNavbarItem>

    <IfxNavbarItem href="http://google.com" target="_blank" slot="left-item" icon="calendar16" show-label="true">
      Menu Item 2
    </IfxNavbarItem>

    <IfxNavbarItem slot="left-item">
      More
      <IfxNavbarItem>Item1</IfxNavbarItem>
      <IfxNavbarItem>Item2</IfxNavbarItem>
    </IfxNavbarItem>

    <IfxSearchBar id="myBar" slot="search-bar-left" is-open="false"></IfxSearchBar>

    <IfxNavbarItem slot="right-item" target="_blank" href="http://google.com" hide-on-mobile="false" show-label="false" icon="cartf16">Right Item</IfxNavbarItem>
    <IfxNavbarItem slot="right-item" hide-on-mobile="true" show-label='true' icon="airplane16">
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

    <IfxNavbarProfile slot="right-item" image-url="https://i.pinimg.com/originals/82/d4/92/82d4926dcf09dd4c73eb1a6c0300c135.jpg" show-label="true" href="" target="_blank">
      Tisho
      <IfxNavbarItem>
        Item
        <IfxNavbarItem>
          Item
          <IfxNavbarItem>
            Item
            <IfxNavbarItem>
              Item
              <IfxNavbarItem>
                Item
              </IfxNavbarItem>
            </IfxNavbarItem>
          </IfxNavbarItem>
        </IfxNavbarItem>
      </IfxNavbarItem>
      <IfxNavbarItem>Item</IfxNavbarItem>
      <IfxNavbarItem>Item</IfxNavbarItem>
      <IfxNavbarItem>Item</IfxNavbarItem>
    </IfxNavbarProfile>
  </IfxNavbar>
    </div>
  );
}

export default Navbar;