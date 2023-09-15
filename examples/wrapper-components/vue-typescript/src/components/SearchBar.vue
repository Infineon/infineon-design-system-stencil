

<template>
  <div>
    <h2>Search-Bar</h2>
    <ifx-search-bar v-model="searchBarQuery" style="width: 100%" show-close-button="true"></ifx-search-bar>
    <p>Search bar: {{ searchBar }}</p>
    <br />
    <br />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const searchBar = ref('');


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


</script>
 