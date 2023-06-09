<template>
  <div>
    <h1>Checkbox</h1>
    <form @submit.prevent="handleSubmit">
      TestText <ifx-checkbox 
        :disabled="disabled"
        :value="value"
        :error="error"
        name="name"
        @ifxChange="handleIfxChange"
      >label</ifx-checkbox> TestText
      <br/>
      
      <ifx-button type="submit">Submit</ifx-button>
    </form>

    <ifx-button @click="toggleDisabled">Toggle Disabled</ifx-button>
    <ifx-button @click="toggleError">Toggle Error</ifx-button>
    <ifx-button @click="toggleValue">Toggle Value</ifx-button>

    <span>Disabled: {{ disabled }} </span>
    <span>Error: {{ error }} </span>
    <span>Value: {{ value }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled: false,
      value: false,
      error: false,
    }
  },
  methods: {
    handleIfxChange(e) {
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