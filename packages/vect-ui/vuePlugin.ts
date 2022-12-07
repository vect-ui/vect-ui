import type { App, Plugin } from 'vue'
import components from './components'

const plugin: Plugin = {
  install(app: App) {
    components.forEach((c: { install: Plugin } & any) => {
      app.use(c)
    })
  }
}
export default plugin
