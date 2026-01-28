import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    allowedHosts:true,
    proxy:" https://af91b2f827d5.ngrok-free.app",
    open:true,
  }
})
