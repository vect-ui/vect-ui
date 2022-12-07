import { Layout } from './components'
import Theme from 'vitepress/theme'
import './style/index.less'
import { Repl } from '@vect-ui/repl'
export default {
  ...Theme,
  Layout,
  enhanceApp({ app }) {
    app.component('Repl', Repl)
    return app
  }
}
