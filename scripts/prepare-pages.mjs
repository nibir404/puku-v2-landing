import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {load} from 'cheerio';
const root=process.cwd(),base=path.join(root,'content/pages');
const dirs=fs.readdirSync(base).filter(d=>fs.existsSync(path.join(base,d,'raw.html')));
const assets=dirs.flatMap(d=>{try{return JSON.parse(fs.readFileSync(path.join(base,d,'bundle.json'))).assets||[]}catch{return []}});
if(fs.existsSync('content/extra-assets.json'))assets.push(...JSON.parse(fs.readFileSync('content/extra-assets.json')));
const exact=new Map(),original=new Map();
for(const a of assets){if(!fs.existsSync(a.path))continue;const u=new URL(a.url),key=u.searchParams.get('url')||u.pathname;const ext=({'image/webp':'.webp','image/jpeg':'.jpg','image/png':'.png','image/svg+xml':'.svg','text/css':'.css','font/woff2':'.woff2'})[a.contentType]||path.extname(a.path);const local='/assets/'+a.id+ext;if(path.resolve(a.path)!==root+'/public'+local)fs.copyFileSync(a.path,root+'/public'+local);exact.set(a.url,local);const w=Number(u.searchParams.get('w')||10000);if(!original.has(key)||original.get(key).width<w)original.set(key,{local,width:w});}
for(const a of JSON.parse(fs.readFileSync('asset-manifest.json'))){exact.set(a.source,a.local);const u=new URL(a.source),k=u.searchParams.get('url')||u.pathname;if(!original.has(k))original.set(k,{local:a.local,width:0});}
const missing=new Set();
function local(raw,origin='https://devin.ai'){if(!raw||raw.startsWith('data:')||raw.startsWith('#')||(raw.startsWith('/assets/')&&fs.existsSync(root+'/public'+raw)))return raw;try{const u=new URL(raw,origin);const found=exact.get(u.href)||original.get(u.searchParams.get('url')||u.pathname)?.local;if(found)return found;missing.add(u.href);return raw;}catch{return raw}}
function brand(s){return s.replace(/\bDevins\b/gi,'PUKU agents').replace(/\bMultiDevin\b/g,'MultiPUKU').replace(/\bDevin\b/gi,'PUKU').replace(/\bCognition\b/gi,'PUKU').replace(/\bWindsurf\b/gi,'PUKU').replace(/\bCodeium\b/gi,'PUKU');}
function link(raw){if(!raw)return raw;try{const u=new URL(raw,'https://devin.ai');u.searchParams.delete('dcid');if(u.hostname==='docs.devin.ai'||u.hostname==='cli.devin.ai')return '/docs';if(u.hostname==='learn.devinenterprise.com')return '/university';if(u.hostname==='devin.ai')return u.pathname+u.search+u.hash;if(u.hostname==='app.devin.ai'){if(/signup/.test(u.pathname))return '/signup';if(/login|auth/.test(u.pathname))return '/login';if(u.pathname==='/review')return '/review';return '/login';}if(/cognition\.(com|ai)/.test(u.hostname)&&/contact|get-started/.test(u.pathname))return '/demo';return u.href;}catch{return raw}}
const cssFiles=new Map();for(const a of assets.filter(x=>x.kind==='stylesheet'&&x.url.startsWith('https://devin.ai/'))){if(!fs.existsSync(a.path))continue;let css=fs.readFileSync(a.path,'utf8');const hash=crypto.createHash('sha256').update(css).digest('hex').slice(0,12);if(cssFiles.has(hash))continue;css=css.replace(/url\(([^)]+)\)/g,(m,v)=>'url('+local(v.replace(/["']/g,''),a.url)+')');const name='source-pages-'+hash+'.css';fs.writeFileSync('app/'+name,css);cssFiles.set(hash,name);}
fs.writeFileSync('app/pages-source.css',[...cssFiles.values()].map(n=>'@import "./'+n+'";').join('\n'));
const registry=[];
for(const dir of dirs){const slug=dir.replaceAll('__','/'),raw=fs.readFileSync(path.join(base,dir,'raw.html'),'utf8'),$=load(raw,null,false);
 $('script,link[rel=preload],noscript').remove();
 $('nav').each((i,e)=>{if($(e).find('a[aria-label*="home"],a[aria-label="Home"]').length||$(e).hasClass('fixed')||$(e).closest('header').length)$(e).closest('header').length?$(e).closest('header').remove():$(e).remove();});
 $('[class*="fixed"]').each((i,e)=>{if($(e).find('a[aria-label*="home"]').length)$(e).remove();});
 $('*').contents().each((i,e)=>{if(e.type==='text')e.data=brand(e.data)});
 $('*').each((i,e)=>{const el=$(e);for(const k of Object.keys(e.attribs||{})){if(k.startsWith('on')||k.startsWith('data-analytics')||['data-nimg','fetchpriority','autofocus'].includes(k))el.removeAttr(k);if(['alt','title','aria-label','placeholder'].includes(k))el.attr(k,brand(el.attr(k)));}
 for(const attr of ['src','poster'])if(el.attr(attr)&&e.tagName!=='iframe')el.attr(attr,local(el.attr(attr)));
 if(e.tagName==='img')el.removeAttr('srcset').removeAttr('sizes').attr('loading','lazy');
 if(e.tagName==='source'&&el.attr('srcset'))el.attr('srcset',local(el.attr('srcset').split(',')[0].trim().split(' ')[0])).removeAttr('sizes');
 if(e.tagName==='a')el.attr('href',link(el.attr('href')));
 if(e.tagName==='form')el.removeAttr('action').removeAttr('method').attr('data-puku-form','contact');
 if(e.tagName==='input'||e.tagName==='textarea')el.removeAttr('value');
 if(el.attr('style')){let s=el.attr('style').replace(/url\(([^)]+)\)/g,(m,v)=>'url('+local(v.replace(/["']/g,''))+')');s=s.replace(/visibility:\s*hidden/g,'visibility: visible');el.attr('style',s);}
 });
 $('iframe').each((i,e)=>{const el=$(e);el.attr('loading','lazy');const src=el.attr('src');if(src?.includes('vimeo.com'))el.attr('src',src.replace('autoplay=1','autoplay=0'));});
 const title=$('h1').first().text().trim()||$('h2').first().text().trim()||brand(slug);
 fs.writeFileSync(path.join(base,dir,'page.html'),$.html());registry.push({slug,title});
}
fs.writeFileSync('content/routes.json',JSON.stringify(registry,null,2));fs.writeFileSync('content/missing-assets.json',JSON.stringify([...missing],null,2));
console.log('Prepared',registry.length,'routes,',exact.size,'assets,',cssFiles.size,'stylesheets; unresolved assets',missing.size);
