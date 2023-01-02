import { createApp } from 'vue'
import '@vect-ui/styles'
;(async () => {
  const apps = import.meta.glob<{ [key: string]: any }>('./*.vue')
  const name = location.pathname.replace(/^\//, '') || 'App'
  const file = apps[`./${name}.vue`]

  if (!file) {
    location.pathname = 'App'
    return
  }
  const App = (await file()).default

  const app = createApp(App)

  app.mount('#play')
})()
