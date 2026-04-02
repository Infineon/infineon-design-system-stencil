<script setup lang="ts">

import { IfxSearchField } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-search-field
      size="m"
      :show-delete-icon="true"
      :show-suggestions="false"
      :enable-history="true"
      :max-suggestions=10
      :max-history-items=5
      history-key="ifx-search-history"
      history-header-text="Recent Searches"
      value=""
      autocomplete="on"
      placeholder="Search..."
      aria-label-text="Search field"
      delete-icon-aria-label="Clear search"
      history-delete-aria-label="Remove from history"
      dropdown-aria-label="Search suggestions and history"
      suggestion-aria-label="Search suggestion"
      history-item-aria-label="Search history item" />
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-search-field
      size="m"
      :show-delete-icon="true"
      :show-suggestions="false"
      :enable-history="true"
      :max-suggestions=10
      :max-history-items=5
      history-key="ifx-search-history"
      history-header-text="Recent Searches"
      value=""
      autocomplete="on"
      placeholder="Search..."
      aria-label-text="Search field"
      delete-icon-aria-label="Clear search"
      history-delete-aria-label="Remove from history"
      dropdown-aria-label="Search suggestions and history"
      suggestion-aria-label="Search suggestion"
      history-item-aria-label="Search history item" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
