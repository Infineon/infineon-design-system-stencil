

<template>
  <h1 class="header">Using Stencil web components in a Vue application</h1>
  <Alert />
  <Button />
  <Checkbox />
  <ProgressBar />
</template>


<script setup>
import Alert from './components/Alert.vue'
import Button from './components/Button.vue'
import Checkbox from './components/Checkbox.vue'
import ProgressBar from './components/ProgressBar.vue'

</script>
<style scoped>
.header {
  text-align: center;
}
</style>
