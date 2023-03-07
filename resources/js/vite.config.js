import {defineConfig} from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, './index.js'),
            name: 'LaravelLogger',
            formats: ['es'],
            fileName: (format) => `laravel-logger.js`
        },
        outDir: "../../public/",
        emptyOutDir: true,
    }
});
