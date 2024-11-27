import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For production
export default defineConfig({
  plugins: [react()],
  build: {
      outDir: 'dist', // Ensure the output directory is set (default is 'dist')
  },
});

// For local development
// export default defineConfig({
//     plugins: [react()],
//     server: {
//       proxy: {
//         '/api': 'http://localhost:5000', // Adjust according to your Express server port
//       },
//     },
//   });
