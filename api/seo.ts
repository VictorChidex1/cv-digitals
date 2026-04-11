export default async function handler(req: any, res: any) {
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers.host;
  const baseUrl = `${protocol}://${host}`;

  // Grab the static file directly
  const response = await fetch(`${baseUrl}/index.html`);
  let html = await response.text();

  const defaults = {
    title: "CV Digitals | Premium Tech & Entertainment Agency",
    description: "CV Digitals is a high-performance digital agency operating at the intersection of high-level web development, music promotion, and event management.",
    image: `${baseUrl}/assets/cv-digital-logo.png`,
    url: baseUrl
  };

  const routes: Record<string, { title: string; description: string; image: string; url: string }> = {
    "/": defaults,
    "/services": {
      title: "Our Services | CV Digitals",
      description: "Explore our premium services: high-level web development, exclusive music promotion, and corporate event management.",
      image: defaults.image,
      url: `${baseUrl}/services`
    },
    "/work": {
      title: "Work & Case Studies | CV Digitals",
      description: "View our portfolio of select technological projects and high-profile entertainment campaigns.",
      image: defaults.image,
      url: `${baseUrl}/work`
    },
    "/about": {
      title: "About Us | CV Digitals",
      description: "Learn more about our mission, vision, and the elite team powering CV Digitals.",
      image: defaults.image,
      url: `${baseUrl}/about`
    },
    "/contact": {
      title: "Contact Us | CV Digitals",
      description: "Get in touch for consultations, project inquiries, or strategic digital partnerships.",
      image: defaults.image,
      url: `${baseUrl}/contact`
    },
    "/privacy": {
      title: "Privacy Protocol | CV Digitals",
      description: "Read our privacy protocol and data protection standards.",
      image: defaults.image,
      url: `${baseUrl}/privacy`
    },
    "/terms": {
      title: "Terms of Service | CV Digitals",
      description: "Review our Terms of Service outlining engagement conditions.",
      image: defaults.image,
      url: `${baseUrl}/terms`
    }
  };

  const cleanPath = req.url.split('?')[0];
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

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate'); // Edge caching mechanism
  return res.status(200).send(html);
}
