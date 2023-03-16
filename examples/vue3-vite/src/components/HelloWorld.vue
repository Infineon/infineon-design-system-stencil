<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <ifx-button variant="outline" href="" target="_blank" color="primary" size="m" disabled="false" icon="false">
    Button
  </ifx-button>



</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
