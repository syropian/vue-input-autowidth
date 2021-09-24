import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const resolvePath = (str: string) => resolve(__dirname, str)
const isProd = process.env.NODE_ENV === 'production'

const devConfig = defineConfig({
  root: './demo',
  plugins: [vue()],
  build: {
    outDir: '../dist-demo',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'demo/index.html'),
        sandbox: resolve(__dirname, 'demo/sandbox/index.html'),
      },
    },
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
