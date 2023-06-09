<script setup>
import Button from './components/Button.vue'
import Checkbox from './components/Checkbox.vue'
import ProgressBar from './components/ProgressBar.vue'

</script>

<template>
  <h1 class="header">Using Stencil web components in a Vue application</h1>
  <Button />
  <Checkbox />
  <ProgressBar />
</template>

<style scoped>
.header {
  text-align: center;
}
</style>
