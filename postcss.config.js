const config = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
		...(process.env.NODE_ENV === 'production'
			? {
					cssnano: {
						preset: 'advanced'
					}
				}
			: {})
	}
};

export default config;
