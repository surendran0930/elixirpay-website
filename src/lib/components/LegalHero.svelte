<script lang="ts">
	import SiteNav from './SiteNav.svelte';

	interface Props {
		title: string;
		description: string;
	}
	let { title, description }: Props = $props();
</script>

<!-- Same gradient background as AboutHero, at a shorter height and without
     the fluid simulation/logomark/CTA — these are text-only legal pages, not
     a landing moment, so the banner is just title + description over the
     brand gradient. -->
<section class="relative overflow-hidden bg-white">
	<div
		class="absolute inset-x-0 top-0 z-0 h-[560px]"
		style="background-image: linear-gradient(to bottom, #171717, #23223c, #2b2d64, #2f398f, #2c45bc, #2856d2, #1e68e9, #007aff, #0090ff, #00a2fe, #00b2f6, #00c0eb)"
	></div>

	<SiteNav startTransparent />

	<div
		class="container-page relative z-10 flex min-h-[560px] flex-col items-center justify-center pt-24 text-center"
	>
		<h1 class="mx-auto max-w-3xl text-web-40 font-bold text-white md:text-web-48">
			{title}
		</h1>
		<p class="mx-auto mt-5 max-w-2xl text-balance text-para-18 text-white/70">
			{description}
		</p>
	</div>
</section>
