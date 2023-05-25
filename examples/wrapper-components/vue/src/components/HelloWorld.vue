

<template>
  <div class="greetings">
    <h1 class="green">Stencil Framework integration - Vue3 </h1>

    <h2>Ifx-Search-Input</h2>
    <h3>Event binding using Vue syntax</h3>
    <br />
    <ifx-search-input v-model="searchInputQuery" style="width: 100%" show-close-button="true"></ifx-search-input>
    <p>Search input: {{ searchInput }}</p>

    <br />
    <h2>Ifx-Search-Bar</h2>
    <h3>Event binding using Vue syntax</h3>
    <ifx-search-bar v-model="searchBarQuery" style="width: 100%" show-close-button="true"></ifx-search-bar>
    <p>Search bar 1: {{ searchBar1 }}</p>
    <ifx-search-bar @ifxChange="handleSearch2" style="width: 100%" show-close-button="true"></ifx-search-bar>
    <p>Search bar 2: {{ searchBar2 }}</p>

    <br />

    <h2>Ifx-Progress-Bar</h2>

    <h3>Using v-model</h3>
    <ifx-progress-bar v-model="progress" size="m" show-label="true"></ifx-progress-bar>
    <br />
    <h3>Using value and the ifxChange event</h3>
    <ifx-progress-bar :value="progressValue2" size="m" show-label="true"
      @ifxChange:progressValue2="handleProgressUpdate"></ifx-progress-bar>
    <br />
    <ifx-button variant="outline" icon="" position="left" href="" target="_blank" color="primary" size="m"
      disabled="false" @click="updateProgressOnClick" @mouseover="handleMouseOver">
      Increase by 10
    </ifx-button>

    <br />


  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
</style>

<script setup>
import {
  computed,
  ref,
  watch,
  onMounted,
  nextTick,
} from 'vue';

const searchBar2 = ref('');
const searchBar1 = ref('');
const searchInput = ref('');
const progressValue1 = ref(10);
const progressValue2 = ref(10);



onMounted(() => {
  updateProgress();
  setInterval(updateProgress, 10000);
})

// Computed property to retrieve the query value
const searchInputQuery = computed({
  get: () => searchInput.value,
  set: (newValue) => handleSearchInput(newValue)
});

// Computed property to retrieve the query value
const searchBarQuery = computed({
  get: () => searchBar1.value,
  set: (newValue) => handleSearch1(newValue)
});


const progress = computed(() => {
  return progressValue1.value;
});

function updateProgress() {
  progressValue1.value < 100 ? progressValue1.value += 10 : progressValue1.value = 10;
}

function updateProgressOnClick() {
  progressValue2.value < 100 ? progressValue2.value += 10 : progressValue2.value = 10;
}


function handleProgressUpdate(event) {
  progressValue2.value = event.detail;
}

function handleSearch2(event) {
  console.log("handling search 2", event)
  searchBar2.value = event.detail?.detail;
}


function handleSearch1(event) {
  console.log("handling search 1", event)
  searchBar1.value = event.detail; //v-model automatically accesses event.detail (so no event.detail.detail access is necessary as when we listen to @ifxChange manually)
};

function handleSearchInput(event) {
  console.log("updating search input: ", event)
  searchInput.value = event; //v-model automatically accesses event.detail
};

function handleMouseOver() {
  console.log('Mouse over event detected');
};


</script>
 





 