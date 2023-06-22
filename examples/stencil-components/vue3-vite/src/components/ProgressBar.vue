

<template>
  <div class="app">
    <h2>Progress bar</h2>
    <ifx-progress-bar value="50" size="m" show-label="true"></ifx-progress-bar>
    <ifx-progress-bar :value="progressValue" size="m" show-label="true"></ifx-progress-bar>

    <div>
      <ifx-button variant="solid" icon="" position="left" href="" target="_blank" color="primary" size="m"
        disabled="false" @click="updateProgressOnClick">
        Update progress
      </ifx-button>
    </div>

    <br />

  </div>
</template>

<script setup>
import { ref } from 'vue'

const progressValue = ref("10");


function updateProgressOnClick() {
  console.log("val", progressValue.value)
  progressValue.value < 100 ? progressValue.value += 10 : progressValue.value = 10;
}


</script>

<style scoped>
.app {
  text-align: center;
  flex-direction: column;
  display: flex;
  align-items: center;
}
</style>

 