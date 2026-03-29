'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function AuthPage() {
  const pathname = usePathname();
  const [active, setActive] = useState<'login' | 'signup'>('login');

  useEffect(() => {
    if (pathname?.includes('register')) setActive('signup');
    if (pathname?.includes('login')) setActive('login');
  }, [pathname]);
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('Credentials captured. Connect database later.');
  };

  return (
    <div id="auth-page">
      <div className="auth-bg"></div>
      <div className="auth-floater hf1"></div>
      <div className="auth-floater hf2"></div>
      <div className="auth-split">
        <div className="auth-left">
          <div className="auth-left-orb1"></div>
          <div className="auth-left-orb2"></div>
          <div className="auth-left-content">
            <div className="auth-left-badge"><i className="fas fa-sparkles"></i> Welcome</div>
            <h2>Enter Sphere</h2>
            <p>Switch between login and signup instantly with smooth motion.</p>
            <div className="auth-features">
              <div className="auth-feat"><i className="fas fa-check"></i> Unified calendar + tasks</div>
              <div className="auth-feat"><i className="fas fa-check"></i> Focus mode orchestration</div>
              <div className="auth-feat"><i className="fas fa-check"></i> Intelligent scheduling</div>
            </div>
          </div>
        </div>
        <div className="auth-right">
          <div className="auth-form-box">
            <a className="auth-back" href="/"><i className="fas fa-arrow-left"></i> Back to home</a>
            <h3>{active === 'login' ? 'Welcome back' : 'Create your account'}</h3>
            <div className="auth-sub">
              {active === 'login'
                ? 'Sign in to continue to Sphere Schedule'
                : 'Join 50,000+ teams using Sphere'}
            </div>
            <div className="auth-tabs">
              <button
                className={active === 'login' ? 'auth-tab active' : 'auth-tab'}
                onClick={() => setActive('login')}
                type="button"
              >
                Login
              </button>
              <button
                className={active === 'signup' ? 'auth-tab active' : 'auth-tab'}
                onClick={() => setActive('signup')}
                type="button"
              >
                Sign up
              </button>
            </div>

            <div className="auth-forms">
              <form onSubmit={onSubmit} className={active === 'login' ? 'auth-pane' : 'auth-pane hidden'}>
                <div className="input-wrap">
                  <i className="fas fa-envelope input-icon"></i>
                  <input className="form-input" placeholder="Email address" />
                </div>
                <div className="input-wrap" style={{ marginTop: 14 }}>
                  <i className="fas fa-lock input-icon"></i>
                  <input type="password" className="form-input" placeholder="Password" />
                </div>
                <button className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: 20 }} type="submit">
                  <i className="fas fa-arrow-right"></i> Sign in
                </button>
              </form>

              <form onSubmit={onSubmit} className={active === 'signup' ? 'auth-pane' : 'auth-pane hidden'}>
                <div className="input-wrap">
                  <i className="fas fa-user input-icon"></i>
                  <input className="form-input" placeholder="Full name" />
                </div>
                <div className="input-wrap" style={{ marginTop: 14 }}>
                  <i className="fas fa-envelope input-icon"></i>
                  <input className="form-input" placeholder="Email address" />
                </div>
                <div className="input-wrap" style={{ marginTop: 14 }}>
                  <i className="fas fa-lock input-icon"></i>
                  <input type="password" className="form-input" placeholder="Password" />
                </div>
                <button className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: 20 }} type="submit">
                  <i className="fas fa-bolt"></i> Create account
                </button>
              </form>
            </div>

            {message && (
              <div style={{ marginTop: 12, fontSize: 13, color: 'var(--text-2)' }}>{message}</div>
            )}

            <div className="auth-divider"><span>or continue with</span></div>
            <div className="auth-social" style={{ display: 'grid', gap: 10 }}>
              <button className="btn btn-ghost" style={{ width: '100%' }}>
                <i className="fab fa-google"></i> Google
              </button>
              <button className="btn btn-ghost" style={{ width: '100%' }}>
                <i className="fab fa-apple"></i> Apple
              </button>
              <button className="btn btn-ghost" style={{ width: '100%' }}>
                <i className="fab fa-microsoft"></i> Microsoft
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
