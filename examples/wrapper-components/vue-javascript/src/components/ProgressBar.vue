

<template>
  <div>
    <h2>Progress bar</h2>
    <ifx-progress-bar v-model="progress" size="m" show-label="true"></ifx-progress-bar>
    <br />

    <ifx-button @click="updateProgress" variant="secondary" href="" target="_blank" theme="default" size="s"
      disabled="false" icon="false">
      Update Progress
    </ifx-button>
    <br />
    <br />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
const progressValue = ref(50);



onMounted(() => {
  updateProgress();
  setInterval(updateProgress, 100000);
})

const progress = computed(() => {
  return progressValue.value;
});

function updateProgress() {
  console.log("updating progress")
  progressValue.value < 100 ? progressValue.value += 10 : progressValue.value = 10;

}


</script>

 
 