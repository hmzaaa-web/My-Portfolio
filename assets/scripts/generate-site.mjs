import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const siteUrl = "https://hmzaaa.vercel.app";
const sourceUrl = "https://github.com/hmzaaa-web";
const phone = "+91 63076 04170";
const email = "hmzaaa.web@gmail.com";

const nav = [
  ["Home", "index.html"],
  ["About", "about.html"],
  ["Projects", "projects.html"],
  ["Services", "services.html"],
  ["Process", "process.html"],
  ["Contact", "contact.html"],
];

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Bootstrap",
  "Figma",
  "Python",
  "SEO",
  "Performance",
  "Responsive UI",
  "Clean Code",
];

const projects = [
  {
    title: "The Nextwork",
    slug: "the-nextwork",
    category: "Digital Marketing Agency",
    image: "assets/visuals/project-nextwork.webp",
    logo: "assets/projects/nextwork.png",
    live: "https://thenextwork.in",
    source: sourceUrl,
    stack: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    metrics: ["Agency lead flow", "Responsive launch system", "Static performance base"],
    description:
      "A sharp agency presence for a digital marketing team, rebuilt around fast navigation, direct inquiry paths and a confident service narrative.",
  },
  {
    title: "MF Dresses",
    slug: "mf-dresses",
    category: "Fashion Commerce",
    image: "assets/visuals/project-mfdresses.webp",
    logo: "assets/projects/mfdresses.png",
    live: "https://mfdresses.in",
    source: sourceUrl,
    stack: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    metrics: ["Mobile-first shopping flow", "Lightweight product pages", "Brand-led visual rhythm"],
    description:
      "A fast static commerce experience for a fashion label, shaped for quick product discovery, clean calls to action and smooth mobile browsing.",
  },
  {
    title: "ISC Java",
    slug: "isc-java",
    category: "Education Platform",
    image: "assets/visuals/project-iscjava.webp",
    logo: "assets/projects/iscjava.png",
    live: "https://iscjava.vercel.app",
    source: sourceUrl,
    stack: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
    metrics: ["Student-focused IA", "Fast lesson access", "Accessible content structure"],
    description:
      "An interactive learning destination for Java students, designed to make tutorials, practice and beginner concepts feel direct and approachable.",
  },
  {
    title: "LocalReach",
    slug: "localreach",
    category: "Local Business Growth",
    image: "assets/visuals/project-localreach.webp",
    logo: "assets/projects/localreach.png",
    live: "https://localreach.in",
    source: sourceUrl,
    stack: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    metrics: ["Small business positioning", "Local-service SEO", "Clear conversion copy"],
    description:
      "A polished web presence for a local growth service, focused on credibility, concise offers and lead capture for small business owners.",
  },
  {
    title: "HMZAAA Portfolio",
    slug: "hmzaaa-portfolio",
    category: "Personal Brand System",
    image: "assets/visuals/project-hmzaaa.webp",
    logo: "assets/img/logo.png",
    live: siteUrl,
    source: sourceUrl,
    stack: ["Semantic HTML", "CSS Motion", "JavaScript", "Structured Data"],
    metrics: ["Luxury editorial system", "AI-search friendly metadata", "Multi-page portfolio architecture"],
    description:
      "A high-end personal brand interface for Mohammad Hamza, engineered to communicate trust, speed and premium web craft within seconds.",
  },
];

const services = [
  {
    title: "UI/UX Design",
    eyebrow: "01 / Interface Direction",
    copy:
      "Premium page architecture, wireframes, visual systems and interface decisions shaped around clarity, conversion and brand perception.",
  },
  {
    title: "Frontend Development",
    eyebrow: "02 / Production Build",
    copy:
      "Clean, maintainable frontends with semantic markup, responsive components, thoughtful motion and sharp attention to rendering performance.",
  },
  {
    title: "Responsive Development",
    eyebrow: "03 / Every Viewport",
    copy:
      "Fluid layouts for mobile, tablet, laptop and ultrawide displays with spacing, cropping and navigation behavior tuned per breakpoint.",
  },
  {
    title: "Performance Optimization",
    eyebrow: "04 / Speed Systems",
    copy:
      "Asset discipline, reduced layout shift, lighter JavaScript, optimized images and animation patterns designed for smooth interaction.",
  },
  {
    title: "SEO Optimization",
    eyebrow: "05 / Search Architecture",
    copy:
      "Technical SEO, metadata, sitemap strategy, structured data, semantic headings, crawlable content and AI-search readable copy systems.",
  },
  {
    title: "Redesign Services",
    eyebrow: "06 / Premium Repositioning",
    copy:
      "Existing websites refined into cleaner, faster, more credible brand experiences without losing the useful parts of the original business story.",
  },
  {
    title: "Premium Landing Pages",
    eyebrow: "07 / Campaign Launches",
    copy:
      "Focused launch pages for offers, services and lead generation with editorial composition and clear inquiry paths.",
  },
  {
    title: "Full-Stack Capability",
    eyebrow: "08 / Practical Extension",
    copy:
      "Frontend-led builds with the ability to connect forms, dashboards, data workflows, APIs and automation where the project needs it.",
  },
];

const process = [
  ["01", "Signal Audit", "Clarify the offer, audience, trust gaps, competitive context and the moments where a visitor decides whether to inquire."],
  ["02", "Editorial System", "Shape the typography, spacing, page rhythm, imagery and conversion logic into a calm but high-authority interface direction."],
  ["03", "Precision Build", "Develop semantic pages, responsive components, motion states, SEO foundations, accessibility affordances and fast asset delivery."],
  ["04", "Launch Calibration", "Review mobile and desktop states, tune performance, verify metadata, validate forms and hand over a site ready for growth."],
];

const pages = [
  {
    file: "index.html",
    label: "Home",
    title: "Mohammad Hamza | Premium Freelance Web Designer & Developer",
    description:
      "Mohammad Hamza is a freelance web designer and frontend developer in Aligarh building fast, clean, scalable websites for premium brands and high-ticket clients.",
    keywords:
      "Mohammad Hamza, freelance web designer, frontend developer, premium website design, web developer Aligarh, performance SEO websites",
    main: homePage,
  },
  {
    file: "about.html",
    label: "About",
    title: "About Mohammad Hamza | Performance-First Web Designer",
    description:
      "Learn about Mohammad Hamza's design philosophy, frontend development standards, clean-code mindset and mobile-first approach to premium web projects.",
    keywords:
      "about Mohammad Hamza, frontend developer, web designer philosophy, clean code, responsive websites",
    main: aboutPage,
  },
  {
    file: "projects.html",
    label: "Projects",
    title: "Projects | Mohammad Hamza Premium Web Design Portfolio",
    description:
      "Explore five premium web projects by Mohammad Hamza, including agency, fashion commerce, education, local business and personal brand systems.",
    keywords:
      "Mohammad Hamza projects, web development portfolio, frontend case studies, responsive website projects",
    main: projectsPage,
  },
  {
    file: "services.html",
    label: "Services",
    title: "Services | UI/UX, Frontend Development, SEO & Performance",
    description:
      "Premium web design and development services by Mohammad Hamza, including UI/UX, frontend builds, responsive development, SEO, performance and redesigns.",
    keywords:
      "web design services, frontend development services, SEO optimization, website redesign, premium landing pages",
    main: servicesPage,
  },
  {
    file: "process.html",
    label: "Process",
    title: "Process | Luxury Website Design & Build Workflow",
    description:
      "A refined four-stage website workflow for strategy, editorial design, precision frontend development, SEO readiness and launch calibration.",
    keywords:
      "website design process, frontend workflow, SEO launch checklist, premium web development",
    main: processPage,
  },
  {
    file: "contact.html",
    label: "Contact",
    title: "Contact Mohammad Hamza | Start a Premium Website Project",
    description:
      "Contact Mohammad Hamza for premium freelance web design, frontend development, SEO optimization, redesigns and fast scalable websites.",
    keywords:
      "contact Mohammad Hamza, hire web developer, freelance web designer India, website inquiry",
    main: contactPage,
  },
  {
    file: "privacy-policy.html",
    label: "Privacy",
    title: "Privacy Policy | Mohammad Hamza Portfolio",
    description:
      "Privacy policy for Mohammad Hamza's portfolio website, including contact form data, analytics, external links and visitor rights.",
    keywords: "privacy policy, portfolio website privacy, contact form data",
    main: privacyPage,
  },
  {
    file: "terms.html",
    label: "Terms",
    title: "Terms & Conditions | Mohammad Hamza Portfolio",
    description:
      "Terms and conditions for using Mohammad Hamza's portfolio website and requesting freelance web design and development services.",
    keywords: "terms and conditions, website terms, freelance web development terms",
    main: termsPage,
  },
  {
    file: "404.html",
    label: "Not Found",
    title: "Page Not Found | Mohammad Hamza",
    description:
      "The page you requested could not be found. Return to Mohammad Hamza's premium web design and development portfolio.",
    keywords: "404, page not found, Mohammad Hamza",
    main: notFoundPage,
  },
];

function icon(name) {
  const icons = {
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>',
    menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5l3 3-2 2c1 3 3 5 6 6l2-2 3 3-2 2c-1 1-3 1-5 0-4-2-7-5-9-9-1-2-1-4 0-5z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-5 7-12a7 7 0 0 0-14 0c0 7 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>',
  };
  return icons[name] || icons.arrow;
}

function button(label, href, variant = "") {
  const external = /^https?:\/\//.test(href);
  const classes = ["magnetic-button", "button", variant].filter(Boolean).join(" ");
  return `<a class="${classes}" href="${href}"${external ? ' target="_blank" rel="noopener"' : ""}><span>${label}</span>${icon("arrow")}</a>`;
}

function pageShell(page) {
  const slug = page.file === "index.html" ? "" : page.file;
  const canonical = `${siteUrl}/${slug}`;
  const active = page.label;
  const schemas = JSON.stringify(schemaFor(page), null, 2).replace(/</g, "\\u003c");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${page.title}</title>
  <meta name="description" content="${page.description}">
  <meta name="keywords" content="${page.keywords}">
  <meta name="author" content="Mohammad Hamza">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <meta name="theme-color" content="#030303">
  <link rel="canonical" href="${canonical}">
  <link rel="manifest" href="manifest.webmanifest">
  <link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Mohammad Hamza Portfolio">
  <meta property="og:url" content="${canonical}">
  <meta property="og:title" content="${page.title}">
  <meta property="og:description" content="${page.description}">
  <meta property="og:image" content="${siteUrl}/assets/visuals/og-cover.webp">
  <meta property="og:image:alt" content="Mohammad Hamza premium web design portfolio interface">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${page.title}">
  <meta name="twitter:description" content="${page.description}">
  <meta name="twitter:image" content="${siteUrl}/assets/visuals/og-cover.webp">
  <link rel="stylesheet" href="assets/styles.css">
  <script type="application/ld+json">${schemas}</script>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="scroll-progress" aria-hidden="true"><span></span></div>
  <div class="site-cursor" aria-hidden="true"></div>
  <header class="site-header" data-header>
    <a class="brand-mark" href="index.html" aria-label="Mohammad Hamza home">
      <img src="assets/img/logo.png" width="44" height="44" alt="">
      <span>
        <strong>Mohammad Hamza</strong>
        <em>Web designer and developer</em>
      </span>
    </a>
    <nav class="desktop-nav" aria-label="Primary navigation">
      ${nav.map(([label, href]) => `<a href="${href}" ${active === label ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
    </nav>
    <a class="header-cta magnetic-button" href="contact.html"><span>Start a project</span>${icon("arrow")}</a>
    <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" data-menu-toggle>
      <span class="menu-open">${icon("menu")}</span>
      <span class="menu-close">${icon("close")}</span>
    </button>
  </header>
  <div class="mobile-panel" data-mobile-panel>
    <nav aria-label="Mobile navigation">
      ${nav.map(([label, href]) => `<a href="${href}" ${active === label ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
    </nav>
    <a class="mobile-contact" href="mailto:${email}">${email}</a>
  </div>
  <main id="main">
    ${page.main()}
  </main>
  ${siteFooter()}
  <script src="assets/main.js" defer></script>
</body>
</html>`;
}

function schemaFor(page) {
  const base = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Mohammad Hamza",
      alternateName: "HMZAAA",
      url: siteUrl,
      image: `${siteUrl}/assets/img/Me.jpeg`,
      jobTitle: "Freelance Web Designer and Frontend Developer",
      email,
      telephone: phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Aligarh",
        addressCountry: "IN",
      },
      knowsAbout: [
        "Web Design",
        "Frontend Development",
        "Responsive Development",
        "SEO Optimization",
        "Performance Optimization",
        "UI/UX Design",
      ],
      sameAs: [
        "https://www.instagram.com/hmzaaa.web",
        "https://www.facebook.com/hmzaaa.web",
        "https://github.com/hmzaaa-web",
        "https://twitter.com/thesiddique0625",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Mohammad Hamza Web Design and Development",
      url: siteUrl,
      areaServed: ["India", "Global"],
      priceRange: "$$",
      email,
      telephone: phone,
      description:
        "Premium freelance web design, frontend development, responsive website development, performance optimization and SEO optimization.",
      founder: {
        "@type": "Person",
        name: "Mohammad Hamza",
      },
      serviceType: services.map((service) => service.title),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Mohammad Hamza Portfolio",
      url: siteUrl,
      description: "Premium portfolio for a freelance web designer and frontend developer.",
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.label,
          item: page.file === "index.html" ? `${siteUrl}/` : `${siteUrl}/${page.file}`,
        },
      ],
    },
  ];

  if (page.file === "projects.html") {
    base.push({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Mohammad Hamza Web Development Projects",
      hasPart: projects.map((project) => ({
        "@type": "CreativeWork",
        name: project.title,
        url: project.live,
        description: project.description,
        genre: project.category,
        creator: {
          "@type": "Person",
          name: "Mohammad Hamza",
        },
      })),
    });
  }

  return base;
}

function pageHero({ eyebrow, title, copy, image, meta = [] }) {
  return `<section class="page-hero section-pad">
    <div class="container page-hero-grid">
      <div class="reveal">
        <p class="eyebrow">${eyebrow}</p>
        <h1>${title}</h1>
        <p class="lede">${copy}</p>
        ${meta.length ? `<div class="hero-meta">${meta.map((item) => `<span>${item}</span>`).join("")}</div>` : ""}
      </div>
      <figure class="page-visual reveal" data-parallax="0.08">
        <img src="${image}" width="960" height="1120" alt="">
      </figure>
    </div>
  </section>`;
}

function homePage() {
  return `<section class="hero-shell">
    <div class="hero-media" data-parallax="0.12">
      <img src="assets/visuals/hero-machine.webp" width="1800" height="1200" alt="Cinematic black interface surface with precision grid and Mohammad Hamza portfolio preview" fetchpriority="high">
    </div>
    <div class="hero-overlay" aria-hidden="true"></div>
    <div class="container hero-layout">
      <div class="hero-copy reveal">
        <p class="eyebrow">Aligarh, India / Freelance web designer and frontend developer</p>
        <h1 class="hero-title"><span>Precision websites</span><span>for premium digital launches.</span></h1>
        <p class="lede">Mohammad Hamza designs and develops fast, clean, scalable websites that help ambitious brands look sharper, load faster and convert with more confidence.</p>
        <div class="hero-actions">
          ${button("View projects", "projects.html")}
          ${button("Book a build", "contact.html", "button-outline")}
        </div>
      </div>
      <aside class="hero-instrument reveal" aria-label="Portfolio performance indicators">
        <span class="instrument-line"></span>
        <div><strong>5</strong><span>professional projects</span></div>
        <div><strong>1+</strong><span>year focused execution</span></div>
        <div><strong>SEO</strong><span>semantic and AI-readable</span></div>
      </aside>
    </div>
    <a class="scroll-cue" href="#intro" aria-label="Scroll to intro"><span></span>Scroll</a>
  </section>

  <section id="intro" class="section-pad intro-section">
    <div class="container split-intro">
      <div class="section-kicker reveal">
        <p class="eyebrow">The positioning</p>
        <h2>Premium web craft with disciplined engineering beneath the surface.</h2>
      </div>
      <div class="intro-copy reveal">
        <p>High-ticket clients do not only need a beautiful website. They need proof that the person behind it understands speed, trust, visual hierarchy, mobile behavior, search visibility and the small interface decisions that make a brand feel credible.</p>
        <p>Hamza's work sits in that intersection: elegant visual systems, clean frontend implementation and a conversion path that feels direct instead of desperate.</p>
      </div>
    </div>
  </section>

  <section class="marque-band" aria-label="Core qualities">
    <div>
      <span>Fast websites</span><span>Clean code</span><span>Scalable layouts</span><span>Responsive systems</span><span>SEO foundations</span><span>Premium UI</span><span>Fast websites</span><span>Clean code</span><span>Scalable layouts</span><span>Responsive systems</span><span>SEO foundations</span><span>Premium UI</span>
    </div>
  </section>

  <section class="section-pad">
    <div class="container section-head reveal">
      <p class="eyebrow">Expertise</p>
      <h2>Designed like a luxury surface. Built like a performance system.</h2>
    </div>
    <div class="container expertise-grid">
      ${expertiseCard("Interface Design", "Editorial layouts, premium typography, restrained accents and user flows that guide attention without visual noise.")}
      ${expertiseCard("Frontend Engineering", "Semantic HTML, responsive CSS, JavaScript interaction systems, optimized assets and maintainable component thinking.")}
      ${expertiseCard("Search & Performance", "Metadata, structured data, crawlable content, image strategy, accessibility signals and speed-conscious rendering.")}
    </div>
  </section>

  <section class="section-pad dark-panel-section">
    <div class="container service-preview">
      <div class="section-head reveal">
        <p class="eyebrow">Services preview</p>
        <h2>Focused services for serious web presence upgrades.</h2>
      </div>
      <div class="service-strip">
        ${services.slice(0, 4).map(serviceTile).join("")}
      </div>
      <div class="center-action reveal">${button("See all services", "services.html", "button-outline")}</div>
    </div>
  </section>

  <section class="section-pad">
    <div class="container section-head reveal">
      <p class="eyebrow">Selected projects</p>
      <h2>Five builds, shaped into luxury-grade case studies.</h2>
    </div>
    <div class="container featured-projects">
      ${projects.slice(0, 3).map((project, index) => projectCard(project, index)).join("")}
    </div>
    <div class="container center-action reveal">${button("Open project archive", "projects.html")}</div>
  </section>

  <section class="section-pad stats-section">
    <div class="container stats-grid">
      ${stat("5", "Professional projects", "A curated body of practical web builds with business-facing outcomes.")}
      ${stat("100%", "Responsive intent", "Layouts reviewed for mobile, tablet, laptop and wide desktop states.")}
      ${stat("SEO", "Search-ready foundation", "Semantic sections, structured data, sitemap, robots and AI-readable content.")}
      ${stat("Fast", "Lean delivery mindset", "Image discipline, reduced script weight and GPU-friendly motion patterns.")}
    </div>
  </section>

  <section class="section-pad">
    <div class="container process-line">
      <div class="section-head reveal">
        <p class="eyebrow">Workflow</p>
        <h2>A clear build sequence from signal to launch.</h2>
      </div>
      ${process.map(processStep).join("")}
    </div>
  </section>

  <section class="testimonial-section section-pad">
    <div class="container testimonial reveal">
      <p class="quote">"I build websites to feel calm, precise and easy to trust. The visual layer matters, but the real luxury is when every page loads fast, reads clearly and moves the visitor toward the right next step."</p>
      <div>
        <strong>Mohammad Hamza</strong>
        <span>Freelance web designer and frontend developer</span>
      </div>
    </div>
  </section>

  ${ctaBand()}`;
}

function expertiseCard(title, copy) {
  return `<article class="expertise-card reveal">
    <span class="accent-rule"></span>
    <h3>${title}</h3>
    <p>${copy}</p>
  </article>`;
}

function serviceTile(service) {
  return `<article class="service-tile reveal">
    <span>${service.eyebrow}</span>
    <h3>${service.title}</h3>
    <p>${service.copy}</p>
  </article>`;
}

function stat(value, label, copy) {
  return `<article class="stat-card reveal">
    <strong>${value}</strong>
    <span>${label}</span>
    <p>${copy}</p>
  </article>`;
}

function projectCard(project, index = 0) {
  return `<article class="project-card reveal" style="--stagger:${index}">
    <a class="project-image" href="${project.live}" target="_blank" rel="noopener">
      <img src="${project.image}" width="1600" height="1000" loading="lazy" decoding="async" alt="${project.title} website preview mockup">
      <span class="project-overlay">View live</span>
    </a>
    <div class="project-body">
      <div class="project-topline"><span>${project.category}</span><span>${project.metrics[0]}</span></div>
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <div class="project-stack">${project.stack.map((item) => `<span>${item}</span>`).join("")}</div>
      <ul class="metric-list">
        ${project.metrics.map((item) => `<li>${icon("check")}<span>${item}</span></li>`).join("")}
      </ul>
      <div class="project-actions">
        ${button("View live", project.live)}
        ${button("Source code", project.source, "button-outline")}
      </div>
    </div>
  </article>`;
}

function processStep([number, title, copy]) {
  return `<article class="process-step reveal">
    <span>${number}</span>
    <div>
      <h3>${title}</h3>
      <p>${copy}</p>
    </div>
  </article>`;
}

function aboutPage() {
  return `${pageHero({
    eyebrow: "About / Mohammad Hamza",
    title: "A frontend specialist with a premium-design instinct and a speed-first build mindset.",
    copy:
      "Hamza turns business ideas into clean, accessible, memorable websites with strong visual hierarchy, responsive behavior and practical search foundations.",
    image: "assets/visuals/founder-portrait.webp",
    meta: ["Aligarh, India", "Freelance web designer", "Frontend developer"],
  })}

  <section class="section-pad">
    <div class="container editorial-grid">
      <div class="editorial-sticky reveal">
        <p class="eyebrow">Philosophy</p>
        <h2>Every pixel should earn trust.</h2>
      </div>
      <div class="editorial-copy reveal">
        <p>Hamza's design approach is direct: remove visual noise, create a clear path through the content and make the brand feel more expensive without making it harder to use. The result is a website that feels intentional from the first viewport.</p>
        <p>His development philosophy is equally disciplined. Build simple where simple is stronger, keep the code readable, make the layout resilient and prioritize the parts users actually feel: loading speed, navigation clarity, readable type and reliable forms.</p>
      </div>
    </div>
  </section>

  <section class="section-pad dark-panel-section">
    <div class="container section-head reveal">
      <p class="eyebrow">Strengths</p>
      <h2>Design taste, development restraint and launch discipline in one build partner.</h2>
    </div>
    <div class="container strength-grid">
      ${["Premium UI direction", "Mobile-first layout systems", "Clean semantic structure", "Performance-first asset choices", "SEO and AI-search readability", "Scalable component thinking"].map((item) => `<div class="strength-item reveal">${icon("check")}<span>${item}</span></div>`).join("")}
    </div>
  </section>

  <section class="section-pad">
    <div class="container tech-grid">
      <div class="section-head reveal">
        <p class="eyebrow">Technology</p>
        <h2>Tools chosen for clarity, speed and maintainability.</h2>
      </div>
      <div class="tech-cloud reveal">
        ${skills.map((skill) => `<span>${skill}</span>`).join("")}
      </div>
    </div>
  </section>

  <section class="section-pad mindset-section">
    <div class="container mindset-grid">
      ${mindset("Performance-first", "A website should feel immediate. Hamza prioritizes lightweight assets, clean rendering paths and animation choices that do not fight the browser.")}
      ${mindset("Mobile-first", "Small screens are treated as the primary environment, with spacing, hierarchy and tap targets designed for real touch behavior.")}
      ${mindset("Scalability-first", "Page systems are organized so future sections, services, case studies and SEO pages can grow without wrecking the original design language.")}
      ${mindset("Clean-code", "The build favors readable structure, semantic landmarks, accessible labels and reusable styling patterns over brittle visual tricks.")}
    </div>
  </section>
  ${ctaBand()}`;
}

function mindset(title, copy) {
  return `<article class="mindset-card reveal">
    <h3>${title}</h3>
    <p>${copy}</p>
  </article>`;
}

function projectsPage() {
  return `${pageHero({
    eyebrow: "Projects / Five selected builds",
    title: "Luxury case-study presentation for practical, shipped web work.",
    copy:
      "Each project is presented with the same discipline Hamza brings to client work: clear positioning, fast interfaces, responsive systems and conversion-aware structure.",
    image: "assets/visuals/project-hmzaaa.webp",
    meta: ["Exactly 5 projects", "Live links", "Source links"],
  })}
  <section class="section-pad projects-archive">
    <div class="container project-archive-grid">
      ${projects.map((project, index) => projectCard(project, index)).join("")}
    </div>
  </section>
  ${ctaBand("Have a project that deserves this level of finish?", "Tell Hamza what you want to build and get a clean path from idea to launch.", "Start the conversation", "contact.html")}`;
}

function servicesPage() {
  return `${pageHero({
    eyebrow: "Services / Premium web execution",
    title: "Design, frontend, SEO and performance systems for brands that need to look credible fast.",
    copy:
      "From polished landing pages to complete web presence rebuilds, the service model is shaped around premium perception, fast delivery and measurable clarity.",
    image: "assets/visuals/service-surface.webp",
    meta: ["UI/UX", "Frontend", "SEO", "Performance"],
  })}
  <section class="section-pad">
    <div class="container services-grid">
      ${services.map(serviceTile).join("")}
    </div>
  </section>
  <section class="section-pad service-benefits">
    <div class="container editorial-grid">
      <div class="editorial-sticky reveal">
        <p class="eyebrow">What clients get</p>
        <h2>A premium website that supports trust, speed and inquiry quality.</h2>
      </div>
      <div class="benefit-list reveal">
        ${[
          "A refined visual system built around the business offer.",
          "Responsive pages that preserve spacing and hierarchy on every viewport.",
          "Metadata, structured data, sitemap, robots and AI-readable content.",
          "Performance-minded image and motion choices.",
          "A clear contact path for visitors who are ready to act.",
        ].map((item) => `<p>${icon("check")}<span>${item}</span></p>`).join("")}
      </div>
    </div>
  </section>
  ${ctaBand("Ready to upgrade the way your brand is perceived?", "Commission a website that feels sharper before a prospect reads the second sentence.", "Request availability", "contact.html")}`;
}

function processPage() {
  return `${pageHero({
    eyebrow: "Process / Engineered calm",
    title: "A clean workflow for clients who want premium work without chaos.",
    copy:
      "The process keeps the project focused: define the business signal, design the editorial system, develop the frontend and calibrate the launch details.",
    image: "assets/visuals/process-board.webp",
    meta: ["Discovery", "Design", "Development", "Launch"],
  })}
  <section class="section-pad">
    <div class="container process-detail">
      ${process.map(([number, title, copy]) => `<article class="process-detail-card reveal">
        <span>${number}</span>
        <h2>${title}</h2>
        <p>${copy}</p>
      </article>`).join("")}
    </div>
  </section>
  <section class="section-pad dark-panel-section">
    <div class="container section-head reveal">
      <p class="eyebrow">Launch checklist</p>
      <h2>Before handoff, the site is reviewed like a product surface.</h2>
    </div>
    <div class="container checklist-grid">
      ${["Responsive spacing", "Touch target comfort", "Metadata accuracy", "Schema validity", "Image alt text", "Form behavior", "Link states", "Reduced motion"].map((item) => `<span class="check-pill reveal">${icon("check")}${item}</span>`).join("")}
    </div>
  </section>
  ${ctaBand()}`;
}

function contactPage() {
  return `${pageHero({
    eyebrow: "Contact / Select builds",
    title: "Bring the brief. Hamza will bring the structure, finish and frontend discipline.",
    copy:
      "For premium landing pages, complete web presence redesigns, performance improvements, SEO foundations and clean frontend development.",
    image: "assets/visuals/contact-console.webp",
    meta: ["Currently open to select projects", "Remote friendly", "Response focused"],
  })}
  <section class="section-pad contact-section">
    <div class="container contact-grid">
      <div class="contact-panel reveal">
        <p class="eyebrow">Direct lines</p>
        <h2>Start with a clear message.</h2>
        <p>Share the project goal, timeline, current website if you have one and what success should look like. Strong briefs get the fastest response.</p>
        <div class="contact-methods">
          <a href="mailto:${email}">${icon("mail")}<span>${email}</span></a>
          <a href="tel:+916307604170">${icon("phone")}<span>${phone}</span></a>
          <span>${icon("pin")}<span>Aligarh, India</span></span>
        </div>
        <div class="social-row">
          <a href="https://www.instagram.com/hmzaaa.web" target="_blank" rel="noopener">Instagram</a>
          <a href="https://www.facebook.com/hmzaaa.web" target="_blank" rel="noopener">Facebook</a>
          <a href="https://github.com/hmzaaa-web" target="_blank" rel="noopener">GitHub</a>
          <a href="https://twitter.com/thesiddique0625" target="_blank" rel="noopener">Twitter</a>
          <a href="https://wa.me/916307604170?text=Hello%20I%20visited%20your%20website%20and%20I%20am%20interested%20in%20your%20web%20development%20services." target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </div>
      <form class="contact-form reveal" data-contact-form aria-label="Project inquiry form">
        <input type="hidden" name="source" value="hmzaaa premium portfolio">
        <label for="name">Name</label>
        <input id="name" name="name" autocomplete="name" required placeholder="Your name">
        <label for="email">Email</label>
        <input id="email" name="email" type="email" autocomplete="email" required placeholder="you@example.com">
        <label for="budget">Project type</label>
        <select id="budget" name="projectType" required>
          <option value="">Select one</option>
          <option>Premium landing page</option>
          <option>Full website build</option>
          <option>Website redesign</option>
          <option>SEO or performance optimization</option>
        </select>
        <label for="message">Project brief</label>
        <textarea id="message" name="message" rows="6" required placeholder="Tell Hamza what you want to build, the timeline and what outcome matters most."></textarea>
        <button class="button magnetic-button" type="submit"><span>Send inquiry</span>${icon("arrow")}</button>
        <p class="form-status" data-form-status role="status" aria-live="polite"></p>
      </form>
    </div>
  </section>`;
}

function privacyPage() {
  return `${legalHero("Privacy Policy", "How this portfolio handles contact inquiries, external links and basic visitor information.")}
  <section class="section-pad legal-page">
    <div class="container narrow">
      ${legalBlock("Information collected", "When you send a project inquiry, the site may collect your name, email address, project type and message so Mohammad Hamza can reply to your request.")}
      ${legalBlock("How information is used", "Inquiry details are used only to understand your project, respond to you and maintain a professional record of the conversation.")}
      ${legalBlock("External services", "This website links to third-party platforms such as Instagram, Facebook, GitHub, Twitter, WhatsApp and live project websites. Those services follow their own privacy practices.")}
      ${legalBlock("Analytics and logs", "Hosting providers may process basic technical logs such as browser type, device information, referring pages and approximate location for security and performance monitoring.")}
      ${legalBlock("Your choices", `You can request updates or deletion of inquiry information by emailing ${email}.`)}
      ${legalBlock("Last updated", "May 15, 2026.")}
    </div>
  </section>`;
}

function termsPage() {
  return `${legalHero("Terms & Conditions", "The basic terms for using this portfolio website and contacting Mohammad Hamza for freelance work.")}
  <section class="section-pad legal-page">
    <div class="container narrow">
      ${legalBlock("Website use", "This site is provided to present Mohammad Hamza's portfolio, services, contact details and professional positioning. Do not misuse the site, submit harmful content, or attempt to disrupt its operation.")}
      ${legalBlock("Project inquiries", "Submitting an inquiry does not create a client relationship. Scope, timeline, pricing, deliverables and ownership terms must be agreed separately before work begins.")}
      ${legalBlock("Portfolio content", "Project names, screenshots, graphics, copy and layout systems are presented for portfolio and informational purposes. Do not reproduce the website design or assets without permission.")}
      ${legalBlock("External links", "Links to live projects and social profiles are provided for convenience. Mohammad Hamza is not responsible for third-party website availability, accuracy, or policies.")}
      ${legalBlock("No guarantee", "The website aims to be accurate and available, but content may change and availability cannot be guaranteed at every moment.")}
      ${legalBlock("Last updated", "May 15, 2026.")}
    </div>
  </section>`;
}

function legalHero(title, copy) {
  return `<section class="section-pad legal-hero">
    <div class="container narrow reveal">
      <p class="eyebrow">Legal</p>
      <h1>${title}</h1>
      <p class="lede">${copy}</p>
    </div>
  </section>`;
}

function legalBlock(title, copy) {
  return `<article class="legal-block reveal"><h2>${title}</h2><p>${copy}</p></article>`;
}

function notFoundPage() {
  return `<section class="not-found">
    <div class="container narrow reveal">
      <p class="eyebrow">404 / Route missed</p>
      <h1>This page is off the racing line.</h1>
      <p class="lede">The link may have changed, but the portfolio is still ready. Head back to the main experience or start a project inquiry.</p>
      <div class="hero-actions">
        ${button("Return home", "index.html")}
        ${button("Contact Hamza", "contact.html", "button-outline")}
      </div>
    </div>
  </section>`;
}

function ctaBand(
  title = "Need a website that feels premium before it says a word?",
  copy = "Commission a clean, fast, search-ready portfolio, service website, landing page, or redesign with a sharp visual point of view.",
  label = "Start a project",
  href = "contact.html",
) {
  return `<section class="cta-band section-pad">
    <div class="container cta-inner reveal">
      <p class="eyebrow">Availability</p>
      <h2>${title}</h2>
      <p>${copy}</p>
      ${button(label, href)}
    </div>
  </section>`;
}

function siteFooter() {
  return `<footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <a class="brand-mark footer-brand" href="index.html" aria-label="Mohammad Hamza home">
          <img src="assets/img/logo.png" width="44" height="44" alt="">
          <span><strong>Mohammad Hamza</strong><em>Premium web designer and developer</em></span>
        </a>
        <p>Fast, clean, scalable websites for brands that want higher trust and sharper digital presence.</p>
      </div>
      <nav aria-label="Footer navigation">
        ${nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
        <a href="privacy-policy.html">Privacy</a>
        <a href="terms.html">Terms</a>
      </nav>
      <div class="footer-contact">
        <a href="mailto:${email}">${email}</a>
        <a href="tel:+916307604170">${phone}</a>
        <span>Aligarh, India</span>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>&copy; 2026 Mohammad Hamza. All rights reserved.</span>
      <span>Designed for speed, trust and search visibility.</span>
    </div>
  </footer>`;
}

function write(path, content) {
  const target = join(root, path);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, content);
}

for (const page of pages) {
  write(page.file, pageShell(page));
}

const today = "2026-05-15";
write(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .filter((page) => page.file !== "404.html")
  .map((page) => {
    const loc = page.file === "index.html" ? `${siteUrl}/` : `${siteUrl}/${page.file}`;
    const priority = page.file === "index.html" ? "1.0" : page.file === "projects.html" ? "0.9" : "0.8";
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>
`,
);

write(
  "robots.txt",
  `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`,
);

write(
  "llms.txt",
  `# Mohammad Hamza Portfolio

Mohammad Hamza is a freelance web designer and frontend developer based in Aligarh, India.

Core services:
- UI/UX design
- Frontend development
- Responsive website development
- Performance optimization
- SEO optimization
- Redesign services
- Premium landing pages
- Practical full-stack integrations

Portfolio projects:
${projects.map((project) => `- ${project.title}: ${project.category}. ${project.description} Live: ${project.live}`).join("\n")}

Contact:
- Email: ${email}
- Phone: ${phone}
- Website: ${siteUrl}
`,
);

write(
  "manifest.webmanifest",
  JSON.stringify(
    {
      name: "Mohammad Hamza Portfolio",
      short_name: "HMZAAA",
      description: "Premium portfolio website for Mohammad Hamza, freelance web designer and frontend developer.",
      start_url: "/",
      display: "standalone",
      background_color: "#030303",
      theme_color: "#030303",
      icons: [
        { src: "assets/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { src: "assets/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    null,
    2,
  ),
);

write(
  "humans.txt",
  `Designer and developer: Mohammad Hamza
Location: Aligarh, India
Email: ${email}
Site direction: Luxury automotive editorial portfolio, performance-first frontend, SEO-aware static architecture.
Generated update date: ${today}
`,
);

console.log(`Generated ${pages.length} HTML pages plus SEO support files.`);
