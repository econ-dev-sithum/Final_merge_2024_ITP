import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  server: {
    port: 5173, // Vite dev server runs on port 3000
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Backend API running on port 5000
        secure: false,
      }
    }
  }
})
