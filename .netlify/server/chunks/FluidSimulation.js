import { ae as attributes, ad as clsx$1 } from "./index.js";
import { clsx } from "clsx";
import { Vec2, Vec3 } from "ogl";
import { twMerge } from "tailwind-merge";
function FluidSimulationScene($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    new Vec2();
    new Vec3();
    $$renderer2.push(`<canvas class="absolute inset-0 block h-full w-full" style="width:100%;height:100%;" aria-hidden="true"></canvas>`);
  });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function FluidSimulation($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      class: className = "",
      dissipation = 0.95,
      pointerSize = 3e-4,
      color = "#8ec9ff",
      velocityDissipation = 0.96,
      pressureIterations = 10,
      $$slots,
      $$events,
      ...rest
    } = $$props;
    $$renderer2.push(`<div${attributes({
      class: clsx$1(cn("relative h-full w-full overflow-hidden", className)),
      ...rest
    })}><div class="absolute inset-0 z-0">`);
    FluidSimulationScene($$renderer2);
    $$renderer2.push(`<!----></div></div>`);
  });
}
export {
  FluidSimulation as F
};
