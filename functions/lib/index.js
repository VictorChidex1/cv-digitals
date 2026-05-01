"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.seoInterceptor = void 0;
const https_1 = require("firebase-functions/v2/https");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
// 1. HARDCODED DOMAIN LOGIC
// Explicit declaration of the target canonical domain to prevent 
// Google Cloud dynamic proxy resolution errors (cloudfunctions.net pollution).
const BASE_URL = "https://cv-digital-9e0c4.web.app";
const defaults = {
    title: "CV Digitals | Premium Tech & Entertainment Agency",
    description: "CV Digitals is a high-performance digital agency operating at the intersection of high-level web development, music promotion, and event management.",
    image: `${BASE_URL}/assets/cv-digital-logo.png`,
    url: BASE_URL,
};
const routes = {
    "/": defaults,
    "/services": {
        title: "Our Services | CV Digitals",
        description: "Explore our premium services: high-level web development, exclusive music promotion, and corporate event management.",
        image: defaults.image,
        url: `${BASE_URL}/services`,
    },
    "/work": {
        title: "Work & Case Studies | CV Digitals",
        description: "View our portfolio of select technological projects and high-profile entertainment campaigns.",
        image: defaults.image,
        url: `${BASE_URL}/work`,
    },
    "/about": {
        title: "About Us | CV Digitals",
        description: "Learn more about our mission, vision, and the elite team powering CV Digitals.",
        image: defaults.image,
        url: `${BASE_URL}/about`,
    },
    "/contact": {
        title: "Contact Us | CV Digitals",
        description: "Get in touch for consultations, project inquiries, or strategic digital partnerships.",
        image: defaults.image,
        url: `${BASE_URL}/contact`,
    },
    "/privacy": {
        title: "Privacy Protocol | CV Digitals",
        description: "Read our privacy protocol and data protection standards.",
        image: defaults.image,
        url: `${BASE_URL}/privacy`,
    },
    "/terms": {
        title: "Terms of Service | CV Digitals",
        description: "Review our Terms of Service outlining engagement conditions.",
        image: defaults.image,
        url: `${BASE_URL}/terms`,
    },
};
exports.seoInterceptor = (0, https_1.onRequest)({
    region: "us-central1",
    maxInstances: 10,
}, (req, res) => {
    try {
        // 2. THE SUPERIOR ALTERNATIVE (BUNDLE HTML / NO NETWORK OVERHEAD)
        // Read the localized app.html directly from memory/disk avoiding latency payload
        const indexPath = path.resolve(__dirname, "./app.html");
        let html = fs.readFileSync(indexPath, "utf8");
        const cleanPath = req.url.split("?")[0];
        const meta = routes[cleanPath] || defaults;
        // Inject standard Meta Attributes
        html = html.replace(/<title>.*?<\/title>/gi, `<title>${meta.title}</title>`);
        html = html.replace(/<meta\s+name=["']title["']\s+content=["'].*?["']\s*\/?>/gi, `<meta name="title" content="${meta.title}" />`);
        html = html.replace(/<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/gi, `<meta name="description" content="${meta.description}" />`);
        // Open Graph / Facebook tags
        html = html.replace(/<meta\s+property=["']og:url["']\s+content=["'].*?["']\s*\/?>/gi, `<meta property="og:url" content="${meta.url}" />`);
        html = html.replace(/<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/gi, `<meta property="og:title" content="${meta.title}" />`);
        html = html.replace(/<meta\s+property=["']og:description["']\s+content=["'].*?["']\s*\/?>/gi, `<meta property="og:description" content="${meta.description}" />`);
        html = html.replace(/<meta\s+property=["']og:image["']\s+content=["'].*?["']\s*\/?>/gi, `<meta property="og:image" content="${meta.image}" />`);
        // Twitter / X tags
        html = html.replace(/<meta\s+property=["']twitter:url["']\s+content=["'].*?["']\s*\/?>/gi, `<meta property="twitter:url" content="${meta.url}" />`);
        html = html.replace(/<meta\s+property=["']twitter:title["']\s+content=["'].*?["']\s*\/?>/gi, `<meta property="twitter:title" content="${meta.title}" />`);
        html = html.replace(/<meta\s+property=["']twitter:description["']\s+content=["'].*?["']\s*\/?>/gi, `<meta property="twitter:description" content="${meta.description}" />`);
        html = html.replace(/<meta\s+property=["']twitter:image["']\s+content=["'].*?["']\s*\/?>/gi, `<meta property="twitter:image" content="${meta.image}" />`);
        // Edge caching mechanism optimized for speed
        res.set("Cache-Control", "public, max-age=300, s-maxage=600");
        res.status(200).send(html);
    }
    catch (error) {
        console.error("Error reading bundled HTML:", error);
        res.status(500).send("Internal Server Error processing request.");
    }
});
//# sourceMappingURL=index.js.map