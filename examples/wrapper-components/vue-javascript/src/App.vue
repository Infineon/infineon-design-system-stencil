
<template>
  <h1 class="header">Using Stencil web components in a Vue application</h1>

  <ProgressBar />

</template>


<script lang="ts" setup>
import Alert from './components/Alert.vue'
import Button from './components/Button.vue'
import Checkbox from './components/Checkbox.vue'
import ProgressBar from './components/ProgressBar.vue'
import Search from './components/Search.vue'

</script>

<style scoped>
.header {
  text-align: center;
}
</style>
