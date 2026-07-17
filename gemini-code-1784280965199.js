import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/chitchater/', // Add this line replacing 'chitchater' with your exact repository folder name
})