import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import { ComponentLibrary } from '@infineon/infineon-design-system-vue';
console.log("component library", ComponentLibrary)
createApp(App).use(ComponentLibrary).mount('#app');