<script>
	import LegalLayout from '$lib/components/LegalLayout.svelte';
</script>

<svelte:head>
	<title>Terms & Conditions — ElixirPay</title>
</svelte:head>

{#snippet intro()}
	<h2>Elixirpay's Terms & Conditions.</h2>
	<p class="effective-date">Effective Date: July 1, 2026</p>
	<hr />

	<p>
		These Terms & Conditions ("Terms") form a binding agreement between you ("Merchant", "you")
		and Elixir Pay ("Elixir Pay", "we", "us") governing your use of our payment gateway, payouts,
		reconciliation, and other services (together, the "Services").
	</p>
	<p>
		By creating an account, integrating our APIs, or otherwise using the Services, you agree to be
		bound by these Terms, our Privacy Policy, and any product-specific terms referenced within
		them.
	</p>
{/snippet}

{#snippet body1()}
	<p>
		If you are entering into these Terms on behalf of a business, you confirm that you have the
		authority to bind that business, and "you" refers to that business. If you do not agree with
		any part of these Terms, you must not use the Services.
	</p>
{/snippet}

{#snippet body2()}
	<p>To use the Services, your business must:</p>
	<ul>
		<li>Be a legally registered entity in good standing in its jurisdiction of operation</li>
		<li>Complete our Know Your Business (KYB) and Know Your Customer (KYC) verification</li>
		<li>Provide accurate, current, and complete registration information</li>
		<li>Operate in a business category permitted under our Acceptable Use Policy</li>
	</ul>
	<p>
		You are responsible for maintaining the confidentiality of your account credentials and API
		keys, and for all activity that occurs under your account.
	</p>
{/snippet}

{#snippet body3()}
	<p>
		Elixir Pay grants you a limited, non-exclusive, non-transferable right to access and use the
		Services solely to accept payments, disburse payouts, and manage the financial operations of
		your own business. This includes access to:
	</p>
	<ul>
		<li>Payment Gateway, Hosted Checkout, Payment Links, and QR Payments</li>
		<li>Invoices and Subscriptions</li>
		<li>Payouts, Virtual Accounts, and Smart Collect</li>
		<li>Reconciliation, Tokenization, and White Label Solutions</li>
	</ul>
	<p>
		You may not resell, sublicense, or provide the Services to a third party as if they were your
		own, except where you have signed a separate agreement with us covering White Label
		Solutions.
	</p>
{/snippet}

{#snippet body4()}
	<p>As a merchant using Elixir Pay, you agree to:</p>
	<ul>
		<li>Provide accurate transaction, product, and refund information to your customers</li>
		<li>Comply with applicable consumer protection, tax, and data protection laws</li>
		<li>Maintain reasonable security over any integration keys, webhooks, and credentials</li>
		<li>Cooperate with any fraud, dispute, or compliance investigation we are required to run</li>
	</ul>
{/snippet}

{#snippet body5()}
	<p>
		Fees for the Services are set out in your pricing schedule or order form. Unless stated
		otherwise, transaction fees are deducted before settlement, and settlements are made to your
		registered bank account on the cadence agreed at onboarding. We may withhold or delay
		settlement where a transaction is flagged for fraud review, dispute, or compliance
		verification.
	</p>
{/snippet}

{#snippet body6()}
	<p>You may not use the Services to process payments for, or in connection with:</p>
	<ul>
		<li>Illegal goods, services, or activities under applicable law</li>
		<li>Fraudulent, deceptive, or misleading business practices</li>
		<li>Businesses on our restricted or prohibited categories list</li>
		<li>Any activity that circumvents our fraud, KYC, or sanctions screening controls</li>
	</ul>
	<p>Violation of this section may result in immediate suspension or termination of your account.</p>
{/snippet}

{#snippet body7()}
	<p>
		Elixir Pay retains all rights, title, and interest in and to the Services, including our
		software, APIs, SDKs, documentation, and trademarks. Nothing in these Terms transfers any
		intellectual property rights to you, other than the limited right to use the Services as
		described above.
	</p>
{/snippet}

{#snippet body8()}
	<p>
		We may suspend or terminate your access to the Services if you breach these Terms, pose a
		fraud or compliance risk, or where required by a regulator or banking partner. You may
		terminate your account at any time, subject to settlement of any outstanding transactions,
		fees, or disputes. Sections of these Terms that by their nature should survive termination —
		including liability, indemnification, and governing law — will continue to apply.
	</p>
{/snippet}

{#snippet body9()}
	<p>
		To the maximum extent permitted by law, Elixir Pay will not be liable for indirect,
		incidental, or consequential damages arising from your use of the Services. Our total
		liability for any claim arising under these Terms is limited to the fees you paid to us in
		the three months preceding the event giving rise to the claim.
	</p>
{/snippet}

{#snippet body10()}
	<p>
		You agree to indemnify and hold Elixir Pay harmless from any claims, losses, or expenses
		arising from your use of the Services, your breach of these Terms, or your violation of
		applicable law or a third party's rights.
	</p>
{/snippet}

{#snippet body11()}
	<p>
		These Terms are governed by the laws of the jurisdiction in which Elixir Pay is incorporated,
		without regard to conflict-of-law principles. Any disputes will be subject to the exclusive
		jurisdiction of the courts of that jurisdiction, unless otherwise required by applicable law.
	</p>
{/snippet}

{#snippet body12()}
	<p>
		If any provision of these Terms is held invalid or unenforceable, that provision will be
		limited or eliminated to the minimum extent necessary, and the remaining provisions will
		remain in full force and effect.
	</p>
{/snippet}

{#snippet body13()}
	<p>
		We may update these Terms from time to time. Continued use of the Services after an update
		takes effect constitutes acceptance of the revised Terms. Where changes are material, we will
		provide notice through your dashboard or by email.
	</p>
{/snippet}

<LegalLayout
	heroTitle="Terms & Conditions"
	heroDescription="These Terms govern your access to and use of Elixir Pay's products and services. Please read them carefully before creating an account or integrating with our platform."
	{intro}
	sections={[
		{ id: 'acceptance', label: '1. Acceptance of Terms', body: body1 },
		{ id: 'eligibility', label: '2. Eligibility & Account Registration', body: body2 },
		{ id: 'use-of-services', label: '3. Use of Our Services', body: body3 },
		{ id: 'merchant-obligations', label: '4. Merchant Obligations', body: body4 },
		{ id: 'fees-settlement', label: '5. Fees & Settlement', body: body5 },
		{ id: 'prohibited-activities', label: '6. Prohibited Activities', body: body6 },
		{ id: 'intellectual-property', label: '7. Intellectual Property', body: body7 },
		{ id: 'suspension-termination', label: '8. Suspension & Termination', body: body8 },
		{ id: 'liability', label: '9. Limitation of Liability', body: body9 },
		{ id: 'indemnification', label: '10. Indemnification', body: body10 },
		{ id: 'governing-law', label: '11. Governing Law', body: body11 },
		{ id: 'severability', label: '12. Severability', body: body12 },
		{ id: 'amendment', label: '13. Amendment', body: body13 }
	]}
/>
