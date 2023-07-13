import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [sveltekit()],
    server: {
        host: true
    },
    resolve: {
        alias: {
            src: path.resolve('src/'),
        },
    }
});
