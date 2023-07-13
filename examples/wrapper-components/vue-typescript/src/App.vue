

<template>
  <h1 class="header">Stencil Framework integration - Vue + TS </h1>
  <Alert />
  <Button />
  <Checkbox />
  <ProgressBar />
  <SearchField />
  <SearchBar />
  <TextInput />
  <NumberIndicator />
  <Spinner />
  <Link />
  <Sidebar />
</template>


<script lang="ts" setup>


import Alert from './components/Alert.vue'
import Button from './components/Button.vue'
import Checkbox from './components/Checkbox.vue'
import NumberIndicator from './components/NumberIndicator.vue'
import ProgressBar from './components/ProgressBar.vue'
import SearchField from './components/SearchField.vue'
import SearchBar from './components/SearchBar.vue'
import Sidebar from './components/Sidebar.vue'
import TextInput from './components/TextInput.vue'
import Spinner from './components/Spinner.vue'
import Link from './components/Link.vue'

</script>

<style scoped>
.header {
  text-align: center;
}
</style>