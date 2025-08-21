import { createApp } from 'vue'
import App from './App.vue'
import { ComponentLibrary } from '@infineon/infineon-design-system-vue';
import './assets/base.scss'

createApp(App).use(ComponentLibrary).mount('#app');