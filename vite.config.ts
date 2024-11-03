import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],

	resolve: {
		alias: {
			'~': path.resolve(__dirname, './src/'),
			'~lib': path.resolve(__dirname, './src/lib'),
			'~utils': path.resolve(__dirname, './src/lib/utils'),
		}
	},

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
