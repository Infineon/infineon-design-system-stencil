import { createApp } from 'vue'
import App from './App.vue'
import { ComponentLibrary, defineCustomElements } from '@infineon/infineon-design-system-vue';
import './assets/base.scss'

// Define custom elements
defineCustomElements();

createApp(App).use(ComponentLibrary).mount('#app');