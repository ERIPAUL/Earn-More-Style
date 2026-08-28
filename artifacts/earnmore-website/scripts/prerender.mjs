import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist/public");
const serverDir = path.resolve(__dirname, "../dist/server");
const templatePath = path.join(distDir, "index.html");

// ── Polyfill browser globals before importing the React SSR bundle ──
globalThis.window = {
  scrollY: 0,
  scrollTo: () => {},
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => false,
  matchMedia: () => ({
    matches: false,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
  }),
  location: { pathname: "/", search: "", hash: "", href: "/" },
  history: { pushState: () => {}, replaceState: () => {}, state: null },
  navigator: { userAgent: "" },
  innerWidth: 1280,
  innerHeight: 800,
  requestAnimationFrame: () => 0,
  cancelAnimationFrame: () => {},
  getComputedStyle: () => ({ getPropertyValue: () => "" }),
  ResizeObserver: class {
    observe() {}
    unobserve() {}
    disconnect() {}
  },
  IntersectionObserver: class {
    observe() {}
    unobserve() {}
    disconnect() {}
  },
  MutationObserver: class {
    observe() {}
    disconnect() {}
    takeRecords() { return []; }
  },
  CustomEvent: class CustomEvent {
    constructor(type, opts) { this.type = type; this.detail = opts?.detail; }
  },
};

globalThis.document = {
  querySelector: () => null,
  querySelectorAll: () => ({ forEach: () => {}, length: 0 }),
  getElementById: () => null,
  getElementsByTagName: () => [],
  createElement: (tag) => ({
    style: {},
    setAttribute: () => {},
    getAttribute: () => null,
    appendChild: () => {},
    classList: { add: () => {}, remove: () => {}, contains: () => false, toggle: () => {} },
    tagName: tag?.toUpperCase(),
    children: [],
    childNodes: [],
    nodeName: tag?.toUpperCase(),
  }),
  createElementNS: (ns, tag) => ({
    style: {},
    setAttribute: () => {},
    getAttribute: () => null,
    tagName: tag,
  }),
  createTextNode: (t) => ({ nodeValue: t }),
  createDocumentFragment: () => ({ appendChild: () => {}, childNodes: [] }),
  body: {
    style: {},
    classList: { add: () => {}, remove: () => {}, contains: () => false },
    appendChild: () => {},
    removeChild: () => {},
    children: [],
  },
  head: { appendChild: () => {}, removeChild: () => {} },
  documentElement: {
    style: {},
    lang: "en",
    classList: { add: () => {}, remove: () => {}, contains: () => false },
    setAttribute: () => {},
    getAttribute: () => null,
  },
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => false,
  readyState: "complete",
  cookie: "",
};

try {
  Object.defineProperty(globalThis, "navigator", {
    value: { userAgent: "node", language: "en" },
    writable: true,
    configurable: true,
  });
} catch (_) {}
globalThis.location = globalThis.window.location;

// ── Routes to pre-render ──
const routes = [
  "/",
  "/about",
  "/services",
  "/contact",
  "/infrastructure",
  "/training",
  "/training/payment",
  "/egg",
  "/blog",
  "/blog/ifrs-s1-s2-part-2",
  "/blog/ifrs-s1-s2-part-1",
  "/blog/africa-climate-summit",
  "/blog/amazon-summit",
  "/services/esg-consulting-nigeria",
  "/services/sustainability-consulting-lagos",
  "/services/climate-finance-advisory-nigeria",
  "/services/ifrs-sustainability-reporting-nigeria",
  "/services/green-bonds-advisory-nigeria",
  "/services/esg-training-nigeria",
];

// ── Patch React.useSyncExternalStore for SSR ──
// React is externalized in the SSR build so this patches the shared instance.
// Libraries like next-themes and some Radix primitives call useSyncExternalStore
// without a getServerSnapshot; this makes them fall back to getSnapshot instead
// of throwing.
import React from "react";
const _useSyncExternalStore = React.useSyncExternalStore;
React.useSyncExternalStore = function ssrSafe(subscribe, getSnapshot, getServerSnapshot) {
  return _useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot ?? getSnapshot);
};

// ── Load template and server bundle ──
if (!fs.existsSync(templatePath)) {
  console.error("Client build not found — run `vite build` first.");
  process.exit(1);
}

const template = fs.readFileSync(templatePath, "utf-8");

const serverEntryPath = path.join(serverDir, "entry-server.js");
if (!fs.existsSync(serverEntryPath)) {
  console.error("SSR build not found — run `vite build --config vite.config.ssr.ts` first.");
  process.exit(1);
}

const { render } = await import(serverEntryPath);

let success = 0;
let failed = 0;

for (const route of routes) {
  try {
    const { html: appHtml, helmet } = render(route);

    // Build head tags from react-helmet-async
    let headTags = "";
    if (helmet) {
      headTags = [
        helmet.title?.toString() || "",
        helmet.meta?.toString() || "",
        helmet.link?.toString() || "",
        helmet.script?.toString() || "",
      ]
        .filter(Boolean)
        .join("\n    ");
    }

    const pageHtml = template
      .replace("<!--app-html-->", appHtml)
      .replace("<!--app-head-->", headTags);

    const outPath =
      route === "/"
        ? path.join(distDir, "index.html")
        : path.join(distDir, route.slice(1), "index.html");

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, pageHtml);

    console.log(`  ✓ ${route}`);
    success++;
  } catch (err) {
    console.error(`  ✗ ${route}: ${err.message}`);
    failed++;
  }
}

console.log(`\nPre-rendered ${success} routes.${failed ? ` ${failed} failed (see above).` : ""}`);
if (failed > 0) process.exit(1);
