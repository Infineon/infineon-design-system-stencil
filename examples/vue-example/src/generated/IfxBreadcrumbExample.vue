<script setup lang="ts">

import { IfxBreadcrumb, IfxBreadcrumbItem, IfxBreadcrumbItemLabel, IfxDropdownItem, IfxDropdownMenu } from '@infineon/design-system-vue';

const handleBreadcrumbMenuIconWrapper = (event: CustomEvent) => {
  console.log('breadcrumbMenuIconWrapper:', event);
  // Add your handler logic here
};

const handleDropdownMenuItem = (event: CustomEvent) => {
  console.log('ifxDropdownMenuItem:', event);
  // Add your handler logic here
};

const handleMenuSize = (event: CustomEvent) => {
  console.log('menuSize:', event);
  // Add your handler logic here
};

const handleDropdownItem = (event: CustomEvent) => {
  console.log('ifxDropdownItem:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleBreadcrumbMenuIconWrapper = (event: CustomEvent) => {
  console.log('breadcrumbMenuIconWrapper:', event);
  // Add your handler logic here
};

const handleDropdownMenuItem = (event: CustomEvent) => {
  console.log('ifxDropdownMenuItem:', event);
  // Add your handler logic here
};

const handleMenuSize = (event: CustomEvent) => {
  console.log('menuSize:', event);
  // Add your handler logic here
};

const handleDropdownItem = (event: CustomEvent) => {
  console.log('ifxDropdownItem:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-breadcrumb>
      <ifx-breadcrumb-item>
        <ifx-breadcrumb-item-label
          slot="label"
          icon=""
          target="_self"
          @breadcrumbMenuIconWrapper="handleBreadcrumbMenuIconWrapper">
          Breadcrumb 1
        </ifx-breadcrumb-item-label>
        <ifx-dropdown-menu
          @ifxDropdownMenuItem="handleDropdownMenuItem"
          @menuSize="handleMenuSize">
          <ifx-dropdown-item
            href="http://google.com"
            @ifxDropdownItem="handleDropdownItem">
            Google
          </ifx-dropdown-item>
          <ifx-dropdown-item href="http://bing.com">
            Bing
          </ifx-dropdown-item>
          <ifx-dropdown-item href="http://yahoo.com">
            Yahoo
          </ifx-dropdown-item>
          <ifx-dropdown-item href="http://naver.com">
            Naver
          </ifx-dropdown-item>
        </ifx-dropdown-menu>
      </ifx-breadcrumb-item>
      <ifx-breadcrumb-item>
        <ifx-breadcrumb-item-label
          slot="label"
          icon=""
          target="_self">
          Breadcrumb 2
        </ifx-breadcrumb-item-label>
        <ifx-dropdown-menu>
          <ifx-dropdown-item href="http://google.com">
            Google
          </ifx-dropdown-item>
          <ifx-dropdown-item href="http://bing.com">
            Bing
          </ifx-dropdown-item>
          <ifx-dropdown-item href="http://yahoo.com">
            Yahoo
          </ifx-dropdown-item>
          <ifx-dropdown-item href="http://naver.com">
            Naver
          </ifx-dropdown-item>
        </ifx-dropdown-menu>
      </ifx-breadcrumb-item>
      <ifx-breadcrumb-item>
        <ifx-breadcrumb-item-label
          slot="label"
          icon=""
          href="http://yahoo.com"
          target="_self">
          Breadcrumb 3
        </ifx-breadcrumb-item-label>
      </ifx-breadcrumb-item>
    </ifx-breadcrumb>
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-breadcrumb>
      <ifx-breadcrumb-item>
        <ifx-breadcrumb-item-label
          slot="label"
          icon=""
          target="_self"
          @breadcrumbMenuIconWrapper="handleBreadcrumbMenuIconWrapper">
          Breadcrumb 1
        </ifx-breadcrumb-item-label>
        <ifx-dropdown-menu
          @ifxDropdownMenuItem="handleDropdownMenuItem"
          @menuSize="handleMenuSize">
          <ifx-dropdown-item
            href="http://google.com"
            @ifxDropdownItem="handleDropdownItem">
            Google
          </ifx-dropdown-item>
          <ifx-dropdown-item href="http://bing.com">
            Bing
          </ifx-dropdown-item>
          <ifx-dropdown-item href="http://yahoo.com">
            Yahoo
          </ifx-dropdown-item>
          <ifx-dropdown-item href="http://naver.com">
            Naver
          </ifx-dropdown-item>
        </ifx-dropdown-menu>
      </ifx-breadcrumb-item>
      <ifx-breadcrumb-item>
        <ifx-breadcrumb-item-label
          slot="label"
          icon=""
          target="_self">
          Breadcrumb 2
        </ifx-breadcrumb-item-label>
        <ifx-dropdown-menu>
          <ifx-dropdown-item href="http://google.com">
            Google
          </ifx-dropdown-item>
          <ifx-dropdown-item href="http://bing.com">
            Bing
          </ifx-dropdown-item>
          <ifx-dropdown-item href="http://yahoo.com">
            Yahoo
          </ifx-dropdown-item>
          <ifx-dropdown-item href="http://naver.com">
            Naver
          </ifx-dropdown-item>
        </ifx-dropdown-menu>
      </ifx-breadcrumb-item>
      <ifx-breadcrumb-item>
        <ifx-breadcrumb-item-label
          slot="label"
          icon=""
          href="http://yahoo.com"
          target="_self">
          Breadcrumb 3
        </ifx-breadcrumb-item-label>
      </ifx-breadcrumb-item>
    </ifx-breadcrumb>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
