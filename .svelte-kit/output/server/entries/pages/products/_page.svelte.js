import { a as attr, a9 as head, b as ensure_array_like, aa as attr_class, e as escape_html, ab as stringify, d as derived } from "../../../chunks/index.js";
import { S as SiteNav } from "../../../chunks/SiteNav.js";
import { F as FluidSimulation } from "../../../chunks/FluidSimulation.js";
function ProductsHero($$renderer) {
  const dashboard = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Product%20Page/dashboard/dashboard.svg";
  $$renderer.push(`<section class="relative bg-white"><div class="absolute inset-x-0 top-0 z-0 h-[1200px]" style="background-image: linear-gradient(to bottom, #171717, #23223c, #2b2d64, #2f398f, #2c45bc, #2856d2, #1e68e9, #007aff, #0090ff, #00a2fe, #00b2f6, #00c0eb)"></div> <div class="pointer-events-none absolute inset-x-0 top-0 z-0 h-[1200px] md:pointer-events-auto">`);
  FluidSimulation($$renderer, { class: "h-full w-full" });
  $$renderer.push(`<!----></div> `);
  SiteNav($$renderer, { active: "products", startTransparent: true });
  $$renderer.push(`<!----> <div class="relative z-10 h-[1200px] overflow-hidden"><div class="container-page pointer-events-none pt-[180px] text-center md:pt-[220px]"><h1 class="mx-auto max-w-3xl text-web-32 font-semibold text-white sm:text-web-40 md:text-web-48 lg:text-web-56">Everything You<br/>Need to Move Money</h1> <p class="mx-auto mt-5 max-w-3xl text-balance text-para-20 text-white/70">From collecting payments and automating payouts to simplifying financial operations,
				ElixirPay brings every payment workflow together through one secure, scalable platform
				built for modern businesses.</p> <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4"><a href="/contact" class="pointer-events-auto w-full rounded-lg border border-white/20 bg-white/5 px-5 py-4 text-center font-mono text-para-16 font-medium text-white hover:bg-white/10 sm:w-auto sm:px-8">Talk to Sales</a> <a href="/contact" class="pointer-events-auto w-full rounded-lg bg-gray-100 px-5 py-4 text-center font-mono text-para-16 font-medium uppercase tracking-wide text-gray-900 hover:bg-gray-200 sm:w-auto sm:px-8">Get Started</a></div></div> <div class="container-page pointer-events-none mt-[120px]"><div class="relative mx-auto max-w-6xl"><img${attr("src", dashboard)} alt="ElixirPay dashboard" class="block w-[760px] max-w-none drop-shadow-2xl md:w-full md:max-w-full"/></div></div></div></section>`);
}
function _page($$renderer) {
  const faqIllustration = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/faq.svg";
  const teamIconBase = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%207%20-%20Built%20Around%20Every%20Team/";
  const teams = [
    {
      key: "developers",
      label: "Developers",
      labelColor: "text-blue-600",
      icon: teamIconBase + "Developers.svg",
      heading: "Write Code. Not Workarounds.",
      links: ["APIs & SDKs", "Sandbox", "Webhooks", "Documentation"]
    },
    {
      key: "finance",
      label: "Finance",
      labelColor: "text-blue-600",
      icon: teamIconBase + "Finance.svg",
      heading: "Know Where Every Rupee Goes.",
      links: ["Settlements", "Reconciliation", "Reports", "Refunds"]
    },
    {
      key: "operations",
      label: "Operations",
      labelColor: "text-purple-600",
      icon: teamIconBase + "Operations.svg",
      heading: "See Every Payment As It Happens.",
      links: [
        "Collections",
        "Activity Logs",
        "Alerts",
        "Live Transactions"
      ]
    },
    {
      key: "customer-support",
      label: "Customer Support",
      labelColor: "text-orange-600",
      icon: teamIconBase + "Customer%20Support.svg",
      heading: "Answers Before Customers Ask.",
      links: [
        "Payment Status",
        "Disputes",
        "Refund Track",
        "Cust.Timeline"
      ]
    },
    {
      key: "sales",
      label: "Sales",
      labelColor: "text-pink-600",
      icon: teamIconBase + "Sales.svg",
      heading: "Close Deals. Collect Faster.",
      links: [
        "Invoices",
        "Payment Links",
        "Collections",
        "Customer Payments"
      ]
    },
    {
      key: "founders",
      label: "Founders",
      labelColor: "text-indigo-600",
      icon: teamIconBase + "Founders.svg",
      heading: "Watch Growth. Not Spreadsheets.",
      links: ["Revenue", "Growth Trends", "Analytics", "Business Overview"]
    }
  ];
  const faqs = [
    {
      question: "Can I use only the products I need?",
      answer: "Absolutely. ElixirPay is modular by design, allowing you to choose the products that fit your business today. As your needs evolve, you can add more products without changing your existing integration."
    },
    {
      question: "Can I manage payments, payouts, and reconciliation from one dashboard?",
      answer: "Yes. Every product you use reports into the same dashboard, so collections, payouts, and reconciliation are always visible in one place instead of across separate tools."
    },
    {
      question: "Which payment methods does ElixirPay support?",
      answer: "ElixirPay supports UPI, credit and debit cards, net banking, wallets, and other popular payment methods, giving your customers multiple ways to pay."
    },
    {
      question: "Is ElixirPay suitable for businesses of all sizes?",
      answer: "Yes. Whether you're launching your first product or managing enterprise-scale payment operations, ElixirPay is designed to support businesses at every stage of growth."
    },
    {
      question: "How easy is it to integrate ElixirPay?",
      answer: "With developer-friendly APIs, SDKs, documentation, and a sandbox environment, your team can build, test, and launch with confidence."
    },
    {
      question: "Can I automate recurring payments and payouts?",
      answer: "Yes. Subscriptions and payouts can both run on automated schedules, reducing the manual effort needed to keep recurring billing and vendor payments on time."
    }
  ];
  let openFaqIndex = 0;
  const finalCtaCoin = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%2010%20-%20sales/coin.png";
  const solutionsIconBase = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%203%20-%20One%20Platform/Menu%20icons/";
  const solutionsIcons = [
    solutionsIconBase + "icon%201.png",
    solutionsIconBase + "Icon2.png",
    solutionsIconBase + "icon%203.png",
    solutionsIconBase + "icon%204.png"
  ];
  const productIllustrationBase = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Product%20Page/products/";
  const solutionCategories = [
    {
      icon: solutionsIcons[0],
      label: "Accept Payments",
      items: [
        {
          label: "Payment Gateway",
          heading: "Accept Every Payment With Confidence",
          description: "Support UPI, Cards, Net Banking, Wallets, and more through one reliable payment gateway designed for speed, security, and scale.",
          illustration: productIllustrationBase + "image%201.svg",
          highlights: [
            "Multiple Payment Methods",
            "Smart Payment Routing",
            "Real-Time Payment Status",
            "Enterprise-Grade Security"
          ]
        },
        {
          label: "Hosted Checkout",
          heading: "Launch Checkout in Minutes",
          description: "Deliver a secure, mobile-friendly checkout experience without building everything from scratch. Customize the experience while we handle the payment flow.",
          cta: "Explore Hosted Checkout",
          illustration: productIllustrationBase + "image%202.svg",
          highlights: [
            "Responsive Checkout",
            "Secure Payment Experience",
            "Easy Integration",
            "Brand Customization"
          ]
        },
        {
          label: "Payment Links",
          heading: "Collect Payments Anywhere",
          description: "Create and share payment links instantly through email, SMS, or messaging apps—perfect for businesses that don't need a full website or app.",
          cta: "Explore Payment Links",
          illustration: productIllustrationBase + "image%203.svg",
          highlights: [
            "Instant Link Creation",
            "Share Anywhere",
            "Payment Tracking",
            "Faster Collections"
          ]
        },
        {
          label: "QR Payments",
          heading: "Accept Payments With a Simple Scan",
          description: "Create and share payment links instantly through email, SMS, or messaging apps—perfect for businesses that don't need a full website or app.",
          cta: "Explore QR Payments",
          illustration: productIllustrationBase + "image%204.svg",
          highlights: [
            "Dynamic & Static QR",
            "Instant Confirmation",
            "UPI Compatible",
            "Easy Deployment"
          ]
        },
        {
          label: "Invoices",
          heading: "Create, Send, and Get Paid Faster",
          description: "Generate professional invoices with integrated payment options, making it easier for customers to pay on time.",
          cta: "Explore Invoices",
          illustration: productIllustrationBase + "image%205.svg",
          highlights: [
            "Digital Invoices",
            "Payment Tracking",
            "Due Date Management",
            "Faster Collections"
          ]
        },
        {
          label: "Subscriptions",
          heading: "Recurring Payments Made Simple",
          description: "Automate recurring billing with flexible subscription plans designed for SaaS, memberships, and subscription-based businesses.",
          cta: "Explore Subscriptions",
          illustration: productIllustrationBase + "image%206.svg",
          highlights: [
            "Automated Billing",
            "Flexible Plans",
            "Renewal Management",
            "Payment Notifications"
          ]
        }
      ]
    },
    {
      icon: solutionsIcons[1],
      label: "Move Money",
      items: [
        {
          label: "Payouts",
          heading: "Send Money Instantly",
          description: "Pay vendors, employees, partners, and customers through automated payout workflows that reduce manual effort and improve operational efficiency.",
          cta: "Explore Payouts",
          illustration: productIllustrationBase + "image%207.svg",
          highlights: [
            "Bulk Payouts",
            "Instant Transfers",
            "Automated Workflows",
            "Status Tracking"
          ]
        },
        {
          label: "Virtual Account",
          heading: "Identify Every Incoming Payment",
          description: "Assign unique virtual accounts to customers, partners, or businesses for faster collections and effortless payment identification.",
          cta: "Explore Virtual Account",
          illustration: productIllustrationBase + "image%208.svg",
          highlights: [
            "Unique Account Numbers",
            "Automated Mapping",
            "Faster Reconciliation",
            "Collection Management"
          ]
        }
      ]
    },
    {
      icon: solutionsIcons[2],
      label: "Manage Finance",
      items: [
        {
          label: "Autonomous Reconciliation",
          heading: "Match Every Transaction Automatically",
          description: "Verify collections, settlements, refunds, and bank records through intelligent reconciliation workflows that reduce manual effort and improve financial accuracy.",
          cta: "Explore Reconciliation",
          illustration: productIllustrationBase + "image%209.svg",
          highlights: [
            "Two-Way Matching",
            "Three-Way Matching",
            "Multi-Way Reconciliation",
            "Exception Management"
          ]
        }
      ]
    },
    {
      icon: solutionsIcons[3],
      label: "Enterprise Solutions",
      items: [
        {
          label: "White Label Solutions",
          heading: "Your Brand. Our Infrastructure.",
          description: "Launch your own payment platform with a fully branded experience while leveraging ElixirPay's secure and scalable infrastructure.",
          cta: "Explore White Label Solutions",
          illustration: productIllustrationBase + "image%2010.svg",
          highlights: [
            "Complete Brand Control",
            "API Integration",
            "Scalable Infrastructure",
            "Enterprise Support"
          ]
        }
      ]
    }
  ];
  let activeCategoryIndex = 0;
  let activeItemIndex = 0;
  let activeCategory = derived(() => solutionCategories[activeCategoryIndex]);
  let activeItem = derived(() => activeCategory().items[activeItemIndex]);
  head("1dj9mz1", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Products — ElixirPay</title>`);
    });
  });
  ProductsHero($$renderer);
  $$renderer.push(`<!----> <section class="bg-gray-100 pb-[200px] pt-[200px]"><div class="container-page text-center"><h2 class="mx-auto max-w-2xl text-web-32 font-bold text-gray-900 md:text-web-40">Collect Payments Without Limits</h2> <p class="mx-auto mt-5 max-w-2xl text-para-18 text-gray-500">Give every customer a fast, secure, and seamless way to pay. Whether you're selling online,
			billing clients, or collecting subscriptions, ElixirPay provides the tools to simplify
			every payment journey.</p> <div class="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2"><!--[-->`);
  const each_array = ensure_array_like(solutionCategories);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let category = each_array[i];
    $$renderer.push(`<button${attr_class(`rounded-full px-6 py-3 text-para-16 font-medium transition-colors ${i === activeCategoryIndex ? "bg-gray-900 text-white" : "border border-gray-300 text-gray-600 hover:bg-gray-200"}`)}>${escape_html(category.label)}</button>`);
  }
  $$renderer.push(`<!--]--></div></div> <div class="mx-auto mt-12 max-w-[1920px] px-4 md:px-[120px]"><div class="border border-gray-300 bg-gray-50"><div class="flex gap-8 overflow-x-auto border-b border-gray-300 px-8"><!--[-->`);
  const each_array_1 = ensure_array_like(activeCategory().items);
  for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
    let item = each_array_1[i];
    $$renderer.push(`<button${attr_class(`shrink-0 whitespace-nowrap border-b-2 py-5 text-para-18 font-semibold transition-colors ${i === activeItemIndex ? "border-gray-900 text-gray-900" : "border-transparent text-gray-400 hover:text-gray-600"}`)}>${escape_html(item.label)}</button>`);
  }
  $$renderer.push(`<!--]--></div> <div class="grid gap-10 p-8 md:grid-cols-2 md:gap-16 md:p-16"><div class="text-left"><h3 class="text-web-28 font-bold text-gray-900">${escape_html(activeItem().heading)}</h3> <p class="mt-5 text-para-18 text-gray-600">${escape_html(activeItem().description)}</p> <div class="mt-8 border-t border-gray-200 pt-8"><p class="text-web-20 font-bold text-gray-900">Highlights</p> <ul class="mt-4 space-y-3"><!--[-->`);
  const each_array_2 = ensure_array_like(activeItem().highlights);
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let highlight = each_array_2[$$index_2];
    $$renderer.push(`<li class="flex items-center gap-2 text-para-16 text-gray-500"><span aria-hidden="true">→</span> ${escape_html(highlight)}</li>`);
  }
  $$renderer.push(`<!--]--></ul></div></div> <div class="aspect-square overflow-hidden md:aspect-auto"><img${attr("src", activeItem().illustration)} alt="" class="block h-full w-full object-cover"/></div></div></div></div></section> <section class="bg-white py-[160px]"><div class="container-page text-center"><h2 class="mx-auto max-w-3xl text-web-32 font-semibold text-gray-800 sm:text-web-40 md:text-web-48">Built Around Every Team</h2> <p class="mx-auto mt-6 max-w-4xl text-para-24 text-gray-500">One platform. Different priorities.<br/> Every team gets the visibility<br/> and control they need without<br/> switching between multiple tools.</p></div> <div class="mx-4 mt-20 sm:mx-8 lg:hidden"><!--[-->`);
  const each_array_3 = ensure_array_like(teams);
  for (let i = 0, $$length = each_array_3.length; i < $$length; i++) {
    let team = each_array_3[i];
    $$renderer.push(`<div${attr_class(`border border-gray-200 p-8 ${i % 2 === 1 ? "bg-gray-50" : "bg-white"}`)}><img${attr("src", team.icon)} alt="" class="h-10 w-10"/> <p${attr_class(`mt-6 text-para-14 font-mono font-medium uppercase tracking-widest ${stringify(team.labelColor)}`, "svelte-1dj9mz1")}>${escape_html(team.label)}</p> <p class="mt-2 text-web-20 font-bold text-gray-900">${escape_html(team.heading)}</p> <div class="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-gray-300 pt-4"><!--[-->`);
    const each_array_4 = ensure_array_like(team.links);
    for (let $$index_3 = 0, $$length2 = each_array_4.length; $$index_3 < $$length2; $$index_3++) {
      let link = each_array_4[$$index_3];
      $$renderer.push(`<span class="flex items-center gap-2 text-para-14 text-gray-700"><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-gray-300 text-gray-600">›</span> ${escape_html(link)}</span>`);
    }
    $$renderer.push(`<!--]--></div></div>`);
  }
  $$renderer.push(`<!--]--></div> <div class="mx-4 mt-20 hidden border-l border-t border-gray-200 sm:mx-8 lg:mx-[200px] lg:block"><div class="grid lg:grid-cols-3"><!--[-->`);
  const each_array_5 = ensure_array_like(teams);
  for (let i = 0, $$length = each_array_5.length; i < $$length; i++) {
    let team = each_array_5[i];
    $$renderer.push(`<div${attr_class(`group relative h-[320px] border-b border-r border-gray-200 p-8 transition-colors duration-500 ease-in-out hover:bg-blue-600 ${i % 2 === 1 ? "bg-gray-50" : "bg-white"}`)}><div class="flex h-full flex-col justify-between transition-opacity duration-500 ease-in-out group-hover:opacity-0"><img${attr("src", team.icon)} alt="" class="h-10 w-10"/> <a href="/products" class="flex items-center gap-2 text-web-24 font-semibold text-gray-900">${escape_html(team.label)} <span aria-hidden="true">↗</span></a></div> <div class="pointer-events-none absolute bottom-16 left-4 right-[-3rem] z-20 h-[320px] origin-bottom scale-0 bg-gray-100 p-8 shadow-2xl transition-transform duration-500 ease-in-out group-hover:pointer-events-auto group-hover:scale-100"><div class="flex h-full flex-col justify-between"><img${attr("src", team.icon)} alt="" class="h-10 w-10"/> <div><p${attr_class(`text-para-14 font-mono font-medium uppercase tracking-widest ${stringify(team.labelColor)}`, "svelte-1dj9mz1")}>${escape_html(team.label)}</p> <p class="mt-2 text-web-20 font-bold text-gray-900">${escape_html(team.heading)}</p></div> <div class="grid grid-cols-2 gap-x-6 gap-y-3 border-t border-gray-300 pt-4"><!--[-->`);
    const each_array_6 = ensure_array_like(team.links);
    for (let $$index_5 = 0, $$length2 = each_array_6.length; $$index_5 < $$length2; $$index_5++) {
      let link = each_array_6[$$index_5];
      $$renderer.push(`<span class="flex items-center gap-2 text-para-14 text-gray-700"><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-gray-300 text-gray-600">›</span> ${escape_html(link)}</span>`);
    }
    $$renderer.push(`<!--]--></div></div></div></div>`);
  }
  $$renderer.push(`<!--]--></div></div></section> <section class="bg-white py-[160px]"><div class="mx-4 grid grid-cols-1 gap-16 lg:mx-[120px] lg:grid-cols-[1fr_800px] lg:items-stretch lg:gap-12"><div class="flex flex-col"><h2 class="text-web-32 font-semibold text-gray-900 sm:text-web-40 md:text-web-48">Product FAQs</h2> <p class="mt-6 max-w-lg text-para-20 text-gray-500">Choosing a payment platform is an important decision. Here are answers to the questions
				businesses ask before getting started with ElixirPay.</p> <img${attr("src", faqIllustration)} alt="" class="mt-auto hidden h-auto lg:block lg:w-96"/></div> <div class="rounded-2xl border border-gray-200"><!--[-->`);
  const each_array_7 = ensure_array_like(faqs);
  for (let i = 0, $$length = each_array_7.length; i < $$length; i++) {
    let faq = each_array_7[i];
    $$renderer.push(`<button class="flex w-full items-start justify-between gap-6 border-b border-gray-100 p-8 text-left last:border-b-0"><div><span class="block text-web-20 font-medium text-gray-900">${escape_html(faq.question)}</span> `);
    if (openFaqIndex === i) {
      $$renderer.push("<!--[0-->");
      $$renderer.push(`<p class="mt-4 text-para-16 text-gray-500">${escape_html(faq.answer)}</p>`);
    } else {
      $$renderer.push("<!--[-1-->");
    }
    $$renderer.push(`<!--]--></div> <span class="relative mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-400"><span class="absolute h-[2px] w-3 rounded-full bg-gray-600"></span> <span${attr_class(`absolute h-3 w-[2px] rounded-full bg-gray-600 transition-transform duration-300 ${openFaqIndex === i ? "scale-y-0" : "scale-y-100"}`)}></span></span></button>`);
  }
  $$renderer.push(`<!--]--></div></div></section> <section class="relative overflow-hidden bg-black py-[200px] text-center text-white"><div class="absolute inset-0 bg-cover bg-top bg-no-repeat" style="background-image: url('https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%2010%20-%20sales/bg.png')"></div> <div class="container-page relative z-10"><div class="mx-auto h-24 w-24 [perspective:600px]"><img${attr("src", finalCtaCoin)} alt="" class="coin-spin h-full w-full svelte-1dj9mz1"/></div> <h2 class="mx-auto mt-8 max-w-4xl text-web-32 font-semibold sm:text-web-40 md:text-web-56">Whatever You're Building,<br/>Build It With Confidence.</h2> <p class="mx-auto mt-6 max-w-4xl text-balance text-para-20 text-white/70">From startups to enterprises, ElixirPay provides the payment infrastructure businesses need
			to launch, grow, and scale with confidence.</p> <a href="/contact" class="mt-10 inline-block rounded-lg bg-white px-6 py-3 font-mono text-para-14 font-medium text-gray-900 hover:bg-gray-100">Talk to Sales</a></div></section>`);
}
export {
  _page as default
};
