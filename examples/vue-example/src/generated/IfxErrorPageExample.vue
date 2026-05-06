<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxButton, IfxErrorPage, IfxTextField } from '@infineon/infineon-design-system-vue';

const typeOptions = ["403","404","503","maintenance"];
const typeIndex = ref(0);
const illustrationUrl = ref("");
const imgAlt = ref("");
const headline = ref("");
const description = ref("");

const handleTypeChange = () => { typeIndex.value = (typeIndex.value + 1) % typeOptions.length; };
const handleIllustrationUrlChange = (nextValue: string) => { illustrationUrl.value = nextValue; };
const handleImgAltChange = (nextValue: string) => { imgAlt.value = nextValue; };
const handleHeadlineChange = (nextValue: string) => { headline.value = nextValue; };
const handleDescriptionChange = (nextValue: string) => { description.value = nextValue; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "type": typeOptions[typeIndex.value],
  "illustrationUrl": illustrationUrl.value,
  "imgAlt": imgAlt.value,
  "headline": headline.value,
  "description": description.value,
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
  ["type", typeOptions[typeIndex.value]],
  ["illustrationUrl", illustrationUrl.value],
  ["imgAlt", imgAlt.value],
  ["headline", headline.value],
  ["description", description.value],
]
  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))
  .join('\n'));

const codeTemplate = computed(() => `<script setup lang="ts">
import { IfxButton, IfxErrorPage } from '@infineon/infineon-design-system-vue';
${'</'}script>

<template>
  <div>
    <ifx-error-page
      :type="String(controlledProps.type ?? "403")"
      :illustration-url="String(controlledProps.illustrationUrl ?? "")"
      :img-alt="String(controlledProps.imgAlt ?? "")"
      :headline="String(controlledProps.headline ?? "")"
      :description="String(controlledProps.description ?? "")"
      __CONTROLLED_PROPS__>
      <div slot="button">
        <ifx-button
          variant="primary"
          :full-width="true">
          Go to homepage
        </ifx-button>
      </div>
      <div slot="button">
        <ifx-button
          variant="secondary"
          :full-width="true">
          Get support
        </ifx-button>
      </div>
    </ifx-error-page>
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-error-page
      :type="String(controlledProps.type ?? "403")"
      :illustration-url="String(controlledProps.illustrationUrl ?? "")"
      :img-alt="String(controlledProps.imgAlt ?? "")"
      :headline="String(controlledProps.headline ?? "")"
      :description="String(controlledProps.description ?? "")"
      v-bind="controlledProps">
      <div slot="button">
        <ifx-button
          variant="primary"
          :full-width="true">
          Go to homepage
        </ifx-button>
      </div>
      <div slot="button">
        <ifx-button
          variant="secondary"
          :full-width="true">
          Get support
        </ifx-button>
      </div>
    </ifx-error-page>
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="handleTypeChange">Toggle Type</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="illustrationUrl" type="text" :value="String(illustrationUrl)" @input="handleIllustrationUrlChange(getInputValue($event))" />
        <ifx-text-field label="imgAlt" type="text" :value="String(imgAlt)" @input="handleImgAltChange(getInputValue($event))" />
        <ifx-text-field label="headline" type="text" :value="String(headline)" @input="handleHeadlineChange(getInputValue($event))" />
        <ifx-text-field label="description" type="text" :value="String(description)" @input="handleDescriptionChange(getInputValue($event))" />
    </div>

    <div class="state">
      <div><b>type:</b> {{ String(typeOptions[typeIndex]) }}</div>
      <div><b>illustrationUrl:</b> {{ String(illustrationUrl) }}</div>
      <div><b>imgAlt:</b> {{ String(imgAlt) }}</div>
      <div><b>headline:</b> {{ String(headline) }}</div>
      <div><b>description:</b> {{ String(description) }}</div>
    </div>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
