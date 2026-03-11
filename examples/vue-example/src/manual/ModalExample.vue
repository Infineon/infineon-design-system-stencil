<template>
  <div>
    <ifx-modal
      caption="Modal Title"
      caption-aria-label="Additional information for caption"
      close-button-aria-label="Close modal"
      variant="default"
      :close-on-overlay-click="false"
      :show-close-button="true"
      size="s"
      v-model="opened"
      @ifxOpen="handleOpen"
      @ifxClose="handleClose">
      <div slot="content">
        <span>Modal content</span>
      </div>
      <div slot="buttons">
        <ifx-button variant="secondary">Cancel</ifx-button>
        <ifx-button>OK</ifx-button>
      </div>
    </ifx-modal>
    <ifx-button @click="openModal">Open Modal</ifx-button>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeExample }}</code></pre>
    </details>
  </div>
</template>

<script setup lang="ts">
import { IfxModal } from '@infineon/infineon-design-system-vue';

import { ref } from 'vue';

const opened = ref(false);

const openModal = () => {
  opened.value = true;
};

const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event.detail);
};

const handleClose = (event: CustomEvent) => {
  console.log('ifxClose:', event.detail);
};

const codeExample = `<template>
  <div>
    <ifx-modal
      caption="Modal Title"
      caption-aria-label="Additional information for caption"
      close-button-aria-label="Close modal"
      variant="default"
      :close-on-overlay-click="false"
      :show-close-button="true"
      size="s"
      v-model="opened"
      @ifxOpen="handleOpen"
      @ifxClose="handleClose">
      <div slot="content">
        <span>Modal content</span>
      </div>
      <div slot="buttons">
        <ifx-button variant="secondary">Cancel</ifx-button>
        <ifx-button>OK</ifx-button>
      </div>
    </ifx-modal>
    <ifx-button @click="openModal">Open Modal</ifx-button>
  </div>
</template>

<script setup lang="ts">
import { IfxModal } from '@infineon/infineon-design-system-vue';
import { ref } from 'vue';

const opened = ref(false);

const openModal = () => {
  opened.value = true;
};

const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event.detail);
};

const handleClose = (event: CustomEvent) => {
  console.log('ifxClose:', event.detail);
};
<\/script>`;
</script>
