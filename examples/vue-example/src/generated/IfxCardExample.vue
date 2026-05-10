<script setup lang="ts">

import { IfxButton, IfxCard, IfxCardHeadline, IfxCardImage, IfxCardLinks, IfxCardOverline, IfxCardText } from '@infineon/infineon-design-system-vue';

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
      aria-label-text="Card"
      :full-width="false">
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
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-card
      direction="vertical"
      href=""
      target="_blank"
      aria-label=""
      aria-label-text="Card"
      :full-width="false">
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
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
