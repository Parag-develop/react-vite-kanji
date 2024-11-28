import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/', // Ensure the base is set to root for deployment
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
