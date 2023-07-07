
<template>
  <h1 class="header">Stencil Framework integration - Vue + JS </h1>
  <Alert />
  <Button />
  <Checkbox />
  <ProgressBar />
  <Search />
  <TextInput />
  <Link />
</template>


<script lang="ts" setup>
import Alert from './components/Alert.vue'
import Button from './components/Button.vue'
import Checkbox from './components/Checkbox.vue'
import ProgressBar from './components/ProgressBar.vue'
import Search from './components/Search.vue'
import TextInput from './components/TextInput.vue'
import Link from './components/Link.vue'

</script>

<style scoped>
.header {
  text-align: center;
}
</style>
