import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import';

export default defineConfig({
  base: './',
  mode: 'development',
  server: {
    proxy: {
      '/api': {
        target:'http://tianchoy.com/api/',//正式服务器
        //target: 'http://localhost/apis/',//测试服务器
        changeOrigin: true,
        ws: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ]
})
