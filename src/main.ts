import { createApp } from 'vue'
// ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 样式
import '@/style/index.scss'
// 路由
import router from '@/routes'
// pinia
import { createPinia } from 'pinia'
// App
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.mount('#main')
