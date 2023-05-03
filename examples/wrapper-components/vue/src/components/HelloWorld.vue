

<template>
  <div class="greetings">
    <h1 class="green">Stencil Framework integration - Vue3 </h1>
    <h2>V-For</h2>

    <th v-for="btn in buttons" scope="col">
      <ifx-button variant="solid" icon="" position="left" href="" target="_blank" color="primary" size="m"
        disabled="false">
        {{ btn }}
      </ifx-button>
    </th>

    <br />

    <h2>Custom events using Vue syntax</h2>
    <br />
    <ifx-search-bar @search="handleInput" style="width: 100%" show-close-button="true"></ifx-search-bar>

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
  ref,
} from 'vue';

const buttons = ref(["Button 1", "Button 2", "Button 3"]);
const imgLink1 = ref("https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg");

function handleInput(e) {
  let query = e.target.value; console.log(query), debounceSearch(args.onSearch, query)
}
</script>