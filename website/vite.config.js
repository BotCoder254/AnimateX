import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: 'website',
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      },
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]'
      }
    },
    minify: 'terser',
    sourcemap: true
  },
  server: {
    port: 3000,
    open: true
  },
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer')
      ]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'velocityfx': path.resolve(__dirname, '../dist/velocityfx.min.js')
    }
  },
  optimizeDeps: {
    include: ['velocityfx']
  }
}); 