'use client';

import { useState, useEffect } from 'react';

interface AuthPageProps {
  onBack: () => void;
  onLogin: (name: string) => void;
  onSignup: (name: string) => void;
}

export function AuthPage({ onBack, onLogin, onSignup }: AuthPageProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const theme = document.documentElement.getAttribute('data-theme');
    setIsDark(theme !== 'light');
    
    const observer = new MutationObserver(() => {
      const newTheme = document.documentElement.getAttribute('data-theme');
      setIsDark(newTheme !== 'light');
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      const name = email.split('@')[0];
      onLogin(name.charAt(0).toUpperCase() + name.slice(1));
    } else {
      const name = firstName || 'User';
      onSignup(name);
    }
  };

  const styles = {
    bg: 'var(--bg)',
    card: 'var(--card)',
    border: 'var(--border)',
    border2: 'var(--border-2)',
    text: 'var(--text)',
    text2: 'var(--text-2)',
    text3: 'var(--text-3)',
    sphere: '#7c6cf8',
  };

  return (
    <div style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', background: styles.bg }}>
      {/* Background Effects */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 100% 80% at 70% 50%, rgba(124,108,248,0.12) 0%, transparent 60%)' }}></div>
      <div style={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(124,108,248,0.08)', top: '-100px', right: '-100px', filter: 'blur(80px)', animation: 'float 10s ease-in-out infinite', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,107,138,0.06)', bottom: '-50px', left: '10%', filter: 'blur(80px)', animation: 'float 12s ease-in-out 3s infinite', pointerEvents: 'none' }}></div>

      <div style={{ position: 'relative', zIndex: 10, minHeight: '100vh', display: 'flex' }}>
        {/* Left Side - Branding (hidden on mobile, shown on lg) */}
        <div className="hidden lg:flex lg:w-1/2" style={{ width: '50%', background: 'linear-gradient(135deg, #5e4ff0 0%, #7C3AED 50%, #A855F7 100%)', flexDirection: 'column', justifyContent: 'center', padding: '60px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: '400px', height: '400px', background: 'rgba(255,255,255,0.06)', borderRadius: '50%', top: '-150px', right: '-100px', filter: 'blur(30px)' }}></div>
          <div style={{ position: 'absolute', width: '250px', height: '250px', background: 'rgba(255,107,138,0.12)', borderRadius: '50%', bottom: '-80px', left: '20%', filter: 'blur(20px)' }}></div>
          
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '400px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '14px', height: '14px', background: 'white', borderRadius: '50%' }}></div>
              </div>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '22px', fontWeight: 800, color: 'white' }}>Sphere<span style={{ color: 'rgba(255,255,255,0.6)' }}>.</span></span>
            </div>
            
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', padding: '6px 14px', borderRadius: '50px', fontSize: '12.5px', fontWeight: 600, color: 'white', marginBottom: '28px' }}>
              <i className="fas fa-shield-halved"></i> Secure & Private
            </div>
            
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '40px', fontWeight: 900, color: 'white', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '16px' }}>
              Welcome back to your schedule
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.65, maxWidth: '380px', marginBottom: '36px' }}>
              Sphere keeps your work organized so you can focus on what truly matters.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { icon: 'check', text: 'Tasks, meetings & appointments in one place' },
                { icon: 'bolt', text: 'AI-powered scheduling and smart reminders' },
                { icon: 'users', text: 'Real-time team collaboration & sharing' },
                { icon: 'mobile-alt', text: 'Works on web, mobile and desktop' },
              ].map((item) => (
                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', color: 'white' }}>
                    <i className={`fas fa-${item.icon}`}></i>
                  </div>
                  <span style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="w-full lg:w-1/2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 24px' }}>
          <div style={{ width: '100%', maxWidth: '420px' }}>
            <button
              onClick={onBack}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: styles.text2, background: 'transparent', border: 'none', cursor: 'pointer', marginBottom: '36px' }}
              onMouseEnter={(e) => e.currentTarget.style.color = styles.sphere}
              onMouseLeave={(e) => e.currentTarget.style.color = styles.text2}
            >
              <i className="fas fa-arrow-left"></i> Back to home
            </button>

            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '28px', fontWeight: 800, color: styles.text, letterSpacing: '-0.8px', marginBottom: '8px' }}>
              {isLogin ? 'Welcome back' : 'Create your account'}
            </h3>
            <p style={{ fontSize: '14.5px', color: styles.text2, marginBottom: '32px' }}>
              {isLogin ? 'Sign in to continue to Sphere Schedule' : 'Join 50,000+ teams using Sphere'}
            </p>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: '4px', background: styles.card, border: `1.5px solid ${styles.border}`, borderRadius: '12px', padding: '4px', marginBottom: '28px' }}>
              <button
                onClick={() => setIsLogin(true)}
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: '9px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textAlign: 'center',
                  cursor: 'pointer',
                  background: isLogin ? styles.sphere : 'transparent',
                  color: isLogin ? 'white' : styles.text2,
                  border: 'none',
                  boxShadow: isLogin ? '0 3px 12px rgba(124,108,248,0.35)' : 'none',
                  transition: 'all 0.25s',
                }}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: '9px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textAlign: 'center',
                  cursor: 'pointer',
                  background: !isLogin ? styles.sphere : 'transparent',
                  color: !isLogin ? 'white' : styles.text2,
                  border: 'none',
                  boxShadow: !isLogin ? '0 3px 12px rgba(124,108,248,0.35)' : 'none',
                  transition: 'all 0.25s',
                }}
              >
                Sign Up
              </button>
            </div>

            {/* Login Form */}
            <div style={{ display: isLogin ? 'block' : 'none' }}>
              <div style={{ marginBottom: '18px' }}>
                <label style={{ fontSize: '13px', fontWeight: 600, color: styles.text2, marginBottom: '8px', display: 'block' }}>Email address</label>
                <div style={{ position: 'relative' }}>
                  <i className="fas fa-envelope" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: styles.text3, fontSize: '14px' }}></i>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '13px 16px 13px 44px',
                      borderRadius: '12px',
                      background: styles.card,
                      border: `1.5px solid ${styles.border}`,
                      color: styles.text,
                      fontSize: '14.5px',
                      fontFamily: 'DM Sans, sans-serif',
                      outline: 'none',
                      transition: 'all 0.25s',
                    }}
                    placeholder="you@example.com"
                    onFocus={(e) => e.currentTarget.style.borderColor = styles.sphere}
                    onBlur={(e) => e.currentTarget.style.borderColor = styles.border}
                  />
                </div>
              </div>
              <div style={{ marginBottom: '18px' }}>
                <label style={{ fontSize: '13px', fontWeight: 600, color: styles.text2, marginBottom: '8px', display: 'block' }}>Password</label>
                <div style={{ position: 'relative' }}>
                  <i className="fas fa-lock" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: styles.text3, fontSize: '14px' }}></i>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '13px 16px 13px 44px',
                      borderRadius: '12px',
                      background: styles.card,
                      border: `1.5px solid ${styles.border}`,
                      color: styles.text,
                      fontSize: '14.5px',
                      fontFamily: 'DM Sans, sans-serif',
                      outline: 'none',
                      transition: 'all 0.25s',
                    }}
                    placeholder="Enter your password"
                    onFocus={(e) => e.currentTarget.style.borderColor = styles.sphere}
                    onBlur={(e) => e.currentTarget.style.borderColor = styles.border}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '18px' }}>
                <a style={{ fontSize: '13px', color: styles.sphere, cursor: 'pointer', fontWeight: 600 }}>Forgot password?</a>
              </div>
              <button
                onClick={handleSubmit}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '12px',
                  background: `linear-gradient(135deg, ${styles.sphere}, #A855F7)`,
                  color: 'white',
                  fontSize: '15px',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(124,108,248,0.35)',
                  transition: 'all 0.25s',
                  fontFamily: 'DM Sans, sans-serif',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 28px rgba(124,108,248,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(124,108,248,0.35)';
                }}
              >
                <i className="fas fa-sign-in-alt" style={{ marginRight: '8px' }}></i> Sign In
              </button>
            </div>

            {/* Signup Form */}
            <div style={{ display: !isLogin ? 'block' : 'none' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '18px' }}>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: styles.text2, marginBottom: '8px', display: 'block' }}>First name</label>
                  <div style={{ position: 'relative' }}>
                    <i className="fas fa-user" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: styles.text3, fontSize: '14px' }}></i>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '13px 16px 13px 44px',
                        borderRadius: '12px',
                        background: styles.card,
                        border: `1.5px solid ${styles.border}`,
                        color: styles.text,
                        fontSize: '14.5px',
                        fontFamily: 'DM Sans, sans-serif',
                        outline: 'none',
                        transition: 'all 0.25s',
                      }}
                      placeholder="Alex"
                      onFocus={(e) => e.currentTarget.style.borderColor = styles.sphere}
                      onBlur={(e) => e.currentTarget.style.borderColor = styles.border}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: styles.text2, marginBottom: '8px', display: 'block' }}>Last name</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '13px 16px',
                      borderRadius: '12px',
                      background: styles.card,
                      border: `1.5px solid ${styles.border}`,
                      color: styles.text,
                      fontSize: '14.5px',
                      fontFamily: 'DM Sans, sans-serif',
                      outline: 'none',
                      transition: 'all 0.25s',
                    }}
                    placeholder="Johnson"
                    onFocus={(e) => e.currentTarget.style.borderColor = styles.sphere}
                    onBlur={(e) => e.currentTarget.style.borderColor = styles.border}
                  />
                </div>
              </div>
              <div style={{ marginBottom: '18px' }}>
                <label style={{ fontSize: '13px', fontWeight: 600, color: styles.text2, marginBottom: '8px', display: 'block' }}>Email address</label>
                <div style={{ position: 'relative' }}>
                  <i className="fas fa-envelope" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: styles.text3, fontSize: '14px' }}></i>
                  <input
                    type="email"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '13px 16px 13px 44px',
                      borderRadius: '12px',
                      background: styles.card,
                      border: `1.5px solid ${styles.border}`,
                      color: styles.text,
                      fontSize: '14.5px',
                      fontFamily: 'DM Sans, sans-serif',
                      outline: 'none',
                      transition: 'all 0.25s',
                    }}
                    placeholder="you@example.com"
                    onFocus={(e) => e.currentTarget.style.borderColor = styles.sphere}
                    onBlur={(e) => e.currentTarget.style.borderColor = styles.border}
                  />
                </div>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontSize: '13px', fontWeight: 600, color: styles.text2, marginBottom: '8px', display: 'block' }}>Password</label>
                <div style={{ position: 'relative' }}>
                  <i className="fas fa-lock" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: styles.text3, fontSize: '14px' }}></i>
                  <input
                    type="password"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '13px 16px 13px 44px',
                      borderRadius: '12px',
                      background: styles.card,
                      border: `1.5px solid ${styles.border}`,
                      color: styles.text,
                      fontSize: '14.5px',
                      fontFamily: 'DM Sans, sans-serif',
                      outline: 'none',
                      transition: 'all 0.25s',
                    }}
                    placeholder="Create a strong password"
                    onFocus={(e) => e.currentTarget.style.borderColor = styles.sphere}
                    onBlur={(e) => e.currentTarget.style.borderColor = styles.border}
                  />
                </div>
              </div>
              <button
                onClick={handleSubmit}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '12px',
                  background: `linear-gradient(135deg, ${styles.sphere}, #A855F7)`,
                  color: 'white',
                  fontSize: '15px',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(124,108,248,0.35)',
                  transition: 'all 0.25s',
                  fontFamily: 'DM Sans, sans-serif',
                  marginTop: '8px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 28px rgba(124,108,248,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(124,108,248,0.35)';
                }}
              >
                <i className="fas fa-user-plus" style={{ marginRight: '8px' }}></i> Create Account
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', margin: '22px 0' }}>
              <div style={{ flex: 1, height: '1px', background: styles.border2 }}></div>
              <span style={{ fontSize: '12.5px', fontWeight: 500, color: styles.text3 }}>or continue with</span>
              <div style={{ flex: 1, height: '1px', background: styles.border2 }}></div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => {
                  if (isLogin) {
                    const name = email.split('@')[0] || 'User';
                    onLogin(name.charAt(0).toUpperCase() + name.slice(1));
                  } else {
                    onSignup(firstName || 'User');
                  }
                }}
                style={{
                  flex: 1,
                  padding: '12px',
                  borderRadius: '12px',
                  background: styles.card,
                  border: `1.5px solid ${styles.border2}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: styles.text2,
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = styles.sphere;
                  e.currentTarget.style.color = styles.sphere;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = styles.border2;
                  e.currentTarget.style.color = styles.text2;
                }}
              >
                <i className="fab fa-google" style={{ color: '#EA4335' }}></i> Google
              </button>
              <button
                onClick={() => {
                  if (isLogin) {
                    const name = email.split('@')[0] || 'User';
                    onLogin(name.charAt(0).toUpperCase() + name.slice(1));
                  } else {
                    onSignup(firstName || 'User');
                  }
                }}
                style={{
                  flex: 1,
                  padding: '12px',
                  borderRadius: '12px',
                  background: styles.card,
                  border: `1.5px solid ${styles.border2}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: styles.text2,
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = styles.sphere;
                  e.currentTarget.style.color = styles.sphere;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = styles.border2;
                  e.currentTarget.style.color = styles.text2;
                }}
              >
                <i className="fab fa-microsoft" style={{ color: '#0078D4' }}></i> Microsoft
              </button>
              <button
                onClick={() => {
                  if (isLogin) {
                    const name = email.split('@')[0] || 'User';
                    onLogin(name.charAt(0).toUpperCase() + name.slice(1));
                  } else {
                    onSignup(firstName || 'User');
                  }
                }}
                style={{
                  flex: 1,
                  padding: '12px',
                  borderRadius: '12px',
                  background: styles.card,
                  border: `1.5px solid ${styles.border2}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: styles.text2,
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = styles.sphere;
                  e.currentTarget.style.color = styles.sphere;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = styles.border2;
                  e.currentTarget.style.color = styles.text2;
                }}
              >
                <i className="fab fa-github" style={{ color: isDark ? '#f0efff' : '#1a1733' }}></i> GitHub
              </button>
            </div>

            <p style={{ fontSize: '13.5px', color: styles.text2, marginTop: '22px', textAlign: 'center' }}>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                style={{ color: styles.sphere, fontWeight: 600, background: 'transparent', border: 'none', cursor: 'pointer' }}
              >
                {isLogin ? 'Sign up free' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}