import {defineConfig} from 'vite'
import path from 'path'

export default defineConfig({
    plugins: [],
    base: '/',
    build: {
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, 'index.html'),
                about: path.resolve(__dirname, 'about.html'),
                news: path.resolve(__dirname, 'news.html'),
            },
        },
    },
});
