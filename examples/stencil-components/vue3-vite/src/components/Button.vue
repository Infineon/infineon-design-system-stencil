

<template>
  <div class="app">
    <h2>Button</h2>
    <div>
      <ifx-button variant="solid" icon="" position="left" href="" target="_blank" color="primary" size="m"
        disabled="false" @click="handleClick">
        Click me
      </ifx-button>
    </div>

    <br />
    <div>
      <th v-for="btn in buttons">
        <ifx-button variant="solid" icon="" position="left" href="" target="_blank" color="primary" size="m"
          disabled="false">
          {{ btn }}
        </ifx-button>
      </th>
    </div>
    <br />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const buttons = ref(["Button 1", "Button 2", "Button 3"]);

function handleClick(event) {
  console.log("Button clicked")
}
</script>

<style scoped>
.app {
  text-align: center;
  flex-direction: column;
  display: flex;
  align-items: center;
}
</style>

 