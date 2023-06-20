
<template>
  <h1 class="header">Stencil Framework integration - Vue + JS </h1>
  <Alert />
  <Button />
  <Checkbox />
  <ProgressBar />
  <Search />
  <TextInput />
</template>


<script lang="ts" setup>
import Alert from './wrapper-components/Alert.vue'
import Button from './wrapper-components/Button.vue'
import Checkbox from './wrapper-components/Checkbox.vue'
import ProgressBar from './wrapper-components/ProgressBar.vue'
import Search from './wrapper-components/Search.vue'
import TextInput from './wrapper-components/TextInput.vue'

</script>

<style scoped>
.header {
  text-align: center;
}
</style>
