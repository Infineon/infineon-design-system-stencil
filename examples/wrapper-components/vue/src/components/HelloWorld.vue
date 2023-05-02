

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
</script>