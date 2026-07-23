<script lang="ts">
    import { cn } from '$lib/utils';
    import { Motion } from 'svelte-motion';
    import type { Snippet } from 'svelte';
 
    interface Props {
        class?: string;
        children?: Snippet;
    }
 
    let { class: className = '', children }: Props = $props();
</script>
 
<div class={cn('relative h-full w-full overflow-hidden bg-grid-white/5', className)}>
    <!-- Left beam -->
    <svg
        viewBox="0 0 195 78.75"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute top-32 right-3/4 h-[calc(100%-8rem)] w-[416px] sm:w-[520px] lg:w-[624px]"
    >
        <path
            d="M38.75 .625H78.75 M0 .625H40 M77.5 39.375H117.5 M116.25 39.375H156.25 M155 78.125H195 M78.125 40V0 M155.625 78.75V38.75"
            stroke="url(#grad-left)"
            stroke-width={3.5}
            vector-effect="non-scaling-stroke"
        />
        <defs>
            <Motion
                variants={{
                    initial: { x1: '50%', x2: '60%', y1: '140%', y2: '160%' },
                    animate: { x1: '50%', x2: '60%', y1: '-40%', y2: '-20%' }
                }}
                animate="animate"
                initial="initial"
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'linear',
                    repeatDelay: 0
                }}
                isSVG={true}
                let:motion
            >
                <linearGradient id="grad-left" use:motion>
                    <stop stop-color="#BAE6FD" stop-opacity="0" />
                    <stop stop-color="#BAE6FD" />
                    <stop offset="0.325" stop-color="#38BDF8" />
                    <stop offset="1" stop-color="#1E3A8A" stop-opacity="0" />
                </linearGradient>
            </Motion>
        </defs>
    </svg>
 
    <!-- Right beam (mirrored) -->
    <svg
        viewBox="0 0 195 78.75"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute top-32 left-3/4 h-[calc(100%-8rem)] w-[416px] -scale-x-100 sm:w-[520px] lg:w-[624px]"
    >
        <path
            d="M38.75 .625H78.75 M0 .625H40 M77.5 39.375H117.5 M116.25 39.375H156.25 M155 78.125H195 M78.125 40V0 M155.625 78.75V38.75"
            stroke="url(#grad-right)"
            stroke-width={3.5}
            vector-effect="non-scaling-stroke"
        />
        <defs>
            <Motion
                variants={{
                    initial: { x1: '50%', x2: '60%', y1: '140%', y2: '160%' },
                    animate: { x1: '50%', x2: '60%', y1: '-40%', y2: '-20%' }
                }}
                animate="animate"
                initial="initial"
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'linear',
                    repeatDelay: 0
                }}
                isSVG={true}
                let:motion
            >
                <linearGradient id="grad-right" use:motion>
                    <stop stop-color="#BAE6FD" stop-opacity="0" />
                    <stop stop-color="#BAE6FD" />
                    <stop offset="0.325" stop-color="#38BDF8" />
                    <stop offset="1" stop-color="#1E3A8A" stop-opacity="0" />
                </linearGradient>
            </Motion>
        </defs>
    </svg>
 
    {@render children?.()}
</div>