import { library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-free/css/all.css';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
library.add(faLocationDot);
app.mount('#app')
