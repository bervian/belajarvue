import { createApp } from 'vue'
import App from './App.vue'
import Utama from './Utama.vue'
import router from './router'
import Layout from './Layout.vue'


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(Layout)
app.use(router)
app.mount('#app')
