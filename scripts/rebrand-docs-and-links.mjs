import fs from 'node:fs';
import path from 'node:path';
import { load } from 'cheerio';

const root = process.cwd();
const routesPath = path.join(root, 'content/routes.json');
const pagesDir = path.join(root, 'content/pages');

// 1. Ensure /docs is in content/routes.json
let routes = [];
try {
  routes = JSON.parse(fs.readFileSync(routesPath, 'utf8'));
} catch (e) {
  routes = [];
}

if (!routes.some(r => r.slug === 'docs')) {
  routes.unshift({ slug: 'docs', title: 'PUKU Documentation' });
}
if (!routes.some(r => r.slug === 'careers')) {
  routes.unshift({ slug: 'careers', title: 'Careers' });
}
fs.writeFileSync(routesPath, JSON.stringify(routes, null, 2));

// 2. Scan and transform all html files in content/pages/
const dirs = fs.readdirSync(pagesDir).filter(d => fs.existsSync(path.join(pagesDir, d, 'page.html')));

let textReplacements = 0;
let linkReplacements = 0;

for (const dir of dirs) {
  const pageFile = path.join(pagesDir, dir, 'page.html');
  let html = fs.readFileSync(pageFile, 'utf8');
  const $ = load(html, null, false);

  // Replace link hrefs
  $('a').each((_, el) => {
    let href = $(el).attr('href');
    if (!href) return;

    let updatedHref = href;
    if (href.includes('docs.devin.ai') || href.includes('cli.devin.ai')) {
      updatedHref = '/docs';
    } else if (href.includes('cognition.com/careers') || href.includes('devin.ai/careers')) {
      updatedHref = '/careers';
    } else if (href.includes('learn.devinenterprise.com')) {
      updatedHref = '/university';
    } else if (href.includes('app.devin.ai/signup')) {
      updatedHref = '/signup';
    } else if (href.includes('app.devin.ai/login') || href.includes('app.devin.ai/auth')) {
      updatedHref = '/login';
    } else if (href.includes('app.devin.ai/review')) {
      updatedHref = '/review';
    } else if (href.includes('devin.ai/download')) {
      updatedHref = '/download';
    } else if (href === 'https://devin.ai' || href === 'https://devin.ai/') {
      updatedHref = '/';
    } else if (href.startsWith('https://devin.ai/')) {
      updatedHref = href.replace('https://devin.ai', '');
    }

    if (updatedHref !== href) {
      $(el).attr('href', updatedHref);
      linkReplacements++;
    }
  });

  // Rebrand text content inside html
  $('*').contents().each((_, node) => {
    if (node.type === 'text') {
      let text = node.data;
      let newText = text
        .replace(/docs\.devin\.ai/gi, '/docs')
        .replace(/Devin('s)? doc(umentation)?/gi, 'PUKU doc$2')
        .replace(/Devin Cloud/gi, 'PUKU Cloud')
        .replace(/Devin Desktop/gi, 'PUKU Desktop')
        .replace(/Devin CLI/gi, 'PUKU CLI')
        .replace(/Devin Review/gi, 'PUKU Review')
        .replace(/Devin Enterprise/gi, 'PUKU Enterprise')
        .replace(/Devin University/gi, 'PUKU University')
        .replace(/\bDevins\b/g, 'PUKU agents')
        .replace(/\bDevin\b/g, 'PUKU');
      if (newText !== text) {
        node.data = newText;
        textReplacements++;
      }
    }
  });

  // Attribute rebranding (aria-label, title, etc.)
  $('*').each((_, el) => {
    for (const attr of ['aria-label', 'title', 'placeholder']) {
      let val = $(el).attr(attr);
      if (val) {
        let newVal = val
          .replace(/docs\.devin\.ai/gi, '/docs')
          .replace(/\bDevins\b/g, 'PUKU agents')
          .replace(/\bDevin\b/g, 'PUKU');
        $(el).attr(attr, newVal);
      }
    }
  });

  fs.writeFileSync(pageFile, $.html());
}

console.log(`Updated ${dirs.length} pages: ${linkReplacements} links updated, ${textReplacements} text blocks rebranded.`);
