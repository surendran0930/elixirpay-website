import { g as getContext, a as attr, b as ensure_array_like, e as escape_html, d as derived, c as store_get, u as unsubscribe_stores } from "../../chunks/index.js";
import "clsx";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils2.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/root.js";
import "../../chunks/state.svelte.js";
import { S as SiteNav } from "../../chunks/SiteNav.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
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
      Careers: "/careers",
      Contact: "/contact",
      Blog: "/blog"
    };
    const href = (label) => realRoutes[label] ?? "#";
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
          "Smart Collect",
          "Reconciliation",
          "Tokenization",
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
    $$renderer2.push(`<footer class="bg-[#171717] py-20 text-white"><div class="mx-4 lg:mx-[120px]"><div class="grid grid-cols-1 gap-16 lg:grid-cols-[320px_1fr] lg:gap-32"><div><img${attr("src", logo)} alt="ElixirPay" class="h-16 w-auto"/> <p class="mt-6 max-w-xs text-para-16 text-white/50">Get started with DOSS ARP and see how composable operations can work for your business.</p> <a href="/contact" class="mt-6 inline-block rounded-lg border border-white/20 px-5 py-2.5 font-mono text-para-14 font-medium text-white hover:bg-white/5">Get Started</a> <div class="mt-16 flex items-center gap-5"><!--[-->`);
    const each_array = ensure_array_like(socialLinks);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let social = each_array[$$index];
      $$renderer2.push(`<a${attr("href", social.href)}${attr("aria-label", social.key)} class="opacity-60 hover:opacity-100"><img${attr("src", social.icon)} alt="" class="h-8 w-8"/></a>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div><div class="grid grid-cols-2 gap-10 sm:grid-cols-4"><!--[-->`);
    const each_array_1 = ensure_array_like(footerColumnsRow1);
    for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
      let column = each_array_1[$$index_2];
      $$renderer2.push(`<div><p class="text-web-20 font-semibold text-white">${escape_html(column.title)}</p> <ul class="mt-5 space-y-3 text-para-16 text-white/50"><!--[-->`);
      const each_array_2 = ensure_array_like(column.links);
      for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
        let link = each_array_2[$$index_1];
        $$renderer2.push(`<li><a${attr("href", href(link))} class="hover:text-white">${escape_html(link)}</a></li>`);
      }
      $$renderer2.push(`<!--]--></ul></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="mt-12 grid grid-cols-2 gap-10 sm:grid-cols-4"><!--[-->`);
    const each_array_3 = ensure_array_like(footerColumnsRow2);
    for (let $$index_4 = 0, $$length = each_array_3.length; $$index_4 < $$length; $$index_4++) {
      let column = each_array_3[$$index_4];
      $$renderer2.push(`<div><p class="text-web-20 font-semibold text-white">${escape_html(column.title)}</p> <ul class="mt-5 space-y-3 text-para-16 text-white/50"><!--[-->`);
      const each_array_4 = ensure_array_like(column.links);
      for (let $$index_3 = 0, $$length2 = each_array_4.length; $$index_3 < $$length2; $$index_3++) {
        let link = each_array_4[$$index_3];
        $$renderer2.push(`<li><a${attr("href", href(link))} class="hover:text-white">${escape_html(link)}</a></li>`);
      }
      $$renderer2.push(`<!--]--></ul></div>`);
    }
    $$renderer2.push(`<!--]--> <div><p class="text-web-20 font-semibold text-white">Language</p> <button class="mt-5 flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 text-para-14 text-white"><svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18"></path></svg> English <svg viewBox="0 0 24 24" class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"></path></svg></button></div></div></div></div> <div class="mt-16 flex flex-col gap-6 border-t border-white/10 pt-10 lg:flex-row lg:items-center lg:justify-between"><p class="text-para-16 text-white/50">Elixirpay is compliant with international compliance standards and laws</p> <div class="flex flex-wrap items-center gap-4"><!--[-->`);
    const each_array_5 = ensure_array_like(certificates);
    for (let $$index_5 = 0, $$length = each_array_5.length; $$index_5 < $$length; $$index_5++) {
      let cert = each_array_5[$$index_5];
      $$renderer2.push(`<img${attr("src", cert)} alt="" class="h-10 w-auto"/>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 text-para-16 text-white/50 sm:flex-row sm:items-center sm:justify-between"><p>© Elixirpay, ${escape_html((/* @__PURE__ */ new Date()).getFullYear())}. All rights reserved.</p> <div class="flex gap-8"><a href="/privacy" class="hover:text-white">Privacy Policy</a> <a href="/terms" class="hover:text-white">Terms &amp; Conditions</a></div></div></div></footer>`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { children } = $$props;
    let hasOwnNav = derived(() => store_get($$store_subs ??= {}, "$page", page).url.pathname === "/" || store_get($$store_subs ??= {}, "$page", page).url.pathname === "/about" || store_get($$store_subs ??= {}, "$page", page).url.pathname === "/products" || store_get($$store_subs ??= {}, "$page", page).url.pathname === "/solutions" || store_get($$store_subs ??= {}, "$page", page).url.pathname === "/industries");
    let activeLink = derived(() => store_get($$store_subs ??= {}, "$page", page).url.pathname === "/products" ? "products" : store_get($$store_subs ??= {}, "$page", page).url.pathname === "/solutions" ? "solutions" : store_get($$store_subs ??= {}, "$page", page).url.pathname === "/industries" ? "industries" : void 0);
    if (!hasOwnNav()) {
      $$renderer2.push("<!--[0-->");
      SiteNav($$renderer2, { active: activeLink() });
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <main>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></main> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _layout as default
};
