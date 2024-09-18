import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/voos': {
        target: 'http://localhost:3000', // URL do backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/voos/, ''),
      },
    },
  },
});