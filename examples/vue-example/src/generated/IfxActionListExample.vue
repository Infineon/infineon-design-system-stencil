<script setup lang="ts">

import { IfxActionList, IfxActionListItem, IfxButton, IfxIcon, IfxTextField } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const disabled = ref(false);
const href = ref("");
const targetOptions = ["_self","_blank","_parent","_top"];
const targetIndex = ref(0);
const value = ref("");
const itemTitle = ref("Dashboard");
const description = ref("View your main dashboard");
const listAriaLabel = ref("Navigation menu");
const itemAriaLabel = ref("Navigation item");

const toggleDisabled = () => (disabled.value = !disabled.value);
const toggleHref = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; href.value = String(raw); };
const toggleTarget = () => (targetIndex.value = (targetIndex.value + 1) % targetOptions.length);
const toggleValue = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; value.value = String(raw); };
const toggleItemTitle = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; itemTitle.value = String(raw); };
const toggleDescription = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; description.value = String(raw); };
const toggleListAriaLabel = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; listAriaLabel.value = String(raw); };
const toggleItemAriaLabel = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; itemAriaLabel.value = String(raw); };

const controlledProps = computed(() => ({
  "disabled": disabled.value,
  "href": href.value,
  "target": targetOptions[targetIndex.value],
  "value": value.value,
  "itemTitle": itemTitle.value,
  "description": description.value,
  "listAriaLabel": listAriaLabel.value,
  "itemAriaLabel": itemAriaLabel.value,
}));
const boundProps = controlledProps;

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
  ["href", controlledProps.value["href"]],
  ["target", controlledProps.value["target"]],
  ["value", controlledProps.value["value"]],
  ["itemTitle", controlledProps.value["itemTitle"]],
  ["description", controlledProps.value["description"]],
  ["listAriaLabel", controlledProps.value["listAriaLabel"]],
  ["itemAriaLabel", controlledProps.value["itemAriaLabel"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeStringWithAttrs = `<script setup lang="ts">
const handleActionListItemClick = (event: CustomEvent) => {
  console.log('ifxActionListItemClick:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-action-list __CONTROLLED_ATTRS__>
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

const codeString = codeStringWithAttrs;

</script>

<template>
  <div>
    <ifx-action-list v-bind="controlledProps">
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
	<div class="controls controls-toggle">
      <IfxButton variant="secondary" @click="toggleDisabled">Toggle Disabled</IfxButton>
      <IfxButton variant="secondary" @click="toggleTarget">Toggle Target</IfxButton>
    </div>
	<div class="controls controls-input">
      <IfxTextField label="href" type="text" :value="String(href)" @input="toggleHref" @ifxInput="toggleHref" />
      <IfxTextField label="value" type="text" :value="String(value)" @input="toggleValue" @ifxInput="toggleValue" />
      <IfxTextField label="itemTitle" type="text" :value="String(itemTitle)" @input="toggleItemTitle" @ifxInput="toggleItemTitle" />
      <IfxTextField label="description" type="text" :value="String(description)" @input="toggleDescription" @ifxInput="toggleDescription" />
      <IfxTextField label="listAriaLabel" type="text" :value="String(listAriaLabel)" @input="toggleListAriaLabel" @ifxInput="toggleListAriaLabel" />
      <IfxTextField label="itemAriaLabel" type="text" :value="String(itemAriaLabel)" @input="toggleItemAriaLabel" @ifxInput="toggleItemAriaLabel" />
    </div>

    <div class="state">
        <div><b>disabled:</b> {{ String(disabled) }}</div>
        <div><b>href:</b> {{ String(href) }}</div>
        <div><b>target:</b> {{ String(targetOptions[targetIndex]) }}</div>
        <div><b>value:</b> {{ String(value) }}</div>
        <div><b>itemTitle:</b> {{ String(itemTitle) }}</div>
        <div><b>description:</b> {{ String(description) }}</div>
        <div><b>listAriaLabel:</b> {{ String(listAriaLabel) }}</div>
        <div><b>itemAriaLabel:</b> {{ String(itemAriaLabel) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
