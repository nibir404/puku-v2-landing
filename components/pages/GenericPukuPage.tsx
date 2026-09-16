'use client';

import React from 'react';
import Link from 'next/link';

interface GenericPukuPageProps {
  slug: string;
  title: string;
}

export default function GenericPukuPage({ slug, title }: GenericPukuPageProps) {
  const cleanTitle = title.replace(/\s*\|\s*PUKU.*/i, '').trim();
  const parts = slug.split('/');
  const category = parts.length > 1 ? parts[0].toUpperCase() : 'PUKU PLATFORM';

  const getPageDetails = (slugStr: string) => {
    switch (slugStr) {
      case 'why-puku':
        return {
          subtitle: 'The Next-Generation Autonomous AI Software Engineer',
          description: 'Puku reimagines software engineering with persistent project memory, deep semantic understanding, multi-agent workflows, and native tool orchestration.',
          features: [
            { icon: '⚡', title: '10x Engineering Velocity', desc: 'Autonomous task execution from issue discovery to verified pull request.' },
            { icon: '🧠', title: 'Persistent Project Memory', desc: 'Remembers architectural decisions, codebase history, and team conventions across sessions.' },
            { icon: '🔒', title: 'Enterprise Security', desc: 'SOC2 Type II compliant, zero data retention for private code, sandbox isolation.' },
            { icon: '🔌', title: 'Native MCP Support', desc: 'Connects directly to your tools, databases, Cloud services, and internal APIs.' }
          ]
        };
      case 'how-it-works':
        return {
          subtitle: 'From High-Level Prompt to Production-Ready Code',
          description: 'Discover how Puku analyzes requirements, searches multi-repo codebases, executes tests, and opens clean PRs with full automated validation.',
          features: [
            { icon: '🔍', title: '1. Semantic Context Indexing', desc: 'Puku parses your entire AST and git history to comprehend relationships.' },
            { icon: '🧩', title: '2. Multi-Agent Planning', desc: 'Decomposes complex feature requests into discrete execution steps.' },
            { icon: '💻', title: '3. Isolated Execution', desc: 'Runs in secure, ephemeral sandboxes with full terminal and browser control.' },
            { icon: '✅', title: '4. Automated Verification', desc: 'Builds, runs tests, fixes errors recursively, and submits formatted PRs.' }
          ]
        };
      default:
        return {
          subtitle: `Overview and System Architecture for ${cleanTitle}`,
          description: `Explore Puku's capabilities, architecture, and integration possibilities for ${cleanTitle}. Built on Devin's high-performance autonomous AI foundation.`,
          features: [
            { icon: '⚡', title: 'High Performance & Velocity', desc: 'Accelerates development workflows with autonomous AI assistance.' },
            { icon: '🧠', title: 'Deep Context Comprehension', desc: 'Understands code structure, dependencies, and business logic seamlessly.' },
            { icon: '🔒', title: 'Enterprise Security', desc: 'Built-in privacy controls, encryption, and strict sandbox boundaries.' },
            { icon: '🔌', title: 'Full Ecosystem Integration', desc: 'Connects effortlessly with git providers, IDEs, and developer tooling.' }
          ]
        };
    }
  };

  const details = getPageDetails(slug);

  return (
    <div className="w-full flex flex-col gap-12 md:gap-16 py-12 px-6 max-w-6xl mx-auto">
      {/* Hero Header */}
      <section className="text-center pt-8 pb-4">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[rgb(var(--tint-primary))] border border-[rgb(var(--divider-color))] text-legacy-black font-mono text-xs uppercase tracking-wider mb-6">
          {category}
        </span>
        <h1 className="font-heading text-4xl md:text-6xl font-medium tracking-tight text-legacy-black mb-6">
          {cleanTitle}
        </h1>
        <p className="font-heading text-xl md:text-2xl text-legacy-black/80 max-w-3xl mx-auto mb-4 font-normal">
          {details.subtitle}
        </p>
        <p className="text-base md:text-lg text-legacy-black/60 max-w-2xl mx-auto mb-8 leading-relaxed">
          {details.description}
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/demo"
            className="header-button solid"
          >
            Request Demo
          </Link>
          <Link
            href="/docs"
            className="header-button outline"
          >
            Explore Documentation
          </Link>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-8">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-medium text-legacy-black mb-2">
            System Architecture & Key Capabilities
          </h2>
          <p className="text-legacy-black/60 max-w-xl mx-auto">
            Built for enterprise-grade autonomous software development workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.features.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[rgb(var(--tint-primary))] border border-[rgb(var(--divider-color))] hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-4">{feat.icon}</div>
              <h3 className="font-heading text-lg font-medium text-legacy-black mb-2">{feat.title}</h3>
              <p className="text-sm text-legacy-black/70 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Action Banner */}
      <section className="py-8">
        <div className="p-8 md:p-12 rounded-2xl bg-[rgb(var(--tint-primary))] border border-[rgb(var(--divider-color))] text-center">
          <h2 className="font-heading text-3xl font-medium text-legacy-black mb-3">
            Get Started with PUKU
          </h2>
          <p className="text-legacy-black/70 max-w-xl mx-auto mb-6">
            Multiply engineering leverage with Devin-powered autonomous software agents.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/signup"
              className="header-button solid"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
