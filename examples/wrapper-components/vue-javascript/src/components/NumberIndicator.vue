

<template>
  <div>
    <h2>Number Indicator</h2>
    <ifx-number-indicator inverted="false">{{ number }}</ifx-number-indicator>
    <button @click="increaseNumber">+</button>
    <button @click="decreaseNumber">-</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let number = ref(1);


function increaseNumber() {
  number.value = number.value + 1;

}

function decreaseNumber() {
  number.value = number.value - 1;
}
</script>



 