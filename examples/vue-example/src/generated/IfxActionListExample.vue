<script setup lang="ts">

import { IfxActionList, IfxActionListItem, IfxButton, IfxIcon } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const disabled = ref(false);
const targetOptions = ["_self","_blank","_parent","_top"];
const targetIndex = ref(0);

const toggleDisabled = () => (disabled.value = !disabled.value);
const toggleTarget = () => (targetIndex.value = (targetIndex.value + 1) % targetOptions.length);

const controlledProps = computed(() => ({
  "disabled": disabled.value,
  "target": targetOptions[targetIndex.value],
}));

const handleActionListItemClick = (event: CustomEvent) => {
  console.log('ifxActionListItemClick:', event);
  // Add your handler logic here
};

const formatAttrValueForCode = (value: unknown): string => {
  if (typeof value === "boolean") return String(value);
  if (typeof value === "number") return String(value);
  if (value === null) return "null";
  if (Array.isArray(value) || (typeof value === "object" && value !== null)) {
    return JSON.stringify(value);
  }
  return String(value).replace(/"/g, '&quot;');
};

const controlledAttrsCode = [
  ["disabled", controlledProps.value["disabled"]],
  ["target", controlledProps.value["target"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeString = `<script setup lang="ts">
const handleActionListItemClick = (event: CustomEvent) => {
  console.log('ifxActionListItemClick:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-action-list
      list-aria-label="Navigation menu"
      __CONTROLLED_ATTRS__>
      <ifx-action-list-item
        item-title="Dashboard"
        description="View your main dashboard"
        value="dashboard"
        item-aria-label="Navigation item"
        @ifxActionListItemClick="handleActionListItemClick">
        <ifx-icon
          slot="trailing"
          icon="chevron-right-16" />
      </ifx-action-list-item>
      <ifx-action-list-item
        item-title="Settings"
        value="settings"
        item-aria-label="Navigation item">
        <ifx-icon
          slot="trailing"
          icon="chevron-right-16" />
      </ifx-action-list-item>
      <ifx-action-list-item
        item-title="Profile"
        description="Manage your profile information"
        value="profile"
        :disabled="true"
        item-aria-label="Navigation item">
        <ifx-icon
          slot="trailing"
          icon="chevron-right-16" />
      </ifx-action-list-item>
      <ifx-action-list-item
        item-title="Advanced Analytics and Reporting Dashboard with Extended Functionality"
        description="This comprehensive analytics dashboard provides detailed insights into user behavior and system performance metrics."
        value="analytics"
        item-aria-label="Navigation item">
        <ifx-icon
          slot="trailing"
          icon="chevron-right-16" />
      </ifx-action-list-item>
    </ifx-action-list>
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

</script>

<template>
  <div>
    <ifx-action-list
      list-aria-label="Navigation menu"
      v-bind="controlledProps">
      <ifx-action-list-item
        item-title="Dashboard"
        description="View your main dashboard"
        value="dashboard"
        item-aria-label="Navigation item"
        @ifxActionListItemClick="handleActionListItemClick">
        <ifx-icon
          slot="trailing"
          icon="chevron-right-16" />
      </ifx-action-list-item>
      <ifx-action-list-item
        item-title="Settings"
        value="settings"
        item-aria-label="Navigation item">
        <ifx-icon
          slot="trailing"
          icon="chevron-right-16" />
      </ifx-action-list-item>
      <ifx-action-list-item
        item-title="Profile"
        description="Manage your profile information"
        value="profile"
        :disabled="true"
        item-aria-label="Navigation item">
        <ifx-icon
          slot="trailing"
          icon="chevron-right-16" />
      </ifx-action-list-item>
      <ifx-action-list-item
        item-title="Advanced Analytics and Reporting Dashboard with Extended Functionality"
        description="This comprehensive analytics dashboard provides detailed insights into user behavior and system performance metrics."
        value="analytics"
        item-aria-label="Navigation item">
        <ifx-icon
          slot="trailing"
          icon="chevron-right-16" />
      </ifx-action-list-item>
    </ifx-action-list>
    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <IfxButton variant="secondary" @click="toggleDisabled">Toggle Disabled</IfxButton>
      <IfxButton variant="secondary" @click="toggleTarget">Toggle Target</IfxButton>
    </div>

    <div class="state">
        <div><b>disabled:</b> {{ String(disabled.value) }}</div>
        <div><b>target:</b> {{ String(targetOptions[targetIndex.value]) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
