import { readFile } from "node:fs/promises";
import { glob } from "node:fs/promises";

const files = await Array.fromAsync(
  glob("src/**/*.{astro,tsx,ts}", { exclude: ["**/node_modules/**"] }),
);
const violations = [];
const forbidden = [
  { label: "dollar or USD pricing", pattern: /\bUSD\b|\$\s*\d/gi },
  { label: "Edukids reference", pattern: /edukids/gi },
  {
    label: "old email",
    pattern: /(?:admissions@isaj\.(?:com|edu\.ht)|contact@isaj\.edu\.ht)/gi,
  },
  { label: "old phone", pattern: /(?:498[- ]9660|00 00 0000)/g },
  { label: "placeholder link", pattern: /href\s*=\s*["']#\s*["']/g },
  {
    label: "remote image host",
    pattern:
      /https?:\/\/(?:images\.unsplash\.com|ui-avatars\.com|img\.icons8\.com)/gi,
  },
];

for (const file of files) {
  const source = await readFile(file, "utf8");
  for (const rule of forbidden) {
    if (rule.pattern.test(source)) {
      violations.push(`${file}: ${rule.label}`);
    }
    rule.pattern.lastIndex = 0;
  }
}

if (violations.length > 0) {
  console.error("Content validation failed:");
  for (const violation of violations) console.error(`- ${violation}`);
  process.exit(1);
}

console.log(`Content validation passed for ${files.length} source files.`);
