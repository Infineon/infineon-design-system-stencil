<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxAccordion, IfxAccordionItem, IfxButton, IfxTextField } from '@infineon/infineon-design-system-vue';

const ariaLevelNumber = ref(3);
const autoCollapse = ref(false);

const handleAriaLevelNumberChange = (nextValue: string) => { ariaLevelNumber.value = Number(nextValue); };
const handleAutoCollapseChange = () => { autoCollapse.value = !autoCollapse.value; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "ariaLevelNumber": ariaLevelNumber.value,
  "autoCollapse": autoCollapse.value,
}));

const handleClose = (event: CustomEvent) => {
  console.log('ifxClose:', event);
  // Add your handler logic here
};

const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event);
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
  ["ariaLevelNumber", ariaLevelNumber.value],
  ["autoCollapse", autoCollapse.value],
]
  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))
  .join('\n'));

const codeTemplate = computed(() => `<script setup lang="ts">
import { IfxAccordion, IfxAccordionItem } from '@infineon/infineon-design-system-vue';

const handleClose = (event: CustomEvent) => {
  console.log('ifxClose:', event);
  // Add your handler logic here
};

const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-accordion __CONTROLLED_PROPS__>
      <ifx-accordion-item
        caption="Label"
        :open="true"
        icon=""
        @ifxClose="handleClose"
        @ifxOpen="handleOpen"
        :aria-level-number="String(controlledProps.ariaLevelNumber ?? '3')">
        Content for Initial Item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-accordion-item>
      <ifx-accordion-item
        caption="Label"
        :open="false"
        icon=""
        :aria-level-number="String(controlledProps.ariaLevelNumber ?? '3')">
        Content for Item #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-accordion-item>
      <ifx-accordion-item
        caption="Label"
        :open="false"
        icon=""
        :aria-level-number="String(controlledProps.ariaLevelNumber ?? '3')">
        Content for Item #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-accordion-item>
    </ifx-accordion>
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-accordion v-bind="controlledProps">
      <ifx-accordion-item
        caption="Label"
        :open="true"
        icon=""
        @ifxClose="handleClose"
        @ifxOpen="handleOpen"
        :aria-level-number="String(controlledProps.ariaLevelNumber ?? '3')">
        Content for Initial Item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-accordion-item>
      <ifx-accordion-item
        caption="Label"
        :open="false"
        icon=""
        :aria-level-number="String(controlledProps.ariaLevelNumber ?? '3')">
        Content for Item #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-accordion-item>
      <ifx-accordion-item
        caption="Label"
        :open="false"
        icon=""
        :aria-level-number="String(controlledProps.ariaLevelNumber ?? '3')">
        Content for Item #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-accordion-item>
    </ifx-accordion>
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="handleAutoCollapseChange">Toggle AutoCollapse</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="ariaLevelNumber" type="text" :value="String(ariaLevelNumber)" @input="handleAriaLevelNumberChange(getInputValue($event))" />
    </div>

    <div class="state">
      <div><b>ariaLevelNumber:</b> {{ String(ariaLevelNumber) }}</div>
      <div><b>autoCollapse:</b> {{ String(autoCollapse) }}</div>
    </div>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
