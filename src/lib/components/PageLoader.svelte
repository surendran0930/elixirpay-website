<script>
	import { onMount } from 'svelte';
	import { hasShownLoader, markLoaderShown } from '$lib/loaderState.js';

	const logo = 'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/elixir%20icon.svg';

	// SPYLT-style preloader (per reference: awwwards.com/inspiration/
	// preloader-animation-spylt-milk) — a centered wordmark above a live
	// percentage counter, instead of a literal progress bar. The counter
	// itself uses the oversized bold-numeral display treatment from a
	// follow-up reference (a large "196"-style page counter), not a small
	// inline label — it's the dominant element on screen, not a footnote
	// under the logo. Runs once on mount: 0 -> 100 over ~1.6s, holds briefly
	// at 100, then the whole overlay slides up off screen (a curtain
	// reveal, not a plain fade) and unmounts — the page underneath renders
	// normally the entire time, this only ever sits on top of it.
	//
	// Plays only on a genuine first visit or hard reload, not on returning
	// to Home via client-side navigation — see loaderState.js for why a
	// plain module-level flag (not sessionStorage) is what makes that
	// distinction correctly.
	let progress = $state(0);
	let leaving = $state(false);
	let visible = $state(!hasShownLoader);

	onMount(() => {
		if (hasShownLoader) return;
		markLoaderShown();

		const duration = 1600;
		const start = performance.now();
		let raf = 0;

		/** @param {number} now */
		function tick(now) {
			const elapsed = now - start;
			// ease-out-ish curve — quick at first, settles into place at 100
			// rather than a flat linear count, so the finish doesn't feel
			// abrupt.
			const linear = Math.min(1, elapsed / duration);
			const eased = 1 - Math.pow(1 - linear, 2);
			progress = Math.min(100, Math.round(eased * 100));
			if (linear < 1) {
				raf = requestAnimationFrame(tick);
			} else {
				setTimeout(() => {
					leaving = true;
					setTimeout(() => {
						visible = false;
					}, 700);
				}, 250);
			}
		}
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	});
</script>

{#if visible}
	<div
		class="fixed inset-0 z-[200] flex items-center justify-center bg-black transition-transform duration-700 ease-in-out {leaving
			? '-translate-y-full'
			: 'translate-y-0'}"
	>
		<img src={logo} alt="ElixirPay" class="icon-spin h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20" />

		<!-- Bottom-right corner, not centered under the logo — per explicit
		     reference. -->
		<p
			class="absolute bottom-6 right-6 leading-none font-black tabular-nums text-white sm:bottom-10 sm:right-10"
			style="font-size: clamp(4rem, 12vw, 9rem);"
		>
			{progress}%
		</p>

		<!-- Thin full-width rule under the number, near the very bottom edge —
		     now an actual progress fill (not just a static divider), growing
		     left-to-right in step with the same {progress} driving the
		     number above it. -->
		<div class="absolute inset-x-0 bottom-0 h-px w-full bg-white/20">
			<div
				class="h-full bg-white transition-[width] duration-150 ease-out"
				style="width: {progress}%"
			></div>
		</div>
	</div>
{/if}

<style>
	/* rotateY, not rotateX — "horizontal rotation" spins around the icon's
	   vertical axis (left edge to right edge, like a coin flipping
	   face-to-face), matching the same convention as the home page's final-
	   CTA coin and the About page's hero logomark. */
	.icon-spin {
		animation: icon-spin 3s linear infinite;
		transform-style: preserve-3d;
	}
	@keyframes icon-spin {
		from {
			transform: rotateY(0deg);
		}
		to {
			transform: rotateY(360deg);
		}
	}
</style>
