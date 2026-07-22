import { ae as head } from "../../../chunks/index.js";
import { B as Button } from "../../../chunks/Button.js";
function _page($$renderer) {
  head("1bv7ezn", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Contact Us — ElixirPay</title>`);
    });
  });
  $$renderer.push(`<section class="container-page py-24 max-w-xl"><h1 class="mb-8">Contact Us</h1> <form class="space-y-4"><input type="text" placeholder="Name" class="w-full border border-gray-300 rounded-lg p-3 text-para-16"/> <input type="email" placeholder="Email" class="w-full border border-gray-300 rounded-lg p-3 text-para-16"/> <input type="text" placeholder="Company" class="w-full border border-gray-300 rounded-lg p-3 text-para-16"/> <textarea placeholder="Message" class="w-full border border-gray-300 rounded-lg p-3 text-para-16" rows="4"></textarea> `);
  Button($$renderer, {
    type: "submit",
    color: "blue",
    variant: "solid",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Send`);
    }
  });
  $$renderer.push(`<!----></form></section>`);
}
export {
  _page as default
};
