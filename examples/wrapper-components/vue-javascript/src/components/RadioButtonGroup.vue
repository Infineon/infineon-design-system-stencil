
<template>
  <div class="component">
    <h2>Radio Button Group</h2>
    <ifx-radio-button-group alignment="vertical" show-group-label="true" group-label-text="Group Label" show-caption="true" caption-text="Caption text, description, error notification" show-caption-icon="true" required="false">
        <ifx-radio-button value="0" disabled="false" checked="false" size="m" error="false">Option 0</ifx-radio-button>
        <ifx-radio-button value="1" size="m">Option 1</ifx-radio-button>
        <ifx-radio-button value="2" size="m">Option 2</ifx-radio-button>
    </ifx-radio-button-group>
    <br />
    <ifx-radio-button-group alignment="vertical" show-group-label="true" group-label-text="Group Label" show-caption="true" caption-text="Caption text, description, error notification" show-caption-icon="true" required="true">
        <ifx-radio-button value="0" disabled="false" checked="false" size="m" error="true">Option 0</ifx-radio-button>
        <ifx-radio-button value="1" size="m">Option 1</ifx-radio-button>
        <ifx-radio-button value="2" size="m">Option 2</ifx-radio-button>
    </ifx-radio-button-group>
    <br />
    <br />
  </div>
</template>

<script setup>


</script>
