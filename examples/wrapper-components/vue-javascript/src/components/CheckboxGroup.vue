
<template>
  <div class="component">
    <h2>Checkbox group</h2>
    <ifx-checkbox-group alignment="vertical" show-group-label="true" group-label-text="Group Label" show-caption="true" caption-text="Caption text, description, error notification" show-caption-icon="true" required="false">
        <ifx-checkbox value="0" disabled="false" checked="false" size="m" indeterminate="false" error="false">Option 0</ifx-checkbox>
        <ifx-checkbox value="1" size="m">Option 1</ifx-checkbox>
        <ifx-checkbox value="2" size="m">Option 2</ifx-checkbox>
    </ifx-checkbox-group>
    <br />
    <ifx-checkbox-group alignment="vertical" show-group-label="true" group-label-text="Group Label" show-caption="true" caption-text="Caption text, description, error notification" show-caption-icon="true" required="true">
        <ifx-checkbox value="0" disabled="false" checked="false" size="m" indeterminate="false" error="true">Option 0</ifx-checkbox>
        <ifx-checkbox value="1" size="m">Option 1</ifx-checkbox>
        <ifx-checkbox value="2" size="m">Option 2</ifx-checkbox>
    </ifx-checkbox-group>
    <br />
  </div>
</template>

<script setup>


</script>

 
 