import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

const pkgName = resolve(__dirname, 'packages/icons')

export default defineConfig({
  build: {
    outDir: `${pkgName}/dist`,
    sourcemap: false,
    // 库模式 https://cn.vitejs.dev/guide/build.html#library-mode
    lib: {
      entry: `${pkgName}/index.ts`, // 打包入口
      name: '@vect-ui/icons'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: [
        {
          format: 'umd',
          exports: 'named',
          entryFileNames: 'index.umd.js',
          globals: { vue: 'Vue' } // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        },
        {
          format: 'es',
          exports: 'named',
          sourcemap: false,
          entryFileNames: 'index.mjs'
        },
        {
          format: 'cjs',
          exports: 'named',
          sourcemap: false,
          entryFileNames: 'index.cjs'
        }
      ]
    }
  },
  plugins: [
    dts({
      root: pkgName, // 编译根目录
      entryRoot: './', // 编译入口（相对于根目录的路径）
      skipDiagnostics: true, // 跳过类型检查
      outputDir: `${pkgName}/dist/types`, // 编译输出目录
      copyDtsFiles: false, // .d.ts 文件复制到 outputDir
      exclude: ['./node_modules/**'] // 排除编译文件（相对于根目录的路径）
    }),
    vue(),
    vueJsx()
  ]
})
