import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps asset URLs relative, so the build works on any static host
// (root domain, sub-folder, GitHub Pages project site, etc.)
export default defineConfig({
  base: './',
  plugins: [react()],
})
