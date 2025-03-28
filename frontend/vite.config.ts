import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.geojson'],
  },
  // Ensure geojson is handled correctly
  assetsInclude: ['**/*.geojson'],
});
