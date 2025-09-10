<script lang='ts'>
	import type { Snippet } from 'svelte';

	import '../app.css';

	import favicon from '$lib/assets/favicon.svg';

	import { onNavigate } from '$app/navigation';

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition)
			return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<link href={favicon} rel='icon' />
</svelte:head>

{@render children()}
