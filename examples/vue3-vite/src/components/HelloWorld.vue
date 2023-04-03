<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="app">
    <div class="header">

      <p>{{ msg }}</p>

      <ifx-button variant="solid" href="" target="_blank" color="primary" size="m" disabled="false" icon="false">
        Button
      </ifx-button>
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
