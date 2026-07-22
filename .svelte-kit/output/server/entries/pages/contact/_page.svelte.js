import { a as attr, aa as attr_class, ab as stringify, d as derived, a9 as head, b as ensure_array_like, e as escape_html } from "../../../chunks/index.js";
function Button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
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
    if (loading) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<span class="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    children?.($$renderer2);
    $$renderer2.push(`<!----></button>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
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
    head("1bv7ezn", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Contact Us — ElixirPay</title>`);
      });
    });
    $$renderer2.push(`<section class="bg-[#FAFAFA] pb-16 pt-[100px] md:pb-24 md:pt-[132px]"><div class="mx-auto max-w-[1920px] px-4 md:px-[120px]"><div class="overflow-hidden border border-gray-300 bg-[#FAFAFA]"><div class="grid gap-12 p-8 md:grid-cols-2 md:gap-16 md:px-16 md:py-12"><div><h1 class="text-web-32 font-bold text-gray-900 md:text-web-40">Talk to our team</h1> <p class="mt-6 text-para-18 text-gray-600">If your business handles high-volume transactions, needs faster settlements, or is
						looking for a reliable payment gateway you can trust, our team is here to guide you.</p> <p class="mt-4 text-para-18 text-gray-600">Send us your details, and we'll connect with you to discuss how ElixirPay can support
						your growth.</p> <div class="mt-10 flex flex-col gap-4 xl:flex-row"><div class="flex items-start gap-3 border border-gray-300 bg-gray-100 px-5 py-4"><span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white"><img${attr("src", mailIcon)} alt="" class="h-5 w-5"/></span> <div><p class="whitespace-nowrap text-para-14 text-gray-500">Business Enquiry</p> <p class="whitespace-nowrap font-semibold text-gray-900">onboarding@elixirpay.com</p></div></div> <div class="flex items-start gap-3 border border-gray-300 bg-gray-100 px-5 py-4"><span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white"><img${attr("src", callIcon)} alt="" class="h-5 w-5"/></span> <div><p class="whitespace-nowrap text-para-14 text-gray-500">Contact Info</p> <p class="whitespace-nowrap font-semibold text-gray-900">+91 9484 04040</p></div></div></div></div> <div class="relative"><img${attr("src", sealLogo)} alt="" class="pointer-events-none absolute -right-8 -top-20 z-10 hidden h-48 w-48 drop-shadow-lg lg:block lg:-right-12"/> <div class="overflow-hidden rounded-2xl bg-white shadow-xl"><div class="border-b border-gray-200 px-6 py-4"><p class="font-mono text-para-14 font-semibold uppercase tracking-widest text-gray-400">Tell us how we can help</p></div> <form class="space-y-4 p-6"><label class="block"><span class="text-para-16 font-semibold text-gray-900">Full name</span> <input type="text" placeholder="Enter your name" class="mt-2 w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-2.5 text-para-16 text-gray-900 placeholder-gray-400 outline-none focus:border-blue-400"/></label> <label class="block"><span class="text-para-16 font-semibold text-gray-900">Email ID</span> <input type="email" placeholder="Enter your email" class="mt-2 w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-2.5 text-para-16 text-gray-900 placeholder-gray-400 outline-none focus:border-blue-400"/></label> <label class="block"><span class="text-para-16 font-semibold text-gray-900">Mobile number</span> <input type="tel" placeholder="Enter your number" class="mt-2 w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-2.5 text-para-16 text-gray-900 placeholder-gray-400 outline-none focus:border-blue-400"/></label> <label class="block"><span class="text-para-16 font-semibold text-gray-900">How you came to know us?</span> <div class="relative mt-2"><select class="w-full appearance-none rounded-lg border border-gray-200 bg-gray-100 px-4 py-2.5 pr-10 text-para-16 text-gray-500 outline-none focus:border-blue-400">`);
    $$renderer2.option({ value: "", selected: true, disabled: true }, ($$renderer3) => {
      $$renderer3.push(`Select Here`);
    });
    $$renderer2.push(`<!--[-->`);
    const each_array = ensure_array_like(howYouKnowOptions);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let option = each_array[$$index];
      $$renderer2.option({ value: option }, ($$renderer3) => {
        $$renderer3.push(`${escape_html(option)}`);
      });
    }
    $$renderer2.push(`<!--]--></select> <svg class="pointer-events-none absolute right-5 top-1/2 h-3 w-3 -translate-y-1/2 text-gray-500" viewBox="0 0 12 8" fill="none"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></label> <label class="block"><span class="text-para-16 font-semibold text-gray-900">How can we Help</span> <textarea rows="3" placeholder="Enter Here" class="mt-2 w-full resize-none rounded-lg border border-gray-200 bg-gray-100 px-4 py-2.5 text-para-16 text-gray-900 placeholder-gray-400 outline-none focus:border-blue-400"></textarea></label> <div class="flex flex-col-reverse items-start gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between"><p class="text-para-14 text-gray-500">You can also mail us to <span class="font-semibold text-gray-900">info@elixirpay.com</span></p> `);
    Button($$renderer2, {
      type: "submit",
      color: "neutral",
      variant: "solid",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->Send message`);
      }
    });
    $$renderer2.push(`<!----></div></form></div></div></div> <div class="grid grid-cols-1 border-t border-gray-300 sm:grid-cols-3"><!--[-->`);
    const each_array_1 = ensure_array_like(stats);
    for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
      let stat = each_array_1[i];
      $$renderer2.push(`<div class="border-b border-gray-300 px-6 py-8 last:border-b-0 sm:border-b-0 sm:border-r sm:border-gray-300 sm:px-[120px] sm:last:border-r-0"><p class="text-web-28 font-bold tabular-nums text-gray-900">${escape_html(stat.prefix ?? "")}${escape_html(statValues[i].toFixed(stat.decimals ?? 0))}${escape_html(stat.suffix ?? "")}</p> <p class="mt-1 text-para-18 text-gray-500">${escape_html(stat.label)}</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></section>`);
  });
}
export {
  _page as default
};
