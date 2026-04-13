'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/contexts/ToastContext';
import { DashboardPage } from '@/components/dashboard/DashboardPage';
import { TasksPage } from '@/components/tasks/TasksPage';
import { CalendarPage } from '@/components/calendar/CalendarPage';
import { MeetingsPage } from '@/components/meetings/MeetingsPage';
import { AppointmentsPage } from '@/components/appointments/AppointmentsPage';
import { SettingsPage } from '@/components/settings/SettingsPage';
import { AnalyticsPage } from '@/components/dashboard/AnalyticsPage';

export function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');
  const [userName, setUserName] = useState('Faris');
  const [isDark, setIsDark] = useState(true);
  const { logout } = useAuth();
  const { showToast } = useToast();

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
    
    const savedCollapsed = localStorage.getItem('sidebar_collapsed');
    if (savedCollapsed === 'true') {
      setIsCollapsed(true);
    }
    
    const observer = new MutationObserver(() => {
      const newTheme = document.documentElement.getAttribute('data-theme');
      setIsDark(newTheme !== 'light');
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  // Close sidebar on mobile when screen becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebarCollapse = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    localStorage.setItem('sidebar_collapsed', String(newState));
  };

  const pageTitles: Record<string, { title: string; subtitle: string }> = {
    dashboard: { title: 'Dashboard', subtitle: 'Wednesday, March 25, 2026' },
    tasks: { title: 'My Tasks', subtitle: '24 tasks this week · 5 pending today' },
    calendar: { title: 'Calendar', subtitle: 'March 2026' },
    meetings: { title: 'Meetings', subtitle: '4 scheduled today · 1 live now' },
    appointments: { title: 'Appointments', subtitle: '6 appointments this week' },
    settings: { title: 'Settings', subtitle: 'Manage your account and preferences' },
    analytics: { title: 'Analytics', subtitle: 'Productivity insights — Week of March 25' },
    team: { title: 'Team', subtitle: 'Sphere Solution Developers · 6 members' },
    notes: { title: 'Notes', subtitle: 'Your quick notes' },
  };

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard': return <DashboardPage />;
      case 'tasks': return <TasksPage />;
      case 'calendar': return <CalendarPage />;
      case 'meetings': return <MeetingsPage />;
      case 'appointments': return <AppointmentsPage />;
      case 'settings': return <SettingsPage />;
      case 'analytics': return <AnalyticsPage />;
      case 'team': 
        return (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <i className="fas fa-users" style={{ fontSize: '48px', color: '#7c6cf8', opacity: 0.4, marginBottom: '20px', display: 'block' }}></i>
            <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '20px', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>Team collaboration</div>
            <div style={{ fontSize: '14px', color: 'var(--text-2)' }}>Manage your team, share schedules, and collaborate in real time.<br />This section is coming in the next update.</div>
          </div>
        );
      case 'notes':
        return (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <i className="fas fa-sticky-note" style={{ fontSize: '48px', color: '#ffd166', opacity: 0.4, marginBottom: '20px', display: 'block' }}></i>
            <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '20px', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>Quick Notes</div>
            <div style={{ fontSize: '14px', color: 'var(--text-2)' }}>Capture thoughts, meeting notes, and ideas on the fly.<br />Coming in the next update.</div>
          </div>
        );
      default: return <DashboardPage />;
    }
  };

  const navItems = {
    main: [
      { id: 'dashboard', label: 'Dashboard', icon: 'home' },
      { id: 'tasks', label: 'Tasks', icon: 'check-circle', badge: '5' },
      { id: 'calendar', label: 'Calendar', icon: 'calendar-alt' },
      { id: 'meetings', label: 'Meetings', icon: 'video', badge: '2' },
      { id: 'appointments', label: 'Appointments', icon: 'clock' },
    ],
    workspace: [
      { id: 'analytics', label: 'Analytics', icon: 'chart-line', badge: 'New', badgeColor: 'green' },
      { id: 'team', label: 'Team', icon: 'users' },
      { id: 'notes', label: 'Notes', icon: 'sticky-note' },
    ],
    bottom: [
      { id: 'settings', label: 'Settings', icon: 'cog' },
    ],
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem('sphere_user');
    showToast('Signed out successfully', 'fa-sign-out-alt');
    window.location.href = '/';
  };

  const currentPage = pageTitles[activePage] || pageTitles.dashboard;
  const sidebarWidth = isCollapsed ? '70px' : '260px';

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg)' }}>
      {/* Sidebar - Fixed on left */}
      <aside
        style={{
          width: sidebarWidth,
          background: 'var(--bg-2)',
          borderRight: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 40,
          transition: 'width 0.3s ease',
          overflow: 'hidden',
        }}
      >
        {/* Sidebar Header */}
        <div style={{ padding: '20px 16px 14px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: isCollapsed ? 'center' : 'space-between' }}>
          {!isCollapsed && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'linear-gradient(135deg, #7c6cf8, #a855f7, #ff6b8a)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', width: '26px', height: '26px', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '50%', top: '4px', left: '4px' }}></div>
                <div style={{ width: '12px', height: '12px', background: 'white', borderRadius: '50%', position: 'relative', zIndex: 1 }}></div>
              </div>
              <span style={{ fontFamily: 'var(--font-outfit)', fontSize: '17px', fontWeight: 800, color: 'var(--text)' }}>Sphere<span style={{ color: '#7c6cf8' }}>.</span></span>
            </div>
          )}
          {isCollapsed && (
            <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'linear-gradient(135deg, #7c6cf8, #a855f7, #ff6b8a)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
              <div style={{ width: '12px', height: '12px', background: 'white', borderRadius: '50%' }}></div>
            </div>
          )}
          <button
            onClick={toggleSidebarCollapse}
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '8px',
              background: 'var(--card)',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-3)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#7c6cf8'; e.currentTarget.style.borderColor = '#7c6cf8'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-3)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
          >
            <i className={`fas fa-chevron-${isCollapsed ? 'right' : 'left'}`} style={{ fontSize: '10px' }}></i>
          </button>
        </div>

        {/* User Info */}
        {!isCollapsed && (
          <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '11px', borderBottom: '1px solid var(--border)' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: 'linear-gradient(135deg, #7c6cf8, #ff6b8a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-outfit)', fontSize: '14px', fontWeight: 700, color: 'white', boxShadow: '0 3px 10px rgba(124,108,248,0.35)' }}>
              {userName.charAt(0).toUpperCase()}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--text)' }}>{userName}</div>
              <div style={{ fontSize: '11.5px', color: 'var(--text-2)' }}>Pro Member</div>
            </div>
            <div style={{ padding: '3px 8px', borderRadius: '20px', background: 'rgba(45,212,160,0.15)', color: '#2dd4a0', fontSize: '10px', fontWeight: 700 }}>Online</div>
          </div>
        )}

        {/* Navigation */}
        <nav style={{ flex: 1, overflowY: 'auto', padding: '12px 10px' }}>
          {!isCollapsed && <div style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '1px', color: 'var(--text-3)', textTransform: 'uppercase', padding: '6px 10px 8px' }}>MAIN</div>}
          {navItems.main.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActivePage(item.id); }}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: isCollapsed ? 'center' : 'flex-start',
                gap: isCollapsed ? 0 : '12px',
                padding: isCollapsed ? '10px' : '10px 12px',
                borderRadius: '12px',
                background: activePage === item.id ? 'rgba(124,108,248,0.12)' : 'transparent',
                color: activePage === item.id ? '#7c6cf8' : 'var(--text-2)',
                border: 'none',
                cursor: 'pointer',
                marginBottom: '2px',
                transition: 'all 0.2s',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                if (activePage !== item.id) {
                  e.currentTarget.style.background = 'var(--card)';
                  e.currentTarget.style.color = 'var(--text)';
                }
              }}
              onMouseLeave={(e) => {
                if (activePage !== item.id) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--text-2)';
                }
              }}
            >
              <div style={{ width: '32px', height: '32px', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', background: activePage === item.id ? 'rgba(124,108,248,0.15)' : 'transparent' }}>
                <i className={`fas fa-${item.icon}`}></i>
              </div>
              {!isCollapsed && (
                <>
                  <span style={{ fontSize: '13.5px', fontWeight: 600, flex: 1, textAlign: 'left' }}>{item.label}</span>
                  {item.badge && (
                    <span style={{ fontSize: '10px', fontWeight: 700, padding: '2px 7px', borderRadius: '20px', background: 'rgba(255,107,138,0.15)', color: '#ff6b8a' }}>
                      {item.badge}
                    </span>
                  )}
                </>
              )}
              {activePage === item.id && (
                <div style={{ position: 'absolute', left: 0, top: '6px', bottom: '6px', width: '3px', borderRadius: '0 3px 3px 0', background: '#7c6cf8' }}></div>
              )}
            </button>
          ))}

          {!isCollapsed && <div style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '1px', color: 'var(--text-3)', textTransform: 'uppercase', padding: '6px 10px 8px', marginTop: '10px' }}>WORKSPACE</div>}
          {navItems.workspace.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActivePage(item.id); }}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: isCollapsed ? 'center' : 'flex-start',
                gap: isCollapsed ? 0 : '12px',
                padding: isCollapsed ? '10px' : '10px 12px',
                borderRadius: '12px',
                background: activePage === item.id ? 'rgba(124,108,248,0.12)' : 'transparent',
                color: activePage === item.id ? '#7c6cf8' : 'var(--text-2)',
                border: 'none',
                cursor: 'pointer',
                marginBottom: '2px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                if (activePage !== item.id) {
                  e.currentTarget.style.background = 'var(--card)';
                  e.currentTarget.style.color = 'var(--text)';
                }
              }}
              onMouseLeave={(e) => {
                if (activePage !== item.id) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--text-2)';
                }
              }}
            >
              <div style={{ width: '32px', height: '32px', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', background: activePage === item.id ? 'rgba(124,108,248,0.15)' : 'transparent' }}>
                <i className={`fas fa-${item.icon}`}></i>
              </div>
              {!isCollapsed && (
                <>
                  <span style={{ fontSize: '13.5px', fontWeight: 600, flex: 1, textAlign: 'left' }}>{item.label}</span>
                  {item.badge && (
                    <span style={{ fontSize: '10px', fontWeight: 700, padding: '2px 7px', borderRadius: '20px', background: 'rgba(45,212,160,0.15)', color: '#2dd4a0' }}>
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </button>
          ))}
        </nav>

        {/* Bottom Section */}
        <div style={{ borderTop: '1px solid var(--border)', padding: '12px 10px' }}>
          {navItems.bottom.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActivePage(item.id); }}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: isCollapsed ? 'center' : 'flex-start',
                gap: isCollapsed ? 0 : '12px',
                padding: isCollapsed ? '10px' : '10px 12px',
                borderRadius: '12px',
                background: activePage === item.id ? 'rgba(124,108,248,0.12)' : 'transparent',
                color: activePage === item.id ? '#7c6cf8' : 'var(--text-2)',
                border: 'none',
                cursor: 'pointer',
                marginBottom: '2px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                if (activePage !== item.id) {
                  e.currentTarget.style.background = 'var(--card)';
                  e.currentTarget.style.color = 'var(--text)';
                }
              }}
              onMouseLeave={(e) => {
                if (activePage !== item.id) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--text-2)';
                }
              }}
            >
              <div style={{ width: '32px', height: '32px', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
                <i className={`fas fa-${item.icon}`}></i>
              </div>
              {!isCollapsed && (
                <span style={{ fontSize: '13.5px', fontWeight: 600, flex: 1, textAlign: 'left' }}>{item.label}</span>
              )}
            </button>
          ))}
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: isCollapsed ? 'center' : 'flex-start',
              gap: isCollapsed ? 0 : '12px',
              padding: isCollapsed ? '10px' : '10px 12px',
              borderRadius: '12px',
              background: 'transparent',
              color: '#ff6b6b',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--card)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <div style={{ width: '32px', height: '32px', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
              <i className="fas fa-sign-out-alt"></i>
            </div>
            {!isCollapsed && <span style={{ fontSize: '13.5px', fontWeight: 600 }}>Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div
        style={{
          marginLeft: sidebarWidth,
          flex: 1,
          minHeight: '100vh',
          transition: 'margin-left 0.3s ease',
        }}
      >
        {/* Top Bar */}
        <header style={{
          position: 'sticky',
          top: 0,
          zIndex: 30,
          height: '60px',
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
          gap: '12px',
        }}>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'var(--card)',
              border: '1.5px solid var(--border)',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-2)',
              cursor: 'pointer',
              fontSize: '14px',
            }}
            className="mobile-menu-btn"
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* Title */}
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '16px', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.3px' }}>
              {currentPage.title}
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-2)', marginTop: '1px' }}>
              {currentPage.subtitle}
            </div>
          </div>

          {/* Search - Desktop */}
          <div style={{ position: 'relative', width: '280px' }} className="hidden md:block">
            <i className="fas fa-search" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-3)', fontSize: '12px', zIndex: 1 }}></i>
            <input
              type="text"
              placeholder="Search tasks, meetings..."
              style={{
                width: '100%',
                padding: '7px 12px 7px 36px',
                background: 'var(--card)',
                border: '1.5px solid var(--border)',
                borderRadius: '10px',
                color: 'var(--text)',
                fontSize: '12.5px',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#7c6cf8'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
            />
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => {
                const theme = document.documentElement.getAttribute('data-theme');
                const newTheme = theme === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                setIsDark(newTheme === 'dark');
              }}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'var(--card)',
                border: '1.5px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-2)',
                cursor: 'pointer',
                fontSize: '13px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#7c6cf8';
                e.currentTarget.style.borderColor = '#7c6cf8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-2)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>

            <div style={{ position: 'relative' }}>
              <button
                onClick={() => showToast('Notifications opened', 'fa-bell')}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'var(--card)',
                  border: '1.5px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-2)',
                  cursor: 'pointer',
                  fontSize: '13px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#7c6cf8';
                  e.currentTarget.style.borderColor = '#7c6cf8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-2)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                <i className="fas fa-bell"></i>
              </button>
              <div style={{ position: 'absolute', top: '4px', right: '4px', width: '7px', height: '7px', background: '#ff6b8a', borderRadius: '50%', border: '2px solid var(--nav-bg)' }}></div>
            </div>

            <button
              onClick={() => showToast('Calendar synced!', 'fa-rotate')}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'var(--card)',
                border: '1.5px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-2)',
                cursor: 'pointer',
                fontSize: '13px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#7c6cf8';
                e.currentTarget.style.borderColor = '#7c6cf8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-2)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              <i className="fas fa-rotate"></i>
            </button>

            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #7c6cf8, #ff6b8a)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontFamily: 'var(--font-outfit)',
              fontWeight: 700,
              fontSize: '13px',
              boxShadow: '0 2px 8px rgba(124,108,248,0.35)',
              marginLeft: '4px',
              cursor: 'pointer',
            }}>
              {userName.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main style={{ padding: '20px' }}>
          {renderPage()}
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <>
          <div
            onClick={() => setIsSidebarOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.5)',
              zIndex: 45,
            }}
          />
          <div
            style={{
              position: 'fixed',
              left: 0,
              top: 0,
              bottom: 0,
              width: '260px',
              background: 'var(--bg-2)',
              borderRight: '1px solid var(--border)',
              zIndex: 50,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Mobile sidebar content */}
            <div style={{ padding: '20px 16px 14px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'linear-gradient(135deg, #7c6cf8, #a855f7, #ff6b8a)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '12px', height: '12px', background: 'white', borderRadius: '50%' }}></div>
                </div>
                <span style={{ fontFamily: 'var(--font-outfit)', fontSize: '17px', fontWeight: 800, color: 'var(--text)' }}>Sphere<span style={{ color: '#7c6cf8' }}>.</span></span>
              </div>
              <button onClick={() => setIsSidebarOpen(false)} style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'var(--card)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-3)' }}>
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '11px', borderBottom: '1px solid var(--border)' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: 'linear-gradient(135deg, #7c6cf8, #ff6b8a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-outfit)', fontSize: '14px', fontWeight: 700, color: 'white' }}>
                {userName.charAt(0).toUpperCase()}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--text)' }}>{userName}</div>
                <div style={{ fontSize: '11.5px', color: 'var(--text-2)' }}>Pro Member</div>
              </div>
              <div style={{ padding: '3px 8px', borderRadius: '20px', background: 'rgba(45,212,160,0.15)', color: '#2dd4a0', fontSize: '10px', fontWeight: 700 }}>Online</div>
            </div>

            <nav style={{ flex: 1, overflowY: 'auto', padding: '12px 10px' }}>
              <div style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '1px', color: 'var(--text-3)', textTransform: 'uppercase', padding: '6px 10px 8px' }}>MAIN</div>
              {[...navItems.main, ...navItems.workspace, ...navItems.bottom].map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setActivePage(item.id); setIsSidebarOpen(false); }}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 12px',
                    borderRadius: '12px',
                    background: activePage === item.id ? 'rgba(124,108,248,0.12)' : 'transparent',
                    color: activePage === item.id ? '#7c6cf8' : 'var(--text-2)',
                    border: 'none',
                    cursor: 'pointer',
                    marginBottom: '2px',
                  }}
                >
                  <div style={{ width: '32px', height: '32px', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
                    <i className={`fas fa-${item.icon}`}></i>
                  </div>
                  <span style={{ fontSize: '13.5px', fontWeight: 600, flex: 1, textAlign: 'left' }}>{item.label}</span>
                  {(item as any).badge && (
                    <span style={{ fontSize: '10px', fontWeight: 700, padding: '2px 7px', borderRadius: '20px', background: (item as any).badgeColor === 'green' ? 'rgba(45,212,160,0.15)' : 'rgba(255,107,138,0.15)', color: (item as any).badgeColor === 'green' ? '#2dd4a0' : '#ff6b8a' }}>
                      {(item as any).badge}
                    </span>
                  )}
                </button>
              ))}
              <button
                onClick={() => { handleLogout(); setIsSidebarOpen(false); }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 12px',
                  borderRadius: '12px',
                  background: 'transparent',
                  color: '#ff6b6b',
                  border: 'none',
                  cursor: 'pointer',
                  marginTop: '8px',
                }}
              >
                <div style={{ width: '32px', height: '32px', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
                  <i className="fas fa-sign-out-alt"></i>
                </div>
                <span style={{ fontSize: '13.5px', fontWeight: 600 }}>Sign Out</span>
              </button>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}