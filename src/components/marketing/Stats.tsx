'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { end: 50000, label: 'Active Teams', format: (v: number) => Math.floor(v / 1000) + 'K+' },
  { end: 2000000, label: 'Tasks Managed', format: (v: number) => (v / 1000000).toFixed(1) + 'M+' },
  { end: 98, label: 'Satisfaction Rate', format: (v: number) => Math.floor(v) + '%' },
  { end: 4.9, label: 'Average Rating', format: (v: number) => v.toFixed(1) + '★' },
];

export function Stats() {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          stats.forEach((stat, i) => {
            const duration = 2000;
            const steps = 60;
            const increment = stat.end / steps;
            let current = 0;
            let step = 0;
            const timer = setInterval(() => {
              step++;
              current = Math.min(increment * step, stat.end);
              setCounters(prev => { const n = [...prev]; n[i] = current; return n; });
              if (step >= steps) clearInterval(timer);
            }, duration / steps);
          });
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  return (
    <div
      ref={ref}
      style={{
        background: 'var(--card)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '60px max(40px, 4vw)',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div
          className="stats-resp-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}
        >
          {stats.map((stat, i) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'var(--font-outfit)',
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  fontWeight: 900,
                  letterSpacing: '-2px',
                  lineHeight: 1,
                  background: 'linear-gradient(135deg, var(--color-sphere), #A855F7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: 8,
                }}
              >
                {stat.format(counters[i])}
              </div>
              <div style={{ fontSize: 14, color: 'var(--text-2)', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 700px) {
          .stats-resp-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}