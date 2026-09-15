'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const groups: Record<string, { title?: string; links: [string, string][] }[]> = {
  Product: [
    {
      title: 'Platform',
      links: [
        ['PUKU Cloud', '/cloud'],
        ['PUKU Desktop', '/desktop'],
        ['PUKU CLI', '/cli'],
      ],
    },
    {
      title: 'Features',
      links: [
        ['PUKU Review', '/review'],
        ['PUKU Windows VM', '/windows'],
      ],
    },
  ],
  Solutions: [
    {
      links: [
        ['Government', '/government'],
        ['Partners', '/solutions/partners'],
        ['AI Productivity Guarantee', '/guarantee'],
        ['Security', '/security'],
      ],
    },
  ],
  Resources: [
    {
      links: [
        ['Docs', '/docs'],
        ['Community', '/community'],
        ['PUKU University', '/university'],
        ['Blog', '/blog'],
        ['Careers', '/careers'],
      ],
    },
  ],
};

const href = (url: string) => url;

export default function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    function outside(e: PointerEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(null);
    }
    function key(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(null);
        setMobile(false);
      }
    }
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', key);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('keydown', key);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : '';
    const surfaces = document.querySelectorAll<HTMLElement>('main,footer');
    surfaces.forEach((el) => {
      el.inert = mobile;
    });
    return () => {
      document.body.style.overflow = '';
      surfaces.forEach((el) => {
        el.inert = false;
      });
    };
  }, [mobile]);

  useEffect(() => {
    const headerEl = ref.current;
    if (!headerEl) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -20',
        onUpdate: (self) => {
          setScrolled(self.scroll() > 20);
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const navigation = () =>
    ['Product', 'Solutions', 'Customers', 'Resources', 'Pricing'].map((name) =>
      groups[name] ? (
        <div className="nav-group relative" key={name}>
          <button
            className={'nav-trigger ' + (open === name ? 'active' : '')}
            aria-expanded={open === name}
            aria-controls={'menu-' + name}
            onClick={() => setOpen(open === name ? null : name)}
          >
            {name}
            <ChevronDown
              size={14}
              strokeWidth={1.8}
              className={`transition-transform duration-200 ${open === name ? 'rotate-180' : ''}`}
            />
          </button>
          <AnimatePresence>
            {open === name && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                id={'menu-' + name}
                className={'nav-dropdown ' + (name === 'Product' ? 'product-dropdown' : '')}
              >
                {groups[name].map((group, i) => (
                  <div className="menu-column" key={i}>
                    {group.title && <span className="menu-label">{group.title}</span>}
                    {group.links.map(([label, url]) => (
                      <a href={href(url)} key={label}>
                        {label}
                      </a>
                    ))}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <a className="nav-link" key={name} href={href('/' + name.toLowerCase())}>
          {name}
        </a>
      )
    );

  const actions = () => (
    <>
      <a className="demo-link" href="/demo">
        Get a Demo
      </a>
      <a className="header-button outline" href="/download">
        Download
      </a>
      <a className="header-button solid" href="/login">
        Log in
      </a>
    </>
  );

  return (
    <motion.header
      className={`site-header sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-dt-bg/90 shadow-md py-3' : 'py-5'
      }`}
      ref={ref}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <a href="/" aria-label="PUKU home" className="brand-logo">
        <img src="/puku-logo.png" alt="PUKU" width="24" height="30" />
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation()}
      </nav>
      <div className="desktop-actions">{actions()}</div>
      <button
        className="mobile-toggle"
        aria-label="Toggle menu"
        aria-expanded={mobile}
        onClick={() => {
          setMobile(!mobile);
          setOpen(null);
        }}
      >
        {mobile ? <X size={23} strokeWidth={1.5} /> : <Menu size={23} strokeWidth={1.5} />}
      </button>
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="mobile-drawer overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <nav aria-label="Mobile navigation">{navigation()}</nav>
            <div className="mobile-actions">{actions()}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
