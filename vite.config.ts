import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const resolvePath = (str: string) => resolve(__dirname, str)
const isProd = process.env.NODE_ENV === 'production'

const devConfig = defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist-demo',
  },
})

const prodConfig = defineConfig({
  build: {
    lib: {
      entry: resolvePath('lib/index.ts'),
      name: 'vue-input-autowidth',
      fileName: format => `vue-input-autowidth.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
})

export default isProd ? prodConfig : devConfig
