import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import { ComponentLibrary } from '@infineon/infineon-design-system-vue';
createApp(App).use(ComponentLibrary).mount('#app');