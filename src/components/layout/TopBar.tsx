'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { useToast } from '@/contexts/ToastContext';

interface TopBarProps {
  title: string;
  subtitle: string;
  onMenuClick: () => void;
}

export function TopBar({ title, subtitle, onMenuClick }: TopBarProps) {
  const { theme, toggleTheme } = useTheme();
  const { showToast } = useToast();

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        height: '64px',
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 32px',
        gap: '16px',
        flexShrink: 0,
      }}
      className="md:px-8"
    >
      {/* Mobile menu button */}
      <button
        onClick={onMenuClick}
        className="lg:hidden"
        style={{
          width: '38px',
          height: '38px',
          borderRadius: '11px',
          background: 'var(--card)',
          border: '1.5px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-2)',
          cursor: 'pointer',
          flexShrink: 0,
          fontSize: '15px',
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = 'var(--color-sphere)';
          e.currentTarget.style.borderColor = 'var(--color-sphere)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'var(--text-2)';
          e.currentTarget.style.borderColor = 'var(--border)';
        }}
      >
        <i className="fas fa-bars" />
      </button>

      {/* Title Section */}
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '18px',
            fontWeight: 800,
            color: 'var(--text)',
            letterSpacing: '-0.4px',
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: '12.5px', color: 'var(--text-2)', marginTop: '1px' }}>
          {subtitle}
        </div>
      </div>

      {/* Search - Desktop only */}
      <div className="hidden md:block" style={{ position: 'relative', width: '320px' }}>
        <i
          className="fas fa-search"
          style={{
            position: 'absolute',
            left: '13px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--text-3)',
            fontSize: '13px',
            zIndex: 1,
          }}
        />
        <input
          type="text"
          placeholder="Search tasks, meetings..."
          style={{
            width: '100%',
            padding: '9px 14px 9px 40px',
            background: 'var(--card)',
            border: '1.5px solid var(--border)',
            borderRadius: '12px',
            color: 'var(--text)',
            fontSize: '13.5px',
            fontFamily: 'var(--font-dm)',
            outline: 'none',
            transition: 'border-color 0.2s',
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = '#7c6cf8';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'var(--border)';
          }}
        />
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* Theme Toggle */}
        <TopBarBtn
          onClick={toggleTheme}
          icon={theme === 'dark' ? 'fa-sun' : 'fa-moon'}
        />

        {/* Notifications */}
        <div style={{ position: 'relative' }}>
          <TopBarBtn
            onClick={() => showToast('Notifications opened', 'fa-bell')}
            icon="fa-bell"
          />
          <div
            style={{
              position: 'absolute',
              top: '5px',
              right: '5px',
              width: '8px',
              height: '8px',
              background: '#ff6b8a',
              borderRadius: '50%',
              border: '2px solid var(--nav-bg)',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Sync Button */}
        <TopBarBtn
          onClick={() => showToast('Calendar synced!', 'fa-rotate')}
          icon="fa-rotate"
        />

        {/* User Avatar */}
        <div
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '11px',
            background: 'linear-gradient(135deg, #7c6cf8, #ff6b8a)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontFamily: 'var(--font-outfit)',
            fontWeight: 700,
            fontSize: '14px',
            boxShadow: '0 2px 10px rgba(124,108,248,0.35)',
            marginLeft: '4px',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          F
        </div>
      </div>
    </header>
  );
}

function TopBarBtn({ onClick, icon }: { onClick: () => void; icon: string }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '38px',
        height: '38px',
        borderRadius: '11px',
        background: 'var(--card)',
        border: '1.5px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-2)',
        cursor: 'pointer',
        fontSize: '14px',
        transition: 'all 0.2s',
        flexShrink: 0,
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
      <i className={`fas ${icon}`}></i>
    </button>
  );
}