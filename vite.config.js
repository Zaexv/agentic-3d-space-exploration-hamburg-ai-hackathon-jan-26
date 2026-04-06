import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    base: './',
    define: {
        // Use process.env for Node.js compatibility (optional)
        // 'process.env': process.env
    },
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: 'nasa_data/clusters/*.json',
                    dest: 'nasa_data/clusters'
                },
                {
                    src: 'public/star_data/*',
                    dest: 'star_data'
                },
                {
                    src: 'assets',
                    dest: '.'
                }
            ]
        })
    ],
    build: {
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            // Mark Node.js-only dependencies as external
            // They will not be bundled, and dynamic imports will fail gracefully
            external: ['dotenv']
        }
    },
    optimizeDeps: {
        // Exclude these from pre-bundling
        exclude: ['dotenv']
    }
});
