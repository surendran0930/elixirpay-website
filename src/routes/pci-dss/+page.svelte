<script>
	import LegalLayout from '$lib/components/LegalLayout.svelte';
</script>

<svelte:head>
	<title>PCI DSS Compliance — ElixirPay</title>
</svelte:head>

{#snippet intro()}
	<h2>Elixirpay's PCI DSS Compliance.</h2>
	<p class="effective-date">Effective Date: July 1, 2026</p>
	<hr />

	<p>
		Elixir Pay processes card payments on behalf of thousands of businesses, which means the
		security of cardholder data is one of our highest priorities. This page explains our
		compliance with the Payment Card Industry Data Security Standard (PCI DSS).
	</p>
{/snippet}

{#snippet body1()}
	<p>
		PCI DSS is a global security standard created by the major card networks — Visa, Mastercard,
		American Express, Discover, and JCB — that defines the technical and operational requirements
		for any organization that stores, processes, or transmits cardholder data.
	</p>
{/snippet}

{#snippet body2()}
	<p>
		Elixir Pay is validated as a PCI DSS Level 1 Service Provider, the highest level of
		certification, reserved for providers processing the largest volumes of card transactions. Our
		compliance is assessed annually by a Qualified Security Assessor (QSA) and validated through
		an Attestation of Compliance (AOC).
	</p>
{/snippet}

{#snippet body3()}
	<ul>
		<li>Card data is encrypted in transit using TLS and encrypted at rest where retained</li>
		<li>Cardholder data environments are logically segmented from the rest of our infrastructure</li>
		<li>Access to systems that touch card data is restricted and logged on a least-privilege basis</li>
		<li>Systems are continuously scanned for vulnerabilities and penetration tested regularly</li>
	</ul>
{/snippet}

{#snippet body4()}
	<p>
		Wherever possible, raw card numbers are replaced with a non-reversible token immediately at
		the point of entry. Merchants and their systems interact with this token rather than the
		underlying card number, which significantly reduces the scope of card data that ever needs to
		touch a merchant's own systems — and their own PCI DSS obligations as a result.
	</p>
{/snippet}

{#snippet body5()}
	<p>
		Using Elixir Pay's hosted checkout, tokenization, and APIs as intended significantly reduces
		your own PCI DSS scope, since raw card data never needs to touch your servers. If your
		integration captures or stores card data directly rather than through our hosted or tokenized
		flows, you take on additional PCI DSS obligations of your own — our integration team can help
		you choose an approach that minimizes this scope.
	</p>
{/snippet}

{#snippet body6()}
	<p>
		Our PCI DSS compliance is re-validated every year, alongside continuous internal monitoring
		throughout the year. Our current Attestation of Compliance is available to enterprise
		merchants and partners on request through our compliance team.
	</p>
{/snippet}

<LegalLayout
	heroTitle="PCI DSS Compliance"
	heroDescription="Card data deserves the highest bar of protection. Here's how Elixir Pay's infrastructure meets the Payment Card Industry Data Security Standard, and what that means for the businesses we serve."
	{intro}
	sections={[
		{ id: 'what-is-pci-dss', label: '1. What is PCI DSS', body: body1 },
		{ id: 'our-certification', label: '2. Our Certification', body: body2 },
		{ id: 'how-we-protect-card-data', label: '3. How We Protect Card Data', body: body3 },
		{ id: 'tokenization', label: '4. Tokenization', body: body4 },
		{ id: 'merchant-responsibilities', label: '5. Merchant Responsibilities', body: body5 },
		{ id: 'validation', label: '6. Annual Validation', body: body6 }
	]}
/>
