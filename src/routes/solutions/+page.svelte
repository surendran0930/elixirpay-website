<script>
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import SolutionsHero from '$lib/components/SolutionsHero.svelte';

	// FAQ illustration — same asset reused on every FAQ section site-wide.
	const faqIllustration = 'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/faq.svg';

	// Same left/right doodle illustrations + blue wax-seal badge as the
	// About/Industries pages' equivalent sections — reused verbatim per
	// explicit "follow the industries banner and 2nd section here" request.
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

	// "Built for Every Stage of Growth" — 3 stacked stage cards, per the
	// reference (label, heading, description, recommended products, perfect
	// for, common challenges, and a mockup image with its own baked-in
	// colored background).
	const growthStagesImageBase = 'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Solutions/';
	const growthStages = [
		{
			label: 'Startups',
			heading: 'Launch Faster. Grow Without Limits.',
			description:
				"Building a business is challenging enough–payments shouldn't slow you down. ElixirPay helps startups launch quickly with simple integrations, reliable payment infrastructure, and the flexibility to grow without rebuilding their payment stack.",
			recommendedProducts: ['Payment Gateway', 'Hosted Checkout', 'Payment Links', 'Invoices'],
			perfectFor: 'Tech startups • D2C brands • Mobile apps • Service businesses',
			challenges: [
				'Limited engineering resources',
				'Faster go-to-market',
				'Managing early-stage cash flow',
				'Keeping infrastructure costs low'
			],
			image: growthStagesImageBase + '1.svg'
		},
		{
			label: 'Growing Businesses',
			heading: 'Scale Operations, Not Complexity.',
			description:
				'Growth brings more customers, more payments, and more operational challenges. ElixirPay helps automate collections, payouts, and financial operations so your team spends less time managing payments and more time growing the business.',
			recommendedProducts: ['Payment Gateway', 'Payouts', 'Virtual Accounts', 'Reconciliation'],
			perfectFor: 'Growing businesses • Multi-location brands • Expanding online businesses',
			challenges: [
				'Increasing transaction volumes',
				'Manual payment operations',
				'Faster settlements',
				'Operational efficiency'
			],
			image: growthStagesImageBase + '2.svg'
		},
		{
			label: 'Enterprise',
			heading: 'Infrastructure Designed for Large-Scale Businesses.',
			description:
				'High-volume businesses demand performance, security, and reliability. ElixirPay delivers enterprise-grade payment infrastructure built to support complex workflows, multiple business units, and large transaction volumes.',
			recommendedProducts: ['Payment Gateway', 'Payouts', 'Reconciliation', 'White Label Solutions'],
			perfectFor: 'Large enterprises • Financial institutions • High-volume businesses',
			challenges: [
				'High transaction volumes',
				'Multiple payment workflows',
				'Advanced reporting',
				'Enterprise security requirements'
			],
			image: growthStagesImageBase + '3.svg'
		}
	];

	// "Purpose-Built for Modern Business Models" — same pill-category +
	// bordered-content-panel mechanic as the Products page's "Collect
	// Payments Without Limits" section, per explicit "use the components we
	// used before" request. Only SaaS has real copy (from the reference);
	// Marketplaces and Platforms are placeholder copy in the same voice.
	const businessModelsImageBase = 'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Solutions/4th/';
	const businessModels = [
		{
			label: 'SaaS',
			heading: 'Recurring Revenue Made Simple.',
			description:
				'Subscription businesses rely on predictable billing and seamless customer experiences. ElixirPay simplifies recurring payments so you can focus on building products instead of managing billing cycles.',
			challenges: [
				'Subscription billing',
				'Failed payment recovery',
				'Customer renewals',
				'Revenue tracking'
			],
			recommendedProducts: ['Subscriptions', 'Payment Gateway', 'Invoices', 'Reconciliation'],
			perfectFor: 'SaaS products • Membership platforms • Subscription services',
			image: businessModelsImageBase + '1.svg'
		},
		{
			label: 'Marketplaces',
			heading: 'Power Every Transaction Between Buyers and Sellers.',
			description:
				'Marketplaces handle more than payments—they manage money flowing between multiple parties. ElixirPay simplifies collections, settlements, and payouts through one connected platform.',
			challenges: [
				'Multi-party settlements',
				'Seller payouts',
				'Commission management',
				'Payment visibility'
			],
			recommendedProducts: ['Payment Gateway', 'Payouts', 'Virtual Accounts', 'Reconciliation'],
			perfectFor: 'Marketplace businesses • Aggregators •  Multi-vendor platforms',
			image: businessModelsImageBase + '2.svg'
		},
		{
			label: 'Platforms',
			heading: 'Embed Payments Into Your Product.',
			description:
				"Create seamless payment experiences without building payment infrastructure from scratch. ElixirPay enables platforms to integrate payments directly into their products while maintaining complete control over the customer experience.",
			challenges: [
				'Embedded payments',
				'Platform scalability',
				'Developer efficiency',
				'Custom payment experiences'
			],
			recommendedProducts: ['Payment Gateway', 'White Label Solutions', 'Payouts', 'APIs & SDKs'],
			perfectFor: 'Technology platforms • Fintech products • Enterprise software',
			image: businessModelsImageBase + '3.svg'
		}
	];
	let activeBusinessModelIndex = $state(0);
	let activeBusinessModel = $derived(businessModels[activeBusinessModelIndex]);

	// "Built For Businesses That Plan Ahead" — same hover-popup grid as the
	// Industries page's "Different Industries. One Reliable Platform."
	// section (same 4 icons, reused per explicit "we already done in
	// previous pages just use it here" request), new labels/copy. Only
	// "Simplified Operations" has real copy (from the reference); the other
	// 3 are placeholder copy in the same voice.
	const platformPillarsIconBase = 'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/industary/3rd%20section/';
	const platformPillars = [
		{
			key: 'faster-time-to-market',
			label: 'Faster Time to Market',
			icon: platformPillarsIconBase + 'icon%201.svg',
			description:
				'Launch new payment capabilities in days, not months, with pre-built infrastructure ready to go.'
		},
		{
			key: 'simplified-operations',
			label: 'Simplified Operations',
			icon: platformPillarsIconBase + 'icon%202.svg',
			description: 'Manage payments, payouts, and financial workflows from one connected platform.'
		},
		{
			key: 'built-to-scale',
			label: 'Built to Scale',
			icon: platformPillarsIconBase + 'icon%203.svg',
			description:
				'The same platform that supports your first transaction scales with you to your millionth, no re-platforming required.'
		},
		{
			key: 'enterprise-security',
			label: 'Enterprise-Grade Security',
			icon: platformPillarsIconBase + 'icon%204.svg',
			description: 'Protect every transaction with modern security practices and continuous monitoring.'
		}
	];

	// "Built on Trust. Proven by Experience." — same testimonial carousel
	// (data + mechanic) as the home/Industries pages, reused verbatim.
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

	// "Solution FAQ" — same accordion mechanic as the Products/Industries
	// FAQ sections, its own question set per the reference.
	const solutionFaqs = [
		{
			question: 'Which solution is right for my business?',
			answer:
				'Choose the solution that best matches your current stage or business model. As your business grows, ElixirPay grows with you, allowing you to adopt additional products without changing platforms.'
		},
		{
			question: 'Do I need a development team to get started?',
			answer:
				'Not necessarily. Hosted Checkout and Payment Links need no code at all, while our APIs and SDKs are ready whenever your team wants deeper, custom integration.'
		},
		{
			question: 'How quickly can I start accepting payments?',
			answer:
				'Getting started is designed to be simple. Once your account is verified and your integration is complete, you can begin accepting payments through your preferred payment methods.'
		},
		{
			question: 'Is ElixirPay suitable for custom payment workflows?',
			answer:
				'Yes. ElixirPay is modular by design, so you can combine products and configure them to match workflows unique to your business or industry.'
		},
		{
			question: 'How do I choose the right products?',
			answer:
				"Start with the solution matching your business model or stage above — it lists the recommended products for exactly that situation. Our team is also happy to help you decide."
		},
		{
			question: 'Can I start small and expand later?',
			answer:
				'Absolutely. Start with the product that solves your most pressing need today, and add more as your business grows — no need to change your existing integration.'
		}
	];
	let openSolutionFaqIndex = $state(0);

	// Final CTA — same assets/animation/copy as the About page's closing
	// section, reused verbatim per the reference.
	const finalCtaBg =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%2010%20-%20sales/bg.png';
	const finalCtaCoin =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%2010%20-%20sales/coin.png';
</script>

<svelte:head>
	<title>Solutions — ElixirPay</title>
</svelte:head>

<SolutionsHero />

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
			Not Every Business Needs <br />the Same Payment Solution
		</h2>
		<p class="mx-auto mt-4 max-w-2xl text-para-18 text-gray-500">
			A startup doesn't operate like an enterprise. A SaaS platform has different payment needs than a marketplace. That's why ElixirPay offers solutions designed around how businesses grow, operate, and move money—without changing the platform behind it.
		</p>
	</div>
</section>

<!-- "Built for Every Stage of Growth" — 3 stacked stage cards, matching the
     reference exactly (label, heading, description, recommended products +
     perfect-for on the left; common challenges + mockup image on the
     right). -->
<section class="bg-gray-200 py-[160px]">
	<div class="container-page text-center">
		<h2 class="mx-auto max-w-2xl text-web-32 font-bold text-gray-900 md:text-web-40">
			Built for Every Stage of Growth
		</h2>
		<p class="mx-auto mt-5 max-w-2xl text-para-18 text-gray-500">
			Wherever your business is today, ElixirPay provides the tools to help you launch faster,
			operate smarter, and scale with confidence.
		</p>
	</div>

	<div class="mx-auto mt-12 flex max-w-[1920px] flex-col gap-8 px-4 md:px-[120px]">
		{#each growthStages as stage}
			<div class="grid gap-10 border border-gray-300 bg-gray-50 p-8 md:grid-cols-[1fr_380px] md:p-12">
				<div class="text-left">
					<p class="font-mono text-para-14 font-semibold uppercase tracking-wide text-blue-600">
						{stage.label}
					</p>
					<h3 class="mt-2 text-web-28 font-bold text-gray-900">{stage.heading}</h3>
					<p class="mt-4 max-w-xl text-para-18 text-gray-600">{stage.description}</p>

					<div class="mt-8">
						<p class="font-mono text-para-14 font-semibold uppercase tracking-wide text-gray-900">
							Recommended Products
						</p>
						<div class="mt-4 flex flex-wrap gap-3">
							{#each stage.recommendedProducts as tag}
								<span class="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 font-mono text-para-14 text-gray-600">
									{tag}
								</span>
							{/each}
						</div>
					</div>

					<div class="mt-6">
						<p class="font-mono text-para-14 font-semibold uppercase tracking-wide text-gray-900">
							Perfect For
						</p>
						<p class="mt-3 text-para-16 text-gray-600">{stage.perfectFor}</p>
					</div>
				</div>

				<div class="flex flex-col text-left">
					<p class="font-mono text-para-14 font-semibold uppercase tracking-wide text-gray-900">
						Common Challenges
					</p>
					<ul class="mt-4 space-y-2">
						{#each stage.challenges as challenge}
							<li class="text-para-16 text-gray-600">• {challenge}</li>
						{/each}
					</ul>

					<img
						src={stage.image}
						alt=""
						class="mt-6 aspect-[16/10] w-full rounded-xl object-cover"
					/>
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- "Purpose-Built for Modern Business Models" — same pill-category +
     bordered-panel mechanic as the Products page's "Collect Payments
     Without Limits" section, reused per explicit "use the components we
     used before" request. -->
<section class="bg-white-100 py-[160px]">
	<div class="container-page text-center">
		<h2 class="mx-auto max-w-2xl text-web-32 font-bold text-gray-900 md:text-web-40">
			Purpose-Built for <br> Modern Business Models
		</h2>
		<p class="mx-auto mt-5 max-w-2xl text-para-18 text-gray-500">
			Different business models move money differently. ElixirPay adapts to the way your
			platform collects, distributes, and manages payments.
		</p>

		<div class="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
			{#each businessModels as model, i}
				<button
					class="rounded-full px-6 py-3 text-para-16 font-medium transition-colors {i ===
					activeBusinessModelIndex
						? 'bg-gray-900 text-white'
						: 'border border-gray-300 text-gray-600 hover:bg-gray-200'}"
					onclick={() => (activeBusinessModelIndex = i)}
				>
					{model.label}
				</button>
			{/each}
		</div>
	</div>

	<div class="mx-auto mt-12 max-w-[1920px] px-4 md:px-[120px]">
		<div class="grid gap-10 border border-gray-300 bg-gray-50 p-8 md:grid-cols-[1fr_460px] md:p-12">
			<div class="text-left">
				<h3 class="text-web-28 font-bold text-gray-900">{activeBusinessModel.heading}</h3>
				<p class="mt-4 max-w-xl text-para-18 text-gray-600">{activeBusinessModel.description}</p>

				<div class="mt-8 grid gap-8 border-t border-gray-200 pt-8 sm:grid-cols-2">
					<div>
						<p class="text-web-20 font-bold text-gray-900">Common Challenges</p>
						<ul class="mt-4 space-y-3">
							{#each activeBusinessModel.challenges as challenge}
								<li class="flex items-center gap-2 text-para-16 text-gray-500">
									<span aria-hidden="true">→</span>
									{challenge}
								</li>
							{/each}
						</ul>
					</div>
					<div>
						<p class="text-web-20 font-bold text-gray-900">Recommended Products</p>
						<ul class="mt-4 space-y-3">
							{#each activeBusinessModel.recommendedProducts as product}
								<li class="flex items-center gap-2 text-para-16 text-gray-500">
									<span aria-hidden="true">→</span>
									{product}
								</li>
							{/each}
						</ul>
					</div>
				</div>

				<div class="mt-8 border-t border-gray-200 pt-8">
					<p class="text-web-20 font-bold text-gray-900">Perfect for</p>
					<p class="mt-3 text-para-16 text-gray-500">{activeBusinessModel.perfectFor}</p>
				</div>
			</div>

			<div class="flex items-center">
				<img
					src={activeBusinessModel.image}
					alt=""
					class="aspect-[4/5] w-full rounded-xl object-cover"
				/>
			</div>
		</div>
	</div>
</section>

<!-- "Built For Businesses That Plan Ahead" — same hover-popup grid as the
     Industries page's "Different Industries. One Reliable Platform."
     section (same icons + mechanic), reused per explicit "we already done
     in previous pages just use it here" request. -->
<section class="bg-white py-[160px]">
	<div class="container-page text-center">
		<h2 class="mx-auto max-w-3xl text-web-32 font-semibold text-gray-800 sm:text-web-40 md:text-web-48">
			Built For Businesses<br />That Plan Ahead
		</h2>
		<p class="mx-auto mt-6 max-w-4xl text-para-24 text-gray-500">
			The right payment platform doesn't just solve today's <br> challenges—it prepares you for
			tomorrow's opportunities.
		</p>
	</div>

	<!-- Mobile/tablet (below lg:) — plain stacked list, no hover on touch. -->
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
     the home/Industries pages, reused verbatim (see script above). -->
<section class="bg-black py-[160px] text-center text-white">
	<div class="container-page">
		<h2 class="mx-auto max-w-2xl text-web-32 font-semibold sm:text-web-40 md:text-web-48">
			Built on Trust. Proven<br />by Experience.
		</h2>
		<p class="mx-auto mt-6 max-w-2xl text-para-20 text-white/50">
			The best measure of a payment platform
			isn't what we <br> say— it's what our
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

<!-- "Solution FAQ" — same accordion mechanic as the Products/Industries FAQ
     sections, its own question set. -->
<section class="bg-white py-[160px]">
	<div class="mx-4 grid grid-cols-1 gap-16 lg:mx-[120px] lg:grid-cols-[1fr_800px] lg:items-start lg:gap-12">
		<div>
			<h2 class="text-web-32 font-semibold text-gray-900 sm:text-web-40 md:text-web-48">
				Solution FAQ
			</h2>
			<p class="mt-6 max-w-lg text-para-20 text-gray-500">
				Choosing a payment platform is an important decision. Here are answers to the questions
				businesses ask before getting started with ElixirPay.
			</p>
			<img src={faqIllustration} alt="" class="mt-10 hidden h-auto lg:block lg:w-96" />
		</div>

		<div class="rounded-2xl border border-gray-200">
			{#each solutionFaqs as faq, i}
				<button
					class="flex w-full items-start justify-between gap-6 border-b border-gray-100 p-8 text-left last:border-b-0"
					onclick={() => (openSolutionFaqIndex = openSolutionFaqIndex === i ? -1 : i)}
				>
					<div>
						<span class="block text-web-20 font-medium text-gray-900">{faq.question}</span>
						{#if openSolutionFaqIndex === i}
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
							class="absolute h-3 w-[2px] rounded-full bg-gray-600 transition-transform duration-300 {openSolutionFaqIndex ===
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

<!-- Final CTA — same bg.png/coin assets + coin-spin animation + copy as the
     About page's closing section, reused verbatim per the reference. -->
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
			Whatever You're Building,<br />Build It With Confidence.
		</h2>
		<p class="mx-auto mt-6 max-w-4xl text-balance text-para-20 text-white/70">
			From startups to enterprises, ElixirPay provides the payment infrastructure businesses need
			to launch, grow, and scale with confidence.
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
</style>
