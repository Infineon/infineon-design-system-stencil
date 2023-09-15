<template>
  <div>
    <h2>Search-Bar</h2>
    <ifx-search-bar v-model="searchBarModel" style="width: 100%" show-close-button="true"></ifx-search-bar>
    <p>Search bar : {{ searchBar }}</p>
    <br />
    <br />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const searchBar = ref('');

const searchBarModel = computed({
  get: () => searchBar.value,
  set: (newValue) => {
    searchBar.value = newValue.detail || newValue;
  }
});

onMounted(() => {
  updateSearchBarAndSearchInput();
  setInterval(updateSearchBarAndSearchInput, 50000);
})


function updateSearchBarAndSearchInput() {
  console.log("updating search input and search bar from parent component")
  searchBar.value = searchBar.value + "+2";
}


</script>
