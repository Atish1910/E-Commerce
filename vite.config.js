import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// we are de;iberotely opening our app open on local server at 4209 port
// after our npm run dev cmd automatically open web app in crome or edge
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port : 4209,
    open : true
  }
})
