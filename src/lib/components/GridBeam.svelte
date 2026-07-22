<script>

	import { cn } from '$lib/utils';

	import { Motion } from 'svelte-motion';
 
	let { class: className = '', children } = $props();
</script>
 
<div class={cn('relative h-full w-full bg-grid-black/3', className)}>
<!-- Left beam -->
<svg

		width="195"

		height="78.75"

		viewBox="0 0 195 78.75"

		fill="none"

		xmlns="http://www.w3.org/2000/svg"

		class="absolute top-0 left-0 mt-30 ml-8"
>
<path

			d="M38.75 .625H78.75 M0 .625H40 M77.5 39.375H117.5 M116.25 39.375H156.25 M155 78.125H195 M78.125 40V0 M155.625 78.75V38.75"

			stroke="url(#grad-left)"

			stroke-width={1.5}

		/>
<defs>
<Motion

				variants={{

					initial: { x1: '50%', x2: '60%', y1: '160%', y2: '180%' },

					animate: { x1: '50%', x2: '60%', y1: '-40%', y2: '-20%' }

				}}

				animate="animate"

				initial="initial"

				transition={{

					duration: 2,

					repeat: Infinity,

					repeatType: 'loop',

					ease: 'linear',

					repeatDelay: 0.2

				}}

				isSVG={true}

				let:motion
>
<linearGradient id="grad-left" use:motion>
<stop stop-color="#18CCFC" stop-opacity="0" />
<stop stop-color="#18CCFC" />
<stop offset="0.325" stop-color="#6344F5" />
<stop offset="1" stop-color="#AE48FF" stop-opacity="0" />
</linearGradient>
</Motion>
</defs>
</svg>
 
	<!-- Right beam (mirrored) -->
<svg

		width="195"

		height="78.75"

		viewBox="0 0 195 78.75"

		fill="none"

		xmlns="http://www.w3.org/2000/svg"

		class="absolute top-0 right-0 mt-30 mr-8 -scale-x-100"
>
<path

			d="M38.75 .625H78.75 M0 .625H40 M77.5 39.375H117.5 M116.25 39.375H156.25 M155 78.125H195 M78.125 40V0 M155.625 78.75V38.75"

			stroke="url(#grad-right)"

			stroke-width={1.5}

		/>
<defs>
<Motion

				variants={{

					initial: { x1: '50%', x2: '60%', y1: '100%', y2: '120%' },

					animate: { x1: '50%', x2: '60%', y1: '-20%', y2: '0%' }

				}}

				animate="animate"

				initial="initial"

				transition={{

					duration: 2,

					repeat: Infinity,

					repeatType: 'loop',

					ease: 'linear',

					repeatDelay: 0.2

				}}

				isSVG={true}

				let:motion
>
<linearGradient id="grad-right" use:motion>
<stop stop-color="#18CCFC" stop-opacity="0" />
<stop stop-color="#18CCFC" />
<stop offset="0.325" stop-color="#6344F5" />
<stop offset="1" stop-color="#AE48FF" stop-opacity="0" />
</linearGradient>
</Motion>
</defs>
</svg>
 
	{@render children?.()}
</div>
 