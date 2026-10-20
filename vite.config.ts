import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Keep CRA's output folder so the deploy script and .gitignore still apply
    outDir: 'build',
  },
});
