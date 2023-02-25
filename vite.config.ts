import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from  'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        components: resolve(__dirname, 'components/index.html'),
        UI: resolve(__dirname, 'components/UI/index.html'),
        layout: resolve(__dirname, 'components/layout/index.html'),
      },
    },
  },
})
