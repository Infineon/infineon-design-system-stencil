<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
const buttons = ref(["Button 1", "Button 2", "Button 3"]);

</script>

<template>
  <div class="app">
    <div class="header">

      <p>{{ msg }}</p>
      <ifx-button variant="solid" icon="" position="left" href="" target="_blank" color="primary" size="m"
        disabled="false">
        Button
      </ifx-button>

      <br />

      <th v-for="btn in buttons" scope="col">
        <ifx-button variant="solid" icon="" position="left" href="" target="_blank" color="primary" size="m"
          disabled="false">
          {{ btn }}
        </ifx-button>
      </th>
    </div>
  </div>
</template>

<style scoped>
.app {
  text-align: center;

}


.header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}
</style>

 