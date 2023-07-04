<template>
  <div>
    <ifx-search-input disabled="false" size='m' show-delete-icon="true" @ifxInput="handleSearch"></ifx-search-input>
  </div>
</template>

<script  setup>

const handleSearch = (e) => { 
  console.log(e.detail)
}

</script>

<style scoped>

</style>