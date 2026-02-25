<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import { IfxButton, IfxCard, IfxCardHeadline, IfxCardImage, IfxCardLinks, IfxCardOverline, IfxCardText } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-card
      direction="vertical"
      href=""
      target="_blank"
      aria-label="Card">
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
${'</'}template>`;

onMounted(() => {
  nextTick(() => {
    Prism.highlightAll();
  });
});
</script>

<template>
  <div>
    <ifx-card
      direction="vertical"
      href=""
      target="_blank"
      aria-label="Card">
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
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
