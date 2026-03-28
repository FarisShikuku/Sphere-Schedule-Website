'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !password) {
      setMessage('Please enter both email and password.');
      return;
    }
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
            <div className="auth-left-badge"><i className="fas fa-sparkles"></i> Welcome back</div>
            <h2>Log in to Sphere</h2>
            <p>Return to your calm command center and keep your schedule in sync.</p>
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
            <h3>Welcome back</h3>
            <div className="auth-sub">Sign in to continue to Sphere Schedule</div>
            <div className="auth-tabs">
              <div className="auth-tab active">Login</div>
              <a className="auth-tab" href="/register">Sign up</a>
            </div>

            <form onSubmit={onSubmit}>
              <div className="input-wrap">
                <i className="fas fa-envelope input-icon"></i>
                <input
                  className="form-input"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-wrap" style={{ marginTop: 14 }}>
                <i className="fas fa-lock input-icon"></i>
                <input
                  type="password"
                  className="form-input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: 20 }} type="submit">
                <i className="fas fa-arrow-right"></i> Sign in
              </button>
            </form>

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
            <div className="auth-switch">Don't have an account? <a href="/register">Sign up free</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}
