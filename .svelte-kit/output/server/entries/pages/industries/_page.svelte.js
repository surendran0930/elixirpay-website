import { a as attr, a9 as head, aa as attr_class, b as ensure_array_like, e as escape_html, d as derived } from "../../../chunks/index.js";
import { S as SiteNav } from "../../../chunks/SiteNav.js";
import { F as FluidSimulation } from "../../../chunks/FluidSimulation.js";
function IndustriesHero($$renderer) {
  const dashboard = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/industary/banner/dashboard.svg";
  $$renderer.push(`<section class="relative bg-white"><div class="absolute inset-x-0 top-0 z-0 h-[1200px]" style="background-image: linear-gradient(to bottom, #171717, #23223c, #2b2d64, #2f398f, #2c45bc, #2856d2, #1e68e9, #007aff, #0090ff, #00a2fe, #00b2f6, #00c0eb)"></div> <div class="pointer-events-none absolute inset-x-0 top-0 z-0 h-[1200px] md:pointer-events-auto">`);
  FluidSimulation($$renderer, { class: "h-full w-full" });
  $$renderer.push(`<!----></div> `);
  SiteNav($$renderer, { active: "industries", startTransparent: true });
  $$renderer.push(`<!----> <div class="relative z-10 h-[1200px] overflow-hidden"><div class="container-page pointer-events-none pt-[180px] text-center md:pt-[220px]"><h1 class="mx-auto max-w-3xl text-web-32 font-semibold text-white sm:text-web-40 md:text-web-48 lg:text-web-56">Payment Solutions<br/>Built for Every Industry</h1> <p class="mx-auto mt-5 max-w-3xl text-balance text-para-20 text-white/70">Every industry has its own payment workflows, 
				operational challenges, and customer expectations. 
				ElixirPay provides flexible payment infrastructure designed to simplify how businesses collect, move, and manage money—regardless of the industry they operate in.</p> <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4"><a href="/contact" class="pointer-events-auto w-full rounded-lg border border-white/20 bg-white/5 px-5 py-4 text-center font-mono text-para-16 font-medium text-white hover:bg-white/10 sm:w-auto sm:px-8">Talk to Sales</a> <a href="/contact" class="pointer-events-auto w-full rounded-lg bg-gray-100 px-5 py-4 text-center font-mono text-para-16 font-medium uppercase tracking-wide text-gray-900 hover:bg-gray-200 sm:w-auto sm:px-8">Get Started</a></div></div> <div class="container-page pointer-events-none mt-[120px]"><div class="relative mx-auto max-w-6xl"><img${attr("src", dashboard)} alt="ElixirPay dashboard" class="block w-[760px] max-w-none drop-shadow-2xl md:w-full md:max-w-full"/></div></div></div></section>`);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const faqIllustration = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/faq.svg";
    const aboutIllustrationBase = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%202%20-%20About%20and%20social%20proffs/";
    const aboutLeftIllustration = aboutIllustrationBase + "left.png";
    const aboutRightIllustration = aboutIllustrationBase + "right.png";
    const sealLogo = aboutIllustrationBase + "3d%20elixirpay.png";
    const businessWorkflows = [
      {
        label: "Healthcare",
        heading: "Payments That Let Care Come First",
        description: "Healthcare providers manage consultations, diagnostics, hospital billing, and insurance collections every day. ElixirPay simplifies these payment journeys so healthcare teams can spend less time managing payments and more time caring for patients.",
        recommendedProducts: [
          "Payment Gateway",
          "Payment Links",
          "Invoices",
          "Reconciliation"
        ],
        idealFor: [
          "Hospitals",
          "Clinics",
          "Telemedicine Platforms",
          "Diagnostic Centers"
        ],
        commonNeeds: [
          "Appointment payments",
          "Hospital billing",
          "Insurance collections",
          "Diagnostic payments"
        ]
      },
      {
        label: "Education",
        heading: "Simplifying Payments for Modern Learning",
        description: "From admissions and tuition fees to recurring course subscriptions, educational institutions manage thousands of student payments every year. ElixirPay helps simplify fee collection while creating a smoother payment experience for students and parents.",
        recommendedProducts: [
          "Payment Gateway",
          "Subscriptions",
          "Invoices",
          "Payment Links"
        ],
        idealFor: ["Schools", "Colleges", "Universities", "EdTech Platforms"],
        commonNeeds: [
          "Admission fees",
          "Tuition payments",
          "Recurring subscriptions",
          "Student refunds"
        ]
      },
      {
        label: "Travel",
        heading: "Power Every Booking with Reliable Payments",
        description: "Travel businesses handle reservations, deposits, cancellations, and refunds every day. ElixirPay helps simplify these payment workflows, making every booking experience faster and more reliable.",
        recommendedProducts: [
          "Payment Gateway",
          "Payment Links",
          "Invoices",
          "Reconciliation"
        ],
        idealFor: [
          "Travel Agencies",
          "Tour Operators",
          "Hospitality Businesses",
          "Booking Platforms"
        ],
        commonNeeds: [
          "Booking payments",
          "Partial payments",
          "Refund processing",
          "Customer notifications"
        ]
      },
      {
        label: "Retail",
        heading: "Keep Every Checkout Moving",
        description: "Modern retail depends on fast, seamless online payments and efficient refund handling. ElixirPay helps retailers simplify collections while keeping financial operations organized as the business grows.",
        recommendedProducts: [
          "Payment Gateway",
          "QR Payments",
          "Payment Links",
          "Reconciliation"
        ],
        idealFor: ["Retail Brands", "Franchise Businesses", "Consumer Stores"],
        commonNeeds: [
          "Online payments",
          "QR collections",
          "Refund management",
          "Settlement tracking"
        ]
      },
      {
        label: "Ecommerce",
        heading: "Turn Every Checkout Into a Better Customer Experience",
        description: "Every abandoned checkout is a missed opportunity. ElixirPay helps ecommerce businesses reduce payment friction, improve checkout experiences, and manage growing transaction volumes with confidence.",
        recommendedProducts: [
          "Payment Gateway",
          "Hosted Checkout",
          "Subscriptions",
          "Reconciliation"
        ],
        idealFor: ["Online Stores", "D2C Brands", "Marketplace Sellers"],
        commonNeeds: [
          "Checkout payments",
          "Order collections",
          "Subscription billing",
          "Refunds"
        ]
      },
      {
        label: "Manufacturing",
        heading: "Keep Payments Moving Across Your Supply Chain",
        description: "Manufacturers manage supplier payments, dealer collections, and settlement processes across multiple business partners. ElixirPay helps automate these financial workflows while improving operational visibility.",
        recommendedProducts: ["Payouts", "Invoices", "Virtual Account", "Reconciliation"],
        idealFor: ["Manufacturers", "Distributors", "Industrial Businesses"],
        commonNeeds: [
          "Supplier payments",
          "Dealer collections",
          "Invoice payments",
          "Financial reconciliation"
        ]
      },
      {
        label: "Logistics",
        heading: "Reliable Payments Behind Every Delivery",
        description: "From delivery collections to partner payouts, logistics businesses depend on efficient payment operations. ElixirPay helps streamline collections, settlements, and financial tracking across every shipment.",
        recommendedProducts: [
          "Payouts",
          "Virtual Account",
          "Payment Gateway",
          "Reconciliation"
        ],
        idealFor: [
          "Logistics Providers",
          "Delivery Platforms",
          "Courier Companies"
        ],
        commonNeeds: [
          "Delivery collections",
          "Partner payouts",
          "Settlement tracking",
          "Customer refunds"
        ]
      },
      {
        label: "NGOs",
        heading: "Build Trust Through Every Contribution",
        description: "Nonprofit organizations rely on secure donations and transparent financial operations. ElixirPay helps NGOs simplify donation collections while improving visibility into every contribution received.",
        recommendedProducts: [
          "Payment Gateway",
          "Payment Links",
          "Subscriptions",
          "Reconciliation"
        ],
        idealFor: ["Non-Profits", "Foundations", "Charitable Organizations"],
        commonNeeds: [
          "Online donations",
          "Recurring donations",
          "Donor receipts",
          "Fund reconciliation"
        ]
      }
    ];
    let activeWorkflowIndex = 0;
    let activeWorkflow = derived(() => businessWorkflows[activeWorkflowIndex]);
    const platformPillarsIconBase = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/industary/3rd%20section/";
    const platformPillars = [
      {
        key: "flexible-infrastructure",
        label: "Flexible Payment Infrastructure",
        icon: platformPillarsIconBase + "icon%201.svg",
        description: "Support industry-specific payment journeys without changing platforms."
      },
      {
        key: "enterprise-security",
        label: "Enterprise-Grade Security",
        icon: platformPillarsIconBase + "icon%202.svg",
        description: "Protect every transaction with modern security practices and continuous monitoring."
      },
      {
        key: "connected-operations",
        label: "Connected Financial Operations",
        icon: platformPillarsIconBase + "icon%203.svg",
        description: "Manage collections, payouts, reconciliation, and reporting through one unified platform."
      },
      {
        key: "built-to-grow",
        label: "Built to Grow",
        icon: platformPillarsIconBase + "icon%204.svg",
        description: "Scale your payment operations as your business, customers, and transaction volumes grow."
      }
    ];
    const testimonialAssetBase = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%208%20-%20testimonials/";
    const testimonialLogo = testimonialAssetBase + "logo%20company.png";
    const testimonials = [
      {
        key: "cisco",
        avatar: testimonialAssetBase + "image%201.png",
        logo: testimonialLogo,
        company: "Cisco",
        quoteHighlight: "Elixirpay transformed our cross-border collections— FIRC generation that once took",
        quoteRest: "up to five days now takes just seconds with the MoneySaver Exporter Account.",
        name: "Anantha Krishnan",
        role: "Founder & CEO"
      },
      {
        key: "placeholder-1",
        avatar: testimonialAssetBase + "image%203.png",
        logo: testimonialLogo,
        company: "Northbridge Retail",
        quoteHighlight: "ElixirPay cut our checkout drop-off in half—",
        quoteRest: "payments that used to fail silently now retry automatically, and support tickets about failed payments dropped to almost zero.",
        name: "Priya Menon",
        role: "Head of Payments, Northbridge Retail"
      },
      {
        key: "placeholder-3",
        avatar: testimonialAssetBase + "image%202.png",
        logo: testimonialLogo,
        company: "Vantra Logistics",
        quoteHighlight: "Vendor payouts across four countries used to take our team a full week—",
        quoteRest: "now it's one batch upload and everyone gets paid the same day.",
        name: "Elena Castillo",
        role: "Operations Director, Vantra Logistics"
      },
      {
        key: "placeholder-2",
        avatar: testimonialAssetBase + "image%204.png",
        logo: testimonialLogo,
        company: "Solace Health",
        quoteHighlight: "We went from reconciling refunds by hand every Friday—",
        quoteRest: "to a dashboard that matches every payout to the right patient invoice automatically.",
        name: "Rachel Kim",
        role: "VP Finance, Solace Health"
      },
      {
        key: "placeholder-4",
        avatar: testimonialAssetBase + "image%205.png",
        logo: testimonialLogo,
        company: "Fernway Studio",
        quoteHighlight: "Switching to ElixirPay's subscription billing—",
        quoteRest: "meant we stopped losing customers to failed card renewals; the recovered revenue alone paid for the switch in a month.",
        name: "Marcus Lee",
        role: "Founder, Fernway Studio"
      }
    ];
    const testimonialArrowIcons = {
      prev: testimonialAssetBase + "Right%20icon.svg",
      next: testimonialAssetBase + "left%20icon.svg"
    };
    let activeTestimonialIndex = 0;
    let visibleTestimonials = derived(() => [-2, -1, 0, 1, 2].map((offset) => ({
      offset,
      testimonial: testimonials[(activeTestimonialIndex + offset + testimonials.length) % testimonials.length]
    })));
    let activeTestimonial = derived(() => testimonials[activeTestimonialIndex]);
    const industryFaqs = [
      {
        question: "Which industries can use ElixirPay?",
        answer: "ElixirPay is designed to support businesses across healthcare, education, travel, retail, ecommerce, manufacturing, logistics, nonprofits, and many other industries with flexible payment infrastructure."
      },
      {
        question: "Can ElixirPay adapt to industry-specific payment workflows?",
        answer: "Yes. Each industry has its own recommended products and configurations, so ElixirPay fits the way your business actually collects, moves, and manages money."
      },
      {
        question: "Do I need different products for different industries?",
        answer: "Not necessarily. Every product works across industries — what changes is which combination we'd recommend based on your specific payment workflows."
      },
      {
        question: "Can ElixirPay support businesses operating in multiple industries?",
        answer: "Absolutely. ElixirPay is modular by design, so businesses that span multiple industries can mix and match the products that fit each part of their operation."
      },
      {
        question: "Can I start with one product and expand later?",
        answer: "Yes. Start with the product that solves your most pressing need today, and add more as your business grows — no need to change your existing integration."
      },
      {
        question: "How do I know which solution is right for my industry?",
        answer: "Explore your industry above to see our recommended products, or talk to our team — we're happy to help you find the right fit."
      }
    ];
    let openIndustryFaqIndex = 0;
    const finalCtaCoin = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%2010%20-%20sales/coin.png";
    head("106tlkb", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Industries — ElixirPay</title>`);
      });
    });
    IndustriesHero($$renderer2);
    $$renderer2.push(`<!----> <section class="relative overflow-hidden bg-white pb-[200px] pt-[200px] svelte-106tlkb"><img${attr("src", aboutLeftIllustration)} alt="" class="illustration-float pointer-events-none absolute left-0 top-0 hidden h-auto lg:block lg:w-64 svelte-106tlkb" style="animation-duration: 2s;"/> <img${attr("src", aboutRightIllustration)} alt="" class="illustration-float pointer-events-none absolute right-0 top-0 hidden h-auto lg:block lg:w-64 svelte-106tlkb" style="animation-duration: 2s; animation-delay: -1s;"/> <div class="container-page relative z-10 text-center svelte-106tlkb"><img${attr("src", sealLogo)} alt=""${attr_class(`mx-auto h-36 w-auto ${"opacity-0"}`, "svelte-106tlkb")}/> <h2 class="mx-auto mt-8 max-w-2xl text-web-32 font-bold text-gray-900 md:text-web-40 svelte-106tlkb">Every Industry Moves Money Differently</h2> <p class="mx-auto mt-4 max-w-2xl text-para-18 text-gray-500 svelte-106tlkb">A hospital doesn't collect payments like an online store. A logistics company doesn't
			manage settlements like a nonprofit organization. That's why ElixirPay adapts to the way
			different industries operate—helping businesses streamline payments without changing how
			they work.</p></div></section> <section class="bg-gray-100 py-[160px] svelte-106tlkb"><div class="container-page text-center svelte-106tlkb"><h2 class="mx-auto max-w-2xl text-web-32 font-bold text-gray-900 md:text-web-40 svelte-106tlkb">Built Around Real<br class="svelte-106tlkb"/>Business Workflows</h2> <p class="mx-auto mt-5 max-w-2xl text-para-18 text-gray-500 svelte-106tlkb">From customer payments and recurring billing to supplier payouts and financial
			reconciliation, ElixirPay supports the payment journeys that keep every industry moving.</p></div> <div class="mx-auto mt-12 max-w-[1920px] px-4 md:px-[120px] svelte-106tlkb"><div class="flex flex-col border border-gray-300 bg-gray-50 md:flex-row svelte-106tlkb"><div class="flex shrink-0 flex-col border-b border-gray-200 px-8 py-10 md:w-1/4 md:border-b-0 md:border-r svelte-106tlkb"><!--[-->`);
    const each_array = ensure_array_like(businessWorkflows);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let workflow = each_array[i];
      $$renderer2.push(`<button${attr_class(`w-full pb-4 text-left transition-colors ${i === activeWorkflowIndex ? "text-gray-900" : "text-gray-400 hover:text-gray-600"}`, "svelte-106tlkb")}><span class="font-mono text-para-14 font-semibold uppercase tracking-wide svelte-106tlkb">${escape_html(workflow.label)}</span> <div${attr_class(`relative mt-3 h-0.5 w-full ${i === activeWorkflowIndex ? "bg-blue-200" : "bg-gray-200"}`, "svelte-106tlkb")}>`);
      if (i === activeWorkflowIndex) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<!---->`);
        {
          $$renderer2.push(`<div class="workflow-progress-fill absolute inset-y-0 left-0 bg-blue-500 svelte-106tlkb" style="animation-duration: 5000ms"></div>`);
        }
        $$renderer2.push(`<!---->`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div></button> `);
      if (i === activeWorkflowIndex) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="pb-8 pt-2 text-left md:hidden svelte-106tlkb"><h3 class="text-web-24 font-bold text-gray-900 svelte-106tlkb">${escape_html(workflow.heading)}</h3> <p class="mt-4 text-para-16 text-gray-600 svelte-106tlkb">${escape_html(workflow.description)}</p> <div class="mt-6 svelte-106tlkb"><p class="font-mono text-para-14 font-semibold uppercase tracking-wide text-gray-900 svelte-106tlkb">Recommended Products</p> <div class="mt-4 flex flex-wrap gap-3 svelte-106tlkb"><!--[-->`);
        const each_array_1 = ensure_array_like(workflow.recommendedProducts);
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let tag = each_array_1[$$index];
          $$renderer2.push(`<span class="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 font-mono text-para-14 text-gray-600 svelte-106tlkb">${escape_html(tag)}</span>`);
        }
        $$renderer2.push(`<!--]--></div></div> <div class="mt-6 svelte-106tlkb"><p class="font-mono text-para-14 font-semibold uppercase tracking-wide text-gray-900 svelte-106tlkb">Ideal For</p> <div class="mt-4 flex flex-wrap gap-3 svelte-106tlkb"><!--[-->`);
        const each_array_2 = ensure_array_like(workflow.idealFor);
        for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
          let tag = each_array_2[$$index_1];
          $$renderer2.push(`<span class="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 font-mono text-para-14 text-gray-600 svelte-106tlkb">${escape_html(tag)}</span>`);
        }
        $$renderer2.push(`<!--]--></div></div> <div class="mt-6 svelte-106tlkb"><p class="font-mono text-para-14 font-semibold uppercase tracking-wide text-gray-900 svelte-106tlkb">Common Payment Needs</p> <div class="mt-4 flex flex-wrap gap-3 svelte-106tlkb"><!--[-->`);
        const each_array_3 = ensure_array_like(workflow.commonNeeds);
        for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
          let tag = each_array_3[$$index_2];
          $$renderer2.push(`<span class="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 font-mono text-para-14 text-gray-600 svelte-106tlkb">${escape_html(tag)}</span>`);
        }
        $$renderer2.push(`<!--]--></div></div></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div> <div class="hidden flex-1 px-8 py-10 text-left md:block md:px-12 svelte-106tlkb"><h3 class="text-web-28 font-bold text-gray-900 svelte-106tlkb">${escape_html(activeWorkflow().heading)}</h3> <p class="mt-4 max-w-2xl text-para-18 text-gray-600 svelte-106tlkb">${escape_html(activeWorkflow().description)}</p> <div class="mt-8 grid gap-8 sm:grid-cols-2 svelte-106tlkb"><div class="svelte-106tlkb"><p class="font-mono text-para-14 font-semibold uppercase tracking-wide text-gray-900 svelte-106tlkb">Recommended Products</p> <div class="mt-4 flex flex-wrap gap-3 svelte-106tlkb"><!--[-->`);
    const each_array_4 = ensure_array_like(activeWorkflow().recommendedProducts);
    for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
      let tag = each_array_4[$$index_4];
      $$renderer2.push(`<span class="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 font-mono text-para-14 text-gray-600 svelte-106tlkb">${escape_html(tag)}</span>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="svelte-106tlkb"><p class="font-mono text-para-14 font-semibold uppercase tracking-wide text-gray-900 svelte-106tlkb">Ideal For</p> <div class="mt-4 flex flex-wrap gap-3 svelte-106tlkb"><!--[-->`);
    const each_array_5 = ensure_array_like(activeWorkflow().idealFor);
    for (let $$index_5 = 0, $$length = each_array_5.length; $$index_5 < $$length; $$index_5++) {
      let tag = each_array_5[$$index_5];
      $$renderer2.push(`<span class="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 font-mono text-para-14 text-gray-600 svelte-106tlkb">${escape_html(tag)}</span>`);
    }
    $$renderer2.push(`<!--]--></div></div></div> <div class="mt-8 svelte-106tlkb"><p class="font-mono text-para-14 font-semibold uppercase tracking-wide text-gray-900 svelte-106tlkb">Common Payment Needs</p> <div class="mt-4 flex flex-wrap gap-3 svelte-106tlkb"><!--[-->`);
    const each_array_6 = ensure_array_like(activeWorkflow().commonNeeds);
    for (let $$index_6 = 0, $$length = each_array_6.length; $$index_6 < $$length; $$index_6++) {
      let tag = each_array_6[$$index_6];
      $$renderer2.push(`<span class="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 font-mono text-para-14 text-gray-600 svelte-106tlkb">${escape_html(tag)}</span>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></div></div></section> <section class="bg-white py-[160px] svelte-106tlkb"><div class="container-page text-center svelte-106tlkb"><h2 class="mx-auto max-w-3xl text-web-32 font-semibold text-gray-800 sm:text-web-40 md:text-web-48 svelte-106tlkb">Different Industries. One<br class="svelte-106tlkb"/>Reliable Platform.</h2> <p class="mx-auto mt-6 max-w-4xl text-para-24 text-gray-500 svelte-106tlkb">No matter how your business operates, every payment follows the same goal: collecting,
			moving, and managing money efficiently. ElixirPay brings flexible infrastructure,
			intelligent automation, and enterprise-grade reliability together in one connected platform
			that adapts to your industry's unique payment workflows.</p></div> <div class="mx-4 mt-20 sm:mx-8 lg:hidden svelte-106tlkb"><!--[-->`);
    const each_array_7 = ensure_array_like(platformPillars);
    for (let i = 0, $$length = each_array_7.length; i < $$length; i++) {
      let pillar = each_array_7[i];
      $$renderer2.push(`<div${attr_class(`border border-gray-200 p-8 ${i % 2 === 1 ? "bg-gray-50" : "bg-white"}`, "svelte-106tlkb")}><img${attr("src", pillar.icon)} alt="" class="h-10 w-10 svelte-106tlkb"/> <p class="mt-6 text-web-20 font-bold text-gray-900 svelte-106tlkb">${escape_html(pillar.label)}</p> <p class="mt-3 border-t border-gray-300 pt-4 text-para-16 text-gray-600 svelte-106tlkb">${escape_html(pillar.description)}</p></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="mx-4 mt-20 hidden border-l border-t border-gray-200 sm:mx-8 lg:mx-[200px] lg:block svelte-106tlkb"><div class="grid lg:grid-cols-2 svelte-106tlkb"><!--[-->`);
    const each_array_8 = ensure_array_like(platformPillars);
    for (let $$index_8 = 0, $$length = each_array_8.length; $$index_8 < $$length; $$index_8++) {
      let pillar = each_array_8[$$index_8];
      $$renderer2.push(`<div class="group relative h-[320px] border-b border-r border-gray-200 p-8 transition-colors duration-500 ease-in-out hover:bg-blue-600 svelte-106tlkb"><div class="flex h-full flex-col justify-between transition-opacity duration-500 ease-in-out group-hover:opacity-0 svelte-106tlkb"><img${attr("src", pillar.icon)} alt="" class="h-10 w-10 svelte-106tlkb"/> <span class="flex items-center gap-2 text-web-24 font-semibold text-gray-900 svelte-106tlkb">${escape_html(pillar.label)} <span aria-hidden="true" class="svelte-106tlkb">↗</span></span></div> <div class="pointer-events-none absolute bottom-16 left-4 right-[-3rem] z-20 h-[320px] origin-bottom scale-0 bg-gray-100 p-8 shadow-2xl transition-transform duration-500 ease-in-out group-hover:pointer-events-auto group-hover:scale-100 svelte-106tlkb"><div class="flex h-full flex-col justify-between svelte-106tlkb"><img${attr("src", pillar.icon)} alt="" class="h-10 w-10 svelte-106tlkb"/> <div class="svelte-106tlkb"><p class="text-web-24 font-bold text-gray-900 svelte-106tlkb">${escape_html(pillar.label)}</p> <div class="mt-4 border-t border-gray-300 pt-4 svelte-106tlkb"><p class="text-para-16 text-gray-600 svelte-106tlkb">${escape_html(pillar.description)}</p></div></div> <div class="svelte-106tlkb"></div></div></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></section> <section class="bg-black py-[160px] text-center text-white svelte-106tlkb"><div class="container-page svelte-106tlkb"><h2 class="mx-auto max-w-2xl text-web-32 font-semibold sm:text-web-40 md:text-web-48 svelte-106tlkb">Built on Trust. Proven<br class="svelte-106tlkb"/>by Experience.</h2> <p class="mx-auto mt-6 max-w-2xl text-para-20 text-white/50 svelte-106tlkb">The best measure of a payment platform<br class="svelte-106tlkb"/> isn't what we say— it's what our<br class="svelte-106tlkb"/> customers experience every day.</p></div> <div class="relative mt-20 svelte-106tlkb"><button class="absolute left-8 top-1/2 z-10 -translate-y-1/2 rounded-md bg-white/5 p-3 transition hover:bg-white/10 svelte-106tlkb" aria-label="Previous testimonial"><img${attr("src", testimonialArrowIcons.prev)} alt="" class="h-12 w-12 svelte-106tlkb"/></button> <button class="absolute right-8 top-1/2 z-10 -translate-y-1/2 rounded-md bg-white/5 p-3 transition hover:bg-white/10 svelte-106tlkb" aria-label="Next testimonial"><img${attr("src", testimonialArrowIcons.next)} alt="" class="h-12 w-12 svelte-106tlkb"/></button> <div class="flex items-center justify-center gap-4 svelte-106tlkb"><!--[-->`);
    const each_array_9 = ensure_array_like(visibleTestimonials());
    for (let $$index_9 = 0, $$length = each_array_9.length; $$index_9 < $$length; $$index_9++) {
      let { offset, testimonial } = each_array_9[$$index_9];
      $$renderer2.push(`<button${attr_class(
        `overflow-hidden rounded-2xl bg-white/10 transition-all duration-300 ${offset === 0 ? "h-[200px] w-[200px] opacity-100" : Math.abs(offset) === 1 ? "h-36 w-36 opacity-60" : "h-28 w-28 opacity-30"}`,
        "svelte-106tlkb"
      )}${attr("aria-label", testimonial.name)}><img${attr("src", testimonial.avatar)}${attr("alt", testimonial.name)} class="h-full w-full object-cover svelte-106tlkb"/></button>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="container-page mt-16 svelte-106tlkb"><p class="mx-auto max-w-3xl text-web-24 font-medium leading-snug sm:text-web-28 svelte-106tlkb"><span class="text-white svelte-106tlkb">${escape_html(activeTestimonial().quoteHighlight)}</span> <span class="text-white/40 svelte-106tlkb">${escape_html(activeTestimonial().quoteRest)}</span></p> <div class="mt-12 flex flex-col items-center gap-4 svelte-106tlkb">`);
    if (activeTestimonial().logo) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<img${attr("src", activeTestimonial().logo)}${attr("alt", activeTestimonial().company)} class="h-11 w-auto svelte-106tlkb"/>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<span class="font-mono text-para-14 font-semibold uppercase tracking-widest text-white/70 svelte-106tlkb">${escape_html(activeTestimonial().company)}</span>`);
    }
    $$renderer2.push(`<!--]--> <div class="svelte-106tlkb"><p class="font-mono text-para-16 font-medium svelte-106tlkb">${escape_html(activeTestimonial().name)}</p> <p class="mt-1 font-mono text-para-12 text-white/40 svelte-106tlkb">${escape_html(activeTestimonial().role)}</p></div></div></div></section> <section class="bg-white py-[160px] svelte-106tlkb"><div class="mx-4 grid grid-cols-1 gap-16 lg:mx-[120px] lg:grid-cols-[1fr_800px] lg:items-stretch lg:gap-12 svelte-106tlkb"><div class="flex flex-col svelte-106tlkb"><h2 class="text-web-32 font-semibold text-gray-900 sm:text-web-40 md:text-web-48 svelte-106tlkb">Industry FAQ</h2> <p class="mt-6 max-w-lg text-para-20 text-gray-500 svelte-106tlkb">Choosing a payment platform is an important decision. Here are answers to the questions
				businesses ask before getting started with ElixirPay.</p> <img${attr("src", faqIllustration)} alt="" class="mt-auto hidden h-auto lg:block lg:w-96 svelte-106tlkb"/></div> <div class="rounded-2xl border border-gray-200 svelte-106tlkb"><!--[-->`);
    const each_array_10 = ensure_array_like(industryFaqs);
    for (let i = 0, $$length = each_array_10.length; i < $$length; i++) {
      let faq = each_array_10[i];
      $$renderer2.push(`<button class="flex w-full items-start justify-between gap-6 border-b border-gray-100 p-8 text-left last:border-b-0 svelte-106tlkb"><div class="svelte-106tlkb"><span class="block text-web-20 font-medium text-gray-900 svelte-106tlkb">${escape_html(faq.question)}</span> `);
      if (openIndustryFaqIndex === i) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<p class="mt-4 text-para-16 text-gray-500 svelte-106tlkb">${escape_html(faq.answer)}</p>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div> <span class="relative mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-400 svelte-106tlkb"><span class="absolute h-[2px] w-3 rounded-full bg-gray-600 svelte-106tlkb"></span> <span${attr_class(`absolute h-3 w-[2px] rounded-full bg-gray-600 transition-transform duration-300 ${openIndustryFaqIndex === i ? "scale-y-0" : "scale-y-100"}`, "svelte-106tlkb")}></span></span></button>`);
    }
    $$renderer2.push(`<!--]--></div></div></section> <section class="relative overflow-hidden bg-black py-[200px] text-center text-white svelte-106tlkb"><div class="absolute inset-0 bg-cover bg-top bg-no-repeat svelte-106tlkb" style="background-image: url('https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%2010%20-%20sales/bg.png')"></div> <div class="container-page relative z-10 svelte-106tlkb"><div class="mx-auto h-24 w-24 [perspective:600px] svelte-106tlkb"><img${attr("src", finalCtaCoin)} alt="" class="coin-spin h-full w-full svelte-106tlkb"/></div> <h2 class="mx-auto mt-8 max-w-4xl text-web-32 font-semibold sm:text-web-40 md:text-web-56 svelte-106tlkb">Power the Way Your<br class="svelte-106tlkb"/>Industry Moves Money</h2> <p class="mx-auto mt-6 max-w-4xl text-balance text-para-20 text-white/70 svelte-106tlkb">Every industry has unique payment challenges. ElixirPay provides the infrastructure to
			simplify them—helping your business collect, move, and manage money with confidence.</p> <a href="/contact" class="mt-10 inline-block rounded-lg bg-white px-6 py-3 font-mono text-para-14 font-medium text-gray-900 hover:bg-gray-100 svelte-106tlkb">Talk to Sales</a></div></section>`);
  });
}
export {
  _page as default
};
