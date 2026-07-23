<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import type { Snippet } from 'svelte';
	import LegalHero from './LegalHero.svelte';

	interface Section {
		id: string;
		label: string;
		body: Snippet;
	}

	interface Props {
		heroTitle: string;
		heroDescription: string;
		intro?: Snippet;
		sections: Section[];
	}
	let { heroTitle, heroDescription, intro, sections }: Props = $props();

	/** @type {HTMLDivElement | undefined} */
	let contentEl = $state();
	let activeId = $state(sections[0]?.id ?? '');

	// Scroll-spy for the desktop sidebar only — highlight whichever section
	// heading is nearest the top of the viewport, same trigger-once-per-scroll
	// rAF pattern used for the About/Contact pages' other scroll-driven
	// effects. The mobile accordion below doesn't need this: its open item
	// already *is* the indicator.
	onMount(() => {
		if (!contentEl) return;
		const headings = sections
			.map((s) => document.getElementById(s.id))
			.filter((el) => el !== null);
		if (headings.length === 0) return;

		let ticking = false;
		const updateActive = () => {
			const triggerLine = window.innerHeight * 0.3;
			let current = headings[0];
			for (const el of headings) {
				if (el.getBoundingClientRect().top <= triggerLine) {
					current = el;
				}
			}
			if (current) activeId = current.id;
		};
		const onScroll = () => {
			if (ticking) return;
			ticking = true;
			requestAnimationFrame(() => {
				updateActive();
				ticking = false;
			});
		};
		updateActive();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	// Mobile accordion — first topic open by default, same idiom as the
	// Products/Solutions/Industries FAQ accordions (openFaqIndex + slide).
	let openMobileIndex = $state(0);
</script>

{#snippet legalQueriesCard()}
	<div class="rounded-xl border border-gray-200 bg-gray-50 p-6">
		<p class="text-web-20 font-bold text-gray-900">Legal Queries</p>
		<p class="mt-2 text-para-14 text-gray-500">
			For questions regarding your Merchant &amp; compliance, our legal team is here to help.
		</p>
		<a
			href="/contact"
			class="mt-5 block rounded-lg bg-blue-600 px-5 py-3 text-center text-para-14 font-medium text-white hover:bg-blue-700"
		>
			Contact now
		</a>
	</div>
{/snippet}

<LegalHero title={heroTitle} description={heroDescription} />

<section class="bg-white">
	<div class="mx-4 grid grid-cols-1 gap-12 py-20 lg:mx-[120px] lg:grid-cols-[280px_1fr] lg:gap-16">
		<!-- Desktop (lg+) — sticky TOC sidebar + one continuous flowing read,
		     matching the reference design. -->
		<aside class="hidden lg:block lg:sticky lg:top-28 lg:h-fit">
			<p class="font-mono text-para-14 font-semibold uppercase tracking-widest text-gray-400">
				Contents
			</p>
			<nav class="mt-5 flex flex-col gap-4 text-para-16">
				{#each sections as section (section.id)}
					<a
						href="#{section.id}"
						class="leading-snug transition-colors {activeId === section.id
							? 'font-semibold text-gray-900'
							: 'text-gray-500 hover:text-gray-700'}"
					>
						{section.label}
					</a>
				{/each}
			</nav>

			<div class="mt-10">
				{@render legalQueriesCard()}
			</div>
		</aside>

		<div bind:this={contentEl} class="legal-content hidden min-w-0 lg:block">
			{@render intro?.()}
			{#each sections as section (section.id)}
				<h3 id={section.id}>{section.label}</h3>
				{@render section.body()}
			{/each}
		</div>

		<!-- Mobile/tablet (below lg) — each topic is an accordion header with
		     its own body opening directly underneath it, instead of a flat
		     topic list followed by one long unbroken wall of text. -->
		<div class="min-w-0 lg:hidden">
			<div class="legal-content">
				{@render intro?.()}
			</div>

			<p
				class="mt-10 font-mono text-para-14 font-semibold uppercase tracking-widest text-gray-400"
			>
				Contents
			</p>
			<div class="mt-5 rounded-2xl border border-gray-200">
				{#each sections as section, i (section.id)}
					<button
						class="flex w-full items-start justify-between gap-6 border-b border-gray-100 p-6 text-left last:border-b-0"
						onclick={() => (openMobileIndex = openMobileIndex === i ? -1 : i)}
					>
						<div class="min-w-0">
							<span class="block text-web-20 font-semibold text-gray-900">{section.label}</span>
							{#if openMobileIndex === i}
								<div class="legal-content mobile-accordion-body" transition:slide={{ duration: 300 }}>
									{@render section.body()}
								</div>
							{/if}
						</div>
						<span
							class="relative mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-400"
						>
							<span class="absolute h-[2px] w-3 rounded-full bg-gray-600"></span>
							<span
								class="absolute h-3 w-[2px] rounded-full bg-gray-600 transition-transform duration-300 {openMobileIndex ===
								i
									? 'scale-y-0'
									: 'scale-y-100'}"
							></span>
						</span>
					</button>
				{/each}
			</div>

			<div class="mt-10">
				{@render legalQueriesCard()}
			</div>
		</div>
	</div>
</section>

<style>
	/* Scoped typography for the prose-style legal body content — headings get
	   scroll-margin so #anchor jumps/scroll-spy don't land flush under the
	   fixed nav, and each numbered section reads consistently across all 8
	   legal pages without repeating these classes in every +page.svelte. */
	.legal-content :global(h2) {
		@apply text-web-32 font-bold text-gray-900;
	}
	.legal-content :global(h3) {
		@apply text-web-28 font-bold text-gray-900;
		scroll-margin-top: 7rem;
		margin-top: 3rem;
	}
	.legal-content :global(h4) {
		@apply text-web-20 font-semibold text-gray-900;
		margin-top: 1.75rem;
	}
	.legal-content :global(p) {
		@apply mt-4 text-para-18 leading-relaxed text-gray-600;
	}
	.legal-content :global(ul) {
		@apply mt-4 flex flex-col gap-2.5;
	}
	.legal-content :global(li) {
		@apply flex items-start gap-2 text-para-16 text-gray-600;
	}
	.legal-content :global(li)::before {
		content: '→';
		@apply shrink-0 text-gray-400;
	}
	.legal-content :global(.effective-date) {
		@apply font-mono text-para-14 font-semibold uppercase tracking-wide text-gray-500;
	}
	.legal-content :global(hr) {
		@apply mt-8 border-gray-200;
	}
	/* Inside the mobile accordion, the section's own heading is already the
	   button label above it, and its first paragraph doesn't need the usual
	   mt-4 h3-follow spacing since there's no h3 here to follow. */
	.mobile-accordion-body :global(p:first-child) {
		margin-top: 0;
	}
</style>
