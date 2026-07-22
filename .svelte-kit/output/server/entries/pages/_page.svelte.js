import { aa as attributes, ab as clsx$1, b as attr_class, a as attr, ac as attr_style, e as escape_html, ad as stringify, ae as head, c as ensure_array_like, d as derived } from "../../chunks/index.js";
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
function Hero($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const dashboard = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%201%20-%20Hero%20section/bashboard.png";
    const arrow = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%201%20-%20Hero%20section/arrow.png";
    const logo = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Nav%20bar/elixirpaylogo.svg";
    $$renderer2.push(`<section class="relative bg-white"><div class="absolute inset-x-0 top-0 z-0 h-[1050px]" style="background-image: linear-gradient(to bottom, #171717, #23223c, #2b2d64, #2f398f, #2c45bc, #2856d2, #1e68e9, #007aff, #0090ff, #00a2fe, #00b2f6, #00c0eb)"></div> <div class="pointer-events-none absolute inset-x-0 top-0 z-0 h-[1050px] md:pointer-events-auto">`);
    FluidSimulation($$renderer2, { class: "h-full w-full" });
    $$renderer2.push(`<!----></div> <header${attr_class(`fixed inset-x-0 z-30 mx-auto flex items-center justify-between transition-all duration-300 ${"container-page top-0 py-8"}`)}><a href="/" class="flex items-center"><img${attr("src", logo)} alt="ElixirPay"${attr_class(`w-auto transition-all duration-300 ${"h-9 md:h-[72px]"}`)}/></a> <nav class="hidden md:flex items-center gap-1 text-para-14"><a href="/" class="rounded-full bg-white px-5 py-2 text-black">Home</a> <a href="/services" class="rounded-full px-5 py-2 text-white/70 hover:text-white">Products</a> <a href="/services" class="rounded-full px-5 py-2 text-white/70 hover:text-white">Services</a> <a href="/about" class="rounded-full px-5 py-2 text-white/70 hover:text-white">About</a></nav> <a href="/contact" class="hidden md:inline-block rounded-full bg-white px-5 py-2.5 font-mono text-para-14 font-medium text-black hover:bg-gray-100 lg:px-6 lg:py-3">Contact Us</a> <button class="text-[32px] leading-none text-white md:hidden" aria-label="Open menu">☰</button></header> <aside${attr_class(`fixed inset-0 z-50 flex w-full transform flex-col bg-black text-white transition-transform duration-300 ease-in-out md:hidden ${"translate-x-full"}`)}><div class="flex items-center justify-between p-8"><img${attr("src", logo)} alt="ElixirPay" class="h-9 w-auto"/> <button aria-label="Close menu" class="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-xl">✕</button></div> <nav class="flex flex-col px-8"><a href="/" class="border-b border-white/10 py-5 font-mono text-para-16 font-semibold uppercase tracking-widest">Home</a> <a href="/services" class="border-b border-white/10 py-5 font-mono text-para-16 font-semibold uppercase tracking-widest">Products</a> <a href="/services" class="border-b border-white/10 py-5 font-mono text-para-16 font-semibold uppercase tracking-widest">Services</a> <a href="/about" class="border-b border-white/10 py-5 font-mono text-para-16 font-semibold uppercase tracking-widest">About</a></nav> <a href="/contact" class="mx-8 mb-8 mt-auto rounded-lg bg-white px-6 py-4 text-center font-mono text-para-16 font-medium text-black hover:bg-gray-100">Contact Us</a></aside>  <div class="container-page pointer-events-none relative z-10 pt-[180px] text-center md:pt-[220px]"><h1 class="mx-auto max-w-3xl text-web-32 font-semibold text-white sm:text-web-40 md:text-web-48 lg:text-web-56">Payments Infrastructure<br/>Built for Modern Businesses.</h1> <p class="mx-auto mt-5 max-w-3xl text-balance text-para-20 text-white/70">Accept payments, automate payouts, and manage your entire payment ecosystem with a secure
			platform designed to help businesses grow faster.</p> <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4"><a href="/contact" class="pointer-events-auto w-full rounded-lg border border-white/20 bg-white/5 px-5 py-4 text-center font-mono text-para-16 font-medium text-white hover:bg-white/10 sm:w-auto sm:px-8">Get Started</a> <a href="/services" class="pointer-events-auto w-full rounded-lg bg-white px-5 py-4 text-center font-mono text-para-16 font-medium text-black hover:bg-gray-100 sm:w-auto sm:px-8">View Documentation</a></div></div>  <div class="container-page pointer-events-none relative z-10 mt-[120px] pb-16"><div class="relative mx-auto max-w-6xl"><img${attr("src", arrow)} alt="" class="pointer-events-none absolute -top-[176px] right-[-116px] z-20 hidden w-36 opacity-90 md:block lg:right-[-80px] lg:w-44"/> <img${attr("src", dashboard)} alt="ElixirPay dashboard" class="block w-[760px] max-w-none drop-shadow-2xl md:w-full md:max-w-full"/></div></div></section>`);
  });
}
function TextReveal($$renderer, $$props) {
  let {
    text,
    class: className = "",
    fillClass = "text-gray-900",
    strokeColor = "#c7cdd6"
  } = $$props;
  let x = 0;
  let y = 0;
  let r = 0;
  $$renderer.push(`<div role="presentation" class="text-reveal relative"><p${attr_class(`text-reveal-outline ${stringify(className)}`, "svelte-zrdux6")}${attr_style(`-webkit-text-stroke-color: ${stringify(strokeColor)};`)}>${escape_html(text)}</p> <p aria-hidden="true"${attr_class(`text-reveal-fill absolute inset-0 ${stringify(className)} ${stringify(fillClass)}`, "svelte-zrdux6")}${attr_style(`clip-path: circle(${stringify(r)}px at ${stringify(x)}px ${stringify(y)}px);`)}>${escape_html(text)}</p></div>`);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const assetBase = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%202%20-%20About%20and%20social%20proffs/";
    const sealLogo = assetBase + "3d%20elixirpay.png";
    const trustLogos = [1, 2, 3, 4, 5, 6].map((n) => `${assetBase}LOGO${n}.png`);
    const solutionsIconBase = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%203%20-%20One%20Platform/Menu%20icons/";
    const solutionsIcons = [
      solutionsIconBase + "icon%201.png",
      solutionsIconBase + "Icon2.png",
      solutionsIconBase + "icon%203.png",
      solutionsIconBase + "icon%204.png"
    ];
    const acceptPaymentsIllustrationBase = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%203%20-%20One%20Platform/body%20illustraions/Accept%20Payments/";
    const moveMoneyIllustrationBase = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%203%20-%20One%20Platform/body%20illustraions/Move%20Money/";
    const manageFinanceIllustrationBase = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%203%20-%20One%20Platform/body%20illustraions/Manage%20Finance/";
    const enterpriseSolutionsIllustrationBase = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%203%20-%20One%20Platform/body%20illustraions/Enterprise%20Solutions/";
    const solutionCategories = [
      {
        icon: solutionsIcons[0],
        label: "Accept Payments",
        items: [
          {
            label: "Payment Gateway",
            heading: "Explore Payment Gateway",
            description: "Accept payments, automate payouts, and manage your entire payment ecosystem with a secure platform designed to help businesses grow faster.",
            illustration: acceptPaymentsIllustrationBase + "replace.png"
          },
          {
            label: "Hosted Checkout",
            heading: "Checkout That Converts Better",
            description: "Deliver a secure, mobile friendly checkout experience that helps customers complete payments with confidence and fewer drop offs.",
            cta: "Explore Hosted Checkout",
            illustration: acceptPaymentsIllustrationBase + "HOSTED%20CHECKOUT.png"
          },
          {
            label: "Payment Links",
            heading: "Send Money At Scale",
            description: "Create and share payment links in seconds through email, SMS, or messaging apps without building a website or mobile application.",
            cta: "Explore Payment Links",
            illustration: acceptPaymentsIllustrationBase + "Payment%20LINKS.png"
          },
          {
            label: "QR Payments",
            heading: "Scan. Pay. Done.",
            description: "Accept instant payments with dynamic and static QR codes that work across leading UPI applications and payment platforms.",
            cta: "Explore QR Payments",
            illustration: acceptPaymentsIllustrationBase + "QR%20PAYMENT.png"
          },
          {
            label: "Invoices",
            heading: "Invoices That Get Paid",
            description: "Create professional invoices, share them instantly, and help customers pay online without unnecessary follow ups.",
            cta: "Explore Invoices",
            illustration: acceptPaymentsIllustrationBase + "INVOICES.png"
          },
          {
            label: "Subscriptions",
            heading: "Recurring Payments. Simplified.",
            description: "Automate recurring billing for memberships, SaaS products, and subscription services while reducing manual effort.",
            cta: "Explore Subscriptions",
            illustration: acceptPaymentsIllustrationBase + "SUBSCRIPTIONS.png"
          }
        ]
      },
      {
        icon: solutionsIcons[1],
        label: "Move Money",
        items: [
          {
            label: "Payouts",
            heading: "Send Money At Scale",
            description: "Automate payouts to vendors, partners, employees, and customers with complete visibility over every transfer.",
            cta: "Explore Payouts",
            illustration: moveMoneyIllustrationBase + "PAYOUTS.png"
          },
          {
            label: "Virtual Account",
            heading: "Know Every Incoming Payment",
            description: "Assign unique virtual accounts to customers and automatically identify incoming payments without manual reconciliation.",
            cta: "Explore Virtual Account",
            illustration: moveMoneyIllustrationBase + "VIRTUAL%20ACCOUNT.png"
          }
        ]
      },
      {
        icon: solutionsIcons[2],
        label: "Manage Finance",
        items: [
          {
            label: "Autonomous Reconciliation",
            heading: "Every Payment Accounted For",
            description: "Automatically match transactions, settlements, and reports so your finance team spends less time on manual verification.",
            cta: "Explore Reconciliation",
            illustration: manageFinanceIllustrationBase + "Reconciliation.png"
          }
        ]
      },
      {
        icon: solutionsIcons[3],
        label: "Enterprise Solutions",
        items: [
          {
            label: "White Label Solutions",
            heading: "Launch Under Your Brand",
            description: "Offer a complete payment platform with your own branding while ElixirPay powers the technology behind the scenes.",
            cta: "Explore White Label Solutions",
            illustration: enterpriseSolutionsIllustrationBase + "White%20Label.png"
          }
        ]
      }
    ];
    let activeCategoryIndex = 0;
    let activeItemIndex = 0;
    let activeCategory = derived(() => solutionCategories[activeCategoryIndex]);
    let activeItem = derived(() => activeCategory().items[activeItemIndex]);
    let mobileOpenCategory = 0;
    let mobileOpenItem = 0;
    const subItemInactiveColor = "text-gray-600";
    const heading = "ElixirPay is a complete payment infrastructure platform designed to help businesses accept payments, move money, and automate financial operations from a single system.";
    const aboutIllustrationBase = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%202%20-%20About%20and%20social%20proffs/";
    const aboutLeftIllustration = aboutIllustrationBase + "left.png";
    const aboutRightIllustration = aboutIllustrationBase + "right.png";
    const industriesImageBase = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%204%20-%20Payments%20Infrastructure%20/";
    const industries = [
      {
        key: "ecommerce",
        label: "E-commerce",
        gradient: "from-orange-500 to-orange-600",
        heading: "E-commerce",
        description: "Accept payments, automate payouts, and manage your entire payment ecosystem\nwith a secure platform designed to help businesses grow faster.",
        cta: "Learn More",
        image: industriesImageBase + "E-commerce.png"
      },
      {
        key: "healthcare",
        label: "Healthcare",
        gradient: "from-red-400 to-orange-400",
        heading: "Healthcare",
        description: "Accept patient payments and insurance settlements securely, with billing your care teams can trust.",
        cta: "Learn More",
        image: industriesImageBase + "HEALTHCARE.png"
      },
      {
        key: "education",
        label: "Education",
        gradient: "from-orange-500 to-red-500",
        heading: "Education",
        description: "Simplify tuition and fee collection with flexible, automated payment plans for students and parents.",
        cta: "Learn More",
        image: industriesImageBase + "EDUCATION.png"
      },
      {
        key: "travel",
        label: "Travel",
        gradient: "from-blue-500 to-blue-400",
        heading: "Travel",
        description: "Handle multi-currency bookings and refunds smoothly, so travelers can pay however suits them best.",
        cta: "Learn More",
        image: industriesImageBase + "TRAVEL.png"
      },
      {
        key: "logistics",
        label: "Logistics",
        gradient: "from-gray-900 to-gray-800",
        heading: "Logistics",
        description: "Move and reconcile money across accounts with the visibility and controls a finance team needs.",
        cta: "Learn More",
        image: industriesImageBase + "LOGISTICS.png"
      },
      {
        key: "logistics-2",
        label: "Logistics",
        gradient: "from-blue-600 to-blue-800",
        heading: "Logistics",
        description: "Automate subscription billing and recurring revenue so your product team can focus on shipping.",
        cta: "Learn More",
        image: industriesImageBase + "LOGISTICS.png"
      },
      {
        key: "retail",
        label: "Retail",
        gradient: "from-amber-400 to-amber-100",
        heading: "Retail",
        description: "Unify in-store and online payments into one dashboard, so every sales channel reconciles automatically.",
        cta: "Learn More",
        image: industriesImageBase + "RETAIL.png"
      },
      {
        key: "ngo",
        label: "NGO",
        gradient: "from-blue-500 to-blue-600",
        heading: "NGO",
        description: "Accept donations securely, improve transparency, and make giving simple for supporters around the world.",
        cta: "Learn More",
        image: industriesImageBase + "NGO%E2%80%99S.png"
      }
    ];
    let activeIndustryIndex = 0;
    let activeIndustry = derived(() => industries[activeIndustryIndex]);
    const growthMockupImage = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%205%20-%20Built%20for%20Growth./mockup.png";
    const growthIconBase = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%205%20-%20Built%20for%20Growth./";
    const growthFeatures = [
      {
        heading: "Launch Without Delays",
        description: "Integrate quickly with developer-first APIs, practical documentation, and a sandbox built to get you to production faster.",
        icon: growthIconBase + "iocn1.svg"
      },
      {
        heading: "Trust Every Transaction",
        description: "Security isn't an add-on. Every payment is backed by modern encryption, continuous monitoring, & enterprise-grade protection.",
        icon: growthIconBase + "icon%202.svg"
      },
      {
        heading: "Grow Without Limits",
        description: "Whether you're processing hundreds or millions of payments, ElixirPay scales with your business without added complexity.",
        icon: growthIconBase + "icon%203.svg"
      },
      {
        heading: "Complete Control",
        description: "Accept payments, automate payouts, reconcile transactions, and manage financial operations from one connected dashboard.",
        icon: growthIconBase + "icon%204.svg"
      }
    ];
    const developersMockupImage = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%206%20-%20developers/Mockups.png";
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
    const testimonialAssetBase = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%208%20-%20testimonials/";
    const testimonialLogo = testimonialAssetBase + "logo%20company.png";
    const testimonials = [
      {
        key: "cisco",
        avatar: testimonialAssetBase + "Image%201.png",
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
    const faqs = [
      {
        question: "Why should I choose ElixirPay over other payment platforms?",
        answer: "ElixirPay brings payment collection, payouts, reconciliation, and developer tools together on one platform. Instead of managing multiple systems, businesses can operate through a single payment infrastructure designed to grow with them."
      },
      {
        question: "Is ElixirPay suitable for startups as well as large businesses?",
        answer: "Yes. Whether you're launching your first product or managing enterprise-scale payment operations, ElixirPay is designed to support businesses at every stage of growth."
      },
      {
        question: "How quickly can I start accepting payments?",
        answer: "Getting started is designed to be simple. Once your account is verified and your integration is complete, you can begin accepting payments through your preferred payment methods."
      },
      {
        question: "Can developers integrate ElixirPay easily?",
        answer: "Absolutely. With developer-friendly APIs, SDKs, documentation, and a sandbox environment, your team can build, test, and launch with confidence."
      },
      {
        question: "What payment methods does ElixirPay support?",
        answer: "ElixirPay supports UPI, credit and debit cards, net banking, wallets, and other popular payment methods, giving your customers multiple ways to pay."
      },
      {
        question: "Is customer payment data secure?",
        answer: "Security is built into every layer of the platform. Modern encryption, secure authentication, and continuous monitoring help protect every transaction."
      }
    ];
    let openFaqIndex = 0;
    const faqStats = [
      {
        target: 100,
        suffix: "+",
        label: "APIs keys",
        bg: "bg-gray-50"
      },
      {
        target: 12,
        suffix: "+",
        label: "Payment Solutions",
        bg: "bg-white"
      },
      {
        target: 256,
        suffix: "",
        label: "bit Encryption",
        bg: "bg-gray-50"
      },
      {
        target: 24,
        suffix: "×7",
        label: "Infrastructure Monitoring",
        bg: "bg-white"
      }
    ];
    let faqStatCounts = faqStats.map(() => 0);
    const finalCtaCoin = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%2010%20-%20sales/coin.png";
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>ElixirPay — Payment Infrastructure Built for Growth</title>`);
      });
    });
    Hero($$renderer2);
    $$renderer2.push(`<!----> <section class="relative flex h-[998px] flex-col overflow-hidden bg-white svelte-1uha8ag"><img${attr("src", aboutLeftIllustration)} alt="" class="illustration-float pointer-events-none absolute left-0 top-0 h-auto w-24 sm:w-32 lg:w-64 svelte-1uha8ag" style="animation-duration: 2s;"/> <img${attr("src", aboutRightIllustration)} alt="" class="illustration-float pointer-events-none absolute right-0 top-0 h-auto w-24 sm:w-32 lg:w-64 svelte-1uha8ag" style="animation-duration: 2s; animation-delay: -1s;"/> <div class="container-page relative z-10 flex flex-1 flex-col items-center justify-center text-center svelte-1uha8ag"><img${attr("src", sealLogo)} alt="" class="h-36 w-auto svelte-1uha8ag"/> <div class="mx-auto mt-8 max-w-4xl svelte-1uha8ag">`);
    TextReveal($$renderer2, {
      text: heading,
      class: "text-web-24 font-semibold leading-snug sm:text-web-32 md:text-web-40"
    });
    $$renderer2.push(`<!----></div></div> <div class="h-[260px] overflow-hidden border-t border-gray-200 svelte-1uha8ag"><div class="marquee-track flex h-full w-max svelte-1uha8ag"><!--[-->`);
    const each_array = ensure_array_like([...trustLogos, ...trustLogos]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let src = each_array[$$index];
      $$renderer2.push(`<div class="flex h-full w-56 shrink-0 items-center justify-center border-r border-gray-200 px-6 svelte-1uha8ag"><img${attr("src", src)} alt="" class="h-20 w-auto max-w-full object-contain svelte-1uha8ag"/></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></section>  <section class="flex flex-col bg-gray-50 py-[160px] svelte-1uha8ag"><div class="container-page text-center svelte-1uha8ag"><h2 class="mx-auto max-w-2xl text-web-32 font-semibold text-gray-800 sm:text-web-40 md:text-web-48 svelte-1uha8ag">One Platform. Every<br class="svelte-1uha8ag"/>Payment Workflow.</h2> <p class="mx-auto mt-5 max-w-lg text-para-24 text-gray-500 svelte-1uha8ag">ElixirPay brings every essential payment<br class="hidden sm:inline svelte-1uha8ag"/>workflow together in
			one unified platform.</p></div> <div class="mx-6 mt-16 border border-gray-200 bg-white lg:hidden svelte-1uha8ag"><!--[-->`);
    const each_array_1 = ensure_array_like(solutionCategories);
    for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
      let category = each_array_1[i];
      $$renderer2.push(`<div class="border-b border-gray-100 last:border-b-0 svelte-1uha8ag"><button class="flex w-full items-center justify-between gap-3 px-6 py-5 text-left svelte-1uha8ag"><span class="flex items-center gap-2 font-mono text-para-14 font-semibold uppercase tracking-wide text-gray-900 svelte-1uha8ag"><img${attr("src", category.icon)} alt="" class="h-4 w-4 object-contain svelte-1uha8ag"/> ${escape_html(category.label)}</span> <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gray-300 text-gray-500 svelte-1uha8ag">${escape_html(mobileOpenCategory === i ? "−" : "+")}</span></button> `);
      if (mobileOpenCategory === i) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="px-6 pb-6 svelte-1uha8ag"><div class="h-0.5 w-full bg-blue-500 svelte-1uha8ag"></div> <!--[-->`);
        const each_array_2 = ensure_array_like(category.items);
        for (let j = 0, $$length2 = each_array_2.length; j < $$length2; j++) {
          let item = each_array_2[j];
          if (j === mobileOpenItem) {
            $$renderer2.push("<!--[0-->");
            $$renderer2.push(`<div class="mt-4 border border-gray-200 bg-gray-50 svelte-1uha8ag"><div class="border-b border-gray-200 px-6 py-5 svelte-1uha8ag"><span class="font-mono text-para-16 font-bold uppercase tracking-wide text-gray-900 svelte-1uha8ag">${escape_html(item.label)}</span></div> <div class="p-6 svelte-1uha8ag"><p class="flex gap-2 text-para-16 text-gray-500 svelte-1uha8ag"><span class="mt-0.5 shrink-0 text-gray-400 svelte-1uha8ag">✓</span> <span class="svelte-1uha8ag">${escape_html(item.description)}</span></p> <a href="/services" class="mt-5 inline-block rounded-lg bg-gray-200 px-5 py-2.5 font-mono text-para-14 font-medium text-gray-900 hover:bg-gray-300 svelte-1uha8ag">${escape_html(item.cta ?? item.heading)}</a> `);
            if (item.illustration) {
              $$renderer2.push("<!--[0-->");
              $$renderer2.push(`<img${attr("src", item.illustration)} alt="" class="mx-auto mt-6 h-40 w-40 object-contain svelte-1uha8ag"/>`);
            } else {
              $$renderer2.push("<!--[-1-->");
            }
            $$renderer2.push(`<!--]--></div></div>`);
          } else {
            $$renderer2.push("<!--[-1-->");
            $$renderer2.push(`<button class="mt-4 block w-full border-t border-gray-100 pt-4 text-left font-mono text-para-14 uppercase tracking-wide text-gray-500 svelte-1uha8ag">${escape_html(item.label)}</button>`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="mx-[120px] mt-16 hidden h-[620px] flex-col overflow-hidden border border-gray-200 bg-white lg:flex svelte-1uha8ag"><div class="grid grid-cols-2 divide-x divide-gray-200 border-b border-gray-200 sm:grid-cols-4 svelte-1uha8ag"><!--[-->`);
    const each_array_3 = ensure_array_like(solutionCategories);
    for (let i = 0, $$length = each_array_3.length; i < $$length; i++) {
      let category = each_array_3[i];
      $$renderer2.push(`<button${attr_class(
        `flex items-center justify-center gap-2 px-4 py-6 text-para-24 font-medium transition-colors ${i === activeCategoryIndex ? "bg-gray-100 text-gray-900" : "text-gray-500 hover:bg-gray-50"}`,
        "svelte-1uha8ag"
      )}><img${attr("src", category.icon)} alt="" class="h-5 w-5 object-contain svelte-1uha8ag"/> ${escape_html(category.label)}</button>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="flex flex-1 flex-col md:flex-row svelte-1uha8ag"><div class="flex shrink-0 flex-col border-b border-gray-100 px-8 py-10 md:w-1/4 md:border-b-0 md:border-r svelte-1uha8ag"><!--[-->`);
    const each_array_4 = ensure_array_like(activeCategory().items);
    for (let i = 0, $$length = each_array_4.length; i < $$length; i++) {
      let item = each_array_4[i];
      $$renderer2.push(`<button${attr_class(
        `w-full pb-4 text-left transition-colors ${i === activeItemIndex ? "text-gray-900" : `${subItemInactiveColor} hover:text-gray-400`}`,
        "svelte-1uha8ag"
      )}><span class="font-mono text-para-14 font-semibold uppercase tracking-wide svelte-1uha8ag">${escape_html(item.label)}</span> <div${attr_class(`relative mt-3 h-0.5 w-full ${i === activeItemIndex ? "bg-blue-200" : "bg-gray-100"}`, "svelte-1uha8ag")}>`);
      if (i === activeItemIndex) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<!---->`);
        {
          $$renderer2.push(`<div class="solutions-progress-fill absolute inset-y-0 left-0 bg-blue-500 svelte-1uha8ag" style="animation-duration: 5000ms"></div>`);
        }
        $$renderer2.push(`<!---->`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div></button>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="relative flex flex-1 items-start px-8 py-10 md:px-12 svelte-1uha8ag"><div class="max-w-md svelte-1uha8ag"><h3 class="text-web-26 font-bold text-gray-900 svelte-1uha8ag">${escape_html(activeItem().heading)}</h3> <p class="mt-4 text-para-18 text-gray-500 svelte-1uha8ag">${escape_html(activeItem().description)}</p> <a href="/services" class="mt-8 inline-flex items-center gap-1.5 rounded-lg bg-gray-100 px-5 py-2.5 font-mono text-para-16 font-medium text-gray-900 hover:bg-gray-200 svelte-1uha8ag">${escape_html(activeItem().cta ?? activeItem().heading)} <span aria-hidden="true" class="svelte-1uha8ag">→</span></a></div> `);
    if (activeItem().illustration) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<img${attr("src", activeItem().illustration)} alt="" class="absolute bottom-8 right-24 illustration-float hidden h-[420px] w-[420px] object-contain lg:block svelte-1uha8ag"/>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<svg viewBox="0 0 200 200" class="absolute bottom-8 right-24 illustration-float hidden h-[420px] w-[420px] text-gray-300 lg:block svelte-1uha8ag" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="40" y="30" width="120" height="140" rx="6" class="svelte-1uha8ag"></rect><circle cx="100" cy="100" r="26" class="svelte-1uha8ag"></circle><path d="M100 74v12M100 114v12M74 100h12M114 100h12" class="svelte-1uha8ag"></path></svg>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></section> <section class="bg-white py-[160px] svelte-1uha8ag"><div class="container-page text-center svelte-1uha8ag"><h2 class="mx-auto max-w-2xl text-web-32 font-semibold text-gray-800 sm:text-web-40 md:text-web-48 svelte-1uha8ag">Payments Infrastructure<br class="svelte-1uha8ag"/>Built for Modern Businesses.</h2> <p class="mx-auto mt-6 max-w-3xl text-para-24 text-gray-500 svelte-1uha8ag">ElixirPay brings every essential payment workflow<br class="hidden sm:inline svelte-1uha8ag"/>together in
			one unified platform.</p></div> <div class="mx-6 mt-16 flex flex-col overflow-hidden border border-gray-200 bg-white lg:hidden svelte-1uha8ag"><!--[-->`);
    const each_array_5 = ensure_array_like(industries);
    for (let i = 0, $$length = each_array_5.length; i < $$length; i++) {
      let industry = each_array_5[i];
      $$renderer2.push(`<div${attr_class(`industry-panel-mobile relative w-full overflow-hidden border-b border-gray-100 last:border-b-0 ${i === activeIndustryIndex ? "h-[520px] sm:h-[600px] md:h-[660px]" : "h-16"}`, "svelte-1uha8ag")}><button${attr_class(`absolute inset-x-0 top-0 flex h-16 w-full items-center bg-gradient-to-r px-6 transition-opacity duration-500 ${stringify(industry.gradient)} ${i === activeIndustryIndex ? "pointer-events-none opacity-0" : "opacity-100"}`, "svelte-1uha8ag")}><span class="font-mono text-para-16 font-semibold uppercase tracking-widest text-white svelte-1uha8ag">${escape_html(industry.label)}</span></button> <div${attr_class(`absolute inset-0 transition-opacity duration-500 ${i === activeIndustryIndex ? "opacity-100" : "pointer-events-none opacity-0"}`, "svelte-1uha8ag")}><div class="relative h-64 w-full overflow-hidden sm:h-80 md:h-96 svelte-1uha8ag">`);
      if (industry.image) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<img${attr("src", industry.image)}${attr("alt", industry.heading)} class="h-full w-full object-cover svelte-1uha8ag"/>`);
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<div${attr_class(`flex h-full w-full items-center justify-center bg-gradient-to-b ${stringify(industry.gradient)}`, "svelte-1uha8ag")}><span class="font-mono text-para-16 font-medium tracking-widest text-white/90 svelte-1uha8ag">${escape_html(industry.label)}</span></div>`);
      }
      $$renderer2.push(`<!--]--></div> <div class="p-6 svelte-1uha8ag"><h3 class="text-web-20 font-semibold text-blue-900 svelte-1uha8ag">${escape_html(industry.heading)}</h3> <p class="mt-3 whitespace-pre-line text-para-16 text-gray-500 svelte-1uha8ag">${escape_html(industry.description)}</p> <a href="/services" class="mt-5 inline-flex items-center rounded-lg bg-gray-100 px-5 py-2.5 font-mono text-para-14 font-medium text-gray-900 hover:bg-gray-200 svelte-1uha8ag">${escape_html(industry.cta)}</a></div></div></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="mx-[120px] mt-16 hidden overflow-hidden border border-gray-200 bg-white lg:block svelte-1uha8ag"><div class="flex h-[620px] gap-3 p-4 svelte-1uha8ag"><!--[-->`);
    const each_array_6 = ensure_array_like(industries);
    for (let i = 0, $$length = each_array_6.length; i < $$length; i++) {
      let industry = each_array_6[i];
      $$renderer2.push(`<button class="industry-panel relative overflow-hidden border border-gray-200 svelte-1uha8ag"${attr_style(`flex-grow: ${stringify(i === activeIndustryIndex ? 10 : 1)}; flex-basis: 0%;`)}>`);
      if (industry.image) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<img${attr("src", industry.image)}${attr("alt", industry.heading)}${attr_class(`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${i === activeIndustryIndex ? "opacity-100" : "pointer-events-none opacity-0"}`, "svelte-1uha8ag")}/>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <div${attr_class(`absolute inset-0 flex items-center justify-center bg-gradient-to-b ${stringify(industry.gradient)} transition-opacity duration-500 hover:brightness-105 ${industry.image && i === activeIndustryIndex ? "pointer-events-none opacity-0" : "opacity-100"}`, "svelte-1uha8ag")}><span class="[writing-mode:vertical-rl] rotate-180 font-mono text-para-16 font-medium tracking-widest text-white/90 svelte-1uha8ag">${escape_html(industry.label)}</span></div></button>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-end svelte-1uha8ag"><div class="svelte-1uha8ag"><h3 class="text-web-24 font-semibold text-blue-900 svelte-1uha8ag">${escape_html(activeIndustry().heading)}</h3> <p class="mt-3 max-w-3xl whitespace-pre-line text-para-18 text-gray-500 svelte-1uha8ag">${escape_html(activeIndustry().description)}</p> <a href="/services" class="mt-6 inline-flex items-center rounded-lg bg-gray-100 px-5 py-2.5 font-mono text-para-14 font-medium text-gray-900 hover:bg-gray-200 svelte-1uha8ag">${escape_html(activeIndustry().cta)}</a></div> <div class="flex shrink-0 gap-3 svelte-1uha8ag"><button aria-label="Previous industry"${attr("disabled", activeIndustryIndex === 0, true)} class="flex h-24 w-24 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-4xl text-gray-400 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-gray-50 svelte-1uha8ag">‹</button> <button aria-label="Next industry"${attr("disabled", activeIndustryIndex === industries.length - 1, true)} class="flex h-24 w-24 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-4xl text-gray-900 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-gray-50 svelte-1uha8ag">›</button></div></div></div></section> <section class="bg-[#F8F8F8] py-[160px] svelte-1uha8ag"><div class="container-page text-center svelte-1uha8ag"><h2 class="text-web-32 font-semibold text-gray-800 sm:text-web-40 md:text-web-48 svelte-1uha8ag">More Than Payments. Built for Growth.</h2> <p class="mx-auto mt-6 max-w-4xl text-para-24 text-gray-500 svelte-1uha8ag">Every feature, API, and workflow is designed to remove operational friction, so<br class="hidden sm:inline svelte-1uha8ag"/>your business can spend less time managing payments and more time growing.</p></div> <div class="container-page relative mt-16 svelte-1uha8ag"><div class="mx-auto max-w-5xl overflow-hidden rounded-2xl border-t border-gray-200 svelte-1uha8ag"><img${attr("src", growthMockupImage)} alt="ElixirPay onboarding dashboard" class="block w-full svelte-1uha8ag"/></div> <a href="/services" class="absolute bottom-6 left-1/2 inline-flex -translate-x-1/2 items-center rounded-lg bg-gray-900 px-6 py-3 font-mono text-para-14 font-medium text-white hover:bg-gray-800 svelte-1uha8ag">View Details</a></div> <div class="mx-6 mt-20 grid grid-cols-1 gap-10 text-left sm:grid-cols-2 lg:mx-[120px] lg:grid-cols-4 svelte-1uha8ag"><!--[-->`);
    const each_array_7 = ensure_array_like(growthFeatures);
    for (let i = 0, $$length = each_array_7.length; i < $$length; i++) {
      let feature = each_array_7[i];
      $$renderer2.push(`<div class="group svelte-1uha8ag"><div class="flex h-24 w-24 items-center justify-start svelte-1uha8ag"><span${attr_class(
        `inline-block ${stringify([
          "icon-anim-launch",
          "icon-anim-trust",
          "icon-anim-grow",
          "icon-anim-control"
        ][i])}`,
        "svelte-1uha8ag"
      )}><img${attr("src", feature.icon)} alt="" class="h-12 w-12 transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 svelte-1uha8ag"/></span></div> <h3 class="mt-4 text-web-20 font-semibold text-gray-900 svelte-1uha8ag">${escape_html(feature.heading)}</h3> <p class="mt-2 text-para-16 text-gray-500 svelte-1uha8ag">${escape_html(feature.description)}</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="bg-[#171717] py-[160px] svelte-1uha8ag"><div class="container-page text-center svelte-1uha8ag"><h2 class="mx-auto max-w-3xl text-web-32 font-semibold text-white sm:text-web-40 md:text-web-48 svelte-1uha8ag">Build Payments. Not Complexity.</h2> <p class="mx-auto mt-6 max-w-3xl text-para-24 text-white/60 svelte-1uha8ag">Clean APIs, practical documentation, and production-ready tools designed to help your team
			spend less time integrating and more time building.</p></div> <div class="mx-6 mt-20 grid grid-cols-1 gap-16 lg:mx-[120px] lg:grid-cols-[280px_1fr_280px] lg:items-center lg:gap-8 svelte-1uha8ag"><div class="order-2 flex flex-col gap-12 text-left lg:order-1 svelte-1uha8ag"><div class="svelte-1uha8ag"><svg viewBox="0 0 24 24" class="h-8 w-8 text-blue-400 svelte-1uha8ag" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4 14H12L11 22L20 10H12L13 2Z" class="svelte-1uha8ag"></path></svg> <h3 class="mt-4 text-web-20 font-semibold text-white svelte-1uha8ag">Build Faster</h3> <p class="mt-2 text-para-16 text-white/60 svelte-1uha8ag">Designed for developers who would rather build products than payment integrations.</p></div> <div class="svelte-1uha8ag"><svg viewBox="0 0 24 24" class="h-8 w-8 text-blue-400 svelte-1uha8ag" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4V16M7 16L3 12M7 16L11 12" class="svelte-1uha8ag"></path><path d="M17 20V8M17 8L13 12M17 8L21 12" class="svelte-1uha8ag"></path></svg> <h3 class="mt-4 text-web-20 font-semibold text-white svelte-1uha8ag">Multiple SDKs</h3> <p class="mt-2 text-para-16 text-white/60 svelte-1uha8ag">Use familiar SDKs to move from idea to integration without starting from scratch.</p></div></div> <div class="relative order-1 lg:order-2 svelte-1uha8ag"><div class="relative overflow-hidden svelte-1uha8ag"><img${attr("src", developersMockupImage)} alt="ElixirPay developer console" class="block w-full svelte-1uha8ag"/> <div class="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#171717] to-transparent svelte-1uha8ag"></div></div> <a href="/developers" class="absolute bottom-6 left-1/2 inline-flex -translate-x-1/2 items-center rounded-lg bg-white px-6 py-3 font-mono text-para-14 font-medium text-gray-900 hover:bg-gray-100 svelte-1uha8ag">View Documents</a></div> <div class="order-3 flex flex-col gap-12 text-left svelte-1uha8ag"><div class="svelte-1uha8ag"><svg viewBox="0 0 24 24" class="h-8 w-8 text-blue-400 svelte-1uha8ag" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="4" rx="1" class="svelte-1uha8ag"></rect><path d="M5 8V18C5 19.1 5.9 20 7 20H17C18.1 20 19 19.1 19 18V8" class="svelte-1uha8ag"></path><path d="M10 12H14" class="svelte-1uha8ag"></path></svg> <h3 class="mt-4 text-web-20 font-semibold text-white svelte-1uha8ag">Sandbox Environment</h3> <p class="mt-2 text-para-16 text-white/60 svelte-1uha8ag">Test every payment scenario before your customers ever see it.</p></div> <div class="svelte-1uha8ag"><svg viewBox="0 0 24 24" class="h-8 w-8 text-blue-400 svelte-1uha8ag" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12C2 12 5.5 6 12 6C18.5 6 22 12 22 12C22 12 18.5 18 12 18C5.5 18 2 12 2 12Z" class="svelte-1uha8ag"></path><circle cx="12" cy="12" r="3" class="svelte-1uha8ag"></circle></svg> <h3 class="mt-4 text-web-20 font-semibold text-white svelte-1uha8ag">24×7 Monitoring</h3> <p class="mt-2 text-para-16 text-white/60 svelte-1uha8ag">Stay on top of every transaction with real time visibility into your payment ecosystem.</p></div></div></div></section> <section class="bg-white py-[160px] svelte-1uha8ag"><div class="container-page text-center svelte-1uha8ag"><h2 class="mx-auto max-w-3xl text-web-32 font-semibold text-gray-800 sm:text-web-40 md:text-web-48 svelte-1uha8ag">Built Around Every Team</h2> <p class="mx-auto mt-6 max-w-4xl text-para-24 text-gray-500 svelte-1uha8ag">One platform. Different priorities.<br class="svelte-1uha8ag"/> Every team gets the visibility<br class="svelte-1uha8ag"/> and control they need without<br class="svelte-1uha8ag"/> switching between multiple tools.</p></div> <div class="mx-4 mt-20 sm:mx-8 lg:hidden svelte-1uha8ag"><!--[-->`);
    const each_array_8 = ensure_array_like(teams);
    for (let i = 0, $$length = each_array_8.length; i < $$length; i++) {
      let team = each_array_8[i];
      $$renderer2.push(`<div${attr_class(`border border-gray-200 p-8 ${i % 2 === 1 ? "bg-gray-50" : "bg-white"}`, "svelte-1uha8ag")}><img${attr("src", team.icon)} alt="" class="h-10 w-10 svelte-1uha8ag"/> <p${attr_class(`mt-6 text-para-14 font-mono font-medium uppercase tracking-widest ${stringify(team.labelColor)}`, "svelte-1uha8ag")}>${escape_html(team.label)}</p> <p class="mt-2 text-web-20 font-bold text-gray-900 svelte-1uha8ag">${escape_html(team.heading)}</p> <div class="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-gray-300 pt-4 svelte-1uha8ag"><!--[-->`);
      const each_array_9 = ensure_array_like(team.links);
      for (let $$index_8 = 0, $$length2 = each_array_9.length; $$index_8 < $$length2; $$index_8++) {
        let link = each_array_9[$$index_8];
        $$renderer2.push(`<span class="flex items-center gap-2 text-para-14 text-gray-700 svelte-1uha8ag"><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-gray-300 text-gray-600 svelte-1uha8ag">›</span> ${escape_html(link)}</span>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="mx-4 mt-20 hidden border-l border-t border-gray-200 sm:mx-8 lg:mx-[200px] lg:block svelte-1uha8ag"><div class="grid lg:grid-cols-3 svelte-1uha8ag"><!--[-->`);
    const each_array_10 = ensure_array_like(teams);
    for (let i = 0, $$length = each_array_10.length; i < $$length; i++) {
      let team = each_array_10[i];
      $$renderer2.push(`<div${attr_class(`group relative h-[320px] border-b border-r border-gray-200 p-8 transition-colors duration-500 ease-in-out hover:bg-blue-600 ${i % 2 === 1 ? "bg-gray-50" : "bg-white"}`, "svelte-1uha8ag")}><div class="flex h-full flex-col justify-between transition-opacity duration-500 ease-in-out group-hover:opacity-0 svelte-1uha8ag"><img${attr("src", team.icon)} alt="" class="h-10 w-10 svelte-1uha8ag"/> <a href="/services" class="flex items-center gap-2 text-web-24 font-semibold text-gray-900 svelte-1uha8ag">${escape_html(team.label)} <span aria-hidden="true" class="svelte-1uha8ag">↗</span></a></div> <div class="pointer-events-none absolute bottom-16 left-4 right-[-3rem] z-20 h-[320px] origin-bottom scale-0 bg-gray-100 p-8 shadow-2xl transition-transform duration-500 ease-in-out group-hover:pointer-events-auto group-hover:scale-100 svelte-1uha8ag"><div class="flex h-full flex-col justify-between svelte-1uha8ag"><img${attr("src", team.icon)} alt="" class="h-10 w-10 svelte-1uha8ag"/> <div class="svelte-1uha8ag"><p${attr_class(`text-para-14 font-mono font-medium uppercase tracking-widest ${stringify(team.labelColor)}`, "svelte-1uha8ag")}>${escape_html(team.label)}</p> <p class="mt-2 text-web-20 font-bold text-gray-900 svelte-1uha8ag">${escape_html(team.heading)}</p></div> <div class="grid grid-cols-2 gap-x-6 gap-y-3 border-t border-gray-300 pt-4 svelte-1uha8ag"><!--[-->`);
      const each_array_11 = ensure_array_like(team.links);
      for (let $$index_10 = 0, $$length2 = each_array_11.length; $$index_10 < $$length2; $$index_10++) {
        let link = each_array_11[$$index_10];
        $$renderer2.push(`<span class="flex items-center gap-2 text-para-14 text-gray-700 svelte-1uha8ag"><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-gray-300 text-gray-600 svelte-1uha8ag">›</span> ${escape_html(link)}</span>`);
      }
      $$renderer2.push(`<!--]--></div></div></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></section> <section class="bg-black py-[160px] text-center text-white svelte-1uha8ag"><div class="container-page svelte-1uha8ag"><h2 class="mx-auto max-w-2xl text-web-32 font-semibold sm:text-web-40 md:text-web-48 svelte-1uha8ag">Built on Trust. Proven<br class="svelte-1uha8ag"/>by Experience.</h2> <p class="mx-auto mt-6 max-w-2xl text-para-20 text-white/50 svelte-1uha8ag">The best measure of a payment platform<br class="svelte-1uha8ag"/> isn't what we say— it's what our<br class="svelte-1uha8ag"/> customers experience every day.</p></div> <div class="relative mt-20 svelte-1uha8ag"><button class="absolute left-8 top-1/2 z-10 -translate-y-1/2 rounded-md bg-white/5 p-3 transition hover:bg-white/10 svelte-1uha8ag" aria-label="Previous testimonial"><img${attr("src", testimonialArrowIcons.prev)} alt="" class="h-12 w-12 svelte-1uha8ag"/></button> <button class="absolute right-8 top-1/2 z-10 -translate-y-1/2 rounded-md bg-white/5 p-3 transition hover:bg-white/10 svelte-1uha8ag" aria-label="Next testimonial"><img${attr("src", testimonialArrowIcons.next)} alt="" class="h-12 w-12 svelte-1uha8ag"/></button> <div class="flex items-center justify-center gap-4 svelte-1uha8ag"><!--[-->`);
    const each_array_12 = ensure_array_like(visibleTestimonials());
    for (let $$index_12 = 0, $$length = each_array_12.length; $$index_12 < $$length; $$index_12++) {
      let { offset, testimonial } = each_array_12[$$index_12];
      $$renderer2.push(`<button${attr_class(
        `overflow-hidden rounded-2xl bg-white/10 transition-all duration-300 ${offset === 0 ? "h-[200px] w-[200px] opacity-100" : Math.abs(offset) === 1 ? "h-36 w-36 opacity-60" : "h-28 w-28 opacity-30"}`,
        "svelte-1uha8ag"
      )}${attr("aria-label", testimonial.name)}><img${attr("src", testimonial.avatar)}${attr("alt", testimonial.name)} class="h-full w-full object-cover svelte-1uha8ag"/></button>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="container-page mt-16 svelte-1uha8ag"><p class="mx-auto max-w-3xl text-web-24 font-medium leading-snug sm:text-web-28 svelte-1uha8ag"><span class="text-white svelte-1uha8ag">${escape_html(activeTestimonial().quoteHighlight)}</span> <span class="text-white/40 svelte-1uha8ag">${escape_html(activeTestimonial().quoteRest)}</span></p> <div class="mt-12 flex flex-col items-center gap-4 svelte-1uha8ag">`);
    if (activeTestimonial().logo) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<img${attr("src", activeTestimonial().logo)}${attr("alt", activeTestimonial().company)} class="h-11 w-auto svelte-1uha8ag"/>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<span class="font-mono text-para-14 font-semibold uppercase tracking-widest text-white/70 svelte-1uha8ag">${escape_html(activeTestimonial().company)}</span>`);
    }
    $$renderer2.push(`<!--]--> <div class="svelte-1uha8ag"><p class="font-mono text-para-16 font-medium svelte-1uha8ag">${escape_html(activeTestimonial().name)}</p> <p class="mt-1 font-mono text-para-12 text-white/40 svelte-1uha8ag">${escape_html(activeTestimonial().role)}</p></div></div></div></section> <section class="bg-white pt-[160px] svelte-1uha8ag"><div class="mx-4 grid grid-cols-1 gap-16 lg:mx-[120px] lg:grid-cols-[1fr_800px] lg:items-start lg:gap-12 svelte-1uha8ag"><div class="svelte-1uha8ag"><h2 class="text-web-32 font-semibold text-gray-900 sm:text-web-40 md:text-web-48 svelte-1uha8ag">Let's Clear Things Up</h2> <p class="mt-6 max-w-lg text-para-20 text-gray-500 svelte-1uha8ag">Choosing a payment platform is an important decision. Here are answers to the questions
				businesses ask before getting started with ElixirPay.</p> <a href="/contact" class="mt-10 inline-block rounded-lg border border-gray-200 bg-gray-50 px-5 py-2.5 font-mono text-para-14 font-medium text-gray-900 hover:bg-gray-100 svelte-1uha8ag">Learn more</a></div> <div class="rounded-2xl border border-gray-200 svelte-1uha8ag"><!--[-->`);
    const each_array_13 = ensure_array_like(faqs);
    for (let i = 0, $$length = each_array_13.length; i < $$length; i++) {
      let faq = each_array_13[i];
      $$renderer2.push(`<button class="flex w-full items-start justify-between gap-6 border-b border-gray-100 p-8 text-left last:border-b-0 svelte-1uha8ag"><div class="svelte-1uha8ag"><span class="block text-web-20 font-medium text-gray-900 svelte-1uha8ag">${escape_html(faq.question)}</span> `);
      if (openFaqIndex === i) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<p class="mt-4 text-para-16 text-gray-500 svelte-1uha8ag">${escape_html(faq.answer)}</p>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div> <span class="relative mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-400 svelte-1uha8ag"><span class="absolute h-[2px] w-3 rounded-full bg-gray-600 svelte-1uha8ag"></span> <span${attr_class(`absolute h-3 w-[2px] rounded-full bg-gray-600 transition-transform duration-300 ${openFaqIndex === i ? "scale-y-0" : "scale-y-100"}`, "svelte-1uha8ag")}></span></span></button>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="mt-[160px] grid grid-cols-2 border-y border-gray-100 lg:grid-cols-4 svelte-1uha8ag"><!--[-->`);
    const each_array_14 = ensure_array_like(faqStats);
    for (let i = 0, $$length = each_array_14.length; i < $$length; i++) {
      let stat = each_array_14[i];
      $$renderer2.push(`<div${attr_class(`border-b border-gray-100 px-8 py-14 text-center last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 ${stringify(stat.bg)}`, "svelte-1uha8ag")}><p class="text-web-40 font-semibold tabular-nums text-gray-900 sm:text-web-48 svelte-1uha8ag">${escape_html(faqStatCounts[i])}${escape_html(stat.suffix)}</p> <p class="mt-2 text-para-16 text-gray-500 svelte-1uha8ag">${escape_html(stat.label)}</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="relative overflow-hidden bg-black py-[200px] text-center text-white svelte-1uha8ag"><div class="absolute inset-0 bg-cover bg-top bg-no-repeat svelte-1uha8ag" style="background-image: url('https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%2010%20-%20sales/bg.png')"></div> <div class="container-page relative z-10 svelte-1uha8ag"><div class="mx-auto h-24 w-24 [perspective:600px] svelte-1uha8ag"><img${attr("src", finalCtaCoin)} alt="" class="coin-spin h-full w-full svelte-1uha8ag"/></div> <h2 class="mx-auto mt-8 max-w-4xl text-web-32 font-semibold sm:text-web-40 md:text-web-56 svelte-1uha8ag">The Future of<br class="svelte-1uha8ag"/>Payments Starts Here.</h2> <p class="mx-auto mt-6 max-w-4xl text-balance text-para-20 text-white/70 svelte-1uha8ag">Every growing business deserves payment infrastructure that's reliable, scalable, and
			built for the future. Focus on your business while ElixirPay keeps money moving.</p> <a href="/contact" class="mt-10 inline-block rounded-lg bg-white px-6 py-3 font-mono text-para-14 font-medium text-gray-900 hover:bg-gray-100 svelte-1uha8ag">Get Started</a></div></section>`);
  });
}
export {
  _page as default
};
