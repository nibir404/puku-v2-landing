'use client';
import React from 'react';
import parse, { Element, DOMNode, domToReact, HTMLReactParserOptions } from 'html-react-parser';
import PageInteractions from './PageInteractions';

interface PukuPageRendererProps {
  html: string;
  slug: string;
}

const parserOption: HTMLReactParserOptions = {
  replace(node) {
    // Transform inline style strings to React-compatible style objects if needed
    if (node instanceof Element) {
      if (node.name === 'script') {
        return <React.Fragment />;
      }
    }
  },
};

export default function PukuPageRenderer({ html, slug }: PukuPageRendererProps) {
  const reactContent = parse(html, parserOption);

  return (
    <PageInteractions slug={slug}>
      <main id="main-content" className={`captured-page route-${slug.split('/')[0]} font-body bg-dt-bg text-dt-text min-h-screen`}>
        {reactContent}
      </main>
    </PageInteractions>
  );
}
