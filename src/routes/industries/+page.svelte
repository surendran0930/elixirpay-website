<script>
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import IndustriesHero from '$lib/components/IndustriesHero.svelte';

	// FAQ illustration — same asset reused on every FAQ section site-wide.
	const faqIllustration = 'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/faq.svg';

	// Same left/right doodle illustrations + blue wax-seal badge as the
	// About page's equivalent sections — reused verbatim per explicit
	// "we used all the components already use same here" request.
	const aboutIllustrationBase =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%202%20-%20About%20and%20social%20proffs/';
	const aboutLeftIllustration = aboutIllustrationBase + 'left.png';
	const aboutRightIllustration = aboutIllustrationBase + 'right.png';
	const sealLogo = aboutIllustrationBase + '3d%20elixirpay.png';

	/** @type {HTMLImageElement | undefined} */
	let sealEl = $state();
	let sealStamped = $state(false);

	onMount(() => {
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
		return () => sealObserver.disconnect();
	});

	onMount(() => {
		let workflowsStarted = false;
		const workflowsObserver = new IntersectionObserver(
			(entries) => {
				if (!entries[0].isIntersecting || workflowsStarted) return;
				workflowsStarted = true;
				scheduleWorkflowAutoAdvance();
			},
			{ threshold: 0.3 }
		);
		if (workflowsCardEl) workflowsObserver.observe(workflowsCardEl);
		return () => {
			workflowsObserver.disconnect();
			clearTimeout(workflowAutoAdvanceTimer);
		};
	});

	// "Built Around Real Business Workflows" — same sidebar + content-panel
	// mechanic as the home page's Solutions section, minus its top-level
	// category tab row (per explicit "use the same here without top menu"
	// request) — this list of 8 industries is the only level of navigation.
	// Only Healthcare has real copy (from the reference screenshot); the
	// other 7 are placeholder copy in the same voice, written so the panel
	// has something to switch to — swap in real copy once available.
	const businessWorkflows = [
		{
			label: 'Healthcare',
			heading: 'Payments That Let Care Come First',
			description:
				"Healthcare providers manage consultations, diagnostics, hospital billing, and insurance collections every day. ElixirPay simplifies these payment journeys so healthcare teams can spend less time managing payments and more time caring for patients.",
			recommendedProducts: ['Payment Gateway', 'Payment Links', 'Invoices', 'Reconciliation'],
			idealFor: ['Hospitals', 'Clinics', 'Telemedicine Platforms', 'Diagnostic Centers'],
			commonNeeds: [
				'Appointment payments',
				'Hospital billing',
				'Insurance collections',
				'Diagnostic payments'
			]
		},
		{
			label: 'Education',
			heading: 'Simplifying Payments for Modern Learning',
			description:
				'From admissions and tuition fees to recurring course subscriptions, educational institutions manage thousands of student payments every year. ElixirPay helps simplify fee collection while creating a smoother payment experience for students and parents.',
			recommendedProducts: ['Payment Gateway', 'Subscriptions', 'Invoices', 'Payment Links'],
			idealFor: ['Schools', 'Colleges', 'Universities', 'EdTech Platforms'],
			commonNeeds: [
				'Admission fees',
				'Tuition payments',
				'Recurring subscriptions',
				'Student refunds'
			]
		},
		{
			label: 'Travel',
			heading: 'Power Every Booking with Reliable Payments',
			description:
				'Travel businesses handle reservations, deposits, cancellations, and refunds every day. ElixirPay helps simplify these payment workflows, making every booking experience faster and more reliable.',
			recommendedProducts: ['Payment Gateway', 'Payment Links', 'Invoices', 'Reconciliation'],
			idealFor: ['Travel Agencies', 'Tour Operators', 'Hospitality Businesses', 'Booking Platforms'],
			commonNeeds: [
				'Booking payments',
				'Partial payments',
				'Refund processing',
				'Customer notifications'
			]
		},
		{
			label: 'Retail',
			heading: 'Keep Every Checkout Moving',
			description:
				'Modern retail depends on fast, seamless online payments and efficient refund handling. ElixirPay helps retailers simplify collections while keeping financial operations organized as the business grows.',
			recommendedProducts: ['Payment Gateway', 'QR Payments', 'Payment Links', 'Reconciliation'],
			idealFor: ['Retail Brands', 'Franchise Businesses', 'Consumer Stores'],
			commonNeeds: [
				'Online payments',
				'QR collections',
				'Refund management',
				'Settlement tracking'
			]
		},
		{
			label: 'Ecommerce',
			heading: 'Turn Every Checkout Into a Better Customer Experience',
			description:
				'Every abandoned checkout is a missed opportunity. ElixirPay helps ecommerce businesses reduce payment friction, improve checkout experiences, and manage growing transaction volumes with confidence.',
			recommendedProducts: ['Payment Gateway', 'Hosted Checkout', 'Subscriptions', 'Reconciliation'],
			idealFor: ['Online Stores', 'D2C Brands', 'Marketplace Sellers'],
			commonNeeds: [
				'Checkout payments',
				'Order collections',
				'Subscription billing',
				'Refunds'
			]
		},
		{
			label: 'Manufacturing',
			heading: 'Keep Payments Moving Across Your Supply Chain',
			description:
				'Manufacturers manage supplier payments, dealer collections, and settlement processes across multiple business partners. ElixirPay helps automate these financial workflows while improving operational visibility.',
			recommendedProducts: ['Payouts', 'Invoices', 'Virtual Account', 'Reconciliation'],
			idealFor: ['Manufacturers', 'Distributors', 'Industrial Businesses'],
			commonNeeds: [
				'Supplier payments',
				'Dealer collections',
				'Invoice payments',
				'Financial reconciliation'
			]
		},
		{
			label: 'Logistics',
			heading: 'Reliable Payments Behind Every Delivery',
			description:
				'From delivery collections to partner payouts, logistics businesses depend on efficient payment operations. ElixirPay helps streamline collections, settlements, and financial tracking across every shipment.',
			recommendedProducts: ['Payouts', 'Virtual Account', 'Payment Gateway', 'Reconciliation'],
			idealFor: ['Logistics Providers', 'Delivery Platforms', 'Courier Companies'],
			commonNeeds: [
				'Delivery collections',
				'Partner payouts',
				'Settlement tracking',
				'Customer refunds'
			]
		},
		{
			label: 'NGOs',
			heading: 'Build Trust Through Every Contribution',
			description:
				"Nonprofit organizations rely on secure donations and transparent financial operations. ElixirPay helps NGOs simplify donation collections while improving visibility into every contribution received.",
			recommendedProducts: ['Payment Gateway', 'Payment Links', 'Subscriptions', 'Reconciliation'],
			idealFor: ['Non-Profits', 'Foundations', 'Charitable Organizations'],
			commonNeeds: [
				'Online donations',
				'Recurring donations',
				'Donor receipts',
				'Fund reconciliation'
			]
		}
	];
	let activeWorkflowIndex = $state(0);
	let activeWorkflow = $derived(businessWorkflows[activeWorkflowIndex]);

	// Same auto-advancing progress-fill sidebar as the home page's Solutions
	// section — the active item's underline fills left-to-right over
	// WORKFLOW_AUTO_ADVANCE_MS, then moves to the next item, wrapping back
	// to the first after the last. A manual click restarts the timer from
	// that selection instead of stacking timers. Starts only once this
	// section actually scrolls into view (IntersectionObserver, same
	// "trigger once" pattern used elsewhere on this page for the seal).
	const WORKFLOW_AUTO_ADVANCE_MS = 5000;
	/** @type {ReturnType<typeof setTimeout>} */
	let workflowAutoAdvanceTimer;

	function scheduleWorkflowAutoAdvance() {
		clearTimeout(workflowAutoAdvanceTimer);
		workflowAutoAdvanceTimer = setTimeout(() => {
			activeWorkflowIndex = (activeWorkflowIndex + 1) % businessWorkflows.length;
			scheduleWorkflowAutoAdvance();
		}, WORKFLOW_AUTO_ADVANCE_MS);
	}

	/** @param {number} i */
	function selectWorkflow(i) {
		activeWorkflowIndex = i;
		scheduleWorkflowAutoAdvance();
	}

	/** @type {HTMLDivElement | undefined} */
	let workflowsCardEl = $state();

	// "Different Industries. One Reliable Platform." — same hover-popup
	// grid mechanic as the home page's "Built Around Every Team" section
	// (rise-up card on hover, blue cell fill), reused per explicit "we
	// already have the components which used in home page use same here"
	// request — just 2x2 instead of 3x2, and each popup is simpler (no
	// category label, no links grid, just heading + description). Only
	// "Enterprise-Grade Security" has real copy (from the reference); the
	// other 3 are placeholder copy in the same voice.
	const platformPillarsIconBase = 'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/industary/3rd%20section/';
	const platformPillars = [
		{
			key: 'flexible-infrastructure',
			label: 'Flexible Payment Infrastructure',
			icon: platformPillarsIconBase + 'icon%201.svg',
			description:
				'Support industry-specific payment journeys without changing platforms.'
		},
		{
			key: 'enterprise-security',
			label: 'Enterprise-Grade Security',
			icon: platformPillarsIconBase + 'icon%202.svg',
			description: 'Protect every transaction with modern security practices and continuous monitoring.'
		},
		{
			key: 'connected-operations',
			label: 'Connected Financial Operations',
			icon: platformPillarsIconBase + 'icon%203.svg',
			description:
				'Manage collections, payouts, reconciliation, and reporting through one unified platform.'
		},
		{
			key: 'built-to-grow',
			label: 'Built to Grow',
			icon: platformPillarsIconBase + 'icon%204.svg',
			description:
				'Scale your payment operations as your business, customers, and transaction volumes grow.'
		}
	];

	// "Built on Trust. Proven by Experience." — same testimonial carousel
	// (data + mechanic) as the home page, reused verbatim per explicit
	// "we have all 4 section in home page so keep those 4 here" request.
	const testimonialAssetBase =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%208%20-%20testimonials/';
	const testimonialLogo = testimonialAssetBase + 'logo%20company.png';
	const testimonials = [
		{
			key: 'cisco',
			avatar: testimonialAssetBase + 'image%201.png',
			logo: testimonialLogo,
			company: 'Cisco',
			quoteHighlight:
				'Elixirpay transformed our cross-border collections— FIRC generation that once took',
			quoteRest: 'up to five days now takes just seconds with the MoneySaver Exporter Account.',
			name: 'Anantha Krishnan',
			role: 'Founder & CEO'
		},
		{
			key: 'placeholder-1',
			avatar: testimonialAssetBase + 'image%203.png',
			logo: testimonialLogo,
			company: 'Northbridge Retail',
			quoteHighlight: 'ElixirPay cut our checkout drop-off in half—',
			quoteRest:
				'payments that used to fail silently now retry automatically, and support tickets about failed payments dropped to almost zero.',
			name: 'Priya Menon',
			role: 'Head of Payments, Northbridge Retail'
		},
		{
			key: 'placeholder-3',
			avatar: testimonialAssetBase + 'image%202.png',
			logo: testimonialLogo,
			company: 'Vantra Logistics',
			quoteHighlight: 'Vendor payouts across four countries used to take our team a full week—',
			quoteRest: "now it's one batch upload and everyone gets paid the same day.",
			name: 'Elena Castillo',
			role: 'Operations Director, Vantra Logistics'
		},
		{
			key: 'placeholder-2',
			avatar: testimonialAssetBase + 'image%204.png',
			logo: testimonialLogo,
			company: 'Solace Health',
			quoteHighlight: 'We went from reconciling refunds by hand every Friday—',
			quoteRest:
				'to a dashboard that matches every payout to the right patient invoice automatically.',
			name: 'Rachel Kim',
			role: 'VP Finance, Solace Health'
		},
		{
			key: 'placeholder-4',
			avatar: testimonialAssetBase + 'image%205.png',
			logo: testimonialLogo,
			company: 'Fernway Studio',
			quoteHighlight: "Switching to ElixirPay's subscription billing—",
			quoteRest:
				'meant we stopped losing customers to failed card renewals; the recovered revenue alone paid for the switch in a month.',
			name: 'Marcus Lee',
			role: 'Founder, Fernway Studio'
		}
	];
	const testimonialArrowIcons = {
		prev: testimonialAssetBase + 'Right%20icon.svg',
		next: testimonialAssetBase + 'left%20icon.svg'
	};
	let activeTestimonialIndex = $state(0);
	let visibleTestimonials = $derived(
		[-2, -1, 0, 1, 2].map((offset) => ({
			offset,
			testimonial:
				testimonials[(activeTestimonialIndex + offset + testimonials.length) % testimonials.length]
		}))
	);
	let activeTestimonial = $derived(testimonials[activeTestimonialIndex]);

	function prevTestimonial() {
		activeTestimonialIndex = (activeTestimonialIndex - 1 + testimonials.length) % testimonials.length;
	}
	function nextTestimonial() {
		activeTestimonialIndex = (activeTestimonialIndex + 1) % testimonials.length;
	}

	// "Industry FAQ" — same accordion mechanic as the home/Products FAQ
	// sections, its own industry-specific question set per the reference.
	const industryFaqs = [
		{
			question: 'Which industries can use ElixirPay?',
			answer:
				'ElixirPay is designed to support businesses across healthcare, education, travel, retail, ecommerce, manufacturing, logistics, nonprofits, and many other industries with flexible payment infrastructure.'
		},
		{
			question: 'Can ElixirPay adapt to industry-specific payment workflows?',
			answer:
				"Yes. Each industry has its own recommended products and configurations, so ElixirPay fits the way your business actually collects, moves, and manages money."
		},
		{
			question: 'Do I need different products for different industries?',
			answer:
				"Not necessarily. Every product works across industries — what changes is which combination we'd recommend based on your specific payment workflows."
		},
		{
			question: 'Can ElixirPay support businesses operating in multiple industries?',
			answer:
				'Absolutely. ElixirPay is modular by design, so businesses that span multiple industries can mix and match the products that fit each part of their operation.'
		},
		{
			question: 'Can I start with one product and expand later?',
			answer:
				'Yes. Start with the product that solves your most pressing need today, and add more as your business grows — no need to change your existing integration.'
		},
		{
			question: 'How do I know which solution is right for my industry?',
			answer:
				"Explore your industry above to see our recommended products, or talk to our team — we're happy to help you find the right fit."
		}
	];
	let openIndustryFaqIndex = $state(0);

	// Final CTA — same assets/animation as the home page's closing section,
	// own heading/subtext/button per the reference.
	const finalCtaBg =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%2010%20-%20sales/bg.png';
	const finalCtaCoin =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%2010%20-%20sales/coin.png';
</script>

<svelte:head>
	<title>Industries — ElixirPay</title>
</svelte:head>

<IndustriesHero />

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

	<div class="container-page relative z-10 text-center">
		<img
			bind:this={sealEl}
			src={sealLogo}
			alt=""
			class="mx-auto h-36 w-auto {sealStamped ? 'seal-stamp' : 'opacity-0'}"
		/>
		<h2 class="mx-auto mt-8 max-w-2xl text-web-32 font-bold text-gray-900 md:text-web-40">
			Every Industry Moves Money Differently
		</h2>
		<p class="mx-auto mt-4 max-w-2xl text-para-18 text-gray-500">
			A hospital doesn't collect payments like an online store. A logistics company doesn't
			manage settlements like a nonprofit organization. That's why ElixirPay adapts to the way
			different industries operate—helping businesses streamline payments without changing how
			they work.
		</p>
	</div>
</section>

<!-- "Built Around Real Business Workflows" — same sidebar + content-panel
     mechanic as the home page's Solutions section, just without its
     top-level category tab row (see script comment above). -->
<section class="bg-gray-100 py-[160px]">
	<div class="container-page text-center">
		<h2 class="mx-auto max-w-2xl text-web-32 font-bold text-gray-900 md:text-web-40">
			Built Around Real<br />Business Workflows
		</h2>
		<p class="mx-auto mt-5 max-w-2xl text-para-18 text-gray-500">
			From customer payments and recurring billing to supplier payouts and financial
			reconciliation, ElixirPay supports the payment journeys that keep every industry moving.
		</p>
	</div>

	<!-- px-[120px] here (not container-page's own clamp()-based padding,
	     which caps lower) is the exact gap this box's own edge should sit
	     from the viewport edge — same technique as the Contact/Products
	     pages' bordered containers. -->
	<div class="mx-auto mt-12 max-w-[1920px] px-4 md:px-[120px]">
		<div bind:this={workflowsCardEl} class="flex flex-col border border-gray-300 bg-gray-50 md:flex-row">
			<div class="flex shrink-0 flex-col border-b border-gray-200 px-8 py-10 md:w-1/4 md:border-b-0 md:border-r">
				{#each businessWorkflows as workflow, i}
					<button
						class="w-full pb-4 text-left transition-colors {i === activeWorkflowIndex
							? 'text-gray-900'
							: 'text-gray-400 hover:text-gray-600'}"
						onclick={() => selectWorkflow(i)}
					>
						<span class="font-mono text-para-14 font-semibold uppercase tracking-wide">
							{workflow.label}
						</span>
						<div
							class="relative mt-3 h-0.5 w-full {i === activeWorkflowIndex ? 'bg-blue-200' : 'bg-gray-200'}"
						>
							{#if i === activeWorkflowIndex}
								{#key activeWorkflowIndex}
									<div
										class="workflow-progress-fill absolute inset-y-0 left-0 bg-blue-500"
										style="animation-duration: {WORKFLOW_AUTO_ADVANCE_MS}ms"
									></div>
								{/key}
							{/if}
						</div>
					</button>

					<!-- Mobile/tablet (below md:) — each industry's content sits
					     directly under its own heading, accordion-style, instead
					     of in one shared panel far below the whole list (which
					     read as disconnected from the label you'd actually
					     tapped). Desktop keeps the separate side-by-side panel
					     below, unchanged. -->
					{#if i === activeWorkflowIndex}
						<div class="pb-8 pt-2 text-left md:hidden" transition:slide={{ duration: 300 }}>
							<h3 class="text-web-24 font-bold text-gray-900">{workflow.heading}</h3>
							<p class="mt-4 text-para-16 text-gray-600">{workflow.description}</p>

							<div class="mt-6">
								<p class="font-mono text-para-14 font-semibold uppercase tracking-wide text-gray-900">
									Recommended Products
								</p>
								<div class="mt-4 flex flex-wrap gap-3">
									{#each workflow.recommendedProducts as tag}
										<span class="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 font-mono text-para-14 text-gray-600">
											{tag}
										</span>
									{/each}
								</div>
							</div>

							<div class="mt-6">
								<p class="font-mono text-para-14 font-semibold uppercase tracking-wide text-gray-900">
									Ideal For
								</p>
								<div class="mt-4 flex flex-wrap gap-3">
									{#each workflow.idealFor as tag}
										<span class="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 font-mono text-para-14 text-gray-600">
											{tag}
										</span>
									{/each}
								</div>
							</div>

							<div class="mt-6">
								<p class="font-mono text-para-14 font-semibold uppercase tracking-wide text-gray-900">
									Common Payment Needs
								</p>
								<div class="mt-4 flex flex-wrap gap-3">
									{#each workflow.commonNeeds as tag}
										<span class="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 font-mono text-para-14 text-gray-600">
											{tag}
										</span>
									{/each}
								</div>
							</div>
						</div>
					{/if}
				{/each}
			</div>

			<div class="hidden flex-1 px-8 py-10 text-left md:block md:px-12">
				<h3 class="text-web-28 font-bold text-gray-900">{activeWorkflow.heading}</h3>
				<p class="mt-4 max-w-2xl text-para-18 text-gray-600">{activeWorkflow.description}</p>

				<div class="mt-8 grid gap-8 sm:grid-cols-2">
					<div>
						<p class="font-mono text-para-14 font-semibold uppercase tracking-wide text-gray-900">
							Recommended Products
						</p>
						<div class="mt-4 flex flex-wrap gap-3">
							{#each activeWorkflow.recommendedProducts as tag}
								<span class="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 font-mono text-para-14 text-gray-600">
									{tag}
								</span>
							{/each}
						</div>
					</div>
					<div>
						<p class="font-mono text-para-14 font-semibold uppercase tracking-wide text-gray-900">
							Ideal For
						</p>
						<div class="mt-4 flex flex-wrap gap-3">
							{#each activeWorkflow.idealFor as tag}
								<span class="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 font-mono text-para-14 text-gray-600">
									{tag}
								</span>
							{/each}
						</div>
					</div>
				</div>

				<div class="mt-8">
					<p class="font-mono text-para-14 font-semibold uppercase tracking-wide text-gray-900">
						Common Payment Needs
					</p>
					<div class="mt-4 flex flex-wrap gap-3">
						{#each activeWorkflow.commonNeeds as tag}
							<span class="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 font-mono text-para-14 text-gray-600">
								{tag}
							</span>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- "Different Industries. One Reliable Platform." — same hover-popup grid
     as the home page's "Built Around Every Team" section, 2x2 instead of
     3x2 (see script comment above). -->
<section class="bg-white py-[160px]">
	<div class="container-page text-center">
		<h2 class="mx-auto max-w-3xl text-web-32 font-semibold text-gray-800 sm:text-web-40 md:text-web-48">
			Different Industries. One<br />Reliable Platform.
		</h2>
		<p class="mx-auto mt-6 max-w-4xl text-para-24 text-gray-500">
			No matter how your business operates, every payment follows the same goal: collecting,
			moving, and managing money efficiently. ElixirPay brings flexible infrastructure,
			intelligent automation, and enterprise-grade reliability together in one connected platform
			that adapts to your industry's unique payment workflows.
		</p>
	</div>

	<!-- Mobile/tablet (below lg:) — same "show the backside to all" plain
	     stacked list as the home page's team grid; no hover on touch. -->
	<div class="mx-4 mt-20 sm:mx-8 lg:hidden">
		{#each platformPillars as pillar, i (pillar.key)}
			<div class="border border-gray-200 p-8 {i % 2 === 1 ? 'bg-gray-50' : 'bg-white'}">
				<img src={pillar.icon} alt="" class="h-10 w-10" />
				<p class="mt-6 text-web-20 font-bold text-gray-900">{pillar.label}</p>
				<p class="mt-3 border-t border-gray-300 pt-4 text-para-16 text-gray-600">
					{pillar.description}
				</p>
			</div>
		{/each}
	</div>

	<!-- Desktop (lg: and up) — the interactive hover-flip/popup grid. -->
	<div class="mx-4 mt-20 hidden border-l border-t border-gray-200 sm:mx-8 lg:mx-[200px] lg:block">
		<div class="grid lg:grid-cols-2">
			{#each platformPillars as pillar (pillar.key)}
				<div
					class="group relative h-[320px] border-b border-r border-gray-200 p-8 transition-colors duration-500 ease-in-out hover:bg-blue-600"
				>
					<div
						class="flex h-full flex-col justify-between transition-opacity duration-500 ease-in-out group-hover:opacity-0"
					>
						<img src={pillar.icon} alt="" class="h-10 w-10" />
						<span class="flex items-center gap-2 text-web-24 font-semibold text-gray-900">
							{pillar.label}
							<span aria-hidden="true">↗</span>
						</span>
					</div>

					<div
						class="pointer-events-none absolute bottom-16 left-4 right-[-3rem] z-20 h-[320px] origin-bottom scale-0 bg-gray-100 p-8 shadow-2xl transition-transform duration-500 ease-in-out group-hover:pointer-events-auto group-hover:scale-100"
					>
						<div class="flex h-full flex-col justify-between">
							<img src={pillar.icon} alt="" class="h-10 w-10" />
							<div>
								<p class="text-web-24 font-bold text-gray-900">{pillar.label}</p>
								<div class="mt-4 border-t border-gray-300 pt-4">
									<p class="text-para-16 text-gray-600">{pillar.description}</p>
								</div>
							</div>
							<div></div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- "Built on Trust. Proven by Experience." — same testimonial carousel as
     the home page, reused verbatim (see script above). -->
<section class="bg-black py-[160px] text-center text-white">
	<div class="container-page">
		<h2 class="mx-auto max-w-2xl text-web-32 font-semibold sm:text-web-40 md:text-web-48">
			Built on Trust. Proven<br />by Experience.
		</h2>
		<p class="mx-auto mt-6 max-w-2xl text-para-20 text-white/50">
			The best measure of a payment platform<br />
			isn't what we say— it's what our<br />
			customers experience every day.
		</p>
	</div>

	<div class="relative mt-20">
		<button
			class="absolute left-8 top-1/2 z-10 -translate-y-1/2 rounded-md bg-white/5 p-3 transition hover:bg-white/10"
			aria-label="Previous testimonial"
			onclick={prevTestimonial}
		>
			<img src={testimonialArrowIcons.prev} alt="" class="h-12 w-12" />
		</button>
		<button
			class="absolute right-8 top-1/2 z-10 -translate-y-1/2 rounded-md bg-white/5 p-3 transition hover:bg-white/10"
			aria-label="Next testimonial"
			onclick={nextTestimonial}
		>
			<img src={testimonialArrowIcons.next} alt="" class="h-12 w-12" />
		</button>

		<div class="flex items-center justify-center gap-4">
			{#each visibleTestimonials as { offset, testimonial } (testimonial.key)}
				<button
					class="overflow-hidden rounded-2xl bg-white/10 transition-all duration-300 {offset === 0
						? 'h-[200px] w-[200px] opacity-100'
						: Math.abs(offset) === 1
							? 'h-36 w-36 opacity-60'
							: 'h-28 w-28 opacity-30'}"
					aria-label={testimonial.name}
					onclick={() => (activeTestimonialIndex = testimonials.indexOf(testimonial))}
				>
					<img src={testimonial.avatar} alt={testimonial.name} class="h-full w-full object-cover" />
				</button>
			{/each}
		</div>
	</div>

	<div class="container-page mt-16">
		<p class="mx-auto max-w-3xl text-web-24 font-medium leading-snug sm:text-web-28">
			<span class="text-white">{activeTestimonial.quoteHighlight}</span>
			<span class="text-white/40">{activeTestimonial.quoteRest}</span>
		</p>

		<div class="mt-12 flex flex-col items-center gap-4">
			{#if activeTestimonial.logo}
				<img src={activeTestimonial.logo} alt={activeTestimonial.company} class="h-11 w-auto" />
			{:else}
				<span class="font-mono text-para-14 font-semibold uppercase tracking-widest text-white/70">
					{activeTestimonial.company}
				</span>
			{/if}
			<div>
				<p class="font-mono text-para-16 font-medium">{activeTestimonial.name}</p>
				<p class="mt-1 font-mono text-para-12 text-white/40">{activeTestimonial.role}</p>
			</div>
		</div>
	</div>
</section>

<!-- "Industry FAQ" — same accordion mechanic as the Products page's FAQ
     section, its own industry-specific question set. -->
<section class="bg-white py-[160px]">
	<div class="mx-4 grid grid-cols-1 gap-16 lg:mx-[120px] lg:grid-cols-[1fr_800px] lg:items-stretch lg:gap-12">
		<div class="flex flex-col">
			<h2 class="text-web-32 font-semibold text-gray-900 sm:text-web-40 md:text-web-48">
				Industry FAQ
			</h2>
			<p class="mt-6 max-w-lg text-para-20 text-gray-500">
				Choosing a payment platform is an important decision. Here are answers to the questions
				businesses ask before getting started with ElixirPay.
			</p>
			<img src={faqIllustration} alt="" class="mt-auto hidden h-auto lg:block lg:w-96" />
		</div>

		<div class="rounded-2xl border border-gray-200">
			{#each industryFaqs as faq, i}
				<button
					class="flex w-full items-start justify-between gap-6 border-b border-gray-100 p-8 text-left last:border-b-0"
					onclick={() => (openIndustryFaqIndex = openIndustryFaqIndex === i ? -1 : i)}
				>
					<div>
						<span class="block text-web-20 font-medium text-gray-900">{faq.question}</span>
						{#if openIndustryFaqIndex === i}
							<p class="mt-4 text-para-16 text-gray-500" transition:slide={{ duration: 300 }}>
								{faq.answer}
							</p>
						{/if}
					</div>
					<span
						class="relative mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-400"
					>
						<span class="absolute h-[2px] w-3 rounded-full bg-gray-600"></span>
						<span
							class="absolute h-3 w-[2px] rounded-full bg-gray-600 transition-transform duration-300 {openIndustryFaqIndex ===
							i
								? 'scale-y-0'
								: 'scale-y-100'}"
						></span>
					</span>
				</button>
			{/each}
		</div>
	</div>
</section>

<!-- Final CTA — same bg.png/coin assets + coin-spin animation as the home
     page's closing section, own heading/subtext/button per the reference. -->
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
			Power the Way Your<br />Industry Moves Money
		</h2>
		<p class="mx-auto mt-6 max-w-4xl text-balance text-para-20 text-white/70">
			Every industry has unique payment challenges. ElixirPay provides the infrastructure to
			simplify them—helping your business collect, move, and manage money with confidence.
		</p>
		<a
			href="/contact"
			class="mt-10 inline-block rounded-lg bg-white px-6 py-3 font-mono text-para-14 font-medium text-gray-900 hover:bg-gray-100"
		>
			Talk to Sales
		</a>
	</div>
</section>

<style>
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

	.workflow-progress-fill {
		width: 0%;
		animation-name: workflow-progress;
		animation-timing-function: linear;
		animation-fill-mode: forwards;
	}
	@keyframes workflow-progress {
		from {
			width: 0%;
		}
		to {
			width: 100%;
		}
	}
</style>
