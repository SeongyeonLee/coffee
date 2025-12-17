import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Use '.' instead of process.cwd() to resolve the current directory, avoiding TS issues with process types.
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    base: './', // Ensures relative paths for GitHub Pages
    define: {
      // Replace process.env.API_KEY with the value from VITE_API_KEY during build
      'process.env.API_KEY': JSON.stringify(env.VITE_API_KEY),
      // Polyfill process.env to prevent crashes
      'process.env': {}
    }
  };
});