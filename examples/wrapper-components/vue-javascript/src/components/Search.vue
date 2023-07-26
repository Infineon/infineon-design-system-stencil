<template>
  <div>
    <h2>Search-Input</h2>
    <h3>Using v-model</h3>
    <br />
    <ifx-search-input v-model="searchInput" style="width: 100%" show-close-button="true"></ifx-search-input>
    <p>Search input: {{ searchInput }}</p>

    <br />
    <h2>Ifx-Search-Bar</h2>
    <h3>Using v-model</h3>
    <ifx-search-bar v-model="searchBarModel" style="width: 100%" show-close-button="true"></ifx-search-bar>
    <p>Search bar : {{ searchBar }}</p>
    <br />
    <br />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const searchBar = ref('');
const searchInput = ref('');

const searchBarModel = computed({
  get: () => searchBar.value,
  set: (newValue) => {
    searchBar.value = newValue.detail || newValue;
  }
});

onMounted(() => {
  updateSearchBarAndSearchInput();
  setInterval(updateSearchBarAndSearchInput, 10000);
})


function updateSearchBarAndSearchInput() {
  console.log("updating search input and search bar from parent component")
  searchInput.value = searchInput.value + "+1";
  searchBar.value = searchBar.value + "+2";
}


</script>
