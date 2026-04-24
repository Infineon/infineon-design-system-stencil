<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxActionList, IfxActionListItem, IfxButton, IfxIcon, IfxTextField } from '@infineon/infineon-design-system-vue';

const disabled = ref(false);
const href = ref("");
const targetOptions = ["_self","_blank","_parent","_top"];
const targetIndex = ref(0);
const value = ref("");
const itemTitle = ref("Dashboard");
const description = ref("View your main dashboard");
const listAriaLabel = ref("Navigation menu");
const itemAriaLabel = ref("Navigation item");

const toggleDisabled = () => { disabled.value = !disabled.value; };
const toggleHref = (nextValue: string) => { href.value = nextValue; };
const toggleTarget = () => { targetIndex.value = (targetIndex.value + 1) % targetOptions.length; };
const toggleValue = (nextValue: string) => { value.value = nextValue; };
const toggleItemTitle = (nextValue: string) => { itemTitle.value = nextValue; };
const toggleDescription = (nextValue: string) => { description.value = nextValue; };
const toggleListAriaLabel = (nextValue: string) => { listAriaLabel.value = nextValue; };
const toggleItemAriaLabel = (nextValue: string) => { itemAriaLabel.value = nextValue; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "disabled": disabled.value,
  "href": href.value,
  "target": targetOptions[targetIndex.value],
  "value": value.value,
  "itemTitle": itemTitle.value,
  "description": description.value,
  "listAriaLabel": listAriaLabel.value,
  "itemAriaLabel": itemAriaLabel.value,
}));

const handleActionListItemClick = (event: CustomEvent) => {
  console.log('ifxActionListItemClick:', event);
  // Add your handler logic here
};

const handleConsoleError = (event: CustomEvent) => {
  console.log('consoleError:', event);
  // Add your handler logic here
};

const getInputValue = (event: Event) => String((event.target as HTMLInputElement | null)?.value ?? "");

const formatPropValueForCode = (name: string, value: unknown): string => {
  if (typeof value === 'boolean') return ':' + name + '="' + String(value) + '"';
  if (typeof value === 'number') return ':' + name + '="' + String(value) + '"';
  if (value === null) return ':' + name + '="null"';
  if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
    const escaped = JSON.stringify(value).replace(/'/g, "\\'");
    return ":" + name + "='" + escaped + "'";
  }
  const escaped = String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  return name + '="' + escaped + '"';
};

const controlledPropsCode = computed(() => [
  ["disabled", disabled.value],
  ["href", href.value],
  ["target", targetOptions[targetIndex.value]],
  ["value", value.value],
  ["itemTitle", itemTitle.value],
  ["description", description.value],
  ["listAriaLabel", listAriaLabel.value],
  ["itemAriaLabel", itemAriaLabel.value],
]
  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))
  .join('\n'));

const codeTemplate = computed(() => `<script setup lang="ts">
import { IfxActionList, IfxActionListItem, IfxIcon } from '@infineon/infineon-design-system-vue';

const handleActionListItemClick = (event: CustomEvent) => {
  console.log('ifxActionListItemClick:', event);
  // Add your handler logic here
};

const handleConsoleError = (event: CustomEvent) => {
  console.log('consoleError:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-action-list __CONTROLLED_PROPS__>
      <ifx-action-list-item
        item-title="Dashboard"
        description="View your main dashboard"
        value="dashboard"
        item-aria-label="Navigation item"
        @ifxActionListItemClick="handleActionListItemClick">
        <ifx-icon
          slot="trailing"
          icon="chevron-right-16"
          @consoleError="handleConsoleError" />
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
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
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
          icon="chevron-right-16"
          @consoleError="handleConsoleError" />
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
        <ifx-button variant="secondary" @click="toggleDisabled">Toggle Disabled</ifx-button>
        <ifx-button variant="secondary" @click="toggleTarget">Toggle Target</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="href" type="text" :value="String(href)" @input="toggleHref(getInputValue($event))" />
        <ifx-text-field label="value" type="text" :value="String(value)" @input="toggleValue(getInputValue($event))" />
        <ifx-text-field label="itemTitle" type="text" :value="String(itemTitle)" @input="toggleItemTitle(getInputValue($event))" />
        <ifx-text-field label="description" type="text" :value="String(description)" @input="toggleDescription(getInputValue($event))" />
        <ifx-text-field label="listAriaLabel" type="text" :value="String(listAriaLabel)" @input="toggleListAriaLabel(getInputValue($event))" />
        <ifx-text-field label="itemAriaLabel" type="text" :value="String(itemAriaLabel)" @input="toggleItemAriaLabel(getInputValue($event))" />
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
