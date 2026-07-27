<script>
	import SiteNav from './SiteNav.svelte';
	import GridBeam from './GridBeam.svelte';

	const logomark = 'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/About%20us/logomark.svg';
</script>

<!-- Same banner treatment as AboutHero (dark gradient, GridBeam, own nav,
     spinning logomark) — see AboutHero.svelte for the rationale behind
     each piece. Fills the full viewport since this page has nothing below
     it, unlike About's fixed 900px banner which hands off to more sections. -->
<section class="relative min-h-screen bg-white">
	<div
		class="absolute inset-x-0 top-0 z-0 min-h-screen"
		style="background-image: linear-gradient(to bottom, #171717, #23223c, #2b2d64, #2f398f, #2c45bc, #2856d2, #1e68e9, #007aff, #0090ff, #00a2fe, #00b2f6, #00c0eb)"
	></div>

	<div class="pointer-events-none absolute inset-x-0 top-0 z-0 min-h-screen">
		<GridBeam class="h-full w-full" />
	</div>

	<SiteNav startTransparent />

	<div
		class="container-page relative z-10 flex min-h-screen flex-col items-center justify-center pt-24 text-center"
	>
		<img
			src={logomark}
			alt=""
			class="logomark-spin mb-10 h-32 w-32 drop-shadow-2xl sm:h-40 sm:w-40 md:h-44 md:w-44"
		/>

		<h1
			class="mx-auto max-w-2xl text-balance text-web-32 font-semibold text-white sm:text-web-40 md:text-web-48"
		>
			Almost ready. Just a few final switches to flip. Something exciting is cooking
		</h1>

		<div class="mt-8 flex w-full max-w-xs items-center gap-4 sm:max-w-sm">
			<span class="h-px flex-1 bg-white/20"></span>
			<svg viewBox="0 0 24 24" class="h-5 w-5 shrink-0 fill-amber-400">
				<path d="M12 2c0 5.523 4.477 10 10 10-5.523 0-10 4.477-10 10 0-5.523-4.477-10-10-10 5.523 0 10-4.477 10-10Z" />
			</svg>
			<span class="h-px flex-1 bg-white/20"></span>
		</div>

		<p class="mx-auto mt-8 max-w-xl text-para-20 text-white/50">
			We're building the next chapter of our payment experience
		</p>

		<a href="/" class="mt-6 font-medium text-para-16 text-white underline hover:text-white/80">
			Go to Homepage
		</a>
	</div>
</section>

<style>
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
