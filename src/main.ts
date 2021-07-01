import { createApp } from 'vue'
import App from './App.vue'

import { setupRouter, router } from './router/index'
import { setupStore, store } from './store'
import components from './components/'

import 'virtual:windi.css'
import '@/assets/styles/main.css'

const app = createApp(App)

app.use(components)


setupRouter(app)
setupStore(app)


//全局挂载vue-router
app.config.globalProperties.router = router
//全局挂载vuex
app.config.globalProperties.store = store

app.mount('#app')
