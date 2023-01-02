import { URL, fileURLToPath } from 'node:url'
import { existsSync, readFileSync, writeFileSync } from 'fs'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'

/** init  */
const app = 'src/App.vue'
const example = 'app.example.vue'

if (!existsSync(app)) {
  writeFileSync(app, readFileSync(example))
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [
        name => {
          if (!name.match(/^V[A-Z]/)) return
          return { name, from: 'vect-ui' }
        }
      ]
    }) as any
  ],
  resolve: {
    alias: [
      {
        find: /^vect-ui/,
        replacement: fileURLToPath(new URL('../packages/vect-ui/index.ts', import.meta.url))
      }
    ]
  }
})
