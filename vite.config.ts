import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

function removeManualChunks() {
  return {
    name: 'remove-manual-chunks',
    config() {
      // Pre-emptively override; Vite deep-merges, so also delete later
      return {
        build: {
          rollupOptions: { output: { manualChunks: undefined } },
        },
      }
    },
    configResolved(config) {
      const out = config.build?.rollupOptions?.output
      const outputs = Array.isArray(out) ? out : [out || {}]
      for (const o of outputs) {
        if (!o) continue
        delete o.manualChunks
        o.inlineDynamicImports = true
      }
    },
  }
}



export default defineConfig({
  // Ensure favicon is properly served
  server: {
    host: '0.0.0.0', // Allow access from local network
    fs: {
      strict: false
    }
  },
  // Make sure public assets are handled correctly
  publicDir: 'public',
  // Add explicit favicon handling
  define: {
    __FAVICON__: '"./favicon.ico"'
  },
  plugins: [
    removeManualChunks(),
    viteSingleFile({
      // optional plugin settings
       useRecommendedBuildConfig: true,
      // removeViteModuleLoader: true,
    }),
  ],
})

