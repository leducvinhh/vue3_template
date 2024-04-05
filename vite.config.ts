import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const SUB_DOMAIN = env.VITE_APP_SUB_DOMAIN || '/production/'

  return {
    plugins: [vue()],
    // base: SUB_DOMAIN,
    server: {
      port: 8080
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  }
})
