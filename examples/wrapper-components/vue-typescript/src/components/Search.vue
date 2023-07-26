

<template>
  <div>
    <h2>Ifx-Search-Input</h2>
    <h3>Using v-model</h3>
    <ifx-search-input v-model="searchInputQuery" style="width: 100%" show-close-button="true"></ifx-search-input>
    <p>Search input: {{ searchInput }}</p>

    <br />
    <h2>Ifx-Search-Bar</h2>
    <h3>Using v-model</h3>
    <ifx-search-bar v-model="searchBarQuery" style="width: 100%" show-close-button="true"></ifx-search-bar>
    <p>Search bar: {{ searchBar }}</p>
    <br />
    <br />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const searchBar = ref('');
const searchInput = ref('');

// Computed property to retrieve the query value
const searchInputQuery = computed({
  get: () => searchInput.value,
  set: (newValue) => handleSearchInput(newValue)
});

// Computed property to retrieve the query value
const searchBarQuery = computed({
  get: () => searchBar.value,
  set: (newValue) => {
    handleSearch(newValue)
  }
});


function handleSearch(event: any) {
  console.log("handling search ", event.detail)
  searchBar.value = event.detail;//search input emits an event and even though the search bar event is accessed automatically in v-model, we need to go one layer down to the detail of the search input event
}

function handleSearchInput(event: string) {
  console.log("updating search input: ", event)
  searchInput.value = event; //v-model automatically accesses event.detail
};
</script>
 