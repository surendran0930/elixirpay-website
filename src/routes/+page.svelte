<script>
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import Hero from '$lib/components/Hero.svelte';

	const assetBase =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%202%20-%20About%20and%20social%20proffs/';
	const sealLogo = assetBase + '3d%20elixirpay.png';
	const trustLogos = [1, 2, 3, 4, 5, 6].map((n) => `${assetBase}LOGO${n}.png`);

	// Menu-icon assets for the Solutions tabs, replacing the placeholder
	// emoji — order matches solutionCategories below (icon 1 → Accept
	// Payments, ... icon 4 → Enterprise Solutions), per user-provided URLs.
	const solutionsIconBase =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%203%20-%20One%20Platform/Menu%20icons/';
	const solutionsIcons = [
		solutionsIconBase + 'icon%201.png',
		solutionsIconBase + 'Icon2.png',
		solutionsIconBase + 'icon%203.png',
		solutionsIconBase + 'icon%204.png'
	];

	// Real per-item body illustrations for every category.
	const acceptPaymentsIllustrationBase =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%203%20-%20One%20Platform/body%20illustraions/Accept%20Payments/';
	const moveMoneyIllustrationBase =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%203%20-%20One%20Platform/body%20illustraions/Move%20Money/';
	const manageFinanceIllustrationBase =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%203%20-%20One%20Platform/body%20illustraions/Manage%20Finance/';
	const enterpriseSolutionsIllustrationBase =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%203%20-%20One%20Platform/body%20illustraions/Enterprise%20Solutions/';

	// Solutions tab data — "Accept Payments" items all have real illustrations;
	// every other category/item's heading+description+cta is placeholder copy
	// (written in the same voice) so the tab UI has something to switch to.
	// Swap in real copy per item once available — don't mistake these for
	// finished content.
	const solutionCategories = [
		{
			icon: solutionsIcons[0],
			label: 'Accept Payments',
			items: [
				{
					label: 'Payment Gateway',
					heading: 'Explore Payment Gateway',
					description:
						'Accept payments, automate payouts, and manage your entire payment ecosystem with a secure platform designed to help businesses grow faster.',
					illustration: acceptPaymentsIllustrationBase + '1.png'
				},
				{
					label: 'Hosted Checkout',
					heading: 'Checkout That Converts Better',
					description:
						'Deliver a secure, mobile friendly checkout experience that helps customers complete payments with confidence and fewer drop offs.',
					cta: 'Explore Hosted Checkout',
					illustration: acceptPaymentsIllustrationBase + '2.png'
				},
				{
					label: 'Payment Links',
					heading: 'Send Money At Scale',
					description:
						'Create and share payment links in seconds through email, SMS, or messaging apps without building a website or mobile application.',
					cta: 'Explore Payment Links',
					illustration: acceptPaymentsIllustrationBase + '3.png'
				},
				{
					label: 'QR Payments',
					heading: 'Scan. Pay. Done.',
					description:
						'Accept instant payments with dynamic and static QR codes that work across leading UPI applications and payment platforms.',
					cta: 'Explore QR Payments',
					illustration: acceptPaymentsIllustrationBase + '4.png'
				},
				{
					label: 'Invoices',
					heading: 'Invoices That Get Paid',
					description:
						'Create professional invoices, share them instantly, and help customers pay online without unnecessary follow ups.',
					cta: 'Explore Invoices',
					illustration: acceptPaymentsIllustrationBase + '5.png'
				},
				{
					label: 'Subscriptions',
					heading: 'Recurring Payments. Simplified.',
					description:
						'Automate recurring billing for memberships, SaaS products, and subscription services while reducing manual effort.',
					cta: 'Explore Subscriptions',
					illustration: acceptPaymentsIllustrationBase + '6.png'
				}
			]
		},
		{
			icon: solutionsIcons[1],
			label: 'Move Money',
			items: [
				{
					label: 'Payouts',
					heading: 'Send Money At Scale',
					description:
						'Automate payouts to vendors, partners, employees, and customers with complete visibility over every transfer.',
					cta: 'Explore Payouts',
					illustration: moveMoneyIllustrationBase + '7.png'
				},
				{
					label: 'Virtual Account',
					heading: 'Know Every Incoming Payment',
					description:
						'Assign unique virtual accounts to customers and automatically identify incoming payments without manual reconciliation.',
					cta: 'Explore Virtual Account',
					illustration: moveMoneyIllustrationBase + '8.png'
				}
			]
		},
		{
			icon: solutionsIcons[2],
			label: 'Manage Finance',
			items: [
				{
					label: 'Autonomous Reconciliation',
					heading: 'Every Payment Accounted For',
					description:
						'Automatically match transactions, settlements, and reports so your finance team spends less time on manual verification.',
					cta: 'Explore Reconciliation',
					illustration: manageFinanceIllustrationBase + '9.png'
				}
			]
		},
		{
			icon: solutionsIcons[3],
			label: 'Enterprise Solutions',
			items: [
				{
					label: 'White Label Solutions',
					heading: 'Launch Under Your Brand',
					description:
						'Offer a complete payment platform with your own branding while ElixirPay powers the technology behind the scenes.',
					cta: 'Explore White Label Solutions',
					illustration: enterpriseSolutionsIllustrationBase + '10.png'
				}
			]
		}
	];

	let activeCategoryIndex = $state(0);
	let activeItemIndex = $state(0);
	let activeCategory = $derived(solutionCategories[activeCategoryIndex]);
	let activeItem = $derived(activeCategory.items[activeItemIndex]);

	// Mobile-only accordion state (see the `lg:hidden` markup below) — kept
	// separate from activeCategoryIndex/activeItemIndex above rather than
	// shared, since the desktop tab UI auto-advances on a timer while this
	// is purely click-driven, and the two interactions stepping on each
	// other (e.g. the timer silently changing what's expanded on mobile)
	// would be more confusing than a second, independent set of variables.
	let mobileOpenCategory = $state(0);
	let mobileOpenItem = $state(0);

	// Inactive sub-items all share one flat color — an earlier version faded
	// each progressively lighter further down the list (matching the first
	// reference screenshot), but that was explicitly flattened to a single
	// shade per later user request.
	const subItemInactiveColor = 'text-gray-600';

	// Active sub-item's underline doubles as an auto-advance timer: it fills
	// left-to-right over SOLUTIONS_AUTO_ADVANCE_MS (a guessed duration, not
	// from any spec — adjust if it feels too fast/slow), and once full,
	// moves to the next sub-item in the current category, wrapping back to
	// the first after the last. Any manual click (top tab or sub-item)
	// restarts the timer from that selection instead of stacking timers.
	const SOLUTIONS_AUTO_ADVANCE_MS = 5000;
	/** @type {ReturnType<typeof setTimeout>} */
	let autoAdvanceTimer;

	function scheduleAutoAdvance() {
		clearTimeout(autoAdvanceTimer);
		autoAdvanceTimer = setTimeout(() => {
			activeItemIndex = (activeItemIndex + 1) % activeCategory.items.length;
			scheduleAutoAdvance();
		}, SOLUTIONS_AUTO_ADVANCE_MS);
	}

	/** @param {number} i */
	function selectItem(i) {
		activeItemIndex = i;
		scheduleAutoAdvance();
	}

	// Auto-advance only starts once this card actually scrolls into view —
	// previously it started immediately in onMount regardless of scroll
	// position, so by the time a user actually reached this section the
	// timer could already be several items past the first one, or the
	// first item's progress-fill bar could already be mid-animation/reset.
	// Per an explicit "when i come this section then only the first card
	// load will start" request, deferred via the same IntersectionObserver
	// "trigger once" pattern already used for the FAQ stats counter.
	/** @type {HTMLDivElement | undefined} */
	let solutionsCardEl = $state();

	onMount(() => {
		let started = false;
		const observer = new IntersectionObserver(
			(entries) => {
				if (!entries[0].isIntersecting || started) return;
				started = true;
				scheduleAutoAdvance();
			},
			{ threshold: 0.3 }
		);
		if (solutionsCardEl) observer.observe(solutionsCardEl);
		return () => {
			observer.disconnect();
			clearTimeout(autoAdvanceTimer);
		};
	});

	/** @param {number} i */
	function selectCategory(i) {
		activeCategoryIndex = i;
		activeItemIndex = 0;
		scheduleAutoAdvance();
	}

	// Scroll-driven word reveal (per reference screenshot): every word
	// renders faded, then darkens word-by-word as the section scrolls
	// through the viewport. Tied to scroll *position* (not a one-shot
	// trigger like the old removed typewriter) so scrolling back up
	// un-reveals words again — that reversibility is the point of a
	// scroll-scrub reveal vs a play-once animation.
	const heading =
		'ElixirPay is a complete payment infrastructure platform designed to help businesses accept payments, move money, and automate financial operations from a single system.';
	const headingWords = heading.split(' ');

	/** @type {HTMLParagraphElement | undefined} */
	let headingEl = $state();
	let headingProgress = $state(0);
	let revealedWordCount = $derived(Math.round(headingProgress * headingWords.length));

	onMount(() => {
		let ticking = false;
		const updateHeadingProgress = () => {
			if (!headingEl) return;
			const rect = headingEl.getBoundingClientRect();
			const vh = window.innerHeight;
			// Reveal starts as the paragraph's top crosses 85% of the
			// viewport height and completes by the time it reaches 35% —
			// i.e. fully readable well before it hits center screen, so
			// the user never has to scroll it out of view to finish it.
			const start = vh * 0.85;
			const end = vh * 0.35;
			headingProgress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
		};
		const onScroll = () => {
			if (ticking) return;
			ticking = true;
			requestAnimationFrame(() => {
				updateHeadingProgress();
				ticking = false;
			});
		};
		updateHeadingProgress();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
		};
	});

	// Decorative doodle illustrations flanking the heading — real assets,
	// per a reference screenshot showing them at the section's far left/
	// right edges. Desktop/tablet only (`hidden lg:block`); no reference
	// was given for how (or whether) these should appear on mobile, and
	// they're purely decorative, so hiding them below `lg:` avoids
	// guessing at a mobile treatment that wasn't specified.
	const aboutIllustrationBase =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%202%20-%20About%20and%20social%20proffs/';
	const aboutLeftIllustration = aboutIllustrationBase + 'left.png';
	const aboutRightIllustration = aboutIllustrationBase + 'right.png';

	// Services / industries accordion — built the same way Solutions was:
	// only industries with real copy below are confirmed; the rest are
	// placeholder heading/description text in the same voice, purely so the
	// accordion has somewhere to expand to.
	//
	// The 8-industry lineup was changed per explicit user request: the
	// original guess (E-commerce, NGO's, Logistics, Manufacturing,
	// Education, Healthcare, Travel, Retail) is replaced by a confirmed
	// list — E-commerce, Healthcare, Education, Travel, Finance, SaaS,
	// Retail, NGO. Logistics and Manufacturing are gone entirely (not kept
	// alongside the new list); their card images (LOGISTICS.png,
	// MANUFACTURING.png) are now unused. Finance and SaaS are brand new
	// entries with **no card image asset** — see the `image` field being
	// absent on those two, and the template's `{#if industry.image}` guard
	// that falls back to the gradient/label treatment instead of a broken
	// <img> when it's missing.
	const industriesImageBase =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%204%20-%20Payments%20Infrastructure%20/';
	const industries = [
		{
			key: 'ecommerce',
			label: 'E-commerce',
			gradient: 'from-orange-500 to-orange-600',
			heading: 'E-commerce',
			description:
				'Accept payments, automate payouts, and manage your entire payment ecosystem\nwith a secure platform designed to help businesses grow faster.',
			cta: 'Learn More',
			image: industriesImageBase + 'E-commerce.png'
		},
		{
			key: 'healthcare',
			label: 'Healthcare',
			gradient: 'from-red-400 to-orange-400',
			heading: 'Healthcare',
			description:
				'Accept patient payments and insurance settlements securely, with billing your care teams can trust.',
			cta: 'Learn More',
			image: industriesImageBase + 'HEALTHCARE.png'
		},
		{
			key: 'education',
			label: 'Education',
			gradient: 'from-orange-500 to-red-500',
			heading: 'Education',
			description:
				'Simplify tuition and fee collection with flexible, automated payment plans for students and parents.',
			cta: 'Learn More',
			image: industriesImageBase + 'EDUCATION.png'
		},
		{
			key: 'travel',
			label: 'Travel',
			gradient: 'from-blue-500 to-blue-400',
			heading: 'Travel',
			description:
				'Handle multi-currency bookings and refunds smoothly, so travelers can pay however suits them best.',
			cta: 'Learn More',
			image: industriesImageBase + 'TRAVEL.png'
		},
		{
			key: 'logistics',
			label: 'Logistics',
			gradient: 'from-gray-900 to-gray-800',
			heading: 'Logistics',
			description:
				'Move and reconcile money across accounts with the visibility and controls a finance team needs.',
			cta: 'Learn More',
			image: industriesImageBase + 'LOGISTICS.png'
		},
		{
			key: 'logistics-2',
			label: 'Logistics',
			gradient: 'from-blue-600 to-blue-800',
			heading: 'Logistics',
			description:
				'Automate subscription billing and recurring revenue so your product team can focus on shipping.',
			cta: 'Learn More',
			image: industriesImageBase + 'LOGISTICS.png'
		},
		{
			key: 'retail',
			label: 'Retail',
			gradient: 'from-amber-400 to-amber-100',
			heading: 'Retail',
			description:
				'Unify in-store and online payments into one dashboard, so every sales channel reconciles automatically.',
			cta: 'Learn More',
			image: industriesImageBase + 'RETAIL.png'
		},
		{
			key: 'ngo',
			label: 'NGO',
			gradient: 'from-blue-500 to-blue-600',
			heading: 'NGO',
			description:
				'Accept donations securely, improve transparency, and make giving simple for supporters around the world.',
			cta: 'Learn More',
			image: industriesImageBase + 'NGO%E2%80%99S.png'
		}
	];

	let activeIndustryIndex = $state(0);
	let activeIndustry = $derived(industries[activeIndustryIndex]);

	// Clamped, not wrapping — the arrow buttons disable at each end (see
	// template) rather than looping back around, so this must stay a clamp.
	/** @param {number} delta */
	function stepIndustry(delta) {
		activeIndustryIndex = Math.min(Math.max(activeIndustryIndex + delta, 0), industries.length - 1);
	}

	// Growth section's product mockup — real asset, replacing the earlier
	// hand-built HTML/CSS approximation (see clude.md for why that existed).
	const growthMockupImage =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%205%20-%20Built%20for%20Growth./mockup.png';

	// Feature-grid icons — real assets, replacing the inline SVGs I'd
	// hand-authored as placeholders before these were provided.
	const growthIconBase =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%205%20-%20Built%20for%20Growth./';
	const growthFeatures = [
		{
			heading: 'Launch Without Delays',
			description:
				'Integrate quickly with developer-first APIs, practical documentation, and a sandbox built to get you to production faster.',
			icon: growthIconBase + 'iocn1.svg'
		},
		{
			heading: 'Trust Every Transaction',
			description:
				"Security isn't an add-on. Every payment is backed by modern encryption, continuous monitoring, & enterprise-grade protection.",
			icon: growthIconBase + 'icon%202.svg'
		},
		{
			heading: 'Grow Without Limits',
			description:
				"Whether you're processing hundreds or millions of payments, ElixirPay scales with your business without added complexity.",
			icon: growthIconBase + 'icon%203.svg'
		},
		{
			heading: 'Complete Control',
			description:
				'Accept payments, automate payouts, reconcile transactions, and manage financial operations from one connected dashboard.',
			icon: growthIconBase + 'icon%204.svg'
		}
	];

	// Developers section's code-editor mockup — real asset, replacing the
	// earlier hand-built HTML/CSS syntax-highlighted code block (see
	// clude.md for why that existed).
	const developersMockupImage =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%206%20-%20developers/Mockups.png';

	// Build Around section — built the same way Solutions/Services were:
	// only "Finance" (the expanded state in the reference screenshot) has
	// real popup copy; the other 5 teams are placeholder heading/links text
	// in the same voice, purely so the grid has somewhere to expand to.
	// Icons are real assets (see teamIconBase below) — replaced the inline
	// SVG paths that stood in before these were provided. Each asset is
	// already colored on its own (confirmed by downloading and rendering
	// Finance.svg — solid amber icon, no circle/background baked in), so
	// there's no `iconBg` wrapper anymore — the earlier colored-circle
	// badge was our own invention to compensate for not having real icons,
	// not something confirmed by the reference screenshot's actual design.
	const teamIconBase =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%207%20-%20Built%20Around%20Every%20Team/';

	// Decorative oversized background icons (faint, behind the grid) — left
	// icon top-left corner, right icon bottom-right corner, per the
	// reference.
	const teamsBgIconLeft = 'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/elixir%20icon%201.svg';
	const teamsBgIconRight = 'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/elixir%20icon%202.svg';
	// labelColor drives each cell's small uppercase label on the flip
	// grid's front face — restored per "go back to the flip layout" after
	// the carousel redesign had deleted it as dead data. The exact
	// original hex/class values weren't preserved anywhere (clude.md's
	// history notes only described the mechanic, not the literal colors),
	// so these are a reasonable reconstruction, one distinct Tailwind
	// text color per team — flag to the user if these don't match what
	// was actually live before.
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

	// Testimonial — only the Cisco/Anantha Krishnan slot has real quote
	// copy; the other 4 slots are still placeholder name/quote text purely
	// so the 5-avatar carousel has something to page through — don't treat
	// their name/quote as final. All 5 avatar photos are real, but they had
	// to be reassigned after actually downloading and viewing each file:
	// the filename order does NOT match the reference screenshot's visual
	// order (`Image 1.png` is the man/Anantha Krishnan, not `image 3.png`
	// as first assumed from the screenshot's left-to-right layout alone —
	// don't re-guess avatar↔testimonial pairing from a screenshot again,
	// always fetch and look at the actual file). Real mapping:
	// `Image 1.png` = the man (Cisco), `image 2.png` = older woman,
	// `image 3.png` / `image 4.png` = two visually-similar young blonde
	// women (near-identical hair/pose — kept 2 ring-positions apart below
	// so they never land next to each other), `image 5.png` = a younger,
	// short-haired person. No company logo assets exist for the 4
	// placeholder companies, so every slot reuses the one real `logo
	// company.png` (Cisco's) as a shared placeholder mark per explicit
	// request to "maintain the company logo to all 5" — it does NOT mean
	// those 4 fictional companies are actually Cisco, swap in each one's
	// real logo if/when provided.
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
			quoteRest:
				'up to five days now takes just seconds with the MoneySaver Exporter Account.',
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

	// Carousel is a true wrap-around ring, not a clamped stepper (unlike the
	// Services industries arrows) — there are exactly 5 avatars for exactly
	// 5 testimonials, so "the window" is just the whole array reordered
	// around the active index, offset -2..+2, wrapping via modulo.
	let visibleTestimonials = $derived([-2, -1, 0, 1, 2].map((offset) => ({
		offset,
		testimonial: testimonials[(activeTestimonialIndex + offset + testimonials.length) % testimonials.length]
	})));
	let activeTestimonial = $derived(testimonials[activeTestimonialIndex]);

	function prevTestimonial() {
		activeTestimonialIndex =
			(activeTestimonialIndex - 1 + testimonials.length) % testimonials.length;
	}
	function nextTestimonial() {
		activeTestimonialIndex = (activeTestimonialIndex + 1) % testimonials.length;
	}

	// FAQ illustration — same asset reused on every FAQ section site-wide
	// (home, Products, Solutions, Industries), per explicit request.
	const faqIllustration = 'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/faq.svg';

	// FAQ — only the first question has a real answer (matches the
	// reference screenshot, which shows just that one expanded by
	// default). The other 5 are real question copy from the reference,
	// but placeholder answer text, since the screenshot never expands
	// them to show their real answers. Standard accordion behavior: one
	// open at a time, clicking the open one again closes it (-1 = none
	// open).
	const faqs = [
		{
			question: 'Why should I choose ElixirPay over other payment platforms?',
			answer:
				'ElixirPay brings payment collection, payouts, reconciliation, and developer tools together on one platform. Instead of managing multiple systems, businesses can operate through a single payment infrastructure designed to grow with them.'
		},
		{
			question: 'Is ElixirPay suitable for startups as well as large businesses?',
			answer:
				"Yes. Whether you're launching your first product or managing enterprise-scale payment operations, ElixirPay is designed to support businesses at every stage of growth."
		},
		{
			question: 'How quickly can I start accepting payments?',
			answer:
				'Getting started is designed to be simple. Once your account is verified and your integration is complete, you can begin accepting payments through your preferred payment methods.'
		},
		{
			question: 'Can developers integrate ElixirPay easily?',
			answer:
				'Absolutely. With developer-friendly APIs, SDKs, documentation, and a sandbox environment, your team can build, test, and launch with confidence.'
		},
		{
			question: 'What payment methods does ElixirPay support?',
			answer:
				'ElixirPay supports UPI, credit and debit cards, net banking, wallets, and other popular payment methods, giving your customers multiple ways to pay.'
		},
		{
			question: 'Is customer payment data secure?',
			answer:
				'Security is built into every layer of the platform. Modern encryption, secure authentication, and continuous monitoring help protect every transaction.'
		}
	];
	let openFaqIndex = $state(0);

	// `target`/`suffix` split out (rather than one "100+" string) so each
	// stat's numeric part can be counted up independently while its suffix
	// ("+", "×7") stays static — see the rolling count-up animation below.
	// `bg` is explicit per stat (not an i % 2 alternating formula) — the
	// desired pattern is white/gray/gray/white, not a strict alternation,
	// per an explicit per-stat color request.
	const faqStats = [
		{ target: 100, suffix: '+', label: 'APIs keys', bg: 'bg-gray-50' },
		{ target: 12, suffix: '+', label: 'Payment Solutions', bg: 'bg-white' },
		{ target: 256, suffix: '', label: 'bit Encryption', bg: 'bg-gray-50' },
		{ target: 24, suffix: '×7', label: 'Infrastructure Monitoring', bg: 'bg-white' }
	];
	let faqStatCounts = $state(faqStats.map(() => 0));
	/** @type {HTMLDivElement | undefined} */
	let faqStatsEl = $state();

	// Counts up from 0 to each stat's target once the strip scrolls into
	// view (IntersectionObserver, same trigger pattern as the About
	// section's typewriter) rather than looping — a stat that re-rolls
	// every time you scroll past it reads as broken, not delightful.
	onMount(() => {
		let animated = false;
		const observer = new IntersectionObserver(
			(entries) => {
				if (!entries[0].isIntersecting || animated) return;
				animated = true;
				const duration = 2000;
				const start = performance.now();
				/** @param {number} now */
				function tick(now) {
					const progress = Math.min((now - start) / duration, 1);
					// Ease-out (fast start, slow finish) rather than a linear ramp,
					// per explicit "fast to slow rolling effect" request. Power
					// raised 3 → 4 and duration 1200ms → 2000ms (both per a
					// follow-up "make it smooth" request) to draw the slow tail
					// out longer and make each step less abrupt frame-to-frame.
					const eased = 1 - Math.pow(1 - progress, 4);
					faqStatCounts = faqStats.map((stat) => Math.round(stat.target * eased));
					if (progress < 1) requestAnimationFrame(tick);
				}
				requestAnimationFrame(tick);
			},
			{ threshold: 0.2 }
		);
		if (faqStatsEl) observer.observe(faqStatsEl);
		return () => observer.disconnect();
	});

	// Final CTA — bg.png is the section's full blue-glow-to-black gradient
	// backdrop (not a separately-built CSS gradient), same "let the asset
	// carry its own styling" approach used for Growth/Developers' mockups.
	const finalCtaBg =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%2010%20-%20sales/bg.png';
	const finalCtaCoin =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%2010%20-%20sales/coin.png';
</script>

<svelte:head>
	<title>ElixirPay — Payment Infrastructure Built for Growth</title>
</svelte:head>

<!-- Section order per Section 4 / Section 12 spec:
     Hero → About & Social proof → Solutions → Services → Growth →
     Developers → Build Around → Testimonial → FAQ → Final CTA -->

<Hero />

<!-- About & Social proof — fixed exact height per user request (998px);
     top (seal + heading) takes the remaining space via flex-1, bottom
     trust-logo row is a fixed h-[260px] strip that breaks out of
     container-page to span full width (its divider lines are meant to run
     edge-to-edge), unlike the heading above which stays container-width. -->
<section class="relative flex h-[998px] flex-col overflow-hidden bg-white">
	<img
		src={aboutLeftIllustration}
		alt=""
		class="illustration-float pointer-events-none absolute left-0 top-0 h-auto w-24 sm:w-32 lg:w-64"
		style="animation-duration: 2s;"
	/>
	<img
		src={aboutRightIllustration}
		alt=""
		class="illustration-float pointer-events-none absolute right-0 top-0 h-auto w-24 sm:w-32 lg:w-64"
		style="animation-duration: 2s; animation-delay: -1s;"
	/>

	<div class="container-page relative z-10 flex flex-1 flex-col items-center justify-center text-center">
		<img src={sealLogo} alt="" class="h-36 w-auto" />
		<!-- Word-by-word scroll reveal (see headingProgress in script) — the
		     screenshot's effect on a light background: unrevealed words sit
		     at a light gray and darken to gray-900 as their index falls
		     under revealedWordCount. Trailing space lives *inside* each
		     span so wrapping between words stays natural. -->
		<p
			bind:this={headingEl}
			class="mx-auto mt-8 max-w-4xl text-web-24 font-semibold leading-snug sm:text-web-32 md:text-web-40"
		>
			{#each headingWords as word, i}<span
					class="transition-colors duration-300 {i < revealedWordCount
						? 'text-gray-900'
						: 'text-gray-300'}">{word}{' '}</span
				>{/each}
		</p>
	</div>

	<!-- Infinite leftward-scrolling marquee, not a static grid: the logo list
	     is rendered twice back-to-back, and the track animates to exactly
	     -50% of its own width, so the second copy lines up perfectly with
	     where the first started — that's what makes the loop seamless
	     rather than snapping. -->
	<div class="h-[260px] overflow-hidden border-t border-gray-200">
		<div class="marquee-track flex h-full w-max">
			{#each [...trustLogos, ...trustLogos] as src}
				<div class="flex h-full w-56 shrink-0 items-center justify-center border-r border-gray-200 px-6">
					<img {src} alt="" class="h-20 w-auto max-w-full object-contain" />
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.marquee-track {
		animation: marquee 24s linear infinite;
	}
	@keyframes marquee {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}

	.solutions-progress-fill {
		width: 0%;
		animation-name: solutions-progress;
		animation-timing-function: linear;
		animation-fill-mode: forwards;
	}
	@keyframes solutions-progress {
		from {
			width: 0%;
		}
		to {
			width: 100%;
		}
	}

	/* rotateY, not rotateX — "horizontal rotation" for a coin reads as
	   spinning around its vertical axis (left edge to right edge, like a
	   coin flipping face-to-face), not tumbling top-over-bottom. */
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

	.industry-panel {
		transition: flex-grow 500ms ease-in-out;
	}

	.industry-panel-mobile {
		transition: height 500ms ease-in-out;
	}

	/* Growth section feature icons — continuous "gif-style" per-icon loops,
	   each shape matching what the icon depicts (arrow nudges toward the
	   corner, heart pulses, chart bobs upward, toggle slides side to side)
	   rather than one generic animation reused four times. */
	.icon-anim-launch {
		animation: icon-launch 2.4s ease-in-out infinite;
	}
	@keyframes icon-launch {
		0%,
		100% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(3px, 3px);
		}
	}

	.icon-anim-trust {
		animation: icon-trust 2.2s ease-in-out infinite;
	}
	@keyframes icon-trust {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.15);
		}
	}

	.icon-anim-grow {
		animation: icon-grow 2.4s ease-in-out infinite;
	}
	@keyframes icon-grow {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-4px);
		}
	}

	.icon-anim-control {
		animation: icon-control 2.6s ease-in-out infinite;
	}
	@keyframes icon-control {
		0%,
		100% {
			transform: translateX(0);
		}
		25% {
			transform: translateX(3px);
		}
		75% {
			transform: translateX(-3px);
		}
	}
</style>

<!-- Solutions — fixed exact height per user request (1580px). Interactive:
     4 top-level categories, each with its own sub-item list + content panel,
     built from `solutionCategories` above. Only "Accept Payments → Payment
     Gateway" is real content from a screenshot; everything else is
     placeholder copy in the same voice, see the comment on that const. -->
<section class="flex flex-col bg-gray-50 py-[160px]">
	<div class="container-page text-center">
		<h2
			class="mx-auto max-w-2xl text-web-32 font-semibold text-gray-800 sm:text-web-40 md:text-web-48"
		>
			One Platform. <br /> Every Payment Workflow.
		</h2>
		<p class="mx-auto mt-5 max-w-lg text-para-24 text-gray-500">
			ElixirPay brings every essential payment<br class="hidden sm:inline" />workflow together in
			one unified platform.
		</p>
	</div>

	<!-- Mobile accordion (below lg:) — the tab/sidebar/illustration layout in
	     the fixed-height card below is desktop-only: it's a horizontal
	     side-by-side design that has no room to stack vertically inside a
	     fixed h-[760px] box, which is exactly what caused the overlapping
	     icons/text on mobile. Rather than force that layout to reflow, this
	     is a completely separate accordion structure for narrow viewports,
	     reusing the same `solutionCategories` data through its own
	     mobile-only state (`mobileOpenCategory`/`mobileOpenItem`, see
	     script). One category open at a time; within the open category, one
	     sub-item is "expanded" (shows description/CTA/illustration) while
	     the rest render as plain collapsed rows — matching the reference
	     screenshot exactly. -->
	<div class="mx-6 mt-16 border border-gray-200 bg-white lg:hidden">
		{#each solutionCategories as category, i}
			<div class="border-b border-gray-100 last:border-b-0">
				<button
					class="flex w-full items-center justify-between gap-3 px-6 py-5 text-left"
					onclick={() => {
						mobileOpenCategory = mobileOpenCategory === i ? -1 : i;
						mobileOpenItem = 0;
					}}
				>
					<span
						class="flex items-center gap-2 font-mono text-para-14 font-semibold uppercase tracking-wide text-gray-900"
					>
						<img src={category.icon} alt="" class="h-4 w-4 object-contain" />
						{category.label}
					</span>
					<span
						class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gray-300 text-gray-500"
					>
						{mobileOpenCategory === i ? '−' : '+'}
					</span>
				</button>

				{#if mobileOpenCategory === i}
					<div class="px-6 pb-6" transition:slide={{ duration: 300 }}>
						<div class="h-0.5 w-full bg-blue-500"></div>

						{#each category.items as item, j}
							{#if j === mobileOpenItem}
								<!-- Heading is its own full-width header row with a
								     bottom divider spanning edge-to-edge — not just a
								     small inline label above the body copy — per an
								     explicit "i need heading should come like this"
								     reference. Splitting the box into a header row +
								     separately-padded body (instead of one uniformly-
								     padded box) is what lets the divider reach the
								     box's full width; a single shared `p-5` on the
								     whole box would leave the divider only as wide as
								     the text column. No blue square marker and no
								     "Explore" prefix — both removed per a follow-up
								     "reduce the heading size, remove the blue patch and
								     explore word"; heading text is now just
								     `{item.label}` at a smaller `text-para-16` (down
								     from `text-web-20`). -->
								<div class="mt-4 border border-gray-200 bg-gray-50">
									<div class="border-b border-gray-200 px-6 py-5">
										<span class="font-mono text-para-16 font-bold uppercase tracking-wide text-gray-900">
											{item.label}
										</span>
									</div>
									<div class="p-6">
										<p class="flex gap-2 text-para-16 text-gray-500">
											<span class="mt-0.5 shrink-0 text-gray-400">✓</span>
											<span>{item.description}</span>
										</p>
										<a
											href="/products"
											class="mt-5 inline-block rounded-lg bg-gray-200 px-5 py-2.5 font-mono text-para-14 font-medium text-gray-900 hover:bg-gray-300"
										>
											{item.cta ?? item.heading}
										</a>
										{#if item.illustration}
											<img
												src={item.illustration}
												alt=""
												class="mx-auto mt-6 h-40 w-40 object-contain"
											/>
										{/if}
									</div>
								</div>
							{:else}
								<button
									class="mt-4 block w-full border-t border-gray-100 pt-4 text-left font-mono text-para-14 uppercase tracking-wide text-gray-500"
									onclick={() => (mobileOpenItem = j)}
								>
									{item.label}
								</button>
							{/if}
						{/each}
					</div>
				{/if}
			</div>
		{/each}
	</div>

	<div
		bind:this={solutionsCardEl}
		class="mx-[120px] mt-16 hidden h-[620px] flex-col overflow-hidden border border-gray-200 bg-white lg:flex"
	>
		<!-- Top-level category tabs — primary/sans font (these are section nav,
		     not the mono-font "buttons" per the site's typography rule). Even
		     grid-cols-4 (all four tabs equal width), per explicit user
		     request. The sidebar below is now `md:w-1/4` (see its own comment)
		     specifically so it matches this first column's width — that's how
		     the earlier sidebar/tab-row divider misalignment got resolved
		     without giving up equal-width tabs: match the sidebar's width to
		     the tabs' width, instead of the other way around. -->
		<div class="grid grid-cols-2 divide-x divide-gray-200 border-b border-gray-200 sm:grid-cols-4">
			{#each solutionCategories as category, i}
				<button
					class="flex items-center justify-center gap-2 px-4 py-6 text-para-24 font-medium transition-colors {i ===
					activeCategoryIndex
						? 'bg-gray-100 text-gray-900'
						: 'text-gray-500 hover:bg-gray-50'}"
					onclick={() => selectCategory(i)}
				>
					<img src={category.icon} alt="" class="h-5 w-5 object-contain" />
					{category.label}
				</button>
			{/each}
		</div>

		<div class="flex flex-1 flex-col md:flex-row">
			<!-- Sub-item nav — mono font + uppercase tracking, matching the
			     reference screenshot; these are real <button> controls, so
			     font-mono here is consistent with the "buttons get mono" rule,
			     not an exception to it. Every item's divider spans the full
			     row width (this went back and forth — a follow-up screenshot
			     briefly suggested the active item's bar should hug the label's
			     text width instead, but a later screenshot clarified that was
			     just an earlier moment of the same full-width progress
			     animation mid-flight, not a different static design — so it's
			     back to full-width for both). Only the active item gets the
			     animated blue fill (see script); inactive items are a plain
			     static gray line. -->
			<!-- md:w-1/4 (not a fixed px width) so this always matches exactly
			     one column of the grid-cols-4 tab row above, at any viewport
			     size — see the tab row's own comment for the history here. -->
			<div class="flex shrink-0 flex-col border-b border-gray-100 px-8 py-10 md:w-1/4 md:border-b-0 md:border-r">
				{#each activeCategory.items as item, i}
					<button
						class="w-full pb-4 text-left transition-colors {i === activeItemIndex
							? 'text-gray-900'
							: `${subItemInactiveColor} hover:text-gray-400`}"
						onclick={() => selectItem(i)}
					>
						<span class="font-mono text-para-14 font-semibold uppercase tracking-wide">
							{item.label}
						</span>
						<div class="relative mt-3 h-0.5 w-full {i === activeItemIndex ? 'bg-blue-200' : 'bg-gray-100'}">
							{#if i === activeItemIndex}
								{#key activeItemIndex}
									<div
										class="solutions-progress-fill absolute inset-y-0 left-0 bg-blue-500"
										style="animation-duration: {SOLUTIONS_AUTO_ADVANCE_MS}ms"
									></div>
								{/key}
							{/if}
						</div>
					</button>
				{/each}
			</div>

			<!-- Content panel -->
			<div class="relative flex flex-1 items-start px-8 py-10 md:px-12">
				<div class="max-w-md">
					<h3 class="text-web-26 font-bold text-gray-900">{activeItem.heading}</h3>
					<p class="mt-4 text-para-18 text-gray-500">{activeItem.description}</p>
					<a
						href="/products"
						class="mt-8 inline-flex items-center gap-1.5 rounded-lg bg-gray-100 px-5 py-2.5 font-mono text-para-16 font-medium text-gray-900 hover:bg-gray-200"
					>
						{activeItem.cta ?? activeItem.heading}
						<span aria-hidden="true">→</span>
					</a>
				</div>

				<!-- Real illustration for every item; the generic placeholder
				     SVG below is now only a defensive fallback. -->
				{#if activeItem.illustration}
					<img
						src={activeItem.illustration}
						alt=""
						class="absolute bottom-8 right-24 illustration-float hidden h-[480px] w-[480px] object-contain lg:block"
					/>
				{:else}
					<svg
						viewBox="0 0 200 200"
						class="absolute bottom-8 right-24 illustration-float hidden h-[480px] w-[480px] text-gray-300 lg:block"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
					>
						<rect x="40" y="30" width="120" height="140" rx="6" />
						<circle cx="100" cy="100" r="26" />
						<path d="M100 74v12M100 114v12M74 100h12M114 100h12" />
					</svg>
				{/if}
			</div>
		</div>
	</div>
</section>

<!-- Services / industries — accordion built from `industries` (see its
     script comment for what's real vs placeholder, and why the expanded
     panel is a CSS approximation rather than a real illustration asset). -->
<section class="bg-white py-[160px]">
	<div class="container-page text-center">
		<h2
			class="mx-auto max-w-2xl text-web-32 font-semibold text-gray-800 sm:text-web-40 md:text-web-48"
		>
			Payments Infrastructure<br />Built for Modern Businesses.
		</h2>
		<p class="mx-auto mt-6 max-w-3xl text-para-24 text-gray-500">
			ElixirPay brings every essential payment workflow<br class="hidden sm:inline" />together in
			one unified platform.
		</p>
	</div>

	<!-- Mobile accordion (below lg:) — same fix as Solutions: the
	     flex-grow horizontal strip in the desktop card below (fixed
	     h-[620px]) has no room to stack all 8 industries vertically at a
	     phone width, which is exactly what squeezed every industry into an
	     illegible vertical sliver on mobile.

	     Every industry is ONE persistent panel that stays in its own list
	     position at all times — nothing reorders or gets filtered in/out
	     of the DOM on click. Only its `height` (64px collapsed → 520px
	     expanded, `.industry-panel-mobile` in <style> transitions it) and
	     its two absolutely-stacked layers' opacity change. This is
	     deliberately the same "persistent element, animate a style/class,
	     never {#if}/{:else}-swap the node" technique as the desktop
	     accordion's own `flex-grow` push animation just below — a
	     {#key}+transition:fade approach was tried first (see git history/
	     clude.md) but that made the active card jump to a separate slot
	     at the top of the list and reshuffle everything else around it;
	     this version keeps each card in place and grows/shrinks it there,
	     which is what actually reads as a "push" like the desktop version,
	     per explicit "same card position" follow-up request. -->
	<div class="mx-6 mt-16 flex flex-col overflow-hidden border border-gray-200 bg-white lg:hidden">
		{#each industries as industry, i}
			<div
				class="industry-panel-mobile relative w-full overflow-hidden border-b border-gray-100 last:border-b-0 {i ===
				activeIndustryIndex
					? 'h-[520px] sm:h-[600px] md:h-[660px]'
					: 'h-16'}"
			>
				<!-- Collapsed bar — always mounted, fades out (not unmounted)
				     when this panel becomes active. -->
				<button
					class="absolute inset-x-0 top-0 flex h-16 w-full items-center bg-gradient-to-r px-6 transition-opacity duration-500 {industry.gradient} {i ===
					activeIndustryIndex
						? 'pointer-events-none opacity-0'
						: 'opacity-100'}"
					onclick={() => (activeIndustryIndex = i)}
				>
					<span class="font-mono text-para-16 font-semibold uppercase tracking-widest text-white">
						{industry.label}
					</span>
				</button>

				<!-- Expanded content — always mounted, fades in when active. -->
				<div
					class="absolute inset-0 transition-opacity duration-500 {i === activeIndustryIndex
						? 'opacity-100'
						: 'pointer-events-none opacity-0'}"
				>
					<div class="relative h-64 w-full overflow-hidden sm:h-80 md:h-96">
						{#if industry.image}
							<img
								src={industry.image}
								alt={industry.heading}
								class="h-full w-full object-cover"
							/>
						{:else}
							<div
								class="flex h-full w-full items-center justify-center bg-gradient-to-b {industry.gradient}"
							>
								<span class="font-mono text-para-16 font-medium tracking-widest text-white/90">
									{industry.label}
								</span>
							</div>
						{/if}
					</div>
					<div class="p-6">
						<h3 class="text-web-20 font-semibold text-blue-900">{industry.heading}</h3>
						<p class="mt-3 whitespace-pre-line text-para-16 text-gray-500">
							{industry.description}
						</p>
						<a
							href="/products"
							class="mt-5 inline-flex items-center rounded-lg bg-gray-100 px-5 py-2.5 font-mono text-para-14 font-medium text-gray-900 hover:bg-gray-200"
						>
							{industry.cta}
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- mx-[120px] (not container-page) so this has a fixed 120px gutter on
	     both sides, matching the Solutions section's tab card convention —
	     and the whole thing (accordion + heading/description/CTA/arrows
	     below) shares ONE outer border, per the reference screenshot, rather
	     than the accordion and the content below being separately bordered
	     container-page blocks. Desktop/tablet only (`hidden lg:block`) —
	     see the mobile accordion right above for narrow viewports. -->
	<div class="mx-[120px] mt-16 hidden overflow-hidden border border-gray-200 bg-white lg:block">
		<div class="flex h-[620px] gap-3 p-4">
			<!-- Each industry is ONE persistent <button> (not swapped between a
			     <div> and a <button> via {#if}/{:else} like before) — that swap
			     was destroying and recreating the DOM node on every click, so
			     there was nothing for a CSS transition to animate between: the
			     old element just vanished and a new one appeared at full size
			     instantly. Keeping the same element and only changing its
			     `.industry-panel` inline flex-grow (see <style> below for the
			     transition) is what makes clicking a collapsed strip smoothly
			     "push" it wide and shrink the previously-active one, instead of
			     snapping. Image and collapsed label both stay in the DOM at all
			     times and cross-fade via opacity, rather than being
			     mounted/unmounted, for the same reason. -->
			{#each industries as industry, i}
				<button
					class="industry-panel relative overflow-hidden border border-gray-200"
					style="flex-grow: {i === activeIndustryIndex ? 10 : 1}; flex-basis: 0%;"
					onclick={() => (activeIndustryIndex = i)}
				>
					{#if industry.image}
						<img
							src={industry.image}
							alt={industry.heading}
							class="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 {i ===
							activeIndustryIndex
								? 'opacity-100'
								: 'pointer-events-none opacity-0'}"
						/>
					{/if}
					<!-- No card image exists yet for industries like Finance/SaaS —
					     this overlay is their only visual in every state (never
					     fades to 0) rather than leaving a blank/broken area where
					     the image would otherwise be. -->
					<div
						class="absolute inset-0 flex items-center justify-center bg-gradient-to-b {industry.gradient} transition-opacity duration-500 hover:brightness-105 {industry.image &&
						i === activeIndustryIndex
							? 'pointer-events-none opacity-0'
							: 'opacity-100'}"
					>
						<span
							class="[writing-mode:vertical-rl] rotate-180 font-mono text-para-16 font-medium tracking-widest text-white/90"
						>
							{industry.label}
						</span>
					</div>
				</button>
			{/each}
		</div>

		<div class="flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-end">
			<div>
				<h3 class="text-web-24 font-semibold text-blue-900">{activeIndustry.heading}</h3>
				<p class="mt-3 max-w-3xl whitespace-pre-line text-para-18 text-gray-500">{activeIndustry.description}</p>
				<a
					href="/products"
					class="mt-6 inline-flex items-center rounded-lg bg-gray-100 px-5 py-2.5 font-mono text-para-14 font-medium text-gray-900 hover:bg-gray-200"
				>
					{activeIndustry.cta}
				</a>
			</div>
			<div class="flex shrink-0 gap-3">
				<button
					aria-label="Previous industry"
					disabled={activeIndustryIndex === 0}
					onclick={() => stepIndustry(-1)}
					class="flex h-24 w-24 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-4xl text-gray-400 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-gray-50"
				>
					‹
				</button>
				<button
					aria-label="Next industry"
					disabled={activeIndustryIndex === industries.length - 1}
					onclick={() => stepIndustry(1)}
					class="flex h-24 w-24 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-4xl text-gray-900 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-gray-50"
				>
					›
				</button>
			</div>
		</div>
	</div>
</section>

<!-- Growth — built from a reference screenshot. -->
<section class="bg-[#F8F8F8] py-[160px]">
	<div class="container-page text-center">
		<h2
			class="text-web-32 font-semibold text-gray-800 sm:text-web-40 md:text-web-48"
		>
			More Than Payments. Built for Growth.
		</h2>
		<p class="mx-auto mt-6 max-w-4xl text-para-24 text-gray-500">
			Every feature, API, and workflow is designed to remove operational friction, so<br
				class="hidden sm:inline"
			/>your business can spend less time managing payments and more time growing.
		</p>
	</div>

	<div class="container-page relative mt-16">
		<div class="mx-auto max-w-5xl overflow-hidden rounded-2xl border-t border-gray-200">
			<!-- No crop/scale here — see clude.md: a uniform scale-up (tried
			     briefly) cropped real UI content (the "Onboarding" heading,
			     logo) because the source PNG's light-gray margin isn't even on
			     all sides, so a symmetric zoom can't remove it without cutting
			     into the image on whichever side has less margin. -->
			<img src={growthMockupImage} alt="ElixirPay onboarding dashboard" class="block w-full" />
		</div>

		<!-- Floating CTA overlaid on the mockup, matching the reference -->
		<a
			href="/products"
			class="absolute bottom-6 left-1/2 inline-flex -translate-x-1/2 items-center rounded-lg bg-gray-900 px-6 py-3 font-mono text-para-14 font-medium text-white hover:bg-gray-800"
		>
			View Details
		</a>
	</div>

	<div class="mx-6 mt-20 grid grid-cols-1 gap-10 text-left sm:grid-cols-2 lg:mx-[120px] lg:grid-cols-4">
		{#each growthFeatures as feature, i}
			<div class="group">
				<div class="flex h-24 w-24 items-center justify-start">
					<!-- Continuous "gif-style" loop lives on this wrapper span
					     (icon-anim-*), separate from the img's own hover
					     transform below — two elements each animating their
					     own `transform` compose cleanly, whereas stacking both
					     a CSS @keyframes loop and a Tailwind hover-transition
					     on the *same* element would have them fight over the
					     same property. -->
					<span
						class="inline-block {['icon-anim-launch', 'icon-anim-trust', 'icon-anim-grow', 'icon-anim-control'][
							i
						]}"
					>
						<img
							src={feature.icon}
							alt=""
							class="h-12 w-12 transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110"
						/>
					</span>
				</div>
				<h3 class="mt-4 text-web-20 font-semibold text-gray-900">{feature.heading}</h3>
				<p class="mt-2 text-para-16 text-gray-500">{feature.description}</p>
			</div>
		{/each}
	</div>
</section>

<!-- Developers — built from a reference screenshot. The reference's
     subheading literally reads "Developer section content: Build
     Payments. Not Complexity. Clean APIs, practical documentation..." —
     that "Developer section content: Build Payments. Not Complexity."
     prefix just repeats the H1 verbatim and reads like a design-file
     placeholder/annotation that leaked into the mockup rather than real
     subhead copy, so it's dropped below. Flag to the user if the literal
     full string was actually intended as the subheading. -->
<section class="bg-[#171717] py-[160px]">
	<div class="container-page text-center">
		<h2 class="mx-auto max-w-3xl text-web-32 font-semibold text-white sm:text-web-40 md:text-web-48">
			Build Payments. Not Complexity.
		</h2>
		<p class="mx-auto mt-6 max-w-3xl text-para-24 text-white/60">
			Clean APIs, practical documentation, and production-ready tools designed to help your team
			spend less time integrating and more time building.
		</p>
	</div>

	<div class="mx-6 mt-20 grid grid-cols-1 gap-16 lg:mx-[120px] lg:grid-cols-[280px_1fr_280px] lg:items-center lg:gap-8">
		<!-- Left features -->
		<div class="order-2 flex flex-col gap-12 text-left lg:order-1">
			<div>
				<svg viewBox="0 0 24 24" class="h-8 w-8 text-blue-400" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
					<path d="M13 2L4 14H12L11 22L20 10H12L13 2Z" />
				</svg>
				<h3 class="mt-4 text-web-20 font-semibold text-white">Build Faster</h3>
				<p class="mt-2 text-para-16 text-white/60">
					Designed for developers who would rather build products than payment integrations.
				</p>
			</div>
			<div>
				<svg viewBox="0 0 24 24" class="h-8 w-8 text-blue-400" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
					<path d="M7 4V16M7 16L3 12M7 16L11 12" />
					<path d="M17 20V8M17 8L13 12M17 8L21 12" />
				</svg>
				<h3 class="mt-4 text-web-20 font-semibold text-white">Multiple SDKs</h3>
				<p class="mt-2 text-para-16 text-white/60">
					Use familiar SDKs to move from idea to integration without starting from scratch.
				</p>
			</div>
		</div>

		<!-- Code editor mockup — now a real image (see developersMockupImage
		     above), replacing the hand-built syntax-highlighted HTML/CSS
		     version that stood in before this asset was provided. -->
		<div class="relative order-1 lg:order-2">
			<div class="relative overflow-hidden">
				<img src={developersMockupImage} alt="ElixirPay developer console" class="block w-full" />
				<!-- Fades the bottom edge into the section's own background
				     instead of a hard border line — the code content itself
				     already fades out near the bottom of the source image, so a
				     visible border edge there looked wrong; this blends it away. -->
				<div
					class="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#171717] to-transparent"
				></div>
			</div>

			<!-- Floating CTA overlaid on the mockup, same pattern as Growth's
			     "View Details" button. -->
			<a
				href="/developers"
				class="absolute bottom-6 left-1/2 inline-flex -translate-x-1/2 items-center rounded-lg bg-white px-6 py-3 font-mono text-para-14 font-medium text-gray-900 hover:bg-gray-100"
			>
				View Documents
			</a>
		</div>

		<!-- Right features -->
		<div class="order-3 flex flex-col gap-12 text-left">
			<div>
				<svg viewBox="0 0 24 24" class="h-8 w-8 text-blue-400" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
					<rect x="3" y="4" width="18" height="4" rx="1" />
					<path d="M5 8V18C5 19.1 5.9 20 7 20H17C18.1 20 19 19.1 19 18V8" />
					<path d="M10 12H14" />
				</svg>
				<h3 class="mt-4 text-web-20 font-semibold text-white">Sandbox Environment</h3>
				<p class="mt-2 text-para-16 text-white/60">
					Test every payment scenario before your customers ever see it.
				</p>
			</div>
			<div>
				<svg viewBox="0 0 24 24" class="h-8 w-8 text-blue-400" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
					<path d="M2 12C2 12 5.5 6 12 6C18.5 6 22 12 22 12C22 12 18.5 18 12 18C5.5 18 2 12 2 12Z" />
					<circle cx="12" cy="12" r="3" />
				</svg>
				<h3 class="mt-4 text-web-20 font-semibold text-white">24×7 Monitoring</h3>
				<p class="mt-2 text-para-16 text-white/60">
					Stay on top of every transaction with real time visibility into your payment ecosystem.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Build Around — bordered 3x2 grid (spreadsheet-style hairline dividers,
     no rounded card shapes/gaps), each cell showing just an icon +
     team name + arrow at rest. On hover, a detail card rises up out of
     the cell into an elevated popup above it (icon, colored uppercase
     label, heading, divider, 2x2 links grid) and a blue accent bar lights
     up along the cell's bottom edge — replacing the whole-card 3D
     rotateY flip per an explicit reference screenshot showing this
     rise-up-popup interaction instead. This is the "hover-popup" mechanic
     from clude.md's iteration history, reconstructed fresh (not the
     literal original markup, which wasn't preserved). -->
<section class="relative overflow-hidden bg-white py-[160px]">
	<!-- Decorative oversized background icons, behind all real content
	     (z-10 below on every content wrapper) — left icon top-left corner,
	     right icon bottom-right corner, per the reference. -->
	<img
		src={teamsBgIconLeft}
		alt=""
		class="pointer-events-none absolute -left-24 -top-24 w-[420px] opacity-60"
	/>
	<img
		src={teamsBgIconRight}
		alt=""
		class="pointer-events-none absolute -bottom-24 -right-24 w-[420px] opacity-60"
	/>

	<div class="container-page relative z-10 text-center">
		<h2 class="mx-auto max-w-3xl text-web-32 font-semibold text-gray-800 sm:text-web-40 md:text-web-48">
			Built Around Every Team
		</h2>
		<!-- Forced into exactly 4 lines via 3 explicit <br /> — a first
			     attempt split "Every team gets the visibility and control" onto
			     one line, but that segment was still too long for this max-w at
			     the viewport it was tested against, so it re-wrapped on its own
			     into 2 lines (5 total instead of 4). Rebalanced to 4 shorter,
			     more even segments (none longer than the known-good first line)
			     so none of them re-wrap — per a follow-up "i still see its 5
			     line i need it to 4 lines" correction. -->
		<p class="mx-auto mt-6 max-w-4xl text-para-24 text-gray-500">
			One platform. Different priorities.
			Every team gets the visibility
			and <br> control they need without
			switching between multiple tools.
		</p>
	</div>

	<!-- Mobile/tablet (below lg:) — no hover on touch devices, so the
	     hover-flip/popup grid below doesn't work there at all. Per an
	     explicit "in mobile remove the effects and show the backside to
	     all six" request, this is an entirely separate, simpler stacked
	     list showing every team's detail content ("backside" — icon,
	     colored label, heading, divider, links grid) permanently, one
	     under another, no hover/interaction of any kind. Same
	     `lg:hidden` / `hidden lg:block` separate-markup pattern already
	     used for the Solutions/Services sections' mobile accordions
	     (rather than trying to force the desktop hover grid to also work
	     via touch/tap).

	     No colored divider stripe, no gap between cards — a first version
	     had an `h-16` stripe in each team's accent color between cards,
	     explicitly removed per "remove the blue patch and padding between
	     cards is zero" (the stripe itself was what read as "padding"
	     between cards; removing it, block-level divs with no margin are
	     already flush by default, nothing else needed for the zero-gap
	     request). A plain `border-b border-gray-200` was added back per a
	     follow-up "give the border", then widened to a full `border`
	     (all 4 sides) per "make the border for all 4 cornor" — adjacent
	     cards' touching top/bottom borders double up into a slightly
	     thicker seam since there's still zero gap between them, which is
	     expected given the explicit all-4-sides ask, not a bug. Card
	     background alternates in a checkerboard
	     — `bg-gray-50` on cards 2/4/6 (`i % 2 === 1`), `bg-white`
	     otherwise — same rule (and even the same color) as the desktop
	     grid's own checkerboard above, just applied down a single column
	     instead of across a 3-column grid, per "second, fourth, sixth
	     cards only gray rest of the cards are white". -->
	<div class="relative z-10 mx-4 mt-20 sm:mx-8 lg:hidden">
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

	<!-- Desktop (lg: and up) — the interactive hover-flip/popup grid.
	     Fixed 200px gutter per explicit request (`mx-[Npx]`, same
	     convention as Footer's outer wrapper, deliberately not
	     `container-page` since this is a card-like grid, not heading
	     text). -->
	<div class="relative z-10 mx-4 mt-20 hidden border-l border-t border-gray-200 sm:mx-8 lg:mx-[200px] lg:block">
		<div class="grid lg:grid-cols-3">
			{#each teams as team, i (team.key)}
				<!-- `overflow-visible` + `relative` lets the hover popup below
				     break out of this cell's box entirely (it needs to render
				     above the grid, not clipped to the cell). Every cell gets
				     its own right/bottom border only — combined with the
				     wrapper's single top/left border above, this tiles into a
				     clean 1px grid at any column count without doubled lines.
				     `hover:bg-blue-600` is on THIS cell directly (not a
				     `group-hover`-driven child) — per "the existing block bg
				     appear blue", the cell's own background is what turns
				     blue, not a separate offset shape behind the popup (that
				     was the previous, now-corrected attempt).

				     At-rest background alternates in a checkerboard, per an
				     explicit "give above centre box gray, below first and third
				     box gray color" request: with 6 teams laid out 3-per-row,
				     odd indices (Finance=1, Customer Support=3, Founders=5) are
				     exactly "top-center" + "bottom-left" + "bottom-right" — so
				     `i % 2 === 1` alone produces that pattern with no special-
				     casing per cell. This assumes the `lg:grid-cols-3` 3-column
				     layout; at `sm`/mobile column counts the same odd/even rule
				     still applies but won't line up into the same visual
				     checkerboard (not addressed — this was specified against
				     the desktop 3-column reference only). -->
				<div
					class="group relative h-[320px] border-b border-r border-gray-200 p-8 transition-colors duration-500 ease-in-out hover:bg-blue-600 {i %
					2 ===
					1
						? 'bg-gray-50'
						: 'bg-white'}"
				>
					<!-- Icon/label fade out on hover since the blue fill takes
					     over the whole cell and the reference shows no visible
					     icon/text sitting on top of the blue. -->
					<div class="flex h-full flex-col justify-between transition-opacity duration-500 ease-in-out group-hover:opacity-0">
						<img src={team.icon} alt="" class="h-10 w-10" />
						<a href="/products" class="flex items-center gap-2 text-web-24 font-semibold text-gray-900">
							{team.label}
							<span aria-hidden="true">↗</span>
						</a>
					</div>

					<!-- Detail popup — "the particular block will move up": grows
					     into place on hover from `scale-0` (origin-bottom) to
					     `scale-100`, transform-only (`transition-transform`, no
					     `opacity` in the mix at all) — an earlier version faded it
					     in via `opacity-0 → opacity-100` alongside the scale/
					     translate, which read as a "dissolve"; per an explicit "the
					     transition should smooth without disolve" correction, the
					     whole reveal is now purely a smooth transform (grows from
					     nothing at the bottom edge up to full size), nothing ever
					     partially-transparent. A left-to-right (`scale-x`) version
					     was also tried and explicitly undone ("undo this") — back to
					     the uniform bottom-anchored `scale-0`/`scale-100`, don't
					     reintroduce `scale-x`/`origin-left` here without a fresh
					     explicit request. Anchored `bottom-16` (not
					     `bottom-full`) so it overlaps down INTO the cell rather
					     than sitting flush above it — that's what leaves a solid
					     strip of the cell's own blue hover fill visible below the
					     popup. `left-4` + a negative `right` (wider than the cell)
					     makes it overlap sideways too, spilling past the cell's own
					     right border into the neighboring cell — per an explicit
					     "card will overlap exactly [the reference]" correction: the
					     previous symmetric `inset-x-4` kept the popup fully contained
					     within the hovered cell's own width, which didn't match.
					     `pointer-events-none` at rest so it can't intercept clicks
					     while invisible; flips to `-auto` on hover so the popup's
					     own links are reachable. -->
					<div
						class="pointer-events-none absolute bottom-16 left-4 right-[-3rem] z-20 h-[320px] origin-bottom scale-0 bg-gray-100 p-8 shadow-2xl transition-transform duration-500 ease-in-out group-hover:pointer-events-auto group-hover:scale-100"
					>
						<!-- `h-[320px]` on the outer box itself (padding included) —
						     matches the grid cells' own total `h-[320px]` exactly, per
						     "i want the same height how rest of the boxes there" (a
						     taller `h-[440px]` inner-content height was tried first
						     and read as too tall). `h-full` + `justify-between` on the
						     inner wrapper spreads icon / label+heading / links across
						     the padding box's remaining height instead of packing
						     them tightly near the top. -->
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

<!-- Testimonial — dark carousel: heading/subheading, a 5-avatar row (center
     one large + bright = active testimonial, the other 4 shrink and dim
     the further they are from center), prev/next arrows pinned to the
     section's outer edges (not just around the avatar cluster), then the
     active testimonial's quote (first clause white, rest faded to white/40
     — matches the reference's exact split, see quoteHighlight/quoteRest
     above), company wordmark, name (font-mono, matching the site's
     buttons-are-mono convention extended to this credit line per the
     reference), and role. -->
<section class="bg-black py-[160px] text-center text-white">
	<div class="container-page">
		<h2 class="mx-auto max-w-2xl text-web-32 font-semibold sm:text-web-40 md:text-web-48">
			Built on Trust. <br> Provenby Experience.
		</h2>
		<!-- Forced into exactly 3 lines via 2 explicit <br /> — went through
		     two corrections. First only had 1 forced break, relying on
		     natural wrapping to split "...isn't what we say—" into its own
		     2 lines; that happened to render as 3 lines but wasn't
		     guaranteed to hold at other widths, so 2 explicit breaks were
		     added at "...isn't" / "what we say—" / "it's what...". That was
		     still "the issue" per a follow-up — a very short middle line
		     ("what we say—") sandwiched between two long ones read as
		     unbalanced even though it was technically 3 lines. Rebalanced
		     into 3 more even segments instead (same words, different break
		     points) per "still i see the issuse make it 3 lines". -->
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

<!-- FAQ — left column is static heading/copy/CTA, right column is the
     accordion (one persistent button per row, answer shown/hidden via
     {#if} rather than a height transition — wasn't asked for a smooth
     expand animation here, unlike Services' push animation). Uses a
     fixed `mx-[120px]` gutter (not `container-page`'s responsive
     clamp()) so the accordion can be pinned to an exact 944px width
     against the right edge, matching the Solutions/Services/Build Around
     convention of fixed insets for card-like containers. Stat strip
     below breaks out to span full viewport width, same technique as the
     About section's trust-logo marquee strip. -->
<section class="bg-white pt-[160px]">
	<!-- lg:items-stretch (not items-start) so the left column actually
	     spans the row's full height (matched to the taller accordion
	     column) — that's what lets `mt-auto` on the illustration below pin
	     it to the bottom, flush with the stats strip that follows, instead
	     of leaving a gap sized to "however much shorter the left column's
	     own content is than the accordion". -->
	<div class="mx-4 grid grid-cols-1 gap-16 lg:mx-[120px] lg:grid-cols-[1fr_800px] lg:items-stretch lg:gap-12">

		<div class="flex flex-col">
			<h2 class="text-web-32 font-semibold text-gray-900 sm:text-web-40 md:text-web-48">
				Let's Clear Things Up
			</h2>
			<p class="mt-6 max-w-lg text-para-20 text-gray-500">
				Choosing a payment platform is an important decision. Here are answers to the questions
				businesses ask before getting started with ElixirPay.
			</p>
			<img
				src={faqIllustration}
				alt=""
				class="relative z-10 mt-auto hidden h-auto translate-y-[60px] lg:block lg:w-[31rem]"
			/>
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
							<p
								class="mt-4 text-para-16 text-gray-500"
								transition:slide={{ duration: 300 }}
							>
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

	<div
		bind:this={faqStatsEl}
		class="mt-[60px] grid grid-cols-2 border-y border-gray-100 lg:grid-cols-4"
	>
		{#each faqStats as stat, i}
			<div
				class="border-b border-gray-100 px-8 py-14 text-center last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 {stat.bg}"
			>
				<p class="text-web-40 font-semibold tabular-nums text-gray-900 sm:text-web-48">
					{faqStatCounts[i]}{stat.suffix}
				</p>
				<p class="mt-2 text-para-16 text-gray-500">{stat.label}</p>
			</div>
		{/each}
	</div>
</section>

<!-- Final CTA — bg.png supplies the entire blue-glow-to-black backdrop
     (absolute layer behind the content, same technique as Hero's
     background image), so no CSS gradient was hand-built here. Heading
     forced 2-line, subheading forced 3-line via <br />, both matching the
     reference's exact break points, with max-w wide enough that neither
     half re-wraps on its own (the usual forced-break bug). -->
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
		<!-- Switched from hand-placed <br /> to `text-balance` (CSS
		     `text-wrap: balance`) per "change the content to 3 lines" — hand
		     -guessing exact break points had already failed twice on this
		     exact paragraph (a 2-break attempt re-wrapped into 5 lines, a
		     rebalanced 3-break attempt still wasn't right), the same
		     recurring bug the Build Around/Testimonial subheadings also hit.
		     `text-balance` lets the browser pick break points itself to
		     minimize raggedness, so it can't produce a lone short/orphan
		     line the way a mis-sized manual break can. `max-w` went
		     3xl → 5xl → 4xl: 5xl turned out too wide (wrapped to only 2
		     lines per a follow-up screenshot), narrowed one step to 4xl to
		     land on ~3 — still an estimate, not a guaranteed line count; if
		     the real line count is off once live, adjust this `max-w` step
		     (wider → fewer lines, narrower → more), not the text itself. -->
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
