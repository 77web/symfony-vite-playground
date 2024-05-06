import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";
import tsconfigPaths from 'vite-tsconfig-paths';
import { ViteEjsPlugin } from 'vite-plugin-ejs';

/* if you're using React */
// import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        /* react(), // if you're using React */
        symfonyPlugin(),
        tsconfigPaths(),
        ViteEjsPlugin(),
    ],
    build: {
        rollupOptions: {
            input: {
                app: "./assets/app.ts"
            },
        },
    },
});
