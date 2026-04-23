<script setup lang="ts">

import { IfxButton, IfxCard, IfxCardHeadline, IfxCardImage, IfxCardLinks, IfxCardOverline, IfxCardText, IfxTextField } from '@infineon/infineon-design-system-vue';

const handleImgPosition = (event: CustomEvent) => {
  console.log('imgPosition:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleImgPosition = (event: CustomEvent) => {
  console.log('imgPosition:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-card
      direction="vertical"
      href=""
      target="_blank"
      aria-label=""
      aria-label-text="Card">
      <ifx-card-image
        position="right"
        src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg"
        alt="Coffee"
        slot="img"
        @imgPosition="handleImgPosition" />
      <ifx-card-overline @imgPosition="handleImgPosition">
        Overline
      </ifx-card-overline>
      <ifx-card-headline @imgPosition="handleImgPosition">
        Headline
      </ifx-card-headline>
      <ifx-card-text @imgPosition="handleImgPosition">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </ifx-card-text>
      <ifx-card-links
        slot="buttons"
        @imgPosition="handleImgPosition">
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
    <ifx-card
      direction="vertical"
      href=""
      target="_blank"
      aria-label=""
      aria-label-text="Card">
      <ifx-card-image
        position="right"
        src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg"
        alt="Coffee"
        slot="img"
        @imgPosition="handleImgPosition" />
      <ifx-card-overline @imgPosition="handleImgPosition">
        Overline
      </ifx-card-overline>
      <ifx-card-headline @imgPosition="handleImgPosition">
        Headline
      </ifx-card-headline>
      <ifx-card-text @imgPosition="handleImgPosition">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </ifx-card-text>
      <ifx-card-links
        slot="buttons"
        @imgPosition="handleImgPosition">
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
