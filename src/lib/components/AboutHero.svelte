<script lang="ts">
	import { onMount } from 'svelte';
	import SiteNav from './SiteNav.svelte';
	import { FluidSimulation } from '$lib/motion-core';

	const logomark = 'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/About%20us/logomark.svg';

	// H1 — same scroll-scrub word reveal used on the About page's H2/body
	// (see about/+page.svelte). Two lines share one running word index so
	// the "Built" line break is preserved without a bare <br/> breaking the
	// {#each}. Being above the fold, this typically reads as "already
	// revealed" by the time it's visible rather than an animation the user
	// watches play out — an accurate result of a position-driven reveal
	// applied to a top-of-page element, not a bug.
	const heroHeadlineLines = ['Payments Infrastructure', 'Built for Modern Businesses.'];
	let heroHeadlineCounter = 0;
	const heroHeadlineWords = heroHeadlineLines.map((line) =>
		line.split(' ').map((word) => ({ word, index: heroHeadlineCounter++ }))
	);
	const totalHeroHeadlineWords = heroHeadlineCounter;

	/** @type {HTMLHeadingElement | undefined} */
	let heroHeadlineEl = $state();
	let heroHeadlineProgress = $state(0);
	let revealedHeroHeadlineCount = $derived(
		Math.round(heroHeadlineProgress * totalHeroHeadlineWords)
	);

	onMount(() => {
		let ticking = false;
		const updateProgress = () => {
			if (!heroHeadlineEl) return;
			const rect = heroHeadlineEl.getBoundingClientRect();
			const vh = window.innerHeight;
			const start = vh * 0.85;
			const end = vh * 0.35;
			heroHeadlineProgress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
		};
		const onScroll = () => {
			if (ticking) return;
			ticking = true;
			requestAnimationFrame(() => {
				updateProgress();
				ticking = false;
			});
		};
		updateProgress();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<!-- Same banner treatment as the landing page's Hero (background gradient,
     fluid simulation, dark nav, headline/subtext/CTAs) minus the dashboard
     mockup — see Hero.svelte for the full rationale behind each piece. This
     is a separate component (not a Hero prop) because Hero.svelte's own nav
     is tightly coupled to +layout.svelte's landing-only "skip the shared
     Nav" branch; About needs that same skip without touching Hero. -->
<section class="relative bg-white">
	<div
		class="absolute inset-x-0 top-0 z-0 h-[900px]"
		style="background-image: linear-gradient(to bottom, #171717, #23223c, #2b2d64, #2f398f, #2c45bc, #2856d2, #1e68e9, #007aff, #0090ff, #00a2fe, #00b2f6, #00c0eb)"
	></div>

	<div class="pointer-events-none absolute inset-x-0 top-0 z-0 h-[900px] md:pointer-events-auto">
		<FluidSimulation class="h-full w-full" />
	</div>

	<SiteNav active="about" startTransparent />

	<div
		class="container-page pointer-events-none relative z-10 flex min-h-[900px] flex-col items-center justify-center pt-24 text-center"
	>
		<img
			src={logomark}
			alt=""
			class="logomark-spin mb-10 h-32 w-32 drop-shadow-2xl sm:h-40 sm:w-40 md:h-44 md:w-44"
		/>
		<h1
			bind:this={heroHeadlineEl}
			class="mx-auto max-w-3xl text-web-32 font-semibold sm:text-web-40 md:text-web-48 lg:text-web-56"
		>
			{#each heroHeadlineWords as lineWords, li (li)}
				{#each lineWords as { word, index } (index)}<span
						class="transition-colors duration-300 {index < revealedHeroHeadlineCount
							? 'text-white'
							: 'text-white/30'}">{word}{' '}</span
					>{/each}{#if li === 0}<br />{/if}
			{/each}
		</h1>
		<p class="mx-auto mt-5 max-w-3xl text-balance text-para-20 text-white/70">
			Accept payments, automate payouts, and manage your entire payment ecosystem with a secure
			platform designed to help businesses grow faster.
		</p>

		<a
			href="/contact"
			class="pointer-events-auto mt-10 rounded-lg bg-gray-100 px-8 py-4 text-center font-mono text-para-16 font-medium uppercase tracking-wide text-gray-900 hover:bg-gray-200"
		>
			Get Started
		</a>
	</div>
</section>

<style>
	/* rotateY, not rotateX — "horizontal rotation" reads as spinning around
	   the icon's vertical axis (left edge to right edge, like a coin
	   flipping face-to-face), not tumbling top-over-bottom. Same convention
	   as `.coin-spin` on the landing page's final-CTA coin. */
	.logomark-spin {
		animation: logomark-spin 3s linear infinite;
		transform-style: preserve-3d;
	}
	@keyframes logomark-spin {
		from {
			transform: rotateY(0deg);
		}
		to {
			transform: rotateY(360deg);
		}
	}
</style>
