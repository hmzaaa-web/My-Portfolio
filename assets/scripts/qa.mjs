import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const root = process.cwd().replace(/\\/g, "/");
const files = [
  "index.html",
  "about.html",
  "projects.html",
  "services.html",
  "process.html",
  "contact.html",
  "privacy-policy.html",
  "terms.html",
  "404.html",
];

const browser = await chromium.launch({
  headless: true,
  executablePath: "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
});

for (const file of files) {
  const page = await browser.newPage({
    viewport: { width: 1280, height: 900 },
    deviceScaleFactor: 1,
  });
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.goto(`file:///${root}/${file}`, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(350);
  const data = await page.evaluate(() => ({
    title: document.title,
    h1: document.querySelectorAll("h1").length,
    hasDescription: Boolean(document.querySelector('meta[name="description"]')),
    hasCanonical: Boolean(document.querySelector('link[rel="canonical"]')),
    jsonLd: document.querySelectorAll('script[type="application/ld+json"]').length,
    horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
  }));
  console.log(`${file} ${JSON.stringify({ ...data, errors })}`);
  await page.close();
}

await browser.close();
