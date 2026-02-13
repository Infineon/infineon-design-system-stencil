<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import { IfxSidebar, IfxSidebarItem, IfxSidebarTitle } from '@infineon/infineon-design-system-vue';

const handleSidebarNavigationItem = (event: CustomEvent) => {
  console.log('ifxSidebarNavigationItem:', event);
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

const handleSidebarCollapseChange = (event: CustomEvent) => {
  console.log('ifxSidebarCollapseChange:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleSidebarNavigationItem = (event: CustomEvent) => {
  console.log('ifxSidebarNavigationItem:', event);
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

const handleSidebarCollapseChange = (event: CustomEvent) => {
  console.log('ifxSidebarCollapseChange:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-sidebar
      application-name="Application Name"
      collapsible="false"
      collapsed="false"
      show-header="true"
      show-footer="true"
      initial-collapse="true"
      terms-of-use="https://yourwebsite.com/terms"
      imprint="https://yourwebsite.com/imprint"
      privacy-policy="https://yourwebsite.com/privacy-policy"
      copyright-text="© 1999 - 2026 Infineon Technologies AG">
      <ifx-sidebar-title
        @ifxSidebarNavigationItem="handleSidebarNavigationItem"
        @ifxSidebarActionItem="handleSidebarActionItem"
        @ifxSidebarMenu="handleSidebarMenu"
        @ifxSidebarCollapseChange="handleSidebarCollapseChange">
        Menu Items
      </ifx-sidebar-title>
      <ifx-sidebar-item
        href="https://google.com"
        target="_blank"
        icon="image-16"
        @ifxSidebarNavigationItem="handleSidebarNavigationItem"
        @ifxSidebarActionItem="handleSidebarActionItem"
        @ifxSidebarMenu="handleSidebarMenu"
        @ifxSidebarCollapseChange="handleSidebarCollapseChange">
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
          <ifx-sidebar-item active="true">
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
        isactionitem="false"
        active="false">
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

onMounted(() => {
  nextTick(() => {
    Prism.highlightAll();
  });
});
</script>

<template>
  <div>
    <ifx-sidebar
      application-name="Application Name"
      collapsible="false"
      collapsed="false"
      show-header="true"
      show-footer="true"
      initial-collapse="true"
      terms-of-use="https://yourwebsite.com/terms"
      imprint="https://yourwebsite.com/imprint"
      privacy-policy="https://yourwebsite.com/privacy-policy"
      copyright-text="© 1999 - 2026 Infineon Technologies AG">
      <ifx-sidebar-title
        @ifxSidebarNavigationItem="handleSidebarNavigationItem"
        @ifxSidebarActionItem="handleSidebarActionItem"
        @ifxSidebarMenu="handleSidebarMenu"
        @ifxSidebarCollapseChange="handleSidebarCollapseChange">
        Menu Items
      </ifx-sidebar-title>
      <ifx-sidebar-item
        href="https://google.com"
        target="_blank"
        icon="image-16"
        @ifxSidebarNavigationItem="handleSidebarNavigationItem"
        @ifxSidebarActionItem="handleSidebarActionItem"
        @ifxSidebarMenu="handleSidebarMenu"
        @ifxSidebarCollapseChange="handleSidebarCollapseChange">
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
          <ifx-sidebar-item active="true">
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
        isactionitem="false"
        active="false">
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
