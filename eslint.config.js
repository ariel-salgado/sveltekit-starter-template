import antfu from '@antfu/eslint-config';

export default antfu(
	{
		type: 'app',
		svelte: true,
		typescript: true,
		stylistic: {
			indent: 'tab',
			semi: true,
			quotes: 'single',
		},
	},
	{
		ignores: ['node_modules/', 'build/', '.svelte-kit/'],
	},
	{
		rules: {
			'new-cap': ['off'],
			'ts/no-explicit-any': ['off'],
			'ts/no-empty-object-type': ['off'],
			'ts/consistent-type-definitions': ['off'],
			'ts/method-signature-style': ['off'],
			'antfu/no-top-level-await': ['off'],
			'node/prefer-global/process': ['off'],
			'node/no-process-env': ['error'],
			'perfectionist/sort-imports': [
				'error',
				{
					tsconfigRootDir: '.',
					groups: [
						'type',
						['builtin', 'external'],
					],
				},
			],
			'unicorn/filename-case': [
				'error',
				{
					case: 'kebabCase',
					ignore: ['README.md'],
				},
			],
			'no-unused-vars': ['off'],
			'ts/no-unused-vars': [
				'error',
				{
					args: 'after-used',
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
				},
			],
			'no-console': [
				'error',
				{
					allow: ['info', 'clear', 'error', 'warn'],
				},
			],
		},
	},
);
