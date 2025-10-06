// vite.config.ts/js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const isNetlify = !!process.env.NETLIFY
export default defineConfig({
  plugins: [react()],
  base: isNetlify ? '/' : '/Portofolio-Fathiah/'
})
