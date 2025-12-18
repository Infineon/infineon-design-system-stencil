import { ComponentLibrary } from "@infineon/infineon-design-system-vue";
import { createApp } from "vue";
import App from "./App.vue";
import "prismjs/themes/prism.css";

createApp(App).use(ComponentLibrary).mount("#app");
