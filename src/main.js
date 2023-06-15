import { createApp } from 'vue'
import router from './router/index.Js'
import './style.css'
import App from './App.vue'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css';

createApp(App)

.use(router)
.use(store)
.mount('#app')
