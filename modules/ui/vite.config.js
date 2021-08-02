import { defineConfig } from 'vite'
import path from 'path';

export default defineConfig({
	build: {
    lib: {
      entry: path.resolve(__dirname, 'stories/main.js'),
      name: 'UI',
      fileName: format => `ui.${format}.js`  
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  }
})
