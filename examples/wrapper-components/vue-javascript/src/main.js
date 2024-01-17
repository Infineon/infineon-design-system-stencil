import { createApp } from 'vue'
import './assets/base.scss'
import { ComponentLibrary } from '@infineon/infineon-design-system-vue';
import App from './App.vue'

createApp(App).use(ComponentLibrary).mount('#app');