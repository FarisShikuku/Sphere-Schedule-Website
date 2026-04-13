'use client';

import { colorVar, colorBg } from '@/lib/utils/colors';

interface StatCardProps {
  icon: string;
  value: string | number;
  label: string;
  trend?: number;
  trendDirection?: 'up' | 'down' | 'neutral';
  trendText?: string;
  color: 'sphere' | 'green' | 'accent' | 'yellow' | 'cyan' | 'pink';
}

export function StatCard({ icon, value, label, trend, trendDirection, trendText, color }: StatCardProps) {
  const trendColor =
    trendDirection === 'up'
      ? 'var(--color-green)'
      : trendDirection === 'down'
      ? 'var(--color-red)'
      : 'var(--color-yellow)';

  const trendIcon =
    trendDirection === 'up' ? 'fa-arrow-up' : trendDirection === 'down' ? 'fa-arrow-down' : 'fa-minus';

  return (
    <div
      style={{
        position: 'relative',
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        padding: 20,
        transition: 'all 0.3s',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 28px rgba(124,108,248,0.15)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = '';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '';
      }}
    >
      {/* Glow orb */}
      <div
        style={{
          position: 'absolute',
          width: 96,
          height: 96,
          borderRadius: '50%',
          top: -24,
          right: -20,
          opacity: 0.15,
          filter: 'blur(16px)',
          background: colorBg[color],
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Icon */}
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 14,
            background: colorBg[color],
          }}
        >
          <i className={`fas fa-${icon}`} style={{ color: colorVar[color], fontSize: 18 }} />
        </div>

        {/* Value */}
        <div
          style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: 30,
            fontWeight: 900,
            color: 'var(--text)',
            letterSpacing: '-1px',
            marginBottom: 4,
            lineHeight: 1,
          }}
        >
          {value}
        </div>

        {/* Label */}
        <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-2)' }}>{label}</div>

        {/* Trend */}
        {(trend !== undefined || trendText) && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8, fontSize: 12, fontWeight: 700, color: trendColor }}>
            <i className={`fas ${trendIcon}`} style={{ fontSize: 10 }} />
            <span>{trendText || `${trend}%`}</span>
          </div>
        )}
      </div>
    </div>
  );
}