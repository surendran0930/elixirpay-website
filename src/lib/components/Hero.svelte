<script lang="ts">
	import SiteNav from './SiteNav.svelte';
	import { FluidSimulation } from '$lib/motion-core';

	const dashboard =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%201%20-%20Hero%20section/bashboard.png';
	const arrow =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%201%20-%20Hero%20section/arrow.png';
</script>

<!-- The dark background is a capped-height layer (not the full section), so
     it visually "cuts" partway through the dashboard image instead of
     following the section's full content height. The dashboard sits in
     normal flow below it and naturally continues past that cut onto plain
     white, which is what actually produces the floating/overflow look —
     more reliable than stretching a background across a negative-margin
     overflow, which made the crop point unpredictable. -->
<section class="relative bg-white">
	<div
		class="absolute inset-x-0 top-0 z-0 h-[1050px]"
		style="background-image: linear-gradient(to bottom, #171717, #23223c, #2b2d64, #2f398f, #2c45bc, #2856d2, #1e68e9, #007aff, #0090ff, #00a2fe, #00b2f6, #00c0eb)"
	></div>

	<!-- Interactive fluid layer — sits on top of the gradient but *below* the
	     hero copy (z-0 vs z-10). The copy/dashboard wrappers are
	     pointer-events-none (with pointer-events-auto restored on the actual
	     CTAs) so pointer movement anywhere over the hero reaches this
	     canvas and drives the simulation, instead of being swallowed by the
	     big centered content containers. The component runs an automatic
	     "preview" swirl until the first real pointer move.

	     pointer-events-none below md: — the scene's touchmove handler
	     preventDefault()s, which would stop the page from scrolling when a
	     finger drags anywhere over the (viewport-tall) hero on phones. The
	     ambient preview swirl still animates there; direct interaction is
	     desktop/tablet-pointer only. -->
	<div class="pointer-events-none absolute inset-x-0 top-0 z-0 h-[1050px] md:pointer-events-auto">
		<FluidSimulation class="h-full w-full" />
	</div>

	<!-- Dark nav (hero-specific — inner pages use the light Nav component).
	     `fixed` (not `sticky`) + `inset-x-0` on purpose: `sticky` only stays
	     stuck within its own containing section's bounds, so it'd disappear
	     once the user scrolls past Hero into the sections below — `fixed`
	     is viewport-relative and persists across every section on the page,
	     per user request, without needing to move this markup out of Hero's
	     own <section>. `inset-x-0` matters because a `fixed` element with an
	     auto width and no left/right shrinks to fit its content instead of
	     filling the viewport — needed for `container-page`'s max-width +
	     mx-auto centering (below) to still work the same as it did under
	     `sticky`. Shrinks into a floating rounded pill once scrolled (see
	     `scrolled` in script) instead of staying a flat full-width bar. -->
	<SiteNav active="home" startTransparent />

	<!-- Hero copy — primary text (Host Grotesk), only buttons use secondary/mono.
	     Top padding is bumped up from the original pt-20: now that the header
	     is `fixed` instead of `sticky`, it no longer reserves its own height
	     in normal flow, so this padding alone must clear both the header's
	     unscrolled height (~100px mobile, ~136px desktop) and the original
	     80px breathing room below it, or the H1 renders underneath the nav. -->
	<!-- pointer-events-none so mouse movement over the (mostly empty) copy
	     block falls through to the fluid canvas behind it; each CTA link
	     restores pointer-events-auto so buttons still click/hover. -->
	<div class="container-page pointer-events-none relative z-10 pt-[180px] text-center md:pt-[220px]">
		<!-- Explicit <br /> after "Infrastructure" (not relying on natural
		     wrap) so "Built" lands on the second line — per an explicit "move
		     Built to second line" request; previously this wrapped naturally
		     at this max-w with "Built" ending line 1 instead. -->
		<h1 class="mx-auto max-w-3xl text-web-32 font-semibold text-white sm:text-web-40 md:text-web-48 lg:text-web-56">
			Payments Infrastructure<br />Built for Modern Businesses.
		</h1>
		<!-- `text-balance` (CSS `text-wrap: balance`) — `max-w` has gone
		     3xl (2 lines) → 2xl (3 lines, per "make it 3 lines") → back to
		     3xl (2 lines again, per a follow-up "move h2 to 2 line"). Widen
		     to add a line, narrow to remove one — `text-balance` keeps
		     whatever count results evenly distributed rather than an
		     arbitrary/ragged split, so only this one `max-w` step needs
		     tuning, never manual `<br />` placement. Same lesson as the
		     Final CTA subheading fix earlier in this session. -->
		<p class="mx-auto mt-5 max-w-3xl text-balance text-para-20 text-white/70">
			Accept payments, automate payouts, and manage your entire payment ecosystem with a secure
			platform designed to help businesses grow faster.
		</p>

		<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4">
			<a
				href="/contact"
				class="pointer-events-auto w-full rounded-lg border border-white/20 bg-white/5 px-5 py-4 text-center font-mono text-para-16 font-medium text-white hover:bg-white/10 sm:w-auto sm:px-8"
			>
				Get Started
			</a>
			<a
				href="/products"
				class="pointer-events-auto w-full rounded-lg bg-white px-5 py-4 text-center font-mono text-para-16 font-medium text-black hover:bg-gray-100 sm:w-auto sm:px-8"
			>
				View Documentation
			</a>
		</div>
	</div>

	<!-- Dashboard — sits in normal flow, exactly 120px below the CTAs. It's
	     taller than the dark background layer above (which stops at
	     h-[1050px]), so its lower portion naturally continues past the dark
	     area onto plain white — that's the "cut" that produces the overflow
	     look, rather than a negative-margin trick into the next section.
	     Rounded corners are baked into the asset. Only a drop-shadow filter
	     is added — border-radius/box-shadow clipped a rectangle over the
	     asset's own transparent corners and caused a dark patch before. -->
	<!-- pointer-events-none for the same reason as the copy block above —
	     nothing in here is clickable, so let moves over the dashboard's
	     upper half keep driving the fluid layer behind it. -->
	<div class="container-page pointer-events-none relative z-10 mt-[120px] pb-16">
		<div class="relative mx-auto max-w-6xl">
			<img
				src={arrow}
				alt=""
				class="pointer-events-none absolute -top-[176px] right-[-116px] z-20 hidden w-36 opacity-90 md:block lg:right-[-80px] lg:w-44"
			/>
			<img
				src={dashboard}
				alt="ElixirPay dashboard"
				class="block w-[760px] max-w-none drop-shadow-2xl md:w-full md:max-w-full"
			/>
		</div>
	</div>
</section>
