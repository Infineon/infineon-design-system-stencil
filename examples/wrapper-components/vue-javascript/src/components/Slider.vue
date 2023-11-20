
<template>
  <div>
    <h2>Slider</h2>
    <div>
      <ifx-slider @ifxChange="handleChange" :value="progress" min="0" max="100" show-percentage="true"></ifx-slider>
    </div>
    <br />
    <br />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

const progressValue = ref(50);

const progress = computed(() => {
  return progressValue.value;
});

onMounted(() => {
  updateProgress();
  setInterval(updateProgress, 50000);
})

function handleChange() {
  console.log("value changed");
}

function updateProgress() {
  console.log("updating slider value")
  progressValue.value < 100 ? progressValue.value += 10 : progressValue.value = 10;

}

</script>

 
 