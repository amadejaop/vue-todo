import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import { createVfm } from 'vue-final-modal'

const vfm = createVfm();
createApp(App).use(router).use(vfm).mount('#app');
