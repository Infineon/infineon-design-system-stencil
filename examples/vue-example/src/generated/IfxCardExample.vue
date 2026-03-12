<script setup lang="ts">

import { IfxButton, IfxCard, IfxCardHeadline, IfxCardImage, IfxCardLinks, IfxCardOverline, IfxCardText, IfxTextField } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const overline = ref("Overline");
const headline = ref("Headline");
const description = ref("Some quick example text to build on the card title and make up the bulk of the card's content.");
const buttonOptions = ["button","link","none"];
const buttonIndex = ref(0);
const directionOptions = ["horizontal","vertical"];
const directionIndex = ref(1);
const ariaLabel = ref("Card");
const positionOptions = ["left","right"];
const positionIndex = ref(1);
const href = ref("");
const targetOptions = ["_blank","_self","_parent"];
const targetIndex = ref(0);
const src = ref("https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg");
const alt = ref("Coffee");

const toggleOverline = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; overline.value = String(raw); };
const toggleHeadline = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; headline.value = String(raw); };
const toggleDescription = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; description.value = String(raw); };
const toggleButton = () => (buttonIndex.value = (buttonIndex.value + 1) % buttonOptions.length);
const toggleDirection = () => (directionIndex.value = (directionIndex.value + 1) % directionOptions.length);
const toggleAriaLabel = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; ariaLabel.value = String(raw); };
const togglePosition = () => (positionIndex.value = (positionIndex.value + 1) % positionOptions.length);
const toggleHref = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; href.value = String(raw); };
const toggleTarget = () => (targetIndex.value = (targetIndex.value + 1) % targetOptions.length);
const toggleSrc = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; src.value = String(raw); };
const toggleAlt = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; alt.value = String(raw); };

const controlledProps = computed(() => ({
  "overline": overline.value,
  "headline": headline.value,
  "description": description.value,
  "button": buttonOptions[buttonIndex.value],
  "direction": directionOptions[directionIndex.value],
  "ariaLabel": ariaLabel.value,
  "position": positionOptions[positionIndex.value],
  "href": href.value,
  "target": targetOptions[targetIndex.value],
  "src": src.value,
  "alt": alt.value,
}));
const boundProps = controlledProps;

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
  ["overline", controlledProps.value["overline"]],
  ["headline", controlledProps.value["headline"]],
  ["description", controlledProps.value["description"]],
  ["button", controlledProps.value["button"]],
  ["direction", controlledProps.value["direction"]],
  ["ariaLabel", controlledProps.value["ariaLabel"]],
  ["position", controlledProps.value["position"]],
  ["href", controlledProps.value["href"]],
  ["target", controlledProps.value["target"]],
  ["src", controlledProps.value["src"]],
  ["alt", controlledProps.value["alt"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeStringWithAttrs = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-card __CONTROLLED_ATTRS__>
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

const codeString = codeStringWithAttrs;

</script>

<template>
  <div>
    <ifx-card v-bind="controlledProps">
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
	<div class="controls controls-toggle">
      <IfxButton variant="secondary" @click="toggleButton">Toggle Button</IfxButton>
      <IfxButton variant="secondary" @click="toggleDirection">Toggle Direction</IfxButton>
      <IfxButton variant="secondary" @click="togglePosition">Toggle Position</IfxButton>
      <IfxButton variant="secondary" @click="toggleTarget">Toggle Target</IfxButton>
    </div>
	<div class="controls controls-input">
      <IfxTextField label="overline" type="text" :value="String(overline)" @input="toggleOverline" @ifxInput="toggleOverline" />
      <IfxTextField label="headline" type="text" :value="String(headline)" @input="toggleHeadline" @ifxInput="toggleHeadline" />
      <IfxTextField label="description" type="text" :value="String(description)" @input="toggleDescription" @ifxInput="toggleDescription" />
      <IfxTextField label="ariaLabel" type="text" :value="String(ariaLabel)" @input="toggleAriaLabel" @ifxInput="toggleAriaLabel" />
      <IfxTextField label="href" type="text" :value="String(href)" @input="toggleHref" @ifxInput="toggleHref" />
      <IfxTextField label="src" type="text" :value="String(src)" @input="toggleSrc" @ifxInput="toggleSrc" />
      <IfxTextField label="alt" type="text" :value="String(alt)" @input="toggleAlt" @ifxInput="toggleAlt" />
    </div>

    <div class="state">
        <div><b>overline:</b> {{ String(overline) }}</div>
        <div><b>headline:</b> {{ String(headline) }}</div>
        <div><b>description:</b> {{ String(description) }}</div>
        <div><b>button:</b> {{ String(buttonOptions[buttonIndex]) }}</div>
        <div><b>direction:</b> {{ String(directionOptions[directionIndex]) }}</div>
        <div><b>ariaLabel:</b> {{ String(ariaLabel) }}</div>
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
