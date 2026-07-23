<script>
	import LegalLayout from '$lib/components/LegalLayout.svelte';
</script>

<svelte:head>
	<title>Refund Policy — ElixirPay</title>
</svelte:head>

{#snippet intro()}
	<h2>Elixirpay's Refund Policy.</h2>
	<p class="effective-date">Effective Date: July 1, 2026</p>
	<hr />

	<p>
		Elixir Pay provides the payment infrastructure that merchants use to accept payments and issue
		refunds — we are not the seller of the underlying goods or services. This Refund Policy
		explains how refunds are processed through our platform and what to do if you believe you're
		owed one.
	</p>
{/snippet}

{#snippet body1()}
	<p>
		If you made a payment to a business using Elixir Pay and are seeking a refund, your first
		point of contact is always that business, since they control the terms of sale, delivery, and
		cancellation. Elixir Pay processes the refund once the merchant authorizes it — we cannot
		issue a refund on a merchant's behalf without their instruction.
	</p>
{/snippet}

{#snippet body2()}
	<p>
		Merchants can issue full or partial refunds directly from their Elixir Pay dashboard or via
		our APIs. Once initiated:
	</p>
	<ul>
		<li>The refunded amount is deducted from the merchant's Elixir Pay balance</li>
		<li>Elixir Pay's original transaction fee is not automatically returned to the merchant</li>
		<li>The customer is notified and the refund is routed back to the original payment method</li>
	</ul>
{/snippet}

{#snippet body3()}
	<p>
		Once a merchant initiates a refund, Elixir Pay submits it to the relevant bank or card network
		immediately. From there, timelines depend on the original payment method and the customer's
		bank:
	</p>
	<ul>
		<li>Cards — typically 5–10 business days to reflect on the customer's statement</li>
		<li>Bank transfers &amp; UPI — typically 1–3 business days</li>
		<li>Wallets — typically 1–5 business days</li>
	</ul>
	<p>
		Elixir Pay is not responsible for delays that occur once a refund has been submitted to a
		receiving bank or network.
	</p>
{/snippet}

{#snippet body4()}
	<p>
		If a payment is debited from a customer's account but the transaction is recorded as failed on
		the merchant's end, the amount is automatically reversed by the bank or card network, typically
		within 5–7 business days. If a customer is charged more than once for what should have been a
		single payment, the merchant can identify and refund the duplicate through their dashboard.
	</p>
{/snippet}

{#snippet body5()}
	<p>
		If a customer disputes a transaction directly with their bank or card issuer rather than the
		merchant, this is treated as a chargeback. Elixir Pay notifies the merchant, collects any
		evidence needed to respond, and submits it to the relevant network on the merchant's behalf
		within the timelines the network requires. The disputed amount, plus any applicable chargeback
		fee, is held from the merchant's balance until the case is resolved.
	</p>
{/snippet}

{#snippet body6()}
	<p>
		Payouts sent to an incorrect or closed bank account are typically returned by the receiving
		bank within 3–7 business days and are automatically credited back to the sender's Elixir Pay
		balance. We recommend verifying beneficiary details before initiating a payout, since Elixir
		Pay cannot guarantee recovery of funds sent to an active, correctly entered account in error.
	</p>
{/snippet}

{#snippet body7()}
	<p>
		Elixir Pay's processing fee on the original transaction is generally non-refundable, as it
		covers costs already incurred with banking partners and card networks at the time of payment.
		Any exceptions are set out in a merchant's specific pricing agreement.
	</p>
{/snippet}

{#snippet body8()}
	<p>
		To request a refund for a purchase, contact the merchant you paid directly — they can see the
		transaction and issue the refund from their dashboard. If you're unable to reach the merchant
		or believe a transaction was unauthorized, contact our support team with your transaction
		reference and we will help you get in touch with the right party.
	</p>
{/snippet}

<LegalLayout
	heroTitle="Refund Policy"
	heroDescription="Elixir Pay is a payments infrastructure provider — refunds for a purchase are issued by the merchant you transacted with. This page explains how refunds, reversals, and disputes flow through our platform."
	{intro}
	sections={[
		{ id: 'overview', label: '1. Overview', body: body1 },
		{ id: 'merchant-refunds', label: '2. Merchant-Initiated Refunds', body: body2 },
		{ id: 'refund-timelines', label: '3. Refund Timelines', body: body3 },
		{ id: 'failed-transactions', label: '4. Failed & Duplicate Transactions', body: body4 },
		{ id: 'chargebacks', label: '5. Chargebacks & Disputes', body: body5 },
		{ id: 'payout-reversals', label: '6. Payout Reversals', body: body6 },
		{ id: 'fees', label: '7. Fees on Refunds', body: body7 },
		{ id: 'contact', label: '8. How to Request a Refund', body: body8 }
	]}
/>
