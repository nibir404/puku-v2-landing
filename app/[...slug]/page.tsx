import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import PukuPageRenderer from '../../components/PukuPageRenderer';
import Footer from '../../components/Footer';
import GenericPukuPage from '../../components/pages/GenericPukuPage';
import routes from '../../content/routes.json';

export function generateStaticParams() {
  return routes.map((r) => ({ slug: r.slug.split('/') }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const route = routes.find((r) => r.slug === slug.join('/'));
  return { title: route ? `${route.title}` : 'Page not found | PUKU' };
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const key = slug.join('/');
  const route = routes.find((r) => r.slug === key);

  if (!route) notFound();

  const candidates = [
    path.join(process.cwd(), 'content/pages', slug.join('__'), 'page.html'),
    path.join(process.cwd(), 'content/pages', slug.join('/'), 'page.html'),
    path.join(process.cwd(), 'content/pages', slug[slug.length - 1], 'page.html'),
  ];

  const htmlPath = candidates.find((p) => fs.existsSync(p));

  if (htmlPath) {
    const html = fs.readFileSync(htmlPath, 'utf8');
    return (
      <div className="legacy-root min-h-screen bg-[rgb(var(--bg-page))] text-legacy-black">
        <Header />
        {key === 'university' && <link rel="stylesheet" href="/university.css" />}
        <PukuPageRenderer html={html} slug={key} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="legacy-root min-h-screen bg-[rgb(var(--bg-page))] text-legacy-black">
      <Header />
      <GenericPukuPage slug={key} title={route.title} />
      <Footer />
    </div>
  );
}
