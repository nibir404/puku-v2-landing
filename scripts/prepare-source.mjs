import fs from 'node:fs';
import path from 'node:path';
import {load} from 'cheerio';
const root=process.cwd();
const dirs=['a784b6dc-01b3-4142-a1ff-c1c4b60278a0','a49f6117-937f-42de-a393-85f86021c8b2','dbb53c90-2b50-4abd-bf4b-9008f1386e2b'];
const base='/var/folders/3y/zk9dgpkd2nxcmmhrz1dktxnc0000gn/T/browser-use/assets/';
const assets=dirs.flatMap(d=>JSON.parse(fs.readFileSync(base+d+'/manifest.json','utf8')).assets);
const byOriginal=new Map(); const byUrl=new Map();
for(const a of assets){
 const url=new URL(a.url); const original=url.searchParams.get('url')||url.pathname;
 const ext=a.contentType==='image/webp'?'.webp':a.contentType==='image/jpeg'?'.jpg':path.extname(a.path);
 const name=a.id+ext; fs.copyFileSync(a.path,root+'/public/assets/'+name);
 byOriginal.set(original,'/assets/'+name);byUrl.set(a.url,'/assets/'+name);
}
const missing=new Set();
function local(url){if(!url||url.startsWith('data:'))return url;const u=new URL(url,'https://devin.ai');const original=u.searchParams.get('url')||u.pathname;const found=byOriginal.get(original);if(!found)missing.add(original);return found||url;}
function clean(html){const $=load(html,null,false);$('script,link,iframe').remove();$('*').each((_,el)=>{for(const key of Object.keys(el.attribs||{})){if(key.startsWith('data-analytics')||key==='data-nimg'||key==='fetchpriority')$(el).removeAttr(key);}
 if(el.name==='img'){$(el).attr('src',local($(el).attr('src')));$(el).removeAttr('srcset').removeAttr('sizes');}
 if(el.name==='source'){const src=$(el).attr('srcset')?.split(',')[0].trim().split(' ')[0];$(el).attr('srcset',local(src));$(el).removeAttr('sizes');}
 if(el.name==='a'){let href=$(el).attr('href');if(href?.startsWith('/'))href='https://devin.ai'+href;if(href?.includes('dcid=')){let u=new URL(href);u.searchParams.delete('dcid');href=u.href;}$(el).attr('href',href);}
 });return $.html();}
for(let i=0;i<4;i++)fs.writeFileSync(root+'/content/section-'+i+'.html',clean(fs.readFileSync('/tmp/devin-section-'+i+'.html','utf8')));
fs.writeFileSync(root+'/content/footer.html',clean(fs.readFileSync('/tmp/devin-footer.html','utf8')));
for(let i of [0,1,3,4])fs.writeFileSync(root+'/content/integration-'+i+'.html',clean(fs.readFileSync('/tmp/devin-integration-'+i+'.html','utf8')));
const $=load(fs.readFileSync('/tmp/devin-integration-2.html','utf8'));
const details=$('h4').toArray().map(el=>({name:$(el).text(),icon:$(el).find('svg').parent().html(),description:$(el).next().text()}));
const imageAssets=Object.fromEntries([...byOriginal].filter(([k])=>/integration|bento|hero/.test(k)).map(([k,v])=>[path.basename(k),v]));
fs.writeFileSync(root+'/content/integrations.json',JSON.stringify({details,imageAssets},null,2));
for(const a of assets.filter(a=>a.kind==='stylesheet')){let css=fs.readFileSync(a.path,'utf8');css=css.replace(/url\(([^)]+)\)/g,(match,url)=>{const raw=url.replace(/["']/g,'');if(raw.startsWith('data:'))return match;const full=new URL(raw,a.url);const dest=byOriginal.get(full.pathname);return dest?`url(${dest})`:match;});fs.writeFileSync(root+'/app/source-'+a.id+'.css',css);}
fs.copyFileSync('/Users/betopiagroup/Downloads/PUKU CLI.png',root+'/public/puku-logo.png');
fs.copyFileSync('/Users/betopiagroup/Downloads/PUKU CLI.png',root+'/app/icon.png');
fs.copyFileSync('/tmp/source-desktop.png',root+'/evidence/source-desktop.png');fs.copyFileSync('/tmp/source-mobile.png',root+'/evidence/source-mobile.png');
fs.writeFileSync(root+'/content/root.json',fs.readFileSync('/tmp/devin-root.json'));
fs.writeFileSync(root+'/asset-manifest.json',JSON.stringify(assets.map(a=>({source:a.url,kind:a.kind,local:byUrl.get(a.url)})),null,2));
console.log('Unresolved resources:',[...missing]);console.log('Integration details:',details.map(x=>[x.name,x.description]));
