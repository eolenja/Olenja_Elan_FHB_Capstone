import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      buffer: require.resolve('buffer/'), // Ensure buffer is resolved
      util: require.resolve('util/'), // {{ edit_1 }}
    },
  },
  define: {
    'global': {}, // This is sometimes needed for certain libraries
    'process.env': {}, // {{ edit_1 }} Mock process.env
  },
})
