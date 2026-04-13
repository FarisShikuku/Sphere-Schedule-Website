'use client';

import { useState, useEffect } from 'react';

export function Footer() {
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

  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Changelog', href: '#' },
        { label: 'Roadmap', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
        { label: 'Security', href: '#' },
        { label: 'Cookies', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: 'fab fa-twitter', href: '#' },
    { icon: 'fab fa-linkedin', href: '#' },
    { icon: 'fab fa-github', href: '#' },
    { icon: 'fab fa-instagram', href: '#' },
  ];

  const styles = {
    card: 'var(--card)',
    border: 'var(--border)',
    text: 'var(--text)',
    text2: 'var(--text-2)',
    text3: 'var(--text-3)',
    card2: 'var(--card-2)',
    sphere: '#7c6cf8',
  };

  return (
    <footer style={{ background: styles.card, borderTop: `1px solid ${styles.border}`, padding: '60px 40px 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Footer Grid - 4 columns on desktop, 1 on mobile */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '48px',
          marginBottom: '48px'
        }}>
          {/* Brand Section */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '13px', 
                background: 'linear-gradient(135deg, #7c6cf8, #a855f7, #ff6b8a)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                boxShadow: '0 4px 16px rgba(124,108,248,0.35)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  position: 'absolute',
                  width: '30px',
                  height: '30px',
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderRadius: '50%',
                  top: '5px',
                  left: '5px'
                }}></div>
                <div style={{ width: '14px', height: '14px', background: 'white', borderRadius: '50%', position: 'relative', zIndex: 1 }}></div>
              </div>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '20px', fontWeight: 800, color: styles.text }}>
                Sphere<span style={{ color: styles.sphere }}>.</span>
              </span>
            </div>
            <p style={{ fontSize: '14px', color: styles.text2, lineHeight: 1.6, maxWidth: '260px' }}>
              The intelligent scheduling platform trusted by teams to move faster and achieve more.
            </p>
          </div>

          {/* Link Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: 700, color: styles.text, marginBottom: '16px', letterSpacing: '0.3px' }}>
                {section.title}
              </h4>
              {section.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{ 
                    display: 'block', 
                    fontSize: '13.5px', 
                    color: styles.text2, 
                    textDecoration: 'none', 
                    marginBottom: '10px',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = styles.sphere}
                  onMouseLeave={(e) => e.currentTarget.style.color = styles.text2}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          paddingTop: '28px', 
          borderTop: `1px solid ${styles.border}`, 
          display: 'flex', 
          flexDirection: 'row',
          alignItems: 'center', 
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <span style={{ fontSize: '13px', color: styles.text3 }}>
            © 2026 <strong style={{ color: styles.text2 }}>Sphere Schedule</strong> · Built with ♥ by Sphere Solution Developers
          </span>
          <div style={{ display: 'flex', gap: '10px' }}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: styles.card2,
                  border: `1px solid ${styles.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: styles.text2,
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = styles.sphere;
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.borderColor = styles.sphere;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = styles.card2;
                  e.currentTarget.style.color = styles.text2;
                  e.currentTarget.style.borderColor = styles.border;
                }}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}