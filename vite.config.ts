import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['some-external-module', 'another-external-module']
    }
  }
});

