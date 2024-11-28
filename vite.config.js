import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    // Load environment variables from .env files based on the current mode
    const env = loadEnv(mode, process.cwd(), '');

    return {
        plugins: [react()],
        base: '/', // Base URL for the application
        define: {
            // Define a global variable for the API URL
            API_URL: JSON.stringify(env.VITE_API_URL || 'https://kanji-backend-3fvs.vercel.app'),
        },
    };
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
