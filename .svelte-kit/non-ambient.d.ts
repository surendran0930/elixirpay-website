
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/about" | "/blog" | "/careers" | "/compliance" | "/contact" | "/cookies" | "/industries" | "/pci-dss" | "/privacy" | "/products" | "/refund" | "/responsible-disclosure" | "/security" | "/solutions" | "/terms";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/blog": Record<string, never>;
			"/careers": Record<string, never>;
			"/compliance": Record<string, never>;
			"/contact": Record<string, never>;
			"/cookies": Record<string, never>;
			"/industries": Record<string, never>;
			"/pci-dss": Record<string, never>;
			"/privacy": Record<string, never>;
			"/products": Record<string, never>;
			"/refund": Record<string, never>;
			"/responsible-disclosure": Record<string, never>;
			"/security": Record<string, never>;
			"/solutions": Record<string, never>;
			"/terms": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/blog" | "/careers" | "/compliance" | "/contact" | "/cookies" | "/industries" | "/pci-dss" | "/privacy" | "/products" | "/refund" | "/responsible-disclosure" | "/security" | "/solutions" | "/terms";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): string & {};
	}
}