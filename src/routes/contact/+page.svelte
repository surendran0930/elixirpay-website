<script>
	import { onMount } from 'svelte';
	import Button from '$lib/components/Button.svelte';

	const sealLogo = 'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/contact%20us/stamp.svg';
	const mailIcon = 'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/contact%20us/mail-01.2%201.svg';
	const callIcon =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/contact%20us/phone-call-01.2%202.svg';

	// target/decimals/prefix/suffix drive the count-up below — same
	// trigger-once IntersectionObserver + eased ramp used for the About
	// page's "Built on a Strong Foundation" stats.
	const stats = [
		{ target: 99.95, decimals: 2, suffix: '%', label: 'Uptime' },
		{ target: 2, prefix: 'T+', label: 'Settlements' },
		{ target: 24, suffix: '*7', label: 'Support' }
	];
	let statValues = $state(stats.map(() => 0));
	/** @type {HTMLDivElement | undefined} */
	let statsEl = $state();

	onMount(() => {
		let animated = false;
		const observer = new IntersectionObserver(
			(entries) => {
				if (!entries[0].isIntersecting || animated) return;
				animated = true;
				const duration = 1500;
				const start = performance.now();
				/** @param {number} now */
				function tick(now) {
					const progress = Math.min((now - start) / duration, 1);
					const eased = 1 - Math.pow(1 - progress, 4);
					statValues = stats.map((stat) => stat.target * eased);
					if (progress < 1) requestAnimationFrame(tick);
				}
				requestAnimationFrame(tick);
			},
			{ threshold: 0.3 }
		);
		if (statsEl) observer.observe(statsEl);
		return () => observer.disconnect();
	});

	const howYouKnowOptions = [
		'Search Engine',
		'Social Media',
		'Referral',
		'Advertisement',
		'Other'
	];
</script>

<svelte:head>
	<title>Contact Us — ElixirPay</title>
</svelte:head>

<!-- pt merges the fixed nav's own clearance into this section's own
     bg-gray-200 (previously a separate white spacer sat above this section
     for that clearance, showing as a white seam behind the nav). -->
<!-- px-[120px] here (not container-page's own clamp()-based padding, which
     caps at 96px) is the exact gap the border box's own edge should sit
     from the viewport edge — the grid inside goes back to its normal
     padding since that 120px was meant for this outer gap, not the inner
     one. -->
<section class="bg-[#FAFAFA] pb-16 pt-[100px] md:pb-24 md:pt-[132px]">
	<div class="mx-auto max-w-[1920px] px-4 md:px-[120px]">
		<div class="overflow-hidden border border-gray-300 bg-[#FAFAFA]">
			<div class="grid gap-12 p-8 md:grid-cols-2 md:gap-16 md:px-16 md:py-12">
				<!-- Left: intro copy + the two contact-method cards -->
				<div>
					<h1 class="text-web-32 font-bold text-gray-900 md:text-web-40">Talk to our team</h1>
					<p class="mt-6 text-para-18 text-gray-600">
						If your business handles high-volume transactions, needs faster settlements, or is
						looking for a reliable payment gateway you can trust, our team is here to guide you.
					</p>
					<p class="mt-4 text-para-18 text-gray-600">
						Send us your details, and we'll connect with you to discuss how ElixirPay can support
						your growth.
					</p>

					<div class="mt-10 flex flex-col gap-4 xl:flex-row">
						<div class="flex items-start gap-3 border border-gray-300 bg-gray-100 px-5 py-4">
							<span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
								<img src={mailIcon} alt="" class="h-5 w-5" />
							</span>
							<div>
								<p class="whitespace-nowrap text-para-14 text-gray-500">Business Enquiry</p>
								<p class="whitespace-nowrap font-semibold text-gray-900">onboarding@elixirpay.com</p>
							</div>
						</div>
						<div class="flex items-start gap-3 border border-gray-300 bg-gray-100 px-5 py-4">
							<span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
								<img src={callIcon} alt="" class="h-5 w-5" />
							</span>
							<div>
								<p class="whitespace-nowrap text-para-14 text-gray-500">Contact Info</p>
								<p class="whitespace-nowrap font-semibold text-gray-900">+91 9484 04040</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Right: the form card, seal badge overlapping its top-right corner -->
				<div class="relative">
					<img
						src={sealLogo}
						alt=""
						class="pointer-events-none absolute -right-8 -top-20 z-10 hidden h-48 w-48 drop-shadow-lg lg:block lg:-right-12"
					/>

					<div class="overflow-hidden rounded-2xl bg-white shadow-xl">
						<div class="border-b border-gray-200 px-6 py-4">
							<p class="font-mono text-para-14 font-semibold uppercase tracking-widest text-gray-400">
								Tell us how we can help
							</p>
						</div>

						<form class="space-y-4 p-6">
							<label class="block">
								<span class="text-para-16 font-semibold text-gray-900">Full name</span>
								<input
									type="text"
									placeholder="Enter your name"
									class="mt-2 w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-2.5 text-para-16 text-gray-900 placeholder-gray-400 outline-none focus:border-blue-400"
								/>
							</label>

							<label class="block">
								<span class="text-para-16 font-semibold text-gray-900">Email ID</span>
								<input
									type="email"
									placeholder="Enter your email"
									class="mt-2 w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-2.5 text-para-16 text-gray-900 placeholder-gray-400 outline-none focus:border-blue-400"
								/>
							</label>

							<label class="block">
								<span class="text-para-16 font-semibold text-gray-900">Mobile number</span>
								<input
									type="tel"
									placeholder="Enter your number"
									class="mt-2 w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-2.5 text-para-16 text-gray-900 placeholder-gray-400 outline-none focus:border-blue-400"
								/>
							</label>

							<label class="block">
								<span class="text-para-16 font-semibold text-gray-900">How you came to know us?</span>
								<!-- appearance-none + a manually-positioned chevron, since the
								     native arrow's default position (flush against the edge)
								     was sitting slightly too far left. -->
								<div class="relative mt-2">
									<select
										class="w-full appearance-none rounded-lg border border-gray-200 bg-gray-100 px-4 py-2.5 pr-10 text-para-16 text-gray-500 outline-none focus:border-blue-400"
									>
										<option value="" selected disabled>Select Here</option>
										{#each howYouKnowOptions as option}
											<option value={option}>{option}</option>
										{/each}
									</select>
									<svg
										class="pointer-events-none absolute right-5 top-1/2 h-3 w-3 -translate-y-1/2 text-gray-500"
										viewBox="0 0 12 8"
										fill="none"
									>
										<path
											d="M1 1.5L6 6.5L11 1.5"
											stroke="currentColor"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</label>

							<label class="block">
								<span class="text-para-16 font-semibold text-gray-900">How can we Help</span>
								<textarea
									rows="3"
									placeholder="Enter Here"
									class="mt-2 w-full resize-none rounded-lg border border-gray-200 bg-gray-100 px-4 py-2.5 text-para-16 text-gray-900 placeholder-gray-400 outline-none focus:border-blue-400"
								></textarea>
							</label>

							<div class="flex flex-col-reverse items-start gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
								<p class="text-para-14 text-gray-500">
									You can also mail us to <span class="font-semibold text-gray-900">info@elixirpay.com</span>
								</p>
								<Button type="submit" color="neutral" variant="solid">Send message</Button>
							</div>
						</form>
					</div>
				</div>
			</div>

			<!-- Stats band -->
			<div bind:this={statsEl} class="grid grid-cols-1 border-t border-gray-300 sm:grid-cols-3">
				{#each stats as stat, i}
					<div class="border-b border-gray-300 px-6 py-8 last:border-b-0 sm:border-b-0 sm:border-r sm:border-gray-300 sm:px-[120px] sm:last:border-r-0">
						<p class="text-web-28 font-bold tabular-nums text-gray-900">
							{stat.prefix ?? ''}{statValues[i].toFixed(stat.decimals ?? 0)}{stat.suffix ?? ''}
						</p>
						<p class="mt-1 text-para-18 text-gray-500">{stat.label}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
