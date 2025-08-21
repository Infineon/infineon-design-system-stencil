import { createApp } from 'vue'
import App from './App.vue'
import { ComponentLibrary } from '@infineon/infineon-design-system-vue';
import './assets/base.scss'

import { defineCustomElements } from '@infineon/infineon-design-system-stencil/loader';
import { setAssetPath } from '@stencil/core';

setAssetPath(new URL(import.meta.env.BASE_URL, window.location.href).href);

// Ensure Stencil components are defined; this also brings the chunks into the Vite build
defineCustomElements();

createApp(App).use(ComponentLibrary).mount('#app');