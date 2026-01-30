<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import { IfxAccordion, IfxAccordionItem } from '@infineon/infineon-design-system-vue';

const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event);
  // Add your handler logic here
};

const handleClose = (event: CustomEvent) => {
  console.log('ifxClose:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event);
  // Add your handler logic here
};

const handleClose = (event: CustomEvent) => {
  console.log('ifxClose:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-accordion auto-collapse="false">
      <ifx-accordion-item
        caption="Label"
        open="true"
        aria-level="3"
        mutable="true"
        @ifxOpen="handleOpen"
        @ifxClose="handleClose">
        Content for Initial Item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-accordion-item>
      <ifx-accordion-item
        caption="Label"
        open="false"
        aria-level="3"
        mutable="true">
        Content for Item #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-accordion-item>
      <ifx-accordion-item
        caption="Label"
        open="false"
        aria-level="3"
        mutable="true">
        Content for Item #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-accordion-item>
    </ifx-accordion>
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
    <ifx-accordion auto-collapse="false">
      <ifx-accordion-item
        caption="Label"
        open="true"
        aria-level="3"
        mutable="true"
        @ifxOpen="handleOpen"
        @ifxClose="handleClose">
        Content for Initial Item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-accordion-item>
      <ifx-accordion-item
        caption="Label"
        open="false"
        aria-level="3"
        mutable="true">
        Content for Item #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-accordion-item>
      <ifx-accordion-item
        caption="Label"
        open="false"
        aria-level="3"
        mutable="true">
        Content for Item #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-accordion-item>
    </ifx-accordion>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
