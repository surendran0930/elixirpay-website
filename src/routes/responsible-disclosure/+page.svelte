<script>
	import LegalLayout from '$lib/components/LegalLayout.svelte';
</script>

<svelte:head>
	<title>Responsible Disclosure — ElixirPay</title>
</svelte:head>

{#snippet intro()}
	<h2>Elixirpay's Responsible Disclosure Policy.</h2>
	<p class="effective-date">Effective Date: July 1, 2026</p>
	<hr />

	<p>
		We take the security of our platform seriously, and we recognize the value independent
		researchers bring in helping us find issues before they can be exploited. This policy
		describes how to report a suspected vulnerability responsibly, and the commitment we make to
		researchers who do.
	</p>
{/snippet}

{#snippet body1()}
	<p>
		If you report a vulnerability in good faith and in line with this policy, we commit to
		acknowledging your report promptly, investigating it thoroughly, keeping you updated on our
		progress, and not pursuing legal action against you for the research described in the Safe
		Harbor section below.
	</p>
{/snippet}

{#snippet body2()}
	<p>This policy covers security issues in:</p>
	<ul>
		<li>The Elixir Pay website, dashboard, and customer-facing applications</li>
		<li>Our public APIs, SDKs, and webhook infrastructure</li>
		<li>Any subdomain or system operated directly by Elixir Pay</li>
	</ul>
{/snippet}

{#snippet body3()}
	<p>
		Send a report to our security team through the contact details on this site, including as
		much detail as possible. Please report privately and give us a reasonable window to
		investigate and remediate before discussing the issue publicly.
	</p>
{/snippet}

{#snippet body4()}
	<ul>
		<li>A clear description of the vulnerability and its potential impact</li>
		<li>Step-by-step instructions to reproduce the issue</li>
		<li>Any proof-of-concept code, screenshots, or request/response captures</li>
		<li>The affected URL, endpoint, or component, where known</li>
	</ul>
{/snippet}

{#snippet body5()}
	<p>
		We aim to acknowledge new reports within a few business days, and to keep you informed as we
		validate and remediate confirmed issues. Timelines vary with severity and complexity, but we
		will communicate progress rather than leave a report unanswered.
	</p>
{/snippet}

{#snippet body6()}
	<p>
		We will not pursue legal action against researchers who discover and report vulnerabilities in
		good faith, provided they:
	</p>
	<ul>
		<li>Avoid privacy violations, data destruction, or service disruption during testing</li>
		<li>Only interact with accounts they own or have explicit permission to test</li>
		<li>Do not publicly disclose an issue before we've had a reasonable opportunity to fix it</li>
		<li>Do not exploit a vulnerability beyond what's necessary to demonstrate it</li>
	</ul>
{/snippet}

{#snippet body7()}
	<p>
		Reports involving denial-of-service testing, social engineering of our staff or customers,
		physical access attempts, or spam/phishing are not covered by this policy and should not be
		attempted against our systems.
	</p>
{/snippet}

<LegalLayout
	heroTitle="Responsible Disclosure"
	heroDescription="If you've found a security issue in Elixir Pay's platform, we want to hear from you. This page explains how to report it, and what to expect from us in return."
	{intro}
	sections={[
		{ id: 'our-commitment', label: '1. Our Commitment', body: body1 },
		{ id: 'scope', label: '2. Scope', body: body2 },
		{ id: 'reporting-a-vulnerability', label: '3. Reporting a Vulnerability', body: body3 },
		{ id: 'what-to-include', label: '4. What to Include', body: body4 },
		{ id: 'our-process', label: '5. Our Process', body: body5 },
		{ id: 'safe-harbor', label: '6. Safe Harbor', body: body6 },
		{ id: 'out-of-scope', label: '7. Out of Scope', body: body7 }
	]}
/>
