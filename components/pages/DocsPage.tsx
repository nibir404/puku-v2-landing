'use client';
import React from 'react';
import PageInteractions from '../PageInteractions';
import FadeIn from '../animations/FadeIn';
import TextReveal from '../animations/TextReveal';
import InteractiveCard from '../animations/InteractiveCard';

export default function DocsPage() {
  return (
    <PageInteractions slug="docs">
      <div id="docs" className="dt-page bg-dt-bg text-dt-text font-body w-full flex flex-col gap-12 md:gap-16 lg:gap-20">
        {/* Hero Section */}
        <section className="w-full max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 xl:px-15 flex flex-col gap-8 pt-6 md:pt-10">
          <FadeIn direction="up" distance={20} duration={0.6}>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 shrink-0 bg-dt-primary rounded-full animate-pulse"></span>
                <span className="text-[12px] tracking-[0.03em] uppercase font-mono leading-[1.25] text-dt-primary">PUKU Documentation</span>
              </div>
              <h1 className="font-normal text-[40px] leading-[1.05] tracking-[-0.03em] md:text-[52px] lg:text-[64px] lg:leading-[1.0] font-heading text-dt-text">
                <TextReveal text="PUKU Documentation" />
              </h1>
              <p className="text-[16px] md:text-[18px] leading-[1.4] font-heading text-dt-text-secondary max-w-[720px]">
                Everything you need to build, run, configure, and scale autonomous AI software engineering workflows with PUKU across Cloud, Desktop, and CLI.
              </p>
            </div>
          </FadeIn>

          {/* Quick Navigation Pills */}
          <FadeIn direction="up" delay={0.2} distance={15}>
            <div className="flex flex-wrap gap-2 pt-2 border-b border-dt-divider pb-6">
              <a href="#getting-started" className="px-3 py-1.5 rounded bg-dt-tint text-dt-text text-[13px] font-mono hover:bg-dt-primary/10 hover:text-dt-primary border border-dt-divider transition-all">Quickstart</a>
              <a href="#puku-cloud" className="px-3 py-1.5 rounded bg-dt-tint text-dt-text text-[13px] font-mono hover:bg-dt-primary/10 hover:text-dt-primary border border-dt-divider transition-all">PUKU Cloud</a>
              <a href="#puku-desktop" className="px-3 py-1.5 rounded bg-dt-tint text-dt-text text-[13px] font-mono hover:bg-dt-primary/10 hover:text-dt-primary border border-dt-divider transition-all">PUKU Desktop</a>
              <a href="#puku-cli" className="px-3 py-1.5 rounded bg-dt-tint text-dt-text text-[13px] font-mono hover:bg-dt-primary/10 hover:text-dt-primary border border-dt-divider transition-all">PUKU CLI</a>
              <a href="#skills-and-rules" className="px-3 py-1.5 rounded bg-dt-tint text-dt-text text-[13px] font-mono hover:bg-dt-primary/10 hover:text-dt-primary border border-dt-divider transition-all">Skills & Rules</a>
              <a href="#mcp-and-plugins" className="px-3 py-1.5 rounded bg-dt-tint text-dt-text text-[13px] font-mono hover:bg-dt-primary/10 hover:text-dt-primary border border-dt-divider transition-all">MCP & Plugins</a>
              <a href="#security-and-enterprise" className="px-3 py-1.5 rounded bg-dt-tint text-dt-text text-[13px] font-mono hover:bg-dt-primary/10 hover:text-dt-primary border border-dt-divider transition-all">Security & Enterprise</a>
              <a href="#cli-reference" className="px-3 py-1.5 rounded bg-dt-tint text-dt-text text-[13px] font-mono hover:bg-dt-primary/10 hover:text-dt-primary border border-dt-divider transition-all">CLI Reference</a>
            </div>
          </FadeIn>
        </section>

        {/* Main Content & Sidebar Layout */}
        <section className="w-full max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 xl:px-15 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-3 flex flex-col gap-6 lg:sticky lg:top-[100px] self-start bg-dt-tint p-5 rounded border border-dt-divider">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.05em] text-dt-text-muted">Documentation Index</span>
                <nav className="flex flex-col gap-1 text-[14px]">
                  <a href="#getting-started" className="py-1.5 px-2 rounded text-dt-text hover:bg-black/10 hover:text-dt-primary font-heading transition-colors">1. Getting Started</a>
                  <a href="#puku-cloud" className="py-1.5 px-2 rounded text-dt-text-secondary hover:bg-black/10 hover:text-dt-text font-heading transition-colors">2. PUKU Cloud</a>
                  <a href="#puku-desktop" className="py-1.5 px-2 rounded text-dt-text-secondary hover:bg-black/10 hover:text-dt-text font-heading transition-colors">3. PUKU Desktop</a>
                  <a href="#puku-cli" className="py-1.5 px-2 rounded text-dt-text-secondary hover:bg-black/10 hover:text-dt-text font-heading transition-colors">4. PUKU CLI</a>
                  <a href="#skills-and-rules" className="py-1.5 px-2 rounded text-dt-text-secondary hover:bg-black/10 hover:text-dt-text font-heading transition-colors">5. Skills & Rules</a>
                  <a href="#mcp-and-plugins" className="py-1.5 px-2 rounded text-dt-text-secondary hover:bg-black/10 hover:text-dt-text font-heading transition-colors">6. MCP & Plugins</a>
                  <a href="#security-and-enterprise" className="py-1.5 px-2 rounded text-dt-text-secondary hover:bg-black/10 hover:text-dt-text font-heading transition-colors">7. Security & Governance</a>
                  <a href="#cli-reference" className="py-1.5 px-2 rounded text-dt-text-secondary hover:bg-black/10 hover:text-dt-text font-heading transition-colors">8. CLI Reference</a>
                </nav>
              </div>

              <div className="border-t border-dt-divider pt-4 flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.05em] text-dt-text-muted">Need Assistance?</span>
                <a href="/community" className="text-[13px] text-dt-primary hover:underline">Join PUKU Community →</a>
                <a href="/university" className="text-[13px] text-dt-primary hover:underline">PUKU University Courses →</a>
                <a href="/demo" className="text-[13px] text-dt-primary hover:underline">Contact Sales →</a>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-9 flex flex-col gap-12">
              {/* 1. Getting Started */}
              <section id="getting-started" className="flex flex-col gap-6 rounded bg-dt-tint p-6 lg:p-8 border border-dt-divider scroll-mt-28">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[12px] uppercase text-dt-primary">01 / Overview</span>
                </div>
                <h2 className="font-normal text-[28px] md:text-[36px] leading-[1.1] font-heading text-dt-text">
                  Getting Started with PUKU
                </h2>
                <p className="text-[15px] leading-[1.6] text-dt-text-secondary">
                  PUKU is an autonomous AI software engineer designed to handle complex engineering tasks—from bug fixes and refactoring to greenfield feature generation, test suite maintenance, and PR reviews.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
                  <div className="flex flex-col gap-2 p-4 rounded bg-dt-bg border border-dt-divider">
                    <h3 className="font-heading text-[16px] text-dt-text font-normal">PUKU Cloud</h3>
                    <p className="text-[13px] text-dt-text-secondary leading-[1.4]">Hand off asynchronous tasks to dedicated cloud runtimes. PUKU indexes repos with DeepWiki and opens PRs automatically.</p>
                    <a href="/cloud" className="text-[12px] font-mono text-dt-primary hover:underline mt-auto">Explore Cloud →</a>
                  </div>
                  <div className="flex flex-col gap-2 p-4 rounded bg-dt-bg border border-dt-divider">
                    <h3 className="font-heading text-[16px] text-dt-text font-normal">PUKU Desktop</h3>
                    <p className="text-[13px] text-dt-text-secondary leading-[1.4]">Native workstation app for macOS, Windows, and Linux with local file watching and interactive visual diff review.</p>
                    <a href="/desktop" className="text-[12px] font-mono text-dt-primary hover:underline mt-auto">Explore Desktop →</a>
                  </div>
                  <div className="flex flex-col gap-2 p-4 rounded bg-dt-bg border border-dt-divider">
                    <h3 className="font-heading text-[16px] text-dt-text font-normal">PUKU CLI</h3>
                    <p className="text-[13px] text-dt-text-secondary leading-[1.4]">Rust-powered terminal engineer. Fast local execution with multi-model Fusion pairing and terminal commands.</p>
                    <a href="/cli" className="text-[12px] font-mono text-dt-primary hover:underline mt-auto">Explore CLI →</a>
                  </div>
                </div>

                <h3 className="font-heading text-[20px] text-dt-text pt-2">Quickstart in 3 Steps</h3>
                <div className="flex flex-col gap-4 font-mono text-[13px]">
                  <div className="flex flex-col gap-2 p-4 rounded bg-[#101010] text-[#e7e7e7] border border-white/10">
                    <span className="text-dt-text-muted"># 1. Install PUKU CLI globally</span>
                    <code>curl -fsSL https://puku.ai/install.sh | sh</code>
                  </div>
                  <div className="flex flex-col gap-2 p-4 rounded bg-[#101010] text-[#e7e7e7] border border-white/10">
                    <span className="text-dt-text-muted"># 2. Authenticate your account</span>
                    <code>puku auth login</code>
                  </div>
                  <div className="flex flex-col gap-2 p-4 rounded bg-[#101010] text-[#e7e7e7] border border-white/10">
                    <span className="text-dt-text-muted"># 3. Launch PUKU in any repository</span>
                    <code>cd ~/projects/acme-web && puku</code>
                  </div>
                </div>
              </section>

              {/* 2. PUKU Cloud */}
              <section id="puku-cloud" className="flex flex-col gap-6 rounded bg-dt-tint p-6 lg:p-8 border border-dt-divider scroll-mt-28">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[12px] uppercase text-dt-primary">02 / Platform</span>
                </div>
                <h2 className="font-normal text-[28px] md:text-[36px] leading-[1.1] font-heading text-dt-text">
                  PUKU Cloud & Asynchronous Sessions
                </h2>
                <p className="text-[15px] leading-[1.6] text-dt-text-secondary">
                  PUKU Cloud provisions isolated cloud virtual machines to work on tasks asynchronously. You can assign a task, close your laptop, and return to verified code changes submitted via Pull Request.
                </p>

                <div className="flex flex-col gap-4">
                  <h3 className="font-heading text-[18px] text-dt-text">Key Cloud Workflows</h3>
                  <ul className="flex flex-col gap-3 text-[14px] text-dt-text-secondary list-disc pl-5">
                    <li><strong className="text-dt-text">DeepWiki Indexing:</strong> Automatically parses ASTs, repository relationships, and documentation for accurate multi-repo context awareness.</li>
                    <li><strong className="text-dt-text">Playbooks & Knowledge:</strong> Save reusable instructions and architectural constraints (`PLAYBOOK.md`) so PUKU adheres to team standards.</li>
                    <li><strong className="text-dt-text">Agent Compute Units (ACU):</strong> Flexible credit allocation to scale session concurrency across parallel development tracks.</li>
                  </ul>
                </div>
              </section>

              {/* 3. PUKU Desktop */}
              <section id="puku-desktop" className="flex flex-col gap-6 rounded bg-dt-tint p-6 lg:p-8 border border-dt-divider scroll-mt-28">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[12px] uppercase text-dt-primary">03 / Client</span>
                </div>
                <h2 className="font-normal text-[28px] md:text-[36px] leading-[1.1] font-heading text-dt-text">
                  PUKU Desktop Environment
                </h2>
                <p className="text-[15px] leading-[1.6] text-dt-text-secondary">
                  PUKU Desktop provides a rich GUI application with real-time workspace synchronization, step-by-step diff inspections, local server execution monitoring, and browser integration.
                </p>

                <div className="p-4 rounded bg-dt-bg border border-dt-divider text-[14px] text-dt-text-secondary flex flex-col gap-2">
                  <span className="font-heading text-dt-text font-normal">Supported Operating Systems</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 font-mono text-[12px]">
                    <div className="p-2 rounded bg-dt-tint border border-dt-divider text-center">macOS (Apple Silicon & Intel)</div>
                    <div className="p-2 rounded bg-dt-tint border border-dt-divider text-center">Windows 11 (x64 & ARM64)</div>
                    <div className="p-2 rounded bg-dt-tint border border-dt-divider text-center">Linux (AppImage & deb)</div>
                  </div>
                </div>
              </section>

              {/* 4. PUKU CLI */}
              <section id="puku-cli" className="flex flex-col gap-6 rounded bg-dt-tint p-6 lg:p-8 border border-dt-divider scroll-mt-28">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[12px] uppercase text-dt-primary">04 / Terminal</span>
                </div>
                <h2 className="font-normal text-[28px] md:text-[36px] leading-[1.1] font-heading text-dt-text">
                  PUKU CLI & Multi-Model Fusion
                </h2>
                <p className="text-[15px] leading-[1.6] text-dt-text-secondary">
                  Built in Rust, PUKU CLI operates directly in your shell. It supports Model Switching with <code className="font-mono text-dt-primary">/model</code>, pairing high-reasoning frontier models with high-speed sidekick models (Fusion mode) to achieve 36% lower cost per run.
                </p>

                <div className="flex flex-col gap-3 font-mono text-[12px]">
                  <div className="flex justify-between items-center p-3 rounded bg-dt-bg border border-dt-divider">
                    <span className="text-dt-text"><code>/model</code></span>
                    <span className="text-dt-text-secondary">Switch between Claude Fable 5.1, Astra 6, SWE-2, Gemini, and Fusion mode</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded bg-dt-bg border border-dt-divider">
                    <span className="text-dt-text"><code>/handoff</code></span>
                    <span className="text-dt-text-secondary">Seamlessly upload terminal session state to PUKU Cloud</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded bg-dt-bg border border-dt-divider">
                    <span className="text-dt-text"><code>/loop</code></span>
                    <span className="text-dt-text-secondary">Run iterative implement-and-verify loops until test suite passes</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded bg-dt-bg border border-dt-divider">
                    <span className="text-dt-text"><code>/btw</code></span>
                    <span className="text-dt-text-secondary">Ask side questions without interrupting active execution context</span>
                  </div>
                </div>
              </section>

              {/* 5. Skills & Rules */}
              <section id="skills-and-rules" className="flex flex-col gap-6 rounded bg-dt-tint p-6 lg:p-8 border border-dt-divider scroll-mt-28">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[12px] uppercase text-dt-primary">05 / Extensibility</span>
                </div>
                <h2 className="font-normal text-[28px] md:text-[36px] leading-[1.1] font-heading text-dt-text">
                  Skills & Rules (`AGENTS.md`)
                </h2>
                <p className="text-[15px] leading-[1.6] text-dt-text-secondary">
                  Configure PUKU's agent behavior using markdown directives placed in your project root or <code className="font-mono text-dt-primary">.agents/</code> directory. PUKU automatically detects and loads guidelines during task initialization.
                </p>

                <div className="p-4 rounded bg-[#101010] text-[#e7e7e7] font-mono text-[12px] border border-white/10 flex flex-col gap-2">
                  <span className="text-dt-text-muted"># Example .agents/rules/code-style.md</span>
                  <pre className="text-[#5ec4ff] overflow-x-auto"><code># TypeScript Guidelines
- Always use strict type checking.
- Prefer functional components with explicit interface props.
- Run `npm test` after modifying any business logic file.</code></pre>
                </div>
              </section>

              {/* 6. MCP & Plugins */}
              <section id="mcp-and-plugins" className="flex flex-col gap-6 rounded bg-dt-tint p-6 lg:p-8 border border-dt-divider scroll-mt-28">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[12px] uppercase text-dt-primary">06 / Protocols</span>
                </div>
                <h2 className="font-normal text-[28px] md:text-[36px] leading-[1.1] font-heading text-dt-text">
                  Model Context Protocol (MCP) & Plugins
                </h2>
                <p className="text-[15px] leading-[1.6] text-dt-text-secondary">
                  Connect PUKU to external databases, APIs, and custom toolsets through Model Context Protocol (MCP) servers and plugins.
                </p>

                <div className="p-4 rounded bg-dt-bg border border-dt-divider text-[13px] font-mono text-dt-text-secondary">
                  <p className="text-dt-text font-heading text-[15px] mb-2 font-normal">Plugin Configuration (`puku.plugins.json`)</p>
                  <code>{`{ "plugins": ["github", "sentry", "linear", "postgres-mcp"] }`}</code>
                </div>
              </section>

              {/* 7. Security & Enterprise */}
              <section id="security-and-enterprise" className="flex flex-col gap-6 rounded bg-dt-tint p-6 lg:p-8 border border-dt-divider scroll-mt-28">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[12px] uppercase text-dt-primary">07 / Governance</span>
                </div>
                <h2 className="font-normal text-[28px] md:text-[36px] leading-[1.1] font-heading text-dt-text">
                  Security & Enterprise Compliance
                </h2>
                <p className="text-[15px] leading-[1.6] text-dt-text-secondary">
                  PUKU Enterprise is built with security first. Your code is never used to train foundational AI models, and all cloud sandbox execution takes place inside isolated single-tenant compute containers.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13px]">
                  <div className="p-4 rounded bg-dt-bg border border-dt-divider flex flex-col gap-1">
                    <strong className="text-dt-text font-heading font-normal">SOC 2 Type II Compliant</strong>
                    <span className="text-dt-text-secondary">Independently audited security controls and infrastructure policies.</span>
                  </div>
                  <div className="p-4 rounded bg-dt-bg border border-dt-divider flex flex-col gap-1">
                    <strong className="text-dt-text font-heading font-normal">VPC & On-Prem Runtimes</strong>
                    <span className="text-dt-text-secondary">Deploy PUKU runners inside AWS, GCP, Azure, or air-gapped VPCs.</span>
                  </div>
                </div>
              </section>

              {/* 8. CLI Reference */}
              <section id="cli-reference" className="flex flex-col gap-6 rounded bg-dt-tint p-6 lg:p-8 border border-dt-divider scroll-mt-28">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[12px] uppercase text-dt-primary">08 / Reference</span>
                </div>
                <h2 className="font-normal text-[28px] md:text-[36px] leading-[1.1] font-heading text-dt-text">
                  CLI Commands & Configuration Reference
                </h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-mono text-[13px] border-collapse">
                    <thead>
                      <tr className="border-b border-dt-divider text-dt-text-muted">
                        <th className="py-2.5 px-3">Command</th>
                        <th className="py-2.5 px-3">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-dt-divider text-dt-text-secondary">
                      <tr>
                        <td className="py-2.5 px-3 text-dt-primary"><code>puku</code></td>
                        <td className="py-2.5 px-3">Start interactive PUKU agent session in current directory</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 text-dt-primary"><code>puku auth login</code></td>
                        <td className="py-2.5 px-3">Authenticate CLI with your PUKU account</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 text-dt-primary"><code>puku run &quot;&lt;task&gt;&quot;</code></td>
                        <td className="py-2.5 px-3">Execute a single non-interactive task from shell</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 text-dt-primary"><code>puku mcp add &lt;name&gt;</code></td>
                        <td className="py-2.5 px-3">Register a Model Context Protocol server</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 text-dt-primary"><code>puku config list</code></td>
                        <td className="py-2.5 px-3">Display active environment and model preferences</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

            </main>
          </div>
        </section>
      </div>
    </PageInteractions>
  );
}


