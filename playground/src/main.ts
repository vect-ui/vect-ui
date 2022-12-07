import VectUI from 'vect-ui'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/reset.css'
import 'vect-ui/css'

const app = createApp(App)

app.use(router).use(VectUI).mount('#app')
