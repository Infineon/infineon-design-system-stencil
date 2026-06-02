<script setup lang="ts">
import { onMounted, nextTick, ref } from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import { IfxCheckbox, IfxSlider, IfxSwitch, IfxSearchBar, IfxSearchField, IfxTextField, IfxTextarea } from '@infineon/infineon-design-system-vue';


const booleanValue = ref(false);

const textValue = ref('');
const sliderValue = ref(50);

const codeString = `<script setup lang="ts">
import { IfxCheckbox, IfxSlider, IfxSwitch, IfxSearchBar, IfxSearchField, IfxTextField, IfxTextarea } from '@infineon/infineon-design-system-vue';

const booleanValue = ref(false);
const textValue = ref('');
const sliderValue = ref(50);

${'</'}script>

<template>
  <div>
    <h3>Boolean inputs (bound to same value)</h3>
    <ifx-checkbox v-model="booleanValue">
        Checkbox 1
    </ifx-checkbox>
    <ifx-switch v-model="booleanValue">
        Switch 1
    </ifx-switch>

    <h3>Text inputs (bound to same value)</h3>
    <ifx-search-field v-model="textValue" size="s" :show-delete-icon="true"></ifx-search-field>
    <ifx-text-field v-model="textValue" :show-delete-icon="true" placeholder="Type here..."></ifx-text-field>
    <ifx-textarea v-model="textValue" label="Message" placeholder="Write a longer message..."></ifx-textarea>
    <ifx-search-bar v-model="textValue" :is-open="true"></ifx-search-bar>

    <h3>Slider input</h3>
    <ifx-slider v-model="sliderValue" name="vModelSlider" :min="0" :max="100" :step="1" :show-percentage="true"></ifx-slider>
    <ifx-slider v-model="sliderValue" name="vModelSliderMirror" :min="0" :max="100" :step="1" :show-percentage="true"></ifx-slider>
  </div>
${'</'}template>`;

onMounted(() => {
  nextTick(() => {
    Prism.highlightAll();
  });
});
</script>

<template>
  <div class="checkbox-container">
    <h3>Boolean inputs (bound to same value)</h3>
    <ifx-checkbox v-model="booleanValue">
        Checkbox 1
    </ifx-checkbox>
    <ifx-switch v-model="booleanValue">
        Switch 1
    </ifx-switch>

    <h3>Text inputs (bound to same value)</h3>
    <ifx-search-field v-model="textValue" size="s" :show-delete-icon="true"></ifx-search-field>
    <ifx-text-field v-model="textValue" :show-delete-icon="true" placeholder="Type here..."></ifx-text-field>
    <ifx-textarea v-model="textValue" label="Message" placeholder="Write a longer message..."></ifx-textarea>
    <ifx-search-bar v-model="textValue" :is-open="true"></ifx-search-bar>

    <h3>Slider input</h3>
    <ifx-slider v-model="sliderValue" name="vModelSlider" :min="0" :max="100" :step="1" :show-percentage="true"></ifx-slider>
    <ifx-slider v-model="sliderValue" name="vModelSliderMirror" :min="0" :max="100" :step="1" :show-percentage="true"></ifx-slider>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
<style>
h2 {
    margin-bottom: 0rem;
}
.checkbox-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>