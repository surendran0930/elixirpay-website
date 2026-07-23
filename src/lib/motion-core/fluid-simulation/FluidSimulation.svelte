<script lang="ts">
	import Scene from "./FluidSimulationScene.svelte";
	import { cn } from "../utils/cn";
	import type { ComponentProps } from "svelte";

	type SceneProps = ComponentProps<typeof Scene>;

	interface Props {
		/**
		 * Additional CSS classes for the container.
		 */
		class?: string;
		/**
		 * Dissipation factor for the fluid.
		 * @default 0.96
		 */
		dissipation?: SceneProps["dissipation"];
		/**
		 * Radius of the pointer influence.
		 * @default 0.005
		 */
		pointerSize?: SceneProps["pointerSize"];
		/**
		 * Fluid splat color.
		 * @default "#8ec9ff"
		 */
		color?: SceneProps["color"];
		/**
		 * Fluid velocity dissipation.
		 * @default 0.96
		 */
		velocityDissipation?: SceneProps["velocityDissipation"];
		/**
		 * Pressure iterations. More iterations = more accurate but slower.
		 * @default 10
		 */
		pressureIterations?: SceneProps["pressureIterations"];
		/**
		 * How strongly pointer movement is converted into fluid force. Lower
		 * values give a calmer, more subdued effect.
		 * @default 1.5
		 */
		forceScale?: SceneProps["forceScale"];

		[key: string]: unknown;
	}

	let {
		class: className = "",
		dissipation = 0.950,
		pointerSize = 0.00016,
		color = "#8ec9ff",
		velocityDissipation = 0.96,
		pressureIterations = 10,
		forceScale = 1.5,
		...rest
	}: Props = $props();
</script>

<div class={cn("relative h-full w-full overflow-hidden", className)} {...rest}>
	<div class="absolute inset-0 z-0">
		<Scene
			{dissipation}
			{pointerSize}
			{color}
			{velocityDissipation}
			{pressureIterations}
			{forceScale}
		/>
	</div>
</div>
