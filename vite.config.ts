import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import wasm from 'vite-plugin-wasm';

export default defineConfig({
	plugins: [wasm(), sveltekit()],
	worker: {
		format: 'es',
	},
	optimizeDeps: {
		exclude: ['wasm-demo']
	},
	server: {
		fs: {
			allow: [searchForWorkspaceRoot(process.cwd())]
		},
		headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin'
    },
    middlewareMode: true,
	},
	preview: {
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin'
    },
  },
	build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
					// 'monaco-editor': ['monaco-editor']
        }
      }
    }
  },
});
