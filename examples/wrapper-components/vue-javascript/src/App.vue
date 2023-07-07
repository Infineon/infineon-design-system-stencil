
<template>
  <h1 class="header">Stencil Framework integration - Vue + JS </h1>
  <Alert />
  <Button />
  <Checkbox />
  <RadioButton />
  <ProgressBar />
  <Search />
  <TextInput />
  <Spinner />
</template>


<script lang="ts" setup>
import Alert from './components/Alert.vue'
import Button from './components/Button.vue'
import Checkbox from './components/Checkbox.vue'
import ProgressBar from './components/ProgressBar.vue'
import Search from './components/Search.vue'
import RadioButton from './components/RadioButton.vue'
import TextInput from './components/TextInput.vue'
import Spinner from './components/Spinner.vue'

</script>

<style scoped>
.header {
  text-align: center;
}
</style>
