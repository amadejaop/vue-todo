import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import { createVfm } from 'vue-final-modal'

const app = createApp(App);
const vfm = createVfm();
app.use(router);
app.use(vfm);
app.mount('#app');
