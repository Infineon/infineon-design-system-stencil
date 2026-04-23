<script setup lang="ts">

import { IfxButton, IfxNavbar, IfxNavbarItem, IfxNavbarProfile, IfxSearchBar, IfxTextField } from '@infineon/infineon-design-system-vue';

const handleNavbarMobileMenuIsOpen = (event: CustomEvent) => {
  console.log('ifxNavbarMobileMenuIsOpen:', event);
  // Add your handler logic here
};

const handleNavItem = (event: CustomEvent) => {
  console.log('ifxNavItem:', event);
  // Add your handler logic here
};

const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event);
  // Add your handler logic here
};

const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleNavbarMobileMenuIsOpen = (event: CustomEvent) => {
  console.log('ifxNavbarMobileMenuIsOpen:', event);
  // Add your handler logic here
};

const handleNavItem = (event: CustomEvent) => {
  console.log('ifxNavItem:', event);
  // Add your handler logic here
};

const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event);
  // Add your handler logic here
};

const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-navbar
      :fixed="false"
      __CONTROLLED_ATTRS__>
      <ifx-navbar-item
        icon=""
        slot="left-item"
        target="_self"
        href=""
        :hide-on-mobile="true"
        @ifxNavbarMobileMenuIsOpen="handleNavbarMobileMenuIsOpen"
        @ifxNavItem="handleNavItem"
        @ifxInput="handleInput"
        @ifxOpen="handleOpen">
        <ifx-navbar-item icon="">
          <ifx-navbar-item>
            <ifx-navbar-item
              href="http://google.com"
              target="_blank">
              Link Layer 3 Nested Item 1
            </ifx-navbar-item>
            <ifx-navbar-item>
              Layer 3 Nested Item 2
            </ifx-navbar-item>
            <ifx-navbar-item>
              Layer 3 Nested Item 3
            </ifx-navbar-item>
            <ifx-navbar-item>
              Layer 3 Nested Item 4
            </ifx-navbar-item>
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Nested Item 3
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Nested Item 4
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Nested Item 5
          </ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Item 1
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Item 2
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Item 3
          </ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item>
          Nested Item 3
        </ifx-navbar-item>
        <ifx-navbar-item>
          <ifx-navbar-item>
            Nested Item 4
          </ifx-navbar-item>
        </ifx-navbar-item>
      </ifx-navbar-item>
      <ifx-navbar-item
        href=""
        target="_self"
        slot="left-item"
        icon=""
        :show-label="true">
        Menu Item
      </ifx-navbar-item>
      <ifx-navbar-item slot="left-item">
        <ifx-navbar-item>
          Item1
        </ifx-navbar-item>
        <ifx-navbar-item>
          Item2
        </ifx-navbar-item>
      </ifx-navbar-item>
      <ifx-search-bar
        slot="search-bar-left"
        :is-open="false" />
      <ifx-navbar-item
        number-indicator=""
        slot="right-item"
        target="_blank"
        href="http://google.com"
        hide-on-mobile=""
        :show-label="false"
        icon="image-16" />
      <ifx-navbar-item
        :dot-indicator="false"
        slot="right-item"
        hide-on-mobile=""
        :show-label="false"
        icon="image-16" />
      <ifx-navbar-profile
        user-name=""
        slot="right-item"
        image-url=""
        :show-label="true"
        href=""
        target="_self"
        alt="profile image"
        @ifxNavbarMobileMenuIsOpen="handleNavbarMobileMenuIsOpen"
        @ifxNavItem="handleNavItem"
        @ifxInput="handleInput"
        @ifxOpen="handleOpen" />
    </ifx-navbar>
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

const codeString = codeStringWithAttrs;

</script>

<template>
  <div>
    <ifx-navbar
      :fixed="false"
      v-bind="controlledProps">
      <ifx-navbar-item
        icon=""
        slot="left-item"
        target="_self"
        href=""
        :hide-on-mobile="true"
        @ifxNavbarMobileMenuIsOpen="handleNavbarMobileMenuIsOpen"
        @ifxNavItem="handleNavItem"
        @ifxInput="handleInput"
        @ifxOpen="handleOpen">
        <ifx-navbar-item icon="">
          <ifx-navbar-item>
            <ifx-navbar-item
              href="http://google.com"
              target="_blank">
              Link Layer 3 Nested Item 1
            </ifx-navbar-item>
            <ifx-navbar-item>
              Layer 3 Nested Item 2
            </ifx-navbar-item>
            <ifx-navbar-item>
              Layer 3 Nested Item 3
            </ifx-navbar-item>
            <ifx-navbar-item>
              Layer 3 Nested Item 4
            </ifx-navbar-item>
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Nested Item 3
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Nested Item 4
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Nested Item 5
          </ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Item 1
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Item 2
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Item 3
          </ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item>
          Nested Item 3
        </ifx-navbar-item>
        <ifx-navbar-item>
          <ifx-navbar-item>
            Nested Item 4
          </ifx-navbar-item>
        </ifx-navbar-item>
      </ifx-navbar-item>
      <ifx-navbar-item
        href=""
        target="_self"
        slot="left-item"
        icon=""
        :show-label="true">
        Menu Item
      </ifx-navbar-item>
      <ifx-navbar-item slot="left-item">
        <ifx-navbar-item>
          Item1
        </ifx-navbar-item>
        <ifx-navbar-item>
          Item2
        </ifx-navbar-item>
      </ifx-navbar-item>
      <ifx-search-bar
        slot="search-bar-left"
        :is-open="false" />
      <ifx-navbar-item
        number-indicator=""
        slot="right-item"
        target="_blank"
        href="http://google.com"
        hide-on-mobile=""
        :show-label="false"
        icon="image-16" />
      <ifx-navbar-item
        :dot-indicator="false"
        slot="right-item"
        hide-on-mobile=""
        :show-label="false"
        icon="image-16" />
      <ifx-navbar-profile
        user-name=""
        slot="right-item"
        image-url=""
        :show-label="true"
        href=""
        target="_self"
        alt="profile image"
        @ifxNavbarMobileMenuIsOpen="handleNavbarMobileMenuIsOpen"
        @ifxNavItem="handleNavItem"
        @ifxInput="handleInput"
        @ifxOpen="handleOpen" />
    </ifx-navbar>
    <h3 class="controls-title">Controls</h3>
	<div class="controls controls-toggle">
      <IfxButton variant="secondary" @click="toggleNavbarPositionFixed">Toggle NavbarPositionFixed</IfxButton>
      <IfxButton variant="secondary" @click="toggleShowLogoAndAppname">Toggle ShowLogoAndAppname</IfxButton>
      <IfxButton variant="secondary" @click="toggleLogoHrefTarget">Toggle LogoHrefTarget</IfxButton>
      <IfxButton variant="secondary" @click="toggleShowLabelOfNavbarItem">Toggle ShowLabelOfNavbarItem</IfxButton>
      <IfxButton variant="secondary" @click="toggleIconOfNavbarItem">Toggle IconOfNavbarItem</IfxButton>
      <IfxButton variant="secondary" @click="toggleDotIndicator">Toggle DotIndicator</IfxButton>
      <IfxButton variant="secondary" @click="toggleTargetOfnavbarItem">Toggle TargetOfnavbarItem</IfxButton>
      <IfxButton variant="secondary" @click="toggleHideOnMobile">Toggle HideOnMobile</IfxButton>
      <IfxButton variant="secondary" @click="toggleShowNavbarProfileLabel">Toggle ShowNavbarProfileLabel</IfxButton>
      <IfxButton variant="secondary" @click="toggleTarget">Toggle Target</IfxButton>
      <IfxButton variant="secondary" @click="toggleSearchBarIsOpen">Toggle SearchBarIsOpen</IfxButton>
      <IfxButton variant="secondary" @click="toggleSearchBarPosition">Toggle SearchBarPosition</IfxButton>
    </div>
	<div class="controls controls-input">
      <IfxTextField label="profileLabel" type="text" :value="String(profileLabel)" @input="toggleProfileLabel" @ifxInput="toggleProfileLabel" />
      <IfxTextField label="applicationName" type="text" :value="String(applicationName)" @input="toggleApplicationName" @ifxInput="toggleApplicationName" />
      <IfxTextField label="logoHref" type="text" :value="String(logoHref)" @input="toggleLogoHref" @ifxInput="toggleLogoHref" />
      <IfxTextField label="numberIndicator" type="number" :value="String(numberIndicator)" @input="toggleNumberIndicator" @ifxInput="toggleNumberIndicator" />
      <IfxTextField label="hrefOfNavbarItem" type="text" :value="String(hrefOfNavbarItem)" @input="toggleHrefOfNavbarItem" @ifxInput="toggleHrefOfNavbarItem" />
      <IfxTextField label="href" type="text" :value="String(href)" @input="toggleHref" @ifxInput="toggleHref" />
      <IfxTextField label="profileImageUrl" type="text" :value="String(profileImageUrl)" @input="toggleProfileImageUrl" @ifxInput="toggleProfileImageUrl" />
      <IfxTextField label="alt" type="text" :value="String(alt)" @input="toggleAlt" @ifxInput="toggleAlt" />
      <IfxTextField label="userName" type="text" :value="String(userName)" @input="toggleUserName" @ifxInput="toggleUserName" />
    </div>

    <div class="state">
        <div><b>profileLabel:</b> {{ String(profileLabel) }}</div>
        <div><b>applicationName:</b> {{ String(applicationName) }}</div>
        <div><b>navbarPositionFixed:</b> {{ String(navbarPositionFixed) }}</div>
        <div><b>showLogoAndAppname:</b> {{ String(showLogoAndAppname) }}</div>
        <div><b>logoHref:</b> {{ String(logoHref) }}</div>
        <div><b>logoHrefTarget:</b> {{ String(logoHrefTargetOptions[logoHrefTargetIndex]) }}</div>
        <div><b>showLabelOfNavbarItem:</b> {{ String(showLabelOfNavbarItem) }}</div>
        <div><b>iconOfNavbarItem:</b> {{ String(iconOfNavbarItemOptions[iconOfNavbarItemIndex]) }}</div>
        <div><b>numberIndicator:</b> {{ String(numberIndicator) }}</div>
        <div><b>dotIndicator:</b> {{ String(dotIndicator) }}</div>
        <div><b>hrefOfNavbarItem:</b> {{ String(hrefOfNavbarItem) }}</div>
        <div><b>targetOfnavbarItem:</b> {{ String(targetOfnavbarItemOptions[targetOfnavbarItemIndex]) }}</div>
        <div><b>hideOnMobile:</b> {{ String(hideOnMobile) }}</div>
        <div><b>showNavbarProfileLabel:</b> {{ String(showNavbarProfileLabel) }}</div>
        <div><b>href:</b> {{ String(href) }}</div>
        <div><b>profileImageUrl:</b> {{ String(profileImageUrl) }}</div>
        <div><b>target:</b> {{ String(targetOptions[targetIndex]) }}</div>
        <div><b>alt:</b> {{ String(alt) }}</div>
        <div><b>userName:</b> {{ String(userName) }}</div>
        <div><b>searchBarIsOpen:</b> {{ String(searchBarIsOpen) }}</div>
        <div><b>searchBarPosition:</b> {{ String(searchBarPositionOptions[searchBarPositionIndex]) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
