import { writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

const SITE_URL = "https://www.birgit-maehner.de";

type SitemapEntry = {
  path: string;
  priority: number;
  changefreq: "weekly" | "monthly" | "yearly";
};

const pages: SitemapEntry[] = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/yoga/allgemein/", priority: 0.8, changefreq: "monthly" },
  { path: "/yoga/therapie/", priority: 0.8, changefreq: "monthly" },
  { path: "/shiatsu/allgemein/", priority: 0.8, changefreq: "monthly" },
  { path: "/shiatsu/betriebe/", priority: 0.7, changefreq: "monthly" },
  { path: "/weitere/bach-bluetentherapie/", priority: 0.7, changefreq: "monthly" },
  { path: "/weitere/fussreflexzonenmassage/", priority: 0.7, changefreq: "monthly" },
  { path: "/weitere/schroepfen/", priority: 0.7, changefreq: "monthly" },
  { path: "/preise/", priority: 0.8, changefreq: "monthly" },
  { path: "/kontakt/", priority: 0.9, changefreq: "monthly" },
  { path: "/raeumlichkeiten/", priority: 0.5, changefreq: "yearly" },
];

const lastmod = new Date().toISOString().split("T")[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${SITE_URL}${p.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority.toFixed(1)}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(join(publicDir, "sitemap.xml"), xml);
console.log(`Generated sitemap.xml with ${pages.length} URLs (lastmod: ${lastmod}).`);
