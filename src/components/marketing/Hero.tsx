'use client';

interface HeroProps {
  onGetStarted: () => void;
  onSignIn: () => void;
}

const sidebarItems = [
  { icon: 'fa-home', label: 'Dashboard', active: true },
  { icon: 'fa-check-circle', label: 'Tasks' },
  { icon: 'fa-calendar', label: 'Calendar' },
  { icon: 'fa-video', label: 'Meetings' },
  { icon: 'fa-clock', label: 'Appointments' },
  { icon: 'fa-cog', label: 'Settings' },
];

const previewStats = [
  { num: '24', label: 'Tasks', color: 'var(--color-sphere)' },
  { num: '18', label: 'Done', color: 'var(--color-green)' },
  { num: '4', label: 'Meetings', color: 'var(--color-yellow)' },
  { num: '92%', label: 'Productivity', color: 'var(--color-accent)' },
];

const previewTasks = [
  { title: 'Team Standup', time: '9:00 AM · Done ✓', color: 'var(--color-green)' },
  { title: 'Client Presentation', time: '11:30 AM · Urgent', color: 'var(--color-red)' },
  { title: 'Project Review', time: '2:00 PM · Remote', color: 'var(--color-sphere)' },
  { title: 'Design Feedback', time: '4:30 PM · Studio', color: 'var(--color-yellow)' },
];

const avatars = [
  { letter: 'A', bg: 'var(--color-sphere)', color: 'white' },
  { letter: 'J', bg: 'var(--color-accent)', color: 'white' },
  { letter: 'M', bg: 'var(--color-green)', color: 'white' },
  { letter: 'R', bg: 'var(--color-yellow)', color: '#333' },
  { letter: 'K', bg: 'var(--color-cyan)', color: '#0e3344' },
];

export function Hero({ onGetStarted, onSignIn }: HeroProps) {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px max(40px, 4vw) 80px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        background: 'var(--bg)',
      }}
    >
      {/* Background gradients */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124,108,248,0.15) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 80% 60%, rgba(168,85,247,0.08) 0%, transparent 50%),
            radial-gradient(ellipse 40% 30% at 20% 80%, rgba(255,107,138,0.06) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Grid lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          opacity: 0.04,
          backgroundImage:
            'linear-gradient(var(--color-sphere) 1px, transparent 1px), linear-gradient(90deg, var(--color-sphere) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Floating orbs */}
      <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'rgba(124,108,248,0.12)', top: '10%', left: '-10%', filter: 'blur(60px)', animation: 'float 8s ease-in-out infinite', zIndex: 0, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,107,138,0.08)', top: '30%', right: '-5%', filter: 'blur(60px)', animation: 'float 8s ease-in-out 2s infinite', zIndex: 0, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', width: 250, height: 250, borderRadius: '50%', background: 'rgba(45,212,160,0.07)', bottom: '10%', left: '30%', filter: 'blur(60px)', animation: 'float 8s ease-in-out 4s infinite', zIndex: 0, pointerEvents: 'none' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 820 }}>
        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(124,108,248,0.12)',
            border: '1px solid rgba(124,108,248,0.3)',
            padding: '7px 16px',
            borderRadius: 50,
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--color-sphere)',
            marginBottom: 28,
            animation: 'fadeDown 0.7s ease both',
          }}
        >
          <i className="fas fa-sparkles" style={{ fontSize: 11 }} />
          {' '}Trusted by 50,000+ teams worldwide
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: 'clamp(40px, 6vw, 80px)',
            fontWeight: 900,
            color: 'var(--text)',
            lineHeight: 1.05,
            letterSpacing: '-2px',
            marginBottom: 24,
            animation: 'fadeUp 0.7s ease 0.1s both',
          }}
        >
          Schedule smarter.<br />
          <span style={{ background: 'linear-gradient(135deg, var(--color-sphere), #A855F7 50%, var(--color-accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Move faster.
          </span><br />
          <span style={{ background: 'linear-gradient(135deg, var(--color-green), var(--color-cyan))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Achieve more.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: 'var(--text-2)',
            lineHeight: 1.65,
            maxWidth: 600,
            margin: '0 auto 40px',
            animation: 'fadeUp 0.7s ease 0.2s both',
          }}
        >
          Sphere Schedule is the all-in-one productivity hub — seamlessly organizing your tasks, meetings, appointments, and calendar with AI-powered intelligence.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 14,
            flexWrap: 'wrap',
            marginBottom: 48,
            animation: 'fadeUp 0.7s ease 0.3s both',
          }}
        >
          <button
            onClick={onGetStarted}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '18px 44px', borderRadius: 60, fontSize: 17,
              fontWeight: 600, cursor: 'pointer', border: 'none',
              background: 'linear-gradient(135deg, var(--color-sphere), #A855F7)',
              color: 'white',
              boxShadow: '0 4px 20px rgba(124,108,248,0.35)',
              transition: 'all 0.25s',
              fontFamily: 'var(--font-dm)',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 28px rgba(124,108,248,0.45)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = ''; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(124,108,248,0.35)'; }}
          >
            <i className="fas fa-bolt" /> Start for Free
          </button>
          <button
            onClick={onSignIn}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '16px 36px', borderRadius: 60, fontSize: 16,
              fontWeight: 600, cursor: 'pointer',
              background: 'transparent',
              color: 'var(--text-2)',
              border: '1.5px solid var(--border-2)',
              transition: 'all 0.25s',
              fontFamily: 'var(--font-dm)',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-sphere)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-sphere)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-2)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-2)'; }}
          >
            <i className="fas fa-play" /> See a Demo
          </button>
        </div>

        {/* Social proof */}
        <div
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 20, flexWrap: 'wrap',
            animation: 'fadeUp 0.7s ease 0.4s both',
          }}
        >
          <div style={{ display: 'flex' }}>
            {avatars.map((av, i) => (
              <div
                key={av.letter}
                style={{
                  width: 34, height: 34, borderRadius: 10,
                  border: '2px solid var(--bg)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 700,
                  background: av.bg, color: av.color,
                  marginLeft: i === 0 ? 0 : -8,
                }}
              >
                {av.letter}
              </div>
            ))}
          </div>
          <span style={{ fontSize: 13.5, color: 'var(--text-2)' }}>
            Loved by <strong style={{ color: 'var(--text)' }}>50,000+</strong> users
          </span>
          <div style={{ width: 1, height: 24, background: 'var(--border-2)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ display: 'flex', gap: 3, color: 'var(--color-yellow)', fontSize: 13 }}>
              {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star" />)}
            </div>
            <span style={{ fontSize: 13.5, color: 'var(--text-2)' }}>
              <strong style={{ color: 'var(--text)' }}>4.9</strong>/5 rating
            </span>
          </div>
        </div>
      </div>

      {/* App Preview */}
      <div
        style={{
          position: 'relative', zIndex: 1,
          marginTop: 60, width: '100%', maxWidth: 1100,
          animation: 'fadeUp 0.9s ease 0.5s both',
        }}
      >
        <div
          style={{
            borderRadius: 24, overflow: 'hidden',
            background: 'var(--card)',
            border: '1.5px solid var(--border-2)',
            boxShadow: '0 30px 100px rgba(0,0,0,0.4), 0 0 0 1px var(--border)',
          }}
        >
          {/* Window bar */}
          <div style={{ height: 44, background: 'var(--card-2)', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', padding: '0 18px', gap: 8 }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FEBC2E' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840' }} />
          </div>

          {/* Body */}
          <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', minHeight: 380 }} className="preview-body">
            {/* Sidebar */}
            <div style={{ background: 'var(--bg-3)', borderRight: '1px solid var(--border)', padding: '18px 12px', display: 'flex', flexDirection: 'column', gap: 4 }} className="preview-sidebar">
              {sidebarItems.map(item => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '9px 12px', borderRadius: 10,
                    fontSize: 13, fontWeight: item.active ? 600 : 500,
                    color: item.active ? 'var(--color-sphere)' : 'var(--text-2)',
                    background: item.active ? 'rgba(124,108,248,0.12)' : 'transparent',
                  }}
                >
                  <i className={`fas ${item.icon}`} style={{ width: 16, textAlign: 'center', fontSize: 13 }} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Main */}
            <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
                {previewStats.map(s => (
                  <div key={s.label} style={{ background: 'var(--card-2)', border: '1px solid var(--border)', borderRadius: 12, padding: 14 }}>
                    <div style={{ fontFamily: 'var(--font-outfit)', fontSize: 22, fontWeight: 800, marginBottom: 3, color: s.color }}>{s.num}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-2)', fontWeight: 500 }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Focus banner */}
              <div style={{ borderRadius: 12, padding: 16, position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, var(--color-sphere-600), #A855F7 60%, var(--color-accent))' }}>
                <div style={{ position: 'absolute', width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', right: -20, top: -20 }} />
                <div style={{ fontFamily: 'var(--font-outfit)', fontWeight: 700, color: 'white', fontSize: 13, marginBottom: 4 }}>🎯 Focus Mode Active — Client presentation in 45 min</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>Block distractions and stay on track</div>
              </div>

              {/* Tasks */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {previewTasks.map(task => (
                  <div key={task.title} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'var(--card-2)', border: '1px solid var(--border)', borderRadius: 12, padding: 14 }}>
                    <div style={{ width: 10, height: 10, borderRadius: 3, flexShrink: 0, background: task.color }} />
                    <div>
                      <div style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--text)' }}>{task.title}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-2)', marginTop: 2 }}>{task.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .preview-body { grid-template-columns: 1fr !important; }
          .preview-sidebar { display: none !important; }
        }
      `}</style>
    </section>
  );
}