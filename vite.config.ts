import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'

const rootDirName = resolve(__dirname, 'packages/vect-ui')
const compDirName = resolve(__dirname, 'packages/components')
const utilsDirName = resolve(__dirname, 'packages/utils')
const getManualChunks = (id: string) => {
  if (id.includes('node_modules')) {
    return 'vendor'
  }
  /**
   * return: /xxxxx/xxxxx
   * need: xxxxx/xxxxx
   */
  // 主包需平铺，特判
  if (id.includes('/packages/vect-ui')) {
    return id.replace(/.+packages\/vect-ui((\/[A-Za-z0-9-_]+)+).+/, (_, $1) => {
      return $1.slice(1)
    })
  }
  return id.replace(/.+packages((\/[A-Za-z0-9-_]+)+).+/, (_, $1) => {
    return $1.slice(1)
  })
}

export default defineConfig({
  resolve: {
    alias: {
      '@vect-ui/components': `${compDirName}/index.ts`,
      '@vect-ui/utils': `${utilsDirName}/index.ts`
    }
  },
  build: {
    outDir: `${rootDirName}/dist`,
    sourcemap: false,
    lib: {
      entry: `${rootDirName}/index.ts`, // 打包入口
      name: 'VectUI'
    },
    rollupOptions: {
      external: ['vue'],

      output: [
        {
          format: 'umd',
          exports: 'named',
          dir: `${rootDirName}/dist/umd`,
          entryFileNames: 'index.umd.js',
          globals: { vue: 'Vue' }
        },
        {
          format: 'es',
          exports: 'named',
          dir: `${rootDirName}/dist/es`,
          sourcemap: false,
          preserveModules: false,
          entryFileNames: 'index.mjs',
          chunkFileNames: '[name].mjs',
          // 自定义chunk文件目录,文件名
          manualChunks: getManualChunks
        },
        {
          format: 'cjs',
          exports: 'named',
          dir: `${rootDirName}/dist/lib`,
          sourcemap: false,
          preserveModules: false,
          entryFileNames: 'index.js',
          chunkFileNames: '[name].js',
          // 自定义chunk文件目录,文件名
          manualChunks: getManualChunks
        }
      ]
    }
  },
  plugins: [vue(), vueSetupExtend(), vueJsx()]
})
