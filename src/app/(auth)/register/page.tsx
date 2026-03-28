export default function RegisterPage() {
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
            <div className="auth-left-badge"><i className="fas fa-rocket"></i> Start for free</div>
            <h2>Create your Sphere</h2>
            <p>Set up your calm command center and start planning in minutes.</p>
            <div className="auth-features">
              <div className="auth-feat"><i className="fas fa-check"></i> Smart tasks + calendar</div>
              <div className="auth-feat"><i className="fas fa-check"></i> AI scheduling flow</div>
              <div className="auth-feat"><i className="fas fa-check"></i> Team-ready from day one</div>
            </div>
          </div>
        </div>
        <div className="auth-right">
          <div className="auth-form-box">
            <div className="auth-back"><i className="fas fa-arrow-left"></i> Back to home</div>
            <h3>Create your account</h3>
            <div className="auth-sub">Join 50,000+ teams using Sphere</div>
            <div className="auth-tabs">
              <div className="auth-tab">Login</div>
              <div className="auth-tab active">Sign up</div>
            </div>
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
            <button className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: 20 }}>
              <i className="fas fa-bolt"></i> Create account
            </button>
            <div className="auth-divider"><span>or continue with</span></div>
            <button className="btn btn-ghost" style={{ width: '100%' }}>
              <i className="fab fa-google"></i> Google
            </button>
            <div className="auth-switch">Already have an account? <a href="/login">Sign in</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}
