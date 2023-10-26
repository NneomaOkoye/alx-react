import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
https: {
  key: './alx project-privateKey.key',
  cert: './alx project.crt',
}

  }
  plugins: [react()],
})
