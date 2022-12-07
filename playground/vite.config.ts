import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '127.0.0.1',
    port: 3000
  },
  resolve: {
    alias: {
      '@vect-ui/components': resolve(__dirname, '../packages/components/index.ts'),
      '@vect-ui/utils': resolve(__dirname, '../packages/utils/index.ts'),
      'vect-ui/css': resolve(__dirname, '../packages/styles/index.less'),
      'vect-ui': resolve(__dirname, '../packages/vect-ui/index.ts')
    }
  },
  plugins: [
    vue(),
    vueSetupExtend(),
    vueJsx() // 添加这一句
  ]
})
