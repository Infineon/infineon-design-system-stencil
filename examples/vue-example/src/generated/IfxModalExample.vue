<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';

const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event.detail);
  // Add your handler logic here
};

const handleClose = (event: CustomEvent) => {
  console.log('ifxClose:', event.detail);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event.detail);
  // Add your handler logic here
};

const handleClose = (event: CustomEvent) => {
  console.log('ifxClose:', event.detail);
  // Add your handler logic here
};
<\/script>

<template>
  <div>
    <div
      @ifxOpen="handleOpen"
      @ifxClose="handleClose">
      <ifx-modal
        caption="Modal Title"
        caption-aria-label="Additional information for caption"
        close-button-aria-label="Close modal"
        variant="default"
        close-on-overlay-click="false"
        show-close-button="true"
        size="s">
        <div slot="content">
          <span>
            Modal content
          </span>
        </div>
        <div slot="buttons">
          <ifx-button variant="secondary">
            Cancel
          </ifx-button>
          <ifx-button>
            OK
          </ifx-button>
        </div>
      </ifx-modal>
      <ifx-button id="open">
        Open Modal
      </ifx-button>
    </div>
  </div>
<\/template>`;

onMounted(() => {
  nextTick(() => {
    Prism.highlightAll();
  });
});
</script>

<template>
  <div>
    <div
      @ifxOpen="handleOpen"
      @ifxClose="handleClose">
      <ifx-modal
        caption="Modal Title"
        caption-aria-label="Additional information for caption"
        close-button-aria-label="Close modal"
        variant="default"
        close-on-overlay-click="false"
        show-close-button="true"
        size="s">
        <div slot="content">
          <span>
            Modal content
          </span>
        </div>
        <div slot="buttons">
          <ifx-button variant="secondary">
            Cancel
          </ifx-button>
          <ifx-button>
            OK
          </ifx-button>
        </div>
      </ifx-modal>
      <ifx-button id="open">
        Open Modal
      </ifx-button>
    </div>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
