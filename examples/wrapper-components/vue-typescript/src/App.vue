

<template>
  <Navbar />
  <h1 class="header">Stencil Framework integration - Vue + TS </h1>
  <Alert />
  <Button />
  <Checkbox />
  <ProgressBar />
  <Search />
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
import Search from './components/Search.vue'
import Sidebar from './components/Sidebar.vue'
import TextInput from './components/TextInput.vue'
import Link from './components/Link.vue';
import Spinner from './components/Spinner.vue';
import Navbar from './components/Navbar.vue'


</script>

<style scoped>
.header {
  text-align: center;
}
</style>