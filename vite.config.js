
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    // Load environment variables
    const env = loadEnv(mode, process.cwd(), '');

    return {
        plugins: [react()],
        server: {
            // Proxy only in development mode
            proxy: mode === 'development' ? {
                '/api': {
                    target: 'http://localhost:5000', // Your local backend URL
                    changeOrigin: true,
                },
            } : undefined,
        },
        // Optionally set base for production if needed
        base: env.VITE_API_URL || '/', // Set this in your .env file if necessary
    };
});

// // For local development
// export default defineConfig({
//     plugins: [react()],
//     server: {
//       proxy: {
//         '/api': 'http://localhost:5000', 
//       },
//     },
//   });
