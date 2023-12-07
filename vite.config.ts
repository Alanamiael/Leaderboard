import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@assets',
        replacement: path.resolve(__dirname, './src/assets'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, './src/components'),
      },
      {
        find: '@ts',
        replacement: path.resolve(__dirname, './src/ts'),
      },
      {
        find: '@styles',
        replacement: path.resolve(__dirname, './src/styles'),
      },
      {
        find: '@helpers',
        replacement: path.resolve(__dirname, './src/helpers'),
      },
      {
        find: '@redux',
        replacement: path.resolve(__dirname, './src/redux'),
      },
    ],
  },
});
