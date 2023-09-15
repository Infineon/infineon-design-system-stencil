<template>
  <div>
    <h2>Search-Field</h2>
    <ifx-search-field v-model="searchInput" disabled="false" size='m' show-delete-icon="true"></ifx-search-field>
    <p>Search field: {{ searchInput }}</p>
    <br />
    <br />
  </div>
</template>

<script  setup>
import { ref, onMounted } from 'vue'
const searchInput = ref('');

onMounted(() => {
  updateSearchBarAndSearchInput();
  setInterval(updateSearchBarAndSearchInput, 50000);
})


function updateSearchBarAndSearchInput() {
  console.log("updating search field")
  searchInput.value = searchInput.value + "+1";
}

</script>

<style scoped></style>