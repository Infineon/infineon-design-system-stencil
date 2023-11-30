<template>
  <div>
    <h2>Search-Field (v-model)</h2>
    <ifx-search-field v-model="searchInput" disabled="false" size='m' show-delete-icon="true"></ifx-search-field>
    <p>Search field 1: {{ searchInput }}</p>
    <h2>Search-Field (manual combination of value binding + event listener)</h2>
    <ifx-search-field @ifxInput="handleSearchInput" :value="searchValue" disabled="false" size='m'
      show-delete-icon="true"></ifx-search-field>
    <p>Search field 2: {{ searchValue }}</p>

    <br />
    <br />
  </div>
</template>

<script  setup>
import { ref } from 'vue'
const searchInput = ref('');
let searchValue = ref('');


function handleSearchInput(event) {
  console.log("updating search field 2: ", event.detail)
  searchValue.value = event.detail;
}

</script>

<style scoped></style>