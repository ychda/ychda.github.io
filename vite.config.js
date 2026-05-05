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
                links: path.resolve(__dirname, 'links.html'),
                // yhz: path.resolve(__dirname, 'yhz', '2025b.html'),
                woodenFish: path.resolve(__dirname, 'wooden-fish', 'index.html'),
            },
        },
    },
});
