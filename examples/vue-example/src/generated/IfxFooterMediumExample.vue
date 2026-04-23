<script setup lang="ts">

import { IfxButton, IfxFooter, IfxIcon, IfxLink, IfxTextField } from '@infineon/infineon-design-system-vue';

const handleConsoleError = (event: CustomEvent) => {
  console.log('consoleError:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleConsoleError = (event: CustomEvent) => {
  console.log('consoleError:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-footer copyright-text="© 1999 - 2026 Infineon Technologies AG">
      <div
        slot="socials"
        @consoleError="handleConsoleError">
        <ifx-link
          variant="title"
          href="http://facebook.com/infineon"
          aria-label="Follow us on Facebook"
          @consoleError="handleConsoleError">
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
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

const codeString = codeStringWithAttrs;

</script>

<template>
  <div>
    <ifx-footer copyright-text="© 1999 - 2026 Infineon Technologies AG">
      <div
        slot="socials"
        @consoleError="handleConsoleError">
        <ifx-link
          variant="title"
          href="http://facebook.com/infineon"
          aria-label="Follow us on Facebook"
          @consoleError="handleConsoleError">
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
    <h3 class="controls-title">Controls</h3>
	<div class="controls controls-toggle">
      <IfxButton variant="secondary" @click="toggleIcon">Toggle Icon</IfxButton>
    </div>
	<div class="controls controls-input">
      <IfxTextField label="copyrightText" type="text" :value="String(copyrightText)" @input="toggleCopyrightText" @ifxInput="toggleCopyrightText" />
      <IfxTextField label="href" type="text" :value="String(href)" @input="toggleHref" @ifxInput="toggleHref" />
      <IfxTextField label="ariaLabelOfLink" type="text" :value="String(ariaLabelOfLink)" @input="toggleAriaLabelOfLink" @ifxInput="toggleAriaLabelOfLink" />
    </div>

    <div class="state">
        <div><b>copyrightText:</b> {{ String(copyrightText) }}</div>
        <div><b>icon:</b> {{ String(iconOptions[iconIndex]) }}</div>
        <div><b>href:</b> {{ String(href) }}</div>
        <div><b>ariaLabelOfLink:</b> {{ String(ariaLabelOfLink) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
