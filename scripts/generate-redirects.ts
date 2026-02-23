import { mkdirSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

type RedirectEntry =
  | { oldPath: string; target: string }
  | { oldPath: string; gone: true };

const entries: RedirectEntry[] = [
  { oldPath: "/wp/category/startseite/herzlich-willkommen", target: "/" },
  { oldPath: "/wp/category/startseite/aktuelle-informationen", target: "/" },
  { oldPath: "/wp/category/yoga", target: "/yoga/allgemein/" },
  { oldPath: "/wp/category/yoga/yoga-informationen", target: "/yoga/allgemein/" },
  { oldPath: "/wp/category/yoga/yoga-auf-dem-stuhl", target: "/yoga/allgemein/" },
  { oldPath: "/wp/category/yoga/kurse-preise", target: "/preise/" },
  { oldPath: "/wp/category/shiatsu", target: "/shiatsu/allgemein/" },
  { oldPath: "/wp/category/shiatsu/behandlung-preise", target: "/preise/" },
  { oldPath: "/wp/category/shiatsu/shiatsu-in-betrieben", target: "/shiatsu/betriebe/" },
  { oldPath: "/wp/category/weitere-angebote", gone: true },
  { oldPath: "/wp/category/weitere-angebote/bach-blutentherapie", target: "/weitere/bach-bluetentherapie/" },
  { oldPath: "/wp/category/weitere-angebote/fusreflexzonenmassage", target: "/weitere/fussreflexzonenmassage/" },
  { oldPath: "/wp/category/weitere-angebote/schropfen", target: "/weitere/schroepfen/" },
  { oldPath: "/wp/vita", target: "/qualifikationen/" },
  { oldPath: "/wp/category/kontakt/anfahrt", target: "/kontakt/" },
  { oldPath: "/wp/category/kontakt/kontaktmoeglichkeiten", target: "/kontakt/" },
  { oldPath: "/wp/category/sonstiges/links", gone: true },
  { oldPath: "/wp/category/sonstiges/haftungsausschluss", target: "/haftungsausschluss/" },
  { oldPath: "/wp/category/sonstiges/impressum", target: "/impressum/" },
];

function redirectHtml(target: string): string {
  return `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta http-equiv="refresh" content="0;url=${target}">
<link rel="canonical" href="${target}">
<title>Weiterleitung</title>
</head>
<body>
<p>Diese Seite ist umgezogen. <a href="${target}">Weiter zur neuen Seite</a>.</p>
</body>
</html>
`;
}

function goneHtml(): string {
  return `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<title>Seite nicht mehr verfügbar</title>
</head>
<body>
<h1>Diese Seite ist nicht mehr verfügbar</h1>
<p>Der Inhalt wurde entfernt. <a href="/">Zurück zur Startseite</a>.</p>
</body>
</html>
`;
}

let count = 0;

for (const entry of entries) {
  const html = "gone" in entry ? goneHtml() : redirectHtml(entry.target);

  // /wp/category/yoga → public/wp/category/yoga/index.html (serves trailing-slash)
  const indexPath = join(publicDir, entry.oldPath, "index.html");
  mkdirSync(dirname(indexPath), { recursive: true });
  writeFileSync(indexPath, html);

  // /wp/category/yoga → public/wp/category/yoga.html (serves without trailing slash)
  const filePath = join(publicDir, `${entry.oldPath}.html`);
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, html);

  count++;
}

console.log(`Generated redirect pages for ${count} old paths (${count * 2} files).`);
