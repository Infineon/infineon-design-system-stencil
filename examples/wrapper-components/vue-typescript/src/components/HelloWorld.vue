<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

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
  set: (newValue) => {
    let newEvent = new CustomEvent('newEvent', { detail: newValue });
    handleSearch1(newEvent)
  }
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


function handleProgressUpdate(event: CustomEvent) {
  progressValue2.value = event.detail;
}

function handleSearch2(event: CustomEvent) {
  console.log("handling search 2", event)
  searchBar2.value = event.detail?.detail;
}


function handleSearch1(event: CustomEvent) {
  console.log("handling search 1", event)
  searchBar1.value = event.detail; //v-model automatically accesses event.detail (so no event.detail.detail access is necessary as when we listen to @ifxChange manually)
};

function handleSearchInput(event: string) {
  console.log("updating search input: ", event)
  searchInput.value = event; //v-model automatically accesses event.detail
};

function handleMouseOver() {
  console.log('Mouse over event detected');
};


let selected = ref(null);

const choices = computed(() => [
  { 'value': 'abc', 'label': 'Abc', 'selected': false, 'disabled': false },
  { 'value': 'def', 'label': 'Def', 'selected': false, 'disabled': false },
  { 'value': 'ghi', 'label': 'Ghi', 'selected': false, 'disabled': false },
  { 'value': 'jkl', 'label': 'Jkl', 'selected': false, 'disabled': false },
  { 'value': 'mno', 'label': 'Mno', 'selected': false, 'disabled': false },
  { 'value': 'pqr', 'label': 'Pqr', 'selected': false, 'disabled': false },
  { 'value': 'stu', 'label': 'Stu', 'selected': false, 'disabled': false },
  { 'value': 'vwx', 'label': 'Vwx', 'selected': false, 'disabled': false },
  { 'value': 'yz', 'label': 'Yz', 'selected': false, 'disabled': false },
  { 'value': 'selected', 'label': 'Selected', 'selected': true, 'disabled': false },
  { 'value': 'disabled', 'label': 'Disabled', 'selected': false, 'disabled': true },

]);

console.log("choices ", choices.value);
function updateValue(newVal: { detail: { value: null; }; }) {
  selected.value = newVal.detail.value;
  console.log('update value');
}
</script>

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

    <h2>Ifx-Choices</h2>
    <ifx-choices type="text"></ifx-choices>
    <hr />
    <ifx-choices type="single" name="single" :choices="[
      { 'value': 'abc', 'label': 'Abc', 'selected': false, 'disabled': false },
      { 'value': 'def', 'label': 'Def', 'selected': false, 'disabled': false }

    ]"></ifx-choices>
    <hr />
    <ifx-choices removeItemButton="true" @change="updateValue" type="multiple" name="multiple"
      :choices="choices"></ifx-choices>
    <p>Selected: {{ selected }}</p>
  </div>
</template>


