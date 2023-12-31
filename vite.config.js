import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@styles': '/src/css',
      '@images': '/src/assets/images',
      '@icons': '/src/assets/icons',
      '@pages': '/src/pages'
    },
  },
});