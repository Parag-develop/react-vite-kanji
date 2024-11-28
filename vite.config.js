import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
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
        // Set base for production if necessary
        base: '/', // Default base URL for production
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
