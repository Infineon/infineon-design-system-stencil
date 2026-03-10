<script setup lang="ts">

import { IfxButton, IfxCard, IfxCardHeadline, IfxCardImage, IfxCardLinks, IfxCardOverline, IfxCardText } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const buttonOptions = ["button","link","none"];
const buttonIndex = ref(0);
const directionOptions = ["horizontal","vertical"];
const directionIndex = ref(1);
const positionOptions = ["left","right"];
const positionIndex = ref(1);
const targetOptions = ["_blank","_self","_parent"];
const targetIndex = ref(0);

const toggleButton = () => (buttonIndex.value = (buttonIndex.value + 1) % buttonOptions.length);
const toggleDirection = () => (directionIndex.value = (directionIndex.value + 1) % directionOptions.length);
const togglePosition = () => (positionIndex.value = (positionIndex.value + 1) % positionOptions.length);
const toggleTarget = () => (targetIndex.value = (targetIndex.value + 1) % targetOptions.length);

const controlledProps = computed(() => ({
  "button": buttonOptions[buttonIndex.value],
  "direction": directionOptions[directionIndex.value],
  "position": positionOptions[positionIndex.value],
  "target": targetOptions[targetIndex.value],
}));

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
  ["button", controlledProps.value["button"]],
  ["direction", controlledProps.value["direction"]],
  ["position", controlledProps.value["position"]],
  ["target", controlledProps.value["target"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-card
      href=""
      aria-label="Card"
      __CONTROLLED_ATTRS__>
      <ifx-card-image
        position="right"
        src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg"
        alt="Coffee"
        slot="img" />
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
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

</script>

<template>
  <div>
    <ifx-card
      href=""
      aria-label="Card"
      v-bind="controlledProps">
      <ifx-card-image
        position="right"
        src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg"
        alt="Coffee"
        slot="img" />
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
    <div class="controls">
      <IfxButton variant="secondary" @click="toggleButton">Toggle Button</IfxButton>
      <IfxButton variant="secondary" @click="toggleDirection">Toggle Direction</IfxButton>
      <IfxButton variant="secondary" @click="togglePosition">Toggle Position</IfxButton>
      <IfxButton variant="secondary" @click="toggleTarget">Toggle Target</IfxButton>
    </div>

    <div class="state">
        <div><b>button:</b> {{ String(buttonOptions[buttonIndex.value]) }}</div>
        <div><b>direction:</b> {{ String(directionOptions[directionIndex.value]) }}</div>
        <div><b>position:</b> {{ String(positionOptions[positionIndex.value]) }}</div>
        <div><b>target:</b> {{ String(targetOptions[targetIndex.value]) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
