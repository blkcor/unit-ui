import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
import path from 'node:path'
console.log(path.resolve(__dirname, 'src'))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('Uni')
        }
      }
    }),
    vueJsx()
    // AutoImport({
    //   imports: ['vue'],
    //   dirs: ['./src/**'],
    //   vueTemplate: true,
    //   dts: './src/typings/auto-imports.d.ts'
    // }),
    // Components({
    //   dts: './src/typings/components.d.ts'
    // })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
