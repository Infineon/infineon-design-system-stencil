<template>
  <div>
    <h2>Search Bar (v-model)</h2>
    <ifx-search-bar v-model="searchValue1" is-open="undefined" disabled="false" show-close-button="true"></ifx-search-bar>
    <p>Search Bar 1: {{ searchValue1 }}</p>
    <h2>Search Bar (manual combination of value binding + event listener)</h2>
    <ifx-search-bar @ifxInput="handleSearchInput" :value="searchValue2" disabled="false" size='m'
      show-delete-icon="true"></ifx-search-bar>
    <p>Search Bar 2: {{ searchValue2 }}</p>
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