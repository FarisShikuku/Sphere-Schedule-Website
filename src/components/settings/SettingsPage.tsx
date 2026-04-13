'use client';

import { useState, useEffect } from 'react';
import { useToast } from '@/contexts/ToastContext';

export function SettingsPage() {
  const { showToast } = useToast();
  const [activeSection, setActiveSection] = useState('profile');
  const [userName, setUserName] = useState('Faris');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('sphere_user');
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        setUserName(user.firstName || user.email?.split('@')[0] || 'Faris');
      } catch (e) {}
    }
    const theme = document.documentElement.getAttribute('data-theme');
    setIsDark(theme !== 'light');
  }, []);

  const sections = [{ id: 'profile', label: 'Profile', icon: 'user' }, { id: 'notifications', label: 'Notifications', icon: 'bell' }, { id: 'appearance', label: 'Appearance', icon: 'palette' }, { id: 'calendar', label: 'Calendar Sync', icon: 'calendar-check' }, { id: 'security', label: 'Security', icon: 'shield-halved' }, { id: 'billing', label: 'Billing', icon: 'credit-card' }];

  const [notifications, setNotifications] = useState({ taskReminders: true, meetingAlerts: true, emailDigest: false, pushNotifications: true });

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    showToast(`${newTheme === 'dark' ? 'Dark' : 'Light'} mode activated`, 'fa-palette');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div><div style={{ fontFamily: 'var(--font-outfit)', fontSize: '20px', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.5px' }}>Settings</div><div style={{ fontSize: '12px', color: 'var(--text-2)', marginTop: '2px' }}>Manage your account and preferences</div></div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }} className="lg:grid-cols-[200px_1fr]">
        {/* Navigation */}
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
          {sections.map((section, idx) => (
            <button key={section.id} onClick={() => setActiveSection(section.id)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', borderBottom: idx !== sections.length - 1 ? '1px solid var(--border)' : 'none', cursor: 'pointer', background: activeSection === section.id ? 'rgba(124,108,248,0.08)' : 'transparent', color: activeSection === section.id ? '#7c6cf8' : 'var(--text-2)', borderRight: activeSection === section.id ? '2px solid #7c6cf8' : 'none' }} onMouseEnter={(e) => { if (activeSection !== section.id) { e.currentTarget.style.background = 'var(--card-2)'; e.currentTarget.style.color = 'var(--text)'; } }} onMouseLeave={(e) => { if (activeSection !== section.id) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-2)'; } }}><i className={`fas fa-${section.icon}`} style={{ width: '14px', fontSize: '13px' }}></i><span style={{ fontSize: '12px', fontWeight: 500 }}>{section.label}</span></button>
          ))}
        </div>

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Profile Section */}
          {activeSection === 'profile' && (
            <>
              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'linear-gradient(135deg, #7c6cf8, #ff6b8a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', fontWeight: 800, color: 'white' }}>{userName.charAt(0).toUpperCase()}</div>
                <div style={{ flex: 1 }}><div style={{ fontFamily: 'var(--font-outfit)', fontSize: '18px', fontWeight: 800, color: 'var(--text)' }}>{userName}</div><div style={{ fontSize: '12px', color: 'var(--text-2)' }}>faris@spheresolution.dev</div><div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'rgba(124,108,248,0.12)', color: '#7c6cf8', fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '20px', marginTop: '6px' }}><i className="fas fa-crown" style={{ fontSize: '9px' }}></i> Pro Plan</div></div>
                <button onClick={() => showToast('Profile editor opened', 'fa-pen')} style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '11px', fontWeight: 600, background: 'transparent', color: 'var(--text-2)', border: '1px solid var(--border-2)', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#7c6cf8'; e.currentTarget.style.color = '#7c6cf8'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-2)'; e.currentTarget.style.color = 'var(--text-2)'; }}><i className="fas fa-pen" style={{ marginRight: '4px', fontSize: '9px' }}></i> Edit</button>
              </div>
              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '16px' }}>
                <div style={{ marginBottom: '12px' }}><h4 style={{ fontFamily: 'var(--font-outfit)', fontSize: '13px', fontWeight: 700, color: 'var(--text)' }}>Account Information</h4><p style={{ fontSize: '10px', color: 'var(--text-2)', marginTop: '2px' }}>Update your account details</p></div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div><label style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-2)', marginBottom: '4px', display: 'block' }}>Full Name</label><input type="text" defaultValue={userName} style={{ width: '100%', padding: '8px 12px', borderRadius: '10px', background: 'var(--card-2)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: '12px', outline: 'none' }} onFocus={(e) => e.currentTarget.style.borderColor = '#7c6cf8'} onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'} /></div>
                  <div><label style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-2)', marginBottom: '4px', display: 'block' }}>Email Address</label><input type="email" defaultValue="faris@spheresolution.dev" style={{ width: '100%', padding: '8px 12px', borderRadius: '10px', background: 'var(--card-2)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: '12px', outline: 'none' }} onFocus={(e) => e.currentTarget.style.borderColor = '#7c6cf8'} onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'} /></div>
                  <div><label style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-2)', marginBottom: '4px', display: 'block' }}>Timezone</label><select style={{ width: '100%', padding: '8px 12px', borderRadius: '10px', background: 'var(--card-2)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: '12px', outline: 'none' }}><option>WAT (UTC+1)</option><option>EST (UTC-5)</option><option>PST (UTC-8)</option></select></div>
                </div>
              </div>
            </>
          )}

          {/* Notifications Section */}
          {activeSection === 'notifications' && (
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ marginBottom: '12px' }}><h4 style={{ fontFamily: 'var(--font-outfit)', fontSize: '13px', fontWeight: 700, color: 'var(--text)' }}>Notifications</h4><p style={{ fontSize: '10px', color: 'var(--text-2)', marginTop: '2px' }}>Manage how Sphere sends you alerts</p></div>
              {[{ key: 'taskReminders', label: 'Task Reminders', desc: 'Alerts before task deadlines', icon: 'bell', color: '#7c6cf8' }, { key: 'meetingAlerts', label: 'Meeting Alerts', desc: '5 minutes before meetings', icon: 'video', color: '#2dd4a0' }, { key: 'emailDigest', label: 'Email Digest', desc: 'Daily summary', icon: 'envelope', color: '#ff6b8a' }, { key: 'pushNotifications', label: 'Push Notifications', desc: 'Alerts on mobile', icon: 'mobile-alt', color: '#ffd166' }].map((item) => (
                <div key={item.key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ width: '30px', height: '30px', borderRadius: '8px', background: `${item.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className={`fas fa-${item.icon}`} style={{ color: item.color, fontSize: '12px' }}></i></div><div><div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text)' }}>{item.label}</div><div style={{ fontSize: '9px', color: 'var(--text-2)' }}>{item.desc}</div></div></div>
                  <button onClick={() => { setNotifications(prev => ({ ...prev, [item.key]: !prev[item.key as keyof typeof notifications] })); showToast(`${item.label} ${!notifications[item.key as keyof typeof notifications] ? 'enabled' : 'disabled'}`, 'fa-bell'); }} style={{ width: '36px', height: '20px', borderRadius: '10px', background: notifications[item.key as keyof typeof notifications] ? '#7c6cf8' : 'var(--card-2)', border: notifications[item.key as keyof typeof notifications] ? 'none' : '1px solid var(--border)', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '2px' }}><div style={{ width: '14px', height: '14px', borderRadius: '50%', background: 'white', transform: notifications[item.key as keyof typeof notifications] ? 'translateX(16px)' : 'translateX(0)', transition: 'transform 0.2s' }}></div></button>
                </div>
              ))}
            </div>
          )}

          {/* Appearance Section */}
          {activeSection === 'appearance' && (
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ marginBottom: '12px' }}><h4 style={{ fontFamily: 'var(--font-outfit)', fontSize: '13px', fontWeight: 700, color: 'var(--text)' }}>Appearance</h4><p style={{ fontSize: '10px', color: 'var(--text-2)', marginTop: '2px' }}>Customize how Sphere looks</p></div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'rgba(124,108,248,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="fas fa-circle-half-stroke" style={{ color: '#7c6cf8', fontSize: '12px' }}></i></div><div><div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text)' }}>Dark Mode</div><div style={{ fontSize: '9px', color: 'var(--text-2)' }}>Switch between light and dark themes</div></div></div>
                <button onClick={toggleTheme} style={{ width: '36px', height: '20px', borderRadius: '10px', background: isDark ? '#7c6cf8' : 'var(--card-2)', border: isDark ? 'none' : '1px solid var(--border)', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '2px' }}><div style={{ width: '14px', height: '14px', borderRadius: '50%', background: 'white', transform: isDark ? 'translateX(16px)' : 'translateX(0)', transition: 'transform 0.2s' }}></div></button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', cursor: 'pointer' }} onClick={() => showToast('Language changed', 'fa-globe')}><div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'rgba(34,211,238,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="fas fa-globe" style={{ color: '#22d3ee', fontSize: '12px' }}></i></div><div><div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text)' }}>Language</div><div style={{ fontSize: '9px', color: 'var(--text-2)' }}>Interface language</div></div></div><div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-3)' }}><span style={{ fontSize: '11px' }}>English</span><i className="fas fa-chevron-right" style={{ fontSize: '9px' }}></i></div></div>
            </div>
          )}

          {/* Sign Out Button */}
          <button onClick={() => { localStorage.removeItem('sphere_user'); showToast('Signed out successfully', 'fa-sign-out-alt'); setTimeout(() => { window.location.href = '/'; }, 1000); }} style={{ padding: '10px', borderRadius: '9999px', fontSize: '12px', fontWeight: 600, background: 'transparent', color: '#ff6b6b', border: '1px solid rgba(255,107,107,0.3)', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,107,107,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}><i className="fas fa-sign-out-alt" style={{ marginRight: '6px', fontSize: '10px' }}></i> Sign Out</button>
        </div>
      </div>
    </div>
  );
}