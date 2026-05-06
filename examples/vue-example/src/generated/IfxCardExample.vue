<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxButton, IfxCard, IfxCardHeadline, IfxCardImage, IfxCardLinks, IfxCardOverline, IfxCardText, IfxTextField } from '@infineon/infineon-design-system-vue';

const directionOptions = ["horizontal","vertical"];
const directionIndex = ref(1);
const ariaLabelText = ref("Card");
const positionOptions = ["left","right"];
const positionIndex = ref(1);
const href = ref("");
const targetOptions = ["_blank","_self","_parent"];
const targetIndex = ref(0);
const src = ref("https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg");
const alt = ref("Coffee");

const handleDirectionChange = () => { directionIndex.value = (directionIndex.value + 1) % directionOptions.length; };
const handleAriaLabelTextChange = (nextValue: string) => { ariaLabelText.value = nextValue; };
const handlePositionChange = () => { positionIndex.value = (positionIndex.value + 1) % positionOptions.length; };
const handleHrefChange = (nextValue: string) => { href.value = nextValue; };
const handleTargetChange = () => { targetIndex.value = (targetIndex.value + 1) % targetOptions.length; };
const handleSrcChange = (nextValue: string) => { src.value = nextValue; };
const handleAltChange = (nextValue: string) => { alt.value = nextValue; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "direction": directionOptions[directionIndex.value],
  "ariaLabelText": ariaLabelText.value,
  "position": positionOptions[positionIndex.value],
  "href": href.value,
  "target": targetOptions[targetIndex.value],
  "src": src.value,
  "alt": alt.value,
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
  ["position", positionOptions[positionIndex.value]],
  ["href", href.value],
  ["target", targetOptions[targetIndex.value]],
  ["src", src.value],
  ["alt", alt.value],
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
      :direction="String(controlledProps.direction ?? "vertical")"
      :aria-label-text="String(controlledProps.ariaLabelText ?? "Card")"
      :href="String(controlledProps.href ?? "")"
      :target="String(controlledProps.target ?? "_blank")"
      __CONTROLLED_PROPS__>
      <ifx-card-image
        slot="img"
        @imgPosition="handleImgPosition"
        :position="String(controlledProps.position ?? "right")"
        :src="String(controlledProps.src ?? "https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg")"
        :alt="String(controlledProps.alt ?? "Coffee")" />
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
      :direction="String(controlledProps.direction ?? "vertical")"
      :aria-label-text="String(controlledProps.ariaLabelText ?? "Card")"
      :href="String(controlledProps.href ?? "")"
      :target="String(controlledProps.target ?? "_blank")"
      v-bind="controlledProps">
      <ifx-card-image
        slot="img"
        @imgPosition="handleImgPosition"
        :position="String(controlledProps.position ?? "right")"
        :src="String(controlledProps.src ?? "https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg")"
        :alt="String(controlledProps.alt ?? "Coffee")" />
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
        <ifx-button variant="secondary" @click="handlePositionChange">Toggle Position</ifx-button>
        <ifx-button variant="secondary" @click="handleTargetChange">Toggle Target</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="ariaLabelText" type="text" :value="String(ariaLabelText)" @input="handleAriaLabelTextChange(getInputValue($event))" />
        <ifx-text-field label="href" type="text" :value="String(href)" @input="handleHrefChange(getInputValue($event))" />
        <ifx-text-field label="src" type="text" :value="String(src)" @input="handleSrcChange(getInputValue($event))" />
        <ifx-text-field label="alt" type="text" :value="String(alt)" @input="handleAltChange(getInputValue($event))" />
    </div>

    <div class="state">
      <div><b>direction:</b> {{ String(directionOptions[directionIndex]) }}</div>
      <div><b>ariaLabelText:</b> {{ String(ariaLabelText) }}</div>
      <div><b>position:</b> {{ String(positionOptions[positionIndex]) }}</div>
      <div><b>href:</b> {{ String(href) }}</div>
      <div><b>target:</b> {{ String(targetOptions[targetIndex]) }}</div>
      <div><b>src:</b> {{ String(src) }}</div>
      <div><b>alt:</b> {{ String(alt) }}</div>
    </div>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
