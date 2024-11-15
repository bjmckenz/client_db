import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';


export default defineConfig({
    plugins: [sveltekit(),
    ],
	server: {
		proxy: {}, // essential to avoid "can't use Symbol where you need a string" error
	},
})
