const root = document.documentElement;
const body = document.body;
const header = document.querySelector("[data-header]");
const progress = document.querySelector(".scroll-progress span");
const cursor = document.querySelector(".site-cursor");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobilePanel = document.querySelector("[data-mobile-panel]");
const revealItems = document.querySelectorAll(".reveal");
const parallaxItems = document.querySelectorAll("[data-parallax]");
const magneticItems = document.querySelectorAll(".magnetic-button");
const contactForm = document.querySelector("[data-contact-form]");
const contactEndpoint = "https://script.google.com/macros/s/AKfycbwnPL6L9EsAbHSNfRlDNBPadI_SWQpiOT6r0XFQnRWgXcR6GPL2hu6gSnDpj2UCYYoU/exec";

body.classList.add("is-ready");

function setHeaderState() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function setScrollProgress() {
  if (!progress) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const percent = max > 0 ? window.scrollY / max : 0;
  progress.style.width = `${Math.min(1, Math.max(0, percent)) * 100}%`;
}

function setParallax() {
  if (!parallaxItems.length) return;
  for (const item of parallaxItems) {
    const speed = Number(item.dataset.parallax || 0.08);
    const rect = item.getBoundingClientRect();
    const center = rect.top + rect.height / 2 - window.innerHeight / 2;
    const offset = center * speed;
    item.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
  }
}

let ticking = false;
function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    setHeaderState();
    setScrollProgress();
    setParallax();
    ticking = false;
  });
}

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll);
setHeaderState();
setScrollProgress();
setParallax();

if (menuToggle && mobilePanel) {
  menuToggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  mobilePanel.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      body.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    }
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
);

for (const item of revealItems) {
  observer.observe(item);
}

if (cursor && matchMedia("(pointer:fine)").matches) {
  window.addEventListener("pointermove", (event) => {
    cursor.classList.add("is-active");
    cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
  });

  window.addEventListener("pointerdown", () => cursor.classList.add("is-pressed"));
  window.addEventListener("pointerup", () => cursor.classList.remove("is-pressed"));

  document.querySelectorAll("a, button, input, textarea, select").forEach((item) => {
    item.addEventListener("pointerenter", () => cursor.classList.add("is-link"));
    item.addEventListener("pointerleave", () => cursor.classList.remove("is-link"));
  });
}

for (const item of magneticItems) {
  item.addEventListener("pointermove", (event) => {
    if (!matchMedia("(pointer:fine)").matches) return;
    const rect = item.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    item.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`;
  });

  item.addEventListener("pointerleave", () => {
    item.style.transform = "";
  });
}

document.querySelectorAll(".project-card").forEach((card) => {
  let frame = null;

  card.addEventListener("pointerenter", () => {
    if (!matchMedia("(pointer:fine)").matches) return;
    card.style.setProperty("--lift", "-8px");
  });

  card.addEventListener("pointermove", (event) => {
    if (!matchMedia("(pointer:fine)").matches) return;

    if (frame) cancelAnimationFrame(frame);

    frame = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;

      card.style.setProperty("--ry", `${(px * 7).toFixed(2)}deg`);
      card.style.setProperty("--rx", `${(py * -7).toFixed(2)}deg`);
      card.style.setProperty("--lift", "-8px");
    });
  });

  card.addEventListener("pointerleave", () => {
    if (frame) cancelAnimationFrame(frame);

    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
    card.style.setProperty("--lift", "0px");
  });
});

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const status = contactForm.querySelector("[data-form-status]");
    const submit = contactForm.querySelector("button[type='submit']");
    const formData = new FormData(contactForm);
    const payload = Object.fromEntries(formData.entries());

    if (status) {
      status.textContent = "Sending your inquiry...";
    }
    if (submit) {
      submit.disabled = true;
      submit.style.opacity = "0.62";
    }

    try {
      await fetch(contactEndpoint, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      contactForm.reset();
      if (status) {
        status.textContent = "Inquiry sent. Hamza will reply as soon as possible.";
      }
    } catch (error) {
      if (status) {
        status.textContent = "The form could not send. Please email hmzaaa.web@gmail.com directly.";
      }
    } finally {
      if (submit) {
        submit.disabled = false;
        submit.style.opacity = "";
      }
    }
  });
}
