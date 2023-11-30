<template>
  <div>
    <h2>Search-Field (v-model)</h2>
    <ifx-search-field v-model="searchValue1" disabled="false" size='m' show-delete-icon="true"></ifx-search-field>
    <p>Search field 1: {{ searchValue1 }}</p>
    <h2>Search-Field (manual combination of value binding + event listener)</h2>
    <ifx-search-field @ifxInput="handleSearchInput" :value="searchValue2" disabled="false" size='m'
      show-delete-icon="true"></ifx-search-field>
    <p>Search field 2: {{ searchValue2 }}</p>
    <br />
    <br />
  </div>
</template>

<script  setup>
import { ref } from 'vue'
let searchValue1 = ref('');
let searchValue2 = ref('');


function handleSearchInput(event) {
  console.log("updating search field 2: ", event.detail)
  searchValue2.value = event.detail;
}

</script>

<style scoped></style>