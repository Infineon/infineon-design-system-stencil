<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';

const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event.detail);
  // Add your handler logic here
};

const handleClose = (event: CustomEvent) => {
  console.log('ifxClose:', event.detail);
  // Add your handler logic here
};

const handleDropdownMenuItem = (event: CustomEvent) => {
  console.log('ifxDropdownMenuItem:', event.detail);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event.detail);
  // Add your handler logic here
};

const handleClose = (event: CustomEvent) => {
  console.log('ifxClose:', event.detail);
  // Add your handler logic here
};

const handleDropdownMenuItem = (event: CustomEvent) => {
  console.log('ifxDropdownMenuItem:', event.detail);
  // Add your handler logic here
};
</script>

<template>
  <div>
    <div
      @ifxOpen="handleOpen"
      @ifxClose="handleClose"
      @ifxDropdownMenuItem="handleDropdownMenuItem">
      <ifx-dropdown
        placement="bottom-start"
        disabled="false"
        default-open="false"
        no-close-on-outside-click="false"
        no-close-on-menu-click="false"
        no-append-to-body="false">
        <ifx-dropdown-trigger-button
          variant="primary"
          @ifxOpen="handleOpen"
          @ifxClose="handleClose"
          @ifxDropdownMenuItem="handleDropdownMenuItem">
          Dropdown
        </ifx-dropdown-trigger-button>
        <ifx-dropdown-menu
          size="m"
          @ifxOpen="handleOpen"
          @ifxClose="handleClose"
          @ifxDropdownMenuItem="handleDropdownMenuItem">
          <ifx-dropdown-item
            icon="c-info-16"
            target="_self"
            href=""
            @ifxOpen="handleOpen"
            @ifxClose="handleClose"
            @ifxDropdownMenuItem="handleDropdownMenuItem">
            Menu Item
          </ifx-dropdown-item>
          <ifx-dropdown-item
            icon="c-info-16"
            target="_self"
            href="">
            Menu Item
          </ifx-dropdown-item>
          <ifx-dropdown-item
            icon="c-info-16"
            target="_self"
            href="">
            Menu Item
          </ifx-dropdown-item>
          <ifx-dropdown-item
            icon="c-info-16"
            target="_self"
            href="">
            Menu Item
          </ifx-dropdown-item>
          <ifx-dropdown-item
            icon="c-info-16"
            target="_self"
            href="">
            Menu Item
          </ifx-dropdown-item>
        </ifx-dropdown-menu>
      </ifx-dropdown>
    </div>
  </div>
</template>`;

onMounted(() => {
  nextTick(() => {
    Prism.highlightAll();
  });
});
</script>

<template>
  <div>
    <div
      @ifxOpen="handleOpen"
      @ifxClose="handleClose"
      @ifxDropdownMenuItem="handleDropdownMenuItem">
      <ifx-dropdown
        placement="bottom-start"
        disabled="false"
        default-open="false"
        no-close-on-outside-click="false"
        no-close-on-menu-click="false"
        no-append-to-body="false">
        <ifx-dropdown-trigger-button
          variant="primary"
          @ifxOpen="handleOpen"
          @ifxClose="handleClose"
          @ifxDropdownMenuItem="handleDropdownMenuItem">
          Dropdown
        </ifx-dropdown-trigger-button>
        <ifx-dropdown-menu
          size="m"
          @ifxOpen="handleOpen"
          @ifxClose="handleClose"
          @ifxDropdownMenuItem="handleDropdownMenuItem">
          <ifx-dropdown-item
            icon="c-info-16"
            target="_self"
            href=""
            @ifxOpen="handleOpen"
            @ifxClose="handleClose"
            @ifxDropdownMenuItem="handleDropdownMenuItem">
            Menu Item
          </ifx-dropdown-item>
          <ifx-dropdown-item
            icon="c-info-16"
            target="_self"
            href="">
            Menu Item
          </ifx-dropdown-item>
          <ifx-dropdown-item
            icon="c-info-16"
            target="_self"
            href="">
            Menu Item
          </ifx-dropdown-item>
          <ifx-dropdown-item
            icon="c-info-16"
            target="_self"
            href="">
            Menu Item
          </ifx-dropdown-item>
          <ifx-dropdown-item
            icon="c-info-16"
            target="_self"
            href="">
            Menu Item
          </ifx-dropdown-item>
        </ifx-dropdown-menu>
      </ifx-dropdown>
    </div>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
