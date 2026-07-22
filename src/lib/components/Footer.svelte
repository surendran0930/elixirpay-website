<script>
	// Real assets replacing the earlier stub's plain text/TODO columns —
	// see clude.md "Footer" notes for the full column/link breakdown and
	// which link targets are real routes vs. placeholder "#" hrefs (most
	// of these pages don't exist yet, only About/Careers/Contact/Blog do).
	const footerAssetBase =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/section%2011%20-%20footer/';
	const logo = footerAssetBase + 'logo.png';

	// Order matches the reference screenshot's left-to-right icon row
	// (X, LinkedIn, Facebook, Instagram) — NOT the order the asset URLs
	// were listed in (which had Instagram before Facebook).
	const socialLinks = [
		{ key: 'twitter', href: 'https://twitter.com', icon: footerAssetBase + 'twitter-x%201.svg' },
		{ key: 'linkedin', href: 'https://linkedin.com', icon: footerAssetBase + 'linkedin.svg' },
		{ key: 'facebook', href: 'https://facebook.com', icon: footerAssetBase + 'facebook.svg' },
		{ key: 'instagram', href: 'https://instagram.com', icon: footerAssetBase + 'instagram.svg' }
	];

	const certificates = [1, 2, 3, 4, 5].map((n) => footerAssetBase + `certificate%20${n}.png`);

	// Only these 4 labels correspond to real routes in the app right now;
	// everything else in the footer's ~35 links is a placeholder "#" until
	// those pages actually exist.
	/** @type {Record<string, string>} */
	const realRoutes = { About: '/about', Careers: '/careers', Contact: '/contact', Blog: '/blog' };
	/** @param {string} label */
	const href = (label) => realRoutes[label] ?? '#';

	const footerColumnsRow1 = [
		{
			title: 'Products',
			links: [
				'Payment Gateway',
				'Checkout',
				'Payment Links',
				'QR Payments',
				'Invoices',
				'Subscriptions',
				'Payouts',
				'Virtual Accounts',
				'Smart Collect',
				'Reconciliation',
				'Tokenization',
				'White Label Solutions'
			]
		},
		{
			title: 'Solutions',
			links: ['Startups', 'Growing Businesses', 'Enterprise', 'SaaS', 'Marketplaces', 'Platforms']
		},
		{
			title: 'Industries',
			links: [
				'Healthcare',
				'Education',
				'Travel',
				'Retail',
				'Ecommerce',
				'Manufacturing',
				'Logistics',
				'NGOs'
			]
		},
		{
			title: 'Legal',
			links: [
				'Privacy',
				'Terms',
				'Refund',
				'Cookie',
				'Security',
				'Compliance',
				'PCI DSS',
				'Responsible Disclosure'
			]
		}
	];

	const footerColumnsRow2 = [
		{ title: 'Company', links: ['About', 'Careers', 'Contact'] },
		{ title: 'Resources', links: ['Blog', 'Case Studies'] },
		{ title: 'Developers', links: ['API', 'SDK', 'Guides', 'Sandbox'] }
	];
</script>

<!-- Two separate stacked grids (footerColumnsRow1 / footerColumnsRow2),
     not one 8-item grid — Products has 12 links (by far the tallest
     column), and a single grid would let its height push Company/
     Resources/Developers/Language down to different starting points
     under their own shorter first-row neighbors. Two grids keep row 2's
     top edge level regardless of row 1's tallest column. -->
<footer class="bg-[#171717] py-20 text-white">
	<div class="mx-4 lg:mx-[120px]">
		<div class="grid grid-cols-1 gap-16 lg:grid-cols-[320px_1fr] lg:gap-32">
			<div>
				<img src={logo} alt="ElixirPay" class="h-16 w-auto" />
				<p class="mt-6 max-w-xs text-para-16 text-white/50">
					Get started with DOSS ARP and see how composable operations can work for your business.
				</p>
				<a
					href="/contact"
					class="mt-6 inline-block rounded-lg border border-white/20 px-5 py-2.5 font-mono text-para-14 font-medium text-white hover:bg-white/5"
				>
					Get Started
				</a>
				<div class="mt-16 flex items-center gap-5">
					{#each socialLinks as social}
						<a href={social.href} aria-label={social.key} class="opacity-60 hover:opacity-100">
							<img src={social.icon} alt="" class="h-8 w-8" />
						</a>
					{/each}
				</div>
			</div>

			<div>
				<div class="grid grid-cols-2 gap-10 sm:grid-cols-4">
					{#each footerColumnsRow1 as column}
						<div>
							<p class="text-web-20 font-semibold text-white">{column.title}</p>
							<ul class="mt-5 space-y-3 text-para-16 text-white/50">
								{#each column.links as link}
									<li><a href={href(link)} class="hover:text-white">{link}</a></li>
								{/each}
							</ul>
						</div>
					{/each}
				</div>

				<div class="mt-12 grid grid-cols-2 gap-10 sm:grid-cols-4">
					{#each footerColumnsRow2 as column}
						<div>
							<p class="text-web-20 font-semibold text-white">{column.title}</p>
							<ul class="mt-5 space-y-3 text-para-16 text-white/50">
								{#each column.links as link}
									<li><a href={href(link)} class="hover:text-white">{link}</a></li>
								{/each}
							</ul>
						</div>
					{/each}

					<div>
						<p class="text-web-20 font-semibold text-white">Language</p>
						<button
							class="mt-5 flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 text-para-14 text-white"
						>
							<svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.75">
								<circle cx="12" cy="12" r="9" />
								<path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" />
							</svg>
							English
							<svg viewBox="0 0 24 24" class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="2">
								<path d="M6 9l6 6 6-6" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>

		<div
			class="mt-16 flex flex-col gap-6 border-t border-white/10 pt-10 lg:flex-row lg:items-center lg:justify-between"
		>
			<p class="text-para-16 text-white/50">
				Elixirpay is compliant with international compliance standards and laws
			</p>
			<div class="flex flex-wrap items-center gap-4">
				{#each certificates as cert}
					<img src={cert} alt="" class="h-10 w-auto" />
				{/each}
			</div>
		</div>

		<div
			class="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 text-para-16 text-white/50 sm:flex-row sm:items-center sm:justify-between"
		>
			<p>© Elixirpay, {new Date().getFullYear()}. All rights reserved.</p>
			<div class="flex gap-8">
				<a href="/privacy" class="hover:text-white">Privacy Policy</a>
				<a href="/terms" class="hover:text-white">Terms &amp; Conditions</a>
			</div>
		</div>
	</div>
</footer>
