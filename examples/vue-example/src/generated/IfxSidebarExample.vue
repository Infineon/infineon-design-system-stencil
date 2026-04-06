<script setup lang="ts">

import { IfxSidebar, IfxSidebarItem, IfxSidebarTitle } from '@infineon/infineon-design-system-vue';

const handleSidebarCollapseChange = (event: CustomEvent) => {
  console.log('ifxSidebarCollapseChange:', event);
  // Add your handler logic here
};

const handleSidebarLogoClick = (event: CustomEvent) => {
  console.log('ifxSidebarLogoClick:', event);
  // Add your handler logic here
};

const handleSidebarActionItem = (event: CustomEvent) => {
  console.log('ifxSidebarActionItem:', event);
  // Add your handler logic here
};

const handleSidebarMenu = (event: CustomEvent) => {
  console.log('ifxSidebarMenu:', event);
  // Add your handler logic here
};

const handleSidebarNavigationItem = (event: CustomEvent) => {
  console.log('ifxSidebarNavigationItem:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleSidebarCollapseChange = (event: CustomEvent) => {
  console.log('ifxSidebarCollapseChange:', event);
  // Add your handler logic here
};

const handleSidebarLogoClick = (event: CustomEvent) => {
  console.log('ifxSidebarLogoClick:', event);
  // Add your handler logic here
};

const handleSidebarActionItem = (event: CustomEvent) => {
  console.log('ifxSidebarActionItem:', event);
  // Add your handler logic here
};

const handleSidebarMenu = (event: CustomEvent) => {
  console.log('ifxSidebarMenu:', event);
  // Add your handler logic here
};

const handleSidebarNavigationItem = (event: CustomEvent) => {
  console.log('ifxSidebarNavigationItem:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-sidebar
      application-name="Application Name"
      :collapsible="false"
      :collapsed="false"
      :show-header="true"
      :show-footer="true"
      :initial-collapse="true"
      terms-of-use="https://yourwebsite.com/terms"
      imprint="https://yourwebsite.com/imprint"
      privacy-policy="https://yourwebsite.com/privacy-policy"
      copyright-text="© 1999 - 2026 Infineon Technologies AG"
      position="left"
      hide-menu-label="Hide Menu">
      <ifx-sidebar-title
        @ifxSidebarCollapseChange="handleSidebarCollapseChange"
        @ifxSidebarLogoClick="handleSidebarLogoClick"
        @ifxSidebarActionItem="handleSidebarActionItem"
        @ifxSidebarMenu="handleSidebarMenu"
        @ifxSidebarNavigationItem="handleSidebarNavigationItem">
        Menu Items
      </ifx-sidebar-title>
      <ifx-sidebar-item
        href="https://google.com"
        target="_blank"
        icon="image-16"
        @ifxSidebarCollapseChange="handleSidebarCollapseChange"
        @ifxSidebarLogoClick="handleSidebarLogoClick"
        @ifxSidebarActionItem="handleSidebarActionItem"
        @ifxSidebarMenu="handleSidebarMenu"
        @ifxSidebarNavigationItem="handleSidebarNavigationItem">
        Menu Item
      </ifx-sidebar-item>
      <ifx-sidebar-item
        href="https://google.com"
        target="_blank"
        icon="image-16">
        Menu Item
      </ifx-sidebar-item>
      <ifx-sidebar-item
        href="https://google.com"
        target="_blank"
        icon="image-16">
        Menu Item
      </ifx-sidebar-item>
      <ifx-sidebar-item
        href="https://google.com"
        target="_blank"
        icon="image-16">
        Menu Item
      </ifx-sidebar-item>
      <ifx-sidebar-item>
        <ifx-sidebar-item
          href="https://google.com"
          target="_blank"
          icon="image-16">
          Menu Item
        </ifx-sidebar-item>
        <ifx-sidebar-item icon="image-16">
          <ifx-sidebar-item>
            Sub menu item
          </ifx-sidebar-item>
          <ifx-sidebar-item :active="true">
            Sub menu item
          </ifx-sidebar-item>
          <ifx-sidebar-item>
            Sub menu item
          </ifx-sidebar-item>
        </ifx-sidebar-item>
        <ifx-sidebar-item
          href="https://google.com"
          target="_blank">
          Menu Item
        </ifx-sidebar-item>
        <ifx-sidebar-item
          href="https://google.com"
          target="_blank">
          Menu Item
        </ifx-sidebar-item>
      </ifx-sidebar-item>
      <ifx-sidebar-title>
        Items group
      </ifx-sidebar-title>
      <ifx-sidebar-item
        href="https://google.com"
        target="_self"
        icon="image-16"
        number-indicator=""
        :isactionitem="false"
        :active="false">
        Item 1
      </ifx-sidebar-item>
      <ifx-sidebar-item
        href="https://google.com"
        target="_blank"
        icon="image-16">
        Item 2
      </ifx-sidebar-item>
    </ifx-sidebar>
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-sidebar
      application-name="Application Name"
      :collapsible="false"
      :collapsed="false"
      :show-header="true"
      :show-footer="true"
      :initial-collapse="true"
      terms-of-use="https://yourwebsite.com/terms"
      imprint="https://yourwebsite.com/imprint"
      privacy-policy="https://yourwebsite.com/privacy-policy"
      copyright-text="© 1999 - 2026 Infineon Technologies AG"
      position="left"
      hide-menu-label="Hide Menu">
      <ifx-sidebar-title
        @ifxSidebarCollapseChange="handleSidebarCollapseChange"
        @ifxSidebarLogoClick="handleSidebarLogoClick"
        @ifxSidebarActionItem="handleSidebarActionItem"
        @ifxSidebarMenu="handleSidebarMenu"
        @ifxSidebarNavigationItem="handleSidebarNavigationItem">
        Menu Items
      </ifx-sidebar-title>
      <ifx-sidebar-item
        href="https://google.com"
        target="_blank"
        icon="image-16"
        @ifxSidebarCollapseChange="handleSidebarCollapseChange"
        @ifxSidebarLogoClick="handleSidebarLogoClick"
        @ifxSidebarActionItem="handleSidebarActionItem"
        @ifxSidebarMenu="handleSidebarMenu"
        @ifxSidebarNavigationItem="handleSidebarNavigationItem">
        Menu Item
      </ifx-sidebar-item>
      <ifx-sidebar-item
        href="https://google.com"
        target="_blank"
        icon="image-16">
        Menu Item
      </ifx-sidebar-item>
      <ifx-sidebar-item
        href="https://google.com"
        target="_blank"
        icon="image-16">
        Menu Item
      </ifx-sidebar-item>
      <ifx-sidebar-item
        href="https://google.com"
        target="_blank"
        icon="image-16">
        Menu Item
      </ifx-sidebar-item>
      <ifx-sidebar-item>
        <ifx-sidebar-item
          href="https://google.com"
          target="_blank"
          icon="image-16">
          Menu Item
        </ifx-sidebar-item>
        <ifx-sidebar-item icon="image-16">
          <ifx-sidebar-item>
            Sub menu item
          </ifx-sidebar-item>
          <ifx-sidebar-item :active="true">
            Sub menu item
          </ifx-sidebar-item>
          <ifx-sidebar-item>
            Sub menu item
          </ifx-sidebar-item>
        </ifx-sidebar-item>
        <ifx-sidebar-item
          href="https://google.com"
          target="_blank">
          Menu Item
        </ifx-sidebar-item>
        <ifx-sidebar-item
          href="https://google.com"
          target="_blank">
          Menu Item
        </ifx-sidebar-item>
      </ifx-sidebar-item>
      <ifx-sidebar-title>
        Items group
      </ifx-sidebar-title>
      <ifx-sidebar-item
        href="https://google.com"
        target="_self"
        icon="image-16"
        number-indicator=""
        :isactionitem="false"
        :active="false">
        Item 1
      </ifx-sidebar-item>
      <ifx-sidebar-item
        href="https://google.com"
        target="_blank"
        icon="image-16">
        Item 2
      </ifx-sidebar-item>
    </ifx-sidebar>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
