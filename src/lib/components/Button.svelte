<script lang="ts">
	import { createBubbler } from 'svelte/legacy';

	const bubble = createBubbler();
	// Matches Tokens — Buttons: color variants (neutral/blue/green/amber/red/orange)
	
	interface Props {
		// each with default / hover / active(pressed) / disabled / loading states.
		color?: 'neutral' | 'blue' | 'green' | 'amber' | 'red' | 'orange';
		variant?: 'solid' | 'outline';
		disabled?: boolean;
		loading?: boolean;
		type?: 'button' | 'submit' | 'reset';
		children?: import('svelte').Snippet;
	}

	let {
		color = 'blue',
		variant = 'solid',
		disabled = false,
		loading = false,
		type = 'button',
		children
	}: Props = $props();

	const solidMap: Record<string, string> = {
		neutral: 'bg-gray-900 hover:bg-gray-800 active:bg-black text-white',
		blue: 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white',
		green: 'bg-green-600 hover:bg-green-700 active:bg-green-800 text-white',
		amber: 'bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white',
		red: 'bg-red-500 hover:bg-red-600 active:bg-red-700 text-white',
		orange: 'bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white'
	};

	const outlineMap: Record<string, string> = {
		neutral: 'border border-gray-300 hover:bg-gray-50 active:bg-gray-100 text-gray-900',
		blue: 'border border-blue-500 hover:bg-blue-50 active:bg-blue-100 text-blue-500',
		green: 'border border-green-600 hover:bg-green-50 active:bg-green-100 text-green-700',
		amber: 'border border-amber-500 hover:bg-amber-50 active:bg-amber-100 text-amber-700',
		red: 'border border-red-500 hover:bg-red-50 active:bg-red-100 text-red-600',
		orange: 'border border-orange-500 hover:bg-orange-50 active:bg-orange-100 text-orange-700'
	};

	let classes = $derived(variant === 'solid' ? solidMap[color] : outlineMap[color]);
</script>

<button
	{type}
	disabled={disabled || loading}
	class="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-mono font-medium text-para-14
		transition-colors disabled:cursor-not-allowed disabled:opacity-40
		sm:px-6 sm:py-3 sm:text-para-16 {classes}"
	onclick={bubble('click')}
>
	{#if loading}
		<span
			class="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
		></span>
	{/if}
	{@render children?.()}
</button>
