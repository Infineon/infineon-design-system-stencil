<template>
  <div>
    <h2>Pagination</h2>
    <ifx-pagination
      @ifxPageChange="handleChange"
      total="500"
       items-per-page='[{"value":"ten","label":"10","selected":true}, {"value":"Twenty","label":"20","selected":false}, {"value":"Thirty","label":"30","selected":false}]'
      :current-page="current"
    ></ifx-pagination>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

const currentPage = ref(1);

const current = computed(() => {
  return currentPage.value;
});

onMounted(() => {
  updatePage();
  setInterval(updatePage, 100000);
});

function handleChange() {
  console.log("page value changed");
}

function updatePage() {
  console.log("updating page value");
  currentPage.value < 500 ? (currentPage.value += 1) : (currentPage.value = 1);
}
</script>
