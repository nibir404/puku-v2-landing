import fs from 'node:fs';
import path from 'node:path';
import {notFound} from 'next/navigation';
import Header from '../../components/Header';
import PageInteractions from '../../components/PageInteractions';
import routes from '../../content/routes.json';
export function generateStaticParams(){return routes.map(r=>({slug:r.slug.split('/')}))}
export async function generateMetadata({params}:{params:Promise<{slug:string[]}>}){const{slug}=await params;const route=routes.find(r=>r.slug===slug.join('/'));return {title:route?`${route.title} | PUKU`:'Page not found | PUKU'}}
export default async function Page({params}:{params:Promise<{slug:string[]}>}){const{slug}=await params;const key=slug.join('/');if(!routes.some(r=>r.slug===key))notFound();const html=fs.readFileSync(path.join(process.cwd(),'content/pages',slug.join('__'),'page.html'),'utf8');return <><Header/>{key==='university'&&<link rel="stylesheet" href="/university.css"/>}<PageInteractions slug={key}><main id="main-content" className={'captured-page route-'+slug[0]} dangerouslySetInnerHTML={{__html:html}}/></PageInteractions></>}
