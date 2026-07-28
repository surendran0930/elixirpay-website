import { i as head, F as FILENAME } from "../../../chunks/index.js";
import { p as push_element, a as pop_element } from "../../../chunks/dev.js";
_page[FILENAME] = "src/routes/careers/+page.svelte";
function _page($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      head("1thlcsk", $$renderer2, ($$renderer3) => {
        $$renderer3.title(($$renderer4) => {
          $$renderer4.push(`<title>Careers — ElixirPay</title>`);
        });
      });
      $$renderer2.push(`<section class="container-page py-24">`);
      push_element($$renderer2, "section", 5, 0);
      $$renderer2.push(`<h1 class="text-4xl font-bold">`);
      push_element($$renderer2, "h1", 6, 1);
      $$renderer2.push(`Careers</h1>`);
      pop_element();
      $$renderer2.push(`</section>`);
      pop_element();
    },
    _page
  );
}
_page.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
export {
  _page as default
};
