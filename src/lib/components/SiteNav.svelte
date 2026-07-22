<script lang="ts">
	import { onMount } from 'svelte';

	// Single shared nav for every page — previously Hero.svelte and
	// AboutHero.svelte each carried their own copy of this exact markup
	// (only the active-link highlight differed), and every other route used
	// a completely different light `Nav.svelte`. Per explicit request, all
	// routes now use this one.
	interface Props {
		active?: 'home' | 'products' | 'solutions' | 'industries' | 'about';
		// Hero/AboutHero sit on a dark gradient, so the nav can start as a
		// transparent full-width bar and shrink into the floating pill only
		// once scrolled. Every other page has a light/white top section, so
		// there `startTransparent` is left false and the nav renders as the
		// pill (its own bg-black/90) right away — a transparent bar there
		// would put white text/links directly on a light background.
		startTransparent?: boolean;
	}
	let { active, startTransparent = false }: Props = $props();

	const logo =
		'https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Nav%20bar/elixirpaylogo.svg';

	let mobileOpen = $state(false);
	let scrolled = $state(!startTransparent);

	const links = [
		{ href: '/', label: 'Home', key: 'home' },
		{ href: '/products', label: 'Products', key: 'products' },
		{ href: '/solutions', label: 'Solutions', key: 'solutions' },
		{ href: '/industries', label: 'Industries', key: 'industries' },
		{ href: '/about', label: 'About', key: 'about' }
	] as const;

	onMount(() => {
		if (!startTransparent) return;
		let ticking = false;
		const updateScrolled = () => {
			scrolled = window.scrollY > 24;
		};
		const onScroll = () => {
			if (ticking) return;
			ticking = true;
			requestAnimationFrame(() => {
				updateScrolled();
				ticking = false;
			});
		};
		updateScrolled();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<header
	class="fixed inset-x-0 z-30 mx-auto flex items-center justify-between transition-all duration-300 {scrolled
		? 'top-4 w-[calc(100%-2rem)] max-w-5xl rounded-full bg-black/90 px-6 py-3 shadow-xl shadow-black/30 backdrop-blur-md sm:w-[calc(100%-4rem)]'
		: 'container-page top-0 py-8'}"
>
	<a href="/" class="flex items-center">
		<img
			src={logo}
			alt="ElixirPay"
			class="w-auto transition-all duration-300 {scrolled ? 'h-9' : 'h-9 md:h-[72px]'}"
		/>
	</a>

	<nav class="hidden items-center gap-1 text-para-14 md:flex">
		{#each links as link (link.label)}
			<a
				href={link.href}
				class="rounded-full px-5 py-2 {active === link.key
					? 'bg-white text-black'
					: 'text-white/70 hover:text-white'}"
			>
				{link.label}
			</a>
		{/each}
	</nav>

	<a
		href="/contact"
		class="hidden rounded-full bg-white px-5 py-2.5 font-mono text-para-14 font-medium text-black hover:bg-gray-100 md:inline-block lg:px-6 lg:py-3"
	>
		Contact Us
	</a>

	<button
		class="text-[32px] leading-none text-white md:hidden"
		aria-label="Open menu"
		onclick={() => (mobileOpen = true)}
	>
		☰
	</button>
</header>

<aside
	class="fixed inset-0 z-50 flex w-full transform flex-col bg-black text-white transition-transform duration-300 ease-in-out md:hidden {mobileOpen
		? 'translate-x-0'
		: 'translate-x-full'}"
>
	<div class="flex items-center justify-between p-8">
		<img src={logo} alt="ElixirPay" class="h-9 w-auto" />
		<button
			aria-label="Close menu"
			onclick={() => (mobileOpen = false)}
			class="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-xl"
		>
			✕
		</button>
	</div>
	<nav class="flex flex-col px-8">
		{#each links as link (link.label)}
			<a
				href={link.href}
				class="border-b border-white/10 py-5 font-mono text-para-16 font-semibold uppercase tracking-widest"
				onclick={() => (mobileOpen = false)}
			>
				{link.label}
			</a>
		{/each}
	</nav>
	<a
		href="/contact"
		class="mx-8 mb-8 mt-auto rounded-lg bg-white px-6 py-4 text-center font-mono text-para-16 font-medium text-black hover:bg-gray-100"
		onclick={() => (mobileOpen = false)}
	>
		Contact Us
	</a>
</aside>
