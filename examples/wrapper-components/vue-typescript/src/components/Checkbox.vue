<template>
  <div class="app">
    <h2>Checkbox</h2>
    <h3>Using v-model</h3>

    <form @submit.prevent="handleSubmit">
      TestText <ifx-checkbox :disabled="disabled" v-model="value" :error="error" name="name">label</ifx-checkbox> TestText
      <br />

      <ifx-button type="submit">Submit</ifx-button>
    </form>
    <br />
    <div>
      <ifx-button variant="outline" @click="toggleDisabled">Toggle Disabled</ifx-button>

      <ifx-button variant="outline" @click="toggleError">Toggle Error</ifx-button>

      <ifx-button variant="outline" @click="toggleValue">Toggle Value</ifx-button>

    </div>
    <br />
    <span>Disabled: {{ disabled }} </span>
    <span>Error: {{ error }} </span>
    <span>Value: {{ value }}</span>
    <br />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      disabled: false,
      value: false,
      error: false,
    }
  },
  methods: {
    handleIfxChange(e: CustomEvent) {
      console.log('ifxChange event emitted with value:', e.detail.value);
      this.value = e.detail.value;
    },
    handleSubmit() {
      console.log('Form submitted. Checkbox value:', this.value);
    },
    toggleDisabled() {
      this.disabled = !this.disabled;
    },
    toggleError() {
      this.error = !this.error;
    },
    toggleValue() {
      this.value = !this.value;
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