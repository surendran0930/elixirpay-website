// Module-level (not component-level) flag — this file is only ever
// evaluated once per real page load. Client-side SvelteKit navigation
// remounts +page.svelte/PageLoader instances without re-running this
// module, so the flag survives "navigate away and back to Home" and
// correctly suppresses a repeat showing. A hard reload or a fresh visit
// re-evaluates every module from scratch, resetting it to false again —
// which is exactly "first time or reload" per the request.
export let hasShownLoader = false;

export function markLoaderShown() {
	hasShownLoader = true;
}
