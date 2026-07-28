import { a as attr, b as ensure_array_like, e as escape_html, F as FILENAME, d as derived, s as store_get, u as unsubscribe_stores } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import { S as SiteNav } from "../../chunks/SiteNav.js";
import { p as push_element, a as pop_element } from "../../chunks/dev.js";
Footer[FILENAME] = "src/lib/components/Footer.svelte";
function Footer($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      const footerAssetBase = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/section%2011%20-%20footer/";
      const logo = footerAssetBase + "logo.png";
      const socialLinks = [
        {
          key: "twitter",
          href: "https://twitter.com",
          icon: footerAssetBase + "twitter-x%201.svg"
        },
        {
          key: "linkedin",
          href: "https://linkedin.com",
          icon: footerAssetBase + "linkedin.svg"
        },
        {
          key: "facebook",
          href: "https://facebook.com",
          icon: footerAssetBase + "facebook.svg"
        },
        {
          key: "instagram",
          href: "https://instagram.com",
          icon: footerAssetBase + "instagram.svg"
        }
      ];
      const certificates = [1, 2, 3, 4, 5].map((n) => footerAssetBase + `certificate%20${n}.png`);
      const realRoutes = {
        About: "/about",
        Careers: "/coming-soon",
        Contact: "/contact",
        Blog: "/coming-soon",
        Privacy: "/privacy",
        Terms: "/terms",
        Refund: "/refund",
        Cookie: "/cookies",
        Security: "/security",
        Compliance: "/compliance",
        "PCI DSS": "/pci-dss",
        "Responsible Disclosure": "/responsible-disclosure"
      };
      const sectionRoutes = {
        Products: "/products",
        Solutions: "/solutions",
        Industries: "/industries"
      };
      const href = (label, section) => realRoutes[label] ?? (section && sectionRoutes[section]) ?? "#";
      const footerColumnsRow1 = [
        {
          title: "Products",
          links: [
            "Payment Gateway",
            "Checkout",
            "Payment Links",
            "QR Payments",
            "Invoices",
            "Subscriptions",
            "Payouts",
            "Virtual Accounts",
            "Reconciliation",
            "White Label Solutions"
          ]
        },
        {
          title: "Solutions",
          links: [
            "Startups",
            "Growing Businesses",
            "Enterprise",
            "SaaS",
            "Marketplaces",
            "Platforms"
          ]
        },
        {
          title: "Industries",
          links: [
            "Healthcare",
            "Education",
            "Travel",
            "Retail",
            "Ecommerce",
            "Manufacturing",
            "Logistics",
            "NGOs"
          ]
        },
        {
          title: "Legal",
          links: [
            "Privacy",
            "Terms",
            "Refund",
            "Cookie",
            "Security",
            "Compliance",
            "PCI DSS",
            "Responsible Disclosure"
          ]
        }
      ];
      const footerColumnsRow2 = [
        { title: "Company", links: ["About", "Careers", "Contact"] },
        { title: "Resources", links: ["Blog", "Case Studies"] },
        {
          title: "Developers",
          links: ["API", "SDK", "Guides", "Sandbox"]
        }
      ];
      $$renderer2.push(`<footer class="bg-[#171717] py-20 text-white">`);
      push_element($$renderer2, "footer", 115, 0);
      $$renderer2.push(`<div class="mx-4 lg:mx-[120px]">`);
      push_element($$renderer2, "div", 116, 1);
      $$renderer2.push(`<div class="grid grid-cols-1 gap-16 lg:grid-cols-[320px_1fr] lg:gap-32">`);
      push_element($$renderer2, "div", 117, 2);
      $$renderer2.push(`<div>`);
      push_element($$renderer2, "div", 118, 3);
      $$renderer2.push(`<img${attr("src", logo)} alt="ElixirPay" class="h-16 w-auto"/>`);
      push_element($$renderer2, "img", 119, 4);
      pop_element();
      $$renderer2.push(` <p class="mt-6 max-w-xs text-para-16 text-white/50">`);
      push_element($$renderer2, "p", 120, 4);
      $$renderer2.push(`Get started with ElixirPay and see how composable payment operations can work for your
					business.</p>`);
      pop_element();
      $$renderer2.push(` <a href="/contact" class="mt-6 inline-block rounded-lg border border-white/20 px-5 py-2.5 font-mono text-para-14 font-medium text-white hover:bg-white/5">`);
      push_element($$renderer2, "a", 124, 4);
      $$renderer2.push(`Get Started</a>`);
      pop_element();
      $$renderer2.push(` <div class="mt-16 flex items-center gap-5">`);
      push_element($$renderer2, "div", 130, 4);
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(socialLinks);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let social = each_array[$$index];
        $$renderer2.push(`<a${attr("href", social.href)}${attr("aria-label", social.key)} class="opacity-60 hover:opacity-100">`);
        push_element($$renderer2, "a", 132, 6);
        $$renderer2.push(`<img${attr("src", social.icon)} alt="" class="h-8 w-8"/>`);
        push_element($$renderer2, "img", 133, 7);
        pop_element();
        $$renderer2.push(`</a>`);
        pop_element();
      }
      $$renderer2.push(`<!--]--></div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div>`);
      push_element($$renderer2, "div", 139, 3);
      $$renderer2.push(`<div class="grid grid-cols-2 gap-10 sm:grid-cols-4">`);
      push_element($$renderer2, "div", 140, 4);
      $$renderer2.push(`<!--[-->`);
      const each_array_1 = ensure_array_like(footerColumnsRow1);
      for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
        let column = each_array_1[$$index_2];
        $$renderer2.push(`<div>`);
        push_element($$renderer2, "div", 142, 6);
        $$renderer2.push(`<p class="text-web-20 font-semibold text-white">`);
        push_element($$renderer2, "p", 143, 7);
        $$renderer2.push(`${escape_html(column.title)}</p>`);
        pop_element();
        $$renderer2.push(` <ul class="mt-5 space-y-3 text-para-16 text-white/50">`);
        push_element($$renderer2, "ul", 144, 7);
        $$renderer2.push(`<!--[-->`);
        const each_array_2 = ensure_array_like(column.links);
        for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
          let link = each_array_2[$$index_1];
          $$renderer2.push(`<li>`);
          push_element($$renderer2, "li", 146, 9);
          $$renderer2.push(`<a${attr("href", href(link, column.title))} class="hover:text-white">`);
          push_element($$renderer2, "a", 147, 10);
          $$renderer2.push(`${escape_html(link)}</a>`);
          pop_element();
          $$renderer2.push(`</li>`);
          pop_element();
        }
        $$renderer2.push(`<!--]--></ul>`);
        pop_element();
        $$renderer2.push(`</div>`);
        pop_element();
      }
      $$renderer2.push(`<!--]--></div>`);
      pop_element();
      $$renderer2.push(` <div class="mt-12 grid grid-cols-2 gap-10 sm:grid-cols-4">`);
      push_element($$renderer2, "div", 155, 4);
      $$renderer2.push(`<!--[-->`);
      const each_array_3 = ensure_array_like(footerColumnsRow2);
      for (let $$index_4 = 0, $$length = each_array_3.length; $$index_4 < $$length; $$index_4++) {
        let column = each_array_3[$$index_4];
        $$renderer2.push(`<div>`);
        push_element($$renderer2, "div", 157, 6);
        $$renderer2.push(`<p class="text-web-20 font-semibold text-white">`);
        push_element($$renderer2, "p", 158, 7);
        $$renderer2.push(`${escape_html(column.title)}</p>`);
        pop_element();
        $$renderer2.push(` <ul class="mt-5 space-y-3 text-para-16 text-white/50">`);
        push_element($$renderer2, "ul", 159, 7);
        $$renderer2.push(`<!--[-->`);
        const each_array_4 = ensure_array_like(column.links);
        for (let $$index_3 = 0, $$length2 = each_array_4.length; $$index_3 < $$length2; $$index_3++) {
          let link = each_array_4[$$index_3];
          $$renderer2.push(`<li>`);
          push_element($$renderer2, "li", 161, 9);
          $$renderer2.push(`<a${attr("href", href(link))} class="hover:text-white">`);
          push_element($$renderer2, "a", 161, 13);
          $$renderer2.push(`${escape_html(link)}</a>`);
          pop_element();
          $$renderer2.push(`</li>`);
          pop_element();
        }
        $$renderer2.push(`<!--]--></ul>`);
        pop_element();
        $$renderer2.push(`</div>`);
        pop_element();
      }
      $$renderer2.push(`<!--]--> <div>`);
      push_element($$renderer2, "div", 167, 5);
      $$renderer2.push(`<p class="text-web-20 font-semibold text-white">`);
      push_element($$renderer2, "p", 168, 6);
      $$renderer2.push(`Language</p>`);
      pop_element();
      $$renderer2.push(` <button class="mt-5 flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 text-para-14 text-white">`);
      push_element($$renderer2, "button", 169, 6);
      $$renderer2.push(`<svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.75">`);
      push_element($$renderer2, "svg", 172, 7);
      $$renderer2.push(`<circle cx="12" cy="12" r="9">`);
      push_element($$renderer2, "circle", 173, 8);
      $$renderer2.push(`</circle>`);
      pop_element();
      $$renderer2.push(`<path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18">`);
      push_element($$renderer2, "path", 174, 8);
      $$renderer2.push(`</path>`);
      pop_element();
      $$renderer2.push(`</svg>`);
      pop_element();
      $$renderer2.push(` English <svg viewBox="0 0 24 24" class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="2">`);
      push_element($$renderer2, "svg", 177, 7);
      $$renderer2.push(`<path d="M6 9l6 6 6-6">`);
      push_element($$renderer2, "path", 178, 8);
      $$renderer2.push(`</path>`);
      pop_element();
      $$renderer2.push(`</svg>`);
      pop_element();
      $$renderer2.push(`</button>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div class="mt-16 flex flex-col gap-6 border-t border-white/10 pt-10 lg:flex-row lg:items-center lg:justify-between">`);
      push_element($$renderer2, "div", 186, 2);
      $$renderer2.push(`<p class="text-para-16 text-white/50">`);
      push_element($$renderer2, "p", 189, 3);
      $$renderer2.push(`Elixirpay is compliant with international compliance standards and laws</p>`);
      pop_element();
      $$renderer2.push(` <div class="flex flex-wrap items-center gap-4">`);
      push_element($$renderer2, "div", 192, 3);
      $$renderer2.push(`<!--[-->`);
      const each_array_5 = ensure_array_like(certificates);
      for (let $$index_5 = 0, $$length = each_array_5.length; $$index_5 < $$length; $$index_5++) {
        let cert = each_array_5[$$index_5];
        $$renderer2.push(`<img${attr("src", cert)} alt="" class="h-10 w-auto"/>`);
        push_element($$renderer2, "img", 194, 5);
        pop_element();
      }
      $$renderer2.push(`<!--]--></div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div class="mt-8 border-t border-white/10 pt-8 text-center text-para-16 text-white/50">`);
      push_element($$renderer2, "div", 199, 2);
      $$renderer2.push(`<p>`);
      push_element($$renderer2, "p", 200, 3);
      $$renderer2.push(`© Elixirpay, ${escape_html((/* @__PURE__ */ new Date()).getFullYear())}. All rights reserved.</p>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</footer>`);
      pop_element();
    },
    Footer
  );
}
Footer.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
_layout[FILENAME] = "src/routes/+layout.svelte";
function _layout($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      var $$store_subs;
      let { children } = $$props;
      const ownNavRoutes = [
        "/",
        "/about",
        "/products",
        "/solutions",
        "/industries",
        "/coming-soon",
        "/privacy",
        "/terms",
        "/refund",
        "/cookies",
        "/security",
        "/compliance",
        "/pci-dss",
        "/responsible-disclosure"
      ];
      let hasOwnNav = derived(() => ownNavRoutes.includes(store_get($$store_subs ??= {}, "$page", page).url.pathname));
      let activeLink = derived(() => store_get($$store_subs ??= {}, "$page", page).url.pathname === "/products" ? "products" : store_get($$store_subs ??= {}, "$page", page).url.pathname === "/solutions" ? "solutions" : store_get($$store_subs ??= {}, "$page", page).url.pathname === "/industries" ? "industries" : void 0);
      if (!hasOwnNav()) {
        $$renderer2.push("<!--[0-->");
        SiteNav($$renderer2, { active: activeLink() });
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <main>`);
      push_element($$renderer2, "main", 55, 0);
      children?.($$renderer2);
      $$renderer2.push(`<!----></main>`);
      pop_element();
      $$renderer2.push(` `);
      Footer($$renderer2);
      $$renderer2.push(`<!---->`);
      if ($$store_subs) unsubscribe_stores($$store_subs);
    },
    _layout
  );
}
_layout.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
export {
  _layout as default
};
