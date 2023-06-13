

<template>
  <div class="app">
    <h2>Progress bar</h2>

    <h3>Using v-model</h3>
    <ifx-progress-bar v-model="progress" size="m" show-label="true"></ifx-progress-bar>
    <br />
    <h3>Using value and the ifxChange event</h3>
    <ifx-progress-bar :value="progressValue2" size="m" show-label="true"></ifx-progress-bar>
    <br />

  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
const progressValue1 = ref(50);
const progressValue2 = ref(10);



onMounted(() => {
  updateProgress();
  setInterval(updateProgress, 5000);
})

const progress = computed(() => {
  return progressValue1.value;
});

function updateProgress() {
  console.log("updating progress")
  progressValue1.value < 100 ? progressValue1.value += 10 : progressValue1.value = 10;
  progressValue2.value < 100 ? progressValue2.value += 10 : progressValue2.value = 10;

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

 