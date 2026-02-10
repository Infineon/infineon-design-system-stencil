

<template>
  <div class="component">
    <h2>Indicator</h2>
    <ifx-indicator inverted="false" :variant="variant" :number="number"></ifx-indicator>
    <button @click="increaseNumber">+</button>
    <button @click="decreaseNumber">-</button>
    <button @click="toggleVariant">toggle variant</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let number = ref(1);
let variant = ref('number')


function increaseNumber() {
  number.value = number.value + 1;

}

function decreaseNumber() {
  number.value = number.value - 1;
}

function toggleVariant() {
  variant.value = variant.value === 'number' ? 'dot' : 'number'
}
</script>



 