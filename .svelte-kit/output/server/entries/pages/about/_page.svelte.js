import { a as attr, b as ensure_array_like, c as attr_class, e as escape_html, d as derived, F as FILENAME, i as head, h as stringify, f as attr_style, j as clsx } from "../../../chunks/index.js";
import { p as push_element, a as pop_element } from "../../../chunks/dev.js";
import { S as SiteNav } from "../../../chunks/SiteNav.js";
import { G as GridBeam } from "../../../chunks/GridBeam.js";
AboutHero[FILENAME] = "src/lib/components/AboutHero.svelte";
function AboutHero($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      const logomark = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/About%20us/logomark.svg";
      const heroHeadlineLines = ["Payments Infrastructure", "Built for Modern Businesses."];
      let heroHeadlineCounter = 0;
      const heroHeadlineWords = heroHeadlineLines.map((line) => line.split(" ").map((word) => ({ word, index: heroHeadlineCounter++ })));
      const totalHeroHeadlineWords = heroHeadlineCounter;
      let heroHeadlineProgress = 0;
      let revealedHeroHeadlineCount = derived(() => Math.round(heroHeadlineProgress * totalHeroHeadlineWords));
      $$renderer2.push(`<section class="relative bg-white">`);
      push_element($$renderer2, "section", 59, 0);
      $$renderer2.push(`<div class="absolute inset-x-0 top-0 z-0 h-[900px]" style="background-image: linear-gradient(to bottom, #171717, #23223c, #2b2d64, #2f398f, #2c45bc, #2856d2, #1e68e9, #007aff, #0090ff, #00a2fe, #00b2f6, #00c0eb)">`);
      push_element($$renderer2, "div", 60, 1);
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div class="pointer-events-none absolute inset-x-0 top-0 z-0 h-[900px]">`);
      push_element($$renderer2, "div", 66, 1);
      GridBeam($$renderer2, { class: "h-full w-full" });
      $$renderer2.push(`<!----></div>`);
      pop_element();
      $$renderer2.push(` `);
      SiteNav($$renderer2, { active: "about", startTransparent: true });
      $$renderer2.push(`<!----> <div class="container-page pointer-events-none relative z-10 flex min-h-[900px] flex-col items-center justify-center pt-24 text-center">`);
      push_element($$renderer2, "div", 72, 1);
      $$renderer2.push(`<img${attr("src", logomark)} alt="" class="logomark-spin mb-10 h-32 w-32 drop-shadow-2xl sm:h-40 sm:w-40 md:h-44 md:w-44 svelte-3po90h"/>`);
      push_element($$renderer2, "img", 75, 2);
      pop_element();
      $$renderer2.push(` <h1 class="mx-auto max-w-3xl text-web-32 font-semibold sm:text-web-40 md:text-web-48 lg:text-web-56">`);
      push_element($$renderer2, "h1", 80, 2);
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(heroHeadlineWords);
      for (let li = 0, $$length = each_array.length; li < $$length; li++) {
        let lineWords = each_array[li];
        $$renderer2.push(`<!--[-->`);
        const each_array_1 = ensure_array_like(lineWords);
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let { word, index } = each_array_1[$$index];
          $$renderer2.push(`<span${attr_class(`transition-colors duration-300 ${index < revealedHeroHeadlineCount() ? "text-white" : "text-white/30"}`)}>`);
          push_element($$renderer2, "span", 85, 48);
          $$renderer2.push(`${escape_html(word)} </span>`);
          pop_element();
        }
        $$renderer2.push(`<!--]-->`);
        if (li === 0) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<br/>`);
          push_element($$renderer2, "br", 89, 27);
          pop_element();
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></h1>`);
      pop_element();
      $$renderer2.push(` <p class="mx-auto mt-5 max-w-3xl text-balance text-para-20 text-white/70">`);
      push_element($$renderer2, "p", 92, 2);
      $$renderer2.push(`Accept payments, automate payouts, and manage your entire payment ecosystem with a secure
			platform designed to help businesses grow faster.</p>`);
      pop_element();
      $$renderer2.push(` <a href="/contact" class="pointer-events-auto mt-10 rounded-lg bg-gray-100 px-8 py-4 text-center font-mono text-para-16 font-medium uppercase tracking-wide text-gray-900 hover:bg-gray-200">`);
      push_element($$renderer2, "a", 97, 2);
      $$renderer2.push(`Get Started</a>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</section>`);
      pop_element();
    },
    AboutHero
  );
}
AboutHero.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
_page[FILENAME] = "src/routes/about/+page.svelte";
function _page($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      const aboutIllustrationBase = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%202%20-%20About%20and%20social%20proffs/";
      const aboutLeftIllustration = aboutIllustrationBase + "left.png";
      const aboutRightIllustration = aboutIllustrationBase + "right.png";
      const finalCtaCoin = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%2010%20-%20sales/coin.png";
      const teamPhotoBase = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/About%20us/second%20section/";
      const teamPhotoLeft = teamPhotoBase + "image%202.svg";
      const teamPhotoCenter = teamPhotoBase + "image%201.svg";
      const teamPhotoRight = teamPhotoBase + "image%203.svg";
      const milestoneIcon = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/About%20us/third%20section/icon%201.svg";
      const milestones = [
        { year: "2026", label: ["ElixirPay", "Founded"] },
        { year: "Today", label: ["Building the", "Platform"] },
        {
          year: "Next",
          label: ["Empowering Businesses", "Across Industries"]
        },
        {
          year: "Future",
          label: ["Expanding the", "Payment Ecosystem"]
        }
      ];
      const approachIconBase = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/About%20us/fourth%20section/";
      const approachCardFrame = approachIconBase + "maincard.svg";
      const approachBgIconLeft = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/elixir%20icon%201.svg";
      const approachBgIconRight = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/elixir%20icon%202.svg";
      const approachCards = [
        {
          icon: approachIconBase + "icon%201.svg",
          title: "Security by Design",
          body: [
            {
              text: "Security isn't a feature – it's the foundation. Every "
            },
            { text: "transaction", bold: true },
            { text: " is protected through " },
            { text: "modern security practices", bold: true },
            { text: " and continuous monitoring." }
          ],
          rotate: "-3deg"
        },
        {
          icon: approachIconBase + "icon%202.svg",
          title: "Simplicity Over Complexity",
          body: [
            { text: "Powerful payment infrastructure " },
            { text: "shouldn't feel complicated.", bold: true },
            { text: " We " },
            { text: "focus on experiences", bold: true },
            { text: " that are intuitive, efficient, and easy to adopt." }
          ],
          rotate: "3deg"
        },
        {
          icon: approachIconBase + "icon4.svg",
          title: "Built to Scale",
          body: [
            { text: "Whether you're " },
            { text: "processing your first payment", bold: true },
            { text: " or expanding globally, ElixirPay is " },
            { text: "designed to grow with your business.", bold: true }
          ],
          rotate: "-3deg"
        },
        {
          icon: approachIconBase + "icon%205.svg",
          title: "Business First",
          body: [
            { text: "Every product " },
            { text: "decision starts with one question:", bold: true },
            { text: " does it help businesses " },
            { text: "operate better?", bold: true },
            { text: " If the answer is no, we keep improving." }
          ],
          rotate: "3deg"
        }
      ];
      const foundationSealLogo = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%202%20-%20About%20and%20social%20proffs/3d%20elixirpay.png";
      const foundationStats = [
        {
          target: 100,
          suffix: "+",
          label: "APIs",
          caption: ["Developer-first", "infrastructure"]
        },
        {
          target: 10,
          suffix: "+",
          label: "Payment Products",
          caption: ["One connected", "platform"]
        },
        {
          target: 24,
          suffix: "×7",
          label: "Monitoring",
          caption: ["Real-time platform", "visibility"]
        },
        {
          target: 256,
          suffix: "-bit",
          label: "Encryption",
          caption: ["Enterprise-grade", "security"]
        }
      ];
      let foundationStatCounts = foundationStats.map(() => 0);
      const lifeGalleryBase = "https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/About%20us/fifth/new%20card/";
      const lifeClotheslinePhotos = [
        { src: lifeGalleryBase + "card%20new%205.svg", sag: -31 },
        { src: lifeGalleryBase + "card%20new%204.svg", sag: -7 },
        { src: lifeGalleryBase + "card%20new%201.svg", sag: -8 },
        { src: lifeGalleryBase + "card%20new%202.svg", sag: -3 },
        { src: lifeGalleryBase + "card%20new%203.svg", sag: -25 }
      ];
      const bodyParagraphs = [
        [
          { text: "Businesses spend too much time managing" },
          { text: "disconnected payment systems,", bold: true },
          { text: "manual processes, and operational complexity." }
        ],
        [
          {
            text: "We believe payment infrastructure should work quietly in the background – reliable, secure, and ready to scale."
          }
        ],
        [
          {
            text: "That's why we're building ElixirPay: a platform that simplifies how businesses accept payments, automate financial operations, and grow with confidence."
          }
        ]
      ];
      let bodyWordCounter = 0;
      const bodyWords = bodyParagraphs.map((parts) => parts.flatMap((part) => part.text.split(" ").map((word) => ({ word, bold: !!part.bold, index: bodyWordCounter++ }))));
      const totalBodyWords = bodyWordCounter;
      function bodyWordColor(bold, index, revealedCount) {
        if (index >= revealedCount) return "text-gray-300";
        return bold ? "text-gray-700" : "text-gray-500";
      }
      let bodyProgress = 0;
      let revealedBodyCount = derived(() => Math.round(bodyProgress * totalBodyWords));
      const headlineLines = [
        "Because Payments Should",
        "Never Be a Business",
        "Challenge"
      ];
      let headlineCounter = 0;
      const headlineWords = headlineLines.map((line) => line.split(" ").map((word) => ({ word, index: headlineCounter++ })));
      const totalHeadlineWords = headlineCounter;
      let headlineProgress = 0;
      let revealedHeadlineCount = derived(() => Math.round(headlineProgress * totalHeadlineWords));
      let loaderProgress = 0;
      let activeStage = derived(() => Math.min(milestones.length - 1, Math.floor(loaderProgress * milestones.length)));
      let loaderTargetPercent = 0;
      let approachProgress = 0;
      let activeCardStage = derived(() => Math.min(approachCards.length - 1, Math.floor(approachProgress * approachCards.length)));
      head("cwls5q", $$renderer2, ($$renderer3) => {
        $$renderer3.title(($$renderer4) => {
          $$renderer4.push(`<title>About Us — ElixirPay</title>`);
        });
      });
      AboutHero($$renderer2);
      $$renderer2.push(`<!----> <section class="relative overflow-hidden bg-white pb-[200px] pt-[200px] svelte-cwls5q">`);
      push_element($$renderer2, "section", 455, 0);
      $$renderer2.push(`<img${attr("src", aboutLeftIllustration)} alt="" class="illustration-float pointer-events-none absolute left-0 top-0 hidden h-auto lg:block lg:w-64 svelte-cwls5q" style="animation-duration: 2s;"/>`);
      push_element($$renderer2, "img", 456, 1);
      pop_element();
      $$renderer2.push(` <img${attr("src", aboutRightIllustration)} alt="" class="illustration-float pointer-events-none absolute right-0 top-0 hidden h-auto lg:block lg:w-64 svelte-cwls5q" style="animation-duration: 2s; animation-delay: -1s;"/>`);
      push_element($$renderer2, "img", 462, 1);
      pop_element();
      $$renderer2.push(` <div class="container-page relative z-10 svelte-cwls5q">`);
      push_element($$renderer2, "div", 469, 1);
      $$renderer2.push(`<div class="mx-auto max-w-2xl svelte-cwls5q">`);
      push_element($$renderer2, "div", 470, 2);
      $$renderer2.push(`<div class="relative mb-8 h-20 w-56 sm:h-24 sm:w-64 svelte-cwls5q">`);
      push_element($$renderer2, "div", 471, 3);
      $$renderer2.push(`<img${attr("src", teamPhotoLeft)} alt=""${attr_class(
        `absolute left-1/2 top-4 h-16 w-16 drop-shadow-md transition-all duration-[1300ms] ease-[cubic-bezier(0.16,1,0.3,1)] sm:h-20 sm:w-20 ${"-translate-x-1/2 rotate-0 scale-75 opacity-0 blur-md"}`,
        "svelte-cwls5q"
      )}/>`);
      push_element($$renderer2, "img", 472, 4);
      pop_element();
      $$renderer2.push(` <img${attr("src", teamPhotoRight)} alt=""${attr_class(
        `absolute left-1/2 top-4 h-16 w-16 drop-shadow-md transition-all duration-[1300ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 sm:h-20 sm:w-20 ${"-translate-x-1/2 rotate-0 scale-75 opacity-0 blur-md"}`,
        "svelte-cwls5q"
      )}/>`);
      push_element($$renderer2, "img", 479, 4);
      pop_element();
      $$renderer2.push(` <img${attr("src", teamPhotoCenter)} alt=""${attr_class(
        `absolute left-1/2 top-0 z-10 h-20 w-20 -translate-x-1/2 drop-shadow-lg transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] sm:h-24 sm:w-24 ${"scale-90 opacity-0 blur-sm"}`,
        "svelte-cwls5q"
      )}/>`);
      push_element($$renderer2, "img", 486, 4);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <p class="font-mono text-para-14 font-semibold uppercase tracking-widest text-blue-600 svelte-cwls5q">`);
      push_element($$renderer2, "p", 495, 3);
      $$renderer2.push(`About Elixirpay</p>`);
      pop_element();
      $$renderer2.push(` <h2 class="mt-4 text-web-24 font-bold sm:text-web-32 md:text-web-40 svelte-cwls5q">`);
      push_element($$renderer2, "h2", 499, 3);
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(headlineWords);
      for (let li = 0, $$length = each_array.length; li < $$length; li++) {
        let lineWords = each_array[li];
        $$renderer2.push(`<!--[-->`);
        const each_array_1 = ensure_array_like(lineWords);
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let { word, index } = each_array_1[$$index];
          $$renderer2.push(`<span${attr_class(`transition-colors duration-300 ${index < revealedHeadlineCount() ? "text-gray-900" : "text-gray-300"}`, "svelte-cwls5q")}>`);
          push_element($$renderer2, "span", 501, 49);
          $$renderer2.push(`${escape_html(word)} </span>`);
          pop_element();
        }
        $$renderer2.push(`<!--]-->`);
        if (li === 0) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<br class="svelte-cwls5q"/>`);
          push_element($$renderer2, "br", 505, 28);
          pop_element();
        } else if (li === 1) {
          $$renderer2.push("<!--[1-->");
          $$renderer2.push(`<br class="sm:hidden svelte-cwls5q"/>`);
          push_element($$renderer2, "br", 505, 53);
          pop_element();
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></h2>`);
      pop_element();
      $$renderer2.push(` <div class="mt-8 space-y-6 leading-[1.2] svelte-cwls5q">`);
      push_element($$renderer2, "div", 509, 3);
      $$renderer2.push(`<!--[-->`);
      const each_array_2 = ensure_array_like(bodyWords);
      for (let $$index_3 = 0, $$length = each_array_2.length; $$index_3 < $$length; $$index_3++) {
        let paragraphWords = each_array_2[$$index_3];
        $$renderer2.push(`<p class="text-para-16 sm:text-para-18 md:text-para-20 svelte-cwls5q">`);
        push_element($$renderer2, "p", 511, 5);
        $$renderer2.push(`<!--[-->`);
        const each_array_3 = ensure_array_like(paragraphWords);
        for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
          let { word, bold, index } = each_array_3[$$index_2];
          $$renderer2.push(`<span${attr_class(`transition-colors duration-300 ${bold ? "font-semibold" : ""} ${stringify(bodyWordColor(bold, index, revealedBodyCount()))}`, "svelte-cwls5q")}>`);
          push_element($$renderer2, "span", 512, 53);
          $$renderer2.push(`${escape_html(word)} </span>`);
          pop_element();
        }
        $$renderer2.push(`<!--]--></p>`);
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
      $$renderer2.push(` <div class="relative h-[400vh] bg-black svelte-cwls5q">`);
      push_element($$renderer2, "div", 533, 0);
      $$renderer2.push(`<section class="sticky top-0 flex h-screen flex-col items-center overflow-hidden bg-black pt-24 text-center text-white [@media(min-height:820px)]:justify-center [@media(min-height:820px)]:pt-0 svelte-cwls5q">`);
      push_element($$renderer2, "section", 534, 1);
      $$renderer2.push(`<div class="container-page relative z-10 svelte-cwls5q">`);
      push_element($$renderer2, "div", 537, 2);
      $$renderer2.push(`<h2 class="mx-auto max-w-2xl text-web-32 font-semibold sm:text-web-40 md:text-web-48 svelte-cwls5q">`);
      push_element($$renderer2, "h2", 538, 3);
      $$renderer2.push(`Every Great Platform<br class="svelte-cwls5q"/>`);
      push_element($$renderer2, "br", 539, 24);
      pop_element();
      $$renderer2.push(`Starts With One Step</h2>`);
      pop_element();
      $$renderer2.push(` <p class="mx-auto mt-6 max-w-2xl text-balance text-para-18 text-white/60 svelte-cwls5q">`);
      push_element($$renderer2, "p", 541, 3);
      $$renderer2.push(`ElixirPay is just getting started. Every milestone reflects our commitment to building a
				stronger payment ecosystem for businesses across India and beyond.</p>`);
      pop_element();
      $$renderer2.push(` <div class="relative mx-auto mt-16 max-w-4xl svelte-cwls5q">`);
      push_element($$renderer2, "div", 546, 3);
      $$renderer2.push(`<button type="button" aria-label="Jump to a milestone along the roadmap" class="block w-full cursor-pointer rounded-[30px] bg-[#2D2D2D] p-3 text-left shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] svelte-cwls5q">`);
      push_element($$renderer2, "button", 550, 4);
      $$renderer2.push(`<div class="relative h-20 overflow-hidden rounded-[24px] bg-[#474646] sm:h-24 svelte-cwls5q">`);
      push_element($$renderer2, "div", 556, 5);
      $$renderer2.push(`<div class="progress-stripes absolute inset-y-0 left-0 bg-[#0879E9] transition-[width] duration-500 ease-out svelte-cwls5q"${attr_style(`width: ${stringify(loaderTargetPercent)}%`)}>`);
      push_element($$renderer2, "div", 557, 6);
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</button>`);
      pop_element();
      $$renderer2.push(` <div class="absolute top-full flex -translate-x-1/2 flex-col items-center transition-[left] duration-500 ease-out svelte-cwls5q"${attr_style(`left: ${stringify(loaderTargetPercent)}%`)}>`);
      push_element($$renderer2, "div", 564, 4);
      $$renderer2.push(`<div class="h-10 w-px svelte-cwls5q" style="background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.6))">`);
      push_element($$renderer2, "div", 568, 5);
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <img${attr("src", milestoneIcon)} alt="" class="-mt-1 h-14 w-14 svelte-cwls5q"/>`);
      push_element($$renderer2, "img", 578, 5);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div class="mx-auto mt-28 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-6 text-center sm:grid-cols-4 sm:text-left svelte-cwls5q">`);
      push_element($$renderer2, "div", 588, 3);
      $$renderer2.push(`<!--[-->`);
      const each_array_4 = ensure_array_like(milestones);
      for (let index = 0, $$length = each_array_4.length; index < $$length; index++) {
        let milestone = each_array_4[index];
        $$renderer2.push(`<button type="button"${attr_class(`block w-full cursor-pointer rounded-lg text-center transition-opacity hover:opacity-80 sm:text-left ${index === activeStage() ? "" : "hidden sm:block"}`, "svelte-cwls5q")}>`);
        push_element($$renderer2, "button", 605, 5);
        $$renderer2.push(`<p${attr_class(`text-web-28 uppercase transition-colors duration-300 ${index === activeStage() ? "font-bold text-white" : "font-medium text-gray-500"}`, "svelte-cwls5q")}>`);
        push_element($$renderer2, "p", 613, 6);
        $$renderer2.push(`<span class="inline-block svelte-cwls5q">`);
        push_element($$renderer2, "span", 618, 7);
        $$renderer2.push(`${escape_html(milestone.year)}</span>`);
        pop_element();
        $$renderer2.push(`</p>`);
        pop_element();
        $$renderer2.push(` <p${attr_class(`mt-2 text-para-16 transition-colors duration-300 sm:text-para-20 ${index === activeStage() ? "text-white/80" : "text-gray-500"}`, "svelte-cwls5q")}>`);
        push_element($$renderer2, "p", 620, 6);
        $$renderer2.push(`${escape_html(milestone.label[0])}<br class="svelte-cwls5q"/>`);
        push_element($$renderer2, "br", 626, 27);
        pop_element();
        $$renderer2.push(`${escape_html(milestone.label[1])}</p>`);
        pop_element();
        $$renderer2.push(`</button>`);
        pop_element();
      }
      $$renderer2.push(`<!--]--></div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</section>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div class="relative h-[500vh] bg-[#EEEEEE] svelte-cwls5q">`);
      push_element($$renderer2, "div", 641, 0);
      $$renderer2.push(`<section class="sticky top-0 flex h-screen flex-col overflow-hidden bg-[#EEEEEE] pt-24 svelte-cwls5q">`);
      push_element($$renderer2, "section", 642, 1);
      $$renderer2.push(`<img${attr("src", approachBgIconLeft)} alt="" class="pointer-events-none absolute -left-24 -top-24 w-[420px] opacity-60 svelte-cwls5q"/>`);
      push_element($$renderer2, "img", 646, 2);
      pop_element();
      $$renderer2.push(` <img${attr("src", approachBgIconRight)} alt="" class="pointer-events-none absolute -bottom-24 -right-24 w-[420px] opacity-60 svelte-cwls5q"/>`);
      push_element($$renderer2, "img", 651, 2);
      pop_element();
      $$renderer2.push(` <div class="container-page relative z-10 w-full text-center svelte-cwls5q">`);
      push_element($$renderer2, "div", 657, 2);
      $$renderer2.push(`<h2 class="text-web-28 font-bold text-gray-900 md:text-web-32 svelte-cwls5q">`);
      push_element($$renderer2, "h2", 658, 3);
      $$renderer2.push(`Our Approach</h2>`);
      pop_element();
      $$renderer2.push(` <p class="mx-auto mt-3 max-w-lg text-para-16 text-gray-500 svelte-cwls5q">`);
      push_element($$renderer2, "p", 659, 3);
      $$renderer2.push(`Every feature, API, and workflow is guided by a simple philosophy: build technology that
				solves real business problems—not technology for the sake of complexity.</p>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div class="container-page relative z-10 mt-8 w-full svelte-cwls5q">`);
      push_element($$renderer2, "div", 675, 2);
      $$renderer2.push(`<div class="relative mx-auto aspect-[4/5] max-w-xl md:aspect-[950/482] md:max-w-3xl svelte-cwls5q">`);
      push_element($$renderer2, "div", 676, 3);
      $$renderer2.push(`<!--[-->`);
      const each_array_5 = ensure_array_like(approachCards);
      for (let i = 0, $$length = each_array_5.length; i < $$length; i++) {
        let card = each_array_5[i];
        const stepsBehind = Math.max(0, activeCardStage() - i);
        const notYetArrived = i > activeCardStage();
        $$renderer2.push(`<div class="absolute inset-0 overflow-hidden transition-[transform,opacity] duration-700 ease-out svelte-cwls5q"${attr_style(`z-index: ${stringify(100 - stepsBehind)}; opacity: ${stringify(notYetArrived ? 0 : 1)}; transform: translateY(${notYetArrived ? "40vh" : `${-stepsBehind * 16}px`}) scale(${stringify(notYetArrived ? 1 : 1 - stepsBehind * 0.05)}) rotate(${stringify(stepsBehind > 0 ? card.rotate : "0deg")});`)}>`);
        push_element($$renderer2, "div", 688, 5);
        $$renderer2.push(`<img${attr("src", approachCardFrame)} alt="" class="absolute inset-0 h-full w-full svelte-cwls5q"/>`);
        push_element($$renderer2, "img", 698, 6);
        pop_element();
        $$renderer2.push(` <div class="absolute inset-0 flex flex-col px-[7%] pb-[6%] pt-[calc(40%+18px)] md:pt-[calc(14%+10px)] svelte-cwls5q">`);
        push_element($$renderer2, "div", 717, 6);
        $$renderer2.push(`<img${attr("src", card.icon)} alt="" class="h-[16%] w-auto self-start md:h-[32.5%] svelte-cwls5q"/>`);
        push_element($$renderer2, "img", 720, 7);
        pop_element();
        $$renderer2.push(` <h3 class="mt-[4%] text-web-20 font-bold text-gray-900 md:text-web-24 svelte-cwls5q">`);
        push_element($$renderer2, "h3", 721, 7);
        $$renderer2.push(`${escape_html(card.title)}</h3>`);
        pop_element();
        $$renderer2.push(` <p class="mt-[2%] text-para-14 text-gray-600 md:text-para-24 svelte-cwls5q">`);
        push_element($$renderer2, "p", 724, 7);
        $$renderer2.push(`<!--[-->`);
        const each_array_6 = ensure_array_like(card.body);
        for (let $$index_5 = 0, $$length2 = each_array_6.length; $$index_5 < $$length2; $$index_5++) {
          let part = each_array_6[$$index_5];
          $$renderer2.push(`<span${attr_class(clsx(part.bold ? "font-semibold text-gray-800" : ""), "svelte-cwls5q")}>`);
          push_element($$renderer2, "span", 725, 33);
          $$renderer2.push(`${escape_html(part.text)}</span>`);
          pop_element();
        }
        $$renderer2.push(`<!--]--></p>`);
        pop_element();
        $$renderer2.push(`</div>`);
        pop_element();
        $$renderer2.push(`</div>`);
        pop_element();
      }
      $$renderer2.push(`<!--]--></div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</section>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <section class="overflow-hidden bg-black py-[200px] text-center text-white svelte-cwls5q">`);
      push_element($$renderer2, "section", 737, 0);
      $$renderer2.push(`<div class="container-page svelte-cwls5q">`);
      push_element($$renderer2, "div", 738, 1);
      $$renderer2.push(`<h2 class="text-web-32 font-semibold md:text-web-40 svelte-cwls5q">`);
      push_element($$renderer2, "h2", 739, 2);
      $$renderer2.push(`Life at Elixirpay</h2>`);
      pop_element();
      $$renderer2.push(` <p class="mx-auto mt-4 max-w-2xl text-para-18 text-white/60 svelte-cwls5q">`);
      push_element($$renderer2, "p", 740, 2);
      $$renderer2.push(`We're designers, engineers, marketers, and problem-solvers united by one goal: building
			payment infrastructure that businesses can trust. Every decision we make is driven by
			simplicity, reliability, and long-term thinking.</p>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div class="relative mt-24 hidden sm:block svelte-cwls5q">`);
      push_element($$renderer2, "div", 751, 1);
      $$renderer2.push(`<svg class="pointer-events-none absolute inset-x-0 -top-14 z-0 h-20 w-full svelte-cwls5q" viewBox="0 0 1000 100" preserveAspectRatio="none">`);
      push_element($$renderer2, "svg", 759, 2);
      $$renderer2.push(`<path d="M 0,10 Q 500,190 1000,10" stroke="rgba(255,255,255,0.4)" stroke-width="3" fill="none" class="svelte-cwls5q">`);
      push_element($$renderer2, "path", 764, 3);
      $$renderer2.push(`</path>`);
      pop_element();
      $$renderer2.push(`</svg>`);
      pop_element();
      $$renderer2.push(` <div class="relative z-10 flex items-start justify-center gap-4 md:gap-8 svelte-cwls5q">`);
      push_element($$renderer2, "div", 772, 2);
      $$renderer2.push(`<!--[-->`);
      const each_array_7 = ensure_array_like(lifeClotheslinePhotos);
      for (let $$index_7 = 0, $$length = each_array_7.length; $$index_7 < $$length; $$index_7++) {
        let photo = each_array_7[$$index_7];
        $$renderer2.push(`<img${attr("src", photo.src)} alt="" class="clothesline-photo h-64 w-auto shrink-0 md:h-80 svelte-cwls5q"${attr_style(`margin-top: ${stringify(photo.sag)}px;`)}/>`);
        push_element($$renderer2, "img", 774, 4);
        pop_element();
      }
      $$renderer2.push(`<!--]--></div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div class="flex flex-col items-center sm:hidden svelte-cwls5q">`);
      push_element($$renderer2, "div", 791, 1);
      $$renderer2.push(`<div class="relative z-0 w-full svelte-cwls5q">`);
      push_element($$renderer2, "div", 807, 2);
      $$renderer2.push(`<svg class="pointer-events-none absolute inset-x-0 top-2 h-10 w-full svelte-cwls5q" viewBox="0 0 100 40" preserveAspectRatio="none">`);
      push_element($$renderer2, "svg", 808, 3);
      $$renderer2.push(`<path d="M 5,5 Q 50,62 95,5" stroke="rgba(255,255,255,0.4)" stroke-width="3" stroke-linecap="round" vector-effect="non-scaling-stroke" fill="none" class="svelte-cwls5q">`);
      push_element($$renderer2, "path", 821, 4);
      $$renderer2.push(`</path>`);
      pop_element();
      $$renderer2.push(`</svg>`);
      pop_element();
      $$renderer2.push(` <div class="relative mt-8 flex justify-center gap-8 svelte-cwls5q">`);
      push_element($$renderer2, "div", 831, 3);
      $$renderer2.push(`<!--[-->`);
      const each_array_8 = ensure_array_like([lifeClotheslinePhotos[0], lifeClotheslinePhotos[1]]);
      for (let idx = 0, $$length = each_array_8.length; idx < $$length; idx++) {
        let photo = each_array_8[idx];
        $$renderer2.push(`<img${attr("src", photo.src)} alt="" class="clothesline-photo h-40 w-auto shrink-0 svelte-cwls5q"${attr_style(idx === 1 ? "margin-top: -5px" : "")}/>`);
        push_element($$renderer2, "img", 837, 5);
        pop_element();
      }
      $$renderer2.push(`<!--]--></div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div class="relative z-10 -mt-10 flex gap-8 svelte-cwls5q">`);
      push_element($$renderer2, "div", 847, 2);
      $$renderer2.push(`<!--[-->`);
      const each_array_9 = ensure_array_like([lifeClotheslinePhotos[4], lifeClotheslinePhotos[3]]);
      for (let $$index_9 = 0, $$length = each_array_9.length; $$index_9 < $$length; $$index_9++) {
        let photo = each_array_9[$$index_9];
        $$renderer2.push(`<img${attr("src", photo.src)} alt="" class="clothesline-photo h-40 w-auto shrink-0 svelte-cwls5q"/>`);
        push_element($$renderer2, "img", 849, 4);
        pop_element();
      }
      $$renderer2.push(`<!--]--></div>`);
      pop_element();
      $$renderer2.push(` <img${attr("src", lifeClotheslinePhotos[2].src)} alt="" class="clothesline-photo relative z-20 -mt-10 h-40 w-auto shrink-0 -translate-x-4 svelte-cwls5q"/>`);
      push_element($$renderer2, "img", 853, 2);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</section>`);
      pop_element();
      $$renderer2.push(` <section class="bg-white pt-[200px] svelte-cwls5q">`);
      push_element($$renderer2, "section", 864, 0);
      $$renderer2.push(`<div class="container-page text-center svelte-cwls5q">`);
      push_element($$renderer2, "div", 865, 1);
      $$renderer2.push(`<img${attr("src", foundationSealLogo)} alt=""${attr_class(`mx-auto h-36 w-auto ${"opacity-0"}`, "svelte-cwls5q")}/>`);
      push_element($$renderer2, "img", 866, 2);
      pop_element();
      $$renderer2.push(` <h2 class="mt-8 text-web-32 font-bold text-gray-900 md:text-web-40 svelte-cwls5q">`);
      push_element($$renderer2, "h2", 872, 2);
      $$renderer2.push(`Built on a Strong Foundation</h2>`);
      pop_element();
      $$renderer2.push(` <p class="mx-auto mt-4 max-w-xl text-para-18 text-gray-500 svelte-cwls5q">`);
      push_element($$renderer2, "p", 875, 2);
      $$renderer2.push(`Modern businesses need payment infrastructure they can rely on. Here's what powers every
			experience built with ElixirPay.</p>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div class="mt-[160px] grid grid-cols-2 border-t border-gray-200 lg:grid-cols-4 svelte-cwls5q">`);
      push_element($$renderer2, "div", 881, 1);
      $$renderer2.push(`<!--[-->`);
      const each_array_10 = ensure_array_like(foundationStats);
      for (let i = 0, $$length = each_array_10.length; i < $$length; i++) {
        let stat = each_array_10[i];
        $$renderer2.push(`<div class="border-b border-gray-200 px-8 py-14 text-center last:border-b-0 odd:bg-white even:bg-gray-50 lg:border-b-0 lg:border-r lg:border-gray-200 lg:last:border-r-0 svelte-cwls5q">`);
        push_element($$renderer2, "div", 886, 3);
        $$renderer2.push(`<p class="text-web-24 font-bold tabular-nums text-gray-900 md:text-web-28 svelte-cwls5q">`);
        push_element($$renderer2, "p", 889, 4);
        $$renderer2.push(`${escape_html(foundationStatCounts[i])}${escape_html(stat.suffix)} ${escape_html(stat.label)}</p>`);
        pop_element();
        $$renderer2.push(` <p class="mt-2 font-mono text-para-14 text-gray-500 svelte-cwls5q">`);
        push_element($$renderer2, "p", 892, 4);
        $$renderer2.push(`${escape_html(stat.caption[0])}<br class="svelte-cwls5q"/>`);
        push_element($$renderer2, "br", 893, 22);
        pop_element();
        $$renderer2.push(`${escape_html(stat.caption[1])}</p>`);
        pop_element();
        $$renderer2.push(`</div>`);
        pop_element();
      }
      $$renderer2.push(`<!--]--></div>`);
      pop_element();
      $$renderer2.push(`</section>`);
      pop_element();
      $$renderer2.push(` <section class="relative overflow-hidden bg-black py-[200px] text-center text-white svelte-cwls5q">`);
      push_element($$renderer2, "section", 902, 0);
      $$renderer2.push(`<div class="absolute inset-0 bg-cover bg-top bg-no-repeat svelte-cwls5q" style="background-image: url('https://pub-b08d98924f7343bb8f10f9528d02cd74.r2.dev/Landing%20page%20assets/Section%2010%20-%20sales/bg.png')">`);
      push_element($$renderer2, "div", 903, 1);
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <div class="container-page relative z-10 svelte-cwls5q">`);
      push_element($$renderer2, "div", 908, 1);
      $$renderer2.push(`<div class="mx-auto h-24 w-24 [perspective:600px] svelte-cwls5q">`);
      push_element($$renderer2, "div", 909, 2);
      $$renderer2.push(`<img${attr("src", finalCtaCoin)} alt="" class="coin-spin h-full w-full svelte-cwls5q"/>`);
      push_element($$renderer2, "img", 910, 3);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(` <h2 class="mx-auto mt-8 max-w-4xl text-web-32 font-semibold sm:text-web-40 md:text-web-56 svelte-cwls5q">`);
      push_element($$renderer2, "h2", 912, 2);
      $$renderer2.push(`The Future of<br class="svelte-cwls5q"/>`);
      push_element($$renderer2, "br", 913, 16);
      pop_element();
      $$renderer2.push(`Payments Starts Here.</h2>`);
      pop_element();
      $$renderer2.push(` <p class="mx-auto mt-6 max-w-4xl text-balance text-para-20 text-white/70 svelte-cwls5q">`);
      push_element($$renderer2, "p", 915, 2);
      $$renderer2.push(`Every growing business deserves payment infrastructure that's reliable, scalable, and
			built for the future. Focus on your business while ElixirPay keeps money moving.</p>`);
      pop_element();
      $$renderer2.push(` <a href="/contact" class="mt-10 inline-block rounded-lg bg-white px-6 py-3 font-mono text-para-14 font-medium text-gray-900 hover:bg-gray-100 svelte-cwls5q">`);
      push_element($$renderer2, "a", 919, 2);
      $$renderer2.push(`Get Started</a>`);
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
