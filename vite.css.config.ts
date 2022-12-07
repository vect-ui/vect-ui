import { resolve } from 'path'
import { defineConfig } from 'vite'

const inputFileName = resolve(__dirname, 'packages/styles/index.less')

const outDirName = resolve(__dirname, 'packages/vect-ui/dist/css')

export default defineConfig({
  build: {
    outDir: outDirName,
    assetsDir: 'css',
    rollupOptions: {
      input: inputFileName,
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  }
})
