import { aa as attr_class, a as attr, b as ensure_array_like, e as escape_html } from "./index.js";
function SiteNav($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { active, startTransparent = false } = $$props;
    const logo = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Nav%20bar/elixirpaylogo.svg";
    let scrolled = !startTransparent;
    const links = [
      { href: "/", label: "Home", key: "home" },
      { href: "/products", label: "Products", key: "products" },
      { href: "/solutions", label: "Solutions", key: "solutions" },
      { href: "/industries", label: "Industries", key: "industries" },
      { href: "/about", label: "About", key: "about" }
    ];
    $$renderer2.push(`<header${attr_class(`fixed inset-x-0 z-30 mx-auto flex items-center justify-between transition-all duration-300 ${scrolled ? "top-4 w-[calc(100%-2rem)] max-w-5xl rounded-full bg-black/90 px-6 py-3 shadow-xl shadow-black/30 backdrop-blur-md sm:w-[calc(100%-4rem)]" : "container-page top-0 py-8"}`)}><a href="/" class="flex items-center"><img${attr("src", logo)} alt="ElixirPay"${attr_class(`w-auto transition-all duration-300 ${scrolled ? "h-9" : "h-9 md:h-[72px]"}`)}/></a> <nav class="hidden items-center gap-1 text-para-14 md:flex"><!--[-->`);
    const each_array = ensure_array_like(links);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<a${attr("href", link.href)}${attr_class(`rounded-full px-5 py-2 ${active === link.key ? "bg-white text-black" : "text-white/70 hover:text-white"}`)}>${escape_html(link.label)}</a>`);
    }
    $$renderer2.push(`<!--]--></nav> <a href="/contact" class="hidden rounded-full bg-white px-5 py-2.5 font-mono text-para-14 font-medium text-black hover:bg-gray-100 md:inline-block lg:px-6 lg:py-3">Contact Us</a> <button class="text-[32px] leading-none text-white md:hidden" aria-label="Open menu">☰</button></header> <aside${attr_class(`fixed inset-0 z-50 flex w-full transform flex-col bg-black text-white transition-transform duration-300 ease-in-out md:hidden ${"translate-x-full"}`)}><div class="flex items-center justify-between p-8"><img${attr("src", logo)} alt="ElixirPay" class="h-9 w-auto"/> <button aria-label="Close menu" class="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-xl">✕</button></div> <nav class="flex flex-col px-8"><!--[-->`);
    const each_array_1 = ensure_array_like(links);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let link = each_array_1[$$index_1];
      $$renderer2.push(`<a${attr("href", link.href)} class="border-b border-white/10 py-5 font-mono text-para-16 font-semibold uppercase tracking-widest">${escape_html(link.label)}</a>`);
    }
    $$renderer2.push(`<!--]--></nav> <a href="/contact" class="mx-8 mb-8 mt-auto rounded-lg bg-white px-6 py-4 text-center font-mono text-para-16 font-medium text-black hover:bg-gray-100">Contact Us</a></aside>`);
  });
}
export {
  SiteNav as S
};
