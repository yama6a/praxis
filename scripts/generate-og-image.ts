import sharp from "sharp";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

const WIDTH = 1200;
const HEIGHT = 630;

async function generate() {
  const heroPath = join(publicDir, "images", "hero-buddha.webp");

  // Resize hero image to cover 1200x630
  const base = await sharp(heroPath)
    .resize(WIDTH, HEIGHT, { fit: "cover", position: "center" })
    .toBuffer();

  // Create a dark gradient overlay for text readability
  const overlay = Buffer.from(
    `<svg width="${WIDTH}" height="${HEIGHT}">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="rgba(0,0,0,0.45)"/>
          <stop offset="50%" stop-color="rgba(0,0,0,0.55)"/>
          <stop offset="100%" stop-color="rgba(0,0,0,0.7)"/>
        </linearGradient>
      </defs>
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#g)"/>
    </svg>`
  );

  // Text overlay
  const text = Buffer.from(
    `<svg width="${WIDTH}" height="${HEIGHT}">
      <style>
        .title { fill: white; font-size: 52px; font-family: serif; font-weight: 700; }
        .name { fill: white; font-size: 36px; font-family: sans-serif; font-weight: 300; }
        .location { fill: rgba(255,255,255,0.85); font-size: 28px; font-family: sans-serif; }
      </style>
      <text x="50%" y="240" text-anchor="middle" class="title">Praxis Ganzheitliche</text>
      <text x="50%" y="305" text-anchor="middle" class="title">Körpertherapie</text>
      <text x="50%" y="385" text-anchor="middle" class="name">Birgit Mähner</text>
      <text x="50%" y="440" text-anchor="middle" class="location">Berlin Charlottenburg</text>
    </svg>`
  );

  const outputPath = join(publicDir, "images", "og-default.jpg");

  await sharp(base)
    .composite([
      { input: overlay, blend: "over" },
      { input: text, blend: "over" },
    ])
    .jpeg({ quality: 85 })
    .toFile(outputPath);

  console.log(`Generated OG image: ${outputPath} (${WIDTH}x${HEIGHT})`);
}

generate().catch((err) => {
  console.error("Failed to generate OG image:", err);
  process.exit(1);
});
