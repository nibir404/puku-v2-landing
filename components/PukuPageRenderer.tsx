'use client';

import React, { useEffect, useRef } from 'react';
import parse, { Element, DOMNode, domToReact, HTMLReactParserOptions } from 'html-react-parser';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageInteractions from './PageInteractions';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface PukuPageRendererProps {
  html: string;
  slug: string;
}

const parserOption: HTMLReactParserOptions = {
  replace(node) {
    if (node instanceof Element) {
      if (node.name === 'script') {
        return <React.Fragment />;
      }
      if (node.name === 'section') {
        const children = domToReact(node.children as DOMNode[], parserOption);
        return (
          <motion.section
            {...node.attribs}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {children}
          </motion.section>
        );
      }
    }
  },
};

export default function PukuPageRenderer({ html, slug }: PukuPageRendererProps) {
  const containerRef = useRef<HTMLElement>(null);
  const reactContent = parse(html, parserOption);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const cards = el.querySelectorAll('.bento-card, .grid > div, article');
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0.8, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [html]);

  return (
    <PageInteractions slug={slug}>
      <main
        ref={containerRef}
        id="main-content"
        className={`captured-page route-${slug.split('/')[0]} font-body bg-dt-bg text-dt-text min-h-screen`}
      >
        {reactContent}
      </main>
    </PageInteractions>
  );
}
