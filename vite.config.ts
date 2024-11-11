import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import wasm from 'vite-plugin-wasm';

export default defineConfig({
	plugins: [wasm(), sveltekit()],
	worker: {
		format: 'es',
    rollupOptions: {
      output: {
        entryFileNames: 'workers/[name]-[hash].js'
      }
    }
	},
	optimizeDeps: {
		exclude: ['wasm-demo']
	},
  server: {
    port: 5173, // specify a port
    strictPort: false, // allow fallback to another port if 5173 is taken
    host: true, // listen on all addresses
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Resource-Policy': 'same-origin'
    },
    fs: {
      allow: [searchForWorkspaceRoot(process.cwd())]
    },
  },
	preview: {
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Resource-Policy': 'same-origin'
    },
  },
});
