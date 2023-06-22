<template>
  <div class="app">
    <h2>Alert</h2>
    <div>
      <ifx-text-input @ifxInput="handleIfxInput" error="false" disabled="false" success="false" placeholder="Placeholder"
        errormessage="">Text
        field</ifx-text-input>
    </div>
    <p>Text field event: {{ input }}</p>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    }
  },
  methods: {
    handleIfxInput(e) {
      console.log('ifxInput event emitted with value:', e.detail);
      this.input = e.detail;
    }
  }
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
