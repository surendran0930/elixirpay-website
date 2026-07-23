<script>
	import LegalLayout from '$lib/components/LegalLayout.svelte';
</script>

<svelte:head>
	<title>Cookie Policy — ElixirPay</title>
</svelte:head>

{#snippet intro()}
	<h2>Elixirpay's Cookie Policy.</h2>
	<p class="effective-date">Effective Date: July 1, 2026</p>
	<hr />

	<p>
		Like most websites, Elixir Pay uses cookies and similar technologies to make our site and
		dashboard work reliably, keep your account secure, and understand how our services are used.
		This policy explains what those technologies are and how you can manage them.
	</p>
{/snippet}

{#snippet body1()}
	<p>
		Cookies are small text files placed on your device when you visit a website. They allow the
		site to recognize your browser across page loads and, in some cases, across visits. We also
		use similar technologies such as local storage and pixel tags for the same purposes described
		below.
	</p>
{/snippet}

{#snippet body2()}
	<ul>
		<li>Keeping you signed in to your Elixir Pay dashboard between page loads</li>
		<li>Protecting your account with fraud and security checks</li>
		<li>Remembering preferences like language and display settings</li>
		<li>Understanding aggregate site usage so we can improve our website and products</li>
	</ul>
{/snippet}

{#snippet body3()}
	<h4>Strictly Necessary Cookies</h4>
	<p>
		Required for core functionality like logging in, navigating the dashboard, and processing
		payments securely. These cannot be disabled without affecting how the site works.
	</p>
	<h4>Functional Cookies</h4>
	<p>
		Remember choices you've made, such as your preferred language or region, so you don't have to
		re-select them on every visit.
	</p>
	<h4>Analytics Cookies</h4>
	<p>
		Help us understand how visitors interact with our website — which pages are visited, how long
		for, and where visitors come from — so we can improve our content and user experience. See our
		<a href="/privacy#google-analytics" class="text-blue-600 hover:underline">Privacy Policy</a> for
		details on our use of Google Analytics.
	</p>
{/snippet}

{#snippet body4()}
	<p>
		Some cookies on our site are set by trusted third parties who provide analytics, security, or
		embedded content on our behalf. We do not control these cookies directly; their use is
		governed by the respective third party's own privacy and cookie policies.
	</p>
{/snippet}

{#snippet body5()}
	<p>
		Most browsers let you view, delete, and block cookies through their settings menu. Blocking
		strictly necessary cookies may prevent you from logging in or using core features of our
		dashboard. Where we use cookies for analytics, you can opt out using your browser's controls or
		the opt-out tools referenced in our Privacy Policy.
	</p>
{/snippet}

{#snippet body6()}
	<p>
		We may update this Cookie Policy as we adopt new technologies or as our practices change. Any
		changes will be posted on this page with a revised effective date.
	</p>
{/snippet}

<LegalLayout
	heroTitle="Cookie Policy"
	heroDescription="This page explains what cookies Elixir Pay uses across our website and dashboard, why we use them, and how you can control your preferences."
	{intro}
	sections={[
		{ id: 'what-are-cookies', label: '1. What Are Cookies', body: body1 },
		{ id: 'how-we-use', label: '2. How We Use Cookies', body: body2 },
		{ id: 'types-of-cookies', label: '3. Types of Cookies We Use', body: body3 },
		{ id: 'third-party', label: '4. Third-Party Cookies', body: body4 },
		{ id: 'managing-cookies', label: '5. Managing Your Preferences', body: body5 },
		{ id: 'updates', label: '6. Updates to This Policy', body: body6 }
	]}
/>
