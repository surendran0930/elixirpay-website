<script>
	import { slide } from 'svelte/transition';
	import ProductsHero from '$lib/components/ProductsHero.svelte';

	// FAQ illustration — same asset reused on every FAQ section site-wide.
	const faqIllustration = 'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/faq.svg';

	// "Built Around Every Team" — same data/section as the home page
	// (identical heading, teams, and hover-popup/mobile-accordion
	// mechanic), reused verbatim per explicit request.
	const teamIconBase =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%207%20-%20Built%20Around%20Every%20Team/';
	const teams = [
		{
			key: 'developers',
			label: 'Developers',
			labelColor: 'text-blue-600',
			icon: teamIconBase + 'Developers.svg',
			heading: 'Write Code. Not Workarounds.',
			links: ['APIs & SDKs', 'Sandbox', 'Webhooks', 'Documentation']
		},
		{
			key: 'finance',
			label: 'Finance',
			labelColor: 'text-blue-600',
			icon: teamIconBase + 'Finance.svg',
			heading: 'Know Where Every Rupee Goes.',
			links: ['Settlements', 'Reconciliation', 'Reports', 'Refunds']
		},
		{
			key: 'operations',
			label: 'Operations',
			labelColor: 'text-purple-600',
			icon: teamIconBase + 'Operations.svg',
			heading: 'See Every Payment As It Happens.',
			links: ['Collections', 'Activity Logs', 'Alerts', 'Live Transactions']
		},
		{
			key: 'customer-support',
			label: 'Customer Support',
			labelColor: 'text-orange-600',
			icon: teamIconBase + 'Customer%20Support.svg',
			heading: 'Answers Before Customers Ask.',
			links: ['Payment Status', 'Disputes', 'Refund Track', 'Cust.Timeline']
		},
		{
			key: 'sales',
			label: 'Sales',
			labelColor: 'text-pink-600',
			icon: teamIconBase + 'Sales.svg',
			heading: 'Close Deals. Collect Faster.',
			links: ['Invoices', 'Payment Links', 'Collections', 'Customer Payments']
		},
		{
			key: 'founders',
			label: 'Founders',
			labelColor: 'text-indigo-600',
			icon: teamIconBase + 'Founders.svg',
			heading: 'Watch Growth. Not Spreadsheets.',
			links: ['Revenue', 'Growth Trends', 'Analytics', 'Business Overview']
		}
	];

	// "Product FAQs" — same accordion mechanic as the home page's FAQ
	// section, but its own question set (per the reference) and no
	// stats strip / CTA button below (the reference doesn't show either
	// here, unlike the home page's fuller version).
	const faqs = [
		{
			question: 'Can I use only the products I need?',
			answer:
				'Absolutely. ElixirPay is modular by design, allowing you to choose the products that fit your business today. As your needs evolve, you can add more products without changing your existing integration.'
		},
		{
			question: 'Can I manage payments, payouts, and reconciliation from one dashboard?',
			answer:
				'Yes. Every product you use reports into the same dashboard, so collections, payouts, and reconciliation are always visible in one place instead of across separate tools.'
		},
		{
			question: 'Which payment methods does ElixirPay support?',
			answer:
				'ElixirPay supports UPI, credit and debit cards, net banking, wallets, and other popular payment methods, giving your customers multiple ways to pay.'
		},
		{
			question: 'Is ElixirPay suitable for businesses of all sizes?',
			answer:
				"Yes. Whether you're launching your first product or managing enterprise-scale payment operations, ElixirPay is designed to support businesses at every stage of growth."
		},
		{
			question: 'How easy is it to integrate ElixirPay?',
			answer:
				'With developer-friendly APIs, SDKs, documentation, and a sandbox environment, your team can build, test, and launch with confidence.'
		},
		{
			question: 'Can I automate recurring payments and payouts?',
			answer:
				'Yes. Subscriptions and payouts can both run on automated schedules, reducing the manual effort needed to keep recurring billing and vendor payments on time.'
		}
	];
	let openFaqIndex = $state(0);

	// Final CTA — same assets/animation as the home page's closing section,
	// just its own heading/subtext/button per the reference.
	const finalCtaBg =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%2010%20-%20sales/bg.png';
	const finalCtaCoin =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%2010%20-%20sales/coin.png';

	// Same asset base + category/item structure as the home page's "One
	// Platform" section (see +page.svelte there) — reused per explicit
	// request ("create like what we have in home page third section, it's
	// similar to that"). Only "Accept Payments → Payment Gateway" has real
	// highlights (from the reference screenshot); every other item's
	// highlights are placeholder copy in the same voice, written so the tab
	// UI has something to switch to — swap in real copy once available.
	const solutionsIconBase =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%203%20-%20One%20Platform/Menu%20icons/';
	const solutionsIcons = [
		solutionsIconBase + 'icon%201.png',
		solutionsIconBase + 'Icon2.png',
		solutionsIconBase + 'icon%203.png',
		solutionsIconBase + 'icon%204.png'
	];

	// Dedicated Products-page illustration set (one shared folder, "image
	// N.svg" numbered 1-10 across all four categories in order) — replaces
	// the reused home-page "One Platform" illustrations above.
	const productIllustrationBase =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Product%20Page/products/';

	const solutionCategories = [
		{
			icon: solutionsIcons[0],
			label: 'Accept Payments',
			items: [
				{
					label: 'Payment Gateway',
					heading: 'Accept Every Payment With Confidence',
					description:
						'Support UPI, Cards, Net Banking, Wallets, and more through one reliable payment gateway designed for speed, security, and scale.',
					illustration: productIllustrationBase + 'image%201.svg',
					highlights: [
						'Multiple Payment Methods',
						'Smart Payment Routing',
						'Real-Time Payment Status',
						'Enterprise-Grade Security'
					]
				},
				{
					label: 'Hosted Checkout',
					heading: 'Launch Checkout in Minutes',
					description:
						'Deliver a secure, mobile-friendly checkout experience without building everything from scratch. Customize the experience while we handle the payment flow.',
					cta: 'Explore Hosted Checkout',
					illustration: productIllustrationBase + 'image%202.svg',
					highlights: [
						'Responsive Checkout',
						'Secure Payment Experience',
						'Easy Integration',
						'Brand Customization'
					]
				},
				{
					label: 'Payment Links',
					heading: 'Collect Payments Anywhere',
					description:
						"Create and share payment links instantly through email, SMS, or messaging apps—perfect for businesses that don't need a full website or app.",
					cta: 'Explore Payment Links',
					illustration: productIllustrationBase + 'image%203.svg',
					highlights: [
						'Instant Link Creation',
						'Share Anywhere',
						'Payment Tracking',
						'Faster Collections'
					]
				},
				{
					label: 'QR Payments',
					heading: 'Accept Payments With a Simple Scan',
					description:
						"Create and share payment links instantly through email, SMS, or messaging apps—perfect for businesses that don't need a full website or app.",
					cta: 'Explore QR Payments',
					illustration: productIllustrationBase + 'image%204.svg',
					highlights: [
						'Dynamic & Static QR',
						'Instant Confirmation',
						'UPI Compatible',
						'Easy Deployment'
					]
				},
				{
					label: 'Invoices',
					heading: 'Create, Send, and Get Paid Faster',
					description:
						'Generate professional invoices with integrated payment options, making it easier for customers to pay on time.',
					cta: 'Explore Invoices',
					illustration: productIllustrationBase + 'image%205.svg',
					highlights: [
						'Digital Invoices',
						'Payment Tracking',
						'Due Date Management',
						'Faster Collections'
					]
				},
				{
					label: 'Subscriptions',
					heading: 'Recurring Payments Made Simple',
					description:
						'Automate recurring billing with flexible subscription plans designed for SaaS, memberships, and subscription-based businesses.',
					cta: 'Explore Subscriptions',
					illustration: productIllustrationBase + 'image%206.svg',
					highlights: [
						'Automated Billing',
						'Flexible Plans',
						'Renewal Management',
						'Payment Notifications'
					]
				}
			]
		},
		{
			icon: solutionsIcons[1],
			label: 'Move Money',
			items: [
				{
					label: 'Payouts',
					heading: 'Send Money Instantly',
					description:
						'Pay vendors, employees, partners, and customers through automated payout workflows that reduce manual effort and improve operational efficiency.',
					cta: 'Explore Payouts',
					illustration: productIllustrationBase + 'image%207.svg',
					highlights: [
						'Bulk Payouts',
						'Instant Transfers',
						'Automated Workflows',
						'Status Tracking'
					]
				},
				{
					label: 'Virtual Account',
					heading: 'Identify Every Incoming Payment',
					description:
						'Assign unique virtual accounts to customers, partners, or businesses for faster collections and effortless payment identification.',
					cta: 'Explore Virtual Account',
					illustration: productIllustrationBase + 'image%208.svg',
					highlights: [
						'Unique Account Numbers',
						'Automated Mapping',
						'Faster Reconciliation',
						'Collection Management'
					]
				}
			]
		},
		{
			icon: solutionsIcons[2],
			label: 'Manage Finance',
			items: [
				{
					label: 'Autonomous Reconciliation',
					heading: 'Match Every Transaction Automatically',
					description:
						'Verify collections, settlements, refunds, and bank records through intelligent reconciliation workflows that reduce manual effort and improve financial accuracy.',
					cta: 'Explore Reconciliation',
					illustration: productIllustrationBase + 'image%209.svg',
					highlights: [
						'Two-Way Matching',
						'Three-Way Matching',
						'Multi-Way Reconciliation',
						'Exception Management'
					]
				}
			]
		},
		{
			icon: solutionsIcons[3],
			label: 'Enterprise Solutions',
			items: [
				{
					label: 'White Label Solutions',
					heading: 'Your Brand. Our Infrastructure.',
					description:
						"Launch your own payment platform with a fully branded experience while leveraging ElixirPay's secure and scalable infrastructure.",
					cta: 'Explore White Label Solutions',
					illustration: productIllustrationBase + 'image%2010.svg',
					highlights: [
						'Complete Brand Control',
						'API Integration',
						'Scalable Infrastructure',
						'Enterprise Support'
					]
				}
			]
		}
	];

	let activeCategoryIndex = $state(0);
	let activeItemIndex = $state(0);
	let activeCategory = $derived(solutionCategories[activeCategoryIndex]);
	let activeItem = $derived(activeCategory.items[activeItemIndex]);

	/** @param {number} i */
	function selectCategory(i) {
		activeCategoryIndex = i;
		activeItemIndex = 0;
	}
</script>

<svelte:head>
	<title>Products — ElixirPay</title>
</svelte:head>

<ProductsHero />

<!-- "Collect Payments Without Limits" — same interactive category/item
     pattern as the home page's "One Platform" section (top-level category
     switches the sub-item list + content panel), restyled to match this
     page's own reference: pill category buttons instead of a 4-col grid,
     one underlined sub-tab row instead of a vertical sidebar, and an
     orange illustration panel with a "Highlights" list instead of the
     home page's floating illustration + single CTA. -->
<section class="bg-gray-100 pb-[200px] pt-[200px]">
	<div class="container-page text-center">
		<h2 class="mx-auto max-w-2xl text-web-32 font-bold text-gray-900 md:text-web-40">
			Collect Payments Without Limits
		</h2>
		<p class="mx-auto mt-5 max-w-2xl text-para-18 text-gray-500">
			Give every customer a fast, secure, and seamless way to pay. Whether you're selling online,
			billing clients, or collecting subscriptions, ElixirPay provides the tools to simplify
			every payment journey.
		</p>

		<div class="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
			{#each solutionCategories as category, i}
				<button
					class="rounded-full px-6 py-3 text-para-16 font-medium transition-colors {i ===
					activeCategoryIndex
						? 'bg-gray-900 text-white'
						: 'border border-gray-300 text-gray-600 hover:bg-gray-200'}"
					onclick={() => selectCategory(i)}
				>
					{category.label}
				</button>
			{/each}
		</div>
	</div>

	<!-- px-[120px] here (not container-page's own clamp()-based padding,
	     which caps lower) is the exact gap this box's own edge should sit
	     from the viewport edge — same technique as the Contact page's
	     bordered container. -->
	<div class="mx-auto mt-12 max-w-[1920px] px-4 md:px-[120px]">
		<div class="border border-gray-300 bg-gray-50">
			<!-- Sub-item tabs — one row, active tab underlined, matching the
			     reference exactly (no vertical sidebar here, unlike the home
			     page version). -->
			<div class="flex gap-8 overflow-x-auto border-b border-gray-300 px-8">
				{#each activeCategory.items as item, i}
					<button
						class="shrink-0 whitespace-nowrap border-b-2 py-5 text-para-18 font-semibold transition-colors {i ===
						activeItemIndex
							? 'border-gray-900 text-gray-900'
							: 'border-transparent text-gray-400 hover:text-gray-600'}"
						onclick={() => (activeItemIndex = i)}
					>
						{item.label}
					</button>
				{/each}
			</div>

			<div class="grid gap-10 p-8 md:grid-cols-2 md:gap-16 md:p-16">
				<div class="text-left">
					<h3 class="text-web-28 font-bold text-gray-900">{activeItem.heading}</h3>
					<p class="mt-5 text-para-18 text-gray-600">{activeItem.description}</p>

					<div class="mt-8 border-t border-gray-200 pt-8">
						<p class="text-web-20 font-bold text-gray-900">Highlights</p>
						<ul class="mt-4 space-y-3">
							{#each activeItem.highlights as highlight}
								<li class="flex items-center gap-2 text-para-16 text-gray-500">
									<span aria-hidden="true">→</span>
									{highlight}
								</li>
							{/each}
						</ul>
					</div>
				</div>

				<!-- Each "image N.svg" already bakes in its own full orange
				     background — no wrapper background/padding needed (an
				     earlier version added both, which showed as a mismatched
				     color seam around the image instead of one clean panel). -->
				<div class="aspect-square overflow-hidden md:aspect-auto">
					<img src={activeItem.illustration} alt="" class="block h-full w-full object-cover" />
				</div>
			</div>
		</div>
	</div>
</section>

<!-- "Built Around Every Team" — same section as the home page, reused
     verbatim (heading, teams, hover-popup grid on desktop, plain stacked
     list on mobile/tablet). -->
<section class="bg-white py-[160px]">
	<div class="container-page text-center">
		<h2 class="mx-auto max-w-3xl text-web-32 font-semibold text-gray-800 sm:text-web-40 md:text-web-48">
			Built Around Every Team
		</h2>
		<p class="mx-auto mt-6 max-w-4xl text-para-24 text-gray-500">
			One platform. Different priorities.<br />
			Every team gets the visibility<br />
			and control they need without<br />
			switching between multiple tools.
		</p>
	</div>

	<div class="mx-4 mt-20 sm:mx-8 lg:hidden">
		{#each teams as team, i (team.key)}
			<div class="border border-gray-200 p-8 {i % 2 === 1 ? 'bg-gray-50' : 'bg-white'}">
				<img src={team.icon} alt="" class="h-10 w-10" />
				<p class="mt-6 text-para-14 font-mono font-medium uppercase tracking-widest {team.labelColor}">
					{team.label}
				</p>
				<p class="mt-2 text-web-20 font-bold text-gray-900">{team.heading}</p>
				<div class="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-gray-300 pt-4">
					{#each team.links as link}
						<span class="flex items-center gap-2 text-para-14 text-gray-700">
							<span
								class="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-gray-300 text-gray-600"
							>
								›
							</span>
							{link}
						</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>

	<div class="mx-4 mt-20 hidden border-l border-t border-gray-200 sm:mx-8 lg:mx-[200px] lg:block">
		<div class="grid lg:grid-cols-3">
			{#each teams as team, i (team.key)}
				<div
					class="group relative h-[320px] border-b border-r border-gray-200 p-8 transition-colors duration-500 ease-in-out hover:bg-blue-600 {i %
					2 ===
					1
						? 'bg-gray-50'
						: 'bg-white'}"
				>
					<div
						class="flex h-full flex-col justify-between transition-opacity duration-500 ease-in-out group-hover:opacity-0"
					>
						<img src={team.icon} alt="" class="h-10 w-10" />
						<a href="/products" class="flex items-center gap-2 text-web-24 font-semibold text-gray-900">
							{team.label}
							<span aria-hidden="true">↗</span>
						</a>
					</div>

					<div
						class="pointer-events-none absolute bottom-16 left-4 right-[-3rem] z-20 h-[320px] origin-bottom scale-0 bg-gray-100 p-8 shadow-2xl transition-transform duration-500 ease-in-out group-hover:pointer-events-auto group-hover:scale-100"
					>
						<div class="flex h-full flex-col justify-between">
							<img src={team.icon} alt="" class="h-10 w-10" />
							<div>
								<p class="text-para-14 font-mono font-medium uppercase tracking-widest {team.labelColor}">
									{team.label}
								</p>
								<p class="mt-2 text-web-20 font-bold text-gray-900">{team.heading}</p>
							</div>
							<div class="grid grid-cols-2 gap-x-6 gap-y-3 border-t border-gray-300 pt-4">
								{#each team.links as link}
									<span class="flex items-center gap-2 text-para-14 text-gray-700">
										<span
											class="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-gray-300 text-gray-600"
										>
											›
										</span>
										{link}
									</span>
								{/each}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- "Product FAQs" — same accordion mechanic as the home page's FAQ
     section, its own question set, no stats strip/CTA button below
     (reference doesn't show either here). -->
<section class="bg-white py-[160px]">
	<div class="mx-4 grid grid-cols-1 gap-16 lg:mx-[120px] lg:grid-cols-[1fr_800px] lg:items-stretch lg:gap-12">
		<div class="flex flex-col">
			<h2 class="text-web-32 font-semibold text-gray-900 sm:text-web-40 md:text-web-48">Product FAQs</h2>
			<p class="mt-6 max-w-lg text-para-20 text-gray-500">
				Choosing a payment platform is an important decision. Here are answers to the questions
				businesses ask before getting started with ElixirPay.
			</p>
			<img src={faqIllustration} alt="" class="mt-auto hidden h-auto lg:block lg:w-96" />
		</div>

		<div class="rounded-2xl border border-gray-200">
			{#each faqs as faq, i}
				<button
					class="flex w-full items-start justify-between gap-6 border-b border-gray-100 p-8 text-left last:border-b-0"
					onclick={() => (openFaqIndex = openFaqIndex === i ? -1 : i)}
				>
					<div>
						<span class="block text-web-20 font-medium text-gray-900">{faq.question}</span>
						{#if openFaqIndex === i}
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
							class="absolute h-3 w-[2px] rounded-full bg-gray-600 transition-transform duration-300 {openFaqIndex ===
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
