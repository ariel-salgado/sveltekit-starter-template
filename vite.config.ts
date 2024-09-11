import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [sveltekit(), tailwindcss()],
	css: {
		transformer: 'lightningcss'
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
