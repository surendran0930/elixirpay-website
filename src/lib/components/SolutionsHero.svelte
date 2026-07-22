<script lang="ts">
	import SiteNav from './SiteNav.svelte';
	import { FluidSimulation } from '$lib/motion-core';

	const dashboard = 'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Solutions/Dashboard.svg';
</script>

<!-- Same banner as ProductsHero.svelte/IndustriesHero.svelte, reused
     verbatim per explicit "follow the industries banner ... here" request —
     only the nav's active link and copy differ. -->
<section class="relative bg-white">
	<div
		class="absolute inset-x-0 top-0 z-0 h-[1200px]"
		style="background-image: linear-gradient(to bottom, #171717, #23223c, #2b2d64, #2f398f, #2c45bc, #2856d2, #1e68e9, #007aff, #0090ff, #00a2fe, #00b2f6, #00c0eb)"
	></div>

	<div class="pointer-events-none absolute inset-x-0 top-0 z-0 h-[1200px] md:pointer-events-auto">
		<FluidSimulation class="h-full w-full" />
	</div>

	<SiteNav active="solutions" startTransparent />

	<div class="relative z-10 h-[1200px] overflow-hidden">
		<div class="container-page pointer-events-none pt-[180px] text-center md:pt-[220px]">
			<h1 class="mx-auto max-w-3xl text-web-32 font-semibold text-white sm:text-web-40 md:text-web-48 lg:text-web-56">
				Solutions Built <br />Around Your Business
			</h1>
			<p class="mx-auto mt-5 max-w-3xl text-balance text-para-20 text-white/70">
				Every business has different payment challenges. Whether you're launching your first product, scaling operations, or managing complex payment workflows, ElixirPay provides the infrastructure to help you move faster with confidence.
			</p>

			<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4">
				<a
					href="/contact"
					class="pointer-events-auto w-full rounded-lg border border-white/20 bg-white/5 px-5 py-4 text-center font-mono text-para-16 font-medium text-white hover:bg-white/10 sm:w-auto sm:px-8"
				>
					Talk to Sales
				</a>
				<a
					href="/contact"
					class="pointer-events-auto w-full rounded-lg bg-gray-100 px-5 py-4 text-center font-mono text-para-16 font-medium uppercase tracking-wide text-gray-900 hover:bg-gray-200 sm:w-auto sm:px-8"
				>
					Get Started
				</a>
			</div>
		</div>

		<div class="container-page pointer-events-none mt-[120px]">
			<div class="relative mx-auto max-w-6xl">
				<img
					src={dashboard}
					alt="ElixirPay dashboard"
					class="block w-[760px] max-w-none drop-shadow-2xl md:w-full md:max-w-full"
				/>
			</div>
		</div>
	</div>
</section>
