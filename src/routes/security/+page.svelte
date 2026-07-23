<script>
	import LegalLayout from '$lib/components/LegalLayout.svelte';
</script>

<svelte:head>
	<title>Security — ElixirPay</title>
</svelte:head>

{#snippet intro()}
	<h2>Elixirpay's Security Practices.</h2>
	<p class="effective-date">Effective Date: July 1, 2026</p>
	<hr />

	<p>
		Elixir Pay moves money for businesses of every size, which means security isn't a feature —
		it's the foundation everything else is built on. This page describes the practices, controls,
		and monitoring we maintain across our platform.
	</p>
{/snippet}

{#snippet body1()}
	<p>
		We design our systems assuming they will be attacked, and build layered defenses accordingly —
		from the network layer up through the application layer to how individual engineers access
		production systems. Security reviews are part of how we ship every product, not a step bolted
		on afterward.
	</p>
{/snippet}

{#snippet body2()}
	<ul>
		<li>All data in transit is encrypted using TLS 1.2 or higher</li>
		<li>Sensitive data at rest is encrypted using industry-standard algorithms</li>
		<li>Card data is tokenized at the point of entry and never stored in raw form</li>
		<li>Encryption keys are managed and rotated through a dedicated key management service</li>
	</ul>
{/snippet}

{#snippet body3()}
	<p>
		Our production infrastructure runs in segmented, access-controlled environments with
		continuous vulnerability scanning, automated patching, and redundancy across availability
		zones to maintain uptime during infrastructure failures.
	</p>
{/snippet}

{#snippet body4()}
	<ul>
		<li>Multi-factor authentication is enforced for all internal systems</li>
		<li>Production access follows least-privilege, need-to-know principles</li>
		<li>All administrative actions are logged and regularly audited</li>
		<li>Employee access is reviewed and revoked promptly upon role change or departure</li>
	</ul>
{/snippet}

{#snippet body5()}
	<p>
		Every transaction is screened in real time against fraud signals — velocity checks, device
		fingerprinting, and behavioral patterns — before it's authorized. Suspicious activity is
		flagged for manual review by our risk team, and merchants are notified when a transaction is
		held for additional verification.
	</p>
{/snippet}

{#snippet body6()}
	<p>
		We maintain an incident response plan covering detection, containment, eradication, and
		recovery. Our security team is on call around the clock, and affected merchants are notified
		promptly in line with our contractual and regulatory obligations if an incident affects their
		data or funds.
	</p>
{/snippet}

{#snippet body7()}
	<p>
		Security is a partnership. While we secure the infrastructure, network, and payment
		processing layer, you're responsible for protecting your own account credentials, API keys,
		and webhook endpoints, and for keeping your integration up to date with our recommended
		security practices.
	</p>
{/snippet}

{#snippet body8()}
	<p>
		If you believe you've found a security vulnerability in our platform, please don't exploit it
		— report it to us so we can investigate. See our
		<a href="/responsible-disclosure" class="text-blue-600 hover:underline"
			>Responsible Disclosure</a
		>
		page for how to submit a report and what to expect from us in response.
	</p>
{/snippet}

<LegalLayout
	heroTitle="Security"
	heroDescription="Every transaction on Elixir Pay runs through infrastructure built with security as a first principle, not an afterthought. Here's how we protect your business and your customers."
	{intro}
	sections={[
		{ id: 'our-approach', label: '1. Our Approach to Security', body: body1 },
		{ id: 'data-encryption', label: '2. Data Encryption', body: body2 },
		{ id: 'infrastructure', label: '3. Infrastructure Security', body: body3 },
		{ id: 'access-control', label: '4. Access Control', body: body4 },
		{ id: 'fraud-monitoring', label: '5. Fraud Monitoring', body: body5 },
		{ id: 'incident-response', label: '6. Incident Response', body: body6 },
		{ id: 'shared-responsibility', label: '7. Shared Responsibility', body: body7 },
		{ id: 'reporting', label: '8. Reporting a Concern', body: body8 }
	]}
/>
