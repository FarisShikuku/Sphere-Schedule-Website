'use client';

interface CTASectionProps {
  onGetStarted: () => void;
  onSignIn: () => void;
}

export function CTASection({ onGetStarted, onSignIn }: CTASectionProps) {
  return (
    <section
      id="pricing"
      style={{ padding: '100px max(40px, 4vw)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
    >
      <div
        style={{
          background: 'linear-gradient(135deg, var(--color-sphere-600) 0%, #7C3AED 40%, #A855F7 70%, var(--color-accent) 100%)',
          borderRadius: 32,
          padding: 'clamp(48px, 6vw, 80px) clamp(28px, 5vw, 60px)',
          position: 'relative',
          overflow: 'hidden',
          maxWidth: 900,
          margin: '0 auto',
          boxShadow: '0 8px 40px rgba(124,108,248,0.35)',
        }}
      >
        {/* Orbs */}
        <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', top: -100, right: -80, filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,107,138,0.15)', bottom: -60, left: '10%', filter: 'blur(30px)' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2
            style={{
              fontFamily: 'var(--font-outfit)',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 900,
              color: 'white',
              letterSpacing: '-1.5px',
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Start organizing<br />your world today
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.78)', marginBottom: 36 }}>
            Free forever for individuals. No credit card required.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={onGetStarted}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '18px 44px', borderRadius: 60, fontSize: 17,
                fontWeight: 700, cursor: 'pointer', border: 'none',
                background: 'white', color: 'var(--color-sphere-600)',
                transition: 'all 0.25s',
                fontFamily: 'var(--font-dm)',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 28px rgba(0,0,0,0.2)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = ''; (e.currentTarget as HTMLButtonElement).style.boxShadow = ''; }}
            >
              <i className="fas fa-rocket" /> Start for Free
            </button>
            <button
              onClick={onSignIn}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '16px 36px', borderRadius: 60, fontSize: 16,
                fontWeight: 600, cursor: 'pointer',
                background: 'transparent', color: 'white',
                border: '2px solid rgba(255,255,255,0.4)',
                transition: 'all 0.25s',
                fontFamily: 'var(--font-dm)',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.1)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
            >
              Sign in to your account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}