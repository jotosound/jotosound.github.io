import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://jotosound.github.io/
export default defineConfig({
  base: '/',
  plugins: [react()],
})
