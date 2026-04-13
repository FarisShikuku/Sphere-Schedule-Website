'use client';

import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface NavbarProps {
  onGetStarted: () => void;
  onSignIn: () => void;
}

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#about', label: 'About' },
];

export function Navbar({ onGetStarted, onSignIn }: NavbarProps) {
  const { toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-[70px] backdrop-blur-2xl border-b border-border"
      style={{ background: 'var(--nav-bg)' }}
    >
      <div className="flex items-center justify-between h-full px-6 md:px-10 lg:px-16">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0 no-underline">
          <div
            className="w-10 h-10 rounded-[13px] flex items-center justify-center relative overflow-hidden shrink-0"
            style={{
              background: 'linear-gradient(135deg, var(--color-sphere) 0%, #A855F7 60%, var(--color-accent) 100%)',
              boxShadow: '0 4px 16px rgba(124,108,248,0.35)',
            }}
          >
            <div
              className="absolute w-[30px] h-[30px] border-2 border-white/30 rounded-full"
              style={{ top: 5, left: 5 }}
            />
            <div className="w-3.5 h-3.5 bg-white rounded-full relative z-10" />
          </div>
          <span className="font-outfit text-xl font-extrabold text-text">
            Sphere<span className="text-sphere">.</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-2 hover:text-text transition-colors no-underline"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={toggleTheme}
            title="Toggle theme"
            className="w-[38px] h-[38px] rounded-xl bg-card border border-border-2 flex items-center justify-center text-text-2 hover:text-sphere hover:border-sphere transition-all text-[15px]"
          >
            <i className="fas fa-circle-half-stroke" />
          </button>
          <button
            onClick={onSignIn}
            className="inline-flex items-center gap-2 px-[22px] py-[10px] rounded-full text-sm font-semibold bg-transparent text-text-2 border border-border-2 hover:border-sphere hover:text-sphere transition-all"
          >
            Sign In
          </button>
          <button
            onClick={onGetStarted}
            className="inline-flex items-center gap-2 px-[22px] py-[10px] rounded-full text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, var(--color-sphere), #A855F7)',
              boxShadow: '0 4px 20px rgba(124,108,248,0.35)',
            }}
          >
            <i className="fas fa-rocket" /> Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-[38px] h-[38px] rounded-xl bg-card border border-border-2 flex items-center justify-center text-text-2"
        >
          <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden absolute top-[70px] left-0 right-0 border-b border-border py-4 px-6 flex flex-col gap-3"
          style={{ background: 'var(--nav-bg)', backdropFilter: 'blur(24px)' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-2 hover:text-text py-2 transition-colors no-underline"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-3 border-t border-border">
            <button
              onClick={toggleTheme}
              className="flex-1 h-10 rounded-xl bg-card border border-border-2 flex items-center justify-center gap-2 text-text-2 text-sm"
            >
              <i className="fas fa-circle-half-stroke" />
              <span>Theme</span>
            </button>
            <button
              onClick={() => { onSignIn(); setMobileOpen(false); }}
              className="flex-1 h-10 rounded-full border border-border-2 text-text-2 font-semibold text-sm"
            >
              Sign In
            </button>
            <button
              onClick={() => { onGetStarted(); setMobileOpen(false); }}
              className="flex-1 h-10 rounded-full text-white font-semibold text-sm"
              style={{ background: 'linear-gradient(135deg, var(--color-sphere), #A855F7)' }}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}