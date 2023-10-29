<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';

	let a = 'sas';
	const {
		elements: { content, item, trigger, root },
		helpers: { isSelected }
	} = createAccordion({
		defaultValue: 'item-1'
	});

	const items = [
		{
			id: 'item-1',
			title: 'What is it?',
			description:
				'A collection of accessible & unstyled component builders for Svelte applications.'
		},
		{
			id: 'item-2',
			title: 'Can I customize it?',
			description: 'Totally, it is 100% stylable and overridable.'
		},
		{
			id: 'item-3',
			title: 'Svelte is awesome, huh?',
			description: 'Yes, and so are you!'
		}
	];
</script>

<h1>Welcome to Login SvelteKit</h1>
<p>{a}</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div class="mx-auto w-[18rem] max-w-full rounded-xl bg-white shadow-lg sm:w-[25rem]" {...$root}>
	{#each items as { id, title, description }, i}
		<div
			use:melt={$item(id)}
			class="overflow-hidden transition-colors first:rounded-t-xl
        last:rounded-b-xl"
		>
			<button
				use:melt={$trigger(id)}
				class={cn(
					'flex flex-1 cursor-pointer items-center justify-between ',
					'bg-white px-5 py-5 text-base font-medium leading-none',
					'text-black transition-colors hover:bg-neutral-100 focus:!ring-0',
					'focus-visible:text-magnum-800',
					i !== 0 && 'border-t border-t-neutral-300'
				)}
			>
				{title}
			</button>
		</div>
		{#if $isSelected(id)}
			<div use:melt={$content(id)} transition:slide>
				<div class="px-5 py-4">
					{description}
				</div>
			</div>
		{/if}
	{/each}
</div>

<style lang="postcss">
	.content {
		box-shadow: inset 0px 1px 0px theme('colors.neutral.300');
	}
</style>
