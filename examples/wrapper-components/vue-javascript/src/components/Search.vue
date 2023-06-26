

<template>
  <div>
    <h2>Ifx-Search-Input</h2>
    <h3>Using v-model</h3>
    <br />
    <ifx-search-input v-model="searchInputQuery" style="width: 100%" show-close-button="true"></ifx-search-input>
    <p>Search input: {{ searchInput }}</p>

    <br />
    <h2>Ifx-Search-Bar</h2>
    <h3>Using v-model</h3>
    <ifx-search-bar v-model="searchBarQuery" style="width: 100%" show-close-button="true"></ifx-search-bar>
    <p>Search bar 1: {{ searchBar1 }}</p>
    <h3>One-way data binding</h3>
    <ifx-search-bar @ifxChange="handleSearch2" style="width: 100%" show-close-button="true"></ifx-search-bar>
    <p>Search bar 2: {{ searchBar2 }}</p>

    <br />
  </div>
</template>

<script  setup>
import { computed, ref } from 'vue'

const searchBar2 = ref('');
const searchBar1 = ref('');
const searchInput = ref('');

// Computed property to retrieve the query value
const searchInputQuery = computed({
  get: () => searchInput.value,
  set: (newValue) => handleSearchInput(newValue)
});

// Computed property to retrieve the query value
const searchBarQuery = computed({
  get: () => searchBar1.value,
  set: (newValue) => {
    let newEvent = new CustomEvent('newEvent', { detail: newValue });
    handleSearch1(newEvent)
  }
});

function handleSearch2(event) {
  console.log("handling search 2", event)
  searchBar2.value = event.detail?.detail; //search input emits an event and the search bar, so it needs to be accessed this way
}


function handleSearch1(event) {
  console.log("handling search 1", event)
  searchBar1.value = event.detail?.detail;//search input emits an event and the search bar, so it needs to be accessed this way
}

function handleSearchInput(event) {
  console.log("updating search input: ", event)
  searchInput.value = event; //v-model automatically accesses event.detail
};
</script>

<style scoped>
.app {
  text-align: center;
  flex-direction: column;
  display: flex;
  align-items: center;
}
</style>