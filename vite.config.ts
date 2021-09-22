import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'VueInputAutowidth',
      fileName: format => `vue-input-autowidth.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
    },
  },
})
