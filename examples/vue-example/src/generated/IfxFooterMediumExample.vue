<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxFooter, IfxIcon, IfxLink, IfxTextField } from '@infineon/infineon-design-system-vue';

const copyrightText = ref("© 1999 - 2026 Infineon Technologies AG");

const handleCopyrightTextChange = (nextValue: string) => { copyrightText.value = nextValue; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "copyrightText": copyrightText.value,
}));

const getInputValue = (event: Event) => String((event.target as HTMLInputElement | null)?.value ?? "");

const formatPropValueForCode = (name: string, value: unknown): string => {
  if (typeof value === 'boolean') return ':' + name + '="' + String(value) + '"';
  if (typeof value === 'number') return ':' + name + '="' + String(value) + '"';
  if (value === null) return ':' + name + '="null"';
  if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
    const escaped = JSON.stringify(value).replace(/'/g, "\\'");
    return ":" + name + "='" + escaped + "'";
  }
  const escaped = String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  return name + '="' + escaped + '"';
};

const controlledPropsCode = computed(() => [
  ["copyrightText", copyrightText.value],
]
  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))
  .join('\n'));

const codeTemplate = computed(() => `<script setup lang="ts">
import { IfxFooter, IfxIcon, IfxLink } from '@infineon/infineon-design-system-vue';
${'</'}script>

<template>
  <div>
    <ifx-footer
      :copyright-text="String(controlledProps.copyrightText ?? "© 1999 - 2026 Infineon Technologies AG")"
      __CONTROLLED_PROPS__>
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
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-footer
      :copyright-text="String(controlledProps.copyrightText ?? "© 1999 - 2026 Infineon Technologies AG")"
      v-bind="controlledProps">
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
    <h3 class="controls-title">Controls</h3>
    
    <div class="controls controls-input">
        <ifx-text-field label="copyrightText" type="text" :value="String(copyrightText)" @input="handleCopyrightTextChange(getInputValue($event))" />
    </div>

    <div class="state">
      <div><b>copyrightText:</b> {{ String(copyrightText) }}</div>
    </div>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
