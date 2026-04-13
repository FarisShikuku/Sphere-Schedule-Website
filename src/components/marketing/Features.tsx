'use client';

import { FEATURES } from '@/lib/constants/features';

const colorMap: Record<string, { iconBg: string; iconColor: string; hoverGrad: string }> = {
  sphere: {
    iconBg: 'rgba(124,108,248,0.12)',
    iconColor: 'var(--color-sphere)',
    hoverGrad: 'radial-gradient(ellipse 80% 80% at 0% 0%, rgba(124,108,248,0.08) 0%, transparent 60%)',
  },
  green: {
    iconBg: 'rgba(45,212,160,0.12)',
    iconColor: 'var(--color-green)',
    hoverGrad: 'radial-gradient(ellipse 80% 80% at 0% 0%, rgba(45,212,160,0.08) 0%, transparent 60%)',
  },
  accent: {
    iconBg: 'rgba(255,107,138,0.12)',
    iconColor: 'var(--color-accent)',
    hoverGrad: 'radial-gradient(ellipse 80% 80% at 0% 0%, rgba(255,107,138,0.08) 0%, transparent 60%)',
  },
  yellow: {
    iconBg: 'rgba(255,209,102,0.12)',
    iconColor: 'var(--color-yellow)',
    hoverGrad: 'radial-gradient(ellipse 80% 80% at 0% 0%, rgba(255,209,102,0.08) 0%, transparent 60%)',
  },
  cyan: {
    iconBg: 'rgba(34,211,238,0.12)',
    iconColor: 'var(--color-cyan)',
    hoverGrad: 'radial-gradient(ellipse 80% 80% at 0% 0%, rgba(34,211,238,0.08) 0%, transparent 60%)',
  },
  pink: {
    iconBg: 'rgba(244,114,182,0.12)',
    iconColor: 'var(--color-pink)',
    hoverGrad: 'radial-gradient(ellipse 80% 80% at 0% 0%, rgba(244,114,182,0.08) 0%, transparent 60%)',
  },
};

export function Features() {
  return (
    <section id="features" style={{ padding: '100px max(40px, 4vw)' }}>
      {/* Header */}
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(124,108,248,0.1)',
            border: '1px solid rgba(124,108,248,0.25)',
            padding: '6px 14px', borderRadius: 50,
            fontSize: 12.5, fontWeight: 700,
            color: 'var(--color-sphere)',
            letterSpacing: '0.5px', textTransform: 'uppercase',
            marginBottom: 20,
          }}
        >
          <i className="fas fa-cube" style={{ fontSize: 11 }} /> Features
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: 'clamp(30px, 4vw, 52px)',
            fontWeight: 800,
            color: 'var(--text)',
            letterSpacing: '-1.5px',
            lineHeight: 1.1,
            marginBottom: 18,
          }}
        >
          Everything your team needs
        </h2>
        <p
          style={{
            fontSize: 17, color: 'var(--text-2)',
            lineHeight: 1.6, maxWidth: 560,
            margin: '0 auto 60px',
          }}
        >
          One intelligent workspace that brings your entire schedule together — built for both individuals and growing teams.
        </p>
      </div>

      {/* Grid */}
      <div
        className="features-resp-grid"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
      >
        {FEATURES.map(feature => {
          const c = colorMap[feature.color] ?? colorMap.sphere;
          return (
            <div
              key={feature.id}
              style={{
                background: 'var(--card)',
                border: '1.5px solid var(--border)',
                borderRadius: 20,
                padding: 32,
                transition: 'all 0.3s',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(-6px)';
                el.style.boxShadow = 'var(--shadow-lg)';
                el.style.borderColor = 'var(--border-2)';
                (el.querySelector('.feat-overlay') as HTMLElement).style.opacity = '1';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.transform = '';
                el.style.boxShadow = '';
                el.style.borderColor = 'var(--border)';
                (el.querySelector('.feat-overlay') as HTMLElement).style.opacity = '0';
              }}
            >
              {/* Hover gradient */}
              <div
                className="feat-overlay"
                style={{
                  position: 'absolute', inset: 0, opacity: 0,
                  transition: 'opacity 0.3s',
                  borderRadius: 20,
                  background: c.hoverGrad,
                  pointerEvents: 'none',
                }}
              />
              {/* Icon */}
              <div
                style={{
                  width: 52, height: 52, borderRadius: 16,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22, marginBottom: 20,
                  position: 'relative', zIndex: 1,
                  background: c.iconBg,
                }}
              >
                <i className={`fas fa-${feature.icon}`} style={{ color: c.iconColor }} />
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-outfit)',
                  fontSize: 18, fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: 10,
                  position: 'relative', zIndex: 1,
                }}
              >
                {feature.title}
              </h3>
              <p style={{ fontSize: 14.5, color: 'var(--text-2)', lineHeight: 1.6, position: 'relative', zIndex: 1 }}>
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 1200px) { .features-resp-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 700px)  { .features-resp-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}