import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: parseInt(process.env.VITE_WEB_SERVER_PORT as string) || 3000,
  },
  define: {
    'process.env': {
      VITE_GRAPHQL_BASE_URL: process.env.VITE_GRAPHQL_BASE_URL,
    },
  },
})
