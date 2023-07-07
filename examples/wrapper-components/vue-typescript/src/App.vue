

<template>
  <SearchInput />
  <h1 class="header">Stencil Framework integration - Vue + TS </h1>
  <Alert />
  <Button />
  <Checkbox />
  <RadioButton />
  <ProgressBar />
  <Search />
  <TextInput />

</template>


<script lang="ts" setup>

import SearchInput from './components/SearchInput.vue'

import Alert from './components/Alert.vue'
import Button from './components/Button.vue'
import Checkbox from './components/Checkbox.vue'
import ProgressBar from './components/ProgressBar.vue'
import Search from './components/Search.vue'
import RadioButton from './components/RadioButton.vue'
import TextInput from './components/TextInput.vue'

</script>

<style scoped>
.header {
  text-align: center;
}
</style>
