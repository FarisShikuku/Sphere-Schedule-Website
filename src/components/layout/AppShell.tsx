'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/contexts/ToastContext';

interface AppShellProps {
  children: React.ReactNode;
}

const pageTitles: Record<string, { title: string; subtitle: string }> = {
  '/dashboard': { title: 'Dashboard', subtitle: 'Overview of your activity' },
  '/tasks': { title: 'My Tasks', subtitle: 'Manage your to-do list' },
  '/calendar': { title: 'Calendar', subtitle: 'Your schedule at a glance' },
  '/meetings': { title: 'Meetings', subtitle: 'Upcoming and past meetings' },
  '/appointments': { title: 'Appointments', subtitle: 'Client and team appointments' },
  '/settings': { title: 'Settings', subtitle: 'Account preferences' },
  '/analytics': { title: 'Analytics', subtitle: 'Performance insights' },
  '/team': { title: 'Team', subtitle: 'Collaborate with your team' },
  '/notes': { title: 'Notes', subtitle: 'Quick notes and ideas' },
};

export function AppShell({ children }: AppShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const { showToast } = useToast();

  const currentPage = pageTitles[pathname] || { title: 'Dashboard', subtitle: '' };
  const userName = user?.firstName || user?.email?.split('@')[0] || 'User';

  const handleLogout = () => {
    logout();
    showToast('Signed out successfully', 'fa-sign-out-alt');
    // Redirect to landing page after logout
    window.location.href = '/';
  };

  const handlePageChange = (page: string) => {
    window.location.href = `/${page}`;
  };

  return (
    <div className="min-h-screen bg-bg">
      <Sidebar
        activePage={pathname.replace('/', '') || 'dashboard'}
        onPageChange={handlePageChange}
        userName={userName}
        onLogout={handleLogout}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <div className="lg:ml-[260px] transition-all duration-300">
        <TopBar
          title={currentPage.title}
          subtitle={currentPage.subtitle}
          onMenuClick={() => setIsSidebarOpen(true)}
        />
        <main className="p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}