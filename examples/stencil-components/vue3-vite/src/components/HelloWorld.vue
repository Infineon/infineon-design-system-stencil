<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const progressValue = ref("10");


function updateProgressOnClick() {
  console.log("val", progressValue.value)
  progressValue.value < 100 ? progressValue.value += 10 : progressValue.value = 10;
}

function handleProgressUpdate(event) {
  progressValue.value = event.detail;
}

const buttons = ref(["Button 1", "Button 2", "Button 3"]);

</script>

<template>
  <div class="app">
    <div class="header">

      <p>{{ msg }}</p>
      <ifx-progress-bar value="50" size="m" show-label="true"></ifx-progress-bar>
      <ifx-progress-bar :value="progressValue" size="m" show-label="true"
        @ifxChange:progressValue="handleProgressUpdate"></ifx-progress-bar>

      <div>
        <ifx-button variant="solid" icon="" position="left" href="" target="_blank" color="primary" size="m"
          disabled="false" @click="updateProgressOnClick">
          Update progress
        </ifx-button>
      </div>



      <br />


      <th v-for="btn in buttons" scope="col">
        <ifx-button variant="solid" icon="" position="left" href="" target="_blank" color="primary" size="m"
          disabled="false">
          {{ btn }}
        </ifx-button>
      </th>
    </div>
  </div>
</template>

<style scoped>
.app {
  text-align: center;

}


.header {
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}
</style>

 