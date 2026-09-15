import fs from 'node:fs';
import path from 'node:path';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import PukuPageRenderer from '../../components/PukuPageRenderer';
import DocsPage from '../../components/pages/DocsPage';
import routes from '../../content/routes.json';

export function generateStaticParams() {
  return routes.map((r) => ({ slug: r.slug.split('/') }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const route = routes.find((r) => r.slug === slug.join('/'));
  return { title: route ? `${route.title} | PUKU` : 'Page not found | PUKU' };
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const key = slug.join('/');
  if (!routes.some((r) => r.slug === key)) notFound();

  if (key === 'docs') {
    return (
      <>
        <Header />
        <DocsPage />
      </>
    );
  }

  const htmlPath = path.join(process.cwd(), 'content/pages', slug.join('__'), 'page.html');
  if (!fs.existsSync(htmlPath)) notFound();
  const html = fs.readFileSync(htmlPath, 'utf8');

  return (
    <>
      <Header />
      {key === 'university' && <link rel="stylesheet" href="/university.css" />}
      <PukuPageRenderer html={html} slug={key} />
    </>
  );
}

