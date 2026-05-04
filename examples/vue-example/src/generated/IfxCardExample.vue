<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxButton, IfxCard, IfxCardHeadline, IfxCardImage, IfxCardLinks, IfxCardOverline, IfxCardText, IfxTextField } from '@infineon/infineon-design-system-vue';

const directionOptions = ["horizontal","vertical"];
const directionIndex = ref(1);
const ariaLabelText = ref("Card");
const href = ref("");
const targetOptions = ["_blank","_self","_parent"];
const targetIndex = ref(0);

const handleDirectionChange = () => { directionIndex.value = (directionIndex.value + 1) % directionOptions.length; };
const handleAriaLabelTextChange = (nextValue: string) => { ariaLabelText.value = nextValue; };
const handleHrefChange = (nextValue: string) => { href.value = nextValue; };
const handleTargetChange = () => { targetIndex.value = (targetIndex.value + 1) % targetOptions.length; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "direction": directionOptions[directionIndex.value],
  "ariaLabelText": ariaLabelText.value,
  "href": href.value,
  "target": targetOptions[targetIndex.value],
}));

const handleImgPosition = (event: CustomEvent) => {
  console.log('imgPosition:', event);
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
  ["direction", directionOptions[directionIndex.value]],
  ["ariaLabelText", ariaLabelText.value],
  ["href", href.value],
  ["target", targetOptions[targetIndex.value]],
]
  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))
  .join('\n'));

const codeTemplate = computed(() => `<script setup lang="ts">
import { IfxButton, IfxCard, IfxCardHeadline, IfxCardImage, IfxCardLinks, IfxCardOverline, IfxCardText } from '@infineon/infineon-design-system-vue';

const handleImgPosition = (event: CustomEvent) => {
  console.log('imgPosition:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-card
      aria-label=""
      __CONTROLLED_PROPS__>
      <ifx-card-image
        position="right"
        src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg"
        alt="Coffee"
        slot="img"
        @imgPosition="handleImgPosition" />
      <ifx-card-overline>
        Overline
      </ifx-card-overline>
      <ifx-card-headline>
        Headline
      </ifx-card-headline>
      <ifx-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </ifx-card-text>
      <ifx-card-links slot="buttons">
        <ifx-button variant="primary">
          Button
        </ifx-button>
        <ifx-button variant="secondary">
          Button
        </ifx-button>
      </ifx-card-links>
    </ifx-card>
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-card
      aria-label=""
      v-bind="controlledProps">
      <ifx-card-image
        position="right"
        src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg"
        alt="Coffee"
        slot="img"
        @imgPosition="handleImgPosition" />
      <ifx-card-overline>
        Overline
      </ifx-card-overline>
      <ifx-card-headline>
        Headline
      </ifx-card-headline>
      <ifx-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </ifx-card-text>
      <ifx-card-links slot="buttons">
        <ifx-button variant="primary">
          Button
        </ifx-button>
        <ifx-button variant="secondary">
          Button
        </ifx-button>
      </ifx-card-links>
    </ifx-card>
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="handleDirectionChange">Toggle Direction</ifx-button>
        <ifx-button variant="secondary" @click="handleTargetChange">Toggle Target</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="ariaLabelText" type="text" :value="String(ariaLabelText)" @input="handleAriaLabelTextChange(getInputValue($event))" />
        <ifx-text-field label="href" type="text" :value="String(href)" @input="handleHrefChange(getInputValue($event))" />
    </div>

    <div class="state">
      <div><b>direction:</b> {{ String(directionOptions[directionIndex]) }}</div>
      <div><b>ariaLabelText:</b> {{ String(ariaLabelText) }}</div>
      <div><b>href:</b> {{ String(href) }}</div>
      <div><b>target:</b> {{ String(targetOptions[targetIndex]) }}</div>
    </div>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
