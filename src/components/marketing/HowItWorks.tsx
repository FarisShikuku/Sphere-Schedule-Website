'use client';

const steps = [
  {
    number: 1,
    title: 'Create your account',
    description: 'Sign up free with your email or Google account. Set your timezone, team size, and productivity goals.',
  },
  {
    number: 2,
    title: 'Import & connect',
    description: 'Sync with Google Calendar, Outlook, Slack, and your favorite tools — or start fresh with a clean workspace.',
  },
  {
    number: 3,
    title: 'Schedule and achieve',
    description: 'Let Sphere organize your day. Focus on what matters while your AI assistant handles the scheduling chaos.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: '0 max(40px, 4vw) 100px' }}>
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
          <i className="fas fa-map" style={{ fontSize: 11 }} /> How it works
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
          Get started in 3 steps
        </h2>
        <p style={{ fontSize: 17, color: 'var(--text-2)', lineHeight: 1.6, maxWidth: 560, margin: '0 auto 60px' }}>
          From signup to fully organized in under 5 minutes.
        </p>
      </div>

      {/* Steps */}
      <div
        className="steps-resp-grid"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, position: 'relative' }}
      >
        {/* Connecting line */}
        <div
          className="steps-connector"
          style={{
            position: 'absolute',
            top: 36,
            left: 'calc(33.333% - 20px)',
            right: 'calc(33.333% - 20px)',
            height: 1,
            background: 'linear-gradient(90deg, var(--color-sphere), #A855F7, var(--color-accent))',
            opacity: 0.3,
            pointerEvents: 'none',
          }}
        />

        {steps.map(step => (
          <div
            key={step.number}
            style={{ textAlign: 'center', padding: '0 20px', position: 'relative', zIndex: 1 }}
          >
            <div
              style={{
                width: 72, height: 72, borderRadius: 22,
                background: 'linear-gradient(135deg, var(--color-sphere), #A855F7)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 24px',
                boxShadow: '0 8px 32px rgba(124,108,248,0.35)',
                position: 'relative', zIndex: 1,
              }}
            >
              <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 26, fontWeight: 900, color: 'white' }}>
                {step.number}
              </span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-outfit)', fontSize: 18, fontWeight: 700, color: 'var(--text)', marginBottom: 12 }}>
              {step.title}
            </h3>
            <p style={{ fontSize: 14.5, color: 'var(--text-2)', lineHeight: 1.6 }}>
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 700px) {
          .steps-resp-grid { grid-template-columns: 1fr !important; }
          .steps-connector { display: none !important; }
        }
      `}</style>
    </section>
  );
}