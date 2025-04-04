import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.geojson'],
  },
  // Ensure geojson is handled correctly
  assetsInclude: ['**/*.geojson'],
});
