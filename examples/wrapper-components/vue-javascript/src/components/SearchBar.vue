

<template>
  <div class="app">
    <ifx-search-bar v-model="message" is-open="true" show-close-button="true"></ifx-search-bar>
    <p>INPUT 1 ONLY INVOKES handleChange, which updates 'message' variable</p>
    <input type="text" v-model="message" @change="handleChange($event)">
    <p>INPUT 2 has a v-model='message'</p>
	  <input v-model="message" placeholder="edit me" />
    <p>MESSAGE VARIABLE</p>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      something: 'test',
      message: ""
    }
  },

  methods: {
    handleChange(event) {
      console.log('ifxChange event emitted with value:', event.target.value);
      this.message = event.target.value
    }
  }
}
</script>

<style scoped>
.app {
  text-align: center;
  flex-direction: column;
  /* display: flex; */
  align-items: center;
}
</style>