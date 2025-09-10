import adapter from '@sveltejs/adapter-auto';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV !== 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess({ script: true }),

	kit: {
		adapter: adapter(),
		router: {
			resolution: 'server',
		},
		experimental: {
			remoteFunctions: true,
		},
	},

	compilerOptions: {
		dev,
		runes: true,
		modernAst: true,
		experimental: {
			async: true,
		},
	},
};

export default config;
