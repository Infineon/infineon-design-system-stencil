

<template>
  <div class="greetings">
    <h1 class="green">Stencil Framework integration - Vue3 </h1>

    <h2>Event binding using Vue syntax</h2>
    <br />
    <ifx-search-bar @search="handleSearch" style="width: 100%" show-close-button="true"></ifx-search-bar>
    <p>Query: {{ query }}</p>

    <br />

    <h2>V-model</h2>
    <ifx-progress-bar :percentage="percentage" size="m" show-label="true"
      @update:percentage="handlePercentageUpdate"></ifx-progress-bar>
    <br />
    <ifx-button variant="solid" icon="" position="left" href="" target="_blank" color="primary" size="m" disabled="false"
      @click="updatePercentage">
      Increase by 10
    </ifx-button>

    <br />

    <h2>V-bind</h2>
    <ifx-card>
      <img :src="imgLink1" alt="" slot="img">
      <ifx-card-overline slot="overline">
        Overline
      </ifx-card-overline>
      <ifx-card-headline slot="headline">
        Headline
      </ifx-card-headline>
      <ifx-card-text slot="text">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </ifx-card-text>

      <ifx-link href="" target="_blank" icon="true" slot="btn" underline="false" position="right">Link</ifx-link>
    </ifx-card>
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
} from 'vue';

const imgLink1 = ref("https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg");
const percentage = ref(10);
const query = ref('');

function updatePercentage() {
  percentage.value < 100 ? percentage.value += 10 : percentage.value = 10;
}

function handlePercentageUpdate(newPercentage) {
  percentage.value = newPercentage;
}

function handleSearch(event) {
  query.value = event.detail;
}


</script>
 





 