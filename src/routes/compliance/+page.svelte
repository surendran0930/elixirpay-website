<script>
	import LegalLayout from '$lib/components/LegalLayout.svelte';
</script>

<svelte:head>
	<title>Compliance — ElixirPay</title>
</svelte:head>

{#snippet intro()}
	<h2>Elixirpay's Compliance Framework.</h2>
	<p class="effective-date">Effective Date: July 1, 2026</p>
	<hr />

	<p>
		Operating payment infrastructure comes with a responsibility to the regulators, banking
		partners, and businesses who depend on us. This page summarizes the compliance framework we
		maintain to meet that responsibility.
	</p>
{/snippet}

{#snippet body1()}
	<p>
		Our compliance program spans regulatory licensing, anti-money laundering controls, data
		protection, and adherence to payment industry standards. It is reviewed regularly by our
		compliance team and, where applicable, independently audited.
	</p>
{/snippet}

{#snippet body2()}
	<p>
		Elixir Pay holds the licenses and registrations required to operate as a payment service
		provider in the jurisdictions we serve, and works under the oversight of the relevant
		financial regulators and banking partners in each of those jurisdictions.
	</p>
{/snippet}

{#snippet body3()}
	<p>
		Every merchant is verified through a Know Your Business (KYB) process before onboarding,
		covering business registration, beneficial ownership, and authorized signatories. Individual
		customers may be subject to Know Your Customer (KYC) checks where required by the nature of
		the transaction or applicable regulation.
	</p>
{/snippet}

{#snippet body4()}
	<ul>
		<li>Transaction monitoring designed to detect patterns consistent with money laundering</li>
		<li>Enhanced due diligence for higher-risk merchant categories and transaction patterns</li>
		<li>Mandatory reporting of suspicious activity to the relevant financial intelligence unit</li>
		<li>Regular staff training on AML obligations and red flags</li>
	</ul>
{/snippet}

{#snippet body5()}
	<p>
		We screen merchants and transactions against applicable global sanctions and watchlists at
		onboarding and on an ongoing basis. Accounts matching a sanctioned party are restricted and
		reported in line with our legal obligations.
	</p>
{/snippet}

{#snippet body6()}
	<p>
		Our handling of personal information is designed to align with applicable data protection
		law, including principles of data minimization, purpose limitation, and secure storage. See
		our <a href="/privacy" class="text-blue-600 hover:underline">Privacy Policy</a> for full details
		on how we collect, use, and protect personal data.
	</p>
{/snippet}

{#snippet body7()}
	<p>
		Beyond regulatory requirements, we align our practices with recognized payment industry
		standards, including PCI DSS for handling of card data. See our
		<a href="/pci-dss" class="text-blue-600 hover:underline">PCI DSS Compliance</a> page for details
		specific to card data security.
	</p>
{/snippet}

{#snippet body8()}
	<p>
		Compliance is not a one-time checkbox — our program includes periodic re-verification of
		merchants, continuous transaction monitoring, and regular internal and external reviews to
		ensure our controls keep pace with our growth and with evolving regulation.
	</p>
{/snippet}

<LegalLayout
	heroTitle="Compliance"
	heroDescription="Elixir Pay operates within a framework of financial regulation, industry standards, and internal controls designed to keep our platform trustworthy for every business that relies on it."
	{intro}
	sections={[
		{ id: 'overview', label: '1. Overview', body: body1 },
		{ id: 'regulatory-standing', label: '2. Regulatory Standing', body: body2 },
		{ id: 'kyc-kyb', label: '3. KYC & KYB Verification', body: body3 },
		{ id: 'aml', label: '4. Anti-Money Laundering (AML)', body: body4 },
		{ id: 'sanctions', label: '5. Sanctions Screening', body: body5 },
		{ id: 'data-protection', label: '6. Data Protection Compliance', body: body6 },
		{ id: 'industry-standards', label: '7. Industry Standards', body: body7 },
		{ id: 'ongoing-monitoring', label: '8. Ongoing Monitoring', body: body8 }
	]}
/>
