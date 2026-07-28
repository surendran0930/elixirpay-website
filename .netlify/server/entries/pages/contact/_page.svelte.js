import { a as attr, c as attr_class, h as stringify, d as derived, F as FILENAME, i as head, e as escape_html, b as ensure_array_like, p as prevent_snippet_stringification } from "../../../chunks/index.js";
import { p as push_element, a as pop_element } from "../../../chunks/dev.js";
import "@emailjs/browser";
Button[FILENAME] = "src/lib/components/Button.svelte";
function Button($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      let {
        color = "blue",
        variant = "solid",
        disabled = false,
        loading = false,
        type = "button",
        children
      } = $$props;
      const solidMap = {
        neutral: "bg-gray-900 hover:bg-gray-800 active:bg-black text-white",
        blue: "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white",
        green: "bg-green-600 hover:bg-green-700 active:bg-green-800 text-white",
        amber: "bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white",
        red: "bg-red-500 hover:bg-red-600 active:bg-red-700 text-white",
        orange: "bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white"
      };
      const outlineMap = {
        neutral: "border border-gray-300 hover:bg-gray-50 active:bg-gray-100 text-gray-900",
        blue: "border border-blue-500 hover:bg-blue-50 active:bg-blue-100 text-blue-500",
        green: "border border-green-600 hover:bg-green-50 active:bg-green-100 text-green-700",
        amber: "border border-amber-500 hover:bg-amber-50 active:bg-amber-100 text-amber-700",
        red: "border border-red-500 hover:bg-red-50 active:bg-red-100 text-red-600",
        orange: "border border-orange-500 hover:bg-orange-50 active:bg-orange-100 text-orange-700"
      };
      let classes = derived(() => variant === "solid" ? solidMap[color] : outlineMap[color]);
      $$renderer2.push(`<button${attr("type", type)}${attr("disabled", disabled || loading, true)}${attr_class(`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-mono font-medium text-para-14 transition-colors disabled:cursor-not-allowed disabled:opacity-40 sm:px-6 sm:py-3 sm:text-para-16 ${stringify(classes())}`)}>`);
      push_element($$renderer2, "button", 47, 0);
      if (loading) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<span class="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent">`);
        push_element($$renderer2, "span", 56, 2);
        $$renderer2.push(`</span>`);
        pop_element();
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> `);
      children?.($$renderer2);
      $$renderer2.push(`<!----></button>`);
      pop_element();
    },
    Button
  );
}
Button.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
_page[FILENAME] = "src/routes/contact/+page.svelte";
function _page($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      const sealLogo = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/contact%20us/stamp.svg";
      const mailIcon = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/contact%20us/mail-01.2%201.svg";
      const callIcon = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/contact%20us/phone-call-01.2%202.svg";
      const stats = [
        { target: 99.95, decimals: 2, suffix: "%", label: "Uptime" },
        { target: 2, prefix: "T+", label: "Settlements" },
        { target: 24, suffix: "*7", label: "Support" }
      ];
      let statValues = stats.map(() => 0);
      const howYouKnowOptions = [
        "Search Engine",
        "Social Media",
        "Referral",
        "Advertisement",
        "Other"
      ];
      let fullName = "";
      let email = "";
      let mobile = "";
      let source = "";
      let message = "";
      let errors = {};
      let isSubmitting = false;
      head("1bv7ezn", $$renderer2, ($$renderer3) => {
        $$renderer3.title(($$renderer4) => {
          $$renderer4.push(`<title>Contact Us — ElixirPay</title>`);
        });
      });
      $$renderer2.push(`<section class="bg-[#FAFAFA] pb-16 pt-[100px] md:pb-24 md:pt-[132px]">`);
      push_element($$renderer2, "section", 161, 0);
      $$renderer2.push(`<div class="mx-auto max-w-[1920px] px-4 md:px-[120px]">`);
      push_element($$renderer2, "div", 162, 1);
      $$renderer2.push(`<div class="overflow-hidden border border-gray-300 bg-[#FAFAFA]">`);
      push_element($$renderer2, "div", 163, 2);
      $$renderer2.push(`<div class="grid gap-12 p-8 md:grid-cols-2 md:gap-16 md:px-16 md:py-12">`);
      push_element($$renderer2, "div", 164, 3);
      $$renderer2.push(`<div>`);
      push_element($$renderer2, "div", 166, 4);
      $$renderer2.push(`<h1 class="text-web-32 font-bold text-gray-900 md:text-web-40">`);
      push_element($$renderer2, "h1", 167, 5);
      $$renderer2.push(`Talk to our team</h1>`);
      pop_element();
      $$renderer2.push(` <p class="mt-6 text-para-18 text-gray-600">`);
      push_element($$renderer2, "p", 168, 5);
      $$renderer2.push(`If your business handles high-volume transactions, needs faster settlements, or is
						looking for a reliable payment gateway you can trust, our team is here to guide you.</p>`);
      pop_element();
      $$renderer2.push(` <p class="mt-4 text-para-18 text-gray-600">`);
      push_element($$renderer2, "p", 172, 5);
      $$renderer2.push(`Send us your details, and we'll connect with you to discuss how ElixirPay can support
						your growth.</p>`);
      pop_element();
      $$renderer2.push(` <div class="mt-10 flex flex-col gap-4 xl:flex-row">`);
      push_element($$renderer2, "div", 177, 5);
      $$renderer2.push(`<div class="flex items-start gap-3 border border-gray-300 bg-gray-100 px-5 py-4">`);
      push_element($$renderer2, "div", 178, 6);
      $$renderer2.push(`<span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">`);
      push_element($$renderer2, "span", 179, 7);
      $$renderer2.push(`<img${attr("src", mailIcon)} alt="" class="h-5 w-5"/>`);
      push_element($$renderer2, "img", 180, 8);
      pop_element();
      $$renderer2.push(`</span>`);
      pop_element();
      $$renderer2.push(` <div>`);
      push_element($$renderer2, "div", 182, 7);
      $$renderer2.push(`<p class="whitespace-nowrap text-para-14 text-gray-500">`);
      push_element($$renderer2, "p", 183, 8);
      $$renderer2.push(`Business Enquiry</p>`);
      pop_element();
      $$renderer2.push(` <p class="whitespace-nowrap font-semibold text-gray-900">`);
      push_element($$renderer2, "p", 184, 8);
      $$renderer2.push(`onboarding@elixirpay.com</p>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div class="flex items-start gap-3 border border-gray-300 bg-gray-100 px-5 py-4">`);
      push_element($$renderer2, "div", 187, 6);
      $$renderer2.push(`<span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">`);
      push_element($$renderer2, "span", 188, 7);
      $$renderer2.push(`<img${attr("src", callIcon)} alt="" class="h-5 w-5"/>`);
      push_element($$renderer2, "img", 189, 8);
      pop_element();
      $$renderer2.push(`</span>`);
      pop_element();
      $$renderer2.push(` <div>`);
      push_element($$renderer2, "div", 191, 7);
      $$renderer2.push(`<p class="whitespace-nowrap text-para-14 text-gray-500">`);
      push_element($$renderer2, "p", 192, 8);
      $$renderer2.push(`Contact Info</p>`);
      pop_element();
      $$renderer2.push(` <p class="whitespace-nowrap font-semibold text-gray-900">`);
      push_element($$renderer2, "p", 193, 8);
      $$renderer2.push(`+91 9484 04040</p>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div class="relative">`);
      push_element($$renderer2, "div", 200, 4);
      $$renderer2.push(`<img${attr("src", sealLogo)} alt="" class="pointer-events-none absolute -right-8 -top-20 z-10 hidden h-48 w-48 drop-shadow-lg lg:block lg:-right-12"/>`);
      push_element($$renderer2, "img", 201, 5);
      pop_element();
      $$renderer2.push(` <div class="overflow-hidden rounded-2xl bg-white shadow-xl">`);
      push_element($$renderer2, "div", 207, 5);
      $$renderer2.push(`<div class="border-b border-gray-200 px-6 py-4">`);
      push_element($$renderer2, "div", 208, 6);
      $$renderer2.push(`<p class="font-mono text-para-14 font-semibold uppercase tracking-widest text-gray-400">`);
      push_element($$renderer2, "p", 209, 7);
      $$renderer2.push(`Tell us how we can help</p>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <form class="space-y-4 p-6" novalidate="">`);
      push_element($$renderer2, "form", 214, 6);
      $$renderer2.push(`<label class="block">`);
      push_element($$renderer2, "label", 215, 7);
      $$renderer2.push(`<span class="text-para-16 font-semibold text-gray-900">`);
      push_element($$renderer2, "span", 216, 8);
      $$renderer2.push(`Full name</span>`);
      pop_element();
      $$renderer2.push(` <input type="text" name="fullName" placeholder="Enter your name"${attr("value", fullName)}${attr("disabled", isSubmitting, true)}${attr("aria-invalid", errors.fullName ? "true" : void 0)}${attr("aria-describedby", errors.fullName ? "contact-fullName-error" : void 0)}${attr_class(`mt-2 w-full rounded-lg border bg-gray-100 px-4 py-2.5 text-para-16 text-gray-900 placeholder-gray-400 outline-none focus:border-blue-400 disabled:opacity-60 ${errors.fullName ? "border-red-400" : "border-gray-200"}`)}/>`);
      push_element($$renderer2, "input", 217, 8);
      pop_element();
      $$renderer2.push(` `);
      if (errors.fullName) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<p id="contact-fullName-error" role="alert" class="mt-1.5 text-para-14 text-red-500">`);
        push_element($$renderer2, "p", 230, 9);
        $$renderer2.push(`${escape_html(errors.fullName)}</p>`);
        pop_element();
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></label>`);
      pop_element();
      $$renderer2.push(` <label class="block">`);
      push_element($$renderer2, "label", 236, 7);
      $$renderer2.push(`<span class="text-para-16 font-semibold text-gray-900">`);
      push_element($$renderer2, "span", 237, 8);
      $$renderer2.push(`Email ID</span>`);
      pop_element();
      $$renderer2.push(` <input type="email" name="email" placeholder="Enter your email"${attr("value", email)}${attr("disabled", isSubmitting, true)}${attr("aria-invalid", errors.email ? "true" : void 0)}${attr("aria-describedby", errors.email ? "contact-email-error" : void 0)}${attr_class(`mt-2 w-full rounded-lg border bg-gray-100 px-4 py-2.5 text-para-16 text-gray-900 placeholder-gray-400 outline-none focus:border-blue-400 disabled:opacity-60 ${errors.email ? "border-red-400" : "border-gray-200"}`)}/>`);
      push_element($$renderer2, "input", 238, 8);
      pop_element();
      $$renderer2.push(` `);
      if (errors.email) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<p id="contact-email-error" role="alert" class="mt-1.5 text-para-14 text-red-500">`);
        push_element($$renderer2, "p", 251, 9);
        $$renderer2.push(`${escape_html(errors.email)}</p>`);
        pop_element();
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></label>`);
      pop_element();
      $$renderer2.push(` <label class="block">`);
      push_element($$renderer2, "label", 257, 7);
      $$renderer2.push(`<span class="text-para-16 font-semibold text-gray-900">`);
      push_element($$renderer2, "span", 258, 8);
      $$renderer2.push(`Mobile number</span>`);
      pop_element();
      $$renderer2.push(` <input type="tel" name="mobile" placeholder="Enter your number"${attr("value", mobile)}${attr("disabled", isSubmitting, true)}${attr("aria-invalid", errors.mobile ? "true" : void 0)}${attr("aria-describedby", errors.mobile ? "contact-mobile-error" : void 0)}${attr_class(`mt-2 w-full rounded-lg border bg-gray-100 px-4 py-2.5 text-para-16 text-gray-900 placeholder-gray-400 outline-none focus:border-blue-400 disabled:opacity-60 ${errors.mobile ? "border-red-400" : "border-gray-200"}`)}/>`);
      push_element($$renderer2, "input", 259, 8);
      pop_element();
      $$renderer2.push(` `);
      if (errors.mobile) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<p id="contact-mobile-error" role="alert" class="mt-1.5 text-para-14 text-red-500">`);
        push_element($$renderer2, "p", 272, 9);
        $$renderer2.push(`${escape_html(errors.mobile)}</p>`);
        pop_element();
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></label>`);
      pop_element();
      $$renderer2.push(` <label class="block">`);
      push_element($$renderer2, "label", 278, 7);
      $$renderer2.push(`<span class="text-para-16 font-semibold text-gray-900">`);
      push_element($$renderer2, "span", 279, 8);
      $$renderer2.push(`How you came to know us?</span>`);
      pop_element();
      $$renderer2.push(` <div class="relative mt-2">`);
      push_element($$renderer2, "div", 283, 8);
      $$renderer2.select(
        {
          name: "source",
          value: source,
          disabled: isSubmitting,
          "aria-invalid": errors.source ? "true" : void 0,
          "aria-describedby": errors.source ? "contact-source-error" : void 0,
          class: `w-full appearance-none rounded-lg border bg-gray-100 px-4 py-2.5 pr-10 text-para-16 text-gray-500 outline-none focus:border-blue-400 disabled:opacity-60 ${errors.source ? "border-red-400" : "border-gray-200"}`
        },
        ($$renderer3) => {
          $$renderer3.option({ value: "", disabled: true }, ($$renderer4) => {
            push_element($$renderer4, "option", 294, 10);
            $$renderer4.push(`Select Here`);
            pop_element();
          });
          $$renderer3.push(`<!--[-->`);
          const each_array = ensure_array_like(howYouKnowOptions);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let option = each_array[$$index];
            $$renderer3.option({ value: option }, ($$renderer4) => {
              push_element($$renderer4, "option", 296, 11);
              $$renderer4.push(`${escape_html(option)}`);
              pop_element();
            });
          }
          $$renderer3.push(`<!--]-->`);
        }
      );
      $$renderer2.push(` <svg class="pointer-events-none absolute right-5 top-1/2 h-3 w-3 -translate-y-1/2 text-gray-500" viewBox="0 0 12 8" fill="none">`);
      push_element($$renderer2, "svg", 299, 9);
      $$renderer2.push(`<path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">`);
      push_element($$renderer2, "path", 304, 10);
      $$renderer2.push(`</path>`);
      pop_element();
      $$renderer2.push(`</svg>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` `);
      if (errors.source) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<p id="contact-source-error" role="alert" class="mt-1.5 text-para-14 text-red-500">`);
        push_element($$renderer2, "p", 314, 9);
        $$renderer2.push(`${escape_html(errors.source)}</p>`);
        pop_element();
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></label>`);
      pop_element();
      $$renderer2.push(` <label class="block">`);
      push_element($$renderer2, "label", 320, 7);
      $$renderer2.push(`<span class="text-para-16 font-semibold text-gray-900">`);
      push_element($$renderer2, "span", 321, 8);
      $$renderer2.push(`How can we Help</span>`);
      pop_element();
      $$renderer2.push(` <textarea name="message" rows="3" placeholder="Enter Here"${attr("disabled", isSubmitting, true)}${attr("aria-invalid", errors.message ? "true" : void 0)}${attr("aria-describedby", errors.message ? "contact-message-error" : void 0)}${attr_class(`mt-2 w-full resize-none rounded-lg border bg-gray-100 px-4 py-2.5 text-para-16 text-gray-900 placeholder-gray-400 outline-none focus:border-blue-400 disabled:opacity-60 ${errors.message ? "border-red-400" : "border-gray-200"}`)}>`);
      push_element($$renderer2, "textarea", 322, 8);
      const $$body = escape_html(message);
      if ($$body) {
        $$renderer2.push(`${$$body}`);
      }
      $$renderer2.push(`</textarea>`);
      pop_element();
      $$renderer2.push(` `);
      if (errors.message) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<p id="contact-message-error" role="alert" class="mt-1.5 text-para-14 text-red-500">`);
        push_element($$renderer2, "p", 335, 9);
        $$renderer2.push(`${escape_html(errors.message)}</p>`);
        pop_element();
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></label>`);
      pop_element();
      $$renderer2.push(` `);
      {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <div class="flex flex-col-reverse items-start gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">`);
      push_element($$renderer2, "div", 353, 7);
      $$renderer2.push(`<p class="text-para-14 text-gray-500">`);
      push_element($$renderer2, "p", 354, 8);
      $$renderer2.push(`You can also mail us to <span class="font-semibold text-gray-900">`);
      push_element($$renderer2, "span", 355, 33);
      $$renderer2.push(`info@elixirpay.com</span>`);
      pop_element();
      $$renderer2.push(`</p>`);
      pop_element();
      $$renderer2.push(` `);
      Button($$renderer2, {
        type: "submit",
        color: "neutral",
        variant: "solid",
        loading: isSubmitting,
        children: prevent_snippet_stringification(($$renderer3) => {
          $$renderer3.push(`<!---->${escape_html("Send message")}`);
        })
      });
      $$renderer2.push(`<!----></div>`);
      pop_element();
      $$renderer2.push(`</form>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div class="grid grid-cols-1 border-t border-gray-300 sm:grid-cols-3">`);
      push_element($$renderer2, "div", 367, 3);
      $$renderer2.push(`<!--[-->`);
      const each_array_1 = ensure_array_like(stats);
      for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
        let stat = each_array_1[i];
        $$renderer2.push(`<div class="border-b border-gray-300 px-6 py-8 last:border-b-0 sm:border-b-0 sm:border-r sm:border-gray-300 sm:px-[120px] sm:last:border-r-0">`);
        push_element($$renderer2, "div", 369, 5);
        $$renderer2.push(`<p class="text-web-28 font-bold tabular-nums text-gray-900">`);
        push_element($$renderer2, "p", 370, 6);
        $$renderer2.push(`${escape_html(stat.prefix ?? "")}${escape_html(statValues[i].toFixed(stat.decimals ?? 0))}${escape_html(stat.suffix ?? "")}</p>`);
        pop_element();
        $$renderer2.push(` <p class="mt-1 text-para-18 text-gray-500">`);
        push_element($$renderer2, "p", 373, 6);
        $$renderer2.push(`${escape_html(stat.label)}</p>`);
        pop_element();
        $$renderer2.push(`</div>`);
        pop_element();
      }
      $$renderer2.push(`<!--]--></div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
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
