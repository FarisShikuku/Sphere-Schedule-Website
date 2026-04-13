'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils/cn';
import { mainNavItems, workspaceNavItems, bottomNavItems } from '@/lib/constants/navigation';

interface SidebarProps {
  activePage: string;
  onPageChange: (page: string) => void;
  userName: string;
  onLogout: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ activePage, onPageChange, userName, onLogout, isOpen, onClose }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ background: 'rgba(0,0,0,0.5)' }}
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 50,
          background: 'var(--bg-2)',
          borderRight: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          width: isCollapsed ? 70 : 260,
          transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1), transform 0.3s',
          transform: isOpen ? 'translateX(0)' : undefined,
          overflow: 'hidden',
        }}
        className={cn(
          !isOpen && '-translate-x-full lg:translate-x-0'
        )}
      >
        {/* Header */}
        <div
          style={{
            padding: '20px 16px 14px',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, overflow: 'hidden', ...(isCollapsed && { justifyContent: 'center', width: '100%' }) }}>
            {/* Logo */}
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 10,
                background: 'linear-gradient(135deg, var(--color-sphere), #A855F7, var(--color-accent))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 3px 12px rgba(124,108,248,0.35)',
                flexShrink: 0,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ width: 12, height: 12, background: 'white', borderRadius: '50%', position: 'relative', zIndex: 1 }} />
            </div>
            {!isCollapsed && (
              <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 17, fontWeight: 800, color: 'var(--text)', whiteSpace: 'nowrap', letterSpacing: '-0.3px' }}>
                Sphere<span style={{ color: 'var(--color-sphere)' }}>.</span>
              </span>
            )}
          </div>

          {/* Collapse toggle — desktop only */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:flex"
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background: 'var(--card)',
              border: '1px solid var(--border)',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-3)',
              fontSize: 11,
              transition: 'all 0.2s',
              flexShrink: 0,
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-sphere)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-sphere)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-3)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)'; }}
          >
            <i className={`fas fa-chevron-${isCollapsed ? 'right' : 'left'}`} />
          </button>
        </div>

        {/* User info */}
        {!isCollapsed && (
          <div
            style={{
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 11,
              borderBottom: '1px solid var(--border)',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 12,
                background: 'linear-gradient(135deg, var(--color-sphere), var(--color-accent))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontFamily: 'var(--font-outfit)',
                fontSize: 14,
                fontWeight: 700,
                boxShadow: '0 3px 10px rgba(124,108,248,0.35)',
                flexShrink: 0,
              }}
            >
              {userInitial}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {userName}
              </div>
              <div style={{ fontSize: 11.5, color: 'var(--text-2)', marginTop: 1 }}>Pro Member</div>
            </div>
            <div
              style={{
                marginLeft: 'auto',
                flexShrink: 0,
                background: 'rgba(45,212,160,0.15)',
                color: 'var(--color-green)',
                fontSize: 10,
                fontWeight: 700,
                padding: '3px 8px',
                borderRadius: 20,
              }}
            >
              Online
            </div>
          </div>
        )}

        {/* Nav */}
        <nav style={{ flex: 1, overflowY: 'auto', padding: '12px 10px' }}>
          {/* Main section */}
          {!isCollapsed && (
            <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '1px', color: 'var(--text-3)', textTransform: 'uppercase', padding: '6px 10px 8px' }}>
              Main
            </div>
          )}
          {mainNavItems.map(item => (
            <NavBtn
              key={item.id}
              item={item}
              active={activePage === item.id}
              collapsed={isCollapsed}
              onClick={() => { onPageChange(item.id); onClose(); }}
            />
          ))}

          {/* Workspace section */}
          {!isCollapsed && (
            <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '1px', color: 'var(--text-3)', textTransform: 'uppercase', padding: '6px 10px 8px', marginTop: 16 }}>
              Workspace
            </div>
          )}
          {workspaceNavItems.map(item => (
            <NavBtn
              key={item.id}
              item={item}
              active={activePage === item.id}
              collapsed={isCollapsed}
              onClick={() => { onPageChange(item.id); onClose(); }}
            />
          ))}
        </nav>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid var(--border)', padding: '12px 10px', flexShrink: 0 }}>
          {bottomNavItems.map(item => (
            <NavBtn
              key={item.id}
              item={item}
              active={activePage === item.id}
              collapsed={isCollapsed}
              onClick={() => { onPageChange(item.id); onClose(); }}
            />
          ))}
          {/* Sign out */}
          <button
            onClick={onLogout}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '10px 12px',
              borderRadius: 12,
              cursor: 'pointer',
              background: 'transparent',
              border: 'none',
              color: 'rgba(255,107,107,0.7)',
              transition: 'all 0.2s',
              marginBottom: 2,
              fontFamily: 'var(--font-dm)',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--card)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-red)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,107,107,0.7)'; }}
          >
            <div style={{ width: 32, height: 32, borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0 }}>
              <i className="fas fa-sign-out-alt" />
            </div>
            {!isCollapsed && <span style={{ fontSize: 13.5, fontWeight: 600 }}>Sign Out</span>}
          </button>
        </div>
      </aside>
    </>
  );
}

function NavBtn({
  item,
  active,
  collapsed,
  onClick,
}: {
  item: { id: string; label: string; icon: string; badge?: string; badgeColor?: string };
  active: boolean;
  collapsed: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 12px',
        borderRadius: 12,
        cursor: 'pointer',
        border: 'none',
        background: active ? 'rgba(124,108,248,0.12)' : 'transparent',
        color: active ? 'var(--color-sphere)' : 'var(--text-2)',
        transition: 'all 0.2s',
        marginBottom: 2,
        fontFamily: 'var(--font-dm)',
        position: 'relative',
      }}
      onMouseEnter={e => {
        if (!active) {
          (e.currentTarget as HTMLButtonElement).style.background = 'var(--card)';
          (e.currentTarget as HTMLButtonElement).style.color = 'var(--text)';
        }
      }}
      onMouseLeave={e => {
        if (!active) {
          (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
          (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-2)';
        }
      }}
    >
      {/* Active indicator */}
      {active && (
        <div style={{ position: 'absolute', left: 0, top: 6, bottom: 6, width: 3, borderRadius: '0 3px 3px 0', background: 'var(--color-sphere)' }} />
      )}

      {/* Icon */}
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 9,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 14,
          flexShrink: 0,
          background: active ? 'rgba(124,108,248,0.15)' : 'transparent',
        }}
      >
        <i className={`fas fa-${item.icon}`} />
      </div>

      {!collapsed && (
        <>
          <span style={{ fontSize: 13.5, fontWeight: 600, flex: 1, textAlign: 'left' }}>{item.label}</span>
          {item.badge && (
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                padding: '2px 7px',
                borderRadius: 20,
                background: item.badgeColor === 'green' ? 'rgba(45,212,160,0.15)' : 'rgba(255,107,138,0.15)',
                color: item.badgeColor === 'green' ? 'var(--color-green)' : 'var(--color-accent)',
                flexShrink: 0,
              }}
            >
              {item.badge}
            </span>
          )}
        </>
      )}
    </button>
  );
}