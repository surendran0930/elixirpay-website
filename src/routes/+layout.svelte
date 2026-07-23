<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import SiteNav from '$lib/components/SiteNav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	// Legal pages (Privacy, Terms, Refund, Cookies, Security, Compliance,
	// PCI DSS, Responsible Disclosure) share the LegalHero banner, which
	// ships its own dark nav the same way Landing/About/Products/Solutions/
	// Industries do — skip the layout's copy on all of these routes so it
	// isn't rendered twice.
	const ownNavRoutes = [
		'/',
		'/about',
		'/products',
		'/solutions',
		'/industries',
		'/privacy',
		'/terms',
		'/refund',
		'/cookies',
		'/security',
		'/compliance',
		'/pci-dss',
		'/responsible-disclosure'
	];
	let hasOwnNav = $derived(ownNavRoutes.includes($page.url.pathname));

	let activeLink = $derived(
		$page.url.pathname === '/products'
			? 'products'
			: $page.url.pathname === '/solutions'
				? 'solutions'
				: $page.url.pathname === '/industries'
					? 'industries'
					: undefined
	);
</script>

{#if !hasOwnNav}
	<SiteNav active={activeLink} />
{/if}

<!-- No shared top padding here for the fixed nav's clearance — that used to
     live on this <main>, which put a plain white gap in front of whatever
     background color a page's own first section actually uses (visible as
     a seam on Contact's gray-200 section). Each non-hero page now reserves
     that clearance itself, in its own section, in its own background. -->
<main>
	{@render children?.()}
</main>

<Footer />
