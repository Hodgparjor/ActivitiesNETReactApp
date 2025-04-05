import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mkcert from 'vite-plugin-mkcert'
// https://vite.dev/config/
// TODO: https://github.com/FiloSottile/mkcert/issues/231 fix cert error
export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [react(), mkcert()],
})
