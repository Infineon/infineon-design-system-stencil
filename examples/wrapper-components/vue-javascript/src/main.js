import { createApp } from 'vue'
// import './assets/main.scss'

import App from './App.vue'

import { ComponentLibrary } from '@infineon/infineon-design-system-vue';
createApp(App).use(ComponentLibrary).mount('#app');