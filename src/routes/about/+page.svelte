<script>
	import { onMount } from 'svelte';
	import AboutHero from '$lib/components/AboutHero.svelte';

	// Same left/right doodle illustrations as the home page's About/Social
	// proof section — reused verbatim per explicit request, including the
	// float animation below (Svelte scoped styles don't carry across
	// routes, so the keyframes are redefined here).
	const aboutIllustrationBase =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%202%20-%20About%20and%20social%20proffs/';
	const aboutLeftIllustration = aboutIllustrationBase + 'left.png';
	const aboutRightIllustration = aboutIllustrationBase + 'right.png';

	// Final CTA — same section as the home page's closing "Future of
	// Payments" block, reused verbatim (bg.png carries the whole
	// blue-glow-to-black backdrop, coin.png is the spinning coin).
	const finalCtaBg =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%2010%20-%20sales/bg.png';
	const finalCtaCoin =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%2010%20-%20sales/coin.png';

	// Team-photo stack — image 1 is the taller/square (115x115) asset, so it
	// reads as the larger front-and-center photo; image 2 / image 3 are the
	// shorter (115x104) side photos, tilted behind it.
	const teamPhotoBase =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/About%20us/second%20section/';
	const teamPhotoLeft = teamPhotoBase + 'image%202.svg';
	const teamPhotoCenter = teamPhotoBase + 'image%201.svg';
	const teamPhotoRight = teamPhotoBase + 'image%203.svg';

	// Roadmap section — "Today" is the 2nd of 4 milestones, so the progress
	// bar fill and its connector line/badge both sit at the 25% mark (end of
	// milestone 1 / start of milestone 2), matching a plain 4-column grid's
	// column boundary exactly rather than an eyeballed percentage.
	const milestoneIcon = 'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/About%20us/third%20section/icon%201.svg';
	// `label` is a fixed [line1, line2] pair (not a wrapped string) so every
	// description renders as exactly 2 lines regardless of viewport width,
	// per explicit request — width-based wrapping can't guarantee a shared
	// line count across phrases this different in length. `active` is no
	// longer set here — which milestone is active is now driven by scroll
	// (see activeStage below).
	const milestones = [
		{ year: '2026', label: ['ElixirPay', 'Founded'] },
		{ year: 'Today', label: ['Building the', 'Platform'] },
		{ year: 'Next', label: ['Empowering Businesses', 'Across Industries'] },
		{ year: 'Future', label: ['Expanding the', 'Payment Ecosystem'] }
	];

	// "Our Approach" — fanned/scattered stack of 4 cards. Only one card
	// frame asset (main cardsvg.svg, 950x482) is reused verbatim as the card
	// background for all four cards per explicit request — its dots +
	// "ELIXIRPAY" wordmark are baked in as vector paths, so every card now
	// shows that same header (no more per-card date variant). Icon/title/body
	// are overlaid on top using percentage-based positioning (not fixed px)
	// so they stay aligned with the image's own header/content regions
	// regardless of the card's rendered width.
	const approachIconBase =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/About%20us/fourth%20section/';
	const approachCardFrame = approachIconBase + 'maincard.svg';

	// Decorative oversized background icons (faint, behind the heading and
	// card) — left icon top-left corner, right icon bottom-right corner,
	// same asset pair as the home page's "Built Around Every Team" section.
	const approachBgIconLeft = 'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/elixir%20icon%201.svg';
	const approachBgIconRight = 'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/elixir%20icon%202.svg';
	// `rotate` now only applies once a card has been superseded (it's one of
	// the receded cards peeking out from behind the current front card) —
	// the active/front card always sits perfectly straight in the same
	// central "stuck" spot, per explicit request. No more `x` offset either:
	// cards no longer fan out sideways, they all land in the exact same
	// position, one on top of the last.
	const approachCards = [
		{
			icon: approachIconBase + 'icon%201.svg',
			title: 'Security by Design',
			body: [
				{ text: "Security isn't a feature – it's the foundation. Every " },
				{ text: 'transaction', bold: true },
				{ text: ' is protected through ' },
				{ text: 'modern security practices', bold: true },
				{ text: ' and continuous monitoring.' }
			],
			rotate: '-3deg'
		},
		{
			icon: approachIconBase + 'icon%202.svg',
			title: 'Simplicity Over Complexity',
			body: [
				{ text: 'Powerful payment infrastructure ' },
				{ text: "shouldn't feel complicated.", bold: true },
				{ text: ' We ' },
				{ text: 'focus on experiences', bold: true },
				{ text: ' that are intuitive, efficient, and easy to adopt.' }
			],
			rotate: '3deg'
		},
		{
			icon: approachIconBase + 'icon4.svg',
			title: 'Built to Scale',
			body: [
				{ text: "Whether you're " },
				{ text: 'processing your first payment', bold: true },
				{ text: ' or expanding globally, ElixirPay is ' },
				{ text: 'designed to grow with your business.', bold: true }
			],
			rotate: '-3deg'
		},
		{
			icon: approachIconBase + 'icon%205.svg',
			title: 'Business First',
			body: [
				{ text: 'Every product ' },
				{ text: 'decision starts with one question:', bold: true },
				{ text: ' does it help businesses ' },
				{ text: 'operate better?', bold: true },
				{ text: ' If the answer is no, we keep improving.' }
			],
			rotate: '3deg'
		}
	];

	// "Built on a Strong Foundation" — no section with this exact content
	// exists on the home page to copy verbatim, so this combines two
	// patterns that DO: the seal-icon header from the About/Social proof
	// section (same sealLogo asset) and the bordered 4-column stat grid with
	// count-up animation from the FAQ section's stats band, extended with a
	// second mono-font caption line per stat to match the reference.
	const foundationSealLogo =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%202%20-%20About%20and%20social%20proffs/3d%20elixirpay.png';
	const foundationStats = [
		{ target: 100, suffix: '+', label: 'APIs', caption: ['Developer-first', 'infrastructure'] },
		{ target: 10, suffix: '+', label: 'Payment Products', caption: ['One connected', 'platform'] },
		{ target: 24, suffix: '×7', label: 'Monitoring', caption: ['Real-time platform', 'visibility'] },
		{ target: 256, suffix: '-bit', label: 'Encryption', caption: ['Enterprise-grade', 'security'] }
	];
	let foundationStatCounts = $state(foundationStats.map(() => 0));
	/** @type {HTMLDivElement | undefined} */
	let foundationStatsEl = $state();

	// Seal "stamp drop" — starts above and faded out, drops down past its
	// resting spot and settles with a little bounce (the `stamp-drop`
	// keyframes below), like a wax stamp being pressed down. Trigger-once
	// IntersectionObserver, same pattern as the rest of this page.
	/** @type {HTMLImageElement | undefined} */
	let sealEl = $state();
	let sealStamped = $state(false);

	// "Life at Elixirpay" — a static clothesline: 5 photos pinned to a
	// gently sagging string. Each "card new N" SVG bakes in its own slight
	// rotation (card1 straight, card2 -6.1deg, card3 -9.9deg, card4
	// +4.5deg, card5 +9.8deg) *and* its own colored clothespin (a second
	// embedded image positioned in reserved space above the photo, within
	// the same SVG) — confirmed by inspecting the raw SVG source, not
	// assumed. An earlier version added a CSS-built clothespin on top of
	// these, which duplicated the pin visibly; only the vertical "sag" per
	// position is set here now.
	const lifeGalleryBase = 'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/About%20us/fifth/new%20card/';
	// Position order is [5, 4, 1, 2, 3] (by original card number) to match
	// the reference exactly — not a plain rotation, cards 4 and 5 are also
	// swapped relative to each other. sag stays tied to *position* (deepest
	// at center) regardless of which card ends up there.
	const lifeClotheslinePhotos = [
		{ src: lifeGalleryBase + 'card%20new%205.svg', sag: -31 },
		{ src: lifeGalleryBase + 'card%20new%204.svg', sag: -7 },
		{ src: lifeGalleryBase + 'card%20new%201.svg', sag: -8 },
		{ src: lifeGalleryBase + 'card%20new%202.svg', sag: -3 },
		{ src: lifeGalleryBase + 'card%20new%203.svg', sag: -25 }
	];

	// Photo-stack entrance — left/right photos start stacked exactly behind
	// the center one (same translate-x-1/2 anchor, scaled down, invisible)
	// and slide out to their final tilted positions once the stack scrolls
	// into view. "Trigger once" IntersectionObserver, same pattern as the
	// Solutions card's auto-advance timer on the home page.
	/** @type {HTMLDivElement | undefined} */
	let photosEl = $state();
	let photosRevealed = $state(false);

	// Body copy — same continuous scroll-scrub word reveal as the home
	// page's About/Social proof heading (see +page.svelte's headingWords /
	// revealedWordCount), just spread across three <p> tags instead of one.
	// The bold "disconnected payment systems" phrase keeps its own darker
	// resting color once revealed, instead of collapsing to the same gray
	// as the rest of the sentence.
	const bodyParagraphs = [
		[
			{ text: 'Businesses spend too much time managing' },
			{ text: 'disconnected payment systems,', bold: true },
			{ text: 'manual processes, and operational complexity.' }
		],
		[
			{
				text: 'We believe payment infrastructure should work quietly in the background – reliable, secure, and ready to scale.'
			}
		],
		[
			{
				text: "That's why we're building ElixirPay: a platform that simplifies how businesses accept payments, automate financial operations, and grow with confidence."
			}
		]
	];
	let bodyWordCounter = 0;
	const bodyWords = bodyParagraphs.map((parts) =>
		parts.flatMap((part) =>
			part.text.split(' ').map((word) => ({ word, bold: !!part.bold, index: bodyWordCounter++ }))
		)
	);
	const totalBodyWords = bodyWordCounter;

	/** @param {boolean} bold @param {number} index */
	function bodyWordColor(bold, index, revealedCount) {
		if (index >= revealedCount) return 'text-gray-300';
		return bold ? 'text-gray-700' : 'text-gray-500';
	}

	/** @type {HTMLDivElement | undefined} */
	let bodyEl = $state();
	let bodyProgress = $state(0);
	let revealedBodyCount = $derived(Math.round(bodyProgress * totalBodyWords));

	// H2 — same scroll-scrub word reveal as the body, kept as its own
	// ref/progress pair (not reusing bodyEl's) since the heading sits above
	// the body block and would otherwise reveal in lockstep with it instead
	// of slightly ahead. Forced into 3 explicit lines (not left to wrap
	// naturally) since at mobile widths "Because Payments Should" and
	// "Never Be a Business Challenge" each wrapped a second time on their
	// own, producing an ugly 4-line stack instead of a clean 3.
	const headlineLines = ['Because Payments Should', 'Never Be a Business', 'Challenge'];
	let headlineCounter = 0;
	const headlineWords = headlineLines.map((line) =>
		line.split(' ').map((word) => ({ word, index: headlineCounter++ }))
	);
	const totalHeadlineWords = headlineCounter;

	/** @type {HTMLHeadingElement | undefined} */
	let headlineEl = $state();
	let headlineProgress = $state(0);
	let revealedHeadlineCount = $derived(Math.round(headlineProgress * totalHeadlineWords));

	/** @param {HTMLElement | undefined} el */
	function scrollProgressFor(el) {
		if (!el) return 0;
		const rect = el.getBoundingClientRect();
		const vh = window.innerHeight;
		const start = vh * 0.85;
		const end = vh * 0.35;
		return Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
	}

	// Roadmap loader — a pin-and-step interaction: `roadmapWrapperEl` is a
	// tall (400vh) container; the `<section>` inside it is `sticky top-0
	// h-screen`, so it fills the viewport and stays put for as long as the
	// wrapper still has scroll runway left. Rather than a smooth 1:1 scrub,
	// that runway is divided into 4 equal buckets (one per milestone) —
	// `activeStage` is which bucket the raw scroll progress currently falls
	// in, and the bar/marker animate (via CSS transition, not per-pixel
	// scroll) to that milestone's center each time the bucket changes. This
	// reads as 4 discrete "steps" while scrolling rather than a continuous
	// fill, per explicit request, without resorting to wheel-event
	// scroll-jacking (which breaks trackpad inertia, keyboard nav, and
	// screen readers) — it's just quantized scroll position + a transition.
	// Once the wrapper's extra height is used up, `sticky` naturally
	// releases on its own — no JS needed to "let go" of the scroll, that's
	// just what `sticky` does when its containing block runs out of room.
	/** @type {HTMLDivElement | undefined} */
	let roadmapWrapperEl = $state();
	let loaderProgress = $state(0);
	let activeStage = $derived(Math.min(milestones.length - 1, Math.floor(loaderProgress * milestones.length)));

	function updateLoaderProgress() {
		if (!roadmapWrapperEl) return 0;
		const rect = roadmapWrapperEl.getBoundingClientRect();
		const scrollRange = rect.height - window.innerHeight;
		if (scrollRange <= 0) return rect.top <= 0 ? 1 : 0;
		return Math.min(1, Math.max(0, -rect.top / scrollRange));
	}

	// loaderTargetPercent used to be a fixed grid-math formula
	// ((stage + 0.5) / 4) * 100, assuming a 4-column desktop grid where each
	// milestone is a 25%-wide slot. That breaks on mobile, where the grid is
	// grid-cols-1 (every milestone stacked full-width) — "center of the
	// Nth column" is meaningless once there's only one column. Instead,
	// measure where the *active milestone's year label* actually rendered
	// (via milestoneEls, one ref per label span) and express that as a
	// percentage of loaderTrackEl's width (the bar/badge's own container) —
	// this is correct under any layout, stacked or grid, without needing
	// separate breakpoint-specific math.
	/** @type {(HTMLElement | undefined)[]} */
	let milestoneEls = $state([]);
	/** @type {HTMLDivElement | undefined} */
	let loaderTrackEl = $state();
	let loaderTargetPercent = $state(0);

	function updateLoaderTargetPercent() {
		if (!loaderTrackEl) return;
		// Below `sm`, only the active milestone renders (single stacked
		// column — see the `hidden sm:block` below), so its label sits at a
		// near-constant left-aligned x regardless of which stage is active;
		// measuring its DOM position there produced a bar that barely moved
		// (~10-14%) instead of stepping 25/50/75/100. Fall back to the fixed
		// quarter-marker math for that layout; keep the DOM-measured version
		// for the real 4-column grid where it accounts for gap-x-8 exactly.
		const isDesktopGrid = window.matchMedia('(min-width: 640px)').matches;
		if (!isDesktopGrid) {
			loaderTargetPercent = ((activeStage + 0.5) / milestones.length) * 100;
			return;
		}
		const activeEl = milestoneEls[activeStage];
		if (!activeEl) return;
		const activeRect = activeEl.getBoundingClientRect();
		const trackRect = loaderTrackEl.getBoundingClientRect();
		if (trackRect.width === 0) return;
		const centerX = activeRect.left + activeRect.width / 2;
		loaderTargetPercent = Math.min(
			100,
			Math.max(0, ((centerX - trackRect.left) / trackRect.width) * 100)
		);
	}

	// "Our Approach" pin-and-step reveal — same mechanic as the roadmap
	// loader above: approachWrapperEl is a tall (500vh) container, the
	// section inside it is `sticky top-0 h-screen`, and that runway is
	// quantized into 4 buckets (one per card). Each card starts translated
	// well below its resting spot (off-screen, per "come from bottom") and
	// animates up into place once its bucket becomes active — "once the
	// first card fits center" is just that card's bucket completing, which
	// is exactly when activeCardStage advances and the next card's bucket
	// starts. Earlier cards stay in their resting position once revealed
	// (index <= activeCardStage), they don't reset when later cards enter.
	/** @type {HTMLDivElement | undefined} */
	let approachWrapperEl = $state();
	let approachProgress = $state(0);
	let activeCardStage = $derived(
		Math.min(approachCards.length - 1, Math.floor(approachProgress * approachCards.length))
	);

	function updateApproachProgress() {
		if (!approachWrapperEl) return 0;
		const rect = approachWrapperEl.getBoundingClientRect();
		const scrollRange = rect.height - window.innerHeight;
		if (scrollRange <= 0) return rect.top <= 0 ? 1 : 0;
		return Math.min(1, Math.max(0, -rect.top / scrollRange));
	}

	onMount(() => {
		let photosStarted = false;
		const photosObserver = new IntersectionObserver(
			(entries) => {
				if (!entries[0].isIntersecting || photosStarted) return;
				photosStarted = true;
				photosRevealed = true;
			},
			{ threshold: 0.3 }
		);
		if (photosEl) photosObserver.observe(photosEl);

		// Same count-up mechanic as the home page's FAQ stats band —
		// trigger-once IntersectionObserver, eased ramp to each target.
		let foundationAnimated = false;
		const foundationObserver = new IntersectionObserver(
			(entries) => {
				if (!entries[0].isIntersecting || foundationAnimated) return;
				foundationAnimated = true;
				const duration = 2000;
				const start = performance.now();
				/** @param {number} now */
				function tick(now) {
					const progress = Math.min((now - start) / duration, 1);
					const eased = 1 - Math.pow(1 - progress, 4);
					foundationStatCounts = foundationStats.map((stat) => Math.round(stat.target * eased));
					if (progress < 1) requestAnimationFrame(tick);
				}
				requestAnimationFrame(tick);
			},
			{ threshold: 0.2 }
		);
		if (foundationStatsEl) foundationObserver.observe(foundationStatsEl);

		let sealStarted = false;
		const sealObserver = new IntersectionObserver(
			(entries) => {
				if (!entries[0].isIntersecting || sealStarted) return;
				sealStarted = true;
				sealStamped = true;
			},
			{ threshold: 0.3 }
		);
		if (sealEl) sealObserver.observe(sealEl);

		let ticking = false;
		const updateProgress = () => {
			headlineProgress = scrollProgressFor(headlineEl);
			bodyProgress = scrollProgressFor(bodyEl);
			loaderProgress = updateLoaderProgress();
			updateLoaderTargetPercent();
			approachProgress = updateApproachProgress();
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
		window.addEventListener('resize', onScroll, { passive: true });

		return () => {
			photosObserver.disconnect();
			foundationObserver.disconnect();
			sealObserver.disconnect();
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
		};
	});
</script>

<svelte:head>
	<title>About Us — ElixirPay</title>
</svelte:head>

<AboutHero />

<section class="relative overflow-hidden bg-white pb-[200px] pt-[200px]">
	<img
		src={aboutLeftIllustration}
		alt=""
		class="illustration-float pointer-events-none absolute left-0 top-0 hidden h-auto lg:block lg:w-64"
		style="animation-duration: 2s;"
	/>
	<img
		src={aboutRightIllustration}
		alt=""
		class="illustration-float pointer-events-none absolute right-0 top-0 hidden h-auto lg:block lg:w-64"
		style="animation-duration: 2s; animation-delay: -1s;"
	/>

	<div class="container-page relative z-10">
		<div class="mx-auto max-w-2xl">
			<div bind:this={photosEl} class="relative mb-8 h-20 w-56 sm:h-24 sm:w-64">
				<img
					src={teamPhotoLeft}
					alt=""
					class="absolute left-1/2 top-4 h-16 w-16 drop-shadow-md transition-all duration-[1300ms] ease-[cubic-bezier(0.16,1,0.3,1)] sm:h-20 sm:w-20 {photosRevealed
						? '-translate-x-[calc(50%+4rem)] -rotate-6 scale-100 opacity-100 blur-none'
						: '-translate-x-1/2 rotate-0 scale-75 opacity-0 blur-md'}"
				/>
				<img
					src={teamPhotoRight}
					alt=""
					class="absolute left-1/2 top-4 h-16 w-16 drop-shadow-md transition-all duration-[1300ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 sm:h-20 sm:w-20 {photosRevealed
						? 'translate-x-[calc(-50%+4rem)] rotate-6 scale-100 opacity-100 blur-none'
						: '-translate-x-1/2 rotate-0 scale-75 opacity-0 blur-md'}"
				/>
				<img
					src={teamPhotoCenter}
					alt=""
					class="absolute left-1/2 top-0 z-10 h-20 w-20 -translate-x-1/2 drop-shadow-lg transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] sm:h-24 sm:w-24 {photosRevealed
						? 'scale-100 opacity-100 blur-none'
						: 'scale-90 opacity-0 blur-sm'}"
				/>
			</div>

			<p class="font-mono text-para-14 font-semibold uppercase tracking-widest text-blue-600">
				About Elixirpay
			</p>

			<h2 bind:this={headlineEl} class="mt-4 text-web-24 font-bold sm:text-web-32 md:text-web-40">
				{#each headlineWords as lineWords, li (li)}
					{#each lineWords as { word, index } (index)}<span
							class="transition-colors duration-300 {index < revealedHeadlineCount
								? 'text-gray-900'
								: 'text-gray-300'}">{word}{' '}</span
						>{/each}{#if li === 0}<br />{:else if li === 1}<br class="sm:hidden" />{/if}
				{/each}
			</h2>

			<div bind:this={bodyEl} class="mt-8 space-y-6 leading-[1.2]">
				{#each bodyWords as paragraphWords}
					<p class="text-para-16 sm:text-para-18 md:text-para-20">
						{#each paragraphWords as { word, bold, index }}<span
								class="transition-colors duration-300 {bold
									? 'font-semibold'
									: ''} {bodyWordColor(bold, index, revealedBodyCount)}">{word}{' '}</span
							>{/each}
					</p>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Pin-and-step: this wrapper is 400vh tall (100vh visible + 300vh of scroll
     "runway", 75vh per milestone); the sticky section inside pins to the
     viewport for exactly that runway. As the user scrolls through it,
     activeStage advances 2026 → Today → Next → Future one at a time, and
     the bar/marker animate to each milestone's center via CSS transition
     (see loaderTargetPercent above). Once the runway is used up, sticky
     releases on its own and normal scrolling carries on into the footer
     below — that hand-off is native browser behavior, not something this
     component has to detect and trigger. -->
<div bind:this={roadmapWrapperEl} class="relative h-[400vh] bg-black">
	<section
		class="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden bg-black text-center text-white"
	>
		<div class="container-page relative z-10">
			<h2 class="mx-auto max-w-2xl text-web-32 font-semibold sm:text-web-40 md:text-web-48">
				Every Great Platform<br />Starts With One Step
			</h2>
			<p class="mx-auto mt-6 max-w-2xl text-balance text-para-18 text-white/60">
				ElixirPay is just getting started. Every milestone reflects our commitment to building a
				stronger payment ecosystem for businesses across India and beyond.
			</p>

			<div bind:this={loaderTrackEl} class="relative mx-auto mt-16 max-w-4xl">
				<!-- Outer "shade" — a slightly lighter card wrapping the bar itself,
				     rounded-[30px], distinct from the bar's own rounded-[24px] so
				     the two radii read as two nested layers rather than one shape. -->
				<div class="rounded-[30px] bg-[#2D2D2D] p-3 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
					<div class="relative h-20 overflow-hidden rounded-[24px] bg-[#474646] sm:h-24">
						<div
							class="progress-stripes absolute inset-y-0 left-0 bg-[#0879E9] transition-[width] duration-500 ease-out"
							style="width: {loaderTargetPercent}%"
						></div>
					</div>
				</div>

				<div
					class="absolute top-full flex -translate-x-1/2 flex-col items-center transition-[left] duration-500 ease-out"
					style="left: {loaderTargetPercent}%"
				>
					<div
						class="h-10 w-px"
						style="background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.6))"
					></div>
					<!-- No wrapping circle here — the SVG itself already bakes in the
					     circular gray fill + light border (its own viewBox is a
					     complete badge, not just a trophy glyph), so adding another
					     circle around it just nested one inside the other and made
					     the trophy look small. Rendering the SVG directly at full
					     size is "the icon at full size" the reference shows. -->
					<img src={milestoneIcon} alt="" class="-mt-1 h-14 w-14" />
				</div>
			</div>

			<!-- mt-28 (not mt-16) — the badge below the bar is absolutely
			     positioned (top-full + h-10 connector + h-14 circle, ~92px
			     total), so it doesn't push this grid down via normal flow the
			     way a static sibling would. mt-16 left ~28px of the badge
			     overlapping the year label; mt-28 clears it with room to
			     spare. -->
			<div
				class="mx-auto mt-28 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-6 text-center sm:grid-cols-4 sm:text-left"
			>
				{#each milestones as milestone, index}
					<!-- Only the active milestone shows on mobile (single stacked
					     column) — with all 4 stacked simultaneously, the badge above
					     (which only moves horizontally, matching whichever heading is
					     active) had no consistent row to sit above vertically. On
					     desktop's 4-column row this restriction is lifted (sm:block)
					     since all 4 sit at the same vertical level there. -->
					<div class={index === activeStage ? '' : 'hidden sm:block'}>
						<p
							class="text-web-28 uppercase transition-colors duration-300 {index === activeStage
								? 'font-bold text-white'
								: 'font-medium text-gray-500'}"
						>
							<span bind:this={milestoneEls[index]} class="inline-block">{milestone.year}</span>
						</p>
						<p
							class="mt-2 text-para-16 transition-colors duration-300 sm:text-para-20 {index ===
							activeStage
								? 'text-white/80'
								: 'text-gray-500'}"
						>
							{milestone.label[0]}<br />{milestone.label[1]}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>

<!-- Pin-and-step, same mechanic as the roadmap loader — approachWrapperEl is
     a tall (500vh) scroll runway; the sticky section inside pins to the
     viewport while that runway is quantized into 4 buckets (one per card).
     Each card starts translated below its resting spot and animates up into
     place once its bucket activates; earlier cards stay put as later ones
     arrive. Once the runway is used up, sticky releases on its own. -->
<div bind:this={approachWrapperEl} class="relative h-[500vh] bg-[#EEEEEE]">
	<section class="sticky top-0 flex h-screen flex-col overflow-hidden bg-[#EEEEEE] pt-24">
		<!-- Decorative oversized background icons, behind all real content
		     (z-10 below on every content wrapper) — left icon top-left
		     corner, right icon bottom-right corner, per the reference. -->
		<img
			src={approachBgIconLeft}
			alt=""
			class="pointer-events-none absolute -left-24 -top-24 w-[420px] opacity-60"
		/>
		<img
			src={approachBgIconRight}
			alt=""
			class="pointer-events-none absolute -bottom-24 -right-24 w-[420px] opacity-60"
		/>

		<div class="container-page relative z-10 w-full text-center">
			<h2 class="text-web-28 font-bold text-gray-900 md:text-web-32">Our Approach</h2>
			<p class="mx-auto mt-3 max-w-lg text-para-16 text-gray-500">
				Every feature, API, and workflow is guided by a simple philosophy: build technology that
				solves real business problems—not technology for the sake of complexity.
			</p>
		</div>

		<!-- All cards overlap at the exact same spot now (no more fan-out
		     x-offset/margin stacking) — the container's size comes from
		     aspect-ratio alone since its children are all absolutely
		     positioned and contribute nothing to its natural size. Taller
		     aspect-ratio on mobile (4/5 vs the desktop frame's native
		     950/482) — at the frame's native ratio, a mobile-width card was
		     too short to fit the icon/title/body at any readable size,
		     so text from the active card and the receded card behind it
		     (barely offset, meant only to "peek out" a few px) overlapped
		     into unreadable text. -->
		<div class="container-page relative z-10 mt-8 w-full">
			<div class="relative mx-auto aspect-[4/5] max-w-3xl sm:aspect-[950/482]">
				{#each approachCards as card, i}
					{@const stepsBehind = Math.max(0, activeCardStage - i)}
					{@const notYetArrived = i > activeCardStage}
					<!-- notYetArrived: waiting below, invisible. Once its stage hits,
					     it animates straight into the front "stuck" spot
					     (translateY 0, scale 1, no rotation). Every card that was
					     previously in front then becomes "steps behind" the new
					     one — pushed back (negative translateY), shrunk slightly,
					     and given a little rotation so it still peeks out around
					     the new front card's edges, per "first card move
					     backward." -->
					<div
						class="absolute inset-0 overflow-hidden transition-[transform,opacity] duration-700 ease-out"
						style="z-index: {100 - stepsBehind}; opacity: {notYetArrived
							? 0
							: 1}; transform: translateY({notYetArrived
							? '40vh'
							: `${-stepsBehind * 16}px`}) scale({notYetArrived
							? 1
							: 1 - stepsBehind * 0.05}) rotate({stepsBehind > 0 ? card.rotate : '0deg'});"
					>
						<img src={approachCardFrame} alt="" class="absolute inset-0 h-full w-full" />

						<!-- Percentage-based (not fixed px) padding so this overlay stays
						     aligned with the frame image's own header/dots region at any
						     rendered width — pt-[20%] clears the baked-in dots + wordmark.
						     CSS resolves vertical padding % against the box's *width*, not
						     height, so switching to a taller mobile aspect-ratio (above)
						     silently shrunk that clearance relative to the new height —
						     pt-[49%] is the width-relative value that reproduces the same
						     ~39%-of-height gap at the 4/5 mobile ratio. Icon/title/body
						     sizes also step down on mobile so they fit the shorter card. -->
						<div class="absolute inset-0 flex flex-col px-[7%] pb-[6%] pt-[49%] sm:pt-[20%]">
							<img src={card.icon} alt="" class="h-[16%] w-auto self-start sm:h-[32.5%]" />
							<h3 class="mt-[4%] text-web-20 font-bold text-gray-900 sm:text-web-24">
								{card.title}
							</h3>
							<p class="mt-[2%] text-para-14 text-gray-600 sm:text-para-24">
								{#each card.body as part}<span
										class={part.bold ? 'font-semibold text-gray-800' : ''}>{part.text}</span
									>{/each}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>

<section class="overflow-hidden bg-black py-[200px] text-center text-white">
	<div class="container-page">
		<h2 class="text-web-32 font-semibold md:text-web-40">Life at Elixirpay</h2>
		<p class="mx-auto mt-4 max-w-2xl text-para-18 text-white/60">
			We're designers, engineers, marketers, and problem-solvers united by one goal: building
			payment infrastructure that businesses can trust. Every decision we make is driven by
			simplicity, reliability, and long-term thinking.
		</p>
	</div>

	<!-- Desktop/tablet: the single 5-across row from before, hidden below
	     `sm` — squeezed into one row on a phone-width screen it's
	     unreadably cramped, so mobile gets its own bespoke layout instead
	     (see the pyramid block below). -->
	<div class="relative mt-24 hidden sm:block">
		<!-- The string: one smooth, deep "U" sag — high at both ends, lowest
		     at center. Quadratic Bezier with P0=P2=10, P1=190 so the curve
		     midpoint = 0.25*10 + 0.5*190 + 0.25*10 = 100 (bottom of the
		     viewBox). Each photo's `sag` (margin-top) is sampled from this
		     same curve at its approximate x-position (t=0.1/0.3/0.5) so its
		     baked-in clothespin lands right on the line. Rendered behind the
		     photos (z-0 vs z-10) so the cards' white borders overlap it. -->
		<svg
			class="pointer-events-none absolute inset-x-0 -top-14 z-0 h-20 w-full"
			viewBox="0 0 1000 100"
			preserveAspectRatio="none"
		>
			<path
				d="M 0,10 Q 500,190 1000,10"
				stroke="rgba(255,255,255,0.4)"
				stroke-width="3"
				fill="none"
			/>
		</svg>

		<div class="relative z-10 flex items-start justify-center gap-4 md:gap-8">
			{#each lifeClotheslinePhotos as photo (photo.src)}
				<img
					src={photo.src}
					alt=""
					class="clothesline-photo h-64 w-auto shrink-0 md:h-80"
					style="margin-top: {photo.sag}px;"
				/>
			{/each}
		</div>
	</div>

	<!-- Mobile-only 2+2+1 pyramid, per explicit reference — each photo gets
	     its own short connector line above it (a straight gradient, same
	     technique as the roadmap loader's badge connector) rather than one
	     continuous curve, since the pins no longer share a single line.
	     Array order [5,4,1,2,3] is re-sliced as row1=[5,4], row2=[3,2]
	     (reversed, so green/red land left/right in both rows), row3=[1]
	     centered — matching the reference's color layout exactly. -->
	<div class="flex flex-col items-center sm:hidden">
		<!-- One single string, only above row 1 — nothing below connects the
		     rows; those photos simply overlap/touch each other directly
		     (negative margins pull each row up into the one above it). The
		     svg is `absolute inset-x-0` over a `relative` wrapper sized by
		     row 1 itself, so it always spans exactly as wide as that row
		     (the two photos' rendered width varies, a fixed w-40 svg from
		     the first pass didn't match and left the string floating,
		     narrower than the photos and not reaching either pin). -->
		<!-- Each row stacks in front of the one above it (z-0/10/20) — later
		     rows are meant to overlap forward onto earlier ones, per
		     explicit correction; default DOM order alone wasn't doing that
		     reliably once the rows got negative margins pulling them
		     upward into each other. Row 3 also got its overlap eased back
		     (-mt-10 → -mt-6) since row 2's photo was cropping into its pin
		     at the tighter spacing. -->
		<div class="relative z-0 w-full">
			<svg
				class="pointer-events-none absolute inset-x-0 top-2 h-10 w-full"
				viewBox="0 0 100 40"
				preserveAspectRatio="none"
			>
				<!-- vector-effect="non-scaling-stroke" — the svg's viewBox
				     (100x40) is stretched non-uniformly to fill its actual
				     rendered box (~390x40, preserveAspectRatio="none"), which
				     without this would squash the round linecap into a
				     horizontal ellipse that reads as a flat diagonal crop
				     instead of a clean rounded end. This keeps the stroke
				     (and its cap) sized in real screen pixels regardless of
				     that stretch. -->
				<path
					d="M 5,5 Q 50,62 95,5"
					stroke="rgba(255,255,255,0.4)"
					stroke-width="3"
					stroke-linecap="round"
					vector-effect="non-scaling-stroke"
					fill="none"
				/>
			</svg>

			<div class="relative mt-8 flex justify-center gap-8">
				<!-- card4's baked-in pin sits noticeably lower inside its own
				     image than card5's (confirmed against the desktop
				     clothesline's per-card pin geometry) — a few px of extra
				     lift keeps its pin touching the same curve card5's does. -->
				{#each [lifeClotheslinePhotos[0], lifeClotheslinePhotos[1]] as photo, idx (photo.src)}
					<img
						src={photo.src}
						alt=""
						class="clothesline-photo h-40 w-auto shrink-0"
						style={idx === 1 ? 'margin-top: -5px' : ''}
					/>
				{/each}
			</div>
		</div>

		<div class="relative z-10 -mt-10 flex gap-8">
			{#each [lifeClotheslinePhotos[4], lifeClotheslinePhotos[3]] as photo (photo.src)}
				<img src={photo.src} alt="" class="clothesline-photo h-40 w-auto shrink-0" />
			{/each}
		</div>

		<img
			src={lifeClotheslinePhotos[2].src}
			alt=""
			class="clothesline-photo relative z-20 -mt-10 h-40 w-auto shrink-0 -translate-x-4"
		/>
	</div>
</section>

<!-- pt-only (no pb) — the final CTA section right after this one supplies
     its own top padding, so the stat grid's cells (each already with its
     own py-14) don't need extra bottom breathing room here. -->
<section class="bg-white pt-[200px]">
	<div class="container-page text-center">
		<img
			bind:this={sealEl}
			src={foundationSealLogo}
			alt=""
			class="mx-auto h-36 w-auto {sealStamped ? 'seal-stamp' : 'opacity-0'}"
		/>
		<h2 class="mt-8 text-web-32 font-bold text-gray-900 md:text-web-40">
			Built on a Strong Foundation
		</h2>
		<p class="mx-auto mt-4 max-w-xl text-para-18 text-gray-500">
			Modern businesses need payment infrastructure they can rely on. Here's what powers every
			experience built with ElixirPay.
		</p>
	</div>

	<div
		bind:this={foundationStatsEl}
		class="mt-[160px] grid grid-cols-2 border-t border-gray-200 lg:grid-cols-4"
	>
		{#each foundationStats as stat, i}
			<div
				class="border-b border-gray-200 px-8 py-14 text-center last:border-b-0 odd:bg-white even:bg-gray-50 lg:border-b-0 lg:border-r lg:border-gray-200 lg:last:border-r-0"
			>
				<p class="text-web-24 font-bold tabular-nums text-gray-900 md:text-web-28">
					{foundationStatCounts[i]}{stat.suffix} {stat.label}
				</p>
				<p class="mt-2 font-mono text-para-14 text-gray-500">
					{stat.caption[0]}<br />{stat.caption[1]}
				</p>
			</div>
		{/each}
	</div>
</section>

<!-- Final CTA — taken from the home page verbatim, placed as the last
     section before the shared Footer. -->
<section class="relative overflow-hidden bg-black py-[200px] text-center text-white">
	<div
		class="absolute inset-0 bg-cover bg-top bg-no-repeat"
		style="background-image: url('{finalCtaBg}')"
	></div>

	<div class="container-page relative z-10">
		<div class="mx-auto h-24 w-24 [perspective:600px]">
			<img src={finalCtaCoin} alt="" class="coin-spin h-full w-full" />
		</div>
		<h2 class="mx-auto mt-8 max-w-4xl text-web-32 font-semibold sm:text-web-40 md:text-web-56">
			The Future of<br />Payments Starts Here.
		</h2>
		<p class="mx-auto mt-6 max-w-4xl text-balance text-para-20 text-white/70">
			Every growing business deserves payment infrastructure that's reliable, scalable, and
			built for the future. Focus on your business while ElixirPay keeps money moving.
		</p>
		<a
			href="/contact"
			class="mt-10 inline-block rounded-lg bg-white px-6 py-3 font-mono text-para-14 font-medium text-gray-900 hover:bg-gray-100"
		>
			Get Started
		</a>
	</div>
</section>

<style>
	/* Drops from above and settles like a stamp — one continuous spring
	   motion (not hand-plotted bounce keyframes) via a proper ease-out-back
	   cubic-bezier, so the overshoot-and-settle interpolates smoothly the
	   whole way through instead of visibly jumping between fixed stops. */
	.seal-stamp {
		animation: stamp-drop 1100ms cubic-bezier(0.34, 1.56, 0.64, 1) both;
	}
	@keyframes stamp-drop {
		0% {
			transform: translateY(-320px) scale(0.85);
			opacity: 0;
		}
		55% {
			opacity: 1;
		}
		100% {
			transform: translateY(0) scale(1);
			opacity: 1;
		}
	}

	.illustration-float {
		animation: illustration-float 3s ease-in-out infinite;
	}
	@keyframes illustration-float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-12px);
		}
	}

	/* rotateY, not rotateX — spins the coin around its vertical axis
	   (face-to-face), matching the home page's final CTA coin exactly. */
	.coin-spin {
		animation: coin-spin 3s linear infinite;
		transform-style: preserve-3d;
	}
	@keyframes coin-spin {
		from {
			transform: rotateY(0deg);
		}
		to {
			transform: rotateY(360deg);
		}
	}

	/* Photos hang from a single pin near their top edge, so a hover sway
	   has to rotate around that pin, not the image's own center — using
	   transform-origin: top center approximates the pin's grip point. */
	.clothesline-photo {
		transform-origin: top center;
	}
	/* (hover: hover) — real pointer devices only, so a tap on mobile can't
	   leave the sway "stuck" mid-animation the way :hover can on touch. */
	@media (hover: hover) and (pointer: fine) {
		.clothesline-photo:hover {
			animation: wind-sway 0.7s ease-in-out;
		}
	}
	@keyframes wind-sway {
		0% {
			transform: rotate(0deg);
		}
		20% {
			transform: rotate(-7deg);
		}
		40% {
			transform: rotate(5deg);
		}
		60% {
			transform: rotate(-3deg);
		}
		80% {
			transform: rotate(2deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}

	.progress-stripes {
		background-image: repeating-linear-gradient(
			45deg,
			rgba(255, 255, 255, 0.2) 0px,
			rgba(255, 255, 255, 0.2) 16px,
			transparent 16px,
			transparent 32px
		);
	}
</style>
