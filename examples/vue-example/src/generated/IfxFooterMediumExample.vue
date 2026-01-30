<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import { IfxFooter, IfxIcon, IfxLink } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-footer copyright-text="© 1999 - 2026 Infineon Technologies AG">
      <div slot="socials">
        <ifx-link
          variant="title"
          href="http://facebook.com/infineon"
          aria-label="Follow us on Facebook">
          <ifx-icon icon="facebook" />
        </ifx-link>
        <ifx-link
          variant="title"
          href="http://youtube.com/infineon"
          aria-label="Follow us on Youtube">
          <ifx-icon icon="youtube" />
        </ifx-link>
        <ifx-link
          variant="title"
          href="http://instagram.com/infineon"
          aria-label="Follow us on Instagram">
          <ifx-icon icon="instagram" />
        </ifx-link>
        <ifx-link
          variant="title"
          href="http://linkedin.com/infineon"
          aria-label="Follow us on LinkedIn">
          <ifx-icon icon="linkedin" />
        </ifx-link>
        <ifx-link
          variant="title"
          href="http://xing.com/infineon"
          aria-label="Follow us on Xing">
          <ifx-icon icon="xing" />
        </ifx-link>
      </div>
      <div slot="info">
        <ifx-link
          variant="menu"
          href="https://yourwebsite.com/terms"
          target="_blank">
          Terms
        </ifx-link>
        <ifx-link
          variant="menu"
          href="https://yourwebsite.com/imprint"
          target="_blank">
          Imprint
        </ifx-link>
        <ifx-link
          variant="menu"
          href="https://yourwebsite.com/privacy-policy"
          target="_blank">
          Privacy policy
        </ifx-link>
        <ifx-link
          variant="menu"
          href="https://yourwebsite.com/glossary"
          target="_blank">
          Glossary
        </ifx-link>
      </div>
    </ifx-footer>
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
    <ifx-footer copyright-text="© 1999 - 2026 Infineon Technologies AG">
      <div slot="socials">
        <ifx-link
          variant="title"
          href="http://facebook.com/infineon"
          aria-label="Follow us on Facebook">
          <ifx-icon icon="facebook" />
        </ifx-link>
        <ifx-link
          variant="title"
          href="http://youtube.com/infineon"
          aria-label="Follow us on Youtube">
          <ifx-icon icon="youtube" />
        </ifx-link>
        <ifx-link
          variant="title"
          href="http://instagram.com/infineon"
          aria-label="Follow us on Instagram">
          <ifx-icon icon="instagram" />
        </ifx-link>
        <ifx-link
          variant="title"
          href="http://linkedin.com/infineon"
          aria-label="Follow us on LinkedIn">
          <ifx-icon icon="linkedin" />
        </ifx-link>
        <ifx-link
          variant="title"
          href="http://xing.com/infineon"
          aria-label="Follow us on Xing">
          <ifx-icon icon="xing" />
        </ifx-link>
      </div>
      <div slot="info">
        <ifx-link
          variant="menu"
          href="https://yourwebsite.com/terms"
          target="_blank">
          Terms
        </ifx-link>
        <ifx-link
          variant="menu"
          href="https://yourwebsite.com/imprint"
          target="_blank">
          Imprint
        </ifx-link>
        <ifx-link
          variant="menu"
          href="https://yourwebsite.com/privacy-policy"
          target="_blank">
          Privacy policy
        </ifx-link>
        <ifx-link
          variant="menu"
          href="https://yourwebsite.com/glossary"
          target="_blank">
          Glossary
        </ifx-link>
      </div>
    </ifx-footer>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
