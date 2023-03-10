import { defineConfig } from 'vitest/config'

export default defineConfig({
  optimizeDeps: {
    disabled: true
  },
  test: {
    environment: 'jsdom'
  }
})
